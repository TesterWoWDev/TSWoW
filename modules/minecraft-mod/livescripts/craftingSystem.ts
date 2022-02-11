import {
    craftMessage,
    craftMessageID,
    empty,
    returnCraftItemMessage,
    showScreen,
} from "../shared/Messages";

export function handleCraftMessages(events: TSEventHandlers) {
    events.PacketID.OnCustom(craftMessageID, (_, packet, player) => {
        let v: TSArray<uint32> = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        let vv: TSArray<TSArray<uint32>> = [
            empty,
            empty,
            empty,
            empty,
            empty,
            empty,
            empty,
            empty,
            empty,
        ];
        let vvv: TSArray<uint32> = [0, 0, 0, 0, 0];
        let message = new craftMessage(v, vv, 0, vvv);
        message.read(packet);
        let check = 0;
        let queryString =
            "SELECT craftID,craftCount,req1,cnt1,req2,cnt2,req3,cnt3,req4,cnt4,req5,cnt5,req6,cnt6,req7,cnt7,req8,cnt8,req9,cnt9 FROM minecraft_recipes WHERE ";
        let posString = "";
        let isEnchant = false;
        for (let i = 0; i < message.itemIDs.length; i++) {
            let fillVal: int32 = <int32> message.itemIDs[i];
            if (message.itemIDs[i] != 0) {
                if (i == 4) {
                    if (player.HasItem(message.itemIDs[i], 1, false)) {
                        let item = player.GetItemByEntry(message.itemIDs[i]);
                        if (item.GetClass() == 2 || item.GetClass() == 4) {
                            isEnchant = true;
                            fillVal = -1;
                        }
                    }
                }
            }
            posString = posString + "pos" + (i + 1) + " = " + fillVal + " AND ";
        }
        posString = posString.substring(0, posString.length - 4);
        let result = QueryWorld(queryString + posString);
        let va: TSArray<uint32> = [0, 0, 0, 0, 0];
        let pkt = new returnCraftItemMessage(0, 0, va);
        while (result.GetRow()) {
            check = 1;
            if (isEnchant) {
                pkt.craftItem = message.itemIDs[4];
                let enchSet = 0;
                for (let i = 0; i < 5; i++) {
                    if (message.enchants[i] == 0) {
                        message.enchants[i] = result.GetUInt32(0);
                        enchSet = 1;
                        break;
                    }
                }
                if (enchSet == 0) {
                    player.SendAreaTriggerMessage(
                        "You do not have the open enchant slots!"
                    );
                    player.SendBroadcastMessage("You do not have the open enchant slots");
                    return;
                }
            } else {
                pkt.craftItem = result.GetUInt32(0);
            }
            pkt.craftItemCount = result.GetUInt32(1);
            if (message.purchase == 1) {
                let checkItems = 1;
                for (let i = 2; i < 23; i++) {
                    if (result.GetUInt32(i) != 0) {
                        if (
                            !player.HasItem(
                                result.GetUInt32(i),
                                result.GetUInt32(i + 1),
                                false
                            )
                        ) {
                            checkItems = 0;
                        }
                    } else {
                        break;
                    }
                    i++;
                }
                if (checkItems == 1) {
                    for (let i = 0; i < message.positions.length; i++) {
                        if (message.itemIDs[i] != 0) {
                            let itemID = message.itemIDs[i];
                            if (message.positions[i][0] == 0) {
                                message.positions[i][0] = 255;
                                message.positions[i][1] += 22;
                            } else {
                                message.positions[i][0] += 18;
                                message.positions[i][1] += -1;
                            }
                            if (!(isEnchant && i == 4)) {
                                player.RemoveItem(player.GetItemByEntry(itemID), 1);
                            }
                        }
                    }
                    let item = CreateItem(pkt.craftItem, pkt.craftItemCount);
                    if (isEnchant) {
                        item = player.GetItemByPos(
                            message.positions[4][0],
                            message.positions[4][1]
                        );
                    } else {
                        let itema = player.AddItem(pkt.craftItem, pkt.craftItemCount);
                        if (itema.IsNull()) {
                            //player.SendMail(41,0,'forgotten items','You seem to have forgotten to make space in your bags, i have made sure this made its way to you. Shame about those names though, seem to of been lost.',0,0,[item])
                        }
                    }
                    
                    item.SetEnchantment(message.enchants[0], 0);
                    if(message.enchants[1] != 0)
                    item.SetEnchantment(message.enchants[1], 2);
                    if(message.enchants[2] != 0)
                    item.SetEnchantment(message.enchants[2], 3);
                    if(message.enchants[3] != 0)
                    item.SetEnchantment(message.enchants[3], 4);
                    if(message.enchants[4] != 0)
                    item.SetEnchantment(message.enchants[4], 5);
                    item.SetEnchantment(1, 6);
                    new showScreen(0).write().SendToPlayer(player);
                    pkt.craftItem = 0;
                } else {
                    player.SendAreaTriggerMessage(
                        "You do not have the required materials!"
                    );
                    player.SendBroadcastMessage(
                        "You do not have the required materials!"
                    );
                }
            }
            player.SendItemQueryPacket(pkt.craftItem);
        }
        if (check == 0 && message.purchase == 1) {
            player.SendAreaTriggerMessage("That wasn't a valid pattern!");
            player.SendBroadcastMessage("That wasn't a valid pattern!");
        }
        pkt.enchantNum = message.enchants;
        pkt.write().SendToPlayer(player);
    });
}
