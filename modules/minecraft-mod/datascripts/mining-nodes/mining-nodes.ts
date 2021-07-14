import { undiscoveredGreens, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../items/gems/tier1-gem";
import { tierOneBaseResources } from "../items/armor/tier1-set";
import { setupMiningNode, makeMiningNode } from "../functions/mining-node-functions";
import { tierTwoBaseResources } from "../items/armor/tier2-set";
import { tierThreeBaseResources } from "../items/armor/tier3-set";
import { tierFourBaseResources } from "../items/armor/tier4-set";

setupMiningNode(makeMiningNode('Copper Vein 1',3998,38,'tier1'),tierOneBaseResources[3],tierOneBaseResources[4],tierOneBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
setupMiningNode(makeMiningNode('Copper Vein 2',3998,18,'tier2'),tierTwoBaseResources[3],tierTwoBaseResources[4],tierTwoBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
setupMiningNode(makeMiningNode('Copper Vein 3',3998,19,'tier3'),tierThreeBaseResources[3],tierThreeBaseResources[4],tierThreeBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
setupMiningNode(makeMiningNode('Copper Vein 4',3998,20,'tier4'),tierFourBaseResources[3],tierFourBaseResources[4],tierFourBaseResources[0],[undiscoveredReds,undiscoveredGreens,undiscoveredPurples,undiscoveredYellows])
