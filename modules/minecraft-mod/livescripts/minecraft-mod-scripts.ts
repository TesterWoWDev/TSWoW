import { handleCraftMessages } from "./craftingSystem"
import { creature1Script } from "./creature/creature1-test"
import { onLevelup } from "./QoL/onLevelup"
import { worldChat } from "./QoL/world-chat"
import { Dueling } from "./QoL/onDuel"
import { Killstreaks } from "./QoL/Killstreak"
import { onLoginEvents } from "./QoL/onLogin"
import { itemLearnSpell } from "./item/item-learn-spell"
import { creatureDeathTest } from "./creature/creature-death-test"
import { reviveFix } from "./QoL/revive"

export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
	worldChat(events)
    creature1Script(events)
    onLevelup(events)
    Killstreaks(events)
    Dueling(events)
    itemLearnSpell(events)
    creatureDeathTest(events)      
    reviveFix(events)
}