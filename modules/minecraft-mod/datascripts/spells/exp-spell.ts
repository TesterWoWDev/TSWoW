import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let expSpell = std.Spells.create(MODNAME,'exp-spell',57353)
expSpell.Name.enGB.set('Increased Experience')
expSpell.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell.Effects.get(0).BasePoints.set(0)
expSpell.Effects.get(1).BasePoints.set(0)

