import { retardMaudan, miningSpawn1Tier1, miningSpawn2Tier1, miningSpawn2Tier2, miningSpawn3Tier1, miningSpawn3Tier2, miningSpawn3Tier3, miningSpawn4Tier1, miningSpawn4Tier2, miningSpawn4Tier3, miningSpawn4Tier4 } from "./mining-node-spawns";
import { makePool } from "../../functions/resource-node-functions";
import { miningNode1, miningNode2, miningNode3, miningNode4 } from "./mining-nodes";

let poolEntry = 100000
let respawnRate = 300
//tier 1 area
makePool(poolEntry++, miningNode1, 30, respawnRate, miningSpawn1Tier1)

//tier2 area
makePool(poolEntry++, miningNode1, 5, respawnRate, miningSpawn2Tier1)
makePool(poolEntry++, miningNode2, 25, respawnRate, miningSpawn2Tier2)

//tier3 area
makePool(poolEntry++, miningNode1, 5, respawnRate, miningSpawn3Tier1)
makePool(poolEntry++, miningNode2, 10, respawnRate, miningSpawn3Tier2)
makePool(poolEntry++, miningNode3, 20, respawnRate, miningSpawn3Tier3)

//...
makePool(poolEntry++, miningNode3, 10, respawnRate, retardMaudan)//mauradon spawns

//tier4 area
makePool(poolEntry++, miningNode1, 3, respawnRate, miningSpawn4Tier1)
makePool(poolEntry++, miningNode2, 5, respawnRate, miningSpawn4Tier2)
makePool(poolEntry++, miningNode3, 5, respawnRate, miningSpawn4Tier3)
makePool(poolEntry++, miningNode4, 15, respawnRate, miningSpawn4Tier4)