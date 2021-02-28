import { DoubleCast } from "./caster/DoubleCast"
import { HealthLink } from "./caster/Spells/Death/HealthLink"
import { HealthSwap } from "./caster/Spells/Death/HealthSwap"
import { MultiPetAttack } from "./caster/Spells/Death/MultiPetAttack"
import { Ignite } from "./caster/Spells/Fire/Ignite"

export function Main(events: TSEventHandlers) {
		MultiPetAttack(events)
		HealthSwap(events)
		HealthLink(events)
		DoubleCast(events)
        Ignite(events)
}