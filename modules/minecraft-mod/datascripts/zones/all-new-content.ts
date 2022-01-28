import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { spawnMultipleNPCWithTimer } from "../functions/spawning-functions"
import { MODNAME } from "../modname"
import { Fawn01 } from "./(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { Zone3RareCreature1 } from "./(Zone-3)Leronar/zone-3-creatures"

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                              Blackrock Fortress Zone 
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fawn Spawns New
spawnMultipleNPCWithTimer(Fawn01.ID,5,0,[
    {map:725,x:-8859.136719,y:648.417480,z:34.654739,o:3.369617},
    {map:725,x:-8904.333984,y:623.679932,z:34.035114,o:3.954739},
    {map:725,x:-8904.345703,y:572.404053,z:24.748940,o:4.673381},
    {map:725,x:-8852.372070,y:569.771423,z:22.092176,o:5.136769},
    {map:725,x:-8883.999023,y:497.457336,z:17.321123,o:3.825155},
    {map:725,x:-8944.936523,y:483.979248,z:25.642120,o:3.868352},
    {map:725,x:-8953.807617,y:419.202332,z:27.769886,o:5.026818},
    ],10)


export let BurningMaul = std.Spells.create(MODNAME,'burningmaul-spell',30599)
BurningMaul.Effects.get(0).BasePoints.set(345) //240 damage
BurningMaul.Effects.get(0).DieSides.set(121) //121 up or down damage

export let BlackRockNpc01 = std.CreatureTemplates.create(MODNAME,'blackrocknpc01',4464)
BlackRockNpc01.Name.enGB.set('Dreadrock Orc Grunt')
BlackRockNpc01.Scripts.onUpdateIc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setCreateTimedEvent(0,0,0,11000,15000,100)
})
BlackRockNpc01.Scripts.onUpdateOoc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setRemoveTimedEvent(0)
})

BlackRockNpc01.Scripts.onTimedEventTriggered(0,script=>{
        script.Target.setVictim()
        script.Action.setCast(BurningMaul.ID,0,0)
})
BlackRockNpc01.MovementType.RANDOM_MOVEMENT.set()
BlackRockNpc01.Level.set(7,8)
BlackRockNpc01.FactionTemplate.set(48)
BlackRockNpc01.DamageSchool.Normal.set()
BlackRockNpc01.Stats.ArmorMod.set(5)
BlackRockNpc01.Stats.DamageMod.set(5)
BlackRockNpc01.Stats.ExperienceMod.set(7)
BlackRockNpc01.Stats.HealthMod.set(12)
BlackRockNpc01.Stats.ManaMod.set(10)
 
