import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"

/*Creature - Worg Champion*/
export let harpyCreature = std.CreatureTemplates.create(MODNAME,'harpycreature-creature',299)
harpyCreature.Name.enGB.set('Scallion')
harpyCreature.Subname.enGB.set('Champion of the Harpys')
harpyCreature.Models.clearAll()
harpyCreature.Models.addIds(6098)
harpyCreature.Scale.set(5)
harpyCreature.Level.set(15,15)
harpyCreature.Rank.setElite()
//Spells
export let harpySpell1 = std.Spells.create(MODNAME,'harpyspell1-spell',55847)
harpySpell1.Name.enGB.set('Shadow Void')
export let harpySpell2 = std.Spells.create(MODNAME,'harpyspell2-spell',55866)
harpySpell2.Name.enGB.set('Thunderblade')
export let harpySpell3 = std.Spells.create(MODNAME,'harpyspell3-spell',55822)
harpySpell3.Name.enGB.set('Storm Orb')
    //(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
    harpyCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    harpyCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    harpyCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    harpyCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    harpyCreature.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    harpyCreature.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    //combat loop
    harpyCreature.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(harpySpell1.ID,2,7)
    harpyCreature.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(harpySpell2.ID,2,7)
    harpyCreature.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(harpySpell3.ID,2,7)
//End of Spells
harpyCreature.FactionTemplate.set(48)
harpyCreature.DamageSchool.setNormal()
harpyCreature.Stats.ArmorMod.set(125)
harpyCreature.Stats.DamageMod.set(65)
harpyCreature.Stats.ExperienceMod.set(30)
harpyCreature.Stats.HealthMod.set(100)
harpyCreature.Stats.ManaMod.set(25)
export let harpyCreatureLoot = harpyCreature.NormalLoot

/*Spell - Worg Champion Summon*/
export let harpy = std.Spells.create(MODNAME,'harpy-spell',66691)
harpy.Name.enGB.set('Summon Harpy Champion')
harpy.Description.enGB.set('Summons a powerful Harpy Champion to fight.')
harpy.Effects.get(0).MiscValueA.set(harpyCreature.ID)

/*Item - Champion Scroll : Worg*/
export let harpyScroll = std.Items.create(MODNAME,'harpycroll-1',33457)
harpyScroll.Name.enGB.set('Champion Scroll : Harpy')
harpyScroll.Description.enGB.set('This scroll contains the ability to summon a powerful Harpy, be weary, it is advised that this challenge be accepted with additional party members.')
harpyScroll.Flags.set(0)
harpyScroll.FlagsExtra.set(0)
harpyScroll.MaxCount.set(1)
harpyScroll.RequiredLevel.set(1)
harpyScroll.Spells.clearAll()
harpyScroll.Spells.add(harpy.ID,undefined,undefined,-1)

/*Spell Scripts - Champion Boss Items*/
export let harpyCreatureSpawn = std.CreatureTemplates.create(MODNAME,'harpycreaturespawn-creature',8776)
harpyCreatureSpawn.Name.enGB.set('Enthralled Harpy')
harpyCreatureSpawn.Models.clearAll()
harpyCreatureSpawn.Models.addIds(15396,15397,15394)

export let chanceharpy1 = std.Spells.create(MODNAME,'chanceharpy1-spell',13049)//15283
chanceharpy1.Name.enGB.set('Summon Harpy')
chanceharpy1.Effects.get(0).MiscValueA.set(harpyCreatureSpawn.ID)
export let chanceharpy1m = std.Spells.create(MODNAME,'chanceharpy1m-spell',67670) //melee
chanceharpy1m.Name.enGB.set('Summon Harpy')
chanceharpy1m.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging Harpy to fight for you.')
chanceharpy1m.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging Harpy to fight for you.')
chanceharpy1m.Effects.get(0).TriggerSpell.set(chanceharpy1.ID)
export let chanceharpy1c = std.Spells.create(MODNAME,'chanceharpy1c-spell',67672) //caster
chanceharpy1c.Name.enGB.set('Summon Harpy')
chanceharpy1c.Description.enGB.set('Your attacks and abilties have the chance to summon a ravaging Harpy to fight for you.')
chanceharpy1c.AuraDescription.enGB.set('Your attacks and abilties have the chance to summon a ravaging Harpy to fight for you.')
chanceharpy1c.Effects.get(0).TriggerSpell.set(chanceharpy1.ID)