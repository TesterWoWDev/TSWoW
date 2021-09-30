import { makeResourceNode } from "../../functions/resource-node-functions"
import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { ShinyRedApple, RefreshingSpringWater } from "../zone-1/zone-1-items";
import { SmallSackofCoins } from "../../items/currencies";

/*Item Creation Zone*/
export let LoggingPileLogs = std.Items.create(MODNAME,'logpilelogs',929)
LoggingPileLogs.Name.enGB.set('Logs')
LoggingPileLogs.Quality.setWhite()
LoggingPileLogs.MaxStack.set(9999)

export let GrainSack = std.Items.create(MODNAME,'grainsack',8838)
GrainSack.Name.enGB.set('Grain')
GrainSack.Quality.setWhite()
GrainSack.MaxStack.set(9999)


/*Object Creation Zone*/
export let PileofLogs = makeResourceNode('Pile of Logs',289,57,'pileoflogs-chest')
PileofLogs.Size.set(1)
PileofLogs.Loot.addItem(LoggingPileLogs.ID,100,1,4,false,1,2)

export let SmallTownChest = makeResourceNode('Chest',259,57,'smalltownchest-chest')
SmallTownChest.Size.set(1)
SmallTownChest.Loot.addItem(ShinyRedApple.ID,100,1,3,false,1,2)
SmallTownChest.Loot.addItem(RefreshingSpringWater.ID,100,1,3,false,2,2)
SmallTownChest.Loot.addItem(GrainSack.ID,25,1,1,false,3,2)
SmallTownChest.Loot.addItem(SmallSackofCoins.ID,25,1,1,false,3,2)

export let SackofGrains = makeResourceNode('Sack of Grain',5471,57,'sackofgrains-chest')
SackofGrains.Size.set(1)
SackofGrains.Loot.addItem(GrainSack.ID,100,6,24,false,1,2)

export let BowlofFruit = makeResourceNode('Bowl of Fruit',381,57,'bowloffruit-chest')
BowlofFruit.Size.set(0.25)
BowlofFruit.Loot.addItem(ShinyRedApple.ID,100,1,4,false,1,2)
