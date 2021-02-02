import { std } from "tswow-stdlib";
import { FIRE_SKILL } from "./Caster";

std.Spells.create('classes-mod','fireball-rank1',133).SkillLines.add(FIRE_SKILL.ID).setAutolearn();
std.Spells.create('classes-mod','fireball-rank2',143).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank3',145).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank4',3140).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank5',8400).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank6',8401).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);
std.Spells.create('classes-mod','fireball-rank7',8402).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0);