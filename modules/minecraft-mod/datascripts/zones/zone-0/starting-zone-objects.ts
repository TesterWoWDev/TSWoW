import { makeResourceNode } from "../../functions/resource-node-functions";
import { spawnGobTimer, spawnMultiGobTimer, spawnMultipleGobs } from "../../functions/spawning-functions";

import { SQL } from "wotlkdata/sql/SQLFiles";
import { AgathasLockbox, BlackMalice, CavedwellerBracers, ChantingBlade, Cruelbarb, CrystallineCuffs, CursedFelblade, DefiasArmor, DefiasBelt, Defiasboot, DefiasGlove, DefiasLeg, FamilySeal, GoldGloves, JewelRing, NobleRobe, RobeofEvocation, ShadowfangWeapon, SmiteAxe, startingResource01, SubterraneanCape, WalkingBoots } from "./starting-zone-items";
import { startingQuest01, startingQuest02 } from "./starting-zone-quests";
import { addLootToGobChest } from "../../functions/gob-functions";
import { BowlofFruit, SackofGrains } from "../mall/mall-resource-spawns";

/*Ambient Object Spawns*/
/*Tables*/
spawnMultipleGobs(507606, [
    [-8764.805664,-73.719604,31.736753,3.942945], 
    [-8770.925781,-79.868477,31.733206,0.310477], 
    [-8758.624023,-95.507362,31.879797,4.209993], 
    [-8733.508789,-89.997482,31.795820,2.870894]])



spawnGobTimer(180876,[-8746.657,-7.287,30.159,4.64],10) // Starting Elunes Buff

export let StolenLockbox = makeResourceNode('Agatha\'s Stolen Lockbox',259,57,'stolenlockbox-chest')
StolenLockbox.Size.set(0.5)
StolenLockbox.row.Data8.set(startingQuest01.ID)
spawnGobTimer(StolenLockbox.ID,[-8670.00,-14.301,31.26,4.64],10) // Agatha's Stolen Lockbox in Starting Zone
/*Quest Items Loot*/
addLootToGobChest(StolenLockbox,[AgathasLockbox.ID],[100],7)
SQL.gameobject_loot_template.add(StolenLockbox.ID,AgathasLockbox.ID).QuestRequired.set(1)
SQL.item_loot_template.add(AgathasLockbox.ID,AgathasLockbox.ID).Chance.set(100) // 100% chance to receive the same item back when lock picked because people are dumb

export let startingResourceNode01 = makeResourceNode('Walk of Heroes Lilly',269,29,'startingresourcenode-chest')
startingResourceNode01.Size.set(1)
startingResourceNode01.row.Data8.set(startingQuest02.ID)

spawnMultiGobTimer(startingResourceNode01.ID,[[-8754.910,-50.64,32.388,4.64],[-8738.8320,-33.83,31.82,4.64],[-8735.132,-11.64,31.687,4.64],[-8720.134,-11.499,31.289,4.64],[-8693.695,-17.62,31.71,4.64],[-8643.655,-50.7969,31.634,4.64],[-8630.2968,-41.24,32.24,4.64],[-8660.575,-80.109,31.565,4.64],[-8688.743,-79.71,31.2099,4.64],[-8699.322,-71.389,31.133,4.64],[-8719.826,-69.22,31.144,4.64],[-8732.665,-76.451,31.876,4.64],],10)

/*Quest Items Loot*/
addLootToGobChest(startingResourceNode01,[startingResource01.ID],[100],7)
SQL.gameobject_loot_template.add(startingResourceNode01.ID,startingResource01.ID).QuestRequired.set(1)



/*Chest Spawns for Armor and Misc Loot*/

export let StartingZoneChestSpawn = makeResourceNode('Abandoned Supply Chest',259,57,'abandonedchest-chest')
StartingZoneChestSpawn.Size.set(0.5)

spawnMultiGobTimer(StartingZoneChestSpawn.ID,[
    [-8670.00,-14.301,31.26,4.64],
    [-8736.603516,-32.861248,32.003632,1.590670],
    [-8763.095703,-56.293507,31.275341,0.059137],
    [-8773.433594,-78.796913,31.738161,6.200948],
    [-8751.104492,-91.111549,31.883492,4.272804],
    [-8736.949219,-96.231796,31.796412,1.728112],
    [-8704.628906,-69.945732,31.153944,4.394534],
    [-8686.861328,-65.372940,31.729065,0.436125],
    [-8659.995117,-84.173393,33.302879,1.276508],
    [-8608.788086,-70.442520,33.118446,2.827669],
    [-8639.584961,-34.424862,31.441057,1.618156],
    [-8745.254883,-10.629440,31.515251,5.089607],
    [-8684.893555,3.665580,31.268726,2.242548],],300)
