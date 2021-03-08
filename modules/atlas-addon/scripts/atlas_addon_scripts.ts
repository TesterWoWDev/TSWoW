import { creatureNamePacket, creatureNoExistPacket, itemLootFinishPacket, itemLootPacket } from "../shared/Messages";

export function Main(events: TSEventHandlers) {
    events.Addon.OnMessageID(creatureNamePacket,(player,msg)=>{ 
        let entry = msg.entry
        if(msg.isEntry == 0){
            let query1 = QueryWorld('SELECT entry FROM creature_template WHERE name=' + msg.entry + ';');
            while (query1.GetRow()){
                entry = query1.GetString(0)
            }
        }
        let query = QueryWorld('SELECT * FROM creature_loot_template WHERE entry=' + msg.entry + ';');
        let i=0;
        while(query.GetRow()) {
            let pkt = new itemLootPacket()
            player.SendData(pkt)
            i = i+1;
        }
        if(i > 0){
        player.SendData(new itemLootFinishPacket())
        }else{
            player.SendData(new creatureNoExistPacket())
        }
    })
}