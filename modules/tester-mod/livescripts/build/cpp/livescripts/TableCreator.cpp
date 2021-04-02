#include "TSDatabase.h"
#include <fstream>
#include <iostream>
#include <algorithm>
#include <string>
#include <cstdlib>
#define COLUMN_NAME_INDEX 3
#define COLUMN_TYPE_INDEX 15

void ask(std::string msg){
    std::cout << msg << ", this is a destructive operation.\n";
}
void WriteTables(){
    {
        // PlayerKillstreak
        bool should_create = true;
        auto db = CharactersDatabaseInfo()->Database().std_str();
        auto rows = QueryWorld(JSTR("SELECT * from `information_schema`.`COLUMNS` WHERE `TABLE_SCHEMA`= \""+ db + "\" AND `TABLE_NAME` = \"PlayerKillstreak\";"));
        if(rows->GetRow()){
            should_create = false;
            bool found_playerGUID = false;
            bool found_killCount = false;
            do {
                auto column = rows->GetString(COLUMN_NAME_INDEX).std_str();
                auto was_pk = QueryWorld(JSTR( "SELECT * from `information_schema`.`KEY_COLUMN_USAGE` WHERE `CONSTRAINT_SCHEMA` = \""+db+"\" and `TABLE_NAME` = \"PlayerKillstreak\" and `COLUMN_NAME` = \""+column+"\" ;"))->GetRow();
                if (column == "playerGUID"){
                    found_playerGUID = true;
                    auto type = rows->GetString(COLUMN_TYPE_INDEX).std_str();
                    std::transform(type.begin(), type.end(), type.begin(), std::toupper);
                    if (type != "INT(10) UNSIGNED"){
                        if (type == "TEXT")
                        {
                            ask("PlayerKillstreak:"+column+" changed type from "+type+" to uint32");
                            QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` DROP `"+column+"`;"));
                            QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` ADD `"+column+"` INT UNSIGNED;"));
                        }
                         else {
                            if (was_pk) {
                                ask("PlayerKillstreak:"+column+" changed type from "+type+" to uint32 and was a primary key (whole db will be destroyed)");
                                should_create = true;
                                break;
                            }
                            ask("PlayerKillstreak:"+column+" changed type from "+type+" to uint32");
                            QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` MODIFY `playerGUID` INT UNSIGNED;"));
                        }
                    }
                } else if (column == "killCount"){
                    found_killCount = true;
                    auto type = rows->GetString(COLUMN_TYPE_INDEX).std_str();
                    std::transform(type.begin(), type.end(), type.begin(), std::toupper);
                    if (type != "INT(11)"){
                        if (type == "TEXT")
                        {
                            ask("PlayerKillstreak:"+column+" changed type from "+type+" to int32");
                            QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` DROP `"+column+"`;"));
                            QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` ADD `"+column+"` INT;"));
                        }
                         else {
                            if (was_pk) {
                                ask("PlayerKillstreak:"+column+" changed type from "+type+" to int32 and was a primary key (whole db will be destroyed)");
                                should_create = true;
                                break;
                            }
                            ask("PlayerKillstreak:"+column+" changed type from "+type+" to int32");
                            QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` MODIFY `killCount` INT;"));
                        }
                    }
                } else {
                    ask("PlayerKillstreak:"+column+" was removed");
                    QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` DROP `"+rows->GetString(COLUMN_NAME_INDEX)+"`;"));
                }
            } while(rows->GetRow());
            if( !should_create && !found_playerGUID ){
                ask("PlayerKillstreak: new primary key playerGUID missing, need to rebuild database.");
                should_create = true;
            }
            if( !should_create && !found_killCount ){
                QueryCharacters(JSTR("ALTER TABLE `PlayerKillstreak` ADD `killCount` INT;"));
            }
        }
        if (should_create){
            QueryCharacters(JSTR("DROP TABLE IF EXISTS `PlayerKillstreak`;"));
            QueryCharacters(JSTR("CREATE TABLE `PlayerKillstreak` (`playerGUID` INT UNSIGNED, `killCount` INT, PRIMARY KEY (playerGUID));"));
        }
        QueryCharacters(JSTR("UPDATE `PlayerKillstreak` SET killCount = 0 WHERE killCount IS NULL;"));
    }
}
