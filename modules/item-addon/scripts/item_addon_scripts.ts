import { bagSlotMessage, frameCloseMessage } from "../shared/Messages";


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
                let item =player.GetItemByPos(msg.Bag,msg.Slot)
                    //pkt.itemID = player.GetItemByPos(msg.Bag,msg.Slot).GetEntry();
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
        let charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems())
        console.log(charItems.selectedItems.length)
        player.GetData().SetObject(ModID(),"ScrapperItems",new ScrapperItems());
        charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems())
        console.log(charItems.selectedItems.length)
    })
}