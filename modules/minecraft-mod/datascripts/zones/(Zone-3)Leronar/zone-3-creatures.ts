import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { SQL_creature_template_movement } from "wotlkdata/sql/types/creature_template_movement"
import { LoggingPileLogs } from "../(Zone-5)Mall/mall-resource-spawns"
import { spawnMultipleNPCWithTimer } from "../../functions/spawning-functions"
import { tierTwoBaseResources } from "../../items/armor/tier2-set"
import { MODNAME } from "../../modname"

let broadcastindex = 101000

export let ChainLightning = std.Spells.create(MODNAME,'chainlightning-spell',10605)
export let ShockLightning = std.Spells.create(MODNAME,'shocklightning-spell',26415)
export let Thunderstorm = std.Spells.create(MODNAME,'thunderstorm-spell',51490)
Thunderstorm.Effects.get(2).EffectType.set(0)   //remove knockback
Thunderstorm.Effects.get(0).BasePoints.set(219) //Damage reduction

export let VoidStrike = std.Spells.create(MODNAME,'voidstrike-spell',52633)
VoidStrike.Effects.get(0).BasePoints.set(29) //30% weapon damage
export let Concuss = std.Spells.create(MODNAME,'concuss-spell',52719)
export let Destroy = std.Spells.create(MODNAME,'destroy-spell',52771)
Destroy.Effects.get(0).BasePoints.set(9)   //base weapon % reduction
Destroy.Effects.get(2).BasePoints.set(129) //dot reduction

//Normal Creature Spawns
export let Zone3Creature1 = std.CreatureTemplates.create(MODNAME,'zone3creature1',3271)
Zone3Creature1.Name.enGB.set('Fenspindle Elementalist')
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    Zone3Creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    Zone3Creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    Zone3Creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    Zone3Creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    Zone3Creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    Zone3Creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    Zone3Creature1.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(ChainLightning.ID,2,7)
    Zone3Creature1.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(ShockLightning.ID,2,7)
    Zone3Creature1.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Thunderstorm.ID,2,7)
//End of Spells
Zone3Creature1.MovementType.setRandomMovement()
Zone3Creature1.Level.set(7,9)
Zone3Creature1.FactionTemplate.set(48)
Zone3Creature1.DamageSchool.setNormal()
Zone3Creature1.Stats.ArmorMod.set(5)
Zone3Creature1.Stats.DamageMod.set(30)
Zone3Creature1.Stats.ExperienceMod.set(7)
Zone3Creature1.Stats.HealthMod.set(20)
Zone3Creature1.Stats.ManaMod.set(10)
 
export let Zone3Creature1Loot = Zone3Creature1.NormalLoot
spawnMultipleNPCWithTimer(Zone3Creature1.ID,5,0,[
    [-8539.776367,109.379311,15.396795,2.732026],
    [-8569.655273,84.734695,18.859642,3.105090],
    [-8588.404297,142.129562,15.511452,1.663884],
    [-8631.997070,120.800171,17.899673,3.002989],
    [-8655.670898,146.658920,15.035048,1.875942],
    [-8649.342773,182.552734,16.877825,5.928597],
    [-8561.167969,219.985977,15.045720,4.381362],
    [-8673.927734,287.543915,9.097383,5.151052],
    [-8699.453125,232.827576,11.406096,5.319913],
    [-8676.132812,171.955307,11.408776,5.504482],],120)

//Normal Creature Spawns
export let Zone3Creature2 = std.CreatureTemplates.create(MODNAME,'zone3creature2',3267)
Zone3Creature2.Name.enGB.set('Fenspindle Ravager')
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    Zone3Creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    Zone3Creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    Zone3Creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    Zone3Creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    //combat loop
    Zone3Creature2.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(VoidStrike.ID,2,7)
    Zone3Creature2.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(Destroy.ID,2,7)
