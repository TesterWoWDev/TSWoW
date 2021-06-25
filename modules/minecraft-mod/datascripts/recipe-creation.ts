import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata/sql/SQLFiles";
import { createBaseResources, createGear, generateGearRecipes, generateWeaponRecipes } from "./recipe-functions";
export const MODNAME = 'minecraft-mod'

SQL.Databases.world_dest.write('DROP TABLE IF EXISTS `minecraft_recipes`;')
SQL.Databases.world_dest.write('CREATE TABLE `minecraft_recipes` (`pos1` int(11) DEFAULT NULL,`pos2` int(11) DEFAULT NULL,`pos3` int(11) DEFAULT NULL,`pos4` int(11) DEFAULT NULL,`pos5` int(11) DEFAULT NULL,`pos6` int(11) DEFAULT NULL,`pos7` int(11) DEFAULT NULL,`pos8` int(11) DEFAULT NULL,`pos9` int(11) DEFAULT NULL,`req1` int(11) DEFAULT NULL,`cnt1` int(11) DEFAULT NULL,`req2` int(11) DEFAULT NULL,`cnt2` int(11) DEFAULT NULL,`req3` int(11) DEFAULT NULL,`cnt3` int(11) DEFAULT NULL,`req4` int(11) DEFAULT NULL,`cnt4` int(11) DEFAULT NULL,`req5` int(11) DEFAULT NULL,`cnt5` int(11) DEFAULT NULL,`req6` int(11) DEFAULT NULL,`cnt6` int(11) DEFAULT NULL,`req7` int(11) DEFAULT NULL,`cnt7` int(11) DEFAULT NULL,`req8` int(11) DEFAULT NULL,`cnt8` int(11) DEFAULT NULL,`req9` int(11) DEFAULT NULL,`cnt9` int(11) DEFAULT NULL,`craftID` int(11) DEFAULT NULL, `craftCount` int(11) DEFAULT NULL)')

let tierOneStrResources = createBaseResources('tier1-str',2934,'scrappy','Strength',['gem','material','epulet','chain','metal','reinforced metal','string'],[7393,7400,29468,34491,7064,35301,58198])
let tierOneStrGear = createGear('tier1-str','scrappy',1,0,1,1.5,3,['head','neck','shoulder','back','chest','bracer','hand','belt','leg','boot','ring','trink','ohs','ohm','oha','dag','ths','thm','tha','book','pole','bow','staff','wand','shield','fist'],[9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122])
generateGearRecipes(tierOneStrResources[0],tierOneStrResources[1],tierOneStrResources[2],tierOneStrResources[3],[tierOneStrGear[0],tierOneStrGear[1],tierOneStrGear[2],tierOneStrGear[3],tierOneStrGear[4],tierOneStrGear[5],tierOneStrGear[6],tierOneStrGear[7],tierOneStrGear[8],tierOneStrGear[9],tierOneStrGear[10],tierOneStrGear[11]])
generateWeaponRecipes(tierOneStrResources[0],tierOneStrResources[1],tierOneStrResources[4],tierOneStrResources[5],tierOneStrResources[6],[tierOneStrGear[12],tierOneStrGear[13],tierOneStrGear[14],tierOneStrGear[15],tierOneStrGear[16],tierOneStrGear[17],tierOneStrGear[18],tierOneStrGear[19],tierOneStrGear[20],tierOneStrGear[21],tierOneStrGear[22],tierOneStrGear[23],tierOneStrGear[24],tierOneStrGear[25]])


