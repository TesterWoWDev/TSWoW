export function onLoginEvents(events:TSEventHandlers){
    events.Player.OnLogin((player,first)=>{
         let classIcons = ["","|TInterface/icons/INV_Sword_27.png:13|t","|TInterface/icons/INV_Hammer_01.png:13|t", "|TInterface/icons/INV_Weapon_Bow_07.png:13|t","|TInterface/icons/INV_ThrowingKnife_04.png:13|t","|TInterface/icons/INV_Staff_30.png:13|t", "|TInterface/icons/Spell_Deathknight_ClassIcon.png:13|t", "|TInterface/icons/inv_jewelry_talisman_04.png:13|t",  "|TInterface/icons/inv_staff_13.png:13|t", "|TInterface/icons/spell_nature_drowsy.png:13|t", "","|TInterface/icons/Ability_Druid_Maul.png:13|t",]
         let levelColors = ["","F000FF","BA00FF","7100FF","3B00FF","0005FF","0067FF","00B1FF","00E2FF","00FFE2","00FFA7","00FF67","FF0000","00FF19","3BFF00","EBFF00","FFBF00","FF8900","FF5800","FF3B00","FF0000","FF005D"]

        let colors = ["","C79C6E","F58CBA","ABD473","FFF569","FFFFFF","C41F3B","0070DE","69CCF0","9482C9","","FF7D0A"]
        SendWorldMessage('|cff'+ colors[player.GetClass()] + "|Hplayer:" + player.GetName() + "|h["+player.GetName() + ']|h|r, the level [' +classIcons[player.GetClass()] + ' |cff'+levelColors[player.GetLevel()] +player.GetLevel()+ '|r] '+'|cff'+ colors[player.GetClass()] + player.GetClassAsString(0).toLowerCase() + '|r has logged in.')
        SendWorldMessage('[' +classIcons[player.GetClass()] + ' |cff'+colors[player.GetLevel()] +player.GetLevel()+ '|r] '+'|cff'+ colors[player.GetClass()] + "|Hplayer:" + player.GetName() + "|h["+player.GetName() + ']|h' + ' has logged in.')
        
        if(first){
            player.LearnSpell(50305)//skin
            player.LearnSpell(65288)//herb
            player.LearnSpell(50310)//mining
            player.LearnSpell(13262)//disenchant
            player.RemoveSpell(2383,false,false)//remove find herb
            player.RemoveSpell(2580,false,false)//remove find mineral
            player.AddItem(GetID("item_template","minecraft-mod","multitool"),1)//multitool
        }
    })
}