import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"
let expSpell = std.Spells.create(MODNAME,'exp-spell',57353)
expSpell.Name.enGB.set('xp spell for dad')
expSpell.Description.enGB.set('description of dad spell')
expSpell.Effects.get(0).BasePoints.set(0)
expSpell.Effects.get(1).BasePoints.set(0)
