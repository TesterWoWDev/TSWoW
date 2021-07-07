import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let spellpower1 = std.Spells.create(MODNAME,'spellpower1-spell',34747)
spellpower1.Name.enGB.set('Recurring Power')
spellpower1.Description.enGB.set('Spellpower increased by $s1.')
spellpower1.Effects.get(0).BasePoints.set(199)
spellpower1.Effects.get(1).BasePoints.set(199)
spellpower1.Cooldown.set(10000,0,0,0)