export let BlackRockNpc01Loot = BlackRockNpc01.NormalLoot
spawnMultipleNPCWithTimer(BlackRockNpc01.ID,5,0,[
     {map:725,x:-8918.054688,y:711.261780,z:46.706429,o:1.893041},
     {map:725,x:-8919.152344,y:723.848877,z:49.193459,o:3.302831},
     {map:725,x:-8933.929688,y:749.103455,z:52.413883,o:3.102554},
     {map:725,x:-8947.697266,y:764.481323,z:56.771992,o:3.000453},
     {map:725,x:-8958.627930,y:760.881470,z:57.957123,o:3.161459},
     {map:725,x:-8973.533203,y:736.032593,z:65.782005,o:4.692985},
     {map:725,x:-8967.904297,y:733.765503,z:65.116035,o:4.516271},
     {map:725,x:-8959.506836,y:722.813293,z:64.827644,o:3.294979},
     {map:725,x:-8903.340820,y:767.510010,z:50.617134,o:0.294757},
     {map:725,x:-8866.066406,y:776.042114,z:50.876053,o:6.252003},
     {map:725,x:-8864.338867,y:770.176208,z:50.805702,o:0.718872},
     {map:725,x:-8855.055664,y:772.900940,z:49.612213,o:2.077611},
     {map:725,x:-8856.308594,y:745.059082,z:49.700588,o:4.115724},
     {map:725,x:-8851.562500,y:737.251282,z:49.788464,o:4.237458},
     {map:725,x:-8852.315430,y:730.900635,z:49.774464,o:1.390388},
     {map:725,x:-8798.001953,y:750.188171,z:48.391178,o:3.946865},
     {map:725,x:-8806.068359,y:749.052856,z:48.391178,o:6.012458},
     {map:725,x:-8775.129883,y:716.467041,z:48.391819,o:3.514899},
     {map:725,x:-8781.532227,y:724.695496,z:48.391819,o:4.206049},
     {map:725,x:-8788.894531,y:713.274048,z:48.391819,o:5.776843},
     {map:725,x:-8772.335938,y:693.014893,z:48.399536,o:6.016390},
     {map:725,x:-8761.378906,y:686.828430,z:48.392982,o:1.013404},
     {map:725,x:-8727.918945,y:676.371216,z:48.866299,o:4.343495},
     {map:725,x:-8724.668945,y:675.238647,z:48.534557,o:3.978286},
     {map:725,x:-8697.004883,y:687.104675,z:48.392330,o:5.156385},
     {map:725,x:-8644.777344,y:695.391479,z:48.471943,o:1.029116},
     {map:725,x:-8634.961914,y:708.278992,z:48.152157,o:3.475632},
     {map:725,x:-8690.084961,y:754.285828,z:19.916653,o:2.344658},
     {map:725,x:-8780.289062,y:806.079224,z:9.939207,o:1.838076},
     {map:725,x:-8819.321289,y:869.542358,z:3.711184,o:4.618385},
     {map:725,x:-8886.111328,y:943.753723,z:6.271820,o:4.425960},
     {map:725,x:-8901.375977,y:838.045410,z:49.878208,o:2.081555},
     {map:725,x:-8909.542969,y:840.375183,z:49.201900,o:1.468944},
     {map:725,x:-8905.578125,y:848.535461,z:49.062508,o:4.590900},
     {map:725,x:-8948.833984,y:806.695557,z:55.509773,o:3.463855},
     {map:725,x:-8980.779297,y:794.502014,z:61.923687,o:4.327793},
     {map:725,x:-8977.750000,y:863.225403,z:53.647755,o:1.712417},
     {map:725,x:-8986.803711,y:865.984314,z:53.822899,o:1.072317},
     {map:725,x:-8988.554688,y:885.398010,z:52.984154,o:0.341897},
     {map:725,x:-8973.236328,y:886.233276,z:52.530399,o:4.402410},
     {map:725,x:-8982.229492,y:912.428406,z:47.784214,o:3.522764},
     {map:725,x:-8987.384766,y:927.023743,z:48.221348,o:4.084323},
     {map:725,x:-9030.621094,y:810.404358,z:60.854187,o:3.801581},
     {map:725,x:-9046.630859,y:860.489136,z:61.750286,o:3.703407},
     {map:725,x:-9043.854492,y:853.871399,z:61.705040,o:3.306780},
     {map:725,x:-9080.012695,y:847.211670,z:61.391975,o:1.146935},
     {map:725,x:-9019.188477,y:878.965942,z:62.323475,o:1.241182},
     {map:725,x:-9033.495117,y:907.816345,z:64.455620,o:2.026580},
     {map:725,x:-9045.857422,y:923.705017,z:61.711372,o:1.527852},
     {map:725,x:-9043.930664,y:935.120605,z:61.471394,o:4.881503},
     {map:725,x:-9111.400391,y:844.196899,z:61.313225,o:3.880129},
     {map:725,x:-9107.125000,y:827.090576,z:63.371490,o:2.627419},
     {map:725,x:-9122.343750,y:867.718323,z:61.298290,o:2.749155},
     {map:725,x:-9128.474609,y:864.734558,z:61.304485,o:0.966301},
     {map:725,x:-9150.824219,y:873.940979,z:61.299610,o:2.105129},
     {map:725,x:-9158.444336,y:879.920166,z:62.617752,o:5.439142},
     {map:725,x:-9150.928711,y:884.003235,z:63.450920,o:4.791189},
     {map:725,x:-9118.932617,y:795.830750,z:61.935284,o:5.957507},
     {map:725,x:-8147.710449,y:370.965942,z:0.254967,o:1.716352},
     {map:725,x:-8141.964844,y:384.233612,z:0.265603,o:3.675921},
     {map:725,x:-8169.807617,y:214.204269,z:0.151429,o:3.459940},
     {map:725,x:-8170.455566,y:207.362656,z:0.112364,o:2.368236},
     {map:725,x:-9101.888672,y:782.029541,z:61.369949,o:3.994022},],10)

