import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { BossDummySpell1 } from "./invasion-creature-spells"

export let InvasionLargeMinion02 = std.CreatureTemplates.create(MODNAME,'invasion-largeminion-01',299)
InvasionLargeMinion02.Name.enGB.set('Mistress of Torment')
InvasionLargeMinion02.Models.clearAll()
InvasionLargeMinion02.Models.addIds(29442,18419)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    InvasionLargeMinion02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    InvasionLargeMinion02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    InvasionLargeMinion02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    InvasionLargeMinion02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    InvasionLargeMinion02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    InvasionLargeMinion02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    InvasionLargeMinion02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(BossDummySpell1.ID,2,7)
    InvasionLargeMinion02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(BossDummySpell1.ID,2,7)
    InvasionLargeMinion02.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(BossDummySpell1.ID,2,7)
//End of Spells
InvasionLargeMinion02.MovementType.setRandomMovement()
InvasionLargeMinion02.Level.set(3,8)
InvasionLargeMinion02.FactionTemplate.set(48)
InvasionLargeMinion02.DamageSchool.setNormal()
InvasionLargeMinion02.Stats.ArmorMod.set(8)
InvasionLargeMinion02.Stats.DamageMod.set(6)
InvasionLargeMinion02.Stats.ExperienceMod.set(5)
InvasionLargeMinion02.Stats.HealthMod.set(8)
InvasionLargeMinion02.Stats.ManaMod.set(5)
export let InvasionLargeMinion02Loot = InvasionLargeMinion02.NormalLoot