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

/*Spell Scripts - Champion Boss Items*/
export let chanceWorg1 = std.Spells.create(MODNAME,'chanceworg1-spell',34067)//15283
chanceWorg1.Name.enGB.set('Summon Worg')

export let chanceWorg1M = std.Spells.create(MODNAME,'chanceworg1m-spell',67670) //melee
chanceWorg1M.Name.enGB.set('Summon Worg')
chanceWorg1M.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging worg to fight for you.')
chanceWorg1M.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging worg to fight for you.')
chanceWorg1M.Effects.get(0).TriggerSpell.set(chanceWorg1.ID)
export let chanceWorg1C = std.Spells.create(MODNAME,'chanceworg1c-spell',67672) //caster
chanceWorg1C.Name.enGB.set('Summon Worg')
chanceWorg1C.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging worg to fight for you.')
chanceWorg1C.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging worg to fight for you.')
chanceWorg1C.Effects.get(0).TriggerSpell.set(chanceWorg1.ID)

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
StaffofFlames.Spells.clearAll()
StaffofFlames.Spells.add(chanceWorg1C.ID)
export let DancingFlamesRapier = std.Items.create(MODNAME,'dancingflamesrapier',12777)
DancingFlamesRapier.Name.enGB.set("Rapier of the Dancing Flame")
DancingFlamesRapier.Quality.setBlue()
DancingFlamesRapier.Stats.clearAll()
DancingFlamesRapier.Stats.addStamina(55)
DancingFlamesRapier.Stats.addAgility(18)
DancingFlamesRapier.Stats.addStrength(22)
DancingFlamesRapier.Stats.addAttackPower(99)
DancingFlamesRapier.Stats.addHasteRating(7)
DancingFlamesRapier.Stats.addCritRating(12)
DancingFlamesRapier.Spells.clearAll()
DancingFlamesRapier.Spells.add(chanceWorg1M.ID)

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
