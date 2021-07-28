import { SQL } from "wotlkdata/sql/SQLFiles"

export function previousQuestID(questID:number,prev:number){
    SQL.quest_template_addon.filter({ID:questID}).forEach((value)=>{
        value.PrevQuestID.set(prev)
    })
}

export function nextQuestID(questID:number,next:number){
    SQL.quest_template_addon.filter({ID:questID}).forEach((value)=>{
        value.NextQuestID.set(next)
    })
}

export function prevAndNextQuestID(questID:number,prev:number,next:number){
    SQL.quest_template_addon.filter({ID:questID}).forEach((value)=>{
        value.PrevQuestID.set(prev).NextQuestID.set(next)
    })
}