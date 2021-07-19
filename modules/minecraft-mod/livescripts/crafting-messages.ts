import { craftMessage, returnCraftItemMessage, showScreen } from "../shared/Messages";

    export function handleCraftMessages(events:TSEventHandlers){
    events.Addon.OnMessageID(craftMessage,(player,message)=>{
        let check = 0
        let queryString = "SELECT craftID,craftCount,req1,cnt1,req2,cnt2,req3,cnt3,req4,cnt4,req5,cnt5,req6,cnt6,req7,cnt7,req8,cnt8,req9,cnt9 FROM minecraft_recipes WHERE "
        let posString = ""
        let isEnchant = false
        for(let i=0;i<message.itemIDs.length;i++){
            let fillVal = message.itemIDs[i]
            if(message.itemIDs[i] != 0){
                if(i == 4){
                    let item = player.GetItemByEntry(message.itemIDs[i])
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
                pkt.craftItem = message.itemIDs[4]
                let enchSet = 0
                for(let i=0;i<5;i++){
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
                        if(message.itemIDs[i] != 0){
                            let itemID = message.itemIDs[i]
                            if(message.positions[i].bagslot[0] == 0){
                                message.positions[i].bagslot[0] = 255
                                message.positions[i].bagslot[1] += 22
                            }else{
                                message.positions[i].bagslot[0] += 18
                                message.positions[i].bagslot[1] += -1
                            }
                            let item = player.GetItemByPos(message.positions[i].bagslot[0],message.positions[i].bagslot[1])
                            if(item.IsNull()){
                                player.SendAreaTriggerMessage("stop trying to break shit")
                                return
                            }else{
                                if(item.GetEntry() == itemID){
                                    if(!(isEnchant && i==4)){
                                        player.RemoveItem(item,1,itemID)
                                    }   
                                }
                                else{
                                    player.RemoveItem(CreateItem(itemID,1),1,itemID)
                                }
                            }
                        }
                    }
                    let item = CreateItem(pkt.craftItem,pkt.craftItemCount)
                    if(isEnchant){
                        item = player.GetItemByPos(message.positions[4].bagslot[0],message.positions[4].bagslot[1])
                    }else{
                        //add a check if added, else mail
                        //possibly try to add tochest, see if that adds random affix
                        let itema = player.AddItem(pkt.craftItem,pkt.craftItemCount)
                        if(itema.IsNull()){
                            player.SendMail(41,0,'forgotten items','You seem to have forgotten to make space in your bags, i have made sure this made its way to you. Shame about those names though, seem to of been lost.',0,0,0,[item])
                        }
                    }
                    item.SetEnchantment(message.enchants[0],0)
                    item.SetEnchantment(message.enchants[1],2)  
                    item.SetEnchantment(message.enchants[2],3)  
                    item.SetEnchantment(message.enchants[3],4)
                    item.SetEnchantment(message.enchants[4],5)
                    item.SetEnchantment(1,6)
                    player.SendData(new showScreen())
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