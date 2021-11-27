// import { std } from "tswow-stdlib"
// import { SQL } from "wotlkdata/sql/SQLFiles"
// import { spawnMultipleNPCWithTimer } from "../functions/spawning-functions"
// import { MODNAME } from "../modname"
// import { Fawn01 } from "./(Zone-0)Walk-of-Heroes/starting-zone-creatures"
// import { Zone3RareCreature1 } from "./(Zone-3)Leronar/zone-3-creatures"

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                              Blackrock Fortress Zone 
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Fawn Spawns New
// spawnMultipleNPCWithTimer(Fawn01.ID,5,0,[
//     [-8859.136719,648.417480,34.654739,3.369617],
//     [-8904.333984,623.679932,34.035114,3.954739],
//     [-8904.345703,572.404053,24.748940,4.673381],
//     [-8852.372070,569.771423,22.092176,5.136769],
//     [-8883.999023,497.457336,17.321123,3.825155],
//     [-8944.936523,483.979248,25.642120,3.868352],
//     [-8953.807617,419.202332,27.769886,5.026818]],10)



// export let BurningMaul = std.Spells.create(MODNAME,'burningmaul-spell',30599)
// BurningMaul.Effects.get(0).BasePoints.set(345) //240 damage
// BurningMaul.Effects.get(0).DieSides.set(121) //121 up or down damage

// export let BlackRockNpc01 = std.CreatureTemplates.create(MODNAME,'blackrocknpc01',4464)
// BlackRockNpc01.Name.enGB.set('Dreadrock Orc Grunt')
//     BlackRockNpc01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
//     BlackRockNpc01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
//     BlackRockNpc01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(BurningMaul.ID,2,7)
// BlackRockNpc01.MovementType.setRandomMovement()
// BlackRockNpc01.Level.set(7,8)
// BlackRockNpc01.FactionTemplate.set(48)
// BlackRockNpc01.DamageSchool.setNormal()
// BlackRockNpc01.Stats.ArmorMod.set(5)
// BlackRockNpc01.Stats.DamageMod.set(5)
// BlackRockNpc01.Stats.ExperienceMod.set(7)
// BlackRockNpc01.Stats.HealthMod.set(12)
// BlackRockNpc01.Stats.ManaMod.set(10)
 
// export let BlackRockNpc01Loot = BlackRockNpc01.NormalLoot
// spawnMultipleNPCWithTimer(BlackRockNpc01.ID,5,0,[
//     [-8918.054688,711.261780,46.706429,1.893041],
//     [-8919.152344,723.848877,49.193459,3.302831],
//     [-8933.929688,749.103455,52.413883,3.102554],
//     [-8947.697266,764.481323,56.771992,3.000453],
//     [-8958.627930,760.881470,57.957123,3.161459],
//     [-8973.533203,736.032593,65.782005,4.692985],
//     [-8967.904297,733.765503,65.116035,4.516271],
//     [-8959.506836,722.813293,64.827644,3.294979],
//     [-8903.340820,767.510010,50.617134,0.294757],
//     [-8866.066406,776.042114,50.876053,6.252003],
//     [-8864.338867,770.176208,50.805702,0.718872],
//     [-8855.055664,772.900940,49.612213,2.077611],
//     [-8856.308594,745.059082,49.700588,4.115724],
//     [-8851.562500,737.251282,49.788464,4.237458],
//     [-8852.315430,730.900635,49.774464,1.390388],
//     [-8798.001953,750.188171,48.391178,3.946865],
//     [-8806.068359,749.052856,48.391178,6.012458],
//     [-8775.129883,716.467041,48.391819,3.514899],
//     [-8781.532227,724.695496,48.391819,4.206049],
//     [-8788.894531,713.274048,48.391819,5.776843],
//     [-8772.335938,693.014893,48.399536,6.016390],
//     [-8761.378906,686.828430,48.392982,1.013404],
//     [-8727.918945,676.371216,48.866299,4.343495],
//     [-8724.668945,675.238647,48.534557,3.978286],
//     [-8697.004883,687.104675,48.392330,5.156385],
//     [-8644.777344,695.391479,48.471943,1.029116],
//     [-8634.961914,708.278992,48.152157,3.475632],
//     [-8690.084961,754.285828,19.916653,2.344658],
//     [-8780.289062,806.079224,9.939207,1.838076],
//     [-8819.321289,869.542358,3.711184,4.618385],
//     [-8886.111328,943.753723,6.271820,4.425960],
//     [-8901.375977,838.045410,49.878208,2.081555],
//     [-8909.542969,840.375183,49.201900,1.468944],
//     [-8905.578125,848.535461,49.062508,4.590900],
//     [-8948.833984,806.695557,55.509773,3.463855],
//     [-8980.779297,794.502014,61.923687,4.327793],
//     [-8977.750000,863.225403,53.647755,1.712417],
//     [-8986.803711,865.984314,53.822899,1.072317],
//     [-8988.554688,885.398010,52.984154,0.341897],
//     [-8973.236328,886.233276,52.530399,4.402410],
//     [-8982.229492,912.428406,47.784214,3.522764],
//     [-8987.384766,927.023743,48.221348,4.084323],
//     [-9030.621094,810.404358,60.854187,3.801581],
//     [-9046.630859,860.489136,61.750286,3.703407],
//     [-9043.854492,853.871399,61.705040,3.306780],
//     [-9080.012695,847.211670,61.391975,1.146935],
//     [-9019.188477,878.965942,62.323475,1.241182],
//     [-9033.495117,907.816345,64.455620,2.026580],
//     [-9045.857422,923.705017,61.711372,1.527852],
//     [-9043.930664,935.120605,61.471394,4.881503],
//     [-9111.400391,844.196899,61.313225,3.880129],
//     [-9107.125000,827.090576,63.371490,2.627419],
//     [-9122.343750,867.718323,61.298290,2.749155],
//     [-9128.474609,864.734558,61.304485,0.966301],
//     [-9150.824219,873.940979,61.299610,2.105129],
//     [-9158.444336,879.920166,62.617752,5.439142],
//     [-9150.928711,884.003235,63.450920,4.791189],
//     [-9118.932617,795.830750,61.935284,5.957507],
//     [-8147.710449,370.965942,0.254967,1.716352],
//     [-8141.964844,384.233612,0.265603,3.675921],
//     [-8169.807617,214.204269,0.151429,3.459940],
//     [-8170.455566,207.362656,0.112364,2.368236],
//     [-9101.888672,782.029541,61.369949,3.994022]],120)

