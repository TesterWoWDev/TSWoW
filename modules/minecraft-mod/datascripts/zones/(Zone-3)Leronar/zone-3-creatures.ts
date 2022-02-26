import { std } from "wow/wotlk";

import { spawnMultipleNPCWithTimer } from "../../functions/spawning-functions";

import { MODNAME } from "../../modname";
import { LoggingPileLogs } from "../item-manifest";

export let ChainLightning = std.Spells.create(
    MODNAME,
    "chainlightning-spell",
    10605
);
export let ShockLightning = std.Spells.create(
    MODNAME,
    "shocklightning-spell",
    26415
);
export let Thunderstorm = std.Spells.create(
    MODNAME,
    "thunderstorm-spell",
    51490
);
Thunderstorm.Effects.get(2).Type.set(0); //remove knockback
Thunderstorm.Effects.get(0).PointsBase.set(219); //Damage reduction

export let VoidStrike = std.Spells.create(MODNAME, "voidstrike-spell", 52633);
VoidStrike.Effects.get(0).PointsBase.set(29); //30% weapon damage
export let Concuss = std.Spells.create(MODNAME, "concuss-spell", 52719);
export let Destroy = std.Spells.create(MODNAME, "destroy-spell", 52771);
Destroy.Effects.get(0).PointsBase.set(9); //base weapon % reduction
Destroy.Effects.get(2).PointsBase.set(129); //dot reduction

//Normal Creature Spawns
export let Zone3Creature1 = std.CreatureTemplates.create(
    MODNAME,
    "zone3creature1",
    3271
);
Zone3Creature1.Name.enGB.set("Fenspindle Elementalist");
//Spells
Zone3Creature1.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
Zone3Creature1.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
Zone3Creature1.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(ChainLightning.ID, 2, 7);
});
Zone3Creature1.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(ShockLightning.ID, 2, 7);
});
Zone3Creature1.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(Thunderstorm.ID, 2, 7);
});
//End of Spells
Zone3Creature1.MovementType.RANDOM_MOVEMENT.set();
Zone3Creature1.Level.set(5, 6);
Zone3Creature1.FactionTemplate.set(48);
Zone3Creature1.DamageSchool.Normal.set();
Zone3Creature1.Stats.ArmorMod.set(5);
Zone3Creature1.Stats.DamageMod.set(5);
Zone3Creature1.Stats.ExperienceMod.set(7);
Zone3Creature1.Stats.HealthMod.set(12);
Zone3Creature1.Stats.ManaMod.set(10);

export let Zone3Creature1Loot = Zone3Creature1.NormalLoot;
spawnMultipleNPCWithTimer(
    Zone3Creature1.ID,
    5,
    0,
    [
        { map: 725, x: -8539.776367, y: 109.379311, z: 15.396795, o: 2.732026 },
        { map: 725, x: -8569.655273, y: 84.734695, z: 18.859642, o: 3.10509 },
        { map: 725, x: -8588.404297, y: 142.129562, z: 15.511452, o: 1.663884 },
        { map: 725, x: -8631.99707, y: 120.800171, z: 17.899673, o: 3.002989 },
        { map: 725, x: -8655.670898, y: 146.65892, z: 15.035048, o: 1.875942 },
        { map: 725, x: -8649.342773, y: 182.552734, z: 16.877825, o: 5.928597 },
        { map: 725, x: -8561.167969, y: 219.985977, z: 15.04572, o: 4.381362 },
        { map: 725, x: -8673.927734, y: 287.543915, z: 9.097383, o: 5.151052 },
        { map: 725, x: -8699.453125, y: 232.827576, z: 11.406096, o: 5.319913 },
        { map: 725, x: -8676.132812, y: 171.955307, z: 11.408776, o: 5.504482 },
    ],
    120
);

//Normal Creature Spawns
export let Zone3Creature2 = std.CreatureTemplates.create(
    MODNAME,
    "zone3creature2",
    3267
);
Zone3Creature2.Name.enGB.set("Fenspindle Ravager");
//Spells

