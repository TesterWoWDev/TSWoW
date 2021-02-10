import { onDeath } from "./death";
import { Killstreaks } from "./Killstreak";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { VIP } from "./VIP"
import { Store } from "./store";

export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
    Store(events)
}
