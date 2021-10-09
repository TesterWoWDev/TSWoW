import { createRecipe } from "../../functions/recipe-functions";
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set";
import { tierTwoBaseResources, tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial } from "../../items/armor/tier2-set";
import { tierThreeBaseResources, tierThreeMailMaterial, tierThreeLeatherMaterial, tierThreeClothMaterial } from "../../items/armor/tier3-set";
import { tierFourBaseResources, tierFourMailMaterial, tierFourLeatherMaterial, tierFourClothMaterial } from "../../items/armor/tier4-set";
import { GemDust } from "../../items/gems/tier1-gem";
import { MinorHealingPotion, LesserHealingPotion, DiscoloredHealingPotion, MinorRejuvenationPotion } from "../../zones/item-manifest";

//healing potions
let crystalVial = 8925
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],MinorHealingPotion.ID,1)
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],LesserHealingPotion.ID,1)
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],DiscoloredHealingPotion.ID,1)
createRecipe([0,0,0,0,crystalVial,0,0,0,0],[crystalVial,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],MinorRejuvenationPotion.ID,1)

createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneBaseResources[0],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoBaseResources[0],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneBaseResources[1],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoBaseResources[1],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneBaseResources[2],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoBaseResources[2],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneBaseResources[3],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoBaseResources[3],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneBaseResources[4],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoBaseResources[4],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneBaseResources[5],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoBaseResources[5],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneBaseResources[6],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoBaseResources[6],1)

createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneMailMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneMailMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoMailMaterial,1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneLeatherMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneLeatherMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoLeatherMaterial,1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierOneClothMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierOneClothMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierTwoClothMaterial,1)


createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoBaseResources[0],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeBaseResources[0],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoBaseResources[1],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeBaseResources[1],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoBaseResources[2],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeBaseResources[2],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoBaseResources[3],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeBaseResources[3],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoBaseResources[4],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeBaseResources[4],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoBaseResources[5],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeBaseResources[5],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoBaseResources[6],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeBaseResources[6],1)

createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoMailMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoMailMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeMailMaterial,1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoLeatherMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoLeatherMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeLeatherMaterial,1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierTwoClothMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierTwoClothMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierThreeClothMaterial,1)


createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeBaseResources[0],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourBaseResources[0],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeBaseResources[1],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourBaseResources[1],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeBaseResources[2],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourBaseResources[2],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeBaseResources[3],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourBaseResources[3],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeBaseResources[4],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourBaseResources[4],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeBaseResources[5],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourBaseResources[5],1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeBaseResources[6],GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeBaseResources[0],0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourBaseResources[6],1)

createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeMailMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeMailMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourMailMaterial,1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeLeatherMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeLeatherMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourLeatherMaterial,1)
createRecipe([GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID,tierThreeClothMaterial,GemDust.ID,GemDust.ID,GemDust.ID,GemDust.ID],[GemDust.ID,tierThreeClothMaterial,0,0,0,0,0,0,0],[8,1,0,0,0,0,0,0,0],tierFourClothMaterial,1)

