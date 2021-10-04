import { std } from "tswow-stdlib"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { MODNAME } from "../../modname"
import { ChampionsSatchel } from "./ravaging-worg-champion-scroll"

/*Creature - Worg Champion*/
export let MurlocChampionCreature = std.CreatureTemplates.create(MODNAME,'murlocchampioncreature-creature',299)
MurlocChampionCreature.Name.enGB.set('Murkimus')
MurlocChampionCreature.Subname.enGB.set('Champion of the Murlocs')
MurlocChampionCreature.Models.clearAll()
MurlocChampionCreature.Models.addIds(15396)
MurlocChampionCreature.Scale.set(5)
MurlocChampionCreature.Level.set(10,10)
MurlocChampionCreature.Rank.setElite()
//Spells
export let MurlocChampionFrostbolt = std.Spells.create(MODNAME,'Rank1Frostbolt-spell',116)
MurlocChampionFrostbolt.Name.enGB.set('Frostbolt')
MurlocChampionFrostbolt.Effects.get(0).BasePoints.set(-31)
MurlocChampionFrostbolt.Effects.get(1).BasePoints.set(212)
MurlocChampionFrostbolt.CastTime.set(3000,0,3000)
export let MurlocChampionFireblast = std.Spells.create(MODNAME,'Rank1FireBlast-spell',60871)
MurlocChampionFireblast.Name.enGB.set('Fire Blast')
MurlocChampionFireblast.Effects.get(0).BasePoints.set(340)
export let MurlocChampionNova = std.Spells.create(MODNAME,'Rank1FrostNova-spell',122)
MurlocChampionNova.Name.enGB.set('Frost Nova')
MurlocChampionNova.Effects.get(0).BasePoints.set(117)
MurlocChampionNova.Duration.set(3000,0,3000)
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    MurlocChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    MurlocChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    MurlocChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    MurlocChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    MurlocChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    MurlocChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    MurlocChampionCreature.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(MurlocChampionFrostbolt.ID,2,7)
    MurlocChampionCreature.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(MurlocChampionFireblast.ID,2,7)
    MurlocChampionCreature.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(MurlocChampionNova.ID,2,7)
//End of Spells
MurlocChampionCreature.FactionTemplate.set(48)
MurlocChampionCreature.DamageSchool.setNormal()
MurlocChampionCreature.Stats.ArmorMod.set(125)
MurlocChampionCreature.Stats.DamageMod.set(65)
MurlocChampionCreature.Stats.ExperienceMod.set(1)
MurlocChampionCreature.Stats.HealthMod.set(100)
MurlocChampionCreature.Stats.ManaMod.set(25)
export let MurlocChampionCreatureLoot = MurlocChampionCreature.NormalLoot

/*Spell - Worg Champion Summon*/
export let MurlocChampion = std.Spells.create(MODNAME,'murlocchampion-spell',66691)
MurlocChampion.Name.enGB.set('Summon Murloc Champion')
MurlocChampion.Description.enGB.set('Summons a powerful Murloc Champion to fight.')
MurlocChampion.Effects.get(0).MiscValueA.set(MurlocChampionCreature.ID)

/*Item - Champion Scroll : Worg*/
export let MurlocScroll = std.Items.create(MODNAME,'murlocscroll-1',33457)
MurlocScroll.Name.enGB.set('Champion Scroll : Murloc')
MurlocScroll.Description.enGB.set('This scroll contains the ability to summon a powerful murloc, be weary, it is advised that this challenge be accepted with additional party members.')
MurlocScroll.Flags.set(0)
MurlocScroll.FlagsExtra.set(0)
MurlocScroll.MaxCount.set(1)
MurlocScroll.RequiredLevel.set(1)
MurlocScroll.Spells.clearAll()
MurlocScroll.Spells.add(MurlocChampion.ID,undefined,undefined,-1)

/*Spell Scripts - Champion Boss Items*/
export let MurlocCreatureSpawn = std.CreatureTemplates.create(MODNAME,'murloccreaturespawn-creature',8776)
MurlocCreatureSpawn.Name.enGB.set('Enthralled Murloc')
MurlocCreatureSpawn.Models.clearAll()
MurlocCreatureSpawn.Models.addIds(15396,15397,15394)

export let chancemurloc1 = std.Spells.create(MODNAME,'chancemurloc1-spell',13049)//15283
chancemurloc1.Name.enGB.set('Summon Murloc')
chancemurloc1.Effects.get(0).MiscValueA.set(MurlocCreatureSpawn.ID)
export let chancemurloc1m = std.Spells.create(MODNAME,'chancemurloc1m-spell',67670) //melee
chancemurloc1m.Name.enGB.set('Summon Murloc')
chancemurloc1m.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging Murloc to fight for you.')
chancemurloc1m.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging Murloc to fight for you.')
chancemurloc1m.Effects.get(0).TriggerSpell.set(chancemurloc1.ID)
export let chancemurloc1c = std.Spells.create(MODNAME,'chancemurloc1c-spell',67672) //caster
chancemurloc1c.Name.enGB.set('Summon Murloc')
chancemurloc1c.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging Murloc to fight for you.')
chancemurloc1c.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging Murloc to fight for you.')
chancemurloc1c.Effects.get(0).TriggerSpell.set(chancemurloc1.ID)

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
StaffofFlames.Spells.add(chancemurloc1c.ID)
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
DancingFlamesRapier.Spells.add(chancemurloc1m.ID)
DancingFlamesRapier.Spells.get(0).Trigger.set(1)

/*Adding the loot to the boss*/

/*Bags - Group 0*/
addLootToCreature(MurlocChampionCreatureLoot,[
    ChampionsSatchel.ID,               
],[5],0)
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(MurlocChampionCreatureLoot,[
    StaffofFlames.ID,       DancingFlamesRapier.ID,       
],50,1)



//create boss script here
