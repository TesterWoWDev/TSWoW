
const tmogField = "player_transmog";
@CharactersTable
class playerMog extends DBTable {
    constructor(playerGUID: uint32){
        super()
        this.playerGUID = playerGUID
        this.transmogIDs = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
        this.visualIDs = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
    }
    @PrimaryKey
        playerGUID: uint32 = 0
    @Field
        transmogIDs: string = ""
    @Field
        visualIDs: string = ""
}

export function transmog(events:TSEventHandlers){

    events.Player.OnLogin((player)=>{
        const guid = player.GetGUIDLow()
        const rows = LoadRows(playerMog,`playerGUID = ${guid}`)
        const stats = rows.length > 0 ? rows.get(0) : new playerMog(guid);
        player.GetData().SetObject(tmogField,stats);
        setAllTransmogs(player,stats)
    })
    
    events.Player.OnSave(player=>{
        player.GetData().GetObject(tmogField, new playerMog(player.GetGUIDLow())).save()
    })

    // events.Items.OnEquipEarly((item,player)=>{
    //     player.GetTasks().AddTimer("tasked",3000,1,(timer,entity,del,can)=>
    //     setAllTransmogs(entity.ToPlayer(), player.GetData().GetObject(tmogField, new playerMog(player.GetGUIDLow()))))
    // })
    events.Player.OnCommand((player,com,found)=>{
        if(com.get().startsWith("transmogclear")){
            found.set(true)
            player.GetData().SetObject(tmogField,new playerMog(player.GetGUIDLow()));
            setAllTransmogs(player,new playerMog(player.GetGUIDLow()))
        }else if(com.get().startsWith("transmog")){
            found.set(true)
            let visSplit = com.get().split(" ")//itemID,enchantID,slotID\
            if(visSplit.length == 4){
                let slot = ToUInt32(visSplit[3])
                if(slot < 19 && slot >= 0){
                    if(!player.GetItemByPos(255,slot).IsNull()){
                        const tmogInfo = player.GetData().GetObject(tmogField, new playerMog(player.GetGUIDLow()))
                        let tmogIDs = tmogInfo.transmogIDs.split(",")
                        let tmogVisIDs = tmogInfo.visualIDs.split(",")
                        tmogIDs[slot] = visSplit[1]
                        tmogVisIDs[slot] = visSplit[2]
                        let idsString = ""
                        let visString = ""
                        for(let i=0;i<tmogVisIDs.length;i++){
                            idsString = idsString + ","+tmogIDs[i]
                            visString = visString + ","+tmogVisIDs[i]
                        }
                        tmogInfo.transmogIDs = idsString.substr(1)
                        tmogInfo.visualIDs = visString.substr(1)
                        player.GetData().SetObject(tmogField,tmogInfo)
                        setAllTransmogs(player,tmogInfo)
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
}

function setAllTransmogs(player:TSPlayer,tmogInfo: playerMog){
    let itemIDs = tmogInfo.transmogIDs.split(',')
    let visualIDs = tmogInfo.visualIDs.split(',')
    for(let i=0;i<itemIDs.length;i++){
        let itemID = ToUInt32(itemIDs[i])
        let visual = ToUInt32(visualIDs[i])
        if(!player.GetItemByPos(255,i).IsNull()){
            let index = 0x0087+0x008E+0x0006
            if(itemID > 0){
                player.SetUInt64Value(index+(i*2),itemID)
            }else{
                player.SetUInt64Value(index+(i*2),player.GetItemByPos(255,i).GetEntry())
            }
            player.SetUInt64Value(index+0x0001+(i*2),visual)//enchantment visual                
        }
    }
}