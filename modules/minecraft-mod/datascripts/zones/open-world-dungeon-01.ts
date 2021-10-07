import { std } from "tswow-stdlib"
import { addLootToCreature, addLootToCreatureSingleChance } from "../functions/npc-functions"
import { spawnMultipleNPCWithTimer } from "../functions/spawning-functions"
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial, tierTwoBaseResources } from "../items/armor/tier2-set"
import { tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial, tierThreeBaseResources } from "../items/armor/tier3-set"
import { undiscoveredReds, undiscoveredGreens, undiscoveredPurples, undiscoveredYellows, undiscoveredBlues, undiscoveredOranges } from "../items/gems/tier1-gem"
import { MODNAME } from "../modname"
import { OrbofPower } from "./(Zone-5)Mall/ClassQuests/ARarePowerOrb"

export let Shadowbolt = std.Spells.create(MODNAME,'shadowbolt-spell',25307)
export let ShadowVolley = std.Spells.create(MODNAME,'shadowvolley-spell',25586)
ShadowVolley.Effects.get(0).BasePoints.set(566)
ShadowVolley.Effects.get(0).DieSides.set(121)
ShadowVolley.Effects.get(0).Radius.set(20,0,20)
export let ShadowPain = std.Spells.create(MODNAME,'pain-spell',25367)

//Items and Loot
export let ReignLeggings = std.Items.create(MODNAME,'reignleggings',24359)
ReignLeggings.Quality.setBlue()
ReignLeggings.RequiredLevel.set(4)

export let TrackerBelt = std.Items.create(MODNAME,'trackerbelt',24360)
TrackerBelt.Quality.setBlue()
TrackerBelt.RequiredLevel.set(4)

export let Noose = std.Items.create(MODNAME,'noose',27546)
Noose.Quality.setBlue()
Noose.RequiredLevel.set(4)

export let SporeReed = std.Items.create(MODNAME,'reed',24380)
SporeReed.Quality.setBlue()
SporeReed.RequiredLevel.set(4)

export let RenewalHammer = std.Items.create(MODNAME,'renewalhammer',24378)
RenewalHammer.Quality.setBlue()
RenewalHammer.RequiredLevel.set(4)

export let WildMagic = std.Items.create(MODNAME,'wildmagic',32078)
WildMagic.RequiredLevel.set(6)
WildMagic.Class.setClothEquip()

export let UnbrokenChain = std.Items.create(MODNAME,'unbrokenchain',29349)
UnbrokenChain.RequiredLevel.set(6)

export let PhosphoSword = std.Items.create(MODNAME,'phosphoswrd',27673)
PhosphoSword.RequiredLevel.set(6)
PhosphoSword.Quality.setPurple()

export let DestructiveMaul = std.Items.create(MODNAME,'destructivemaul',27524)
DestructiveMaul.RequiredLevel.set(6)
DestructiveMaul.Quality.setPurple()

export let Bladefist = std.Items.create(MODNAME,'bladefist',29348)
Bladefist.RequiredLevel.set(6)

export let Fathomstone = std.Items.create(MODNAME,'fathomstone',30049)
Fathomstone.RequiredLevel.set(6)

export let ArgentSentinel = std.Items.create(MODNAME,'argentsentinel',30084)
ArgentSentinel.RequiredLevel.set(6)

export let ObliterativeBoots = std.Items.create(MODNAME,'obliterativeboots',30081)
ObliterativeBoots.RequiredLevel.set(6)

export let VigilanteRing = std.Items.create(MODNAME,'vigilante',33058)
VigilanteRing.RequiredLevel.set(6)

export let Naaru = std.Items.create(MODNAME,'naaru',33058)
Naaru.RequiredLevel.set(6)

