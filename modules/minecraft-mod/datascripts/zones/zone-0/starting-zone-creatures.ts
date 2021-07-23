import { std } from "tswow-stdlib"
import { SQL } from "../../../../../bin/scripts/tswow/wotlkdata/sql/SQLFiles"
import { spawnNPC } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

export let startingZoneWolfBoss = std.CreatureTemplates.create(MODNAME,'Placeholder-creature4',299)
startingZoneWolfBoss.Name.enGB.set('Ravaging Worg')
startingZoneWolfBoss.Models.clearAll()
startingZoneWolfBoss.Models.addIds(24235)
startingZoneWolfBoss.MovementType.setRandomMovement()
startingZoneWolfBoss.Level.set(2,2)
startingZoneWolfBoss.Rank.setElite()
startingZoneWolfBoss.FactionTemplate.set(48)
startingZoneWolfBoss.DamageSchool.setNormal()
startingZoneWolfBoss.Stats.ArmorMod.set(1)
startingZoneWolfBoss.Stats.DamageMod.set(1)
startingZoneWolfBoss.Stats.ExperienceMod.set(1)
startingZoneWolfBoss.Stats.HealthMod.set(1)
startingZoneWolfBoss.Stats.ManaMod.set(1)
spawnNPC(startingZoneWolfBoss.ID,8,0,[-8668.536,-23.10,31.13,3.61])
export let startingZoneWolfBossLoot = startingZoneWolfBoss.NormalLoot


export let ghostlyFigure01 = std.CreatureTemplates.create(MODNAME,'Placeholder-creature4',299)
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