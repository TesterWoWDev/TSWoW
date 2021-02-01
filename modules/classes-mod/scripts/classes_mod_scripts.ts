import { DoubleCast } from "./classes/caster/DoubleCast"
import { HealthLink } from "./classes/caster/HealthLink"
import { HealthSwap } from "./classes/caster/HealthSwap"
import { MultiPetAttack } from "./classes/caster/MultiPetAttack"

export function Main(events: TSEventHandlers) {
    MultiPetAttack(events)
    HealthSwap(events)
    HealthLink(events)
    DoubleCast(events)
}