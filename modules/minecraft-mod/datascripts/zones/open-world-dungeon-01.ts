import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata";
import {
    addLootToGobChest,
    addLootToGobChestSingleChanceMultiGroup,
    addLootToGobChestSingleChance,
} from "../functions/gob-functions";
import {
    addLootToCreature,
    addLootToCreatureSingleChance,
} from "../functions/npc-functions";
import { makeResourceNode } from "../functions/resource-node-functions";
import {
    spawnMultiGobTimer,
    spawnMultipleNPCWithTimer,
} from "../functions/spawning-functions";
import {
    tierOneBaseResources,
    tierOneClothMaterial,
    tierOneLeatherMaterial,
    tierOneMailMaterial,
} from "../items/armor/tier1-set";
import {
    tierTwoClothMaterial,
    tierTwoLeatherMaterial,
    tierTwoMailMaterial,
    tierTwoBaseResources,
} from "../items/armor/tier2-set";
import {
    tierThreeClothMaterial,
    tierThreeLeatherMaterial,
    tierThreeMailMaterial,
    tierThreeBaseResources,
} from "../items/armor/tier3-set";
import { LargeSackofCoins } from "../items/currencies";
import {
    undiscoveredReds,
    undiscoveredGreens,
    undiscoveredPurples,
    undiscoveredYellows,
    undiscoveredBlues,
    undiscoveredOranges,
} from "../items/gems/tier1-gem";
import { MODNAME } from "../modname";
import {
    ReignLeggings,
    TrackerBelt,
    Noose,
    SporeReed,
    RenewalHammer,
    WildMagic,
    UnbrokenChain,
    PhosphoSword,
    DestructiveMaul,
    Bladefist,
    Fathomstone,
    ArgentSentinel,
    ObliterativeBoots,
    VigilanteRing,
    Naaru,
    LostAge,
    DungeonItem01,
    DungeonItem02,
    DungeonItem03,
    DungeonItem04,
    DungeonItem05,
    DungeonItem06,
    DungeonItem07,
    DungeonItem08,
    DungeonItem09,
    DungeonItem10,
    DungeonItem11,
    DungeonItem12,
    DungeonItem13,
    DungeonItem14,
    DungeonItem15,
    DungeonItem16,
    DungeonItem17,
    DungeonItem18,
    DungeonItem19,
    DungeonItem20,
    DungeonItem21,
    DungeonItem22,
    DungeonItem23,
    DungeonItem24,
    DungeonItem25,
    DungeonItem26,
    DungeonItem27,
    DungeonItem28,
    DungeonItem29,
    DungeonItem30,
    DungeonItem31,
    DungeonItem32,
    DungeonItem33,
    DungeonItem34,
    DungeonItem35,
    DungeonItem36,
    DarkSteel,
    DarkLeather,
    DarkCloth,
    Commendation,
    Contempt,
    DragonscaleBlade,
    EyeofDestiny,
    FocusingCrystal,
    Gliderboots,
    Glidergreaves,
    Glidersabatons,
    Gliderwrap,
    HeartPit,
    ItemReward01,
    ItemReward02,
    ItemReward03,
    ItemReward04,
    ItemReward05,
    ItemReward06,
    LostTreads,
    LurkerBelt,
    LurkerCord,
    LurkerGirdle,
    LurkerGrasp,
    MiseryMace,
    OrbofPower,
    Ravagerband,
    Ravagerbracer,
    RavagerCuff,
    RavagerWrap,
    SunwellVial,
    VolatilePower,
} from "./item-manifest";

export let Shadowbolt = std.Spells.create(MODNAME, "shadowbolt-spell", 25307);
export let ShadowVolley = std.Spells.create(
    MODNAME,
    "shadowvolley-spell",
    25586
);
ShadowVolley.Effects.get(0).BasePoints.set(566);
ShadowVolley.Effects.get(0).DieSides.set(121);
ShadowVolley.Effects.get(0).Radius.modRefCopy((val) => val.set(20, 0, 20));
export let ShadowPain = std.Spells.create(MODNAME, "pain-spell", 25367);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Room 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Creature Spawns (Normal Mobs)
export let DungeonMob01 = std.CreatureTemplates.create(
    MODNAME,
    "dungeonmob01",
    3271
);
DungeonMob01.Name.enGB.set("Suzu'ven Demonspawn");

DungeonMob01.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
DungeonMob01.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});

DungeonMob01.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(Shadowbolt.ID, 2, 7);
});
DungeonMob01.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(ShadowVolley.ID, 2, 7);
});
DungeonMob01.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(ShadowPain.ID, 2, 7);
});
DungeonMob01.Level.set(6, 6);
DungeonMob01.FactionTemplate.set(48);
DungeonMob01.DamageSchool.Normal.set();
DungeonMob01.Stats.ArmorMod.set(5);
DungeonMob01.Stats.DamageMod.set(30);
DungeonMob01.Stats.ExperienceMod.set(10);
DungeonMob01.Stats.HealthMod.set(40);
DungeonMob01.Stats.ManaMod.set(10);
DungeonMob01.Rank.ELITE.set();
DungeonMob01.Models.clearAll();
DungeonMob01.Models.addIds(18373);
export let DungeonMob01Loot = DungeonMob01.NormalLoot;
spawnMultipleNPCWithTimer(
    DungeonMob01.ID,
    0,
    0,
    [
        { map: 725, x: -8743.326172, y: 585.32489, z: -15.320604, o: 2.583537 },
        { map: 725, x: -8759.154297, y: 646.16626, z: -17.919151, o: 2.65983 },
        { map: 725, x: -8756.805664, y: 651.50946, z: -17.569628, o: 2.793347 },
        { map: 725, x: -8762.393555, y: 653.10144, z: -18.045757, o: 2.864033 },
        { map: 725, x: -8794.692383, y: 631.597534, z: -18.204575, o: 2.86796 },
        { map: 725, x: -8800.267578, y: 633.674805, z: -17.818176, o: 1.764475 },
        { map: 725, x: -8798.90625, y: 639.394531, z: -18.267073, o: 1.316798 },
        { map: 725, x: -8783.087891, y: 684.432861, z: -18.726955, o: 1.226477 },
        { map: 725, x: -8788.500977, y: 686.54364, z: -19.205553, o: 1.198988 },
        { map: 725, x: -8783.765625, y: 692.959045, z: -18.123034, o: 0.660991 },
        { map: 725, x: -8799.750977, y: 717.577942, z: -17.96056, o: 4.639033 },
        { map: 725, x: -8795.242188, y: 716.350464, z: -18.188185, o: 4.081402 },
        { map: 725, x: -8828.529297, y: 696.002258, z: -17.788317, o: 1.15972 },
        { map: 725, x: -8830.47168, y: 704.410889, z: -17.796488, o: 6.084167 },
        { map: 725, x: -8824.225586, y: 711.850037, z: -17.332754, o: 4.752918 },
        { map: 725, x: -8740.042969, y: 591.431702, z: -15.456429, o: 3.549577 },
        { map: 725, x: -8746.310547, y: 593.816345, z: -16.625267, o: 4.547027 },
    ],
    300
);

addLootToCreature(
    DungeonMob01Loot,
    [tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial],
    [10, 10, 10],
    3
);
addLootToCreature(
    DungeonMob01Loot,
    tierOneBaseResources,
    [5, 5, 5, 5, 5, 5, 5],
    3
);
addLootToCreature(
    DungeonMob01Loot,
    [tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial],
    [2, 2, 2],
    4
);
addLootToCreature(
    DungeonMob01Loot,
    tierTwoBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    4
);
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    DungeonMob01Loot,
    [
        ReignLeggings.ID,
        TrackerBelt.ID,
        Noose.ID,
        SporeReed.ID,
        RenewalHammer.ID,
        WildMagic.ID,
        UnbrokenChain.ID,
        PhosphoSword.ID,
        DestructiveMaul.ID,
        Bladefist.ID,
        Fathomstone.ID,
        ArgentSentinel.ID,
        ObliterativeBoots.ID,
        VigilanteRing.ID,
        Naaru.ID,
        LostAge.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    DungeonMob01Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(DungeonMob01Loot, [OrbofPower.ID], 0.5, 3);

export let ConsumeSpell = std.Spells.create(
    MODNAME,
    "consumespell-spell",
    49381
);
ConsumeSpell.Duration.modRefCopy((val) => {
    val.set(10000, 0, 10000);
});
export let BossShadowVolley = std.Spells.create(
    MODNAME,
    "bossshadowvolley-spell",
    25586
);
BossShadowVolley.Effects.get(0).BasePoints.set(1566);
BossShadowVolley.Effects.get(0).DieSides.set(321);
export let DrainLife = std.Spells.create(MODNAME, "drainlife-spell", 49617);

export let DungeonBoss01 = std.CreatureTemplates.create(
    MODNAME,
    "dungeonboss01",
    3271
);
DungeonBoss01.Name.enGB.set("Ageth the Unmaker");
DungeonBoss01.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
DungeonBoss01.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
DungeonBoss01.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(DrainLife.ID, 2, 7);
});
DungeonBoss01.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(BossShadowVolley.ID, 2, 7);
});
DungeonBoss01.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(ConsumeSpell.ID, 2, 7);
});

