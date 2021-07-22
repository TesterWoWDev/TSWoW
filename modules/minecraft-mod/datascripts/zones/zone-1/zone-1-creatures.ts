import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { MODNAME } from "../../modname"
import { Rank1Frostbolt, Rank1FireBlast, Rank1FrostArmor, Rank1FrostNova, Rank1BoarCharge, Rank1Strike, Rank1Bite, Rank1Gore, Rank1Whirlwind } from "./zone-1-creature-spells"


//Normal Creature Spawns
export let creature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature1',299)
creature1.Name.enGB.set('Bandit')
creature1.Models.clearAll()
creature1.Models.addIds(2357,2358)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    creature1.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    creature1.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    creature1.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(Rank1Strike.ID,2,7)
    creature1.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(Rank1BoarCharge.ID,2,7)
    creature1.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Rank1Whirlwind.ID,2,7)
//End of Spells
creature1.MovementType.setRandomMovement()
creature1.Level.set(1,2)
creature1.FactionTemplate.set(48)
creature1.DamageSchool.setNormal()
creature1.Stats.ArmorMod.set(1)
creature1.Stats.DamageMod.set(1)
creature1.Stats.ExperienceMod.set(1)
creature1.Stats.HealthMod.set(1)
creature1.Stats.ManaMod.set(1)
SQL.creature_equip_template.add(creature1.ID,1).ItemID1.set(25)
SQL.creature_equip_template.add(creature1.ID,2).ItemID1.set(869)
SQL.creature_equip_template.add(creature1.ID,3).ItemID1.set(1194)
export let creature1Loot = creature1.NormalLoot

export let creature2 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature2',299)
creature2.Name.enGB.set('Young Wolf')
creature2.Models.clearAll()
creature2.Models.addIds(903)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    creature2.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(Rank1Bite.ID,2,7)
    creature2.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Rank1Gore.ID,2,7)
//End of Spells
creature2.MovementType.setRandomMovement()
creature2.Level.set(2,2)
creature2.FactionTemplate.set(48)
creature2.DamageSchool.setNormal()
creature2.Stats.ArmorMod.set(1)
creature2.Stats.DamageMod.set(1)
creature2.Stats.ExperienceMod.set(1)
creature2.Stats.HealthMod.set(1)
creature2.Stats.ManaMod.set(1)
export let creature2Loot = creature2.NormalLoot

export let creature3 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature3',299)
creature3.Name.enGB.set('Wild Boar')
creature3.Models.clearAll()
creature3.Models.addIds(503,389,607,704)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    creature3.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    creature3.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    creature3.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    creature3.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    creature3.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    creature3.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    creature3.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(Rank1Bite.ID,2,7)
    creature3.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(Rank1BoarCharge.ID,2,7)
    creature3.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Rank1Gore.ID,2,7)
//End of Spells
creature3.MovementType.setRandomMovement()
creature3.Level.set(1,3)
creature3.DamageSchool.setNormal()
creature3.Stats.ArmorMod.set(1)
creature3.Stats.DamageMod.set(1)
creature3.Stats.ExperienceMod.set(1)
creature3.Stats.HealthMod.set(1)
creature3.Stats.ManaMod.set(1)
export let creature3Loot = creature3.NormalLoot

export let creature4 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature4',299)
creature4.Name.enGB.set('Kobold Foreman')
creature4.Models.clearAll()
creature4.Models.addIds(10913,365)
creature4.MovementType.setRandomMovement()
creature4.Level.set(2,3)
creature4.FactionTemplate.set(48)
creature4.DamageSchool.setNormal()
creature4.Stats.ArmorMod.set(1)
creature4.Stats.DamageMod.set(1)
creature4.Stats.ExperienceMod.set(1)
creature4.Stats.HealthMod.set(1)
creature4.Stats.ManaMod.set(1)
SQL.creature_equip_template.add(creature4.ID,1).ItemID1.set(23844)
SQL.creature_equip_template.add(creature4.ID,2).ItemID1.set(2410)
export let creature4Loot = creature4.NormalLoot

