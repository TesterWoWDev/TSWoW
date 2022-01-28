/*Boss 1 : Agnar Steelwinter
Type : Orc Shaman
Health : 29000
Abilities : 
	1. Flame Shock - No cast time, Instant 75 + 45 per 3 seconds for 20 seconds.
	2. Lightning Bolt - 2 second cast time, 185 damage
	3. Chain Lighting - 3 second cast time, 315 damage chain, only target players
	4. Healing Wave - Interruptable, 5 second cast time, heals for 7500.
	
Boss 2 : Warglow Firehammer
Type : Tauren Warrior
Health : 32000
Abilities : 
	1. Mortal Strike - 220 damage + 25% reduced healing
	2. Destructive Slam - 250 damage
	3. Bladestorm - Interruptable, 5 second cast time, 750 damage per second.
	4. Call Guards - 2 second cast time, summons 2 additional guards to join the fight

Boss 3 : Beloved Grong
Type : Earthborer
Health : 26750
Abilities : 
	1. Acid Wretch - interruptable, 2 second cast time, 100 damage + 100 per second for 10 seconds
	2. Venom Pool - interruptable, 3 second cast time, 250 damage + 300 per second when standing in pool, lasts until boss dies
	3. Rumble - interruptable, channeled for 8 seconds, 750 damage to all players every second for 8 seconds
	4. Melt Armor - 75 damage + reduced armor by 10%, stacks to 5

Boss 4 : Magnar Crucio
Type : Undead Mage
Health : 74560
Abilities : 
    1. Magnetize - 5 second cast time, uninterruptable, pulls all players to magnar and deals 1250 damage.
    2. Energize - 3 second cast time, deals 275 damage + increases nature damage taken by 1% (lasts 15 seconds)
    3. Danger Zone - 10 second cast time, only target players, uninterruptable, deals 5000 damage to all in 20 yards.
    4. Fulmination - target random player, increase their damage dealt by 25% and increase the damage Magnar deals by 25%
    5. Overload - 5 second cast time, uninterruptable, hit all players for 1500 damage
    6. Execution - 10 second cast time, interruptable, deals 10,000 damage to all players
*/

import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"






export let TorghastBoss1 = std.CreatureTemplates.create(MODNAME,'torghastboss1',3276)
TorghastBoss1.Models.clearAll()
TorghastBoss1.Models.addIds(19521)
TorghastBoss1.Name.enGB.set('Agnar Steelwinter')
TorghastBoss1.Scale.set(2)
TorghastBoss1.FactionTemplate.set(48)
TorghastBoss1.Level.set(23,23)
TorghastBoss1.Rank.BOSS.set()
TorghastBoss1.AIName.SmartAI()

TorghastBoss1.Scripts.onUpdateIc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setCreateTimedEvent(0,0,0,11000,15000,100)
    script.Action.setCreateTimedEvent(1,0,0,3000,7000,100)
    script.Action.setCreateTimedEvent(2,0,0,5000,7000,100)
    script.Action.setCreateTimedEvent(3,0,0,5000,7000,100)
})
TorghastBoss1.Scripts.onUpdateOoc(0,0,0,0,script=>{
    script.row.event_flags.set(1)
    script.Action.setRemoveTimedEvent(0)
    script.Action.setRemoveTimedEvent(1)
    script.Action.setRemoveTimedEvent(2)
    script.Action.setRemoveTimedEvent(3)
})

TorghastBoss1.Scripts.onTimedEventTriggered(0,script=>{
        script.Target.setVictim()
        script.Action.setCast(52870,32,7)
    })
    TorghastBoss1.Scripts.onTimedEventTriggered(1,script=>{
        script.Target.setVictim()
        script.Action.setCast(52873,2,7)
    })
    TorghastBoss1.Scripts.onTimedEventTriggered(2,script=>{
        script.Target.setVictim()
        script.Action.setCast(52905,2,7)
    })
    TorghastBoss1.Scripts.onTimedEventTriggered(3,script=>{
        script.Target.setVictim()
        script.Action.setCast(52943,2,7)
    })

TorghastBoss1.DamageSchool.Normal.set()
TorghastBoss1.Stats.ArmorMod.set(150)
TorghastBoss1.Stats.DamageMod.set(175)
TorghastBoss1.Stats.HealthMod.set(150)
TorghastBoss1.Stats.ManaMod.set(165)
TorghastBoss1.Stats.ExperienceMod.set(10)
export let TorghastBoss1Loot = TorghastBoss1.NormalLoot