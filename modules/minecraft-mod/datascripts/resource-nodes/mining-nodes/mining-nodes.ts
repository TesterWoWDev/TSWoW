import {
    makeResourceNode,
    setupMiningNode,
} from "../../functions/resource-node-functions";
import { tierOneBaseResources } from "../../items/armor/tier1-set";
import { tierTwoBaseResources } from "../../items/armor/tier2-set";
import { tierThreeBaseResources } from "../../items/armor/tier3-set";
import { tierFourBaseResources } from "../../items/armor/tier4-set";
import {
    undiscoveredReds,
    undiscoveredGreens,
    undiscoveredPurples,
    undiscoveredYellows,
} from "../../items/gems/tier1-gem";

export let miningNode1 = makeResourceNode("Copper Vein 1", 310, 38, "tier1");
setupMiningNode(
    miningNode1,
    tierOneBaseResources[3],
    tierOneBaseResources[4],
    tierOneBaseResources[0],
    [
        undiscoveredReds,
        undiscoveredGreens,
        undiscoveredPurples,
        undiscoveredYellows,
    ]
);

export let miningNode2 = makeResourceNode("Copper Vein 2", 310, 18, "tier2");
setupMiningNode(
    miningNode2,
    tierTwoBaseResources[3],
    tierTwoBaseResources[4],
    tierTwoBaseResources[0],
    [
        undiscoveredReds,
        undiscoveredGreens,
        undiscoveredPurples,
        undiscoveredYellows,
    ]
);

export let miningNode3 = makeResourceNode("Copper Vein 3", 310, 19, "tier3");
setupMiningNode(
    miningNode3,
    tierThreeBaseResources[3],
    tierThreeBaseResources[4],
    tierThreeBaseResources[0],
    [
        undiscoveredReds,
        undiscoveredGreens,
        undiscoveredPurples,
        undiscoveredYellows,
    ]
);

export let miningNode4 = makeResourceNode("Copper Vein 4", 310, 20, "tier4");
setupMiningNode(
    miningNode4,
    tierFourBaseResources[3],
    tierFourBaseResources[4],
    tierFourBaseResources[0],
    [
        undiscoveredReds,
        undiscoveredGreens,
        undiscoveredPurples,
        undiscoveredYellows,
    ]
);
