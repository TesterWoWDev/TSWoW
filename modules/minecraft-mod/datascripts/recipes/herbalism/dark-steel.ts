import { std } from "tswow-stdlib";
import { createRecipe } from "../../functions/recipe-functions";
import { MODNAME } from "../../modname";
import { DarkSteel, DarkLeather, DarkCloth } from "../../zones/open-world-dungeon-01";

export let EyeofDestiny = std.Items.create(MODNAME,'eyeofdestiny',21221)
EyeofDestiny.Name.enGB.set('Eye of Destiny')
EyeofDestiny.Quality.setOrange()
EyeofDestiny.Description.enGB.set('What can be learned from an eye as old as time..?')
EyeofDestiny.StartQuest.set(0)

export let DarkSteelGloves = std.Items.create(MODNAME,'darksteelgloves',28505)
DarkSteelGloves.Name.enGB.set('Dark Steel Gloves')
DarkSteelGloves.Quality.setOrange()
DarkSteelGloves.RequiredLevel.set(12)
DarkSteelGloves.Stats.addAttackPower(77)
DarkSteelGloves.Stats.addStamina(62)
DarkSteelGloves.Stats.addStrength(44)
DarkSteelGloves.Stats.addCritRating(37)
DarkSteelGloves.Stats.addHasteRating(30)
DarkSteelGloves.Stats.addHealth(125)
export let DarkLeatherGloves = std.Items.create(MODNAME,'darkleathergloves',28506)
DarkLeatherGloves.Name.enGB.set('Dark Leather Gloves')
DarkLeatherGloves.Quality.setOrange()
DarkLeatherGloves.RequiredLevel.set(12)
DarkLeatherGloves.Stats.addAttackPower(77)
DarkLeatherGloves.Stats.addStamina(62)
DarkLeatherGloves.Stats.addAgility(44)
DarkLeatherGloves.Stats.addCritRating(37)
DarkLeatherGloves.Stats.addHasteRating(30)
DarkLeatherGloves.Stats.addHealth(125)
export let DarkClothGloves = std.Items.create(MODNAME,'darkclothgloves',28507)
DarkClothGloves.Name.enGB.set('Dark Cloth Gloves')
DarkClothGloves.Quality.setOrange()
DarkClothGloves.RequiredLevel.set(12)
DarkClothGloves.Stats.addSpellPower(77)
DarkClothGloves.Stats.addStamina(62)
DarkClothGloves.Stats.addIntellect(44)
DarkClothGloves.Stats.addCritRating(37)
DarkClothGloves.Stats.addHasteRating(30)
DarkClothGloves.Stats.addHealth(125)

createRecipe([DarkSteel.ID,0,DarkSteel.ID,DarkSteel.ID,0,DarkSteel.ID,0,0,0],[DarkSteel.ID,0,0,0,0,0,0,0,0],[4,0,0,0,0,0,0,0,0],DarkSteelGloves.ID,1)
createRecipe([DarkLeather.ID,0,DarkLeather.ID,DarkLeather.ID,0,DarkLeather.ID,0,0,0],[DarkLeather.ID,0,0,0,0,0,0,0,0],[4,0,0,0,0,0,0,0,0],DarkLeatherGloves.ID,1)
createRecipe([DarkCloth.ID,0,DarkCloth.ID,DarkCloth.ID,0,DarkCloth.ID,0,0,0],[DarkCloth.ID,0,0,0,0,0,0,0,0],[4,0,0,0,0,0,0,0,0],DarkClothGloves.ID,1)
