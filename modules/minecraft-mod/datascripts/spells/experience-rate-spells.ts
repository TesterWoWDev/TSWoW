import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let expSpell = std.Spells.create(MODNAME,'exp-spell',57353)
expSpell.Name.enGB.set('Increased Experience')
expSpell.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell.Effects.get(0).BasePoints.set(0)
expSpell.Effects.get(1).BasePoints.set(0)

export let expSpell2 = std.Spells.create(MODNAME,'exp-spell2',57353)
expSpell2.Name.enGB.set('Increased Experience')
expSpell2.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell2.Effects.get(0).BasePoints.set(1)
expSpell2.Effects.get(1).BasePoints.set(1)

export let expSpell3 = std.Spells.create(MODNAME,'exp-spell3',57353)
expSpell3.Name.enGB.set('Increased Experience')
expSpell3.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell3.Effects.get(0).BasePoints.set(2)
expSpell3.Effects.get(1).BasePoints.set(2)

export let expSpell4 = std.Spells.create(MODNAME,'exp-spell4',57353)
expSpell4.Name.enGB.set('Increased Experience')
expSpell4.Description.enGB.set('Experience gained is increased by $s1%.')
expSpell4.Effects.get(0).BasePoints.set(3)
expSpell4.Effects.get(1).BasePoints.set(3)
