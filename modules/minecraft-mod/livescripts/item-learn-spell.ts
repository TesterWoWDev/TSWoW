let itemIDs:TSArray<uint64> = [
    GetID("item_template","minecraft-mod","staffofflames"),
    2092,
    49778,
    GetID("item_template","minecraft-mod","dancingflamesrapier")
]
let spellIDs:TSArray<uint64> = [
    GetID("Spell","minecraft-mod","felflamestrike-spell"),
    GetID("Spell","minecraft-mod","fanofknives-spell"),
    GetID("Spell","minecraft-mod","furyhammer-spell"),
    GetID("Spell","minecraft-mod","passiveflamewave-spell")
]
let spellNames = [
    "Flamestrike",
    "Fan of Knives",
    "Storm of Fury",
    "Flame Waves"
]

let itemIDToSpellID : TSDictionary<uint64,uint64> = MakeDictionary<uint64,uint64>({});
let itemIDToSpellName : TSDictionary<uint64,string> = MakeDictionary<uint64,string>({});

export function itemLearnSpell(events: TSEventHandlers) {
    for(let i=0;i<itemIDs.length;i++){
        itemIDToSpellID[itemIDs[i]] = spellIDs[i]
        itemIDToSpellName[itemIDs[i]] = spellNames[i]
    }
    for(let i=0;i<itemIDs.length;i++){
        events.ItemID.OnEquipEarly(itemIDs[i],(item,player,result)=>{
            let entry = item.GetEntry()
            player.LearnSpell(itemIDToSpellID[entry])
            player.SendBroadcastMessage("You feel a surge of energy enter your mind. You have learned how to use |Hspell:" + itemIDToSpellID[entry] + "|h|r|cff71d5ff[" + itemIDToSpellName[entry] + "]|r|h")
        })
        events.ItemID.OnUnequip(itemIDs[i],(item,player,isSwap,result)=>{
            let entry = item.GetEntry()
            player.RemoveSpell(itemIDToSpellID[entry],false,false)
            player.SendBroadcastMessage("A draining feeling washes over you and you lose the ability to use |Hspell:" + itemIDToSpellID[entry] + "|h|r|cff71d5ff[" + itemIDToSpellName[entry] + "]|r|h")
        })
    }
}