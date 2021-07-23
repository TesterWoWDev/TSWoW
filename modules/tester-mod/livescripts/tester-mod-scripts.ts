import { onDeath } from "./death";
import { Killstreaks } from "./Killstreak";
import { QoLChanges } from "./QoLChanges";
import { rangeLoot } from "./rangeLoot";
import { Skillshot } from "./skillshot";

export function Main(events: TSEventHandlers) {
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
    rangeLoot(events)
}