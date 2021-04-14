import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { BEAST_SKILL } from "../../Ranged";

const BEARFORM = std.Spells.create (MODNAME,'bear-form',4948).SkillLines.add(BEAST_SKILL.ID).setAutolearn().end;
BEARFORM.Name.enGB.set('Bear Spirit')
BEARFORM.Subtext.enGB.set('')
BEARFORM.Duration.set(30000,0,30000)
BEARFORM.Description.enGB.set('Take up the Spirit of the Bear, shapeshifting for 30 seconds increasing armor and health. Also protects the caster from Polymorph effects and allows use of various bear abilities.')