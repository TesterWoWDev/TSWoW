import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { BEAST_SKILL } from "../../Ranged";

const CATFORM = std.Spells.create (MODNAME,'cat-form',768).SkillLines.add(BEAST_SKILL.ID).setAutolearn().end;
CATFORM.Name.enGB.set('Cat Spirit')
CATFORM.Subtext.enGB.set('')
CATFORM.Cooldown.set(45000,0,0,0)
CATFORM.Description.enGB.set('Take up the Spirit of the Cat, shapeshifting for 20 seconds increasing melee attack power by 40 plus Agility. Also protects the caster from Polymorph effects and allows use of various cat abilities.')