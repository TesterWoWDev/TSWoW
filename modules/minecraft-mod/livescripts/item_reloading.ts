export function itemReloading(events: TSEvents) {
    events.World.OnStartup(()=>{
        LoadCustomItems()
    })
    //possibly replace with sending a cache packet of specific itemID whenever hover an item?
    //perhaps have an addon that checks when finally ingame, then send this only once?
    events.Player.OnLogin((player,first)=>{
        player.AddTimer(2000,3,0,(owner,timer)=>{
            owner.ToPlayer().UpdateCache()
        })
    })
    events.Player.OnCommand((player,command,found)=>{
        let cmd = command.get().split(' ')
        if(cmd[0] == 'cacheme'){
            found.set(true)
            player.UpdateCache()
        }
        if(cmd[0] == 'itemreload'){
            found.set(true)
            player.ApplyItemMods(ToUInt32(cmd[1]))
            //should really send this packet to all players online
            player.SendItemQueryPacket(ToUInt32(cmd[1]))
            //rectifies the player stats
            player.SetHealth(player.GetMaxHealth())
            player.SetPower(player.GetMaxPower(Powers.MANA),Powers.MANA)
        }
        if(cmd[0] == 'customitemreload'){
            found.set(true)
            //get a prettier way? idk. you need GetTemplateCopy off a item instance. DO NOT use GetTemplate()
            let newItem = player.GetItemByEntry(ToUInt32(cmd[1])).GetTemplateCopy()
            newItem.SetStatCount(2)
            //do your manipulations here
            newItem.SetStatType(0,7)
            newItem.SetStatValue(0,5)
            newItem.SetStatType(1,5)
            newItem.SetStatValue(1,5)
            //do the heavy lifting
            player.ApplyCustomItemMods(newItem)
            //save to custom table
            newItem.SaveItemTemplate()
            //should really send this packet to all players online
            player.SendItemQueryPacketWithTemplate(newItem)
            //rectifies the player bars
            player.SetHealth(player.GetMaxHealth())
            player.SetPower(player.GetMaxPower(Powers.MANA),Powers.MANA)
        }
        if(cmd[0] == 'customitemreload2'){
            found.set(true)
            //get a prettier way? idk. you need GetTemplateCopy off a item instance. DO NOT use GetTemplate()
            let newItem = player.GetItemByEntry(ToUInt32(cmd[1])).GetTemplateCopy()
            //do your manipulations here
            newItem.SetStatCount(1)
            newItem.SetStatValue(0,1)
            //do the heavy lifting
            player.ApplyCustomItemMods(newItem)
            //save to custom table
            newItem.SaveItemTemplate()
            //should really send this packet to all players online
            player.SendItemQueryPacketWithTemplate(newItem)
            //rectifies the player bars
            player.SetHealth(player.GetMaxHealth())
            player.SetPower(player.GetMaxPower(Powers.MANA),Powers.MANA)
        }
        if(cmd[0] == 'newitem'){
            found.set(true)
            //for when nobody has an item
            ReloadSingleItemTemplate(cmd[1])
        }
        if(cmd[0] == 'totalreload'){
            found.set(true)
            ReloadItemTemplate()
        }
    })
}