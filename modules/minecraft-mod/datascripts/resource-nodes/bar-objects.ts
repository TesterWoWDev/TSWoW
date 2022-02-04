import { addLootToGobChest } from "../functions/gob-functions";
import { makeResourceNode } from "../functions/resource-node-functions";
import { tierOneBaseResources } from "../items/armor/tier1-set";
import { tierTwoBaseResources } from "../items/armor/tier2-set";
import { tierThreeBaseResources } from "../items/armor/tier3-set";
import { tierFourBaseResources } from "../items/armor/tier4-set";

export let tierOneBarNode1 = makeResourceNode(
    "Abandoned Metal Bar",
    6453,
    57,
    "barnode01"
);
addLootToGobChest(tierOneBarNode1, [tierOneBaseResources[4]], [100], 1);
addLootToGobChest(tierOneBarNode1, [tierOneBaseResources[5]], [100], 2);

export let tierOneBarNode2 = makeResourceNode(
    "Abandoned Metal Bar",
    6458,
    57,
    "barnode02"
);
addLootToGobChest(tierOneBarNode2, [tierTwoBaseResources[4]], [100], 1);
addLootToGobChest(tierOneBarNode2, [tierTwoBaseResources[5]], [100], 2);

export let tierOneBarNode3 = makeResourceNode(
    "Abandoned Metal Bar",
    6459,
    57,
    "barnode03"
);
addLootToGobChest(tierOneBarNode3, [tierThreeBaseResources[4]], [100], 1);
addLootToGobChest(tierOneBarNode3, [tierThreeBaseResources[5]], [100], 2);

export let tierOneBarNode4 = makeResourceNode(
    "Abandoned Metal Bar",
    6462,
    57,
    "barnode04"
);
addLootToGobChest(tierOneBarNode4, [tierFourBaseResources[4]], [100], 1);
addLootToGobChest(tierOneBarNode4, [tierFourBaseResources[5]], [100], 2);
