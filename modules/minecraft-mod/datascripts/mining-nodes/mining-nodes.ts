import { undiscoveredGreens, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../items/gems/tier1-gem";
import { tierOneBaseResources } from "../items/tier1-set";
import { setupMiningNode, makeMiningNode } from "./mining-node-functions";

setupMiningNode(makeMiningNode('Copper Vein',3998,38,'tier1'),tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
