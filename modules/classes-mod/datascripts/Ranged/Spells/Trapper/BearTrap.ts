import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { TRAPPER_SKILL } from "../../Ranged";

const BEARTRAP = std.Spells.create (MODNAME,'bear-trap',53432).SkillLines.add(TRAPPER_SKILL.ID).setAutolearn().end;
BEARTRAP.Name.enGB.set('Bear Trap')
BEARTRAP.Subtext.enGB.set('')
BEARTRAP.Cooldown.set(25000,0,0,0)
//FROSTSPEAR.Description.enGB.set('Increases Critical Strike Chance of all Fire Spells by $s1% and Fire Spell casting time by $s2% for $d seconds.') //can change the %