export let BurningBreathDamageSpell = std.Spells.create(MODNAME,'bbds-spell',66670)
BurningBreathDamageSpell.Effects.get(0).BasePoints.set(327)
BurningBreathDamageSpell.Effects.get(0).DieSides.set(101)
BurningBreathDamageSpell.Effects.get(0).Radius.set(10)
BurningBreathDamageSpell.Range.set(10)
export let BurningBreath = std.Spells.create(MODNAME,'burningbreath-spell',67328)
BurningBreath.Effects.get(0).TriggerSpell.set(BurningBreathDamageSpell.ID)
BurningBreath.Effects.get(0).Radius.set(10)
export let PyroBlast = std.Spells.create(MODNAME,'pyroblast-spell',70516)
PyroBlast.Effects.get(0).BasePoints.set(652)
PyroBlast.Effects.get(0).DieSides.set(121)
PyroBlast.Effects.get(1).BasePoints.set(122)
PyroBlast.Effects.get(1).DieSides.set(32)
export let PyroClast = std.Spells.create(MODNAME,'pyroclast-spell',70516)
PyroClast.Effects.get(1).BasePoints.set(122)
PyroClast.Effects.get(1).DieSides.set(32)
PyroClast.CastTime.set(4000)

export let BlackRockNpc02 = std.CreatureTemplates.create(MODNAME,'blackrocknpc02',7026)
BlackRockNpc02.Name.enGB.set('Dreadrock Orc Warlock')
BlackRockNpc02.Scripts.onUpdateIc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setCreateTimedEvent(0,0,0,11000,15000,100)
    script.Action.setCreateTimedEvent(1,0,0,3000,7000,100)
    script.Action.setCreateTimedEvent(2,0,0,5000,7000,100)
})
BlackRockNpc02.Scripts.onUpdateOoc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setRemoveTimedEvent(0)
    script.Action.setRemoveTimedEvent(1)
    script.Action.setRemoveTimedEvent(2)
})

BlackRockNpc02.Scripts.onTimedEventTriggered(0,script=>{
        script.Target.setVictim()
        script.Action.setCast(BurningBreath.ID,0,0)
    })
    BlackRockNpc02.Scripts.onTimedEventTriggered(1,script=>{
        script.Target.setVictim()
        script.Action.setCast(PyroBlast.ID,0,0)
    })
    BlackRockNpc02.Scripts.onTimedEventTriggered(2,script=>{
        script.Target.setVictim()
        script.Action.setCast(PyroClast.ID,0,0)
    })
BlackRockNpc02.MovementType.RANDOM_MOVEMENT.set()
BlackRockNpc02.Level.set(7,9)
BlackRockNpc02.FactionTemplate.set(48)
BlackRockNpc02.DamageSchool.Normal.set()
BlackRockNpc02.Stats.ArmorMod.set(5)
BlackRockNpc02.Stats.DamageMod.set(5)
BlackRockNpc02.Stats.ExperienceMod.set(7)
BlackRockNpc02.Stats.HealthMod.set(12)
BlackRockNpc02.Stats.ManaMod.set(10)
     
