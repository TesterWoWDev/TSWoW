import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata/sql/SQLFiles";
import { createBaseResources, generateGearRecipes, generateWeaponRecipes } from "./recipe-functions";
export const MODNAME = 'minecraft-mod'

SQL.Databases.world_dest.write('DROP TABLE IF EXISTS `minecraft_recipes`;')
SQL.Databases.world_dest.write('CREATE TABLE `minecraft_recipes` (`pos1` int(11) DEFAULT NULL,`pos2` int(11) DEFAULT NULL,`pos3` int(11) DEFAULT NULL,`pos4` int(11) DEFAULT NULL,`pos5` int(11) DEFAULT NULL,`pos6` int(11) DEFAULT NULL,`pos7` int(11) DEFAULT NULL,`pos8` int(11) DEFAULT NULL,`pos9` int(11) DEFAULT NULL,`req1` int(11) DEFAULT NULL,`cnt1` int(11) DEFAULT NULL,`req2` int(11) DEFAULT NULL,`cnt2` int(11) DEFAULT NULL,`req3` int(11) DEFAULT NULL,`cnt3` int(11) DEFAULT NULL,`req4` int(11) DEFAULT NULL,`cnt4` int(11) DEFAULT NULL,`req5` int(11) DEFAULT NULL,`cnt5` int(11) DEFAULT NULL,`req6` int(11) DEFAULT NULL,`cnt6` int(11) DEFAULT NULL,`req7` int(11) DEFAULT NULL,`cnt7` int(11) DEFAULT NULL,`req8` int(11) DEFAULT NULL,`cnt8` int(11) DEFAULT NULL,`req9` int(11) DEFAULT NULL,`cnt9` int(11) DEFAULT NULL,`craftID` int(11) DEFAULT NULL, `craftCount` int(11) DEFAULT NULL)')

let tierOneStrResources = createBaseResources('tier1-str',2934,'scrappy stout',['gem','material','epulet','chain','metal','reinforced metal','string'])
generateGearRecipes(tierOneStrResources[0],tierOneStrResources[1],tierOneStrResources[2],tierOneStrResources[3],[39,39,39,39,39,39,39,39,39,39,39,39])
generateWeaponRecipes(tierOneStrResources[0],tierOneStrResources[1],tierOneStrResources[4],tierOneStrResources[5],tierOneStrResources[6],[39,39,39,39,39,39,39,39,39,39,39,39,39,39])

let tierOneAgiResources = createBaseResources('tier1-agi',2934,'scrappy agile',['gem','material','epulet','chain','metal','reinforced metal','string'])
generateGearRecipes(tierOneAgiResources[0],tierOneAgiResources[1],tierOneAgiResources[2],tierOneAgiResources[3],[39,39,39,39,39,39,39,39,39,39,39,39])
generateWeaponRecipes(tierOneAgiResources[0],tierOneAgiResources[1],tierOneAgiResources[4],tierOneAgiResources[5],tierOneAgiResources[6],[39,39,39,39,39,39,39,39,39,39,39,39,39,39])

let tierOneIntResources = createBaseResources('tier1-str',2934,'scrappy intelligent',['gem','material','epulet','chain','metal','reinforced metal','string'])
generateGearRecipes(tierOneIntResources[0],tierOneIntResources[1],tierOneIntResources[2],tierOneIntResources[3],[39,39,39,39,39,39,39,39,39,39,39,39])
generateWeaponRecipes(tierOneIntResources[0],tierOneIntResources[1],tierOneIntResources[4],tierOneIntResources[5],tierOneIntResources[6],[39,39,39,39,39,39,39,39,39,39,39,39,39,39])