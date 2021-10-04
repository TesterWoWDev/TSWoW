import { makeResourceNode } from "../../functions/resource-node-functions"
import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { ShinyRedApple, RefreshingSpringWater } from "../(Zone-1)Bramblewood/zone-1-items";
import { SmallSackofCoins } from "../../items/currencies";
import { addLootToGobChestMultiDrop } from "../../functions/gob-functions";
import { spawnMultiGobTimer } from "../../functions/spawning-functions";

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

export let MaturePumpkin = std.Items.create(MODNAME,'mpumpkin',4656)
MaturePumpkin.Name.enGB.set('Matured Pumpkin')
MaturePumpkin.Quality.setWhite()
MaturePumpkin.MaxStack.set(9999)
MaturePumpkin.Price.set(55,95)

export let WatermelonItem = std.Items.create(MODNAME,'rwatermelon',4538)
WatermelonItem.Name.enGB.set('Watermelon')
WatermelonItem.Quality.setWhite()
WatermelonItem.MaxStack.set(9999)
WatermelonItem.Price.set(55,95)
WatermelonItem.RequiredLevel.set(0)

/*Object Creation Zone*/
export let Watermelon = makeResourceNode('Ripe Watermelon',85636,57,'watermelon-chest')
Watermelon.Size.set(1)
addLootToGobChestMultiDrop(Watermelon,[WatermelonItem.ID],[100],[1],[1],1)
export let TirisfalPumpkin = makeResourceNode('Matured Pumpkin',60,57,'pumpkin-chest')
TirisfalPumpkin.Size.set(1)
addLootToGobChestMultiDrop(TirisfalPumpkin,[MaturePumpkin.ID],[100],[1],[1],1)
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

/*Object Spawning Zone*/
spawnMultiGobTimer(Watermelon.ID, [
    [-8176.382, -116.968, 0.180, 0.180, 4.376], 
    [-8168.203, -109.813, 1.296, 2.419], 
    [-8166.599, -110.485, 1.296, 2.800], 
    [-8169.804, -100.548, 0.179, 1.485], 
    [-8143.457, -88.685, 0.178, 5.353], 
    [-8137.371, -73.559, 0.163, 3.772], 
    [-8145.463, 98.444, 1.297, 2.088], 
    [-8136.298, -101.223, 0.270, 1.730], 
    [-8136.736328, -116.110, 0.276, 2.575]],150)//trisfal pumpkin