let itemIDs:TSArray<uint64> = [
    GetID("item_template","minecraft-mod","untestedboots"), //           Homeage                 Un-Tested Boots                 25% Speed on Equip
    GetID("item_template","minecraft-mod","fallencloak"),   //           Homeage                 Cloak of the Fallen Angel       Spawn chest 1 time per hour
    GetID("item_template","minecraft-mod","flannelshirt"),  //           Homeage                 Worn                            Flannel  Summons Girlfriend 
    GetID("item_template","minecraft-mod","strangeblade"),  //           Homeage                 Lexaeus Strange Blade           Summon Naked Women

    GetID("item_template","minecraft-mod","volatilepower"), //           Zone 3                  Volatile Robe                   Chance to Increase SP by 590.
    GetID("item_template","minecraft-mod","miserymace"), //           Zone 3                  Volatile Robe                   Chance to Increase SP by 590.
    GetID("item_template","minecraft-mod","heartpit")  //           Zone 3                  Volatile Robe                   Chance to Increase SP by 590.

]
let spellIDs:TSArray<uint64> = [
    GetID("Spell","minecraft-mod","movementspell-spell"),   //             Homeage                 On Use - Speed 25% Increase                 Tester Boots
    GetID("Spell","minecraft-mod","fallencloak-spell"),     //             Homeage                 On Use - Supply Chest                       Fallen Cloak
    GetID("Spell","minecraft-mod","flannelspell-spell"),    //             Homeage                 On Use - Summon Girlfriend                  Flannel Shirt
    GetID("Spell","minecraft-mod","lexaeusspell-spell"),    //             Homeage                 On Use - Summon Naked People                Strange Blade

    GetID("Spell","minecraft-mod","chancepower1c-spell"),  //             Zone 3                  Chance on Spell Cast                        Volatile Robe
    GetID("Spell","minecraft-mod","chancechainheal-spell"),//             Zone 3                  Chance on Spell Cast                        Volatile Robe
    GetID("Spell","minecraft-mod","chancechainheal-spell") //             Zone 3                  Chance on Spell Cast                        Volatile Robe

]
let spellNames = [
    "Un-Tested Speed",              //          Homeage             Spell Name              Un-Tested Boots
    "Summon Cache of Resources",    //          Homeage             Spell Name              Cache of Resources
    "Summon Girlfriend",            //          Homeage             Spell Name              Flannel Shirt
    "Simp",                         //          Homeage             Spell Name              Lexaeus Sword

    "Increasing Power",             //          Zone 3              Spell Name              Volatile Robe
    "Chain Life",                   //          Zone 3              Spell Name              Misery Mace
    "Chain Life"                    //          Zone 3              Spell Name              Heart of Pit

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