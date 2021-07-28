import { makeResourceNode } from "../../functions/resource-node-functions";
import { spawnGobTimer, spawnMultiGobTimer } from "../../functions/spawning-functions";

import { SQL } from "wotlkdata/sql/SQLFiles";
import { AgathasLockbox, startingResource01 } from "./starting-zone-items";
import { startingQuest01, startingQuest02 } from "./starting-zone-quests";
import { addLootToGobChest } from "../../functions/gob-functions";

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
spawnMultiGobTimer(startingResource01.ID,[[-8754.910,-50.64,32.388,4.64],[-8738.8320,-33.83,31.82,4.64],[-8735.132,-11.64,31.687,4.64],[-8720.134,-11.499,31.289,4.64],[-8693.695,-17.62,31.71,4.64],[-8643.655,-50.7969,31.634,4.64],[-8630.2968,-41.24,32.24,4.64],[-8660.575,-80.109,31.565,4.64],[-8688.743,-79.71,31.2099,4.64],[-8699.322,-71.389,31.133,4.64],[-8719.826,-69.22,31.144,4.64],[-8732.665,-76.451,31.876,4.64],],10)

/*Quest Items Loot*/
addLootToGobChest(startingResourceNode01,[startingResource01.ID],[100],7)
SQL.gameobject_loot_template.add(startingResourceNode01.ID,startingResource01.ID).QuestRequired.set(1)
