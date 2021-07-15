import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { MODNAME } from "../modname"


//Normal Creature Spawns
let creature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature1',299)
creature1.Name.enGB.set('Bandit')
creature1.MovementType.setRandomMovement()
creature1.Level.set(1,2)
creature1.DamageSchool.setNormal()
creature1.Stats.ArmorMod.set(1)
creature1.Stats.DamageMod.set(1)
creature1.Stats.ExperienceMod.set(1)
creature1.Stats.HealthMod.set(1)
creature1.Stats.ManaMod.set(1)
export let creature1Loot = creature1.NormalLoot
let creature2 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature2',299)
creature2.Name.enGB.set('Young Wolf')
creature2.MovementType.setRandomMovement()
creature2.Level.set(1,2)
creature2.DamageSchool.setNormal()
creature2.Stats.ArmorMod.set(1)
creature2.Stats.DamageMod.set(1)
creature2.Stats.ExperienceMod.set(1)
creature2.Stats.HealthMod.set(1)
creature2.Stats.ManaMod.set(1)
export let creature2Loot = creature2.NormalLoot
let creature3 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature3',299)
creature3.Name.enGB.set('Wild Boar')
creature3.MovementType.setRandomMovement()
creature3.Level.set(1,2)
creature3.DamageSchool.setNormal()
creature3.Stats.ArmorMod.set(1)
creature3.Stats.DamageMod.set(1)
creature3.Stats.ExperienceMod.set(1)
creature3.Stats.HealthMod.set(1)
creature3.Stats.ManaMod.set(1)
export let creature3Loot = creature3.NormalLoot
let creature4 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature4',299)
creature4.Name.enGB.set('Kobold Foreman')
creature4.MovementType.setRandomMovement()
creature4.Level.set(1,2)
creature4.DamageSchool.setNormal()
creature4.Stats.ArmorMod.set(1)
creature4.Stats.DamageMod.set(1)
creature4.Stats.ExperienceMod.set(1)
creature4.Stats.HealthMod.set(1)
creature4.Stats.ManaMod.set(1)
export let creature4Loot = creature4.NormalLoot
let creature5 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature5',299)
creature5.Name.enGB.set('Kobold Miner')
creature5.MovementType.setRandomMovement()
creature5.Level.set(1,2)
creature5.DamageSchool.setNormal()
creature5.Stats.ArmorMod.set(1)
creature5.Stats.DamageMod.set(1)
creature5.Stats.ExperienceMod.set(1)
creature5.Stats.HealthMod.set(1)
creature5.Stats.ManaMod.set(1)
export let creature5Loot = creature5.NormalLoot
let creature6 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature6',299)
creature6.Name.enGB.set('Salty Murloc')
creature6.MovementType.setRandomMovement()
creature6.Level.set(1,2)
creature6.DamageSchool.setNormal()
creature6.Stats.ArmorMod.set(1)
creature6.Stats.DamageMod.set(1)
creature6.Stats.ExperienceMod.set(1)
creature6.Stats.HealthMod.set(1)
creature6.Stats.ManaMod.set(1)
export let creature6Loot = creature6.NormalLoot
let creature7 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature7',299)
creature7.Name.enGB.set('Murloc Wavebender')
creature7.MovementType.setRandomMovement()
creature7.Level.set(1,2)
creature7.DamageSchool.setNormal()
creature7.Stats.ArmorMod.set(1)
creature7.Stats.DamageMod.set(1)
creature7.Stats.ExperienceMod.set(1)
creature7.Stats.HealthMod.set(1)
creature7.Stats.ManaMod.set(1)
export let creature7Loot = creature7.NormalLoot
let creature8 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature8',299)
creature8.Name.enGB.set('Placeholder Creature')
creature8.MovementType.setRandomMovement()
creature8.Level.set(1,2)
creature8.DamageSchool.setNormal()
creature8.Stats.ArmorMod.set(1)
creature8.Stats.DamageMod.set(1)
creature8.Stats.ExperienceMod.set(1)
creature8.Stats.HealthMod.set(1)
creature8.Stats.ManaMod.set(1)
export let creature8Loot = creature8.NormalLoot
let creature9 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature9',299)
creature9.Name.enGB.set('Placeholder Creature')
creature9.MovementType.setRandomMovement()
creature9.Level.set(1,2)
creature9.DamageSchool.setNormal()
creature9.Stats.ArmorMod.set(1)
creature9.Stats.DamageMod.set(1)
creature9.Stats.ExperienceMod.set(1)
creature9.Stats.HealthMod.set(1)
creature9.Stats.ManaMod.set(1)
export let creature9Loot = creature9.NormalLoot
let creature10 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature10',299)
creature10.Name.enGB.set('Placeholder Creature')
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
let RareCreature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-RareCreature1',299)
RareCreature1.Name.enGB.set('The Miner')
RareCreature1.MovementType.setRandomMovement()
RareCreature1.Level.set(1,6)
RareCreature1.Rank.setRare()
RareCreature1.DamageSchool.setNormal()
RareCreature1.Stats.ArmorMod.set(5)
RareCreature1.Stats.DamageMod.set(5)
RareCreature1.Stats.ExperienceMod.set(10)
RareCreature1.Stats.HealthMod.set(5)
RareCreature1.Stats.ManaMod.set(3)
export let RareCreature1Loot = RareCreature1.NormalLoot
let RareCreature2 = std.CreatureTemplates.create(MODNAME,'Placeholder-RareCreature2',299)
RareCreature2.Name.enGB.set('Fang')
RareCreature2.MovementType.setRandomMovement()
RareCreature2.Level.set(1,6)
RareCreature2.Rank.setRare()
RareCreature2.DamageSchool.setNormal()
RareCreature2.Stats.ArmorMod.set(5)
RareCreature2.Stats.DamageMod.set(5)
RareCreature2.Stats.ExperienceMod.set(10)
RareCreature2.Stats.HealthMod.set(5)
RareCreature2.Stats.ManaMod.set(3)
export let RareCreature2Loot = RareCreature2.NormalLoot
let RareCreature3 = std.CreatureTemplates.create(MODNAME,'Placeholder-RareCreature3',299)
RareCreature3.Name.enGB.set('Murglegurgle')
RareCreature3.MovementType.setRandomMovement()
RareCreature3.Level.set(1,6)
RareCreature3.Rank.setRare()
RareCreature3.DamageSchool.setNormal()
RareCreature3.Stats.ArmorMod.set(5)
RareCreature3.Stats.DamageMod.set(5)
RareCreature3.Stats.ExperienceMod.set(10)
RareCreature3.Stats.HealthMod.set(5)
RareCreature3.Stats.ManaMod.set(3)
export let RareCreature3Loot = RareCreature3.NormalLoot

