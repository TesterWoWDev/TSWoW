import {std} from "tswow-stdlib"
import { MODNAME } from "../../../moduleName"
import { CASTER_CLASS } from "../../Caster"

export const ARCANE_TRAINER_ALLY = std.CreatureTemplates.create(MODNAME,'arcane-trainer',5497)
	ARCANE_TRAINER_ALLY.Models.copyFrom(std.CreatureTemplates.load(32681).Models)
	ARCANE_TRAINER_ALLY.Name.enGB.set('Grandmaster Ruby')
	ARCANE_TRAINER_ALLY.Title.enGB.set('Prodigy of the Arcane')
	ARCANE_TRAINER_ALLY.UnitClass.setMage()
	ARCANE_TRAINER_ALLY.Trainer.Class.set(CASTER_CLASS.ID);
	ARCANE_TRAINER_ALLY.GossipID.set(0)
	ARCANE_TRAINER_ALLY.Level.set(80)

		
