import { onDeath } from "./death";
import { MultiPetAttack } from "././MultiPetAttack";
import { PvP } from "./PvP";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { VIP } from "./VIP"

export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	MultiPetAttack(events)
	PvP(events)
	Skillshot(events)
	onDeath(events)
}
