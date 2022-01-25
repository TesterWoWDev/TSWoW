import { hungerGames } from "./hunger-games";
import { housing } from "./player_housing";
import { torghastBuffSystem } from "./torghast";

export function Main(events: TSEventHandlers) {
    housing(events)
    torghastBuffSystem(events)
    hungerGames(events)
}