let tierOneAgiResources = createBaseResources('tier1-agi',2934,'scrappy','Agility',['gem','material','epulet','chain','metal','reinforced metal','string'],[7393,7400,29468,34491,7064,35301,58198])
let tierOneAgiGear = createGear('tier1-agi','scrappy',1,0,1,1.5,3,['head','neck','shoulder','back','chest','bracer','hand','belt','leg','boot','ring','trink','ohs','ohm','oha','dag','ths','thm','tha','book','pole','bow','staff','wand','shield','fist'],[9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122])
generateGearRecipes(tierOneAgiResources[0],tierOneAgiResources[1],tierOneAgiResources[2],tierOneAgiResources[3],[tierOneAgiGear[0],tierOneAgiGear[1],tierOneAgiGear[2],tierOneAgiGear[3],tierOneAgiGear[4],tierOneAgiGear[5],tierOneAgiGear[6],tierOneAgiGear[7],tierOneAgiGear[8],tierOneAgiGear[9],tierOneAgiGear[10],tierOneAgiGear[11]])
generateWeaponRecipes(tierOneAgiResources[0],tierOneAgiResources[1],tierOneAgiResources[4],tierOneAgiResources[5],tierOneAgiResources[6],[tierOneAgiGear[12],tierOneAgiGear[13],tierOneAgiGear[14],tierOneAgiGear[15],tierOneAgiGear[16],tierOneAgiGear[17],tierOneAgiGear[18],tierOneAgiGear[19],tierOneAgiGear[20],tierOneAgiGear[21],tierOneAgiGear[22],tierOneAgiGear[23],tierOneAgiGear[24],tierOneAgiGear[25]])

let tierOneIntResources = createBaseResources('tier1-int',2934,'scrappy','Intellect',['gem','material','epulet','chain','metal','reinforced metal','string'],[7393,7400,29468,34491,7064,35301,58198])
let tierOneIntGear = createGear('tier1-int','scrappy',1,0,1,1.5,3,['head','neck','shoulder','back','chest','bracer','hand','belt','leg','boot','ring','trink','ohs','ohm','oha','dag','ths','thm','tha','book','pole','bow','staff','wand','shield','fist'],[9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122,9122])
generateGearRecipes(tierOneIntResources[0],tierOneIntResources[1],tierOneIntResources[2],tierOneIntResources[3],[tierOneIntGear[0],tierOneIntGear[1],tierOneIntGear[2],tierOneIntGear[3],tierOneIntGear[4],tierOneIntGear[5],tierOneIntGear[6],tierOneIntGear[7],tierOneIntGear[8],tierOneIntGear[9],tierOneIntGear[10],tierOneIntGear[11]])
generateWeaponRecipes(tierOneIntResources[0],tierOneIntResources[1],tierOneIntResources[4],tierOneIntResources[5],tierOneIntResources[6],[tierOneIntGear[12],tierOneIntGear[13],tierOneIntGear[14],tierOneIntGear[15],tierOneIntGear[16],tierOneIntGear[17],tierOneIntGear[18],tierOneIntGear[19],tierOneIntGear[20],tierOneIntGear[21],tierOneIntGear[22],tierOneIntGear[23],tierOneIntGear[24],tierOneIntGear[25]])

let vendor = std.CreatureTemplates.create(MODNAME,'cacheme',3482)
vendor.Name.enGB.set('Cache Mats NPC')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)
SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + ';')
tierOneStrResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneAgiResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneIntResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})

std.Items.create(MODNAME,'test-ghost',2126).Stats.addAgility(7).Stats.addStamina(10).Name.enGB.set('testingitem ghost')//14k
std.Items.create(MODNAME,'test-tester',2126).Stats.addAgility(3).Stats.addStamina(5).Name.enGB.set('testingitem tester')//7k
std.Items.create(MODNAME,'test-flannel',2126).Stats.addAgility(5).Stats.addStamina(7).Name.enGB.set('testingitem flannel')//10k
std.Items.create(MODNAME,'test-lex',2126).Stats.addAgility(3).Stats.addStamina(2).Name.enGB.set('testingitem lex')//4k
std.Items.create(MODNAME,'test-dante',2126).Stats.addAgility(4).Stats.addStamina(6).Name.enGB.set('testingitem dante')//8-9k

