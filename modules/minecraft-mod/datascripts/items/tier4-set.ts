import { std } from "tswow-stdlib"
import { MODNAME } from "../database-setup"
import { createMaterial, createGear, generateGearRecipes, generateWeaponRecipes, createBaseResources, createWeapons } from "../recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "./string"

export let tierFourBaseResources = createBaseResources(4,'tier4','Pristine',['Blood Garnet','Epulets','chain','Metal','Reinforced Metal','Stick','Dust'],[35916,35338,39340,7355,7389,2618,20899])

export let tierFourMailMaterial = createMaterial(4,'tier4','Pristine Mail Scraps','mail armor pieces',22924)
export let tierFourLeatherMaterial = createMaterial(4,'tier4','Pristine Leather Scraps','leather armor pieces',29468)
export let tierFourClothMaterial = createMaterial(4,'tier4','Pristine Cloth Scraps','cloth armor pieces',7383)

export let tierFourMailGear = createGear('tier4-mail',4,4.5,3,6273,103,['General\'s Relinquished Helm','General\'s Relinquished Necklace','General\'s Relinquished Spaulders','General\'s Relinquished Cloak','General\'s Relinquished Chestguard','General\'s Relinquished Bracers','General\'s Relinquished Gloves','General\'s Relinquished Belt','General\'s Relinquished Legguards','General\'s Relinquished Greaves','General\'s Relinquished Ring','General\'s Relinquished Trinket'],[42353,32008,42351,23422,42352,35044,42355,42603,42354,42604,39126,39917])
export let tierFourLeatherGear = createGear('tier4-leather',4,4.2,2,6273,103,['General\'s Relinquished Headress','General\'s Relinquished Necklace','General\'s Relinquished Shoulders','General\'s Relinquished Cloak','General\'s Relinquished Chestpiece','General\'s Relinquished Bracers','General\'s Relinquished Gloves','General\'s Relinquished Belt','General\'s Relinquished Leggings','General\'s Relinquished Mocassins','General\'s Relinquished Ring','General\'s Relinquished Trinket'],[43759,45351,42443,23422,43075,35044,43073,43078,43076,43082,39124,48971])
export let tierFourClothGear = createGear('tier4-cloth',4,4,1,6273,103,['General\'s Relinquished Hat','General\'s Relinquished Necklace','General\'s Relinquished Shoulderpads','General\'s Relinquished Cloak','General\'s Relinquished Chestpad','General\'s Relinquished Bracers','General\'s Relinquished Gloves','General\'s Relinquished Belt','General\'s Relinquished Pants','General\'s Relinquished Boots','General\'s Relinquished Ring','General\'s Relinquished Trinket'],[42722,34274,43066,23422,43069,35044,43064,43065,43067,43071,31664,39918])

export let tierFourWeapons = createWeapons('tier4',4,1,6273,103,['General\'s Relinquished Shortsword','General\'s Relinquished Cudgel','General\'s Relinquished Carver','General\'s Relinquished Shiv','General\'s Relinquished Broadsword','General\'s Relinquished Bludgeon','General\'s Relinquished Cleaver','General\'s Relinquished Reliquery','General\'s Relinquished Polearm','General\'s Relinquished Recurve','General\'s Relinquished Staff','General\'s Relinquished Wand','General\'s Relinquished Buckler','General\'s Relinquished Knuckles'],[41390,39581,31870,33626,39572,39584,31735,23321,29176,53138,49132,43491,53532,57305])

generateGearRecipes(tierFourBaseResources[0],tierFourMailMaterial,tierFourBaseResources[1],tierFourBaseResources[2],tierFourMailGear)
generateGearRecipes(tierFourBaseResources[0],tierFourLeatherMaterial,tierFourBaseResources[1],tierFourBaseResources[2],tierFourLeatherGear)
generateGearRecipes(tierFourBaseResources[0],tierFourClothMaterial,tierFourBaseResources[1],tierFourBaseResources[2],tierFourClothGear)

generateWeaponRecipes(tierFourBaseResources[0],tierFourBaseResources[5],tierFourBaseResources[3],tierFourBaseResources[4],stringItem.ID,tierFourWeapons)

SQL.disenchant_loot_template.add(103,tierFourBaseResources[6]).Chance.set(100).MinCount.set(1).MaxCount.set(3).LootMode.set(1).GroupId.set(1).Reference.set(0).Comment.set('tier1 disenchant')

//remove below
let vendor = std.CreatureTemplates.create(MODNAME,'cacheme4',3482)
vendor.Name.enGB.set('Armor Npc 4')
vendor.Subname.enGB.set('will be removed')
vendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + vendor.ID + '')

vendor.Vendor.addItem(stringItem.ID)
vendor.Vendor.addItem(tierFourMailMaterial)
vendor.Vendor.addItem(tierFourLeatherMaterial)
vendor.Vendor.addItem(tierFourClothMaterial)
tierFourMailGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierFourLeatherGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierFourClothGear.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierFourWeapons.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
tierFourBaseResources.forEach((value,index,array)=>{
    vendor.Vendor.addItem(value)
})
