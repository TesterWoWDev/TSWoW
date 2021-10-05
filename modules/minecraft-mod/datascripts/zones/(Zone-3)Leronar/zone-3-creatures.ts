import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { SQL_creature_template } from "wotlkdata/sql/types/creature_template"
import { spawnMultipleNPCWithTimer } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

let broadcastindex = 101000

export let ChainLightning = std.Spells.create(MODNAME,'chainlightning-spell',10605)
export let ShockLightning = std.Spells.create(MODNAME,'shocklightning-spell',26415)
export let Thunderstorm = std.Spells.create(MODNAME,'thunderstorm-spell',51490)

export let VoidStrike = std.Spells.create(MODNAME,'voidstrike-spell',52633)
export let Concuss = std.Spells.create(MODNAME,'concuss-spell',52719)
export let Destroy = std.Spells.create(MODNAME,'destroy-spell',52771)

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
Zone3Creature1.Stats.ExperienceMod.set(1)
Zone3Creature1.Stats.HealthMod.set(30)
Zone3Creature1.Stats.ManaMod.set(10)
SQL_creature_template.add(Zone3Creature1.ID).ExperienceModifier.set(7)
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
    Zone3Creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    Zone3Creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    Zone3Creature2.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(VoidStrike.ID,2,7)
    Zone3Creature2.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(Destroy.ID,2,7)
    Zone3Creature2.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Concuss.ID,2,7)
//End of Spells
Zone3Creature2.MovementType.setRandomMovement()
Zone3Creature2.Level.set(7,9)
Zone3Creature2.FactionTemplate.set(48)
Zone3Creature2.DamageSchool.setNormal()
Zone3Creature2.Stats.ArmorMod.set(5)
Zone3Creature2.Stats.DamageMod.set(30)
Zone3Creature2.Stats.ExperienceMod.set(1)
Zone3Creature2.Stats.HealthMod.set(30)
Zone3Creature2.Stats.ManaMod.set(10)
SQL_creature_template.add(Zone3Creature2.ID).ExperienceModifier.set(7)
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
Zone3Creature3.Stats.ExperienceMod.set(1)
Zone3Creature3.Stats.HealthMod.set(30)
Zone3Creature3.Stats.ManaMod.set(10)
SQL_creature_template.add(Zone3Creature3.ID).ExperienceModifier.set(7)
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
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,5,0).event_type.set(1).event_chance.set(100).event_param1.set(13000).event_param2.set(18000).event_param3.set(60000).event_param4.set(75000).action_type.set(11).action_param1.set(52905).target_type.set(2).comment.set('Thunderbolt')
SQL.smart_scripts.add(Zone3RareCreature1.ID,0,6,0).event_type.set(1).event_chance.set(100).event_param1.set(1000).event_param2.set(1000).event_param3.set(100000).event_param4.set(100000).action_type.set(11).action_param1.set(52943).target_type.set(1).comment.set('Lightning Whirl')

Zone3RareCreature1.DamageSchool.setNormal()
Zone3RareCreature1.Stats.ArmorMod.set(5)
Zone3RareCreature1.Stats.DamageMod.set(50)
Zone3RareCreature1.Stats.ExperienceMod.set(10)
Zone3RareCreature1.Stats.HealthMod.set(35)
Zone3RareCreature1.Stats.ManaMod.set(3)
SQL_creature_template.add(Zone3RareCreature1.ID).ExperienceModifier.set(10)
export let Zone3RareCreature1Loot = Zone3RareCreature1.NormalLoot
spawnMultipleNPCWithTimer(Zone3RareCreature1.ID,15,0,[
        [-8785.416016,489.123932,14.433434,5.704753],],300)