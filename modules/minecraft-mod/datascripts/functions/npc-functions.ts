import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata/sql/SQLFiles"
import { AttachedLootSet } from "tswow-stdlib/Loot/Loot";
import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate";

export function setFaction(entry:number,faction:number){
    std.CreatureTemplates.load(entry).FactionTemplate.set(faction)
}

 export function setLevel(entry:number,level:number){
    std.CreatureTemplates.load(entry).Level.set(level)
 }

 export function removeQuests(entry:number){
    std.CreatureTemplates.load(entry).NPCFlags.QuestGiver.clear()
}

export function setName(entry:number, name:string){
    std.CreatureTemplates.load(entry).Name.enGB.set(name)
}

export function setSubName(entry:number, subname:string){
    std.CreatureTemplates.load(entry).Subname.enGB.set(subname)
}

export function addSmartScripts(entry:number,sourceType:number,id:number,link:number,eventType:number,eventChance:number,eventParams:number[],action:number,actionParam:number,targetType:number,comment:string){
    SQL.smart_scripts.add(entry,sourceType,id,link).event_type.set(eventType).event_chance.set(eventChance).event_param1.set(eventParams[0]).event_param2.set(eventParams[1]).event_param3.set(eventParams[2]).event_param4.set(eventParams[3]).action_type.set(action).action_param1.set(actionParam).target_type.set(targetType).comment.set(comment)
}

export function addLootToCreature(loot: AttachedLootSet<CreatureTemplate>, items: number[], chances: number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            loot.addItem(value,chances[index],1,1,false,groupID,1)
        }
    })
}

export function addLootToCreatureSingleChance(loot: AttachedLootSet<CreatureTemplate>, items: number[], chance: number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        loot.addItem(value,chance,1,1,false,groupID,1)
    })
}