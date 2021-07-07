import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"


// Stuns
export let chanceStun1 = std.Spells.create(MODNAME,'chanceStun1-spell',56)
chanceStun1.Name.enGB.set('Smashed')
chanceStun1.Description.enGB.set('Stuns the target for 1 second.')
chanceStun1.Effects.get(0).BasePoints.set(0)

export let chanceStun2 = std.Spells.create(MODNAME,'chanceStun2-spell',56)
chanceStun2.Name.enGB.set('Smashed')
chanceStun2.Description.enGB.set('Stuns the target for 2 seconds.')
chanceStun2.Effects.get(0).BasePoints.set(1)

export let chanceStun3 = std.Spells.create(MODNAME,'chanceStun3-spell',56)
chanceStun3.Name.enGB.set('Smashed')
chanceStun3.Description.enGB.set('Stuns the target for 3 seconds.')
chanceStun3.Effects.get(0).BasePoints.set(2)

export let chanceStun4 = std.Spells.create(MODNAME,'chanceStun4-spell',56)
chanceStun4.Name.enGB.set('Smashed')
chanceStun4.Description.enGB.set('Stuns the target for 4 seconds.')
chanceStun4.Effects.get(0).BasePoints.set(3)

// Healing
export let chanceHeal1 = std.Spells.create(MODNAME,'chanceHeal1-spell',2054)
chanceHeal1.Name.enGB.set('Revitalized')
chanceHeal1.Description.enGB.set('Heals the caster for 100.')
chanceHeal1.Effects.get(0).BasePoints.set(99)
chanceHeal1.Effects.get(0).DieSides.set(1)

export let chanceHeal2 = std.Spells.create(MODNAME,'chanceHeal2-spell',2054)
chanceHeal2.Name.enGB.set('Revitalized')
chanceHeal2.Description.enGB.set('Heals the caster for 250.')
chanceHeal2.Effects.get(0).BasePoints.set(249)
chanceHeal2.Effects.get(0).DieSides.set(1)

export let chanceHeal3 = std.Spells.create(MODNAME,'chanceHeal3-spell',2054)
chanceHeal3.Name.enGB.set('Revitalized')
chanceHeal3.Description.enGB.set('Heals the caster for 450.')
chanceHeal3.Effects.get(0).BasePoints.set(449)
chanceHeal3.Effects.get(0).DieSides.set(1)

export let chanceHeal4 = std.Spells.create(MODNAME,'chanceHeal4-spell',2054)
chanceHeal4.Name.enGB.set('Revitalized')
chanceHeal4.Description.enGB.set('Heals the caster for 680.')
chanceHeal4.Effects.get(0).BasePoints.set(679)
chanceHeal4.Effects.get(0).DieSides.set(1)

// Thunderfury
export let chanceLightningExtra1 = std.Spells.create(MODNAME,'chanceLightningExtra1-spell',27648)
chanceLightningExtra1.Name.enGB.set('Biting Winds')
chanceLightningExtra1.Description.enGB.set('Attack speed slowed by 5%.')
chanceLightningExtra1.Effects.get(0).BasePoints.set(-6)
chanceLightningExtra1.Effects.get(0).DieSides.set(1)
export let chanceLightning1 = std.Spells.create(MODNAME,'chanceLightning1-spell',21992)
chanceLightning1.Name.enGB.set('Thunderfury')
chanceLightning1.Description.enGB.set('Blasts your enemy with lightning, dealing 100 Nature damage, reduces their resistances by 5')
chanceLightning1.Effects.get(0).BasePoints.set(-6)
chanceLightning1.Effects.get(0).DieSides.set(1)
chanceLightning1.Effects.get(1).BasePoints.set(99)
chanceLightning1.Effects.get(1).DieSides.set(1)
chanceLightning1.Effects.get(2).TriggerSpell.set(chanceLightningExtra1.ID)