// export let BurningBreathDamageSpell = std.Spells.create(MODNAME,'bbds-spell',66670)
// BurningBreathDamageSpell.Effects.get(0).BasePoints.set(327)
// BurningBreathDamageSpell.Effects.get(0).DieSides.set(101)
// BurningBreathDamageSpell.Effects.get(0).Radius.set(10,0,10)
// BurningBreathDamageSpell.Range.set(10,10,0,0)
// export let BurningBreath = std.Spells.create(MODNAME,'burningbreath-spell',67328)
// BurningBreath.Effects.get(0).TriggerSpell.set(BurningBreathDamageSpell.ID)
// BurningBreath.Effects.get(0).Radius.set(10,0,10)
// export let PyroBlast = std.Spells.create(MODNAME,'pyroblast-spell',70516)
// PyroBlast.Effects.get(0).BasePoints.set(652)
// PyroBlast.Effects.get(0).DieSides.set(121)
// PyroBlast.Effects.get(1).BasePoints.set(122)
// PyroBlast.Effects.get(1).DieSides.set(32)
// export let PyroClast = std.Spells.create(MODNAME,'pyroclast-spell',70516)
// PyroClast.Effects.get(1).BasePoints.set(122)
// PyroClast.Effects.get(1).DieSides.set(32)
// PyroClast.CastTime.set(4000,0,4000)

// export let BlackRockNpc02 = std.CreatureTemplates.create(MODNAME,'blackrocknpc02',7026)
// BlackRockNpc02.Name.enGB.set('Dreadrock Orc Warlock')
//     BlackRockNpc02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
//     BlackRockNpc02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
//     BlackRockNpc02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
//     BlackRockNpc02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
//     BlackRockNpc02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
//     BlackRockNpc02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
//     BlackRockNpc02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(BurningBreath.ID,2,7)
//     BlackRockNpc02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(PyroBlast.ID,2,7)
//     BlackRockNpc02.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(PyroClast.ID,2,7)
// BlackRockNpc02.MovementType.setRandomMovement()
// BlackRockNpc02.Level.set(7,9)
// BlackRockNpc02.FactionTemplate.set(48)
// BlackRockNpc02.DamageSchool.setNormal()
// BlackRockNpc02.Stats.ArmorMod.set(5)
// BlackRockNpc02.Stats.DamageMod.set(5)
// BlackRockNpc02.Stats.ExperienceMod.set(7)
// BlackRockNpc02.Stats.HealthMod.set(12)
// BlackRockNpc02.Stats.ManaMod.set(10)
     
