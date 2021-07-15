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

export function makeMiningNode(name:string,displayID:number,lockID:number,modPrefix:string):GameObjectChest{
    let miningNode = std.GameObjectTemplates.create(MODNAME,modPrefix + name.toLowerCase().replace(' ','-')).setChest()
    miningNode.Name.enGB.set(name)
    miningNode.Display.setID(displayID)//currently copper vein
    miningNode.Lock.setID(lockID)
    miningNode.Size.set(0.5)
    miningNode.RestockTime.set(0)
    miningNode.IsConsumable.set(1)
    miningNode.row.Data4.set(1)
    miningNode.row.Data5.set(1)
    return miningNode
}

export function setupMiningNode(miningNode: GameObjectChest, metalID: number, refinedMetalID: number, armorGem:number, gemIDArray: number[][]):number {
    miningNode.Loot.addItem(metalID,100,1,2)
    miningNode.Loot.addItem(refinedMetalID,50,1,2)
    miningNode.Loot.addItem(armorGem,10,1,1)
    gemIDArray.forEach((value: number[],index,arr)=>{//all gem colors
        value.forEach(element => {//specific gem colors
            miningNode.Loot.addItem(element,1,1,1)//specific gems
        });
    })
    return miningNode.ID
}   

export function addPoolMembers(poolEntry:number,gobID:number, gobPositions:number[][]){
    let gob = std.GameObjectTemplates.load(gobID)
    gobPositions.forEach((element,index) => {
        let gobGUID = gob.spawn(MODNAME,gobID+'spawn'+index,Pos(723,element[0],element[1],element[2],element[3]))
        SQL.pool_members.add(1,gobGUID.row.guid.get()).poolSpawnId.set(poolEntry)
    })
}

export function makePool(poolEntry:number,maxLimit:number){
    SQL.pool_template.add(poolEntry).max_limit.set(maxLimit)
    return poolEntry
}