export let creature5 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature5',299)
creature5.Name.enGB.set('Kobold Miner')
creature5.Models.clearAll()
creature5.Models.addIds(373,139,163)
creature5.FactionTemplate.set(48)
creature5.MovementType.setRandomMovement()
creature5.Level.set(3,4)
creature5.DamageSchool.setNormal()
creature5.Stats.ArmorMod.set(1)
creature5.Stats.DamageMod.set(1)
creature5.Stats.ExperienceMod.set(1)
creature5.Stats.HealthMod.set(1)
creature5.Stats.ManaMod.set(1)
SQL.creature_equip_template.add(creature5.ID,1).ItemID1.set(2901)
export let creature5Loot = creature5.NormalLoot

export let creature6 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature6',299)
creature6.Name.enGB.set('Salty Murloc')
creature6.Models.clearAll()
creature6.Models.addIds(1305,1995,441)
creature6.MovementType.setRandomMovement()
creature6.Level.set(4,4)
creature6.FactionTemplate.set(48)
creature6.DamageSchool.setNormal()
creature6.Stats.ArmorMod.set(1)
creature6.Stats.DamageMod.set(1)
creature6.Stats.ExperienceMod.set(1)
creature6.Stats.HealthMod.set(1)
creature6.Stats.ManaMod.set(1)
SQL.creature_equip_template.add(creature6.ID,1).ItemID1.set(15220)
SQL.creature_equip_template.add(creature6.ID,2).ItemID1.set(33219)
SQL.creature_equip_template.add(creature6.ID,3).ItemID1.set(2011)
export let creature6Loot = creature6.NormalLoot

export let creature7 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature7',299)
creature7.Name.enGB.set('Murloc Wavebender')
creature7.Models.clearAll()
creature7.Models.addIds(983,1079,5293)
//Spells
    creature7.Scripts.onUpdateOoc(0,0,0,0).Target.setSelf().Action.setCast(Rank1FrostArmor.ID,0,0).row.event_flags.set(1)
    //timed calls
    creature7.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,8000,13000,100).row.event_flags.set(1)
    creature7.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    creature7.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,13000,15000,100).row.event_flags.set(1)
    creature7.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    creature7.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,3000,3000,100).row.event_flags.set(1)
    creature7.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    creature7.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(Rank1FireBlast.ID,0,0)
    creature7.Scripts.onTimedEventTriggered(1).Target.setCreatureRange(0,0,40,1).Action.setCast(Rank1FrostNova.ID,2,7)
    creature7.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Rank1Frostbolt.ID,0,0)
//End of Spells
creature7.Scale.set(1)
creature7.MovementType.setRandomMovement()
creature7.Level.set(4,5)
creature7.FactionTemplate.set(48)
creature7.DamageSchool.setNormal()
creature7.Stats.ArmorMod.set(1)
creature7.Stats.DamageMod.set(1)
creature7.Stats.ExperienceMod.set(1)
creature7.Stats.HealthMod.set(1)
creature7.Stats.ManaMod.set(1)
SQL.creature_equip_template.add(creature7.ID,1).ItemID1.set(14083).ItemID2.set(9452).ItemID3.set(18082)
export let creature7Loot = creature7.NormalLoot

export let creature8 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature8',299)
creature8.Name.enGB.set('Placeholder Creature')
creature8.Models.clearAll()
creature8.Models.addIds(2357,2358)
creature8.MovementType.setRandomMovement()
creature8.Level.set(1,2)
creature8.DamageSchool.setNormal()
creature8.Stats.ArmorMod.set(1)
creature8.Stats.DamageMod.set(1)
creature8.Stats.ExperienceMod.set(1)
creature8.Stats.HealthMod.set(1)
creature8.Stats.ManaMod.set(1)
export let creature8Loot = creature8.NormalLoot