// export let BlackRockNpc02Loot = BlackRockNpc02.NormalLoot
// spawnMultipleNPCWithTimer(BlackRockNpc02.ID,5,0,[
//     [-8925.642578,716.245300,49.235470,0.302653],
//     [-8966.569336,724.623596,65.557976,0.919190],
//     [-8905.172852,784.943115,51.327923,3.836946],
//     [-8861.480469,778.788574,49.923309,4.602705],
//     [-8934.113281,856.017334,55.145458,5.191751],
//     [-8981.821289,863.692993,53.790653,1.445402],
//     [-9079.601562,854.467590,61.369076,5.254582],
//     [-9117.094727,831.554260,61.332760,0.495071],
//     [-9074.285156,779.324280,61.491486,1.688876],
//     [-9122.451172,892.245605,69.456902,2.183677],
//     [-9099.463867,900.022217,69.637367,1.512162],
//     [-9098.392578,922.536255,69.638390,4.634120],
//     [-8822.267578,755.026550,63.952396,5.961437],
//     [-8860.486328,711.456726,44.724548,2.953358],
//     [-8140.113770,375.276031,-0.280609,3.039748],
//     [-8180.597656,203.650406,0.353956,1.468955],
//     [-8908.295898,649.788025,37.701054,5.360599]],120)

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                              Harpy Zone
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export let SisterCreature01 = std.CreatureTemplates.create(MODNAME,'sistercreature01',3276)
// SisterCreature01.Name.enGB.set('Sister Vandra\'Shiva')
// SisterCreature01.Scale.set(2)
// SisterCreature01.FactionTemplate.set(48)
// SisterCreature01.MovementType.setRandomMovement()
// SisterCreature01.Level.set(10,10)
// SisterCreature01.Rank.setRare()
// SisterCreature01.AIName.SmartAI()

// SQL.smart_scripts.add(SisterCreature01.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
// SQL.smart_scripts.add(SisterCreature01.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
// SQL.smart_scripts.add(SisterCreature01.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
// SQL.smart_scripts.add(SisterCreature01.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

// SisterCreature01.DamageSchool.setNormal()
// SisterCreature01.Stats.ArmorMod.set(5)
// SisterCreature01.Stats.DamageMod.set(75)
// SisterCreature01.Stats.HealthMod.set(50)
// SisterCreature01.Stats.ManaMod.set(3)
// SisterCreature01.Stats.ExperienceMod.set(10)
// SisterCreature01.HoverHeight.set(1)
// export let SisterCreature01Loot = Zone3RareCreature1.NormalLoot
// spawnMultipleNPCWithTimer(SisterCreature01.ID,50,0,[
//     [-8752.238281,417.183105,47.513695,1.916613]],300)
// SQL.creature_template_movement.add(SisterCreature01.ID).Flight.set(1)

// export let SisterCreature02 = std.CreatureTemplates.create(MODNAME,'sistercreature02',3276)
// SisterCreature02.Name.enGB.set('Sister Candra\'Shiva')
// SisterCreature02.Scale.set(2)
// SisterCreature02.FactionTemplate.set(48)
// SisterCreature02.MovementType.setRandomMovement()
// SisterCreature02.Level.set(10,10)
// SisterCreature02.Rank.setRare()
// SisterCreature02.AIName.SmartAI()

// SQL.smart_scripts.add(SisterCreature02.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
// SQL.smart_scripts.add(SisterCreature02.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
// SQL.smart_scripts.add(SisterCreature02.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
// SQL.smart_scripts.add(SisterCreature02.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

// SisterCreature02.DamageSchool.setNormal()
// SisterCreature02.Stats.ArmorMod.set(5)
// SisterCreature02.Stats.DamageMod.set(75)
// SisterCreature02.Stats.HealthMod.set(50)
// SisterCreature02.Stats.ManaMod.set(3)
// SisterCreature02.Stats.ExperienceMod.set(10)
// SisterCreature02.HoverHeight.set(1)
// export let SisterCreature02Loot = Zone3RareCreature1.NormalLoot
// spawnMultipleNPCWithTimer(SisterCreature02.ID,50,0,[
//     [-8802.195312,453.347565,34.455067,1.347199]],300)
// SQL.creature_template_movement.add(SisterCreature02.ID).Flight.set(1)

// export let SisterCreature03 = std.CreatureTemplates.create(MODNAME,'sistercreature03',3276)
// SisterCreature03.Name.enGB.set('Sister Zandra\'Shiva')
// SisterCreature03.Scale.set(2)
// SisterCreature03.FactionTemplate.set(48)
// SisterCreature03.MovementType.setRandomMovement()
// SisterCreature03.Level.set(10,10)
// SisterCreature03.Rank.setRare()
// SisterCreature03.AIName.SmartAI()

// SQL.smart_scripts.add(SisterCreature03.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
// SQL.smart_scripts.add(SisterCreature03.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
// SQL.smart_scripts.add(SisterCreature03.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
// SQL.smart_scripts.add(SisterCreature03.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

// SisterCreature03.DamageSchool.setNormal()
// SisterCreature03.Stats.ArmorMod.set(5)
// SisterCreature03.Stats.DamageMod.set(75)
// SisterCreature03.Stats.HealthMod.set(50)
// SisterCreature03.Stats.ManaMod.set(3)
// SisterCreature03.Stats.ExperienceMod.set(10)
// SisterCreature03.HoverHeight.set(1)
// export let SisterCreature03Loot = Zone3RareCreature1.NormalLoot
// spawnMultipleNPCWithTimer(SisterCreature03.ID,50,0,[
//     [-8746.520508,524.943848,34.778702,3.020098]],300)
// SQL.creature_template_movement.add(SisterCreature03.ID).Flight.set(1)