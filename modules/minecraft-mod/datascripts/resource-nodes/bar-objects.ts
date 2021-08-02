import { addLootToGobChest } from "../functions/gob-functions";
import { makeResourceNode } from "../functions/resource-node-functions";
import { tierOneBaseResources } from "../items/armor/tier1-set";
import { tierTwoBaseResources } from "../items/armor/tier2-set";
import { tierThreeBaseResources } from "../items/armor/tier3-set";
import { tierFourBaseResources } from "../items/armor/tier4-set";

export let tierOneBarNode1 = makeResourceNode('Abandoned Metal Bar',259,57,'barnode01')
tierOneBarNode1.Display.setID(6453)
addLootToGobChest(tierOneBarNode1,[tierOneBaseResources[4]],[100],1)
addLootToGobChest(tierOneBarNode1,[tierOneBaseResources[5]],[100],2)

export let tierOneBarNode2 = makeResourceNode('Abandoned Metal Bar',259,57,'barnode02')
tierOneBarNode2.Display.setID(6458)
addLootToGobChest(tierOneBarNode2,[tierTwoBaseResources[4]],[100],1)
addLootToGobChest(tierOneBarNode2,[tierTwoBaseResources[5]],[100],2)

export let tierOneBarNode3 = makeResourceNode('Abandoned Metal Bar',259,57,'barnode03')
tierOneBarNode3.Display.setID(6459)
addLootToGobChest(tierOneBarNode3,[tierThreeBaseResources[4]],[100],1)
addLootToGobChest(tierOneBarNode3,[tierThreeBaseResources[5]],[100],2)

export let tierOneBarNode4 = makeResourceNode('Abandoned Metal Bar',259,57,'barnode04')
tierOneBarNode4.Display.setID(6462)
addLootToGobChest(tierOneBarNode4,[tierFourBaseResources[4]],[100],1)
addLootToGobChest(tierOneBarNode4,[tierFourBaseResources[5]],[100],2)
