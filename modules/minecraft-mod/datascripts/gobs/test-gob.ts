import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"

let gob = std.GameObjectTemplates.create(MODNAME,'test-gob-chest',2843).setChest()
gob.Name.enGB.set('')
gob.Display.setID(259)
gob.Loot.addItem(1,1,1,1)//id,chance,min,max
gob.Loot.addItem(1,1,1,1,true)//id,chance,min,max,questRequired