import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"

/*
chanceStun1C.Attributes.isHiddenFromLog.clear()
chanceStun1C.Attributes.isHiddenInSpellbook.clear()
chanceStun1C.Attributes.hideFromAuraBar.clear()
*/

// Stuns
export let chanceStun1 = std.Spells.create(MODNAME,'chanceStun1-spell',15283)
chanceStun1.Name.enGB.set('Smashed')
chanceStun1.Description.enGB.set('Stunned for 1 second.')
chanceStun1.AuraDescription.enGB.set('Stunned for 1 second.')
chanceStun1.Duration.set(1000,0,1000)
export let chanceStun1M = std.Spells.create(MODNAME,'chanceStun1M-spell',67670) //melee
chanceStun1M.Name.enGB.set('Smashed')
chanceStun1M.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 1 second.')
chanceStun1M.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 1 second.')
chanceStun1M.Duration.set(-1,0,-1)
chanceStun1M.Effects.get(0).TriggerSpell.set(chanceStun1.ID)
export let chanceStun1C = std.Spells.create(MODNAME,'chanceStun1C-spell',67672) //caster
chanceStun1C.Name.enGB.set('Smashed')
chanceStun1C.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 1 second.')
chanceStun1C.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 1 second.')
chanceStun1C.Duration.set(-1,0,-1)
chanceStun1C.Effects.get(0).TriggerSpell.set(chanceStun1.ID)

export let chanceStun2 = std.Spells.create(MODNAME,'chanceStun2-spell',15283)
chanceStun2.Name.enGB.set('Smashed')
chanceStun2.Description.enGB.set('Stunned for 2 seconds.')
chanceStun2.AuraDescription.enGB.set('Stunned for 2 seconds.')
chanceStun2.Duration.set(2000,0,2000)
export let chanceStun2M = std.Spells.create(MODNAME,'chanceStun2M-spell',67670) //melee
chanceStun2M.Name.enGB.set('Smashed')
chanceStun2M.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun2M.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun2M.Duration.set(-1,0,-1)
chanceStun2M.Effects.get(0).TriggerSpell.set(chanceStun2.ID)
export let chanceStun2C = std.Spells.create(MODNAME,'chanceStun2C-spell',67672) //caster
chanceStun2C.Name.enGB.set('Smashed')
chanceStun2C.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun2C.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun2C.Duration.set(-1,0,-1)
chanceStun2C.Effects.get(0).TriggerSpell.set(chanceStun2.ID)

export let chanceStun3 = std.Spells.create(MODNAME,'chanceStun3-spell',15283)
chanceStun3.Name.enGB.set('Smashed')
chanceStun3.Description.enGB.set('Stunned for 2 seconds.')
chanceStun3.AuraDescription.enGB.set('Stunned for 2 seconds.')
chanceStun3.Duration.set(2000,0,2000)
export let chanceStun3M = std.Spells.create(MODNAME,'chanceStun3M-spell',67670) //melee
chanceStun3M.Name.enGB.set('Smashed')
chanceStun3M.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun3M.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun3M.Duration.set(-1,0,-1)
chanceStun3M.Effects.get(0).TriggerSpell.set(chanceStun3.ID)
export let chanceStun3C = std.Spells.create(MODNAME,'chanceStun3C-spell',67672) //caster
chanceStun3C.Name.enGB.set('Smashed')
chanceStun3C.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun3C.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun3C.Duration.set(-1,0,-1)
chanceStun3C.Effects.get(0).TriggerSpell.set(chanceStun3.ID)