Zone3Creature2.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
});
Zone3Creature2.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
});
Zone3Creature2.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(VoidStrike.ID, 2, 7);
});
Zone3Creature2.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(Destroy.ID, 2, 7);
});
//End of Spells
Zone3Creature2.MovementType.RANDOM_MOVEMENT.set();
Zone3Creature2.Level.set(5, 6);
Zone3Creature2.FactionTemplate.set(48);
Zone3Creature2.DamageSchool.Normal.set();
Zone3Creature2.Stats.ArmorMod.set(5);
Zone3Creature2.Stats.DamageMod.set(5);
Zone3Creature2.Stats.HealthMod.set(12);
Zone3Creature2.Stats.ManaMod.set(4);
Zone3Creature2.Stats.ExperienceMod.set(7);
export let Zone3Creature2Loot = Zone3Creature2.NormalLoot;
spawnMultipleNPCWithTimer(
    Zone3Creature2.ID,
    5,
    0,
    [
        { map: 725, x: -8438.496094, y: 141.671585, z: 4.920695, o: 3.804087 },
        { map: 725, x: -8436.646484, y: 110.102974, z: 15.436843, o: 3.737328 },
        { map: 725, x: -8485.598633, y: 109.273125, z: 19.954784, o: 3.112936 },
        { map: 725, x: -8491.832031, y: 94.444801, z: 22.373096, o: 3.941532 },
        { map: 725, x: -8527.117188, y: 63.136246, z: 26.692549, o: 2.790924 },
        { map: 725, x: -8565.970703, y: 91.292892, z: 17.975052, o: 1.974109 },
        { map: 725, x: -8585.304688, y: 83.492477, z: 17.917112, o: 1.962328 },
        { map: 725, x: -8583.612305, y: 126.70002, z: 14.36368, o: 1.675658 },
        { map: 725, x: -8600.430664, y: 140.693069, z: 14.375236, o: 1.114098 },
        { map: 725, x: -8589.825195, y: 169.082443, z: 14.747336, o: 1.601045 },
        { map: 725, x: -8596.505859, y: 181.24173, z: 15.214047, o: 2.229364 },
        { map: 725, x: -8607.561523, y: 214.776672, z: 15.391569, o: 2.162605 },
        { map: 725, x: -8629.743164, y: 233.426849, z: 15.607882, o: 3.18755 },
        { map: 725, x: -8658.890625, y: 228.618454, z: 4.159719, o: 5.029307 },
        { map: 725, x: -8679.730469, y: 164.69931, z: 10.647049, o: 2.86554 },
        { map: 725, x: -8693.318359, y: 179.163269, z: 13.220415, o: 2.272564 },
        { map: 725, x: -8713.572266, y: 245.683945, z: 15.930611, o: 1.608902 },
        { map: 725, x: -8719.59082, y: 276.249634, z: 14.717733, o: 0.741037 },
        { map: 725, x: -8646.53125, y: 313.87674, z: 18.101414, o: 0.517198 },
        { map: 725, x: -8642.451172, y: 345.8078, z: 14.38353, o: 1.54607 },
        { map: 725, x: -8619.030273, y: 320.01062, z: 16.207668, o: 4.448119 },
        { map: 725, x: -8617.089844, y: 274.770874, z: 14.331091, o: 3.827656 },
    ],
    120
);

export let Zone3Creature3 = std.CreatureTemplates.create(
    MODNAME,
    "zone3creature3",
    3115
);
Zone3Creature3.Name.enGB.set("Windravager Harpy");
//Spells
Zone3Creature3.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
Zone3Creature3.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
Zone3Creature3.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(43996, 2, 7);
});
Zone3Creature3.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(44120, 2, 7);
});
Zone3Creature3.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(38135, 2, 7);
});

