import { makeResourceNode } from "../../functions/resource-node-functions"
import { SmallSackofCoins } from "../../items/currencies";
import { addLootToGobChestMultiDrop } from "../../functions/gob-functions";
import { spawnMultiGobTimer } from "../../functions/spawning-functions";
import { WatermelonItem, MaturePumpkin, LoggingPileLogs, GrainSack, RefreshingSpringWater, ShinyRedApple } from "../item-manifest";

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
    {map:725,x:-8207.934570,y:300.416412,z:3.365346,o:5.050359},
{map:725,x: -8207.569336,y:295.069641,z:3.363938,o:4.724421},
{map:725,x: -8206.750977,y:294.232330,z:3.361032,o:3.660208},
{map:725,x: -8213.312500,y:295.009705,z:3.365188,o:2.890517},
{map:725,x: -8216.982422,y:299.064728,z:3.366574,o:3.094721},
{map:725,x: -8219.074219,y:300.657623,z:3.366574,o:3.448150},
{map:725,x: -8220.517578,y:301.020294,z:3.368568,o:3.954732},
{map:725,x: -8219.264648,y:293.953003,z:3.367176,o:4.693005},
{map:725,x: -8219.635742,y:292.488159,z:3.367176,o:2.855176},
{map:725,x: -8231.177734,y:293.363617,z:3.354001,o:2.513528},
{map:725,x: -8237.803711,y:293.546021,z:3.330925,o:2.929789},
{map:725,x: -8241.130859,y:295.762665,z:3.327767,o:2.383937},
{map:725,x: -8246.249023,y:298.323822,z:3.323086,o:1.893063},
{map:725,x: -8243.374023,y:302.766846,z:3.325193,o:0.667842},
{map:725,x: -8239.944336,y:308.417206,z:3.331078,o:2.144391},
{map:725,x: -8237.921875,y:304.628113,z:3.338860,o:0.569664},
{map:725,x: -8234.572266,y:312.276306,z:3.373366,o:1.060538},
{map:725,x: -8236.030273,y:313.020172,z:3.359263,o:1.123370},
{map:725,x: -8239.753906,y:314.237427,z:3.328925,o:1.794886},
{map:725,x: -8245.284180,y:313.671875,z:3.321229,o:2.266125},
{map:725,x: -8247.347656,y:319.804993,z:3.307605,o:0.785649},
{map:725,x: -8246.438477,y:321.974670,z:3.307605,o:0.204454},
{map:725,x: -8243.350586,y:323.704041,z:3.310706,o:0.514686},
{map:725,x: -8241.339844,y:327.499390,z:3.332761,o:0.216235},
{map:725,x: -8241.385742,y:329.339386,z:3.334770,o:5.776855},
{map:725,x: -8236.918945,y:326.020874,z:3.378901,o:5.419501},
{map:725,x: -8236.477539,y:321.061646,z:3.372803,o:4.641957},
{map:725,x: -8234.837891,y:319.937225,z:3.384467,o:5.050363},
{map:725,x: -8230.524414,y:322.486389,z:3.414263,o:5.812196},
{map:725,x: -8228.537109,y:323.541870,z:3.417028,o:6.083157},
{map:725,x: -8225.121094,y:325.984802,z:3.427920,o:6.189185},
{map:725,x: -8220.999023,y:326.891632,z:3.428956,o:6.153844},
{map:725,x: -8218.488281,y:328.401550,z:3.427324,o:6.016400},
{map:725,x: -8214.727539,y:327.878418,z:3.431299,o:5.340960},
{map:725,x: -8216.057617,y:323.271912,z:3.423155,o:4.846159},
{map:725,x: -8213.166016,y:319.758759,z:3.416997,o:4.555563},
{map:725,x: -8218.717773,y:321.363556,z:3.419194,o:4.225697},
{map:725,x: -8218.201172,y:313.924255,z:3.416208,o:4.045057},
{map:725,x: -8224.491211,y:314.844696,z:3.416208,o:4.524147},
{map:725,x: -8220.361328,y:310.203979,z:3.406793,o:5.069997},
{map:725,x: -8215.799805,y:306.182007,z:3.396989,o:5.266346},
{map:725,x: -8211.172852,y:309.185883,z:3.413169,o:1.174422},
{map:725,x: -8210.778320,y:312.204681,z:3.413607,o:1.300086},
{map:725,x: -8206.971680,y:317.118134,z:3.415567,o:1.453238},
{map:725,x: -8208.998047,y:317.382080,z:3.415567,o:1.567121},
{map:725,x: -8208.985352,y:320.882050,z:3.415740,o:1.567121},
{map:725,x: -8208.104492,y:327.429077,z:3.453308,o:1.822376},
{map:725,x: -8207.907227,y:329.454285,z:3.469190,o:2.332885},
{map:725,x: -8228.875977,y:327.165771,z:4.534684,o:3.801580},
{map:725,x: -8230.228516,y:327.706848,z:4.534684,o:2.910152},
{map:725,x: -8230.472656,y:328.840881,z:4.534684,o:0.188747},
{map:725,x: -8229.137695,y:328.454498,z:4.534684,o:5.812199},
{map:725,x: -8205.987305,y:311.182648,z:4.519197,o:4.484875},
{map:725,x: -8207.006836,y:311.400452,z:4.519197,o:4.559486},
{map:725,x: -8206.957031,y:309.515259,z:4.519197,o:4.559486},
{map:725,x: -8206.717773,y:308.053192,z:4.519197,o:4.245329},
{map:725,x: -8205.286133,y:287.599396,z:3.340293,o:0.981998},
{map:725,x: -8205.686523,y:289.202332,z:3.347966,o:6.110649},
{map:725,x: -8204.195312,y:288.761902,z:3.343000,o:6.083160},
],150)//trisfal pumpkin