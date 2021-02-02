import {std} from "tswow-stdlib"
import { CASTER_CLASS, FIRE_SKILL } from "./Caster"
import { fire2 } from "./FireSpells"

export const FIRE_SKILL_TRAINER_HORDE = std.CreatureTemplates.create('classes-mod', 'fire-skill-trainer', 3049)

FIRE_SKILL_TRAINER_HORDE.Name.enGB.set('Thurston Xane')
FIRE_SKILL_TRAINER_HORDE.Title.enGB.set('Fire Caster Trainer') // can be changed as with greeting
FIRE_SKILL_TRAINER_HORDE.Trainer.Greeting.enGB.set('Welcome Young Fire Caster')
FIRE_SKILL_TRAINER_HORDE.Trainer.Class.set(CASTER_CLASS.ID);

FIRE_SKILL_TRAINER_HORDE.GossipID.set(0);

FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fire2.ID,10,6,FIRE_SKILL.ID)  //Spellid, cost in copper, level to learn, Required Skill
