import { DoubleCast } from "./caster/DoubleCast"
import { HealthLink } from "./caster/Spells/Death/HealthLink"
import { HealthSwap } from "./caster/Spells/Death/HealthSwap"
import { MultiPetAttack } from "./caster/Spells/Death/MultiPetAttack"

export function Main(events: TSEventHandlers) {
		MultiPetAttack(events)
		HealthSwap(events)
		HealthLink(events)
		DoubleCast(events)
}