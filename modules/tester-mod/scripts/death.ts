export function onDeath(events: TSEventHandlers) {
    events.Player.OnPlayerKilledByCreature((creature,player)=>{
        const chestID = 75299
        const despawnTime = 60//seconds till despawn
        const chest = player.SummonGameObject(chestID,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),despawnTime)
        let item = new TSItem()
        let itemEntry = 0
        let itemCount = 0
        chest.GetLoot().Clear()//maybe?
        chest.GetLoot().AddLooter(player.GetGUIDLow())//prolly work?
        const charmoney = player.GetMoney()
        chest.GetLoot().SetMoney(charmoney)
        player.ModifyMoney(-1*charmoney)
        for (let x=19;x<=22;x++){//items inside inventory bags
            for (let i = 0; i <= 35; ++i){
                item = player.GetItemByPos(x,i)
                itemEntry = item.GetEntry()
                itemCount = item.GetCount()
                chest.GetLoot().AddItem(CreateLootItem(itemEntry,0,100,0,false,0,itemCount,itemCount))
                player.RemoveItem(item,itemCount,itemEntry)
            }
        }
        for (let x=67;x<=74;x++){//items inside bank bags
            for (let i = 0; i <= 35; ++i){
                item = player.GetItemByPos(x,i)
                itemEntry = item.GetEntry()
                itemCount = item.GetCount()
                chest.GetLoot().AddItem(CreateLootItem(itemEntry,0,100,0,false,0,itemCount,itemCount))
                player.RemoveItem(item,itemCount,itemEntry)
            }
        }
        for(let i=0;i<=118;i++){//equipment/inventory equipped bags/backpack(base 16)/bank main area/bank equipped bags/keyring
            item = player.GetItemByPos(255,i)
            itemEntry = item.GetEntry()
            itemCount = item.GetCount()
            chest.GetLoot().AddItem(CreateLootItem(itemEntry,0,100,0,false,0,itemCount,itemCount))
            player.RemoveItem(item,itemCount,itemEntry)
        }
    });

    events.Player.OnPVPKill((killer,player)=>{
        //copy the above code here?
    });
}