import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { addLootToGobChest, addLootToGobChestSingleChanceMultiGroup, addLootToGobChestSingleChance } from "../functions/gob-functions"
import { addLootToCreature, addLootToCreatureSingleChance } from "../functions/npc-functions"
import { makeResourceNode } from "../functions/resource-node-functions"
import { spawnMultiGobTimer, spawnMultipleNPCWithTimer } from "../functions/spawning-functions"
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial, tierTwoBaseResources } from "../items/armor/tier2-set"
import { tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial, tierThreeBaseResources } from "../items/armor/tier3-set"
import { LargeSackofCoins } from "../items/currencies"
import { undiscoveredReds, undiscoveredGreens, undiscoveredPurples, undiscoveredYellows, undiscoveredBlues, undiscoveredOranges } from "../items/gems/tier1-gem"
import { MODNAME } from "../modname"
import { ReignLeggings, TrackerBelt, Noose, SporeReed, RenewalHammer, WildMagic, UnbrokenChain, PhosphoSword, DestructiveMaul, Bladefist, Fathomstone, ArgentSentinel, ObliterativeBoots, VigilanteRing, Naaru, LostAge, DungeonItem01, DungeonItem02, DungeonItem03, DungeonItem04, DungeonItem05, DungeonItem06, DungeonItem07, DungeonItem08, DungeonItem09, DungeonItem10, DungeonItem11, DungeonItem12, DungeonItem13, DungeonItem14, DungeonItem15, DungeonItem16, DungeonItem17, DungeonItem18, DungeonItem19, DungeonItem20, DungeonItem21, DungeonItem22, DungeonItem23, DungeonItem24, DungeonItem25, DungeonItem26, DungeonItem27, DungeonItem28, DungeonItem29, DungeonItem30, DungeonItem31, DungeonItem32, DungeonItem33, DungeonItem34, DungeonItem35, DungeonItem36, DarkSteel, DarkLeather, DarkCloth, Commendation, Contempt, DragonscaleBlade, EyeofDestiny, FocusingCrystal, Gliderboots, Glidergreaves, Glidersabatons, Gliderwrap, HeartPit, ItemReward01, ItemReward02, ItemReward03, ItemReward04, ItemReward05, ItemReward06, LostTreads, LurkerBelt, LurkerCord, LurkerGirdle, LurkerGrasp, MiseryMace, OrbofPower, Ravagerband, Ravagerbracer, RavagerCuff, RavagerWrap, SunwellVial, VolatilePower } from "./item-manifest"

export let Shadowbolt = std.Spells.create(MODNAME,'shadowbolt-spell',25307)
export let ShadowVolley = std.Spells.create(MODNAME,'shadowvolley-spell',25586)
ShadowVolley.Effects.get(0).BasePoints.set(566)
ShadowVolley.Effects.get(0).DieSides.set(121)
ShadowVolley.Effects.get(0).Radius.set(20,0,20)
export let ShadowPain = std.Spells.create(MODNAME,'pain-spell',25367)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Room 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Creature Spawns (Normal Mobs)
export let DungeonMob01 = std.CreatureTemplates.create(MODNAME,'dungeonmob01',3271)
DungeonMob01.Name.enGB.set('Suzu\'ven Demonspawn')
    DungeonMob01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    DungeonMob01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(Shadowbolt.ID,2,7)
    DungeonMob01.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(ShadowVolley.ID,2,7)
    DungeonMob01.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(ShadowPain.ID,2,7)
DungeonMob01.Level.set(6,6)
DungeonMob01.FactionTemplate.set(48)
DungeonMob01.DamageSchool.setNormal()
DungeonMob01.Stats.ArmorMod.set(5)
DungeonMob01.Stats.DamageMod.set(30)
DungeonMob01.Stats.ExperienceMod.set(10)
DungeonMob01.Stats.HealthMod.set(40)
DungeonMob01.Stats.ManaMod.set(10)
DungeonMob01.Rank.setElite()
DungeonMob01.Models.clearAll()
DungeonMob01.Models.addIds(18373)
export let DungeonMob01Loot = DungeonMob01.NormalLoot
DungeonMob01Loot.makeUnique(false)
spawnMultipleNPCWithTimer(DungeonMob01.ID,0,0,[
    [-8743.326172,585.324890,-15.320604,2.583537],
    [-8759.154297,646.166260,-17.919151,2.659830],
    [-8756.805664,651.509460,-17.569628,2.793347],
    [-8762.393555,653.101440,-18.045757,2.864033],
    [-8794.692383,631.597534,-18.204575,2.867960],
    [-8800.267578,633.674805,-17.818176,1.764475],
    [-8798.906250,639.394531,-18.267073,1.316798],
    [-8783.087891,684.432861,-18.726955,1.226477],
    [-8788.500977,686.543640,-19.205553,1.198988],
    [-8783.765625,692.959045,-18.123034,0.660991],
    [-8799.750977,717.577942,-17.960560,4.639033],
    [-8795.242188,716.350464,-18.188185,4.081402],
    [-8828.529297,696.002258,-17.788317,1.159720],
    [-8830.471680,704.410889,-17.796488,6.084167],
    [-8824.225586,711.850037,-17.332754,4.752918],
    [-8740.042969,591.431702,-15.456429,3.549577],
    [-8746.310547,593.816345,-16.625267,4.547027]],300)

