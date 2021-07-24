import { makeResourceNode } from "../../functions/resource-node-functions";
import { spawnGobTimer } from "../../functions/spawning-functions";

import { SQL } from "wotlkdata/sql/SQLFiles";
import { AgathasLockbox } from "./starting-zone-items";
import { startingQuest01 } from "./starting-zone-quests";
import { addLootToGobChest } from "../../functions/gob-functions";

export let StolenLockbox = makeResourceNode('Agatha\'s Stolen Lockbox',259,57,'stolenlockbox-chest')
StolenLockbox.Size.set(0.5)
StolenLockbox.row.Data8.set(startingQuest01.ID)
spawnGobTimer(StolenLockbox.ID,[-8670.00,-14.301,31.26,4.64],10) // Agatha's Stolen Lockbox in Starting Zone
/*Quest Items Loot*/
addLootToGobChest(StolenLockbox,[AgathasLockbox.ID],[100],7)
SQL.gameobject_loot_template.add(StolenLockbox.ID,AgathasLockbox.ID).QuestRequired.set(1)
