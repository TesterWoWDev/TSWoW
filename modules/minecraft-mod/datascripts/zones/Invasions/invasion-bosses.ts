import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { MODNAME } from "../../modname"
import { BossDummySpell1, InvasionBossStrike, InvasionWhirlwind } from "./invasion-creature-spells"

export let InvasionBoss01 = std.CreatureTemplates.create(MODNAME,'invasionboss01',299)
InvasionBoss01.Name.enGB.set('Galitrax the Destroyer')
InvasionBoss01.Models.clearAll()
InvasionBoss01.Models.addIds(18527)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    InvasionBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    InvasionBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    InvasionBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    InvasionBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    InvasionBoss01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    InvasionBoss01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    InvasionBoss01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(BossDummySpell1.ID,2,7)
    InvasionBoss01.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(InvasionBossStrike.ID,2,7)
    InvasionBoss01.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(InvasionWhirlwind.ID,2,7)
//End of Spells
InvasionBoss01.MovementType.setRandomMovement()
InvasionBoss01.Level.set(3,8)
InvasionBoss01.FactionTemplate.set(48)
InvasionBoss01.DamageSchool.setNormal()
InvasionBoss01.Stats.ArmorMod.set(8)
InvasionBoss01.Stats.DamageMod.set(60)
InvasionBoss01.Stats.ExperienceMod.set(5)
InvasionBoss01.Stats.HealthMod.set(80)
InvasionBoss01.Stats.ManaMod.set(5)
SQL.creature_equip_template.add(InvasionBoss01.ID,1).ItemID1.set(32837)
SQL.creature_equip_template.add(InvasionBoss01.ID,1).ItemID2.set(32838)
export let InvasionBoss01Loot = InvasionBoss01.NormalLoot

export let InvasionBossInvisibleAdd01 = std.CreatureTemplates.create(MODNAME,'invasion-invisible-01',30616)
InvasionBossInvisibleAdd01.Name.enGB.set('Flame Wave Creature')
InvasionBossInvisibleAdd01.Scale.set(0.5)
InvasionBossInvisibleAdd01.FactionTemplate.set(35)