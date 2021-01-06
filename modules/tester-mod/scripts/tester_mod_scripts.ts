import { ID } from "./ID";
import { NecromancerClass } from "./Necromancer";
import { PvP } from "./PvP";
import { QoLChanges } from "./QoLChanges";
import { VIP } from "./VIP"

export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	NecromancerClass(events)
	PvP(events)
}
