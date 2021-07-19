import { handleCraftMessages } from "./crafting-messages"
import { onLoginEvents } from "./onLogin"
import { transmog } from "./transmog"
import { worldChat } from "./world-chat"
export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
    transmog(events)
	worldChat(events)
}