export let LostAge = std.Items.create(MODNAME,'lostage',30008)
LostAge.RequiredLevel.set(6)

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
DungeonMob01.Level.set(10,10)
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
DungeonBoss01.Level.set(15,15)
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
AgitatedBloodMite.Level.set(7,7)
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Room 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let DungeonItem01 = std.Items.create(MODNAME,'dungeonitem01',32327)
DungeonItem01.RequiredLevel.set(6)
DungeonItem01.Socket.clearAll()
DungeonItem01.Quality.setBlue()
export let DungeonItem02 = std.Items.create(MODNAME,'dungeonitem02',32280)
DungeonItem02.RequiredLevel.set(6)
DungeonItem02.Socket.clearAll()
DungeonItem02.Quality.setBlue()
export let DungeonItem03 = std.Items.create(MODNAME,'dungeonitem03',32512)
DungeonItem03.RequiredLevel.set(6)
DungeonItem03.Socket.clearAll()
DungeonItem03.Quality.setBlue()
export let DungeonItem04 = std.Items.create(MODNAME,'dungeonitem04',32338)
DungeonItem04.RequiredLevel.set(6)
DungeonItem04.Socket.clearAll()
DungeonItem04.Quality.setBlue()
export let DungeonItem05 = std.Items.create(MODNAME,'dungeonitem05',32341)
DungeonItem05.RequiredLevel.set(6)
DungeonItem05.Socket.clearAll()
DungeonItem05.Quality.setBlue()
export let DungeonItem06 = std.Items.create(MODNAME,'dungeonitem06',32354)
DungeonItem06.RequiredLevel.set(6)
DungeonItem06.Socket.clearAll()
DungeonItem06.Quality.setBlue()
export let DungeonItem07 = std.Items.create(MODNAME,'dungeonitem07',32517)
DungeonItem07.RequiredLevel.set(6)
DungeonItem07.Socket.clearAll()
DungeonItem07.Quality.setBlue()
export let DungeonItem08 = std.Items.create(MODNAME,'dungeonitem08',32362)
DungeonItem08.RequiredLevel.set(6)
DungeonItem08.Socket.clearAll()
DungeonItem08.Quality.setBlue()
export let DungeonItem09 = std.Items.create(MODNAME,'dungeonitem09',32331)
DungeonItem09.RequiredLevel.set(6)
DungeonItem09.Socket.clearAll()
DungeonItem09.Quality.setBlue()
export let DungeonItem10 = std.Items.create(MODNAME,'dungeonitem10',32235)
DungeonItem10.RequiredLevel.set(6)
DungeonItem10.Socket.clearAll()
DungeonItem10.Quality.setBlue()
export let DungeonItem11 = std.Items.create(MODNAME,'dungeonitem11',32471)
DungeonItem11.RequiredLevel.set(6)
DungeonItem11.Socket.clearAll()
DungeonItem11.Quality.setBlue()
export let DungeonItem12 = std.Items.create(MODNAME,'dungeonitem12',32854)
DungeonItem12.RequiredLevel.set(6)
DungeonItem12.Socket.clearAll()
DungeonItem12.Quality.setBlue()
export let DungeonItem13 = std.Items.create(MODNAME,'dungeonitem13',31326)
DungeonItem13.RequiredLevel.set(6)
DungeonItem13.Socket.clearAll()
DungeonItem13.Quality.setBlue()
export let DungeonItem14 = std.Items.create(MODNAME,'dungeonitem14',31319)
DungeonItem14.RequiredLevel.set(6)
DungeonItem14.Socket.clearAll()
DungeonItem14.Quality.setBlue()
export let DungeonItem15 = std.Items.create(MODNAME,'dungeonitem15',31333)
DungeonItem15.RequiredLevel.set(6)
DungeonItem15.Socket.clearAll()
DungeonItem15.Quality.setBlue()
export let DungeonItem16 = std.Items.create(MODNAME,'dungeonitem16',31331)
DungeonItem16.RequiredLevel.set(6)
DungeonItem16.Socket.clearAll()
DungeonItem16.Quality.setBlue()
export let DungeonItem17 = std.Items.create(MODNAME,'dungeonitem17',31342)
DungeonItem17.RequiredLevel.set(6)
DungeonItem17.Socket.clearAll()
DungeonItem17.Quality.setBlue()
export let DungeonItem18 = std.Items.create(MODNAME,'dungeonitem18',34622)
DungeonItem18.RequiredLevel.set(6)
DungeonItem18.Socket.clearAll()
DungeonItem18.Quality.setBlue()
export let DungeonItem19 = std.Items.create(MODNAME,'dungeonitem19',37835)
DungeonItem19.RequiredLevel.set(6)
DungeonItem19.Socket.clearAll()
DungeonItem19.Quality.setBlue()
export let DungeonItem20 = std.Items.create(MODNAME,'dungeonitem20',44312)
DungeonItem20.RequiredLevel.set(6)
DungeonItem20.Socket.clearAll()
DungeonItem20.Quality.setBlue()




export let SummonedSkeleton = std.CreatureTemplates.create(MODNAME,'skeletonbones',3271)
SummonedSkeleton.Name.enGB.set('Animated Bones')
SummonedSkeleton.Level.set(9,9)
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
SentinelMob.Level.set(13,13)
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
    [-8906.180664,668.699890,-17.078783,5.105127]],300)
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
DungeonBoss02.Level.set(17,17)
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