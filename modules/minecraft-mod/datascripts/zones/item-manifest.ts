import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";
import { SQL } from "wotlkdata";
import {
    SpiritI,
    ProtectionI,
    AgilityI,
    IntellectI,
    StaminaI,
    StrengthI,
} from "./(Zone-1)Bramblewood/zone-1-item-spells";
import {
    tierOneBaseResources,
    tierOneClothMaterial,
    tierOneLeatherMaterial,
    tierOneMailMaterial,
} from "../items/armor/tier1-set";
import { expSpell4 } from "../spells/experience-rate-spells";
import {
    SpiritIV,
    ProtectionIV,
    AgilityIV,
    IntellectIV,
    StaminaIV,
    StrengthIV,
} from "./(Zone-4)Jungle/zone-4-item-spells";
import { spawnMultiGobTimer } from "../functions/spawning-functions";
import {
    addLootToGobChestSingleChanceMultiGroup,
    addLootToGobChest,
    addLootToGobChestSingleChance,
} from "../functions/gob-functions";
import { makeResourceNode } from "../functions/resource-node-functions";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Starting Zone Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rare Drops (Universal)
export let EyeofDestiny = std.Items.create(MODNAME, "eyeofdestiny", 21221);
EyeofDestiny.Name.enGB.set("Eye of Destiny");
EyeofDestiny.Quality.ORANGE.set();
EyeofDestiny.Description.enGB.set(
    "What can be learned from an eye as old as time.?"
);
EyeofDestiny.StartQuest.set(0);

//Rogue Poisons
export let DeadlyPoison = std.Items.load(2892);
DeadlyPoison.RequiredLevel.set(1);
export let CrippPoison = std.Items.load(3775);
CrippPoison.RequiredLevel.set(1);
export let MindPoison = std.Items.load(5237);
MindPoison.RequiredLevel.set(1);
export let Instant = std.Items.load(6947);
Instant.RequiredLevel.set(1);
export let WoundPoison = std.Items.load(10918);
WoundPoison.RequiredLevel.set(1);

//Crafting Resources and Materials
export let RedFlower01 = std.Items.create(MODNAME, "redflower01", 785);
RedFlower01.Name.enGB.set("Hibiscus Flower");
RedFlower01.Quality.WHITE.set();
RedFlower01.MaxStack.set(500);
export let BlueFlower01 = std.Items.create(MODNAME, "blueflower01", 44207);
BlueFlower01.Name.enGB.set("Tulip Flower");
BlueFlower01.Quality.WHITE.set();
BlueFlower01.MaxStack.set(500);
BlueFlower01.Price.set(60, 80);
export let ImmortalFlower = std.Items.create(MODNAME, "immortalflower", 19295);
ImmortalFlower.Name.enGB.set("Immortal Flower");
ImmortalFlower.Quality.BLUE.set();
ImmortalFlower.Stats.addStamina(13);
ImmortalFlower.Stats.addIntellect(7);
ImmortalFlower.Stats.addSpellPower(32);
export let OrganicMatter = std.Items.create(MODNAME, "organicmatter", 765);
OrganicMatter.Name.enGB.set("Organic Matter");
OrganicMatter.Quality.WHITE.set();
OrganicMatter.MaxStack.set(9999);
OrganicMatter.DisplayInfo.modRefCopy(
    (val: { copyFromTemplate: (arg0: number) => any }) =>
        val.copyFromTemplate(39342)
);
export let ExpScroll = std.Items.create(MODNAME, "expscroll", 2455);
ExpScroll.Name.enGB.set("Experience Scroll");
ExpScroll.Quality.WHITE.set();
ExpScroll.Spells.clearAll();
ExpScroll.RequiredLevel.set(1);
ExpScroll.DisplayInfo.modRefCopy((val) => val.copyFromTemplate(10621));
export let FireStick = std.Items.create(MODNAME, "firestick", 18755);
FireStick.Name.enGB.set("Lost Rifle");
FireStick.AmmoType.ARROW.set();
FireStick.RequiredLevel.set(3);
export let FightingStick01 = std.Items.create(MODNAME, "fightingstick01", 6215);
FightingStick01.Name.enGB.set("Fighting Stick");
FightingStick01.Stats.clearAll();
FightingStick01.Stats.addAttackPower(12);
FightingStick01.Stats.addStamina(11);
FightingStick01.Stats.addStrength(9);
FightingStick01.Damage.clearAll();
FightingStick01.Damage.addPhysical(37, 88);
export let FightingStick02 = std.Items.create(MODNAME, "fightingstick02", 6215);
FightingStick02.Name.enGB.set("Fighting Stick");
FightingStick02.Stats.clearAll();
FightingStick02.Stats.addSpellPower(12);
FightingStick02.Stats.addStamina(11);
FightingStick02.Stats.addIntellect(9);
export let FightingStick03 = std.Items.create(MODNAME, "fightingstick03", 6215);
FightingStick03.Name.enGB.set("Fighting Stick");
FightingStick03.Stats.clearAll();
FightingStick03.Stats.addAttackPower(12);
FightingStick03.Stats.addStamina(11);
FightingStick03.Stats.addAgility(9);
FightingStick03.Damage.clearAll();
FightingStick03.Damage.addPhysical(37, 88);

//Starting Armor and Items
export let StartingVest = std.Items.create(MODNAME, "startingvest", 2300);
StartingVest.Name.enGB.set("Tattered Vest");
StartingVest.Class.ClothEquip.set();
StartingVest.RequiredLevel.set(1);
StartingVest.Quality.WHITE.set();
StartingVest.Stats.addStamina(3);
StartingVest.Price.set(1, 1);
export let StartingBoots = std.Items.create(MODNAME, "startingboots", 2309);
StartingBoots.Name.enGB.set("Tattered Boots");
StartingBoots.Class.ClothEquip.set();
StartingBoots.RequiredLevel.set(1);
StartingBoots.Quality.WHITE.set();
StartingBoots.Stats.addStamina(1);
StartingBoots.Price.set(1, 1);
export let StartingCloak = std.Items.create(MODNAME, "startingcloak", 2310);
StartingCloak.Name.enGB.set("Tattered Cloak");
StartingCloak.Class.ClothEquip.set();
StartingCloak.RequiredLevel.set(1);
StartingCloak.Quality.WHITE.set();
StartingCloak.Stats.addStamina(2);
StartingCloak.Price.set(1, 1);
export let StartingGloves = std.Items.create(MODNAME, "startinggloves", 4239);
StartingGloves.Name.enGB.set("Tattered Gloves");
StartingGloves.Class.ClothEquip.set();
StartingGloves.RequiredLevel.set(1);
StartingGloves.Quality.WHITE.set();
StartingGloves.Stats.addStamina(2);
StartingGloves.Price.set(1, 1);
export let StartingPants = std.Items.create(MODNAME, "startingpants", 4242);
StartingPants.Name.enGB.set("Tattered Pants");
StartingPants.Class.ClothEquip.set();
StartingPants.RequiredLevel.set(1);
StartingPants.Quality.WHITE.set();
StartingPants.Stats.addStamina(3);
StartingPants.Price.set(1, 1);
export let StartingRing = std.Items.create(MODNAME, "startingring", 1189);
StartingRing.Name.enGB.set("Ring of Power");
StartingRing.RequiredLevel.set(1);
StartingRing.Quality.GREEN.set();
StartingRing.Stats.addSpellPower(20);
StartingRing.Stats.addAttackPower(20);
StartingRing.Stats.addCritRating(15);

export let SatchelofPower = std.Items.create(MODNAME, "ultimatepowerring", 805);
SatchelofPower.Name.enGB.set("Satchel of Limitless Potential");
SatchelofPower.Description.enGB.set(
    "The power you have been secretly missing all along -Unknown"
);
SatchelofPower.RequiredLevel.set(5);
SatchelofPower.ContainerSlots.set(18);
SatchelofPower.MaxCount.set(1);
SatchelofPower.Bonding.BINDS_ON_PICKUP.set();
SatchelofPower.Quality.BLUE.set();
/*SatchelofPower.Stats.addSpellPower(225)
SatchelofPower.Stats.addAttackPower(225)
SatchelofPower.Stats.addCritRating(265)
SatchelofPower.Stats.addHasteRating(50)
SatchelofPower.Stats.addHitRating(50)
SatchelofPower.Stats.addStamina(200)*/

SQL.playercreateinfo_item.add(0, 0, StartingVest.ID).amount.set(1);
SQL.playercreateinfo_item.add(0, 0, StartingBoots.ID).amount.set(1);
SQL.playercreateinfo_item.add(0, 0, StartingCloak.ID).amount.set(1);
SQL.playercreateinfo_item.add(0, 0, StartingGloves.ID).amount.set(1);
SQL.playercreateinfo_item.add(0, 0, StartingPants.ID).amount.set(1);
SQL.playercreateinfo_item.add(0, 0, StartingRing.ID).amount.set(1);

export let AgathasLockbox = std.Items.create(MODNAME, "agathaslockbox", 4632);
AgathasLockbox.Name.enGB.set("Agatha's Lockbox");
AgathasLockbox.Quality.BLUE.set();
AgathasLockbox.Bonding.QUEST_ITEM.set();
AgathasLockbox.Spells.clearAll();
export let SatchelofResources = std.Items.create(
    MODNAME,
    "resourcecache",
    5335
);
SatchelofResources.Name.enGB.set("Fractal's Resource Cache");
SatchelofResources.Quality.GREEN.set();
SatchelofResources.Bonding.QUEST_ITEM.set();
SatchelofResources.Spells.clearAll();
SQL.item_loot_template
    .add(SatchelofResources.ID, tierOneClothMaterial)
    .Chance.set(100)
    .MinCount.set(4)
    .MaxCount.set(4);

export let startingResource01 = std.Items.create(
    MODNAME,
    "startingresource01",
    765
);
startingResource01.Name.enGB.set("Everlilly");
startingResource01.Quality.WHITE.set();
startingResource01.MaxStack.set(500);

export let SubterraneanCape = std.Items.create(MODNAME, "redcloak", 14149);
SubterraneanCape.Name.enGB.set("Red Cloak");
SubterraneanCape.RequiredLevel.set(1);
SubterraneanCape.Quality.GREEN.set();
export let CrystallineCuffs = std.Items.create(
    MODNAME,
    "swellingbracers",
    14148
);
CrystallineCuffs.Name.enGB.set("Swelling Bracers");
CrystallineCuffs.RequiredLevel.set(1);
CrystallineCuffs.Quality.GREEN.set();
export let CursedFelblade = std.Items.create(MODNAME, "felbladecursed", 14145);
CursedFelblade.Name.enGB.set("Crooked Blade");
CursedFelblade.RequiredLevel.set(1);
CursedFelblade.Quality.GREEN.set();
export let RobeofEvocation = std.Items.create(MODNAME, "evocationrobe", 14150);
RobeofEvocation.Name.enGB.set("Burning Robe");
RobeofEvocation.RequiredLevel.set(1);
RobeofEvocation.Quality.GREEN.set();
export let CavedwellerBracers = std.Items.create(MODNAME, "cavebracers", 14147);
CavedwellerBracers.Name.enGB.set("Smouldering Bracers");
CavedwellerBracers.RequiredLevel.set(1);
CavedwellerBracers.Quality.GREEN.set();
export let ChantingBlade = std.Items.create(MODNAME, "chantingblade", 14151);
ChantingBlade.Name.enGB.set("Cultist Dagger");
ChantingBlade.RequiredLevel.set(1);
ChantingBlade.Quality.GREEN.set();
export let NobleRobe = std.Items.create(MODNAME, "noblerobe", 3019);
NobleRobe.RequiredLevel.set(1);
NobleRobe.Quality.GREEN.set();
export let WalkingBoots = std.Items.create(MODNAME, "walkboot", 4660);
WalkingBoots.RequiredLevel.set(1);
WalkingBoots.Quality.GREEN.set();
export let GoldGloves = std.Items.create(MODNAME, "goldgloves", 5195);
GoldGloves.RequiredLevel.set(1);
GoldGloves.Quality.GREEN.set();
export let JewelRing = std.Items.create(MODNAME, "jewelring", 1156);
JewelRing.RequiredLevel.set(1);
JewelRing.Quality.GREEN.set();
export let SmiteAxe = std.Items.create(MODNAME, "smiteaxe", 5196);
SmiteAxe.RequiredLevel.set(1);
SmiteAxe.Quality.GREEN.set();
export let DefiasArmor = std.Items.create(MODNAME, "defiasarmor", 10399);
DefiasArmor.RequiredLevel.set(1);
DefiasArmor.Quality.GREEN.set();
export let DefiasLeg = std.Items.create(MODNAME, "defiasleg", 10400);
DefiasLeg.RequiredLevel.set(1);
DefiasLeg.Quality.GREEN.set();
export let DefiasGlove = std.Items.create(MODNAME, "defiasglove", 10401);
DefiasGlove.RequiredLevel.set(1);
DefiasGlove.Quality.GREEN.set();
export let Defiasboot = std.Items.create(MODNAME, "defiasboot", 10402);
Defiasboot.RequiredLevel.set(1);
Defiasboot.Quality.GREEN.set();
export let DefiasBelt = std.Items.create(MODNAME, "defiasbelt", 10403);
DefiasBelt.RequiredLevel.set(1);
DefiasBelt.Quality.GREEN.set();
export let Cruelbarb = std.Items.create(MODNAME, "cruelbarb", 5191);
Cruelbarb.RequiredLevel.set(1);
Cruelbarb.Quality.GREEN.set();
export let FamilySeal = std.Items.create(MODNAME, "familyseal", 6321);
FamilySeal.RequiredLevel.set(1);
FamilySeal.Quality.GREEN.set();
export let ShadowfangWeapon = std.Items.create(
    MODNAME,
    "shadowfangweapon",
    1482
);
ShadowfangWeapon.RequiredLevel.set(1);
ShadowfangWeapon.Quality.GREEN.set();
export let BlackMalice = std.Items.create(MODNAME, "blackmalice", 3194);
BlackMalice.RequiredLevel.set(1);
BlackMalice.Quality.GREEN.set();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Zone 1 Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Quest Items
export let StrangeEtherealCrate = std.Items.create(
    MODNAME,
    "strangecrate01",
    36771
);
StrangeEtherealCrate.Name.enGB.set("Strange Ethereal Crate");
StrangeEtherealCrate.Quality.GREEN.set();
StrangeEtherealCrate.MaxStack.set(500);
StrangeEtherealCrate.Spells.clearAll();
export let EtherealPortalBag = std.Items.create(
    MODNAME,
    "etherealportalbag",
    4498
);
EtherealPortalBag.Quality.BLUE.set();
EtherealPortalBag.DisplayInfo.modRefCopy((val) => val.copyFromTemplate(38186));
EtherealPortalBag.ContainerSlots.set(12);

export let RavenLordMount = std.Items.load(32768);
RavenLordMount.RequiredLevel.set(3);
let conjuredfood = std.Items.load(3772);
conjuredfood.RequiredLevel.set(1);
let conjuredwater = std.Items.load(1487);
conjuredwater.RequiredLevel.set(1);

//Resource Collection
export let LoggingPileLogs = std.Items.create(MODNAME, "logpilelogs", 44208);
LoggingPileLogs.Name.enGB.set("Logs");
LoggingPileLogs.Quality.WHITE.set();
LoggingPileLogs.MaxStack.set(9999);
LoggingPileLogs.Price.set(60, 80);
export let GrainSack = std.Items.create(MODNAME, "grainsack", 8838);
GrainSack.Name.enGB.set("Grain");
GrainSack.Quality.WHITE.set();
GrainSack.MaxStack.set(9999);
GrainSack.Price.set(60, 80);
export let MaturePumpkin = std.Items.create(MODNAME, "mpumpkin", 4656);
MaturePumpkin.Name.enGB.set("Matured Pumpkin");
MaturePumpkin.Quality.WHITE.set();
MaturePumpkin.MaxStack.set(9999);
MaturePumpkin.Price.set(55, 95);
export let WatermelonItem = std.Items.create(MODNAME, "rwatermelon", 4538);
WatermelonItem.Name.enGB.set("Watermelon");
WatermelonItem.Quality.WHITE.set();
WatermelonItem.MaxStack.set(9999);
WatermelonItem.Price.set(55, 95);
WatermelonItem.RequiredLevel.set(0);
export let BoarskinSatchel = std.Items.create(MODNAME, "boarskinsatchel", 4498);
BoarskinSatchel.Name.enGB.set("Boar Skin Satchel");
BoarskinSatchel.Quality.GREEN.set();
BoarskinSatchel.ContainerSlots.set(16);
export let BoarSkin = std.Items.create(MODNAME, "boarskin", 2318);
BoarSkin.Name.enGB.set("Boar Skin");
BoarSkin.Quality.WHITE.set();
BoarSkin.MaxStack.set(9999);
export let DeerSkin = std.Items.create(MODNAME, "deerskin", 2318);
DeerSkin.Name.enGB.set("Deer Skin");
DeerSkin.Quality.GRAY.set();
DeerSkin.MaxStack.set(9999);
DeerSkin.DisplayInfo.modRefCopy((val) => val.copyFromTemplate(9591));
export let Teeth = std.Items.create(MODNAME, "teeth", 2318);
Teeth.Name.enGB.set("Sharp Tooth");
Teeth.Quality.GRAY.set();
Teeth.MaxStack.set(9999);
Teeth.DisplayInfo.modRefCopy((val) => val.copyFromTemplate(7073));
export let RabbitSkin = std.Items.create(MODNAME, "rabbitskin", 2318);
RabbitSkin.Name.enGB.set("Rabbit Skin");
RabbitSkin.Quality.GRAY.set();
RabbitSkin.MaxStack.set(9999);
RabbitSkin.DisplayInfo.modRefCopy((val) => val.copyFromTemplate(3862));
export let Silverleaf = std.Items.create(MODNAME, "silverleaf", 765);
Silverleaf.Quality.WHITE.set();
Silverleaf.MaxStack.set(500);
export let Earthroot = std.Items.create(MODNAME, "earthroot", 2449);
Earthroot.Quality.WHITE.set();
Earthroot.MaxStack.set(500);
export let WildSteelbloom = std.Items.create(MODNAME, "wildsteelbloom", 3355);
WildSteelbloom.Quality.WHITE.set();
WildSteelbloom.MaxStack.set(500);
export let Mageroyal = std.Items.create(MODNAME, "mageroyal", 785);
Mageroyal.Quality.WHITE.set();
Mageroyal.MaxStack.set(500);
export let Peacebloom = std.Items.create(MODNAME, "peacebloom", 2447);
Peacebloom.Quality.WHITE.set();
Peacebloom.MaxStack.set(500);

