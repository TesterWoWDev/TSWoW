export function transmog(events:TSEventHandlers){
    events.Player.OnCommand((player,com,found)=>{
        if(com.get().startsWith("transmogclear")){
            found.set(true)
            player.GetTasks().AddTimer("test_task",50,1,(timer,entity,del,can)=>{ 
                let clearString = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
                QueryCharacters("INSERT INTO `playertransmog` VALUES("+entity.ToPlayer().GetGUIDLow()+",\""+clearString+"\",\""+clearString+"\") ON DUPLICATE KEY UPDATE transmogIDs=\""+clearString+"\", transmogVisualIDs=\""+clearString+"\"")
                setAllTransmogs(entity.ToPlayer())
            });  
            return
        }else if(com.get().startsWith("transmog")){
            found.set(true)
            let vis = com.get().substr(8)
            let visSplit = vis.split(" ")//itemID,enchantID,slotID\
            if(visSplit.length == 3){
                let slot = ToUInt32(visSplit[2])
                if(slot < 19 && slot >= 0){
                    if(!player.GetItemByPos(255,slot).IsNull()){
                        let oldValID = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
                        let oldValVisID = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
                        let tmogInfo = QueryCharacters("SELECT * FROM `playertransmog` WHERE playerGUID = "+player.GetGUIDLow())
                        while(tmogInfo.GetRow()){
                            oldValID = tmogInfo.GetString(1)
                            oldValVisID = tmogInfo.GetString(2)
                        }
                        let tmogIDs = oldValID.split(",")
                        let tmogVisIDs = oldValVisID.split(",")
                        tmogIDs[slot] = visSplit[0]
                        tmogVisIDs[slot] = visSplit[1]
                        let idsString = ""
                        let visString = ""
                        for(let i=0;i<tmogVisIDs.length;i++){
                            idsString = idsString + ","+tmogIDs[i]
                            visString = visString + ","+tmogVisIDs[i]
                        }
                        idsString = idsString.substr(1)
                        visString = visString.substr(1)
                        QueryCharacters("INSERT INTO `playertransmog` VALUES("+player.GetGUIDLow()+",\""+idsString+"\",\""+visString+"\") ON DUPLICATE KEY UPDATE transmogIDs=\""+idsString+"\", transmogVisualIDs=\""+visString+"\"")
                        setAllTransmogs(player)
                    }else{
                        player.SendBroadcastMessage("Equip an item first!")
                    }
                }else{
                    player.SendBroadcastMessage("use a valid slot ID!\nHEAD = 0  - SHOULDERS = 2 - SHIRT = 3\nCHEST = 4 - WAIST = 5 - LEGS = 6\nFEET = 7 - WRISTS = 8 - HANDS = 9\nBACK = 14 - MAINHAND = 15 - OFFHAND = 16\nRANGED = 17 - TABARD = 18")
                }    
            }else{
                player.SendBroadcastMessage('Usage: .transmog itemID visualID slotID -- itemID or visualID can be filled with 0 to ignore')
            }
        }
    })

    events.Player.OnLogin((player,first)=>{
        setAllTransmogs(player)
    })

    events.Items.OnEquipEarly((item,player,slot,isSwap,result)=>{
        player.GetTasks().AddTimer("test_task",50,1,(timer,entity,del,can)=>{
            setAllTransmogs(entity.ToPlayer())
        });  
    })
}
function setAllTransmogs(player:TSPlayer){
    let tmogInfo = QueryCharacters("SELECT * FROM `playertransmog` WHERE playerGUID = "+player.GetGUIDLow())
    while(tmogInfo.GetRow()){
        let itemIDs = tmogInfo.GetString(1).split(',')
        let visualIDs = tmogInfo.GetString(2).split(',')
        for(let i=0;i<itemIDs.length;i++){
            let item = ToUInt32(itemIDs[i])
            let visual = ToUInt32(visualIDs[i])
            if(!player.GetItemByPos(255,i).IsNull()){
                if(item > 0){
                    player.SetUInt64Value((0x0087+0x008E+0x0006)+(i*2),item)
                }
                else{
                    player.SetUInt64Value((0x0087+0x008E+0x0006)+(i*2),player.GetItemByPos(255,i).GetEntry())
                }
                player.SetUInt64Value((0x0088+0x008E+0x0006)+(i*2),visual)//enchantment visual                
            }
        }
    }
}