DungeonBoss01.Level.set(7, 7);
DungeonBoss01.FactionTemplate.set(48);
DungeonBoss01.DamageSchool.Normal.set();
DungeonBoss01.Stats.ArmorMod.set(5);
DungeonBoss01.Stats.DamageMod.set(75);
DungeonBoss01.Stats.ExperienceMod.set(30);
DungeonBoss01.Stats.HealthMod.set(100);
DungeonBoss01.Stats.ManaMod.set(25);
DungeonBoss01.Rank.RARE_ELITE.set();
DungeonBoss01.Models.clearAll();
DungeonBoss01.Models.addIds(16632);
DungeonBoss01.Scale.set(1.75);
export let DungeonBoss01Loot = DungeonBoss01.NormalLoot;
spawnMultipleNPCWithTimer(
    DungeonBoss01.ID,
    0,
    0,
    [{ map: 725, x: -8813.744141, y: 662.621155, z: -17.837614, o: 0.31541 }],
    3600
);
addLootToCreature(
    DungeonBoss01Loot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [4, 4, 4],
    3
);
addLootToCreature(
    DungeonBoss01Loot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    3
);
addLootToCreature(
    DungeonBoss01Loot,
    [tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial],
    [10, 10, 10],
    4
);
addLootToCreature(
    DungeonBoss01Loot,
    tierTwoBaseResources,
    [5, 5, 5, 5, 5, 5, 5],
    4
);
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    DungeonBoss01Loot,
    [
        ReignLeggings.ID,
        TrackerBelt.ID,
        Noose.ID,
        SporeReed.ID,
        RenewalHammer.ID,
        WildMagic.ID,
        UnbrokenChain.ID,
        PhosphoSword.ID,
        DestructiveMaul.ID,
        Bladefist.ID,
        Fathomstone.ID,
        ArgentSentinel.ID,
        ObliterativeBoots.ID,
        VigilanteRing.ID,
        Naaru.ID,
        LostAge.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    DungeonBoss01Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(DungeonBoss01Loot, [OrbofPower.ID], 100, 3);

export let AgitatedBloodMite = std.CreatureTemplates.create(
    MODNAME,
    "bloodmite",
    3271
);
AgitatedBloodMite.Name.enGB.set("Agitated Bloodmite");
AgitatedBloodMite.Level.set(5, 5);
AgitatedBloodMite.FactionTemplate.set(48);
AgitatedBloodMite.DamageSchool.Normal.set();
AgitatedBloodMite.Stats.ArmorMod.set(10);
AgitatedBloodMite.Stats.DamageMod.set(30);
AgitatedBloodMite.Stats.ExperienceMod.set(4);
AgitatedBloodMite.Stats.HealthMod.set(12);
AgitatedBloodMite.Stats.ManaMod.set(10);
AgitatedBloodMite.Models.clearAll();
AgitatedBloodMite.Models.addIds(15983);
spawnMultipleNPCWithTimer(
    AgitatedBloodMite.ID,
    5,
    0,
    [
        { map: 725, x: -8757.743164, y: 648.013611, z: -17.827976, o: 3.107503 },
        { map: 725, x: -8759.208008, y: 646.306824, z: -17.937799, o: 3.107503 },
        { map: 725, x: -8762.167969, y: 649.58728, z: -18.194265, o: 2.930789 },
        { map: 725, x: -8762.767578, y: 654.881409, z: -17.997023, o: 2.384937 },
        { map: 725, x: -8765.665039, y: 658.127563, z: -18.122068, o: 2.404572 },
        { map: 725, x: -8765.477539, y: 660.662964, z: -17.982586, o: 2.058996 },
        { map: 725, x: -8771.004883, y: 667.723816, z: -18.164373, o: 1.854793 },
        { map: 725, x: -8769.332031, y: 671.125793, z: -17.847923, o: 1.854793 },
        { map: 725, x: -8774.037109, y: 675.082458, z: -18.113218, o: 1.854793 },
        { map: 725, x: -8771.932617, y: 684.071167, z: -17.573902, o: 1.854793 },
        { map: 725, x: -8773.74707, y: 687.893005, z: -17.57704, o: 2.604848 },
        { map: 725, x: -8780.955078, y: 689.605652, z: -18.090269, o: 2.428134 },
        { map: 725, x: -8780.977539, y: 690.994141, z: -18.013659, o: 2.153244 },
        { map: 725, x: -8778.305664, y: 695.95282, z: -17.542303, o: 1.442459 },
        { map: 725, x: -8781.911133, y: 702.095703, z: -17.681219, o: 2.487039 },
        { map: 725, x: -8783.083008, y: 712.766724, z: -17.359367, o: 2.475258 },
        { map: 725, x: -8785.97168, y: 712.727905, z: -17.625771, o: 2.534163 },
        { map: 725, x: -8786.568359, y: 715.340088, z: -17.530323, o: 2.915081 },
        { map: 725, x: -8790.485352, y: 715.798096, z: -17.826672, o: 3.115357 },
        { map: 725, x: -8788.862305, y: 722.507446, z: -17.412905, o: 2.306397 },
        { map: 725, x: -8789.353516, y: 724.855835, z: -17.362411, o: 2.836541 },
        { map: 725, x: -8792.712891, y: 724.643921, z: -17.404791, o: 3.488422 },
        { map: 725, x: -8798.860352, y: 720.349304, z: -17.701706, o: 3.951807 },
        { map: 725, x: -8801.476562, y: 721.519836, z: -17.432652, o: 3.382393 },
        { map: 725, x: -8805.390625, y: 718.876648, z: -17.511824, o: 3.822216 },
        { map: 725, x: -8807.338867, y: 717.203857, z: -17.58374, o: 4.289528 },
        { map: 725, x: -8809.956055, y: 710.712219, z: -18.156651, o: 4.305237 },
        { map: 725, x: -8812.087891, y: 708.603943, z: -18.290424, o: 3.276366 },
        { map: 725, x: -8820.701172, y: 711.644348, z: -17.533258, o: 3.40203 },
        { map: 725, x: -8821.523438, y: 709.634521, z: -17.721603, o: 3.802583 },
        { map: 725, x: -8825.12793, y: 709.474731, z: -17.560799, o: 3.64943 },
        { map: 725, x: -8829.364258, y: 706.520325, z: -17.67169, o: 4.324872 },
        { map: 725, x: -8833.075195, y: 706.600769, z: -17.385874, o: 3.657284 },
        { map: 725, x: -8836.03418, y: 702.90094, z: -17.383934, o: 4.328799 },
        { map: 725, x: -8832.696289, y: 699.74585, z: -17.546341, o: 5.699317 },
        { map: 725, x: -8832.922852, y: 697.667603, z: -17.440317, o: 4.73328 },
        { map: 725, x: -8830.62207, y: 694.867065, z: -17.5298, o: 5.216297 },
        { map: 725, x: -8831.561523, y: 692.804871, z: -17.360905, o: 4.878577 },
        { map: 725, x: -8825.02832, y: 687.485229, z: -17.822302, o: 5.628628 },
        { map: 725, x: -8822.867188, y: 683.467102, z: -17.867962, o: 5.510818 },
        { map: 725, x: -8821.53418, y: 682.324097, z: -17.959555, o: 5.608993 },
        { map: 725, x: -8824.005859, y: 677.463074, z: -17.463127, o: 4.835375 },
        { map: 725, x: -8822.163086, y: 672.788147, z: -17.424444, o: 5.85639 },
        { map: 725, x: -8813.602539, y: 673.914734, z: -18.440672, o: 5.860318 },
        { map: 725, x: -8813.726562, y: 670.324951, z: -18.179741, o: 5.239854 },
        { map: 725, x: -8810.491211, y: 667.940186, z: -18.417984, o: 5.573647 },
        { map: 725, x: -8810.454102, y: 664.225586, z: -18.298918, o: 5.016015 },
        { map: 725, x: -8812.145508, y: 661.766968, z: -18.001318, o: 3.955729 },
        { map: 725, x: -8815.808594, y: 658.830994, z: -17.461927, o: 4.713637 },
        { map: 725, x: -8810.738281, y: 652.537231, z: -17.719477, o: 5.373372 },
        { map: 725, x: -8808.804688, y: 652.535339, z: -17.937906, o: 5.93493 },
        { map: 725, x: -8804.850586, y: 648.562073, z: -18.140388, o: 5.487256 },
        { map: 725, x: -8806.232422, y: 645.630493, z: -17.803623, o: 5.004238 },
        { map: 725, x: -8805.24707, y: 636.757629, z: -17.460646, o: 5.067069 },
        { map: 725, x: -8803.722656, y: 635.053162, z: -17.528378, o: 5.879955 },
        { map: 725, x: -8802.525391, y: 630.563232, z: -17.425816, o: 5.793564 },
        { map: 725, x: -8800.108398, y: 630.836304, z: -17.690126, o: 0.189747 },
        { map: 725, x: -8794.030273, y: 626.220276, z: -17.464701, o: 0.586374 },
        { map: 725, x: -8793.010742, y: 628.665955, z: -17.728527, o: 1.002635 },
        { map: 725, x: -8789.65625, y: 628.635071, z: -17.516571, o: 0.692402 },
        { map: 725, x: -8788.824219, y: 630.632629, z: -17.688961, o: 0.712037 },
        { map: 725, x: -8786.951172, y: 634.115845, z: -17.935146, o: 0.798431 },
        { map: 725, x: -8784.0, y: 633.482849, z: -17.672697, o: 0.024814 },
        { map: 725, x: -8781.341797, y: 636.825073, z: -17.829292, o: 0.547104 },
        { map: 725, x: -8780.350586, y: 636.510559, z: -17.735025, o: 0.18582 },
        { map: 725, x: -8778.576172, y: 635.176147, z: -17.529676, o: 0.162259 },
        { map: 725, x: -8774.647461, y: 636.79303, z: -17.509546, o: 0.57852 },
        { map: 725, x: -8774.463867, y: 644.146057, z: -18.308569, o: 1.363918 },
        { map: 725, x: -8776.026367, y: 646.63501, z: -18.666603, o: 2.435987 },
        { map: 725, x: -8778.569336, y: 653.267029, z: -19.563576, o: 1.949039 },
        { map: 725, x: -8781.678711, y: 654.174805, z: -19.832148, o: 2.278907 },
        { map: 725, x: -8788.398438, y: 657.993042, z: -19.832148, o: 2.765854 },
        { map: 725, x: -8788.839844, y: 660.751038, z: -19.832148, o: 2.043287 },
        { map: 725, x: -8789.828125, y: 663.225342, z: -19.832148, o: 1.748763 },
        { map: 725, x: -8791.681641, y: 664.438965, z: -19.832148, o: 2.062922 },
        { map: 725, x: -8799.717773, y: 667.986938, z: -19.816351, o: 2.337812 },
        { map: 725, x: -8799.532227, y: 671.034607, z: -19.831314, o: 1.780179 },
        { map: 725, x: -8800.066406, y: 672.82135, z: -19.831314, o: 1.968674 },
        { map: 725, x: -8804.618164, y: 674.239014, z: -19.516281, o: 2.184659 },
        { map: 725, x: -8804.765625, y: 676.751221, z: -19.690397, o: 2.184659 },
        { map: 725, x: -8807.478516, y: 680.023682, z: -19.649851, o: 2.930788 },
        { map: 725, x: -8813.692383, y: 682.830933, z: -19.036583, o: 1.59561 },
        { map: 725, x: -8814.765625, y: 689.118347, z: -19.173027, o: 1.827303 },
        { map: 725, x: -8814.501953, y: 691.071411, z: -19.258116, o: 0.625644 },
        { map: 725, x: -8810.564453, y: 692.53772, z: -19.805511, o: 0.122989 },
        { map: 725, x: -8809.116211, y: 694.835999, z: -19.83238, o: 0.547104 },
        { map: 725, x: -8806.62793, y: 694.175171, z: -19.83238, o: 0.484272 },
        { map: 725, x: -8803.838867, y: 697.600159, z: -19.83238, o: 0.484272 },
        { map: 725, x: -8800.273438, y: 697.421875, z: -19.83238, o: 6.154847 },
        { map: 725, x: -8797.076172, y: 699.751465, z: -19.547594, o: 5.738587 },
        { map: 725, x: -8793.746094, y: 700.204773, z: -19.125332, o: 5.153468 },
        { map: 725, x: -8792.457031, y: 695.143921, z: -19.18973, o: 5.153468 },
        { map: 725, x: -8790.150391, y: 694.393494, z: -18.858749, o: 5.275204 },
        { map: 725, x: -8791.263672, y: 690.848389, z: -19.173323, o: 4.949266 },
        { map: 725, x: -8793.814453, y: 686.796936, z: -19.788961, o: 4.925704 },
        { map: 725, x: -8790.227539, y: 683.513733, z: -19.588968, o: 5.451919 },
        { map: 725, x: -8789.820312, y: 680.340881, z: -19.740297, o: 5.440138 },
        { map: 725, x: -8786.326172, y: 680.139221, z: -19.359035, o: 5.440138 },
        { map: 725, x: -8782.245117, y: 679.903687, z: -18.929005, o: 5.440138 },
        { map: 725, x: -8782.373047, y: 675.515503, z: -19.269075, o: 5.247717 },
        { map: 725, x: -8779.859375, y: 674.189026, z: -19.062008, o: 5.247717 },
        { map: 725, x: -8781.5, y: 670.800659, z: -19.520773, o: 4.517299 },
        { map: 725, x: -8780.863281, y: 667.919617, z: -19.608023, o: 5.059221 },
        { map: 725, x: -8777.691406, y: 666.983765, z: -19.205202, o: 5.487263 },
        { map: 725, x: -8777.301758, y: 663.503418, z: -19.334749, o: 5.275207 },
        { map: 725, x: -8773.991211, y: 662.825195, z: -18.933674, o: 5.345892 },
    ],
    1200
);

export let DungeonMob02 = std.CreatureTemplates.create(
    MODNAME,
    "dungeonmob02banshee",
    10463
);
DungeonMob02.Name.enGB.set("Tormented Banshee");
//Spells
DungeonMob02.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 11000, 15000, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 3000, 7000, 3000, 7000, 100);
});
DungeonMob02.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
});
DungeonMob02.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(16868, 2, 7);
});
DungeonMob02.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37500, 2, 7);
});
//End of Spells
DungeonMob02.Level.set(6, 6);
DungeonMob02.FactionTemplate.set(48);
DungeonMob02.DamageSchool.Normal.set();
DungeonMob02.Stats.ArmorMod.set(5);
DungeonMob02.Stats.DamageMod.set(40);
DungeonMob02.Stats.ExperienceMod.set(10);
DungeonMob02.Stats.HealthMod.set(60);
DungeonMob02.Stats.ManaMod.set(10);
DungeonMob02.Rank.ELITE.set();
DungeonMob02.HoverHeight.set(1);
DungeonMob02.MovementType.RANDOM_MOVEMENT.set();
DungeonMob02.Stats.ExperienceMod.set(4);
export let DungeonMob02Loot = DungeonMob02.NormalLoot;
spawnMultipleNPCWithTimer(
    DungeonMob02.ID,
    10,
    0,
    [
        { map: 725, x: -8798.952148, y: 646.615112, z: -12.577168, o: 0.80016 },
        { map: 725, x: -8768.009766, y: 660.008728, z: -13.705646, o: 1.990039 },
        { map: 725, x: -8812.773438, y: 697.80304, z: -13.72541, o: 3.560836 },
        { map: 725, x: -8867.517578, y: 662.877075, z: -8.754834, o: 3.753258 },
        { map: 725, x: -8920.761719, y: 654.439148, z: -8.973216, o: 3.25453 },
    ],
    120
);

