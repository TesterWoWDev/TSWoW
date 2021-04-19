import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { ASSASSINATION_SKILL } from "../../Melee";

const ROCKTOSS = std.Spells.create (MODNAME,'rock-toss',69989).SkillLines.add(ASSASSINATION_SKILL.ID).setAutolearn().end;
ROCKTOSS.Name.enGB.set('Rock Toss')
ROCKTOSS.Subtext.enGB.set('')
ROCKTOSS.Cooldown.StartTime.set(1500)
ROCKTOSS.Power.setEnergy(0)
ROCKTOSS.Power.setRage(10)
ROCKTOSS.Range.set(0,20,0,20)
ROCKTOSS.Description.enGB.set('Toss a rock at a nearby enemy for $s1 Arcane damage.') //can change the %
