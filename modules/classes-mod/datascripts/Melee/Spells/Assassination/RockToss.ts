import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { ASSASSINATION_SKILL } from "../../Melee";

const BACKSTAB = std.Spells.create (MODNAME,'rock-toss',69989).SkillLines.add(ASSASSINATION_SKILL.ID).setAutolearn().end;
BACKSTAB.Name.enGB.set('Rock Toss')
BACKSTAB.Subtext.enGB.set('')
BACKSTAB.Cooldown.StartTime.set(1500)
BACKSTAB.Power.setEnergy(0)
BACKSTAB.Power.setRage(10)
BACKSTAB.Range.set(0,20,0,20)
BACKSTAB.Description.enGB.set('Toss a rock at a nearby enemy for $s1 Arcane damage.') //can change the %
