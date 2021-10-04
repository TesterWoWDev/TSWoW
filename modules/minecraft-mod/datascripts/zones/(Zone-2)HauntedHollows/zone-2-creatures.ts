import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { spawnGob, spawnMultipleNPCWithTimer } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

let broadcastindex = 100000

//Spell Zone
export let VenomSpit = std.Spells.create(MODNAME,'venomspit-spell',6917)
export let WebEnemy = std.Spells.create(MODNAME,'webenemy-spell',745)
WebEnemy.AuraDescription.enGB.set('Covered in webs.')
export let Decay = std.Spells.create(MODNAME,'decay-spell',3584)
Decay.Name.enGB.set('Infectious Wound')
Decay.AuraDescription.enGB.set('Infected...')

//Normal Creature Spawns
export let Zone2Creature1 = std.CreatureTemplates.create(MODNAME,'zone2creature1',299)
Zone2Creature1.Name.enGB.set('Posessed Spider')
Zone2Creature1.Models.clearAll()
Zone2Creature1.Models.addIds(27976)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    Zone2Creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    Zone2Creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    Zone2Creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    Zone2Creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    Zone2Creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    Zone2Creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    Zone2Creature1.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(VenomSpit.ID,2,7)
    Zone2Creature1.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(WebEnemy.ID,2,7)
    Zone2Creature1.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Decay.ID,2,7)
//End of Spells
Zone2Creature1.MovementType.setRandomMovement()
Zone2Creature1.Level.set(2,4)
Zone2Creature1.FactionTemplate.set(48)
Zone2Creature1.DamageSchool.setNormal()
Zone2Creature1.Stats.ArmorMod.set(5)
Zone2Creature1.Stats.DamageMod.set(3)
Zone2Creature1.Stats.ExperienceMod.set(1)
Zone2Creature1.Stats.HealthMod.set(4)
Zone2Creature1.Stats.ManaMod.set(10)
export let Zone2Creature1Loot = Zone2Creature1.NormalLoot
spawnMultipleNPCWithTimer(Zone2Creature1.ID,5,0,[
    [-8705.208008,-289.991180,17.072584,5.460984],
    [-8695.189453,-297.399292,13.923273,5.944003],
    [-8663.417969,-314.078949,0.659130,2.327247],
    [-8644.457031,-291.792877,0.206308,1.388696],
    [-8668.502930,-283.069366,0.172222,2.001307],
    [-8632.586914,-265.212158,0.116836,0.988143],
    [-8676.017578,-220.608582,0.149196,2.598209],
    [-8707.838867,-257.629913,15.306429,2.209437],
    [-8704.741211,-215.556427,13.911910,1.557557],
    [-8735.679688,-218.231339,17.158766,2.570720],
    [-8758.276367,-230.721909,19.318552,3.312920],
    [-8771.079102,-210.535309,16.734375,2.091626],
    [-8792.609375,-220.453033,14.464726,3.332555],
    [-8784.681641,-232.562073,14.480065,3.697767],
    [-8810.368164,-222.165634,14.553887,3.002690],
    [-8819.699219,-232.925156,17.044405,4.962257],
    [-8812.799805,-256.624054,10.322871,4.243623],
    [-8835.501953,-260.440552,14.332976,3.104797],
    [-8853.500000,-274.759766,12.421118,3.199044],
    [-8861.812500,-289.446777,5.885896,4.538147],
    [-8842.681641,-302.249542,7.736259,5.704463],
    [-8840.470703,-323.900055,15.401208,4.412487],
    [-8865.166992,-313.661102,19.153212,3.415031],
    [-8868.618164,-332.037628,14.349393,4.090476],
    [-8898.824219,-316.450073,11.530528,3.301151],
    [-8913.707031,-324.524384,14.969853,3.964812],
    [-8915.792969,-303.057007,14.330616,1.922777],
    [-8908.350586,-269.611847,12.287283,1.832456],
    [-8920.175781,-272.243042,14.430443,2.719956],
    [-8920.142578,-249.502731,15.580550,0.705409],
    [-8894.838867,-249.008682,14.902557,0.520843],
    [-8870.282227,-239.227783,14.735436,5.606296],
    [-8863.030273,-211.325333,16.259924,0.681847],
    [-8829.982422,-218.350159,14.956569,5.728033],
    [-8816.714844,-199.307220,14.330506,0.937104],
    [-8797.680664,-225.673203,14.329697,5.268571],
    [-8700.092773,-330.129547,14.531447,4.671671],
    [-8905.553711,-337.578430,15.634030,5.512042],
    [-8896.199219,-356.714386,19.494429,4.271118],
    [-8895.535156,-374.908417,14.940616,3.949106],
    [-8910.562500,-392.692200,12.956695,4.133674],
    [-8906.617188,-414.554657,13.250722,5.641635],
    [-8897.291992,-408.138916,13.575514,2.303693],
    [-8891.801758,-424.462524,14.514731,5.080074],
    [-8892.918945,-438.133911,16.479605,4.392855],
    [-8902.401367,-446.857147,17.930437,3.442523],
    [-8916.594727,-449.105988,17.757107,3.564260],
    [-8936.010742,-458.133026,16.524414,3.740974],
    [-8939.716797,-466.454285,14.383574,4.789479],
    [-8945.842773,-475.670410,13.076583,3.383618],
    [-8927.826172,-426.941437,12.861237,5.213598],
    [-8921.206055,-442.427704,13.823993,5.299992],
    [-8912.157227,-439.984375,13.114838,2.044515],
    [-8910.066406,-416.646759,12.856194,0.630798],
    [-8885.175781,-461.171661,15.433915,5.441362],
    [-8885.493164,-469.644592,14.854213,4.102263],
    [-8883.486328,-476.036835,14.893399,4.275050],
    [-8896.553711,-486.793945,12.435969,4.031577],
    [-8913.564453,-506.664948,10.608085,3.945184],
    [-8929.737305,-511.621704,10.854290,2.527540],
    [-8924.415039,-505.436310,10.645650,2.287993],
    [-8936.780273,-501.503967,12.366184,2.370460],
    [-8938.515625,-489.053986,11.913497,3.552485],
    [-8956.194336,-494.921509,11.799611,3.375770],
    [-8966.097656,-485.147491,11.982493,1.125604],
    [-8956.512695,-475.510529,7.917710,2.107352],
    [-8710.021484,-341.958008,14.851360,0.838924],],300)

