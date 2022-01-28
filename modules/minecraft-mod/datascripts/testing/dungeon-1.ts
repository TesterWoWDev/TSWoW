/*
Boss 2 : Warglow Firehammer             23963 Orc in Warrior t3
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
*/

import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"



/*Boss 1 : Agnar Steelwinter
Type : Orc Shaman
Health : 29000
Abilities : 
    1. Flame Shock - No cast time, Instant 75 + 45 per 3 seconds for 20 seconds.
    2. Lightning Bolt - 2 second cast time, 185 damage
    3. Chain Lighting - 3 second cast time, 315 damage chain, only target players
    4. Healing Wave - Interruptable, 5 second cast time, heals for 7500.
*/

export let Boss1FlameShock1 = std.Spells.create(MODNAME, 'boss1flameshock1-spell', 8050)
Boss1FlameShock1.Name.enGB.set('Crackling Flames')
Boss1FlameShock1.AuraDescription.enGB.set('$s2 Fire damage every $t2 seconds.')
Boss1FlameShock1.Description.enGB.set('Instantly sears the target with fire, causing $s1 Fire damage immediately and $o2 Fire damage over $d.')
Boss1FlameShock1.Effects.get(0).BasePoints.set(74)
Boss1FlameShock1.Effects.get(0).DieSides.set(1)
Boss1FlameShock1.Effects.get(0).PointsPerLevel.set(0)
Boss1FlameShock1.Effects.get(1).BasePoints.set(44)
Boss1FlameShock1.Effects.get(1).DieSides.set(1)
Boss1FlameShock1.Effects.get(1).ChainAmplitude.set(3000)
Boss1FlameShock1.Duration.modRefCopy(val => {
    val.set(7000, 0, 0)
})
Boss1FlameShock1.Cooldown.set(7000, 0, 0, 0)

export let Boss1LightningBolt1 = std.Spells.create(MODNAME, 'boss1lightningbolt1-spell', 8246)
Boss1LightningBolt1.Name.enGB.set('Lightning Strike')
Boss1LightningBolt1.Description.enGB.set('Blasts an enemy with lightning for $s1 Nature damage.')
Boss1LightningBolt1.Effects.get(0).BasePoints.set(184)
Boss1LightningBolt1.Effects.get(0).DieSides.set(1)
Boss1LightningBolt1.Effects.get(0).PointsPerLevel.set(0)
Boss1LightningBolt1.CastTime.set(2500)

export let Boss1ChainLightning1 = std.Spells.create(MODNAME, 'boss1chainlightning1-spell', 16033)
Boss1ChainLightning1.Name.enGB.set('Lightning Rip')
Boss1ChainLightning1.Description.enGB.set('Chain lightning rips through 10 targets dealing $s1 Nature damage.')
Boss1ChainLightning1.Effects.get(0).BasePoints.set(314)
Boss1ChainLightning1.Effects.get(0).DieSides.set(1)
Boss1ChainLightning1.Effects.get(0).PointsPerLevel.set(0)
Boss1ChainLightning1.Attributes.ONLY_TARGET_PLAYERS.set(1)
Boss1ChainLightning1.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Boss1ChainLightning1.Attributes.CANT_BE_REFLECTED.set(1)
Boss1ChainLightning1.InterruptFlags.remove("ON_MOVEMENT")
Boss1ChainLightning1.InterruptFlags.remove("ON_INTERRUPT_CAST")
Boss1ChainLightning1.InterruptFlags.remove("ON_PUSHBACK")

export let Boss1HealingWave1 = std.Spells.create(MODNAME, 'boss1healingwave1-spell', 16033)
Boss1HealingWave1.Name.enGB.set('Restore Life')
Boss1HealingWave1.Description.enGB.set('Heals a friendly target, restoring $s1 health.')
Boss1HealingWave1.Effects.get(0).BasePoints.set(7499)
Boss1HealingWave1.Effects.get(0).DieSides.set(1)
Boss1HealingWave1.Effects.get(0).PointsPerLevel.set(0)
Boss1HealingWave1.Effects.get(0).ImplicitTargetA.UNIT_CASTER.set()
Boss1HealingWave1.CastTime.set(5000)

export let TorghastBoss1 = std.CreatureTemplates.create(MODNAME, 'torghastboss1', 3276)
TorghastBoss1.Models.clearAll()
TorghastBoss1.Models.addIds(19521)
TorghastBoss1.Name.enGB.set('Agnar Steelwinter')
TorghastBoss1.Scale.set(2)
TorghastBoss1.FactionTemplate.set(48)
TorghastBoss1.Level.set(23, 23)
TorghastBoss1.Rank.BOSS.set()
TorghastBoss1.AIName.SmartAI()

