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

export function makeMiningNode(name:string,displayID:number,lockID:number,modPrefix:string):GameObjectChest{
    let miningNode = std.GameObjectTemplates.create(MODNAME,modPrefix + name.toLowerCase().replace(' ','-'),1731).setChest()
    miningNode.Name.enGB.set(name)
    miningNode.Display.setID(displayID)//currently copper vein
    miningNode.Lock.setID(lockID)
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

export function createAllUndiscoverGems(gemCount: number, gemName: string, gemDisplayID: any):number[] {
    let allGemIDs = []
    for(let i=0;i<gemCount;i++){
        let gem = std.Items.create(MODNAME,gemName.toLowerCase().replace(' ','-') + '-'+i,2934)
        gem.Name.enGB.set('Unrefined '+gemName)
        gem.DisplayInfo.setID(gemDisplayID)
        allGemIDs.push(gem.ID)
    }
    return allGemIDs
}