export let creature9 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature9',299)
creature9.Name.enGB.set('Placeholder Creature')
creature9.Models.clearAll()
creature9.Models.addIds(2357,2358)
creature9.MovementType.setRandomMovement()
creature9.Level.set(1,2)
creature9.DamageSchool.setNormal()
creature9.Stats.ArmorMod.set(1)
creature9.Stats.DamageMod.set(1)
creature9.Stats.ExperienceMod.set(1)
creature9.Stats.HealthMod.set(1)
creature9.Stats.ManaMod.set(1)
export let creature9Loot = creature9.NormalLoot

export let creature10 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature10',299)
creature10.Name.enGB.set('Placeholder Creature')
creature10.Models.clearAll()
creature10.Models.addIds(2357,2358)
creature10.MovementType.setRandomMovement()
creature10.Level.set(1,2)
creature10.DamageSchool.setNormal()
creature10.Stats.ArmorMod.set(1)
creature10.Stats.DamageMod.set(1)
creature10.Stats.ExperienceMod.set(1)
creature10.Stats.HealthMod.set(1)
creature10.Stats.ManaMod.set(1)
export let creature10Loot = creature10.NormalLoot

//Rare Creature Spawns
export let RareCreature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-RareCreature1',299)
RareCreature1.Name.enGB.set('The Miner')
RareCreature1.Models.clearAll()
RareCreature1.Models.addIds(1569,3423,3419,3421)
RareCreature1.FactionTemplate.set(48)
RareCreature1.MovementType.setRandomMovement()
RareCreature1.Level.set(4,6)
RareCreature1.Rank.setRare()
RareCreature1.AIName.SmartAI()
//Out of Combat Scripts
SQL.smart_scripts.add(RareCreature1.ID,0,1,2).event_type.set(1).event_chance.set(100).event_param1.set(3000).event_param2.set(3000).event_param3.set(30000).event_param4.set(30000).action_type.set(11).action_param1.set(45872).target_type.set(1).comment.set('Defibrilate Spell Cast')
SQL.smart_scripts.add(RareCreature1.ID,0,2,0).event_type.set(61).event_chance.set(100).action_type.set(1).action_param1.set(1).target_type.set(1).comment.set('The Miner OUT OF COMBAT Text Scripts.')
SQL.broadcast_text.add(RareCreature1.ID+1).Text.set('What are ye lookin\' at, back to work!').Flags.set(1)
SQL.creature_text.add(RareCreature1.ID,1,0).Text.set('What are ye lookin\' at, back to work!').BroadcastTextId.set(RareCreature1.ID+1).Probability.set(100).Type.set(14)
SQL.broadcast_text.add(RareCreature1.ID+2).Text.set('Didn\'t ye hear me the first time? I\'ll be takin\' the next three nuggets from yer sack!').Flags.set(1)
SQL.creature_text.add(RareCreature1.ID,1,1).Text.set('Didn\'t ye hear me the first time? I\'ll be takin\' the next three nuggets from yer sack!').BroadcastTextId.set(RareCreature1.ID+2).Probability.set(100).Type.set(14)
SQL.broadcast_text.add(RareCreature1.ID+3).Text.set('Move!! Ye blithering idiots!').Flags.set(1)
SQL.creature_text.add(RareCreature1.ID,1,2).Text.set('Move!! Ye blithering idiots!').BroadcastTextId.set(RareCreature1.ID+3).Probability.set(100).Type.set(14)
//Combat Scripts
SQL.smart_scripts.add(RareCreature1.ID,0,0,0).event_type.set(4).event_chance.set(100).action_type.set(1).action_param3.set(1).target_type.set(7).comment.set('The Miner IN COMBAT Scripts.')
SQL.broadcast_text.add(RareCreature1.ID+4).Text.set('So ye want a piece of me?! Bring er on!').Flags.set(1)
SQL.creature_text.add(RareCreature1.ID,0,0).Text.set('So ye want a piece of me?! Bring er on!').BroadcastTextId.set(RareCreature1.ID+4).Probability.set(100).Type.set(14)
SQL.broadcast_text.add(RareCreature1.ID+5).Text.set('Taste my steel!').Flags.set(1)
SQL.creature_text.add(RareCreature1.ID,0,1).Text.set('Taste my steel!').BroadcastTextId.set(RareCreature1.ID+5).Probability.set(100).Type.set(14)
SQL.broadcast_text.add(RareCreature1.ID+6).Text.set('Another corpse to hang on me wall!').Flags.set(1)
SQL.creature_text.add(RareCreature1.ID,0,2).Text.set('Another corpse to hang on me wall!').BroadcastTextId.set(RareCreature1.ID+6).Probability.set(100).Type.set(14)
SQL.broadcast_text.add(RareCreature1.ID+7).Text.set('Heh.. that tickled!').Flags.set(1)
SQL.creature_text.add(RareCreature1.ID,0,3).Text.set('Heh.. that tickled!').BroadcastTextId.set(RareCreature1.ID+7).Probability.set(100).Type.set(14)
//Spells
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    creature2.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    creature2.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    creature2.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(Rank1Bite.ID,2,7)
    creature2.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(Rank1Gore.ID,2,7)
