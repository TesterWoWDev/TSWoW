import { undiscoveredGreens, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../items/gems/tier1-gem";
import { tierOneBaseResources } from "../items/armor/tier1-set";
import { setupMiningNode, makeMiningNode, makePool } from "../functions/mining-node-functions";
import { tierTwoBaseResources } from "../items/armor/tier2-set";
import { tierThreeBaseResources } from "../items/armor/tier3-set";
import { tierFourBaseResources } from "../items/armor/tier4-set";
import { spawn1 } from "./mining-node-one-spawns";
import { spawn2 } from "./mining-node-two-spawns";
import { spawn3 } from "./mining-node-three-spawns";
import { spawn4 } from "./mining-node-four-spawns";

let poolEntry = 100000
let respawnRate = 300
let node1 = makeMiningNode('Copper Vein 1',310,38,'tier1')
setupMiningNode(node1,tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
makePool(poolEntry++, node1, 30, respawnRate, spawn1)

let node2 = makeMiningNode('Copper Vein 2',310,18,'tier2')
setupMiningNode(node2,tierTwoBaseResources[3],tierTwoBaseResources[4],tierTwoBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
makePool(poolEntry++, node2, 30, respawnRate, spawn2)

let node3 = makeMiningNode('Copper Vein 3',310,19,'tier3')
setupMiningNode(node3,tierThreeBaseResources[3],tierThreeBaseResources[4],tierThreeBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
makePool(poolEntry++, node3, 30, respawnRate, spawn3)

let node4 = makeMiningNode('Copper Vein 4',310,20,'tier4')
setupMiningNode(node4,tierFourBaseResources[3],tierFourBaseResources[4],tierFourBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
makePool(poolEntry++, node4, 30, respawnRate, spawn4)