TorghastBoss1.Scripts.onUpdateIc(0, 0, 0, 0, script => {
    script.row.event_flags.set(1)
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100)
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100)
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100)
    script.Action.setCreateTimedEvent(3, 0, 0, 5000, 7000, 100)
})
TorghastBoss1.Scripts.onUpdateOoc(0, 0, 0, 0, script => {
    script.row.event_flags.set(1)
    script.Action.setRemoveTimedEvent(0)
    script.Action.setRemoveTimedEvent(1)
    script.Action.setRemoveTimedEvent(2)
    script.Action.setRemoveTimedEvent(3)
})

TorghastBoss1.Scripts.onTimedEventTriggered(0, script => {
    script.Target.setVictim()
    script.Action.setCast(Boss1FlameShock1.ID, 32, 7)
})
TorghastBoss1.Scripts.onTimedEventTriggered(1, script => {
    script.Target.setVictim()
    script.Action.setCast(Boss1ChainLightning1.ID, 2, 7)
})
TorghastBoss1.Scripts.onTimedEventTriggered(2, script => {
    script.Target.setVictim()
    script.Action.setCast(Boss1LightningBolt1.ID, 2, 7)
})
TorghastBoss1.Scripts.onTimedEventTriggered(3, script => {
    script.Target.setVictim()
    script.Action.setCast(Boss1HealingWave1.ID, 2, 7)
})

TorghastBoss1.DamageSchool.Normal.set()
TorghastBoss1.Stats.ArmorMod.set(150)
TorghastBoss1.Stats.DamageMod.set(175)
TorghastBoss1.Stats.HealthMod.set(150)
TorghastBoss1.Stats.ManaMod.set(165)
TorghastBoss1.Stats.ExperienceMod.set(10)
export let TorghastBoss1Loot = TorghastBoss1.NormalLoot


/*Boss 5 : Magnar Crucio
Type : Undead Mage
Health : 74560
Abilities : 
    1. Magnetize - 5 second cast time, uninterruptable, pulls all players to magnar and deals 1250 damage.
        - Will cast Danger Zone 2 seconds after Magnetize
    2. Energize - 3 second cast time, deals 275 damage + increases nature damage taken by 1% (lasts 15 seconds)
    3. Danger Zone - 10 second cast time, only target players, uninterruptable, deals 5000 damage to all in 20 yards.
        - Guarantee cast after Magnetize
    4. Fulmination - target random player, increase their damage dealt by 25% and increase the damage Magnar deals by 25%
    5. Overload - 5 second cast time, uninterruptable, hit all players for 1500 damage
    6. Execution - 10 second cast time, interruptable, deals 10,000 damage to all players
*/
export let Boss5Magnetize1 = std.Spells.create(MODNAME, 'boss5magnetize1-spell', 50770)
Boss5Magnetize1.Name.enGB.set('Magnetize')
Boss5Magnetize1.AuraDescription.enGB.set('Teleports all nearby enemy targets to the caster.')
Boss5Magnetize1.CastTime.set(5000)
Boss5Magnetize1.Effects.get(0).Radius.set(100)
Boss5Magnetize1.Attributes.ONLY_TARGET_PLAYERS.set(1)
Boss5Magnetize1.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Boss5Magnetize1.Attributes.CANT_BE_REFLECTED.set(1)
Boss5Magnetize1.Attributes.UNAFFECTED_BY_INVULNERABILITY.set(1)
Boss5Magnetize1.Attributes.UNAFFECTED_BY_SCHOOL_IMMUNE.set(1)
Boss5Magnetize1.Attributes.UNAFFECTED_BY_SCHOOL_IMMUNITY.set(1)

export let Boss5Energize1 = std.Spells.create(MODNAME, 'boss5energize1-spell', 8050)
Boss5Energize1.Name.enGB.set('Energized')
Boss5Energize1.Visual.set(11416)
Boss5Energize1.Description.enGB.set('Electrocute your target dealing 375 damage immediately and increasing the damage they take by 1%. Lasts $d.')
Boss5Energize1.Effects.get(0).BasePoints.set(274)
Boss5Energize1.Effects.get(0).DieSides.set(1)
Boss5Energize1.Effects.get(0).PointsPerLevel.set(0)
Boss5Energize1.Effects.get(1).Type.APPLY_AURA.set()
Boss5Energize1.Effects.get(1).BasePoints.set(0)
Boss5Energize1.Effects.get(1).DieSides.set(1)
Boss5Energize1.Effects.get(1).Aura.MOD_DAMAGE_PERCENT_TAKEN.set()
Boss5Energize1.Effects.get(1).ChainAmplitude.set(0)
Boss5Energize1.CastTime.set(3000)
Boss5Energize1.Duration.set(15000)

