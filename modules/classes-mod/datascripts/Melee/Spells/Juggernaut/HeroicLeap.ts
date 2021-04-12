import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { JUGGERNAUT_SKILL } from "../../Melee";

const HEROICLEAP = std.Spells.create (MODNAME,'heroic-leap',6544).SkillLines.add(JUGGERNAUT_SKILL.ID).setAutolearn().end;
HEROICLEAP.Name.enGB.set('Heroic Leap')
HEROICLEAP.Subtext.enGB.set('')
//VOIDSTRIKE.Range.set(5,30,5,30)
HEROICLEAP.Cooldown.set(22000,0,0,0)
//FROSTSPEAR.Description.enGB.set('Increases Critical Strike Chance of all Fire Spells by $s1% and Fire Spell casting time by $s2% for $d seconds.') //can change the %
