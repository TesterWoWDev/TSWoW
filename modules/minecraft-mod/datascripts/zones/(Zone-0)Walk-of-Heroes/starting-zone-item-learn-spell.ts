import { MODNAME } from "../../modname"
import { std } from "tswow-stdlib"
import { chanceWorg1M } from "../champion-scrolls/ravaging-worg-champion-scroll"

//cast thunderclap, force it to apply a new aura, lasts for 300 seconds, casts the consecration

//Testing Zone
export let Consecrationdamage = std.Spells.create(MODNAME,'Consecrationdamage-spell',20116)

export let ThunderClapModifier = std.Spells.create(MODNAME,'thunderclaptest-spell',58098) //caster
ThunderClapModifier.Name.enGB.set('Thunder Clap (Effect)')
ThunderClapModifier.Description.enGB.set('Thunder Clap now leaves behind consecration.')
ThunderClapModifier.AuraDescription.enGB.set('Your attacks and abilties now have the chance to leave behind consecration.')
ThunderClapModifier.Effects.get(0).TriggerSpell.set(Consecrationdamage.ID)
ThunderClapModifier.Effects.get(0).ImplicitTargetA.setUnitTargetEnemy()

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

export let ThreatSpell = std.Spells.create(MODNAME,'threatspell-spell',25063)
ThreatSpell.Name.enGB.set('I want to Tank!')
ThreatSpell.AuraDescription.enGB.set('I really want to tank! Notice me senpai!')
ThreatSpell.Effects.get(0).BasePoints.set(499)
ThreatSpell.Effects.get(0).DieSides.set(1)
ThreatSpell.Attributes.isPassive.clear()
ThreatSpell.Attributes.isHiddenInSpellbook.clear()
ThreatSpell.Icon.set('Interface\\Icons\\Spell_Nature_EnchantArmor')