//End of Spells
Zone3Creature3.MovementType.RANDOM_MOVEMENT.set();
Zone3Creature3.Level.set(5, 7);
Zone3Creature3.FactionTemplate.set(48);
Zone3Creature3.DamageSchool.Normal.set();
Zone3Creature3.Stats.ArmorMod.set(5);
Zone3Creature3.Stats.DamageMod.set(12);
Zone3Creature3.Stats.HealthMod.set(17);
Zone3Creature3.Stats.ManaMod.set(10);
Zone3Creature3.Stats.ExperienceMod.set(7);
export let Zone3Creature3Loot = Zone3Creature3.NormalLoot;
spawnMultipleNPCWithTimer(
    Zone3Creature3.ID,
    5,
    0,
    [
        { map: 725, x: -8754.365234, y: 458.828003, z: 15.050779, o: 3.030472 },
        { map: 725, x: -8760.339844, y: 468.525208, z: 16.112421, o: 3.88263 },
        { map: 725, x: -8765.952148, y: 462.675018, z: 15.634911, o: 3.784455 },
        { map: 725, x: -8797.623047, y: 430.609589, z: 14.553337, o: 3.348558 },
        { map: 725, x: -8806.160156, y: 433.117035, z: 14.442174, o: 2.362883 },
        { map: 725, x: -8810.850586, y: 465.113892, z: 15.25632, o: 2.60243 },
        { map: 725, x: -8808.392578, y: 478.869751, z: 15.673182, o: 2.873392 },
        { map: 725, x: -8829.19043, y: 479.185944, z: 14.328567, o: 3.285726 },
        { map: 725, x: -8842.69043, y: 468.761902, z: 13.342061, o: 3.560616 },
        { map: 725, x: -8836.810547, y: 507.044952, z: 14.718614, o: 0.921677 },
        { map: 725, x: -8831.756836, y: 528.012573, z: 15.179387, o: 0.371899 },
        { map: 725, x: -8815.546875, y: 536.452454, z: 15.406946, o: 5.944299 },
        { map: 725, x: -8806.613281, y: 523.690857, z: 15.617304, o: 5.818635 },
        { map: 725, x: -8794.696289, y: 534.03833, z: 14.370335, o: 6.050327 },
        { map: 725, x: -8778.513672, y: 527.79187, z: 14.404844, o: 5.516259 },
        { map: 725, x: -8769.710938, y: 516.097839, z: 15.833448, o: 4.589491 },
        { map: 725, x: -8767.448242, y: 498.248688, z: 14.47847, o: 5.351326 },
        { map: 725, x: -8736.797852, y: 504.457855, z: 14.919167, o: 5.504478 },
        { map: 725, x: -8742.904297, y: 495.306976, z: 14.700635, o: 5.673339 },
        { map: 725, x: -8731.953125, y: 488.856812, z: 14.876902, o: 0.16377 },
        { map: 725, x: -8723.212891, y: 496.51416, z: 14.693898, o: 0.729257 },
        { map: 725, x: -8715.456055, y: 504.647491, z: 14.496181, o: 6.026768 },
        { map: 725, x: -8738.701172, y: 459.274384, z: 14.521261, o: 4.844742 },
        { map: 725, x: -8725.576172, y: 451.572174, z: 14.900697, o: 5.284564 },
        { map: 725, x: -8731.882812, y: 436.176575, z: 14.470108, o: 4.65232 },
        { map: 725, x: -8750.331055, y: 419.934113, z: 15.32591, o: 4.487387 },
        { map: 725, x: -8774.732422, y: 410.628662, z: 14.41861, o: 3.132575 },
    ],
    180
);

export let Zone3RareCreature1 = std.CreatureTemplates.create(
    MODNAME,
    "zone3rare1",
    32082
);
Zone3RareCreature1.Name.enGB.set("Mother Shiva");
Zone3RareCreature1.FactionTemplate.set(48);
Zone3RareCreature1.MovementType.RANDOM_MOVEMENT.set();
Zone3RareCreature1.Level.set(10, 10);
Zone3RareCreature1.Rank.RARE.set();
Zone3RareCreature1.AIName.SmartAI();

std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 3, 0)
    .event_type.set(0)
    .event_chance.set(100)
    .event_param1.set(5000)
    .event_param2.set(15000)
    .event_param3.set(20000)
    .event_param4.set(25000)
    .action_type.set(11)
    .action_param1.set(52870)
    .target_type.set(2)
    .comment.set("Windstrike");
std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 4, 0)
    .event_type.set(0)
    .event_chance.set(100)
    .event_param1.set(5000)
    .event_param2.set(7000)
    .event_param3.set(8000)
    .event_param4.set(10000)
    .action_type.set(11)
    .action_param1.set(52873)
    .target_type.set(2)
    .comment.set("Rend");
std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 5, 0)
    .event_type.set(0)
    .event_chance.set(100)
    .event_param1.set(13000)
    .event_param2.set(18000)
    .event_param3.set(60000)
    .event_param4.set(75000)
    .action_type.set(11)
    .action_param1.set(52905)
    .target_type.set(2)
    .comment.set("Thunderbolt");
std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 6, 0)
    .event_type.set(1)
    .event_chance.set(100)
    .event_param1.set(1000)
    .event_param2.set(1000)
    .event_param3.set(100000)
    .event_param4.set(100000)
    .action_type.set(11)
    .action_param1.set(52943)
    .target_type.set(1)
    .comment.set("Lightning Whirl");

