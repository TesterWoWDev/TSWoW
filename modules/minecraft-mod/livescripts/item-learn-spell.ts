export function itemLearnSpell(events: TSEventHandlers) {
    //add some sort of loop
    events.ItemID.OnEquipLate(2092,(item,player,result)=>{
        player.LearnSpell(51723)
        player.SendAreaTriggerMessage("You feel a surge of energy enter your mind. You have learned how to use Fan of Knives.")
    })
    events.ItemID.OnUnequip(2092,(item,player,isSwap,result)=>{
        player.RemoveSpell(51723,false,false)
        player.SendAreaTriggerMessage("A draining feeling washes over you and you lose the ability to use Fan of Knives.")
    })
}