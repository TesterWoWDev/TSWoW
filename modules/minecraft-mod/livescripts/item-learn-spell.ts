export function itemLearnSpell(events: TSEventHandlers) {
    //add some sort of loop
    events.ItemID.OnEquipLate(13,(item,player,result)=>{
        player.LearnSpell(133)
    })
    events.ItemID.OnUnequip(13,(item,player,isSwap,result)=>{
        player.RemoveSpell(133,false,false)
    })
}