export let WebVictim = std.CreatureTemplates.create(MODNAME,'webbed-zone2',17680)
WebVictim.Name.enGB.set('Webbed Creature')
WebVictim.Level.set(3,3)

export let ZombifiedSubject = std.CreatureTemplates.create(MODNAME,'zombified-zone2',299)
ZombifiedSubject.Name.enGB.set('Zombified Subject')
ZombifiedSubject.Models.clearAll()
ZombifiedSubject.Models.addIds(10973,987,10970,10971)
ZombifiedSubject.MovementType.setRandomMovement()
ZombifiedSubject.Level.set(1,1)
ZombifiedSubject.DamageSchool.setNormal()
ZombifiedSubject.Stats.ArmorMod.set(1)
ZombifiedSubject.Stats.DamageMod.set(3)
ZombifiedSubject.Stats.ExperienceMod.set(1)
ZombifiedSubject.Stats.HealthMod.set(0.5)
ZombifiedSubject.Stats.ManaMod.set(1)
export let ZombifiedSubjectLoot = ZombifiedSubject.NormalLoot
spawnMultipleNPCWithTimer(ZombifiedSubject.ID,3,0,[
    [-8977.940430,-142.875031,14.330401,4.487103],
    [-8974.431641,-143.699463,14.330401,4.471396],
    [-8971.896484,-146.163177,14.330401,5.256795],
    [-8974.447266,-147.569641,14.330401,3.151929],
    [-8972.720703,-149.862793,14.330401,5.362824],
    [-8973.149414,-153.932053,14.330401,4.455693],
    [-8976.647461,-155.993729,14.330401,3.524996],
    [-8980.158203,-153.987823,14.330401,2.492197],
    [-8983.094727,-153.899231,14.330401,3.360063],
    [-8985.254883,-156.608795,14.330401,4.039432],
    [-8988.687500,-157.120346,14.330401,2.837773],
    [-8988.376953,-153.669327,14.330401,1.479034],
    [-8990.623047,-150.286972,14.330401,2.162330],
    [-8993.330078,-151.520065,14.330401,3.583902],
    [-8995.411133,-149.305222,14.330401,1.659676],
    [-8992.422852,-146.721970,14.330401,6.266036],
    [-8988.515625,-145.499023,14.330401,5.936170],
    [-8985.631836,-146.231812,14.330401,5.437442],
    [-8982.712891,-148.162094,14.330401,6.140372],
    [-8980.400391,-146.306549,14.330401,0.807518],
    [-8981.600586,-143.018753,14.330401,1.922783],
    [-8984.424805,-141.011169,14.330401,1.836389],
    [-8983.392578,-138.338333,14.330401,0.893911],
    [-8980.888672,-136.865463,14.330401,0.277374],
    [-8976.772461,-137.155075,14.330401,5.885118],
    [-8973.908203,-139.182098,14.330401,5.025109],
    [-8972.855469,-142.483215,14.330401,4.683462],
    [-8970.989258,-139.568115,14.330401,1.027434],
    [-8983.577148,-124.454994,14.330467,2.248728],
    [-8972.601562,-126.041206,14.354634,6.179646],
    [-8969.280273,-118.517685,15.138007,1.168805],
    [-8956.664062,-145.180954,14.330455,5.637719],
    [-8951.404297,-141.464828,14.330455,0.615098],
    [-8946.348633,-151.214920,14.557646,5.048674],
    [-8951.541992,-160.210587,14.903204,4.129759],
    [-8959.139648,-159.220398,14.570192,2.987005],
    [-8971.762695,-107.308739,14.904397,1.942425],
    [-8969.931641,-113.992393,15.609980,4.290766],
    [-8979.508789,-114.426826,14.330433,2.590379],],25)
