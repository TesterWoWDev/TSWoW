import { std } from "tswow-stdlib"
import { MODNAME } from "../database-setup"
import { createBaseResources, createGear, generateGearRecipes, generateWeaponRecipes } from "../recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "./string"


export let tierOneMailResources = createBaseResources('tier1-str','Worn','This is for mail armor',['Blood Garnet','Metal Scraps','Epulets','chain','Metal','Reinforced Metal',],[35916,22924,35338,39340,7355,7389])
export let tierOneMailGear = createGear('tier1-mail',1,1,1,['Trainee\'s Worn Helm','Trainee\'s Worn Necklace','Trainee\'s Worn Spaulders','Trainee\'s Worn Cloak','Trainee\'s Worn Chestguard','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Legguards','Trainee\'s Worn Greaves','Trainee\'s Worn Ring','Trainee\'s Worn Trinket','Trainee\'s Worn Shortsword','Trainee\'s Worn Cudgel','Trainee\'s Worn Carver','Trainee\'s Worn Shiv','Trainee\'s Worn Broadsword','Trainee\'s Worn Bludgeon','Trainee\'s Worn Cleaver','Trainee\'s Worn Reliquery','Trainee\'s Worn Polearm','Trainee\'s Worn Recurve','Trainee\'s Worn Staff','Trainee\'s Worn Wand','Trainee\'s Worn Buckler','Trainee\'s Worn Knuckles'],[16115,9854,9407,23068,32157,32158,9406,24514,4333,9404,9836,9637,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierOneMailResources[0],tierOneMailResources[1],tierOneMailResources[2],tierOneMailResources[3],[tierOneMailGear[0],tierOneMailGear[1],tierOneMailGear[2],tierOneMailGear[3],tierOneMailGear[4],tierOneMailGear[5],tierOneMailGear[6],tierOneMailGear[7],tierOneMailGear[8],tierOneMailGear[9],tierOneMailGear[10],tierOneMailGear[11]])
generateWeaponRecipes(tierOneMailResources[0],tierOneMailResources[1],tierOneMailResources[4],tierOneMailResources[5],stringItem.ID,[tierOneMailGear[12],tierOneMailGear[13],tierOneMailGear[14],tierOneMailGear[15],tierOneMailGear[16],tierOneMailGear[17],tierOneMailGear[18],tierOneMailGear[19],tierOneMailGear[20],tierOneMailGear[21],tierOneMailGear[22],tierOneMailGear[23],tierOneMailGear[24],tierOneMailGear[25]])

export let tierOneLeatherResources = createBaseResources('tier1-agi','Worn','This is for leather armor',['Aquamarine','Leather','Epulets','chain','Metal','Reinforced Metal'],[35917,29468,35346,41477,20659,44950])
export let tierOneLeatherGear = createGear('tier1-leather',1,1,1,['Trainee\'s Worn Hat','Trainee\'s Worn Necklace','Trainee\'s Worn Shoulderpads','Trainee\'s Worn Cloak','Trainee\'s Worn Chestpad','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Pants','Trainee\'s Worn Boots','Trainee\'s Worn Ring','Trainee\'s Worn Trinket','Trainee\'s Worn Shortsword','Trainee\'s Worn Cudgel','Trainee\'s Worn Carver','Trainee\'s Worn Shiv','Trainee\'s Worn Broadsword','Trainee\'s Worn Bludgeon','Trainee\'s Worn Cleaver','Trainee\'s Worn Reliquery','Trainee\'s Worn Polearm','Trainee\'s Worn Recurve','Trainee\'s Worn Staff','Trainee\'s Worn Wand','Trainee\'s Worn Buckler','Trainee\'s Worn Knuckles'],[25729,6539,11274,23068,9502,14002,2362,45056,9514,13864,9833,22794,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierOneLeatherResources[0],tierOneLeatherResources[1],tierOneLeatherResources[2],tierOneLeatherResources[3],[tierOneLeatherGear[0],tierOneLeatherGear[1],tierOneLeatherGear[2],tierOneLeatherGear[3],tierOneLeatherGear[4],tierOneLeatherGear[5],tierOneLeatherGear[6],tierOneLeatherGear[7],tierOneLeatherGear[8],tierOneLeatherGear[9],tierOneLeatherGear[10],tierOneLeatherGear[11]])
generateWeaponRecipes(tierOneLeatherResources[0],tierOneLeatherResources[1],tierOneLeatherResources[4],tierOneLeatherResources[5],stringItem.ID,[tierOneLeatherGear[12],tierOneLeatherGear[13],tierOneLeatherGear[14],tierOneLeatherGear[15],tierOneLeatherGear[16],tierOneLeatherGear[17],tierOneLeatherGear[18],tierOneLeatherGear[19],tierOneLeatherGear[20],tierOneLeatherGear[21],tierOneLeatherGear[22],tierOneLeatherGear[23],tierOneLeatherGear[24],tierOneLeatherGear[25]])

export let tierOneClothResources = createBaseResources('tier1-int','Worn','This is for cloth armor',['Moonstone','Cloth','Epulets','Chain','Metal','Reinforced Metal'],[35918,7383,35356,34491,20656,22444])
export let tierOneClothGear = createGear('tier1-cloth',1,1,1,['Trainee\'s Worn Headress','Trainee\'s Worn Necklace','Trainee\'s Worn Shoulders','Trainee\'s Worn Cloak','Trainee\'s Worn Chestpiece','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Leggings','Trainee\'s Worn Mocassins','Trainee\'s Worn Ring','Trainee\'s Worn Trinket','Trainee\'s Worn Shortsword','Trainee\'s Worn Cudgel','Trainee\'s Worn Carver','Trainee\'s Worn Shiv','Trainee\'s Worn Broadsword','Trainee\'s Worn Bludgeon','Trainee\'s Worn Cleaver','Trainee\'s Worn Reliquery','Trainee\'s Worn Polearm','Trainee\'s Worn Recurve','Trainee\'s Worn Staff','Trainee\'s Worn Wand','Trainee\'s Worn Buckler','Trainee\'s Worn Knuckles'],[15314,9853,17135,23068,8721,8089,13681,24978,24927,24935,9823,15771,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierOneClothResources[0],tierOneClothResources[1],tierOneClothResources[2],tierOneClothResources[3],[tierOneClothGear[0],tierOneClothGear[1],tierOneClothGear[2],tierOneClothGear[3],tierOneClothGear[4],tierOneClothGear[5],tierOneClothGear[6],tierOneClothGear[7],tierOneClothGear[8],tierOneClothGear[9],tierOneClothGear[10],tierOneClothGear[11]])
generateWeaponRecipes(tierOneClothResources[0],tierOneClothResources[1],tierOneClothResources[4],tierOneClothResources[5],stringItem.ID,[tierOneClothGear[12],tierOneClothGear[13],tierOneClothGear[14],tierOneClothGear[15],tierOneClothGear[16],tierOneClothGear[17],tierOneClothGear[18],tierOneClothGear[19],tierOneClothGear[20],tierOneClothGear[21],tierOneClothGear[22],tierOneClothGear[23],tierOneClothGear[24],tierOneClothGear[25]])

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme',3482)
vendor.Name.enGB.set('Cache Mats NPC')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
tierOneMailResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneLeatherResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneClothResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneMailGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneLeatherGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneClothGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})

