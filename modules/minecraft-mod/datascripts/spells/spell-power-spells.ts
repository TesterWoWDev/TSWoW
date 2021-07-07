import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let spellpower1 = std.Spells.create(MODNAME,'spellpower1-spell',34747)
spellpower1.Name.enGB.set('Recurring Power')
spellpower1.Description.enGB.set('Spellpower increased by $s1.')
spellpower1.Effects.get(0).BasePoints.set(49)
spellpower1.Effects.get(1).BasePoints.set(49)
spellpower1.Cooldown.set(120000,0,0,0)

export let spellpower2 = std.Spells.create(MODNAME,'spellpower2-spell',34747)
spellpower2.Name.enGB.set('Recurring Power')
spellpower2.Description.enGB.set('Spellpower increased by $s1.')
spellpower2.Effects.get(0).BasePoints.set(149)
spellpower2.Effects.get(1).BasePoints.set(149)
spellpower2.Cooldown.set(120000,0,0,0)

export let spellpower3 = std.Spells.create(MODNAME,'spellpower3-spell',34747)
spellpower3.Name.enGB.set('Recurring Power')
spellpower3.Description.enGB.set('Spellpower increased by $s1.')
spellpower3.Effects.get(0).BasePoints.set(249)
spellpower3.Effects.get(1).BasePoints.set(249)
spellpower3.Cooldown.set(120000,0,0,0)

export let spellpower4 = std.Spells.create(MODNAME,'spellpower4-spell',34747)
spellpower4.Name.enGB.set('Recurring Power')
spellpower4.Description.enGB.set('Spellpower increased by $s1.')
spellpower4.Effects.get(0).BasePoints.set(349)
spellpower4.Effects.get(1).BasePoints.set(349)
spellpower4.Cooldown.set(120000,0,0,0)



