import { SQL } from "wotlkdata/sql/SQLFiles"

SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `minecraft_recipes`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `minecraft_recipes` (`pos1` int(11) DEFAULT NULL,`pos2` int(11) DEFAULT NULL,`pos3` int(11) DEFAULT NULL,`pos4` int(11) DEFAULT NULL,`pos5` int(11) DEFAULT NULL,`pos6` int(11) DEFAULT NULL,`pos7` int(11) DEFAULT NULL,`pos8` int(11) DEFAULT NULL,`pos9` int(11) DEFAULT NULL,`req1` int(11) DEFAULT NULL,`cnt1` int(11) DEFAULT NULL,`req2` int(11) DEFAULT NULL,`cnt2` int(11) DEFAULT NULL,`req3` int(11) DEFAULT NULL,`cnt3` int(11) DEFAULT NULL,`req4` int(11) DEFAULT NULL,`cnt4` int(11) DEFAULT NULL,`req5` int(11) DEFAULT NULL,`cnt5` int(11) DEFAULT NULL,`req6` int(11) DEFAULT NULL,`cnt6` int(11) DEFAULT NULL,`req7` int(11) DEFAULT NULL,`cnt7` int(11) DEFAULT NULL,`req8` int(11) DEFAULT NULL,`cnt8` int(11) DEFAULT NULL,`req9` int(11) DEFAULT NULL,`cnt9` int(11) DEFAULT NULL,`craftID` int(11) DEFAULT NULL, `craftCount` int(11) DEFAULT NULL)')
SQL.Databases.world_dest.writeEarly('DELETE FROM `item_enchantment_template` WHERE entry >= 8700')
// SQL.item_template.filter({}).forEach((value,index,arr)=>{
//     if(value.RequiredLevel.get() != null)
//     if(value.RequiredLevel.get() < 60){
//         value.RequiredLevel.set(20)
//     }else if(value.RequiredLevel.get() < 70){
//         value.RequiredLevel.set(30)
//     }else{
//         value.RequiredLevel.set(40)
//     }
// })