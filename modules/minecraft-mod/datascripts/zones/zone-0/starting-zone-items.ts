import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { tierOneBaseResources, tierOneClothMaterial } from "../../items/armor/tier1-set"
import { MODNAME } from "../../modname"

export let AgathasLockbox = std.Items.create(MODNAME,'agathaslockbox',4632)
AgathasLockbox.Name.enGB.set('Agatha\'s Lockbox')
AgathasLockbox.Quality.setBlue()
AgathasLockbox.Bonding.setQuestItem()
AgathasLockbox.Spells.clearAll()

export let SatchelofResources = std.Items.create(MODNAME,'resourcecache',5335)
SatchelofResources.Name.enGB.set('Fractal\'s Resource Cache')
SatchelofResources.Quality.setGreen()
SatchelofResources.Bonding.setQuestItem()
SatchelofResources.Spells.clearAll()
SQL.item_loot_template.add(SatchelofResources.ID,tierOneClothMaterial).Chance.set(100).MinCount.set(3).MaxCount.set(3)
SQL.item_loot_template.add(SatchelofResources.ID,tierOneBaseResources[0]).Chance.set(100).MinCount.set(1).MaxCount.set(1)

export let startingResource01 = std.Items.create(MODNAME,'startingresource01',765)
startingResource01.Name.enGB.set('Everlilly')
startingResource01.Quality.setWhite()
startingResource01.MaxStack.set(500)

//Chest Loot and Armor Creation
export let SubterraneanCape = std.Items.create(MODNAME,'redcloak',14149)
SubterraneanCape.Name.enGB.set('Red Cloak')
SubterraneanCape.RequiredLevel.set(1)
SubterraneanCape.Quality.setGreen()

export let CrystallineCuffs = std.Items.create(MODNAME,'swellingbracers',14148)
CrystallineCuffs.Name.enGB.set('Swelling Bracers')
CrystallineCuffs.RequiredLevel.set(1)
CrystallineCuffs.Quality.setGreen()

export let CursedFelblade = std.Items.create(MODNAME,'felbladecursed',14145)
CursedFelblade.Name.enGB.set('Crooked Blade')
CursedFelblade.RequiredLevel.set(1)
CursedFelblade.Quality.setGreen()

export let RobeofEvocation = std.Items.create(MODNAME,'evocationrobe',14150)
RobeofEvocation.Name.enGB.set('Burning Robe')
RobeofEvocation.RequiredLevel.set(1)
RobeofEvocation.Quality.setGreen()

export let CavedwellerBracers = std.Items.create(MODNAME,'cavebracers',14147)
CavedwellerBracers.Name.enGB.set('Smouldering Bracers')
CavedwellerBracers.RequiredLevel.set(1)
CavedwellerBracers.Quality.setGreen()

export let ChantingBlade = std.Items.create(MODNAME,'chantingblade',14151)
ChantingBlade.Name.enGB.set('Cultist Dagger')
ChantingBlade.RequiredLevel.set(1)
ChantingBlade.Quality.setGreen()

export let NobleRobe = std.Items.create(MODNAME,'noblerobe',3019)
NobleRobe.RequiredLevel.set(1)
NobleRobe.Quality.setGreen()

export let WalkingBoots = std.Items.create(MODNAME,'walkboot',4660)
WalkingBoots.RequiredLevel.set(1)
WalkingBoots.Quality.setGreen()

export let GoldGloves = std.Items.create(MODNAME,'goldgloves',5195)
GoldGloves.RequiredLevel.set(1)
GoldGloves.Quality.setGreen()

export let JewelRing = std.Items.create(MODNAME,'jewelring',1156)
JewelRing.RequiredLevel.set(1)
JewelRing.Quality.setGreen()

export let SmiteAxe = std.Items.create(MODNAME,'smiteaxe',5196)
SmiteAxe.RequiredLevel.set(1)
SmiteAxe.Quality.setGreen()

export let DefiasArmor = std.Items.create(MODNAME,'defiasarmor',10399)
DefiasArmor.RequiredLevel.set(1)
DefiasArmor.Quality.setGreen()
export let DefiasLeg = std.Items.create(MODNAME,'defiasleg',10400)
DefiasLeg.RequiredLevel.set(1)
DefiasLeg.Quality.setGreen()
export let DefiasGlove = std.Items.create(MODNAME,'defiasglove',10401)
DefiasGlove.RequiredLevel.set(1)
DefiasGlove.Quality.setGreen()
export let Defiasboot = std.Items.create(MODNAME,'defiasboot',10402)
Defiasboot.RequiredLevel.set(1)
Defiasboot.Quality.setGreen()
export let DefiasBelt = std.Items.create(MODNAME,'defiasbelt',10403)
DefiasBelt.RequiredLevel.set(1)
DefiasBelt.Quality.setGreen()

export let Cruelbarb = std.Items.create(MODNAME,'cruelbarb',5191)
Cruelbarb.RequiredLevel.set(1)
Cruelbarb.Quality.setGreen()

export let FamilySeal = std.Items.create(MODNAME,'familyseal',6321)
FamilySeal.RequiredLevel.set(1)
FamilySeal.Quality.setGreen()

export let ShadowfangWeapon = std.Items.create(MODNAME,'shadowfangweapon',1482)
ShadowfangWeapon.RequiredLevel.set(1)
ShadowfangWeapon.Quality.setGreen()

export let BlackMalice = std.Items.create(MODNAME,'blackmalice',3194)
BlackMalice.RequiredLevel.set(1)
BlackMalice.Quality.setGreen()