export let BlackRockNpc02Loot = BlackRockNpc02.NormalLoot
spawnMultipleNPCWithTimer(BlackRockNpc02.ID,5,0,[
    {map:725,x:-8925.642578,y:716.245300,z:49.235470,o:0.302653},
    {map:725,x:-8966.569336,y:724.623596,z:65.557976,o:0.919190},
    {map:725,x:-8905.172852,y:784.943115,z:51.327923,o:3.836946},
    {map:725,x:-8861.480469,y:778.788574,z:49.923309,o:4.602705},
    {map:725,x:-8934.113281,y:856.017334,z:55.145458,o:5.191751},
    {map:725,x:-8981.821289,y:863.692993,z:53.790653,o:1.445402},
    {map:725,x:-9079.601562,y:854.467590,z:61.369076,o:5.254582},
    {map:725,x:-9117.094727,y:831.554260,z:61.332760,o:0.495071},
    {map:725,x:-9074.285156,y:779.324280,z:61.491486,o:1.688876},
    {map:725,x:-9122.451172,y:892.245605,z:69.456902,o:2.183677},
    {map:725,x:-9099.463867,y:900.022217,z:69.637367,o:1.512162},
    {map:725,x:-9098.392578,y:922.536255,z:69.638390,o:4.634120},
    {map:725,x:-8822.267578,y:755.026550,z:63.952396,o:5.961437},
    {map:725,x:-8860.486328,y:711.456726,z:44.724548,o:2.953358},
    {map:725,x:-8140.113770,y:375.276031,z:-0.280609,o:3.039748},
    {map:725,x:-8180.597656,y:203.650406,z:0.353956,o:1.468955},
    {map:725,x:-8908.295898,y:649.788025,z:37.701054,o:5.360599},],120)

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                              Harpy Zone
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let SisterCreature01 = std.CreatureTemplates.create(MODNAME,'sistercreature01',3276)
SisterCreature01.Name.enGB.set('Sister Vandra\'Shiva')
SisterCreature01.Scale.set(2)
SisterCreature01.FactionTemplate.set(48)
SisterCreature01.MovementType.RANDOM_MOVEMENT.set()
SisterCreature01.Level.set(10,10)
SisterCreature01.Rank.RARE.set()
SisterCreature01.AIName.SmartAI()

SisterCreature01.Scripts.onUpdateIc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setCreateTimedEvent(0,0,0,11000,15000,100)
    script.Action.setCreateTimedEvent(1,0,0,3000,7000,100)
    script.Action.setCreateTimedEvent(2,0,0,5000,7000,100)
    script.Action.setCreateTimedEvent(3,0,0,5000,7000,100)
})
SisterCreature01.Scripts.onUpdateOoc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setRemoveTimedEvent(0)
    script.Action.setRemoveTimedEvent(1)
    script.Action.setRemoveTimedEvent(2)
    script.Action.setRemoveTimedEvent(3)
})

SisterCreature01.Scripts.onTimedEventTriggered(0,script=>{
        script.Target.setVictim()
        script.Action.setCast(52870,0,0)
    })
    SisterCreature01.Scripts.onTimedEventTriggered(1,script=>{
        script.Target.setVictim()
        script.Action.setCast(52873,0,0)
    })
    SisterCreature01.Scripts.onTimedEventTriggered(2,script=>{
        script.Target.setVictim()
        script.Action.setCast(52905,0,0)
    })
    SisterCreature01.Scripts.onTimedEventTriggered(3,script=>{
        script.Target.setVictim()
        script.Action.setCast(52943,0,0)
    })

SisterCreature01.DamageSchool.Normal.set()
SisterCreature01.Stats.ArmorMod.set(5)
SisterCreature01.Stats.DamageMod.set(75)
SisterCreature01.Stats.HealthMod.set(50)
SisterCreature01.Stats.ManaMod.set(3)
SisterCreature01.Stats.ExperienceMod.set(10)
SisterCreature01.HoverHeight.set(1)
export let SisterCreature01Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(SisterCreature01.ID,50,0,[
    {map:725,x:-8752.238281,y:417.183105,z:47.513695,o:1.916613},],300)
SQL.creature_template_movement.add(SisterCreature01.ID).Flight.set(1)

export let SisterCreature02 = std.CreatureTemplates.create(MODNAME,'sistercreature02',3276)
SisterCreature02.Name.enGB.set('Sister Candra\'Shiva')
SisterCreature02.Scale.set(2)
SisterCreature02.FactionTemplate.set(48)
SisterCreature02.MovementType.RANDOM_MOVEMENT.set()
SisterCreature02.Level.set(10,10)
SisterCreature02.Rank.RARE.set()
SisterCreature02.AIName.SmartAI()

