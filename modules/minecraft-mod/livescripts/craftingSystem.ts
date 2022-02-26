import { craftMessageID, empty, craftMessage, returnCraftItemMessage, showScreen } from "../shared/Messages";
import { createItemWithChoices } from "./item_create";

const blank1: TSArray<uint32> = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const blank2: TSArray<TSArray<uint32>> = [
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
const blank3: TSArray<uint32> = [0, 0, 0, 0, 0];

const IDToType = CreateDictionary<uint32, TSArray<float>>({
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 0],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 1],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 2],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 3],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 4],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 5],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 6],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 7],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 8],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 9],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 10],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 11],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 12],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 13],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 14],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 15],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 16],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 17],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 18],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 19],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 20],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 21],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 22],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 23],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 24],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 25],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 26],
    [GetID("item_template", "minecraft-mod",  'test')]: [0, 27],
    //weapons
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 0],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 1],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 2],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 3],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 4],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 5],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 6],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 7],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 8],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 9],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 10],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 11],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 12],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 13],
    [GetID("item_template", "minecraft-mod",  'test')]: [1, 14],
})

const AllItemTypes = [
    //armor
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 11],
    [0, 12],
    [0, 13],
    [0, 14],
    [0, 15],
    [0, 16],
    [0, 17],
    [0, 18],
    [0, 19],
    [0, 20],
    [0, 21],
    [0, 22],
    [0, 23],
    [0, 24],
    [0, 25],
    [0, 26],
    [0, 27],
    //weapons
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [1, 10],
    [1, 11],
    [1, 12],
    [1, 13],
    [1, 14],
]

export function handleCraftMessages(events: TSEvents) {
    events.CustomPacketID.OnReceive(craftMessageID, (_, packet, player) => {
        let message = new craftMessage(blank1, blank2, 0, blank3);
        message.read(packet);
        let check = 0;
        let queryString =
            "SELECT craftID,craftCount,req1,cnt1,req2,cnt2,req3,cnt3,req4,cnt4,req5,cnt5,req6,cnt6,req7,cnt7,req8,cnt8,req9,cnt9 FROM minecraft_recipes WHERE ";
        let posString = "";
        let isEnchant = false;
        for (let i = 0; i < message.itemIDs.length; i++) {
            let fillVal: int32 = <int32>message.itemIDs[i];
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
        let pkt = new returnCraftItemMessage(0, 0, blank3);
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
                for (let i = 2; i <= 22; i += 2) {
                    if (result.GetUInt32(i) != 0) {
                        if (!player.HasItem(result.GetUInt32(i), result.GetUInt32(i + 1), false)) {
                            checkItems = 0;
                        }
                    } else {
                        break;
                    }
                }
                if (checkItems == 1) {
                    for (let i = 0; i < message.positions.length; i++) {
                        if (message.itemIDs[i] != 0) {
                            if (message.positions[i][0] == 0) {
                                message.positions[i][0] = 255;
                                message.positions[i][1] += 22;
                            } else {
                                message.positions[i][0] += 18;
                                message.positions[i][1] += -1;
                            }
                            if (!(isEnchant && i == 4)) {
                                player.RemoveItem(player.GetItemByPos(message.positions[i][0], message.positions[i][1]))
                                //player.RemoveItem(player.GetItemByEntry(message.itemIDs[i]), 1);
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
                        //if(IDToType[pkt.craftItem] != null){
                        if (pkt.craftItem <= 500) {                                
                            let itemChoice = AllItemTypes[pkt.craftItem]
                            CreateCustomItem(player, itemChoice[0], itemChoice[1], Math.ceil(<float>(pkt.craftItem / 50)) * 5)
                        } else {
                            let itema = player.AddItem(pkt.craftItem, pkt.craftItemCount);
                            if (itema.IsNull()) {
                                //player.SendMail(41,0,'forgotten items','You seem to have forgotten to make space in your bags, i have made sure this made its way to you. Shame about those names though, seem to of been lost.',0,0,[item])
                            }
                        }
                    }
                    item.SetEnchantment(message.enchants[0], 0);
                    if (message.enchants[1] != 0)
                        item.SetEnchantment(message.enchants[1], 2);
                    if (message.enchants[2] != 0)
                        item.SetEnchantment(message.enchants[2], 3);
                    if (message.enchants[3] != 0)
                        item.SetEnchantment(message.enchants[3], 4);
                    if (message.enchants[4] != 0)
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

function CreateCustomItem(player: TSPlayer, index1: number, index2: number, level: number): TSItem {
    return createItemWithChoices(player, index1, index2, level)
}

