import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { spawnNPC } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

export let startingZoneWolfBoss = std.CreatureTemplates.create(MODNAME,'startingzonewolfboss-creature',299)
startingZoneWolfBoss.Name.enGB.set('Ravaging Worg')
startingZoneWolfBoss.Models.clearAll()
startingZoneWolfBoss.Models.addIds(24235)
startingZoneWolfBoss.MovementType.setRandomMovement()
startingZoneWolfBoss.Level.set(2,2)
startingZoneWolfBoss.Rank.setElite()
startingZoneWolfBoss.FactionTemplate.set(48)
startingZoneWolfBoss.DamageSchool.setNormal()
startingZoneWolfBoss.Stats.ArmorMod.set(1)
startingZoneWolfBoss.Stats.DamageMod.set(2)
startingZoneWolfBoss.Stats.ExperienceMod.set(1)
startingZoneWolfBoss.Stats.HealthMod.set(3)
startingZoneWolfBoss.Stats.ManaMod.set(1)
spawnNPC(startingZoneWolfBoss.ID,8,0,[-8668.536,-23.10,31.13,3.61])
export let startingZoneWolfBossLoot = startingZoneWolfBoss.NormalLoot


export let ghostlyFigure01 = std.CreatureTemplates.create(MODNAME,'ghostlyfigure01-creature',299)
ghostlyFigure01.Name.enGB.set('Ghostly Figure')
ghostlyFigure01.Models.clearAll()
ghostlyFigure01.Models.addIds(10478)
ghostlyFigure01.Level.set(1,1)
ghostlyFigure01.FactionTemplate.set(35)
ghostlyFigure01.DamageSchool.setNormal()
ghostlyFigure01.Stats.ArmorMod.set(1)
ghostlyFigure01.Stats.DamageMod.set(1)
ghostlyFigure01.Stats.ExperienceMod.set(1)
ghostlyFigure01.Stats.HealthMod.set(1)
ghostlyFigure01.Stats.ManaMod.set(1)
spawnNPC(ghostlyFigure01.ID,0,0,[-8667.347,-17.63,31.13,1.49])
SQL.creature_template_addon.add(ghostlyFigure01.ID).auras.set('68442') // Force Kneel

export let questGiver01 = std.CreatureTemplates.create(MODNAME,'questgiver01-creature',30368)
questGiver01.Name.enGB.set('Elder Fogwaffle')
questGiver01.Models.clearAll()
questGiver01.Models.addIds(26958)
questGiver01.Level.set(10,10)
questGiver01.FactionTemplate.set(35)
questGiver01.DamageSchool.setNormal()
questGiver01.Stats.ArmorMod.set(1)
questGiver01.Stats.DamageMod.set(1)
questGiver01.Stats.ExperienceMod.set(1)
questGiver01.Stats.HealthMod.set(1)
questGiver01.Stats.ManaMod.set(1)
spawnNPC(questGiver01.ID,0,0,[-8680.762,-52.365,34.40,1.268])
SQL.creature_template_addon.add(questGiver01.ID).auras.set('25824') // Spotlight

export let questGiver02 = std.CreatureTemplates.create(MODNAME,'questgiver02-creature',30368)
questGiver02.Name.enGB.set('Arcanist Fractal Spem')
questGiver02.Models.clearAll()
questGiver02.Models.addIds(21835)
questGiver02.Level.set(10,10)
questGiver02.FactionTemplate.set(35)
questGiver02.DamageSchool.setNormal()
questGiver02.Stats.ArmorMod.set(1)
questGiver02.Stats.DamageMod.set(1)
questGiver02.Stats.ExperienceMod.set(1)
questGiver02.Stats.HealthMod.set(1)
questGiver02.Stats.ManaMod.set(1)
spawnNPC(questGiver02.ID,0,0,[-8744.915,-11.808,31.532,1.98])
SQL.creature_template_addon.add(questGiver02.ID).auras.set('25824') // Spotlight
SQL.creature_template_addon.add(questGiver02.ID).auras.set('68442') // Force Kneel