export let chanceStun4 = std.Spells.create(MODNAME,'chanceStun4-spell',15283)
chanceStun4.Name.enGB.set('Smashed')
chanceStun4.Description.enGB.set('Stunned for 2 seconds.')
chanceStun4.AuraDescription.enGB.set('Stunned for 2 seconds.')
chanceStun4.Duration.set(2000,0,2000)
export let chanceStun4M = std.Spells.create(MODNAME,'chanceStun4M-spell',67670) //melee
chanceStun4M.Name.enGB.set('Smashed')
chanceStun4M.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun4M.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun4M.Duration.set(-1,0,-1)
chanceStun4M.Effects.get(0).TriggerSpell.set(chanceStun4.ID)
export let chanceStun4C = std.Spells.create(MODNAME,'chanceStun4C-spell',67672) //caster
chanceStun4C.Name.enGB.set('Smashed')
chanceStun4C.Description.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun4C.AuraDescription.enGB.set('Your attacks and abilties have the chance to stun your target for 2 seconds.')
chanceStun4C.Duration.set(-1,0,-1)
chanceStun4C.Effects.get(0).TriggerSpell.set(chanceStun4.ID)

// Healing

// Doesn't work in any way.
export let chanceHeal1 = std.Spells.create(MODNAME,'chanceHeal1-spell',2054)
chanceHeal1.Name.enGB.set('Revitalized')
chanceHeal1.Description.enGB.set('Heals the caster for 100.')
chanceHeal1.AuraDescription.enGB.set('Heals the caster for 100.')
chanceHeal1.CastTime.set(-100000,0,-100000)
chanceHeal1.Effects.get(0).BasePoints.set(99)
chanceHeal1.Effects.get(0).DieSides.set(1)
chanceHeal1.Effects.get(0).ImplicitTargetA.setDestCaster()
export let chanceHeal1M = std.Spells.create(MODNAME,'chanceHeal1M-spell',67670) //melee
chanceHeal1M.Name.enGB.set('Revitalized')
chanceHeal1M.Description.enGB.set('Heals the caster for 100.')
chanceHeal1M.AuraDescription.enGB.set('Heals the caster for 100.')
chanceHeal1M.Duration.set(-1,0,-1)
chanceHeal1M.Effects.get(0).TriggerSpell.set(2054)//(chanceHeal1.ID)
export let chanceHeal1C = std.Spells.create(MODNAME,'chanceHeal1C-spell',67672) //caster
chanceHeal1C.Name.enGB.set('Revitalized')
chanceHeal1C.Description.enGB.set('Heals the caster for 100.')
chanceHeal1C.AuraDescription.enGB.set('Heals the caster for 100.')
chanceHeal1C.Duration.set(-1,0,-1)
chanceHeal1C.Effects.get(0).TriggerSpell.set(2054)//(chanceHeal1.ID)

/*
export let chanceHeal1 = std.Spells.create(MODNAME,'chanceHeal1-spell',2054)
chanceHeal1.Name.enGB.set('Revitalized')
chanceHeal1.Description.enGB.set('Heals the caster for 100.')
chanceHeal1.Effects.get(0).BasePoints.set(99)
chanceHeal1.Effects.get(0).DieSides.set(1)
chanceHeal1.Proc.TypeMask.set(0xFFFFC)
chanceHeal1.Proc.Chance.set(100)
*/

export let chanceHeal2 = std.Spells.create(MODNAME,'chanceHeal2-spell',2054)
chanceHeal2.Name.enGB.set('Revitalized')
chanceHeal2.Description.enGB.set('Heals the caster for 250.')
chanceHeal2.Effects.get(0).BasePoints.set(249)
chanceHeal2.Effects.get(0).DieSides.set(1)
chanceHeal2.Proc.TypeMask.set(0xFFFFC)
chanceHeal2.Proc.Chance.set(100)

export let chanceHeal3 = std.Spells.create(MODNAME,'chanceHeal3-spell',2054)
chanceHeal3.Name.enGB.set('Revitalized')
chanceHeal3.Description.enGB.set('Heals the caster for 450.')
chanceHeal3.Effects.get(0).BasePoints.set(449)
chanceHeal3.Effects.get(0).DieSides.set(1)
chanceHeal3.Proc.TypeMask.set(0xFFFFC)
chanceHeal3.Proc.Chance.set(100)

