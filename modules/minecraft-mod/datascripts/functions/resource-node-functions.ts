import { std } from "tswow-stdlib"
import { GameObjectChest } from "tswow-stdlib/GameObject/Types/GameObjectChest"
import { MODNAME } from "../modname"
import { SQL } from "wotlkdata/sql/SQLFiles";
import { Pos } from "tswow-stdlib/Misc/Position";
//lockID-mining skill required
// 38-0
// 18-25
// 19-50
// 20-75
// 21-100
// 22-125
// 25-150
// 379-175
// 380-205
// 400-230
// 939-255
// 1649-275
// 1632-305
// 1650-325
// 1652-350
// 1651-375

export function makeResourceNode(name:string,displayID:number,lockID:number,modPrefix:string):GameObjectChest{
    let resourceNode = std.GameObjectTemplates.create(MODNAME,modPrefix + name.toLowerCase().replace(' ','-')).setChest()
    resourceNode.Name.enGB.set(name)
    resourceNode.Display.setID(displayID)//currently copper vein
    resourceNode.Lock.setID(lockID)
    resourceNode.Size.set(0.5)
    resourceNode.RestockTime.set(0)
    resourceNode.IsConsumable.set(1)
    resourceNode.row.Data4.set(1)
    resourceNode.row.Data5.set(1)
    return resourceNode
}

export function setupMiningNode(miningNode: GameObjectChest, metalID: number, refinedMetalID: number, armorGem:number, gemIDArray: number[][]):number {
    miningNode.Loot.addItem(metalID,50,1,2)
    miningNode.Loot.addItem(refinedMetalID,20,1,2)
    miningNode.Loot.addItem(armorGem,5,1,1)
    gemIDArray.forEach((value: number[],index,arr)=>{//all gem colors
        value.forEach(element => {//specific gem colors
            miningNode.Loot.addItem(element,1,1,0.1)//specific gems
        });
    })
    return miningNode.row.entry.get()
}

export function makePool(poolEntry:number, node: GameObjectChest, maxLimit:number, respawnRate:number, gobPositions:number[][]){
    SQL.pool_template.add(poolEntry).max_limit.set(maxLimit)
    gobPositions.forEach((element,index) => {
        let gobGUID = node.spawn(MODNAME,poolEntry+'spawn'+index,Pos(725,element[0],element[1],element[2],element[3]))
        gobGUID.SpawnTimeSecs.set(respawnRate)
        SQL.pool_members.add(1,gobGUID.row.guid.get()).poolSpawnId.set(poolEntry).chance.set(100)
    })
}