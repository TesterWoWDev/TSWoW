import { std } from "wow/wotlk";

import { spawnMultipleNPCWithTimer } from "../functions/spawning-functions";
import { MODNAME } from "../modname";
import { Fawn01 } from "./(Zone-0)Walk-of-Heroes/starting-zone-creatures";
import { Zone3RareCreature1 } from "./(Zone-3)Leronar/zone-3-creatures";

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                              Blackrock Fortress Zone
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fawn Spawns New
spawnMultipleNPCWithTimer(
    Fawn01.ID,
    5,
    0,
    [
        { map: 725, x: -8061.970703, y: 201.731735, z: 1.174377, o: 5.102258 },
        { map: 725, x: -8025.303223, y: 172.239777, z: 0.523174, o: 5.703087 },
        { map: 725, x: -7999.850098, y: 116.646225, z: 2.114146, o: 6.095786 },
        { map: 725, x: -7947.083008, y: 131.017181, z: 0.47827, o: 0.362378 },
        { map: 725, x: -7910.515625, y: 168.122314, z: 2.726336, o: 0.825763 },
        { map: 725, x: -7874.849121, y: 185.30632, z: 0.948785, o: 0.429137 },
        { map: 725, x: -7856.412109, y: 234.790543, z: 1.755053, o: 0.955354 },
        { map: 725, x: -7804.593262, y: 247.756119, z: 0.181069, o: 0.798274 },
        { map: 725, x: -7792.575195, y: 337.747528, z: 1.820405, o: 1.485497 },
        { map: 725, x: -7823.513672, y: 398.583496, z: 1.547921, o: 3.350819 },
        { map: 725, x: -7885.959473, y: 401.085968, z: 2.062373, o: 3.103418 },
        { map: 725, x: -8000.028809, y: 446.584839, z: 0.053655, o: 2.498662 },
        { map: 725, x: -8007.058105, y: 550.804626, z: 0.242084, o: 1.257732 },
        { map: 725, x: -8021.678223, y: 610.197571, z: 1.088982, o: 2.773551 },
        { map: 725, x: -8091.25293, y: 638.490051, z: 0.134432, o: 3.299768 },
        { map: 725, x: -8168.776855, y: 583.090332, z: -2.599264, o: 3.778863 },
        { map: 725, x: -8196.80957, y: 509.096252, z: 1.027916, o: 4.367913 },
        { map: 725, x: -8283.90918, y: 434.273346, z: 1.006449, o: 3.904528 },
        { map: 725, x: -8339.169922, y: 411.563171, z: 2.16899, o: 4.658504 },
        { map: 725, x: -8363.975586, y: 314.426544, z: 1.19202, o: 5.220057 },
        { map: 725, x: -8324.290039, y: 234.296432, z: 1.86677, o: 0.024638 },
        { map: 725, x: -8287.391602, y: 263.102905, z: 3.050151, o: 0.283819 },
        { map: 725, x: -8229.648438, y: 258.559021, z: 3.077799, o: 0.079616 },
        { map: 725, x: -8138.889648, y: 270.790955, z: 0.057817, o: 6.272481 },
        { map: 725, x: -8119.63916, y: 184.818039, z: 0.462849, o: 4.151912 },
        { map: 725, x: -8184.550781, y: 125.014763, z: 1.097368, o: 4.238304 },
        { map: 725, x: -8171.518066, y: 59.534889, z: 0.771008, o: 5.294657 },
        { map: 725, x: -8121.000977, y: -9.211844, z: 0.529058, o: 3.056282 },
        { map: 725, x: -8201.439453, y: -26.549778, z: 1.282197, o: 4.799864 },
        { map: 725, x: -8209.302734, y: -78.071373, z: 0.312487, o: 4.524973 },
        { map: 725, x: -8220.663086, y: -156.934952, z: 0.198076, o: 6.131103 },
        { map: 725, x: -8140.496582, y: -154.327072, z: 0.951697, o: 4.411087 },
        { map: 725, x: -8215.223633, y: -227.210831, z: 0.278653, o: 3.574638 },
        { map: 725, x: -8289.287109, y: -192.725708, z: 1.226542, o: 2.577182 },
        { map: 725, x: -8330.37207, y: -140.69693, z: 0.906498, o: 2.357271 },
        { map: 725, x: -8431.476562, y: -140.916946, z: 0.479238, o: 3.80633 },
        { map: 725, x: -8716.108398, y: -33.742191, z: 32.049961, o: 6.102806 },
        { map: 725, x: -8654.079102, y: -75.843369, z: 33.006699, o: 5.71011 },
        { map: 725, x: -8679.473633, y: -62.391918, z: 31.180559, o: 6.161709 },
        { map: 725, x: -8859.136719, y: 648.41748, z: 34.654739, o: 3.369617 },
        { map: 725, x: -8904.333984, y: 623.679932, z: 34.035114, o: 3.954739 },
        { map: 725, x: -8904.345703, y: 572.404053, z: 24.74894, o: 4.673381 },
        { map: 725, x: -8852.37207, y: 569.771423, z: 22.092176, o: 5.136769 },
        { map: 725, x: -8883.999023, y: 497.457336, z: 17.321123, o: 3.825155 },
        { map: 725, x: -8944.936523, y: 483.979248, z: 25.64212, o: 3.868352 },
        { map: 725, x: -8953.807617, y: 419.202332, z: 27.769886, o: 5.026818 },
    ],
    10
);

