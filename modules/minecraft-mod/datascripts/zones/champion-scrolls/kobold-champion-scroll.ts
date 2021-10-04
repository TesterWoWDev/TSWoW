import { std } from "tswow-stdlib"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { MODNAME } from "../../modname"
import { ChampionsSatchel } from "./ravaging-worg-champion-scroll"

/*Creature - Worg Champion*/
export let KoboldChampionCreature = std.CreatureTemplates.create(MODNAME,'koboldchampioncreature-creature',299)
KoboldChampionCreature.Name.enGB.set('Kelly Kobold')
KoboldChampionCreature.Subname.enGB.set('Champion of the Kobolds')
KoboldChampionCreature.Models.clearAll()
KoboldChampionCreature.Models.addIds(15396)
KoboldChampionCreature.Scale.set(5)
KoboldChampionCreature.Level.set(10,10)
KoboldChampionCreature.Rank.setElite()
//Spells
export let KoboldChampionSpell1 = std.Spells.create(MODNAME,'koboldchampionspell1-spell',116)
KoboldChampionSpell1.Name.enGB.set('Frostbolt')
KoboldChampionSpell1.Effects.get(0).BasePoints.set(-31)
KoboldChampionSpell1.Effects.get(1).BasePoints.set(212)
KoboldChampionSpell1.CastTime.set(3000,0,3000)
export let KoboldChampionSpell2 = std.Spells.create(MODNAME,'koboldchampionspell2-spell',60871)
KoboldChampionSpell2.Name.enGB.set('Fire Blast')
KoboldChampionSpell2.Effects.get(0).BasePoints.set(340)
export let KoboldChampionSpell3 = std.Spells.create(MODNAME,'koboldchampionspell3-spell',122)
KoboldChampionSpell3.Name.enGB.set('Frost Nova')
KoboldChampionSpell3.Effects.get(0).BasePoints.set(117)
KoboldChampionSpell3.Duration.set(3000,0,3000)
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    KoboldChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    KoboldChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    KoboldChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    KoboldChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    KoboldChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    KoboldChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    KoboldChampionCreature.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(KoboldChampionSpell1.ID,2,7)
    KoboldChampionCreature.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(KoboldChampionSpell2.ID,2,7)
    KoboldChampionCreature.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(KoboldChampionSpell3.ID,2,7)
//End of Spells
KoboldChampionCreature.FactionTemplate.set(48)
KoboldChampionCreature.DamageSchool.setNormal()
KoboldChampionCreature.Stats.ArmorMod.set(125)
KoboldChampionCreature.Stats.DamageMod.set(65)
KoboldChampionCreature.Stats.ExperienceMod.set(1)
KoboldChampionCreature.Stats.HealthMod.set(100)
KoboldChampionCreature.Stats.ManaMod.set(25)
export let KoboldChampionCreatureLoot = KoboldChampionCreature.NormalLoot

/*Spell - Worg Champion Summon*/
export let KoboldChampion = std.Spells.create(MODNAME,'koboldchampion-spell',66691)
KoboldChampion.Name.enGB.set('Summon Kobold Champion')
KoboldChampion.Description.enGB.set('Summons a powerful Kobold Champion to fight.')
KoboldChampion.Effects.get(0).MiscValueA.set(KoboldChampionCreature.ID)

/*Item - Champion Scroll : Worg*/
export let KoboldScroll = std.Items.create(MODNAME,'koboldcroll-1',33457)
KoboldScroll.Name.enGB.set('Champion Scroll : Kobold')
KoboldScroll.Description.enGB.set('This scroll contains the ability to summon a powerful kobold, be weary, it is advised that this challenge be accepted with additional party members.')
KoboldScroll.Flags.set(0)
KoboldScroll.FlagsExtra.set(0)
KoboldScroll.MaxCount.set(1)
KoboldScroll.RequiredLevel.set(1)
KoboldScroll.Spells.clearAll()
KoboldScroll.Spells.add(KoboldChampion.ID,undefined,undefined,-1)

/*Spell Scripts - Champion Boss Items*/
export let KoboldCreatureSpawn = std.CreatureTemplates.create(MODNAME,'koboldcreaturespawn-creature',8776)
KoboldCreatureSpawn.Name.enGB.set('Enthralled Kobold')
KoboldCreatureSpawn.Models.clearAll()
KoboldCreatureSpawn.Models.addIds(15396,15397,15394)

export let chancekobold1 = std.Spells.create(MODNAME,'chancekobold1-spell',13049)//15283
chancekobold1.Name.enGB.set('Summon Kobold')
chancekobold1.Effects.get(0).MiscValueA.set(KoboldCreatureSpawn.ID)
export let chancekobold1m = std.Spells.create(MODNAME,'chancekobold1m-spell',67670) //melee
chancekobold1m.Name.enGB.set('Summon Kobold')
chancekobold1m.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging kobold to fight for you.')
chancekobold1m.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging kobold to fight for you.')
chancekobold1m.Effects.get(0).TriggerSpell.set(chancekobold1.ID)
export let chancekobold1c = std.Spells.create(MODNAME,'chancekobold1c-spell',67672) //caster
chancekobold1c.Name.enGB.set('Summon Kobold')
chancekobold1c.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging kobold to fight for you.')
chancekobold1c.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging kobold to fight for you.')
chancekobold1c.Effects.get(0).TriggerSpell.set(chancekobold1.ID)

//These don't work; the mana cost can not be changed.1
export let FanofKnives = std.Spells.create(MODNAME,'fanofknives-spell',51723)
FanofKnives.Power.setEnergy(10)
FanofKnives.Cooldown.set(0,0,0,0)
export let FelFlamestrike = std.Spells.create(MODNAME,'felflamestrike-spell',39139)
FelFlamestrike.Name.enGB.set('Flamestrike')
FelFlamestrike.CastTime.set(3000,0,3000)
FelFlamestrike.Power.setMana(0,0,0,0,0)
FelFlamestrike.Cooldown.set(30000,0,0,0)



/*Item Creation - Champion Boss Loot*/
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
StaffofFlames.Spells.add(chancekobold1c.ID)
StaffofFlames.Spells.get(0).Trigger.set(1)
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
DancingFlamesRapier.Spells.add(chancekobold1m.ID)
DancingFlamesRapier.Spells.get(0).Trigger.set(1)

/*Adding the loot to the boss*/

/*Bags - Group 0*/
addLootToCreature(KoboldChampionCreatureLoot,[
    ChampionsSatchel.ID,               
],[5],0)
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(KoboldChampionCreatureLoot,[
    StaffofFlames.ID,       DancingFlamesRapier.ID,       
],50,1)



//create boss script here
