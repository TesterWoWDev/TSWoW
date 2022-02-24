/*Ambient Object Spawns*/


import { std } from "wow/wotlk";
import {
    SackofGrains,
    BowlofFruit,
} from "../(Zone-5)Mall/mall-resource-spawns";
import {
    addLootToGobChest,
    addLootToGobChestMultiDrop,
} from "../../functions/gob-functions";
import { makeResourceNode } from "../../functions/resource-node-functions";
import {
    spawnMultipleGobs,
    spawnGobTimer,
    spawnMultiGobTimer,
} from "../../functions/spawning-functions";
import { SmallSackofCoins } from "../../items/currencies";
import {
    AgathasLockbox,
    startingResource01,
    ShinyRedApple,
    RefreshingSpringWater,
    GrainSack,
    SubterraneanCape,
    CrystallineCuffs,
    CursedFelblade,
    RobeofEvocation,
    CavedwellerBracers,
    ChantingBlade,
    NobleRobe,
    WalkingBoots,
    JewelRing,
    GoldGloves,
    SmiteAxe,
    DefiasArmor,
    DefiasBelt,
    Defiasboot,
    DefiasGlove,
    DefiasLeg,
    Cruelbarb,
    FamilySeal,
    ShadowfangWeapon,
    BlackMalice,
} from "../item-manifest";
import { startingQuest01, startingQuest02 } from "../quest-manifest";

spawnGobTimer(
    180876,
    { map: 725, x: -8746.657, y: -7.287, z: 30.159, o: 4.64 },
    10
); // Starting Elunes Buff

export let StolenLockbox = makeResourceNode(
    "Agatha's Stolen Lockbox",
    259,
    57,
    "stolenlockbox-chest"
);
StolenLockbox.Size.set(0.5);
StolenLockbox.row.Data8.set(startingQuest01.ID);
spawnGobTimer(
    StolenLockbox.ID,
    { map: 725, x: -8670.0, y: -14.301, z: 31.26, o: 4.64 },
    10
); // Agatha's Stolen Lockbox in Starting Zone
/*Quest Items Loot*/
addLootToGobChest(StolenLockbox, [AgathasLockbox.ID], [100], 7);
std.SQL.gameobject_loot_template
    .add(StolenLockbox.ID, AgathasLockbox.ID)
    .QuestRequired.set(1);
std.SQL.item_loot_template
    .add(AgathasLockbox.ID, AgathasLockbox.ID)
    .Chance.set(100); // 100% chance to receive the same item back when lock picked because people are dumb

export let startingResourceNode01 = makeResourceNode(
    "Walk of Heroes Lilly",
    269,
    29,
    "startingresourcenode-chest"
);
startingResourceNode01.Size.set(1);
startingResourceNode01.row.Data8.set(startingQuest02.ID);

spawnMultiGobTimer(
    startingResourceNode01.ID,
    [
        { map: 725, x: -8754.91, y: -50.64, z: 32.388, o: 4.64 },
        { map: 725, x: -8738.832, y: -33.83, z: 31.82, o: 4.64 },
        { map: 725, x: -8735.132, y: -11.64, z: 31.687, o: 4.64 },
        { map: 725, x: -8720.134, y: -11.499, z: 31.289, o: 4.64 },
        { map: 725, x: -8693.695, y: -17.62, z: 31.71, o: 4.64 },
        { map: 725, x: -8643.655, y: -50.7969, z: 31.634, o: 4.64 },
        { map: 725, x: -8630.2968, y: -41.24, z: 32.24, o: 4.64 },
        { map: 725, x: -8660.575, y: -80.109, z: 31.565, o: 4.64 },
        { map: 725, x: -8688.743, y: -79.71, z: 31.2099, o: 4.64 },
        { map: 725, x: -8699.322, y: -71.389, z: 31.133, o: 4.64 },
        { map: 725, x: -8719.826, y: -69.22, z: 31.144, o: 4.64 },
        { map: 725, x: -8732.665, y: -76.451, z: 31.876, o: 4.64 },
    ],
    10
);

