import { Atlas } from "./atlas";
import { customQuest } from "./custom-quest";

export function Main(events: TSEventHandlers) {
    Atlas(events)
    customQuest(events)
}