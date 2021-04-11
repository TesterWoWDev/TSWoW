import { bagSlotMessage, frameCloseMessage, scrapMessage } from "../shared/Messages";


class ScrapperItems extends TSClass {
    // @ts-ignore
    selectedItems: TSArray<bagSlotMessage>;
}

export function Scrapper(events: TSEventHandlers) {
    events.Addon.OnMessageID(bagSlotMessage,(player,msg)=>{
        let charItems = player.GetData().GetObject<ScrapperItems>("ScrapperItems",new ScrapperItems());
        let selectedItems = charItems.selectedItems
        let found = false
        if(selectedItems.length < 12){
            for (let i=0;i<selectedItems.length;i++){
                if(msg.Bag == selectedItems[i].Bag && msg.Slot == selectedItems[i].Slot){
                    found = true
                    player.SendAreaTriggerMessage("That item is already in the scrapper!")
                    break
                }
            }
            let pkt = new bagSlotMessage()
            pkt.Bag = msg.Bag
            pkt.Slot = msg.Slot
            if(!found){
                //let item = player.GetItemByPos((msg.Bag+19),msg.Slot)
                pkt.itemID = msg.itemID
                selectedItems.push(pkt)
                player.GetData().SetObject("ScrapperItems",charItems);
            }
            player.SendData(pkt)
        }
        else{
            player.SendAreaTriggerMessage("You have already filled the scrapper!")
        }
    })

    events.Addon.OnMessageID(frameCloseMessage,(player,msg)=>{
        player.GetData().SetObject("ScrapperItems",new ScrapperItems());
    })

    events.Addon.OnMessageID(scrapMessage,(player,msg)=>{
        let charItems = player.GetData().GetObject<ScrapperItems>("ScrapperItems",new ScrapperItems());
        if(charItems.selectedItems.length > 0){
            let itemLevel = 0
            for(let i=0;i<charItems.selectedItems.length;i++){
                let itemID = charItems.selectedItems[i].itemID
                let item = player.GetItemByEntry(itemID)
                let count = item.GetCount()
                itemLevel = item.GetItemLevel() + itemLevel
                player.RemoveItem(item,count,itemID)
            }
            while (itemLevel > 0){
                if(itemLevel > 10000){
                   // player.AddItem(1,1)
                    itemLevel = itemLevel - 10000
                    player.SendBroadcastMessage("You scrapped up a taco")
                }
                else if(itemLevel > 5000){
                   // player.AddItem(1,1)
                    itemLevel = itemLevel - 5000
                    player.SendBroadcastMessage("You scrapped up a taco")
                }
                else if(itemLevel > 1000){
                   // player.AddItem(1,1)
                    itemLevel = itemLevel - 1000
                    player.SendBroadcastMessage("You scrapped up a taco")
                }
                else{
                    player.ModifyMoney(itemLevel*10000)
                    player.SendBroadcastMessage("You scrapped up " + itemLevel + " gold")
                    itemLevel = 0
                }
            }
        }else{
            player.SendAreaTriggerMessage("You need to fill the scrapper!")
        }
        player.GetData().SetObject("ScrapperItems",new ScrapperItems());
    })
}