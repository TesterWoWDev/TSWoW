
import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { MODNAME } from "../../modname"
import { InvasionFrostArmor, InvasionFireBlast, InvasionFrostNova, InvasionFrostbolt, InvasionBoarCharge, InvasionStrike, InvasionWhirlwind } from "./invasion-creature-spells"

export let InvasionMinion01 = std.CreatureTemplates.create(MODNAME,'invasion-minion-01',299)
InvasionMinion01.Name.enGB.set('Fiendish Impling')
InvasionMinion01.Models.clearAll()
InvasionMinion01.Models.addIds(16890)
//Spells
    InvasionMinion01.Scripts.onUpdateOoc(0,0,0,0).Target.setSelf().Action.setCast(InvasionFrostArmor.ID,0,0).row.event_flags.set(1)
    //timed calls
    InvasionMinion01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,8000,13000,100).row.event_flags.set(1)
    InvasionMinion01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    InvasionMinion01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,13000,15000,100).row.event_flags.set(1)
    InvasionMinion01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    InvasionMinion01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,3000,3000,100).row.event_flags.set(1)
    InvasionMinion01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    InvasionMinion01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(InvasionFireBlast.ID,0,0)
    InvasionMinion01.Scripts.onTimedEventTriggered(1).Target.setCreatureRange(0,0,40,1).Action.setCast(InvasionFrostNova.ID,2,7)
    InvasionMinion01.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(InvasionFrostbolt.ID,0,0)
//End of Spells
InvasionMinion01.Scale.set(0.5)
InvasionMinion01.MovementType.setRandomMovement()
InvasionMinion01.Level.set(2,4)
InvasionMinion01.FactionTemplate.set(48)
InvasionMinion01.DamageSchool.setNormal()
InvasionMinion01.Stats.ArmorMod.set(5)
InvasionMinion01.Stats.DamageMod.set(4)
InvasionMinion01.Stats.ExperienceMod.set(3)
InvasionMinion01.Stats.HealthMod.set(3)
InvasionMinion01.Stats.ManaMod.set(4)
export let InvasionMinion01Loot = InvasionMinion01.NormalLoot

export let InvasionMinion02 = std.CreatureTemplates.create(MODNAME,'invasion-largeminion-01',299)
InvasionMinion02.Name.enGB.set('Legion Hound')
InvasionMinion02.Models.clearAll()
InvasionMinion02.Models.addIds(7949)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    InvasionMinion02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    InvasionMinion02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    InvasionMinion02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    InvasionMinion02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    InvasionMinion02.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    InvasionMinion02.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    InvasionMinion02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(InvasionStrike.ID,2,7)
    InvasionMinion02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(InvasionBoarCharge.ID,2,7)
    InvasionMinion02.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(InvasionWhirlwind.ID,2,7)
//End of Spells
InvasionMinion02.MovementType.setRandomMovement()
InvasionMinion02.Level.set(4,4)
InvasionMinion02.FactionTemplate.set(48)
InvasionMinion02.DamageSchool.setNormal()
InvasionMinion02.Stats.ArmorMod.set(5)
InvasionMinion02.Stats.DamageMod.set(4)
InvasionMinion02.Stats.ExperienceMod.set(5)
InvasionMinion02.Stats.HealthMod.set(3)
InvasionMinion02.Stats.ManaMod.set(2)
export let InvasionMinion02Loot = InvasionMinion02.NormalLoot


export let InvasionLargeMinion01 = std.CreatureTemplates.create(MODNAME,'invasion-largeminion-02',299)
InvasionLargeMinion01.Name.enGB.set('Felguard')
InvasionLargeMinion01.Models.clearAll()
InvasionLargeMinion01.Models.addIds(5047,7970,5048,9017)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    InvasionLargeMinion01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    InvasionLargeMinion01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    InvasionLargeMinion01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    InvasionLargeMinion01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    InvasionLargeMinion01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    InvasionLargeMinion01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    InvasionLargeMinion01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(InvasionStrike.ID,2,7)
    InvasionLargeMinion01.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(InvasionBoarCharge.ID,2,7)
    InvasionLargeMinion01.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(InvasionWhirlwind.ID,2,7)
//End of Spells
InvasionLargeMinion01.MovementType.setRandomMovement()
InvasionLargeMinion01.Level.set(3,8)
InvasionLargeMinion01.FactionTemplate.set(48)
InvasionLargeMinion01.DamageSchool.setNormal()
InvasionLargeMinion01.Stats.ArmorMod.set(8)
InvasionLargeMinion01.Stats.DamageMod.set(6)
InvasionLargeMinion01.Stats.ExperienceMod.set(5)
InvasionLargeMinion01.Stats.HealthMod.set(8)
InvasionLargeMinion01.Stats.ManaMod.set(5)
SQL.creature_equip_template.add(InvasionLargeMinion01.ID,1).ItemID1.set(32332)
SQL.creature_equip_template.add(InvasionLargeMinion01.ID,2).ItemID1.set(32369)
SQL.creature_equip_template.add(InvasionLargeMinion01.ID,3).ItemID1.set(30902)
export let InvasionLargeMinion01Loot = InvasionLargeMinion01.NormalLoot


export let InvasionLargeMinion02 = std.CreatureTemplates.create(MODNAME,'invasion-largeminion-03',299)
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
    InvasionLargeMinion02.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(InvasionStrike.ID,2,7)
    InvasionLargeMinion02.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(InvasionBoarCharge.ID,2,7)
    InvasionLargeMinion02.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(InvasionWhirlwind.ID,2,7)
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


