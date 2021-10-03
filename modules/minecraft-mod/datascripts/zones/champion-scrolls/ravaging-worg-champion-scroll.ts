import { std } from "tswow-stdlib"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { MODNAME } from "../../modname"
import { DancingFlamesRapier, StaffofFlames } from "../(Zone-0)Walk-of-Heroes/starting-zone-item-learn-spell"

/*Creature - Worg Champion*/
export let WorgChampionCreature = std.CreatureTemplates.create(MODNAME,'worgchampioncreature-creature',299)
WorgChampionCreature.Name.enGB.set('Dominus')
WorgChampionCreature.Subname.enGB.set('Champion of the Worgs')
WorgChampionCreature.Models.clearAll()
WorgChampionCreature.Models.addIds(24235)
WorgChampionCreature.Level.set(10,10)
WorgChampionCreature.Rank.setElite()
//Spells
export let WorgChampionStrike = std.Spells.create(MODNAME,'worgchampionstrike-spell',12057)
WorgChampionStrike.Name.enGB.set('Strike')
WorgChampionStrike.Description.enGB.set('Strike at an enemy, inflicting weapon damage + $s1.')
WorgChampionStrike.Effects.get(0).BasePoints.set(279)
export let WorgChampionBite = std.Spells.create(MODNAME,'worgchampionbite-spell',36612)
WorgChampionBite.Name.enGB.set('Bite')
WorgChampionBite.Description.enGB.set('Inflicts $s1 damage to an enemy.')
WorgChampionBite.Effects.get(0).BasePoints.set(340)
export let WorgChampionGore = std.Spells.create(MODNAME,'worgchampiongore-spell',4102)
WorgChampionGore.Name.enGB.set('Gore')
WorgChampionGore.Description.enGB.set('Inflicts $s2 damage to an enemy every 3s for $d.')
WorgChampionGore.AuraDescription.enGB.set('Bleeding for $s1 damage every 3 seconds.')
WorgChampionGore.Effects.get(1).BasePoints.set(37)
WorgChampionGore.Duration.set(15000,0,15000)
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    WorgChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    WorgChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    WorgChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    WorgChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    WorgChampionCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    WorgChampionCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    WorgChampionCreature.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(WorgChampionStrike.ID,2,7)
    WorgChampionCreature.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(WorgChampionBite.ID,2,7)
    WorgChampionCreature.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(WorgChampionGore.ID,2,7)
//End of Spells
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
WorgScroll.Spells.add(WorgScroll.ID,undefined,undefined,-1)

/*Spell Scripts - Champion Boss Items*/
export let WorgCreatureSpawn = std.CreatureTemplates.create(MODNAME,'worgcreaturespawn-creature',8776)
WorgCreatureSpawn.Name.enGB.set('Enthralled Worg')
WorgCreatureSpawn.Models.clearAll()
WorgCreatureSpawn.Models.addIds(26331,22042)

export let chanceWorg1 = std.Spells.create(MODNAME,'chanceworg1-spell',13049)//15283
chanceWorg1.Name.enGB.set('Summon Worg')
chanceWorg1.Effects.get(0).MiscValueA.set(WorgCreatureSpawn.ID)
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


/*Adding the loot to the boss*/

/*Bags - Group 0*/
addLootToCreature(WorgChampionCreatureLoot,[
    ChampionsSatchel.ID,               
],[5],0)
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(WorgChampionCreatureLoot,[
    StaffofFlames.ID,       DancingFlamesRapier.ID,       
],50,1)