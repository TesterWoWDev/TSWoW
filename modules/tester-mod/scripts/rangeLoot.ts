export function rangeLoot(events: TSEventHandlers) {
    events.Player.OnCreatureKill((player,corpse)=>{
        let inRange = corpse.GetCreaturesInRange(10,0,0,2)
        let corpseLoot = corpse.GetLoot()
        for(let i=0;i<inRange.length;i++){
            if(inRange[i].GetLootRecipient().GetGUIDLow() == player.GetGUIDLow() || inRange[i].GetLootRecipientGroup().GetGUID() == player.GetGroup().GetGUID()){
                let curCorpse = inRange[i].GetLoot()
                corpse.GetLoot().SetMoney(corpse.GetLoot().GetMoney() + curCorpse.GetMoney())
                for(let j=0;j<curCorpse.GetItemCount();j++){
                    let item = curCorpse.GetItem(j)
                    let ID = item.GetItemID()
                    let count = item.GetCount()
                    corpseLoot.AddItem(ID,count,count)
                }
                curCorpse.Clear()
                //make curCorpse unlootable  
            }
        }
        for(let i=0;i<corpseLoot.GetItemCount();i++){
            let curItem = corpseLoot.GetItem(i)
            for(let j=i+1;j<corpseLoot.GetItemCount();j++){
                let cItem = corpseLoot.GetItem(j)
                if(cItem.GetCount() > 0){
                    if(curItem.GetItemID() == cItem.GetItemID() ){
                        curItem.SetCount(curItem.GetCount() + cItem.GetCount())
                        cItem.SetCount(0)
                    }
                }
            }
        }
    })
}