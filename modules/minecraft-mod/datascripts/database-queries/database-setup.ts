import { SQL } from "wotlkdata/sql/SQLFiles"

SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `minecraft_recipes`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `minecraft_recipes` (`pos1` int(11) DEFAULT NULL,`pos2` int(11) DEFAULT NULL,`pos3` int(11) DEFAULT NULL,`pos4` int(11) DEFAULT NULL,`pos5` int(11) DEFAULT NULL,`pos6` int(11) DEFAULT NULL,`pos7` int(11) DEFAULT NULL,`pos8` int(11) DEFAULT NULL,`pos9` int(11) DEFAULT NULL,`req1` int(11) DEFAULT NULL,`cnt1` int(11) DEFAULT NULL,`req2` int(11) DEFAULT NULL,`cnt2` int(11) DEFAULT NULL,`req3` int(11) DEFAULT NULL,`cnt3` int(11) DEFAULT NULL,`req4` int(11) DEFAULT NULL,`cnt4` int(11) DEFAULT NULL,`req5` int(11) DEFAULT NULL,`cnt5` int(11) DEFAULT NULL,`req6` int(11) DEFAULT NULL,`cnt6` int(11) DEFAULT NULL,`req7` int(11) DEFAULT NULL,`cnt7` int(11) DEFAULT NULL,`req8` int(11) DEFAULT NULL,`cnt8` int(11) DEFAULT NULL,`req9` int(11) DEFAULT NULL,`cnt9` int(11) DEFAULT NULL,`craftID` int(11) DEFAULT NULL, `craftCount` int(11) DEFAULT NULL)')
SQL.Databases.world_dest.writeEarly('INSERT INTO `disables` VALUES (6, 723, 2, "723", "", "Disable Vmap - Creatures on Map 723");');
SQL.disables.add(6,723).flags.set(2).params_0.set("723").params_1.set("").comment.set('disable vmap 723')
SQL.Databases.world_dest.writeEarly('DELETE FROM `item_enchantment_template` WHERE entry >= 8700')

SQL.Databases.world_dest.writeEarly('DELETE FROM `creature_equip_template` WHERE creatureID >= 100000')
//invasions
SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `invasions`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `invasions` (`eventID` int(11) DEFAULT NULL,`isCreature` int(11) DEFAULT NULL,`entry` int(11) DEFAULT NULL,`x` float DEFAULT NULL,`y` float DEFAULT NULL,`z` float DEFAULT NULL,`o` float DEFAULT NULL)')
SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `invasions_bosses`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `invasions_bosses` (`tier` int(11) DEFAULT NULL,`entry` int(11) DEFAULT NULL)')
SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `invasions_spawners`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `invasions_spawners` (`entry` int(11) DEFAULT NULL,`x` float DEFAULT NULL,`y` float DEFAULT NULL,`z` float DEFAULT NULL,`o` float DEFAULT NULL)')
SQL.creature_loot_template.filter({Entry:299}).forEach((value)=>{
    value.Chance.set(0)
})
SQL.game_tele.add(1450).position_x.set(-8750.45).position_y.set(-74.6418).position_z.set(31.1351).map.set(723).name.set('start')
//in bin/sql/custom/world/item_level setup is a auto-set required level sql
//as well as item required rep and skills