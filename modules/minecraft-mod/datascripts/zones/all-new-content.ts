import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { addLootToCreature, addLootToCreatureSingleChance } from "../functions/npc-functions"
import { spawnMultiGobTimer, spawnMultipleNPCWithTimer } from "../functions/spawning-functions"
import { tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial, tierThreeBaseResources } from "../items/armor/tier3-set"
import { undiscoveredReds, undiscoveredGreens, undiscoveredPurples, undiscoveredYellows, undiscoveredBlues, undiscoveredOranges } from "../items/gems/tier1-gem"
import { MODNAME } from "../modname"
import { Fawn01 } from "./(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { Bosscreature1 } from "./(Zone-1)Bramblewood/zone-1-creatures"
import { Zone3RareCreature1 } from "./(Zone-3)Leronar/zone-3-creatures"
import { CircleofFlame, DungeonItem01, DungeonItem02, DungeonItem03, DungeonItem04, DungeonItem05, DungeonItem06, DungeonItem07, DungeonItem08, DungeonItem09, DungeonItem10, DungeonItem11, DungeonItem12, DungeonItem13, DungeonItem14, DungeonItem15, DungeonItem16, DungeonItem17, DungeonItem18, DungeonItem19, DungeonItem20, OrbofPower } from "./item-manifest"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                              Blackrock Fortress Zone 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fawn Spawns New
spawnMultipleNPCWithTimer(Fawn01.ID,5,0,[
    [-8859.136719,648.417480,34.654739,3.369617],
    [-8904.333984,623.679932,34.035114,3.954739],
    [-8904.345703,572.404053,24.748940,4.673381],
    [-8852.372070,569.771423,22.092176,5.136769],
    [-8883.999023,497.457336,17.321123,3.825155],
    [-8944.936523,483.979248,25.642120,3.868352],
    [-8953.807617,419.202332,27.769886,5.026818]],10)



export let BurningMaul = std.Spells.create(MODNAME,'burningmaul-spell',30599)
BurningMaul.Effects.get(0).BasePoints.set(345) //240 damage
BurningMaul.Effects.get(0).DieSides.set(121) //121 up or down damage

export let BlackRockNpc01 = std.CreatureTemplates.create(MODNAME,'blackrocknpc01',4464)
BlackRockNpc01.Name.enGB.set('Dreadrock Orc Grunt')
    BlackRockNpc01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    BlackRockNpc01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    BlackRockNpc01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(BurningMaul.ID,2,7)
BlackRockNpc01.MovementType.setRandomMovement()
BlackRockNpc01.Level.set(7,8)
BlackRockNpc01.FactionTemplate.set(48)
BlackRockNpc01.DamageSchool.setNormal()
BlackRockNpc01.Stats.ArmorMod.set(5)
BlackRockNpc01.Stats.DamageMod.set(5)
BlackRockNpc01.Stats.ExperienceMod.set(7)
BlackRockNpc01.Stats.HealthMod.set(12)
BlackRockNpc01.Stats.ManaMod.set(10)
 
