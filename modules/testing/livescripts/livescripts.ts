import { deathLoot } from "./death-loot";
import { housing } from "./player_housing";

export function Main(events: TSEvents) {
    housing(events);
    deathLoot(events)
}
