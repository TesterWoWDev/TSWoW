import { itemCacheID,itemCache } from "../shared/Messages";

export function itemCacheSend(events:TSEvents)
{
    events.CustomPacketID.OnReceive(itemCacheID,(opcode,packet,player)=>{
        let msg = new itemCache(0,0);
        msg.read(packet);
        if(msg.type == 0){
            player.SendItemQueryPacket(msg.entry)
        }else{
            let template = CreateItem(msg.entry,1).GetTemplate()
            player.SendItemQueryPacketWithTemplate(template)
        }
    })
}