export let Boss5Nuke1 = std.Spells.create(MODNAME, 'boss5nuke1-spell', 8050)
Boss5Nuke1.Name.enGB.set('Danger Zone!!!')
Boss5Nuke1.Description.enGB.set('Inflicts $s1 Arcane damage to enemies.')
Boss5Nuke1.Effects.get(0).BasePoints.set(4999)
Boss5Nuke1.Effects.get(0).DieSides.set(1)
Boss5Nuke1.Effects.get(0).PointsPerLevel.set(0)
Boss5Nuke1.Effects.get(0).Radius.set(20)
Boss5Nuke1.Duration.set(15000)

export let Boss5Fulmination1PlayerSpell = std.Spells.create(MODNAME, 'boss5fulmination1playerspell-spell', 71188)
Boss5Fulmination1PlayerSpell.Name.enGB.set('Fulmination')
Boss5Fulmination1PlayerSpell.Description.enGB.set('Damage done increased by $s1%.')
Boss5Fulmination1PlayerSpell.AuraDescription.enGB.set('Damage done increased by $s1%. Taking $s2 Arcane Damage every 2 seconds.')
Boss5Fulmination1PlayerSpell.Effects.get(0).BasePoints.set(24)
Boss5Fulmination1PlayerSpell.Effects.get(0).DieSides.set(1)
Boss5Fulmination1PlayerSpell.Effects.get(1).Type.APPLY_AURA.set()
Boss5Fulmination1PlayerSpell.Effects.get(1).BasePoints.set(124)
Boss5Fulmination1PlayerSpell.Effects.get(1).DieSides.set(1)
Boss5Fulmination1PlayerSpell.Effects.get(1).Aura.PERIODIC_DAMAGE.set()
Boss5Fulmination1PlayerSpell.Effects.get(1).ImplicitTargetA.UNIT_CASTER.set()
Boss5Fulmination1PlayerSpell.Effects.get(1).ChainAmplitude.set(2000)
Boss5Fulmination1PlayerSpell.Attributes.IS_NEGATIVE.set(1)

export let Boss5Fulmination1 = std.Spells.create(MODNAME, 'boss5fulmination1-spell', 71188)
Boss5Fulmination1.Name.enGB.set('Fulmination')
Boss5Fulmination1.Description.enGB.set('Damage done increased by $s1%.')
Boss5Fulmination1.AuraDescription.enGB.set('Damage done increased by $s1%.')
Boss5Fulmination1.Effects.get(0).BasePoints.set(24)
Boss5Fulmination1.Effects.get(0).DieSides.set(1)
//Boss5Fulmination1.Effects.get(1).Type.APPLY_AURA.set()
//Boss5Fulmination1.Effects.get(1).BasePoints.set(24)
//Boss5Fulmination1.Effects.get(1).DieSides.set(1)
//Boss5Fulmination1.Effects.get(1).Aura.MOD_DAMAGE_PERCENT_DONE.set()
//Boss5Fulmination1.Effects.get(1).ImplicitTargetA.UNIT_NEARBY_ENEMY.set()
//Boss5Fulmination1.Effects.get(1).Radius.set(100)
Boss5Fulmination1.Effects.get(1).Type.TRIGGER_SPELL.set()
Boss5Fulmination1.Effects.get(1).TriggerSpell.set(Boss5Fulmination1PlayerSpell.ID)
Boss5Fulmination1.Effects.get(1).ImplicitTargetA.UNIT_NEARBY_ENEMY.set()
Boss5Fulmination1.Effects.get(1).Radius.set(100)
Boss5Fulmination1.Effects.get(2).Type.NULL.set()
Boss5Fulmination1.CastTime.set(10000)

export let Boss5Overload1 = std.Spells.create(MODNAME, 'boss5overload1-spell', 51490)
Boss5Overload1.Name.enGB.set('Overload')
Boss5Overload1.Description.enGB.set('Inflicts $s1 Arcane damage to all enemies.')
Boss5Overload1.Effects.get(0).BasePoints.set(1499)
Boss5Overload1.Effects.get(0).DieSides.set(1)
Boss5Overload1.Effects.get(0).PointsPerLevel.set(0)
Boss5Overload1.Effects.get(0).Radius.set(50000)
Boss5Overload1.Effects.get(1).Type.NULL.set()
Boss5Overload1.Effects.get(2).Type.NULL.set()
Boss5Overload1.CastTime.set(5000)
Boss5Overload1.InterruptFlags.remove("ON_MOVEMENT")
Boss5Overload1.InterruptFlags.remove("ON_INTERRUPT_CAST")
Boss5Overload1.InterruptFlags.remove("ON_PUSHBACK")

