import { std } from "tswow-stdlib"
import { GameObjectChest } from "tswow-stdlib/GameObject/Types/GameObjectChest"
import { MODNAME } from "../database-setup"
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

//setupMiningNode(makeMiningNode(name,displayID,lockID,modPrefix),metalID,refinedMetalID,[gem1,gem2,gem3])

export function makeMiningNode(name:string,displayID:number,lockID:number,modPrefix:string):GameObjectChest{
    let miningNode = std.GameObjectTemplates.create(MODNAME,modPrefix,1731).setChest()
    miningNode.Name.enGB.set(name)
    miningNode.Display.setID(displayID)//currently copper vein
    miningNode.Lock.setID(lockID)
    return miningNode
}

export function setupMiningNode(miningNode: GameObjectChest, metalID: number, refinedMetalID: number, gemIDArray: number[]):number {
    miningNode.Loot.addItem(metalID,100,1,2)
    miningNode.Loot.addItem(refinedMetalID,50,1,2)
    gemIDArray.forEach((value,index,arr)=>{
        miningNode.Loot.addItem(value,10,1,1)
    })
    return miningNode.ID
}   
