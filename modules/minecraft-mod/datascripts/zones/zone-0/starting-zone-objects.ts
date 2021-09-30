import { makeResourceNode } from "../../functions/resource-node-functions";
import { spawnGobTimer, spawnMultiGobTimer, spawnMultipleGobs } from "../../functions/spawning-functions";

import { SQL } from "wotlkdata/sql/SQLFiles";
import { AgathasLockbox, BlackMalice, CavedwellerBracers, ChantingBlade, Cruelbarb, CrystallineCuffs, CursedFelblade, DefiasArmor, DefiasBelt, Defiasboot, DefiasGlove, DefiasLeg, FamilySeal, GoldGloves, JewelRing, NobleRobe, RobeofEvocation, ShadowfangWeapon, SmiteAxe, startingResource01, SubterraneanCape, WalkingBoots } from "./starting-zone-items";
import { startingQuest01, startingQuest02 } from "./starting-zone-quests";
import { addLootToGobChest } from "../../functions/gob-functions";

/*Ambient Object Spawns*/
/*Tables*/
spawnMultipleGobs(507606, [
    [725,-8764.805664,-73.719604,31.736753,3.942945], 
    [725,-8770.925781,-79.868477,31.733206,0.310477], 
    [725,-8758.624023,-95.507362,31.879797,4.209993], 
    [725,-8733.508789,-89.997482,31.795820,2.870894]])



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
spawnGobTimer(StartingZoneChestSpawn.ID,[-8670.00,-14.301,31.26,4.64],300) // Abandoned Supply Chest Spawns
spawnGobTimer(StartingZoneChestSpawn.ID,[-8736.603516,-32.861248,32.003632,1.590670],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8763.095703,-56.293507,31.275341,0.059137],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8773.433594,-78.796913,31.738161,6.200948],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8751.104492,-91.111549,31.883492,4.272804],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8736.949219,-96.231796,31.796412,1.728112],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8704.628906,-69.945732,31.153944,4.394534],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8686.861328,-65.372940,31.729065,0.436125],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8659.995117,-84.173393,33.302879,1.276508],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8608.788086,-70.442520,33.118446,2.827669],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8639.584961,-34.424862,31.441057,1.618156],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8684.893555,3.665580,31.268726,2.242548],300)
spawnGobTimer(StartingZoneChestSpawn.ID,[-8745.254883,-10.629440,31.515251,5.089607],300)
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