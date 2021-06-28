export function onLoginEvents(events:TSEventHandlers){
    events.Player.OnLogin((player,first)=>{
        if(first){
            //learn skinning
            //learn herb
            //learn mining
            //player.LearnClassSpells(true,false)
            player.LearnSpell(50305)//skin
            player.LearnSpell(65288)//herb
            player.LearnSpell(50310)//ming
            player.AddItem(GetID("item_template","minecraft-mod","multitool"),1)//multitool
        }
    })
}