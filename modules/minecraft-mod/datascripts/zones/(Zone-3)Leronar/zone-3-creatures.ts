import { std } from "tswow-stdlib"
import { spawnMultipleNPCWithTimer } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

export let ChainLightning = std.Spells.create(MODNAME,'chainlightning-spell',10605)
export let ShockLightning = std.Spells.create(MODNAME,'shocklightning-spell',26415)
export let Thunderstorm = std.Spells.create(MODNAME,'thunderstorm-spell',51490)

//Normal Creature Spawns
export let Zone3Creature1 = std.CreatureTemplates.create(MODNAME,'zone3creature1',3271)
Zone3Creature1.Name.enGB.set('Fenspindle Elementalist')
Zone3Creature1.Models.clearAll()
Zone3Creature1.Models.addIds(27976)
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
Zone3Creature1.Stats.DamageMod.set(10)
Zone3Creature1.Stats.ExperienceMod.set(1)
Zone3Creature1.Stats.HealthMod.set(6)
Zone3Creature1.Stats.ManaMod.set(10)
export let Zone3Creature1Loot = Zone3Creature1.NormalLoot
spawnMultipleNPCWithTimer(Zone3Creature1.ID,5,0,[
    
    [-8710.021484,-341.958008,14.851360,0.838924],],300)