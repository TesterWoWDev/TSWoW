import { std } from "tswow-stdlib"
import { MODNAME } from "../database-setup"
import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate"
import { createRecipe } from "../recipe-functions"
import { DBC_GemProperties } from "wotlkdata/dbc/types/GemProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"

function createGem(modprefix:string,name:string,displayinfo:number,description:string,gemProp:number,itemlevel:number):number{
    let gem = std.Items.create(MODNAME,modprefix,2934)
        gem.Name.enGB.set(name)
        gem.DisplayInfo.setID(displayinfo)
        gem.Description.enGB.set(description)
        gem.row.GemProperties.set(gemProp)
        gem.ItemLevel.set(itemlevel)
        return gem.ID
}

function additems(vendor: CreatureTemplate, arg1: number[]) {
    arg1.forEach((value,index,arr)=>{
        vendor.Vendor.addItem(value)
    })
}
let vendor2 = std.CreatureTemplates.create(MODNAME,'gemdude',3482)
vendor2.Name.enGB.set('Test Gems')
vendor2.Subname.enGB.set('will be removed')
vendor2.FactionTemplate.set(35)
let GemPropertyIndex = 2000
let SpellItemEnchantmentIndex = 5000

// Red Gems 
let red1 = createGem('red1','Teardrop Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red1,0,0,-1,0,0,0,0],[red1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set('|cffDC9415+10 Agility').ItemVisual.set(0)

let red2 = createGem('red2','Bold Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red2,0,0,-1,0,0,0,0],[red2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set('|cffDC9415+10 Intellect').ItemVisual.set(0)

let red3 = createGem('red3','Runed Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red3,0,0,-1,0,0,0,0],[red3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set('|cffDC9415+10 Spirit').ItemVisual.set(0)

let red4 = createGem('red4','Delicate Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red4,0,0,-1,0,0,0,0],[red4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set('|cffDC9415+10 Stamina').ItemVisual.set(0)

let red5 = createGem('red5','Stark Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red5,0,0,-1,0,0,0,0],[red5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set('|cffDC9415+10 Strength').ItemVisual.set(0)

let red6 = createGem('red6','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red6,0,0,-1,0,0,0,0],[red6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Name.enGB.set('|cffDC9415+15 Attack Power').ItemVisual.set(0)

let red7 = createGem('red7','Bright Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red7,0,0,-1,0,0,0,0],[red7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,4).EffectArg.setIndex(0,0).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('|cffDC9415+12 Armor').ItemVisual.set(0)

let red8 = createGem('red8','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red8,0,0,-1,0,0,0,0],[red8,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Name.enGB.set('|cffDC9415+15 Spell Power').ItemVisual.set(0)

// Green Gems
let green1 = createGem('green1','Radiant Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green1,0,0,-1,0,0,0,0],[green1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set('|cff278916+6 Agility and +12 Attack Power').ItemVisual.set(0)

let green2 = createGem('green2','Jagged Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green2,0,0,-1,0,0,0,0],[green2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set('|cff278916+6 Strength and +12 Attack Power').ItemVisual.set(0)

let green3 = createGem('green3','Enduring Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green3,0,0,-1,0,0,0,0],[green3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set('|cff278916+6 Intellect and +12 Spell Power').ItemVisual.set(0)

let green4 = createGem('green4','Dazzling Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green4,0,0,-1,0,0,0,0],[green4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,9).EffectPointsMin.setIndex(1,9).Name.enGB.set('|cff278916+9 Intellect and +6 Spirit').ItemVisual.set(0)

let green5 = createGem('green5','Notched Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green5,0,0,-1,0,0,0,0],[green5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,13).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set('|cff278916+15 Defense Rating and +15 Dodge Rating').ItemVisual.set(0)

let green6 = createGem('green6','Barbed Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green6,0,0,-1,0,0,0,0],[green6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set('|cff278916+8 Haste Rating and +12 Hit Rating').ItemVisual.set(0)

let green7 = createGem('green7','Unstable Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green7,0,0,-1,0,0,0,0],[green7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++).Enchant_Id.set(SpellItemEnchantmentIndex).Maxcount_Inv.set(0).Maxcount_Item.set(0).Type.set(1)
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,25).EffectPointsMin.setIndex(0,25).Effect.setIndex(1,5).EffectArg.setIndex(1,37).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set('|cff278916+25 Hit Rating and +8 Expertise Rating').ItemVisual.set(0)


additems(vendor2,[red1,red2,red3,red4,red5,red6,red7,red8,green1,green2,green3,green4,green5,green6,green7])





export let stringItem = std.Items.create(MODNAME,'string', 2934)
    stringItem.Name.enGB.set('String')
    stringItem.DisplayInfo.setID(58198)
    stringItem.Description.enGB.set('A unique piece of string.')
