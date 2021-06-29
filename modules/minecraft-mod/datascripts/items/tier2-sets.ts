import { std } from "tswow-stdlib"
import { MODNAME } from "../database-setup"
import { createBaseResources, createGear, generateGearRecipes, generateWeaponRecipes } from "../recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "./string"


let tierTwoMailResources = createBaseResources('tier2-str','Rusty','This is for mail armor',['Blood Garnet','Metal Scraps','Epulets','chain','Metal','Reinforced Metal',],[35916,22924,35338,39340,7355,7389])
let tierTwoMailGear = createGear('tier2-mail',2,1,1,['Initiate\'s Rusty Helm','Initiate\'s Rusty Necklace','Initiate\'s Rusty Spaulders','Initiate\'s Rusty Cloak','Initiate\'s Rusty Chestguard','Initiate\'s Rusty Bracers','Initiate\'s Rusty Gloves','Initiate\'s Rusty Belt','Initiate\'s Rusty Legguards','Initiate\'s Rusty Greaves','Initiate\'s Rusty Ring','Initiate\'s Rusty Trinket','Initiate\'s Rusty Shortsword','Initiate\'s Rusty Cudgel','Initiate\'s Rusty Carver','Initiate\'s Rusty Shiv','Initiate\'s Rusty Broadsword','Initiate\'s Rusty Bludgeon','Initiate\'s Rusty Cleaver','Initiate\'s Rusty Reliquery','Initiate\'s Rusty Polearm','Initiate\'s Rusty Recurve','Initiate\'s Rusty Staff','Initiate\'s Rusty Wand','Initiate\'s Rusty Buckler','Initiate\'s Rusty Knuckles'],[16115,9854,9407,23068,32157,32158,9406,24514,4333,9404,9836,9637,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierTwoMailResources[0],tierTwoMailResources[1],tierTwoMailResources[2],tierTwoMailResources[3],[tierTwoMailGear[0],tierTwoMailGear[1],tierTwoMailGear[2],tierTwoMailGear[3],tierTwoMailGear[4],tierTwoMailGear[5],tierTwoMailGear[6],tierTwoMailGear[7],tierTwoMailGear[8],tierTwoMailGear[9],tierTwoMailGear[10],tierTwoMailGear[11]])
generateWeaponRecipes(tierTwoMailResources[0],tierTwoMailResources[1],tierTwoMailResources[4],tierTwoMailResources[5],stringItem.ID,[tierTwoMailGear[12],tierTwoMailGear[13],tierTwoMailGear[14],tierTwoMailGear[15],tierTwoMailGear[16],tierTwoMailGear[17],tierTwoMailGear[18],tierTwoMailGear[19],tierTwoMailGear[20],tierTwoMailGear[21],tierTwoMailGear[22],tierTwoMailGear[23],tierTwoMailGear[24],tierTwoMailGear[25]])

let tierTwoLeatherResources = createBaseResources('tier2-agi','Rusty','This is for leather armor',['Aquamarine','Leather','Epulets','chain','Metal','Reinforced Metal'],[35917,29468,35346,41477,20659,44950])
let tierTwoLeatherGear = createGear('tier2-leather',2,1,1,['Initiate\'s Rusty Hat','Initiate\'s Rusty Necklace','Initiate\'s Rusty Shoulderpads','Initiate\'s Rusty Cloak','Initiate\'s Rusty Chestpad','Initiate\'s Rusty Bracers','Initiate\'s Rusty Gloves','Initiate\'s Rusty Belt','Initiate\'s Rusty Pants','Initiate\'s Rusty Boots','Initiate\'s Rusty Ring','Initiate\'s Rusty Trinket','Initiate\'s Rusty Shortsword','Initiate\'s Rusty Cudgel','Initiate\'s Rusty Carver','Initiate\'s Rusty Shiv','Initiate\'s Rusty Broadsword','Initiate\'s Rusty Bludgeon','Initiate\'s Rusty Cleaver','Initiate\'s Rusty Reliquery','Initiate\'s Rusty Polearm','Initiate\'s Rusty Recurve','Initiate\'s Rusty Staff','Initiate\'s Rusty Wand','Initiate\'s Rusty Buckler','Initiate\'s Rusty Knuckles'],[25729,6539,11274,23068,9502,14002,2362,45056,9514,13864,9833,22794,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierTwoLeatherResources[0],tierTwoLeatherResources[1],tierTwoLeatherResources[2],tierTwoLeatherResources[3],[tierTwoLeatherGear[0],tierTwoLeatherGear[1],tierTwoLeatherGear[2],tierTwoLeatherGear[3],tierTwoLeatherGear[4],tierTwoLeatherGear[5],tierTwoLeatherGear[6],tierTwoLeatherGear[7],tierTwoLeatherGear[8],tierTwoLeatherGear[9],tierTwoLeatherGear[10],tierTwoLeatherGear[11]])
generateWeaponRecipes(tierTwoLeatherResources[0],tierTwoLeatherResources[1],tierTwoLeatherResources[4],tierTwoLeatherResources[5],stringItem.ID,[tierTwoLeatherGear[12],tierTwoLeatherGear[13],tierTwoLeatherGear[14],tierTwoLeatherGear[15],tierTwoLeatherGear[16],tierTwoLeatherGear[17],tierTwoLeatherGear[18],tierTwoLeatherGear[19],tierTwoLeatherGear[20],tierTwoLeatherGear[21],tierTwoLeatherGear[22],tierTwoLeatherGear[23],tierTwoLeatherGear[24],tierTwoLeatherGear[25]])

let tierTwoClothResources = createBaseResources('tier2-int','Rusty','This is for cloth armor',['MoonstTwo','Cloth','Epulets','Chain','Metal','Reinforced Metal'],[35918,7383,35356,34491,20656,22444])
let tierTwoClothGear = createGear('tier2-cloth',2,1,1,['Initiate\'s Rusty Headress','Initiate\'s Rusty Necklace','Initiate\'s Rusty Shoulders','Initiate\'s Rusty Cloak','Initiate\'s Rusty Chestpiece','Initiate\'s Rusty Bracers','Initiate\'s Rusty Gloves','Initiate\'s Rusty Belt','Initiate\'s Rusty Leggings','Initiate\'s Rusty Mocassins','Initiate\'s Rusty Ring','Initiate\'s Rusty Trinket','Initiate\'s Rusty Shortsword','Initiate\'s Rusty Cudgel','Initiate\'s Rusty Carver','Initiate\'s Rusty Shiv','Initiate\'s Rusty Broadsword','Initiate\'s Rusty Bludgeon','Initiate\'s Rusty Cleaver','Initiate\'s Rusty Reliquery','Initiate\'s Rusty Polearm','Initiate\'s Rusty Recurve','Initiate\'s Rusty Staff','Initiate\'s Rusty Wand','Initiate\'s Rusty Buckler','Initiate\'s Rusty Knuckles'],[15314,9853,17135,23068,8721,8089,13681,24978,24927,24935,9823,15771,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierTwoClothResources[0],tierTwoClothResources[1],tierTwoClothResources[2],tierTwoClothResources[3],[tierTwoClothGear[0],tierTwoClothGear[1],tierTwoClothGear[2],tierTwoClothGear[3],tierTwoClothGear[4],tierTwoClothGear[5],tierTwoClothGear[6],tierTwoClothGear[7],tierTwoClothGear[8],tierTwoClothGear[9],tierTwoClothGear[10],tierTwoClothGear[11]])
generateWeaponRecipes(tierTwoClothResources[0],tierTwoClothResources[1],tierTwoClothResources[4],tierTwoClothResources[5],stringItem.ID,[tierTwoClothGear[12],tierTwoClothGear[13],tierTwoClothGear[14],tierTwoClothGear[15],tierTwoClothGear[16],tierTwoClothGear[17],tierTwoClothGear[18],tierTwoClothGear[19],tierTwoClothGear[20],tierTwoClothGear[21],tierTwoClothGear[22],tierTwoClothGear[23],tierTwoClothGear[24],tierTwoClothGear[25]])

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme2',3482)
vendor.Name.enGB.set('Armor Npc 2')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
tierTwoMailResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoLeatherResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoClothResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoMailGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoLeatherGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierTwoClothGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
