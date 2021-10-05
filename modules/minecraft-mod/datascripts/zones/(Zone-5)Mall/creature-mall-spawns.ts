import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { DBC_ItemExtendedCost } from "wotlkdata/dbc/types/ItemExtendedCost"
import { OrganicMatter } from "../(Zone-0)Walk-of-Heroes/starting-zone-alchemyrecipes"
import { creature2, creature3 } from "../(Zone-1)Bramblewood/zone-1-creatures"
import { setFaction, setName, setLevel, removeQuests } from "../../functions/npc-functions"
import { addWaypoint, addWaypoints, spawnMultipleNPCs, spawnMultipleNPCWithTimer, spawnNPC } from "../../functions/spawning-functions"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set"
import { MODNAME } from "../../modname"
import { OrbofPower } from "./ClassQuests/ARarePowerOrb"

let broadcastindex = 87000

export let BattleGuard = std.CreatureTemplates.create(MODNAME,'battleguard-creature',14284)
BattleGuard.Name.enGB.set('Battleguard')
BattleGuard.FactionTemplate.set(35)
spawnMultipleNPCWithTimer(BattleGuard.ID,0,0,[
    [-8246.129883,-201.385513,0.943805,3.087709],
    [-8337.062500,-55.165085,1.151860,0.001092],
    [-8337.207031,-63.350540,1.198126,6.237155],
    [-8372.717773,-63.412140,0.885744,3.072000],
    [-8372.501953,-55.224995,0.885805,3.115197],
    [-8409.826172,-122.740196,0.149892,5.373209],
    [-8416.585938,-128.293549,0.001845,5.428185],
    [-8431.292969,-232.009521,12.774688,2.208053],
    [-8389.239258,-200.071335,0.106545,2.266959],
    [-8390.032227,-168.663055,-0.087212,4.685980],
    [-8152.582520,23.930702,0.072902,2.380831],
    [-8292.002930,-248.637924,0.547497,1.636966],
    [-8316.910156,-243.636734,2.057232,6.278668],
    [-8266.698242,-243.843430,2.058073,3.156709],
    [-8265.654297,-278.217896,2.058073,1.845100],
    [-8291.262695,-252.233780,2.058073,4.676461],
    [-8314.996094,-278.051208,2.058073,1.534865],
    [-8291.503906,-255.427582,10.878884,4.703952],
    [-8313.773438,-270.558502,10.878884,6.156942],
    [-8283.709961,-254.647491,15.980843,2.198535],
    [-8300.814453,-255.210846,15.980843,0.714132],
    [-8301.608398,-272.228851,17.274672,0.784812],
    [-8282.695312,-272.893677,17.274672,2.328119],
    [-8160.528320,31.296593,0.077148,5.553841]],10)

export let ClothArmorVendor01 = std.CreatureTemplates.create(MODNAME,'clothvendor01-creature',3562)
ClothArmorVendor01.Name.enGB.set('Theresa Thatcher')
ClothArmorVendor01.FactionTemplate.set(35)
ClothArmorVendor01.Models.clearAll()
ClothArmorVendor01.Models.addIds(17664)
spawnMultipleNPCWithTimer(ClothArmorVendor01.ID,0,0,[
    [-8314.943359,-13.668065,0.732581,5.956327]],10)
export let ClothArmorVendor02 = std.CreatureTemplates.create(MODNAME,'clothvendor02-creature',3562)
ClothArmorVendor02.Name.enGB.set('Artisan Geltrude')
ClothArmorVendor02.FactionTemplate.set(35)
ClothArmorVendor02.Models.clearAll()
ClothArmorVendor02.Models.addIds(17665)
spawnMultipleNPCWithTimer(ClothArmorVendor02.ID,0,0,[
    [-8311.923828,-15.273244,0.732956,2.488793]],10)
ClothArmorVendor02.AIName.SmartAI()
SQL.smart_scripts.add(ClothArmorVendor02.ID,0,2,0).event_type.set(61).event_chance.set(100).action_type.set(1).action_param1.set(1).target_type.set(1).comment.set('Artisan Cloth NPC OUT OF COMBAT Text Scripts.')
SQL.creature_text.add(ClothArmorVendor02.ID,1,0).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').Flags.set(1)
SQL.creature_text.add(ClothArmorVendor02.ID,1,1).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').Flags.set(1)

export let LeatherArmorVendor01 = std.CreatureTemplates.create(MODNAME,'leathervendor01-creature',3562)
LeatherArmorVendor01.Name.enGB.set('Susan Glenfiddich')
LeatherArmorVendor01.FactionTemplate.set(35)
LeatherArmorVendor01.Models.clearAll()
LeatherArmorVendor01.Models.addIds(17823)
spawnMultipleNPCWithTimer(LeatherArmorVendor01.ID,0,0,[
    [-8333.688477,-195.988770,1.015851,5.712859]],10)
