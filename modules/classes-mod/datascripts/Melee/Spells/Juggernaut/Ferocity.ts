import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { JUGGERNAUT_SKILL } from "../../Melee";

const FEROCITY = std.Spells.create (MODNAME,'ferocity',4154).SkillLines.add(JUGGERNAUT_SKILL.ID).setAutolearn().end;
FEROCITY.Name.enGB.set('Ferocity')
FEROCITY.Subtext.enGB.set('')
//VOIDSTRIKE.Range.set(5,30,5,30)
FEROCITY.Cooldown.set(90000,0,0,0)
//FROSTSPEAR.Description.enGB.set('Increases Critical Strike Chance of all Fire Spells by $s1% and Fire Spell casting time by $s2% for $d seconds.') //can change the %