export let chanceHeal4 = std.Spells.create(MODNAME,'chanceHeal4-spell',2054)
chanceHeal4.Name.enGB.set('Revitalized')
chanceHeal4.Description.enGB.set('Heals the caster for 680.')
chanceHeal4.Effects.get(0).BasePoints.set(679)
chanceHeal4.Effects.get(0).DieSides.set(1)
chanceHeal4.Proc.TypeMask.set(0xFFFFC)
chanceHeal4.Proc.Chance.set(100)

// Thunderfury

export let chanceLightning1 = std.Spells.create(MODNAME,'chanceLightning1-spell',21992)//15283
chanceLightning1.row.RangeIndex.set(6)
chanceLightning1.Name.enGB.set('Thunderfury')
chanceLightning1.Effects.get(1).BasePoints.set(99)
// chanceLightning1.Description.enGB.set('thundered with $s1 resistance lower and $s2 damage')
// chanceLightning1.AuraDescription.enGB.set('thundered with $s1 resistance lower and $s2 damage.')
chanceLightning1.Duration.set(5000,0,5000)

export let chanceLightning1M = std.Spells.create(MODNAME,'chanceLightning1M-spell',67670) //melee
chanceLightning1M.Name.enGB.set('thundered')
chanceLightning1M.Description.enGB.set('Your attacks and abilties have the chance to thunder.')
chanceLightning1M.AuraDescription.enGB.set('Your attacks and abilties have the chance to thunder.')
chanceLightning1M.Duration.set(-1,0,-1)
chanceLightning1M.Effects.get(0).TriggerSpell.set(chanceLightning1.ID)
export let chanceLightning1C = std.Spells.create(MODNAME,'chanceLightning1C-spell',67672) //caster
chanceLightning1C.Name.enGB.set('thundered')
chanceLightning1C.Description.enGB.set('Your attacks and abilties have the chance to thunder.')
chanceLightning1C.AuraDescription.enGB.set('Your attacks and abilties have the chance to thunder.')
chanceLightning1C.Duration.set(-1,0,-1)
chanceLightning1C.Effects.get(0).TriggerSpell.set(chanceLightning1.ID)



/* Works but no visual, and uses fire blasts cooldown because you can't set cooldowns, global categories, spell names, or family flags :)

export let chanceLightningExtra1 = std.Spells.create(MODNAME,'chanceLightningExtra1-spell',2136)
chanceLightningExtra1.Name.enGB.set('Biting Winds')
chanceLightningExtra1.Description.enGB.set('Attack speed slowed by 5%.')
chanceLightningExtra1.Effects.get(0).EffectType.setApplyAura()
chanceLightningExtra1.Effects.get(0).BasePoints.set(-6)
chanceLightningExtra1.Effects.get(0).DieSides.set(1)
chanceLightningExtra1.Effects.get(0).AuraType.setModMeleeHaste()
chanceLightningExtra1.Effects.get(0).PointsPerLevel.set(0)
chanceLightningExtra1.Visual.setID(6359)
export let chanceLightning1 = std.Spells.create(MODNAME,'chanceLightning1-spell',2136)
chanceLightning1.Name.enGB.set('Thunderfury')
chanceLightning1.Description.enGB.set('Blasts your enemy with lightning, dealing 100 Nature damage, reduces their resistances by 5')
chanceLightning1.Effects.get(0).EffectType.setApplyAura()
chanceLightning1.Effects.get(0).BasePoints.set(-6)
chanceLightning1.Effects.get(0).DieSides.set(1)
chanceLightning1.Effects.get(0).AuraType.setModResistance
chanceLightning1.Effects.get(0).ChainTarget.set(5)
chanceLightning1.Effects.get(0).PointsPerLevel.set(0)
chanceLightning1.Effects.get(1).EffectType.setSchoolDamage()
chanceLightning1.Effects.get(1).BasePoints.set(99)
chanceLightning1.Effects.get(1).DieSides.set(1)
chanceLightning1.Effects.get(2).EffectType.setTriggerSpell()
chanceLightning1.Effects.get(2).TriggerSpell.set(chanceLightningExtra1.ID)
chanceLightning1.Visual.setID(6359)

export let chanceLightning1M = std.Spells.create(MODNAME,'chanceLightning1M-spell',67670) //melee
chanceLightning1M.Name.enGB.set('Thunderfury')
chanceLightning1M.Description.enGB.set('Blasts your enemy with lightning, dealing 100 Nature damage, reduces their resistances by 5')
chanceLightning1M.AuraDescription.enGB.set('Blasts your enemy with lightning, dealing 100 Nature damage, reduces their resistances by 5')
chanceLightning1M.Duration.set(-1,0,-1)
chanceLightning1M.Effects.get(0).TriggerSpell.set(chanceLightning1.ID)
export let chanceLightning1C = std.Spells.create(MODNAME,'chanceLightning1C-spell',67672) //caster
chanceLightning1C.Name.enGB.set('Smashed')
chanceLightning1C.Description.enGB.set('Blasts your enemy with lightning, dealing 100 Nature damage, reduces their resistances by 5')
chanceLightning1C.AuraDescription.enGB.set('Blasts your enemy with lightning, dealing 100 Nature damage, reduces their resistances by 5')
chanceLightning1C.Duration.set(-1,0,-1)
chanceLightning1C.Effects.get(0).TriggerSpell.set(chanceLightning1.ID)
*/



