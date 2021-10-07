import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createRecipe } from "../../functions/recipe-functions"
import { DBC } from "wotlkdata"
import { createGem, vendorAddItems, gemLevelUpPattern, redColorCode, greenColorCode, purpleColorCode, yellowColorCode, blueColorCode, orangeColorCode } from "../../functions/gem-functions"
import { tierTwoBaseResources } from "../armor/tier2-set"
import { tier1BlueGems, tier1GreenGems, tier1OrangeGems, tier1PurpleGems, tier1RedGems, tier1YellowGems } from "./tier1-gem"
let vendor2 = std.CreatureTemplates.create(MODNAME,'gemdude2',3482)
vendor2.Name.enGB.set('Test Gems 2')
vendor2.Subname.enGB.set('will be removed')
vendor2.FactionTemplate.set(35)
let GemPropertyIndex = 2150
let SpellItemEnchantmentIndex = 5150
let GemQuality2 = 2

// Red Gems 
let tier2Red1 = createGem(GemQuality2,'tier2-red1','Teardrop Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red1,0,0,-1,0,0,0,0],[tier2Red1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Agility').ItemVisual.set(0).Flags.set(0)

let tier2Red2 = createGem(GemQuality2,'tier2-red2','Bold Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red2,0,0,-1,0,0,0,0],[tier2Red2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Intellect').ItemVisual.set(0).Flags.set(0)