Zone3RareCreature1.DamageSchool.Normal.set();
Zone3RareCreature1.Stats.ArmorMod.set(5);
Zone3RareCreature1.Stats.DamageMod.set(50);
Zone3RareCreature1.Stats.HealthMod.set(35);
Zone3RareCreature1.Stats.ManaMod.set(3);
Zone3RareCreature1.Stats.ExperienceMod.set(10);
export let Zone3RareCreature1Loot = Zone3RareCreature1.NormalLoot;
spawnMultipleNPCWithTimer(
    Zone3RareCreature1.ID,
    15,
    0,
    [{ map: 725, x: -8785.416016, y: 489.123932, z: 14.433434, o: 5.704753 }],
    300
);

export let SavageWolf = std.CreatureTemplates.create(
    MODNAME,
    "savagewolf-creature",
    299
);
SavageWolf.Name.enGB.set("Savage Wolf");
SavageWolf.Models.clearAll();
SavageWolf.Models.addIds(24235);
SavageWolf.MovementType.RANDOM_MOVEMENT.set();
SavageWolf.Level.set(5, 6);
SavageWolf.FactionTemplate.set(48);
SavageWolf.DamageSchool.Normal.set();
SavageWolf.Stats.ArmorMod.set(5);
SavageWolf.Stats.DamageMod.set(12);
SavageWolf.Stats.ExperienceMod.set(7);
SavageWolf.Stats.HealthMod.set(17);
SavageWolf.Stats.ManaMod.set(10);
export let SavageWolfLoot = SavageWolf.NormalLoot;
spawnMultipleNPCWithTimer(
    SavageWolf.ID,
    5,
    0,
    [
        { map: 725, x: -8877.875977, y: 359.269897, z: 5.679372, o: 0.417501 },
        { map: 725, x: -8879.90918, y: 337.217804, z: 6.822843, o: 5.848529 },
        { map: 725, x: -8854.753906, y: 315.080078, z: 6.410299, o: 0.523529 },
        { map: 725, x: -8841.800781, y: 333.085754, z: 5.824848, o: 0.963352 },
        { map: 725, x: -8835.202148, y: 358.339569, z: 5.641962, o: 6.033097 },
        { map: 725, x: -8848.068359, y: 304.727295, z: 6.258464, o: 5.019931 },
        { map: 725, x: -8771.738281, y: 336.013702, z: 14.415399, o: 0.794489 },
        { map: 725, x: -8777.411133, y: 359.889374, z: 14.84465, o: 1.179334 },
        { map: 725, x: -8740.399414, y: 362.072113, z: 14.826248, o: 0.468549 },
        { map: 725, x: -8703.995117, y: 384.446045, z: 14.437213, o: 0.613847 },
        { map: 725, x: -8681.443359, y: 425.453491, z: 14.942333, o: 1.065452 },
        { map: 725, x: -8647.27832, y: 434.381104, z: 14.534669, o: 0.154389 },
        { map: 725, x: -8637.922852, y: 473.519409, z: 15.692936, o: 2.37314 },
        { map: 725, x: -8649.275391, y: 494.388855, z: 14.328611, o: 1.713405 },
        { map: 725, x: -8673.260742, y: 523.393494, z: 14.699237, o: 2.710861 },
        { map: 725, x: -8676.629883, y: 539.955017, z: 14.436791, o: 1.49742 },
        { map: 725, x: -8658.19043, y: 565.650757, z: 15.024729, o: 0.814124 },
        { map: 725, x: -8680.953125, y: 569.030334, z: 14.494993, o: 3.751514 },
        { map: 725, x: -8677.878906, y: 415.573395, z: 14.707885, o: 5.177008 },
        { map: 725, x: -8649.941406, y: 382.866699, z: 14.394833, o: 5.463676 },
        { map: 725, x: -8600.537109, y: 374.654846, z: 14.328579, o: 4.222751 },
        { map: 725, x: -8774.424805, y: 304.063446, z: 14.402488, o: 0.035343 },
        { map: 725, x: -8772.703125, y: 307.610504, z: 14.986273, o: 6.098618 },
        { map: 725, x: -8770.142578, y: 306.238251, z: 14.652766, o: 5.780532 },
        { map: 725, x: -8766.838867, y: 308.547211, z: 14.855206, o: 5.179704 },
        { map: 725, x: -8766.388672, y: 303.27655, z: 14.625361, o: 4.590658 },
        { map: 725, x: -8767.373047, y: 299.295166, z: 14.378621, o: 4.19796 },
        { map: 725, x: -8763.77832, y: 296.139435, z: 14.541615, o: 4.327551 },
        { map: 725, x: -8768.319336, y: 294.298981, z: 15.066287, o: 3.408636 },
        { map: 725, x: -8770.094727, y: 298.621918, z: 14.165385, o: 2.269809 },
        { map: 725, x: -8760.75, y: 271.620361, z: 14.458358, o: 5.183635 },
        { map: 725, x: -8764.628906, y: 266.090881, z: 14.458489, o: 5.160073 },
        { map: 725, x: -8761.107422, y: 263.455383, z: 14.457055, o: 4.186182 },
        { map: 725, x: -8792.161133, y: 263.402008, z: 14.893775, o: 3.357587 },
        { map: 725, x: -8794.635742, y: 269.974548, z: 15.586689, o: 4.429656 },
        { map: 725, x: -8800.576172, y: 312.773834, z: 14.312142, o: 2.47401 },
        { map: 725, x: -8798.208008, y: 320.775604, z: 14.384285, o: 2.3562 },
        { map: 725, x: -8791.980469, y: 324.315765, z: 14.394029, o: 0.263114 },
        { map: 725, x: -8617.087891, y: 364.859863, z: 16.320601, o: 3.504112 },
        { map: 725, x: -8688.164062, y: 366.814545, z: 6.623523, o: 4.371979 },
        { map: 725, x: -8697.616211, y: 363.535736, z: 10.885416, o: 4.623305 },
        { map: 725, x: -8692.811523, y: 348.342529, z: 4.708349, o: 4.73326 },
        { map: 725, x: -8690.713867, y: 338.692322, z: 5.465054, o: 4.15992 },
        { map: 725, x: -8697.760742, y: 328.098541, z: 4.053293, o: 4.371976 },
        { map: 725, x: -8696.484375, y: 314.220581, z: 5.600358, o: 4.78431 },
        { map: 725, x: -8693.573242, y: 297.185608, z: 8.026409, o: 5.612903 },
        { map: 725, x: -8658.18457, y: 269.454956, z: 5.365967, o: 4.878557 },
        { map: 725, x: -8662.751953, y: 268.735779, z: 6.040778, o: 4.9139 },
        { map: 725, x: -8659.594727, y: 262.601318, z: 5.841236, o: 5.801398 },
        { map: 725, x: -8662.469727, y: 258.88562, z: 6.208811, o: 5.624685 },
        { map: 725, x: -8659.171875, y: 257.086304, z: 5.994402, o: 5.663954 },
        { map: 725, x: -8657.713867, y: 252.777893, z: 6.61763, o: 3.716175 },
        { map: 725, x: -8662.566406, y: 249.582047, z: 6.613211, o: 3.724029 },
        { map: 725, x: -8671.516602, y: 229.620911, z: 5.563176, o: 3.280278 },
        { map: 725, x: -8670.924805, y: 235.399963, z: 5.880173, o: 3.028951 },
        { map: 725, x: -8676.722656, y: 235.761978, z: 5.015108, o: 3.080002 },
        { map: 725, x: -8684.848633, y: 234.336945, z: 4.92083, o: 3.873254 },
        { map: 725, x: -8645.542969, y: 212.443436, z: 5.720034, o: 4.368057 },
        { map: 725, x: -8651.30957, y: 213.138062, z: 4.422554, o: 4.61153 },
        { map: 725, x: -8649.327148, y: 202.049225, z: 5.310383, o: 4.11673 },
        { map: 725, x: -8653.71875, y: 196.597977, z: 5.866368, o: 4.034264 },
        { map: 725, x: -8657.609375, y: 201.006607, z: 4.687202, o: 3.861477 },
        { map: 725, x: -8664.007812, y: 186.164062, z: 6.842653, o: 3.943944 },
        { map: 725, x: -8748.664062, y: 166.50766, z: 13.738003, o: 5.05921 },
        { map: 725, x: -8733.000977, y: 134.198242, z: 16.229395, o: 4.862864 },
        { map: 725, x: -8744.714844, y: 118.531731, z: 14.748155, o: 4.595831 },
        { map: 725, x: -8793.25293, y: 90.486092, z: 14.328437, o: 0.444997 },
    ],
    300
);

