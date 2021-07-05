import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createRecipe } from "../../functions/recipe-functions"
import { DBC_GemProperties } from "wotlkdata/dbc/types/GemProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { createGem, additems, gemLevelUpPattern, redColorCode, greenColorCode, purpleColorCode, yellowColorCode, blueColorCode, orangeColorCode, createAllUndiscoverGems } from "./gem-functions"
import { tierThreeBaseResources } from "../armor/tier3-set"
import { tier2blueGems, tier2GreenGems, tier2orangeGems, tier2PurpleGems, tier2RedGems, tier2YellowGems } from "./tier2-gems"
let vendor2 = std.CreatureTemplates.create(MODNAME,'gemdude3',3482)
vendor2.Name.enGB.set('Test Gems 3')
vendor2.Subname.enGB.set('will be removed')
vendor2.FactionTemplate.set(35)
let GemPropertyIndex = 2300
let SpellItemEnchantmentIndex = 5300
let GemQuality3 = 3

// Red Gems 
let Tier3red1 = createGem(GemQuality3,'Tier3red1','Teardrop Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red1,0,0,-1,0,0,0,0],[Tier3red1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set(redColorCode + '+10 Agility').ItemVisual.set(0).Flags.set(0)

let Tier3red2 = createGem(GemQuality3,'Tier3red2','Bold Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red2,0,0,-1,0,0,0,0],[Tier3red2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set(redColorCode + '+10 Intellect').ItemVisual.set(0).Flags.set(0)

let Tier3red3 = createGem(GemQuality3,'Tier3red3','Runed Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red3,0,0,-1,0,0,0,0],[Tier3red3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set(redColorCode + '+12 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier3red4 = createGem(GemQuality3,'Tier3red4','Delicate Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red4,0,0,-1,0,0,0,0],[Tier3red4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set(redColorCode + '+10 Stamina').ItemVisual.set(0).Flags.set(0)

let Tier3red5 = createGem(GemQuality3,'Tier3red5','Stark Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red5,0,0,-1,0,0,0,0],[Tier3red5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set(redColorCode + '+10 Strength').ItemVisual.set(0).Flags.set(0)

let Tier3red6 = createGem(GemQuality3,'Tier3red6','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red6,0,0,-1,0,0,0,0],[Tier3red6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,21).EffectPointsMin.setIndex(0,21).Name.enGB.set(redColorCode + '+21 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier3red7 = createGem(GemQuality3,'Tier3red7','Bright Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red7,0,0,-1,0,0,0,0],[Tier3red7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,4).EffectArg.setIndex(0,0).EffectPointsMax.setIndex(0,45).EffectPointsMin.setIndex(0,45).Name.enGB.set(redColorCode + '+45 Armor').ItemVisual.set(0).Flags.set(0)

let Tier3red8 = createGem(GemQuality3,'Tier3red8','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,Tier3red8,0,0,-1,0,0,0,0],[Tier3red8,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,21).EffectPointsMin.setIndex(0,21).Name.enGB.set(redColorCode + '+21 Spell Power').ItemVisual.set(0).Flags.set(0)

export let Tier3RedGems = [Tier3red1,Tier3red2,Tier3red3,Tier3red4,Tier3red5,Tier3red6,Tier3red7,Tier3red8]
gemLevelUpPattern(tierThreeBaseResources[6],tier2RedGems,Tier3RedGems)

// Green Gems
let Tier3green1 = createGem(GemQuality3,'Tier3green1','Radiant Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier3green1,0,0,-1,0,0,0,0],[Tier3green1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set(greenColorCode + '+8 Agility and +15 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier3green2 = createGem(GemQuality3,'Tier3green2','Jagged Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier3green2,0,0,-1,0,0,0,0],[Tier3green2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set(greenColorCode + '+8 Strength and +15 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier3green3 = createGem(GemQuality3,'Tier3green3','Enduring Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier3green3,0,0,-1,0,0,0,0],[Tier3green3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set(greenColorCode + '+8 Intellect and +15 Spell Power').ItemVisual.set(0).Flags.set(0)

let Tier3green4 = createGem(GemQuality3,'Tier3green4','Dazzling Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier3green4,0,0,-1,0,0,0,0],[Tier3green4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(greenColorCode + '+10 Intellect and +16 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier3green5 = createGem(GemQuality3,'Tier3green5','Notched Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier3green5,0,0,-1,0,0,0,0],[Tier3green5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,18).EffectPointsMin.setIndex(0,18).Effect.setIndex(1,5).EffectArg.setIndex(1,13).EffectPointsMax.setIndex(1,18).EffectPointsMin.setIndex(1,18).Name.enGB.set(greenColorCode + '+18 Defense Rating and +18 Dodge Rating').ItemVisual.set(0).Flags.set(0)

let Tier3green6 = createGem(GemQuality3,'Tier3green6','Barbed Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier3green6,0,0,-1,0,0,0,0],[Tier3green6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(greenColorCode + '+12 Haste Rating and +12 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier3green7 = createGem(GemQuality3,'Tier3green7','Unstable Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,Tier3green7,0,0,-1,0,0,0,0],[Tier3green7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,18).EffectPointsMin.setIndex(0,18).Effect.setIndex(1,5).EffectArg.setIndex(1,37).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set(greenColorCode + '+18 Hit Rating and +15 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let Tier3GreenGems = [Tier3green1,Tier3green2,Tier3green3,Tier3green4,Tier3green5,Tier3green6,Tier3green7]
gemLevelUpPattern(tierThreeBaseResources[6],tier2GreenGems,Tier3GreenGems)


// Purple Gems
let Tier3purple1 = createGem(GemQuality3,'Tier3purple1','Shifting Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier3purple1,0,0,-1,0,0,0,0],[Tier3purple1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(purpleColorCode + '+8 Agility and +16 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier3purple2 = createGem(GemQuality3,'Tier3purple2','Sovereign Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier3purple2,0,0,-1,0,0,0,0],[Tier3purple2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(purpleColorCode + '+8 Strength and +16 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier3purple3 = createGem(GemQuality3,'Tier3purple3','Infused Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier3purple3,0,0,-1,0,0,0,0],[Tier3purple3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(purpleColorCode + '+8 Intellect and +16 Haste Rating').ItemVisual.set(0).Flags.set(0)

let Tier3purple4 = createGem(GemQuality3,'Tier3purple4','Glowing Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier3purple4,0,0,-1,0,0,0,0],[Tier3purple4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,20).EffectPointsMin.setIndex(0,20).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,14).EffectPointsMin.setIndex(1,14).Name.enGB.set(purpleColorCode + '+14 Haste Rating and +20 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier3purple5 = createGem(GemQuality3,'Tier3purple5','Royal Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier3purple5,0,0,-1,0,0,0,0],[Tier3purple5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,30).EffectPointsMin.setIndex(0,30).Name.enGB.set(purpleColorCode + '+30 Block Rating').ItemVisual.set(0).Flags.set(0)

let Tier3purple6 = createGem(GemQuality3,'Tier3purple6','Balanced Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier3purple6,0,0,-1,0,0,0,0],[Tier3purple6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(purpleColorCode + '+8 Haste Rating and +20 Mana Per Second').ItemVisual.set(0).Flags.set(0)

let Tier3purple7 = createGem(GemQuality3,'Tier3purple7','Enthralled Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,Tier3purple7,0,0,-1,0,0,0,0],[Tier3purple7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,21).EffectPointsMin.setIndex(0,21).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,11).EffectPointsMin.setIndex(1,11).Name.enGB.set(purpleColorCode + '+21 Critical Strike Rating and +11 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let Tier3PurpleGems = [Tier3purple1,Tier3purple2,Tier3purple3,Tier3purple4,Tier3purple5,Tier3purple6,Tier3purple7]
gemLevelUpPattern(tierThreeBaseResources[6],tier2PurpleGems,Tier3PurpleGems)

// Yellow Gems
let Tier3yellow1 = createGem(GemQuality3,'Tier3yellow1','Brilliant Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier3yellow1,0,0,-1,0,0,0,0],[Tier3yellow1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(yellowColorCode + '+8 Agility and +16 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier3yellow2 = createGem(GemQuality3,'Tier3yellow2','Gleaming Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier3yellow2,0,0,-1,0,0,0,0],[Tier3yellow2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(yellowColorCode + '+8 Strength and +16 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier3yellow3 = createGem(GemQuality3,'Tier3yellow3','Thick Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier3yellow3,0,0,-1,0,0,0,0],[Tier3yellow3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(yellowColorCode + '+8 Intellect and +16 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier3yellow4 = createGem(GemQuality3,'Tier3yellow4','Rigid Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier3yellow4,0,0,-1,0,0,0,0],[Tier3yellow4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set(yellowColorCode + '+12 Critical Strike Rating and +16 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier3yellow5 = createGem(GemQuality3,'Tier3yellow5','Great Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,Tier3yellow5,0,0,-1,0,0,0,0],[Tier3yellow5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,30).EffectPointsMin.setIndex(0,30).Name.enGB.set(yellowColorCode + '+30 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

export let Tier3YellowGems = [Tier3yellow1,Tier3yellow2,Tier3yellow3,Tier3yellow4,Tier3yellow5]
gemLevelUpPattern(tierThreeBaseResources[6],tier2YellowGems,Tier3YellowGems)

//Blue Gems

let Tier3blue1 = createGem(GemQuality3,'Tier3blue1','Solid Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier3blue1,0,0,-1,0,0,0,0],[Tier3blue1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Name.enGB.set(blueColorCode + '+15 Stamina').ItemVisual.set(0).Flags.set(0)

let Tier3blue2 = createGem(GemQuality3,'Tier3blue2','Sparkling Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier3blue2,0,0,-1,0,0,0,0],[Tier3blue2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,6).EffectPointsMin.setIndex(1,6).Name.enGB.set(blueColorCode + '+9 Stamina and +6 Intellect').ItemVisual.set(0).Flags.set(0)

let Tier3blue3 = createGem(GemQuality3,'Tier3blue3','Stormy Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier3blue3,0,0,-1,0,0,0,0],[Tier3blue3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Effect.setIndex(1,5).EffectArg.setIndex(1,3).EffectPointsMax.setIndex(1,6).EffectPointsMin.setIndex(1,6).Name.enGB.set(blueColorCode + '+9 Stamina and +6 Agility').ItemVisual.set(0).Flags.set(0)

let Tier3blue4 = createGem(GemQuality3,'Tier3blue4','Lustrous Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,Tier3blue4,0,0,-1,0,0,0,0],[Tier3blue4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,6).EffectPointsMin.setIndex(1,6).Name.enGB.set(blueColorCode + '+9 Stamina and +6 Strength').ItemVisual.set(0).Flags.set(0)

export let Tier3blueGems = [Tier3blue1,Tier3blue2,Tier3blue3,Tier3blue4]
gemLevelUpPattern(tierThreeBaseResources[6],tier2blueGems,Tier3blueGems)

// orange Gems
let Tier3orange1 = createGem(GemQuality3,'Tier3orange1','Inscribed Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier3orange1,0,0,-1,0,0,0,0],[Tier3orange1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(orangeColorCode + '+11 Critical Strike Rating and +16 Haste Rating').ItemVisual.set(0).Flags.set(0)

let Tier3orange2 = createGem(GemQuality3,'Tier3orange2','Luminous Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier3orange2,0,0,-1,0,0,0,0],[Tier3orange2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(orangeColorCode + '+11 Critical Strike Rating and +16 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier3orange3 = createGem(GemQuality3,'Tier3orange3','Glinting Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier3orange3,0,0,-1,0,0,0,0],[Tier3orange3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(orangeColorCode + '+11 Critical Strike Rating and +16 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier3orange4 = createGem(GemQuality3,'Tier3orange4','Potent Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier3orange4,0,0,-1,0,0,0,0],[Tier3orange4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(orangeColorCode + '+11 Critical Strike Rating and +16 Spell Power').ItemVisual.set(0).Flags.set(0)

let Tier3orange5 = createGem(GemQuality3,'Tier3orange5','Veiled Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier3orange5,0,0,-1,0,0,0,0],[Tier3orange5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,30).EffectPointsMin.setIndex(0,30).Name.enGB.set(orangeColorCode + '+30 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier3orange6 = createGem(GemQuality3,'Tier3orange6','Wicked Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,Tier3orange6,0,0,-1,0,0,0,0],[Tier3orange6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,25).EffectPointsMin.setIndex(1,25).Name.enGB.set(orangeColorCode + '+11 Critical Strike Rating and +25 Mana Per Second').ItemVisual.set(0).Flags.set(0)

export let Tier3orangeGems = [Tier3orange1,Tier3orange2,Tier3orange3,Tier3orange4,Tier3orange5,Tier3orange6]
gemLevelUpPattern(tierThreeBaseResources[6],tier2orangeGems,Tier3orangeGems)

additems(vendor2,[Tier3RedGems,Tier3GreenGems,Tier3PurpleGems,Tier3YellowGems,Tier3blueGems,Tier3orangeGems])