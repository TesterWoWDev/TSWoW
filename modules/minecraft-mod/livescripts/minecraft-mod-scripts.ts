import { handleCraftMessages } from "./crafting-messages"
import { onLoginEvents } from "./onLogin"
import { transmog } from "./transmog"

export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
    transmog(events)
}