export let LeatherArmorVendor02 = std.CreatureTemplates.create(MODNAME,'leathervendor02-creature',3562)
LeatherArmorVendor02.Name.enGB.set('Artisan Signet')
LeatherArmorVendor02.FactionTemplate.set(35)
LeatherArmorVendor02.Models.clearAll()
LeatherArmorVendor02.Models.addIds(17824)
spawnMultipleNPCWithTimer(LeatherArmorVendor02.ID,0,0,[
    [-8331.398438,-197.823914,1.013544,2.386700]],10)
LeatherArmorVendor02.AIName.SmartAI()
SQL.smart_scripts.add(LeatherArmorVendor02.ID,0,2,0).event_type.set(61).event_chance.set(100).action_type.set(1).action_param1.set(1).target_type.set(1).comment.set('Artisan Cloth NPC OUT OF COMBAT Text Scripts.')
SQL.creature_text.add(LeatherArmorVendor02.ID,1,0).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').Flags.set(1)
SQL.creature_text.add(LeatherArmorVendor02.ID,1,1).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').Flags.set(1)
    

export let PlateArmorVendor01 = std.CreatureTemplates.create(MODNAME,'platevendor01-creature',3562)
PlateArmorVendor01.Name.enGB.set('Todd Macallan')
PlateArmorVendor01.FactionTemplate.set(35)
PlateArmorVendor01.Models.clearAll()
PlateArmorVendor01.Models.addIds(17661)
spawnMultipleNPCWithTimer(PlateArmorVendor01.ID,0,0,[
    [-8439.629883,-249.348618,14.019466,1.510978]],10)
export let PlateArmorVendor02 = std.CreatureTemplates.create(MODNAME,'platevendor02-creature',3562)
PlateArmorVendor02.Name.enGB.set('Artisan Empress')
PlateArmorVendor02.FactionTemplate.set(35)
PlateArmorVendor02.Models.clearAll()
PlateArmorVendor02.Models.addIds(17662)
spawnMultipleNPCWithTimer(PlateArmorVendor02.ID,0,0,[
    [-8439.367188,-246.661530,14.019466,4.632934]],10)
PlateArmorVendor02.AIName.SmartAI()
SQL.smart_scripts.add(PlateArmorVendor02.ID,0,2,0).event_type.set(61).event_chance.set(100).action_type.set(1).action_param1.set(1).target_type.set(1).comment.set('Artisan Cloth NPC OUT OF COMBAT Text Scripts.')
SQL.creature_text.add(PlateArmorVendor02.ID,1,0).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').Flags.set(1)
SQL.creature_text.add(PlateArmorVendor02.ID,1,1).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').Flags.set(1)
     

export let MailArmorVendor01 = std.CreatureTemplates.create(MODNAME,'mailvendor01-creature',3562)
MailArmorVendor01.Name.enGB.set('Timmy Shellsdrop')
MailArmorVendor01.FactionTemplate.set(35)
MailArmorVendor01.Models.clearAll()
MailArmorVendor01.Models.addIds(17623)
spawnMultipleNPCWithTimer(MailArmorVendor01.ID,0,0,[
    [-8407.692383,-220.831329,1.083180,2.539855]],10)
export let MailArmorVendor02 = std.CreatureTemplates.create(MODNAME,'mailvendor02-creature',3562)
MailArmorVendor02.Name.enGB.set('Artisan Links')
MailArmorVendor02.Models.clearAll()
MailArmorVendor02.Models.addIds(17733)
MailArmorVendor02.FactionTemplate.set(35)
spawnMultipleNPCWithTimer(MailArmorVendor02.ID,0,0,[
    [-8410.368164,-219.129791,1.083180,5.983823]],10)
MailArmorVendor02.AIName.SmartAI()   
SQL.smart_scripts.add(MailArmorVendor02.ID,0,2,0).event_type.set(61).event_chance.set(100).action_type.set(1).action_param1.set(1).target_type.set(1).comment.set('Artisan Cloth NPC OUT OF COMBAT Text Scripts.')
SQL.creature_text.add(MailArmorVendor02.ID,1,0).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I understand your concern, but I don\'t think they will notice. Just continue working and this will all be over shortly.').Flags.set(1)
SQL.creature_text.add(MailArmorVendor02.ID,1,1).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').BroadcastTextId.set(broadcastindex).Probability.set(100).Type.set(12)
SQL.broadcast_text.add(broadcastindex++).Text.set('I have told you plenty of times, we are here to simply sell these items for a short period of time, now be quiet, before someone hears you.').Flags.set(1)
     