addLootToCreature(DungeonMob01Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[10,10,10],3)
addLootToCreature(DungeonMob01Loot,tierOneBaseResources,[5,5,5,5,5,5,5],3)
addLootToCreature(DungeonMob01Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[2,2,2],4)
addLootToCreature(DungeonMob01Loot,tierTwoBaseResources,[2,2,2,2,2,2,2],4)
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(DungeonMob01Loot,[
    ReignLeggings.ID,           TrackerBelt.ID,          Noose.ID,               SporeReed.ID,
    RenewalHammer.ID,           WildMagic.ID,            UnbrokenChain.ID,       PhosphoSword.ID,
    DestructiveMaul.ID,         Bladefist.ID,            Fathomstone.ID,         ArgentSentinel.ID,
    ObliterativeBoots.ID,       VigilanteRing.ID,        Naaru.ID,               LostAge.ID
],0.5,1)
addLootToCreatureSingleChance(DungeonMob01Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(DungeonMob01Loot,[
    OrbofPower.ID
],0.5,3)


export let ConsumeSpell = std.Spells.create(MODNAME,'consumespell-spell',49381)
ConsumeSpell.Duration.set(10000,0,10000)
export let BossShadowVolley = std.Spells.create(MODNAME,'bossshadowvolley-spell',25586)
BossShadowVolley.Effects.get(0).BasePoints.set(1566)
BossShadowVolley.Effects.get(0).DieSides.set(321)
export let DrainLife = std.Spells.create(MODNAME,'drainlife-spell',49617)

export let DungeonBoss01 = std.CreatureTemplates.create(MODNAME,'dungeonboss01',3271)
DungeonBoss01.Name.enGB.set('Ageth the Unmaker')
DungeonBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
DungeonBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
DungeonBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
DungeonBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
DungeonBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
DungeonBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
DungeonBoss01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(DrainLife.ID,2,7)
DungeonBoss01.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(BossShadowVolley.ID,2,7)
DungeonBoss01.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(ConsumeSpell.ID,2,7)
DungeonBoss01.Level.set(7,7)
DungeonBoss01.FactionTemplate.set(48)
DungeonBoss01.DamageSchool.setNormal()
DungeonBoss01.Stats.ArmorMod.set(5)
DungeonBoss01.Stats.DamageMod.set(75)
DungeonBoss01.Stats.ExperienceMod.set(30)
DungeonBoss01.Stats.HealthMod.set(100)
DungeonBoss01.Stats.ManaMod.set(25)
DungeonBoss01.Rank.setRareElite()
DungeonBoss01.Models.clearAll()
DungeonBoss01.Models.addIds(16632)
DungeonBoss01.Scale.set(1.75)
export let DungeonBoss01Loot = DungeonBoss01.NormalLoot
spawnMultipleNPCWithTimer(DungeonBoss01.ID,0,0,[
    [-8813.744141,662.621155,-17.837614,0.315410]],3600)
    DungeonBoss01Loot.makeUnique(false)
addLootToCreature(DungeonBoss01Loot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[4,4,4],3)
addLootToCreature(DungeonBoss01Loot,tierThreeBaseResources,[2,2,2,2,2,2,2],3)
addLootToCreature(DungeonBoss01Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10],4)
addLootToCreature(DungeonBoss01Loot,tierTwoBaseResources,[5,5,5,5,5,5,5],4)
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(DungeonBoss01Loot,[
    ReignLeggings.ID,           TrackerBelt.ID,          Noose.ID,               SporeReed.ID,
    RenewalHammer.ID,           WildMagic.ID,            UnbrokenChain.ID,       PhosphoSword.ID,
    DestructiveMaul.ID,         Bladefist.ID,            Fathomstone.ID,         ArgentSentinel.ID,
    ObliterativeBoots.ID,       VigilanteRing.ID,        Naaru.ID,               LostAge.ID
],0.5,1)
addLootToCreatureSingleChance(DungeonBoss01Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(DungeonBoss01Loot,[
    OrbofPower.ID
],100,3)

export let AgitatedBloodMite = std.CreatureTemplates.create(MODNAME,'bloodmite',3271)
AgitatedBloodMite.Name.enGB.set('Agitated Bloodmite')
AgitatedBloodMite.Level.set(5,5)
AgitatedBloodMite.FactionTemplate.set(48)
AgitatedBloodMite.DamageSchool.setNormal()
AgitatedBloodMite.Stats.ArmorMod.set(10)
AgitatedBloodMite.Stats.DamageMod.set(30)
AgitatedBloodMite.Stats.ExperienceMod.set(4)
AgitatedBloodMite.Stats.HealthMod.set(12)
AgitatedBloodMite.Stats.ManaMod.set(10)
AgitatedBloodMite.Models.clearAll()
AgitatedBloodMite.Models.addIds(15983)
spawnMultipleNPCWithTimer(AgitatedBloodMite.ID,5,0,[
    [-8757.743164,648.013611,-17.827976,3.107503],
    [-8759.208008,646.306824,-17.937799,3.107503],
    [-8762.167969,649.587280,-18.194265,2.930789],
    [-8762.767578,654.881409,-17.997023,2.384937],
    [-8765.665039,658.127563,-18.122068,2.404572],
    [-8765.477539,660.662964,-17.982586,2.058996],
    [-8771.004883,667.723816,-18.164373,1.854793],
    [-8769.332031,671.125793,-17.847923,1.854793],
    [-8774.037109,675.082458,-18.113218,1.854793],
    [-8771.932617,684.071167,-17.573902,1.854793],
    [-8773.747070,687.893005,-17.577040,2.604848],
    [-8780.955078,689.605652,-18.090269,2.428134],
    [-8780.977539,690.994141,-18.013659,2.153244],
    [-8778.305664,695.952820,-17.542303,1.442459],
    [-8781.911133,702.095703,-17.681219,2.487039],
    [-8783.083008,712.766724,-17.359367,2.475258],
    [-8785.971680,712.727905,-17.625771,2.534163],
    [-8786.568359,715.340088,-17.530323,2.915081],
    [-8790.485352,715.798096,-17.826672,3.115357],
    [-8788.862305,722.507446,-17.412905,2.306397],
    [-8789.353516,724.855835,-17.362411,2.836541],
    [-8792.712891,724.643921,-17.404791,3.488422],
    [-8798.860352,720.349304,-17.701706,3.951807],
    [-8801.476562,721.519836,-17.432652,3.382393],
    [-8805.390625,718.876648,-17.511824,3.822216],
    [-8807.338867,717.203857,-17.583740,4.289528],
    [-8809.956055,710.712219,-18.156651,4.305237],
    [-8812.087891,708.603943,-18.290424,3.276366],
    [-8820.701172,711.644348,-17.533258,3.402030],
    [-8821.523438,709.634521,-17.721603,3.802583],
    [-8825.127930,709.474731,-17.560799,3.649430],
    [-8829.364258,706.520325,-17.671690,4.324872],
    [-8833.075195,706.600769,-17.385874,3.657284],
    [-8836.034180,702.900940,-17.383934,4.328799],
    [-8832.696289,699.745850,-17.546341,5.699317],
    [-8832.922852,697.667603,-17.440317,4.733280],
    [-8830.622070,694.867065,-17.529800,5.216297],
    [-8831.561523,692.804871,-17.360905,4.878577],
    [-8825.028320,687.485229,-17.822302,5.628628],
    [-8822.867188,683.467102,-17.867962,5.510818],
    [-8821.534180,682.324097,-17.959555,5.608993],
    [-8824.005859,677.463074,-17.463127,4.835375],
    [-8822.163086,672.788147,-17.424444,5.856390],
    [-8813.602539,673.914734,-18.440672,5.860318],
    [-8813.726562,670.324951,-18.179741,5.239854],
    [-8810.491211,667.940186,-18.417984,5.573647],
    [-8810.454102,664.225586,-18.298918,5.016015],
    [-8812.145508,661.766968,-18.001318,3.955729],
    [-8815.808594,658.830994,-17.461927,4.713637],
    [-8810.738281,652.537231,-17.719477,5.373372],
    [-8808.804688,652.535339,-17.937906,5.934930],
    [-8804.850586,648.562073,-18.140388,5.487256],
    [-8806.232422,645.630493,-17.803623,5.004238],
    [-8805.247070,636.757629,-17.460646,5.067069],
    [-8803.722656,635.053162,-17.528378,5.879955],
    [-8802.525391,630.563232,-17.425816,5.793564],
    [-8800.108398,630.836304,-17.690126,0.189747],
    [-8794.030273,626.220276,-17.464701,0.586374],
    [-8793.010742,628.665955,-17.728527,1.002635],
    [-8789.656250,628.635071,-17.516571,0.692402],
    [-8788.824219,630.632629,-17.688961,0.712037],
    [-8786.951172,634.115845,-17.935146,0.798431],
    [-8784.000000,633.482849,-17.672697,0.024814],
    [-8781.341797,636.825073,-17.829292,0.547104],
    [-8780.350586,636.510559,-17.735025,0.185820],
    [-8778.576172,635.176147,-17.529676,0.162259],
    [-8774.647461,636.793030,-17.509546,0.578520],
    [-8774.463867,644.146057,-18.308569,1.363918],
    [-8776.026367,646.635010,-18.666603,2.435987],
    [-8778.569336,653.267029,-19.563576,1.949039],
    [-8781.678711,654.174805,-19.832148,2.278907],
    [-8788.398438,657.993042,-19.832148,2.765854],
    [-8788.839844,660.751038,-19.832148,2.043287],
    [-8789.828125,663.225342,-19.832148,1.748763],
    [-8791.681641,664.438965,-19.832148,2.062922],
    [-8799.717773,667.986938,-19.816351,2.337812],
    [-8799.532227,671.034607,-19.831314,1.780179],
    [-8800.066406,672.821350,-19.831314,1.968674],
    [-8804.618164,674.239014,-19.516281,2.184659],
    [-8804.765625,676.751221,-19.690397,2.184659],
    [-8807.478516,680.023682,-19.649851,2.930788],
    [-8813.692383,682.830933,-19.036583,1.595610],
    [-8814.765625,689.118347,-19.173027,1.827303],
    [-8814.501953,691.071411,-19.258116,0.625644],
    [-8810.564453,692.537720,-19.805511,0.122989],
    [-8809.116211,694.835999,-19.832380,0.547104],
    [-8806.627930,694.175171,-19.832380,0.484272],
    [-8803.838867,697.600159,-19.832380,0.484272],
    [-8800.273438,697.421875,-19.832380,6.154847],
    [-8797.076172,699.751465,-19.547594,5.738587],
    [-8793.746094,700.204773,-19.125332,5.153468],
    [-8792.457031,695.143921,-19.189730,5.153468],
    [-8790.150391,694.393494,-18.858749,5.275204],
    [-8791.263672,690.848389,-19.173323,4.949266],
    [-8793.814453,686.796936,-19.788961,4.925704],
    [-8790.227539,683.513733,-19.588968,5.451919],
    [-8789.820312,680.340881,-19.740297,5.440138],
    [-8786.326172,680.139221,-19.359035,5.440138],
    [-8782.245117,679.903687,-18.929005,5.440138],
    [-8782.373047,675.515503,-19.269075,5.247717],
    [-8779.859375,674.189026,-19.062008,5.247717],
    [-8781.500000,670.800659,-19.520773,4.517299],
    [-8780.863281,667.919617,-19.608023,5.059221],
    [-8777.691406,666.983765,-19.205202,5.487263],
    [-8777.301758,663.503418,-19.334749,5.275207],
    [-8773.991211,662.825195,-18.933674,5.345892]],1200)
    AgitatedBloodMite.NormalLoot.makeUnique(false)

export let DungeonMob02 = std.CreatureTemplates.create(MODNAME,'dungeonmob02banshee',10463)
DungeonMob02.Name.enGB.set('Tormented Banshee')
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    DungeonMob02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,11000,15000,11000,15000,100).row.event_flags.set(1)
    DungeonMob02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    DungeonMob02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,3000,7000,3000,7000,100).row.event_flags.set(1)
    DungeonMob02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    //combat loop
    DungeonMob02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(16868,2,7)
    DungeonMob02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(37500,2,7)