/*Quest Items Loot*/
addLootToGobChest(startingResourceNode01, [startingResource01.ID], [100], 7);
std.SQL.gameobject_loot_template
    .add(startingResourceNode01.ID, startingResource01.ID)
    .QuestRequired.set(1);

/*Chest Spawns for Armor and Misc Loot*/

export let StartingZoneChestSpawn = makeResourceNode(
    "Abandoned Supply Chest",
    259,
    57,
    "abandonedchest-chest"
);
StartingZoneChestSpawn.Size.set(0.5);
addLootToGobChestMultiDrop(
    StartingZoneChestSpawn,
    [
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
        GrainSack.ID,
        SmallSackofCoins.ID,
    ],
    [100, 100, 25, 25],
    [1, 1, 1, 1],
    [2, 2, 1, 1],
    1
);
spawnMultiGobTimer(
    StartingZoneChestSpawn.ID,
    [
        { map: 725, x: -8670.0, y: -14.301, z: 31.26, o: 4.64 },
        { map: 725, x: -8736.603516, y: -32.861248, z: 32.003632, o: 1.59067 },
        { map: 725, x: -8763.095703, y: -56.293507, z: 31.275341, o: 0.059137 },
        { map: 725, x: -8773.433594, y: -78.796913, z: 31.738161, o: 6.200948 },
        { map: 725, x: -8751.104492, y: -91.111549, z: 31.883492, o: 4.272804 },
        { map: 725, x: -8736.949219, y: -96.231796, z: 31.796412, o: 1.728112 },
        { map: 725, x: -8704.628906, y: -69.945732, z: 31.153944, o: 4.394534 },
        { map: 725, x: -8686.861328, y: -65.37294, z: 31.729065, o: 0.436125 },
        { map: 725, x: -8659.995117, y: -84.173393, z: 33.302879, o: 1.276508 },
        { map: 725, x: -8608.788086, y: -70.44252, z: 33.118446, o: 2.827669 },
        { map: 725, x: -8639.584961, y: -34.424862, z: 31.441057, o: 1.618156 },
        { map: 725, x: -8745.254883, y: -10.62944, z: 31.515251, o: 5.089607 },
        { map: 725, x: -8684.893555, y: 3.66558, z: 31.268726, o: 2.242548 },
    ],
    300
);
spawnMultiGobTimer(
    SackofGrains.ID,
    [
        { map: 725, x: -8717.162109, y: -52.223087, z: 31.220469, o: 1.374678 },
        { map: 725, x: -8718.244141, y: -48.086716, z: 31.134848, o: 6.03209 },
        { map: 725, x: -8707.579102, y: -46.863548, z: 31.134848, o: 5.823963 },
        { map: 725, x: -8706.03125, y: -50.48032, z: 31.135305, o: 4.948247 },
        { map: 725, x: -8694.416992, y: -50.744736, z: 31.135267, o: 5.470541 },
        { map: 725, x: -8692.379883, y: -57.117989, z: 31.135267, o: 5.050354 },
        { map: 725, x: -8687.991211, y: -61.575611, z: 31.140139, o: 4.052898 },
        { map: 725, x: -8706.459961, y: -64.250793, z: 31.134262, o: 3.169325 },
        { map: 725, x: -8710.820312, y: -68.068794, z: 31.134262, o: 5.317385 },
        { map: 725, x: -8695.829102, y: -70.322876, z: 31.134138, o: 5.015004 },
        { map: 725, x: -8695.091797, y: -73.124466, z: 31.134138, o: 5.835744 },
        { map: 725, x: -8689.173828, y: -69.104103, z: 31.134138, o: 0.734582 },
        { map: 725, x: -8681.366211, y: -67.896545, z: 31.134199, o: 0.302611 },
        { map: 725, x: -8675.894531, y: -65.945442, z: 31.134222, o: 0.239778 },
        { map: 725, x: -8664.505859, y: -53.168758, z: 31.133961, o: 0.950563 },
        { map: 725, x: -8660.943359, y: -16.745865, z: 31.181555, o: 1.724181 },
        { map: 725, x: -8667.62207, y: -12.760794, z: 31.1544, o: 2.270033 },
        { map: 725, x: -8672.288086, y: -8.174316, z: 31.181585, o: 2.40355 },
        { map: 725, x: -8678.4375, y: -5.712047, z: 31.17271, o: 2.749125 },
        { map: 725, x: -8683.493164, y: -6.138147, z: 31.134598, o: 2.584192 },
        { map: 725, x: -8724.12207, y: -62.033699, z: 31.187674, o: 3.412786 },
        { map: 725, x: -8764.166992, y: -81.73716, z: 31.74045, o: 2.301448 },
        { map: 725, x: -8763.101562, y: -74.638184, z: 31.727894, o: 1.798793 },
        { map: 725, x: -8760.143555, y: -84.033867, z: 31.135124, o: 4.158921 },
        { map: 725, x: -8740.026367, y: -81.053665, z: 31.135124, o: 0.145536 },
    ],
    300
);
spawnMultiGobTimer(
    BowlofFruit.ID,
    [
        { map: 725, x: -8731.073242, y: -89.541229, z: 31.793255, o: 5.073907 },
        { map: 725, x: -8731.457031, y: -92.108772, z: 31.795366, o: 4.292438 },
        { map: 725, x: -8741.8125, y: -90.110985, z: 31.790163, o: 1.959804 },
        { map: 725, x: -8753.832031, y: -98.628998, z: 31.877642, o: 3.872252 },
        { map: 725, x: -8756.518555, y: -99.721336, z: 31.879829, o: 2.949409 },
        { map: 725, x: -8762.041992, y: -96.266685, z: 31.880003, o: 2.376068 },
        { map: 725, x: -8756.266602, y: -89.506393, z: 31.879995, o: 0.098413 },
        { map: 725, x: -8760.496094, y: -82.077919, z: 31.134912, o: 2.325018 },
        { map: 725, x: -8762.873047, y: -75.163925, z: 31.724451, o: 2.116887 },
        { map: 725, x: -8770.691406, y: -72.127571, z: 31.736641, o: 3.91545 },
        { map: 725, x: -8742.868164, y: -38.900444, z: 31.189152, o: 0.102337 },
        { map: 725, x: -8736.685547, y: -18.848257, z: 31.756762, o: 1.814505 },
        { map: 725, x: -8746.010742, y: -12.266673, z: 31.566271, o: 0.860246 },
        { map: 725, x: -8743.671875, y: -11.275415, z: 31.456745, o: 0.644261 },
        { map: 725, x: -8681.060547, y: -49.930218, z: 32.480995, o: 4.653729 },
        { map: 725, x: -8694.24707, y: -47.709278, z: 31.134897, o: 3.24394 },
        { map: 725, x: -8694.820312, y: -64.530853, z: 31.134897, o: 4.771544 },
        { map: 725, x: -8707.686523, y: -65.309059, z: 32.378139, o: 4.504504 },
        { map: 725, x: -8710.026367, y: -66.189331, z: 32.887913, o: 0.754227 },
        { map: 725, x: -8709.234375, y: -65.339958, z: 32.887913, o: 0.612855 },
        { map: 725, x: -8708.587891, y: -68.290565, z: 32.97234, o: 1.150848 },
        { map: 725, x: -8690.356445, y: -56.413517, z: 32.948765, o: 6.157759 },
        { map: 725, x: -8679.367188, y: -66.759132, z: 32.558807, o: 4.91683 },
    ],
    300
);

/*Chest Items Loot*/
addLootToGobChest(
    StartingZoneChestSpawn,
    [
        SubterraneanCape.ID,
        CrystallineCuffs.ID,
        CursedFelblade.ID,
        RobeofEvocation.ID,
        CavedwellerBracers.ID,
        ChantingBlade.ID,
        NobleRobe.ID,
        WalkingBoots.ID,
        JewelRing.ID,
        GoldGloves.ID,
        SmiteAxe.ID,
        DefiasArmor.ID,
        DefiasBelt.ID,
        Defiasboot.ID,
        DefiasGlove.ID,
        DefiasLeg.ID,
        Cruelbarb.ID,
        FamilySeal.ID,
        ShadowfangWeapon.ID,
        BlackMalice.ID,
    ],
    [5],
    1
);
