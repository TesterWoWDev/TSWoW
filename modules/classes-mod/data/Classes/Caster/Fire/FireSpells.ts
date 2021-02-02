import { std } from "tswow-stdlib";
import { FIRE_SKILL } from "../Caster";
import { FIRE_SKILL_TRAINER_HORDE } from "./FireTrainer";

const fireball1 = std.Spells.create('classes-mod','fireball-rank1',133).SkillLines.add(FIRE_SKILL.ID).setAutolearn().end;

const fireball2 = std.Spells.create('classes-mod','fireball-rank2',143).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball2.ID,10,6,FIRE_SKILL.ID)//Spellid, cost in copper, level to learn

const fireball3 = std.Spells.create('classes-mod','fireball-rank3',145).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball3.ID,10,12,FIRE_SKILL.ID)//Spellid, cost in copper, level to learn

const fireball4 = std.Spells.create('classes-mod','fireball-rank4',3140).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball4.ID,10,18,FIRE_SKILL.ID)

const fireball5 = std.Spells.create('classes-mod','fireball-rank5',8400).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball5.ID,10,24,FIRE_SKILL.ID)

const fireball6 = std.Spells.create('classes-mod','fireball-rank6',8401).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball6.ID,10,30,FIRE_SKILL.ID)

const fireball7 = std.Spells.create('classes-mod','fireball-rank7',8402).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball7.ID,10,36,FIRE_SKILL.ID)