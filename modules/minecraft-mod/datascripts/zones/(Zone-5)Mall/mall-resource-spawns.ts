import { makeResourceNode } from "../../functions/resource-node-functions"
import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { ShinyRedApple, RefreshingSpringWater } from "../(Zone-1)Bramblewood/zone-1-items";
import { SmallSackofCoins } from "../../items/currencies";
import { addLootToGobChestMultiDrop } from "../../functions/gob-functions";

/*Item Creation Zone*/
export let LoggingPileLogs = std.Items.create(MODNAME,'logpilelogs',44208)
LoggingPileLogs.Name.enGB.set('Logs')
LoggingPileLogs.Quality.setWhite()
LoggingPileLogs.MaxStack.set(9999)
LoggingPileLogs.Price.set(60,80)

export let GrainSack = std.Items.create(MODNAME,'grainsack',8838)
GrainSack.Name.enGB.set('Grain')
GrainSack.Quality.setWhite()
GrainSack.MaxStack.set(9999)
GrainSack.Price.set(60,80)



/*Object Creation Zone*/
export let PileofLogs = makeResourceNode('Pile of Logs',289,57,'pileoflogs-chest')
PileofLogs.Size.set(1)
addLootToGobChestMultiDrop(PileofLogs,[LoggingPileLogs.ID],[100],[1],[3],1)
export let SmallTownChest = makeResourceNode('Chest',259,57,'smalltownchest-chest')
SmallTownChest.Size.set(1)
addLootToGobChestMultiDrop(SmallTownChest,[ShinyRedApple.ID,RefreshingSpringWater.ID,GrainSack.ID,SmallSackofCoins.ID],[100,100,25,25],[1,1,1,1],[2,2,1,1],1)
export let SackofGrains = makeResourceNode('Sack of Grain',5471,57,'sackofgrains-chest')
SackofGrains.Size.set(1)
addLootToGobChestMultiDrop(SackofGrains,[GrainSack.ID],[100],[1],[2],1)
export let BowlofFruit = makeResourceNode('Bowl of Fruit',381,57,'bowloffruit-chest')
BowlofFruit.Size.set(0.5)
addLootToGobChestMultiDrop(BowlofFruit,[ShinyRedApple.ID],[100],[1],[2],1)