//DemiBosss Creature Spawns
let DemiBosscreature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-DemiBosscreature1',299)
DemiBosscreature1.Name.enGB.set('Lieutenant Commander Springraven')
DemiBosscreature1.Subname.enGB.set('The Inquisitors')
//DemiBosscreature1.MovementType.setRandomMovement()
DemiBosscreature1.Rank.setElite()
DemiBosscreature1.Level.set(3,3)
DemiBosscreature1.DamageSchool.setNormal()
DemiBosscreature1.Stats.ArmorMod.set(4)
DemiBosscreature1.Stats.DamageMod.set(4)
DemiBosscreature1.Stats.ExperienceMod.set(3)
DemiBosscreature1.Stats.HealthMod.set(4)
DemiBosscreature1.Stats.ManaMod.set(2)
export let DemiBosscreature1Loot = DemiBosscreature1.NormalLoot
let DemiBosscreature2 = std.CreatureTemplates.create(MODNAME,'Placeholder-DemiBosscreature2',299)
DemiBosscreature2.Name.enGB.set('Widow Fae')
DemiBosscreature2.Subname.enGB.set('Sisters of Chaos')
//DemiBosscreature2.MovementType.setRandomMovement()
DemiBosscreature2.Rank.setElite()
DemiBosscreature2.Level.set(3,3)
DemiBosscreature2.DamageSchool.setNormal()
DemiBosscreature2.Stats.ArmorMod.set(4)
DemiBosscreature2.Stats.DamageMod.set(4)
DemiBosscreature2.Stats.ExperienceMod.set(3)
DemiBosscreature2.Stats.HealthMod.set(4)
DemiBosscreature2.Stats.ManaMod.set(2)
export let DemiBosscreature2Loot = DemiBosscreature2.NormalLoot

//Boss Creature Spawns
let Bosscreature1 = std.CreatureTemplates.create(MODNAME,'Placeholder-Bosscreature1',299)
Bosscreature1.Name.enGB.set('Maxim Wintergrave')
Bosscreature1.Subname.enGB.set('The Widowmaker')
//Bosscreature1.MovementType.setRandomMovement()
Bosscreature1.Rank.setRareElite()
Bosscreature1.Level.set(6,6)
Bosscreature1.DamageSchool.setNormal()
Bosscreature1.Stats.ArmorMod.set(8)
Bosscreature1.Stats.DamageMod.set(8)
Bosscreature1.Stats.ExperienceMod.set(6)
Bosscreature1.Stats.HealthMod.set(8)
Bosscreature1.Stats.ManaMod.set(6)
export let Bosscreature1Loot = Bosscreature1.NormalLoot














































let creature2000 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature2000',299)
creature2000.MovementType.setWaypoint()
SQL.waypoints.add(creature2000.ID,1).position_x.set(1).position_y.set(1).position_z.set(1)
SQL.waypoints.add(creature2000.ID,2).position_x.set(1).position_y.set(2).position_z.set(1)