export let BlackRockNpc01Loot = BlackRockNpc01.NormalLoot
spawnMultipleNPCWithTimer(BlackRockNpc01.ID,5,0,[
    [-8918.054688,711.261780,46.706429,1.893041],
    [-8919.152344,723.848877,49.193459,3.302831],
    [-8933.929688,749.103455,52.413883,3.102554],
    [-8947.697266,764.481323,56.771992,3.000453],
    [-8958.627930,760.881470,57.957123,3.161459],
    [-8973.533203,736.032593,65.782005,4.692985],
    [-8967.904297,733.765503,65.116035,4.516271],
    [-8959.506836,722.813293,64.827644,3.294979],
    [-8903.340820,767.510010,50.617134,0.294757],
    [-8866.066406,776.042114,50.876053,6.252003],
    [-8864.338867,770.176208,50.805702,0.718872],
    [-8855.055664,772.900940,49.612213,2.077611],
    [-8856.308594,745.059082,49.700588,4.115724],
    [-8851.562500,737.251282,49.788464,4.237458],
    [-8852.315430,730.900635,49.774464,1.390388],
    [-8798.001953,750.188171,48.391178,3.946865],
    [-8806.068359,749.052856,48.391178,6.012458],
    [-8775.129883,716.467041,48.391819,3.514899],
    [-8781.532227,724.695496,48.391819,4.206049],
    [-8788.894531,713.274048,48.391819,5.776843],
    [-8772.335938,693.014893,48.399536,6.016390],
    [-8761.378906,686.828430,48.392982,1.013404],
    [-8727.918945,676.371216,48.866299,4.343495],
    [-8724.668945,675.238647,48.534557,3.978286],
    [-8697.004883,687.104675,48.392330,5.156385],
    [-8644.777344,695.391479,48.471943,1.029116],
    [-8634.961914,708.278992,48.152157,3.475632],
    [-8690.084961,754.285828,19.916653,2.344658],
    [-8780.289062,806.079224,9.939207,1.838076],
    [-8819.321289,869.542358,3.711184,4.618385],
    [-8886.111328,943.753723,6.271820,4.425960],
    [-8901.375977,838.045410,49.878208,2.081555],
    [-8909.542969,840.375183,49.201900,1.468944],
    [-8905.578125,848.535461,49.062508,4.590900],
    [-8948.833984,806.695557,55.509773,3.463855],
    [-8980.779297,794.502014,61.923687,4.327793],
    [-8977.750000,863.225403,53.647755,1.712417],
    [-8986.803711,865.984314,53.822899,1.072317],
    [-8988.554688,885.398010,52.984154,0.341897],
    [-8973.236328,886.233276,52.530399,4.402410],
    [-8982.229492,912.428406,47.784214,3.522764],
    [-8987.384766,927.023743,48.221348,4.084323],
    [-9030.621094,810.404358,60.854187,3.801581],
    [-9046.630859,860.489136,61.750286,3.703407],
    [-9043.854492,853.871399,61.705040,3.306780],
    [-9080.012695,847.211670,61.391975,1.146935],
    [-9019.188477,878.965942,62.323475,1.241182],
    [-9033.495117,907.816345,64.455620,2.026580],
    [-9045.857422,923.705017,61.711372,1.527852],
    [-9043.930664,935.120605,61.471394,4.881503],
    [-9111.400391,844.196899,61.313225,3.880129],
    [-9107.125000,827.090576,63.371490,2.627419],
    [-9122.343750,867.718323,61.298290,2.749155],
    [-9128.474609,864.734558,61.304485,0.966301],
    [-9150.824219,873.940979,61.299610,2.105129],
    [-9158.444336,879.920166,62.617752,5.439142],
    [-9150.928711,884.003235,63.450920,4.791189],
    [-9118.932617,795.830750,61.935284,5.957507],
    [-8147.710449,370.965942,0.254967,1.716352],
    [-8141.964844,384.233612,0.265603,3.675921],
    [-8169.807617,214.204269,0.151429,3.459940],
    [-8170.455566,207.362656,0.112364,2.368236],
    [-9101.888672,782.029541,61.369949,3.994022]],120)

export let BurningBreathDamageSpell = std.Spells.create(MODNAME,'bbds-spell',66670)
BurningBreathDamageSpell.Effects.get(0).BasePoints.set(327)
BurningBreathDamageSpell.Effects.get(0).DieSides.set(101)
BurningBreathDamageSpell.Effects.get(0).Radius.set(10,0,10)
BurningBreathDamageSpell.Range.set(10,10,0,0)
export let BurningBreath = std.Spells.create(MODNAME,'burningbreath-spell',67328)
BurningBreath.Effects.get(0).TriggerSpell.set(BurningBreathDamageSpell.ID)
BurningBreath.Effects.get(0).Radius.set(10,0,10)
export let PyroBlast = std.Spells.create(MODNAME,'pyroblast-spell',70516)
PyroBlast.Effects.get(0).BasePoints.set(652)
PyroBlast.Effects.get(0).DieSides.set(121)
PyroBlast.Effects.get(1).BasePoints.set(122)
PyroBlast.Effects.get(1).DieSides.set(32)
export let PyroClast = std.Spells.create(MODNAME,'pyroclast-spell',70516)
PyroClast.Effects.get(1).BasePoints.set(122)
PyroClast.Effects.get(1).DieSides.set(32)
PyroClast.CastTime.set(4000,0,4000)

export let BlackRockNpc02 = std.CreatureTemplates.create(MODNAME,'blackrocknpc02',7026)
BlackRockNpc02.Name.enGB.set('Dreadrock Orc Warlock')
    BlackRockNpc02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    BlackRockNpc02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    BlackRockNpc02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    BlackRockNpc02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    BlackRockNpc02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    BlackRockNpc02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    BlackRockNpc02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(BurningBreath.ID,2,7)
    BlackRockNpc02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(PyroBlast.ID,2,7)
    BlackRockNpc02.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(PyroClast.ID,2,7)
BlackRockNpc02.MovementType.setRandomMovement()
BlackRockNpc02.Level.set(7,9)
BlackRockNpc02.FactionTemplate.set(48)
BlackRockNpc02.DamageSchool.setNormal()
BlackRockNpc02.Stats.ArmorMod.set(5)
BlackRockNpc02.Stats.DamageMod.set(5)
BlackRockNpc02.Stats.ExperienceMod.set(7)
BlackRockNpc02.Stats.HealthMod.set(12)
BlackRockNpc02.Stats.ManaMod.set(10)
     
