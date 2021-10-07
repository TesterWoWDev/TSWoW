import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { MODNAME } from "../modname"

export let stringItem = std.Items.create(MODNAME,'string', 2934)
    stringItem.Name.enGB.set('String')
    stringItem.DisplayInfo.setID(58198)
    stringItem.Description.enGB.set('A unique piece of string.')

SQL.Databases.world_dest.write('UPDATE `item_template` SET `armor` = (armor * 0.1) WHERE `entry` > 0)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `itemlevel` = (requiredlevel * 8.759) WHERE `entry` > 0')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `socketcolor_1` = (0) WHERE `entry` > 0')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `socketcolor_2` = (0) WHERE `entry` > 0')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `socketcolor_3` = (0) WHERE `entry` > 0')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `socketbonus` = (0) WHERE `entry` > 0')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `ammotype` = (2) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (2)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `ammotype` = (2) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (3)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `ammotype` = (2) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (18)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `spellid_5` = (46699) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (2)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `spellid_5` = (46699) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (3)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `spellid_5` = (46699) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (18)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `spelltrigger_5` = (1) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (2)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `spelltrigger_5` = (1) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (3)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `spelltrigger_5` = (1) WHERE `entry` > 0 AND `class` = (2) AND `subclass` = (18)')