export let BurningMaul = std.Spells.create(MODNAME, "burningmaul-spell", 30599);
BurningMaul.Effects.get(0).PointsBase.set(345); //240 damage
BurningMaul.Effects.get(0).PointsDieSides.set(121); //121 up or down damage

export let BlackRockNpc01 = std.CreatureTemplates.create(
    MODNAME,
    "blackrocknpc01",
    4464
);
BlackRockNpc01.Name.enGB.set("Dreadrock Orc Grunt");
BlackRockNpc01.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
});
BlackRockNpc01.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
});

BlackRockNpc01.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(BurningMaul.ID, 0, 0);
});
BlackRockNpc01.MovementType.RANDOM_MOVEMENT.set();
BlackRockNpc01.Level.set(7, 8);
BlackRockNpc01.FactionTemplate.set(48);
BlackRockNpc01.DamageSchool.Normal.set();
BlackRockNpc01.Stats.ArmorMod.set(5);
BlackRockNpc01.Stats.DamageMod.set(5);
BlackRockNpc01.Stats.ExperienceMod.set(7);
BlackRockNpc01.Stats.HealthMod.set(12);
BlackRockNpc01.Stats.ManaMod.set(10);

export let BlackRockNpc01Loot = BlackRockNpc01.NormalLoot;
spawnMultipleNPCWithTimer(
    BlackRockNpc01.ID,
    5,
    0,
    [
        { map: 725, x: -8918.054688, y: 711.26178, z: 46.706429, o: 1.893041 },
        { map: 725, x: -8919.152344, y: 723.848877, z: 49.193459, o: 3.302831 },
        { map: 725, x: -8933.929688, y: 749.103455, z: 52.413883, o: 3.102554 },
        { map: 725, x: -8947.697266, y: 764.481323, z: 56.771992, o: 3.000453 },
        { map: 725, x: -8958.62793, y: 760.88147, z: 57.957123, o: 3.161459 },
        { map: 725, x: -8973.533203, y: 736.032593, z: 65.782005, o: 4.692985 },
        { map: 725, x: -8967.904297, y: 733.765503, z: 65.116035, o: 4.516271 },
        { map: 725, x: -8959.506836, y: 722.813293, z: 64.827644, o: 3.294979 },
        { map: 725, x: -8903.34082, y: 767.51001, z: 50.617134, o: 0.294757 },
        { map: 725, x: -8866.066406, y: 776.042114, z: 50.876053, o: 6.252003 },
        { map: 725, x: -8864.338867, y: 770.176208, z: 50.805702, o: 0.718872 },
        { map: 725, x: -8855.055664, y: 772.90094, z: 49.612213, o: 2.077611 },
        { map: 725, x: -8856.308594, y: 745.059082, z: 49.700588, o: 4.115724 },
        { map: 725, x: -8851.5625, y: 737.251282, z: 49.788464, o: 4.237458 },
        { map: 725, x: -8852.31543, y: 730.900635, z: 49.774464, o: 1.390388 },
        { map: 725, x: -8798.001953, y: 750.188171, z: 48.391178, o: 3.946865 },
        { map: 725, x: -8806.068359, y: 749.052856, z: 48.391178, o: 6.012458 },
        { map: 725, x: -8775.129883, y: 716.467041, z: 48.391819, o: 3.514899 },
        { map: 725, x: -8781.532227, y: 724.695496, z: 48.391819, o: 4.206049 },
        { map: 725, x: -8788.894531, y: 713.274048, z: 48.391819, o: 5.776843 },
        { map: 725, x: -8772.335938, y: 693.014893, z: 48.399536, o: 6.01639 },
        { map: 725, x: -8761.378906, y: 686.82843, z: 48.392982, o: 1.013404 },
        { map: 725, x: -8727.918945, y: 676.371216, z: 48.866299, o: 4.343495 },
        { map: 725, x: -8724.668945, y: 675.238647, z: 48.534557, o: 3.978286 },
        { map: 725, x: -8697.004883, y: 687.104675, z: 48.39233, o: 5.156385 },
        { map: 725, x: -8644.777344, y: 695.391479, z: 48.471943, o: 1.029116 },
        { map: 725, x: -8634.961914, y: 708.278992, z: 48.152157, o: 3.475632 },
        { map: 725, x: -8690.084961, y: 754.285828, z: 19.916653, o: 2.344658 },
        { map: 725, x: -8780.289062, y: 806.079224, z: 9.939207, o: 1.838076 },
        { map: 725, x: -8819.321289, y: 869.542358, z: 3.711184, o: 4.618385 },
        { map: 725, x: -8886.111328, y: 943.753723, z: 6.27182, o: 4.42596 },
        { map: 725, x: -8901.375977, y: 838.04541, z: 49.878208, o: 2.081555 },
        { map: 725, x: -8909.542969, y: 840.375183, z: 49.2019, o: 1.468944 },
        { map: 725, x: -8905.578125, y: 848.535461, z: 49.062508, o: 4.5909 },
        { map: 725, x: -8948.833984, y: 806.695557, z: 55.509773, o: 3.463855 },
        { map: 725, x: -8980.779297, y: 794.502014, z: 61.923687, o: 4.327793 },
        { map: 725, x: -8977.75, y: 863.225403, z: 53.647755, o: 1.712417 },
        { map: 725, x: -8986.803711, y: 865.984314, z: 53.822899, o: 1.072317 },
        { map: 725, x: -8988.554688, y: 885.39801, z: 52.984154, o: 0.341897 },
        { map: 725, x: -8973.236328, y: 886.233276, z: 52.530399, o: 4.40241 },
        { map: 725, x: -8982.229492, y: 912.428406, z: 47.784214, o: 3.522764 },
        { map: 725, x: -8987.384766, y: 927.023743, z: 48.221348, o: 4.084323 },
        { map: 725, x: -9030.621094, y: 810.404358, z: 60.854187, o: 3.801581 },
        { map: 725, x: -9046.630859, y: 860.489136, z: 61.750286, o: 3.703407 },
        { map: 725, x: -9043.854492, y: 853.871399, z: 61.70504, o: 3.30678 },
        { map: 725, x: -9080.012695, y: 847.21167, z: 61.391975, o: 1.146935 },
        { map: 725, x: -9019.188477, y: 878.965942, z: 62.323475, o: 1.241182 },
        { map: 725, x: -9033.495117, y: 907.816345, z: 64.45562, o: 2.02658 },
        { map: 725, x: -9045.857422, y: 923.705017, z: 61.711372, o: 1.527852 },
        { map: 725, x: -9043.930664, y: 935.120605, z: 61.471394, o: 4.881503 },
        { map: 725, x: -9111.400391, y: 844.196899, z: 61.313225, o: 3.880129 },
        { map: 725, x: -9107.125, y: 827.090576, z: 63.37149, o: 2.627419 },
        { map: 725, x: -9122.34375, y: 867.718323, z: 61.29829, o: 2.749155 },
        { map: 725, x: -9128.474609, y: 864.734558, z: 61.304485, o: 0.966301 },
        { map: 725, x: -9150.824219, y: 873.940979, z: 61.29961, o: 2.105129 },
        { map: 725, x: -9158.444336, y: 879.920166, z: 62.617752, o: 5.439142 },
        { map: 725, x: -9150.928711, y: 884.003235, z: 63.45092, o: 4.791189 },
        { map: 725, x: -9118.932617, y: 795.83075, z: 61.935284, o: 5.957507 },
        { map: 725, x: -8147.710449, y: 370.965942, z: 0.254967, o: 1.716352 },
        { map: 725, x: -8141.964844, y: 384.233612, z: 0.265603, o: 3.675921 },
        { map: 725, x: -8169.807617, y: 214.204269, z: 0.151429, o: 3.45994 },
        { map: 725, x: -8170.455566, y: 207.362656, z: 0.112364, o: 2.368236 },
        { map: 725, x: -9101.888672, y: 782.029541, z: 61.369949, o: 3.994022 },
    ],
    10
);

