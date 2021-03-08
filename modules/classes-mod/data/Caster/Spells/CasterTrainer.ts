import {std} from "tswow-stdlib"
import { Pos } from "tswow-stdlib/Misc/Position"
import { MODNAME } from "../../moduleName"
import { CASTER_CLASS } from "../Caster"

export const CASTER_SKILL_TRAINER_HORDE = std.CreatureTemplates.create(MODNAME, 'Caster-skill-trainer', 3049)
	CASTER_SKILL_TRAINER_HORDE.Name.enGB.set('Thurston Xane')
	CASTER_SKILL_TRAINER_HORDE.Title.enGB.set('Caster Trainer') // can be changed as with greeting
	CASTER_SKILL_TRAINER_HORDE.Trainer.Greeting.enGB.set('Welcome Young Caster')
	CASTER_SKILL_TRAINER_HORDE.Trainer.Class.set(CASTER_CLASS.ID);
	CASTER_SKILL_TRAINER_HORDE.FactionTemplate.set(35)
	CASTER_SKILL_TRAINER_HORDE.GossipID.set(0);
	CASTER_SKILL_TRAINER_HORDE.spawn('MODNAME','Mulgore',Pos(1,-2925.737793,-248.827667,53.565315,4.401661))
