import { blagSlotMessage, frameCloseMessage } from "../shared/Messages";


class ScrapperItems extends TSClass {
    // @ts-ignore
    selectedItems: TSArray<TSArray<uint32>>;
}

export function Main(events: TSEventHandlers) {
    
    events.Addon.OnMessageID(blagSlotMessage,(player,msg)=>{
        let charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems());
        let selectedItems = charItems.selectedItems
        let found = false
        if(selectedItems.length <= 12){
            for (let i=1;i<selectedItems.length;i++){//skip over that [0]
                let bag:uint32 = selectedItems[i][0]
                let slot:uint32 = selectedItems[i][1]
                if(msg.Bag == bag && msg.Slot == slot){
                    found = true
                    //send packet saying item is already in scrapper(make items only stack to 1?)
                }
            }
            if(!found){
                    selectedItems.push(<TSArray<uint32>>[msg.Bag,msg.Slot])
                    player.GetData().SetObject(ModID(),"ScrapperItems",charItems);
            }
        }else{
            //send packet saying its full
        }
    })

    events.Addon.OnMessageID(frameCloseMessage,(player,msg)=>{
        let charItems = player.GetData().GetObject<ScrapperItems>(ModID(),"ScrapperItems",()=>new ScrapperItems());
        let selectedItems = charItems.selectedItems
            for (let i=1;i<selectedItems.length;i++){//skip over that [0]
                console.log(selectedItems[i][0])
                console.log(selectedItems[i][1])
            }
    })
}