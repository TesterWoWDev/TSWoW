import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { createMaterial, createGear, generateGearRecipes, generateWeaponRecipes, createBaseResources, createWeapons, createTrinket } from "../../functions/recipe-functions"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { stringItem } from "../string"
import { expSpell4 } from "../../spells/experience-rate-spells"
import { clothTierFourItemEnchantmentIndex, leatherTierFourItemEnchantmentIndex, mailTierFourItemEnchantmentIndex, trinketTierFourItemEnchantmentIndex, weaponTierFourItemEnchantmentIndex } from "../RandomProperties/tier4-properties"

let levelrequirement = 15
let armSpell = [expSpell4.ID,0,0,0,0]
let armTrigger = [1,0,0,0,0]
let wepSpell = [expSpell4.ID,41679,41751,41787,44585]
let wepTrigger = [1,1,1,1,1]

//Thunderfury, FireBlast, Haste, Health, Attack Power, Armor, Spell Power, Blank x5
//let RandomChanceOnHitSpells = [21992,29633,33297,40444,45355,67653,71606,0,0,0,0,0]

export let tierFourBaseResources = createBaseResources(3,'tier4','Pristine',['Pearl','Epaulet','Chain','Metal','Reinforced Metal','Stick','Dust'],[12310,35338,39340,7355,7389,2618,20614])

export let tierFourMailMaterial = createMaterial(3,'tier4','Pristine Mail Scraps','mail armor pieces',22924)
export let tierFourLeatherMaterial = createMaterial(3,'tier4','Pristine Leather Scraps','leather armor pieces',29468)
export let tierFourClothMaterial = createMaterial(3,'tier4','Pristine Cloth Scraps','cloth armor pieces',7383)

export let tierFourMailGear = createGear(levelrequirement,'tier4-mail',3,4.5,3,103,mailTierFourItemEnchantmentIndex,['General\'s Relinquished Helm','General\'s Relinquished Necklace','General\'s Relinquished Spaulders','General\'s Relinquished Cloak','General\'s Relinquished Chestguard','General\'s Relinquished Bracers','General\'s Relinquished Gloves','General\'s Relinquished Belt','General\'s Relinquished Legguards','General\'s Relinquished Greaves','General\'s Relinquished Ring'],[42353,32008,42351,23422,42352,35044,42355,42603,42354,42604,39126],armSpell,armTrigger)
tierFourMailGear.push(createTrinket(levelrequirement,'tier1-mail',2,100,trinketTierFourItemEnchantmentIndex,'General\'s Relinquished Trinket',39917,armSpell,armTrigger))
export let tierFourLeatherGear = createGear(levelrequirement,'tier4-leather',3,4.2,2,103,leatherTierFourItemEnchantmentIndex,['General\'s Relinquished Headress','General\'s Relinquished Necklace','General\'s Relinquished Shoulders','General\'s Relinquished Cloak','General\'s Relinquished Chestpiece','General\'s Relinquished Bracers','General\'s Relinquished Gloves','General\'s Relinquished Belt','General\'s Relinquished Leggings','General\'s Relinquished Mocassins','General\'s Relinquished Ring'],[43759,45351,42443,23422,43075,35044,43073,43078,43076,43082,39124],armSpell,armTrigger)
tierFourLeatherGear.push(createTrinket(levelrequirement,'tier1-leather',2,100,trinketTierFourItemEnchantmentIndex,'General\'s Relinquished Trinket',39918,armSpell,armTrigger))
export let tierFourClothGear = createGear(levelrequirement,'tier4-cloth',3,4,1,103,clothTierFourItemEnchantmentIndex,['General\'s Relinquished Hat','General\'s Relinquished Necklace','General\'s Relinquished Shoulderpads','General\'s Relinquished Cloak','General\'s Relinquished Chestpad','General\'s Relinquished Bracers','General\'s Relinquished Gloves','General\'s Relinquished Belt','General\'s Relinquished Pants','General\'s Relinquished Boots','General\'s Relinquished Ring'],[42722,34274,43066,23422,43069,35044,43064,43065,43067,43071,31664],armSpell,armTrigger)
tierFourClothGear.push(createTrinket(levelrequirement,'tier1-cloth',2,100,trinketTierFourItemEnchantmentIndex,'General\'s Relinquished Trinket',48971,armSpell,armTrigger))

export let tierFourWeapons = createWeapons(levelrequirement,'tier4',3,1,103,weaponTierFourItemEnchantmentIndex,['General\'s Relinquished Shortsword','General\'s Relinquished Cudgel','General\'s Relinquished Carver','General\'s Relinquished Shiv','General\'s Relinquished Broadsword','General\'s Relinquished Bludgeon','General\'s Relinquished Cleaver','General\'s Relinquished Reliquery','General\'s Relinquished Polearm','General\'s Relinquished Recurve','General\'s Relinquished Staff','General\'s Relinquished Wand','General\'s Relinquished Buckler','General\'s Relinquished Knuckles'],[41390,39581,31870,33626,39572,39584,31735,23321,29176,53138,49132,43491,53532,57305],wepSpell,wepTrigger)

generateGearRecipes(tierFourBaseResources[0],tierFourMailMaterial,tierFourBaseResources[1],tierFourBaseResources[2],tierFourMailGear)
generateGearRecipes(tierFourBaseResources[0],tierFourLeatherMaterial,tierFourBaseResources[1],tierFourBaseResources[2],tierFourLeatherGear)
generateGearRecipes(tierFourBaseResources[0],tierFourClothMaterial,tierFourBaseResources[1],tierFourBaseResources[2],tierFourClothGear)

generateWeaponRecipes(tierFourBaseResources[0],tierFourBaseResources[5],tierFourBaseResources[3],tierFourBaseResources[4],stringItem.ID,tierFourWeapons)

SQL.disenchant_loot_template.add(103,tierFourBaseResources[6]).Chance.set(100).MinCount.set(1).MaxCount.set(3).LootMode.set(1).GroupId.set(1).Reference.set(0).Comment.set('Tier 4 Disenchant - Dust')

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
