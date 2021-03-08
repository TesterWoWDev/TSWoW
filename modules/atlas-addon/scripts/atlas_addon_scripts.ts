import { creatureNamePacket, creatureNoExistPacket, itemLootFinishPacket, itemLootPacket } from "../shared/Messages";

export function Main(events: TSEventHandlers) {
    events.Addon.OnMessageID(creatureNamePacket,(player,msg)=>{ 
        let entry = msg.entry
        if(msg.isName == 1){
            let query1 = QueryWorld('SELECT COUNT(*) FROM creature_template WHERE name=' + entry + ';');
            while (query1.GetRow()){
                if(query1.GetUInt32(0) > 0){
                    let query2 = QueryWorld('SELECT entry FROM creature_template WHERE name=' + msg.entry + ';');
                    while(query2.GetRow()){
                        entry = query2.GetString(0)
                    }
                }
                else{
                    player.SendData(new creatureNoExistPacket())
                    return;
                }
            }
        }
        let queryCheck = QueryWorld('SELECT COUNT(*) FROM creature_loot_template WHERE Entry=' + entry + ';');
        while(queryCheck.GetRow()){
            if(queryCheck.GetUInt32(0) > 0){
                let query = QueryWorld('SELECT * FROM creature_loot_template WHERE Entry=' + entry + ';');
                while(query.GetRow()) {
                    let pkt = new itemLootPacket()
                        pkt.itemID = query.GetUInt32(1);
                        pkt.itemCountMin = query.GetInt8(7);
                        pkt.itemCountMax = query.GetInt8(8);
                        pkt.dropChance = query.GetDouble(3);
                    player.SendData(pkt)
                }
            }
            else{
                player.SendData(new creatureNoExistPacket())
                return;
            }
        }
        player.SendData(new itemLootFinishPacket())  
    })
}