//End of Spells
RareCreature1.DamageSchool.setNormal()
RareCreature1.Stats.ArmorMod.set(5)
RareCreature1.Stats.DamageMod.set(10)
RareCreature1.Stats.ExperienceMod.set(10)
RareCreature1.Stats.HealthMod.set(12)
RareCreature1.Stats.ManaMod.set(3)
SQL.creature_equip_template.add(RareCreature1.ID,1).ItemID1.set(2901)
export let RareCreature1Loot = RareCreature1.NormalLoot

export let RareCreature2 = std.CreatureTemplates.create(MODNAME,'Placeholder-RareCreature2',299)
RareCreature2.Name.enGB.set('Fang')
RareCreature2.Models.clearAll()
RareCreature2.Models.addIds(522)
RareCreature2.FactionTemplate.set(48)
RareCreature2.MovementType.setRandomMovement()
RareCreature2.Level.set(5,8)
RareCreature2.Rank.setRare()
RareCreature2.DamageSchool.setNormal()
RareCreature2.Stats.ArmorMod.set(5)
RareCreature2.Stats.DamageMod.set(10)
RareCreature2.Stats.ExperienceMod.set(10)
RareCreature2.Stats.HealthMod.set(15)
RareCreature2.Stats.ManaMod.set(3)
export let RareCreature2Loot = RareCreature2.NormalLoot

export let RareCreature3 = std.CreatureTemplates.create(MODNAME,'Placeholder-RareCreature3',299)
RareCreature3.Name.enGB.set('Murglegurgle')
RareCreature3.Models.clearAll()
RareCreature3.Models.addIds(2597)
RareCreature3.Scale.set(2)
RareCreature3.FactionTemplate.set(48)
RareCreature3.MovementType.setRandomMovement()
RareCreature3.Level.set(5,9)
RareCreature3.Rank.setRare()
RareCreature3.DamageSchool.setNormal()
RareCreature3.Stats.ArmorMod.set(5)
RareCreature3.Stats.DamageMod.set(5)
RareCreature3.Stats.ExperienceMod.set(10)
RareCreature3.Stats.HealthMod.set(5)
RareCreature3.Stats.ManaMod.set(3)
SQL.creature_equip_template.add(RareCreature3.ID,1).ItemID1.set(15220)
SQL.creature_equip_template.add(RareCreature3.ID,2).ItemID1.set(3319)
SQL.creature_equip_template.add(RareCreature3.ID,3).ItemID1.set(2011)
export let RareCreature3Loot = RareCreature3.NormalLoot

export let RareCreature4 = std.CreatureTemplates.create(MODNAME,'Placeholder-RareCreature4',299)
RareCreature4.Name.enGB.set('Ghostly Farmer')
RareCreature4.Models.clearAll()
RareCreature4.Models.addIds(10478,10480,10479,10481)
RareCreature4.Scale.set(1)
RareCreature4.FactionTemplate.set(48)
RareCreature4.MovementType.setRandomMovement()
RareCreature4.Level.set(10,10)
RareCreature4.Rank.setRare()
RareCreature4.DamageSchool.setNormal()
RareCreature4.Stats.ArmorMod.set(5)
RareCreature4.Stats.DamageMod.set(5)
RareCreature4.Stats.ExperienceMod.set(10)
RareCreature4.Stats.HealthMod.set(5)
RareCreature4.Stats.ManaMod.set(3)
SQL.creature_equip_template.add(RareCreature4.ID,1).ItemID1.set(15220)
SQL.creature_equip_template.add(RareCreature4.ID,2).ItemID1.set(3319)
SQL.creature_equip_template.add(RareCreature4.ID,3).ItemID1.set(2011)
export let RareCreature4Loot = RareCreature4.NormalLoot


