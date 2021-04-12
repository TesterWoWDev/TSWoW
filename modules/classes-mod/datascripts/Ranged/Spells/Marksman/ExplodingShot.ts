import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { MARKSMAN_SKILL } from "../../Ranged";

const EXPLODINGSHOT = std.Spells.create (MODNAME,'exploding-shot',7896).SkillLines.add(MARKSMAN_SKILL.ID).AcquireMethod.set(0).end;
EXPLODINGSHOT.Name.enGB.set('Exploding Shot')
EXPLODINGSHOT.Subtext.enGB.set('')
//FROSTSPEAR.Description.enGB.set('Increases Critical Strike Chance of all Fire Spells by $s1% and Fire Spell casting time by $s2% for $d seconds.') //can change the %
