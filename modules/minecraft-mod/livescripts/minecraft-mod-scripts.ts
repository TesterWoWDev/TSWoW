import { handleCraftMessages } from "./crafting-messages"
import { creature1Script } from "./creature-scripts/creature1-test"
import { onLevelup } from "./onLevelup"
import { onLoginEvents } from "./onLogin"
import { transmog } from "./transmog"
import { worldChat } from "./world-chat"
export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
    transmog(events)
	worldChat(events)
    creature1Script(events)
    onLevelup(events)
}