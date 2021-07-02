import { std } from "tswow-stdlib"
import { MODNAME } from "../database-setup"
import { createMaterial, createGear, generateGearRecipes, generateWeaponRecipes, createBaseResources, createWeapons } from "../recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stickItem, stringItem } from "./string"

export let tierOneBaseResources = createBaseResources('tier1','Worn',['Blood Garnet','Epulets','chain','Metal','Reinforced Metal'],[35916,35338,39340,7355,7389])

export let tierOneMailMaterial = createMaterial('tier1','Worn Mail Scraps','mail armor pieces',22924)
export let tierOneLeatherMaterial = createMaterial('tier1','Worn Leather Scraps','leather armor pieces',29468)
export let tierOneClothMaterial = createMaterial('tier1','Worn Cloth Scraps','cloth armor pieces',7383)

export let tierOneMailGear = createGear('tier1-mail',1,1,3,61,['Trainee\'s Worn Helm','Trainee\'s Worn Necklace','Trainee\'s Worn Spaulders','Trainee\'s Worn Cloak','Trainee\'s Worn Chestguard','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Legguards','Trainee\'s Worn Greaves','Trainee\'s Worn Ring','Trainee\'s Worn Trinket'],[16115,9854,9407,23068,32157,32158,9406,24514,4333,9404,9836,9637])
export let tierOneClothGear = createGear('tier1-leather',1,1,2,61,['Trainee\'s Worn Headress','Trainee\'s Worn Necklace','Trainee\'s Worn Shoulders','Trainee\'s Worn Cloak','Trainee\'s Worn Chestpiece','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Leggings','Trainee\'s Worn Mocassins','Trainee\'s Worn Ring','Trainee\'s Worn Trinket'],[15314,9853,17135,23068,8721,8089,13681,24978,24927,24935,9823,15771])
export let tierOneLeatherGear = createGear('tier1-cloth',1,1,1,61,['Trainee\'s Worn Hat','Trainee\'s Worn Necklace','Trainee\'s Worn Shoulderpads','Trainee\'s Worn Cloak','Trainee\'s Worn Chestpad','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Pants','Trainee\'s Worn Boots','Trainee\'s Worn Ring','Trainee\'s Worn Trinket'],[25729,6539,11274,23068,9502,14002,2362,45056,9514,13864,9833,22794])

export let tierOneWeapons = createWeapons('tier1',1,1,61,['Trainee\'s Worn Shortsword','Trainee\'s Worn Cudgel','Trainee\'s Worn Carver','Trainee\'s Worn Shiv','Trainee\'s Worn Broadsword','Trainee\'s Worn Bludgeon','Trainee\'s Worn Cleaver','Trainee\'s Worn Reliquery','Trainee\'s Worn Polearm','Trainee\'s Worn Recurve','Trainee\'s Worn Staff','Trainee\'s Worn Wand','Trainee\'s Worn Buckler','Trainee\'s Worn Knuckles'],[5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])

generateGearRecipes(tierOneBaseResources[0],tierOneMailMaterial,tierOneBaseResources[1],tierOneBaseResources[2],tierOneMailGear)
generateGearRecipes(tierOneBaseResources[0],tierOneLeatherMaterial,tierOneBaseResources[1],tierOneBaseResources[2],tierOneLeatherGear)
generateGearRecipes(tierOneBaseResources[0],tierOneClothMaterial,tierOneBaseResources[1],tierOneBaseResources[2],tierOneClothGear)

generateWeaponRecipes(tierOneBaseResources[0],stickItem.ID,tierOneBaseResources[3],tierOneBaseResources[4],stringItem.ID,tierOneWeapons)

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme',3482)
vendor.Name.enGB.set('Cache Mats NPC')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
vendor.Vendor.addItem(stickItem.ID)
vendor.Vendor.addItem(tierOneMailMaterial)
vendor.Vendor.addItem(tierOneLeatherMaterial)
vendor.Vendor.addItem(tierOneClothMaterial)
tierOneMailGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneLeatherGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneClothGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneWeapons.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneBaseResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})