let tier2Red3 = createGem(GemQuality2,'tier2-red3','Runed Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red3,0,0,-1,0,0,0,0],[tier2Red3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Name.enGB.set(redColorCode + '+8 Spirit').ItemVisual.set(0).Flags.set(0)

let tier2Red4 = createGem(GemQuality2,'tier2-red4','Delicate Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red4,0,0,-1,0,0,0,0],[tier2Red4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Stamina').ItemVisual.set(0).Flags.set(0)

let tier2Red5 = createGem(GemQuality2,'tier2-red5','Stark Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red5,0,0,-1,0,0,0,0],[tier2Red5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Strength').ItemVisual.set(0).Flags.set(0)

let tier2Red6 = createGem(GemQuality2,'tier2-red6','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red6,0,0,-1,0,0,0,0],[tier2Red6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set(redColorCode + '+14 Attack Power').ItemVisual.set(0).Flags.set(0)

let tier2Red7 = createGem(GemQuality2,'tier2-red7','Bright Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red7,0,0,-1,0,0,0,0],[tier2Red7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,4).EffectArg.setIndex(0,0).EffectPointsMax.setIndex(0,32).EffectPointsMin.setIndex(0,32).Name.enGB.set(redColorCode + '+32 Armor').ItemVisual.set(0).Flags.set(0)

let tier2Red8 = createGem(GemQuality2,'tier2-red8','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,tier2Red8,0,0,-1,0,0,0,0],[tier2Red8,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set(redColorCode + '+14 Spell Power').ItemVisual.set(0).Flags.set(0)

export let tier2RedGems = [tier2Red1,tier2Red2,tier2Red3,tier2Red4,tier2Red5,tier2Red6,tier2Red7,tier2Red8]
gemLevelUpPattern(tierTwoBaseResources[6],tier1RedGems,tier2RedGems)

// Green Gems
let tier2Green1 = createGem(GemQuality2,'tier2-green1','Radiant Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,tier2Green1,0,0,-1,0,0,0,0],[tier2Green1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+4 Agility and +10 Attack Power').ItemVisual.set(0).Flags.set(0)

let tier2Green2 = createGem(GemQuality2,'tier2-green2','Jagged Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,tier2Green2,0,0,-1,0,0,0,0],[tier2Green2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+4 Strength and +10 Attack Power').ItemVisual.set(0).Flags.set(0)

let tier2Green3 = createGem(GemQuality2,'tier2-green3','Enduring Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,tier2Green3,0,0,-1,0,0,0,0],[tier2Green3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(greenColorCode + '+4 Intellect and +10 Spell Power').ItemVisual.set(0).Flags.set(0)

let tier2Green4 = createGem(GemQuality2,'tier2-green4','Dazzling Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,tier2Green4,0,0,-1,0,0,0,0],[tier2Green4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(greenColorCode + '+6 Intellect and +12 Spirit').ItemVisual.set(0).Flags.set(0)

let tier2Green5 = createGem(GemQuality2,'tier2-green5','Notched Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,tier2Green5,0,0,-1,0,0,0,0],[tier2Green5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,13).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(greenColorCode + '+12 Defense Rating and +12 Dodge Rating').ItemVisual.set(0).Flags.set(0)

let tier2Green6 = createGem(GemQuality2,'tier2-green6','Barbed Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,tier2Green6,0,0,-1,0,0,0,0],[tier2Green6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(greenColorCode + '+8 Haste Rating and +8 Hit Rating').ItemVisual.set(0).Flags.set(0)

let tier2Green7 = createGem(GemQuality2,'tier2-green7','Unstable Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,tier2Green7,0,0,-1,0,0,0,0],[tier2Green7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Effect.setIndex(1,5).EffectArg.setIndex(1,37).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(greenColorCode + '+14 Hit Rating and +10 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let tier2GreenGems = [tier2Green1,tier2Green2,tier2Green3,tier2Green4,tier2Green5,tier2Green6,tier2Green7]
gemLevelUpPattern(tierTwoBaseResources[6],tier1GreenGems,tier2GreenGems)


// Purple Gems
let tier2Purple1 = createGem(GemQuality2,'tier2-purple1','Shifting Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,tier2Purple1,0,0,-1,0,0,0,0],[tier2Purple1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+5 Agility and +12 Hit Rating').ItemVisual.set(0).Flags.set(0)

let tier2Purple2 = createGem(GemQuality2,'tier2-purple2','Sovereign Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,tier2Purple2,0,0,-1,0,0,0,0],[tier2Purple2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+5 Strength and +12 Hit Rating').ItemVisual.set(0).Flags.set(0)

let tier2Purple3 = createGem(GemQuality2,'tier2-purple3','Infused Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,tier2Purple3,0,0,-1,0,0,0,0],[tier2Purple3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+5 Intellect and +12 Haste Rating').ItemVisual.set(0).Flags.set(0)

let tier2Purple4 = createGem(GemQuality2,'tier2-purple4','Glowing Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,tier2Purple4,0,0,-1,0,0,0,0],[tier2Purple4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(purpleColorCode + '+10 Haste Rating and +16 Spirit').ItemVisual.set(0).Flags.set(0)

let tier2Purple5 = createGem(GemQuality2,'tier2-purple5','Royal Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,tier2Purple5,0,0,-1,0,0,0,0],[tier2Purple5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set(purpleColorCode + '+22 Block Rating').ItemVisual.set(0).Flags.set(0)

let tier2Purple6 = createGem(GemQuality2,'tier2-purple6','Balanced Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,tier2Purple6,0,0,-1,0,0,0,0],[tier2Purple6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+6 Haste Rating and +12 Mana Per Second').ItemVisual.set(0).Flags.set(0)

let tier2Purple7 = createGem(GemQuality2,'tier2-purple7','Enthralled Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,tier2Purple7,0,0,-1,0,0,0,0],[tier2Purple7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(purpleColorCode + '+15 Critical Strike Rating and +8 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let tier2PurpleGems = [tier2Purple1,tier2Purple2,tier2Purple3,tier2Purple4,tier2Purple5,tier2Purple6,tier2Purple7]
gemLevelUpPattern(tierTwoBaseResources[6],tier1PurpleGems,tier2PurpleGems)

// Yellow Gems
let tier2Yellow1 = createGem(GemQuality2,'tier2-yellow1','Brilliant Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,tier2Yellow1,0,0,-1,0,0,0,0],[tier2Yellow1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(yellowColorCode + '+5 Agility and +12 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let tier2Yellow2 = createGem(GemQuality2,'tier2-yellow2','Gleaming Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,tier2Yellow2,0,0,-1,0,0,0,0],[tier2Yellow2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(yellowColorCode + '+5 Strength and +12 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let tier2Yellow3 = createGem(GemQuality2,'tier2-yellow3','Thick Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,tier2Yellow3,0,0,-1,0,0,0,0],[tier2Yellow3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(yellowColorCode + '+5 Intellect and +12 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let tier2Yellow4 = createGem(GemQuality2,'tier2-yellow4','Rigid Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,tier2Yellow4,0,0,-1,0,0,0,0],[tier2Yellow4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(yellowColorCode + '+8 Critical Strike Rating and +12 Spirit').ItemVisual.set(0).Flags.set(0)

let tier2Yellow5 = createGem(GemQuality2,'tier2-yellow5','Great Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,tier2Yellow5,0,0,-1,0,0,0,0],[tier2Yellow5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set(yellowColorCode + '+22 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

export let tier2YellowGems = [tier2Yellow1,tier2Yellow2,tier2Yellow3,tier2Yellow4,tier2Yellow5]
gemLevelUpPattern(tierTwoBaseResources[6],tier1YellowGems,tier2YellowGems)

//Blue Gems

let tier2Blue1 = createGem(GemQuality2,'tier2-blue1','Solid Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,tier2Blue1,0,0,-1,0,0,0,0],[tier2Blue1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set(blueColorCode + '+10 Stamina').ItemVisual.set(0).Flags.set(0)

let tier2Blue2 = createGem(GemQuality2,'tier2-blue2','Sparkling Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,tier2Blue2,0,0,-1,0,0,0,0],[tier2Blue2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set(blueColorCode + '+6 Stamina and +4 Intellect').ItemVisual.set(0).Flags.set(0)

let tier2Blue3 = createGem(GemQuality2,'tier2-blue3','Stormy Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,tier2Blue3,0,0,-1,0,0,0,0],[tier2Blue3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,3).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set(blueColorCode + '+6 Stamina and +4 Agility').ItemVisual.set(0).Flags.set(0)

let tier2Blue4 = createGem(GemQuality2,'tier2-blue4','Lustrous Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,tier2Blue4,0,0,-1,0,0,0,0],[tier2Blue4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set(blueColorCode + '+6 Stamina and +4 Strength').ItemVisual.set(0).Flags.set(0)

export let tier2BlueGems = [tier2Blue1,tier2Blue2,tier2Blue3,tier2Blue4]
gemLevelUpPattern(tierTwoBaseResources[6],tier1BlueGems,tier2BlueGems)

// orange Gems
let tier2Orange1 = createGem(GemQuality2,'tier2-orange1','Inscribed Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,tier2Orange1,0,0,-1,0,0,0,0],[tier2Orange1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Haste Rating').ItemVisual.set(0).Flags.set(0)

let tier2Orange2 = createGem(GemQuality2,'tier2-orange2','Luminous Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,tier2Orange2,0,0,-1,0,0,0,0],[tier2Orange2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Hit Rating').ItemVisual.set(0).Flags.set(0)

let tier2Orange3 = createGem(GemQuality2,'tier2-orange3','Glinting Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,tier2Orange3,0,0,-1,0,0,0,0],[tier2Orange3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Attack Power').ItemVisual.set(0).Flags.set(0)

let tier2Orange4 = createGem(GemQuality2,'tier2-orange4','Potent Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,tier2Orange4,0,0,-1,0,0,0,0],[tier2Orange4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Spell Power').ItemVisual.set(0).Flags.set(0)

let tier2Orange5 = createGem(GemQuality2,'tier2-orange5','Veiled Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,tier2Orange5,0,0,-1,0,0,0,0],[tier2Orange5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set(orangeColorCode + '+22 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let tier2Orange6 = createGem(GemQuality2,'tier2-orange6','Wicked Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,tier2Orange6,0,0,-1,0,0,0,0],[tier2Orange6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC.GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +15 Mana Per Second').ItemVisual.set(0).Flags.set(0)

export let tier2OrangeGems = [tier2Orange1,tier2Orange2,tier2Orange3,tier2Orange4,tier2Orange5,tier2Orange6]
gemLevelUpPattern(tierTwoBaseResources[6],tier1OrangeGems,tier2OrangeGems)

vendorAddItems(vendor2,[tier2RedGems,tier2GreenGems,tier2PurpleGems,tier2YellowGems,tier2BlueGems,tier2OrangeGems])