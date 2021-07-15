import { retardMaudan, spawn1Tier1, spawn2Tier2, spawn3Tier3, spawn4Tier4 } from "./mining-node-spawns";
import { makePool } from "../functions/mining-node-functions";
import { node1, node2, node3, node4 } from "./mining-nodes";

let poolEntry = 100000
let respawnRate = 300
//tier 1 area
makePool(poolEntry++, node1, 50, respawnRate, spawn1Tier1)
//tier2 area
//makePool(poolEntry++, node1, 5, respawnRate, spawn2Tier1)
makePool(poolEntry++, node2, 30, respawnRate, spawn2Tier2)

//tier3 area
//makePool(poolEntry++, node1, 5, respawnRate, spawn3Tier1)
//makePool(poolEntry++, node2, 10, respawnRate, spawn3Tier2)
makePool(poolEntry++, node3, 20, respawnRate, spawn3Tier3)
//...
makePool(poolEntry++, node3, 10, respawnRate, retardMaudan)//mauradon spawns

//tier4 area
//makePool(poolEntry++, node1, 3, respawnRate, spawn4Tier1)
//makePool(poolEntry++, node2, 5, respawnRate, spawn4Tier2)
//makePool(poolEntry++, node3, 5, respawnRate, spawn4Tier3)
makePool(poolEntry++, node4, 15, respawnRate, spawn4Tier4)