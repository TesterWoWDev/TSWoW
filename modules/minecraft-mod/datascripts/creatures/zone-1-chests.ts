import { std } from "tswow-stdlib"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { MODNAME } from "../modname"

let Chest1 = std.GameObjectTemplates.create(MODNAME,'test-Chest1-chest',2843).setChest()
let Chest1Loot = Chest1.Loot
Chest1.Name.enGB.set('Battered Chest')
Chest1.Display.setID(259)
Chest1.Loot.addItem(tierOneMailMaterial,10,1,2)//id,chance,min,max
Chest1.Loot.addItem(tierOneLeatherMaterial,10,1,2)//id,chance,min,max
Chest1.Loot.addItem(tierOneClothMaterial,10,1,2)//id,chance,min,max


//gob.Loot.addItem(1,1,1,1,true)//id,chance,min,max,questRequired
