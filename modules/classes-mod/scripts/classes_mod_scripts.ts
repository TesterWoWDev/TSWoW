import { DoubleCast } from "./classes/caster/DoubleCast"
import { HealthLink } from "./classes/caster/Spells/Death/HealthLink"
import { HealthSwap } from "./classes/caster/Spells/Death/HealthSwap"
import { MultiPetAttack } from "./classes/caster/Spells/Death/MultiPetAttack"

export function Main(events: TSEventHandlers) {
    MultiPetAttack(events)
    HealthSwap(events)
    HealthLink(events)
    DoubleCast(events)
}