export let WoodcuttingTree02 = std.CreatureTemplates.create(
    MODNAME,
    "woodcuttingtree02-creature",
    721
);
WoodcuttingTree02.Name.enGB.set("Hearty Tree");
WoodcuttingTree02.FactionTemplate.set(7); // Non Agressive Faction - will not get attacked by boars
WoodcuttingTree02.Scale.set(1);
WoodcuttingTree02.Models.clearAll();
WoodcuttingTree02.Models.addIds(16977);
WoodcuttingTree02.Level.set(1, 1);
WoodcuttingTree02.MovementSpeed.set(0, 0);
WoodcuttingTree02.NormalLoot.modRefCopy((table) => {
    table.addItem(LoggingPileLogs.ID, 100, 1, 3, false, 1, 1);
});
std.SQL.creature_template_movement.add(WoodcuttingTree02.ID).Rooted.set(1);
spawnMultipleNPCWithTimer(
    WoodcuttingTree02.ID,
    0,
    0,
    [
        { map: 725, x: -8383.847656, y: 127.971878, z: 10.790754, o: 2.030104 },
        { map: 725, x: -8396.234375, y: 176.823792, z: 7.468387, o: 1.837682 },
        { map: 725, x: -8404.850586, y: 177.949356, z: 8.653808, o: 1.90444 },
        { map: 725, x: -8435.289062, y: 155.803726, z: 4.990361, o: 4.402007 },
        { map: 725, x: -8416.061523, y: 118.089188, z: 8.988924, o: 4.260636 },
        { map: 725, x: -8422.075195, y: 115.218674, z: 9.518297, o: 4.468766 },
        { map: 725, x: -8454.307617, y: 83.213768, z: 15.019818, o: 4.158535 },
        { map: 725, x: -8467.176758, y: 81.655922, z: 16.793112, o: 4.547305 },
        { map: 725, x: -8521.140625, y: 42.811378, z: 23.892511, o: 3.922917 },
        { map: 725, x: -8534.806641, y: 39.654465, z: 25.22793, o: 3.337795 },
        { map: 725, x: -8563.421875, y: 104.994385, z: 14.577495, o: 2.175405 },
        { map: 725, x: -8573.641602, y: 105.435143, z: 16.043436, o: 1.496035 },
        { map: 725, x: -8603.989258, y: 95.939049, z: 15.942945, o: 2.627009 },
        { map: 725, x: -8611.064453, y: 92.046387, z: 15.610021, o: 2.768381 },
        { map: 725, x: -8616.526367, y: 94.224297, z: 16.460688, o: 2.729111 },
        { map: 725, x: -8623.962891, y: 133.920868, z: 14.368657, o: 1.562794 },
        { map: 725, x: -8624.791992, y: 139.720642, z: 15.080855, o: 2.218602 },
        { map: 725, x: -8660.583984, y: 144.987274, z: 14.95386, o: 2.48171 },
        { map: 725, x: -8670.470703, y: 145.53183, z: 14.464074, o: 2.497418 },
        { map: 725, x: -8670.359375, y: 155.041824, z: 14.401166, o: 4.853614 },
        { map: 725, x: -8692.123047, y: 121.894806, z: 16.744486, o: 2.831216 },
        { map: 725, x: -8720.087891, y: 121.825691, z: 16.455868, o: 2.815508 },
        { map: 725, x: -8744.075195, y: 140.608826, z: 14.620507, o: 3.08647 },
        { map: 725, x: -8762.291992, y: 119.539795, z: 14.359617, o: 3.0472 },
        { map: 725, x: -8777.079102, y: 114.582558, z: 14.051031, o: 1.900518 },
        { map: 725, x: -8797.030273, y: 199.107239, z: 14.50483, o: 2.717333 },
        { map: 725, x: -8805.091797, y: 199.763962, z: 15.418729, o: 3.467388 },
        { map: 725, x: -8815.229492, y: 250.688736, z: 14.335917, o: 0.223693 },
        { map: 725, x: -8806.415039, y: 252.593613, z: 14.360964, o: 1.460696 },
        { map: 725, x: -8781.415039, y: 249.562592, z: 14.443449, o: 0.647808 },
        { map: 725, x: -8767.759766, y: 254.242065, z: 14.691891, o: 0.094102 },
        { map: 725, x: -8771.466797, y: 241.407364, z: 15.685412, o: 5.136361 },
        { map: 725, x: -8757.176758, y: 241.222595, z: 14.554822, o: 1.276125 },
        { map: 725, x: -8743.741211, y: 288.553558, z: 14.767922, o: 1.496037 },
        { map: 725, x: -8740.574219, y: 295.217377, z: 15.039863, o: 2.269654 },
        { map: 725, x: -8743.602539, y: 328.746918, z: 14.759817, o: 2.293216 },
        { map: 725, x: -8749.530273, y: 336.129547, z: 14.458419, o: 6.106324 },
        { map: 725, x: -8736.411133, y: 341.3797, z: 16.026041, o: 5.854998 },
        { map: 725, x: -8722.294922, y: 361.114777, z: 15.667836, o: 0.270814 },
        { map: 725, x: -8714.301758, y: 374.705109, z: 14.423988, o: 5.96888 },
        { map: 725, x: -8705.814453, y: 369.20285, z: 14.870726, o: 5.713626 },
        { map: 725, x: -8695.109375, y: 412.125702, z: 14.428191, o: 1.515672 },
        { map: 725, x: -8697.848633, y: 421.618866, z: 14.692315, o: 3.341724 },
        { map: 725, x: -8711.701172, y: 420.771973, z: 14.600966, o: 4.288129 },
        { map: 725, x: -8737.18457, y: 399.567108, z: 14.755377, o: 3.887578 },
        { map: 725, x: -8774.450195, y: 387.859283, z: 14.950433, o: 3.538076 },
        { map: 725, x: -8781.074219, y: 377.600128, z: 14.358571, o: 2.70948 },
        { map: 725, x: -8786.610352, y: 398.89563, z: 14.178008, o: 3.691228 },
        { map: 725, x: -8821.147461, y: 458.962708, z: 14.833302, o: 2.273584 },
        { map: 725, x: -8818.208984, y: 469.149506, z: 15.316212, o: 3.110034 },
        { map: 725, x: -8833.189453, y: 468.317627, z: 14.396737, o: 1.005164 },
        { map: 725, x: -8823.878906, y: 498.86676, z: 14.330313, o: 1.723804 },
        { map: 725, x: -8828.484375, y: 506.462677, z: 14.330364, o: 1.943715 },
        { map: 725, x: -8819.233398, y: 515.458191, z: 15.007284, o: 0.647808 },
        { map: 725, x: -8804.708008, y: 505.492035, z: 14.375703, o: 0.883424 },
        { map: 725, x: -8790.273438, y: 510.663055, z: 14.409939, o: 0.67922 },
        { map: 725, x: -8776.898438, y: 521.194031, z: 14.68239, o: 2.466001 },
        { map: 725, x: -8722.314453, y: 536.049622, z: 14.85463, o: 0.282594 },
        { map: 725, x: -8719.441406, y: 528.397156, z: 14.944528, o: 0.706709 },
        { map: 725, x: -8704.195312, y: 536.767639, z: 14.436216, o: 1.912295 },
        { map: 725, x: -8711.902344, y: 564.949097, z: 14.368315, o: 2.045813 },
        { map: 725, x: -8713.888672, y: 577.805725, z: 14.353796, o: 2.489563 },
        { map: 725, x: -8699.975586, y: 584.444397, z: 14.546739, o: 6.220205 },
        { map: 725, x: -8689.960938, y: 576.150452, z: 14.437631, o: 0.27474 },
        { map: 725, x: -8644.902344, y: 567.102417, z: 14.942634, o: 6.090614 },
        { map: 725, x: -8639.981445, y: 561.040161, z: 16.008675, o: 0.694928 },
        { map: 725, x: -8631.40332, y: 573.218689, z: 14.538828, o: 4.888956 },
        { map: 725, x: -8667.298828, y: 511.800629, z: 14.344629, o: 4.500183 },
        { map: 725, x: -8678.196289, y: 508.583008, z: 14.343974, o: 5.104938 },
        { map: 725, x: -8674.15332, y: 498.729126, z: 14.756707, o: 0.145147 },
        { map: 725, x: -8693.371094, y: 468.656433, z: 15.646541, o: 3.636244 },
        { map: 725, x: -8703.046875, y: 456.351837, z: 14.439723, o: 3.636244 },
        { map: 725, x: -8661.90332, y: 410.031403, z: 14.386001, o: 5.745036 },
        { map: 725, x: -8654.479492, y: 396.591034, z: 14.389195, o: 0.41218 },
        { map: 725, x: -8626.842773, y: 389.308319, z: 14.344949, o: 6.25947 },
        { map: 725, x: -8609.418945, y: 385.915955, z: 14.330801, o: 5.674348 },
        { map: 725, x: -8634.870117, y: 358.514008, z: 14.891694, o: 3.479163 },
        { map: 725, x: -8663.549805, y: 341.624817, z: 14.574187, o: 4.519812 },
        { map: 725, x: -8656.732422, y: 329.720398, z: 14.736123, o: 3.714779 },
        { map: 725, x: -8678.509766, y: 282.864868, z: 9.357816, o: 5.623295 },
        { map: 725, x: -8656.62793, y: 268.987427, z: 5.440391, o: 5.623295 },
        { map: 725, x: -8682.282227, y: 229.184723, z: 5.101748, o: 5.32092 },
        { map: 725, x: -8665.24707, y: 193.494644, z: 6.834807, o: 4.209587 },
        { map: 725, x: -8619.822266, y: 173.886902, z: 15.189832, o: 0.710629 },
        { map: 725, x: -8565.896484, y: 235.991653, z: 14.49953, o: 5.057808 },
        { map: 725, x: -8534.358398, y: 215.361557, z: 17.876917, o: 6.082753 },
        { map: 725, x: -8493.674805, y: 176.92569, z: 12.623135, o: 5.587956 },
        { map: 725, x: -8484.40332, y: 178.279068, z: 12.765023, o: 5.580104 },
        { map: 725, x: -8452.666016, y: 196.519913, z: 20.410664, o: 0.926618 },
        { map: 725, x: -8524.039062, y: 91.092819, z: 25.066723, o: 5.069595 },
    ],
    60
);

