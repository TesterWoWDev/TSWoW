import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"

let item = std.Items.create(MODNAME,'quest-item1',46875)
item.Name.enGB.set('1')
item.Description.enGB.set('1')
item.Flags.set(0)
item.FlagsExtra.set(0)
item.RequiredLevel.set(1)
item.StartQuest.set(1)//questID