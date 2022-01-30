import { handleCraftMessages } from "./craftingSystem"
import { creature1Script } from "./creature/creature1-test"
import { onLevelup } from "./QoL/onLevelup"
import { worldChat } from "./QoL/world-chat"
import { Killstreaks } from "./QoL/Killstreak"
import { onLoginEvents } from "./QoL/onLogin"
import { itemLearnSpell } from "./item/item-learn-spell"
import { reviveFix } from "./QoL/revive"
import { creatureDeathApplyBuff } from "./creature/creature-death-apply-buff"
import { creatureDeathSummon } from "./creature/creature-death-summon"
import { torghastBuffSystem } from "./dungeon/torghast-master"
import { dungeon1 } from "./dungeon/dungeon-1"

export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
    worldChat(events)
    creature1Script(events)
    onLevelup(events)
    Killstreaks(events)
    itemLearnSpell(events)
    reviveFix(events)
    creatureDeathApplyBuff(events)
    creatureDeathSummon(events)
    torghastBuffSystem(events)
    //hungerGames(events)
    dungeon1(events)
}