/*
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
chanceLightning1.Proc.TypeMask.set(0xFFFFC)
chanceLightning1.Proc.Chance.set(100)
*/

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
chanceLightning2.Proc.TypeMask.set(0xFFFFC)
chanceLightning2.Proc.Chance.set(100)

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
chanceLightning3.Proc.TypeMask.set(0xFFFFC)
chanceLightning3.Proc.Chance.set(100)

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
chanceLightning4.Proc.TypeMask.set(0xFFFFC)
chanceLightning4.Proc.Chance.set(100)

// Shadow Bolt
export let chanceShadow1 = std.Spells.create(MODNAME,'chanceShadow1-spell',13440)
chanceShadow1.Name.enGB.set('Shadow Bolt')
chanceShadow1.Description.enGB.set('Sends a shadowy bolt at the target dealing 30 damage.')
chanceShadow1.Effects.get(0).BasePoints.set(29)
chanceShadow1.Proc.TypeMask.set(0xFFFFC)
chanceShadow1.Proc.Chance.set(100)

export let chanceShadow2 = std.Spells.create(MODNAME,'chanceShadow2-spell',13440)
chanceShadow2.Name.enGB.set('Shadow Bolt')
chanceShadow2.Description.enGB.set('Sends a shadowy bolt at the target dealing 80 damage.')
chanceShadow2.Effects.get(0).BasePoints.set(79)
chanceShadow2.Proc.TypeMask.set(0xFFFFC)
chanceShadow2.Proc.Chance.set(100)

export let chanceShadow3 = std.Spells.create(MODNAME,'chanceShadow3-spell',13440)
chanceShadow3.Name.enGB.set('Shadow Bolt')
chanceShadow3.Description.enGB.set('Sends a shadowy bolt at the target dealing 120 damage.')
chanceShadow3.Effects.get(0).BasePoints.set(119)
chanceShadow3.Proc.TypeMask.set(0xFFFFC)
chanceShadow3.Proc.Chance.set(100)

export let chanceShadow4 = std.Spells.create(MODNAME,'chanceShadow4-spell',13440)
chanceShadow4.Name.enGB.set('Shadow Bolt')
chanceShadow4.Description.enGB.set('Sends a shadowy bolt at the target dealing 177 damage.')
chanceShadow4.Effects.get(0).BasePoints.set(176)
chanceShadow4.Proc.TypeMask.set(0xFFFFC)
chanceShadow4.Proc.Chance.set(100)