export let BlackRockNpc02Loot = BlackRockNpc02.NormalLoot
spawnMultipleNPCWithTimer(BlackRockNpc02.ID,5,0,[
    [-8925.642578,716.245300,49.235470,0.302653],
    [-8966.569336,724.623596,65.557976,0.919190],
    [-8905.172852,784.943115,51.327923,3.836946],
    [-8861.480469,778.788574,49.923309,4.602705],
    [-8934.113281,856.017334,55.145458,5.191751],
    [-8981.821289,863.692993,53.790653,1.445402],
    [-9079.601562,854.467590,61.369076,5.254582],
    [-9117.094727,831.554260,61.332760,0.495071],
    [-9074.285156,779.324280,61.491486,1.688876],
    [-9122.451172,892.245605,69.456902,2.183677],
    [-9099.463867,900.022217,69.637367,1.512162],
    [-9098.392578,922.536255,69.638390,4.634120],
    [-8822.267578,755.026550,63.952396,5.961437],
    [-8860.486328,711.456726,44.724548,2.953358],
    [-8140.113770,375.276031,-0.280609,3.039748],
    [-8180.597656,203.650406,0.353956,1.468955],
    [-8908.295898,649.788025,37.701054,5.360599]],120)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                              Harpy Zone
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let SisterCreature01 = std.CreatureTemplates.create(MODNAME,'sistercreature01',3276)
SisterCreature01.Name.enGB.set('Sister Vandra\'Shiva')
SisterCreature01.Scale.set(2)
SisterCreature01.FactionTemplate.set(48)
SisterCreature01.MovementType.setRandomMovement()
SisterCreature01.Level.set(10,10)
SisterCreature01.Rank.setRare()
SisterCreature01.AIName.SmartAI()