//End of Spells
Zone3Creature2.MovementType.setRandomMovement()
Zone3Creature2.Level.set(7,9)
Zone3Creature2.FactionTemplate.set(48)
Zone3Creature2.DamageSchool.setNormal()
Zone3Creature2.Stats.ArmorMod.set(5)
Zone3Creature2.Stats.DamageMod.set(30)
Zone3Creature2.Stats.HealthMod.set(20)
Zone3Creature2.Stats.ManaMod.set(10)
Zone3Creature2.Stats.ExperienceMod.set(7)
export let Zone3Creature2Loot = Zone3Creature2.NormalLoot
spawnMultipleNPCWithTimer(Zone3Creature2.ID,5,0,[
    [-8438.496094,141.671585,4.920695,3.804087],
    [-8436.646484,110.102974,15.436843,3.737328],
    [-8485.598633,109.273125,19.954784,3.112936],
    [-8491.832031,94.444801,22.373096,3.941532],
    [-8527.117188,63.136246,26.692549,2.790924],
    [-8565.970703,91.292892,17.975052,1.974109],
    [-8585.304688,83.492477,17.917112,1.962328],
    [-8583.612305,126.700020,14.363680,1.675658],
    [-8600.430664,140.693069,14.375236,1.114098],
    [-8589.825195,169.082443,14.747336,1.601045],
    [-8596.505859,181.241730,15.214047,2.229364],
    [-8607.561523,214.776672,15.391569,2.162605],
    [-8629.743164,233.426849,15.607882,3.187550],
    [-8658.890625,228.618454,4.159719,5.029307],
    [-8679.730469,164.699310,10.647049,2.865540],
    [-8693.318359,179.163269,13.220415,2.272564],
    [-8713.572266,245.683945,15.930611,1.608902],
    [-8719.590820,276.249634,14.717733,0.741037],
    [-8646.531250,313.876740,18.101414,0.517198],
    [-8642.451172,345.807800,14.383530,1.546070],
    [-8619.030273,320.010620,16.207668,4.448119],
    [-8617.089844,274.770874,14.331091,3.827656],],120)





export let Zone3Creature3 = std.CreatureTemplates.create(MODNAME,'zone3creature3',3115)
Zone3Creature3.Name.enGB.set('Windravager Harpy')
//Spells
//(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
Zone3Creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
Zone3Creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
Zone3Creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
Zone3Creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
Zone3Creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
Zone3Creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
//combat loop
Zone3Creature2.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(VoidStrike.ID,2,7)
Zone3Creature2.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(Destroy.ID,2,7)
Zone3Creature2.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Concuss.ID,2,7)
//End of Spells
Zone3Creature3.MovementType.setRandomMovement()
Zone3Creature3.Level.set(7,9)
Zone3Creature3.FactionTemplate.set(48)
Zone3Creature3.DamageSchool.setNormal()
Zone3Creature3.Stats.ArmorMod.set(5)
Zone3Creature3.Stats.DamageMod.set(30)
Zone3Creature3.Stats.HealthMod.set(30)
Zone3Creature3.Stats.ManaMod.set(10)
Zone3Creature3.Stats.ExperienceMod.set(7)
export let Zone3Creature3Loot = Zone3Creature3.NormalLoot
spawnMultipleNPCWithTimer(Zone3Creature3.ID,5,0,[
    [-8754.365234,458.828003,15.050779,3.030472],
    [-8760.339844,468.525208,16.112421,3.882630],
    [-8765.952148,462.675018,15.634911,3.784455],
    [-8797.623047,430.609589,14.553337,3.348558],
    [-8806.160156,433.117035,14.442174,2.362883],
    [-8810.850586,465.113892,15.256320,2.602430],
    [-8808.392578,478.869751,15.673182,2.873392],
    [-8829.190430,479.185944,14.328567,3.285726],
    [-8842.690430,468.761902,13.342061,3.560616],
    [-8836.810547,507.044952,14.718614,0.921677],
    [-8831.756836,528.012573,15.179387,0.371899],
    [-8815.546875,536.452454,15.406946,5.944299],
    [-8806.613281,523.690857,15.617304,5.818635],
    [-8794.696289,534.038330,14.370335,6.050327],
    [-8778.513672,527.791870,14.404844,5.516259],
    [-8769.710938,516.097839,15.833448,4.589491],
    [-8767.448242,498.248688,14.478470,5.351326],
    [-8736.797852,504.457855,14.919167,5.504478],
    [-8742.904297,495.306976,14.700635,5.673339],
    [-8731.953125,488.856812,14.876902,0.163770],
    [-8723.212891,496.514160,14.693898,0.729257],
    [-8715.456055,504.647491,14.496181,6.026768],
    [-8738.701172,459.274384,14.521261,4.844742],
    [-8725.576172,451.572174,14.900697,5.284564],
    [-8731.882812,436.176575,14.470108,4.652320],
    [-8750.331055,419.934113,15.325910,4.487387],
    [-8774.732422,410.628662,14.418610,3.132575],],180)
    