//Creature and Mob Loot
export let SmallRedPouch = std.Items.create(MODNAME, "smallredpouch", 805);
SmallRedPouch.Quality.WHITE.set();
SmallRedPouch.ContainerSlots.set(6);
export let SmallBluePouch = std.Items.create(MODNAME, "smallbluepouch", 828);
SmallBluePouch.Quality.WHITE.set();
SmallBluePouch.ContainerSlots.set(6);
export let SmallBlackPouch = std.Items.create(MODNAME, "smallblackpouch", 5571);
SmallBlackPouch.Quality.WHITE.set();
SmallBlackPouch.ContainerSlots.set(6);
export let SmallGreenPouch = std.Items.create(MODNAME, "smallgreenpouch", 5572);
SmallGreenPouch.Quality.WHITE.set();
SmallGreenPouch.ContainerSlots.set(6);
export let BrownLeatherSatchel = std.Items.create(
    MODNAME,
    "brownleathersatchel",
    4498
);
BrownLeatherSatchel.Quality.WHITE.set();
BrownLeatherSatchel.ContainerSlots.set(8);
export let DarnassianBleu = std.Items.create(MODNAME, "darnassianbleu", 2070);
DarnassianBleu.Quality.WHITE.set();
export let ShinyRedApple = std.Items.create(MODNAME, "shinyredapple", 4536);
ShinyRedApple.Quality.WHITE.set();
export let SuperApple = std.Items.create(MODNAME, "superapple", 46691);
SuperApple.Name.enGB.set("Super Apple");
SuperApple.Quality.BLUE.set();
SuperApple.DisplayInfo.modRefCopy((val) =>
    val.copyFromTemplate(ShinyRedApple.ID)
);
SuperApple.Holiday.set(0);
export let RefreshingSpringWater = std.Items.create(
    MODNAME,
    "refreshingspringwater",
    159
);
RefreshingSpringWater.Quality.WHITE.set();
export let Dirk = std.Items.create(MODNAME, "dirk", 159);
Dirk.Quality.WHITE.set();
export let TornNote = std.Items.create(MODNAME, "tornnote", 159);
TornNote.Quality.WHITE.set();
export let MeltedCandle = std.Items.create(MODNAME, "meltedcandle", 755);
MeltedCandle.Quality.WHITE.set();
export let LargeCandle = std.Items.create(MODNAME, "largecandle", 772);
LargeCandle.Quality.WHITE.set();
export let MagicCandle = std.Items.create(MODNAME, "magiccandle", 1399);
MagicCandle.Quality.WHITE.set();
export let BladedPickaxe = std.Items.create(MODNAME, "bladedpickaxe", 1399);
BladedPickaxe.Name.enGB.set("Rusty Old Pickaxe");
BladedPickaxe.Damage.clearAll();
BladedPickaxe.Damage.addPhysical(23, 45);
BladedPickaxe.Quality.WHITE.set();
BladedPickaxe.Stats.clearAll();
BladedPickaxe.Stats.addStamina(5);
BladedPickaxe.Stats.addStrength(2);
BladedPickaxe.Stats.addAgility(1);
BladedPickaxe.Stats.addCritRating(3);
BladedPickaxe.Stats.addAttackPower(4);
export let BlazingRapier = std.Items.create(MODNAME, "blazingrapier", 12777);
BlazingRapier.Name.enGB.set("Blistering Longsword");
BlazingRapier.Damage.clearAll();
BlazingRapier.Damage.addPhysical(14, 30);
BlazingRapier.RequiredLevel.set(3);
BlazingRapier.Quality.WHITE.set();
BlazingRapier.Stats.clearAll();
BlazingRapier.Stats.addStamina(3);
BlazingRapier.Stats.addAgility(4);
BlazingRapier.Stats.addCritRating(4);
BlazingRapier.Stats.addAttackPower(8);
export let WickedMithrilBlade = std.Items.create(
    MODNAME,
    "wickedmithrilblade",
    7943
);
WickedMithrilBlade.Name.enGB.set("Twisted Knife");
WickedMithrilBlade.Damage.clearAll();
WickedMithrilBlade.Damage.addPhysical(10, 22);
WickedMithrilBlade.RequiredLevel.set(1);
WickedMithrilBlade.Quality.WHITE.set();
WickedMithrilBlade.Stats.clearAll();
WickedMithrilBlade.Stats.addStamina(1);
WickedMithrilBlade.Stats.addStrength(3);
WickedMithrilBlade.Stats.addAgility(4);
WickedMithrilBlade.Stats.addCritRating(2);
WickedMithrilBlade.Stats.addHasteRating(2);
WickedMithrilBlade.Stats.addHitRating(2);
export let SearingGoldenBlade = std.Items.create(
    MODNAME,
    "searinggoldenblade",
    12260
);
SearingGoldenBlade.Name.enGB.set("Sharpened Wolf Tooth");
SearingGoldenBlade.Damage.clearAll();
SearingGoldenBlade.Damage.addPhysical(17, 30);
SearingGoldenBlade.RequiredLevel.set(3);
SearingGoldenBlade.Quality.WHITE.set();
SearingGoldenBlade.Stats.clearAll();
SearingGoldenBlade.Stats.addStamina(1);
SearingGoldenBlade.Stats.addAgility(2);
SearingGoldenBlade.Stats.addCritRating(10);
SearingGoldenBlade.Stats.addAttackPower(15);
export let BuzzSaw = std.Items.create(MODNAME, "buzzsaw", 1937);
BuzzSaw.Name.enGB.set("Keldren's First Scimitar");
BuzzSaw.Damage.clearAll();
BuzzSaw.Damage.addPhysical(10, 27);
BuzzSaw.RequiredLevel.set(3);
BuzzSaw.Quality.WHITE.set();
BuzzSaw.Stats.clearAll();
BuzzSaw.Stats.addStamina(5);
BuzzSaw.Stats.addStrength(2);
BuzzSaw.Stats.addCritRating(4);
BuzzSaw.Stats.addHasteRating(6);
BuzzSaw.Stats.addHitRating(2);
BuzzSaw.Stats.addAttackPower(4);
export let BuzzerBlade = std.Items.create(MODNAME, "buzzerblade", 2169);
BuzzerBlade.Name.enGB.set("Ancient Cultist Dagger");
BuzzerBlade.Damage.clearAll();
BuzzerBlade.Damage.addPhysical(7, 19);
BuzzerBlade.RequiredLevel.set(3);
BuzzerBlade.Quality.WHITE.set();
BuzzerBlade.Stats.clearAll();
BuzzerBlade.Stats.addStamina(5);
BuzzerBlade.Stats.addSpirit(2);
BuzzerBlade.Stats.addIntellect(6);
BuzzerBlade.Stats.addCritRating(5);
BuzzerBlade.Stats.addHasteRating(2);
BuzzerBlade.Stats.addHitRating(2);
BuzzerBlade.Stats.addSpellPower(10);
export let Rockslicer = std.Items.create(MODNAME, "rockslicer", 872);
Rockslicer.Name.enGB.set("Recovered Blade");
Rockslicer.Damage.clearAll();
Rockslicer.Damage.addPhysical(20, 60);
Rockslicer.RequiredLevel.set(3);
Rockslicer.Quality.WHITE.set();
Rockslicer.Stats.clearAll();
Rockslicer.Stats.addStrength(9);
Rockslicer.Stats.addAgility(9);
Rockslicer.Stats.addCritRating(15);
Rockslicer.Stats.addHitRating(10);
export let RhahkZorsHammer = std.Items.create(MODNAME, "rhahkzorshammer", 5187);
RhahkZorsHammer.Name.enGB.set("Stolen Bludgeon");
RhahkZorsHammer.Damage.clearAll();
RhahkZorsHammer.Damage.addPhysical(40, 50);
RhahkZorsHammer.RequiredLevel.set(3);
RhahkZorsHammer.Quality.WHITE.set();
RhahkZorsHammer.Stats.clearAll();
RhahkZorsHammer.Stats.addStamina(10);
RhahkZorsHammer.Stats.addStrength(5);
RhahkZorsHammer.Stats.addAgility(5);
RhahkZorsHammer.Stats.addHasteRating(10);
export let GoldplatedBuckler = std.Items.create(
    MODNAME,
    "goldplatedbuckler",
    5443
);
GoldplatedBuckler.Name.enGB.set("Living Barrier");
GoldplatedBuckler.RequiredLevel.set(3);
GoldplatedBuckler.Quality.WHITE.set();
GoldplatedBuckler.Stats.clearAll();
GoldplatedBuckler.Stats.addStamina(10);
GoldplatedBuckler.Stats.addSpirit(15);
GoldplatedBuckler.Stats.addIntellect(8);
GoldplatedBuckler.Stats.addHasteRating(10);
GoldplatedBuckler.Stats.addSpellPower(20);
export let EmberstoneStaff = std.Items.create(MODNAME, "emberstonestaff", 5201);
EmberstoneStaff.Name.enGB.set("Immaculate Ruby Staff");
EmberstoneStaff.Damage.clearAll();
EmberstoneStaff.Damage.addPhysical(24, 29);
EmberstoneStaff.RequiredLevel.set(3);
EmberstoneStaff.Quality.WHITE.set();
EmberstoneStaff.Stats.clearAll();
EmberstoneStaff.Stats.addStamina(10);
EmberstoneStaff.Stats.addSpirit(18);
EmberstoneStaff.Stats.addIntellect(15);
EmberstoneStaff.Stats.addCritRating(22);
EmberstoneStaff.Stats.addHasteRating(16);
EmberstoneStaff.Stats.addSpellPower(44);
export let ImpalingHarpoon = std.Items.create(MODNAME, "impalingharpoon", 5200);
ImpalingHarpoon.Name.enGB.set("Dauntless Spike");
ImpalingHarpoon.Damage.clearAll();
ImpalingHarpoon.Damage.addPhysical(33, 45);
ImpalingHarpoon.RequiredLevel.set(3);
ImpalingHarpoon.Quality.WHITE.set();
ImpalingHarpoon.Stats.clearAll();
ImpalingHarpoon.Stats.addStamina(10);
ImpalingHarpoon.Stats.addAgility(16);
ImpalingHarpoon.Stats.addCritRating(14);
ImpalingHarpoon.Stats.addHitRating(10);
ImpalingHarpoon.Stats.addAttackPower(37);
export let ThiefsBlade = std.Items.create(MODNAME, "thiefsblade", 5192);
ThiefsBlade.Name.enGB.set("Blade of Unmaking");
ThiefsBlade.Damage.clearAll();
ThiefsBlade.Damage.addPhysical(17, 30);
ThiefsBlade.RequiredLevel.set(3);
ThiefsBlade.Quality.WHITE.set();
ThiefsBlade.Stats.clearAll();
ThiefsBlade.Stats.addStamina(-8);
ThiefsBlade.Stats.addStrength(16);
ThiefsBlade.Stats.addAgility(16);
ThiefsBlade.Stats.addCritRating(28);
ThiefsBlade.Stats.addAttackPower(18);
export let SmitesReaver = std.Items.create(MODNAME, "smitesreaver", 5196);
SmitesReaver.Name.enGB.set("Executioner's Axe");
SmitesReaver.Damage.clearAll();
SmitesReaver.Damage.addPhysical(40, 42);
SmitesReaver.RequiredLevel.set(3);
SmitesReaver.Quality.WHITE.set();
SmitesReaver.Stats.clearAll();
SmitesReaver.Stats.addAgility(12);
SmitesReaver.Stats.addCritRating(26);
SmitesReaver.Stats.addHasteRating(13);
SmitesReaver.Stats.addHitRating(40);
export let SmitesMightyHammer = std.Items.create(
    MODNAME,
    "smitesmightyhammer",
    7230
);
SmitesMightyHammer.Name.enGB.set("Clobberstone Greatmallet");
SmitesMightyHammer.Damage.clearAll();
SmitesMightyHammer.Damage.addPhysical(32, 51);
SmitesMightyHammer.RequiredLevel.set(3);
SmitesMightyHammer.Quality.WHITE.set();
SmitesMightyHammer.Stats.clearAll();
SmitesMightyHammer.Stats.addStamina(18);
SmitesMightyHammer.Stats.addStrength(27);
export let CookiesTenderizer = std.Items.create(
    MODNAME,
    "cookiestenderizer",
    5197
);
CookiesTenderizer.Name.enGB.set("Meat Mallet");
CookiesTenderizer.Damage.clearAll();
CookiesTenderizer.Damage.addPhysical(20, 40);
CookiesTenderizer.RequiredLevel.set(3);
CookiesTenderizer.Quality.WHITE.set();
CookiesTenderizer.Stats.clearAll();
CookiesTenderizer.Stats.addCritRating(40);
CookiesTenderizer.Stats.addHasteRating(40);
CookiesTenderizer.Stats.addHitRating(40);
export let CookiesStirringRod = std.Items.create(
    MODNAME,
    "cookiesstirringrod",
    5198
);
CookiesStirringRod.Name.enGB.set("Twisted Wand");
CookiesStirringRod.RequiredLevel.set(3);
CookiesStirringRod.Quality.WHITE.set();
CookiesStirringRod.Stats.clearAll();
CookiesStirringRod.Stats.addStamina(7);
CookiesStirringRod.Stats.addSpirit(8);
CookiesStirringRod.Stats.addIntellect(4);
CookiesStirringRod.Stats.addSpellPower(12);
export let IronKnuckles = std.Items.create(MODNAME, "ironknuckles", 2942);
IronKnuckles.Name.enGB.set("Grandma's Brass Knuckles");
IronKnuckles.Damage.clearAll();
IronKnuckles.Damage.addPhysical(25, 55);
IronKnuckles.RequiredLevel.set(3);
IronKnuckles.Quality.WHITE.set();
IronKnuckles.Stats.clearAll();
IronKnuckles.Stats.addStamina(5);
IronKnuckles.Stats.addStrength(28);
IronKnuckles.Stats.addAgility(14);
IronKnuckles.Stats.addCritRating(50);
IronKnuckles.Stats.addHitRating(-10);
export let PrisonShank = std.Items.create(MODNAME, "prisonshank", 2941);
PrisonShank.Name.enGB.set("Rusting Shank");
PrisonShank.Damage.clearAll();
PrisonShank.Damage.addPhysical(17, 42);
PrisonShank.RequiredLevel.set(3);
PrisonShank.Quality.WHITE.set();
PrisonShank.Stats.clearAll();
PrisonShank.Stats.addHitRating(29);
PrisonShank.Stats.addAttackPower(40);
export let KamsWalkingStick = std.Items.create(
    MODNAME,
    "kamswalkingstick",
    2280
);
KamsWalkingStick.Name.enGB.set("Twisted Walking Stick");
KamsWalkingStick.Damage.clearAll();
KamsWalkingStick.Damage.addPhysical(30, 37);
KamsWalkingStick.RequiredLevel.set(3);
KamsWalkingStick.Quality.WHITE.set();
KamsWalkingStick.Stats.clearAll();
KamsWalkingStick.Stats.addStamina(17);
KamsWalkingStick.Stats.addAgility(14);
KamsWalkingStick.Stats.addHitRating(18);
KamsWalkingStick.Stats.addAttackPower(32);
export let SerpentsKiss = std.Items.create(MODNAME, "serpentskiss", 5426);
SerpentsKiss.Name.enGB.set("Petrified Cobra");
SerpentsKiss.Damage.clearAll();
SerpentsKiss.Damage.addPhysical(17, 40);
SerpentsKiss.RequiredLevel.set(3);
SerpentsKiss.Quality.WHITE.set();
SerpentsKiss.Stats.clearAll();
SerpentsKiss.Stats.addStamina(7);
SerpentsKiss.Stats.addStrength(10);
SerpentsKiss.Stats.addAgility(10);
SerpentsKiss.Stats.addCritRating(22);
export let KreshsBack = std.Items.create(MODNAME, "kreshsback", 13245);
KreshsBack.Name.enGB.set("Turtle Shell");
KreshsBack.RequiredLevel.set(3);
KreshsBack.Quality.WHITE.set();
KreshsBack.Stats.clearAll();
KreshsBack.Stats.addStamina(23);
KreshsBack.Stats.addStrength(8);
KreshsBack.Stats.addCritRating(10);
export let WornTurtleShellShield = std.Items.create(
    MODNAME,
    "wornturtleshellshield",
    6447
);
WornTurtleShellShield.Name.enGB.set("Worn Turtle Shell");
WornTurtleShellShield.RequiredLevel.set(3);
WornTurtleShellShield.Quality.WHITE.set();
WornTurtleShellShield.Stats.clearAll();
WornTurtleShellShield.Stats.addStamina(23);
WornTurtleShellShield.Stats.addIntellect(8);
WornTurtleShellShield.Stats.addHasteRating(10);
export let SerpentsShoulders = std.Items.create(
    MODNAME,
    "serpentsshoulders",
    5404
);
SerpentsShoulders.Name.enGB.set("Gilded Leather Shoulders");
SerpentsShoulders.RequiredLevel.set(3);
SerpentsShoulders.Quality.GREEN.set();
SerpentsShoulders.Armor.set(55);
SerpentsShoulders.Stats.clearAll();
SerpentsShoulders.Stats.addStamina(17);
SerpentsShoulders.Stats.addStrength(8);
SerpentsShoulders.Stats.addAgility(8);
SerpentsShoulders.Stats.addCritRating(6);
SerpentsShoulders.Stats.addAttackPower(16);
export let BoahnsFang = std.Items.create(MODNAME, "boahnsfang", 5423);
BoahnsFang.Name.enGB.set("Venomtail Fang");
BoahnsFang.Damage.clearAll();
BoahnsFang.Damage.addPhysical(17, 44);
BoahnsFang.RequiredLevel.set(3);
BoahnsFang.Quality.WHITE.set();
BoahnsFang.Armor.set(0);
BoahnsFang.Stats.clearAll();
BoahnsFang.Stats.addStamina(6);
BoahnsFang.Stats.addStrength(9);
BoahnsFang.Stats.addAgility(9);
BoahnsFang.Stats.addIntellect(3);
BoahnsFang.Stats.addSpellPower(12);
BoahnsFang.Stats.addAttackPower(12);
export let ArmoroftheFang = std.Items.create(MODNAME, "armorofthefang", 6473);
ArmoroftheFang.Name.enGB.set("Gilded Leather Armor");
ArmoroftheFang.RequiredLevel.set(3);
ArmoroftheFang.Quality.GREEN.set();
ArmoroftheFang.Armor.set(79);
ArmoroftheFang.Stats.clearAll();
ArmoroftheFang.Stats.addStamina(23);
ArmoroftheFang.Stats.addStrength(10);
ArmoroftheFang.Stats.addAgility(10);
ArmoroftheFang.Stats.addCritRating(8);
ArmoroftheFang.Stats.addAttackPower(20);
export let LeggingsoftheFang = std.Items.create(
    MODNAME,
    "leggingsofthefang",
    10410
);
LeggingsoftheFang.Name.enGB.set("Gilded Leather Leggings");
LeggingsoftheFang.RequiredLevel.set(3);
LeggingsoftheFang.Quality.GREEN.set();
LeggingsoftheFang.Armor.set(65);
LeggingsoftheFang.Stats.clearAll();
LeggingsoftheFang.Stats.addStamina(20);
LeggingsoftheFang.Stats.addStrength(6);
LeggingsoftheFang.Stats.addAgility(6);
LeggingsoftheFang.Stats.addCritRating(12);
LeggingsoftheFang.Stats.addAttackPower(25);
export let FootpadsoftheFang = std.Items.create(
    MODNAME,
    "footpadsofthefang",
    10411
);
FootpadsoftheFang.Name.enGB.set("Gilded Leather Footpads");
FootpadsoftheFang.RequiredLevel.set(3);
FootpadsoftheFang.Quality.GREEN.set();
FootpadsoftheFang.Armor.set(51);
FootpadsoftheFang.Stats.clearAll();
FootpadsoftheFang.Stats.addStamina(14);
FootpadsoftheFang.Stats.addStrength(6);
FootpadsoftheFang.Stats.addAgility(4);
FootpadsoftheFang.Stats.addCritRating(9);
FootpadsoftheFang.Stats.addAttackPower(15);
export let BeltoftheFang = std.Items.create(MODNAME, "beltofthefang", 10412);
BeltoftheFang.Name.enGB.set("Gilded Leather Belt");
BeltoftheFang.RequiredLevel.set(3);
BeltoftheFang.Quality.GREEN.set();
BeltoftheFang.Armor.set(27);
BeltoftheFang.Stats.clearAll();
BeltoftheFang.Stats.addStamina(12);
BeltoftheFang.Stats.addStrength(5);
BeltoftheFang.Stats.addAgility(5);
BeltoftheFang.Stats.addCritRating(9);
BeltoftheFang.Stats.addAttackPower(14);
export let GlovesoftheFang = std.Items.create(
    MODNAME,
    "glovesofthefang",
    10413
);
GlovesoftheFang.Name.enGB.set("Gilded Leather Gloves");
GlovesoftheFang.RequiredLevel.set(3);
GlovesoftheFang.Quality.GREEN.set();
GlovesoftheFang.Armor.set(44);
GlovesoftheFang.Stats.clearAll();
GlovesoftheFang.Stats.addStamina(14);
GlovesoftheFang.Stats.addStrength(7);
GlovesoftheFang.Stats.addAgility(7);
GlovesoftheFang.Stats.addCritRating(11);
GlovesoftheFang.Stats.addAttackPower(17);
export let StaffofNobles = std.Items.create(MODNAME, "staffofnobles", 3902);
StaffofNobles.Name.enGB.set("Staff of Nobility");
StaffofNobles.Damage.clearAll();
StaffofNobles.Damage.addPhysical(21, 30);
StaffofNobles.RequiredLevel.set(3);
StaffofNobles.Quality.GREEN.set();
StaffofNobles.Armor.set(0);
StaffofNobles.Stats.clearAll();
StaffofNobles.Stats.addStamina(27);
StaffofNobles.Stats.addIntellect(27);
StaffofNobles.Stats.addHasteRating(44);
StaffofNobles.Stats.addSpellPower(60);
export let InfernalTricksterLeggings = std.Items.create(
    MODNAME,
    "infernaltricksterleggings",
    17754
);
InfernalTricksterLeggings.Name.enGB.set("Leggings of Darkness");
InfernalTricksterLeggings.RequiredLevel.set(4);
InfernalTricksterLeggings.Quality.GREEN.set();
InfernalTricksterLeggings.Armor.set(44);
InfernalTricksterLeggings.Stats.clearAll();
InfernalTricksterLeggings.Stats.addStamina(12);
InfernalTricksterLeggings.Stats.addSpirit(22);
InfernalTricksterLeggings.Stats.addHasteRating(16);
InfernalTricksterLeggings.Stats.addSpellPower(20);
export let PhytoskinSpaulders = std.Items.create(
    MODNAME,
    "phytoskinspaulders",
    17749
);
PhytoskinSpaulders.Name.enGB.set("Crystallized Shell Shoulderguards");
PhytoskinSpaulders.RequiredLevel.set(4);
PhytoskinSpaulders.Quality.GREEN.set();
PhytoskinSpaulders.Armor.set(68);
PhytoskinSpaulders.Stats.clearAll();
PhytoskinSpaulders.Stats.addStamina(16);
PhytoskinSpaulders.Stats.addAgility(12);
PhytoskinSpaulders.Stats.addCritRating(16);
PhytoskinSpaulders.Stats.addAttackPower(14);
export let BladeofEternalDarkness = std.Items.create(
    MODNAME,
    "bladeofeternaldarkness",
    17780
);
BladeofEternalDarkness.Name.enGB.set("Searing Blade");
BladeofEternalDarkness.Damage.clearAll();
BladeofEternalDarkness.Damage.addPhysical(21, 60);
BladeofEternalDarkness.RequiredLevel.set(4);
BladeofEternalDarkness.Quality.GREEN.set();
BladeofEternalDarkness.Armor.set(0);
BladeofEternalDarkness.Stats.clearAll();
BladeofEternalDarkness.Stats.addStamina(11);
BladeofEternalDarkness.Stats.addAgility(17);
BladeofEternalDarkness.Stats.addCritRating(16);
BladeofEternalDarkness.Stats.addHitRating(30);
BladeofEternalDarkness.Stats.addAttackPower(21);
export let GatorbiteAxe = std.Items.create(MODNAME, "gatorbiteaxe", 17780);
GatorbiteAxe.Name.enGB.set("Sawing Axe");
GatorbiteAxe.Damage.clearAll();
GatorbiteAxe.Damage.addPhysical(40, 48);
GatorbiteAxe.RequiredLevel.set(4);
GatorbiteAxe.Quality.GREEN.set();
GatorbiteAxe.Armor.set(0);
GatorbiteAxe.Stats.clearAll();
GatorbiteAxe.Stats.addStamina(13);
GatorbiteAxe.Stats.addStrength(6);
GatorbiteAxe.Stats.addAgility(9);
GatorbiteAxe.Stats.addCritRating(12);
GatorbiteAxe.Stats.addHitRating(16);
GatorbiteAxe.Stats.addAttackPower(9);
export let FrightskullShaft = std.Items.create(
    MODNAME,
    "frightskullshaft",
    17780
);
FrightskullShaft.Name.enGB.set("Frightwood Shaft");
FrightskullShaft.Damage.clearAll();
FrightskullShaft.Damage.addShadow(26, 47);
FrightskullShaft.RequiredLevel.set(4);
FrightskullShaft.Quality.GREEN.set();
FrightskullShaft.Armor.set(0);
FrightskullShaft.Stats.clearAll();
FrightskullShaft.Stats.addCritRating(22);
FrightskullShaft.Stats.addHasteRating(20);
FrightskullShaft.Stats.addHitRating(12);
FrightskullShaft.Stats.addSpellPower(16);
export let SkullforgeReaver = std.Items.create(
    MODNAME,
    "skullforgereaver",
    17780
);
SkullforgeReaver.Name.enGB.set("Glimmering Blade");
SkullforgeReaver.Damage.clearAll();
SkullforgeReaver.Damage.addPhysical(48, 60);
SkullforgeReaver.RequiredLevel.set(4);
SkullforgeReaver.Quality.GREEN.set();
SkullforgeReaver.Armor.set(0);
SkullforgeReaver.Stats.clearAll();
SkullforgeReaver.Stats.addAgility(24);
SkullforgeReaver.Stats.addCritRating(34);
SkullforgeReaver.Stats.addAttackPower(38);
export let RunebladeofBaronRivendare = std.Items.create(
    MODNAME,
    "runebladeofbaronrivendare",
    17780
);
RunebladeofBaronRivendare.Name.enGB.set("Jagged-Edged Blade");
RunebladeofBaronRivendare.Damage.clearAll();
RunebladeofBaronRivendare.Damage.addPhysical(60, 150);
RunebladeofBaronRivendare.RequiredLevel.set(4);
RunebladeofBaronRivendare.Quality.GREEN.set();
RunebladeofBaronRivendare.Armor.set(0);
RunebladeofBaronRivendare.Stats.clearAll();
RunebladeofBaronRivendare.Stats.addStamina(34);
RunebladeofBaronRivendare.Stats.addStrength(21);
RunebladeofBaronRivendare.Stats.addCritRating(14);
RunebladeofBaronRivendare.Stats.addAttackPower(108);
export let BladeoftheWretched = std.Items.create(
    MODNAME,
    "bladeofthewretched",
    17780
);
BladeoftheWretched.Name.enGB.set("Horizontal Blade");
BladeoftheWretched.Damage.clearAll();
BladeoftheWretched.Damage.addPhysical(40, 90);
BladeoftheWretched.RequiredLevel.set(4);
BladeoftheWretched.Quality.GREEN.set();
BladeoftheWretched.Armor.set(0);
BladeoftheWretched.Stats.clearAll();
BladeoftheWretched.Stats.addStamina(22);
BladeoftheWretched.Stats.addAgility(14);
BladeoftheWretched.Stats.addAttackPower(68);
export let FangoftheCrystalSpider = std.Items.create(
    MODNAME,
    "fangofthecrystalspider",
    13218
);
FangoftheCrystalSpider.Name.enGB.set("Dirty Blade");
FangoftheCrystalSpider.Damage.clearAll();
FangoftheCrystalSpider.Damage.addPhysical(30, 81);
FangoftheCrystalSpider.RequiredLevel.set(4);
FangoftheCrystalSpider.Quality.GREEN.set();
FangoftheCrystalSpider.Armor.set(0);
FangoftheCrystalSpider.Stats.clearAll();
FangoftheCrystalSpider.Stats.addStamina(26);
FangoftheCrystalSpider.Stats.addStrength(17);
FangoftheCrystalSpider.Stats.addCritRating(14);
FangoftheCrystalSpider.Stats.addHitRating(31);
FangoftheCrystalSpider.Stats.addAttackPower(48);
export let GoblinDragonGun = std.Items.create(
    MODNAME,
    "goblindragongun",
    13183
);
GoblinDragonGun.Name.enGB.set("Dragon's Mouth");
GoblinDragonGun.Damage.clearAll();
GoblinDragonGun.Damage.addPhysical(34, 60);
GoblinDragonGun.Damage.addFire(10, 22);
GoblinDragonGun.RequiredLevel.set(5);
GoblinDragonGun.Quality.BLUE.set();
GoblinDragonGun.Stats.clearAll();
GoblinDragonGun.Stats.addStamina(17);
GoblinDragonGun.Stats.addAgility(22);
GoblinDragonGun.Stats.addCritRating(41);
GoblinDragonGun.Stats.addAttackPower(47);
export let DarkwaterTalwar = std.Items.create(
    MODNAME,
    "darkwatertalwar",
    11121
);
DarkwaterTalwar.Name.enGB.set("Saber of the Darkest Waters");
DarkwaterTalwar.Damage.clearAll();
DarkwaterTalwar.Damage.addPhysical(41, 61);
DarkwaterTalwar.RequiredLevel.set(5);
DarkwaterTalwar.Quality.GREEN.set();
DarkwaterTalwar.Stats.clearAll();
DarkwaterTalwar.Stats.addStamina(23);
DarkwaterTalwar.Stats.addAgility(24);
DarkwaterTalwar.Stats.addCritRating(24);
DarkwaterTalwar.Stats.addAttackPower(28);
export let BiteofSerrakis = std.Items.create(MODNAME, "biteofserrakis", 6904);
BiteofSerrakis.Name.enGB.set("Sekarim's Biting Blade");
BiteofSerrakis.Damage.clearAll();
BiteofSerrakis.Damage.addPhysical(27, 33);
BiteofSerrakis.Damage.addPhysical(10, 19);
BiteofSerrakis.RequiredLevel.set(4);
BiteofSerrakis.Quality.GREEN.set();
BiteofSerrakis.Armor.set(0);
BiteofSerrakis.Stats.clearAll();
BiteofSerrakis.Stats.addStamina(13);
BiteofSerrakis.Stats.addStrength(24);
BiteofSerrakis.Stats.addCritRating(14);
export let Grimclaw = std.Items.create(MODNAME, "grimclaw", 1481);
Grimclaw.Name.enGB.set("Darkened Cleaver");
Grimclaw.Damage.clearAll();
Grimclaw.Damage.addPhysical(41, 90);
Grimclaw.RequiredLevel.set(4);
Grimclaw.Quality.GREEN.set();
Grimclaw.Armor.set(0);
Grimclaw.Stats.clearAll();
Grimclaw.Stats.addIntellect(18);
Grimclaw.Stats.addCritRating(14);
Grimclaw.Stats.addHasteRating(22);
Grimclaw.Stats.addSpellPower(41);
export let Shadowfang = std.Items.create(MODNAME, "shadowfang", 1482);
Shadowfang.Name.enGB.set("Darkblade");
Shadowfang.Damage.clearAll();
Shadowfang.Damage.addPhysical(41, 48);
Shadowfang.Damage.addShadow(9, 21);
Shadowfang.RequiredLevel.set(4);
Shadowfang.Quality.GREEN.set();
Shadowfang.Armor.set(0);
Shadowfang.Stats.clearAll();
Shadowfang.Stats.addStamina(23);
Shadowfang.Stats.addCritRating(24);
export let StrikeoftheHydra = std.Items.create(
    MODNAME,
    "strikeofthehydra",
    6909
);
StrikeoftheHydra.Name.enGB.set("Hydrolord's Blade");
StrikeoftheHydra.Damage.clearAll();
StrikeoftheHydra.Damage.addPhysical(41, 47);
StrikeoftheHydra.RequiredLevel.set(4);
StrikeoftheHydra.Quality.GREEN.set();
StrikeoftheHydra.Armor.set(0);
StrikeoftheHydra.Stats.clearAll();
StrikeoftheHydra.Stats.addStamina(23);
StrikeoftheHydra.Stats.addIntellect(30);
StrikeoftheHydra.Stats.addHasteRating(20);
StrikeoftheHydra.Stats.addSpellPower(50);
export let GalgannsFireblaster = std.Items.create(
    MODNAME,
    "galgannsfireblaster",
    9412
);
GalgannsFireblaster.Name.enGB.set("Blunder'buff'");
GalgannsFireblaster.Description.enGB.set(
    "So anyways, I just started blastin'!"
);
GalgannsFireblaster.Damage.clearAll();
GalgannsFireblaster.Damage.addPhysical(101, 130);
GalgannsFireblaster.RequiredLevel.set(5);
GalgannsFireblaster.Quality.GREEN.set();
GalgannsFireblaster.Armor.set(0);
GalgannsFireblaster.Stats.clearAll();
GalgannsFireblaster.Stats.addAgility(24);
GalgannsFireblaster.Stats.addCritRating(44);
GalgannsFireblaster.Stats.addAttackPower(48);
export let GalgannsFirehammer = std.Items.create(
    MODNAME,
    "galgannsfirehammer",
    9419
);
GalgannsFirehammer.Name.enGB.set("Blasting Smasher");
GalgannsFirehammer.Damage.clearAll();
GalgannsFirehammer.Damage.addPhysical(41, 90);
GalgannsFirehammer.RequiredLevel.set(4);
GalgannsFirehammer.Quality.GREEN.set();
GalgannsFirehammer.Armor.set(0);
GalgannsFirehammer.Stats.clearAll();
GalgannsFirehammer.Stats.addStamina(23);
GalgannsFirehammer.Stats.addStrength(20);
GalgannsFirehammer.Stats.addAgility(14);
GalgannsFirehammer.Stats.addHitRating(40);
export let RagingBerserkersHelm = std.Items.create(
    MODNAME,
    "ragingberserkershelm",
    7719
);
RagingBerserkersHelm.Name.enGB.set("Helmet of Anguish");
RagingBerserkersHelm.RequiredLevel.set(4);
RagingBerserkersHelm.Quality.GREEN.set();
RagingBerserkersHelm.Armor.set(60);
RagingBerserkersHelm.Stats.clearAll();
RagingBerserkersHelm.Stats.addStamina(23);
RagingBerserkersHelm.Stats.addSpirit(12);
RagingBerserkersHelm.Stats.addIntellect(20);
RagingBerserkersHelm.Stats.addHasteRating(14);
RagingBerserkersHelm.Stats.addSpellPower(19);
export let HerodsShoulder = std.Items.create(MODNAME, "herodsshoulder", 7718);
HerodsShoulder.Name.enGB.set("Shoulderguard of the Fallen Memory");
HerodsShoulder.RequiredLevel.set(4);
HerodsShoulder.Quality.GREEN.set();
HerodsShoulder.Armor.set(70);
HerodsShoulder.Stats.clearAll();
HerodsShoulder.Stats.addStamina(23);
HerodsShoulder.Stats.addStrength(10);
HerodsShoulder.Stats.addAgility(14);
HerodsShoulder.Stats.addAttackPower(48);
export let ScarletLeggings = std.Items.create(
    MODNAME,
    "scarletleggings",
    10330
);
ScarletLeggings.Name.enGB.set("Inquisitive Legguards");
ScarletLeggings.RequiredLevel.set(4);
ScarletLeggings.Quality.GREEN.set();
ScarletLeggings.Armor.set(63);
ScarletLeggings.Stats.clearAll();
ScarletLeggings.Stats.addStamina(23);
ScarletLeggings.Stats.addStrength(10);
ScarletLeggings.Stats.addAgility(14);
ScarletLeggings.Stats.addCritRating(14);
export let DeadmansHand = std.Items.create(MODNAME, "deadmanshand", 34227);
DeadmansHand.Name.enGB.set("Forgotten Wedding Ring");
DeadmansHand.RequiredLevel.set(4);
DeadmansHand.Quality.GREEN.set();
DeadmansHand.Armor.set(0);
DeadmansHand.Stats.clearAll();
DeadmansHand.Stats.addStamina(23);
DeadmansHand.Stats.addSpellPower(18);
DeadmansHand.Stats.addAttackPower(18);
export let RobeofDoan = std.Items.create(MODNAME, "robeofdoan", 7711);
RobeofDoan.Name.enGB.set("Arcanist's Gown");
RobeofDoan.RequiredLevel.set(4);
RobeofDoan.Quality.GREEN.set();
RobeofDoan.Armor.set(44);
RobeofDoan.Stats.clearAll();
RobeofDoan.Stats.addStamina(19);
RobeofDoan.Stats.addSpirit(14);
RobeofDoan.Stats.addIntellect(27);
RobeofDoan.Stats.addHasteRating(20);
RobeofDoan.Stats.addHitRating(20);
RobeofDoan.Stats.addSpellPower(44);
export let MantleofDoan = std.Items.create(MODNAME, "mantleofdoan", 7712);
MantleofDoan.Name.enGB.set("Arcanist's Mantle");
RobeofDoan.RequiredLevel.set(4);
RobeofDoan.Quality.GREEN.set();
RobeofDoan.Armor.set(37);
RobeofDoan.Stats.clearAll();
RobeofDoan.Stats.addStamina(21);
RobeofDoan.Stats.addSpirit(12);
RobeofDoan.Stats.addIntellect(23);
RobeofDoan.Stats.addHasteRating(18);
RobeofDoan.Stats.addHitRating(17);
RobeofDoan.Stats.addSpellPower(49);
export let SavageGladiatorChain = std.Items.create(
    MODNAME,
    "savagegladiatorchain",
    11726
);
SavageGladiatorChain.Name.enGB.set("Tarnished Chain");
SavageGladiatorChain.RequiredLevel.set(4);
SavageGladiatorChain.Quality.GREEN.set();
SavageGladiatorChain.Armor.set(94);
SavageGladiatorChain.Stats.clearAll();
SavageGladiatorChain.Stats.addStamina(33);
SavageGladiatorChain.Stats.addStrength(20);
SavageGladiatorChain.Stats.addCritRating(14);
export let SavageGladiatorLeggings = std.Items.create(
    MODNAME,
    "savagegladiatorleggings",
    11728
);
SavageGladiatorLeggings.Name.enGB.set("Tarnished Leggings of the Distrought");
SavageGladiatorLeggings.RequiredLevel.set(4);
SavageGladiatorLeggings.Quality.GREEN.set();
SavageGladiatorLeggings.Armor.set(104);
SavageGladiatorLeggings.Stats.clearAll();
SavageGladiatorLeggings.Stats.addStamina(37);
SavageGladiatorLeggings.Stats.addStrength(22);
SavageGladiatorLeggings.Stats.addCritRating(21);
export let SavageGladiatorHelm = std.Items.create(
    MODNAME,
    "savagegladiatorhelm",
    11729
);
SavageGladiatorHelm.Name.enGB.set("Tarnished Helmet of Persecution");
SavageGladiatorHelm.RequiredLevel.set(4);
SavageGladiatorHelm.Quality.GREEN.set();
SavageGladiatorHelm.Armor.set(76);
SavageGladiatorHelm.Stats.clearAll();
SavageGladiatorHelm.Stats.addStamina(24);
SavageGladiatorHelm.Stats.addStrength(16);
SavageGladiatorHelm.Stats.addCritRating(12);
SavageGladiatorHelm.Stats.addHitRating(20);
export let SavageGladiatorGrips = std.Items.create(
    MODNAME,
    "savagegladiatorgrips",
    11730
);
SavageGladiatorGrips.Name.enGB.set("Tarnished Gauntlets of Salvation");
SavageGladiatorGrips.RequiredLevel.set(4);
SavageGladiatorGrips.Quality.GREEN.set();
SavageGladiatorGrips.Armor.set(66);
SavageGladiatorGrips.Stats.clearAll();
SavageGladiatorGrips.Stats.addStamina(21);
SavageGladiatorGrips.Stats.addStrength(14);
SavageGladiatorGrips.Stats.addCritRating(19);
SavageGladiatorGrips.Stats.addAttackPower(28);
export let SavageGladiatorGreaves = std.Items.create(
    MODNAME,
    "savagegladiatorgreaves",
    11731
);
SavageGladiatorGreaves.Name.enGB.set("Tarnished Boots of Damnation");
SavageGladiatorGreaves.RequiredLevel.set(4);
SavageGladiatorGreaves.Quality.GREEN.set();
SavageGladiatorGreaves.Armor.set(71);
SavageGladiatorGreaves.Stats.clearAll();
SavageGladiatorGreaves.Stats.addStamina(24);
SavageGladiatorGreaves.Stats.addStrength(30);
SavageGladiatorGreaves.Stats.addCritRating(7);
export let DarkIronPulverizer = std.Items.create(
    MODNAME,
    "darkironpulverizer",
    11608
);
DarkIronPulverizer.Name.enGB.set("The Destroyer");
DarkIronPulverizer.Damage.clearAll();
DarkIronPulverizer.Damage.addPhysical(101, 122);
DarkIronPulverizer.RequiredLevel.set(4);
DarkIronPulverizer.Quality.BLUE.set();
DarkIronPulverizer.Armor.set(0);
DarkIronPulverizer.Stats.clearAll();
DarkIronPulverizer.Stats.addStamina(43);
DarkIronPulverizer.Stats.addStrength(20);
DarkIronPulverizer.Stats.addAgility(24);
DarkIronPulverizer.Stats.addCritRating(34);
DarkIronPulverizer.Stats.addHasteRating(10);
DarkIronPulverizer.Stats.addAttackPower(88);
export let IronweaveRobe = std.Items.create(MODNAME, "ironweaverobe", 22301);
IronweaveRobe.Name.enGB.set("Robe of Iron Will");
IronweaveRobe.RequiredLevel.set(4);
IronweaveRobe.Quality.BLUE.set();
IronweaveRobe.Armor.set(55);
IronweaveRobe.Stats.clearAll();
IronweaveRobe.Stats.addStamina(15);
IronweaveRobe.Stats.addSpirit(8);
IronweaveRobe.Stats.addIntellect(12);
IronweaveRobe.Stats.addCritRating(9);
IronweaveRobe.Stats.addHasteRating(12);
IronweaveRobe.Stats.addSpellPower(24);
IronweaveRobe.ClassMask.set(-1);
export let IronweaveCowl = std.Items.create(MODNAME, "ironweavecowl", 22302);
IronweaveCowl.Name.enGB.set("Cowl of Iron Will");
IronweaveCowl.RequiredLevel.set(4);
IronweaveCowl.Quality.BLUE.set();
IronweaveCowl.Armor.set(42);
IronweaveCowl.Stats.clearAll();
IronweaveCowl.Stats.addStamina(12);
IronweaveCowl.Stats.addSpirit(6);
IronweaveCowl.Stats.addIntellect(9);
IronweaveCowl.Stats.addCritRating(7);
IronweaveCowl.Stats.addHasteRating(15);
IronweaveCowl.Stats.addSpellPower(18);
IronweaveCowl.ClassMask.set(-1);
export let IronweavePants = std.Items.create(MODNAME, "ironweavepants", 22303);
IronweavePants.Name.enGB.set("Leggings of Iron Will");
IronweavePants.RequiredLevel.set(4);
IronweavePants.Quality.BLUE.set();
IronweavePants.Armor.set(72);
IronweavePants.Stats.clearAll();
IronweavePants.Stats.addStamina(17);
IronweavePants.Stats.addSpirit(10);
IronweavePants.Stats.addIntellect(15);
IronweavePants.Stats.addCritRating(13);
IronweavePants.Stats.addHasteRating(17);
IronweavePants.Stats.addSpellPower(31);
IronweavePants.ClassMask.set(-1);
export let IronweaveGloves = std.Items.create(
    MODNAME,
    "ironweavegloves",
    22304
);
IronweaveGloves.Name.enGB.set("Gloves of Iron Will");
IronweaveGloves.RequiredLevel.set(4);
IronweaveGloves.Quality.BLUE.set();
IronweaveGloves.Armor.set(27);
IronweaveGloves.Stats.clearAll();
IronweaveGloves.Stats.addStamina(9);
IronweaveGloves.Stats.addSpirit(3);
IronweaveGloves.Stats.addIntellect(7);
IronweaveGloves.Stats.addCritRating(4);
IronweaveGloves.Stats.addHasteRating(9);
IronweaveGloves.Stats.addSpellPower(22);
IronweaveGloves.ClassMask.set(-1);
export let IronweaveMantle = std.Items.create(
    MODNAME,
    "ironweavemantle",
    22305
);
IronweaveMantle.Name.enGB.set("Mantle of Iron Will");
IronweaveMantle.RequiredLevel.set(4);
IronweaveMantle.Quality.BLUE.set();
IronweaveMantle.Armor.set(44);
IronweaveMantle.Stats.clearAll();
IronweaveMantle.Stats.addStamina(17);
IronweaveMantle.Stats.addSpirit(4);
IronweaveMantle.Stats.addIntellect(21);
IronweaveMantle.Stats.addCritRating(15);
IronweaveMantle.Stats.addHasteRating(5);
IronweaveMantle.Stats.addSpellPower(32);
IronweaveMantle.ClassMask.set(-1);
export let IronweaveBelt = std.Items.create(MODNAME, "ironweavebelt", 22306);
IronweaveBelt.Name.enGB.set("Belt of Iron Will");
IronweaveBelt.RequiredLevel.set(4);
IronweaveBelt.Quality.BLUE.set();
IronweaveBelt.Armor.set(22);
IronweaveBelt.Stats.clearAll();
IronweaveBelt.Stats.addStamina(12);
IronweaveBelt.Stats.addSpirit(4);
IronweaveBelt.Stats.addIntellect(8);
IronweaveBelt.Stats.addCritRating(16);
IronweaveBelt.Stats.addHasteRating(5);
IronweaveBelt.Stats.addSpellPower(18);
IronweaveBelt.ClassMask.set(-1);
export let IronweaveBoots = std.Items.create(MODNAME, "ironweaveboots", 22311);
IronweaveBoots.Name.enGB.set("Boots of Iron Will");
IronweaveBoots.RequiredLevel.set(4);
IronweaveBoots.Quality.BLUE.set();
IronweaveBoots.Armor.set(33);
IronweaveBoots.Stats.clearAll();
IronweaveBoots.Stats.addStamina(12);
IronweaveBoots.Stats.addSpirit(12);
IronweaveBoots.Stats.addIntellect(17);
IronweaveBoots.Stats.addCritRating(4);
IronweaveBoots.Stats.addHasteRating(4);
IronweaveBoots.Stats.addSpellPower(19);
IronweaveBoots.ClassMask.set(-1);
export let IronweaveBracers = std.Items.create(
    MODNAME,
    "ironweavebracers",
    22313
);
IronweaveBracers.Name.enGB.set("Bracers of Iron Will");
IronweaveBracers.RequiredLevel.set(4);
IronweaveBracers.Quality.BLUE.set();
IronweaveBracers.Armor.set(27);
IronweaveBracers.Stats.clearAll();
IronweaveBracers.Stats.addStamina(9);
IronweaveBracers.Stats.addSpirit(14);
IronweaveBracers.Stats.addIntellect(27);
IronweaveBracers.Stats.addCritRating(22);
IronweaveBracers.Stats.addHasteRating(6);
IronweaveBracers.Stats.addSpellPower(14);
IronweaveBracers.ClassMask.set(-1);
export let WraithScythe = std.Items.create(MODNAME, "wraithscythe", 11920);
WraithScythe.Name.enGB.set("Harvester's Scythe");
WraithScythe.Damage.clearAll();
WraithScythe.Damage.addPhysical(61, 88);
WraithScythe.RequiredLevel.set(5);
WraithScythe.Quality.GREEN.set();
WraithScythe.Armor.set(0);
WraithScythe.Stats.clearAll();
WraithScythe.Stats.addStamina(23);
WraithScythe.Stats.addStrength(10);
WraithScythe.Stats.addCritRating(14);
WraithScythe.Stats.addAttackPower(18);
export let ForceofWill = std.Items.create(MODNAME, "forceofwill", 11810);
ForceofWill.Name.enGB.set("Prejudice");
ForceofWill.RequiredLevel.set(5);
ForceofWill.Quality.GREEN.set();
ForceofWill.Armor.set(24);
ForceofWill.Stats.clearAll();
ForceofWill.Stats.addStamina(8);
ForceofWill.Stats.addHasteRating(16);
ForceofWill.Stats.addHitRating(21);
export let LordGeneralsSword = std.Items.create(
    MODNAME,
    "lordgeneralssword",
    11817
);
LordGeneralsSword.Name.enGB.set("Divinity");
LordGeneralsSword.Damage.clearAll();
LordGeneralsSword.Damage.addPhysical(71, 99);
LordGeneralsSword.RequiredLevel.set(4);
LordGeneralsSword.Quality.BLUE.set();
LordGeneralsSword.Stats.clearAll();
LordGeneralsSword.Stats.addStrength(30);
LordGeneralsSword.Stats.addAgility(34);
LordGeneralsSword.Stats.addHasteRating(12);
LordGeneralsSword.Stats.addHitRating(28);
export let Naglering = std.Items.create(MODNAME, "naglering", 11669);
Naglering.Name.enGB.set("Glacial Band");
Naglering.RequiredLevel.set(4);
Naglering.Quality.GREEN.set();
Naglering.Armor.set(12);
Naglering.Stats.clearAll();
Naglering.Stats.addStamina(8);
Naglering.Stats.addStrength(8);
Naglering.Stats.addAgility(8);
Naglering.Stats.addIntellect(8);
export let FlameWrath = std.Items.create(MODNAME, "flamewrath", 11809);
FlameWrath.Name.enGB.set("Hells Fury");
FlameWrath.Damage.clearAll();
FlameWrath.Damage.addPhysical(1, 140);
FlameWrath.RequiredLevel.set(4);
FlameWrath.Quality.BLUE.set();
FlameWrath.Armor.set(0);
FlameWrath.Stats.clearAll();
FlameWrath.Stats.addCritRating(50);
FlameWrath.Stats.addHitRating(50);
export let BurstofKnowledge = std.Items.create(
    MODNAME,
    "burstofknowledge",
    11832
);
BurstofKnowledge.Quality.BLUE.set();
BurstofKnowledge.RequiredLevel.set(3);
export let CircleofFlame = std.Items.create(MODNAME, "circleofflame", 11808);
CircleofFlame.Name.enGB.set("Crown of Knowledge");
CircleofFlame.RequiredLevel.set(5);
CircleofFlame.Quality.GREEN.set();
CircleofFlame.Armor.set(0);
CircleofFlame.Stats.clearAll();
CircleofFlame.Stats.addStamina(26);
CircleofFlame.Stats.addIntellect(30);
CircleofFlame.Stats.addHasteRating(14);
CircleofFlame.Stats.addSpellPower(29);
export let MongooseSword = std.Items.create(MODNAME, "mongoosesword", 11817);
MongooseSword.Name.enGB.set("Blurred Sword");
MongooseSword.Damage.clearAll();
MongooseSword.Damage.addPhysical(62, 101);
MongooseSword.RequiredLevel.set(6);
MongooseSword.Quality.BLUE.set();
MongooseSword.Armor.set(0);
MongooseSword.Stats.clearAll();
MongooseSword.Stats.addHasteRating(24);
MongooseSword.Stats.addAttackPower(60);
MongooseSword.Spells.clearAll();
MongooseSword.Spells.addMod((val) => {
    val.Spell.set(28093);
    val.Trigger.set(2);
});
export let DazzlingLongsword = std.Items.create(
    MODNAME,
    "dazzlinglongsword",
    869
);
DazzlingLongsword.Name.enGB.set("Golden Blade");
DazzlingLongsword.Damage.clearAll();
DazzlingLongsword.Damage.addPhysical(41, 105);
DazzlingLongsword.RequiredLevel.set(4);
DazzlingLongsword.Quality.BLUE.set();
DazzlingLongsword.Armor.set(0);
DazzlingLongsword.Stats.clearAll();
DazzlingLongsword.Stats.addStamina(65);
DazzlingLongsword.Stats.addStrength(18);
DazzlingLongsword.Stats.addDodgeRating(25);
DazzlingLongsword.Stats.addParryRating(25);
DazzlingLongsword.Stats.addDefenseSkillRating(25);
export let Nightblade = std.Items.create(MODNAME, "nightblade", 1982);
Nightblade.Name.enGB.set("Shadowblade");
Nightblade.Damage.clearAll();
Nightblade.Damage.addPhysical(111, 127);
Nightblade.RequiredLevel.set(6);
Nightblade.Quality.BLUE.set();
Nightblade.Armor.set(0);
Nightblade.Stats.clearAll();
Nightblade.Stats.addStamina(33);
Nightblade.Stats.addStrength(0);
Nightblade.Stats.addAgility(34);
Nightblade.Stats.addHitRating(50);
export let FieryWarAxe = std.Items.create(MODNAME, "fierywaraxe", 870);
FieryWarAxe.Name.enGB.set("Cauterizing Greataxe");
FieryWarAxe.Damage.clearAll();
FieryWarAxe.Damage.addPhysical(68, 97);
FieryWarAxe.Damage.addFire(24, 78);
FieryWarAxe.RequiredLevel.set(5);
FieryWarAxe.Quality.BLUE.set();
FieryWarAxe.Stats.clearAll();
FieryWarAxe.Stats.addStrength(60);
export let ArdentCustodian = std.Items.create(MODNAME, "ardentcustodian", 868);
ArdentCustodian.Name.enGB.set("Reverence");
ArdentCustodian.Damage.clearAll();
ArdentCustodian.Damage.addPhysical(12, 34);
ArdentCustodian.RequiredLevel.set(5);
ArdentCustodian.Quality.BLUE.set();
ArdentCustodian.Stats.clearAll();
ArdentCustodian.Stats.addStamina(23);
ArdentCustodian.Stats.addSpirit(27);
ArdentCustodian.Stats.addIntellect(30);
ArdentCustodian.Stats.addSpellPower(40);
export let StaffofJordan = std.Items.create(MODNAME, "staffofjordan", 873);
StaffofJordan.Name.enGB.set("Enchantment Rod");
StaffofJordan.Damage.clearAll();
StaffofJordan.Damage.addPhysical(41, 60);
StaffofJordan.RequiredLevel.set(5);
StaffofJordan.Quality.BLUE.set();
StaffofJordan.Stats.clearAll();
StaffofJordan.Stats.addStamina(63);
StaffofJordan.Stats.addIntellect(40);
StaffofJordan.Stats.addSpellPower(100);
export let TheGreenTower = std.Items.create(MODNAME, "thegreentower", 1204);
TheGreenTower.Name.enGB.set("Ancient Guardsman's Shield");
TheGreenTower.RequiredLevel.set(5);
TheGreenTower.Quality.BLUE.set();
TheGreenTower.Armor.set(250);
TheGreenTower.Stats.clearAll();
TheGreenTower.Stats.addStamina(63);
TheGreenTower.Stats.addBlockRating(35);
TheGreenTower.Stats.addDodgeRating(27);
export let BowofSearingArrows = std.Items.create(
    MODNAME,
    "bowofsearingarrows",
    2825
);
BowofSearingArrows.Name.enGB.set("Infernal Longbow");
BowofSearingArrows.Damage.clearAll();
BowofSearingArrows.Damage.addPhysical(64, 113);
BowofSearingArrows.RequiredLevel.set(5);
BowofSearingArrows.Quality.BLUE.set();
BowofSearingArrows.Armor.set(0);
BowofSearingArrows.Stats.clearAll();
BowofSearingArrows.Stats.addStamina(14);
BowofSearingArrows.Stats.addAgility(23);
BowofSearingArrows.Stats.addCritRating(70);
BowofSearingArrows.Stats.addAttackPower(37);
export let UnderworldBand = std.Items.create(MODNAME, "underworldband", 1980);
UnderworldBand.Name.enGB.set("Thorn Band");
UnderworldBand.RequiredLevel.set(5);
UnderworldBand.Quality.BLUE.set();
UnderworldBand.Armor.set(23);
UnderworldBand.Stats.clearAll();
UnderworldBand.Stats.addStamina(11);
UnderworldBand.Stats.addCritRating(23);
UnderworldBand.Stats.addHitRating(19);
export let GutRipper = std.Items.create(MODNAME, "gutripper", 2164);
GutRipper.Name.enGB.set("Deadblade");
GutRipper.Damage.clearAll();
GutRipper.Damage.addPhysical(36, 54);
GutRipper.RequiredLevel.set(5);
GutRipper.Quality.BLUE.set();
GutRipper.Armor.set(0);
GutRipper.Stats.clearAll();
GutRipper.Stats.addStamina(23);
GutRipper.Stats.addAgility(39);
GutRipper.Stats.addCritRating(16);
GutRipper.Stats.addHitRating(23);
GutRipper.Stats.addAttackPower(68);
export let Ironfoe = std.Items.create(MODNAME, "ironfoe", 11684);
Ironfoe.Name.enGB.set("Crackling Mace");
Ironfoe.Damage.clearAll();
Ironfoe.Damage.addPhysical(41, 62);
Ironfoe.RequiredLevel.set(5);
Ironfoe.Quality.BLUE.set();
Ironfoe.Armor.set(0);
Ironfoe.Stats.clearAll();
Ironfoe.Stats.addStamina(33);
Ironfoe.Stats.addSpirit(24);
Ironfoe.Stats.addHasteRating(20);
Ironfoe.Stats.addSpellPower(40);
export let EskhandarsRightClaw = std.Items.create(
    MODNAME,
    "eskhandarsrightclaw",
    18203
);
EskhandarsRightClaw.Name.enGB.set("Grut");
EskhandarsRightClaw.Damage.clearAll();
EskhandarsRightClaw.Damage.addPhysical(68, 91);
EskhandarsRightClaw.RequiredLevel.set(5);
EskhandarsRightClaw.Quality.BLUE.set();
EskhandarsRightClaw.Armor.set(0);
EskhandarsRightClaw.Stats.clearAll();
EskhandarsRightClaw.Stats.addStamina(37);
EskhandarsRightClaw.Stats.addStrength(14);
EskhandarsRightClaw.Stats.addAgility(14);
EskhandarsRightClaw.Stats.addAttackPower(34);
export let EskhandarsLeftClaw = std.Items.create(
    MODNAME,
    "eskhandarsleftclaw",
    18202
);
EskhandarsLeftClaw.Name.enGB.set("Turgat");
EskhandarsLeftClaw.Damage.clearAll();
EskhandarsLeftClaw.Damage.addPhysical(41, 119);
EskhandarsLeftClaw.RequiredLevel.set(5);
EskhandarsLeftClaw.Quality.BLUE.set();
EskhandarsLeftClaw.Armor.set(0);
EskhandarsLeftClaw.Stats.clearAll();
EskhandarsLeftClaw.Stats.addStamina(29);
EskhandarsLeftClaw.Stats.addAgility(17);
EskhandarsLeftClaw.Stats.addCritRating(17);
EskhandarsLeftClaw.Stats.addAttackPower(37);
export let FineLeatherBoots = std.Items.create(
    MODNAME,
    "fineleatherboots",
    2307
);
FineLeatherBoots.Quality.GREEN.set();
FineLeatherBoots.RequiredLevel.set(3);
export let FineLeatherCloak = std.Items.create(
    MODNAME,
    "fineleathercloak",
    2308
);
FineLeatherCloak.Quality.GREEN.set();
FineLeatherCloak.RequiredLevel.set(3);
export let FineLeatherGloves = std.Items.create(
    MODNAME,
    "fineleathergloves",
    2312
);
FineLeatherGloves.Quality.GREEN.set();
FineLeatherGloves.RequiredLevel.set(3);
export let FineLeatherTunic = std.Items.create(
    MODNAME,
    "fineleathertunic",
    4243
);
FineLeatherTunic.Quality.GREEN.set();
FineLeatherTunic.RequiredLevel.set(3);
export let FineLeatherBelt = std.Items.create(MODNAME, "fineleatherbelt", 4246);
FineLeatherBelt.Quality.GREEN.set();
FineLeatherBelt.RequiredLevel.set(3);
export let EmbossedLeatherVest = std.Items.create(
    MODNAME,
    "embossedleathervest",
    2300
);
EmbossedLeatherVest.Quality.GREEN.set();
EmbossedLeatherVest.RequiredLevel.set(3);
export let EmbossedLeatherBoots = std.Items.create(
    MODNAME,
    "embossedleatherboots",
    2309
);
EmbossedLeatherBoots.Quality.GREEN.set();
EmbossedLeatherBoots.RequiredLevel.set(3);
export let EmbossedLeatherCloak = std.Items.create(
    MODNAME,
    "embossedleathercloak",
    2310
);
EmbossedLeatherCloak.Quality.GREEN.set();
EmbossedLeatherCloak.RequiredLevel.set(3);
export let EmbossedLeatherGloves = std.Items.create(
    MODNAME,
    "embossedleathergloves",
    4239
);
EmbossedLeatherGloves.Quality.GREEN.set();
EmbossedLeatherGloves.RequiredLevel.set(3);
export let EmbossedLeatherPants = std.Items.create(
    MODNAME,
    "embossedleatherpants",
    4242
);
EmbossedLeatherPants.Quality.GREEN.set();
EmbossedLeatherPants.RequiredLevel.set(3);
export let AzureSilkGloves = std.Items.create(MODNAME, "azuresilkgloves", 4319);
AzureSilkGloves.Quality.GREEN.set();
AzureSilkGloves.RequiredLevel.set(3);
export let AzureSilkVest = std.Items.create(MODNAME, "azuresilkvest", 4324);
AzureSilkVest.Quality.GREEN.set();
AzureSilkVest.RequiredLevel.set(3);
export let AzureSilkPants = std.Items.create(MODNAME, "azuresilkpants", 7046);
AzureSilkPants.Quality.GREEN.set();
AzureSilkPants.RequiredLevel.set(3);
export let AzureSilkHood = std.Items.create(MODNAME, "azuresilkhood", 7048);
AzureSilkHood.Quality.GREEN.set();
AzureSilkHood.RequiredLevel.set(3);
export let AzureSilkBelt = std.Items.create(MODNAME, "azuresilkbelt", 7052);
AzureSilkBelt.Quality.GREEN.set();
AzureSilkBelt.RequiredLevel.set(3);
export let AzureSilkCloak = std.Items.create(MODNAME, "azuresilkcloak", 7053);
AzureSilkCloak.Quality.GREEN.set();
AzureSilkCloak.RequiredLevel.set(3);
export let CrimsonSilkBelt = std.Items.create(MODNAME, "crimsonsilkbelt", 7055);
CrimsonSilkBelt.Quality.GREEN.set();
CrimsonSilkBelt.RequiredLevel.set(3);
export let CrimsonSilkCloak = std.Items.create(
    MODNAME,
    "crimsonsilkcloak",
    7056
);
CrimsonSilkCloak.Quality.GREEN.set();
CrimsonSilkCloak.RequiredLevel.set(3);
export let CrimsonSilkVest = std.Items.create(MODNAME, "crimsonsilkvest", 7058);
CrimsonSilkVest.Quality.GREEN.set();
CrimsonSilkVest.RequiredLevel.set(3);
export let CrimsonSilkShoulders = std.Items.create(
    MODNAME,
    "crimsonsilkshoulders",
    7059
);
CrimsonSilkShoulders.Quality.GREEN.set();
CrimsonSilkShoulders.RequiredLevel.set(3);
export let CrimsonSilkPantaloons = std.Items.create(
    MODNAME,
    "crimsonsilkpantaloons",
    7062
);
CrimsonSilkPantaloons.Quality.GREEN.set();
CrimsonSilkPantaloons.RequiredLevel.set(3);
export let CrimsonSilkRobe = std.Items.create(MODNAME, "crimsonsilkrobe", 7063);
CrimsonSilkRobe.Quality.GREEN.set();
CrimsonSilkRobe.RequiredLevel.set(3);
export let CrimsonSilkGloves = std.Items.create(
    MODNAME,
    "crimsonsilkgloves",
    7064
);
CrimsonSilkGloves.Quality.GREEN.set();
CrimsonSilkGloves.RequiredLevel.set(3);
export let SilveredBronzeBreastplate = std.Items.create(
    MODNAME,
    "silveredbronzebreastplate",
    2869
);
SilveredBronzeBreastplate.Quality.GREEN.set();
SilveredBronzeBreastplate.RequiredLevel.set(3);
export let SilveredBronzeShoulders = std.Items.create(
    MODNAME,
    "silveredBronzeshoulders",
    3481
);
SilveredBronzeShoulders.Quality.GREEN.set();
SilveredBronzeShoulders.RequiredLevel.set(3);
export let SilveredBronzeBoots = std.Items.create(
    MODNAME,
    "silveredbronzeboots",
    3482
);
SilveredBronzeBoots.Quality.GREEN.set();
SilveredBronzeBoots.RequiredLevel.set(3);
export let SilveredBronzeGauntlets = std.Items.create(
    MODNAME,
    "silveredbronzegauntlets",
    3483
);
SilveredBronzeGauntlets.Quality.GREEN.set();
SilveredBronzeGauntlets.RequiredLevel.set(3);
export let BarbaricIronShoulders = std.Items.create(
    MODNAME,
    "barbaricironshoulders",
    7913
);
BarbaricIronShoulders.Quality.GREEN.set();
BarbaricIronShoulders.RequiredLevel.set(3);
export let BarbaricIronBreastplate = std.Items.create(
    MODNAME,
    "barbaricironbreastplate",
    7914
);
BarbaricIronBreastplate.Quality.GREEN.set();
BarbaricIronBreastplate.RequiredLevel.set(3);
export let BarbaricIronHelm = std.Items.create(
    MODNAME,
    "barbaricironhelm",
    7915
);
BarbaricIronHelm.Quality.GREEN.set();
BarbaricIronHelm.RequiredLevel.set(3);
export let BarbaricIronBoots = std.Items.create(
    MODNAME,
    "barbaricironboots",
    7916
);
BarbaricIronBoots.Quality.GREEN.set();
BarbaricIronBoots.RequiredLevel.set(3);
export let BarbaricIronGloves = std.Items.create(
    MODNAME,
    "barbaricirongloves",
    7917
);
BarbaricIronGloves.Quality.GREEN.set();
BarbaricIronGloves.RequiredLevel.set(3);
export let MinorManaPotion = std.Items.create(MODNAME, "minormanapotion", 2455);
MinorManaPotion.Quality.WHITE.set();
export let MinorHealingPotion = std.Items.create(
    MODNAME,
    "minorhealingpotion",
    118
);
MinorHealingPotion.Quality.WHITE.set();
export let MinorRejuvenationPotion = std.Items.create(
    MODNAME,
    "minorrejuvenationpotion",
    2456
);
MinorRejuvenationPotion.Quality.WHITE.set();
export let DiscoloredHealingPotion = std.Items.create(
    MODNAME,
    "discoloredhealingpotion",
    4596
);
DiscoloredHealingPotion.Quality.WHITE.set();
export let LesserHealingPotion = std.Items.create(
    MODNAME,
    "lesserhealingpotion",
    858
);
LesserHealingPotion.Quality.WHITE.set();
export let SwiftnessPotion = std.Items.create(MODNAME, "swiftnesspotion", 2459);
SwiftnessPotion.Quality.WHITE.set();
export let RagePotion = std.Items.create(MODNAME, "ragepotion", 5631);
RagePotion.Quality.WHITE.set();
export let SwimSpeedPotion = std.Items.create(MODNAME, "swimspeedpotion", 6372);
SwimSpeedPotion.Quality.WHITE.set();
export let LesserManaPotion = std.Items.create(
    MODNAME,
    "lessermanapotion",
    3385
);
LesserManaPotion.Quality.WHITE.set();
export let ScrollofSpiritVIII = std.Items.create(
    MODNAME,
    "scrollofspiritviii",
    43465
);
ScrollofSpiritVIII.Name.enGB.set("Scroll of Spirit");
ScrollofSpiritVIII.Quality.WHITE.set();
ScrollofSpiritVIII.Spells.clear(0);
ScrollofSpiritVIII.Spells.addMod((spell) => {
    spell.Spell.set(SpiritI.ID);
    spell.Charges.set(-1);
});
ScrollofSpiritVIII.RequiredLevel.set(0);
ScrollofSpiritVIII.MaxStack.set(9999);
export let ScrollofProtectionVIII = std.Items.create(
    MODNAME,
    "scrollofprotectionviii",
    43465
);
ScrollofProtectionVIII.Name.enGB.set("Scroll of Protection");
ScrollofProtectionVIII.Quality.WHITE.set();
ScrollofProtectionVIII.Spells.clear(0);
ScrollofProtectionVIII.Spells.addMod((spell) => {
    spell.Spell.set(ProtectionI.ID);
    spell.Charges.set(-1);
});
ScrollofProtectionVIII.RequiredLevel.set(0);
ScrollofProtectionVIII.MaxStack.set(9999);
export let ScrollofAgilityVIII = std.Items.create(
    MODNAME,
    "scrollofagilityviii",
    43465
);
ScrollofAgilityVIII.Name.enGB.set("Scroll of Agility");
ScrollofAgilityVIII.Quality.WHITE.set();
ScrollofAgilityVIII.Spells.clear(0);
ScrollofAgilityVIII.Spells.addMod((spell) => {
    spell.Spell.set(AgilityI.ID);
    spell.Charges.set(-1);
});
ScrollofAgilityVIII.RequiredLevel.set(0);
ScrollofAgilityVIII.MaxStack.set(9999);
export let ScrollofIntellectVIII = std.Items.create(
    MODNAME,
    "scrollofintellectviii",
    43465
);
ScrollofIntellectVIII.Name.enGB.set("Scroll of Intellect");
ScrollofIntellectVIII.Quality.WHITE.set();
ScrollofIntellectVIII.Spells.clear(0);
ScrollofIntellectVIII.Spells.addMod((spell) => {
    spell.Spell.set(IntellectI.ID);
    spell.Charges.set(-1);
});
ScrollofIntellectVIII.RequiredLevel.set(0);
ScrollofIntellectVIII.MaxStack.set(9999);
export let ScrollofStaminaVIII = std.Items.create(
    MODNAME,
    "scrollofstaminaviii",
    43465
);
ScrollofStaminaVIII.Name.enGB.set("Scroll of Stamina");
ScrollofStaminaVIII.Quality.WHITE.set();
ScrollofStaminaVIII.Spells.clear(0);
ScrollofStaminaVIII.Spells.addMod((spell) => {
    spell.Spell.set(StaminaI.ID);
    spell.Charges.set(-1);
});
ScrollofStaminaVIII.RequiredLevel.set(0);
ScrollofStaminaVIII.MaxStack.set(9999);
export let ScrollofStrengthVIII = std.Items.create(
    MODNAME,
    "scrollofstrengthviii",
    43465
);
ScrollofStrengthVIII.Name.enGB.set("Scroll of Strength");
ScrollofStrengthVIII.Quality.WHITE.set();
ScrollofStrengthVIII.Spells.clear(0);
ScrollofStrengthVIII.Spells.addMod((spell) => {
    spell.Spell.set(StrengthI.ID);
    spell.Charges.set(-1);
});
ScrollofStrengthVIII.RequiredLevel.set(0);
ScrollofStrengthVIII.MaxStack.set(9999);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Zone 2 Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let VialofPoison = std.Items.create(MODNAME, "poisonvial", 1130);
VialofPoison.Name.enGB.set("Vial of Toxic Tonic");
VialofPoison.Quality.BLUE.set();
VialofPoison.MaxStack.set(9999);
VialofPoison.Price.set(0, 0);
VialofPoison.RequiredLevel.set(0);
export let BloodiedPouch = std.Items.create(MODNAME, "bloodypouch", 805);
BloodiedPouch.Quality.GREEN.set();
BloodiedPouch.ContainerSlots.set(12);
export let SilkyCape = std.Items.create(MODNAME, "silkycape", 10776);
SilkyCape.Name.enGB.set("Spidersilk Drape");
SilkyCape.RequiredLevel.set(5);
SilkyCape.Quality.GREEN.set();
SilkyCape.Armor.set(29);
SilkyCape.Stats.clearAll();
SilkyCape.Stats.addStamina(18);
SilkyCape.Stats.addAgility(4);
SilkyCape.Stats.addCritRating(26);
SilkyCape.Stats.addHasteRating(14);
SilkyCape.Stats.addHitRating(18);
export let Carapace = std.Items.create(MODNAME, "carapace", 10775);
Carapace.Name.enGB.set("Boney Carapace");
Carapace.RequiredLevel.set(5);
Carapace.Quality.GREEN.set();
Carapace.Armor.set(110);
Carapace.Stats.clearAll();
Carapace.Stats.addStamina(29);
Carapace.Stats.addAttackPower(68);
export let GluttonCleaver = std.Items.create(MODNAME, "gluttoncleaver", 10772);
GluttonCleaver.Name.enGB.set("Meat Cleaver");
GluttonCleaver.Damage.clearAll();
GluttonCleaver.Damage.addPhysical(54, 116);
GluttonCleaver.RequiredLevel.set(5);
GluttonCleaver.Quality.GREEN.set();
GluttonCleaver.Armor.set(0);
GluttonCleaver.Stats.clearAll();
GluttonCleaver.Stats.addCritRating(62);
GluttonCleaver.Stats.addHasteRating(24);
GluttonCleaver.Stats.addHitRating(45);
export let DeathmageSash = std.Items.create(MODNAME, "deathmagesash", 10771);
DeathmageSash.Name.enGB.set("Imperial Sash");
DeathmageSash.RequiredLevel.set(5);
DeathmageSash.Quality.GREEN.set();
DeathmageSash.Armor.set(29);
DeathmageSash.Stats.clearAll();
DeathmageSash.Stats.addStamina(23);
DeathmageSash.Stats.addIntellect(20);
DeathmageSash.Stats.addSpellPower(40);
export let MordeshEye = std.Items.create(MODNAME, "mordesheye", 10769);
MordeshEye.Name.enGB.set("Sinner's Folley");
MordeshEye.RequiredLevel.set(5);
MordeshEye.Quality.GREEN.set();
MordeshEye.Armor.set(24);
MordeshEye.Stats.clearAll();
MordeshEye.Stats.addStamina(13);
MordeshEye.Stats.addStrength(27);
MordeshEye.Stats.addAgility(14);
MordeshEye.Stats.addHitRating(18);
export let FleshhideShoulders = std.Items.create(
    MODNAME,
    "fleshshoulders",
    10774
);
FleshhideShoulders.Name.enGB.set("Vargath's Shoulderplates");
FleshhideShoulders.RequiredLevel.set(4);
FleshhideShoulders.Quality.GREEN.set();
FleshhideShoulders.Armor.set(91);
FleshhideShoulders.Stats.clearAll();
FleshhideShoulders.Stats.addIntellect(23);
FleshhideShoulders.Stats.addCritRating(41);
FleshhideShoulders.Stats.addHasteRating(16);
FleshhideShoulders.Stats.addSpellPower(24);
export let FerventHelm = std.Items.create(MODNAME, "ferventhelm", 18319);
FerventHelm.Name.enGB.set("Helmet of Displeasure");
FerventHelm.RequiredLevel.set(5);
FerventHelm.Quality.GREEN.set();
FerventHelm.Armor.set(0);
FerventHelm.Stats.clearAll();
FerventHelm.Stats.addStamina(23);
FerventHelm.Stats.addAgility(34);
export let AwarenessHelm = std.Items.create(MODNAME, "awarenesshelm", 18313);
AwarenessHelm.Name.enGB.set("Imperial Helmet");
AwarenessHelm.RequiredLevel.set(5);
AwarenessHelm.Quality.GREEN.set();
AwarenessHelm.Armor.set(49);
AwarenessHelm.Stats.clearAll();
AwarenessHelm.Stats.addStrength(23);
AwarenessHelm.Stats.addHitRating(29);
AwarenessHelm.Stats.addAttackPower(48);
export let SatyrBow = std.Items.create(MODNAME, "satyrbow", 18323);
SatyrBow.Name.enGB.set("Elven Longbow");
SatyrBow.Damage.clearAll();
SatyrBow.Damage.addPhysical(41, 121);
SatyrBow.RequiredLevel.set(5);
SatyrBow.Quality.GREEN.set();
SatyrBow.Armor.set(0);
SatyrBow.Stats.clearAll();
SatyrBow.Stats.addStamina(23);
SatyrBow.Stats.addAgility(34);
SatyrBow.Stats.addAttackPower(48);
export let ShadowMistGloves = std.Items.create(MODNAME, "shadowgloves", 18306);
ShadowMistGloves.Name.enGB.set("Gloves of Hopelessness");
ShadowMistGloves.RequiredLevel.set(5);
ShadowMistGloves.Quality.GREEN.set();
ShadowMistGloves.Armor.set(41);
ShadowMistGloves.Stats.clearAll();
ShadowMistGloves.Stats.addStamina(3);
ShadowMistGloves.Stats.addAgility(21);
ShadowMistGloves.Stats.addCritRating(24);
ShadowMistGloves.Stats.addAttackPower(38);
export let CleverHat = std.Items.create(MODNAME, "cleverhat", 18308);
CleverHat.Name.enGB.set("Pollos Hat");
CleverHat.RequiredLevel.set(5);
CleverHat.Quality.GREEN.set();
CleverHat.Armor.set(27);
CleverHat.Stats.clearAll();
CleverHat.Stats.addStamina(41);
CleverHat.Stats.addHasteRating(24);
export let PotencyRing = std.Items.create(MODNAME, "potentring", 18315);
PotencyRing.Name.enGB.set("Pungent Ring");
PotencyRing.RequiredLevel.set(5);
PotencyRing.Quality.GREEN.set();
PotencyRing.Armor.set(40);
PotencyRing.Stats.clearAll();
PotencyRing.Stats.addStamina(17);
PotencyRing.Stats.addHasteRating(60);
export let GuileRing = std.Items.create(MODNAME, "guilering", 18314);
GuileRing.Name.enGB.set("Ring of the Guileless");
GuileRing.RequiredLevel.set(5);
GuileRing.Quality.GREEN.set();
GuileRing.Armor.set(0);
GuileRing.Stats.clearAll();
GuileRing.Stats.addAgility(21);
GuileRing.Stats.addCritRating(19);
GuileRing.Stats.addHasteRating(19);
GuileRing.Stats.addHitRating(19);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Zone 3 Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let ShivanFeather = std.Items.create(MODNAME, "shivanfeather", 43465);
ShivanFeather.Name.enGB.set("Shivan Feather");
ShivanFeather.DisplayInfo.modRefCopy((val) => val.copyFromTemplate(37877));
ShivanFeather.Quality.PURPLE.set();
ShivanFeather.Spells.clear(0);
ShivanFeather.Spells.addMod((spell) => {
    spell.Spell.set(52870);
    spell.Trigger.set(0);
    spell.Charges.set(-1);
});
ShivanFeather.RequiredLevel.set(0);
export let LurkerCord = std.Items.create(MODNAME, "lurkercord", 30675);
LurkerCord.Quality.BLUE.set();
LurkerCord.RequiredLevel.set(9);
export let LurkerGrasp = std.Items.create(MODNAME, "lurkergrasp", 30676);
LurkerGrasp.Quality.BLUE.set();
LurkerGrasp.RequiredLevel.set(9);
export let LurkerBelt = std.Items.create(MODNAME, "lurkerbelt", 30677);
LurkerBelt.Quality.BLUE.set();
LurkerBelt.RequiredLevel.set(9);
export let LurkerGirdle = std.Items.create(MODNAME, "lurkergirdle", 30678);
LurkerGirdle.Quality.BLUE.set();
LurkerGirdle.RequiredLevel.set(9);
export let RavagerCuff = std.Items.create(MODNAME, "ravagercuff", 30684);
RavagerCuff.Quality.BLUE.set();
RavagerCuff.RequiredLevel.set(9);
export let RavagerWrap = std.Items.create(MODNAME, "ravagerwrap", 30685);
RavagerWrap.Quality.BLUE.set();
RavagerWrap.RequiredLevel.set(9);
export let Ravagerband = std.Items.create(MODNAME, "ravagerband", 30686);
Ravagerband.Quality.BLUE.set();
Ravagerband.RequiredLevel.set(9);
export let Ravagerbracer = std.Items.create(MODNAME, "ravagerbracer", 30687);
Ravagerbracer.Quality.BLUE.set();
Ravagerbracer.RequiredLevel.set(9);
export let Gliderwrap = std.Items.create(MODNAME, "gliderwrap", 30680);
Gliderwrap.Quality.BLUE.set();
Gliderwrap.RequiredLevel.set(9);
export let Gliderboots = std.Items.create(MODNAME, "gliderboots", 30681);
Gliderboots.Quality.BLUE.set();
Gliderboots.RequiredLevel.set(9);
export let Glidersabatons = std.Items.create(MODNAME, "glidersabatons", 30682);
Glidersabatons.Quality.BLUE.set();
Glidersabatons.RequiredLevel.set(9);
export let Glidergreaves = std.Items.create(MODNAME, "glidergreaves", 30683);
Glidergreaves.Quality.BLUE.set();
Glidergreaves.RequiredLevel.set(9);
export let LostTreads = std.Items.create(MODNAME, "losttreads", 30674);
LostTreads.Quality.BLUE.set();
LostTreads.RequiredLevel.set(9);
export let Commendation = std.Items.create(MODNAME, "commendation", 34473);
Commendation.Quality.BLUE.set();
Commendation.RequiredLevel.set(11);
export let Contempt = std.Items.create(MODNAME, "contempt", 34472);
Contempt.Quality.BLUE.set();
Contempt.RequiredLevel.set(11);
export let FocusingCrystal = std.Items.create(
    MODNAME,
    "focusingcrystal",
    34470
);
FocusingCrystal.Quality.BLUE.set();
FocusingCrystal.RequiredLevel.set(11);
export let SunwellVial = std.Items.create(MODNAME, "sunwellvial", 34471);
SunwellVial.Quality.BLUE.set();
SunwellVial.RequiredLevel.set(11);
//Special Items
export let chancePower1C = std.Spells.create(
    MODNAME,
    "chancepower1c-spell",
    67672
); //caster
chancePower1C.Name.enGB.set("Elusive Power");
chancePower1C.Description.enGB.set(
    "Your attacks and abilties have the chance to increase spellpower by 590."
);
chancePower1C.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
chancePower1C.Effects.get(0).TriggerSpell.set(67669);
export let VolatilePower = std.Items.create(MODNAME, "volatilepower", 19145);
VolatilePower.Quality.BLUE.set();
VolatilePower.RequiredLevel.set(9);
VolatilePower.Description.enGB.set(
    "This robe contains the power to randomly increase spellpower by 590 when attacking enemies."
);
export let DragonscaleBlade = std.Items.create(
    MODNAME,
    "dragonscaleblade",
    34614
);
DragonscaleBlade.Quality.BLUE.set();
DragonscaleBlade.RequiredLevel.set(9);
DragonscaleBlade.Description.enGB.set(
    "Contained within this blade is the power to summon infinite whelps."
);
DragonscaleBlade.Spells.clearAll();
DragonscaleBlade.Spells.addMod((spell) => {
    spell.Spell.set(13049);
    spell.Trigger.set(2);
});
export let ChainHealTest = std.Spells.create(
    MODNAME,
    "chainhealtest-spell",
    70425
);
ChainHealTest.Effects.get(0).BasePoints.set(645);
ChainHealTest.Effects.get(0).DieSides.set(128);
export let chanceChainHeal = std.Spells.create(
    MODNAME,
    "chancechainheal-spell",
    67672
); //caster
chanceChainHeal.Name.enGB.set("Infinite Life");
chanceChainHeal.Description.enGB.set(
    "Your attacks and abilties have the chance to heal all nearby friendly units."
);
chanceChainHeal.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
chanceChainHeal.Effects.get(0).TriggerSpell.set(ChainHealTest.ID);
export let MiseryMace = std.Items.create(MODNAME, "miserymace", 34176);
MiseryMace.Quality.BLUE.set();
MiseryMace.RequiredLevel.set(9);
MiseryMace.Description.enGB.set(
    "Contained within this blade is the power to grant eternal life."
);
MiseryMace.Spells.clearAll();
MiseryMace.Spells.addMod((spell) => {
    spell.Spell.set(chanceChainHeal.ID);
    spell.Trigger.set(2);
});
export let HeartPit = std.Items.create(MODNAME, "heartpit", 34179);
HeartPit.Quality.BLUE.set();
HeartPit.RequiredLevel.set(9);
HeartPit.Description.enGB.set(
    "Contained within this blade is the power to grant eternal life."
);
HeartPit.Spells.clearAll();
HeartPit.Spells.addMod((spell) => {
    spell.Spell.set(chanceChainHeal.ID);
    spell.Trigger.set(2);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Zone 4 Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let MassiveRedPouch = std.Items.create(MODNAME, "massiveredpouch", 805);
MassiveRedPouch.Quality.BLUE.set();
MassiveRedPouch.ContainerSlots.set(22);
export let MassiveBluePouch = std.Items.create(
    MODNAME,
    "massivebluepouch",
    828
);
MassiveBluePouch.Quality.BLUE.set();
MassiveBluePouch.ContainerSlots.set(22);
export let MassiveBlackPouch = std.Items.create(
    MODNAME,
    "massiveblackpouch",
    5571
);
MassiveBlackPouch.Quality.BLUE.set();
MassiveBlackPouch.ContainerSlots.set(22);
export let MassiveGreenPouch = std.Items.create(
    MODNAME,
    "massivegreenpouch",
    5572
);
MassiveGreenPouch.Quality.BLUE.set();
MassiveGreenPouch.ContainerSlots.set(22);
export let ZandalarVindicatorBreastplate = std.Items.create(
    MODNAME,
    "zandalarvindicatorbreastplate",
    19822
);
ZandalarVindicatorBreastplate.Quality.BLUE.set();
ZandalarVindicatorBreastplate.MaxCount.set(0);
export let ZandalarVindicatorBelt = std.Items.create(
    MODNAME,
    "zandalarvindicatorbelt",
    19823
);
ZandalarVindicatorBelt.Quality.BLUE.set();
ZandalarVindicatorBelt.MaxCount.set(0);
export let ZandalarVindicatorArmguards = std.Items.create(
    MODNAME,
    "zandalarvindicatorarmguards",
    19824
);
ZandalarVindicatorArmguards.Quality.BLUE.set();
ZandalarVindicatorArmguards.MaxCount.set(0);
export let ZandalarFreethinkerBreastplate = std.Items.create(
    MODNAME,
    "zandalarfreethinkerbreastplate",
    19825
);
ZandalarFreethinkerBreastplate.Quality.BLUE.set();
ZandalarFreethinkerBreastplate.MaxCount.set(0);
export let ZandalarFreethinkerBelt = std.Items.create(
    MODNAME,
    "zandalarfreethinkerbelt",
    19826
);
ZandalarFreethinkerBelt.Quality.BLUE.set();
ZandalarFreethinkerBelt.MaxCount.set(0);
export let ZandalarFreethinkerArmguards = std.Items.create(
    MODNAME,
    "zandalarfreethinkerarmguards",
    19827
);
ZandalarFreethinkerArmguards.Quality.BLUE.set();
ZandalarFreethinkerArmguards.MaxCount.set(0);
export let ZandalarAugurHauberk = std.Items.create(
    MODNAME,
    "zandalaraugurHauberk",
    19828
);
ZandalarAugurHauberk.Quality.BLUE.set();
ZandalarAugurHauberk.MaxCount.set(0);
export let ZandalarAugurBelt = std.Items.create(
    MODNAME,
    "zandalaraugurbelt",
    19829
);
ZandalarAugurBelt.Quality.BLUE.set();
ZandalarAugurBelt.MaxCount.set(0);
export let ZandalarAugurBracers = std.Items.create(
    MODNAME,
    "zandalaraugurbracers",
    19830
);
ZandalarAugurBracers.Quality.BLUE.set();
ZandalarAugurBracers.MaxCount.set(0);
export let ZandalarPredatorMantle = std.Items.create(
    MODNAME,
    "zandalarpredatormantle",
    19831
);
ZandalarPredatorMantle.Quality.BLUE.set();
ZandalarPredatorMantle.MaxCount.set(0);
export let ZandalarPredatorBelt = std.Items.create(
    MODNAME,
    "zandalarpredatorbelt",
    19832
);
ZandalarPredatorBelt.Quality.BLUE.set();
ZandalarPredatorBelt.MaxCount.set(0);
export let ZandalarPredatorBracers = std.Items.create(
    MODNAME,
    "zandalarpredatorbracers",
    19833
);
ZandalarPredatorBracers.Quality.BLUE.set();
ZandalarPredatorBracers.MaxCount.set(0);
export let ZandalarMadcapTunic = std.Items.create(
    MODNAME,
    "zandalarmadcaptunic",
    19834
);
ZandalarMadcapTunic.Quality.BLUE.set();
ZandalarMadcapTunic.MaxCount.set(0);
export let ZandalarMadcapMantle = std.Items.create(
    MODNAME,
    "zandalarmadcapmantle",
    19835
);
ZandalarMadcapMantle.Quality.BLUE.set();
ZandalarMadcapMantle.MaxCount.set(0);
export let ZandalarMadcapBracers = std.Items.create(
    MODNAME,
    "zandalarmadcapbracers",
    19836
);
ZandalarMadcapBracers.Quality.BLUE.set();
ZandalarMadcapBracers.MaxCount.set(0);
export let ZandalarHaruspexTunic = std.Items.create(
    MODNAME,
    "zandalarharuspextunic",
    19838
);
ZandalarHaruspexTunic.Quality.BLUE.set();
ZandalarHaruspexTunic.MaxCount.set(0);
export let ZandalarHaruspexBelt = std.Items.create(
    MODNAME,
    "zandalarharuspexbelt",
    19839
);
ZandalarHaruspexBelt.Quality.BLUE.set();
ZandalarHaruspexBelt.MaxCount.set(0);
export let ZandalarHaruspexBracers = std.Items.create(
    MODNAME,
    "zandalarharuspexbracers",
    19840
);
ZandalarHaruspexBracers.Quality.BLUE.set();
ZandalarHaruspexBracers.MaxCount.set(0);
export let ZandalarConfessorMantle = std.Items.create(
    MODNAME,
    "zandalarconfessormantle",
    19841
);
ZandalarConfessorMantle.Quality.BLUE.set();
ZandalarConfessorMantle.MaxCount.set(0);
export let ZandalarConfessorBindings = std.Items.create(
    MODNAME,
    "zandalarconfessorbindings",
    19842
);
ZandalarConfessorBindings.Quality.BLUE.set();
ZandalarConfessorBindings.MaxCount.set(0);
export let ZandalarConfessorWraps = std.Items.create(
    MODNAME,
    "zandalarconfessorwraps",
    19843
);
ZandalarConfessorWraps.Quality.BLUE.set();
ZandalarConfessorWraps.MaxCount.set(0);
export let ZandalarIllusionistMantle = std.Items.create(
    MODNAME,
    "zandalarillusionistmantle",
    19845
);
ZandalarIllusionistMantle.Quality.BLUE.set();
ZandalarIllusionistMantle.MaxCount.set(0);
export let ZandalarIllusionistWraps = std.Items.create(
    MODNAME,
    "zandalarillusionistwraps",
    19846
);
ZandalarIllusionistWraps.Quality.BLUE.set();
ZandalarIllusionistWraps.MaxCount.set(0);
export let ZandalarDemoniacWraps = std.Items.create(
    MODNAME,
    "zandalardemoniacwraps",
    19848
);
ZandalarDemoniacWraps.Quality.BLUE.set();
ZandalarDemoniacWraps.MaxCount.set(0);
export let ZandalarDemoniacMantle = std.Items.create(
    MODNAME,
    "zandalardemoniacmantle",
    19849
);
ZandalarDemoniacMantle.Quality.BLUE.set();
ZandalarDemoniacMantle.MaxCount.set(0);
export let ZandalarHonorToken = std.Items.create(
    MODNAME,
    "zandalarhonortoken",
    19858
);
ZandalarHonorToken.Quality.BLUE.set();
ZandalarHonorToken.MaxCount.set(0);
export let ZandalarianHeroBadge = std.Items.create(
    MODNAME,
    "zandalarianherobadge",
    19948
);
ZandalarianHeroBadge.Quality.BLUE.set();
ZandalarianHeroBadge.MaxCount.set(0);
export let ZandalarianHeroMedallion = std.Items.create(
    MODNAME,
    "zandalarianheromedallion",
    19949
);
ZandalarianHeroMedallion.Quality.BLUE.set();
ZandalarianHeroMedallion.MaxCount.set(0);
export let ZandalarianHeroCharm = std.Items.create(
    MODNAME,
    "zandalarianherocharm",
    19950
);
ZandalarianHeroCharm.Quality.BLUE.set();
ZandalarianHeroCharm.MaxCount.set(0);
export let ZandalarDemoniacRobe = std.Items.create(
    MODNAME,
    "zandalardemoniacrobe",
    20033
);
ZandalarDemoniacRobe.Quality.BLUE.set();
ZandalarDemoniacRobe.MaxCount.set(0);
export let ZandalarIllusionistRobe = std.Items.create(
    MODNAME,
    "zandalarillusionistrobe",
    20034
);
ZandalarIllusionistRobe.Quality.BLUE.set();
ZandalarIllusionistRobe.MaxCount.set(0);
export let ZandalarSignetofMojo = std.Items.create(
    MODNAME,
    "zandalarsignetofmojo",
    20076
);
ZandalarSignetofMojo.Quality.BLUE.set();
ZandalarSignetofMojo.MaxCount.set(0);
export let ZandalarSignetofMight = std.Items.create(
    MODNAME,
    "zandalarsignetofmight",
    20077
);
ZandalarSignetofMight.Quality.BLUE.set();
ZandalarSignetofMight.MaxCount.set(0);
export let ZandalarSignetofSerenity = std.Items.create(
    MODNAME,
    "zandalarsignetofserenity",
    20078
);
ZandalarSignetofSerenity.Quality.BLUE.set();
ZandalarSignetofSerenity.MaxCount.set(0);
export let GrileksCharmofMight = std.Items.create(
    MODNAME,
    "grilekscharmofmight",
    19951
);
GrileksCharmofMight.Quality.BLUE.set();
GrileksCharmofMight.MaxCount.set(0);
export let GrileksCharmofValor = std.Items.create(
    MODNAME,
    "grilekscharmofnalor",
    19952
);
GrileksCharmofValor.Quality.BLUE.set();
GrileksCharmofValor.MaxCount.set(0);
export let RenatakisCharmofBeasts = std.Items.create(
    MODNAME,
    "renatakischarmofbeasts",
    19953
);
RenatakisCharmofBeasts.Quality.BLUE.set();
RenatakisCharmofBeasts.MaxCount.set(0);
export let RenatakisCharmofTrickery = std.Items.create(
    MODNAME,
    "renatakischarmoftrickery",
    19954
);
RenatakisCharmofTrickery.Quality.BLUE.set();
RenatakisCharmofTrickery.MaxCount.set(0);
export let WushoolaysCharmofNature = std.Items.create(
    MODNAME,
    "wushoolayscharmofnature",
    19955
);
WushoolaysCharmofNature.Quality.BLUE.set();
WushoolaysCharmofNature.MaxCount.set(0);
export let WushoolaysCharmofSpirits = std.Items.create(
    MODNAME,
    "wushoolayscharmofspirits",
    19956
);
WushoolaysCharmofSpirits.Quality.BLUE.set();
WushoolaysCharmofSpirits.MaxCount.set(0);
export let HazzarahsCharmofDestruction = std.Items.create(
    MODNAME,
    "hazzarahscharmofdestruction",
    19957
);
HazzarahsCharmofDestruction.Quality.BLUE.set();
HazzarahsCharmofDestruction.MaxCount.set(0);
export let HazzarahsCharmofHealing = std.Items.create(
    MODNAME,
    "hazzarahscharmofhealing",
    19958
);
HazzarahsCharmofHealing.Quality.BLUE.set();
HazzarahsCharmofHealing.MaxCount.set(0);
export let HazzarahsCharmofMagic = std.Items.create(
    MODNAME,
    "hazzarahscharmofmagic",
    19959
);
HazzarahsCharmofMagic.Quality.BLUE.set();
HazzarahsCharmofMagic.MaxCount.set(0);
export let PristineEnchantedSouthSeasKelp = std.Items.create(
    MODNAME,
    "pristineenchantedsouthseaskelp",
    19613
);
PristineEnchantedSouthSeasKelp.Quality.BLUE.set();
PristineEnchantedSouthSeasKelp.MaxCount.set(0);
export let JewelofKajaro = std.Items.create(MODNAME, "jewelofkajaro", 19601);
JewelofKajaro.Quality.BLUE.set();
JewelofKajaro.MaxCount.set(0);
export let MaelstromsWrath = std.Items.create(
    MODNAME,
    "maelstromswrath",
    19621
);
MaelstromsWrath.Quality.BLUE.set();
MaelstromsWrath.MaxCount.set(0);
export let HerosBrand = std.Items.create(MODNAME, "herosBrand", 19588);
HerosBrand.Quality.BLUE.set();
HerosBrand.MaxCount.set(0);
export let TheAllSeeingEyeofZuldazar = std.Items.create(
    MODNAME,
    "theallseeingeyeofzuldazar",
    19594
);
TheAllSeeingEyeofZuldazar.Quality.BLUE.set();
TheAllSeeingEyeofZuldazar.MaxCount.set(0);
export let UnmarredVisionofVoodress = std.Items.create(
    MODNAME,
    "unmarredvisionofvoodress",
    19609
);
UnmarredVisionofVoodress.Quality.BLUE.set();
UnmarredVisionofVoodress.MaxCount.set(0);
export let ZandalarianShadowMasteryTalisman = std.Items.create(
    MODNAME,
    "zandalarianshadowmasterytalisman",
    19617
);
ZandalarianShadowMasteryTalisman.Quality.BLUE.set();
ZandalarianShadowMasteryTalisman.MaxCount.set(0);
export let KezansUnstoppableTaint = std.Items.create(
    MODNAME,
    "kezansunstoppabletaint",
    19605
);
KezansUnstoppableTaint.Quality.BLUE.set();
KezansUnstoppableTaint.MaxCount.set(0);
export let RageofMugamba = std.Items.create(MODNAME, "rageofmugamba", 19577);
RageofMugamba.Quality.BLUE.set();
RageofMugamba.MaxCount.set(0);
export let FourDazzlingLongsword = std.Items.create(
    MODNAME,
    "fourdazzlinglongsword",
    869
);
FourDazzlingLongsword.Name.enGB.set("Sword of Light");
FourDazzlingLongsword.Quality.PURPLE.set();
export let FourNightblade = std.Items.create(MODNAME, "fournightblade", 1982);
FourNightblade.Name.enGB.set("Dreadtalon");
FourNightblade.Quality.PURPLE.set();
export let FourFieryWarAxe = std.Items.create(MODNAME, "fourfierywaraxe", 870);
FourFieryWarAxe.Name.enGB.set("Incindiary Axe");
FourFieryWarAxe.Quality.PURPLE.set();
export let FourArdentCustodian = std.Items.create(
    MODNAME,
    "fourardentcustodian",
    868
);
FourArdentCustodian.Name.enGB.set("Ardent Pummeler");
FourArdentCustodian.Quality.PURPLE.set();
export let FourStaffofJordan = std.Items.create(
    MODNAME,
    "fourstaffofjordan",
    873
);
FourStaffofJordan.Name.enGB.set("Staff of Incantations");
FourStaffofJordan.Quality.PURPLE.set();
export let FourTheGreenTower = std.Items.create(
    MODNAME,
    "fourthegreentower",
    1204
);
FourTheGreenTower.Name.enGB.set("Stalward Defender");
FourTheGreenTower.Quality.PURPLE.set();
export let FourBowofSearingArrows = std.Items.create(
    MODNAME,
    "fourbowofsearingarrows",
    2825
);
FourBowofSearingArrows.Name.enGB.set("Ragefire Longbow");
FourBowofSearingArrows.Quality.PURPLE.set();
export let FourUnderworldBand = std.Items.create(
    MODNAME,
    "fourunderworldband",
    1980
);
FourUnderworldBand.Name.enGB.set("Ring of Lost Hope");
FourUnderworldBand.Quality.PURPLE.set();
export let FourGutRipper = std.Items.create(MODNAME, "fourgutripper", 2164);
FourGutRipper.Name.enGB.set("Rend");
FourGutRipper.Quality.PURPLE.set();
export let FourIronfoe = std.Items.create(MODNAME, "fourironfoe", 11684);
FourIronfoe.Name.enGB.set("The Clobbermaster");
FourIronfoe.Quality.PURPLE.set();
export let FourEskhandarsRightClaw = std.Items.create(
    MODNAME,
    "foureskhandarsrightclaw",
    18203
);
FourEskhandarsRightClaw.Name.enGB.set("Dismembered Bear Claw");
FourEskhandarsRightClaw.Quality.PURPLE.set();
export let FourEskhandarsLeftClaw = std.Items.create(
    MODNAME,
    "foureskhandarsleftclaw",
    18202
);
FourEskhandarsLeftClaw.Name.enGB.set("Dismembered Bear Fist");
FourEskhandarsLeftClaw.Quality.PURPLE.set();
export let GenesisHelm = std.Items.create(MODNAME, "genesishelm", 21353);
GenesisHelm.Quality.BLUE.set();
GenesisHelm.MaxCount.set(0);
export let GenesisShoulderpads = std.Items.create(
    MODNAME,
    "genesisshoulderpads",
    21354
);
GenesisShoulderpads.Quality.BLUE.set();
GenesisShoulderpads.MaxCount.set(0);
export let GenesisBoots = std.Items.create(MODNAME, "genesisboots", 21355);
GenesisBoots.Quality.BLUE.set();
GenesisBoots.MaxCount.set(0);
export let GenesisTrousers = std.Items.create(
    MODNAME,
    "genesistrousers",
    21356
);
GenesisTrousers.Quality.BLUE.set();
GenesisTrousers.MaxCount.set(0);
export let GenesisVest = std.Items.create(MODNAME, "genesisvest", 21357);
GenesisVest.Quality.BLUE.set();
GenesisVest.MaxCount.set(0);
export let EnigmaRobes = std.Items.create(MODNAME, "enigmarobes", 21343);
EnigmaRobes.Quality.BLUE.set();
EnigmaRobes.MaxCount.set(0);
export let EnigmaBoots = std.Items.create(MODNAME, "enigmaboots", 21344);
EnigmaBoots.Quality.BLUE.set();
EnigmaBoots.MaxCount.set(0);
export let EnigmaShoulderpads = std.Items.create(
    MODNAME,
    "enigmashoulderpads",
    21345
);
EnigmaShoulderpads.Quality.BLUE.set();
EnigmaShoulderpads.MaxCount.set(0);
export let EnigmaLeggings = std.Items.create(MODNAME, "enigmaleggings", 21346);
EnigmaLeggings.Quality.BLUE.set();
EnigmaLeggings.MaxCount.set(0);
export let EnigmaCirclet = std.Items.create(MODNAME, "enigmacirclet", 21347);
EnigmaCirclet.Quality.BLUE.set();
EnigmaCirclet.MaxCount.set(0);
export let StrikersFootguards = std.Items.create(
    MODNAME,
    "strikersfootguards",
    21365
);
StrikersFootguards.Quality.BLUE.set();
StrikersFootguards.MaxCount.set(0);
export let StrikersDiadem = std.Items.create(MODNAME, "strikersdiadem", 21366);
StrikersDiadem.Quality.BLUE.set();
StrikersDiadem.MaxCount.set(0);
export let StrikersPauldrons = std.Items.create(
    MODNAME,
    "strikerspauldrons",
    21367
);
StrikersPauldrons.Quality.BLUE.set();
StrikersPauldrons.MaxCount.set(0);
export let StrikersLeggings = std.Items.create(
    MODNAME,
    "strikersleggings",
    21368
);
StrikersLeggings.Quality.BLUE.set();
StrikersLeggings.MaxCount.set(0);
export let StrikersHauberk = std.Items.create(
    MODNAME,
    "strikershauberk",
    21370
);
StrikersHauberk.Quality.BLUE.set();
StrikersHauberk.MaxCount.set(0);
export let AvengersCrown = std.Items.create(MODNAME, "avengerscrown", 21387);
AvengersCrown.Quality.BLUE.set();
AvengersCrown.MaxCount.set(0);
export let AvengersGreaves = std.Items.create(
    MODNAME,
    "avengersgreaves",
    21388
);
AvengersGreaves.Quality.BLUE.set();
AvengersGreaves.MaxCount.set(0);
export let AvengersBreastplate = std.Items.create(
    MODNAME,
    "avengersbreastplate",
    21389
);
AvengersBreastplate.Quality.BLUE.set();
AvengersBreastplate.MaxCount.set(0);
export let AvengersLegguards = std.Items.create(
    MODNAME,
    "avengerslegguards",
    21390
);
AvengersLegguards.Quality.BLUE.set();
AvengersLegguards.MaxCount.set(0);
export let AvengersPauldrons = std.Items.create(
    MODNAME,
    "avengerspauldrons",
    21391
);
AvengersPauldrons.Quality.BLUE.set();
AvengersPauldrons.MaxCount.set(0);
export let TiaraoftheOracle = std.Items.create(
    MODNAME,
    "tiaraoftheoracle",
    21348
);
TiaraoftheOracle.Quality.BLUE.set();
TiaraoftheOracle.MaxCount.set(0);
export let FootwrapsoftheOracle = std.Items.create(
    MODNAME,
    "Footwrapsoftheoracle",
    21349
);
FootwrapsoftheOracle.Quality.BLUE.set();
FootwrapsoftheOracle.MaxCount.set(0);
export let MantleoftheOracle = std.Items.create(
    MODNAME,
    "mantleoftheoracle",
    21350
);
MantleoftheOracle.Quality.BLUE.set();
MantleoftheOracle.MaxCount.set(0);
export let VestmentsoftheOracle = std.Items.create(
    MODNAME,
    "Vestmentsoftheoracle",
    21351
);
VestmentsoftheOracle.Quality.BLUE.set();
VestmentsoftheOracle.MaxCount.set(0);
export let TrousersoftheOracle = std.Items.create(
    MODNAME,
    "trousersoftheoracle",
    21352
);
TrousersoftheOracle.Quality.BLUE.set();
TrousersoftheOracle.MaxCount.set(0);
export let StormcallersDiadem = std.Items.create(
    MODNAME,
    "stormcallersdiadem",
    21372
);
StormcallersDiadem.Quality.BLUE.set();
StormcallersDiadem.MaxCount.set(0);
export let StormcallersFootguards = std.Items.create(
    MODNAME,
    "stormcallersfootguards",
    21373
);
StormcallersFootguards.Quality.BLUE.set();
StormcallersFootguards.MaxCount.set(0);
export let StormcallersHauberk = std.Items.create(
    MODNAME,
    "stormcallershauberk",
    21374
);
StormcallersHauberk.Quality.BLUE.set();
StormcallersHauberk.MaxCount.set(0);
export let StormcallersLeggings = std.Items.create(
    MODNAME,
    "stormcallersleggings",
    21375
);
StormcallersLeggings.Quality.BLUE.set();
StormcallersLeggings.MaxCount.set(0);
export let StormcallersPauldrons = std.Items.create(
    MODNAME,
    "stormcallerspauldrons",
    21376
);
StormcallersPauldrons.Quality.BLUE.set();
StormcallersPauldrons.MaxCount.set(0);
export let DeathdealersBoots = std.Items.create(
    MODNAME,
    "deathdealersboots",
    21359
);
DeathdealersBoots.Quality.BLUE.set();
DeathdealersBoots.MaxCount.set(0);
export let DeathdealersHelm = std.Items.create(
    MODNAME,
    "deathdealershelm",
    21360
);
DeathdealersHelm.Quality.BLUE.set();
DeathdealersHelm.MaxCount.set(0);
export let DeathdealersSpaulders = std.Items.create(
    MODNAME,
    "deathdealersspaulders",
    21361
);
DeathdealersSpaulders.Quality.BLUE.set();
DeathdealersSpaulders.MaxCount.set(0);
export let DeathdealersLeggings = std.Items.create(
    MODNAME,
    "deathdealersleggings",
    21362
);
DeathdealersLeggings.Quality.BLUE.set();
DeathdealersLeggings.MaxCount.set(0);
export let DeathdealersVest = std.Items.create(
    MODNAME,
    "deathdealersvest",
    21364
);
DeathdealersVest.Quality.BLUE.set();
DeathdealersVest.MaxCount.set(0);
export let DoomcallersRobes = std.Items.create(
    MODNAME,
    "doomcallersrobes",
    21334
);
DoomcallersRobes.Quality.BLUE.set();
DoomcallersRobes.MaxCount.set(0);
export let DoomcallersMantle = std.Items.create(
    MODNAME,
    "doomcallersmantle",
    21335
);
DoomcallersMantle.Quality.BLUE.set();
DoomcallersMantle.MaxCount.set(0);
export let DoomcallersTrousers = std.Items.create(
    MODNAME,
    "doomcallerstrousers",
    21336
);
DoomcallersTrousers.Quality.BLUE.set();
DoomcallersTrousers.MaxCount.set(0);
export let DoomcallersCirclet = std.Items.create(
    MODNAME,
    "doomcallerscirclet",
    21337
);
DoomcallersCirclet.Quality.BLUE.set();
DoomcallersCirclet.MaxCount.set(0);
export let DoomcallersFootwraps = std.Items.create(
    MODNAME,
    "doomcallersfootwraps",
    21338
);
DoomcallersFootwraps.Quality.BLUE.set();
DoomcallersFootwraps.MaxCount.set(0);
export let ConquerorsCrown = std.Items.create(
    MODNAME,
    "conquerorscrown",
    21329
);
ConquerorsCrown.Quality.BLUE.set();
ConquerorsCrown.MaxCount.set(0);
export let ConquerorsSpaulders = std.Items.create(
    MODNAME,
    "conquerorsspaulders",
    21330
);
ConquerorsSpaulders.Quality.BLUE.set();
ConquerorsSpaulders.MaxCount.set(0);
export let ConquerorsBreastplate = std.Items.create(
    MODNAME,
    "conquerorsbreastplate",
    21331
);
ConquerorsBreastplate.Quality.BLUE.set();
ConquerorsBreastplate.MaxCount.set(0);
export let ConquerorsLegguards = std.Items.create(
    MODNAME,
    "conquerorslegguards",
    21332
);
ConquerorsLegguards.Quality.BLUE.set();
ConquerorsLegguards.MaxCount.set(0);
export let ConquerorsGreaves = std.Items.create(
    MODNAME,
    "conquerorsgreaves",
    21333
);
ConquerorsGreaves.Quality.BLUE.set();
ConquerorsGreaves.MaxCount.set(0);
//ARENA OF CHAMPIONS ITEMS
export let EyeofGruul = std.Items.create(MODNAME, "eyeofgruul", 28823);
EyeofGruul.Name.enGB.set("Badge of Honor");
EyeofGruul.Quality.PURPLE.set();
EyeofGruul.MaxCount.set(0);
export let DragonspineTrophy = std.Items.create(
    MODNAME,
    "dragonspinetrophy",
    28830
);
DragonspineTrophy.Quality.PURPLE.set();
DragonspineTrophy.Name.enGB.set("Badge of Zeal");
DragonspineTrophy.MaxCount.set(0);
export let MoroesLuckyPocketWatch = std.Items.create(
    MODNAME,
    "moroesluckypocketwatch",
    28528
);
MoroesLuckyPocketWatch.Quality.PURPLE.set();
MoroesLuckyPocketWatch.Name.enGB.set("Edge of Time");
MoroesLuckyPocketWatch.MaxCount.set(0);
export let RomulosPoisonVial = std.Items.create(
    MODNAME,
    "romulospoisonvial",
    28579
);
RomulosPoisonVial.Quality.PURPLE.set();
RomulosPoisonVial.Name.enGB.set("Vial of Living Poison");
RomulosPoisonVial.MaxCount.set(0);
export let LightningCapacitor = std.Items.create(
    MODNAME,
    "lightningcapacitor",
    28785
);
LightningCapacitor.Quality.PURPLE.set();
LightningCapacitor.Name.enGB.set("Bottled Lightning");
LightningCapacitor.MaxCount.set(0);
export let VioletEye = std.Items.create(MODNAME, "voioleteye", 28727);
VioletEye.Quality.PURPLE.set();
VioletEye.Name.enGB.set("Warders Pendant");
VioletEye.MaxCount.set(0);
export let Sulfuras = std.Items.create(MODNAME, "sulfuras", 17182);
Sulfuras.Quality.ORANGE.set();
Sulfuras.Name.enGB.set("Flametaur Mallet");
export let Thunderfury = std.Items.create(MODNAME, "thunderfury", 19019);
Thunderfury.Quality.ORANGE.set();
Thunderfury.Name.enGB.set("Blade of Flowing Currents");
export let WarglaiveMH = std.Items.create(MODNAME, "warglaivemh", 32837);
WarglaiveMH.Quality.ORANGE.set();
WarglaiveMH.Name.enGB.set("Felglaive");
export let WarglaiveOH = std.Items.create(MODNAME, "warglaiveoh", 32838);
WarglaiveOH.Quality.ORANGE.set();
WarglaiveOH.Name.enGB.set("Felglaive");
export let Thoridal = std.Items.create(MODNAME, "thoridal", 34334);
Thoridal.Quality.ORANGE.set();
Thoridal.Name.enGB.set("Fatespinner Longbow");
export let FourthScrollofSpiritVIII = std.Items.create(
    MODNAME,
    "fourthscrollofspiritviii",
    43465
);
FourthScrollofSpiritVIII.Name.enGB.set("Scroll of Spirit");
FourthScrollofSpiritVIII.Quality.WHITE.set();
FourthScrollofSpiritVIII.Spells.clear(0);
FourthScrollofSpiritVIII.Spells.addMod((spell) => {
    spell.Spell.set(SpiritIV.ID);
    spell.Charges.set(-1);
});
FourthScrollofSpiritVIII.RequiredLevel.set(0);
export let FourthScrollofProtectionVIII = std.Items.create(
    MODNAME,
    "fourthscrollofprotectionviii",
    43465
);
FourthScrollofProtectionVIII.Name.enGB.set("Scroll of Protection");
FourthScrollofProtectionVIII.Quality.WHITE.set();
FourthScrollofProtectionVIII.Spells.clear(0);
FourthScrollofProtectionVIII.Spells.addMod((spell) => {
    spell.Spell.set(ProtectionIV.ID);
    spell.Charges.set(-1);
});
FourthScrollofProtectionVIII.RequiredLevel.set(0);
export let FourthScrollofAgilityVIII = std.Items.create(
    MODNAME,
    "fourthscrollofagilityviii",
    43465
);
FourthScrollofAgilityVIII.Name.enGB.set("Scroll of Agility");
FourthScrollofAgilityVIII.Quality.WHITE.set();
FourthScrollofAgilityVIII.Spells.clear(0);
FourthScrollofAgilityVIII.Spells.addMod((spell) => {
    spell.Spell.set(AgilityIV.ID);
    spell.Charges.set(-1);
});
FourthScrollofAgilityVIII.RequiredLevel.set(0);
export let FourthScrollofIntellectVIII = std.Items.create(
    MODNAME,
    "fourthscrollofintellectviii",
    43465
);
FourthScrollofIntellectVIII.Name.enGB.set("Scroll of Intellect");
FourthScrollofIntellectVIII.Quality.WHITE.set();
FourthScrollofIntellectVIII.Spells.clear(0);
FourthScrollofIntellectVIII.Spells.addMod((spell) => {
    spell.Spell.set(IntellectIV.ID);
    spell.Charges.set(-1);
});
FourthScrollofIntellectVIII.RequiredLevel.set(0);
export let FourthScrollofStaminaVIII = std.Items.create(
    MODNAME,
    "fourthscrollofstaminaviii",
    43465
);
FourthScrollofStaminaVIII.Name.enGB.set("Scroll of Stamina");
FourthScrollofStaminaVIII.Quality.WHITE.set();
FourthScrollofStaminaVIII.Spells.clear(0);
FourthScrollofStaminaVIII.Spells.addMod((spell) => {
    spell.Spell.set(StaminaIV.ID);
    spell.Charges.set(-1);
});
FourthScrollofStaminaVIII.RequiredLevel.set(0);
export let FourthScrollofStrengthVIII = std.Items.create(
    MODNAME,
    "fourthscrollofstrengthviii",
    43465
);
FourthScrollofStrengthVIII.Name.enGB.set("Scroll of Strength");
FourthScrollofStrengthVIII.Quality.WHITE.set();
FourthScrollofStrengthVIII.Spells.clear(0);
FourthScrollofStrengthVIII.Spells.addMod((spell) => {
    spell.Spell.set(StrengthIV.ID);
    spell.Charges.set(-1);
});
FourthScrollofStrengthVIII.RequiredLevel.set(0);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Zone 5 Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let PulseStaff = std.Items.create(MODNAME, "pulsestaff", 28782);
PulseStaff.Name.enGB.set("Teasing Stick");
export let Vindicator = std.Items.create(MODNAME, "vindicator", 29458);
Vindicator.Name.enGB.set("Olaf's Lost Shield");
export let Satchel = std.Items.create(MODNAME, "satchelbearsack", 34845);
Satchel.Name.enGB.set("Giant Bear Sack");
Satchel.MaxCount.set(0);
export let SavageBlade = std.Items.create(MODNAME, "savageblade", 32369);
SavageBlade.Name.enGB.set("Bearhunter");
export let SpikyBearTrap = std.Items.create(MODNAME, "spikybeartrap", 32375);
SpikyBearTrap.Name.enGB.set("Guardsmans Shield");
export let Edgeblade = std.Items.create(MODNAME, "spikybeartrap", 18822);
Edgeblade.Name.enGB.set("Abnormal Blade");
export let Amulet01 = std.Items.create(MODNAME, "newamulet01", 21712);
Amulet01.Quality.BLUE.set();
Amulet01.Price.set(151211, 359521, 1);
Amulet01.RequiredLevel.set(7);
export let Amulet02 = std.Items.create(MODNAME, "newamulet02", 7722);
Amulet02.Quality.GREEN.set();
Amulet02.Price.set(79523, 91517, 1);
Amulet02.RequiredLevel.set(5);
export let Amulet03 = std.Items.create(MODNAME, "newamulet03", 9641);
Amulet03.Quality.GREEN.set();
Amulet03.Price.set(22692, 25326, 1);
Amulet03.RequiredLevel.set(1);
export let Amulet04 = std.Items.create(MODNAME, "newamulet04", 1443);
Amulet04.Quality.BLUE.set();
Amulet04.Price.set(121256, 192526, 1);
Amulet04.RequiredLevel.set(7);
export let Amulet05 = std.Items.create(MODNAME, "newamulet05", 10711);
Amulet05.Quality.BLUE.set();
Amulet05.Price.set(34546, 39636, 1);
Amulet05.RequiredLevel.set(1);
export let OrbofPower = std.Items.create(MODNAME, "powerorb01", 43102);
OrbofPower.Name.enGB.set("Orb of Infinite Power");
OrbofPower.Quality.PURPLE.set();
OrbofPower.MaxStack.set(500);
OrbofPower.Price.set(100000, 20000000, 1);
OrbofPower.Bonding.BINDS_ON_PICKUP.set();
export let PowerToken = std.Items.load(37711);
PowerToken.Name.enGB.set("Token of Infinite Power");
PowerToken.Description.enGB.set(
    "This token contains incredible power and it can be traded for items that match it's esteem."
);
PowerToken.Quality.PURPLE.set();
export let ItemReward01 = std.Items.create(MODNAME, "itemreward01", 49783);
ItemReward01.RequiredLevel.set(10);
ItemReward01.Quality.PURPLE.set();
export let ItemReward02 = std.Items.create(MODNAME, "itemreward02", 50191);
ItemReward02.RequiredLevel.set(10);
ItemReward02.Quality.PURPLE.set();
export let ItemReward03 = std.Items.create(MODNAME, "itemreward03", 49790);
ItemReward03.RequiredLevel.set(10);
ItemReward03.Quality.PURPLE.set();
export let ItemReward04 = std.Items.create(MODNAME, "itemreward04", 49789);
ItemReward04.RequiredLevel.set(10);
ItemReward04.Quality.PURPLE.set();
export let ItemReward05 = std.Items.create(MODNAME, "itemreward05", 49844);
ItemReward05.RequiredLevel.set(10);
ItemReward05.Quality.PURPLE.set();
export let ItemReward06 = std.Items.create(MODNAME, "itemreward06", 49839);
ItemReward06.RequiredLevel.set(10);
ItemReward06.Quality.PURPLE.set();
export let ItemReward07 = std.Items.create(MODNAME, "itemreward07", 50047);
ItemReward07.RequiredLevel.set(7);
ItemReward07.Quality.PURPLE.set();
ItemReward07.Spells.clearAll();
ItemReward07.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward08 = std.Items.create(MODNAME, "itemreward08", 50046);
ItemReward08.RequiredLevel.set(7);
ItemReward08.Quality.PURPLE.set();
ItemReward08.Spells.clearAll();
ItemReward08.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward09 = std.Items.create(MODNAME, "itemreward09", 50049);
ItemReward09.RequiredLevel.set(7);
ItemReward09.Quality.PURPLE.set();
ItemReward09.Spells.clearAll();
ItemReward09.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward10 = std.Items.create(MODNAME, "itemreward10", 50048);
ItemReward10.RequiredLevel.set(7);
ItemReward10.Quality.PURPLE.set();
ItemReward10.Spells.clearAll();
ItemReward10.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward11 = std.Items.create(MODNAME, "itemreward11", 50051);
ItemReward11.RequiredLevel.set(7);
ItemReward11.Quality.PURPLE.set();
ItemReward11.Spells.clearAll();
ItemReward11.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward12 = std.Items.create(MODNAME, "itemreward12", 50050);
ItemReward12.RequiredLevel.set(7);
ItemReward12.Quality.PURPLE.set();
ItemReward12.Spells.clearAll();
ItemReward12.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward13 = std.Items.create(MODNAME, "itemreward13", 50052);
ItemReward13.RequiredLevel.set(7);
ItemReward13.Quality.PURPLE.set();
ItemReward13.Spells.clearAll();
ItemReward13.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward14 = std.Items.create(MODNAME, "itemreward14", 21407);
ItemReward14.RequiredLevel.set(5);
ItemReward14.Quality.PURPLE.set();
ItemReward14.Spells.clearAll();
ItemReward14.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward15 = std.Items.create(MODNAME, "itemreward15", 21409);
ItemReward15.RequiredLevel.set(5);
ItemReward15.Quality.PURPLE.set();
ItemReward15.Spells.clearAll();
ItemReward15.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward16 = std.Items.create(MODNAME, "itemreward16", 21408);
ItemReward16.RequiredLevel.set(5);
ItemReward16.Quality.PURPLE.set();
ItemReward16.Spells.clearAll();
ItemReward16.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward17 = std.Items.create(MODNAME, "itemreward17", 21395);
ItemReward17.RequiredLevel.set(5);
ItemReward17.Quality.PURPLE.set();
ItemReward17.Spells.clearAll();
ItemReward17.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward18 = std.Items.create(MODNAME, "itemreward18", 21397);
ItemReward18.RequiredLevel.set(5);
ItemReward18.Quality.PURPLE.set();
ItemReward18.Spells.clearAll();
ItemReward18.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward19 = std.Items.create(MODNAME, "itemreward19", 21396);
ItemReward19.RequiredLevel.set(5);
ItemReward19.Quality.PURPLE.set();
ItemReward19.Spells.clearAll();
ItemReward19.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward20 = std.Items.create(MODNAME, "itemreward20", 21401);
ItemReward20.RequiredLevel.set(5);
ItemReward20.Quality.PURPLE.set();
ItemReward20.Spells.clearAll();
ItemReward20.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward21 = std.Items.create(MODNAME, "itemreward21", 21403);
ItemReward21.RequiredLevel.set(5);
ItemReward21.Quality.PURPLE.set();
ItemReward21.Spells.clearAll();
ItemReward21.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward22 = std.Items.create(MODNAME, "itemreward22", 21402);
ItemReward22.RequiredLevel.set(5);
ItemReward22.Quality.PURPLE.set();
ItemReward22.Spells.clearAll();
ItemReward22.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward23 = std.Items.create(MODNAME, "itemreward23", 21410);
ItemReward23.RequiredLevel.set(5);
ItemReward23.Quality.PURPLE.set();
ItemReward23.Spells.clearAll();
ItemReward23.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward24 = std.Items.create(MODNAME, "itemreward24", 21412);
ItemReward24.RequiredLevel.set(5);
ItemReward24.Quality.PURPLE.set();
ItemReward24.Spells.clearAll();
ItemReward24.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward25 = std.Items.create(MODNAME, "itemreward25", 21411);
ItemReward25.RequiredLevel.set(5);
ItemReward25.Quality.PURPLE.set();
ItemReward25.Spells.clearAll();
ItemReward25.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward26 = std.Items.create(MODNAME, "itemreward26", 21413);
ItemReward26.RequiredLevel.set(5);
ItemReward26.Quality.PURPLE.set();
ItemReward26.Spells.clearAll();
ItemReward26.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward27 = std.Items.create(MODNAME, "itemreward27", 21414);
ItemReward27.RequiredLevel.set(5);
ItemReward27.Quality.PURPLE.set();
ItemReward27.Spells.clearAll();
ItemReward27.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward28 = std.Items.create(MODNAME, "itemreward28", 21415);
ItemReward28.RequiredLevel.set(5);
ItemReward28.Quality.PURPLE.set();
ItemReward28.Spells.clearAll();
ItemReward28.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward29 = std.Items.create(MODNAME, "itemreward29", 21404);
ItemReward29.RequiredLevel.set(5);
ItemReward29.Quality.PURPLE.set();
ItemReward29.Spells.clearAll();
ItemReward29.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward30 = std.Items.create(MODNAME, "itemreward30", 21405);
ItemReward30.RequiredLevel.set(5);
ItemReward30.Quality.PURPLE.set();
ItemReward30.Spells.clearAll();
ItemReward30.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward31 = std.Items.create(MODNAME, "itemreward31", 21406);
ItemReward31.RequiredLevel.set(5);
ItemReward31.Quality.PURPLE.set();
ItemReward31.Spells.clearAll();
ItemReward31.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward32 = std.Items.create(MODNAME, "itemreward32", 21398);
ItemReward32.RequiredLevel.set(5);
ItemReward32.Quality.PURPLE.set();
ItemReward32.Spells.clearAll();
ItemReward32.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward33 = std.Items.create(MODNAME, "itemreward33", 21399);
ItemReward33.RequiredLevel.set(5);
ItemReward33.Quality.PURPLE.set();
ItemReward33.Spells.clearAll();
ItemReward33.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward34 = std.Items.create(MODNAME, "itemreward34", 21400);
ItemReward34.RequiredLevel.set(5);
ItemReward34.Quality.PURPLE.set();
ItemReward34.Spells.clearAll();
ItemReward34.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward35 = std.Items.create(MODNAME, "itemreward35", 21416);
ItemReward35.RequiredLevel.set(5);
ItemReward35.Quality.PURPLE.set();
ItemReward35.Spells.clearAll();
ItemReward35.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward36 = std.Items.create(MODNAME, "itemreward36", 21417);
ItemReward36.RequiredLevel.set(5);
ItemReward36.Quality.PURPLE.set();
ItemReward36.Spells.clearAll();
ItemReward36.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward37 = std.Items.create(MODNAME, "itemreward37", 21418);
ItemReward37.RequiredLevel.set(5);
ItemReward37.Quality.PURPLE.set();
ItemReward37.Spells.clearAll();
ItemReward37.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward38 = std.Items.create(MODNAME, "itemreward38", 21392);
ItemReward38.RequiredLevel.set(5);
ItemReward38.Quality.PURPLE.set();
ItemReward38.Spells.clearAll();
ItemReward38.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward39 = std.Items.create(MODNAME, "itemreward39", 21393);
ItemReward39.RequiredLevel.set(5);
ItemReward39.Quality.PURPLE.set();
ItemReward39.Spells.clearAll();
ItemReward39.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
export let ItemReward40 = std.Items.create(MODNAME, "itemreward40", 21394);
ItemReward40.RequiredLevel.set(5);
ItemReward40.Quality.PURPLE.set();
ItemReward40.Spells.clearAll();
ItemReward40.Spells.addMod((spell) => {
    spell.Spell.set(expSpell4.ID);
    spell.Trigger.set(1);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Zone 6 Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let c2ClothItem01 = std.Items.create(MODNAME, "c2clothitem01", 33588);
c2ClothItem01.Quality.BLUE.set();
c2ClothItem01.Price.set(27893, 2665521, 1);
export let c2ClothItem02 = std.Items.create(MODNAME, "c2clothitem02", 33291);
c2ClothItem02.Quality.BLUE.set();
c2ClothItem02.Price.set(31893, 3041262, 1);
export let c2ClothItem03 = std.Items.create(MODNAME, "c2clothitem03", 33585);
c2ClothItem03.Quality.BLUE.set();
c2ClothItem03.Price.set(45893, 2912152, 1);
export let c2ClothItem04 = std.Items.create(MODNAME, "c2clothitem04", 33584);
c2ClothItem04.Quality.BLUE.set();
c2ClothItem04.Price.set(66893, 1665952, 1);
export let c2ClothItem05 = std.Items.create(MODNAME, "c2clothitem05", 28525);
c2ClothItem05.Quality.BLUE.set();
c2ClothItem05.Price.set(52893, 1995652, 1);
export let c2ClothItem06 = std.Items.create(MODNAME, "c2clothitem06", 28565);
c2ClothItem06.Quality.BLUE.set();
c2ClothItem06.Price.set(14893, 2623121, 1);
export let c2ClothItem07 = std.Items.create(MODNAME, "c2clothitem07", 28570);
c2ClothItem07.Quality.BLUE.set();
c2ClothItem07.Price.set(19893, 2114455, 1);
export let c2ClothItem08 = std.Items.create(MODNAME, "c2clothitem08", 28515);
c2ClothItem08.Quality.BLUE.set();
c2ClothItem08.Price.set(28893, 1685953, 1);
export let c2ClothItem09 = std.Items.create(MODNAME, "c2clothitem09", 28804);
c2ClothItem09.Quality.BLUE.set();
c2ClothItem09.Price.set(24893, 2122332, 1);
export let c2ClothItem10 = std.Items.create(MODNAME, "c2clothitem10", 28822);
c2ClothItem10.Quality.BLUE.set();
c2ClothItem10.Price.set(29892, 1878522, 1);
export let c2ClothItem11 = std.Items.create(MODNAME, "c2clothitem11", 28602);
c2ClothItem11.Quality.BLUE.set();
c2ClothItem11.Price.set(11843, 3445652, 1);
export let c2ClothItem12 = std.Items.create(MODNAME, "c2clothitem12", 28604);
c2ClothItem12.Quality.BLUE.set();
c2ClothItem12.Price.set(19893, 5126232, 1);
c2ClothItem01.RequiredLevel.set(7);
c2ClothItem02.RequiredLevel.set(9);
c2ClothItem03.RequiredLevel.set(11);
c2ClothItem04.RequiredLevel.set(10);
c2ClothItem05.RequiredLevel.set(12);
c2ClothItem06.RequiredLevel.set(9);
c2ClothItem07.RequiredLevel.set(9);
c2ClothItem08.RequiredLevel.set(7);
c2ClothItem09.RequiredLevel.set(10);
c2ClothItem10.RequiredLevel.set(12);
c2ClothItem11.RequiredLevel.set(10);
c2ClothItem12.RequiredLevel.set(9);
export let c2LeatherItem01 = std.Items.create(
    MODNAME,
    "c2leatheritem01",
    28600
);
c2LeatherItem01.Quality.BLUE.set();
c2LeatherItem01.Price.set(27893, 1785632, 1);
export let c2LeatherItem02 = std.Items.create(
    MODNAME,
    "c2leatheritem02",
    28601
);
c2LeatherItem02.Quality.BLUE.set();
c2LeatherItem02.Price.set(31893, 2112126, 1);
export let c2LeatherItem03 = std.Items.create(
    MODNAME,
    "c2leatheritem03",
    28611
);
c2LeatherItem03.Quality.BLUE.set();
c2LeatherItem03.Price.set(45893, 1912132, 1);
export let c2LeatherItem04 = std.Items.create(
    MODNAME,
    "c2leatheritem04",
    28606
);
c2LeatherItem04.Quality.BLUE.set();
c2LeatherItem04.Price.set(66893, 2326232, 1);
export let c2LeatherItem05 = std.Items.create(
    MODNAME,
    "c2leatheritem05",
    28749
);
c2LeatherItem05.Quality.BLUE.set();
c2LeatherItem05.Price.set(52893, 1942532, 1);
export let c2LeatherItem06 = std.Items.create(
    MODNAME,
    "c2leatheritem06",
    28745
);
c2LeatherItem06.Quality.BLUE.set();
c2LeatherItem06.Price.set(14893, 2147563, 1);
export let c2LeatherItem07 = std.Items.create(
    MODNAME,
    "c2leatheritem07",
    28764
);
c2LeatherItem07.Quality.BLUE.set();
c2LeatherItem07.Price.set(19893, 3112132, 1);
export let c2LeatherItem08 = std.Items.create(
    MODNAME,
    "c2leatheritem08",
    28773
);
c2LeatherItem08.Quality.BLUE.set();
c2LeatherItem08.Price.set(28893, 2269562, 1);
export let c2LeatherItem09 = std.Items.create(
    MODNAME,
    "c2leatheritem09",
    28772
);
c2LeatherItem09.Quality.BLUE.set();
c2LeatherItem09.Price.set(24893, 3632362, 1);
export let c2LeatherItem10 = std.Items.create(
    MODNAME,
    "c2leatheritem10",
    30886
);
c2LeatherItem10.Quality.BLUE.set();
c2LeatherItem10.Price.set(29892, 2269632, 1);
export let c2LeatherItem11 = std.Items.create(
    MODNAME,
    "c2leatheritem11",
    30917
);
c2LeatherItem11.Quality.BLUE.set();
c2LeatherItem11.Price.set(11843, 2659563, 1);
export let c2LeatherItem12 = std.Items.create(
    MODNAME,
    "c2leatheritem12",
    30898
);
c2LeatherItem12.Quality.BLUE.set();
c2LeatherItem12.Price.set(19893, 1886532, 1);
export let c2LeatherItem13 = std.Items.create(
    MODNAME,
    "c2leatheritem12",
    30901
);
c2LeatherItem13.Quality.BLUE.set();
c2LeatherItem13.Price.set(19893, 2015151, 1);
c2LeatherItem01.RequiredLevel.set(7);
c2LeatherItem02.RequiredLevel.set(9);
c2LeatherItem03.RequiredLevel.set(11);
c2LeatherItem04.RequiredLevel.set(10);
c2LeatherItem05.RequiredLevel.set(12);
c2LeatherItem06.RequiredLevel.set(9);
c2LeatherItem07.RequiredLevel.set(9);
c2LeatherItem08.RequiredLevel.set(7);
c2LeatherItem09.RequiredLevel.set(10);
c2LeatherItem10.RequiredLevel.set(12);
c2LeatherItem11.RequiredLevel.set(10);
c2LeatherItem12.RequiredLevel.set(9);
c2LeatherItem13.RequiredLevel.set(7);
export let c2PlateItem01 = std.Items.create(MODNAME, "c2plateitem01", 32232);
c2PlateItem01.Quality.BLUE.set();
c2PlateItem01.Price.set(27893, 1998563, 1);
export let c2PlateItem02 = std.Items.create(MODNAME, "c2plateitem02", 32243);
c2PlateItem02.Quality.BLUE.set();
c2PlateItem02.Price.set(31893, 2152321, 1);
export let c2PlateItem03 = std.Items.create(MODNAME, "c2plateitem03", 32236);
c2PlateItem03.Quality.BLUE.set();
c2PlateItem03.Price.set(45893, 1415232, 1);
export let c2PlateItem04 = std.Items.create(MODNAME, "c2plateitem04", 32250);
c2PlateItem04.Quality.BLUE.set();
c2PlateItem04.Price.set(66893, 1759632, 1);
export let c2PlateItem05 = std.Items.create(MODNAME, "c2plateitem05", 32279);
c2PlateItem05.Quality.BLUE.set();
c2PlateItem05.Price.set(52893, 2885232, 1);
export let c2PlateItem06 = std.Items.create(MODNAME, "c2plateitem06", 32280);
c2PlateItem06.Quality.BLUE.set();
c2PlateItem06.Price.set(14893, 3014151, 1);
export let c2PlateItem07 = std.Items.create(MODNAME, "c2plateitem07", 32512);
c2PlateItem07.Quality.BLUE.set();
c2PlateItem07.Price.set(19893, 2996232, 1);
export let c2PlateItem08 = std.Items.create(MODNAME, "c2plateitem08", 32348);
c2PlateItem08.Quality.BLUE.set();
c2PlateItem08.Price.set(28893, 5269562, 1);
export let c2PlateItem09 = std.Items.create(MODNAME, "c2plateitem09", 32341);
c2PlateItem09.Quality.BLUE.set();
c2PlateItem09.Price.set(24893, 3632362, 1);
export let c2PlateItem10 = std.Items.create(MODNAME, "c2plateitem10", 32335);
c2PlateItem10.Quality.BLUE.set();
c2PlateItem10.Price.set(29892, 2523262, 1);
export let c2PlateItem11 = std.Items.create(MODNAME, "c2plateitem11", 32365);
c2PlateItem11.Quality.BLUE.set();
c2PlateItem11.Price.set(11843, 2162321, 1);
export let c2PlateItem12 = std.Items.create(MODNAME, "c2plateitem12", 32505);
c2PlateItem12.Quality.BLUE.set();
c2PlateItem12.Price.set(19893, 1915232, 1);
export let c2PlateItem13 = std.Items.create(MODNAME, "c2plateitem12", 32483);
c2PlateItem13.Quality.BLUE.set();
c2PlateItem13.Price.set(19893, 1756532, 1);
c2PlateItem01.RequiredLevel.set(7);
c2PlateItem02.RequiredLevel.set(9);
c2PlateItem03.RequiredLevel.set(11);
c2PlateItem04.RequiredLevel.set(10);
c2PlateItem05.RequiredLevel.set(12);
c2PlateItem06.RequiredLevel.set(9);
c2PlateItem07.RequiredLevel.set(9);
c2PlateItem08.RequiredLevel.set(7);
c2PlateItem09.RequiredLevel.set(10);
c2PlateItem10.RequiredLevel.set(12);
c2PlateItem11.RequiredLevel.set(10);
c2PlateItem12.RequiredLevel.set(9);
c2PlateItem13.RequiredLevel.set(7);
export let ClothItem01 = std.Items.create(MODNAME, "clothitem01", 12608);
ClothItem01.Quality.GREEN.set();
ClothItem01.Price.set(27893, 148576, 1);
export let ClothItem02 = std.Items.create(MODNAME, "clothitem02", 13170);
ClothItem02.Quality.GREEN.set();
ClothItem02.Price.set(31893, 229563, 1);
export let ClothItem03 = std.Items.create(MODNAME, "clothitem03", 13282);
ClothItem03.Quality.GREEN.set();
ClothItem03.Price.set(45893, 315191, 1);
export let ClothItem04 = std.Items.create(MODNAME, "clothitem04", 13283);
ClothItem04.Quality.GREEN.set();
ClothItem04.Price.set(66893, 274512, 1);
export let ClothItem05 = std.Items.create(MODNAME, "clothitem05", 22319);
ClothItem05.Quality.GREEN.set();
ClothItem05.Price.set(52893, 179562, 1);
export let ClothItem06 = std.Items.create(MODNAME, "clothitem06", 13185);
ClothItem06.Quality.GREEN.set();
ClothItem06.Price.set(14893, 492252, 1);
export let ClothItem07 = std.Items.create(MODNAME, "clothitem07", 13178);
ClothItem07.Quality.GREEN.set();
ClothItem07.Price.set(19893, 216621, 1);
export let ClothItem08 = std.Items.create(MODNAME, "clothitem08", 13253);
ClothItem08.Quality.GREEN.set();
ClothItem08.Price.set(28893, 175544, 1);
export let ClothItem09 = std.Items.create(MODNAME, "clothitem09", 13206);
ClothItem09.Quality.GREEN.set();
ClothItem09.Price.set(24893, 539623, 1);
export let ClothItem10 = std.Items.create(MODNAME, "clothitem10", 13203);
ClothItem10.Quality.GREEN.set();
ClothItem10.Price.set(29892, 274545, 1);
export let ClothItem11 = std.Items.create(MODNAME, "clothitem11", 13161);
ClothItem11.Quality.GREEN.set();
ClothItem11.Price.set(11843, 1019563, 1);
export let ClothItem12 = std.Items.create(MODNAME, "clothitem12", 22268);
ClothItem12.Quality.GREEN.set();
ClothItem12.Price.set(19893, 947513, 1);
ClothItem01.RequiredLevel.set(3);
ClothItem02.RequiredLevel.set(4);
ClothItem03.RequiredLevel.set(7);
ClothItem04.RequiredLevel.set(8);
ClothItem05.RequiredLevel.set(2);
ClothItem06.RequiredLevel.set(9);
ClothItem07.RequiredLevel.set(11);
ClothItem08.RequiredLevel.set(10);
ClothItem09.RequiredLevel.set(7);
ClothItem10.RequiredLevel.set(3);
ClothItem11.RequiredLevel.set(4);
ClothItem12.RequiredLevel.set(8);
export let PlateItem01 = std.Items.create(MODNAME, "plateitem01", 13286);
PlateItem01.Quality.GREEN.set();
PlateItem01.Price.set(27893, 293262, 1);
export let PlateItem02 = std.Items.create(MODNAME, "plateitem02", 13168);
PlateItem02.Quality.GREEN.set();
PlateItem02.Price.set(31893, 805211, 1);
export let PlateItem03 = std.Items.create(MODNAME, "plateitem03", 13166);
PlateItem03.Quality.GREEN.set();
PlateItem03.Price.set(45893, 426232, 1);
export let PlateItem04 = std.Items.create(MODNAME, "plateitem04", 13167);
PlateItem04.Quality.GREEN.set();
PlateItem04.Price.set(66893, 589565, 1);
export let PlateItem05 = std.Items.create(MODNAME, "plateitem05", 13285);
PlateItem05.Quality.GREEN.set();
PlateItem05.Price.set(52893, 725236, 1);
export let PlateItem06 = std.Items.create(MODNAME, "plateitem06", 12582);
PlateItem06.Quality.GREEN.set();
PlateItem06.Price.set(14893, 586565, 1);
export let PlateItem07 = std.Items.create(MODNAME, "plateitem07", 22322);
PlateItem07.Quality.GREEN.set();
PlateItem07.Price.set(19893, 445252, 1);
export let PlateItem08 = std.Items.create(MODNAME, "plateitem08", 12637);
PlateItem08.Quality.GREEN.set();
PlateItem08.Price.set(28893, 612369, 1);
export let PlateItem09 = std.Items.create(MODNAME, "plateitem09", 13259);
PlateItem09.Quality.GREEN.set();
PlateItem09.Price.set(24893, 1078459, 1);
export let PlateItem10 = std.Items.create(MODNAME, "plateitem10", 13205);
PlateItem10.Quality.GREEN.set();
PlateItem10.Price.set(29892, 415236, 1);
export let PlateItem11 = std.Items.create(MODNAME, "plateitem11", 13163);
PlateItem11.Quality.GREEN.set();
PlateItem11.Price.set(11843, 1775421, 1);
export let PlateItem12 = std.Items.create(MODNAME, "plateitem12", 13162);
PlateItem12.Quality.GREEN.set();
PlateItem12.Price.set(19893, 923663, 1);
export let PlateItem13 = std.Items.create(MODNAME, "plateitem13", 13182);
PlateItem13.Quality.GREEN.set();
PlateItem13.Price.set(19893, 741122, 1);
export let PlateItem14 = std.Items.create(MODNAME, "plateitem14", 13143);
PlateItem14.Quality.GREEN.set();
PlateItem14.Price.set(19893, 2754565, 1);
export let PlateItem15 = std.Items.create(MODNAME, "plateitem15", 12592);
PlateItem15.Quality.GREEN.set();
PlateItem15.Price.set(19893, 4001253, 1);
PlateItem01.RequiredLevel.set(3);
PlateItem02.RequiredLevel.set(4);
PlateItem03.RequiredLevel.set(7);
PlateItem04.RequiredLevel.set(8);
PlateItem05.RequiredLevel.set(2);
PlateItem06.RequiredLevel.set(9);
PlateItem07.RequiredLevel.set(11);
PlateItem08.RequiredLevel.set(10);
PlateItem09.RequiredLevel.set(7);
PlateItem10.RequiredLevel.set(3);
PlateItem11.RequiredLevel.set(4);
PlateItem12.RequiredLevel.set(4);
PlateItem13.RequiredLevel.set(6);
PlateItem14.RequiredLevel.set(7);
PlateItem15.RequiredLevel.set(7);
export let LeatherItem01 = std.Items.create(MODNAME, "leatheritem01", 13169);
LeatherItem01.Quality.GREEN.set();
LeatherItem01.Price.set(27893, 441256, 1);
export let LeatherItem02 = std.Items.create(MODNAME, "leatheritem02", 13257);
LeatherItem02.Quality.GREEN.set();
LeatherItem02.Price.set(31893, 321215, 1);
export let LeatherItem03 = std.Items.create(MODNAME, "leatheritem03", 13177);
LeatherItem03.Quality.GREEN.set();
LeatherItem03.Price.set(45893, 715123, 1);
export let LeatherItem04 = std.Items.create(MODNAME, "leatheritem04", 13183);
LeatherItem04.Quality.GREEN.set();
LeatherItem04.Price.set(66893, 404141, 1);
export let LeatherItem05 = std.Items.create(MODNAME, "leatheritem05", 13218);
LeatherItem05.Quality.GREEN.set();
LeatherItem05.Price.set(52893, 975145, 1);
export let LeatherItem06 = std.Items.create(MODNAME, "leatheritem06", 13258);
LeatherItem06.Quality.GREEN.set();
LeatherItem06.Price.set(14893, 196232, 1);
export let LeatherItem07 = std.Items.create(MODNAME, "leatheritem07", 13210);
LeatherItem07.Quality.GREEN.set();
LeatherItem07.Price.set(19893, 412523, 1);
export let LeatherItem08 = std.Items.create(MODNAME, "leatheritem08", 13148);
LeatherItem08.Quality.GREEN.set();
LeatherItem08.Price.set(28893, 1132562, 1);
LeatherItem01.RequiredLevel.set(3);
LeatherItem02.RequiredLevel.set(4);
LeatherItem03.RequiredLevel.set(7);
LeatherItem04.RequiredLevel.set(8);
LeatherItem05.RequiredLevel.set(2);
LeatherItem06.RequiredLevel.set(9);
LeatherItem07.RequiredLevel.set(11);
LeatherItem08.RequiredLevel.set(10);
export let MailItem01 = std.Items.create(MODNAME, "mailitem01", 13284);
MailItem01.Quality.GREEN.set();
MailItem01.Price.set(27893, 645232, 1);
export let MailItem02 = std.Items.create(MODNAME, "mailitem02", 13255);
MailItem02.Quality.GREEN.set();
MailItem02.Price.set(31893, 162321, 1);
export let MailItem03 = std.Items.create(MODNAME, "mailitem03", 12634);
MailItem03.Quality.GREEN.set();
MailItem03.Price.set(45893, 274512, 1);
export let MailItem04 = std.Items.create(MODNAME, "mailitem04", 13244);
MailItem04.Quality.GREEN.set();
MailItem04.Price.set(66893, 395123, 1);
export let MailItem05 = std.Items.create(MODNAME, "mailitem05", 22321);
MailItem05.Quality.GREEN.set();
MailItem05.Price.set(52893, 956565, 1);
export let MailItem06 = std.Items.create(MODNAME, "mailitem06", 13164);
MailItem06.Quality.GREEN.set();
MailItem06.Price.set(14893, 1274535, 1);
MailItem01.RequiredLevel.set(3);
MailItem02.RequiredLevel.set(4);
MailItem03.RequiredLevel.set(7);
MailItem04.RequiredLevel.set(8);
MailItem05.RequiredLevel.set(2);
MailItem06.RequiredLevel.set(9);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Open World Dungeon

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let ReignLeggings = std.Items.create(MODNAME, "reignleggings", 24359);
ReignLeggings.Quality.BLUE.set();
ReignLeggings.RequiredLevel.set(4);
export let TrackerBelt = std.Items.create(MODNAME, "trackerbelt", 24360);
TrackerBelt.Quality.BLUE.set();
TrackerBelt.RequiredLevel.set(4);
export let Noose = std.Items.create(MODNAME, "noose", 27546);
Noose.Quality.BLUE.set();
Noose.RequiredLevel.set(4);
export let SporeReed = std.Items.create(MODNAME, "reed", 24380);
SporeReed.Quality.BLUE.set();
SporeReed.RequiredLevel.set(4);
export let RenewalHammer = std.Items.create(MODNAME, "renewalhammer", 24378);
RenewalHammer.Quality.BLUE.set();
RenewalHammer.RequiredLevel.set(4);
export let WildMagic = std.Items.create(MODNAME, "wildmagic", 32078);
WildMagic.RequiredLevel.set(6);
WildMagic.Class.ClothEquip.set();
export let UnbrokenChain = std.Items.create(MODNAME, "unbrokenchain", 29349);
UnbrokenChain.RequiredLevel.set(6);
export let PhosphoSword = std.Items.create(MODNAME, "phosphoswrd", 27673);
PhosphoSword.RequiredLevel.set(6);
PhosphoSword.Quality.PURPLE.set();
export let DestructiveMaul = std.Items.create(
    MODNAME,
    "destructivemaul",
    27524
);
DestructiveMaul.RequiredLevel.set(6);
DestructiveMaul.Quality.PURPLE.set();
export let Bladefist = std.Items.create(MODNAME, "bladefist", 29348);
Bladefist.RequiredLevel.set(6);
export let Fathomstone = std.Items.create(MODNAME, "fathomstone", 30049);
Fathomstone.RequiredLevel.set(6);
export let ArgentSentinel = std.Items.create(MODNAME, "argentsentinel", 30084);
ArgentSentinel.RequiredLevel.set(6);
export let ObliterativeBoots = std.Items.create(
    MODNAME,
    "obliterativeboots",
    30081
);
ObliterativeBoots.RequiredLevel.set(6);
export let VigilanteRing = std.Items.create(MODNAME, "vigilante", 33058);
VigilanteRing.RequiredLevel.set(6);
export let Naaru = std.Items.create(MODNAME, "naaru", 33058);
Naaru.RequiredLevel.set(6);
export let LostAge = std.Items.create(MODNAME, "lostage", 30008);
LostAge.RequiredLevel.set(6);
export let DungeonItem01 = std.Items.create(MODNAME, "dungeonitem01", 32327);
DungeonItem01.RequiredLevel.set(6);
DungeonItem01.Socket.clearAll();
DungeonItem01.Quality.BLUE.set();
export let DungeonItem02 = std.Items.create(MODNAME, "dungeonitem02", 32280);
DungeonItem02.RequiredLevel.set(6);
DungeonItem02.Socket.clearAll();
DungeonItem02.Quality.BLUE.set();
export let DungeonItem03 = std.Items.create(MODNAME, "dungeonitem03", 32512);
DungeonItem03.RequiredLevel.set(6);
DungeonItem03.Socket.clearAll();
DungeonItem03.Quality.BLUE.set();
export let DungeonItem04 = std.Items.create(MODNAME, "dungeonitem04", 32338);
DungeonItem04.RequiredLevel.set(6);
DungeonItem04.Socket.clearAll();
DungeonItem04.Quality.BLUE.set();
export let DungeonItem05 = std.Items.create(MODNAME, "dungeonitem05", 32341);
DungeonItem05.RequiredLevel.set(6);
DungeonItem05.Socket.clearAll();
DungeonItem05.Quality.BLUE.set();
export let DungeonItem06 = std.Items.create(MODNAME, "dungeonitem06", 32354);
DungeonItem06.RequiredLevel.set(6);
DungeonItem06.Socket.clearAll();
DungeonItem06.Quality.BLUE.set();
export let DungeonItem07 = std.Items.create(MODNAME, "dungeonitem07", 32517);
DungeonItem07.RequiredLevel.set(6);
DungeonItem07.Socket.clearAll();
DungeonItem07.Quality.BLUE.set();
export let DungeonItem08 = std.Items.create(MODNAME, "dungeonitem08", 32362);
DungeonItem08.RequiredLevel.set(6);
DungeonItem08.Socket.clearAll();
DungeonItem08.Quality.BLUE.set();
export let DungeonItem09 = std.Items.create(MODNAME, "dungeonitem09", 32331);
DungeonItem09.RequiredLevel.set(6);
DungeonItem09.Socket.clearAll();
DungeonItem09.Quality.BLUE.set();
export let DungeonItem10 = std.Items.create(MODNAME, "dungeonitem10", 32235);
DungeonItem10.RequiredLevel.set(6);
DungeonItem10.Socket.clearAll();
DungeonItem10.Quality.BLUE.set();
export let DungeonItem11 = std.Items.create(MODNAME, "dungeonitem11", 32471);
DungeonItem11.RequiredLevel.set(6);
DungeonItem11.Socket.clearAll();
DungeonItem11.Quality.BLUE.set();
export let DungeonItem12 = std.Items.create(MODNAME, "dungeonitem12", 32854);
DungeonItem12.RequiredLevel.set(6);
DungeonItem12.Socket.clearAll();
DungeonItem12.Quality.BLUE.set();
export let DungeonItem13 = std.Items.create(MODNAME, "dungeonitem13", 31326);
DungeonItem13.RequiredLevel.set(6);
DungeonItem13.Socket.clearAll();
DungeonItem13.Quality.BLUE.set();
export let DungeonItem14 = std.Items.create(MODNAME, "dungeonitem14", 31319);
DungeonItem14.RequiredLevel.set(6);
DungeonItem14.Socket.clearAll();
DungeonItem14.Quality.BLUE.set();
export let DungeonItem15 = std.Items.create(MODNAME, "dungeonitem15", 31333);
DungeonItem15.RequiredLevel.set(6);
DungeonItem15.Socket.clearAll();
DungeonItem15.Quality.BLUE.set();
export let DungeonItem16 = std.Items.create(MODNAME, "dungeonitem16", 31331);
DungeonItem16.RequiredLevel.set(6);
DungeonItem16.Socket.clearAll();
DungeonItem16.Quality.BLUE.set();
export let DungeonItem17 = std.Items.create(MODNAME, "dungeonitem17", 31342);
DungeonItem17.RequiredLevel.set(6);
DungeonItem17.Socket.clearAll();
DungeonItem17.Quality.BLUE.set();
export let DungeonItem18 = std.Items.create(MODNAME, "dungeonitem18", 34622);
DungeonItem18.RequiredLevel.set(6);
DungeonItem18.Socket.clearAll();
DungeonItem18.Quality.BLUE.set();
export let DungeonItem19 = std.Items.create(MODNAME, "dungeonitem19", 37835);
DungeonItem19.RequiredLevel.set(6);
DungeonItem19.Socket.clearAll();
DungeonItem19.Quality.BLUE.set();
export let DungeonItem20 = std.Items.create(MODNAME, "dungeonitem20", 44312);
DungeonItem20.RequiredLevel.set(6);
DungeonItem20.Socket.clearAll();
DungeonItem20.Quality.BLUE.set();
export let DungeonItem21 = std.Items.create(MODNAME, "dungeonitem21", 28484);
DungeonItem21.RequiredLevel.set(6);
DungeonItem21.Quality.BLUE.set();
DungeonItem21.RequiredSpell.set(0);
export let DungeonItem22 = std.Items.create(MODNAME, "dungeonitem22", 28485);
DungeonItem22.RequiredLevel.set(6);
DungeonItem22.Quality.BLUE.set();
DungeonItem22.RequiredSpell.set(0);
export let DungeonItem23 = std.Items.create(MODNAME, "dungeonitem23", 23565);
DungeonItem23.RequiredLevel.set(6);
DungeonItem23.Quality.BLUE.set();
DungeonItem23.RequiredSpell.set(0);
export let DungeonItem24 = std.Items.create(MODNAME, "dungeonitem24", 23564);
DungeonItem24.RequiredLevel.set(6);
DungeonItem24.Quality.BLUE.set();
DungeonItem24.RequiredSpell.set(0);
export let DungeonItem25 = std.Items.create(MODNAME, "dungeonitem25", 28439);
DungeonItem25.RequiredLevel.set(6);
DungeonItem25.Quality.BLUE.set();
DungeonItem25.RequiredSpell.set(0);
export let DungeonItem26 = std.Items.create(MODNAME, "dungeonitem26", 28442);
DungeonItem26.RequiredLevel.set(6);
DungeonItem26.Quality.BLUE.set();
DungeonItem26.RequiredSpell.set(0);
export let DungeonItem27 = std.Items.create(MODNAME, "dungeonitem27", 28430);
DungeonItem27.RequiredLevel.set(6);
DungeonItem27.Quality.BLUE.set();
DungeonItem27.RequiredSpell.set(0);
export let DungeonItem28 = std.Items.create(MODNAME, "dungeonitem28", 28427);
DungeonItem28.RequiredLevel.set(6);
DungeonItem28.Quality.BLUE.set();
DungeonItem28.RequiredSpell.set(0);
export let DungeonItem29 = std.Items.create(MODNAME, "dungeonitem29", 21869);
DungeonItem29.RequiredLevel.set(6);
DungeonItem29.Quality.BLUE.set();
DungeonItem29.RequiredSpell.set(0);
export let DungeonItem30 = std.Items.create(MODNAME, "dungeonitem30", 21870);
DungeonItem30.RequiredLevel.set(6);
DungeonItem30.Quality.BLUE.set();
DungeonItem30.RequiredSpell.set(0);
export let DungeonItem31 = std.Items.create(MODNAME, "dungeonitem31", 21871);
DungeonItem31.RequiredLevel.set(6);
DungeonItem31.Quality.BLUE.set();
DungeonItem31.RequiredSpell.set(0);
export let DungeonItem32 = std.Items.create(MODNAME, "dungeonitem32", 21846);
DungeonItem32.RequiredLevel.set(6);
DungeonItem32.Quality.BLUE.set();
DungeonItem32.RequiredSpell.set(0);
export let DungeonItem33 = std.Items.create(MODNAME, "dungeonitem33", 21847);
DungeonItem33.RequiredLevel.set(6);
DungeonItem33.Quality.BLUE.set();
DungeonItem33.RequiredSpell.set(0);
export let DungeonItem34 = std.Items.create(MODNAME, "dungeonitem34", 21818);
DungeonItem34.RequiredLevel.set(6);
DungeonItem34.Quality.BLUE.set();
DungeonItem34.RequiredSpell.set(0);
export let DungeonItem35 = std.Items.create(MODNAME, "dungeonitem35", 23838);
DungeonItem35.RequiredLevel.set(6);
DungeonItem35.Quality.BLUE.set();
DungeonItem35.RequiredSpell.set(0);
export let DungeonItem36 = std.Items.create(MODNAME, "dungeonitem36", 23839);
DungeonItem36.RequiredLevel.set(6);
DungeonItem36.Quality.BLUE.set();
DungeonItem36.RequiredSpell.set(0);
export let DarkSteel = std.Items.create(MODNAME, "darksteel", 23445);
DarkSteel.Name.enGB.set("Dark Steel");
DarkSteel.Quality.ORANGE.set();
DarkSteel.MaxStack.set(9999);
export let DarkLeather = std.Items.create(MODNAME, "darkleather", 12810);
DarkLeather.Name.enGB.set("Dark Leather");
DarkLeather.Quality.ORANGE.set();
DarkLeather.MaxStack.set(9999);
export let DarkCloth = std.Items.create(MODNAME, "darkcloth", 23854);
DarkCloth.Name.enGB.set("Dark Cloth");
DarkCloth.Quality.ORANGE.set();
DarkCloth.MaxStack.set(9999);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Champion Scroll Loot

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let HeavenlyPurpose = std.Items.create(
    MODNAME,
    "heavenlypurpose",
    33203
);
HeavenlyPurpose.Quality.BLUE.set();
HeavenlyPurpose.RequiredLevel.set(5);
HeavenlyPurpose.Socket.clearAll();
export let PrimalFury = std.Items.create(MODNAME, "primalfury", 33206);
PrimalFury.Quality.BLUE.set();
PrimalFury.RequiredLevel.set(5);
PrimalFury.Socket.clearAll();
export let Introspection = std.Items.create(MODNAME, "introspection", 33327);
Introspection.Quality.BLUE.set();
Introspection.RequiredLevel.set(5);
Introspection.Socket.clearAll();
export let FuryOffhand = std.Items.create(MODNAME, "furyoffhand", 33640);
FuryOffhand.Quality.BLUE.set();
FuryOffhand.RequiredLevel.set(5);
FuryOffhand.Socket.clearAll();
export let NaturalRegenHelm = std.Items.create(MODNAME, "nrh", 33356);
NaturalRegenHelm.Quality.BLUE.set();
NaturalRegenHelm.RequiredLevel.set(5);
NaturalRegenHelm.Socket.clearAll();
export let Mojoshield = std.Items.create(MODNAME, "mjs", 33332);
Mojoshield.Quality.BLUE.set();
Mojoshield.RequiredLevel.set(5);
Mojoshield.Socket.clearAll();
export let Bulwarkshield = std.Items.create(MODNAME, "bws", 33326);
Bulwarkshield.Quality.BLUE.set();
Bulwarkshield.RequiredLevel.set(5);
Bulwarkshield.Socket.clearAll();
export let Advocate = std.Items.create(MODNAME, "adv", 33299);
Advocate.Quality.BLUE.set();
Advocate.RequiredLevel.set(5);
Advocate.Socket.clearAll();
export let Avalanche = std.Items.create(MODNAME, "aval", 33599);
Avalanche.Quality.BLUE.set();
Avalanche.RequiredLevel.set(5);
Avalanche.Socket.clearAll();
export let DancingBlades = std.Items.create(MODNAME, "aval", 33300);
DancingBlades.Quality.BLUE.set();
DancingBlades.RequiredLevel.set(5);
DancingBlades.Socket.clearAll();
export let rohk = std.Items.create(MODNAME, "rohk", 33478);
rohk.Quality.BLUE.set();
rohk.RequiredLevel.set(5);
rohk.Socket.clearAll();
export let Crusher = std.Items.create(MODNAME, "crusher", 19918);
Crusher.Quality.BLUE.set();
Crusher.RequiredLevel.set(5);
Crusher.Socket.clearAll();
export let Eyepatch = std.Items.create(MODNAME, "eyepatch", 19945);
Eyepatch.Quality.BLUE.set();
Eyepatch.RequiredLevel.set(5);
Eyepatch.Socket.clearAll();
export let Medivh01 = std.Items.create(MODNAME, "medivh01", 22632);
Medivh01.Quality.BLUE.set();
Medivh01.RequiredLevel.set(5);
Medivh01.Socket.clearAll();
export let Medivh02 = std.Items.create(MODNAME, "medivh02", 22589);
Medivh02.Quality.BLUE.set();
Medivh02.RequiredLevel.set(5);
Medivh02.Socket.clearAll();
export let Medivh03 = std.Items.create(MODNAME, "medivh03", 22631);
Medivh03.Quality.BLUE.set();
Medivh03.RequiredLevel.set(5);
Medivh03.Socket.clearAll();
export let Medivh04 = std.Items.create(MODNAME, "medivh04", 22630);
Medivh04.Quality.BLUE.set();
Medivh04.RequiredLevel.set(5);
Medivh04.Socket.clearAll();
export let Valanyr = std.Items.create(MODNAME, "valanyrmace", 46017);
Valanyr.Quality.BLUE.set();
Valanyr.RequiredLevel.set(5);
Valanyr.Socket.clearAll();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Easter Egg Items

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let SlowFallSpell = std.Spells.create(
    MODNAME,
    "slowfallspell-spell",
    130
); //caster
SlowFallSpell.Name.enGB.set("Slow Fall (Permanent)");
SlowFallSpell.Description.enGB.set("Chickens can't fly though.");
SlowFallSpell.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
export let DamageSpell = std.Spells.create(MODNAME, "damagespell-spell", 71188); //caster
DamageSpell.Name.enGB.set("Rampage");
DamageSpell.Description.enGB.set("He's a bull so..");
DamageSpell.AuraDescription.enGB.set("Increases total damage dealt by $s1%.");
DamageSpell.Effects.get(0).BasePoints.set(1);
DamageSpell.Effects.get(1).Aura.set(0);
DamageSpell.Effects.get(2).Aura.set(0);
DamageSpell.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
export let HealthSpell = std.Spells.create(MODNAME, "healthspell-spell", 71188); //caster
HealthSpell.Name.enGB.set("Invincible");
HealthSpell.Description.enGB.set("I guess this works for now.?");
HealthSpell.AuraDescription.enGB.set("Increases total health by $s1%.");
HealthSpell.Effects.get(0).BasePoints.set(1);
HealthSpell.Effects.get(0).Aura.MOD_INCREASE_HEALTH_PERCENT.set();
HealthSpell.Effects.get(1).Aura.set(0);
HealthSpell.Effects.get(2).Aura.set(0);
HealthSpell.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});

export let UnTestedBoots = std.Items.create(MODNAME, "untestedboots", 1121); //Connor
UnTestedBoots.Name.enGB.set("Un-Tested Boots");
UnTestedBoots.Quality.BLUE.set();
UnTestedBoots.MaxCount.set(1);
UnTestedBoots.RequiredLevel.set(0);
UnTestedBoots.Stats.addStamina(12);
UnTestedBoots.Stats.addAgility(9);
UnTestedBoots.Stats.addAttackPower(20);
UnTestedBoots.Price.set(1, 1);
UnTestedBoots.Class.ClothEquip.set();
export let FallenAngelCloak = std.Items.create(MODNAME, "fallencloak", 3980); //Jose
FallenAngelCloak.Name.enGB.set("Cloak of the Fallen Angel");
FallenAngelCloak.Quality.BLUE.set();
FallenAngelCloak.MaxCount.set(1);
FallenAngelCloak.RequiredLevel.set(0);
FallenAngelCloak.Stats.addStamina(7);
FallenAngelCloak.Stats.addIntellect(11);
FallenAngelCloak.Stats.addSpellPower(18);
FallenAngelCloak.Stats.addCritRating(7);
FallenAngelCloak.Price.set(1, 1);
export let WornFlannelShirt = std.Items.create(MODNAME, "flannelshirt", 41248); //Chris
WornFlannelShirt.Name.enGB.set("Well-Made Flannel");
WornFlannelShirt.Quality.BLUE.set();
WornFlannelShirt.MaxCount.set(1);
WornFlannelShirt.RequiredLevel.set(0);
WornFlannelShirt.Stats.addStamina(3);
WornFlannelShirt.Stats.addAttackPower(7);
WornFlannelShirt.Stats.addSpellPower(7);
WornFlannelShirt.Stats.addCritRating(5);
WornFlannelShirt.Price.set(1, 1);
WornFlannelShirt.Class.ClothEquip.set();
export let StrangeBlade = std.Items.create(MODNAME, "strangeblade", 5191); //Lexaeus (Idk his name)
StrangeBlade.Name.enGB.set("Strange Blade");
StrangeBlade.RequiredLevel.set(1);
StrangeBlade.Quality.BLUE.set();
StrangeBlade.Price.set(1, 1);
export let BrokenChickenShoulders = std.Items.create(
    MODNAME,
    "chickenshoulders",
    5404
); //Chicken - to be renamed
BrokenChickenShoulders.Name.enGB.set("Cracked Chicken Shell Shoulderguards");
BrokenChickenShoulders.RequiredLevel.set(1);
BrokenChickenShoulders.Quality.BLUE.set();
BrokenChickenShoulders.Price.set(1, 1);
BrokenChickenShoulders.Spells.addMod((spell) => {
    spell.Spell.set(SlowFallSpell.ID);
    spell.Trigger.set(1);
});
BrokenChickenShoulders.Class.ClothEquip.set();
export let RampagingLeggings = std.Items.create(MODNAME, "rampaginglegs", 6587); //Torgaun
RampagingLeggings.Name.enGB.set("Leggings of Brutal Rampage");
RampagingLeggings.RequiredLevel.set(1);
RampagingLeggings.Quality.BLUE.set();
RampagingLeggings.Price.set(1, 1);
RampagingLeggings.Spells.addMod((spell) => {
    spell.Spell.set(DamageSpell.ID);
    spell.Trigger.set(1);
});
RampagingLeggings.Class.ClothEquip.set();
export let UndyingGauntlets = std.Items.create(
    MODNAME,
    "undyinggauntlets",
    10413
); //Donte
UndyingGauntlets.Name.enGB.set("Gauntlets of the Undying");
UndyingGauntlets.RequiredLevel.set(1);
UndyingGauntlets.Quality.BLUE.set();
UndyingGauntlets.Price.set(1, 1);
UndyingGauntlets.Spells.addMod((spell) => {
    spell.Spell.set(HealthSpell.ID);
    spell.Trigger.set(1);
});
UndyingGauntlets.ItemSet.set(0);
UndyingGauntlets.Class.ClothEquip.set();

//Game Objects
export let ForgottenBoots = makeResourceNode(
    "Forgotten Boots",
    86691,
    57,
    "forgottenboots-chest"
);
ForgottenBoots.Size.set(1.0);
addLootToGobChestSingleChanceMultiGroup(
    ForgottenBoots,
    [UnTestedBoots.ID],
    100,
    1,
    1,
    5
);
export let ForgottenCloak = makeResourceNode(
    "Forgotten Cloak",
    7743,
    57,
    "forgottencloak-chest"
);
ForgottenCloak.Size.set(1.0);
addLootToGobChestSingleChanceMultiGroup(
    ForgottenCloak,
    [FallenAngelCloak.ID],
    100,
    1,
    1,
    5
);
export let FallenChest = makeResourceNode(
    "Cache of Resources",
    8628,
    57,
    "cacheofresources-chest"
);
FallenChest.Size.set(0.5);
addLootToGobChest(FallenChest, tierOneBaseResources, [4, 3, 1, 2, 2, 5, 3]);
addLootToGobChestSingleChanceMultiGroup(
    FallenChest,
    [tierOneMailMaterial, tierOneLeatherMaterial, tierOneClothMaterial],
    33,
    1,
    3,
    5
);
addLootToGobChestSingleChance(
    FallenChest,
    [
        DazzlingLongsword.ID,
        Nightblade.ID,
        FieryWarAxe.ID,
        ArdentCustodian.ID,
        StaffofJordan.ID,
        TheGreenTower.ID,
        BowofSearingArrows.ID,
        UnderworldBand.ID,
        GutRipper.ID,
        Ironfoe.ID,
        EskhandarsRightClaw.ID,
        EskhandarsLeftClaw.ID,
    ],
    0.0125
);
export let WornFlannel = makeResourceNode(
    "Forgotten Laundry",
    7679,
    57,
    "forgottenlaundry-chest"
);
WornFlannel.Size.set(1.0);
addLootToGobChestSingleChanceMultiGroup(
    WornFlannel,
    [
        WornFlannelShirt.ID,
        BrokenChickenShoulders.ID,
        RampagingLeggings.ID,
        UndyingGauntlets.ID,
    ],
    25,
    1,
    1,
    5
);
export let StrangeBladeObject = makeResourceNode(
    "Strange Blade",
    98395,
    57,
    "strangeblade-chest"
);
StrangeBladeObject.Size.set(1.0);
addLootToGobChestSingleChanceMultiGroup(
    StrangeBladeObject,
    [StrangeBlade.ID],
    100,
    1,
    1,
    5
);

//Creatures
export let GirlfriendMob = std.CreatureTemplates.create(
    MODNAME,
    "girlfriend-creature",
    510
);
GirlfriendMob.Name.enGB.set("Girlfriend");
GirlfriendMob.Subname.enGB.set(
    "It would have been tasteless to call this enslaved girlfriend"
);
GirlfriendMob.FactionTemplate.set(35);
GirlfriendMob.Models.clearAll();
GirlfriendMob.Models.addIds(27999);
GirlfriendMob.PetSpells.set(13471);

export let NakedLexMob01 = std.CreatureTemplates.create(
    MODNAME,
    "lexmob01-creature",
    510
);
NakedLexMob01.Name.enGB.set("Narcissa Illusion");
NakedLexMob01.Subname.enGB.set("");
NakedLexMob01.FactionTemplate.set(35);
NakedLexMob01.Models.clearAll();
NakedLexMob01.Models.addIds(20579, 19724);
NakedLexMob01.PetSpells.set(13172);

//Spells
export let MovementSpell = std.Spells.create(
    MODNAME,
    "movementspell-spell",
    9175
); //caster
MovementSpell.Name.enGB.set("Movement Speed Increased (25%)");
MovementSpell.Description.enGB.set("Gotta go fast, brrrrr!");
MovementSpell.Effects.get(0).BasePoints.set(24);
MovementSpell.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
export let FallenCloakSpell = std.Spells.create(
    MODNAME,
    "fallencloak-spell",
    62950
); //caster
FallenCloakSpell.Name.enGB.set("Summon Cache of Materials");
FallenCloakSpell.Description.enGB.set(
    "Summons a cache of farmed materials.. how did you even do that?"
);
FallenCloakSpell.Cooldown.set(3600000, 0, 0, 0);
FallenCloakSpell.Effects.get(0).MiscValueA.set(FallenChest.ID);
export let WornFlannelSpell = std.Spells.create(
    MODNAME,
    "flannelspell-spell",
    70907
); //caster
WornFlannelSpell.Name.enGB.set("Summon Girlfriend");
WornFlannelSpell.Description.enGB.set(
    "Summons your girlfriend to simp over while she fights for you."
);
WornFlannelSpell.Cooldown.set(600000, 0, 0, 0);
WornFlannelSpell.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
WornFlannelSpell.Effects.get(0).MiscValueA.set(GirlfriendMob.ID);
export let LexaeusSpell = std.Spells.create(
    MODNAME,
    "lexaeusspell-spell",
    70907
); //caster
LexaeusSpell.Name.enGB.set("Summon Nudes");
LexaeusSpell.Description.enGB.set(
    "Summons a bunch of random naked people.. idk man, leave me alone"
);
LexaeusSpell.Cooldown.set(600000, 0, 0, 0);
LexaeusSpell.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
LexaeusSpell.Duration.modRefCopy((val) => {
    val.set(-1, 0, -1);
});
LexaeusSpell.Effects.get(0).MiscValueA.set(NakedLexMob01.ID);
LexaeusSpell.Effects.get(0).BasePoints.set(4);

//Spawns
spawnMultiGobTimer(
    ForgottenBoots.ID,
    [
        { map: 725, x: -8228.927734, y: -141.242859, z: 1.441069, o: 1.397056 },
        { map: 725, x: -8045.104492, y: 214.746567, z: 1.354434, o: 3.937821 },
    ],
    1500
);
spawnMultiGobTimer(
    ForgottenCloak.ID,
    [
        { map: 725, x: -8125.558594, y: -64.054893, z: 0.180978, o: 4.888148 },
        { map: 725, x: -7967.230957, y: 229.850647, z: -35.143055, o: 2.158896 },
    ],
    1500
);
spawnMultiGobTimer(
    WornFlannel.ID,
    [
        { map: 725, x: -8129.145508, y: -134.442703, z: 0.651608, o: 1.652312 },
        { map: 725, x: -8099.334473, y: 579.924927, z: 1.481492, o: 5.225876 },
        { map: 725, x: -8274.737305, y: 250.567749, z: 3.031361, o: 2.796259 },
        { map: 725, x: -8472.438477, y: 402.225128, z: 0.518996, o: 5.969268 },
        { map: 725, x: -8568.0, y: 408.04425, z: -4.656291, o: 4.673362 },
        { map: 725, x: -8554.794922, y: 124.845978, z: 14.691655, o: 2.749136 },
        { map: 725, x: -8805.03418, y: 544.817444, z: 14.771346, o: 2.800188 },
        { map: 725, x: -8979.297852, y: 449.058228, z: 27.918917, o: 3.46385 },
    ],
    1500
);
spawnMultiGobTimer(
    StrangeBladeObject.ID,
    [
        { map: 725, x: -8769.49707, y: -66.478806, z: 31.149784, o: 5.054265 },
        { map: 725, x: -8257.423828, y: 269.69635, z: 3.486881, o: 2.343452 },
    ],
    1500
);
