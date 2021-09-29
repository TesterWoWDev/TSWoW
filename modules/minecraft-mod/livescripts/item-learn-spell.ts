let itemIDs = [
    2092
]

const itemIDToSpellID : TSDictionary<uint64,uint64> = MakeDictionary<uint64,uint64>({ // <-- works!
    2092: 51723,
});

const itemIDToSpellName : TSDictionary<uint64,string> = MakeDictionary<uint64,string>({ // <-- works!
    2092: "Fan of Knives",
});

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