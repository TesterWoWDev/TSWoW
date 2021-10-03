let itemIDs:TSArray<uint64> = [
    GetID("item_template","minecraft-mod","untestedboots"), //Un-Tested Boots + 25% Speed on Equip
    GetID("item_template","minecraft-mod","fallencloak"), //Cloak of the Fallen Angel + Spawn chest 1 time per hour
    GetID("item_template","minecraft-mod","flannelshirt"), //Worn Flannel + Summons Girlfriend 
    GetID("item_template","minecraft-mod","strangeblade") //Lexaeus Strange Blade + Summon Naked Women
]
let spellIDs:TSArray<uint64> = [
    GetID("Spell","minecraft-mod","movementspell-spell"), //Un-Tested Boots Movement Speed Spell
    GetID("Spell","minecraft-mod","fallencloak-spell"), //Cloak of the Fallen Angel Spawn Chest Spell
    GetID("Spell","minecraft-mod","flannelspell-spell"), //Worn Flannel Summon Girlfriend
    GetID("Spell","minecraft-mod","lexaeusspell-spell") //Strange Blade Summon Naked People
]
let spellNames = [
    "Un-Tested Speed", //Un-Tested Boots Spell Name
    "Summon Cache of Resources", //Fallen Cloak Spell Name
    "Summon Girlfriend", //Flannel Spell Name
    "Simp" //Lexaeus Spell Name
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
            if(player.CanEquipItem(item,item.GetSlot(),entry)){
                player.LearnSpell(itemIDToSpellID[entry])
                player.SendBroadcastMessage("You feel a surge of energy enter your mind. You have learned how to use |Hspell:" + itemIDToSpellID[entry] + "|h|r|cff71d5ff[" + itemIDToSpellName[entry] + "]|r|h")
            }
        })
        events.ItemID.OnUnequip(itemIDs[i],(item,player,isSwap,result)=>{
            let entry = item.GetEntry()
            player.RemoveSpell(itemIDToSpellID[entry],false,false)
            player.SendBroadcastMessage("A draining feeling washes over you and you lose the ability to use |Hspell:" + itemIDToSpellID[entry] + "|h|r|cff71d5ff[" + itemIDToSpellName[entry] + "]|r|h")
        })
    }
}