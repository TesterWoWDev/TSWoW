import { onDeath } from "./death";
import { Killstreaks } from "./Killstreak";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { VIP } from "./VIP"


export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
}
