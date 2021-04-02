import { creatureNameMessage, creatureNoExistMessage, itemLootFinishMessage, itemLootMessage } from "../shared/Messages";

export function Atlas(events: TSEventHandlers) {
    events.Addon.OnMessageID(creatureNameMessage,(player,msg)=>{ 
        let entry = msg.entry.replace("\\\\",'').replace(';','').replace("'",'\'').replace('/','').replace('"','').replace('+','').replace('-','')
        console.log("Player: "+player.GetName() + " AccountID: "+player.GetAccountId()+" Message: "+msg.entry+" Flag: "+msg.isName)
        if(entry.length > 0){
            if(msg.isName == 1){
                let query = QueryWorld('SELECT entry FROM creature_template WHERE name="' + entry + '";');
                while(query.GetRow()){
                    entry = query.GetString(0)
                }
            }
            let check = 0
            let query = QueryWorld('SELECT * FROM creature_loot_template WHERE Entry="' + entry + '";');
            while(query.GetRow()) {
                let pkt = new itemLootMessage()
                    pkt.itemID = query.GetUInt32(1);
                    pkt.itemCountMin = query.GetInt8(7);
                    pkt.itemCountMax = query.GetInt8(8);
                    pkt.dropChance = query.GetDouble(3);
                player.SendData(pkt)
                check = 1
            }
            if(check = 0){
                player.SendData(new creatureNoExistMessage())
                return;
            }
        }else{
            player.SendData(new creatureNoExistMessage())
            return;
        }
        player.SendData(new itemLootFinishMessage())  
    })
}