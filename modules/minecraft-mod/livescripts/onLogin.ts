export function onLoginEvents(events:TSEventHandlers){
    events.Player.OnLogin((player,first)=>{
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