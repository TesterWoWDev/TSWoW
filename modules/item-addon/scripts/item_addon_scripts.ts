import { blagSlotMessage, frameCloseMessage } from "../shared/Messages";


class ScrapperItems extends TSClass {
    // @ts-ignore
    selectedItems: TSArray<blagSlotMessage>;
}

export function Main(events: TSEventHandlers) {
    
    events.Addon.OnMessageID(blagSlotMessage,(player,msg)=>{
        let charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems());
        let selectedItems = charItems.selectedItems
        let found = false
        if(selectedItems.length < 12){
            for (let i=0;i<selectedItems.length;i++){
                let bag:uint32 = selectedItems[i].Bag
                let slot:uint32 = selectedItems[i].Slot
                if(msg.Bag == bag && msg.Slot == slot){
                    found = true
                    //send packet saying item is already in scrapper(make items only stack to 1?)
                }
            }
            if(!found){
                    let pkt = new blagSlotMessage()
                    pkt.Bag = msg.Bag
                    pkt.Slot = msg.Slot
                    selectedItems.push(pkt)
                    player.GetData().SetObject(ModID(),"ScrapperItems",charItems);
            }
        }
        else{
            //send packet saying its full
        }
    })

    events.Addon.OnMessageID(frameCloseMessage,(player,msg)=>{
        let charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems());
        let selectedItems = charItems.selectedItems
            for (let i=0;i<selectedItems.length;i++){
                console.log(selectedItems[i].Bag)
                console.log(selectedItems[i].Slot)
            }
    })
}