export let BurningBreathDamageSpell = std.Spells.create(
    MODNAME,
    "bbds-spell",
    66670
);
BurningBreathDamageSpell.Effects.get(0).PointsBase.set(327);
BurningBreathDamageSpell.Effects.get(0).PointsDieSides.set(101);
BurningBreathDamageSpell.Effects.get(0).Radius.set(10);
BurningBreathDamageSpell.Range.set(10);
export let BurningBreath = std.Spells.create(
    MODNAME,
    "burningbreath-spell",
    67328
);
BurningBreath.Effects.get(0).TriggerSpell.set(BurningBreathDamageSpell.ID);
BurningBreath.Effects.get(0).Radius.set(10);
export let PyroBlast = std.Spells.create(MODNAME, "pyroblast-spell", 70516);
PyroBlast.Effects.get(0).PointsBase.set(652);
PyroBlast.Effects.get(0).PointsDieSides.set(121);
PyroBlast.Effects.get(1).PointsBase.set(122);
PyroBlast.Effects.get(1).PointsDieSides.set(32);
export let PyroClast = std.Spells.create(MODNAME, "pyroclast-spell", 70516);
PyroClast.Effects.get(1).PointsBase.set(122);
PyroClast.Effects.get(1).PointsDieSides.set(32);
PyroClast.CastTime.set(4000);

