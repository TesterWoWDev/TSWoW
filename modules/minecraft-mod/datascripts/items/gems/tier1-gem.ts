import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createRecipe } from "../../functions/recipe-functions"
import { DBC_GemProperties } from "wotlkdata/dbc/types/GemProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { createGem, additems, gemLevelUpPattern, redColorCode, greenColorCode, purpleColorCode, yellowColorCode, blueColorCode, orangeColorCode, createAllUndiscoverGems } from "./gem-functions"
import { tierOneBaseResources } from "../tier1-set"
let vendor2 = std.CreatureTemplates.create(MODNAME,'gemdude',3482)
vendor2.Name.enGB.set('Test Gems')
vendor2.Subname.enGB.set('will be removed')
vendor2.FactionTemplate.set(35)
let GemPropertyIndex = 2000
let SpellItemEnchantmentIndex = 5000

// Red Gems 
let red1 = createGem('red1','Teardrop Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red1,0,0,-1,0,0,0,0],[red1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Agility').ItemVisual.set(0)

let red2 = createGem('red2','Bold Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red2,0,0,-1,0,0,0,0],[red2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Intellect').ItemVisual.set(0)

let red3 = createGem('red3','Runed Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red3,0,0,-1,0,0,0,0],[red3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set(redColorCode + '+4 Spirit').ItemVisual.set(0)

let red4 = createGem('red4','Delicate Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red4,0,0,-1,0,0,0,0],[red4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+5 Stamina').ItemVisual.set(0)

let red5 = createGem('red5','Stark Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red5,0,0,-1,0,0,0,0],[red5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set(redColorCode + '+3 Strength').ItemVisual.set(0)

let red6 = createGem('red6','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red6,0,0,-1,0,0,0,0],[red6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Attack Power').ItemVisual.set(0)

let red7 = createGem('red7','Bright Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red7,0,0,-1,0,0,0,0],[red7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,4).EffectArg.setIndex(0,0).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Name.enGB.set(redColorCode + '+15 Armor').ItemVisual.set(0)

let red8 = createGem('red8','Mighty Blood Garnet',35930,'',GemPropertyIndex,10)
createRecipe([0,red8,0,0,-1,0,0,0,0],[red8,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set(redColorCode + '+7 Spell Power').ItemVisual.set(0)

export let tier1RedGems = [red1,red2,red3,red4,red5,red6,red7,red8]
export let undiscoveredReds = createAllUndiscoverGems(8,'Blood Garnet',39911)
gemLevelUpPattern(tierOneBaseResources[6],undiscoveredReds,tier1RedGems)

// Green Gems
let green1 = createGem('green1','Radiant Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green1,0,0,-1,0,0,0,0],[green1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,1).EffectPointsMin.setIndex(0,1).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+1 Agility and +5 Attack Power').ItemVisual.set(0)

let green2 = createGem('green2','Jagged Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green2,0,0,-1,0,0,0,0],[green2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,1).EffectPointsMin.setIndex(0,1).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+1 Strength and +5 Attack Power').ItemVisual.set(0)

let green3 = createGem('green3','Enduring Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green3,0,0,-1,0,0,0,0],[green3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,1).EffectPointsMin.setIndex(0,1).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+1 Intellect and +5 Spell Power').ItemVisual.set(0)

let green4 = createGem('green4','Dazzling Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green4,0,0,-1,0,0,0,0],[green4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,3).EffectPointsMin.setIndex(1,3).Name.enGB.set(greenColorCode + '+2 Intellect and +3 Spirit').ItemVisual.set(0)

let green5 = createGem('green5','Notched Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green5,0,0,-1,0,0,0,0],[green5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,13).EffectPointsMax.setIndex(1,6).EffectPointsMin.setIndex(1,6).Name.enGB.set(greenColorCode + '+6 Defense Rating and +6 Dodge Rating').ItemVisual.set(0)

let green6 = createGem('green6','Barbed Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green6,0,0,-1,0,0,0,0],[green6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set(greenColorCode + '+4 Haste Rating and +4 Hit Rating').ItemVisual.set(0)

let green7 = createGem('green7','Unstable Deep Peridot',35843,'',GemPropertyIndex,10)
createRecipe([0,green7,0,0,-1,0,0,0,0],[green7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Effect.setIndex(1,5).EffectArg.setIndex(1,37).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(greenColorCode + '+8 Hit Rating and +5 Expertise Rating').ItemVisual.set(0)

export let tier1GreenGems = [green1,green2,green3,green4,green5,green6,green7]
export let undiscoveredGreens = createAllUndiscoverGems(7,'Deep Peridot',44729)
gemLevelUpPattern(tierOneBaseResources[6],undiscoveredGreens,tier1GreenGems)


// Purple Gems
let purple1 = createGem('purple1','Shifting Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,purple1,0,0,-1,0,0,0,0],[purple1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(purpleColorCode + '+2 Agility and +8 Hit Rating').ItemVisual.set(0)

let purple2 = createGem('purple2','Sovereign Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,purple2,0,0,-1,0,0,0,0],[purple2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(purpleColorCode + '+2 Strength and +8 Hit Rating').ItemVisual.set(0)

let purple3 = createGem('purple3','Infused Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,purple3,0,0,-1,0,0,0,0],[purple3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(purpleColorCode + '+2 Intellect and +8 Haste Rating').ItemVisual.set(0)

let purple4 = createGem('purple4','Glowing Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,purple4,0,0,-1,0,0,0,0],[purple4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(purpleColorCode + '+5 Haste Rating and +6 Spirit').ItemVisual.set(0)

let purple5 = createGem('purple5','Royal Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,purple5,0,0,-1,0,0,0,0],[purple5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Name.enGB.set(purpleColorCode + '+15 Block Rating').ItemVisual.set(0)

let purple6 = createGem('purple6','Balanced Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,purple6,0,0,-1,0,0,0,0],[purple6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(purpleColorCode + '+3 Haste Rating and +5 Mana Per Second').ItemVisual.set(0)

let purple7 = createGem('purple7','Enthralled Shadow Draenite',35847,'',GemPropertyIndex,10)
createRecipe([0,purple7,0,0,-1,0,0,0,0],[purple7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(purpleColorCode + '+10 Critical Strike Rating and +5 Expertise Rating').ItemVisual.set(0)

export let tier1PurpleGems = [purple1,purple2,purple3,purple4,purple5,purple6,purple7]
export let undiscoveredPurples = createAllUndiscoverGems(7,'Shadow Draenite',39933)
gemLevelUpPattern(tierOneBaseResources[6],undiscoveredPurples,tier1PurpleGems)

// Yellow Gems
let yellow1 = createGem('yellow1','Brilliant Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,yellow1,0,0,-1,0,0,0,0],[yellow1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(yellowColorCode + '+2 Agility and +8 Critical Strike Rating').ItemVisual.set(0)

let yellow2 = createGem('yellow2','Gleaming Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,yellow2,0,0,-1,0,0,0,0],[yellow2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(yellowColorCode + '+2 Strength and +8 Critical Strike Rating').ItemVisual.set(0)

let yellow3 = createGem('yellow3','Thick Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,yellow3,0,0,-1,0,0,0,0],[yellow3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(yellowColorCode + '+2 Intellect and +8 Critical Strike Rating').ItemVisual.set(0)

let yellow4 = createGem('yellow4','Rigid Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,yellow4,0,0,-1,0,0,0,0],[yellow4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,5).EffectPointsMin.setIndex(1,5).Name.enGB.set(yellowColorCode + '+5 Critical Strike Rating and +6 Spirit').ItemVisual.set(0)

let yellow5 = createGem('yellow5','Great Golden Draenite',35848,'',GemPropertyIndex,10)
createRecipe([0,yellow5,0,0,-1,0,0,0,0],[yellow5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Name.enGB.set(yellowColorCode + '+15 Critical Strike Rating').ItemVisual.set(0)

export let tier1YellowGems = [yellow1,yellow2,yellow3,yellow4,yellow5]
export let undiscoveredYellows = createAllUndiscoverGems(5,'Shadow Draenite',39938)
gemLevelUpPattern(tierOneBaseResources[6],undiscoveredYellows,tier1YellowGems)

//Blue Gems

let blue1 = createGem('blue1','Solid Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,blue1,0,0,-1,0,0,0,0],[blue1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set(blueColorCode + '+6 Stamina').ItemVisual.set(0)

let blue2 = createGem('blue2','Sparkling Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,blue2,0,0,-1,0,0,0,0],[blue2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,2).EffectPointsMin.setIndex(1,2).Name.enGB.set(blueColorCode + '+4 Stamina and +2 Intellect').ItemVisual.set(0)

let blue3 = createGem('blue3','Stormy Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,blue3,0,0,-1,0,0,0,0],[blue3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,3).EffectPointsMax.setIndex(1,2).EffectPointsMin.setIndex(1,2).Name.enGB.set(blueColorCode + '+4 Stamina and +2 Agility').ItemVisual.set(0)

let blue4 = createGem('blue4','Lustrous Azure Moonstone',35852,'',GemPropertyIndex,10)
createRecipe([0,blue4,0,0,-1,0,0,0,0],[blue4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,2).EffectPointsMin.setIndex(1,2).Name.enGB.set(blueColorCode + '+4 Stamina and +2 Strength').ItemVisual.set(0)

export let tier1blueGems = [blue1,blue2,blue3,blue4]
export let undiscoveredblues = createAllUndiscoverGems(4,'Azure Moonstone',39928)
gemLevelUpPattern(tierOneBaseResources[6],undiscoveredblues,tier1blueGems)

// orange Gems
let orange1 = createGem('orange1','Inscribed Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,orange1,0,0,-1,0,0,0,0],[orange1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(orangeColorCode + '+5 Critical Strike Rating and +8 Haste Rating').ItemVisual.set(0)

let orange2 = createGem('orange2','Luminous Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,orange2,0,0,-1,0,0,0,0],[orange2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(orangeColorCode + '+5 Critical Strike Rating and +8 Hit Rating').ItemVisual.set(0)

let orange3 = createGem('orange3','Glinting Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,orange3,0,0,-1,0,0,0,0],[orange3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(orangeColorCode + '+5 Critical Strike Rating and +8 Attack Power').ItemVisual.set(0)

let orange4 = createGem('orange4','Potent Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,orange4,0,0,-1,0,0,0,0],[orange4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,8).EffectPointsMin.setIndex(1,8).Name.enGB.set(orangeColorCode + '+5 Critical Strike Rating and +8 Spell Power').ItemVisual.set(0)

let orange5 = createGem('orange5','Veiled Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,orange5,0,0,-1,0,0,0,0],[orange5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Name.enGB.set(orangeColorCode + '+15 Critical Strike Rating').ItemVisual.set(0)

let orange6 = createGem('orange6','Wicked Flame Spessarite',35845,'',GemPropertyIndex,10)
createRecipe([0,orange6,0,0,-1,0,0,0,0],[orange6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 1})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(orangeColorCode + '+5 Critical Strike Rating and +10 Mana Per Second').ItemVisual.set(0)

export let tier1orangeGems = [orange1,orange2,orange3,orange4,orange5,orange6]
export let undiscoveredoranges = createAllUndiscoverGems(6,'Flame Spessarite',39932)
gemLevelUpPattern(tierOneBaseResources[6],undiscoveredoranges,tier1orangeGems)

additems(vendor2,[tier1RedGems,tier1GreenGems,tier1PurpleGems,tier1YellowGems,tier1blueGems,tier1orangeGems])