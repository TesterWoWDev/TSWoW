import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let expSpell4 = std.Spells.create(MODNAME,'exp-spell4',57353)
expSpell4.Name.enGB.set('Increased Experience')
expSpell4.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell4.Effects.get(0).BasePoints.set(3)
expSpell4.Effects.get(1).BasePoints.set(3)

