import { handleCraftMessages } from "./crafting-messages"
import { onLoginEvents } from "./onLogin"

export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
}