//End of Spells
DungeonMob02.Level.set(6,6)
DungeonMob02.FactionTemplate.set(48)
DungeonMob02.DamageSchool.setNormal()
DungeonMob02.Stats.ArmorMod.set(5)
DungeonMob02.Stats.DamageMod.set(40)
DungeonMob02.Stats.ExperienceMod.set(10)
DungeonMob02.Stats.HealthMod.set(60)
DungeonMob02.Stats.ManaMod.set(10)
DungeonMob02.Rank.setElite()
DungeonMob02.HoverHeight.set(1)
DungeonMob02.MovementType.setRandomMovement()
DungeonMob02.Stats.ExperienceMod.set(4)
export let DungeonMob02Loot = DungeonMob02.NormalLoot
DungeonMob02.NormalLoot.makeUnique(false)
spawnMultipleNPCWithTimer(DungeonMob02.ID,10,0,[
    [-8798.952148,646.615112,-12.577168,0.800160],
    [-8768.009766,660.008728,-13.705646,1.990039],
    [-8812.773438,697.803040,-13.725410,3.560836],
    [-8867.517578,662.877075,-8.754834,3.753258],
    [-8920.761719,654.439148,-8.973216,3.254530]],120)
    
SQL.creature_template_movement.add(DungeonMob02.ID).Flight.set(1)
addLootToCreature(DungeonMob02Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[10,10,10],3)
addLootToCreature(DungeonMob02Loot,tierOneBaseResources,[5,5,5,5,5,5,5],3)
addLootToCreature(DungeonMob02Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[2,2,2],4)
addLootToCreature(DungeonMob02Loot,tierTwoBaseResources,[2,2,2,2,2,2,2],4)
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(DungeonMob02Loot,[
    ReignLeggings.ID,           TrackerBelt.ID,          Noose.ID,               SporeReed.ID,
    RenewalHammer.ID,           WildMagic.ID,            UnbrokenChain.ID,       PhosphoSword.ID,
    DestructiveMaul.ID,         Bladefist.ID,            Fathomstone.ID,         ArgentSentinel.ID,
    ObliterativeBoots.ID,       VigilanteRing.ID,        Naaru.ID,               LostAge.ID
],0.5,1)
addLootToCreatureSingleChance(DungeonMob02Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(DungeonMob02Loot,[
    OrbofPower.ID
],0.5,3)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Room 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let SummonedSkeleton = std.CreatureTemplates.create(MODNAME,'skeletonbones',3271)
SummonedSkeleton.Name.enGB.set('Animated Bones')
SummonedSkeleton.Level.set(5,5)
SummonedSkeleton.FactionTemplate.set(48)
SummonedSkeleton.DamageSchool.setNormal()
SummonedSkeleton.Stats.ArmorMod.set(10)
SummonedSkeleton.Stats.DamageMod.set(30)
SummonedSkeleton.Stats.ExperienceMod.set(4)
SummonedSkeleton.Stats.HealthMod.set(12)
SummonedSkeleton.Stats.ManaMod.set(10)
SummonedSkeleton.Models.clearAll()
SummonedSkeleton.Models.addIds(30363)
spawnMultipleNPCWithTimer(SummonedSkeleton.ID,2,0,[
    [-8852.720703,650.377197,-18.361275,4.900900],
    [-8852.268555,648.018433,-18.690559,3.927008],
    [-8854.642578,649.275208,-19.048063,3.467550],
    [-8855.084961,646.072998,-18.534111,3.534309],
    [-8857.874023,645.372620,-18.955378,2.136300],
    [-8857.786133,647.435974,-19.047812,1.189895],
    [-8860.289062,648.565979,-18.537807,1.731819],
    [-8875.995117,640.206970,-18.975773,4.347199],
    [-8877.486328,639.445618,-19.048018,4.170486],
    [-8875.992188,637.864136,-19.048018,4.166559],
    [-8877.998047,636.887451,-19.048018,2.851017],
    [-8879.333984,636.632019,-19.047190,1.818218],
    [-8878.758789,637.876831,-19.047190,0.946426],
    [-8882.127930,638.777283,-19.001978,3.110198],
    [-8898.390625,629.826538,-19.048256,4.335425],
    [-8897.975586,627.373535,-19.032854,4.237251],
    [-8899.788086,627.054993,-19.065437,3.923093],
    [-8899.572266,625.399109,-19.054993,2.674309],
    [-8901.452148,627.957336,-19.056793,1.853568],
    [-8903.952148,626.536804,-18.730326,2.285537],
    [-8904.664062,628.988586,-18.193815,2.890294],
    [-8900.323242,679.645752,-19.048077,1.818225],
    [-8898.370117,680.179382,-19.048077,1.672926],
    [-8899.762695,680.036621,-19.048077,1.672926],
    [-8899.938477,681.861938,-19.047918,0.651909],
    [-8898.558594,683.466553,-18.953476,5.717727],
    [-8895.698242,681.108337,-19.047762,5.607772],
    [-8893.462891,682.746277,-17.947693,0.345603],
    [-8878.061523,689.948364,-18.949837,1.606164],
    [-8875.910156,690.511108,-19.048334,1.582602],
    [-8878.877930,691.849304,-19.048334,1.178122],
    [-8876.916016,692.819885,-19.048035,0.498753],
    [-8876.484375,694.569580,-18.436691,6.149693],
    [-8872.885742,694.826599,-18.178885,5.438910],
    [-8872.309570,691.556091,-18.691048,5.399641],],1200)
    AgitatedBloodMite.NormalLoot.makeUnique(false)

export let LightningRing = std.Spells.create(MODNAME,'lightningring-spell',50840)
export let WoePillar = std.Spells.create(MODNAME,'woevolley-spell',50761)
WoePillar.Effects.get(0).BasePoints.set(1566)
WoePillar.Effects.get(0).DieSides.set(121)
WoePillar.Effects.get(0).Radius.set(20,0,20)
export let TetherLightning = std.Spells.create(MODNAME,'tetherlightning-spell',50895)

export let SentinelMob = std.CreatureTemplates.create(MODNAME,'sentinelmob',3271)
SentinelMob.Name.enGB.set('Harrowing Sentinel')
SentinelMob.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
SentinelMob.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
SentinelMob.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
SentinelMob.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
SentinelMob.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
SentinelMob.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
SentinelMob.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(LightningRing.ID,2,7)
SentinelMob.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(WoePillar.ID,2,7)
SentinelMob.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(TetherLightning.ID,2,7)
SentinelMob.Level.set(6,6)
SentinelMob.FactionTemplate.set(48)
SentinelMob.DamageSchool.setNormal()
SentinelMob.Scale.set(0.25)
SentinelMob.Stats.ArmorMod.set(5)
SentinelMob.Stats.DamageMod.set(30)
SentinelMob.Stats.ExperienceMod.set(15)
SentinelMob.Stats.HealthMod.set(60)
SentinelMob.Stats.ManaMod.set(10)
SentinelMob.Rank.setElite()
SentinelMob.Models.clearAll()
SentinelMob.Models.addIds(27897)
export let SentinelMobLoot = SentinelMob.NormalLoot
spawnMultipleNPCWithTimer(SentinelMob.ID,0,0,[
    [-8869.997070,648.229126,-17.079538,1.998873],
    [-8883.800781,681.033997,-17.079538,5.167956],
    [-8861.091797,688.948364,-17.079538,5.089416],
    [-8848.622070,660.045471,-17.079538,2.057785],
    [-8891.041016,640.974426,-17.079294,2.026369],
    [-8706.897461,606.845886,-18.139137,3.571591],
    [-8725.962891,555.761536,-18.144554,1.996855],
    [-8906.180664,668.699890,-17.078783,5.105127]],300)
    SentinelMobLoot.makeUnique(false)
addLootToCreature(SentinelMobLoot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[2,2,2],4)
addLootToCreature(SentinelMobLoot,tierThreeBaseResources,[2,2,2,2,2,2,2],4)
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(SentinelMobLoot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.25,1)
addLootToCreatureSingleChance(SentinelMobLoot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(SentinelMobLoot,[
    OrbofPower.ID
],5,3)



export let r2ConsumeSpell = std.Spells.create(MODNAME,'r2consumespell-spell',49381)
export let r2BossShadowVolley = std.Spells.create(MODNAME,'r2bossshadowvolley-spell',25586)
r2BossShadowVolley.Effects.get(0).BasePoints.set(2566)
r2BossShadowVolley.Effects.get(0).DieSides.set(321)
export let r2DrainLife = std.Spells.create(MODNAME,'r2drainlife-spell',49617)

export let DungeonBoss02 = std.CreatureTemplates.create(MODNAME,'dungeonboss02',3271)
DungeonBoss02.Name.enGB.set('Seren the Invincible')
DungeonBoss02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
DungeonBoss02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
DungeonBoss02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
DungeonBoss02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
DungeonBoss02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
DungeonBoss02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
DungeonBoss02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(r2DrainLife.ID,2,7)
DungeonBoss02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(r2BossShadowVolley.ID,2,7)
DungeonBoss02.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(r2ConsumeSpell.ID,2,7)
DungeonBoss02.Level.set(7,7)
DungeonBoss02.FactionTemplate.set(48)
DungeonBoss02.DamageSchool.setNormal()
DungeonBoss02.Stats.ArmorMod.set(5)
DungeonBoss02.Stats.DamageMod.set(75)
DungeonBoss02.Stats.ExperienceMod.set(30)
DungeonBoss02.Stats.HealthMod.set(100)
DungeonBoss02.Stats.ManaMod.set(25)
DungeonBoss02.Rank.setRareElite()
DungeonBoss02.Models.clearAll()
DungeonBoss02.Models.addIds(16632)
DungeonBoss02.Scale.set(1.75)
export let DungeonBoss02Loot = DungeonBoss02.NormalLoot
spawnMultipleNPCWithTimer(DungeonBoss02.ID,0,0,[
    [-8925.356,642.169,-17.079,0.3456]],3600)
    DungeonBoss02Loot.makeUnique(false)
addLootToCreature(DungeonBoss02Loot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[4,4,4],3)
addLootToCreature(DungeonBoss02Loot,tierThreeBaseResources,[2,2,2,2,2,2,2],3)

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(DungeonBoss02Loot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.5,1)
addLootToCreatureSingleChance(DungeonBoss02Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(DungeonBoss02Loot,[
    OrbofPower.ID
],100,3)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Dungeon Chest Loot Must Always Remain at Bottom
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let OpenWorldDungeonChest01 = makeResourceNode('Ancient Chest',9069,57,'openworlddungeonchest01-chest')
spawnMultiGobTimer(OpenWorldDungeonChest01.ID,[
    [-8814.077148,652.743408,-17.329342,0.416527],
    [-8781.975586,720.315796,-15.189892,3.530630],
    [-8826.964844,714.795288,-15.188274,5.144623],
    [-8923.068359,636.437134,-17.078632,0.416514],
    [-8928.217773,648.075134,-17.078632,0.416514],
    [-8735.500000,555.899597,-15.536025,0.458514]],1800)
OpenWorldDungeonChest01.Size.set(0.5)
addLootToGobChest(OpenWorldDungeonChest01,tierThreeBaseResources,[2,2,2,2,2,2,2])
/*Base Resources - Group 5*/  
addLootToGobChestSingleChanceMultiGroup(OpenWorldDungeonChest01,[
    tierThreeMailMaterial,            tierThreeLeatherMaterial,             tierThreeClothMaterial]
,10,1,3,5)
/*Epic Items - Group 0*/      
addLootToGobChestSingleChance(OpenWorldDungeonChest01,[
    DungeonItem01.ID,               DungeonItem02.ID,               DungeonItem03.ID,
    DungeonItem04.ID,               DungeonItem05.ID,               DungeonItem06.ID,
    DungeonItem07.ID,               DungeonItem08.ID,               DungeonItem09.ID,
    DungeonItem10.ID,               DungeonItem11.ID,               DungeonItem12.ID,
    DungeonItem13.ID,               DungeonItem14.ID,               DungeonItem15.ID,
    DungeonItem16.ID,               DungeonItem17.ID,               DungeonItem18.ID,
    DungeonItem19.ID,               DungeonItem20.ID,               VolatilePower.ID,
    DragonscaleBlade.ID,            MiseryMace.ID,                  HeartPit.ID,
    DungeonItem21.ID,               DungeonItem22.ID,               DungeonItem23.ID,
    DungeonItem24.ID,               DungeonItem25.ID,               DungeonItem26.ID,
    DungeonItem27.ID,               DungeonItem28.ID,               DungeonItem29.ID,
    DungeonItem30.ID,               DungeonItem31.ID,               DungeonItem32.ID,
    DungeonItem33.ID,               DungeonItem34.ID,               DungeonItem35.ID,
    DungeonItem36.ID               
],0.0125)
/*Rare Items - Group 0*/      
addLootToGobChestSingleChance(OpenWorldDungeonChest01,[
    ReignLeggings.ID,               TrackerBelt.ID,                 Noose.ID,
    SporeReed.ID,                   RenewalHammer.ID,               WildMagic.ID,
    UnbrokenChain.ID,               PhosphoSword.ID,                DestructiveMaul.ID,
    Bladefist.ID,                   Fathomstone.ID,                 ArgentSentinel.ID,
    ObliterativeBoots.ID,           VigilanteRing.ID,               Naaru.ID,
    LostAge.ID
],0.2)
/*Semi Rare Armor - Group 1*/
addLootToGobChestSingleChance(OpenWorldDungeonChest01,[
    LurkerCord.ID,                  LurkerGrasp.ID,                 LurkerBelt.ID,
    LurkerGirdle.ID,                RavagerCuff.ID,                 RavagerWrap.ID,
    Ravagerband.ID,                 Ravagerbracer.ID,               Gliderwrap.ID,
    Gliderboots.ID,                 Glidersabatons.ID,              Glidergreaves.ID,
    LostTreads.ID,                  Commendation.ID,                Contempt.ID,
    FocusingCrystal.ID,             SunwellVial.ID
],0.5,1)
/*Ultra Rares*/
addLootToGobChestSingleChance(OpenWorldDungeonChest01,[
    DarkSteel.ID,                   DarkLeather.ID,                 DarkCloth.ID,
    EyeofDestiny.ID
],0.05,3)
/*Money Bags*/
addLootToGobChest(OpenWorldDungeonChest01,[
    LargeSackofCoins.ID
],[15],8)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let RisenRavager = std.CreatureTemplates.create(MODNAME,'risenravager',3271)
RisenRavager.Name.enGB.set('Risen Ravager')
RisenRavager.Level.set(5,5)
RisenRavager.FactionTemplate.set(48)
RisenRavager.DamageSchool.setNormal()
RisenRavager.Stats.ArmorMod.set(1)
RisenRavager.Stats.DamageMod.set(25)
RisenRavager.Stats.ExperienceMod.set(10)
RisenRavager.Stats.HealthMod.set(10)
RisenRavager.Stats.ManaMod.set(10)
RisenRavager.Models.clearAll()
RisenRavager.Models.addIds(829)
RisenRavager.Scale.set(1)
export let RisenRavagerLoot = RisenRavager.NormalLoot
spawnMultipleNPCWithTimer(RisenRavager.ID,2,0,[
    [-8982.760742,631.077637,-9.805208,0.112170],
    [-8982.345703,633.235107,-9.862338,0.646241],
    [-8979.838867,634.948669,-10.102848,0.681584],
    [-8979.116211,634.873413,-10.142712,0.681584],
    [-8974.176758,632.492004,-10.298597,0.732634],
    [-8972.748047,632.982422,-10.197169,1.506252],
    [-8975.616211,636.565979,-10.672174,1.506252],
    [-8975.616211,636.565979,-10.672174,1.506252],
    [-8971.637695,640.607971,-11.290502,1.510179],
    [-8973.417969,641.894714,-11.601798,2.315212],
    [-8975.598633,641.073975,-10.859719,2.154206],
    [-8974.137695,644.688110,-11.532078,1.573011],
    [-8972.327148,646.521118,-11.622564,1.506252],
    [-8974.058594,649.921082,-11.305696,1.749725],
    [-8971.919922,651.350586,-10.927354,1.843973],
    [-8971.919922,651.350586,-10.927354,1.843973],
    [-8975.048828,654.345032,-10.775536,2.570467],
    [-8975.734375,658.064026,-11.048238,2.456584],
    [-8975.856445,658.163696,-11.098074,2.456584],
    [-8980.675781,657.617432,-11.180152,2.660788],
    [-8980.675781,657.617432,-11.180152,2.660788],
    [-8982.085938,662.600586,-11.854362,2.507635],
    [-8985.376953,661.941040,-11.089398,2.601883],
    [-8985.500977,664.093140,-11.206018,2.091374],
    [-8985.500977,664.093140,-11.206018,2.091374],
    [-8990.800781,665.913147,-10.699533,2.052104],
    [-8989.838867,668.977051,-10.289649,2.052104],
    [-8989.838867,668.977051,-10.289649,2.052104],
    [-8993.406250,670.803223,-10.015284,1.427712],
    [-8992.906250,672.894531,-9.632645,1.262778],
    [-8991.447266,673.929565,-9.371442,1.227435],
    [-8992.527344,676.442017,-9.441696,1.227435],
    [-8989.752930,677.755249,-9.208472,1.227435],
    [-8990.834961,680.534607,-9.807166,1.227435],
    [-8989.333008,681.355164,-9.716150,1.227435],
    [-8989.998047,683.483398,-10.124415,1.227435],
    [-8988.189453,684.565308,-9.780212,1.227435],
    [-8989.363281,688.669556,-10.153674,0.689437],
    [-8987.654297,688.610718,-10.100965,0.689437],
    [-8986.847656,691.833435,-10.008644,0.830809],
    [-8986.847656,691.833435,-10.008644,0.830809],
    [-8982.005859,695.368408,-11.513579,0.693364],
    [-8981.751953,698.121704,-11.050340,0.693364],
    [-8978.672852,698.380493,-12.089729,0.257468],
    [-8978.672852,698.380493,-12.089729,0.257468],
    [-8975.001953,701.231689,-12.799412,0.147513],
    [-8972.615234,701.798645,-13.131451,6.147955],
    [-8970.401367,703.469360,-13.095102,6.144029],
    [-8968.877930,700.436401,-13.257692,5.700280],
    [-8966.858398,700.824097,-13.646138,5.566763],
    [-8964.270508,699.863342,-13.821949,5.001279],
    [-8961.310547,698.276550,-13.660394,5.060184],
    [-8961.310547,698.276550,-13.660394,5.060184],
    [-8963.250977,693.646057,-12.749532,5.060184],
    [-8963.250977,693.646057,-12.749532,5.060184],
    [-8959.796875,690.943237,-13.179111,5.802384],
    [-8959.796875,690.943237,-13.179111,5.802384],
    [-8958.110352,685.798767,-12.751946,5.778822],
    [-8955.517578,685.768921,-12.769022,5.554986],
    [-8955.517578,685.768921,-12.769022,5.554986],
    [-8955.081055,682.290283,-12.304727,5.649233],
    [-8952.185547,682.726013,-12.757603,5.649233],
    [-8951.495117,678.901123,-12.312183,5.649233],
    [-8951.495117,678.901123,-12.312183,5.649233],
    [-8947.537109,677.047119,-13.697893,5.900559],
    [-8946.034180,675.526489,-14.249252,0.375283],
    [-8945.617188,675.394409,-14.385116,0.646245],
    [-8940.432617,674.229919,-15.909534,0.336013],
    [-8939.906250,675.441406,-16.199835,0.453823],
    [-8939.906250,675.441406,-16.199835,0.453823],
    [-8938.754883,679.507324,-16.147734,0.512727],
    [-8934.448242,678.722351,-16.871792,0.497019],
    [-8934.448242,678.722351,-16.871792,0.497019],
    [-8932.783203,683.616455,-17.108524,0.497019],
    [-8930.703125,682.916748,-17.464298,0.394918],
    [-8927.498047,681.061646,-17.215406,6.195084],
    [-8925.944336,682.393738,-17.405228,0.013999],
    [-8924.376953,684.509888,-17.782642,6.065493],
    [-8924.376953,684.509888,-17.782642,6.065493],
    [-8921.805664,688.135864,-17.571384,5.197631],
    [-8922.552734,685.775330,-17.854378,5.185851],
    [-8919.639648,680.051270,-17.487516,5.181924]],600)
RisenRavagerLoot.makeUnique(false)

export let BrittleBones = std.Spells.create(MODNAME,'brittlebones-spell',32441)
BrittleBones.Duration.set(5000,0,5000)
export let RoB = std.Spells.load(37091)
RoB.Effects.get(1).BasePoints.set(798)
RoB.Effects.get(1).DieSides.set(220)
export let RainofBones = std.Spells.create(MODNAME,'rainofbones-spell',37098)
export let BoneGrinder = std.Spells.create(MODNAME,'bonegrinder-spell',43951)

export let ScythemawDestroyer = std.CreatureTemplates.create(MODNAME,'scythemawdestroyer',3271)
ScythemawDestroyer.Name.enGB.set('Scythemaw Destroyer')
ScythemawDestroyer.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
ScythemawDestroyer.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
ScythemawDestroyer.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
ScythemawDestroyer.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
ScythemawDestroyer.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
ScythemawDestroyer.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
ScythemawDestroyer.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(BrittleBones.ID,2,7)
ScythemawDestroyer.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(RainofBones.ID,2,7)
ScythemawDestroyer.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(BoneGrinder.ID,2,7)
ScythemawDestroyer.Level.set(6,6)
ScythemawDestroyer.FactionTemplate.set(48)
ScythemawDestroyer.DamageSchool.setNormal()
ScythemawDestroyer.Scale.set(1)
ScythemawDestroyer.Stats.ArmorMod.set(25)
ScythemawDestroyer.Stats.DamageMod.set(40)
ScythemawDestroyer.Stats.ExperienceMod.set(25)
ScythemawDestroyer.Stats.HealthMod.set(65)
ScythemawDestroyer.Stats.ManaMod.set(10)
ScythemawDestroyer.Rank.setElite()
ScythemawDestroyer.Models.clearAll()
ScythemawDestroyer.Models.addIds(14706)
ScythemawDestroyer.Scale.set(1)
export let ScythemawDestroyerLoot = ScythemawDestroyer.NormalLoot
spawnMultipleNPCWithTimer(ScythemawDestroyer.ID,2,0,[
    [-8927.415039,683.349365,-17.649937,3.485466],
    [-8942.821289,673.623779,-15.470843,3.599349],
    [-8957.847656,686.295715,-12.792575,2.165997],
    [-8975.251953,700.493347,-12.604589,3.595422],
    [-8986.131836,692.557739,-10.118654,4.392600],
    [-8991.078125,674.938599,-9.299158,4.585022],
    [-8981.920898,660.721191,-11.593039,5.704208],
    [-8970.933594,649.180664,-10.987558,4.746025],
    [-8975.859375,632.992371,-10.309290,2.939614]],300)
ScythemawDestroyerLoot.makeUnique(false)
addLootToCreature(ScythemawDestroyerLoot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[2,2,2],4)
addLootToCreature(ScythemawDestroyerLoot,tierThreeBaseResources,[2,2,2,2,2,2,2],4)
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(ScythemawDestroyerLoot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.25,1)
addLootToCreatureSingleChance(ScythemawDestroyerLoot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(ScythemawDestroyerLoot,[
    OrbofPower.ID
],5,3)



export let PoisonedCloud = std.Spells.create(MODNAME,'poisonedcloud-spell',23861)
export let PoisonVolley = std.Spells.create(MODNAME,'poisonvolley-spell',29293)
export let BurningBlaze = std.Spells.create(MODNAME,'burningblaze-spell',58759)

export let ApothecaryAcolyte = std.CreatureTemplates.create(MODNAME,'apothecaryacolyte',3271)
ApothecaryAcolyte.Name.enGB.set('Apothecary Scholar')
ApothecaryAcolyte.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
ApothecaryAcolyte.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
ApothecaryAcolyte.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
ApothecaryAcolyte.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
ApothecaryAcolyte.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
ApothecaryAcolyte.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
ApothecaryAcolyte.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(PoisonedCloud.ID,2,7)
ApothecaryAcolyte.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(PoisonVolley.ID,2,7)
ApothecaryAcolyte.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(BurningBlaze.ID,2,7)
ApothecaryAcolyte.Level.set(6,6)
ApothecaryAcolyte.FactionTemplate.set(48)
ApothecaryAcolyte.DamageSchool.setNormal()
ApothecaryAcolyte.Scale.set(1)
ApothecaryAcolyte.Stats.ArmorMod.set(25)
ApothecaryAcolyte.Stats.DamageMod.set(40)
ApothecaryAcolyte.Stats.ExperienceMod.set(25)
ApothecaryAcolyte.Stats.HealthMod.set(75)
ApothecaryAcolyte.Stats.ManaMod.set(10)
ApothecaryAcolyte.Rank.setElite()
ApothecaryAcolyte.Models.clearAll()
ApothecaryAcolyte.Models.addIds(16237)
ApothecaryAcolyte.Scale.set(1)
export let ApothecaryAcolyteLoot = ApothecaryAcolyte.NormalLoot
spawnMultipleNPCWithTimer(ApothecaryAcolyte.ID,0,0,[
    [-9011.136719,642.505737,-9.465117,3.802162],
    [-9014.806641,639.109680,-9.465117,1.088611],
    [-9015.661133,642.680542,-9.465117,5.581089],
    [-8992.369141,629.776245,-9.465713,4.622905],
    [-8993.721680,623.943665,-9.465713,1.120024],
    [-9010.689453,623.455750,-9.465713,3.480147],
    [-9011.354492,617.423767,-9.465713,2.612281],
    [-9014.100586,614.164856,-9.465713,2.337392],
    [-9010.541016,603.463196,-9.465375,4.689657],
    [-9013.341797,603.468689,-9.465375,4.717144],
    [-9005.053711,603.508118,-9.465375,4.717144],
    [-9002.954102,603.518127,-9.465375,4.717144],
    [-9002.096680,597.292664,-9.465375,4.728924],
    [-9004.896484,597.246338,-9.465375,4.728924],
    [-9006.738281,586.701477,-9.465373,0.051869],
    [-9006.626953,584.380127,-9.465373,0.047942],
    [-8996.293945,592.329651,-9.465373,4.548286],
    [-8994.320312,592.256653,-9.465373,4.709288],
    [-8986.916992,595.436951,-9.465373,0.746950],
    [-8983.991211,598.328308,-9.465373,3.837493],
    [-8987.238281,611.537048,-9.465373,5.176596],
    [-8989.361328,608.193909,-9.465373,0.330687],
    [-8986.473633,615.066284,-9.465373,1.033618],
    [-8988.176758,618.145569,-9.465373,0.118629],
    [-8982.706055,572.665527,-4.194689,5.156953],
    [-8984.414062,569.370361,-4.194689,0.150037],
    [-8984.305664,566.456299,-4.194689,0.000812],
    [-8984.057617,564.135376,-4.194689,0.405292],
    [-8985.181641,547.204651,-4.194689,4.230189],
    [-8986.994141,544.744690,-4.194689,1.261384],
    [-9005.160156,545.242981,-4.194689,3.272004],
    [-9011.642578,543.798523,-4.194689,0.212878],
    [-9013.918945,555.916260,-4.193851,1.783674],
    [-9011.466797,558.437134,-4.193851,3.495843],
    [-9012.632812,561.216248,-4.193851,3.778586],
    [-9012.559570,565.994080,-4.193851,2.549438],
    [-9012.559570,565.994080,-4.193851,2.549438],
    [-9011.467773,568.384399,-4.193851,3.287712],
    [-9014.243164,572.374329,-4.193851,4.281242],
    [-8999.005859,570.001953,-4.193798,1.226042],
    [-8995.913086,569.424438,-4.193798,1.587325],
    [-9000.337891,529.224060,-3.954185,2.447341],
    [-9002.001953,531.850220,-3.899040,5.663543],
    [-8991.238281,522.712524,-3.908976,1.233895],
    [-8994.373047,526.912964,-3.937281,0.405300]],300)
    ApothecaryAcolyteLoot.makeUnique(false)
addLootToCreature(ApothecaryAcolyteLoot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[2,2,2],4)
addLootToCreature(ApothecaryAcolyteLoot,tierThreeBaseResources,[2,2,2,2,2,2,2],4)
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(ApothecaryAcolyteLoot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.25,1)
addLootToCreatureSingleChance(ApothecaryAcolyteLoot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(ApothecaryAcolyteLoot,[
    OrbofPower.ID
],5,3)

export let PowerBurn = std.Spells.create(MODNAME,'powerburn-spell',62129)
PowerBurn.Effects.get(0).BasePoints.set(2129)
PowerBurn.Effects.get(1).BasePoints.set(14)
PowerBurn.Effects.get(2).BasePoints.set(469)
export let SoulScream = std.Spells.create(MODNAME,'soulscream-spell',41545)
export let SoulStrike = std.Spells.create(MODNAME,'soulstrike-spell',32315)

export let DungeonBoss03 = std.CreatureTemplates.create(MODNAME,'dungeonboss03',3271)
DungeonBoss03.Name.enGB.set('The Professor')
DungeonBoss03.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
DungeonBoss03.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
DungeonBoss03.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
DungeonBoss03.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
DungeonBoss03.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
DungeonBoss03.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
DungeonBoss03.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(SoulScream.ID,2,7)
DungeonBoss03.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(PowerBurn.ID,2,7)
DungeonBoss03.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(SoulStrike.ID,2,7)
DungeonBoss03.Level.set(7,7)
DungeonBoss03.FactionTemplate.set(48)
DungeonBoss03.DamageSchool.setNormal()
DungeonBoss03.Stats.ArmorMod.set(5)
DungeonBoss03.Stats.DamageMod.set(110)
DungeonBoss03.Stats.ExperienceMod.set(30)
DungeonBoss03.Stats.HealthMod.set(150)
DungeonBoss03.Stats.ManaMod.set(25)
DungeonBoss03.Rank.setRareElite()
DungeonBoss03.Models.clearAll()
DungeonBoss03.Models.addIds(30881)
DungeonBoss03.Scale.set(0.5)
export let DungeonBoss03Loot = DungeonBoss03.NormalLoot
spawnMultipleNPCWithTimer(DungeonBoss03.ID,0,0,[
    [-8998.505859,577.777466,-3.098353,4.728919]],3600)
    DungeonBoss02Loot.makeUnique(false)
addLootToCreature(DungeonBoss03Loot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[4,4,4],3)
addLootToCreature(DungeonBoss03Loot,tierThreeBaseResources,[2,2,2,2,2,2,2],3)

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(DungeonBoss03Loot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.5,1)
addLootToCreatureSingleChance(DungeonBoss03Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(DungeonBoss03Loot,[
    OrbofPower.ID
],100,3)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                  The Council

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let CouncilBoss01 = std.CreatureTemplates.create(MODNAME,'councilboss01',299)
CouncilBoss01.Name.enGB.set('Lieutenant Commander Springraven')
CouncilBoss01.Subname.enGB.set('Coven of the Damned')
CouncilBoss01.Models.clearAll()
CouncilBoss01.Models.addIds(3223)
CouncilBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
CouncilBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
CouncilBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
CouncilBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
CouncilBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
CouncilBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
CouncilBoss01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(37859,2,7)
CouncilBoss01.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(37788,2,7)
CouncilBoss01.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(37640,2,7)//may need tuned
CouncilBoss01.Level.set(7,7)
CouncilBoss01.FactionTemplate.set(48)
CouncilBoss01.DamageSchool.setNormal()
CouncilBoss01.Stats.ArmorMod.set(5)
CouncilBoss01.Stats.DamageMod.set(110)
CouncilBoss01.Stats.ExperienceMod.set(30)
CouncilBoss01.Stats.HealthMod.set(150)
CouncilBoss01.Stats.ManaMod.set(25)
CouncilBoss01.Rank.setRareElite()
SQL.creature_equip_template.add(CouncilBoss01.ID,1).ItemID1.set(7721)
SQL.creature_equip_template.add(CouncilBoss01.ID,1).ItemID2.set(7726)
export let CouncilBoss01Loot = CouncilBoss01.NormalLoot
spawnMultipleNPCWithTimer(CouncilBoss01.ID,0,0,[
    [-9063.556641,505.916321,-4.038810,0.027225]],3600)
    CouncilBoss01Loot.makeUnique(false)
addLootToCreature(CouncilBoss01Loot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[4,4,4],3)
addLootToCreature(CouncilBoss01Loot,tierThreeBaseResources,[2,2,2,2,2,2,2],3)

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(CouncilBoss01Loot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.5,1)
addLootToCreatureSingleChance(CouncilBoss01Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(CouncilBoss01Loot,[
    OrbofPower.ID
],100,3)

export let CouncilBoss02 = std.CreatureTemplates.create(MODNAME,'councilboss02',299)
CouncilBoss02.Name.enGB.set('Widow Fae')
CouncilBoss02.Subname.enGB.set('Coven of the Damned')
CouncilBoss02.Models.clearAll()
CouncilBoss02.Models.addIds(17121)
CouncilBoss02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
CouncilBoss02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
CouncilBoss02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
CouncilBoss02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
CouncilBoss02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
CouncilBoss02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
CouncilBoss02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(37632,2,7)
CouncilBoss02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(37621,2,7)
CouncilBoss02.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(37540,2,7)
CouncilBoss02.Level.set(7,7)
CouncilBoss02.FactionTemplate.set(48)
CouncilBoss02.DamageSchool.setNormal()
CouncilBoss02.Stats.ArmorMod.set(5)
CouncilBoss02.Stats.DamageMod.set(110)
CouncilBoss02.Stats.ExperienceMod.set(30)
CouncilBoss02.Stats.HealthMod.set(150)
CouncilBoss02.Stats.ManaMod.set(25)
CouncilBoss02.Rank.setRareElite()
SQL.creature_equip_template.add(CouncilBoss02.ID,1).ItemID1.set(19355)
export let CouncilBoss02Loot = CouncilBoss02.NormalLoot
spawnMultipleNPCWithTimer(CouncilBoss02.ID,0,0,[
    [-9063.827148,514.786133,-4.040724,6.259360]],3600)
    CouncilBoss02Loot.makeUnique(false)
addLootToCreature(CouncilBoss02Loot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[4,4,4],3)
addLootToCreature(CouncilBoss02Loot,tierThreeBaseResources,[2,2,2,2,2,2,2],3)

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(CouncilBoss02Loot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.5,1)
addLootToCreatureSingleChance(CouncilBoss02Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(CouncilBoss02Loot,[
    OrbofPower.ID
],100,3)
//Boss Creature Spawns
export let CouncilBoss03 = std.CreatureTemplates.create(MODNAME,'councilboss03',299)
CouncilBoss03.Name.enGB.set('Maxim Wintergrave')
CouncilBoss03.Subname.enGB.set('Coven of the Damned')
CouncilBoss03.Models.clearAll()
CouncilBoss03.Models.addIds(2042)
CouncilBoss03.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
CouncilBoss03.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
CouncilBoss03.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
CouncilBoss03.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
CouncilBoss03.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
CouncilBoss03.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
CouncilBoss03.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(37396,2,7)
CouncilBoss03.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(22572,2,7)
CouncilBoss03.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(22574,2,7)
CouncilBoss03.Level.set(7,7)
CouncilBoss03.FactionTemplate.set(48)
CouncilBoss03.DamageSchool.setNormal()
CouncilBoss03.Stats.ArmorMod.set(5)
CouncilBoss03.Stats.DamageMod.set(110)
CouncilBoss03.Stats.ExperienceMod.set(30)
CouncilBoss03.Stats.HealthMod.set(150)
CouncilBoss03.Stats.ManaMod.set(25)
CouncilBoss03.Rank.setRareElite()
SQL.creature_equip_template.add(CouncilBoss03.ID,1).ItemID1.set(6174)
export let CouncilBoss03Loot = CouncilBoss03.NormalLoot
spawnMultipleNPCWithTimer(CouncilBoss03.ID,0,0,[
    [-9063.713867,523.429810,-3.872571,6.282922]],3600)
    CouncilBoss03Loot.makeUnique(false)
addLootToCreature(CouncilBoss03Loot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[4,4,4],3)
addLootToCreature(CouncilBoss03Loot,tierThreeBaseResources,[2,2,2,2,2,2,2],3)

/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(CouncilBoss03Loot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.5,1)
addLootToCreatureSingleChance(CouncilBoss03Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(CouncilBoss03Loot,[
    OrbofPower.ID
],100,3)