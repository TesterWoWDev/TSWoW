export function onDeath(events: TSEventHandlers) {

    events.Player.OnSay((player,type,lang,msg)=>{
        const chest = player.SummonGameObject(75299,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),30)
        chest.GetLoot().Clear()
        chest.GetLoot().SetMoney(player.GetMoney())
        //chest.GetLoot().AddLooter(player.GetGUIDLow())
    })
    events.Player.OnPlayerKilledByCreature((creature,player)=>{
        deathEvent(player)
    });

    events.Player.OnPVPKill((killer,killed)=>{
        deathEvent(killed)
    });
    function deathEvent(player: TSPlayer){
        const chestID = 75299
        const despawnTime = 30//seconds
        const chest = player.SummonGameObject(chestID,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),despawnTime)
        let item = player.GetItemByPos(0,0)
        let itemEntry = item.GetEntry()
        let itemCount = item.GetCount()
        chest.GetLoot().Clear()//maybe?
        chest.GetLoot().AddLooter(player.GetGUIDLow())
        chest.GetLoot().SetMoney(player.GetMoney())
        player.ModifyMoney(-999999999)//idk
        for (let x=19;x<=22;x++){//equipped bags inside slots
            for (let i = 0; i <= 35; ++i){
                item = player.GetItemByPos(x,i)
                itemEntry = item.GetEntry()
                itemCount = item.GetCount()
                chest.GetLoot().AddItem(CreateLootItem(itemEntry,0,100,0,false,0,itemCount,itemCount))
                player.RemoveItem(item,itemCount,itemEntry)
            }
        }
        for (let x=67;x<=74;x++){//equipped bags inside bank slots
            for (let i = 0; i <= 35; ++i){
                item = player.GetItemByPos(x,i)
                itemEntry = item.GetEntry()
                itemCount = item.GetCount()
                chest.GetLoot().AddItem(CreateLootItem(itemEntry,0,100,0,false,0,itemCount,itemCount))
                player.RemoveItem(item,itemCount,itemEntry)
            }
        }
        for(let i=0;i<=118;i++){//equip/equip bags/backpack/bank main/bank bags/keyring
            item = player.GetItemByPos(255,i)
            itemEntry = item.GetEntry()
            itemCount = item.GetCount()
            chest.GetLoot().AddItem(CreateLootItem(itemEntry,0,100,0,false,0,itemCount,itemCount))
            player.RemoveItem(item,itemCount,itemEntry)
        }
    }
}