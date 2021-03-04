import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FIRE_SKILL } from "../../Caster";
import { FIRE_SKILL_TRAINER_HORDE } from "./FireTrainer";

export const DRAGONBREATH1 = std.Spells.create(MODNAME,'dragon breath-rank1',31661).SkillLines.add(FIRE_SKILL.ID).setAutolearn().end;

const DRAGONBREATH2 = std.Spells.create(MODNAME,'dragon breath-rank2',33041).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(DRAGONBREATH2.ID,10,50)//Spellid, cost in copper, level to learn

const DRAGONBREATH3 = std.Spells.create(MODNAME,'dragon breath-rank3',33042).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(DRAGONBREATH3.ID,10,56)

const DRAGONBREATH4 = std.Spells.create(MODNAME,'dragon breath-rank4',33043).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(DRAGONBREATH4.ID,10,64)

const DRAGONBREATH5 = std.Spells.create(MODNAME,'dragon breath-rank5',42949).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(DRAGONBREATH5.ID,10,70)

const DRAGONBREATH6 = std.Spells.create(MODNAME,'dragon breath-rank6',42950).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
	FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(DRAGONBREATH6.ID,10,80)

