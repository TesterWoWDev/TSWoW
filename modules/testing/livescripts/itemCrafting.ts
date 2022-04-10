import { itemCraftingMessage, itemCraftingMessageID } from "../shared/Messages";

export function itemCrafting(events: TSEvents) {
    events.CustomPacketID.OnReceive(itemCraftingMessageID, (opcode, packet, player) => {
        let message = new itemCraftingMessage(1, <TSArray<uint32>>[0], 1);
        message.read(packet);
        if (message.purchase == 1) {
            let dict = CreateDictionary<uint32, uint32>({})
            for (let i = 0; i < message.gems.length; i++) {
                //possibly a if has item then add to dict or add 1
                dict[message.gems[i]] = + 1;
            }
            dict.forEach((value, key) => {
                if (!player.HasItem(key, value, false)) {
                    player.SendAreaTriggerMessage('You do not have the required items.');
                    return;
                }
            })
            //get ilvl from dict
            //also get spells info from dict
            dict.forEach((value, key) => {
                player.RemoveItemByEntry(key, value)
            })
            let chosenItem = GetItemTemplate(message.typeID)
            let iclass = chosenItem.GetClass();
            let subclass = chosenItem.GetSubClass();
            let quality = chosenItem.GetQuality();
            let name = chosenItem.GetName();
            //pass all of this + ilvl/spell info to a new function
            //rest get recreated
            //all else chosen by the algorithm.
        }
    })
}