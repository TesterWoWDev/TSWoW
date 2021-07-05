import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createRecipe } from "../../functions/recipe-functions"
import { DBC_GemProperties } from "wotlkdata/dbc/types/GemProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { createGem, additems, gemLevelUpPattern, redColorCode, greenColorCode, purpleColorCode, yellowColorCode, blueColorCode, orangeColorCode } from "./gem-functions"
import { tierTwoBaseResources } from "../armor/tier2-set"
import { tier1blueGems, tier1GreenGems, tier1orangeGems, tier1PurpleGems, tier1RedGems, tier1YellowGems } from "./tier1-gem"
let vendor2 = std.CreatureTemplates.create(MODNAME,'gemdude2',3482)
vendor2.Name.enGB.set('Test Gems 2')
vendor2.Subname.enGB.set('will be removed')
vendor2.FactionTemplate.set(35)
let GemPropertyIndex = 2150
let SpellItemEnchantmentIndex = 5150
let GemQuality2 = 2

// Red Gems 
let Tier2red1 = createGem(GemQuality2,'Tier2red1','|cff17CD11Teardrop Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red1,0,0,-1,0,0,0,0],[Tier2red1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Agility').ItemVisual.set(0).Flags.set(0)

let Tier2red2 = createGem(GemQuality2,'Tier2red2','|cff17CD11Bold Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red2,0,0,-1,0,0,0,0],[Tier2red2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Intellect').ItemVisual.set(0).Flags.set(0)

