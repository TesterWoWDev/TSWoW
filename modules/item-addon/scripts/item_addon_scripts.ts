import { bagSlotMessage, frameCloseMessage, scrapMessage } from "../shared/Messages";


class ScrapperItems extends TSClass {
    // @ts-ignore
    selectedItems: TSArray<bagSlotMessage>;
}

export function Main(events: TSEventHandlers) {
    
    events.Addon.OnMessageID(bagSlotMessage,(player,msg)=>{
        let charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems());
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
                    player.GetData().SetObject(ModID(),"ScrapperItems",charItems);
            }
            player.SendData(pkt)
        }
        else{
            player.SendAreaTriggerMessage("You have already filled the scrapper!")
        }
    })

    events.Addon.OnMessageID(frameCloseMessage,(player,msg)=>{
        player.GetData().SetObject(ModID(),"ScrapperItems",new ScrapperItems());
    })

    events.Addon.OnMessageID(scrapMessage,(player,msg)=>{
        console.log("scrapped")
        let charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems());
        if(charItems.selectedItems.length > 0){
            let itemLevel = 0
            for(let i=0;i<charItems.selectedItems.length;i++){
                let item = player.GetItemByEntry(charItems.selectedItems[i].itemID)
                let itemID = charItems.selectedItems[i].itemID
                let count = item.GetCount()
                itemLevel = item.GetItemLevel()
                player.RemoveItem(item,count,itemID)
            }

            while (itemLevel > 0){
                if(itemLevel > 10000){

                    itemLevel = itemLevel - 10000
                }
                else if(itemLevel > 5000){

                    itemLevel = itemLevel - 5000
                }
                else if(itemLevel > 1000){
                    
                    itemLevel = itemLevel - 1000

                }
                else{
                    player.ModifyMoney(itemLevel)
                    itemLevel = 0
                }
            }
        }else{
            player.SendAreaTriggerMessage("You need to fill the scrapper!")
        }
        player.GetData().SetObject(ModID(),"ScrapperItems",new ScrapperItems());
    })
}