import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createMaterial, createGear, generateGearRecipes, generateWeaponRecipes, createBaseResources, createWeapons } from "../../functions/recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "../string"
import { expSpell } from "../../spells/exp-spell"
import { clothTierOneItemEnchantmentIndex, leatherTierOneItemEnchantmentIndex, mailTierOneItemEnchantmentIndex, weaponTierOneItemEnchantmentIndex } from "../RandomProperties/tier1-properties"

let levelrequirement = 1
let armSpell = [expSpell.ID,0,0,0,0]
let armTrigger = [1,0,0,0,0]
let wepSpell = [expSpell.ID,41683,0,0,0]
let wepTrigger = [1,1,0,0,0]

export let tierOneBaseResources = createBaseResources(2,'tier1','Worn',['Pearl','Epaulet','Chain','Metal','Reinforced Metal','Stick','Dust'],[12310,35338,39340,7355,7389,2618,6371])

export let tierOneMailMaterial = createMaterial(2,'tier1','Worn Mail Scraps','mail armor pieces',22924)
export let tierOneLeatherMaterial = createMaterial(2,'tier1','Worn Leather Scraps','leather armor pieces',29468)
export let tierOneClothMaterial = createMaterial(2,'tier1','Worn Cloth Scraps','cloth armor pieces',7383)
export let tierOneMailGear = createGear(levelrequirement,'tier1-mail',2,1.4,3,100,mailTierOneItemEnchantmentIndex,['Trainee\'s Worn Helm','Trainee\'s Worn Necklace','Trainee\'s Worn Spaulders','Trainee\'s Worn Cloak','Trainee\'s Worn Chestguard','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Legguards','Trainee\'s Worn Greaves','Trainee\'s Worn Ring','Trainee\'s Worn Trinket'],[16115,9854,9407,23068,32157,32158,9406,24514,4333,9404,9836,9637],armSpell,armTrigger)
export let tierOneLeatherGear = createGear(levelrequirement,'tier1-leather',2,1.2,2,100,leatherTierOneItemEnchantmentIndex,['Trainee\'s Worn Hat','Trainee\'s Worn Necklace','Trainee\'s Worn Shoulderpads','Trainee\'s Worn Cloak','Trainee\'s Worn Chestpad','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Pants','Trainee\'s Worn Boots','Trainee\'s Worn Ring','Trainee\'s Worn Trinket'],[25729,6539,11274,23068,9502,14002,2362,45056,9514,13864,9833,22794],armSpell,armTrigger)
export let tierOneClothGear = createGear(levelrequirement,'tier1-cloth',2,1,1,100,clothTierOneItemEnchantmentIndex,['Trainee\'s Worn Headress','Trainee\'s Worn Necklace','Trainee\'s Worn Shoulders','Trainee\'s Worn Cloak','Trainee\'s Worn Chestpiece','Trainee\'s Worn Bracers','Trainee\'s Worn Gloves','Trainee\'s Worn Belt','Trainee\'s Worn Leggings','Trainee\'s Worn Mocassins','Trainee\'s Worn Ring','Trainee\'s Worn Trinket'],[15314,9853,17135,23068,8721,8089,13681,24978,24927,24935,9823,15771],armSpell,armTrigger)

export let tierOneWeapons = createWeapons(levelrequirement,'tier1',2,1,100,weaponTierOneItemEnchantmentIndex,['Trainee\'s Worn Shortsword','Trainee\'s Worn Cudgel','Trainee\'s Worn Carver','Trainee\'s Worn Shiv','Trainee\'s Worn Broadsword','Trainee\'s Worn Bludgeon','Trainee\'s Worn Cleaver','Trainee\'s Worn Reliquery','Trainee\'s Worn Polearm','Trainee\'s Worn Recurve','Trainee\'s Worn Staff','Trainee\'s Worn Wand','Trainee\'s Worn Buckler','Trainee\'s Worn Knuckles'],[5153,5211,8496,6434,20196,16146,8528,31805,40409,8104,28699,40146,26234,3007],wepSpell,wepTrigger)


generateGearRecipes(tierOneBaseResources[0],tierOneMailMaterial,tierOneBaseResources[1],tierOneBaseResources[2],tierOneMailGear)
generateGearRecipes(tierOneBaseResources[0],tierOneLeatherMaterial,tierOneBaseResources[1],tierOneBaseResources[2],tierOneLeatherGear)
generateGearRecipes(tierOneBaseResources[0],tierOneClothMaterial,tierOneBaseResources[1],tierOneBaseResources[2],tierOneClothGear)

generateWeaponRecipes(tierOneBaseResources[0],tierOneBaseResources[5],tierOneBaseResources[3],tierOneBaseResources[4],stringItem.ID,tierOneWeapons)

SQL.disenchant_loot_template.add(100,tierOneBaseResources[6]).Chance.set(100).MinCount.set(1).MaxCount.set(3).LootMode.set(1).GroupId.set(1).Reference.set(0).Comment.set('Tier 1 Disenchant - Dust')

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme',3482)
vendor.Name.enGB.set('Armor Npc 1')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
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