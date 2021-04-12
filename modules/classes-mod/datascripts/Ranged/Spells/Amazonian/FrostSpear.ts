import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { AMAZONIAN_SKILL } from "../../Ranged";

const FROSTSPEAR = std.Spells.create (MODNAME,'frost-spear',63111).SkillLines.add(AMAZONIAN_SKILL.ID).setAutolearn().end;
FROSTSPEAR.Name.enGB.set('Frost Spear')
FROSTSPEAR.Subtext.enGB.set('')
//FROSTSPEAR.Description.enGB.set('Increases Critical Strike Chance of all Fire Spells by $s1% and Fire Spell casting time by $s2% for $d seconds.') //can change the %