SQL.smart_scripts.add(SisterCreature01.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
SQL.smart_scripts.add(SisterCreature01.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
SQL.smart_scripts.add(SisterCreature01.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(SisterCreature01.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

SisterCreature01.DamageSchool.setNormal()
SisterCreature01.Stats.ArmorMod.set(5)
SisterCreature01.Stats.DamageMod.set(75)
SisterCreature01.Stats.HealthMod.set(50)
SisterCreature01.Stats.ManaMod.set(3)
SisterCreature01.Stats.ExperienceMod.set(10)
SisterCreature01.HoverHeight.set(1)
export let SisterCreature01Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(SisterCreature01.ID,50,0,[
    [-8752.238281,417.183105,47.513695,1.916613]],300)
SQL.creature_template_movement.add(SisterCreature01.ID).Flight.set(1)

export let SisterCreature02 = std.CreatureTemplates.create(MODNAME,'sistercreature02',3276)
SisterCreature02.Name.enGB.set('Sister Candra\'Shiva')
SisterCreature02.Scale.set(2)
SisterCreature02.FactionTemplate.set(48)
SisterCreature02.MovementType.setRandomMovement()
SisterCreature02.Level.set(10,10)
SisterCreature02.Rank.setRare()
SisterCreature02.AIName.SmartAI()

SQL.smart_scripts.add(SisterCreature02.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
SQL.smart_scripts.add(SisterCreature02.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
SQL.smart_scripts.add(SisterCreature02.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(SisterCreature02.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

SisterCreature02.DamageSchool.setNormal()
SisterCreature02.Stats.ArmorMod.set(5)
SisterCreature02.Stats.DamageMod.set(75)
SisterCreature02.Stats.HealthMod.set(50)
SisterCreature02.Stats.ManaMod.set(3)
SisterCreature02.Stats.ExperienceMod.set(10)
SisterCreature02.HoverHeight.set(1)
export let SisterCreature02Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(SisterCreature02.ID,50,0,[
    [-8802.195312,453.347565,34.455067,1.347199]],300)
SQL.creature_template_movement.add(SisterCreature02.ID).Flight.set(1)

export let SisterCreature03 = std.CreatureTemplates.create(MODNAME,'sistercreature03',3276)
SisterCreature03.Name.enGB.set('Sister Zandra\'Shiva')
SisterCreature03.Scale.set(2)
SisterCreature03.FactionTemplate.set(48)
SisterCreature03.MovementType.setRandomMovement()
SisterCreature03.Level.set(10,10)
SisterCreature03.Rank.setRare()
SisterCreature03.AIName.SmartAI()

SQL.smart_scripts.add(SisterCreature03.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
SQL.smart_scripts.add(SisterCreature03.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
SQL.smart_scripts.add(SisterCreature03.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(SisterCreature03.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

SisterCreature03.DamageSchool.setNormal()
SisterCreature03.Stats.ArmorMod.set(5)
SisterCreature03.Stats.DamageMod.set(75)
SisterCreature03.Stats.HealthMod.set(50)
SisterCreature03.Stats.ManaMod.set(3)
SisterCreature03.Stats.ExperienceMod.set(10)
SisterCreature03.HoverHeight.set(1)
export let SisterCreature03Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(SisterCreature03.ID,50,0,[
    [-8746.520508,524.943848,34.778702,3.020098]],300)
SQL.creature_template_movement.add(SisterCreature03.ID).Flight.set(1)




//Toxic Weaponry
export let Venom = std.Spells.create(MODNAME,'venom-spell',21992)//15283
Venom.row.RangeIndex.set(6)
Venom.Name.enGB.set('Venom')
Venom.Visual.setID(5283)
Venom.Description.enGB.set('Sufferring massive venom damage every second.')
Venom.Effects.get(1).BasePoints.set(149)
Venom.Effects.get(0).BasePoints.set(149)
Venom.Effects.get(0).AuraType.setPeriodicDamage()
Venom.Effects.get(0).ChainAmplitude.set(1000)
Venom.Duration.set(10000,0,10000)
export let Venom1M = std.Spells.create(MODNAME,'venom1m-spell',67670) //melee
Venom1M.Name.enGB.set('Venom')
Venom1M.Description.enGB.set('Your attacks and abilties have the chance to apply Venom to the target.')
Venom1M.AuraDescription.enGB.set('Your attacks and abilties have the chance to apply Venom to the target.')
Venom1M.Duration.set(-1,0,-1)
Venom1M.Effects.get(0).TriggerSpell.set(Venom.ID)
export let Venom1C = std.Spells.create(MODNAME,'venom1c-spell',67672) //caster
Venom1C.Name.enGB.set('Venom')
Venom1C.Description.enGB.set('Your attacks and abilties have the chance to apply Venom to the target.')
Venom1C.AuraDescription.enGB.set('Your attacks and abilties have the chance to apply Venom to the target.')
Venom1C.Duration.set(-1,0,-1)
Venom1C.Effects.get(0).TriggerSpell.set(Venom.ID)


export let ToxicStaffoftheDead = std.Items.create(MODNAME,'toxicstaffofthedead',42390)
ToxicStaffoftheDead.Name.enGB.set('Toxic Staff of the Dead')
ToxicStaffoftheDead.Damage.clearAll()
ToxicStaffoftheDead.Damage.addPhysical(75,131)
ToxicStaffoftheDead.RequiredLevel.set(7)
ToxicStaffoftheDead.Quality.setPurple()
ToxicStaffoftheDead.Armor.set(0)
ToxicStaffoftheDead.Stats.clearAll()
ToxicStaffoftheDead.Stats.addStamina(21)
ToxicStaffoftheDead.Stats.addIntellect(53)
ToxicStaffoftheDead.Stats.addHasteRating(36)
ToxicStaffoftheDead.Stats.addSpellPower(100)
ToxicStaffoftheDead.Spells.add(Venom1C.ID).Trigger.set(1)
ToxicStaffoftheDead.ClassMask.set(-1)
export let ToxicBladeoftheDead = std.Items.create(MODNAME,'toxicbladeofthedead',37081)
ToxicBladeoftheDead.Name.enGB.set('Toxic Blade of the Dead')
ToxicBladeoftheDead.Damage.clearAll()
ToxicBladeoftheDead.Damage.addPhysical(75,131)
ToxicBladeoftheDead.RequiredLevel.set(7)
ToxicBladeoftheDead.Quality.setPurple()
ToxicBladeoftheDead.Armor.set(0)
ToxicBladeoftheDead.Stats.clearAll()
ToxicBladeoftheDead.Stats.addStamina(21)
ToxicBladeoftheDead.Stats.addStrength(53)
ToxicBladeoftheDead.Stats.addAgility(36)
ToxicBladeoftheDead.Stats.addAttackPower(100)
ToxicBladeoftheDead.Spells.add(Venom1M.ID).Trigger.set(1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                              Open World Dungeon
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export let ReanimatedBones = std.CreatureTemplates.create(MODNAME,'reanimatedbones',201)
ReanimatedBones.Name.enGB.set('Reanimated Bones')
ReanimatedBones.Level.set(5,5)
ReanimatedBones.FactionTemplate.set(48)
ReanimatedBones.DamageSchool.setNormal()
ReanimatedBones.Stats.ArmorMod.set(1)
ReanimatedBones.Stats.DamageMod.set(25)
ReanimatedBones.Stats.ExperienceMod.set(10)
ReanimatedBones.Stats.HealthMod.set(10)
ReanimatedBones.Stats.ManaMod.set(10)
ReanimatedBones.Models.clearAll()
ReanimatedBones.Models.addIds(829)
ReanimatedBones.Scale.set(1)
export let ReanimatedBonesLoot = ReanimatedBones.NormalLoot
spawnMultipleNPCWithTimer(ReanimatedBones.ID,2,0,[
    [-9044.378906,529.766296,-6.938820,3.037406],
    [-9049.376953,501.069092,-6.934989,5.959089],
    [-9048.470703,500.799500,-6.936394,6.092606],
    [-9042.569336,499.240356,-6.932172,5.578172],
    [-9043.467773,496.701385,-6.943649,3.347641],
    [-9047.283203,496.571350,-6.952114,3.932763],
    [-9048.025391,495.053619,-6.958200,4.871313],
    [-9048.263672,490.240662,-6.965780,4.081989],
    [-9051.085938,489.404755,-6.965780,3.104168],
    [-9052.666016,490.796417,-6.965780,1.981048],
    [-9053.194336,492.699524,-6.965639,1.607984],
    [-9054.304688,497.856750,-6.948492,2.727176],
    [-9057.014648,497.838196,-6.947388,3.626458],
    [-9058.233398,496.627899,-6.950663,4.215506],
    [-9059.947266,492.450989,-6.964107,4.663181],
    [-9060.127930,489.195038,-6.965908,4.242994],
    [-9062.060547,493.964508,-6.963614,2.754664],
    [-9064.364258,493.829590,-6.952267,2.990284],
    [-9065.999023,496.605133,-6.953685,1.553005],
    [-9065.050781,499.582428,-6.973459,0.335637],
    [-9061.888672,499.222351,-6.956704,0.080384],
    [-9059.765625,501.441528,-6.942124,0.708702],
    [-9044.893555,530.885803,-6.941984,1.313456],
    [-9044.265625,533.261108,-6.950162,1.462682],
    [-9046.420898,534.851746,-6.958858,2.526896],
    [-9047.487305,537.003479,-6.965568,1.395923],
    [-9047.575195,540.527405,-6.965568,2.283423],
    [-9049.508789,538.847229,-6.965568,4.714230],
    [-9049.068359,536.077271,-6.962019,4.568931],
    [-9049.068359,536.077271,-6.962019,3.712847],
    [-9051.165039,534.471069,-6.956275,4.977337],
    [-9053.209961,530.854858,-6.944217,3.614672],
    [-9055.386719,531.667725,-6.946507,2.157758],
    [-9055.718750,533.835449,-6.954525,1.325236],
    [-9058.669922,532.423340,-6.951829,3.343709],
    [-9059.638672,532.081299,-6.951141,3.952393],
    [-9062.554688,531.695374,-6.938908,1.922137],
    [-9062.893555,533.171814,-6.942676,1.498022],
    [-9062.141602,538.365356,-6.959346,1.529438],
    [-9062.750000,540.051636,-6.957169,2.550456],
    [-9065.487305,540.192444,-6.945790,3.905268],
    [-9066.422852,538.099731,-6.941106,4.678883],
    [-9066.169922,534.375122,-6.936794,4.883085],
    [-9064.466797,531.133850,-6.935610,5.888391],
    [-9071.246094,524.572327,-7.012173,4.981258],
    [-9070.419922,520.499207,-7.030069,4.164445],
    [-9071.272461,520.431519,-7.030069,2.263781],
    [-9072.834961,522.326477,-7.030069,2.365883],
    [-9076.046875,523.386658,-7.008232,3.975950],
    [-9076.550781,521.984619,-6.986494,4.757420],
    [-9077.391602,520.062073,-6.975321,3.327994],
    [-9080.853516,519.544617,-6.966884,3.288724],
    [-9076.443359,517.774902,-6.985156,5.385737],
    [-9074.447266,515.574890,-7.009340,4.246909],
    [-9075.868164,515.072021,-6.991562,2.923512],
    [-9076.024414,512.308533,-6.997588,5.032307],
    [-9078.346680,511.202545,-7.010879,3.182694],
    [-9080.239258,511.746338,-7.004428,3.280869],
    [-9080.623047,509.680023,-7.028791,4.722073],
    [-9079.528320,507.265686,-7.030236,5.059792],
    [-9080.093750,506.368378,-7.030236,3.689272],
    [-9081.292969,504.206696,-7.030236,5.538883],
    [-9079.308594,504.369141,-7.030236,1.164215],
    [-9078.331055,506.189911,-7.030236,0.378817],
    [-9075.977539,506.628265,-7.030236,5.853042],
    [-9073.077148,504.551788,-7.022215,5.554592],
    [-9070.804688,503.804413,-7.007496,0.398450],
    [-9069.495117,505.669006,-7.004374,1.274169]],600)
ReanimatedBonesLoot.makeUnique(false)

export let TheGravekeeperBoss = std.CreatureTemplates.create(MODNAME,'gravekeeperboss',299)
TheGravekeeperBoss.Name.enGB.set('Gravekeeper')
TheGravekeeperBoss.Subname.enGB.set('Shadow of the Betrayer')
TheGravekeeperBoss.Models.clearAll()
TheGravekeeperBoss.Models.addIds(21322)
TheGravekeeperBoss.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
TheGravekeeperBoss.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
TheGravekeeperBoss.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
TheGravekeeperBoss.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
TheGravekeeperBoss.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
TheGravekeeperBoss.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
TheGravekeeperBoss.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(44268,2,7)
TheGravekeeperBoss.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(55276,2,7)
TheGravekeeperBoss.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(55292,2,7)
TheGravekeeperBoss.Level.set(8,8)
TheGravekeeperBoss.Scale.set(0.175)
TheGravekeeperBoss.FactionTemplate.set(48)
TheGravekeeperBoss.DamageSchool.setNormal()
TheGravekeeperBoss.Stats.ArmorMod.set(5)
TheGravekeeperBoss.Stats.DamageMod.set(110)
TheGravekeeperBoss.Stats.ExperienceMod.set(30)
TheGravekeeperBoss.Stats.HealthMod.set(150)
TheGravekeeperBoss.Stats.ManaMod.set(25)
TheGravekeeperBoss.Rank.setRareElite()
SQL.creature_equip_template.add(TheGravekeeperBoss.ID,1).ItemID1.set(6174)
export let TheGravekeeperBossLoot = TheGravekeeperBoss.NormalLoot
spawnMultipleNPCWithTimer(TheGravekeeperBoss.ID,0,0,[
    [-8923.800781,512.502869,-0.946779,3.167006]],3600)
    TheGravekeeperBossLoot.makeUnique(false)
addLootToCreature(TheGravekeeperBossLoot,[tierThreeClothMaterial,tierThreeLeatherMaterial,tierThreeMailMaterial],[4,4,4],3)
addLootToCreature(TheGravekeeperBossLoot,tierThreeBaseResources,[2,2,2,2,2,2,2],3)
addLootToCreatureSingleChance(TheGravekeeperBossLoot,[
    DungeonItem01.ID,           DungeonItem02.ID,           DungeonItem03.ID,
    DungeonItem04.ID,           DungeonItem05.ID,           DungeonItem06.ID,
    DungeonItem07.ID,           DungeonItem08.ID,           DungeonItem09.ID,
    DungeonItem10.ID,           DungeonItem11.ID,           DungeonItem12.ID,
    DungeonItem13.ID,           DungeonItem14.ID,           DungeonItem15.ID,
    DungeonItem16.ID,           DungeonItem17.ID,           DungeonItem18.ID,
    DungeonItem19.ID,           DungeonItem20.ID
],0.5,1)
addLootToCreatureSingleChance(TheGravekeeperBossLoot,[
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
addLootToCreatureSingleChance(TheGravekeeperBossLoot,[
    OrbofPower.ID
],100,3)

//Create 4 stones from each zone
export let Stone01 = std.Items.create(MODNAME,'stone01',17031) 
export let Stone02 = std.Items.create(MODNAME,'stone02',17031) 
export let Stone03 = std.Items.create(MODNAME,'stone03',17031)    
export let Stone04 = std.Items.create(MODNAME,'stone04',17031)   

export let WorldDestroyer = std.CreatureTemplates.create(MODNAME,'worlddestroyer',20403)
WorldDestroyer.Name.enGB.set('Agent of Suzu\'ven')
WorldDestroyer.Subname.enGB.set('World Destroyer')
WorldDestroyer.Scale.set(1)
WorldDestroyer.FactionTemplate.set(48)
WorldDestroyer.MovementType.setRandomMovement()
WorldDestroyer.Level.set(25,25)
WorldDestroyer.Rank.setRare()
WorldDestroyer.AIName.SmartAI()
SQL.smart_scripts.add(WorldDestroyer.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
SQL.smart_scripts.add(WorldDestroyer.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
SQL.smart_scripts.add(WorldDestroyer.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(WorldDestroyer.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')
WorldDestroyer.DamageSchool.setNormal()
WorldDestroyer.Stats.ArmorMod.set(5)
WorldDestroyer.Stats.DamageMod.set(175)
WorldDestroyer.Stats.HealthMod.set(150)
WorldDestroyer.Stats.ManaMod.set(3)
WorldDestroyer.Stats.ExperienceMod.set(100)
WorldDestroyer.HoverHeight.set(1)
export let WorldDestroyerLoot = WorldDestroyer.NormalLoot
WorldDestroyerLoot.makeUnique(false)
SQL.creature_template_movement.add(WorldDestroyer.ID).Flight.set(1)
addLootToCreatureSingleChance(WorldDestroyerLoot,[
    OrbofPower.ID
],100,1)

export let SummonWorldDestroyer = std.Spells.create(MODNAME,'summonworlddestroyer-spell',66170)
SummonWorldDestroyer.Name.enGB.set('Incite Ritual')
SummonWorldDestroyer.Description.enGB.set('Summon an ancient enemy.')
SummonWorldDestroyer.Reagents.clearAll()
SummonWorldDestroyer.Visual.setID(4800)
SummonWorldDestroyer.Reagents.add(Stone01.ID,1)
SummonWorldDestroyer.Reagents.add(Stone02.ID,1)
SummonWorldDestroyer.Reagents.add(Stone03.ID,1)
SummonWorldDestroyer.Reagents.add(Stone04.ID,1)
SummonWorldDestroyer.Effects.get(0).MiscValueA.set(WorldDestroyer.ID)
SummonWorldDestroyer.Effects.get(0).BasePoints.set(0)
SummonWorldDestroyer.Effects.get(0).DieSides.set(1)
SummonWorldDestroyer.Effects.get(0).ItemType.set(0)
SummonWorldDestroyer.RequiresSpellFocus.set(1584)
   
Stone01.Name.enGB.set('Stone of Mind')
Stone01.Description.enGB.set('The remains of an ancient tablet depicting the power of the mind and it\'s connection to the soul of the world.')
Stone01.Quality.setOrange()
Stone01.MaxStack.set(1)
Stone01.Spells.clearAll()
Stone01.Spells.add(SummonWorldDestroyer.ID).Trigger.set(0).spellcooldown_1.set(30000)           
Stone02.Name.enGB.set('Stone of Body')
Stone02.Description.enGB.set('The remains of an ancient tablet depicting the power of the body and it\'s connection to the soul of the world.')
Stone02.Quality.setOrange()
Stone02.MaxStack.set(1)
Stone02.Spells.clearAll()
Stone02.Spells.add(SummonWorldDestroyer.ID).Trigger.set(0).spellcooldown_1.set(30000)        
Stone03.Name.enGB.set('Stone of Soul')
Stone03.Description.enGB.set('The remains of an ancient tablet depicting the power of the soul and it\'s connection to the soul of the world.')
Stone03.Quality.setOrange()
Stone03.MaxStack.set(1)
Stone03.Spells.clearAll()
Stone03.Spells.add(SummonWorldDestroyer.ID).Trigger.set(0).spellcooldown_1.set(30000)         
Stone04.Name.enGB.set('Stone of Will')
Stone04.Description.enGB.set('The remains of an ancient tablet depicting the power of will and it\'s dominion over the mind, body, and soul.')
Stone04.Quality.setOrange()
Stone04.MaxStack.set(1)
Stone04.Spells.clearAll()
Stone04.Spells.add(SummonWorldDestroyer.ID).Trigger.set(0).spellcooldown_1.set(30000)        


//Spell Focus Spawn
export let TemporalFocusSpot = std.GameObjectTemplates.load(193565)
TemporalFocusSpot.Size.set(0.1)
TemporalFocusSpot.Name.enGB.set('Temporal Focus Spot')

spawnMultiGobTimer(TemporalFocusSpot.ID,[
    [-8854.297852,397.104858,6.127038,6.233972]],600)

//How Would I even do this when I want to create the spell thats getting applied to the item but it needs the item to be created for the spell to work???
export let TemporalStone = std.Items.create(MODNAME,'temporalstone',17031)                                                                                                        // This needs to be added to the loot tables of all creatures,
export let EmpoweredTemporalStone = std.Items.create(MODNAME,'ancienttablet',17032)                                                                                               // Create rift monsters that randomly spawn that you can kill to get the temporal stones

export let InterceptorCreature = std.CreatureTemplates.create(MODNAME,'interceptorcreature01',18096)
InterceptorCreature.Name.enGB.set('Temporal Interceptor')
InterceptorCreature.Scale.set(1)
InterceptorCreature.FactionTemplate.set(48)
InterceptorCreature.MovementType.setRandomMovement()
InterceptorCreature.Level.set(10,10)
InterceptorCreature.Rank.setRare()
InterceptorCreature.AIName.SmartAI()
SQL.smart_scripts.add(InterceptorCreature.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
SQL.smart_scripts.add(InterceptorCreature.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
SQL.smart_scripts.add(InterceptorCreature.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(InterceptorCreature.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')
InterceptorCreature.DamageSchool.setNormal()
InterceptorCreature.Stats.ArmorMod.set(5)
InterceptorCreature.Stats.DamageMod.set(75)
InterceptorCreature.Stats.HealthMod.set(50)
InterceptorCreature.Stats.ManaMod.set(3)
InterceptorCreature.Stats.ExperienceMod.set(10)
InterceptorCreature.HoverHeight.set(1)
export let InterceptorCreatureLoot = InterceptorCreature.NormalLoot
InterceptorCreatureLoot.makeUnique(false)
SQL.creature_template_movement.add(InterceptorCreature.ID).Flight.set(1)
addLootToCreatureSingleChance(InterceptorCreatureLoot,[
    OrbofPower.ID
],5,1)
addLootToCreatureSingleChance(InterceptorCreatureLoot,[
    EmpoweredTemporalStone.ID
],100,2)


export let TimeWarden = std.CreatureTemplates.create(MODNAME,'timewarden',30875)
TimeWarden.Name.enGB.set('Akion\'la the Time Warden')
TimeWarden.Scale.set(1)
TimeWarden.FactionTemplate.set(48)
TimeWarden.MovementType.setRandomMovement()
TimeWarden.Level.set(20,20)
TimeWarden.Rank.setRare()
TimeWarden.AIName.SmartAI()
SQL.smart_scripts.add(TimeWarden.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
SQL.smart_scripts.add(TimeWarden.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
SQL.smart_scripts.add(TimeWarden.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(TimeWarden.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')
TimeWarden.DamageSchool.setNormal()
TimeWarden.Stats.ArmorMod.set(5)
TimeWarden.Stats.DamageMod.set(75)
TimeWarden.Stats.HealthMod.set(50)
TimeWarden.Stats.ManaMod.set(3)
TimeWarden.Stats.ExperienceMod.set(10)
TimeWarden.HoverHeight.set(1)
export let TimeWardenLoot = TimeWarden.NormalLoot
TimeWardenLoot.makeUnique(false)
SQL.creature_template_movement.add(TimeWarden.ID).Flight.set(1)
addLootToCreatureSingleChance(TimeWardenLoot,[
    OrbofPower.ID
],100,1)

export let TemporalCombine = std.Spells.create(MODNAME,'temporalcombine-spell',66170) //have the combination spell summon a creature that you have to kill for the tablet?
TemporalCombine.Name.enGB.set('Fuse Temporal Stones')
TemporalCombine.Description.enGB.set('Combine 3 Temporal Stones together to create an ancient summoners tablet. I\'m sure nothing could go wrong..?')
TemporalCombine.Reagents.clearAll()
TemporalCombine.Visual.setID(4800)
TemporalCombine.Reagents.add(TemporalStone.ID,3)
TemporalCombine.Effects.get(0).MiscValueA.set(InterceptorCreature.ID)
TemporalCombine.Effects.get(0).BasePoints.set(0)
TemporalCombine.Effects.get(0).DieSides.set(1)
TemporalCombine.Effects.get(0).ItemType.set(0)
TemporalCombine.RequiresSpellFocus.set(1584)

export let TemporalSummon = std.Spells.create(MODNAME,'temporalsummon-spell',66170)
TemporalSummon.Name.enGB.set('Incite Ritual')
TemporalSummon.Description.enGB.set('Summon an ancient enemy.')
TemporalSummon.Visual.setID(4800)
TemporalSummon.Reagents.clearAll()
TemporalSummon.Reagents.add(EmpoweredTemporalStone.ID,1)
TemporalSummon.Effects.get(0).MiscValueA.set(TimeWarden.ID)
TemporalSummon.Effects.get(0).BasePoints.set(0)
TemporalSummon.Effects.get(0).DieSides.set(1)
TemporalSummon.Effects.get(0).ItemType.set(0)
TemporalSummon.RequiresSpellFocus.set(1584)

TemporalStone.Name.enGB.set('Temporal Stone')
TemporalStone.Description.enGB.set('Some remains of an ancient tablet.')
TemporalStone.Quality.setPurple()
TemporalStone.MaxStack.set(3)
TemporalStone.Spells.clearAll()
TemporalStone.Spells.add(TemporalCombine.ID).Trigger.set(0).spellcooldown_1.set(30000)

EmpoweredTemporalStone.Name.enGB.set('Ancient Tablet')
EmpoweredTemporalStone.Description.enGB.set('An ancient tablet depicting a summoning ritual for a powerful beast.')
EmpoweredTemporalStone.Quality.setPurple()
EmpoweredTemporalStone.MaxStack.set(3)
EmpoweredTemporalStone.Spells.clearAll()
EmpoweredTemporalStone.Spells.add(TemporalSummon.ID).Trigger.set(0).spellcooldown_1.set(30000)




//Need to add ancient tablets + stones to loot tables for creatures.
