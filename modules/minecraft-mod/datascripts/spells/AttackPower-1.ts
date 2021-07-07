import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let attackpower1 = std.Spells.create(MODNAME,'attackpower1-spell',34747)
attackpower1.Name.enGB.set('Escalating Power')
attackpower1.Description.enGB.set('Attack Power increased by $s1.')
attackpower1.Effects.get(0).AuraType.setModAttackPower()
attackpower1.Effects.get(0).BasePoints.set(199)
attackpower1.Effects.get(1).BasePoints.set(-1)
attackpower1.Cooldown.set(10000,0,0,0)


