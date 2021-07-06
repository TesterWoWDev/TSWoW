import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { DBC } from "wotlkdata/dbc/DBCFiles"
import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "../../../../../bin/scripts/tswow/wotlkdata/sql/SQLFiles"

let PropertyIndex = 2500
let SpellItemEnchantmentIndex = 6000
export let clothTierOneItemEnchantmentIndex = 15000
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Agility').ItemVisual.set(0).Flags.set(0)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Agility').ItemVisual.set(0).Flags.set(0)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Agility').ItemVisual.set(0).Flags.set(0)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Agility').ItemVisual.set(0).Flags.set(0)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Agility').ItemVisual.set(0).Flags.set(0)

DBC_ItemRandomProperties.add(PropertyIndex).Enchantment.setIndex(0,SpellItemEnchantmentIndex-4).Enchantment.setIndex(1,SpellItemEnchantmentIndex-3).Enchantment.setIndex(2,SpellItemEnchantmentIndex-2).Enchantment.setIndex(3,SpellItemEnchantmentIndex-1).Enchantment.setIndex(4,SpellItemEnchantmentIndex)
SQL.item_enchantment_template.add(clothTierOneItemEnchantmentIndex,PropertyIndex).chance.set(10)
/*
dd
*/