import { SQL } from "wotlkdata/sql/SQLFiles"

export function previousQuestID(questID:number,prev:number){
    SQL.quest_template_addon.add(questID).PrevQuestID.set(prev)
}

export function nextQuestID(questID:number,next:number){
    SQL.quest_template_addon.add(questID).NextQuestID.set(next)
}

export function prevAndNextQuestID(questID:number,prev:number,next:number){
    SQL.quest_template_addon.add(questID).PrevQuestID.set(prev).NextQuestID.set(next)
}