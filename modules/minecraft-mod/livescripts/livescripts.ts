import { handleCraftMessages } from "./craftingSystem";
import { onLevelup } from "./QoL/onLevelup";
import { worldChat } from "./QoL/world-chat";
import { Killstreaks } from "./QoL/Killstreak";
import { onLoginEvents } from "./QoL/onLogin";
import { itemLearnSpell } from "./item/item-learn-spell";
import { reviveFix } from "./QoL/revive";
import { creatureDeathApplyBuff } from "./creature/creature-death-apply-buff";
import { creatureDeathSummon } from "./creature/creature-death-summon";
import { torghastBuffSystem } from "./dungeon/torghast-master";
import { dungeon1 } from "./dungeon/dungeon-1";
import { itemReloading } from "./item_reloading";
import { itemCreate } from "./item_create";
import { itemCacheSend } from "./item-cache";

export function Main(events: TSEvents) {
    handleCraftMessages(events);
    onLoginEvents(events);
    worldChat(events);
    onLevelup(events);
    Killstreaks(events);
    itemLearnSpell(events);
    reviveFix(events);
    creatureDeathApplyBuff(events);
    creatureDeathSummon(events);
    torghastBuffSystem(events);
    dungeon1(events);
    itemReloading(events);
    itemCreate(events);
    itemCacheSend(events);
}
