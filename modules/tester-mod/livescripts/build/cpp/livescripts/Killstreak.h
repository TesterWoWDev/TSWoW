#ifndef LIVESCRIPTS_KILLSTREAK_H
#define LIVESCRIPTS_KILLSTREAK_H
#include "TSAll.h"
#include "ModID.h"


class PlayerKillstreak;

extern TSString TABLE_NAME_KILLSTREAK;
class PlayerKillstreak : public DBTable, public std::enable_shared_from_this<PlayerKillstreak> {
public:
    using std::enable_shared_from_this<PlayerKillstreak>::shared_from_this;
    PlayerKillstreak(uint32 playerGUID);
    uint32 playerGUID = 0;

    int32 killCount = 0;

    TSString loadQuery(){
        return JSTR("SELECT * FROM `PlayerKillstreak` WHERE `playerGUID` = ")+this->playerGUID+JSTR(";");
    }
    
    TSString saveQuery(){
        return JSTR("INSERT INTO `playerkillstreak` VALUES ( ") + this->playerGUID + JSTR(" , ") + this->killCount + JSTR(") ON DUPLICATE KEY UPDATE `playerGUID` = ") + this->playerGUID + JSTR(" , `killCount` = ") + this->killCount + JSTR(";");
    }
    
    TSString removeQuery() {
        return JSTR("DELETE FROM `playerkillstreak` WHERE `playerGUID` = ")+this->playerGUID+JSTR(";");
    }
    void save() {QueryCharacters(saveQuery());}

    void remove() {QueryCharacters(removeQuery());}

    static TSString LoadQuery(TSString query){
        return JSTR("SELECT * from playerkillstreak WHERE ") + query + JSTR(";");
    }
    
    static TSArray<std::shared_ptr<PlayerKillstreak>> Load(TSString query){
        auto arr = TSArray<std::shared_ptr<PlayerKillstreak>>{};
        auto res = QueryCharacters(LoadQuery(query));
        while(res->GetRow())
        {
            auto obj = std::make_shared<PlayerKillstreak>();
            obj->playerGUID = res->GetUInt32(0);
            obj->killCount = res->GetInt32(1);
            arr.push(obj);
        }
        return arr;
    }
    PlayerKillstreak() : DBTable() {}
    TSString stringify(int indention = 0) override {
        return JSTR("PlayerKillstreak {\n") +spaces(indention+1) + JSTR("playerGUID:")+::stringify(this->playerGUID,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("killCount:")+::stringify(this->killCount,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

void Killstreaks(TSEventHandlers *  events);

const struct ___livescripts_Killstreak_ts {___livescripts_Killstreak_ts();} ____livescripts_Killstreak_ts;
#endif
