import { craftMessage, returnCraftItemMessage } from "../shared/Messages"

export function Main(events: TSEventHandlers) {
    events.Addon.OnMessageID(craftMessage,(player,message)=>{
        let check = 0
        if(message.isEnchant == 0){//crafting
            let result = QueryWorld("SELECT craftID,craftCount,req1,cnt1,req2,cnt2,req3,cnt3,req4,cnt4,req5,cnt5,req6,cnt6,req7,cnt7,req8,cnt8,req9,cnt9 FROM minecraft_recipes WHERE pos1 = " + message.pos1 + " AND pos2 = " + message.pos2 + " AND pos3 = " + message.pos3 + " AND pos4 = " + message.pos4 + " AND pos5 = " + message.pos5 + " AND pos6 = " + message.pos6 + " AND pos7 = " + message.pos7 + " AND pos8 = " + message.pos8 + " AND pos9 = " + message.pos9 + "")
            let pkt = new returnCraftItemMessage()
            while(result.GetRow()){
                pkt.craftItem = result.GetUInt32(0)
                pkt.craftItemCount = result.GetUInt32(1)
                check = 1
                
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
                        RemoveAllItems(player,message)
                        player.AddItem(pkt.craftItem,pkt.craftItemCount)
                    }else{
                        player.SendAreaTriggerMessage('You do not have the required materials!')
                    player.SendBroadcastMessage('You do not have the required materials!')
                    }
                }
                player.SendItemQueryPacket(pkt.craftItem)
            }
            isValidPattern(check, pkt, message, player)
            player.SendData(pkt)
        }else if(message.isEnchant == 1){//enchanting 
            let result = QueryWorld("SELECT craftID,craftCount,req1,cnt1,req2,cnt2,req3,cnt3,req4,cnt4,req5,cnt5,req6,cnt6,req7,cnt7,req8,cnt8,req9,cnt9 FROM minecraft_recipes WHERE pos1 = " + message.pos1 + " AND pos2 = " + message.pos2 + " AND pos3 = " + message.pos3 + " AND pos4 = " + message.pos4 + " AND pos6 = " + message.pos6 + " AND pos7 = " + message.pos7 + " AND pos8 = " + message.pos8 + " AND pos9 = " + message.pos9 + "")
            let pkt = new returnCraftItemMessage()
            while(result.GetRow()){
                pkt.craftItem = message.pos5
                pkt.enchantNum = result.GetUInt32(0)
                pkt.craftItemCount = result.GetUInt32(1)
                check = 1
                
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
                    let item = player.GetItemByEntry(message.pos5)
                    if(item.GetClass() == 2 || item.GetClass() == 4){
                        if(checkItems == 1){
                            RemoveAllItems(player,message)
                             player.AddItem(pkt.craftItem,pkt.craftItemCount).SetEnchantment(pkt.enchantNum,0)
                        }else{
                            player.SendAreaTriggerMessage('You do not have the required materials!')
                            player.SendBroadcastMessage('You do not have the required materials!')
                        }
                    }else{
                        player.SendAreaTriggerMessage('You cannot enchant that!')
                        player.SendBroadcastMessage('You cannot enchant that!')
                    }
                }
                player.SendItemQueryPacket(pkt.craftItem)
            }
            isValidPattern(check, pkt, message, player)
            player.SendData(pkt)
        }
    })
}

function isValidPattern(check: number, pkt: returnCraftItemMessage, message: craftMessage, player: TSPlayer) {
    if (check == 0 && message.purchase == 1) {
        player.SendAreaTriggerMessage('That wasn\'t a valid pattern!')
        player.SendBroadcastMessage('That wasn\'t a valid pattern!')
    }
}

function RemoveAllItems(player: TSPlayer, message: craftMessage) {
    if(message.pos1 != 0){
        let itemID = message.pos1
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos2 != 0){
        let itemID = message.pos2
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos3 != 0){
        let itemID = message.pos3
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos4 != 0){
        let itemID = message.pos4
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos5 != 0){
        let itemID = message.pos5
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos6 != 0){
        let itemID = message.pos6
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos7 != 0){
        let itemID = message.pos7
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos8 != 0){
        let itemID = message.pos8
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }if(message.pos9 != 0){
        let itemID = message.pos9
        let item = player.GetItemByEntry(itemID)
        player.RemoveItem(item,1,itemID)
    }
}