//Normal Creature Spawns
export let Zone3RareCreature2 = std.CreatureTemplates.create(
    MODNAME,
    "zone3rarecreature2",
    3271
);
Zone3RareCreature2.Name.enGB.set("Tyde Windsage");
Zone3RareCreature2.Rank.RARE.set();
Zone3RareCreature2.AIName.SmartAI();
std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 3, 0)
    .event_type.set(0)
    .event_chance.set(100)
    .event_param1.set(5000)
    .event_param2.set(15000)
    .event_param3.set(20000)
    .event_param4.set(25000)
    .action_type.set(11)
    .action_param1.set(50257)
    .target_type.set(2)
    .comment.set("Scalding Blast");
std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 4, 0)
    .event_type.set(0)
    .event_chance.set(100)
    .event_param1.set(5000)
    .event_param2.set(7000)
    .event_param3.set(8000)
    .event_param4.set(10000)
    .action_type.set(11)
    .action_param1.set(50303)
    .target_type.set(2)
    .comment.set("SwineFlu");
std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 5, 0)
    .event_type.set(0)
    .event_chance.set(100)
    .event_param1.set(13000)
    .event_param2.set(18000)
    .event_param3.set(60000)
    .event_param4.set(75000)
    .action_type.set(11)
    .action_param1.set(50328)
    .target_type.set(2)
    .comment.set("Leeching Poison");
std.SQL.smart_scripts
    .add(Zone3RareCreature1.ID, 0, 6, 0)
    .event_type.set(1)
    .event_chance.set(100)
    .event_param1.set(1000)
    .event_param2.set(1000)
    .event_param3.set(100000)
    .event_param4.set(100000)
    .action_type.set(11)
    .action_param1.set(50347)
    .target_type.set(1)
    .comment.set("Rush");
Zone3RareCreature2.DamageSchool.Normal.set();
Zone3RareCreature2.Level.set(10, 10);
Zone3RareCreature2.Stats.ArmorMod.set(5);
Zone3RareCreature2.Stats.DamageMod.set(50);
Zone3RareCreature2.Stats.HealthMod.set(35);
Zone3RareCreature2.Stats.ManaMod.set(3);
Zone3RareCreature2.Stats.ExperienceMod.set(10);
export let Zone3RareCreature2Loot = Zone3RareCreature2.NormalLoot; //Copy Avian Loot
spawnMultipleNPCWithTimer(
    Zone3RareCreature2.ID,
    0,
    0,
    [{ map: 725, x: -8610.512695, y: 181.409393, z: 15.189332, o: 0.007321 }],
    300
);
