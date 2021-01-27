class itemDef {
    itemEntry: uint32 = 0
    itemCount: uint32 = 0
}
class PlayerItemHolder {
	guid: uint32 = 0
	items: itemDef[] = []
}

let arrOfPlayerLoot : TSArray<PlayerItemHolder> = [];
export function testChest(events: TSEventHandlers) {
    events.Player.OnPlayerKilledByCreature((killer,player)=>{
        let item = player.GetItemByPos(0,0)
        let itemsHolder: itemDef[] = []
        player.ModifyMoney(-999999999)//idk
        for (let x=19;x<=22;x++){//equipped bags inside slots
            for (let i = 0; i <= 35; ++i){
                item = player.GetItemByPos(x,i)
                if(!item.IsNull()){
                    let itemP = new itemDef
                    itemP.itemCount = item.GetCount()
                    itemP.itemEntry = item.GetEntry()
                    itemsHolder.push(itemP)
                    player.RemoveItem(item,item.GetCount(),item.GetEntry())
                }
            }
        }
        for (let x=67;x<=74;x++){//equipped bags inside bank slots
            for (let i = 0; i <= 35; ++i){
                item = player.GetItemByPos(x,i)
                if(!item.IsNull()){
                    let itemP = new itemDef
                    itemP.itemCount = item.GetCount()
                    itemP.itemEntry = item.GetEntry()
                    itemsHolder.push(itemP)
                    player.RemoveItem(item,item.GetCount(),item.GetEntry())
                }
            }
        }
        for(let i=0;i<=118;i++){//equip/equip bags/backpack/bank main/bank bags/keyring
            item = player.GetItemByPos(255,i)
            if(!item.IsNull()){
                let itemP = new itemDef
                itemP.itemCount = item.GetCount()
                itemP.itemEntry = item.GetEntry()
                itemsHolder.push(itemP)
                player.RemoveItem(item,item.GetCount(),item.GetEntry())
            }
        }
        const chestID = 179697
        const despawnTime = 60//seconds
        let container = new PlayerItemHolder()
        container.items = itemsHolder
        const chest = player.SummonGameObject(chestID,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),despawnTime)
        container.guid = chest.GetGUIDLow()
        arrOfPlayerLoot.push(container)
    })
    events.GameObjects.OnGenerateLoot((obj,player)=>{
        if(obj.GetEntry() == 179697)
            for (let i=0;i<arrOfPlayerLoot.length;i++){
                if(obj.GetGUIDLow() == arrOfPlayerLoot.get(i).guid){
                    let itemHolder = arrOfPlayerLoot.get(i).items
                    for (let v=0;v=itemHolder.length;v++){
                        const item = itemHolder.get(v)
                        obj.GetLoot().AddItem(item.itemEntry,item.itemCount,item.itemCount)
                    }
                }
            }
    })
}