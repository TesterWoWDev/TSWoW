import { creatureNamePacket, creatureNoExistPacket, itemLootFinishPacket, itemLootPacket } from "../shared/Messages";

export function Main(events: TSEventHandlers) {
    events.Addon.OnMessageID(creatureNamePacket,(player,msg)=>{ 
        let entry = msg.entry
        if(msg.isName == 1){
            let query1 = QueryWorld('SELECT entry FROM creature_template WHERE name=' + msg.entry + ';');
            while (query1.GetRow()){
                entry = query1.GetString(0)
            }
        }
        let query = QueryWorld('SELECT * FROM creature_loot_template WHERE item=' + msg.entry + ';');
        let i=false;
        while(query.GetRow()) {
            let pkt = new itemLootPacket()
            pkt.itemID = ToUInt32(msg.entry);
            pkt.dropChance = query.GetInt8(2);
            pkt.itemCountMin = query.GetInt8(4);
            pkt.itemCountMax = query.GetInt8(5);
            
            player.SendData(pkt)
            i = true;
        }
        if(i){
        player.SendData(new itemLootFinishPacket())
        }else{
            player.SendData(new creatureNoExistPacket())
        }
    })
}