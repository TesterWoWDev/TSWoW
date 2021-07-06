import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let expSpell2 = std.Spells.create(MODNAME,'exp-spell2',57353)
expSpell2.Name.enGB.set('Increased Experience')
expSpell2.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell2.Effects.get(0).BasePoints.set(1)
expSpell2.Effects.get(1).BasePoints.set(1)

