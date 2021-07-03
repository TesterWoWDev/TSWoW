import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"
let item = std.Items.create(MODNAME,'multitool',40772)
item.Name.enGB.set('Axepickvel')
item.Description.enGB.set('This amazing creation by an old man is all the tools one could ever need and more.')
item.Spells.clearAll()
item.row.SellPrice.set(0)

std.Items.load(20880).MaxStack.set(200)
std.Items.load(20880).Price.set(100000,100001)