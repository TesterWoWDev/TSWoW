import { undiscoveredGreens, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../items/gems/tier1-gem";
import { tierOneBaseResources } from "../items/armor/tier1-set";
import { setupMiningNode, makeMiningNode } from "../functions/mining-node-functions";

setupMiningNode(makeMiningNode('Copper Vein 1',3998,38,'tier1'),tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
setupMiningNode(makeMiningNode('Copper Vein 2',3998,18,'tier2'),tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
setupMiningNode(makeMiningNode('Copper Vein 3',3998,19,'tier3'),tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
setupMiningNode(makeMiningNode('Copper Vein 3',3998,20,'tier4'),tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