SQL.creature_template_movement.add(DungeonMob02.ID).Flight.set(1);
addLootToCreature(
    DungeonMob02Loot,
    [tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial],
    [10, 10, 10],
    3
);
addLootToCreature(
    DungeonMob02Loot,
    tierOneBaseResources,
    [5, 5, 5, 5, 5, 5, 5],
    3
);
addLootToCreature(
    DungeonMob02Loot,
    [tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial],
    [2, 2, 2],
    4
);
addLootToCreature(
    DungeonMob02Loot,
    tierTwoBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    4
);
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    DungeonMob02Loot,
    [
        ReignLeggings.ID,
        TrackerBelt.ID,
        Noose.ID,
        SporeReed.ID,
        RenewalHammer.ID,
        WildMagic.ID,
        UnbrokenChain.ID,
        PhosphoSword.ID,
        DestructiveMaul.ID,
        Bladefist.ID,
        Fathomstone.ID,
        ArgentSentinel.ID,
        ObliterativeBoots.ID,
        VigilanteRing.ID,
        Naaru.ID,
        LostAge.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    DungeonMob02Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(DungeonMob02Loot, [OrbofPower.ID], 0.5, 3);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Room 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let SummonedSkeleton = std.CreatureTemplates.create(
    MODNAME,
    "skeletonbones",
    3271
);
SummonedSkeleton.Name.enGB.set("Animated Bones");
SummonedSkeleton.Level.set(5, 5);
SummonedSkeleton.FactionTemplate.set(48);
SummonedSkeleton.DamageSchool.Normal.set();
SummonedSkeleton.Stats.ArmorMod.set(10);
SummonedSkeleton.Stats.DamageMod.set(30);
SummonedSkeleton.Stats.ExperienceMod.set(4);
SummonedSkeleton.Stats.HealthMod.set(12);
SummonedSkeleton.Stats.ManaMod.set(10);
SummonedSkeleton.Models.clearAll();
SummonedSkeleton.Models.addIds(30363);
spawnMultipleNPCWithTimer(
    SummonedSkeleton.ID,
    2,
    0,
    [
        { map: 725, x: -8852.720703, y: 650.377197, z: -18.361275, o: 4.9009 },
        { map: 725, x: -8852.268555, y: 648.018433, z: -18.690559, o: 3.927008 },
        { map: 725, x: -8854.642578, y: 649.275208, z: -19.048063, o: 3.46755 },
        { map: 725, x: -8855.084961, y: 646.072998, z: -18.534111, o: 3.534309 },
        { map: 725, x: -8857.874023, y: 645.37262, z: -18.955378, o: 2.1363 },
        { map: 725, x: -8857.786133, y: 647.435974, z: -19.047812, o: 1.189895 },
        { map: 725, x: -8860.289062, y: 648.565979, z: -18.537807, o: 1.731819 },
        { map: 725, x: -8875.995117, y: 640.20697, z: -18.975773, o: 4.347199 },
        { map: 725, x: -8877.486328, y: 639.445618, z: -19.048018, o: 4.170486 },
        { map: 725, x: -8875.992188, y: 637.864136, z: -19.048018, o: 4.166559 },
        { map: 725, x: -8877.998047, y: 636.887451, z: -19.048018, o: 2.851017 },
        { map: 725, x: -8879.333984, y: 636.632019, z: -19.04719, o: 1.818218 },
        { map: 725, x: -8878.758789, y: 637.876831, z: -19.04719, o: 0.946426 },
        { map: 725, x: -8882.12793, y: 638.777283, z: -19.001978, o: 3.110198 },
        { map: 725, x: -8898.390625, y: 629.826538, z: -19.048256, o: 4.335425 },
        { map: 725, x: -8897.975586, y: 627.373535, z: -19.032854, o: 4.237251 },
        { map: 725, x: -8899.788086, y: 627.054993, z: -19.065437, o: 3.923093 },
        { map: 725, x: -8899.572266, y: 625.399109, z: -19.054993, o: 2.674309 },
        { map: 725, x: -8901.452148, y: 627.957336, z: -19.056793, o: 1.853568 },
        { map: 725, x: -8903.952148, y: 626.536804, z: -18.730326, o: 2.285537 },
        { map: 725, x: -8904.664062, y: 628.988586, z: -18.193815, o: 2.890294 },
        { map: 725, x: -8900.323242, y: 679.645752, z: -19.048077, o: 1.818225 },
        { map: 725, x: -8898.370117, y: 680.179382, z: -19.048077, o: 1.672926 },
        { map: 725, x: -8899.762695, y: 680.036621, z: -19.048077, o: 1.672926 },
        { map: 725, x: -8899.938477, y: 681.861938, z: -19.047918, o: 0.651909 },
        { map: 725, x: -8898.558594, y: 683.466553, z: -18.953476, o: 5.717727 },
        { map: 725, x: -8895.698242, y: 681.108337, z: -19.047762, o: 5.607772 },
        { map: 725, x: -8893.462891, y: 682.746277, z: -17.947693, o: 0.345603 },
        { map: 725, x: -8878.061523, y: 689.948364, z: -18.949837, o: 1.606164 },
        { map: 725, x: -8875.910156, y: 690.511108, z: -19.048334, o: 1.582602 },
        { map: 725, x: -8878.87793, y: 691.849304, z: -19.048334, o: 1.178122 },
        { map: 725, x: -8876.916016, y: 692.819885, z: -19.048035, o: 0.498753 },
        { map: 725, x: -8876.484375, y: 694.56958, z: -18.436691, o: 6.149693 },
        { map: 725, x: -8872.885742, y: 694.826599, z: -18.178885, o: 5.43891 },
        { map: 725, x: -8872.30957, y: 691.556091, z: -18.691048, o: 5.399641 },
    ],
    1200
);

export let LightningRing = std.Spells.create(
    MODNAME,
    "lightningring-spell",
    50840
);
export let WoePillar = std.Spells.create(MODNAME, "woevolley-spell", 50761);
WoePillar.Effects.get(0).BasePoints.set(1566);
WoePillar.Effects.get(0).DieSides.set(121);
WoePillar.Effects.get(0).Radius.modRefCopy((val) => {
    val.set(20, 0, 20);
});
export let TetherLightning = std.Spells.create(
    MODNAME,
    "tetherlightning-spell",
    50895
);

export let SentinelMob = std.CreatureTemplates.create(
    MODNAME,
    "sentinelmob",
    3271
);
SentinelMob.Name.enGB.set("Harrowing Sentinel");

SentinelMob.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
SentinelMob.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
SentinelMob.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(LightningRing.ID, 2, 7);
});
SentinelMob.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(WoePillar.ID, 2, 7);
});
SentinelMob.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(TetherLightning.ID, 2, 7);
});
SentinelMob.Level.set(6, 6);
SentinelMob.FactionTemplate.set(48);
SentinelMob.DamageSchool.Normal.set();
SentinelMob.Scale.set(0.25);
SentinelMob.Stats.ArmorMod.set(5);
SentinelMob.Stats.DamageMod.set(30);
SentinelMob.Stats.ExperienceMod.set(15);
SentinelMob.Stats.HealthMod.set(60);
SentinelMob.Stats.ManaMod.set(10);
SentinelMob.Rank.ELITE.set();
SentinelMob.Models.clearAll();
SentinelMob.Models.addIds(27897);
export let SentinelMobLoot = SentinelMob.NormalLoot;
spawnMultipleNPCWithTimer(
    SentinelMob.ID,
    0,
    0,
    [
        { map: 725, x: -8869.99707, y: 648.229126, z: -17.079538, o: 1.998873 },
        { map: 725, x: -8883.800781, y: 681.033997, z: -17.079538, o: 5.167956 },
        { map: 725, x: -8861.091797, y: 688.948364, z: -17.079538, o: 5.089416 },
        { map: 725, x: -8848.62207, y: 660.045471, z: -17.079538, o: 2.057785 },
        { map: 725, x: -8891.041016, y: 640.974426, z: -17.079294, o: 2.026369 },
        { map: 725, x: -8706.897461, y: 606.845886, z: -18.139137, o: 3.571591 },
        { map: 725, x: -8725.962891, y: 555.761536, z: -18.144554, o: 1.996855 },
        { map: 725, x: -8906.180664, y: 668.69989, z: -17.078783, o: 5.105127 },
    ],
    300
);
addLootToCreature(
    SentinelMobLoot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [2, 2, 2],
    4
);
addLootToCreature(
    SentinelMobLoot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    4
);
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    SentinelMobLoot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.25,
    1
);
addLootToCreatureSingleChance(
    SentinelMobLoot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(SentinelMobLoot, [OrbofPower.ID], 5, 3);

export let r2ConsumeSpell = std.Spells.create(
    MODNAME,
    "r2consumespell-spell",
    49381
);
export let r2BossShadowVolley = std.Spells.create(
    MODNAME,
    "r2bossshadowvolley-spell",
    25586
);
r2BossShadowVolley.Effects.get(0).BasePoints.set(2566);
r2BossShadowVolley.Effects.get(0).DieSides.set(321);
export let r2DrainLife = std.Spells.create(MODNAME, "r2drainlife-spell", 49617);

export let DungeonBoss02 = std.CreatureTemplates.create(
    MODNAME,
    "dungeonboss02",
    3271
);
DungeonBoss02.Name.enGB.set("Seren the Invincible");

DungeonBoss02.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
DungeonBoss02.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
DungeonBoss02.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(r2DrainLife.ID, 2, 7);
});
DungeonBoss02.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(r2BossShadowVolley.ID, 2, 7);
});
DungeonBoss02.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(r2ConsumeSpell.ID, 2, 7);
});
DungeonBoss02.Level.set(7, 7);
DungeonBoss02.FactionTemplate.set(48);
DungeonBoss02.DamageSchool.Normal.set();
DungeonBoss02.Stats.ArmorMod.set(5);
DungeonBoss02.Stats.DamageMod.set(75);
DungeonBoss02.Stats.ExperienceMod.set(30);
DungeonBoss02.Stats.HealthMod.set(100);
DungeonBoss02.Stats.ManaMod.set(25);
DungeonBoss02.Rank.RARE_ELITE.set();
DungeonBoss02.Models.clearAll();
DungeonBoss02.Models.addIds(16632);
DungeonBoss02.Scale.set(1.75);
export let DungeonBoss02Loot = DungeonBoss02.NormalLoot;
spawnMultipleNPCWithTimer(
    DungeonBoss02.ID,
    0,
    0,
    [{ map: 725, x: -8925.356, y: 642.169, z: -17.079, o: 0.3456 }],
    3600
);
addLootToCreature(
    DungeonBoss02Loot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [4, 4, 4],
    3
);
addLootToCreature(
    DungeonBoss02Loot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    3
);

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    DungeonBoss02Loot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    DungeonBoss02Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(DungeonBoss02Loot, [OrbofPower.ID], 100, 3);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Dungeon Chest Loot Must Always Remain at Bottom
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let OpenWorldDungeonChest01 = makeResourceNode(
    "Ancient Chest",
    9069,
    57,
    "openworlddungeonchest01-chest"
);
spawnMultiGobTimer(
    OpenWorldDungeonChest01.ID,
    [
        { map: 725, x: -8814.077148, y: 652.743408, z: -17.329342, o: 0.416527 },
        { map: 725, x: -8781.975586, y: 720.315796, z: -15.189892, o: 3.53063 },
        { map: 725, x: -8826.964844, y: 714.795288, z: -15.188274, o: 5.144623 },
        { map: 725, x: -8923.068359, y: 636.437134, z: -17.078632, o: 0.416514 },
        { map: 725, x: -8928.217773, y: 648.075134, z: -17.078632, o: 0.416514 },
        { map: 725, x: -8735.5, y: 555.899597, z: -15.536025, o: 0.458514 },
    ],
    1800
);
OpenWorldDungeonChest01.Size.set(0.5);
addLootToGobChest(
    OpenWorldDungeonChest01,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2]
);
/*Base Resources - Group 5*/
addLootToGobChestSingleChanceMultiGroup(
    OpenWorldDungeonChest01,
    [tierThreeMailMaterial, tierThreeLeatherMaterial, tierThreeClothMaterial],
    10,
    1,
    3,
    5
);
/*Epic Items - Group 0*/
addLootToGobChestSingleChance(
    OpenWorldDungeonChest01,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
        VolatilePower.ID,
        DragonscaleBlade.ID,
        MiseryMace.ID,
        HeartPit.ID,
        DungeonItem21.ID,
        DungeonItem22.ID,
        DungeonItem23.ID,
        DungeonItem24.ID,
        DungeonItem25.ID,
        DungeonItem26.ID,
        DungeonItem27.ID,
        DungeonItem28.ID,
        DungeonItem29.ID,
        DungeonItem30.ID,
        DungeonItem31.ID,
        DungeonItem32.ID,
        DungeonItem33.ID,
        DungeonItem34.ID,
        DungeonItem35.ID,
        DungeonItem36.ID,
    ],
    0.0125
);
/*Rare Items - Group 0*/
addLootToGobChestSingleChance(
    OpenWorldDungeonChest01,
    [
        ReignLeggings.ID,
        TrackerBelt.ID,
        Noose.ID,
        SporeReed.ID,
        RenewalHammer.ID,
        WildMagic.ID,
        UnbrokenChain.ID,
        PhosphoSword.ID,
        DestructiveMaul.ID,
        Bladefist.ID,
        Fathomstone.ID,
        ArgentSentinel.ID,
        ObliterativeBoots.ID,
        VigilanteRing.ID,
        Naaru.ID,
        LostAge.ID,
    ],
    0.2
);
/*Semi Rare Armor - Group 1*/
addLootToGobChestSingleChance(
    OpenWorldDungeonChest01,
    [
        LurkerCord.ID,
        LurkerGrasp.ID,
        LurkerBelt.ID,
        LurkerGirdle.ID,
        RavagerCuff.ID,
        RavagerWrap.ID,
        Ravagerband.ID,
        Ravagerbracer.ID,
        Gliderwrap.ID,
        Gliderboots.ID,
        Glidersabatons.ID,
        Glidergreaves.ID,
        LostTreads.ID,
        Commendation.ID,
        Contempt.ID,
        FocusingCrystal.ID,
        SunwellVial.ID,
    ],
    0.5,
    1
);
/*Ultra Rares*/
addLootToGobChestSingleChance(
    OpenWorldDungeonChest01,
    [DarkSteel.ID, DarkLeather.ID, DarkCloth.ID, EyeofDestiny.ID],
    0.05,
    3
);
/*Money Bags*/
addLootToGobChest(OpenWorldDungeonChest01, [LargeSackofCoins.ID], [15], 8);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let RisenRavager = std.CreatureTemplates.create(
    MODNAME,
    "risenravager",
    3271
);
RisenRavager.Name.enGB.set("Risen Ravager");
RisenRavager.Level.set(5, 5);
RisenRavager.FactionTemplate.set(48);
RisenRavager.DamageSchool.Normal.set();
RisenRavager.Stats.ArmorMod.set(1);
RisenRavager.Stats.DamageMod.set(25);
RisenRavager.Stats.ExperienceMod.set(10);
RisenRavager.Stats.HealthMod.set(10);
RisenRavager.Stats.ManaMod.set(10);
RisenRavager.Models.clearAll();
RisenRavager.Models.addIds(829);
RisenRavager.Scale.set(1);
export let RisenRavagerLoot = RisenRavager.NormalLoot;
spawnMultipleNPCWithTimer(
    RisenRavager.ID,
    2,
    0,
    [
        { map: 725, x: -8982.760742, y: 631.077637, z: -9.805208, o: 0.11217 },
        { map: 725, x: -8982.345703, y: 633.235107, z: -9.862338, o: 0.646241 },
        { map: 725, x: -8979.838867, y: 634.948669, z: -10.102848, o: 0.681584 },
        { map: 725, x: -8979.116211, y: 634.873413, z: -10.142712, o: 0.681584 },
        { map: 725, x: -8974.176758, y: 632.492004, z: -10.298597, o: 0.732634 },
        { map: 725, x: -8972.748047, y: 632.982422, z: -10.197169, o: 1.506252 },
        { map: 725, x: -8975.616211, y: 636.565979, z: -10.672174, o: 1.506252 },
        { map: 725, x: -8975.616211, y: 636.565979, z: -10.672174, o: 1.506252 },
        { map: 725, x: -8971.637695, y: 640.607971, z: -11.290502, o: 1.510179 },
        { map: 725, x: -8973.417969, y: 641.894714, z: -11.601798, o: 2.315212 },
        { map: 725, x: -8975.598633, y: 641.073975, z: -10.859719, o: 2.154206 },
        { map: 725, x: -8974.137695, y: 644.68811, z: -11.532078, o: 1.573011 },
        { map: 725, x: -8972.327148, y: 646.521118, z: -11.622564, o: 1.506252 },
        { map: 725, x: -8974.058594, y: 649.921082, z: -11.305696, o: 1.749725 },
        { map: 725, x: -8971.919922, y: 651.350586, z: -10.927354, o: 1.843973 },
        { map: 725, x: -8971.919922, y: 651.350586, z: -10.927354, o: 1.843973 },
        { map: 725, x: -8975.048828, y: 654.345032, z: -10.775536, o: 2.570467 },
        { map: 725, x: -8975.734375, y: 658.064026, z: -11.048238, o: 2.456584 },
        { map: 725, x: -8975.856445, y: 658.163696, z: -11.098074, o: 2.456584 },
        { map: 725, x: -8980.675781, y: 657.617432, z: -11.180152, o: 2.660788 },
        { map: 725, x: -8980.675781, y: 657.617432, z: -11.180152, o: 2.660788 },
        { map: 725, x: -8982.085938, y: 662.600586, z: -11.854362, o: 2.507635 },
        { map: 725, x: -8985.376953, y: 661.94104, z: -11.089398, o: 2.601883 },
        { map: 725, x: -8985.500977, y: 664.09314, z: -11.206018, o: 2.091374 },
        { map: 725, x: -8985.500977, y: 664.09314, z: -11.206018, o: 2.091374 },
        { map: 725, x: -8990.800781, y: 665.913147, z: -10.699533, o: 2.052104 },
        { map: 725, x: -8989.838867, y: 668.977051, z: -10.289649, o: 2.052104 },
        { map: 725, x: -8989.838867, y: 668.977051, z: -10.289649, o: 2.052104 },
        { map: 725, x: -8993.40625, y: 670.803223, z: -10.015284, o: 1.427712 },
        { map: 725, x: -8992.90625, y: 672.894531, z: -9.632645, o: 1.262778 },
        { map: 725, x: -8991.447266, y: 673.929565, z: -9.371442, o: 1.227435 },
        { map: 725, x: -8992.527344, y: 676.442017, z: -9.441696, o: 1.227435 },
        { map: 725, x: -8989.75293, y: 677.755249, z: -9.208472, o: 1.227435 },
        { map: 725, x: -8990.834961, y: 680.534607, z: -9.807166, o: 1.227435 },
        { map: 725, x: -8989.333008, y: 681.355164, z: -9.71615, o: 1.227435 },
        { map: 725, x: -8989.998047, y: 683.483398, z: -10.124415, o: 1.227435 },
        { map: 725, x: -8988.189453, y: 684.565308, z: -9.780212, o: 1.227435 },
        { map: 725, x: -8989.363281, y: 688.669556, z: -10.153674, o: 0.689437 },
        { map: 725, x: -8987.654297, y: 688.610718, z: -10.100965, o: 0.689437 },
        { map: 725, x: -8986.847656, y: 691.833435, z: -10.008644, o: 0.830809 },
        { map: 725, x: -8986.847656, y: 691.833435, z: -10.008644, o: 0.830809 },
        { map: 725, x: -8982.005859, y: 695.368408, z: -11.513579, o: 0.693364 },
        { map: 725, x: -8981.751953, y: 698.121704, z: -11.05034, o: 0.693364 },
        { map: 725, x: -8978.672852, y: 698.380493, z: -12.089729, o: 0.257468 },
        { map: 725, x: -8978.672852, y: 698.380493, z: -12.089729, o: 0.257468 },
        { map: 725, x: -8975.001953, y: 701.231689, z: -12.799412, o: 0.147513 },
        { map: 725, x: -8972.615234, y: 701.798645, z: -13.131451, o: 6.147955 },
        { map: 725, x: -8970.401367, y: 703.46936, z: -13.095102, o: 6.144029 },
        { map: 725, x: -8968.87793, y: 700.436401, z: -13.257692, o: 5.70028 },
        { map: 725, x: -8966.858398, y: 700.824097, z: -13.646138, o: 5.566763 },
        { map: 725, x: -8964.270508, y: 699.863342, z: -13.821949, o: 5.001279 },
        { map: 725, x: -8961.310547, y: 698.27655, z: -13.660394, o: 5.060184 },
        { map: 725, x: -8961.310547, y: 698.27655, z: -13.660394, o: 5.060184 },
        { map: 725, x: -8963.250977, y: 693.646057, z: -12.749532, o: 5.060184 },
        { map: 725, x: -8963.250977, y: 693.646057, z: -12.749532, o: 5.060184 },
        { map: 725, x: -8959.796875, y: 690.943237, z: -13.179111, o: 5.802384 },
        { map: 725, x: -8959.796875, y: 690.943237, z: -13.179111, o: 5.802384 },
        { map: 725, x: -8958.110352, y: 685.798767, z: -12.751946, o: 5.778822 },
        { map: 725, x: -8955.517578, y: 685.768921, z: -12.769022, o: 5.554986 },
        { map: 725, x: -8955.517578, y: 685.768921, z: -12.769022, o: 5.554986 },
        { map: 725, x: -8955.081055, y: 682.290283, z: -12.304727, o: 5.649233 },
        { map: 725, x: -8952.185547, y: 682.726013, z: -12.757603, o: 5.649233 },
        { map: 725, x: -8951.495117, y: 678.901123, z: -12.312183, o: 5.649233 },
        { map: 725, x: -8951.495117, y: 678.901123, z: -12.312183, o: 5.649233 },
        { map: 725, x: -8947.537109, y: 677.047119, z: -13.697893, o: 5.900559 },
        { map: 725, x: -8946.03418, y: 675.526489, z: -14.249252, o: 0.375283 },
        { map: 725, x: -8945.617188, y: 675.394409, z: -14.385116, o: 0.646245 },
        { map: 725, x: -8940.432617, y: 674.229919, z: -15.909534, o: 0.336013 },
        { map: 725, x: -8939.90625, y: 675.441406, z: -16.199835, o: 0.453823 },
        { map: 725, x: -8939.90625, y: 675.441406, z: -16.199835, o: 0.453823 },
        { map: 725, x: -8938.754883, y: 679.507324, z: -16.147734, o: 0.512727 },
        { map: 725, x: -8934.448242, y: 678.722351, z: -16.871792, o: 0.497019 },
        { map: 725, x: -8934.448242, y: 678.722351, z: -16.871792, o: 0.497019 },
        { map: 725, x: -8932.783203, y: 683.616455, z: -17.108524, o: 0.497019 },
        { map: 725, x: -8930.703125, y: 682.916748, z: -17.464298, o: 0.394918 },
        { map: 725, x: -8927.498047, y: 681.061646, z: -17.215406, o: 6.195084 },
        { map: 725, x: -8925.944336, y: 682.393738, z: -17.405228, o: 0.013999 },
        { map: 725, x: -8924.376953, y: 684.509888, z: -17.782642, o: 6.065493 },
        { map: 725, x: -8924.376953, y: 684.509888, z: -17.782642, o: 6.065493 },
        { map: 725, x: -8921.805664, y: 688.135864, z: -17.571384, o: 5.197631 },
        { map: 725, x: -8922.552734, y: 685.77533, z: -17.854378, o: 5.185851 },
        { map: 725, x: -8919.639648, y: 680.05127, z: -17.487516, o: 5.181924 },
    ],
    600
);

