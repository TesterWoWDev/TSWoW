import {std} from "tswow-stdlib"
import { CASTER_CLASS } from "../../Caster"

export const ARCANE_TRAINER_ALLY = std.CreatureTemplates.create('arcane-caster','arcane-trainer',28149)

ARCANE_TRAINER_ALLY.Name.enGB.set('Grandmaster Ruby')
ARCANE_TRAINER_ALLY.Title.enGB.set('Prodigy of the Arcane')
ARCANE_TRAINER_ALLY.Trainer.Class.set(CASTER_CLASS.ID);
ARCANE_TRAINER_ALLY.GossipID.set(0)