spawnGob(509684, [-8982.267578,-148.310989,14.330441,0.591544])//Thick Fog
spawnGob(509684, [-8973.517578,-141.488937,14.330441,3.371854])//Thick Fog
spawnGob(509684, [-8991.253906,-137.917679,14.330441,2.833856])//Thick Fog



//Rare Creature Spawns
export let Zone2RareCreature1 = std.CreatureTemplates.create(MODNAME,'zone2rare1',299)
Zone2RareCreature1.Name.enGB.set('Sri\'skulk')
Zone2RareCreature1.Models.clearAll()
Zone2RareCreature1.Models.addIds(418)
Zone2RareCreature1.FactionTemplate.set(48)
Zone2RareCreature1.MovementType.setRandomMovement()
Zone2RareCreature1.Level.set(6,10)
Zone2RareCreature1.Rank.setRare()
Zone2RareCreature1.AIName.SmartAI()

SQL.smart_scripts.add(Zone2RareCreature1.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(4000).event_param2.set(14000).event_param3.set(22000).event_param4.set(28000).action_type.set(11).action_param1.set(7938).target_type.set(2).comment.set('Fatal Bite')
SQL.smart_scripts.add(Zone2RareCreature1.ID,0,4,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(180000).event_param4.set(180000).action_type.set(11).action_param1.set(32739).target_type.set(2).comment.set('Poison Bite')
SQL.smart_scripts.add(Zone2RareCreature1.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(6000).event_param4.set(9000).action_type.set(11).action_param1.set(72967).target_type.set(5).comment.set('Bite')

Zone2RareCreature1.DamageSchool.setNormal()
Zone2RareCreature1.Stats.ArmorMod.set(5)
Zone2RareCreature1.Stats.DamageMod.set(10)
Zone2RareCreature1.Stats.ExperienceMod.set(10)
Zone2RareCreature1.Stats.HealthMod.set(12)
Zone2RareCreature1.Stats.ManaMod.set(3)
export let Zone2RareCreature1Loot = Zone2RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(Zone2RareCreature1.ID,2,0,[
[-8964.411133,-461.275055,9.358535,5.135061],],600)


export let Zone2RareCreature2 = std.CreatureTemplates.create(MODNAME,'zone2rare2',299)
Zone2RareCreature2.Name.enGB.set('Shadra')
Zone2RareCreature2.Subname.enGB.set('The Venom Queen')
Zone2RareCreature2.Models.clearAll()
Zone2RareCreature2.Models.addIds(7536)
Zone2RareCreature2.FactionTemplate.set(48)
Zone2RareCreature2.MovementType.setRandomMovement()
Zone2RareCreature2.Level.set(10,12)
Zone2RareCreature2.Rank.setRareElite()
Zone2RareCreature2.AIName.SmartAI()

SQL.smart_scripts.add(Zone2RareCreature1.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(4000).event_param2.set(14000).event_param3.set(22000).event_param4.set(28000).action_type.set(11).action_param1.set(29935).target_type.set(2).comment.set('Maw')
SQL.smart_scripts.add(Zone2RareCreature1.ID,0,4,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(180000).event_param4.set(180000).action_type.set(11).action_param1.set(31680).target_type.set(1).comment.set('Molten Buff')
SQL.smart_scripts.add(Zone2RareCreature1.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(6000).event_param4.set(9000).action_type.set(11).action_param1.set(38759).target_type.set(5).comment.set('Shadow Buff')

Zone2RareCreature2.DamageSchool.setNormal()
Zone2RareCreature2.Stats.ArmorMod.set(5)
Zone2RareCreature2.Stats.DamageMod.set(10)
Zone2RareCreature2.Stats.ExperienceMod.set(10)
Zone2RareCreature2.Stats.HealthMod.set(15)
Zone2RareCreature2.Stats.ManaMod.set(3)
export let Zone2RareCreature2Loot = Zone2RareCreature2.NormalLoot
spawnMultipleNPCWithTimer(Zone2RareCreature2.ID,5,0,[
    [-9001.918945,-105.752357,-6.326611,3.140157],],600)
spawnMultipleNPCWithTimer(WebVictim.ID,0,0,[
    [-9008.983398,-113.460632,-6.137968,5.574889],
    [-9006.213867,-115.656517,-5.832437,5.492424],
    [-9009.011719,-116.561012,-6.138056,3.996242],
    [-9008.422852,-118.903114,-6.138056,5.080090],
    [-9006.141602,-119.267754,-6.138056,6.124668],
    [-9005.565430,-121.534851,-6.138056,4.773785],
    [-9000.847656,-120.266281,-6.138056,0.026052],
    [-8997.568359,-119.148506,-6.138056,0.332357],
    [-8995.136719,-120.378868,-6.138056,5.790875],
    [-8993.428711,-114.350311,-6.138415,1.844248],
    [-8996.529297,-99.843208,-6.138415,1.777489],
    [-8995.247070,-97.236275,-6.138415,1.113828],
    [-8994.963867,-93.782990,-6.138415,1.612556],
    [-8997.184570,-94.276077,-6.138415,2.672843],
    [-8998.820312,-90.528465,-6.138415,2.189823],
    [-9005.836914,-90.514801,-6.138415,3.689934],
    [-9008.078125,-92.305725,-6.138415,3.992313],
    [-9007.885742,-95.239456,-6.138415,4.777710],
    [-9009.660156,-95.428246,-6.138415,3.540709],
    [-8891.330078,-342.830322,17.085798,1.793195],
    [-8891.248047,-332.396271,14.318284,0.799666],
    [-8886.976562,-330.511047,14.330976,0.351989],
    [-8881.915039,-307.055969,18.800644,0.351989],
    [-8879.621094,-306.552582,19.442127,6.140374],
    [-8857.400391,-330.078247,15.941699,5.837992],
    [-8832.263672,-322.305023,18.615526,4.361446],
    [-8834.406250,-321.351379,17.014235,4.302541],
    [-8831.072266,-337.003204,22.021025,5.570955],
    [-8800.245117,-327.915894,15.637481,0.061386],
    [-8761.818359,-343.264221,14.410855,3.057682],
    [-8766.983398,-342.875580,14.469308,3.073390],
    [-8773.317383,-328.091309,15.270079,1.129529],
    [-8771.312500,-323.890045,15.105295,1.125602],
    [-8752.177734,-306.479645,15.010084,5.398169],
    [-8710.817383,-304.974548,15.333330,6.242469],
    [-8706.550781,-304.131226,15.282249,5.837989],
    [-8703.401367,-275.163422,14.057598,0.999934],
    [-8702.404297,-248.607590,12.987028,1.404414],
    [-8701.165039,-244.015686,12.904305,1.274823],
    [-8717.226562,-229.732239,15.638211,2.024879],
    [-8723.690430,-229.982880,14.217426,1.671449],
    [-8743.768555,-203.574402,14.471812,2.178031],
    [-8762.853516,-214.309372,16.851131,2.390089],
    [-8764.559570,-208.850632,16.518187,1.714646],
    [-8783.470703,-219.250443,16.223997,3.477865],
    [-8782.192383,-239.455490,17.489395,4.652035],
    [-8784.485352,-242.809219,18.305117,0.120285],
    [-8779.858398,-242.291473,19.107872,6.277807],
    [-8793.448242,-257.091980,6.251083,2.751370],
    [-8800.501953,-257.617004,6.458343,2.888815],
    [-8875.865234,-265.896027,14.250610,1.632177],
    [-8877.150391,-260.288361,14.344545,1.797111],
    [-8888.549805,-237.818039,14.994936,1.856016],
    [-8891.538086,-237.681610,15.506425,1.447609],
    [-8898.386719,-218.251450,14.330105,1.357288],
    [-8897.818359,-210.497910,14.330105,1.031348],
    [-8934.922852,-306.898224,17.199492,5.798714],
    [-8930.399414,-309.483032,14.350336,6.034334],
    [-8928.477539,-306.886047,14.393185,0.159556],
    [-8905.603516,-352.560364,18.965490,3.320790],
    [-8898.604492,-364.877075,17.859629,5.005471],
    [-8905.334961,-383.193817,13.892024,3.399335],
    [-8908.730469,-385.564575,13.901487,3.462167],
    [-8908.680664,-405.978760,13.190739,4.934788],
    [-8907.915039,-408.656616,13.485682,5.040820],
    [-8895.552734,-407.056274,13.107828,5.146852],
    [-8923.165039,-423.360657,12.434237,3.839166],
    [-8924.966797,-433.652130,13.776160,4.451779],
    [-8913.846680,-442.328339,13.306489,3.686015],
    [-8923.648438,-445.993622,13.735826,3.470031],
    [-8924.982422,-444.860413,13.810766,2.437232],
    [-8901.546875,-445.222900,17.823626,3.305104],
    [-8881.274414,-460.121643,16.859802,4.923026],
    [-8880.148438,-470.091888,15.915292,4.703115],
    [-8888.045898,-469.885956,15.030571,3.348304],
    [-8891.022461,-471.875000,14.995592,3.721368],
    [-8892.138672,-485.024658,13.360106,4.282929],
    [-8908.645508,-494.836609,11.340403,3.222643],
    [-8910.690430,-509.778412,10.488302,4.498917],
    [-8913.067383,-512.296143,11.152596,3.332601],
    [-8932.818359,-510.456909,11.331656,2.833873],
    [-8937.135742,-504.251831,12.656727,2.284094],
    [-8940.032227,-488.838196,11.816115,1.738242],
    [-8959.084961,-500.465363,12.022812,3.254061],
    [-8966.871094,-485.949554,12.056317,1.871759],
    [-8963.868164,-483.063324,12.003757,0.772202],
    [-8959.958984,-459.697937,9.906861,1.969934],
    [-8962.339844,-458.364166,9.854016,2.998806],
    [-8967.885742,-461.815796,9.026197,4.125852],
    [-8967.859375,-465.840698,8.818858,4.718828],
    [-8965.870117,-469.539795,8.714388,5.307875],
    [-8950.835938,-478.462494,9.023862,5.747697],
    [-8944.519531,-478.310272,13.587677,0.041776],
    [-8936.640625,-470.791992,13.854330,1.683259],
    [-8941.358398,-459.429291,16.541992,1.412296],
    [-9010.710938,-97.524445,-6.138415,4.247568],],600)
    