export let BrittleBones = std.Spells.create(
    MODNAME,
    "brittlebones-spell",
    32441
);
BrittleBones.Duration.modRefCopy((val) => {
    val.set(5000, 0, 5000);
});
export let RoB = std.Spells.load(37091);
RoB.Effects.get(1).BasePoints.set(798);
RoB.Effects.get(1).DieSides.set(220);
export let RainofBones = std.Spells.create(MODNAME, "rainofbones-spell", 37098);
export let BoneGrinder = std.Spells.create(MODNAME, "bonegrinder-spell", 43951);

export let ScythemawDestroyer = std.CreatureTemplates.create(
    MODNAME,
    "scythemawdestroyer",
    3271
);
ScythemawDestroyer.Name.enGB.set("Scythemaw Destroyer");

ScythemawDestroyer.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
ScythemawDestroyer.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
ScythemawDestroyer.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(BrittleBones.ID, 2, 7);
});
ScythemawDestroyer.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(RainofBones.ID, 2, 7);
});
ScythemawDestroyer.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(BoneGrinder.ID, 2, 7);
});

ScythemawDestroyer.Level.set(6, 6);
ScythemawDestroyer.FactionTemplate.set(48);
ScythemawDestroyer.DamageSchool.Normal.set();
ScythemawDestroyer.Scale.set(1);
ScythemawDestroyer.Stats.ArmorMod.set(25);
ScythemawDestroyer.Stats.DamageMod.set(40);
ScythemawDestroyer.Stats.ExperienceMod.set(25);
ScythemawDestroyer.Stats.HealthMod.set(65);
ScythemawDestroyer.Stats.ManaMod.set(10);
ScythemawDestroyer.Rank.ELITE.set();
ScythemawDestroyer.Models.clearAll();
ScythemawDestroyer.Models.addIds(14706);
ScythemawDestroyer.Scale.set(1);
export let ScythemawDestroyerLoot = ScythemawDestroyer.NormalLoot;
spawnMultipleNPCWithTimer(
    ScythemawDestroyer.ID,
    2,
    0,
    [
        { map: 725, x: -8927.415039, y: 683.349365, z: -17.649937, o: 3.485466 },
        { map: 725, x: -8942.821289, y: 673.623779, z: -15.470843, o: 3.599349 },
        { map: 725, x: -8957.847656, y: 686.295715, z: -12.792575, o: 2.165997 },
        { map: 725, x: -8975.251953, y: 700.493347, z: -12.604589, o: 3.595422 },
        { map: 725, x: -8986.131836, y: 692.557739, z: -10.118654, o: 4.3926 },
        { map: 725, x: -8991.078125, y: 674.938599, z: -9.299158, o: 4.585022 },
        { map: 725, x: -8981.920898, y: 660.721191, z: -11.593039, o: 5.704208 },
        { map: 725, x: -8970.933594, y: 649.180664, z: -10.987558, o: 4.746025 },
        { map: 725, x: -8975.859375, y: 632.992371, z: -10.30929, o: 2.939614 },
    ],
    300
);
addLootToCreature(
    ScythemawDestroyerLoot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [2, 2, 2],
    4
);
addLootToCreature(
    ScythemawDestroyerLoot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    4
);
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    ScythemawDestroyerLoot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.25,
    1
);
addLootToCreatureSingleChance(
    ScythemawDestroyerLoot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(ScythemawDestroyerLoot, [OrbofPower.ID], 5, 3);

export let PoisonedCloud = std.Spells.create(
    MODNAME,
    "poisonedcloud-spell",
    23861
);
export let PoisonVolley = std.Spells.create(
    MODNAME,
    "poisonvolley-spell",
    29293
);
export let BurningBlaze = std.Spells.create(
    MODNAME,
    "burningblaze-spell",
    58759
);

export let ApothecaryAcolyte = std.CreatureTemplates.create(
    MODNAME,
    "apothecaryacolyte",
    3271
);
ApothecaryAcolyte.Name.enGB.set("Apothecary Scholar");

ApothecaryAcolyte.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
ApothecaryAcolyte.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
ApothecaryAcolyte.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(PoisonedCloud.ID, 2, 7);
});
ApothecaryAcolyte.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(PoisonVolley.ID, 2, 7);
});
ApothecaryAcolyte.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(BurningBlaze.ID, 2, 7);
});
ApothecaryAcolyte.Level.set(6, 6);
ApothecaryAcolyte.FactionTemplate.set(48);
ApothecaryAcolyte.DamageSchool.Normal.set();
ApothecaryAcolyte.Scale.set(1);
ApothecaryAcolyte.Stats.ArmorMod.set(25);
ApothecaryAcolyte.Stats.DamageMod.set(40);
ApothecaryAcolyte.Stats.ExperienceMod.set(25);
ApothecaryAcolyte.Stats.HealthMod.set(75);
ApothecaryAcolyte.Stats.ManaMod.set(10);
ApothecaryAcolyte.Rank.ELITE.set();
ApothecaryAcolyte.Models.clearAll();
ApothecaryAcolyte.Models.addIds(16237);
ApothecaryAcolyte.Scale.set(1);
export let ApothecaryAcolyteLoot = ApothecaryAcolyte.NormalLoot;
spawnMultipleNPCWithTimer(
    ApothecaryAcolyte.ID,
    0,
    0,
    [
        { map: 725, x: -9011.136719, y: 642.505737, z: -9.465117, o: 3.802162 },
        { map: 725, x: -9014.806641, y: 639.10968, z: -9.465117, o: 1.088611 },
        { map: 725, x: -9015.661133, y: 642.680542, z: -9.465117, o: 5.581089 },
        { map: 725, x: -8992.369141, y: 629.776245, z: -9.465713, o: 4.622905 },
        { map: 725, x: -8993.72168, y: 623.943665, z: -9.465713, o: 1.120024 },
        { map: 725, x: -9010.689453, y: 623.45575, z: -9.465713, o: 3.480147 },
        { map: 725, x: -9011.354492, y: 617.423767, z: -9.465713, o: 2.612281 },
        { map: 725, x: -9014.100586, y: 614.164856, z: -9.465713, o: 2.337392 },
        { map: 725, x: -9010.541016, y: 603.463196, z: -9.465375, o: 4.689657 },
        { map: 725, x: -9013.341797, y: 603.468689, z: -9.465375, o: 4.717144 },
        { map: 725, x: -9005.053711, y: 603.508118, z: -9.465375, o: 4.717144 },
        { map: 725, x: -9002.954102, y: 603.518127, z: -9.465375, o: 4.717144 },
        { map: 725, x: -9002.09668, y: 597.292664, z: -9.465375, o: 4.728924 },
        { map: 725, x: -9004.896484, y: 597.246338, z: -9.465375, o: 4.728924 },
        { map: 725, x: -9006.738281, y: 586.701477, z: -9.465373, o: 0.051869 },
        { map: 725, x: -9006.626953, y: 584.380127, z: -9.465373, o: 0.047942 },
        { map: 725, x: -8996.293945, y: 592.329651, z: -9.465373, o: 4.548286 },
        { map: 725, x: -8994.320312, y: 592.256653, z: -9.465373, o: 4.709288 },
        { map: 725, x: -8986.916992, y: 595.436951, z: -9.465373, o: 0.74695 },
        { map: 725, x: -8983.991211, y: 598.328308, z: -9.465373, o: 3.837493 },
        { map: 725, x: -8987.238281, y: 611.537048, z: -9.465373, o: 5.176596 },
        { map: 725, x: -8989.361328, y: 608.193909, z: -9.465373, o: 0.330687 },
        { map: 725, x: -8986.473633, y: 615.066284, z: -9.465373, o: 1.033618 },
        { map: 725, x: -8988.176758, y: 618.145569, z: -9.465373, o: 0.118629 },
        { map: 725, x: -8982.706055, y: 572.665527, z: -4.194689, o: 5.156953 },
        { map: 725, x: -8984.414062, y: 569.370361, z: -4.194689, o: 0.150037 },
        { map: 725, x: -8984.305664, y: 566.456299, z: -4.194689, o: 0.000812 },
        { map: 725, x: -8984.057617, y: 564.135376, z: -4.194689, o: 0.405292 },
        { map: 725, x: -8985.181641, y: 547.204651, z: -4.194689, o: 4.230189 },
        { map: 725, x: -8986.994141, y: 544.74469, z: -4.194689, o: 1.261384 },
        { map: 725, x: -9005.160156, y: 545.242981, z: -4.194689, o: 3.272004 },
        { map: 725, x: -9011.642578, y: 543.798523, z: -4.194689, o: 0.212878 },
        { map: 725, x: -9013.918945, y: 555.91626, z: -4.193851, o: 1.783674 },
        { map: 725, x: -9011.466797, y: 558.437134, z: -4.193851, o: 3.495843 },
        { map: 725, x: -9012.632812, y: 561.216248, z: -4.193851, o: 3.778586 },
        { map: 725, x: -9012.55957, y: 565.99408, z: -4.193851, o: 2.549438 },
        { map: 725, x: -9012.55957, y: 565.99408, z: -4.193851, o: 2.549438 },
        { map: 725, x: -9011.467773, y: 568.384399, z: -4.193851, o: 3.287712 },
        { map: 725, x: -9014.243164, y: 572.374329, z: -4.193851, o: 4.281242 },
        { map: 725, x: -8999.005859, y: 570.001953, z: -4.193798, o: 1.226042 },
        { map: 725, x: -8995.913086, y: 569.424438, z: -4.193798, o: 1.587325 },
        { map: 725, x: -9000.337891, y: 529.22406, z: -3.954185, o: 2.447341 },
        { map: 725, x: -9002.001953, y: 531.85022, z: -3.89904, o: 5.663543 },
        { map: 725, x: -8991.238281, y: 522.712524, z: -3.908976, o: 1.233895 },
        { map: 725, x: -8994.373047, y: 526.912964, z: -3.937281, o: 0.4053 },
    ],
    300
);
addLootToCreature(
    ApothecaryAcolyteLoot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [2, 2, 2],
    4
);
addLootToCreature(
    ApothecaryAcolyteLoot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    4
);
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    ApothecaryAcolyteLoot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.25,
    1
);
addLootToCreatureSingleChance(
    ApothecaryAcolyteLoot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(ApothecaryAcolyteLoot, [OrbofPower.ID], 5, 3);

export let PowerBurn = std.Spells.create(MODNAME, "powerburn-spell", 62129);
PowerBurn.Effects.get(0).BasePoints.set(2129);
PowerBurn.Effects.get(1).BasePoints.set(14);
PowerBurn.Effects.get(2).BasePoints.set(469);
export let SoulScream = std.Spells.create(MODNAME, "soulscream-spell", 41545);
export let SoulStrike = std.Spells.create(MODNAME, "soulstrike-spell", 32315);

export let DungeonBoss03 = std.CreatureTemplates.create(
    MODNAME,
    "dungeonboss03",
    3271
);
DungeonBoss03.Name.enGB.set("The Professor");

DungeonBoss03.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
DungeonBoss03.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
DungeonBoss03.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(SoulScream.ID, 2, 7);
});
DungeonBoss03.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(PowerBurn.ID, 2, 7);
});
DungeonBoss03.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(SoulStrike.ID, 2, 7);
});

