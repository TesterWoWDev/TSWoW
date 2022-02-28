import { handleCraftMessages } from "./craftingSystem";
import { dungeon1 } from "./dungeon/dungeon-1";
import { torghastBuffSystem } from "./dungeon/torghast-master";
import { itemCacheSend } from "./item-cache";
import { itemCreate } from "./item_create";
import { itemReloading } from "./item_reloading";
import { Killstreaks } from "./QoL/Killstreak";
import { onLevelup } from "./QoL/onLevelup";
import { onLoginEvents } from "./QoL/onLogin";
import { reviveFix } from "./QoL/revive";
import { worldChat } from "./QoL/world-chat";

export function Main(events: TSEvents) {
    handleCraftMessages(events)
    dungeon1(events)
    torghastBuffSystem(events)
    itemCacheSend(events)
    itemCreate(events)
    itemReloading(events)
    Killstreaks(events)
    onLevelup(events)
    onLoginEvents(events)
    reviveFix(events)
    worldChat(events)
}
