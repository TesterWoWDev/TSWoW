import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"

export function addDBC(name: string, propIndex: number, enchIndex:number, index1val: number, index2val: number, index3val: number, chance:number,SpellItemEnchantmentIndex:number) {
    DBC_ItemRandomProperties.add(propIndex).Name2.enGB.set(name).Enchantment.setIndex(0,SpellItemEnchantmentIndex-index1val).Enchantment.setIndex(1,SpellItemEnchantmentIndex-index2val).Enchantment.setIndex(2,SpellItemEnchantmentIndex-index3val)
    SQL.item_enchantment_template.add(enchIndex,propIndex).chance.set(chance)
}
export function addSpell(effect1type: number, effect1stattype: number, effect1max: number, effect1min:number, effect2type:number, effect2stattype:number,effect2max:number, effect2min:number,name: string,index:number) {
    DBC_SpellItemEnchantment.add(index).Name.enGB.set(name).Effect.setIndex(0,effect1type).EffectArg.setIndex(0,effect1stattype).EffectPointsMax.setIndex(0,effect1max).EffectPointsMin.setIndex(0,effect1min).Effect.setIndex(1,effect2type).EffectArg.setIndex(1,effect2stattype).EffectPointsMax.setIndex(1,effect2max).EffectPointsMin.setIndex(1,effect2min)
}
