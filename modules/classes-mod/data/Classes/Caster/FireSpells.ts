import { std } from "tswow-stdlib";
import { FIRE_SKILL } from "./Caster";

export const fire1 = std.Spells.create('classes-mod','fireball-rank1',133)
fire1.SkillLines.add(FIRE_SKILL.ID).setAutolearn();
export const fire2 = std.Spells.create('classes-mod','fireball-rank2',143)
fire2.SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank3',145).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank4',3140).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank5',8400).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank6',8401).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank7',8402).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);