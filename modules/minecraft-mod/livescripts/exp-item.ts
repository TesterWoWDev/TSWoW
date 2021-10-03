export function itemGiveXP(events: TSEventHandlers) {
    events.ItemID.OnUse(GetID("item_template","minecraft-mod","expscroll"),(item,player,reserve,cancel)=>{
        player.GiveXP(200,player)
    })
}