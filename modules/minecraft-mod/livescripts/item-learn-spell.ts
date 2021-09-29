let itemIDs:TSArray<uint64> = [
    GetID("item_template","minecraft-mod","staffofflames"),
    2092
]
let spellIDs = [
    13,
    13
]
let spellNames = [
    "name1",
    "name2"
]



const itemIDToSpellID : TSDictionary<uint64,uint64> = MakeDictionary<uint64,uint64>({ // <-- works!
});
const itemIDToSpellName : TSDictionary<uint64,string> = MakeDictionary<uint64,string>({ // <-- works!
});
for(let i=0;i<itemIDs.length;i++){
    itemIDToSpellID[itemIDs[i]] = spellIDs[i]
    itemIDToSpellName[itemIDs[i]] = spellNames[i]
}


export function itemLearnSpell(events: TSEventHandlers) {
    //add some sort of loop
    for(let i=0;i<itemIDs.length;i++){
        events.ItemID.OnEquipEarly(itemIDs[i],(item,player,result)=>{
            let entry = item.GetEntry()
            player.LearnSpell(itemIDToSpellID[entry])
            player.SendBroadcastMessage("You feel a surge of energy enter your mind. You have learned how to use |Hspell:" + 51723 + "|h|r|cff71d5ff[" + itemIDToSpellName[entry] + "]|r|h")
        })
        events.ItemID.OnUnequip(itemIDs[i],(item,player,isSwap,result)=>{
            let entry = item.GetEntry()
            player.RemoveSpell(itemIDToSpellID[entry],false,false)
            player.SendBroadcastMessage("A draining feeling washes over you and you lose the ability to use |Hspell:" + 51723 + "|h|r|cff71d5ff[" + itemIDToSpellName[entry] + "]|r|h")
        })
    }
}