DungeonBoss03.Level.set(7, 7);
DungeonBoss03.FactionTemplate.set(48);
DungeonBoss03.DamageSchool.Normal.set();
DungeonBoss03.Stats.ArmorMod.set(5);
DungeonBoss03.Stats.DamageMod.set(110);
DungeonBoss03.Stats.ExperienceMod.set(30);
DungeonBoss03.Stats.HealthMod.set(150);
DungeonBoss03.Stats.ManaMod.set(25);
DungeonBoss03.Rank.RARE_ELITE.set();
DungeonBoss03.Models.clearAll();
DungeonBoss03.Models.addIds(30881);
DungeonBoss03.Scale.set(0.5);
export let DungeonBoss03Loot = DungeonBoss03.NormalLoot;
spawnMultipleNPCWithTimer(
    DungeonBoss03.ID,
    0,
    0,
    [{ map: 725, x: -8998.505859, y: 577.777466, z: -3.098353, o: 4.728919 }],
    3600
);
addLootToCreature(
    DungeonBoss03Loot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [4, 4, 4],
    3
);
addLootToCreature(
    DungeonBoss03Loot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    3
);

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    DungeonBoss03Loot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    DungeonBoss03Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(DungeonBoss03Loot, [OrbofPower.ID], 100, 3);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                  The Council

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let CouncilBoss01 = std.CreatureTemplates.create(
    MODNAME,
    "councilboss01",
    299
);
CouncilBoss01.Name.enGB.set("Lieutenant Commander Springraven");
CouncilBoss01.Subname.enGB.set("Coven of the Damned");
CouncilBoss01.Models.clearAll();
CouncilBoss01.Models.addIds(3223);

