import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FIRE_SKILL } from "../../Caster";
import { FIRE_SKILL_TRAINER_HORDE } from "./FireTrainer";

const fireball1 = std.Spells.create(MODNAME,'fireball-rank1',133).SkillLines.add(FIRE_SKILL.ID).setAutolearn().end;

const fireball2 = std.Spells.create(MODNAME,'fireball-rank2',143).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball2.ID,10,6)//Spellid, cost in copper, level to learn

const fireball3 = std.Spells.create(MODNAME,'fireball-rank3',145).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball3.ID,10,12)//Spellid, cost in copper, level to learn

const fireball4 = std.Spells.create(MODNAME,'fireball-rank4',3140).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball4.ID,10,18)

const fireball5 = std.Spells.create(MODNAME,'fireball-rank5',8400).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball5.ID,10,24)

const fireball6 = std.Spells.create(MODNAME,'fireball-rank6',8401).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball6.ID,10,30)

const fireball7 = std.Spells.create(MODNAME,'fireball-rank7',8402).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(fireball7.ID,10,36)