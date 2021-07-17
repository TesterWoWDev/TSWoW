import { std } from "tswow-stdlib"
import { GameObjectChest } from "../../../tswow-stdlib/datascripts/build/GameObject/Types/GameObjectChest"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { MODNAME } from "../modname"

let Chest1 = std.GameObjectTemplates.create(MODNAME,'test-Chest1-chest',2843).setChest()
export let Chest1Loot = Chest1.Loot
Chest1.Name.enGB.set('Battered Chest')
Chest1.Display.setID(259)
Chest1.Loot.addItem(tierOneMailMaterial,10,1,2)//id,chance,min,max
Chest1.Loot.addItem(tierOneLeatherMaterial,10,1,2)//id,chance,min,max
Chest1.Loot.addItem(tierOneClothMaterial,10,1,2)//id,chance,min,max
addLoot(Chest1,[1,1],[1,1])
addLootSingleChance(Chest1,[1,1],1)


function addLoot(chest: GameObjectChest, items: number[], chances: number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            chest.Loot.addItem(value,chances[index],1,1,false,groupID,0)
        }
    })

}

function addLootSingleChance(chest: GameObjectChest,items:number[],chance:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chance > 0) {
            chest.Loot.addItem(value,chance,1,1,false,groupID,0)
        }
    })
}
