import { undiscoveredGreens, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../items/gems/tier1-gem";
import { tierOneBaseResources } from "../items/armor/tier1-set";
import { setupMiningNode, makeResourceNode } from "../functions/mining-node-functions";
import { tierTwoBaseResources } from "../items/armor/tier2-set";
import { tierThreeBaseResources } from "../items/armor/tier3-set";
import { tierFourBaseResources } from "../items/armor/tier4-set";

export let node1 = makeResourceNode('Copper Vein 1',310,38,'tier1')
setupMiningNode(node1,tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])

export let node2 = makeResourceNode('Copper Vein 2',310,18,'tier2')
setupMiningNode(node2,tierTwoBaseResources[3],tierTwoBaseResources[4],tierTwoBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])

export let node3 = makeResourceNode('Copper Vein 3',310,19,'tier3')
setupMiningNode(node3,tierThreeBaseResources[3],tierThreeBaseResources[4],tierThreeBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])

export let node4 = makeResourceNode('Copper Vein 4',310,20,'tier4')
setupMiningNode(node4,tierFourBaseResources[3],tierFourBaseResources[4],tierFourBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
