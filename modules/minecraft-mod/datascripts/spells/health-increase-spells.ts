import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


export let health1 = std.Spells.create(MODNAME,'health1-spell',34747)
health1.Name.enGB.set('Over Fed')
health1.Description.enGB.set('Attack Power increased by $s1.')
health1.Effects.get(0).Aura.MOD_INCREASE_HEALTH.set()
health1.Effects.get(0).BasePoints.set(349)
health1.Effects.get(1).BasePoints.set(-1)
health1.Duration.modRefCopy(val=>{
    val.set(18000,0,0)
})
health1.Cooldown.set(120000,0,0,0)

export let health2 = std.Spells.create(MODNAME,'health2-spell',34747)
health2.Name.enGB.set('Over Fed')
health2.Description.enGB.set('Attack Power increased by $s1.')
health1.Effects.get(0).Aura.MOD_INCREASE_HEALTH.set()
health2.Effects.get(0).BasePoints.set(749)
health2.Effects.get(1).BasePoints.set(-1)
health2.Duration.modRefCopy(val=>{
    val.set(18000,0,0)
})
health2.Cooldown.set(120000,0,0,0)

export let health3 = std.Spells.create(MODNAME,'health3-spell',34747)
health3.Name.enGB.set('Over Fed')
health3.Description.enGB.set('Attack Power increased by $s1.')
health1.Effects.get(0).Aura.MOD_INCREASE_HEALTH.set()
health3.Effects.get(0).BasePoints.set(1349)
health3.Effects.get(1).BasePoints.set(-1)
health3.Duration.modRefCopy(val=>{
    val.set(18000,0,0)
})
health3.Cooldown.set(120000,0,0,0)

export let health4 = std.Spells.create(MODNAME,'health4-spell',34747)
health4.Name.enGB.set('Over Fed')
health4.Description.enGB.set('Attack Power increased by $s1.')
health1.Effects.get(0).Aura.MOD_INCREASE_HEALTH.set()
health4.Effects.get(0).BasePoints.set(1749)
health4.Effects.get(1).BasePoints.set(-1)
health4.Duration.modRefCopy(val=>{
    val.set(18000,0,0)
})
health4.Cooldown.set(120000,0,0,0)

