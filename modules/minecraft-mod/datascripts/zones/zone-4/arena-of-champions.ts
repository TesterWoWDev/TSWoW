import { GameObjectChest } from "tswow-stdlib/GameObject/Types/GameObjectChest"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnGob } from "../../functions/spawning-functions"
import { tierFourBaseResources, tierFourMailMaterial, tierFourLeatherMaterial, tierFourClothMaterial } from "../../items/armor/tier4-set"
import { LargeSackofCoins, MassiveSackofCoins, SmallSackofCoins } from "../../items/currencies"
import { EyeofGruul, DragonspineTrophy, MoroesLuckyPocketWatch, RomulosPoisonVial, LightningCapacitor, VioletEye, Sulfuras, Thunderfury, WarglaiveMH, WarglaiveOH, Thoridal } from "./zone-4-items"

export let ArenaofChampionsChest = makeResourceNode('Arena Champion\'s Chest',259,57,'arenachampion-chest')
ArenaofChampionsChest.Size.set(1.25)
addLoot(ArenaofChampionsChest,tierFourBaseResources,[10,10,10,10,10,10,10])
/*Base Resources - Group 5*/  
addLootSingleChanceMultiGroup(ArenaofChampionsChest,[
    tierFourMailMaterial,            tierFourLeatherMaterial,             tierFourClothMaterial]
,33,5,5,5)
/*Epic Items - Group 4*/      
addLootSingleChance(ArenaofChampionsChest,[
    EyeofGruul.ID,                   DragonspineTrophy.ID,                MoroesLuckyPocketWatch.ID,
    RomulosPoisonVial.ID,            LightningCapacitor.ID,               VioletEye.ID,
],16.5,4)
/*Legendary Items - Group 6*/      
addLootSingleChance(ArenaofChampionsChest,[
    Sulfuras.ID,                     Thunderfury.ID,                      WarglaiveMH.ID,
    WarglaiveOH.ID,                  Thoridal.ID
],1,6)
/*Money Bags*/
addLoot(ArenaofChampionsChest,[SmallSackofCoins.ID,LargeSackofCoins.ID,MassiveSackofCoins.ID],[0,0,100],8)




spawnGob(ArenaofChampionsChest.ID,[-8595.069,1488.233,-75.437,5.249]) // Chest Spawn (Needs a Timer)






























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

function addLootSingleChance(chest: GameObjectChest,items:number[],chance:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chance > 0) {
            chest.Loot.addItem(value,chance,1,1,false,groupID,1)
        }
    })
}

function addLootSingleChanceMultiGroup(chest: GameObjectChest,items:number[],chance:number,min:number,max:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chance > 0) {
            chest.Loot.addItem(value,chance,min,max,false,groupID,1)
        }
    })
}