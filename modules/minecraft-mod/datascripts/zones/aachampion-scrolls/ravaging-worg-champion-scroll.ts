import { std } from "tswow-stdlib"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { MODNAME } from "../../modname"

/*Creature - Worg Champion*/
export let WorgChampionCreature = std.CreatureTemplates.create(MODNAME,'worgchampioncreature-creature',299)
WorgChampionCreature.Name.enGB.set('Dominus')
WorgChampionCreature.Subname.enGB.set('Champion of the Worgs')
WorgChampionCreature.Models.clearAll()
WorgChampionCreature.Models.addIds(24235)
WorgChampionCreature.Level.set(10,10)
WorgChampionCreature.Rank.setElite()
WorgChampionCreature.FactionTemplate.set(48)
WorgChampionCreature.DamageSchool.setNormal()
WorgChampionCreature.Stats.ArmorMod.set(125)
WorgChampionCreature.Stats.DamageMod.set(65)
WorgChampionCreature.Stats.ExperienceMod.set(1)
WorgChampionCreature.Stats.HealthMod.set(100)
WorgChampionCreature.Stats.ManaMod.set(25)
export let WorgChampionCreatureLoot = WorgChampionCreature.NormalLoot

/*Spell - Worg Champion Summon*/
export let WorgChampion = std.Spells.create(MODNAME,'worgchampion-spell',66691)
WorgChampion.Name.enGB.set('Summon Worg Champion')
WorgChampion.Description.enGB.set('Summons a powerful Worg Champion to fight.')
WorgChampion.Effects.get(0).MiscValueA.set(WorgChampionCreature.ID)

/*Item - Champion Scroll : Worg*/
export let WorgScroll = std.Items.create(MODNAME,'worgscroll-1',33457)
WorgScroll.Name.enGB.set('Champion Scroll : Ravaging Worg')
WorgScroll.Description.enGB.set('This scroll contains the ability to summon a powerful worg, be weary, it is advised that this challenge be accepted with additional party members.')
WorgScroll.Flags.set(0)
WorgScroll.FlagsExtra.set(0)
WorgScroll.MaxCount.set(1)
WorgScroll.RequiredLevel.set(1)
WorgScroll.Spells.clearAll()
WorgScroll.Spells.add(WorgChampion.ID)

/*Item Creation - Champion Boss Loot*/
export let ChampionsSatchel = std.Items.create(MODNAME,'championsatchel',805)
ChampionsSatchel.Quality.setBlue()
ChampionsSatchel.ContainerSlots.set(24)
export let StaffofFlames = std.Items.create(MODNAME,'staffofflames',5201)
StaffofFlames.Name.enGB.set("Staff of Furious Flames")
StaffofFlames.Quality.setBlue()
StaffofFlames.Stats.clearAll()
StaffofFlames.Stats.addStamina(98)
StaffofFlames.Stats.addSpirit(32)
StaffofFlames.Stats.addSpellPower(220)
StaffofFlames.Stats.addHasteRating(22)
StaffofFlames.Stats.addCritRating(50)
export let DancingFlamesRapier = std.Items.create(MODNAME,'dancingflamesrapier',12777)
DancingFlamesRapier.Name.enGB.set("Rapier of the Dancing Flame")
DancingFlamesRapier.Quality.setBlue()
StaffofFlames.Stats.clearAll()
StaffofFlames.Stats.addStamina(55)
StaffofFlames.Stats.addAgility(18)
StaffofFlames.Stats.addStrength(22)
StaffofFlames.Stats.addAttackPower(99)
StaffofFlames.Stats.addHasteRating(7)
StaffofFlames.Stats.addCritRating(12)

/*Adding the loot to the boss*/

/*Bags - Group 0*/
addLootToCreature(WorgChampionCreatureLoot,[
    ChampionsSatchel.ID,               
],[5,5,5,5,3],0)
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(WorgChampionCreatureLoot,[
    StaffofFlames.ID,       DancingFlamesRapier.ID,       
],50,1)
//create boss script here
