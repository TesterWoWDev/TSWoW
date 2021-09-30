import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { spawnMultipleNPCs, spawnNPC } from "../../functions/spawning-functions"
import { MODNAME } from "../../modname"

/*Ambient Creature Spawns*/
export let WoodcuttingTree = std.CreatureTemplates.create(MODNAME,'woodcuttingtree-creature',721)
WoodcuttingTree.Name.enGB.set('Tree')
WoodcuttingTree.Scale.set(1)
WoodcuttingTree.Models.clearAll()
WoodcuttingTree.Models.addIds(16977)
WoodcuttingTree.Level.set(1,1)

/*Rabbit Spawns*/
spawnMultipleNPCs(721,5,0,[
    [-8752.416016,-55.609863,32.740227,1.547497],
    [-8742.524414,-27.454241,32.073261,0.538260],
    [-8697.744141,-17.519131,31.180975,0.589310],
    [-8708.807617,-54.212940,31.565746,4.622335],
    [-8632.762695,-58.197071,32.607571,1.677089],
    [-8654.867188,-39.264111,31.256962,2.242575]])

/*Fawn Spawns*/
spawnMultipleNPCs(890,5,0,[
    [-8716.108398,-33.742191,32.049961,6.102806],
    [-8654.079102,-75.843369,33.006699,5.710110],
    [-8679.473633,-62.391918,31.180559,6.161709]])

/*SMALL Tree Spawns*/
spawnMultipleNPCs(WoodcuttingTree.ID,0,0,[
    [-8727.718750,-38.397255,31.283049,3.554162],
    [-8734.904297,-46.539581,31.506783,2.650954],
    [-8758.661133,-43.644886,31.158398,3.832979],
    [-8759.510742,-58.613422,31.437906,5.176006],
    [-8728.844727,-78.705399,31.601536,5.878936],
    [-8720.337891,-72.532272,31.176889,0.326171],
    [-8694.780273,-74.936867,31.134272,5.474452],
    [-8681.517578,-71.739296,31.317982,0.502878],
    [-8663.000977,-78.752197,31.212084,5.988886],
    [-8642.680664,-74.266396,31.328184,0.306529],
    [-8641.277344,-56.033127,31.289261,1.979428],
    [-8647.504883,-37.426968,31.154825,1.044804],
    [-8658.979492,-11.219471,31.989655,1.838056],
    [-8676.500000,-3.677603,31.134516,3.416707],
    [-8688.759766,-16.322594,31.601250,3.204649]])


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

export let questGiver01 = std.CreatureTemplates.create(MODNAME,'questgiver01-creature',2934)
questGiver01.Name.enGB.set('Elder Fogwaffle')
questGiver01.Models.clearAll()
questGiver01.Models.addIds(26958)
questGiver01.Level.set(10,10)
questGiver01.FactionTemplate.set(35)
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
questGiver02.NPCFlags.QuestGiver.mark()
spawnNPC(questGiver02.ID,0,0,[-8744.915,-11.808,31.532,1.98])
SQL.creature_template_addon.add(questGiver02.ID).auras.set('25824') // Spotlight
SQL.creature_template_addon.add(questGiver02.ID).auras.set('68442') // Force Kneel