
import { makeResourceNode } from "../../functions/resource-node-functions"
import { tierOneBaseResources } from "../../items/armor/tier1-set"
import { Silverleaf, Earthroot, WildSteelbloom, Mageroyal, Peacebloom } from "../../zones/item-manifest"

export let herbNode1 = makeResourceNode('herb Vein 1',270,29,'tier1')
herbNode1.Loot.modRef(table=>{
    table.addItem(tierOneBaseResources[5],30,1,2)
    table.addItem(Silverleaf.ID,100,1,2)
})
export let herbNode2 = makeResourceNode('herb Vein 2',414,29,'tier1')
herbNode2.Loot.modRef(table=>{
    table.addItem(Earthroot.ID,100,1,2)
    table.addItem(tierOneBaseResources[5],30,1,2)
})
export let herbNode3 = makeResourceNode('herb Vein 3',371,29,'tier1')
herbNode3.Loot.modRef(table=>{
    table.addItem(WildSteelbloom.ID,100,1,2)
    table.addItem(tierOneBaseResources[5],30,1,2)
})
export let herbNode4 = makeResourceNode('herb Vein 4',268,29,'tier1')
herbNode4.Loot.modRef(table=>{
    table.addItem(Mageroyal.ID,100,1,2)
    table.addItem(tierOneBaseResources[5],30,1,2)
})
export let herbNode5 = makeResourceNode('herb Vein 5',269,29,'tier1')
herbNode2.Loot.modRef(table=>{
    table.addItem(Peacebloom.ID,100,1,2)
    table.addItem(tierOneBaseResources[5],30,1,2)
})