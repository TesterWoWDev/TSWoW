import { SQL } from "wotlkdata/sql/SQLFiles"

SQL.Databases.world_dest.writeEarly('TRUNCATE TABLE IF EXISTS `minecraft_recipes`')
//invasions
SQL.Databases.world_dest.writeEarly('TRUNCATE TABLE IF EXISTS `invasions`')
SQL.Databases.world_dest.writeEarly('TRUNCATE TABLE IF EXISTS `invasions_bosses`')
SQL.Databases.world_dest.writeEarly('TRUNCATE TABLE IF EXISTS `invasions_spawners`')

//clears
SQL.Databases.world_dest.writeEarly('DELETE FROM `item_enchantment_template` WHERE entry >= 8700')
SQL.Databases.world_dest.writeEarly('DELETE FROM `creature_equip_template` WHERE creatureID >= 100000')
SQL.Databases.world_source.writeEarly('DELETE FROM `creature_loot_template` WHERE Entry = 299')

SQL.game_tele.add(1450).position_x.set(-8750.45).position_y.set(-74.6418).position_z.set(31.1351).map.set(725).name.set('start')

//2 custom sql files in bin/sql/custom/world