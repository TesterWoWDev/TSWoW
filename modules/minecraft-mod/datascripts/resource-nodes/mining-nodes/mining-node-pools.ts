import { retardMaudan, spawn1Tier1, spawn2Tier1, spawn2Tier2, spawn3Tier1, spawn3Tier2, spawn3Tier3, spawn4Tier1, spawn4Tier2, spawn4Tier3, spawn4Tier4 } from "./mining-node-spawns";
import { makePool } from "../../functions/resource-node-functions";
import { miningNode1, miningNode2, miningNode3, miningNode4 } from "./mining-nodes";

let poolEntry = 100000
let respawnRate = 300
//tier 1 area
makePool(poolEntry++, miningNode1, 30, respawnRate, spawn1Tier1)

//tier2 area
makePool(poolEntry++, miningNode1, 5, respawnRate, spawn2Tier1)
makePool(poolEntry++, miningNode2, 25, respawnRate, spawn2Tier2)

//tier3 area
makePool(poolEntry++, miningNode1, 5, respawnRate, spawn3Tier1)
makePool(poolEntry++, miningNode2, 10, respawnRate, spawn3Tier2)
makePool(poolEntry++, miningNode3, 20, respawnRate, spawn3Tier3)

//...
makePool(poolEntry++, miningNode3, 10, respawnRate, retardMaudan)//mauradon spawns

//tier4 area
makePool(poolEntry++, miningNode1, 3, respawnRate, spawn4Tier1)
makePool(poolEntry++, miningNode2, 5, respawnRate, spawn4Tier2)
makePool(poolEntry++, miningNode3, 5, respawnRate, spawn4Tier3)
makePool(poolEntry++, miningNode4, 15, respawnRate, spawn4Tier4)