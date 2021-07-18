import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"

// Magic Spells
export let Rank1Frostbolt = std.Spells.create(MODNAME,'Rank1Frostbolt-spell',116)
Rank1Frostbolt.Name.enGB.set('Frostbolt')
Rank1Frostbolt.Effects.get(0).BasePoints.set(-21)
Rank1Frostbolt.Effects.get(1).BasePoints.set(14)
Rank1Frostbolt.CastTime.set(3000,0,3000)
export let Rank1FireBlast = std.Spells.create(MODNAME,'Rank1FireBlast-spell',60871)
Rank1FireBlast.Name.enGB.set('Fire Blast')
Rank1FireBlast.Effects.get(0).BasePoints.set(34)
export let Rank1FrostNova = std.Spells.create(MODNAME,'Rank1FrostNova-spell',122)
Rank1FrostNova.Name.enGB.set('Frost Nova')
Rank1FrostNova.Effects.get(0).BasePoints.set(17)
Rank1FrostNova.Duration.set(4500,0,4500)
export let Rank1FrostArmor = std.Spells.create(MODNAME,'Rank1FrostArmor-spell',168)
Rank1FrostArmor.Name.enGB.set('Frost Armor')
Rank1FrostArmor.Effects.get(0).BasePoints.set(17)
Rank1FrostArmor.Duration.set(120000,0,120000)

// Melee + Combat Spells
export let Rank1BoarCharge = std.Spells.create(MODNAME,'Rank1BoarCharge-spell',3385)
Rank1BoarCharge.Name.enGB.set('Boar Charge')
Rank1BoarCharge.AuraDescription.enGB.set('Increases Speed by $s1%.')
Rank1BoarCharge.Effects.get(0).BasePoints.set(74)
Rank1BoarCharge.Duration.set(3000,0,3000)

export let Rank1Strike = std.Spells.create(MODNAME,'Rank1Strike-spell',12057)
Rank1Strike.Name.enGB.set('Strike')
Rank1Strike.Description.enGB.set('Strike at an enemy, inflicting weapon damage + $s1.')
Rank1Strike.Effects.get(0).BasePoints.set(9)

export let Rank1Bite = std.Spells.create(MODNAME,'Rank1Bite-spell',36612)
Rank1Bite.Name.enGB.set('Bite')
Rank1Bite.Description.enGB.set('Inflicts $s1 damage to an enemy.')
Rank1Bite.Effects.get(0).BasePoints.set(34)

export let Rank1Gore = std.Spells.create(MODNAME,'Rank1Gore-spell',4102)
Rank1Gore.Name.enGB.set('Gore')
Rank1Gore.Description.enGB.set('Inflicts $s2 damage to an enemy every 3s for $d.')
Rank1Gore.Effects.get(1).BasePoints.set(4)
Rank1Gore.Duration.set(9000,0,9000)

export let Rank1Whirlwind = std.Spells.create(MODNAME,'Rank1Whirlwind-spell',67037)
Rank1Whirlwind.Name.enGB.set('Whirlwind')


