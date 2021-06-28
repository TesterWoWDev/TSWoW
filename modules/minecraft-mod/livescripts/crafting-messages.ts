import { craftMessage, returnCraftItemMessage } from "../shared/Messages";

    export function handleCraftMessages(events:TSEventHandlers){
    events.Addon.OnMessageID(craftMessage,(player,message)=>{
        let check = 0
        let queryString = "SELECT craftID,craftCount,req1,cnt1,req2,cnt2,req3,cnt3,req4,cnt4,req5,cnt5,req6,cnt6,req7,cnt7,req8,cnt8,req9,cnt9 FROM minecraft_recipes WHERE "
        let posString = ""
        let isEnchant = false
        for(let i=0;i<message.positions.length;i++){
            let fillVal = message.positions[i]
            if(message.positions[i] != 0){
                if(i == 4){
                    let item = player.GetItemByEntry(message.positions[i])
                    if(item.GetClass() == 2 || item.GetClass() == 4){
                        isEnchant = true
                        fillVal = -1
                    }
                }
            }
            posString = posString + "pos"+(i+1)+" = " + fillVal + " AND "                
        }
        posString = posString.substring(0,posString.length-4)
        let result = QueryWorld(queryString + posString)
        let pkt = new returnCraftItemMessage()
        while(result.GetRow()){
            check = 1    
            if(isEnchant){
                pkt.craftItem = message.positions[4]
                let enchSet = 0
                for(let i=0;i<4;i++){
                    if(message.enchants[i] == 0){
                        message.enchants[i] = result.GetUInt32(0)
                        enchSet = 1
                        break
                    }
                }
                if(enchSet == 0){
                    player.SendAreaTriggerMessage('You do not have the open enchant slots!')
                    player.SendBroadcastMessage('You do not have the open enchant slots')
                    return
                }
            }else{
                pkt.craftItem = result.GetUInt32(0)
                
            }
            pkt.craftItemCount = result.GetUInt32(1)
            if(message.purchase == 1){
                let checkItems = 1
                for(let i=2;i<23;i++){
                    if(result.GetUInt32(i) != 0){
                        if(!player.HasItem(result.GetUInt32(i),result.GetUInt32(i+1),false)){
                            checkItems = 0
                        }
                    }else{
                        break
                    }
                    i++
                }
                if(checkItems == 1){
                    for(let i=0;i<message.positions.length;i++){
                        if(message.positions[i] != 0){
                            let itemID = message.positions[i]
                            let item = player.GetItemByEntry(itemID)
                            player.RemoveItem(item,1,itemID)
                        }
                    }
                    let item = player.AddItem(pkt.craftItem,pkt.craftItemCount)
                    item.SetEnchantment(message.enchants[0],0)  
                    item.SetEnchantment(message.enchants[1],2)  
                    item.SetEnchantment(message.enchants[2],3)  
                    item.SetEnchantment(message.enchants[3],4)
                    
                    pkt.craftItem = 0                  
                }else{
                    player.SendAreaTriggerMessage('You do not have the required materials!')
                    player.SendBroadcastMessage('You do not have the required materials!')
                }
            }
            player.SendItemQueryPacket(pkt.craftItem)
        }
        if (check == 0 && message.purchase == 1) {
            player.SendAreaTriggerMessage('That wasn\'t a valid pattern!')
            player.SendBroadcastMessage('That wasn\'t a valid pattern!')
        }
        pkt.enchantNum = message.enchants
        player.SendData(pkt)
    })
}