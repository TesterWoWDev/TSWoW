import { craftMessage, returnCraftItemMessage } from "../shared/Messages"

export function Main(events: TSEventHandlers) {
    events.Addon.OnMessageID(craftMessage,(player,message)=>{
        let check = 0
        let queryString = "SELECT craftID,craftCount,req1,cnt1,req2,cnt2,req3,cnt3,req4,cnt4,req5,cnt5,req6,cnt6,req7,cnt7,req8,cnt8,req9,cnt9 FROM minecraft_recipes WHERE "
        let posString = ""
        let isEnchant = false
        for(let i=0;i<message.positions.length;i++){
            if(message.positions[i] != 0){
                let item = player.GetItemByEntry(message.positions[i])
                if(item.GetClass() == 2 || item.GetClass() == 4){
                    isEnchant = true
                    posString = posString + "pos"+(i+1)+" = " + -1 + " AND "
                }else{
                    posString = posString + "pos"+(i+1)+" = " + message.positions[i] + " AND "
                }
            }else{
                posString = posString + "pos"+(i+1)+" = " + message.positions[i] + " AND "
            }                  
        }
        posString = posString.substring(0,posString.length-4)
        let result = QueryWorld(queryString + posString)
        let pkt = new returnCraftItemMessage()
        while(result.GetRow()){
            check = 1    
            if(isEnchant){
                pkt.craftItem = message.positions[4]
                pkt.craftItemCount = result.GetUInt32(1)
                pkt.enchantNum = result.GetUInt32(0)
            }else{
                pkt.craftItem = result.GetUInt32(0)
                pkt.craftItemCount = result.GetUInt32(1)
            }
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
                    player.AddItem(pkt.craftItem,pkt.craftItemCount).SetEnchantment(pkt.enchantNum,0)  
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
        player.SendData(pkt)
    })
}