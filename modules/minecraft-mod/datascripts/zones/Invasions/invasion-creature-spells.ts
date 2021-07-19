import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"

// Magic Spells
export let InvasionFrostbolt = std.Spells.create(MODNAME,'invasionfrostbolt-spell',116)
InvasionFrostbolt.Name.enGB.set('Frostbolt')
InvasionFrostbolt.Effects.get(0).BasePoints.set(-21)
InvasionFrostbolt.Effects.get(1).BasePoints.set(14)
InvasionFrostbolt.CastTime.set(3000,0,3000)
export let InvasionFireBlast = std.Spells.create(MODNAME,'invasionfireblast-spell',60871)
InvasionFireBlast.Name.enGB.set('Fire Blast')
InvasionFireBlast.Effects.get(0).BasePoints.set(34)
export let InvasionFrostNova = std.Spells.create(MODNAME,'invasionfrostnova-spell',122)
InvasionFrostNova.Name.enGB.set('Frost Nova')
InvasionFrostNova.Effects.get(0).BasePoints.set(17)
InvasionFrostNova.Duration.set(4500,0,4500)
export let InvasionFrostArmor = std.Spells.create(MODNAME,'invasionfrostarmor-spell',168)
InvasionFrostArmor.Name.enGB.set('Frost Armor')
InvasionFrostArmor.Effects.get(0).BasePoints.set(17)
InvasionFrostArmor.Duration.set(120000,0,120000)

export let InvasionWhirlwind = std.Spells.create(MODNAME,'InvasionWhirlwind-spell',67037)
InvasionWhirlwind.Name.enGB.set('Whirlwind')

export let InvasionStrike = std.Spells.create(MODNAME,'InvasionStrike-spell',12057)
InvasionStrike.Name.enGB.set('Strike')
InvasionStrike.Description.enGB.set('Strike at an enemy, inflicting weapon damage + $s1.')
InvasionStrike.Effects.get(0).BasePoints.set(9)

export let InvasionBoarCharge = std.Spells.create(MODNAME,'InvasionBoarCharge-spell',3385)
InvasionBoarCharge.Name.enGB.set('Boar Charge')
InvasionBoarCharge.AuraDescription.enGB.set('Increases Speed by $s1%.')
InvasionBoarCharge.Effects.get(0).BasePoints.set(74)
InvasionBoarCharge.Duration.set(3000,0,3000)
