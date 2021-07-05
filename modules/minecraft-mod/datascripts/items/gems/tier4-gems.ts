import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createRecipe } from "../../functions/recipe-functions"
import { DBC_GemProperties } from "wotlkdata/dbc/types/GemProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { createGem, additems, gemLevelUpPattern, redColorCode, greenColorCode, purpleColorCode, yellowColorCode, blueColorCode, orangeColorCode, createAllUndiscoverGems } from "./gem-functions"
import { tierFourBaseResources } from "../armor/tier4-set"
import { Tier3blueGems, Tier3GreenGems, Tier3orangeGems, Tier3PurpleGems, Tier3RedGems, Tier3YellowGems } from "./tier3-gems"
let vendor2 = std.CreatureTemplates.create(MODNAME,'gemdude4',3482)
vendor2.Name.enGB.set('Test Gems 4')
vendor2.Subname.enGB.set('will be removed')
vendor2.FactionTemplate.set(35)
let GemPropertyIndex = 2450
let SpellItemEnchantmentIndex = 5450
let GemQuality4 = 4
let BagFamily = 512

// Red Gems 
let Tier4red1 = createGem(GemQuality4,'Tier4red1','|cff6524DETeardrop Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red1,0,0,-1,0,0,0,0],[Tier4red1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,20).EffectPointsMin.setIndex(0,20).Name.enGB.set(redColorCode + '+20 Agility').ItemVisual.set(0).Flags.set(0)

let Tier4red2 = createGem(GemQuality4,'Tier4red2','|cff6524DEBold Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red2,0,0,-1,0,0,0,0],[Tier4red2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,20).EffectPointsMin.setIndex(0,20).Name.enGB.set(redColorCode + '+20 Intellect').ItemVisual.set(0).Flags.set(0)

let Tier4red3 = createGem(GemQuality4,'Tier4red3','|cff6524DERuned Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red3,0,0,-1,0,0,0,0],[Tier4red3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,18).EffectPointsMin.setIndex(0,18).Name.enGB.set(redColorCode + '+18 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier4red4 = createGem(GemQuality4,'Tier4red4','|cff6524DEDelicate Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red4,0,0,-1,0,0,0,0],[Tier4red4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,20).EffectPointsMin.setIndex(0,20).Name.enGB.set(redColorCode + '+20 Stamina').ItemVisual.set(0).Flags.set(0)

let Tier4red5 = createGem(GemQuality4,'Tier4red5','|cff6524DEStark Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red5,0,0,-1,0,0,0,0],[Tier4red5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,20).EffectPointsMin.setIndex(0,20).Name.enGB.set(redColorCode + '+20 Strength').ItemVisual.set(0).Flags.set(0)

let Tier4red6 = createGem(GemQuality4,'Tier4red6','|cff6524DEMighty Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red6,0,0,-1,0,0,0,0],[Tier4red6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,28).EffectPointsMin.setIndex(0,28).Name.enGB.set(redColorCode + '+28 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier4red7 = createGem(GemQuality4,'Tier4red7','|cff6524DEBright Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red7,0,0,-1,0,0,0,0],[Tier4red7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,4).EffectArg.setIndex(0,0).EffectPointsMax.setIndex(0,60).EffectPointsMin.setIndex(0,60).Name.enGB.set(redColorCode + '+60 Armor').ItemVisual.set(0).Flags.set(0)

let Tier4red8 = createGem(GemQuality4,'Tier4red8','|cff6524DEMighty Blood Garnet',35930,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4red8,0,0,-1,0,0,0,0],[Tier4red8,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,28).EffectPointsMin.setIndex(0,28).Name.enGB.set(redColorCode + '+28 Spell Power').ItemVisual.set(0).Flags.set(0)

export let Tier4RedGems = [Tier4red1,Tier4red2,Tier4red3,Tier4red4,Tier4red5,Tier4red6,Tier4red7,Tier4red8]
gemLevelUpPattern(tierFourBaseResources[6],Tier3RedGems,Tier4RedGems)

// Green Gems
let Tier4green1 = createGem(GemQuality4,'Tier4green1','|cff6524DERadiant Deep Peridot',35843,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4green1,0,0,-1,0,0,0,0],[Tier4green1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(greenColorCode + '+12 Agility and +20 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier4green2 = createGem(GemQuality4,'Tier4green2','|cff6524DEJagged Deep Peridot',35843,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4green2,0,0,-1,0,0,0,0],[Tier4green2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(greenColorCode + '+12 Strength and +20 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier4green3 = createGem(GemQuality4,'Tier4green3','|cff6524DEEnduring Deep Peridot',35843,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4green3,0,0,-1,0,0,0,0],[Tier4green3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(greenColorCode + '+12 Intellect and +20 Spell Power').ItemVisual.set(0).Flags.set(0)

let Tier4green4 = createGem(GemQuality4,'Tier4green4','|cff6524DEDazzling Deep Peridot',35843,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4green4,0,0,-1,0,0,0,0],[Tier4green4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,15).EffectPointsMin.setIndex(1,15).Name.enGB.set(greenColorCode + '+15 Intellect and +22 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier4green5 = createGem(GemQuality4,'Tier4green5','|cff6524DENotched Deep Peridot',35843,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4green5,0,0,-1,0,0,0,0],[Tier4green5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Effect.setIndex(1,5).EffectArg.setIndex(1,13).EffectPointsMax.setIndex(1,24).EffectPointsMin.setIndex(1,24).Name.enGB.set(greenColorCode + '+24 Defense Rating and +24 Dodge Rating').ItemVisual.set(0).Flags.set(0)

let Tier4green6 = createGem(GemQuality4,'Tier4green6','|cff6524DEBarbed Deep Peridot',35843,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4green6,0,0,-1,0,0,0,0],[Tier4green6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(greenColorCode + '+16 Haste Rating and +16 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier4green7 = createGem(GemQuality4,'Tier4green7','|cff6524DEUnstable Deep Peridot',35843,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4green7,0,0,-1,0,0,0,0],[Tier4green7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Effect.setIndex(1,5).EffectArg.setIndex(1,37).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(greenColorCode + '+22 Hit Rating and +20 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let Tier4GreenGems = [Tier4green1,Tier4green2,Tier4green3,Tier4green4,Tier4green5,Tier4green6,Tier4green7]
gemLevelUpPattern(tierFourBaseResources[6],Tier3GreenGems,Tier4GreenGems)


// Purple Gems
let Tier4purple1 = createGem(GemQuality4,'Tier4purple1','|cff6524DEShifting Shadow Draenite',35847,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4purple1,0,0,-1,0,0,0,0],[Tier4purple1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,22).EffectPointsMin.setIndex(1,22).Name.enGB.set(purpleColorCode + '+11 Agility and +22 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier4purple2 = createGem(GemQuality4,'Tier4purple2','|cff6524DESovereign Shadow Draenite',35847,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4purple2,0,0,-1,0,0,0,0],[Tier4purple2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,22).EffectPointsMin.setIndex(1,22).Name.enGB.set(purpleColorCode + '+11 Strength and +22 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier4purple3 = createGem(GemQuality4,'Tier4purple3','|cff6524DEInfused Shadow Draenite',35847,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4purple3,0,0,-1,0,0,0,0],[Tier4purple3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,22).EffectPointsMin.setIndex(1,22).Name.enGB.set(purpleColorCode + '+11 Intellect and +22 Haste Rating').ItemVisual.set(0).Flags.set(0)

let Tier4purple4 = createGem(GemQuality4,'Tier4purple4','|cff6524DEGlowing Shadow Draenite',35847,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4purple4,0,0,-1,0,0,0,0],[Tier4purple4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,28).EffectPointsMin.setIndex(0,28).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,18).EffectPointsMin.setIndex(1,18).Name.enGB.set(purpleColorCode + '+18 Haste Rating and +28 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier4purple5 = createGem(GemQuality4,'Tier4purple5','|cff6524DERoyal Shadow Draenite',35847,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4purple5,0,0,-1,0,0,0,0],[Tier4purple5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,45).EffectPointsMin.setIndex(0,45).Name.enGB.set(purpleColorCode + '+45 Block Rating').ItemVisual.set(0).Flags.set(0)

let Tier4purple6 = createGem(GemQuality4,'Tier4purple6','|cff6524DEBalanced Shadow Draenite',35847,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4purple6,0,0,-1,0,0,0,0],[Tier4purple6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,35).EffectPointsMin.setIndex(1,35).Name.enGB.set(purpleColorCode + '+12 Haste Rating and +35 Mana Per Second').ItemVisual.set(0).Flags.set(0)

let Tier4purple7 = createGem(GemQuality4,'Tier4purple7','|cff6524DEEnthralled Shadow Draenite',35847,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4purple7,0,0,-1,0,0,0,0],[Tier4purple7,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,28).EffectPointsMin.setIndex(0,28).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set(purpleColorCode + '+28 Critical Strike Rating and +16 Expertise Rating').ItemVisual.set(0).Flags.set(0)

export let Tier4PurpleGems = [Tier4purple1,Tier4purple2,Tier4purple3,Tier4purple4,Tier4purple5,Tier4purple6,Tier4purple7]
gemLevelUpPattern(tierFourBaseResources[6],Tier3PurpleGems,Tier4PurpleGems)

// Yellow Gems
let Tier4yellow1 = createGem(GemQuality4,'Tier4yellow1','|cff6524DEBrilliant Golden Draenite',35848,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4yellow1,0,0,-1,0,0,0,0],[Tier4yellow1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,22).EffectPointsMin.setIndex(1,22).Name.enGB.set(yellowColorCode + '+11 Agility and +22 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier4yellow2 = createGem(GemQuality4,'Tier4yellow2','|cff6524DEGleaming Golden Draenite',35848,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4yellow2,0,0,-1,0,0,0,0],[Tier4yellow2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,22).EffectPointsMin.setIndex(1,22).Name.enGB.set(yellowColorCode + '+11 Strength and +22 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier4yellow3 = createGem(GemQuality4,'Tier4yellow3','|cff6524DEThick Golden Draenite',35848,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4yellow3,0,0,-1,0,0,0,0],[Tier4yellow3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,22).EffectPointsMin.setIndex(1,22).Name.enGB.set(yellowColorCode + '+11 Intellect and +22 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier4yellow4 = createGem(GemQuality4,'Tier4yellow4','|cff6524DERigid Golden Draenite',35848,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4yellow4,0,0,-1,0,0,0,0],[Tier4yellow4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Effect.setIndex(1,5).EffectArg.setIndex(1,32).EffectPointsMax.setIndex(1,18).EffectPointsMin.setIndex(1,18).Name.enGB.set(yellowColorCode + '+18 Critical Strike Rating and +22 Spirit').ItemVisual.set(0).Flags.set(0)

let Tier4yellow5 = createGem(GemQuality4,'Tier4yellow5','|cff6524DEGreat Golden Draenite',35848,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4yellow5,0,0,-1,0,0,0,0],[Tier4yellow5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,45).EffectPointsMin.setIndex(0,45).Name.enGB.set(yellowColorCode + '+45 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

export let Tier4YellowGems = [Tier4yellow1,Tier4yellow2,Tier4yellow3,Tier4yellow4,Tier4yellow5]
gemLevelUpPattern(tierFourBaseResources[6],Tier3YellowGems,Tier4YellowGems)

//Blue Gems

let Tier4blue1 = createGem(GemQuality4,'Tier4blue1','|cff6524DESolid Azure Moonstone',35852,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4blue1,0,0,-1,0,0,0,0],[Tier4blue1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,25).EffectPointsMin.setIndex(0,25).Name.enGB.set(blueColorCode + '+25 Stamina').ItemVisual.set(0).Flags.set(0)

let Tier4blue2 = createGem(GemQuality4,'Tier4blue2','|cff6524DESparkling Azure Moonstone',35852,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4blue2,0,0,-1,0,0,0,0],[Tier4blue2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,5).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(blueColorCode + '+15 Stamina and +10 Intellect').ItemVisual.set(0).Flags.set(0)

let Tier4blue3 = createGem(GemQuality4,'Tier4blue3','|cff6524DEStormy Azure Moonstone',35852,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4blue3,0,0,-1,0,0,0,0],[Tier4blue3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,3).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(blueColorCode + '+15 Stamina and +10 Agility').ItemVisual.set(0).Flags.set(0)

let Tier4blue4 = createGem(GemQuality4,'Tier4blue4','|cff6524DELustrous Azure Moonstone',35852,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4blue4,0,0,-1,0,0,0,0],[Tier4blue4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,10).EffectPointsMin.setIndex(1,10).Name.enGB.set(blueColorCode + '+15 Stamina and +10 Strength').ItemVisual.set(0).Flags.set(0)

export let Tier4blueGems = [Tier4blue1,Tier4blue2,Tier4blue3,Tier4blue4]
gemLevelUpPattern(tierFourBaseResources[6],Tier3blueGems,Tier4blueGems)

// orange Gems
let Tier4orange1 = createGem(GemQuality4,'Tier4orange1','|cff6524DEInscribed Flame Spessarite',35845,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4orange1,0,0,-1,0,0,0,0],[Tier4orange1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,36).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(orangeColorCode + '+15 Critical Strike Rating and +20 Haste Rating').ItemVisual.set(0).Flags.set(0)

let Tier4orange2 = createGem(GemQuality4,'Tier4orange2','|cff6524DELuminous Flame Spessarite',35845,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4orange2,0,0,-1,0,0,0,0],[Tier4orange2,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,31).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(orangeColorCode + '+15 Critical Strike Rating and +20 Hit Rating').ItemVisual.set(0).Flags.set(0)

let Tier4orange3 = createGem(GemQuality4,'Tier4orange3','|cff6524DEGlinting Flame Spessarite',35845,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4orange3,0,0,-1,0,0,0,0],[Tier4orange3,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(orangeColorCode + '+15 Critical Strike Rating and +20 Attack Power').ItemVisual.set(0).Flags.set(0)

let Tier4orange4 = createGem(GemQuality4,'Tier4orange4','|cff6524DEPotent Flame Spessarite',35845,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4orange4,0,0,-1,0,0,0,0],[Tier4orange4,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,45).EffectPointsMax.setIndex(1,20).EffectPointsMin.setIndex(1,20).Name.enGB.set(orangeColorCode + '+15 Critical Strike Rating and +20 Spell Power').ItemVisual.set(0).Flags.set(0)

let Tier4orange5 = createGem(GemQuality4,'Tier4orange5','|cff6524DEVeiled Flame Spessarite',35845,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4orange5,0,0,-1,0,0,0,0],[Tier4orange5,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,45).EffectPointsMin.setIndex(0,45).Name.enGB.set(orangeColorCode + '+45 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)

let Tier4orange6 = createGem(GemQuality4,'Tier4orange6','|cff6524DEWicked Flame Spessarite',35845,'',GemPropertyIndex,10,BagFamily)
createRecipe([0,Tier4orange6,0,0,-1,0,0,0,0],[Tier4orange6,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],SpellItemEnchantmentIndex,1)
DBC_GemProperties.add(GemPropertyIndex++,{Enchant_Id: SpellItemEnchantmentIndex,Maxcount_Inv: 0,Maxcount_Item: 0,Type: 8})
DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,15).EffectPointsMin.setIndex(0,15).Effect.setIndex(1,5).EffectArg.setIndex(1,43).EffectPointsMax.setIndex(1,45).EffectPointsMin.setIndex(1,45).Name.enGB.set(orangeColorCode + '+15 Critical Strike Rating and +45 Mana Per Second').ItemVisual.set(0).Flags.set(0)

export let Tier4orangeGems = [Tier4orange1,Tier4orange2,Tier4orange3,Tier4orange4,Tier4orange5,Tier4orange6]
gemLevelUpPattern(tierFourBaseResources[6],Tier3orangeGems,Tier4orangeGems)

additems(vendor2,[Tier4RedGems,Tier4GreenGems,Tier4PurpleGems,Tier4YellowGems,Tier4blueGems,Tier4orangeGems])