spawnMultiGobTimer(SackofGrains.ID,[
    [-8717.162109,-52.223087,31.220469,1.374678],
    [-8718.244141,-48.086716,31.134848,6.032090],
    [-8707.579102,-46.863548,31.134848,5.823963],
    [-8706.031250,-50.480320,31.135305,4.948247],
    [-8694.416992,-50.744736,31.135267,5.470541],
    [-8692.379883,-57.117989,31.135267,5.050354],
    [-8687.991211,-61.575611,31.140139,4.052898],
    [-8706.459961,-64.250793,31.134262,3.169325],
    [-8710.820312,-68.068794,31.134262,5.317385],
    [-8695.829102,-70.322876,31.134138,5.015004],
    [-8695.091797,-73.124466,31.134138,5.835744],
    [-8689.173828,-69.104103,31.134138,0.734582],
    [-8681.366211,-67.896545,31.134199,0.302611],
    [-8675.894531,-65.945442,31.134222,0.239778],
    [-8664.505859,-53.168758,31.133961,0.950563],
    [-8660.943359,-16.745865,31.181555,1.724181],
    [-8667.622070,-12.760794,31.154400,2.270033],
    [-8672.288086,-8.174316,31.181585,2.403550],
    [-8678.437500,-5.712047,31.172710,2.749125],
    [-8683.493164,-6.138147,31.134598,2.584192],
    [-8724.122070,-62.033699,31.187674,3.412786],
    [-8764.166992,-81.737160,31.740450,2.301448],
    [-8763.101562,-74.638184,31.727894,1.798793],
    [-8760.143555,-84.033867,31.135124,4.158921],
    [-8740.026367,-81.053665,31.135124,0.145536],],300)
spawnMultiGobTimer(BowlofFruit.ID,[
    [725,-8731.073242,-89.541229,31.793255,5.073907],
    [725,-8731.457031,-92.108772,31.795366,4.292438],
    [725,-8741.812500,-90.110985,31.790163,1.959804],
    [725,-8753.832031,-98.628998,31.877642,3.872252],
    [725,-8756.518555,-99.721336,31.879829,2.949409],
    [725,-8762.041992,-96.266685,31.880003,2.376068],
    [725,-8756.266602,-89.506393,31.879995,0.098413],
    [725,-8760.496094,-82.077919,31.134912,2.325018],
    [725,-8762.873047,-75.163925,31.724451,2.116887],
    [725,-8770.691406,-72.127571,31.736641,3.915450],
    [725,-8742.868164,-38.900444,31.189152,0.102337],
    [725,-8736.685547,-18.848257,31.756762,1.814505],
    [725,-8746.010742,-12.266673,31.566271,0.860246],
    [725,-8743.671875,-11.275415,31.456745,0.644261],
    [725,-8681.060547,-49.930218,32.480995,4.653729],
    [725,-8694.247070,-47.709278,31.134897,3.243940],
    [725,-8694.820312,-64.530853,31.134897,4.771544],
    [725,-8707.686523,-65.309059,32.378139,4.504504],
    [725,-8710.026367,-66.189331,32.887913,0.754227],
    [725,-8709.234375,-65.339958,32.887913,0.612855],
    [725,-8708.587891,-68.290565,32.972340,1.150848],
    [725,-8690.356445,-56.413517,32.948765,6.157759],
    [725,-8679.367188,-66.759132,32.558807,4.916830],],300)



/*Chest Items Loot*/
addLootToGobChest(StartingZoneChestSpawn,[
    SubterraneanCape.ID,        CrystallineCuffs.ID,        CursedFelblade.ID,
    RobeofEvocation.ID,         CavedwellerBracers.ID,      ChantingBlade.ID,
    NobleRobe.ID,               WalkingBoots.ID,            JewelRing.ID,
    GoldGloves.ID,              SmiteAxe.ID,                DefiasArmor.ID,
    DefiasBelt.ID,              Defiasboot.ID,              DefiasGlove.ID,
    DefiasLeg.ID,               Cruelbarb.ID,               FamilySeal.ID,
    ShadowfangWeapon.ID,        BlackMalice.ID
],[5],1)