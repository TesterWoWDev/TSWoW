import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { SQL_creature_template_movement } from "wotlkdata/sql/types/creature_template_movement"
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
Zone2Creature1.Level.set(3,5)
Zone2Creature1.FactionTemplate.set(48)
Zone2Creature1.DamageSchool.setNormal()
Zone2Creature1.Stats.ArmorMod.set(5)
Zone2Creature1.Stats.DamageMod.set(15)
Zone2Creature1.Stats.ExperienceMod.set(1)
Zone2Creature1.Stats.HealthMod.set(15)
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
    [-8710.021484,-341.958008,14.851360,0.838924],],120)

export let Zone2Creature5 = std.CreatureTemplates.create(MODNAME,'zone2creature5',10463)
Zone2Creature5.Name.enGB.set('Banshee')
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    Zone2Creature5.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    Zone2Creature5.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    Zone2Creature5.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    Zone2Creature5.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    Zone2Creature5.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    Zone2Creature5.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    Zone2Creature5.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(16868,2,7)
    Zone2Creature5.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(16838,2,7)
    Zone2Creature5.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(31651,2,7)
//End of Spells
Zone2Creature5.Level.set(5,7)
Zone2Creature5.FactionTemplate.set(48)
Zone2Creature5.DamageSchool.setNormal()
Zone2Creature5.Stats.ArmorMod.set(5)
Zone2Creature5.Stats.DamageMod.set(12)
Zone2Creature5.Stats.ExperienceMod.set(1)
Zone2Creature5.Stats.HealthMod.set(15)
Zone2Creature5.Stats.ManaMod.set(10)
Zone2Creature5.HoverHeight.set(20)
export let Zone2Creature5Loot = Zone2Creature1.NormalLoot
spawnMultipleNPCWithTimer(Zone2Creature5.ID,0,0,[
   [-8802.156250,-330.854858,45.844994,2.605298],
   [-8840.711914,-313.506897,36.274029,2.558174],
   [-8892.166992,-312.432159,42.135883,1.855242],
   [-8880.636719,-291.729034,60.729183,1.313317],
   [-8881.927734,-204.440491,41.447739,1.969125],
   [-8881.020508,-155.014816,33.029987,2.738816],
   [-8919.038086,-158.044815,47.759109,3.143296],
   [-8936.422852,-155.972229,46.891975,2.911603],
   [-8998.254883,-127.481735,54.663258,0.661437],
   [-8901.038086,-159.602219,73.681000,5.362048],
   [-8891.075195,-227.749939,52.785183,4.568797],
   [-8890.271484,-310.490570,42.908848,4.855467],
   [-8845.958984,-286.501770,60.009918,0.567193],
   [-8778.326172,-221.284607,38.560051,6.280964],
   [-8761.030273,-263.948090,31.395800,5.754747],
   [-8726.009766,-289.137085,52.277412,6.002147],
   [-8665.083008,-314.434265,41.644272,0.641803],
   [-8643.256836,-257.755920,28.313303,1.387932],
   [-8639.659180,-202.830795,38.685268,6.139591],
   [-8608.503906,-213.603668,55.462543,5.098941],
   [-8637.185547,-304.159729,53.384892,3.496730],],120)
SQL_creature_template_movement.add(Zone2Creature5.ID).Flight.set(1)


