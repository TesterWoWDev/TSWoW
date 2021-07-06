import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let expSpell3 = std.Spells.create(MODNAME,'exp-spell3',57353)
expSpell3.Name.enGB.set('Increased Experience')
expSpell3.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell3.Effects.get(0).BasePoints.set(2)
expSpell3.Effects.get(1).BasePoints.set(2)

