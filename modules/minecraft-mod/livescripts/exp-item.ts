export function itemLearnSpell(events: TSEventHandlers) {
    events.ItemID.OnUse(GetID("item_template","minecraft-mod","xpitem"),(item,player,vv,cancel)=>{
        player.GiveXP(200,player)
    })
}