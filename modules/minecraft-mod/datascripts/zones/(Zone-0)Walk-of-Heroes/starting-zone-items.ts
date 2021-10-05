import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { SQL_playercreateinfo_item } from "wotlkdata/sql/types/playercreateinfo_item"
import { tierOneBaseResources, tierOneClothMaterial } from "../../items/armor/tier1-set"
import { MODNAME } from "../../modname"

export let ExpScroll = std.Items.create(MODNAME,'expscroll',2455)
ExpScroll.Name.enGB.set('Experience Scroll')
ExpScroll.Quality.setWhite()
ExpScroll.Spells.clearAll()
ExpScroll.RequiredLevel.set(1)
ExpScroll.DisplayInfo.copyFrom(10621)
ExpScroll.Spells.add(ExpScroll.ID,undefined,undefined,-1)

export let FireStick = std.Items.create(MODNAME,'firestick',18755)
FireStick.Name.enGB.set('Lost Rifle')
FireStick.Spells.add(46699,0,1)
FireStick.AmmoType.setArrow()
FireStick.RequiredLevel.set(3)

export let FightingStick01 = std.Items.create(MODNAME,'fightingstick01',6215)
FightingStick01.Name.enGB.set('Fighting Stick')
FightingStick01.Stats.clearAll()
FightingStick01.Stats.addAttackPower(12)
FightingStick01.Stats.addStamina(11)
FightingStick01.Stats.addStrength(9)
FightingStick01.Damage.clearAll()
FightingStick01.Damage.addPhysical(37,88)

export let FightingStick02 = std.Items.create(MODNAME,'fightingstick02',6215)
FightingStick02.Name.enGB.set('Fighting Stick')
FightingStick02.Stats.clearAll()
FightingStick02.Stats.addSpellPower(12)
FightingStick02.Stats.addStamina(11)
FightingStick02.Stats.addIntellect(9)

export let FightingStick03 = std.Items.create(MODNAME,'fightingstick03',6215)
FightingStick03.Name.enGB.set('Fighting Stick')
FightingStick03.Stats.clearAll()
FightingStick03.Stats.addAttackPower(12)
FightingStick03.Stats.addStamina(11)
FightingStick03.Stats.addAgility(9)
FightingStick03.Damage.clearAll()
FightingStick03.Damage.addPhysical(37,88)



export let StartingVest = std.Items.create(MODNAME,'startingvest',2300)
StartingVest.Name.enGB.set('Tattered Vest')
StartingVest.Class.setClothEquip()
StartingVest.RequiredLevel.set(1)
StartingVest.Quality.setWhite()
StartingVest.Stats.addStamina(3)
StartingVest.Price.set(1,1)
export let StartingBoots = std.Items.create(MODNAME,'startingboots',2309)
StartingBoots.Name.enGB.set('Tattered Boots')
StartingBoots.Class.setClothEquip()
StartingBoots.RequiredLevel.set(1)
StartingBoots.Quality.setWhite()
StartingBoots.Stats.addStamina(1)
StartingBoots.Price.set(1,1)
export let StartingCloak = std.Items.create(MODNAME,'startingcloak',2310)
StartingCloak.Name.enGB.set('Tattered Cloak')
StartingCloak.Class.setClothEquip()
StartingCloak.RequiredLevel.set(1)
StartingCloak.Quality.setWhite()
StartingCloak.Stats.addStamina(2)
StartingCloak.Price.set(1,1)
export let StartingGloves = std.Items.create(MODNAME,'startinggloves',4239)
StartingGloves.Name.enGB.set('Tattered Gloves')
StartingGloves.Class.setClothEquip()
StartingGloves.RequiredLevel.set(1)
StartingGloves.Quality.setWhite()
StartingGloves.Stats.addStamina(2)
StartingGloves.Price.set(1,1)
export let StartingPants = std.Items.create(MODNAME,'startingpants',4242)
StartingPants.Name.enGB.set('Tattered Pants')
StartingPants.Class.setClothEquip()
StartingPants.RequiredLevel.set(1)
StartingPants.Quality.setWhite()
StartingPants.Stats.addStamina(3)
StartingPants.Price.set(1,1)
export let StartingRing = std.Items.create(MODNAME,'startingring',1189)
StartingRing.Name.enGB.set('Ring of Power')
StartingRing.RequiredLevel.set(1)
StartingRing.Quality.setGreen()
StartingRing.Stats.addSpellPower(20)
StartingRing.Stats.addAttackPower(20)
StartingRing.Stats.addCritRating(15)

SQL_playercreateinfo_item.add(0,0,StartingVest.ID).amount.set(1)
SQL_playercreateinfo_item.add(0,0,StartingBoots.ID).amount.set(1)
SQL_playercreateinfo_item.add(0,0,StartingCloak.ID).amount.set(1)
SQL_playercreateinfo_item.add(0,0,StartingGloves.ID).amount.set(1)
SQL_playercreateinfo_item.add(0,0,StartingPants.ID).amount.set(1)
SQL_playercreateinfo_item.add(0,0,StartingRing.ID).amount.set(1)


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
SQL.item_loot_template.add(SatchelofResources.ID,tierOneClothMaterial).Chance.set(100).MinCount.set(4).MaxCount.set(4)
//SQL.item_loot_template.add(SatchelofResources.ID,tierOneBaseResources[0]).Chance.set(100).MinCount.set(1).MaxCount.set(1)

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