export let Boss5Execution1 = std.Spells.create(MODNAME, 'boss5execution1-spell', 72350)
Boss5Execution1.Name.enGB.set('Execution')
Boss5Execution1.Description.enGB.set('Inflicts $s1 Arcane damage to all enemies.')
Boss5Execution1.Effects.get(1).BasePoints.set(9999)
Boss5Execution1.Effects.get(1).DieSides.set(1)
Boss5Execution1.Effects.get(1).PointsPerLevel.set(0)
Boss5Execution1.Effects.get(1).Radius.set(50000)
Boss5Execution1.Effects.get(0).Type.NULL.set()
Boss5Execution1.Effects.get(2).Type.NULL.set()
Boss5Execution1.CastTime.set(10000)

export let TorghastBoss5 = std.CreatureTemplates.create(MODNAME, 'torghastboss5', 3276)
TorghastBoss5.Models.clearAll()
TorghastBoss5.Models.addIds(22208)
TorghastBoss5.Name.enGB.set('Magnar Crucio')
TorghastBoss5.Scale.set(2)
TorghastBoss5.FactionTemplate.set(48)
TorghastBoss5.Level.set(26, 26)
TorghastBoss5.Rank.BOSS.set()
TorghastBoss5.UnitClass.MAGE.set()
TorghastBoss5.AIName.SmartAI()

// TorghastBoss5.InlineScripts.OnHitBySpell((creature,caster,spellInfo)=>{
//     if(spellInfo.ID == braiserBurn){//remember GetID for braiserBurn
//         creature.SetHealth(creature.GetMaxHealth()*.9)
//     }
// })

TorghastBoss5.InlineScripts.OnJustEnteredCombat((creature, target) => {
    const energize = GetID("Spell", "minecraft-mod", "boss5energize1-spell");
    const fulmination = GetID("Spell", "minecraft-mod", "boss5fulmination1-spell");
    const magnetize = GetID("Spell", "minecraft-mod", "boss5magnetize1-spell");
    const nuke = GetID("Spell", "minecraft-mod", "boss5nuke1-spell");
    const overload = GetID("Spell", "minecraft-mod", "boss5overload1-spell");
    const execution = GetID("Spell", "minecraft-mod", "boss5execution1-spell");
    creature.AddTimer('event1', 7000, -1, (timer, entity, del, can) => {
        let self = entity.ToCreature()
        let target = self.GetVictim()
        self.CastSpell(target, energize, false)                 // Energize Dot
    })
    creature.AddTimer('event2', 12000, -1, (timer, entity, del, can) => {
        let self = entity.ToCreature()
        let target = self.GetVictim()
        self.CastSpell(target, fulmination, false)                 //Fulmination Buff/Dot
    })
    creature.AddTimer('event3', 10000, -1, (timer, entity, del, can) => {
        let self = entity.ToCreature()
        let target = self.GetVictim()
        self.CastSpell(target, magnetize, false)                 //Magnetize Mass Pull
        creature.AddTimer('event3.1', 2000, 0, (timer, entity, del, can) => {
            let self = entity.ToCreature()
            let target = self.GetVictim()
            self.CastSpell(target, nuke, false)             //Danger Zone Mass AOE (Interruptable)
        })
        creature.AddTimer('event4', 25000, -1, (timer, entity, del, can) => {
            let self = entity.ToCreature()
            let target = self.GetVictim()
            self.CastSpell(target, overload, false)             //Overload Mass AOE (Uninterruptable)
        })
        creature.AddTimer('event5', 32500, -1, (timer, entity, del, can) => {
            let self = entity.ToCreature()
            let target = self.GetVictim()
            self.CastSpell(target, execution, false)             //Execution 1 Shot (Interruptable)
        })
    })
})

TorghastBoss5.InlineScripts.OnDeath((creature, killer) => {
    creature.RemoveTimer('event1')
    creature.RemoveTimer('event2')
    creature.RemoveTimer('event3')
    creature.RemoveTimer('event3.1')
    creature.RemoveTimer('event4')
    creature.RemoveTimer('event5')
})

TorghastBoss5.InlineScripts.OnReachedHome((creature) => {
    creature.RemoveTimer('event1')
    creature.RemoveTimer('event2')
    creature.RemoveTimer('event3')
    creature.RemoveTimer('event3.1')
    creature.RemoveTimer('event4')
    creature.RemoveTimer('event5')
})

TorghastBoss5.DamageSchool.Normal.set()
TorghastBoss5.Stats.ArmorMod.set(250)
TorghastBoss5.Stats.DamageMod.set(350)
TorghastBoss5.Stats.HealthMod.set(250)
TorghastBoss5.Stats.ManaMod.set(300)
TorghastBoss5.Stats.ExperienceMod.set(10)
export let TorghastBoss5Loot = TorghastBoss5.NormalLoot