import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { DBC } from "wotlkdata/dbc/DBCFiles"
import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"

let PropertyIndex = 2500

DBC_ItemRandomProperties.add(PropertyIndex)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Agility').ItemVisual.set(0).Flags.set(0)
