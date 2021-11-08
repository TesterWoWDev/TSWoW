import { GameObjectChest } from "tswow-stdlib/GameObject/GameObjectTemplate"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnGobTimer } from "../../functions/spawning-functions"
import { tierFourBaseResources, tierFourMailMaterial, tierFourLeatherMaterial, tierFourClothMaterial } from "../../items/armor/tier4-set"
import { SmallSackofCoins, LargeSackofCoins, MassiveSackofCoins } from "../../items/currencies"
import { EyeofGruul, DragonspineTrophy, MoroesLuckyPocketWatch, RomulosPoisonVial, LightningCapacitor, VioletEye, Sulfuras, Thunderfury, WarglaiveMH, WarglaiveOH, Thoridal } from "../item-manifest"

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




spawnGobTimer(ArenaofChampionsChest.ID,{map:725,x:-8595.069,y:1488.233,z:-75.437,o:5.249}
    ,60000) // Chest Spawn (Needs a Timer)
// Make it go by world time, every day, a chest will spawn at 7:00AM EST and 7:00PM EST
// Monday = 7-7
// Tuesday = 5-5
// Wednesday = 3-3
// Thursday = 1-1
// Friday = 11-11
// Saturday = 11-11
// Sunday = 9-9



function addLoot(chest: GameObjectChest, items: number[], chances: number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    chest.Loot.modRefCopy(table=>{
        items.forEach((value,index)=>{
            if(chances[index] > 0) {
                table.addItem(value,chances[index],1,1,false,groupID,1)
            }
        })
    })

}

function addLootSingleChance(chest: GameObjectChest,items:number[],chance:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    chest.Loot.modRefCopy(table=>{
        items.forEach((value,index)=>{
            table.addItem(value,chance,1,1,false,groupID,1)
        })
    })
}

function addLootSingleChanceMultiGroup(chest: GameObjectChest,items:number[],chance:number,min:number,max:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    chest.Loot.modRefCopy(table=>{
        items.forEach((value,index)=>{
            if(chance > 0) {
                table.addItem(value,chance,min,max,false,groupID,1)
            }
        })
    })
}