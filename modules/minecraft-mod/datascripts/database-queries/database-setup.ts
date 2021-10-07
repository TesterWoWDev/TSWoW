import { SQL } from "wotlkdata/sql/SQLFiles"

SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `minecraft_recipes`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `minecraft_recipes` (`pos1` int(11) DEFAULT NULL,`pos2` int(11) DEFAULT NULL,`pos3` int(11) DEFAULT NULL,`pos4` int(11) DEFAULT NULL,`pos5` int(11) DEFAULT NULL,`pos6` int(11) DEFAULT NULL,`pos7` int(11) DEFAULT NULL,`pos8` int(11) DEFAULT NULL,`pos9` int(11) DEFAULT NULL,`req1` int(11) DEFAULT NULL,`cnt1` int(11) DEFAULT NULL,`req2` int(11) DEFAULT NULL,`cnt2` int(11) DEFAULT NULL,`req3` int(11) DEFAULT NULL,`cnt3` int(11) DEFAULT NULL,`req4` int(11) DEFAULT NULL,`cnt4` int(11) DEFAULT NULL,`req5` int(11) DEFAULT NULL,`cnt5` int(11) DEFAULT NULL,`req6` int(11) DEFAULT NULL,`cnt6` int(11) DEFAULT NULL,`req7` int(11) DEFAULT NULL,`cnt7` int(11) DEFAULT NULL,`req8` int(11) DEFAULT NULL,`cnt8` int(11) DEFAULT NULL,`req9` int(11) DEFAULT NULL,`cnt9` int(11) DEFAULT NULL,`craftID` int(11) DEFAULT NULL, `craftCount` int(11) DEFAULT NULL)')

SQL.Databases.world_dest.writeEarly('DELETE FROM `item_enchantment_template` WHERE entry >= 8700')
SQL.Databases.world_dest.writeEarly('DELETE FROM `creature_equip_template` WHERE creatureID >= 100000')

//invasions
SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `invasions`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `invasions` (`eventID` int(11) DEFAULT NULL,`isCreature` int(11) DEFAULT NULL,`entry` int(11) DEFAULT NULL,`x` float DEFAULT NULL,`y` float DEFAULT NULL,`z` float DEFAULT NULL,`o` float DEFAULT NULL)')
SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `invasions_bosses`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `invasions_bosses` (`tier` int(11) DEFAULT NULL,`entry` int(11) DEFAULT NULL)')
SQL.Databases.world_dest.writeEarly('DROP TABLE IF EXISTS `invasions_spawners`')
SQL.Databases.world_dest.writeEarly('CREATE TABLE `invasions_spawners` (`entry` int(11) DEFAULT NULL,`x` float DEFAULT NULL,`y` float DEFAULT NULL,`z` float DEFAULT NULL,`o` float DEFAULT NULL)')

SQL.Databases.world_source.writeEarly('DELETE FROM `creature_loot_template` WHERE Entry = 299')

SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `armor` = (armor * 0.1) WHERE `entry` > 0')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `itemlevel` = (requiredlevel * 8.759) WHERE `entry` > 0')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `socketcolor_1` = (0) WHERE `entry` > 0')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `socketcolor_2` = (0) WHERE `entry` > 0')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `socketcolor_3` = (0) WHERE `entry` > 0')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `socketbonus` = (0) WHERE `entry` > 0')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `ammo_type` = (2) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (2)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `ammo_type` = (2) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (3)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `ammo_type` = (2) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (18)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `spellid_5` = (46699) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (2)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `spellid_5` = (46699) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (3)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `spellid_5` = (46699) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (18)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `spelltrigger_5` = (1) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (2)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `spelltrigger_5` = (1) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (3)')
SQL.Databases.world_source.writeEarly('UPDATE `item_template` SET `spelltrigger_5` = (1) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (18)')

SQL.game_tele.add(1450).position_x.set(-8750.45).position_y.set(-74.6418).position_z.set(31.1351).map.set(725).name.set('start')

//in bin/sql/custom/world/item_level setup is a auto-set required level sql
//as well as item required rep and skills