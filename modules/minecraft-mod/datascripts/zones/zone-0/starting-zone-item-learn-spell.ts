import { MODNAME } from "../../modname"
import { std } from "tswow-stdlib"


//Testing Zone
export let FlameWaveDamage = std.Spells.create(MODNAME,'flamewavedamage-spell',75413)
FlameWaveDamage.Effects.get(0).BasePoints.set(179)
FlameWaveDamage.Effects.get(0).DieSides.set(15)
FlameWaveDamage.Effects.get(2).EffectType.set(0)
FlameWaveDamage.Effects.get(0).Radius.set(5,0,5)
FlameWaveDamage.Effects.get(1).Radius.set(5,0,5)
export let PassiveFlameWave = std.Spells.create(MODNAME,'passiveflamewave-spell',67672) //caster
PassiveFlameWave.Name.enGB.set('Flame Wave')
PassiveFlameWave.Description.enGB.set('Your attacks and abilties now have the chance to cast flame wave.')
PassiveFlameWave.AuraDescription.enGB.set('Your attacks and abilties now have the chance to cast flame wave.')
PassiveFlameWave.Effects.get(0).TriggerSpell.set(FlameWaveDamage.ID)


//Working Spells
export let FanofKnives = std.Spells.create(MODNAME,'fanofknives-spell',51723)
FanofKnives.Mana.setEnergy(10)
FanofKnives.Cooldown.set(0,0,0,0)
export let FelFlamestrike = std.Spells.create(MODNAME,'felflamestrike-spell',39139)
FelFlamestrike.Name.enGB.set('Flamestrike')
FelFlamestrike.CastTime.set(3000,0,3000)
FelFlamestrike.Mana.setMana(0,0,0,0,0)
FelFlamestrike.Cooldown.set(30000,0,0,0)
export let FuryHammerEffect = std.Spells.create(MODNAME,'furyhammereffect-spell',61576)
FuryHammerEffect.Name.enGB.set('Storm of Fury')
FuryHammerEffect.Effects.get(0).BasePoints.set(119)
FuryHammerEffect.Effects.get(0).DieSides.set(33)
export let FuryHammer = std.Spells.create(MODNAME,'furyhammer-spell',61575)
FuryHammer.Name.enGB.set('Storm of Fury')
FuryHammer.CastTime.set(3000,0,3000)
FuryHammer.Mana.setMana(0,0,0,0,0)
FuryHammer.Cooldown.set(30000,0,0,0)
FuryHammer.InterruptFlags.clearAll()
FuryHammer.Effects.get(0).TriggerSpell.set(FuryHammerEffect.ID)