export let chanceLightningExtra2 = std.Spells.create(MODNAME,'chanceLightningExtra2-spell',27648)
chanceLightningExtra2.Name.enGB.set('Biting Winds')
chanceLightningExtra2.Description.enGB.set('Attack speed slowed by 10%.')
chanceLightningExtra2.Effects.get(0).BasePoints.set(-11)
chanceLightningExtra2.Effects.get(0).DieSides.set(1)
export let chanceLightning2 = std.Spells.create(MODNAME,'chanceLightning2-spell',21992)
chanceLightning2.Name.enGB.set('Thunderfury')
chanceLightning2.Description.enGB.set('Blasts your enemy with lightning, dealing 175 Nature damage, reduces their resistances by 10')
chanceLightning2.Effects.get(0).BasePoints.set(-11)
chanceLightning2.Effects.get(0).DieSides.set(1)
chanceLightning2.Effects.get(1).BasePoints.set(174)
chanceLightning2.Effects.get(1).DieSides.set(1)
chanceLightning2.Effects.get(2).TriggerSpell.set(chanceLightningExtra2.ID)

export let chanceLightningExtra3 = std.Spells.create(MODNAME,'chanceLightningExtra3-spell',27648)
chanceLightningExtra3.Name.enGB.set('Biting Winds')
chanceLightningExtra3.Description.enGB.set('Attack speed slowed by 15%.')
chanceLightningExtra3.Effects.get(0).BasePoints.set(-16)
chanceLightningExtra3.Effects.get(0).DieSides.set(1)
export let chanceLightning3 = std.Spells.create(MODNAME,'chanceLightning3-spell',21992)
chanceLightning3.Name.enGB.set('Thunderfury')
chanceLightning3.Description.enGB.set('Blasts your enemy with lightning, dealing 246 Nature damage, reduces their resistances by 15')
chanceLightning3.Effects.get(0).BasePoints.set(-16)
chanceLightning3.Effects.get(0).DieSides.set(1)
chanceLightning3.Effects.get(1).BasePoints.set(245)
chanceLightning3.Effects.get(1).DieSides.set(1)
chanceLightning3.Effects.get(2).TriggerSpell.set(chanceLightningExtra3.ID)

export let chanceLightningExtra4 = std.Spells.create(MODNAME,'chanceLightningExtra4-spell',27648)
chanceLightningExtra4.Name.enGB.set('Biting Winds')
chanceLightningExtra4.Description.enGB.set('Attack speed slowed by 20%.')
chanceLightningExtra4.Effects.get(0).BasePoints.set(-21)
chanceLightningExtra4.Effects.get(0).DieSides.set(1)
export let chanceLightning4 = std.Spells.create(MODNAME,'chanceLightning4-spell',21992)
chanceLightning4.Name.enGB.set('Thunderfury')
chanceLightning4.Description.enGB.set('Blasts your enemy with lightning, dealing 342 Nature damage, reduces their resistances by 20')
chanceLightning4.Effects.get(0).BasePoints.set(-21)
chanceLightning4.Effects.get(0).DieSides.set(1)
chanceLightning4.Effects.get(1).BasePoints.set(341)
chanceLightning4.Effects.get(1).DieSides.set(1)
chanceLightning4.Effects.get(2).TriggerSpell.set(chanceLightningExtra4.ID)

// Shadow Bolt
export let chanceShadow1 = std.Spells.create(MODNAME,'chanceShadow1-spell',13440)
chanceShadow1.Name.enGB.set('Shadow Bolt')
chanceShadow1.Description.enGB.set('Sends a shadowy bolt at the target dealing 30 damage.')
chanceShadow1.Effects.get(0).BasePoints.set(29)

export let chanceShadow2 = std.Spells.create(MODNAME,'chanceShadow2-spell',13440)
chanceShadow2.Name.enGB.set('Shadow Bolt')
chanceShadow2.Description.enGB.set('Sends a shadowy bolt at the target dealing 80 damage.')
chanceShadow2.Effects.get(0).BasePoints.set(79)

export let chanceShadow3 = std.Spells.create(MODNAME,'chanceShadow3-spell',13440)
chanceShadow3.Name.enGB.set('Shadow Bolt')
chanceShadow3.Description.enGB.set('Sends a shadowy bolt at the target dealing 120 damage.')
chanceShadow3.Effects.get(0).BasePoints.set(119)

export let chanceShadow4 = std.Spells.create(MODNAME,'chanceShadow1-spell',13440)
chanceShadow4.Name.enGB.set('Shadow Bolt')
chanceShadow4.Description.enGB.set('Sends a shadowy bolt at the target dealing 177 damage.')
chanceShadow4.Effects.get(0).BasePoints.set(176)


