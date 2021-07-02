import { std } from "tswow-stdlib"
import { MODNAME } from "../database-setup"
import { createMaterial, createGear, generateGearRecipes, generateWeaponRecipes, createBaseResources, createWeapons } from "../recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stickItem, stringItem } from "./string"

export let tierThreeBaseResources = createBaseResources('tier3','Polished',['Blood Garnet','Epulets','chain','Metal','Reinforced Metal'],[35916,35338,39340,7355,7389])

export let tierThreeMailMaterial = createMaterial('tier3','Polished Mail Scraps','mail armor pieces',22924)
export let tierThreeLeatherMaterial = createMaterial('tier3','Polished Leather Scraps','leather armor pieces',29468)
export let tierThreeClothMaterial = createMaterial('tier3','Polished Cloth Scraps','cloth armor pieces',7383)

export let tierThreeMailGear = createGear('tier3-mail',3,1,3,61,['Officer\'s Polished Helm','Officer\'s Polished Necklace','Officer\'s Polished Spaulders','Officer\'s Polished Cloak','Officer\'s Polished Chestguard','Officer\'s Polished Bracers','Officer\'s Polished Gloves','Officer\'s Polished Belt','Officer\'s Polished Legguards','Officer\'s Polished Greaves','Officer\'s Polished Ring','Officer\'s Polished Trinket'],[22886,15420,26894,15273,25746,35044,26888,33633,22882,43734,28830,31287])
export let tierThreeLeatherGear = createGear('tier3-leather',3,1,1,61,['Officer\'s Polished Headress','Officer\'s Polished Necklace','Officer\'s Polished Shoulders','Officer\'s Polished Cloak','Officer\'s Polished Chestpiece','Officer\'s Polished Bracers','Officer\'s Polished Gloves','Officer\'s Polished Belt','Officer\'s Polished Leggings','Officer\'s Polished Mocassins','Officer\'s Polished Ring','Officer\'s Polished Trinket'],[43883,32008,43319,45480,38920,45400,48920,43300,43304,45787,44086,53454])
export let tierThreeClothGear = createGear('tier3-cloth',3,1,2,61,['Officer\'s Polished Hat','Officer\'s Polished Necklace','Officer\'s Polished Shoulderpads','Officer\'s Polished Cloak','Officer\'s Polished Chestpad','Officer\'s Polished Bracers','Officer\'s Polished Gloves','Officer\'s Polished Belt','Officer\'s Polished Pants','Officer\'s Polished Boots','Officer\'s Polished Ring','Officer\'s Polished Trinket'],[45101,51280,43169,45480,45057,45055,43170,44829,44828,44830,34189,39915])

export let tierThreeWeapons = createWeapons('tier3',3,1,61,['Officer\'s Polished Shortsword','Officer\'s Polished Cudgel','Officer\'s Polished Carver','Officer\'s Polished Shiv','Officer\'s Polished Broadsword','Officer\'s Polished Bludgeon','Officer\'s Polished Cleaver','Officer\'s Polished Reliquery','Officer\'s Polished Polearm','Officer\'s Polished Recurve','Officer\'s Polished Staff','Officer\'s Polished Wand','Officer\'s Polished Buckler','Officer\'s Polished Knuckles'],[41118,45769,31300,31692,39570,39583,23904,33845,31720,39775,20256,29195,18700,39218])

generateGearRecipes(tierThreeBaseResources[0],tierThreeMailMaterial,tierThreeBaseResources[1],tierThreeBaseResources[2],tierThreeMailGear)
generateGearRecipes(tierThreeBaseResources[0],tierThreeLeatherMaterial,tierThreeBaseResources[1],tierThreeBaseResources[2],tierThreeLeatherGear)
generateGearRecipes(tierThreeBaseResources[0],tierThreeClothMaterial,tierThreeBaseResources[1],tierThreeBaseResources[2],tierThreeClothGear)

generateWeaponRecipes(tierThreeBaseResources[0],stickItem.ID,tierThreeBaseResources[3],tierThreeBaseResources[4],stringItem.ID,tierThreeWeapons)

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme3',3482)
vendor.Name.enGB.set('Armor Npc 3')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
vendor.Vendor.addItem(stickItem.ID)
vendor.Vendor.addItem(tierThreeMailMaterial)
vendor.Vendor.addItem(tierThreeLeatherMaterial)
vendor.Vendor.addItem(tierThreeClothMaterial)
tierThreeMailGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierThreeLeatherGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierThreeClothGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierThreeWeapons.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierThreeBaseResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
