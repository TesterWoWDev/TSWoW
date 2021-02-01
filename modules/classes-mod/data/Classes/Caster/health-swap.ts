import { std } from "tswow-stdlib";
import { DEATH_SKILL } from "./Caster";

export const HEALTH_LINK = std.Spells.create('classes-mod','health-swap',686)
HEALTH_LINK.Name.enGB.set('Health Swap')
HEALTH_LINK.Description.enGB.set('Swaps the health percentage between you and your target.');
HEALTH_LINK.SkillLines.add(DEATH_SKILL.ID).setAutolearn();
