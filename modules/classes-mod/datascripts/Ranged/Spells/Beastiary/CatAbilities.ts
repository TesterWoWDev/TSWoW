import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { BEAST_SKILL } from "../../Ranged";

const HARSHCLAW = std.Spells.create (MODNAME,'harsh-claw',48572).SkillLines.add(BEAST_SKILL.ID).setAutolearn().end;
HARSHCLAW.Name.enGB.set('Harsh Claw')
HARSHCLAW.Subtext.enGB.set('Cat Spirit')
HARSHCLAW.Description.enGB.set('Claw the target, causing 225% damage + 666 to the target. Must be behind the target. Effects which increase Bleed damage also increase Harsh Claw damage.')


const RAKE = std.Spells.create (MODNAME,'rake',48574).SkillLines.add(BEAST_SKILL.ID).setAutolearn().end;
RAKE.Name.enGB.set('Rake')
RAKE.Subtext.enGB.set('Cat Spirit')
RAKE.Description.enGB.set('Rake the target for ${$AP/100+$m1} bleed damage and an additional ${$m2*3+$AP*0.18} damage over $d.')