CouncilBoss01.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
CouncilBoss01.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
CouncilBoss01.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37859, 2, 7);
});
CouncilBoss01.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37788, 2, 7);
});
CouncilBoss01.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37640, 2, 7);
});
CouncilBoss01.Level.set(7, 7);
CouncilBoss01.FactionTemplate.set(48);
CouncilBoss01.DamageSchool.Normal.set();
CouncilBoss01.Stats.ArmorMod.set(5);
CouncilBoss01.Stats.DamageMod.set(110);
CouncilBoss01.Stats.ExperienceMod.set(30);
CouncilBoss01.Stats.HealthMod.set(150);
CouncilBoss01.Stats.ManaMod.set(25);
CouncilBoss01.Rank.RARE_ELITE.set();
SQL.creature_equip_template.add(CouncilBoss01.ID, 1).ItemID1.set(7721);
SQL.creature_equip_template.add(CouncilBoss01.ID, 1).ItemID2.set(7726);
export let CouncilBoss01Loot = CouncilBoss01.NormalLoot;
spawnMultipleNPCWithTimer(
    CouncilBoss01.ID,
    0,
    0,
    [{ map: 725, x: -9063.556641, y: 505.916321, z: -4.03881, o: 0.027225 }],
    3600
);
addLootToCreature(
    CouncilBoss01Loot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [4, 4, 4],
    3
);
addLootToCreature(
    CouncilBoss01Loot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    3
);

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    CouncilBoss01Loot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    CouncilBoss01Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(CouncilBoss01Loot, [OrbofPower.ID], 100, 3);

