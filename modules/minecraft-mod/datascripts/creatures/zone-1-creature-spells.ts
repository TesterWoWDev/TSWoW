import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"

// Magic Spells
export let Rank1Frostbolt = std.Spells.create(MODNAME,'Rank1Frostbolt-spell',116)
Rank1Frostbolt.Name.enGB.set('Frostbolt')
Rank1Frostbolt.Effects.get(0).BasePoints.set(-21)
Rank1Frostbolt.Effects.get(1).BasePoints.set(14)
export let Rank2Frostbolt = std.Spells.create(MODNAME,'Rank2Frostbolt-spell',116)
Rank2Frostbolt.Name.enGB.set('fasdasd')
Rank2Frostbolt.Effects.get(0).BasePoints.set(-21)
Rank2Frostbolt.Effects.get(1).BasePoints.set(10004)
