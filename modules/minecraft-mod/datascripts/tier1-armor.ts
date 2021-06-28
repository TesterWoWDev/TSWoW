import { std } from "tswow-stdlib"
import { MODNAME } from "./database-setup"
import { createBaseResources, createGear, generateGearRecipes, generateWeaponRecipes } from "./recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "./string"


let tierOneStrResources = createBaseResources('tier1-str','Worn','Strength',['Moss Agate','Metal Scraps','Epulets','chain','Metal','Reinforced Metal',],[35916,22924,35338,39340,7355,7389])
let tierOneStrGear = createGear('tier1-str',1,0,1,1.8,3,['Worn Helm','Worn Necklace','Worn Spaulders','Worn Cloak','Worn Chestguard','Worn Bracers','Worn Gloves','Worn Belt','Worn Legguards','Worn Greaves','Worn Ring','Worn Trinket','Worn ohs','Worn ohm','Worn oha','Worn dag','Worn ths','Worn thm','Worn tha','Worn book','Worn pole','Worn bow','Worn staff','Worn wand','Worn shield','Worn fist'],[16115,9854,9407,23068,32157,32158,9406,24514,4333,9404,9836,9637,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierOneStrResources[0],tierOneStrResources[1],tierOneStrResources[2],tierOneStrResources[3],[tierOneStrGear[0],tierOneStrGear[1],tierOneStrGear[2],tierOneStrGear[3],tierOneStrGear[4],tierOneStrGear[5],tierOneStrGear[6],tierOneStrGear[7],tierOneStrGear[8],tierOneStrGear[9],tierOneStrGear[10],tierOneStrGear[11]])
generateWeaponRecipes(tierOneStrResources[0],tierOneStrResources[1],tierOneStrResources[4],tierOneStrResources[5],stringItem.ID,[tierOneStrGear[12],tierOneStrGear[13],tierOneStrGear[14],tierOneStrGear[15],tierOneStrGear[16],tierOneStrGear[17],tierOneStrGear[18],tierOneStrGear[19],tierOneStrGear[20],tierOneStrGear[21],tierOneStrGear[22],tierOneStrGear[23],tierOneStrGear[24],tierOneStrGear[25]])

let tierOneAgiResources = createBaseResources('tier1-agi','Worn','Agility',['Aquamarine','Leather','Epulets','chain','Metal','Reinforced Metal'],[35917,29468,35346,41477,20659,44950])
let tierOneAgiGear = createGear('tier1-agi',1,1,1,1.3,2,['Worn Hat','Worn Necklace','Worn Shoulderpads','Worn Cloak','Worn Chestpad','Worn Bracers','Worn Gloves','Worn Belt','Worn Pants','Worn Boots','Worn Ring','Worn Trinket','Worn ohs','Worn ohm','Worn oha','Worn dag','Worn ths','Worn thm','Worn tha','Worn book','Worn pole','Worn bow','Worn staff','Worn wand','Worn shield','Worn fist'],[25729,6539,11274,23068,9502,14002,2362,45056,9514,13864,9833,22794,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierOneAgiResources[0],tierOneAgiResources[1],tierOneAgiResources[2],tierOneAgiResources[3],[tierOneAgiGear[0],tierOneAgiGear[1],tierOneAgiGear[2],tierOneAgiGear[3],tierOneAgiGear[4],tierOneAgiGear[5],tierOneAgiGear[6],tierOneAgiGear[7],tierOneAgiGear[8],tierOneAgiGear[9],tierOneAgiGear[10],tierOneAgiGear[11]])
generateWeaponRecipes(tierOneAgiResources[0],tierOneAgiResources[1],tierOneAgiResources[4],tierOneAgiResources[5],stringItem.ID,[tierOneAgiGear[12],tierOneAgiGear[13],tierOneAgiGear[14],tierOneAgiGear[15],tierOneAgiGear[16],tierOneAgiGear[17],tierOneAgiGear[18],tierOneAgiGear[19],tierOneAgiGear[20],tierOneAgiGear[21],tierOneAgiGear[22],tierOneAgiGear[23],tierOneAgiGear[24],tierOneAgiGear[25]])

let tierOneIntResources = createBaseResources('tier1-int','Worn','Intellect',['Moonstone','Cloth','Epulets','Chain','Metal','Reinforced Metal'],[35918,7383,35356,34491,20656,22444])
let tierOneIntGear = createGear('tier1-int',1,2,1,0.7,1,['Worn Headress','Worn Necklace','Worn Shoulders','Worn Cloak','Worn Chestpiece','Worn Bracers','Worn Gloves','Worn Belt','Worn Leggings','Worn Mocassins','Worn Ring','Worn Trinket','Worn ohs','Worn ohm','Worn oha','Worn dag','Worn ths','Worn thm','Worn tha','Worn book','Worn pole','Worn bow','Worn staff','Worn wand','Worn shield','Worn fist'],[15314,9853,17135,23068,8721,8089,13681,24978,24927,24935,9823,15771,5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007])
generateGearRecipes(tierOneIntResources[0],tierOneIntResources[1],tierOneIntResources[2],tierOneIntResources[3],[tierOneIntGear[0],tierOneIntGear[1],tierOneIntGear[2],tierOneIntGear[3],tierOneIntGear[4],tierOneIntGear[5],tierOneIntGear[6],tierOneIntGear[7],tierOneIntGear[8],tierOneIntGear[9],tierOneIntGear[10],tierOneIntGear[11]])
generateWeaponRecipes(tierOneIntResources[0],tierOneIntResources[1],tierOneIntResources[4],tierOneIntResources[5],stringItem.ID,[tierOneIntGear[12],tierOneIntGear[13],tierOneIntGear[14],tierOneIntGear[15],tierOneIntGear[16],tierOneIntGear[17],tierOneIntGear[18],tierOneIntGear[19],tierOneIntGear[20],tierOneIntGear[21],tierOneIntGear[22],tierOneIntGear[23],tierOneIntGear[24],tierOneIntGear[25]])

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme',3482)
vendor.Name.enGB.set('Cache Mats NPC')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)
SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
tierOneStrResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneAgiResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneIntResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneStrGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneAgiGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierOneIntGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})