let Tier2red3 = createGem(GemQuality2,'Tier2red3','|cff17CD11Runed Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red3,0,0,-1,0,0,0,0],[Tier2red3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Name.enGB.set(redColorCode + '+8 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier2red4 = createGem(GemQuality2,'Tier2red4','|cff17CD11Delicate Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red4,0,0,-1,0,0,0,0],[Tier2red4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Stamina').ItemVisual.set(0).Flags.set(0)

let Tier2red5 = createGem(GemQuality2,'Tier2red5','|cff17CD11Stark Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red5,0,0,-1,0,0,0,0],[Tier2red5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Strength').ItemVisual.set(0).Flags.set(0)

let Tier2red6 = createGem(GemQuality2,'Tier2red6','|cff17CD11Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red6,0,0,-1,0,0,0,0],[Tier2red6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set(redColorCode + '+14 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier2red7 = createGem(GemQuality2,'Tier2red7','|cff17CD11Bright Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red7,0,0,-1,0,0,0,0],[Tier2red7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,4).EffectArg.setIndex(0,0).EffectPointsMax.setIndex(0,32).EffectPointsMin.setIndex(0,32).Name.enGB.set(redColorCode + '+32 Armor').ItemVisual.set(0).Flags.set(0)

let Tier2red8 = createGem(GemQuality2,'Tier2red8','|cff17CD11Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier2red8,0,0,-1,0,0,0,0],[Tier2red8,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set(redColorCode + '+14 Spell Power').ItemVisual.set(0).Flags.set(0)

export let tier2RedGems = [Tier2red1,Tier2red2,Tier2red3,Tier2red4,Tier2red5,Tier2red6,Tier2red7,Tier2red8]
gemLevelUpPattern(tierTwoBaseResources[6],tier1RedGems,tier2RedGems)

// Green Gems
let Tier2green1 = createGem(GemQuality2,'Tier2green1','|cff17CD11Radiant Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier2green1,0,0,-1,0,0,0,0],[Tier2green1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+4 Agility and +10 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier2green2 = createGem(GemQuality2,'Tier2green2','|cff17CD11Jagged Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier2green2,0,0,-1,0,0,0,0],[Tier2green2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+4 Strength and +10 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier2green3 = createGem(GemQuality2,'Tier2green3','|cff17CD11Enduring Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier2green3,0,0,-1,0,0,0,0],[Tier2green3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(greenColorCode + '+4 Intellect and +10 Spell Power').ItemVisual.set(0).Flags.set(0)

let Tier2green4 = createGem(GemQuality2,'Tier2green4','|cff17CD11Dazzling Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier2green4,0,0,-1,0,0,0,0],[Tier2green4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(greenColorCode + '+6 Intellect and +12 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier2green5 = createGem(GemQuality2,'Tier2green5','|cff17CD11Notched Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier2green5,0,0,-1,0,0,0,0],[Tier2green5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,13).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(greenColorCode + '+12 Defense Rating and +12 Dodge Rating').ItemVisual.set(0).Flags.set(0)

let Tier2green6 = createGem(GemQuality2,'Tier2green6','|cff17CD11Barbed Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier2green6,0,0,-1,0,0,0,0],[Tier2green6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(greenColorCode + '+8 Haste Rating and +8 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier2green7 = createGem(GemQuality2,'Tier2green7','|cff17CD11Unstable Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier2green7,0,0,-1,0,0,0,0],[Tier2green7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Effect.setIndex(1,5).EffectArg.setIndex(1,37).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(greenColorCode + '+14 Hit Rating and +10 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let tier2GreenGems = [Tier2green1,Tier2green2,Tier2green3,Tier2green4,Tier2green5,Tier2green6,Tier2green7]
gemLevelUpPattern(tierTwoBaseResources[6],tier1GreenGems,tier2GreenGems)


// Purple Gems
let Tier2purple1 = createGem(GemQuality2,'Tier2purple1','|cff17CD11Shifting Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier2purple1,0,0,-1,0,0,0,0],[Tier2purple1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+5 Agility and +12 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier2purple2 = createGem(GemQuality2,'Tier2purple2','|cff17CD11Sovereign Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier2purple2,0,0,-1,0,0,0,0],[Tier2purple2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+5 Strength and +12 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier2purple3 = createGem(GemQuality2,'Tier2purple3','|cff17CD11Infused Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier2purple3,0,0,-1,0,0,0,0],[Tier2purple3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+5 Intellect and +12 Haste Rating').ItemVisual.set(0).Flags.set(0)

let Tier2purple4 = createGem(GemQuality2,'Tier2purple4','|cff17CD11Glowing Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier2purple4,0,0,-1,0,0,0,0],[Tier2purple4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(purpleColorCode + '+10 Haste Rating and +16 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier2purple5 = createGem(GemQuality2,'Tier2purple5','|cff17CD11Royal Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier2purple5,0,0,-1,0,0,0,0],[Tier2purple5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set(purpleColorCode + '+22 Block Rating').ItemVisual.set(0).Flags.set(0)

let Tier2purple6 = createGem(GemQuality2,'Tier2purple6','|cff17CD11Balanced Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier2purple6,0,0,-1,0,0,0,0],[Tier2purple6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(purpleColorCode + '+6 Haste Rating and +12 Mana Per Second').ItemVisual.set(0).Flags.set(0)

let Tier2purple7 = createGem(GemQuality2,'Tier2purple7','|cff17CD11Enthralled Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier2purple7,0,0,-1,0,0,0,0],[Tier2purple7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(purpleColorCode + '+15 Critical Strike Rating and +8 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let tier2PurpleGems = [Tier2purple1,Tier2purple2,Tier2purple3,Tier2purple4,Tier2purple5,Tier2purple6,Tier2purple7]
gemLevelUpPattern(tierTwoBaseResources[6],tier1PurpleGems,tier2PurpleGems)

// Yellow Gems
let Tier2yellow1 = createGem(GemQuality2,'Tier2yellow1','|cff17CD11Brilliant Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier2yellow1,0,0,-1,0,0,0,0],[Tier2yellow1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(yellowColorCode + '+5 Agility and +12 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier2yellow2 = createGem(GemQuality2,'Tier2yellow2','|cff17CD11Gleaming Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier2yellow2,0,0,-1,0,0,0,0],[Tier2yellow2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(yellowColorCode + '+5 Strength and +12 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier2yellow3 = createGem(GemQuality2,'Tier2yellow3','|cff17CD11Thick Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier2yellow3,0,0,-1,0,0,0,0],[Tier2yellow3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(yellowColorCode + '+5 Intellect and +12 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier2yellow4 = createGem(GemQuality2,'Tier2yellow4','|cff17CD11Rigid Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier2yellow4,0,0,-1,0,0,0,0],[Tier2yellow4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(yellowColorCode + '+8 Critical Strike Rating and +12 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier2yellow5 = createGem(GemQuality2,'Tier2yellow5','|cff17CD11Great Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier2yellow5,0,0,-1,0,0,0,0],[Tier2yellow5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set(yellowColorCode + '+22 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

export let tier2YellowGems = [Tier2yellow1,Tier2yellow2,Tier2yellow3,Tier2yellow4,Tier2yellow5]
gemLevelUpPattern(tierTwoBaseResources[6],tier1YellowGems,tier2YellowGems)

//Blue Gems

let Tier2blue1 = createGem(GemQuality2,'Tier2blue1','|cff17CD11Solid Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier2blue1,0,0,-1,0,0,0,0],[Tier2blue1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set(blueColorCode + '+10 Stamina').ItemVisual.set(0).Flags.set(0)

let Tier2blue2 = createGem(GemQuality2,'Tier2blue2','|cff17CD11Sparkling Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier2blue2,0,0,-1,0,0,0,0],[Tier2blue2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set(blueColorCode + '+6 Stamina and +4 Intellect').ItemVisual.set(0).Flags.set(0)

let Tier2blue3 = createGem(GemQuality2,'Tier2blue3','|cff17CD11Stormy Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier2blue3,0,0,-1,0,0,0,0],[Tier2blue3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,3).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set(blueColorCode + '+6 Stamina and +4 Agility').ItemVisual.set(0).Flags.set(0)

let Tier2blue4 = createGem(GemQuality2,'Tier2blue4','|cff17CD11Lustrous Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier2blue4,0,0,-1,0,0,0,0],[Tier2blue4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set(blueColorCode + '+6 Stamina and +4 Strength').ItemVisual.set(0).Flags.set(0)

export let tier2blueGems = [Tier2blue1,Tier2blue2,Tier2blue3,Tier2blue4]
gemLevelUpPattern(tierTwoBaseResources[6],tier1blueGems,tier2blueGems)

// orange Gems
let Tier2orange1 = createGem(GemQuality2,'Tier2orange1','|cff17CD11Inscribed Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier2orange1,0,0,-1,0,0,0,0],[Tier2orange1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Haste Rating').ItemVisual.set(0).Flags.set(0)

let Tier2orange2 = createGem(GemQuality2,'Tier2orange2','|cff17CD11Luminous Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier2orange2,0,0,-1,0,0,0,0],[Tier2orange2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier2orange3 = createGem(GemQuality2,'Tier2orange3','|cff17CD11Glinting Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier2orange3,0,0,-1,0,0,0,0],[Tier2orange3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier2orange4 = createGem(GemQuality2,'Tier2orange4','|cff17CD11Potent Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier2orange4,0,0,-1,0,0,0,0],[Tier2orange4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +10 Spell Power').ItemVisual.set(0).Flags.set(0)

let Tier2orange5 = createGem(GemQuality2,'Tier2orange5','|cff17CD11Veiled Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier2orange5,0,0,-1,0,0,0,0],[Tier2orange5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set(orangeColorCode + '+22 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier2orange6 = createGem(GemQuality2,'Tier2orange6','|cff17CD11Wicked Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier2orange6,0,0,-1,0,0,0,0],[Tier2orange6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set(orangeColorCode + '+8 Critical Strike Rating and +15 Mana Per Second').ItemVisual.set(0).Flags.set(0)

export let tier2orangeGems = [Tier2orange1,Tier2orange2,Tier2orange3,Tier2orange4,Tier2orange5,Tier2orange6]
gemLevelUpPattern(tierTwoBaseResources[6],tier1orangeGems,tier2orangeGems)

additems(vendor2,[tier2RedGems,tier2GreenGems,tier2PurpleGems,tier2YellowGems,tier2blueGems,tier2orangeGems])