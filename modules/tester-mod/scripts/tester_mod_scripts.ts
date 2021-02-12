import { onDeath } from "./death";
import { encampment } from "./encampment";
import { Killstreaks } from "./Killstreak";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { Store } from "./store";

export function Main(events: TSEventHandlers) {
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
    Store(events)
    encampment(events)
}
