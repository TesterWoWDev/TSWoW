import { Silverleaf, Earthroot, WildSteelbloom, Mageroyal, Peacebloom } from "../../creatures/zone-1-items"
import { makeResourceNode } from "../../functions/resource-node-functions"

export let herbNode1 = makeResourceNode('herb Vein 1',310,29,'tier1')
    herbNode1.Loot.addItem(Silverleaf.ID,100,1,2)
export let herbNode2 = makeResourceNode('herb Vein 2',310,29,'tier1')
    herbNode2.Loot.addItem(Earthroot.ID,100,1,2)
export let herbNode3 = makeResourceNode('herb Vein 3',310,29,'tier1')
    herbNode3.Loot.addItem(WildSteelbloom.ID,100,1,2)
export let herbNode4 = makeResourceNode('herb Vein 4',310,29,'tier1')
    herbNode4.Loot.addItem(Mageroyal.ID,100,1,2)
export let herbNode5 = makeResourceNode('herb Vein 5',310,29,'tier1')
    herbNode5.Loot.addItem(Peacebloom.ID,100,1,2)