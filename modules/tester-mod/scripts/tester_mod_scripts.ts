import { onDeath } from "./death";
import { MultiPetAttack } from "./caster/MultiPetAttack";
import { Killstreaks } from "./Killstreak";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { VIP } from "./VIP"
import { HealthLink } from "./caster/HealthLink";
import { HealthSwap } from "./caster/HealthSwap";
import { DoubelCast } from "./caster/DoubleCast";

export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	MultiPetAttack(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
	HealthLink(events)
	HealthSwap(events)
	DoubelCast(events)
}
