import { onDeath } from "./death";
import { Killstreaks } from "./Killstreak";
import { manaSystem } from "./manaSystem";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { Store } from "./store";

export function Main(events: TSEventHandlers) {
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
    Store(events)
    manaSystem(events)
}
