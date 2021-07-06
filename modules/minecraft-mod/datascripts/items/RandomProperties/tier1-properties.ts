import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { DBC } from "wotlkdata/dbc/DBCFiles"
import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"

let PropertyIndex = 2500
let SpellItemEnchantmentIndex = 6000
export let clothTierOneItemEnchantmentIndex = 15000
export let leatherTierOneItemEnchantmentIndex = 15001
export let mailTierOneItemEnchantmentIndex = 15002
export let weaponTierOneItemEnchantmentIndex = 15003

/*Intellect (-15)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Name.enGB.set('+2 Intellect').ItemVisual.set(0).Flags.set(0)
/*Spirit (-14)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Spirit').ItemVisual.set(0).Flags.set(0)
/*Spell Power (-13)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set('+6 Spell Power').ItemVisual.set(0).Flags.set(0)
/*Haste Rating (-12)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Haste Rating').ItemVisual.set(0).Flags.set(0)
/*Mana per 5 (-11)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,43).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Mana Per Second').ItemVisual.set(0).Flags.set(0)

/*Strength (-10)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Name.enGB.set('+2 Strength').ItemVisual.set(0).Flags.set(0)
/*Attack Power (-9)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set('+6 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Agility (-8)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Name.enGB.set('+2 Agility').ItemVisual.set(0).Flags.set(0)

/*Stamina (-7)*/          DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Stamina').ItemVisual.set(0).Flags.set(0)
/*Hit Rating (-6)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Hit Rating').ItemVisual.set(0).Flags.set(0)
/*Critical Strike (-5)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

/*Block Rating (-4)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Block Rating').ItemVisual.set(0).Flags.set(0)
/*Expertise Rating (-3)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,37).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Expertise Rating').ItemVisual.set(0).Flags.set(0)
/*Defense Rating (-2)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Defense Rating').ItemVisual.set(0).Flags.set(0)
/*Dodge Rating (-1)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Dodge Rating').ItemVisual.set(0).Flags.set(0)

// Cloth Items
/*Intellect + Spirit + Spellpower*/ DBC_ItemRandomProperties.add(PropertyIndex).Name2.enGB.set('of the Whale').Enchantment.setIndex(0,SpellItemEnchantmentIndex-15).Enchantment.setIndex(1,SpellItemEnchantmentIndex-14).Enchantment.setIndex(2,SpellItemEnchantmentIndex-13)
SQL.item_enchantment_template.add(clothTierOneItemEnchantmentIndex,PropertyIndex++).chance.set(10)
/*Intellect + Haste + Spellpower*/ DBC_ItemRandomProperties.add(PropertyIndex).Name2.enGB.set('of the Boar').Enchantment.setIndex(0,SpellItemEnchantmentIndex-15).Enchantment.setIndex(1,SpellItemEnchantmentIndex-12).Enchantment.setIndex(2,SpellItemEnchantmentIndex-13)
SQL.item_enchantment_template.add(clothTierOneItemEnchantmentIndex,PropertyIndex).chance.set(10)
/*Haste + Spellpower*/ DBC_ItemRandomProperties.add(PropertyIndex).Name2.enGB.set('of the Arcanist').Enchantment.setIndex(1,SpellItemEnchantmentIndex-12).Enchantment.setIndex(2,SpellItemEnchantmentIndex-13)
SQL.item_enchantment_template.add(clothTierOneItemEnchantmentIndex,PropertyIndex).chance.set(10)






/*Testing Multiples (WORKS)*/ /*    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Agility\n+5 Strength').ItemVisual.set(0).Flags.set(0) */

/*
int
spirit
spell pwoer
haste
hit
crit
mp5
*/