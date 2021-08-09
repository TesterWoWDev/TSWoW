import { onDeath } from "./death";
import { QoLChanges } from "./QoLChanges";
import { rangeLoot } from "./rangeLoot";
import { Skillshot } from "./skillshot";

export function Main(events: TSEventHandlers) {
	QoLChanges(events)
	Skillshot(events)
	onDeath(events)
    //rangeLoot(events)
}