export let CouncilBoss02 = std.CreatureTemplates.create(
    MODNAME,
    "councilboss02",
    299
);
CouncilBoss02.Name.enGB.set("Widow Fae");
CouncilBoss02.Subname.enGB.set("Coven of the Damned");
CouncilBoss02.Models.clearAll();
CouncilBoss02.Models.addIds(17121);

CouncilBoss02.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
CouncilBoss02.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
CouncilBoss02.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37632, 2, 7);
});
CouncilBoss02.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37621, 2, 7);
});
CouncilBoss02.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37540, 2, 7);
});
CouncilBoss02.Level.set(7, 7);
CouncilBoss02.FactionTemplate.set(48);
CouncilBoss02.DamageSchool.Normal.set();
CouncilBoss02.Stats.ArmorMod.set(5);
CouncilBoss02.Stats.DamageMod.set(110);
CouncilBoss02.Stats.ExperienceMod.set(30);
CouncilBoss02.Stats.HealthMod.set(150);
CouncilBoss02.Stats.ManaMod.set(25);
CouncilBoss02.Rank.RARE_ELITE.set();
SQL.creature_equip_template.add(CouncilBoss02.ID, 1).ItemID1.set(19355);
export let CouncilBoss02Loot = CouncilBoss02.NormalLoot;
spawnMultipleNPCWithTimer(
    CouncilBoss02.ID,
    0,
    0,
    [{ map: 725, x: -9063.827148, y: 514.786133, z: -4.040724, o: 6.25936 }],
    3600
);
addLootToCreature(
    CouncilBoss02Loot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [4, 4, 4],
    3
);
addLootToCreature(
    CouncilBoss02Loot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    3
);

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    CouncilBoss02Loot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    CouncilBoss02Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(CouncilBoss02Loot, [OrbofPower.ID], 100, 3);
//Boss Creature Spawns
export let CouncilBoss03 = std.CreatureTemplates.create(
    MODNAME,
    "councilboss03",
    299
);
CouncilBoss03.Name.enGB.set("Maxim Wintergrave");
CouncilBoss03.Subname.enGB.set("Coven of the Damned");
CouncilBoss03.Models.clearAll();
CouncilBoss03.Models.addIds(2042);
CouncilBoss03.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
CouncilBoss03.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
CouncilBoss03.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(37396, 2, 7);
});
CouncilBoss03.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(22572, 2, 7);
});
CouncilBoss03.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(22574, 2, 7);
});
CouncilBoss03.Level.set(7, 7);
CouncilBoss03.FactionTemplate.set(48);
CouncilBoss03.DamageSchool.Normal.set();
CouncilBoss03.Stats.ArmorMod.set(5);
CouncilBoss03.Stats.DamageMod.set(110);
CouncilBoss03.Stats.ExperienceMod.set(30);
CouncilBoss03.Stats.HealthMod.set(150);
CouncilBoss03.Stats.ManaMod.set(25);
CouncilBoss03.Rank.RARE_ELITE.set();
SQL.creature_equip_template.add(CouncilBoss03.ID, 1).ItemID1.set(6174);
export let CouncilBoss03Loot = CouncilBoss03.NormalLoot;
spawnMultipleNPCWithTimer(
    CouncilBoss03.ID,
    0,
    0,
    [{ map: 725, x: -9063.713867, y: 523.42981, z: -3.872571, o: 6.282922 }],
    3600
);
addLootToCreature(
    CouncilBoss03Loot,
    [tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial],
    [4, 4, 4],
    3
);
addLootToCreature(
    CouncilBoss03Loot,
    tierThreeBaseResources,
    [2, 2, 2, 2, 2, 2, 2],
    3
);

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(
    CouncilBoss03Loot,
    [
        DungeonItem01.ID,
        DungeonItem02.ID,
        DungeonItem03.ID,
        DungeonItem04.ID,
        DungeonItem05.ID,
        DungeonItem06.ID,
        DungeonItem07.ID,
        DungeonItem08.ID,
        DungeonItem09.ID,
        DungeonItem10.ID,
        DungeonItem11.ID,
        DungeonItem12.ID,
        DungeonItem13.ID,
        DungeonItem14.ID,
        DungeonItem15.ID,
        DungeonItem16.ID,
        DungeonItem17.ID,
        DungeonItem18.ID,
        DungeonItem19.ID,
        DungeonItem20.ID,
    ],
    0.5,
    1
);
addLootToCreatureSingleChance(
    CouncilBoss03Loot,
    [
        undiscoveredReds[0],
        undiscoveredReds[1],
        undiscoveredReds[2],
        undiscoveredReds[3],
        undiscoveredReds[4],
        undiscoveredReds[5],
        undiscoveredReds[6],
        undiscoveredReds[7],
        undiscoveredGreens[0],
        undiscoveredGreens[1],
        undiscoveredGreens[2],
        undiscoveredGreens[3],
        undiscoveredGreens[4],
        undiscoveredGreens[5],
        undiscoveredGreens[6],
        undiscoveredPurples[0],
        undiscoveredPurples[1],
        undiscoveredPurples[2],
        undiscoveredPurples[3],
        undiscoveredPurples[4],
        undiscoveredPurples[5],
        undiscoveredPurples[6],
        undiscoveredYellows[0],
        undiscoveredYellows[1],
        undiscoveredYellows[2],
        undiscoveredYellows[3],
        undiscoveredYellows[4],
        undiscoveredBlues[0],
        undiscoveredBlues[1],
        undiscoveredBlues[2],
        undiscoveredBlues[3],
        undiscoveredOranges[0],
        undiscoveredOranges[1],
        undiscoveredOranges[2],
        undiscoveredOranges[3],
        undiscoveredOranges[4],
        undiscoveredOranges[5],
    ],
    2,
    2
);
addLootToCreatureSingleChance(CouncilBoss03Loot, [OrbofPower.ID], 100, 3);
