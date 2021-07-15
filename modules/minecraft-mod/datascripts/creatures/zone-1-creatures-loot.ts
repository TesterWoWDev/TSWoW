import { AttachedLootSet } from "tswow-stdlib/Loot/Loot";
import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate";
import { tierOneBaseResources } from "../items/armor/tier1-set";
import { creature1Loot, RareCreature3Loot } from "./zone-1-creatures";

addLoot(creature1Loot,tierOneBaseResources,[5,5,5,5,5,5,5])

function addLoot(loot: AttachedLootSet<CreatureTemplate>, baseResources: number[], chances: number[]) {
    baseResources.forEach((value,index)=>{
        if(chances[index] > 0) {
            loot.addItem(value,chances[index],1,1,false,0,0)
        }
    })
}
