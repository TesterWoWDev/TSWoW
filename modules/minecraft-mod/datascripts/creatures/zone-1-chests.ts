import { std } from "tswow-stdlib"
import { GameObjectChest } from "../../../tswow-stdlib/datascripts/build/GameObject/Types/GameObjectChest"
import { makeResourceNode } from "../functions/resource-node-functions"
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { MODNAME } from "../modname"


let Chest1 = makeResourceNode('Small Chest',259,57,'test-Chest1-chest')
Chest1.Size.set(0.75)
addLoot(Chest1,tierOneBaseResources,[4,3,1,2,2,5,3])
/*Base Resources*/  addLootSingleChance(Chest1,[tierOneMailMaterial,tierOneLeatherMaterial,tierOneClothMaterial],10)            //Group 0
/*Epic Items*/      addLootSingleChance(Chest1,[869,1982,870,868,873,1204,2825,1980,2164,11684,18203,18202],0.0125)             //Group 0
/*Rare Items*/      addLootSingleChance(Chest1,[13218,13183,11121,6904,1481,1482,6909,9412,9419,7719,7718,10330,34227,          //Group 0
    7711,7712,11726,11728,11729,11730,11731,11608,22301,22302,22303,22304,22305,22306,22311,22313,
    11920,11810,11817,11669,11809,11832,11808],0.2)
/*Green Armor*/     addLootSingleChance(Chest1,[2307,2308,2312,4243,4246,2300,2309,2310,4239,4242,4319,4324,7046,7048,          //Group 1
    7052,7053,7055,7056,7058,7059,7062,7063,7064,2869,3481,3482,3483,7913,7914,7915,7916,7917],3,1)
/*Green Weps*/      addLootSingleChance(Chest1,[12777,7943,12260,1937,2169,872,5187,5443,3902,5201,5200,5192,5196               //Group 2
    ,7230,5197,5198,2942,2941,2280,5426,13245,6447,5404,5423,6473,10410,10411,10412,10413],3,2)
/*Miscellaneous*/   addLootSingleChanceMultiGroup(Chest1,[2455,118,2456,4596,858,2459,5631,6372,3385],11,1,2,3)                 //Group 3
/*Buff Scrolls*/    addLootSingleChanceMultiGroup(Chest1,[37098,43468,43464,37092,37094,43466],15,1,3,4)                        //Group 4






































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
function addLootMultiDrop(chest: GameObjectChest, items: number[], chances: number[],min:number[],max:number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            chest.Loot.addItem(value,chances[index],min[index],max[index],false,groupID,1)
        }
    })
}

function addLootSingleChanceMultiDrop(chest: GameObjectChest,items:number[],chance:number,min:number[],max:number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chance > 0) {
            chest.Loot.addItem(value,chance,min[index],max[index],false,groupID,1)
        }
    })
}



function addLootMultiGroup(chest: GameObjectChest, items: number[], chances: number[],min:number,max:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            chest.Loot.addItem(value,chances[index],min,max,false,groupID,1)
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