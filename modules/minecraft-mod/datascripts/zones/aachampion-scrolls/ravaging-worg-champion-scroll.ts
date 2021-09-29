import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"

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

export let WorgChampion = std.Spells.create(MODNAME,'worgchampion-spell',66691)
WorgChampion.Name.enGB.set('Summon Worg Champion')
WorgChampion.Description.enGB.set('Summons a powerful Worg Champion to fight.')
WorgChampion.Effects.get(0).MiscValueA.set(WorgChampionCreature.ID)

export let WorgScroll = std.Items.create(MODNAME,'worgscroll-1',33457)
WorgScroll.Name.enGB.set('Champion Scroll : Ravaging Worg')
WorgScroll.Description.enGB.set('This scroll contains the ability to summon a powerful worg, be weary, it is advised that this challenge be accepted with additional party members.')
WorgScroll.Flags.set(0)
WorgScroll.FlagsExtra.set(0)
WorgScroll.MaxCount.set(1)
WorgScroll.RequiredLevel.set(1)
WorgScroll.Spells.clearAll()
WorgScroll.Spells.add(WorgChampion.ID)

//create loot for boss here

//create boss script here
