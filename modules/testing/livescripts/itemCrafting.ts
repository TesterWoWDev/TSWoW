import { itemCraftingMessage, itemCraftingMessageID } from "../shared/Messages";

export function itemCrafting(events:TSEvents)
{
    events.CustomPacketID.OnReceive(itemCraftingMessageID,(opcode,packet,player)=>{
        let message = new itemCraftingMessage(1,[0],1);
        message.read(packet);
        if(message.purchase == 1){
            let dict =  CreateDictionary<uint32,uint32>({})
            for(let i=0;i<message.gems.length;i++)
            {
                //possibly a if has item then add to dict or add 1
                dict[message.gems[i]] =+ 1;
            }
            dict.forEach((value,key)=>{
                if(!player.HasItem(key,value,false)){
                    player.SendAreaTriggerMessage('You do not have the required items.');
                    return;
                }
            })
            dict.forEach((value,key)=>{
                player.RemoveItemByEntry(key,value)
            })
        }


    })
}