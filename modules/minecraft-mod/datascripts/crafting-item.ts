import { std } from "tswow-stdlib"
import { MODNAME } from "./database-setup"
let item = std.Items.create(MODNAME,'multitool',40772)
item.Name.enGB.set('Axepickvel')
item.Description.enGB.set('This amazing creation by an old man is all the tools one could ever need and more.')
item.Spells.clearAll()
item.row.SellPrice.set(0)