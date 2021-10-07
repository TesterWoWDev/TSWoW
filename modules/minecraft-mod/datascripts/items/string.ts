import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { MODNAME } from "../modname"

export let stringItem = std.Items.create(MODNAME,'string', 2934)
    stringItem.Name.enGB.set('String')
    stringItem.DisplayInfo.setID(58198)
    stringItem.Description.enGB.set('A unique piece of string.')



SQL.Databases.world_dest.write('UPDATE `item_template` SET `armor` = (armor * 0.1) WHERE `entry` > 0)')
SQL.Databases.world_dest.write('UPDATE `item_template` SET `itemlevel` = (requiredlevel * 3) WHERE `entry` > 0')