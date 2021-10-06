import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"

/*Creature - Worg Champion*/
export let quailboarCreature = std.CreatureTemplates.create(MODNAME,'quailboarcreature-creature',299)
quailboarCreature.Name.enGB.set('Quadar')
quailboarCreature.Subname.enGB.set('Champion of the Quailboars')
quailboarCreature.Models.clearAll()
quailboarCreature.Models.addIds(6098)
quailboarCreature.Scale.set(5)
quailboarCreature.Level.set(15,15)
quailboarCreature.Rank.setElite()
//Spells
export let quailboarSpell1 = std.Spells.create(MODNAME,'quailboarspell1-spell',55323)
quailboarSpell1.Name.enGB.set('Shadow Vortex')
quailboarSpell1.Effects.get(0).BasePoints.set(1812)
quailboarSpell1.CastTime.set(1000,0,1000)
export let quailboarSpell2 = std.Spells.create(MODNAME,'quailboarspell2-spell',55359)
quailboarSpell2.Name.enGB.set('Living Bomb')
export let quailboarSpell3 = std.Spells.create(MODNAME,'quailboarspell3-spell',55463)
quailboarSpell3.Name.enGB.set('Whirlwind')
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    quailboarCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    quailboarCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    quailboarCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    quailboarCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    quailboarCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    quailboarCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    quailboarCreature.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(quailboarSpell1.ID,2,7)
    quailboarCreature.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(quailboarSpell2.ID,2,7)
    quailboarCreature.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(quailboarSpell3.ID,2,7)
//End of Spells
quailboarCreature.FactionTemplate.set(48)
quailboarCreature.DamageSchool.setNormal()
quailboarCreature.Stats.ArmorMod.set(125)
quailboarCreature.Stats.DamageMod.set(65)
quailboarCreature.Stats.ExperienceMod.set(30)
quailboarCreature.Stats.HealthMod.set(100)
quailboarCreature.Stats.ManaMod.set(25)
export let quailboarCreatureLoot = quailboarCreature.NormalLoot

/*Spell - Worg Champion Summon*/
export let quailboar = std.Spells.create(MODNAME,'quailboar-spell',66691)
quailboar.Name.enGB.set('Summon Quailboar Champion')
quailboar.Description.enGB.set('Summons a powerful Quailboar Champion to fight.')
quailboar.Effects.get(0).MiscValueA.set(quailboarCreature.ID)

/*Item - Champion Scroll : Worg*/
export let quailboarScroll = std.Items.create(MODNAME,'quailboarcroll-1',33457)
quailboarScroll.Name.enGB.set('Champion Scroll : Quailboar')
quailboarScroll.Description.enGB.set('This scroll contains the ability to summon a powerful Quailboar, be weary, it is advised that this challenge be accepted with additional party members.')
quailboarScroll.Flags.set(0)
quailboarScroll.FlagsExtra.set(0)
quailboarScroll.MaxCount.set(1)
quailboarScroll.RequiredLevel.set(1)
quailboarScroll.Spells.clearAll()
quailboarScroll.Spells.add(quailboar.ID,undefined,undefined,-1)

/*Spell Scripts - Champion Boss Items*/
export let quailboarCreatureSpawn = std.CreatureTemplates.create(MODNAME,'quailboarcreaturespawn-creature',8776)
quailboarCreatureSpawn.Name.enGB.set('Enthralled Quailboar')
quailboarCreatureSpawn.Models.clearAll()
quailboarCreatureSpawn.Models.addIds(15396,15397,15394)

export let chancequailboar1 = std.Spells.create(MODNAME,'chancequailboar1-spell',13049)//15283
chancequailboar1.Name.enGB.set('Summon Quailboar')
chancequailboar1.Effects.get(0).MiscValueA.set(quailboarCreatureSpawn.ID)
export let chancequailboar1m = std.Spells.create(MODNAME,'chancequailboar1m-spell',67670) //melee
chancequailboar1m.Name.enGB.set('Summon Quailboar')
chancequailboar1m.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging Quailboar to fight for you.')
chancequailboar1m.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging Quailboar to fight for you.')
chancequailboar1m.Effects.get(0).TriggerSpell.set(chancequailboar1.ID)
export let chancequailboar1c = std.Spells.create(MODNAME,'chancequailboar1c-spell',67672) //caster
chancequailboar1c.Name.enGB.set('Summon Quailboar')
chancequailboar1c.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging Quailboar to fight for you.')
chancequailboar1c.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging Quailboar to fight for you.')
chancequailboar1c.Effects.get(0).TriggerSpell.set(chancequailboar1.ID)