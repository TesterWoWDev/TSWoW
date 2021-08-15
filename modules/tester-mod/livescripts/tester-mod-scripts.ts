import { onDeath } from "./death";
import { rangeLoot } from "./rangeLoot";
import { Skillshot } from "./skillshot";

export function Main(events: TSEventHandlers) {
	Skillshot(events)
	onDeath(events)
    //rangeLoot(events)
}