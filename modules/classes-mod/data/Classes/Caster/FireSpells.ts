import { std } from "tswow-stdlib";
import { FIRE_SKILL } from "./Caster";
import { FIRE_SKILL_TRAINER_HORDE } from "./FireTrainer";

const fire1 = std.Spells.create('classes-mod','fireball-rank1',133).SkillLines.add(FIRE_SKILL.ID).setAutolearn().end;

const fire2 = std.Spells.create('classes-mod','fireball-rank2',143).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fire2.ID,10,6,FIRE_SKILL.ID)//Spellid, cost in copper, level to learn

const fire3 = std.Spells.create('classes-mod','fireball-rank3',145).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fire3.ID,10,6,FIRE_SKILL.ID)//Spellid, cost in copper, level to learn

std.Spells.create('classes-mod','fireball-rank4',3140).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank5',8400).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank6',8401).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank7',8402).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);