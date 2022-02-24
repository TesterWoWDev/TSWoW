const tmogField = "player_transmog";
@CharactersTable
class playerMog extends DBEntry {
    constructor(playerGUID: uint32) {
        super();
        this.playerGUID = playerGUID;
        this.transmogIDs = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
        this.visualIDs = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
    }
    @DBPrimaryKey
    playerGUID: uint32 = 0;
    @DBField
    transmogIDs: string = "";
    @DBField
    visualIDs: string = "";
    
    static get(player: TSPlayer): playerMog {
        return player.GetObject('player_transmog'
            , LoadDBEntry(new playerMog(player.GetGUID()))
        )
    }
}

export function transmog(events: TSEvents) {
    events.Player.OnLogin((player) => {

        let qInfo = player.GetObject<playerMog>(tmogField,new playerMog(player.GetGUIDLow()))
        qInfo.Load() // ??
        let q = LoadDBEntry(qInfo) //??
        player.SetObject(tmogField, qInfo);
        player.SetObject(tmogField, q);
        setAllTransmogs(player, q);
    });

    events.Player.OnSave((player) => {
        player.GetObject(tmogField, new playerMog(player.GetGUIDLow())).Save();
    });

    events.Items.OnCanEquip((item, player) => {
        player.AddNamedTimer("transmogEquipTask", 3000, 1, (owner, timer) =>
            setAllTransmogs(
                owner.ToPlayer(),
                player.GetObject(tmogField, new playerMog(player.GetGUIDLow()))
            )
        );
    });

    events.Player.OnCommand((player, com, found) => {
        if (com.get().startsWith("transmogclear")) {
            found.set(true);
            player.SetObject(tmogField, new playerMog(player.GetGUIDLow()));
            setAllTransmogs(player, new playerMog(player.GetGUIDLow()));
        } else if (com.get().startsWith("transmog")) {
            found.set(true);
            let visSplit = com.get().split(" "); //itemID,enchantID,slotID\
            if (visSplit.length == 4) {
                let slot = ToUInt32(visSplit[3]);
                if (slot < 19 && slot >= 0) {
                    if (!player.GetItemByPos(255, slot).IsNull()) {
                        const tmogInfo = player.GetObject(
                            tmogField,
                            new playerMog(player.GetGUIDLow())
                        );
                        let tmogIDs = tmogInfo.transmogIDs.split(",");
                        let tmogVisIDs = tmogInfo.visualIDs.split(",");
                        tmogIDs[slot] = visSplit[1];
                        tmogVisIDs[slot] = visSplit[2];
                        let idsString = "";
                        let visString = "";
                        for (let i = 0; i < tmogVisIDs.length; i++) {
                            idsString = idsString + "," + tmogIDs[i];
                            visString = visString + "," + tmogVisIDs[i];
                        }
                        tmogInfo.transmogIDs = idsString.substr(1);
                        tmogInfo.visualIDs = visString.substr(1);
                        player.SetObject(tmogField, tmogInfo);
                        setAllTransmogs(player, tmogInfo);
                    } else {
                        player.SendBroadcastMessage("Equip an item first!");
                    }
                } else {
                    player.SendBroadcastMessage(
                        "use a valid slot ID!\nHEAD = 0  - SHOULDERS = 2 - SHIRT = 3\nCHEST = 4 - WAIST = 5 - LEGS = 6\nFEET = 7 - WRISTS = 8 - HANDS = 9\nBACK = 14 - MAINHAND = 15 - OFFHAND = 16\nRANGED = 17 - TABARD = 18"
                    );
                }
            } else {
                player.SendBroadcastMessage(
                    "Usage: .transmog itemID visualID slotID -- itemID or visualID can be filled with 0 to ignore"
                );
            }
        }
    });
}

function setAllTransmogs(player: TSPlayer, tmogInfo: playerMog) {
    let itemIDs = tmogInfo.transmogIDs.split(",");
    let visualIDs = tmogInfo.visualIDs.split(",");
    for (let i = 0; i < itemIDs.length; i++) {
        let itemID = ToUInt32(itemIDs[i]);
        let visual = ToUInt32(visualIDs[i]);
        if (!player.GetItemByPos(255, i).IsNull()) {
            let index = 0x0087 + 0x008e + 0x0006;
            if (itemID > 0) {
                player.SetRawUInt64(index + i * 2, itemID);
            } else {
                player.SetRawUInt64(
                    index + i * 2,
                    player.GetItemByPos(255, i).GetEntry()
                );
            }
            player.SetRawUInt64(index + 0x0001 + i * 2, visual); //enchantment visual
        }
    }
}