export let OrbOfPowerVendor = std.CreatureTemplates.create(MODNAME,'powerorbvendor-creature',3562)
OrbOfPowerVendor.Name.enGB.set('Zerok the Orb Collector')
OrbOfPowerVendor.Models.clearAll()
OrbOfPowerVendor.Models.addIds(21891)
OrbOfPowerVendor.FactionTemplate.set(35)
spawnMultipleNPCWithTimer(OrbOfPowerVendor.ID,0,0,[
    [-8302.053711,-267.736298,17.274397,6.243299]],10)
DBC_ItemExtendedCost.add(5000).ItemID.set([OrbofPower.ID]).ItemCount.set([10])
OrbOfPowerVendor.addVendorItem(34170,0,0,5000)

export let OrganicMatterVendor = std.CreatureTemplates.create(MODNAME,'organicmob-creature',3562)
OrganicMatterVendor.Name.enGB.set('Organic Tim')
OrganicMatterVendor.Models.clearAll()
OrganicMatterVendor.Models.addIds(21891)
OrganicMatterVendor.FactionTemplate.set(35)
spawnMultipleNPCWithTimer(OrganicMatterVendor.ID,0,0,[
    [-8166.573,-2.096447,0.082,2.345]],10)
DBC_ItemExtendedCost.add(5001).ItemID.set([OrganicMatter.ID]).ItemCount.set([1])
OrganicMatterVendor.addVendorItem(tierOneClothMaterial,0,0,5001)
OrganicMatterVendor.addVendorItem(tierOneMailMaterial,0,0,5001)
OrganicMatterVendor.addVendorItem(tierOneLeatherMaterial,0,0,5001)







export let fish = std.CreatureTemplates.create(MODNAME,'fish',905)
fish.Level.set(3,3)
fish.FactionTemplate.set(32)

spawnNPC(6367,0,0,[-8265.167,-116.997,0.901,3.106])//crazy cat lady
    setFaction(6367,35)
spawnMultipleNPCs(2442,5,0,[[-8263.618,-130.911,0.292,3.539],[-8266.467,-137.773,0.342,2.008]])//crazy cat lady cows
spawnMultipleNPCs(6368,10,0,[[-8277.286,-116.715,0.340,1.084],[-8276.010,-132.329,0.779,1.050],[-8264.912,-135.450,0.312,0.733],[-8251.872,-124.874,2.546,1.889],[-8258.828,-108.123,0.274,2.270],[-8276.425,-107.866,1.566,5.680]])//crazy cat lady cats
spawnNPC(23754,0,0,[-8373.211,-166.998,0.017,0.698])//murloc
    setName(23754,'Remmy \\"The Murky Murloc\\" Jones')
spawnNPC(3561,0,0,[-8297.441,-261.479,-5.098,3.122])// Poison Supplies
    setFaction(3561,35)
    setLevel(3561,20)
//start zone vendors
spawnNPC(1213,0,0,[-8702.677,-64.117,31.134,1.227])
    setFaction(1213,35)
spawnNPC(5060,0,0,[-8411.075,-228.606,1.077,0.90]) //banker

spawnNPC(190,0,0,[-8692.114,-63.498,31.134,2.118])
    setFaction(190,35)
spawnNPC(152,0,0,[-8695.802,-63.248,31.134,1.568])
    setFaction(152,35)
spawnNPC(78,0,0,[-8699.836,-63.277,31.134,1.627])
    setFaction(78,35)
//end start zone vendors
//trainers
spawnNPC(17252,0,0,[-8501.809,-198.425,-6.026,4.009])//Warlock
    setFaction(17252,35)
    setLevel(17252,20)
spawnNPC(9980,0,0,[-8448.728,-197.267,0.722,0.0435]) //Stable Master
    setFaction(9980,35)
    setLevel(9980,20)
spawnNPC(2878,0,0,[-8328.205,-33.192,0.540,3.521])//Pet Trainer
    setFaction(2878,35)
    setLevel(2878,20)
spawnNPC(1231,0,0,[-8333.356,-39.987,0.547,0.330]) //Hunter
    setFaction(1231,35)
    setLevel(1231,20)
spawnNPC(3599,0,0,[-8284.079,-261.396,-5.097,3.968])//Rogue
    setFaction(3599,35)
    setLevel(3599,20)
spawnNPC(23128,0,0,[-8402.127,-153.164,0.805,4.701]) //Paladin
    setFaction(23128,35)
    setLevel(23128,20)
spawnNPC(376,0,0,[-8209.984,-204.098,3.408,3.175]) //Priest
    setFaction(376,35)
    setLevel(376,20)
spawnNPC(3036,0,0,[-8278.701,83.673,0.122,5.192]) //Druid
    setFaction(3036,35)
    setLevel(3036,20)
