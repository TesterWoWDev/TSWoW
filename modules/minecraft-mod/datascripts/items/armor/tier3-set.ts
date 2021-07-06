import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createMaterial, createGear, generateGearRecipes, generateWeaponRecipes, createBaseResources, createWeapons } from "../../functions/recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "../string"
import { expSpell } from "../../spells/exp-spell"

let levelrequirement = 10
let armSpell = [expSpell.ID,0,0,0,0]
let armTrigger = [1,0,0,0,0]
let wepSpell = [expSpell.ID,0,0,0,0]
let wepTrigger = [1,0,0,0,0]

export let tierThreeBaseResources = createBaseResources(3,'tier3','Polished',['Blood Garnet','Epulets','chain','Metal','Reinforced Metal','Stick','Dust'],[35916,35338,39340,7355,7389,2618,20798])

export let tierThreeMailMaterial = createMaterial(3,'tier3','Polished Mail Scraps','mail armor pieces',22924)
export let tierThreeLeatherMaterial = createMaterial(3,'tier3','Polished Leather Scraps','leather armor pieces',29468)
export let tierThreeClothMaterial = createMaterial(3,'tier3','Polished Cloth Scraps','cloth armor pieces',7383)

export let tierThreeMailGear = createGear(levelrequirement,'tier3-mail',2,3.5,3,5272,102,['Officer\'s Polished Helm','Officer\'s Polished Necklace','Officer\'s Polished Spaulders','Officer\'s Polished Cloak','Officer\'s Polished Chestguard','Officer\'s Polished Bracers','Officer\'s Polished Gloves','Officer\'s Polished Belt','Officer\'s Polished Legguards','Officer\'s Polished Greaves','Officer\'s Polished Ring','Officer\'s Polished Trinket'],[22886,15420,26894,15273,25746,35044,26888,33633,22882,43734,28830,31287],armSpell,armTrigger)
export let tierThreeLeatherGear = createGear(levelrequirement,'tier3-leather',2,3.2,2,102,5273,['Officer\'s Polished Headress','Officer\'s Polished Necklace','Officer\'s Polished Shoulders','Officer\'s Polished Cloak','Officer\'s Polished Chestpiece','Officer\'s Polished Bracers','Officer\'s Polished Gloves','Officer\'s Polished Belt','Officer\'s Polished Leggings','Officer\'s Polished Mocassins','Officer\'s Polished Ring','Officer\'s Polished Trinket'],[43883,32008,43319,45480,38920,45400,48920,43300,43304,45787,44086,53454],armSpell,armTrigger)
export let tierThreeClothGear = createGear(levelrequirement,'tier3-cloth',2,3,1,102,5293,['Officer\'s Polished Hat','Officer\'s Polished Necklace','Officer\'s Polished Shoulderpads','Officer\'s Polished Cloak','Officer\'s Polished Chestpad','Officer\'s Polished Bracers','Officer\'s Polished Gloves','Officer\'s Polished Belt','Officer\'s Polished Pants','Officer\'s Polished Boots','Officer\'s Polished Ring','Officer\'s Polished Trinket'],[45101,51280,43169,45480,45057,45055,43170,44829,44828,44830,34189,39915],armSpell,armTrigger)

export let tierThreeWeapons = createWeapons(levelrequirement,'tier3',2,1,102,5272,['Officer\'s Polished Shortsword','Officer\'s Polished Cudgel','Officer\'s Polished Carver','Officer\'s Polished Shiv','Officer\'s Polished Broadsword','Officer\'s Polished Bludgeon','Officer\'s Polished Cleaver','Officer\'s Polished Reliquery','Officer\'s Polished Polearm','Officer\'s Polished Recurve','Officer\'s Polished Staff','Officer\'s Polished Wand','Officer\'s Polished Buckler','Officer\'s Polished Knuckles'],[41118,45769,31300,31692,39570,39583,23904,33845,31720,39775,20256,29195,18700,39218],wepSpell,wepTrigger)

generateGearRecipes(tierThreeBaseResources[0],tierThreeMailMaterial,tierThreeBaseResources[1],tierThreeBaseResources[2],tierThreeMailGear)
generateGearRecipes(tierThreeBaseResources[0],tierThreeLeatherMaterial,tierThreeBaseResources[1],tierThreeBaseResources[2],tierThreeLeatherGear)
generateGearRecipes(tierThreeBaseResources[0],tierThreeClothMaterial,tierThreeBaseResources[1],tierThreeBaseResources[2],tierThreeClothGear)

generateWeaponRecipes(tierThreeBaseResources[0],tierThreeBaseResources[5],tierThreeBaseResources[3],tierThreeBaseResources[4],stringItem.ID,tierThreeWeapons)

SQL.disenchant_loot_template.add(102,tierThreeBaseResources[6]).Chance.set(100).MinCount.set(1).MaxCount.set(3).LootMode.set(1).GroupId.set(1).Reference.set(0).Comment.set('tier1 disenchant')

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme3',3482)
vendor.Name.enGB.set('Armor Npc 3')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
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