SisterCreature02.Scripts.onUpdateIc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setCreateTimedEvent(0,0,0,11000,15000,100)
    script.Action.setCreateTimedEvent(1,0,0,3000,7000,100)
    script.Action.setCreateTimedEvent(2,0,0,5000,7000,100)
    script.Action.setCreateTimedEvent(3,0,0,5000,7000,100)
})
SisterCreature02.Scripts.onUpdateOoc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setRemoveTimedEvent(0)
    script.Action.setRemoveTimedEvent(1)
    script.Action.setRemoveTimedEvent(2)
    script.Action.setRemoveTimedEvent(3)
})

SisterCreature02.Scripts.onTimedEventTriggered(0,script=>{
        script.Target.setVictim()
        script.Action.setCast(52870,0,0)
    })
    SisterCreature02.Scripts.onTimedEventTriggered(1,script=>{
        script.Target.setVictim()
        script.Action.setCast(52873,0,0)
    })
    SisterCreature02.Scripts.onTimedEventTriggered(2,script=>{
        script.Target.setVictim()
        script.Action.setCast(52905,0,0)
    })
    SisterCreature02.Scripts.onTimedEventTriggered(3,script=>{
        script.Target.setVictim()
        script.Action.setCast(52943,0,0)
    })
SisterCreature02.DamageSchool.Normal.set()
SisterCreature02.Stats.ArmorMod.set(5)
SisterCreature02.Stats.DamageMod.set(75)
SisterCreature02.Stats.HealthMod.set(50)
SisterCreature02.Stats.ManaMod.set(3)
SisterCreature02.Stats.ExperienceMod.set(10)
SisterCreature02.HoverHeight.set(1)
export let SisterCreature02Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(SisterCreature02.ID,50,0,[
    {map:725,x:-8802.195312,y:453.347565,z:34.455067,o:1.347199}],300)
SQL.creature_template_movement.add(SisterCreature02.ID).Flight.set(1)

export let SisterCreature03 = std.CreatureTemplates.create(MODNAME,'sistercreature03',3276)
SisterCreature03.Name.enGB.set('Sister Zandra\'Shiva')
SisterCreature03.Scale.set(2)
SisterCreature03.FactionTemplate.set(48)
SisterCreature03.MovementType.RANDOM_MOVEMENT.set()
SisterCreature03.Level.set(10,10)
SisterCreature03.Rank.RARE.set()
SisterCreature03.AIName.SmartAI()

SisterCreature03.Scripts.onUpdateIc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setCreateTimedEvent(0,0,0,11000,15000,100)
    script.Action.setCreateTimedEvent(1,0,0,3000,7000,100)
    script.Action.setCreateTimedEvent(2,0,0,5000,7000,100)
    script.Action.setCreateTimedEvent(3,0,0,5000,7000,100)
})
SisterCreature03.Scripts.onUpdateOoc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setRemoveTimedEvent(0)
    script.Action.setRemoveTimedEvent(1)
    script.Action.setRemoveTimedEvent(2)
    script.Action.setRemoveTimedEvent(3)
})

SisterCreature03.Scripts.onTimedEventTriggered(0,script=>{
        script.Target.setVictim()
        script.Action.setCast(52870,0,0)
    })
    SisterCreature03.Scripts.onTimedEventTriggered(1,script=>{
        script.Target.setVictim()
        script.Action.setCast(52873,0,0)
    })
    SisterCreature03.Scripts.onTimedEventTriggered(2,script=>{
        script.Target.setVictim()
        script.Action.setCast(52905,0,0)
    })
    SisterCreature03.Scripts.onTimedEventTriggered(3,script=>{
        script.Target.setVictim()
        script.Action.setCast(52943,0,0)
    })

SisterCreature03.DamageSchool.Normal.set()
SisterCreature03.Stats.ArmorMod.set(5)
SisterCreature03.Stats.DamageMod.set(75)
SisterCreature03.Stats.HealthMod.set(50)
SisterCreature03.Stats.ManaMod.set(3)
SisterCreature03.Stats.ExperienceMod.set(10)
SisterCreature03.HoverHeight.set(1)
export let SisterCreature03Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(SisterCreature03.ID,50,0,[
    {map:725,x:-8746.520508,y:524.943848,z:34.778702,o:3.020098}],300)
SQL.creature_template_movement.add(SisterCreature03.ID).Flight.set(1)
