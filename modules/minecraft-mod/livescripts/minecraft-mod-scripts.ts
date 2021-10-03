import { handleCraftMessages } from "./crafting-messages"
import { creature1Script } from "./creature-scripts/creature1-test"
import { invasions } from "./invasions"
import { onLevelup } from "./QoL/onLevelup"
import { transmog } from "./transmog"
import { worldChat } from "./world-chat"
import { Dueling } from "./QoL/onDuel"
import { Killstreaks } from "./QoL/Killstreak"
import { onLoginEvents } from "./QoL/onLogin"
import { itemLearnSpell } from "./item-learn-spell"
import { creatureDeathTest } from "./creature-death-test"

export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
    //transmog(events)
	worldChat(events)
    creature1Script(events)
    onLevelup(events)
    Killstreaks(events)
    Dueling(events)
    itemLearnSpell(events)
    //invasions(events)
    creatureDeathTest(events)      
}