export let Zone3RareCreature1 = std.CreatureTemplates.create(MODNAME,'zone3rare1',32082)
Zone3RareCreature1.Name.enGB.set('Mother Shiva')
Zone3RareCreature1.FactionTemplate.set(48)
Zone3RareCreature1.MovementType.setRandomMovement()
Zone3RareCreature1.Level.set(11,14)
Zone3RareCreature1.Rank.setRare()
Zone3RareCreature1.AIName.SmartAI()

SQL.smart_scripts.add(Zone3RareCreature1.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(52870).target_type.set(2).comment.set('Windstrike')
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(52873).target_type.set(2).comment.set('Rend')
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

Zone3RareCreature1.DamageSchool.setNormal()
Zone3RareCreature1.Stats.ArmorMod.set(5)
Zone3RareCreature1.Stats.DamageMod.set(50)
Zone3RareCreature1.Stats.HealthMod.set(35)
Zone3RareCreature1.Stats.ManaMod.set(3)
Zone3RareCreature1.Stats.ExperienceMod.set(10)
export let Zone3RareCreature1Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(Zone3RareCreature1.ID,15,0,[
        [-8785.416016,489.123932,14.433434,5.704753],],300)

export let SavageWolf = std.CreatureTemplates.create(MODNAME,'savagewolf-creature',299)
SavageWolf.Name.enGB.set('Savage Wolf')
SavageWolf.Models.clearAll()
SavageWolf.Models.addIds(24235)
SavageWolf.MovementType.setRandomMovement()
SavageWolf.Level.set(6,9)
SavageWolf.FactionTemplate.set(48)
SavageWolf.DamageSchool.setNormal()
SavageWolf.Stats.ArmorMod.set(5)
SavageWolf.Stats.DamageMod.set(23)
SavageWolf.Stats.ExperienceMod.set(7)
SavageWolf.Stats.HealthMod.set(20)
SavageWolf.Stats.ManaMod.set(10)
export let SavageWolfLoot = SavageWolf.NormalLoot
spawnMultipleNPCWithTimer(SavageWolf.ID,5,0,[
    [-8877.875977,359.269897,5.679372,0.417501],
    [-8879.909180,337.217804,6.822843,5.848529],
    [-8854.753906,315.080078,6.410299,0.523529],
    [-8841.800781,333.085754,5.824848,0.963352],
    [-8835.202148,358.339569,5.641962,6.033097],
    [-8848.068359,304.727295,6.258464,5.019931],
    [-8771.738281,336.013702,14.415399,0.794489],
    [-8777.411133,359.889374,14.844650,1.179334],
    [-8740.399414,362.072113,14.826248,0.468549],
    [-8703.995117,384.446045,14.437213,0.613847],
    [-8681.443359,425.453491,14.942333,1.065452],
    [-8647.278320,434.381104,14.534669,0.154389],
    [-8637.922852,473.519409,15.692936,2.373140],
    [-8649.275391,494.388855,14.328611,1.713405],
    [-8673.260742,523.393494,14.699237,2.710861],
    [-8676.629883,539.955017,14.436791,1.497420],
    [-8658.190430,565.650757,15.024729,0.814124],
    [-8680.953125,569.030334,14.494993,3.751514],
    [-8677.878906,415.573395,14.707885,5.177008],
    [-8649.941406,382.866699,14.394833,5.463676],
    [-8600.537109,374.654846,14.328579,4.222751],

    [-8774.424805,304.063446,14.402488,0.035343],
    [-8772.703125,307.610504,14.986273,6.098618],
    [-8770.142578,306.238251,14.652766,5.780532],
    [-8766.838867,308.547211,14.855206,5.179704],
    [-8766.388672,303.276550,14.625361,4.590658],
    [-8767.373047,299.295166,14.378621,4.197960],
    [-8763.778320,296.139435,14.541615,4.327551],
    [-8768.319336,294.298981,15.066287,3.408636],
    [-8770.094727,298.621918,14.165385,2.269809],
    [-8760.750000,271.620361,14.458358,5.183635],
    [-8764.628906,266.090881,14.458489,5.160073],
    [-8761.107422,263.455383,14.457055,4.186182],
    [-8792.161133,263.402008,14.893775,3.357587],
    [-8794.635742,269.974548,15.586689,4.429656],
    [-8800.576172,312.773834,14.312142,2.474010],
    [-8798.208008,320.775604,14.384285,2.356200],
    [-8791.980469,324.315765,14.394029,0.263114],
    
    [-8617.087891,364.859863,16.320601,3.504112],
    [-8688.164062,366.814545,6.623523,4.371979],
    [-8697.616211,363.535736,10.885416,4.623305],
    [-8692.811523,348.342529,4.708349,4.733260],
    [-8690.713867,338.692322,5.465054,4.159920],
    [-8697.760742,328.098541,4.053293,4.371976],
    [-8696.484375,314.220581,5.600358,4.784310],
    [-8693.573242,297.185608,8.026409,5.612903],
    [-8658.184570,269.454956,5.365967,4.878557],
    [-8662.751953,268.735779,6.040778,4.913900],
    [-8659.594727,262.601318,5.841236,5.801398],
    [-8662.469727,258.885620,6.208811,5.624685],
    [-8659.171875,257.086304,5.994402,5.663954],
    [-8657.713867,252.777893,6.617630,3.716175],
    [-8662.566406,249.582047,6.613211,3.724029],
    [-8671.516602,229.620911,5.563176,3.280278],
    [-8670.924805,235.399963,5.880173,3.028951],
    [-8676.722656,235.761978,5.015108,3.080002],
    [-8684.848633,234.336945,4.920830,3.873254],
    [-8645.542969,212.443436,5.720034,4.368057],
    [-8651.309570,213.138062,4.422554,4.611530],
    [-8649.327148,202.049225,5.310383,4.116730],
    [-8653.718750,196.597977,5.866368,4.034264],
    [-8657.609375,201.006607,4.687202,3.861477],
    [-8664.007812,186.164062,6.842653,3.943944],
    [-8748.664062,166.507660,13.738003,5.059210],
    [-8733.000977,134.198242,16.229395,4.862864],
    [-8744.714844,118.531731,14.748155,4.595831],
    [-8793.252930,90.486092,14.328437,0.444997]],300)

export let WoodcuttingTree02 = std.CreatureTemplates.create(MODNAME,'woodcuttingtree02-creature',721)
WoodcuttingTree02.Name.enGB.set('Hearty Tree')
WoodcuttingTree02.FactionTemplate.set(7) // Non Agressive Faction - will not get attacked by boars
WoodcuttingTree02.Scale.set(1)
WoodcuttingTree02.Models.clearAll()
WoodcuttingTree02.Models.addIds(16977)
WoodcuttingTree02.Level.set(1,1)
WoodcuttingTree02.MovementSpeed.set(0,0)
WoodcuttingTree02.NormalLoot.addItem(LoggingPileLogs.ID,100,1,3,false,1,1)
WoodcuttingTree02.NormalLoot.addItem(tierTwoBaseResources[5],25,1,1,false,3,1)
SQL_creature_template_movement.add(WoodcuttingTree02.ID).Rooted.set(1)
spawnMultipleNPCWithTimer(WoodcuttingTree02.ID,0,0,[
    [-8383.847656,127.971878,10.790754,2.030104],
    [-8396.234375,176.823792,7.468387,1.837682],
    [-8404.850586,177.949356,8.653808,1.904440],
    [-8435.289062,155.803726,4.990361,4.402007],
    [-8416.061523,118.089188,8.988924,4.260636],
    [-8422.075195,115.218674,9.518297,4.468766],
    [-8454.307617,83.213768,15.019818,4.158535],
    [-8467.176758,81.655922,16.793112,4.547305],
    [-8521.140625,42.811378,23.892511,3.922917],
    [-8534.806641,39.654465,25.227930,3.337795],
    [-8563.421875,104.994385,14.577495,2.175405],
    [-8573.641602,105.435143,16.043436,1.496035],
    [-8603.989258,95.939049,15.942945,2.627009],
    [-8611.064453,92.046387,15.610021,2.768381],
    [-8616.526367,94.224297,16.460688,2.729111],
    [-8623.962891,133.920868,14.368657,1.562794],
    [-8624.791992,139.720642,15.080855,2.218602],
    [-8660.583984,144.987274,14.953860,2.481710],
    [-8670.470703,145.531830,14.464074,2.497418],
    [-8670.359375,155.041824,14.401166,4.853614],
    [-8692.123047,121.894806,16.744486,2.831216],
    [-8720.087891,121.825691,16.455868,2.815508],
    [-8744.075195,140.608826,14.620507,3.086470],
    [-8762.291992,119.539795,14.359617,3.047200],
    [-8777.079102,114.582558,14.051031,1.900518],
    [-8797.030273,199.107239,14.504830,2.717333],
    [-8805.091797,199.763962,15.418729,3.467388],
    [-8815.229492,250.688736,14.335917,0.223693],
    [-8806.415039,252.593613,14.360964,1.460696],
    [-8781.415039,249.562592,14.443449,0.647808],
    [-8767.759766,254.242065,14.691891,0.094102],
    [-8771.466797,241.407364,15.685412,5.136361],
    [-8757.176758,241.222595,14.554822,1.276125],
    [-8743.741211,288.553558,14.767922,1.496037],
    [-8740.574219,295.217377,15.039863,2.269654],
    [-8743.602539,328.746918,14.759817,2.293216],
    [-8749.530273,336.129547,14.458419,6.106324],
    [-8736.411133,341.379700,16.026041,5.854998],
    [-8722.294922,361.114777,15.667836,0.270814],
    [-8714.301758,374.705109,14.423988,5.968880],
    [-8705.814453,369.202850,14.870726,5.713626],
    [-8695.109375,412.125702,14.428191,1.515672],
    [-8697.848633,421.618866,14.692315,3.341724],
    [-8711.701172,420.771973,14.600966,4.288129],
    [-8737.184570,399.567108,14.755377,3.887578],
    [-8774.450195,387.859283,14.950433,3.538076],
    [-8781.074219,377.600128,14.358571,2.709480],
    [-8786.610352,398.895630,14.178008,3.691228],
    [-8821.147461,458.962708,14.833302,2.273584],
    [-8818.208984,469.149506,15.316212,3.110034],
    [-8833.189453,468.317627,14.396737,1.005164],
    [-8823.878906,498.866760,14.330313,1.723804],
    [-8828.484375,506.462677,14.330364,1.943715],
    [-8819.233398,515.458191,15.007284,0.647808],
    [-8804.708008,505.492035,14.375703,0.883424],
    [-8790.273438,510.663055,14.409939,0.679220],
    [-8776.898438,521.194031,14.682390,2.466001],
    [-8722.314453,536.049622,14.854630,0.282594],
    [-8719.441406,528.397156,14.944528,0.706709],
    [-8704.195312,536.767639,14.436216,1.912295],
    [-8711.902344,564.949097,14.368315,2.045813],
    [-8713.888672,577.805725,14.353796,2.489563],
    [-8699.975586,584.444397,14.546739,6.220205],
    [-8689.960938,576.150452,14.437631,0.274740],
    [-8644.902344,567.102417,14.942634,6.090614],
    [-8639.981445,561.040161,16.008675,0.694928],
    [-8631.403320,573.218689,14.538828,4.888956],
    [-8667.298828,511.800629,14.344629,4.500183],
    [-8678.196289,508.583008,14.343974,5.104938],
    [-8674.153320,498.729126,14.756707,0.145147],
    [-8693.371094,468.656433,15.646541,3.636244],
    [-8703.046875,456.351837,14.439723,3.636244],
    [-8661.903320,410.031403,14.386001,5.745036],
    [-8654.479492,396.591034,14.389195,0.412180],
    [-8626.842773,389.308319,14.344949,6.259470],
    [-8609.418945,385.915955,14.330801,5.674348],
    [-8634.870117,358.514008,14.891694,3.479163],
    [-8663.549805,341.624817,14.574187,4.519812],
    [-8656.732422,329.720398,14.736123,3.714779],
    [-8678.509766,282.864868,9.357816,5.623295],
    [-8656.627930,268.987427,5.440391,5.623295],
    [-8682.282227,229.184723,5.101748,5.320920],
    [-8665.247070,193.494644,6.834807,4.209587],
    [-8619.822266,173.886902,15.189832,0.710629],
    [-8565.896484,235.991653,14.499530,5.057808],
    [-8534.358398,215.361557,17.876917,6.082753],
    [-8493.674805,176.925690,12.623135,5.587956],
    [-8484.403320,178.279068,12.765023,5.580104],
    [-8452.666016,196.519913,20.410664,0.926618],
    [-8524.039062,91.092819,25.066723,5.069595]],60)

//Normal Creature Spawns
export let Zone3RareCreature2 = std.CreatureTemplates.create(MODNAME,'zone3rarecreature2',3271)
Zone3RareCreature2.Name.enGB.set('Tyde Windsage')
Zone3RareCreature2.Rank.setRare()
Zone3RareCreature2.AIName.SmartAI()
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,3,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(15000).event_param3.set(20000).event_param4.set(25000).action_type.set(11).action_param1.set(50257).target_type.set(2).comment.set('Scalding Blast')
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,4,0).event_type.set(0).event_chance.set(100).event_param1.set(5000).event_param2.set(7000).event_param3.set(8000).event_param4.set(10000).action_type.set(11).action_param1.set(50303).target_type.set(2).comment.set('SwineFlu')
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,5,0).event_type.set(0).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(50328).target_type.set(2).comment.set('Leeching Poison')
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(50347).target_type.set(1).comment.set('Rush')
Zone3RareCreature2.DamageSchool.setNormal()
Zone3RareCreature2.Stats.ArmorMod.set(5)
Zone3RareCreature2.Stats.DamageMod.set(50)
Zone3RareCreature2.Stats.HealthMod.set(35)
Zone3RareCreature2.Stats.ManaMod.set(3)
Zone3RareCreature2.Stats.ExperienceMod.set(10)
export let Zone3RareCreature2Loot = Zone3RareCreature2.NormalLoot //Copy Avian Loot
spawnMultipleNPCWithTimer(Zone3RareCreature2.ID,0,0,[
        [-8610.512695,181.409393,15.189332,0.007321],],300)