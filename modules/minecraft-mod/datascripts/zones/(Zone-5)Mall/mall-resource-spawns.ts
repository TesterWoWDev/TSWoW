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
    [-8207.934570,300.416412,3.365346,5.050359],
    [-8207.569336,295.069641,3.363938,4.724421],
    [-8206.750977,294.232330,3.361032,3.660208],
    [-8213.312500,295.009705,3.365188,2.890517],
    [-8216.982422,299.064728,3.366574,3.094721],
    [-8219.074219,300.657623,3.366574,3.448150],
    [-8220.517578,301.020294,3.368568,3.954732],
    [-8219.264648,293.953003,3.367176,4.693005],
    [-8219.635742,292.488159,3.367176,2.855176],
    [-8231.177734,293.363617,3.354001,2.513528],
    [-8237.803711,293.546021,3.330925,2.929789],
    [-8241.130859,295.762665,3.327767,2.383937],
    [-8246.249023,298.323822,3.323086,1.893063],
    [-8243.374023,302.766846,3.325193,0.667842],
    [-8239.944336,308.417206,3.331078,2.144391],
    [-8237.921875,304.628113,3.338860,0.569664],
    [-8234.572266,312.276306,3.373366,1.060538],
    [-8236.030273,313.020172,3.359263,1.123370],
    [-8239.753906,314.237427,3.328925,1.794886],
    [-8245.284180,313.671875,3.321229,2.266125],
    [-8247.347656,319.804993,3.307605,0.785649],
    [-8246.438477,321.974670,3.307605,0.204454],
    [-8243.350586,323.704041,3.310706,0.514686],
    [-8241.339844,327.499390,3.332761,0.216235],
    [-8241.385742,329.339386,3.334770,5.776855],
    [-8236.918945,326.020874,3.378901,5.419501],
    [-8236.477539,321.061646,3.372803,4.641957],
    [-8234.837891,319.937225,3.384467,5.050363],
    [-8230.524414,322.486389,3.414263,5.812196],
    [-8228.537109,323.541870,3.417028,6.083157],
    [-8225.121094,325.984802,3.427920,6.189185],
    [-8220.999023,326.891632,3.428956,6.153844],
    [-8218.488281,328.401550,3.427324,6.016400],
    [-8214.727539,327.878418,3.431299,5.340960],
    [-8216.057617,323.271912,3.423155,4.846159],
    [-8213.166016,319.758759,3.416997,4.555563],
    [-8218.717773,321.363556,3.419194,4.225697],
    [-8218.201172,313.924255,3.416208,4.045057],
    [-8224.491211,314.844696,3.416208,4.524147],
    [-8220.361328,310.203979,3.406793,5.069997],
    [-8215.799805,306.182007,3.396989,5.266346],
    [-8211.172852,309.185883,3.413169,1.174422],
    [-8210.778320,312.204681,3.413607,1.300086],
    [-8206.971680,317.118134,3.415567,1.453238],
    [-8208.998047,317.382080,3.415567,1.567121],
    [-8208.985352,320.882050,3.415740,1.567121],
    [-8208.104492,327.429077,3.453308,1.822376],
    [-8207.907227,329.454285,3.469190,2.332885],
    [-8228.875977,327.165771,4.534684,3.801580],
    [-8230.228516,327.706848,4.534684,2.910152],
    [-8230.472656,328.840881,4.534684,0.188747],
    [-8229.137695,328.454498,4.534684,5.812199],
    [-8205.987305,311.182648,4.519197,4.484875],
    [-8207.006836,311.400452,4.519197,4.559486],
    [-8206.957031,309.515259,4.519197,4.559486],
    [-8206.717773,308.053192,4.519197,4.245329],
    [-8205.286133,287.599396,3.340293,0.981998],
    [-8205.686523,289.202332,3.347966,6.110649],
    [-8204.195312,288.761902,3.343000,6.083160]],150)//trisfal pumpkin