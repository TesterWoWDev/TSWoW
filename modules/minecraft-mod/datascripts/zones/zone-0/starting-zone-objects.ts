import { makeResourceNode } from "../../functions/resource-node-functions";
import { spawnGob, spawnGobTimer } from "../../functions/spawning-functions";
import { GameObjectChest } from "tswow-stdlib/GameObject/Types/GameObjectChest"
import { SQL } from "wotlkdata/sql/SQLFiles";
import { AgathasLockbox } from "./starting-zone-items";

export let StolenLockbox = makeResourceNode('Agatha\'s Stolen Lockbox',259,57,'stolenlockbox-chest')
StolenLockbox.Size.set(0.5)
spawnGobTimer(StolenLockbox.ID,[-8670.00,-14.301,31.26,4.64],10) // Agatha's Stolen Lockbox in Starting Zone
/*Quest Items Loot*/
addLoot(StolenLockbox,[AgathasLockbox.ID],[100],7)
SQL.gameobject_loot_template.add(StolenLockbox.ID,AgathasLockbox.ID).QuestRequired.set(1)



























































function addLoot(chest: GameObjectChest, items: number[], chances: number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            chest.Loot.addItem(value,chances[index],1,1,false,groupID,1)
        }
    })

}