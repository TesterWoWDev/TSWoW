import { creatureNameMessage, creatureNoExistMessage, itemLootFinishMessage, itemLootMessage } from "../shared/Messages";

export function Atlas(events: TSEventHandlers) {
    events.Addon.OnMessageID(creatureNameMessage,(player,msg)=>{ 
        let check = -2
        let entry = msg.entry.replace("\\\\",'').replace(';','').replace("'",'\'').replace('/','').replace('"','').replace('+','').replace('-','')
        let lootID = 0;
        console.log("Player: "+player.GetName() + " AccountID: "+player.GetAccountId()+" Message: "+msg.entry+" isName: "+msg.isName + " Formatted: " + entry)
        if(entry.length > 0){
            if(msg.isName == 1){
                let query = QueryWorld("SELECT `entry` FROM `creature_template` WHERE `name` = '" + entry + "'");
                while(query.GetRow()){
                    entry = query.GetString(0)
                    check = 0
                }
            }
            let query = QueryWorld('SELECT lootid FROM creature_template WHERE entry="' + entry + '";');
            while(query.GetRow()){
                lootID = query.GetUInt32(0)
                check = 0
            }
            if(check == 0){
                let query = QueryWorld('SELECT * FROM creature_loot_template WHERE Entry="' + lootID + '";');
                while(query.GetRow()) {
                    if(query.GetUInt32(2) == 0){
                        if(query.GetFloat(3) > 0){
                            let pkt = new itemLootMessage()
                            pkt.itemID = query.GetUInt32(1);
                            pkt.itemCountMin = query.GetInt8(7);
                            pkt.itemCountMax = query.GetInt8(8);
                            pkt.dropChance = query.GetFloat(3);
                        player.SendData(pkt)
                        check = 1
                        }
                    }
                }
                if(check = 0){
                    player.SendData(new creatureNoExistMessage())
                    return;
                }
            }else{
                player.SendData(new creatureNoExistMessage())
                return;
            }
        }else{
            player.SendData(new creatureNoExistMessage())
            return;
        }
        if(check = 1){
            let pkt = new itemLootFinishMessage()
            pkt.entry = ToUInt32(entry)
            player.SendCreatureQueryPacket(ToUInt32(entry))
            player.SendData(pkt)  
        }
    })
}