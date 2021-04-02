import {std} from "tswow-stdlib"
import { Pos } from "tswow-stdlib/Misc/Position"
import { MODNAME } from "../../moduleName"
import { CASTER_CLASS } from "../Caster"

export const CASTER_SKILL_TRAINER = std.CreatureTemplates.create(MODNAME, 'Caster-skill-trainer', 3049)
	CASTER_SKILL_TRAINER.Name.enGB.set('Flannel')
	CASTER_SKILL_TRAINER.Title.enGB.set('Caster Trainer') // can be changed as with greeting
	CASTER_SKILL_TRAINER.Trainer.Greeting.enGB.set('Welcome Young Caster')
	CASTER_SKILL_TRAINER.Trainer.Class.set(CASTER_CLASS.ID);
	CASTER_SKILL_TRAINER.FactionTemplate.set(35)
	CASTER_SKILL_TRAINER.GossipID.set(0);
	CASTER_SKILL_TRAINER.spawn('MODNAME','Mulgore',Pos(1,-2925.737793,-248.827667,53.565315,4.401661))