export let BlackRockNpc02 = std.CreatureTemplates.create(
    MODNAME,
    "blackrocknpc02",
    7026
);
BlackRockNpc02.Name.enGB.set("Dreadrock Orc Warlock");
BlackRockNpc02.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
BlackRockNpc02.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});

BlackRockNpc02.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(BurningBreath.ID, 0, 0);
});
BlackRockNpc02.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(PyroBlast.ID, 0, 0);
});
BlackRockNpc02.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(PyroClast.ID, 0, 0);
});
BlackRockNpc02.MovementType.RANDOM_MOVEMENT.set();
BlackRockNpc02.Level.set(7, 9);
BlackRockNpc02.FactionTemplate.set(48);
BlackRockNpc02.DamageSchool.Normal.set();
BlackRockNpc02.Stats.ArmorMod.set(5);
BlackRockNpc02.Stats.DamageMod.set(5);
BlackRockNpc02.Stats.ExperienceMod.set(7);
BlackRockNpc02.Stats.HealthMod.set(12);
BlackRockNpc02.Stats.ManaMod.set(10);

export let BlackRockNpc02Loot = BlackRockNpc02.NormalLoot;
spawnMultipleNPCWithTimer(
    BlackRockNpc02.ID,
    5,
    0,
    [
        { map: 725, x: -8925.642578, y: 716.2453, z: 49.23547, o: 0.302653 },
        { map: 725, x: -8966.569336, y: 724.623596, z: 65.557976, o: 0.91919 },
        { map: 725, x: -8905.172852, y: 784.943115, z: 51.327923, o: 3.836946 },
        { map: 725, x: -8861.480469, y: 778.788574, z: 49.923309, o: 4.602705 },
        { map: 725, x: -8934.113281, y: 856.017334, z: 55.145458, o: 5.191751 },
        { map: 725, x: -8981.821289, y: 863.692993, z: 53.790653, o: 1.445402 },
        { map: 725, x: -9079.601562, y: 854.46759, z: 61.369076, o: 5.254582 },
        { map: 725, x: -9117.094727, y: 831.55426, z: 61.33276, o: 0.495071 },
        { map: 725, x: -9074.285156, y: 779.32428, z: 61.491486, o: 1.688876 },
        { map: 725, x: -9122.451172, y: 892.245605, z: 69.456902, o: 2.183677 },
        { map: 725, x: -9099.463867, y: 900.022217, z: 69.637367, o: 1.512162 },
        { map: 725, x: -9098.392578, y: 922.536255, z: 69.63839, o: 4.63412 },
        { map: 725, x: -8822.267578, y: 755.02655, z: 63.952396, o: 5.961437 },
        { map: 725, x: -8860.486328, y: 711.456726, z: 44.724548, o: 2.953358 },
        { map: 725, x: -8140.11377, y: 375.276031, z: -0.280609, o: 3.039748 },
        { map: 725, x: -8180.597656, y: 203.650406, z: 0.353956, o: 1.468955 },
        { map: 725, x: -8908.295898, y: 649.788025, z: 37.701054, o: 5.360599 },
    ],
    120
);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                              Harpy Zone
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let SisterCreature01 = std.CreatureTemplates.create(
    MODNAME,
    "sistercreature01",
    3276
);
SisterCreature01.Name.enGB.set("Sister Vandra'Shiva");
SisterCreature01.Scale.set(2);
SisterCreature01.FactionTemplate.set(48);
SisterCreature01.MovementType.RANDOM_MOVEMENT.set();
SisterCreature01.Level.set(10, 10);
SisterCreature01.Rank.RARE.set();
SisterCreature01.AIName.SmartAI();