export let SmallSpider = std.CreatureTemplates.create(MODNAME,'smallspider-creature',721)
SmallSpider.Name.enGB.set('Skitterer')
SmallSpider.FactionTemplate.set(32)
SmallSpider.Models.clearAll()
SmallSpider.Models.addIds(18923)
SmallSpider.Scale.set(0.1)
spawnMultipleNPCWithTimer(SmallSpider.ID,10,0,[
    [-8535.717773,-227.021484,-0.054578,2.874787],
    [-8552.239258,-230.836487,0.035730,2.902276],
    [-8566.172852,-215.038879,1.168247,3.118260],
    [-8611.190430,-218.419128,-0.196642,3.196800],
    [-8625.890625,-232.660629,0.181864,3.357807],
    [-8632.776367,-236.368652,0.295261,4.638005],
    [-8634.245117,-260.657196,1.035745,4.657641],
    [-8633.858398,-268.888458,0.127243,4.861844],
    [-8642.459961,-259.279419,0.380211,3.098625],
    [-8649.759766,-266.615967,-0.205021,3.165384],
    [-8655.511719,-262.108002,-0.002430,3.263559],
    [-8669.380859,-273.061707,0.845017,3.919367],
    [-8672.008789,-286.876099,0.917053,4.924676],
    [-8664.046875,-301.828918,1.508072,4.555542],
    [-8664.799805,-316.897919,2.633118,6.177388],
    [-8658.989258,-314.037445,0.647199,1.170473],
    [-8639.875000,-297.414520,-0.164440,0.832752],
    [-8641.149414,-293.470917,0.380901,1.237232],
    [-8665.928711,-263.197693,1.915547,2.595971],
    [-8678.176758,-248.804382,4.875728,3.259633],
    [-8704.747070,-248.586746,13.623549,1.610296],
    [-8708.964844,-242.833038,14.472092,0.966269],
    [-8700.636719,-237.234634,13.614639,0.271192],
    [-8700.359375,-220.936707,15.572040,0.868094],
    [-8694.649414,-213.664154,13.787745,1.979433],
    [-8702.176758,-211.825516,13.738179,2.819809],
    [-8731.430664,-219.896362,15.807217,2.827663],
    [-8734.745117,-209.121216,14.763042,2.741269],
    [-8743.947266,-209.812378,16.077852,3.141822],
    [-8745.704102,-217.744614,15.768247,3.993980],
    [-8754.156250,-226.800415,17.921608,3.369588],
    [-8764.003906,-210.874741,17.152925,2.081534],
    [-8773.153320,-207.571564,15.418850,2.501723],
    [-8776.263672,-208.779617,15.273379,3.526668],
    [-8780.306641,-219.578323,16.256201,3.675893],
    [-8792.521484,-221.668182,14.436055,3.098625],
    [-8781.954102,-236.104065,15.818224,4.583027],
    [-8780.148438,-242.972076,19.215031,4.579100],
    [-8800.847656,-254.275436,5.891061,5.454817],
    [-8800.752930,-261.901062,9.644369,5.651166],
    [-8795.723633,-257.255249,6.014261,6.259850],
    [-8786.917969,-262.856995,5.392344,6.267703],
    [-8751.595703,-270.342072,12.591068,6.263776],
    [-8744.616211,-264.088531,14.151531,0.471464],
    [-8739.431641,-263.431366,14.330143,0.738500],
    [-8751.393555,-254.314758,6.156147,1.158688],
    [-8744.991211,-250.347794,6.769713,0.608909],
    [-8741.198242,-246.143539,6.668741,0.593201],
    [-8721.028320,-241.959412,13.057267,5.933909],
    [-8704.468750,-247.252899,13.573369,4.940383],
    [-8707.825195,-279.432098,14.951070,4.893260],
    [-8701.811523,-282.691071,14.620767,5.211345],
    [-8708.374023,-301.886505,15.341329,4.465220],
    [-8715.817383,-306.423706,15.287341,5.388062],
    [-8707.750000,-306.481689,16.016005,5.007143],
    [-8698.362305,-326.119293,15.009022,4.268870],
    [-8703.795898,-330.759247,14.553221,4.728326],
    [-8696.974609,-337.660797,15.195582,4.795084],
    [-8697.123047,-347.021240,15.225124,3.593426],
    [-8704.100586,-347.971863,16.829554,2.148293],
    [-8710.022461,-342.669067,14.766195,2.356424],
    [-8761.309570,-340.616577,14.719406,3.467763],
    [-8772.891602,-345.469666,17.316982,4.618370],
    [-8770.723633,-351.203796,15.449640,0.255481],
    [-8762.897461,-351.916626,15.094005,0.828822],
    [-8767.166016,-332.616974,14.422581,2.136510],
    [-8768.197266,-324.397339,14.599461,1.834132],
    [-8776.300781,-311.556335,14.815551,1.504265],
    [-8803.222656,-287.826660,14.482355,2.195415],
    [-8800.993164,-281.893463,14.597652,1.429652],
    [-8808.401367,-275.613220,15.212932,3.848679],
    [-8813.272461,-280.539093,16.404974,4.551610],
    [-8818.571289,-299.043884,15.596929,4.410238],
    [-8845.011719,-296.837891,5.408745,2.344640],
    [-8849.279297,-296.567474,5.512295,2.580260],
    [-8850.196289,-292.468872,7.140880,2.572406],
    [-8880.061523,-291.991730,4.463813,3.302827],
    [-8883.913086,-295.612030,4.742514,3.302827],
    [-8890.783203,-290.016785,5.416976,2.191488],
    [-8893.810547,-251.312912,15.233041,2.344641],
    [-8894.765625,-239.837708,15.868138,1.331477],
    [-8891.277344,-238.297699,15.996669,0.981974],
    [-8892.443359,-221.297241,14.987975,2.383911],
    [-8894.808594,-217.183151,14.521273,1.720249],
    [-8898.271484,-210.739212,14.332991,1.091930],
    [-8920.861328,-269.331970,14.330422,4.575174],
    [-8919.006836,-306.869080,14.330393,3.530599],
    [-8918.853516,-311.655426,14.330393,3.530599],
    [-8925.400391,-304.899048,14.330393,3.436351],
    [-8930.887695,-309.368958,14.492879,3.573796],
    [-8936.279297,-312.867889,18.257359,3.887955],
    [-8928.485352,-330.019897,14.487328,5.780762],
    [-8908.520508,-333.295288,16.005289,4.590883],
    [-8893.149414,-337.441162,14.801171,6.079212],
    [-8889.569336,-331.868866,15.123985,5.949622],
    [-8903.895508,-351.187439,19.001499,4.461296],
    [-8898.414062,-357.435852,18.758558,4.437735],
    [-8899.592773,-382.047699,14.107415,3.707317],
    [-8911.098633,-389.426270,13.341872,4.539838],
    [-8907.403320,-398.828430,13.080049,5.066054],
    [-8907.598633,-404.262421,13.157377,5.227060],
    [-8897.974609,-411.502808,14.353115,4.838289],
    [-8911.927734,-418.471436,12.697784,3.620922],
    [-8923.981445,-427.455139,12.270699,3.687681],
    [-8914.664062,-436.912415,13.403919,5.132812],
    [-8922.515625,-445.866608,13.737638,2.690225],
    [-8891.838867,-425.851074,14.701316,5.136743],
    [-8894.495117,-437.584656,16.337616,4.143215],
    [-8903.197266,-448.216187,17.987068,3.699464],
    [-8918.082031,-452.409668,17.614708,3.530603],
    [-8931.001953,-454.025330,17.284834,3.993989],
    [-8939.613281,-470.581787,13.749575,4.618377],
    [-8944.608398,-475.674744,12.656446,3.503113],
    [-8956.504883,-466.842407,8.874873,2.273964],
    [-8963.165039,-466.378143,8.791189,2.356431],
    [-8965.818359,-464.401062,9.023385,4.245314],
    [-8954.905273,-485.552826,9.640045,5.097470],
    [-8950.800781,-488.871063,11.200005,4.355270],
    [-8964.942383,-490.591309,11.988303,2.780547],
    [-8968.206055,-484.283875,12.719717,4.107871],
    [-8942.449219,-498.411926,12.144515,5.812185],
    [-8934.220703,-499.389038,11.707451,5.517661],
    [-8927.101562,-512.287476,10.664437,6.165613],
    [-8914.382812,-506.656342,10.557191,0.589284],
    [-8905.346680,-497.833588,10.957039,0.844539],
    [-8887.644531,-477.479736,14.186883,0.671751],
    [-8884.614258,-472.694855,14.958278,1.076231],
    [-8883.886719,-465.336761,15.267575,2.379992],
    [-8895.458984,-449.170624,17.030537,1.622083],
    [-8888.017578,-435.981415,16.831648,0.927005],
    [-8894.711914,-420.772400,14.314501,2.112956],
    [-8881.028320,-263.801971,14.589458,0.765998],
    [-8870.655273,-216.925003,15.398863,1.476783],
    [-8856.791016,-184.929977,15.666427,1.586739],
    [-8861.008789,-182.126953,16.052151,2.112956],
    [-8903.681641,-162.774750,14.937403,2.804106],
    [-8940.224609,-157.528137,15.801985,2.804106],
    [-8938.807617,-134.870407,15.119281,2.458531],
    [-8976.396484,-108.671204,14.553830,3.255711],
    [-8989.647461,-115.246788,14.330334,3.750512],
    [-9008.381836,-151.660431,15.295059,4.885407],
    [-9007.937500,-158.578064,14.894869,5.050340],
    [-9000.766602,-164.045792,14.367639,5.937839],
    [-8982.528320,-151.135223,14.330685,0.019862],
    [-8976.092773,-165.040314,14.930920,5.250614],
    [-8923.823242,-131.535812,15.444207,3.931147],],300)

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
Zone2RareCreature1.Stats.DamageMod.set(40)
Zone2RareCreature1.Stats.ExperienceMod.set(10)
Zone2RareCreature1.Stats.HealthMod.set(22)
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
Zone2RareCreature2.Stats.DamageMod.set(40)
Zone2RareCreature2.Stats.ExperienceMod.set(10)
Zone2RareCreature2.Stats.HealthMod.set(25)
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
    