import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"
import { createMaterial, createGear, generateGearRecipes, generateWeaponRecipes, createBaseResources, createWeapons } from "../functions/recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "./string"

export let tierTwoBaseResources = createBaseResources(2,'tier2','Rusty',['Blood Garnet','Epulets','chain','Metal','Reinforced Metal','Stick','Dust'],[35916,35338,39340,7355,7389,2618,20798])

export let tierTwoMailMaterial = createMaterial(2,'tier2','Rusty Mail Scraps','mail armor pieces',22924,'|CFFFFFFFF')
export let tierTwoLeatherMaterial = createMaterial(2,'tier2','Rusty Leather Scraps','leather armor pieces',29468,'|CFFFFFFFF')
export let tierTwoClothMaterial = createMaterial(2,'tier2','Rusty Cloth Scraps','cloth armor pieces',7383,'|CFFFFFFFF')

export let tierTwoMailGear = createGear('tier2-mail',2,2.5,3,6273,101,['Initiate\'s Rusty Helm','Initiate\'s Rusty Necklace','Initiate\'s Rusty Spaulders','Initiate\'s Rusty Cloak','Initiate\'s Rusty Chestguard','Initiate\'s Rusty Bracers','Initiate\'s Rusty Gloves','Initiate\'s Rusty Belt','Initiate\'s Rusty Legguards','Initiate\'s Rusty Greaves','Initiate\'s Rusty Ring','Initiate\'s Rusty Trinket'],[22908,34034,28725,26278,28819,28844,15816,27951,28623,28383,18365,6337])
export let tierTwoLeatherGear = createGear('tier2-leather',2,2.2,2,6273,101,['Initiate\'s Rusty Hat','Initiate\'s Rusty Necklace','Initiate\'s Rusty Shoulderpads','Initiate\'s Rusty Cloak','Initiate\'s Rusty Chestpad','Initiate\'s Rusty Bracers','Initiate\'s Rusty Gloves','Initiate\'s Rusty Belt','Initiate\'s Rusty Pants','Initiate\'s Rusty Boots','Initiate\'s Rusty Ring','Initiate\'s Rusty Trinket'],[24933,34034,19113,26278,8721,28844,13681,24978,16764,25233,9837,18725])
export let tierTwoClothGear = createGear('tier2-cloth',2,2,1,6273,101,['Initiate\'s Rusty Headress','Initiate\'s Rusty Necklace','Initiate\'s Rusty Shoulders','Initiate\'s Rusty Cloak','Initiate\'s Rusty Chestpiece','Initiate\'s Rusty Bracers','Initiate\'s Rusty Gloves','Initiate\'s Rusty Belt','Initiate\'s Rusty Leggings','Initiate\'s Rusty Mocassins','Initiate\'s Rusty Ring','Initiate\'s Rusty Trinket'],[25693,34034,16497,26278,19012,28844,29898,17224,17151,17215,23629,29922])

export let tierTwoWeapons = createWeapons('tier2',2,1,6273,101,['Initiate\'s Rusty Shortsword','Initiate\'s Rusty Cudgel','Initiate\'s Rusty Carver','Initiate\'s Rusty Shiv','Initiate\'s Rusty Broadsword','Initiate\'s Rusty Bludgeon','Initiate\'s Rusty Cleaver','Initiate\'s Rusty Reliquery','Initiate\'s Rusty Polearm','Initiate\'s Rusty Recurve','Initiate\'s Rusty Staff','Initiate\'s Rusty Wand','Initiate\'s Rusty Buckler','Initiate\'s Rusty Knuckles'],[21773,21956,28679,28779,21809,21793,22212,21595,40809,28780,21723,28807,18814,23742])

generateGearRecipes(tierTwoBaseResources[0],tierTwoMailMaterial,tierTwoBaseResources[1],tierTwoBaseResources[2],tierTwoMailGear)
generateGearRecipes(tierTwoBaseResources[0],tierTwoLeatherMaterial,tierTwoBaseResources[1],tierTwoBaseResources[2],tierTwoLeatherGear)
generateGearRecipes(tierTwoBaseResources[0],tierTwoClothMaterial,tierTwoBaseResources[1],tierTwoBaseResources[2],tierTwoClothGear)

generateWeaponRecipes(tierTwoBaseResources[0],tierTwoBaseResources[5],tierTwoBaseResources[3],tierTwoBaseResources[4],stringItem.ID,tierTwoWeapons)

SQL.disenchant_loot_template.add(101,tierTwoBaseResources[6]).Chance.set(100).MinCount.set(1).MaxCount.set(3).LootMode.set(1).GroupId.set(1).Reference.set(0).Comment.set('tier1 disenchant')

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme2',3482)
vendor.Name.enGB.set('Armor Npc 2')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
vendor.Vendor.addItem(tierTwoMailMaterial)
vendor.Vendor.addItem(tierTwoLeatherMaterial)
vendor.Vendor.addItem(tierTwoClothMaterial)
tierTwoMailGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoLeatherGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoClothGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoWeapons.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoBaseResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