SisterCreature01.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
    script.Action.setCreateTimedEvent(3, 0, 0, 5000, 7000, 100);
});
SisterCreature01.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
    script.Action.setRemoveTimedEvent(3);
});

SisterCreature01.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52870, 0, 0);
});
SisterCreature01.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52873, 0, 0);
});
SisterCreature01.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52905, 0, 0);
});
SisterCreature01.Scripts.onTimedEventTriggered(3, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52943, 0, 0);
});

SisterCreature01.DamageSchool.Normal.set();
SisterCreature01.Stats.ArmorMod.set(5);
SisterCreature01.Stats.DamageMod.set(75);
SisterCreature01.Stats.HealthMod.set(50);
SisterCreature01.Stats.ManaMod.set(3);
SisterCreature01.Stats.ExperienceMod.set(10);
SisterCreature01.HoverHeight.set(1);
export let SisterCreature01Loot = Zone3RareCreature1.NormalLoot;
spawnMultipleNPCWithTimer(
    SisterCreature01.ID,
    50,
    0,
    [{ map: 725, x: -8752.238281, y: 417.183105, z: 47.513695, o: 1.916613 }],
    300
);
std.SQL.creature_template_movement.add(SisterCreature01.ID).Flight.set(1);

export let SisterCreature02 = std.CreatureTemplates.create(
    MODNAME,
    "sistercreature02",
    3276
);
SisterCreature02.Name.enGB.set("Sister Candra'Shiva");
SisterCreature02.Scale.set(2);
SisterCreature02.FactionTemplate.set(48);
SisterCreature02.MovementType.RANDOM_MOVEMENT.set();
SisterCreature02.Level.set(10, 10);
SisterCreature02.Rank.RARE.set();
SisterCreature02.AIName.SmartAI();

