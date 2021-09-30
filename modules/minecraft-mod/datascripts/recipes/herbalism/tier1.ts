import { createRecipe } from "../../functions/recipe-functions";
import { DiscoloredHealingPotion, LesserHealingPotion, MinorHealingPotion, MinorManaPotion, MinorRejuvenationPotion } from "../../zones/(Zone-1)Bramblewood/zone-1-items";
//healing potions
let crystalVial = 8925
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],MinorHealingPotion.ID,1)
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],LesserHealingPotion.ID,1)
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],DiscoloredHealingPotion.ID,1)
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],MinorRejuvenationPotion.ID,1)