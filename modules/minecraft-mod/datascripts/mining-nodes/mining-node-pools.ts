import { spawn1, spawn2, spawn3, spawn4 } from "./mining-node-spawns";
import { makePool } from "../functions/mining-node-functions";
import { node1, node2, node3, node4 } from "./mining-nodes";

let poolEntry = 100000
let respawnRate = 300

makePool(poolEntry++, node1, 50, respawnRate, spawn1)
makePool(poolEntry++, node2, 30, respawnRate, spawn2)
makePool(poolEntry++, node3, 20, respawnRate, spawn3)
makePool(poolEntry++, node4, 15, respawnRate, spawn4)