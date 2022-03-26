import { itemCache, itemCacheID } from "../../shared/Messages";


export function itemCacheSend(events:TSEvents)
{
    events.CustomPacketID.OnReceive(itemCacheID,(opcode,packet,player)=>{
        let msg = new itemCache(0,0);
        msg.read(packet);
        if(msg.type == 0){
            player.SendItemQueryPacket(msg.entry)
        }
        else{
            let tmpl = getExistingItemTemplate(msg.entry)
            //changes as necessary
            player.SendItemQueryPacketWithTemplate(tmpl)
        }
    })
}