//DemiBosss Creature Spawns
export let DemiBosscreature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-DemiBosscreature1',299)
DemiBosscreature1.Name.enGB.set('Lieutenant Commander Springraven')
DemiBosscreature1.Subname.enGB.set('The Inquisitors')
DemiBosscreature1.Models.clearAll()
DemiBosscreature1.Models.addIds(3223)
DemiBosscreature1.FactionTemplate.set(48)
DemiBosscreature1.Rank.setElite()
DemiBosscreature1.Level.set(4,4)
DemiBosscreature1.DamageSchool.setNormal()
DemiBosscreature1.Stats.ArmorMod.set(4)
DemiBosscreature1.Stats.DamageMod.set(4)
DemiBosscreature1.Stats.ExperienceMod.set(3)
DemiBosscreature1.Stats.HealthMod.set(4)
DemiBosscreature1.Stats.ManaMod.set(2)
SQL.creature_equip_template.add(DemiBosscreature1.ID,1).ItemID1.set(7721)
SQL.creature_equip_template.add(DemiBosscreature1.ID,1).ItemID2.set(7726)
export let DemiBosscreature1Loot = DemiBosscreature1.NormalLoot

export let DemiBosscreature2 = std.CreatureTemplates.create(MODNAME,'Placeholder-DemiBosscreature2',299)
DemiBosscreature2.Name.enGB.set('Widow Fae')
DemiBosscreature2.Subname.enGB.set('Sisters of Chaos')
DemiBosscreature2.Models.clearAll()
DemiBosscreature2.Models.addIds(17121)
DemiBosscreature2.FactionTemplate.set(48)
DemiBosscreature2.Rank.setElite()
DemiBosscreature2.Level.set(6,6)
DemiBosscreature2.DamageSchool.setNormal()
DemiBosscreature2.Stats.ArmorMod.set(4)
DemiBosscreature2.Stats.DamageMod.set(4)
DemiBosscreature2.Stats.ExperienceMod.set(3)
DemiBosscreature2.Stats.HealthMod.set(4)
DemiBosscreature2.Stats.ManaMod.set(2)
SQL.creature_equip_template.add(DemiBosscreature2.ID,1).ItemID1.set(19355)
export let DemiBosscreature2Loot = DemiBosscreature2.NormalLoot

//Boss Creature Spawns
export let Bosscreature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-Bosscreature1',299)
Bosscreature1.Name.enGB.set('Maxim Wintergrave')
Bosscreature1.Subname.enGB.set('The Widowmaker')
Bosscreature1.Models.clearAll()
Bosscreature1.Models.addIds(2042)
Bosscreature1.FactionTemplate.set(48)
Bosscreature1.Rank.setRareElite()
Bosscreature1.Level.set(8,8)
Bosscreature1.DamageSchool.setNormal()
Bosscreature1.Stats.ArmorMod.set(8)
Bosscreature1.Stats.DamageMod.set(8)
Bosscreature1.Stats.ExperienceMod.set(6)
Bosscreature1.Stats.HealthMod.set(8)
Bosscreature1.Stats.ManaMod.set(6)
SQL.creature_equip_template.add(Bosscreature1.ID,1).ItemID1.set(6174)
export let Bosscreature1Loot = Bosscreature1.NormalLoot














































let creature2000 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature2000',299)
creature2000.MovementType.setWaypoint()
SQL.waypoints.add(creature2000.ID,1).position_x.set(1).position_y.set(1).position_z.set(1)
SQL.waypoints.add(creature2000.ID,2).position_x.set(1).position_y.set(2).position_z.set(1)
