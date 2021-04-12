import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { TRAPPER_SKILL } from "../../Ranged";

const ERUPTION = std.Spells.create (MODNAME,'exploding-shot',39965).SkillLines.add(TRAPPER_SKILL.ID).AcquireMethod.set(0).end;
ERUPTION.Name.enGB.set('Frost Grenade')
ERUPTION.Subtext.enGB.set('')
//FROSTSPEAR.Description.enGB.set('Increases Critical Strike Chance of all Fire Spells by $s1% and Fire Spell casting time by $s2% for $d seconds.') //can change the %
