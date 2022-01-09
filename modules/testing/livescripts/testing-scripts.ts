import { customQuest } from "./custom-quest";
import { housing } from "./player_housing";
import { torghastBuffSystem } from "./torghast";

export function Main(events: TSEventHandlers) {
    customQuest(events)
    housing(events)
    torghastBuffSystem(events)
}
