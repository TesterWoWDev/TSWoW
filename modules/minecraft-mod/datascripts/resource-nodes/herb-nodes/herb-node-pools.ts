import { makePool } from "../../functions/resource-node-functions";
import { herbSpawn1Tier1, herbSpawn1Tier2, herbSpawn2Tier1, herbSpawn3Tier1, herbSpawn4Tier1, herbSpawn5Tier1 } from "./herb-node-spawns";
import { herbNode1, herbNode2, herbNode3, herbNode4, herbNode5 } from "./herb-nodes";

 let poolEntry = 100100
 let respawnRate = 300
// //tier 1 area
 makePool(poolEntry++, herbNode1, 3, respawnRate, herbSpawn1Tier1)
 makePool(poolEntry++, herbNode2, 3, respawnRate, herbSpawn1Tier1)
 makePool(poolEntry++, herbNode3, 3, respawnRate, herbSpawn1Tier1)
 makePool(poolEntry++, herbNode4, 3, respawnRate, herbSpawn1Tier1)
 makePool(poolEntry++, herbNode5, 3, respawnRate, herbSpawn1Tier1)


 makePool(poolEntry++, herbNode1, 3, respawnRate, herbSpawn1Tier2)
 makePool(poolEntry++, herbNode2, 3, respawnRate, herbSpawn1Tier2)
 makePool(poolEntry++, herbNode3, 3, respawnRate, herbSpawn1Tier2)
 makePool(poolEntry++, herbNode4, 3, respawnRate, herbSpawn1Tier2)
 makePool(poolEntry++, herbNode5, 3, respawnRate, herbSpawn1Tier2)