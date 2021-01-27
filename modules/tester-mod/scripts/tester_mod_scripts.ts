import { onDeath } from "./death";
import { NecromancerClass } from "./Necromancer";
import { PvP } from "./PvP";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { testChest } from "./testChest";
import { VIP } from "./VIP"

export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	NecromancerClass(events)
	PvP(events)
	Skillshot(events)
	//onDeath(events)
	testChest(events)
}
