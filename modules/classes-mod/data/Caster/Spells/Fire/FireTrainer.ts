import {std} from "tswow-stdlib"
import { Pos } from "tswow-stdlib/Misc/Position"
import { MODNAME } from "../../../moduleName"
import { CASTER_CLASS } from "../../Caster"

export const FIRE_SKILL_TRAINER_HORDE = std.CreatureTemplates.create(MODNAME, 'fire-skill-trainer', 3049)
	FIRE_SKILL_TRAINER_HORDE.Name.enGB.set('Thurston Xane')
	FIRE_SKILL_TRAINER_HORDE.Title.enGB.set('Fire Caster Trainer') // can be changed as with greeting
    FIRE_SKILL_TRAINER_HORDE.Trainer.Greeting.enGB.set('Welcome Young Fire Caster')
	FIRE_SKILL_TRAINER_HORDE.Trainer.Class.set(CASTER_CLASS.ID);
	FIRE_SKILL_TRAINER_HORDE.FactionTemplate.set(35)
	FIRE_SKILL_TRAINER_HORDE.GossipID.set(0);
	FIRE_SKILL_TRAINER_HORDE.spawn('MODNAME','Mulgore',Pos(1,-2925.737793,-248.827667,53.565315,4.401661))