SisterCreature02.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
    script.Action.setCreateTimedEvent(3, 0, 0, 5000, 7000, 100);
});
SisterCreature02.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
    script.Action.setRemoveTimedEvent(3);
});

SisterCreature02.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52870, 0, 0);
});
SisterCreature02.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52873, 0, 0);
});
SisterCreature02.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52905, 0, 0);
});
SisterCreature02.Scripts.onTimedEventTriggered(3, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52943, 0, 0);
});
SisterCreature02.DamageSchool.Normal.set();
SisterCreature02.Stats.ArmorMod.set(5);
SisterCreature02.Stats.DamageMod.set(75);
SisterCreature02.Stats.HealthMod.set(50);
SisterCreature02.Stats.ManaMod.set(3);
SisterCreature02.Stats.ExperienceMod.set(10);
SisterCreature02.HoverHeight.set(1);
export let SisterCreature02Loot = Zone3RareCreature1.NormalLoot;
spawnMultipleNPCWithTimer(
    SisterCreature02.ID,
    50,
    0,
    [{ map: 725, x: -8802.195312, y: 453.347565, z: 34.455067, o: 1.347199 }],
    300
);
std.SQL.creature_template_movement.add(SisterCreature02.ID).Flight.set(1);

export let SisterCreature03 = std.CreatureTemplates.create(
    MODNAME,
    "sistercreature03",
    3276
);
SisterCreature03.Name.enGB.set("Sister Zandra'Shiva");
SisterCreature03.Scale.set(2);
SisterCreature03.FactionTemplate.set(48);
SisterCreature03.MovementType.RANDOM_MOVEMENT.set();
SisterCreature03.Level.set(10, 10);
SisterCreature03.Rank.RARE.set();
SisterCreature03.AIName.SmartAI();

SisterCreature03.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
    script.Action.setCreateTimedEvent(3, 0, 0, 5000, 7000, 100);
});
SisterCreature03.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
    script.Action.setRemoveTimedEvent(3);
});

SisterCreature03.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52870, 0, 0);
});
SisterCreature03.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52873, 0, 0);
});
SisterCreature03.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52905, 0, 0);
});
SisterCreature03.Scripts.onTimedEventTriggered(3, (script) => {
    script.Target.setVictim();
    script.Action.setCast(52943, 0, 0);
});

SisterCreature03.DamageSchool.Normal.set();
SisterCreature03.Stats.ArmorMod.set(5);
SisterCreature03.Stats.DamageMod.set(75);
SisterCreature03.Stats.HealthMod.set(50);
SisterCreature03.Stats.ManaMod.set(3);
SisterCreature03.Stats.ExperienceMod.set(10);
SisterCreature03.HoverHeight.set(1);
export let SisterCreature03Loot = Zone3RareCreature1.NormalLoot;
spawnMultipleNPCWithTimer(
    SisterCreature03.ID,
    50,
    0,
    [{ map: 725, x: -8746.520508, y: 524.943848, z: 34.778702, o: 3.020098 }],
    300
);
std.SQL.creature_template_movement.add(SisterCreature03.ID).Flight.set(1);
