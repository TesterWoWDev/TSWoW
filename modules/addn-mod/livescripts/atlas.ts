import { creatureNameMessage, creatureNameMessageID, creatureNoExistMessage, itemLootFinishMessage, itemLootMessage } from "../shared/Messages";

export function Atlas(events: TSEventHandlers) {
    events.PacketID.OnCustom(creatureNameMessageID,(_,packet,player)=>{
        let msg = new creatureNameMessage(0,"")
        msg.read(packet)
        let check = -2
        let entry = msg.entry.split("\\\\").join("").split(";").join("").split("/").join("").split("\"").join("\\\\\"").split("'").join("\\\\\'")
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
            if(check == 0){
                check = -1
                let query = QueryWorld('SELECT lootid FROM creature_template WHERE entry="' + entry + '";');
                while(query.GetRow()){
                    lootID = query.GetUInt32(0)
                    check = 0
                }
            }
            if(check == 0){
                let query = QueryWorld('SELECT * FROM creature_loot_template WHERE Entry="' + lootID + '";');
                while(query.GetRow()) {
                    if(query.GetUInt32(2) == 0){
                        if(query.GetFloat(3) > 0){
                            let pkt = new itemLootMessage(query.GetUInt32(1),query.GetInt8(7),query.GetInt8(8),query.GetFloat(3))
                        pkt.write().SendToPlayer(player);
                        check = 1
                        }
                    }
                }
                if(check = 0){
                    new creatureNoExistMessage(0).write().SendToPlayer(player);
                    return;
                }
            }else{
                new creatureNoExistMessage(0).write().SendToPlayer(player);
                return;
            }
        }else{
            new creatureNoExistMessage(0).write().SendToPlayer(player);
            return;
        }
        if(check = 1){
            let v = ToUInt32(entry)
            let pkt = new itemLootFinishMessage(v).write().SendToPlayer(player)
            player.SendCreatureQueryPacket(v) 
        }
    })
}