spawnNPC(1228,0,0,[-8298.356,26.519,12.764,5.507]) //Mage
    setFaction(1228,35)
    setLevel(1228,20)
spawnNPC(4565,0,0,[-8499.998,-195.186,-6.026,4.293]) //Warlock
    setFaction(4565,35)
    setLevel(4565,20)
spawnNPC(3353,0,0,[-8431.496,-285.787,12.884,1.567]) //Warrior
    setFaction(3353,35)
    setLevel(3353,20)
spawnNPC(20407,0,0,[-8366.640,-265.466,10.033,1.447]) //Shaman
    setFaction(20407,35)
    setLevel(20407,20)
//end of trainers
spawnNPC(6735,0,0,[-8484.953,-201.464,1.141,0.114])//innkeeper
    setFaction(6735,35)
    removeQuests(6735)
spawnMultipleNPCs(32545,0,0,[[-8448.821,-290.646,12.556,1.241673],[-8454.936,-288.826,12.604,1.247980],[-8460.871,-286.662,12.489,1.232272],[-8468.846,-284.679,11.540,1.614707],[-8467.742,-285.981,11.810,1.599000],[-8469.701,-286.037,11.320,1.599000]])//training dummy
    setLevel(32545,1)
spawnMultipleNPCs(385,10,0,[[-8247.038,-161.718,0.689,3.551],[-8257.065,-178.713,0.597,1.783],[-8264.946,-92.037,0.242,2.670]])//horse
spawnMultipleNPCs(fish.ID,10,0,[[-8368.467,-177.513,-7.155,3.55],[-8370.414,-185.265,-8.868,3.621],[-8374.633,-181.112,-4.493,3.147],[-8374.742,-164.985,-4.493,3.147],[-8366.719,-179.946,-6.378,3.171],[-8373.545,-189.623,-7.256,1.964],[-8379.233,-177.452,-4.29,5.787],[-8370.930,-183.825,-12.522,1.770],[-8363.018,-184.564,-5.241,2.410]])//sharptooth frenzy
spawnMultipleNPCs(26816,0,0,[[-8260.887,2.013,9.905,5.782],[-8256.459,8.896,9.851,5.711],[-8255.001953,2.961,9.627,5.719]])//focus wizard
    setLevel(26816,20)
    setFaction(26816,35)
spawnNPC(31454,0,0,[-8300.252,16.922,47.169,0.924])//bound water elemental
    setFaction(31454,475)
    setLevel(31454,12)
    setName(31454,'Bound Water Elemental')
 spawnMultipleNPCs(1889,5,0,[[-8298.559,19.434,47.136,0.970],[-8298.939,41.677,47.233,5.132],[-8310.538,25.416,47.227,0]])//Dalaran Wizard
    setFaction(1889,35)
spawnNPC(5794,0,0,[-8210.519,-198.697,3.408,4.088])//Thurmonde the Devout
    setFaction(5794,35)
spawnMultipleNPCs(14284,0,0,[[-8285.886,-203.843,0.828,1.543],[-8298.244,-203.508,0.760,1.543]])//Stormpike Battleguard
    setLevel(14284,20)
    setFaction(14284,35)

spawnMultipleNPCWithTimer(creature3.ID,5,0,[
    [-8203.597656,-39.794701,0.648015,4.437449],
    [-8190.855957,-55.616486,0.919924,3.895530],
    [-8224.788086,-54.686188,2.187397,3.754158],
    [-8246.943359,-89.185333,1.303253,4.720193],
    [-8236.807617,-110.086258,0.675425,5.026500],
    [-8216.659180,-135.013077,1.786125,5.352436],
    [-8199.800781,-151.965454,-5.544346,0.247346],
    [-8141.288086,-174.158997,0.967829,4.386400],
    [-8181.925781,-214.976761,-0.462242,3.981925],
    [-8208.965820,-229.783737,0.723354,3.730597],
    [-8251.107422,-236.035370,1.146519,4.971520],
    [-8244.887695,-259.495605,3.689821,0.942430],
    [-8293.357422,-163.142349,2.021821,2.293316],
    [-8334.710938,-209.816422,0.758716,4.739833],
    [-8289.251953,-91.123215,1.278894,0.475120]],60)

spawnMultipleNPCWithTimer(creature2.ID,5,0,[
    [-8183.673828,-135.199722,-3.382905,4.166488],
    [-8187.948242,-142.991867,-4.347747,3.227936],
    [-8196.116211,-149.137253,-5.357476,5.548786],
    [-8187.804688,-160.166214,-6.373648,5.203212],
    [-8173.830566,-174.143524,-5.570565,5.442757],
    [-8170.384277,-197.807983,-7.007014,5.293534],
    [-8161.711426,-195.002090,-6.907668,1.374397]],60)
    