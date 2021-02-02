import {std} from "tswow-stdlib"
import { CASTER_CLASS, FIRE_SKILL } from "../../Caster"

export const FIRE_SKILL_TRAINER_HORDE = std.CreatureTemplates.create('classes-mod', 'fire-skill-trainer', 3049)

FIRE_SKILL_TRAINER_HORDE.Name.enGB.set('Thurston Xane')
FIRE_SKILL_TRAINER_HORDE.Title.enGB.set('Fire Caster Trainer') // can be changed as with greeting
FIRE_SKILL_TRAINER_HORDE.Trainer.Greeting.enGB.set('Welcome Young Fire Caster')
FIRE_SKILL_TRAINER_HORDE.Trainer.Class.set(CASTER_CLASS.ID);
FIRE_SKILL_TRAINER_HORDE.GossipID.set(0);
