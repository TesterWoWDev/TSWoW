import {std} from "tswow-stdlib"
import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate"
import { CASTER_CLASS } from "../../Caster"

export const ARCANE_TRAINER_ALLY = std.CreatureTemplates.create('arcane-caster','arcane-trainer',5497)


ARCANE_TRAINER_ALLY.Name.enGB.set('Grandmaster Ruby')
ARCANE_TRAINER_ALLY.Title.enGB.set('Prodigy of the Arcane')
ARCANE_TRAINER_ALLY.Trainer.Class.set(CASTER_CLASS.ID);
ARCANE_TRAINER_ALLY.GossipID.set(0)
ARCANE_TRAINER_ALLY.Level.set(80)

