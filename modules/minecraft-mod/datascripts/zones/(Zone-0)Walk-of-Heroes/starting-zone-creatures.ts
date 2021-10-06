import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { SQL_broadcast_text } from "wotlkdata/sql/types/broadcast_text"
import { SQL_creature_template_addon } from "wotlkdata/sql/types/creature_template_addon"
import { SQL_creature_template_movement } from "wotlkdata/sql/types/creature_template_movement"
import { SQL_creature_text } from "wotlkdata/sql/types/creature_text"
import { SQL_smart_scripts } from "wotlkdata/sql/types/smart_scripts"
import { SQL_waypoint_scripts } from "wotlkdata/sql/types/waypoint_scripts"
import { ArdentCustodian, BiteofSerrakis, BoarSkin, BowofSearingArrows, BrownLeatherSatchel, BurstofKnowledge, CircleofFlame, DarkIronPulverizer, DarkwaterTalwar, DarnassianBleu, DazzlingLongsword, DeadmansHand, DeerSkin, EskhandarsLeftClaw, EskhandarsRightClaw, FangoftheCrystalSpider, FieryWarAxe, FlameWrath, ForceofWill, GalgannsFireblaster, GalgannsFirehammer, GoblinDragonGun, Grimclaw, GutRipper, HerodsShoulder, Ironfoe, IronweaveBelt, IronweaveBoots, IronweaveBracers, IronweaveCowl, IronweaveGloves, IronweaveMantle, IronweavePants, IronweaveRobe, LordGeneralsSword, MantleofDoan, Naglering, Nightblade, RabbitSkin, RagingBerserkersHelm, RefreshingSpringWater, RobeofDoan, SavageGladiatorChain, SavageGladiatorGreaves, SavageGladiatorGrips, SavageGladiatorHelm, SavageGladiatorLeggings, ScarletLeggings, Shadowfang, ShinyRedApple, SmallBlackPouch, SmallBluePouch, SmallGreenPouch, SmallRedPouch, StaffofJordan, StrikeoftheHydra, Teeth, TheGreenTower, UnderworldBand, WraithScythe } from "../(Zone-1)Bramblewood/zone-1-items"
import { LoggingPileLogs } from "../(Zone-5)Mall/mall-resource-spawns"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { addWaypoint, spawnMultipleNPCs, spawnMultipleNPCWithTimer, spawnNPC, spawnNPCWithTimer } from "../../functions/spawning-functions"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial, tierOneBaseResources } from "../../items/armor/tier1-set"
import { MODNAME } from "../../modname"
import { FireStick, FightingStick01, FightingStick02, FightingStick03 } from "./starting-zone-items"

export let WoodcuttingTree = std.CreatureTemplates.create(MODNAME,'woodcuttingtree-creature',721)
WoodcuttingTree.Name.enGB.set('Tree')
WoodcuttingTree.FactionTemplate.set(7) // Non Agressive Faction - will not get attacked by boars
WoodcuttingTree.Scale.set(1)
WoodcuttingTree.Models.clearAll()
WoodcuttingTree.Models.addIds(16977)
WoodcuttingTree.Level.set(1,1)
WoodcuttingTree.MovementSpeed.set(0,0)
WoodcuttingTree.NormalLoot.addItem(LoggingPileLogs.ID,100,1,3,false,1,1)
WoodcuttingTree.NormalLoot.addItem(FireStick.ID,0.5,1,1,false,2,1)
WoodcuttingTree.NormalLoot.addItem(FightingStick01.ID,0.5,1,1,false,2,1)
WoodcuttingTree.NormalLoot.addItem(FightingStick02.ID,0.5,1,1,false,2,1)
WoodcuttingTree.NormalLoot.addItem(FightingStick03.ID,0.5,1,1,false,2,1)
WoodcuttingTree.NormalLoot.addItem(tierOneBaseResources[5],25,1,1,false,3,1)
SQL_creature_template_movement.add(WoodcuttingTree.ID).Rooted.set(1)


export let TalkingCitizen = std.CreatureTemplates.create(MODNAME,'talkingcitizen-creature',39686)
TalkingCitizen.Name.enGB.set('Heroic Citizen')
TalkingCitizen.FactionTemplate.set(35)
TalkingCitizen.Models.clearAll()
TalkingCitizen.Models.addIds(23082,1526,1501,21621)
SQL_creature_template_addon.add(TalkingCitizen.ID).emote.set(1)

export let WelcomeCreature = std.CreatureTemplates.create(MODNAME,'welcomecreature-creature',28951)
WelcomeCreature.Name.enGB.set('Gnarsh Thicchoof')
WelcomeCreature.FactionTemplate.set(35)
WelcomeCreature.Models.clearAll()
WelcomeCreature.Models.addIds(2100)
WelcomeCreature.AIName.SmartAI()
SQL_broadcast_text.add(100000).Text.set("Welcome!").Flags.set(1).EmoteID1.set(0)
SQL_broadcast_text.add(100001).Text.set("Greetings, $c!").Flags.set(1).EmoteID1.set(0)
SQL_broadcast_text.add(100002).Text.set("Let me know if you need help finding anything, $c.").Flags.set(1).EmoteID1.set(0)
SQL_creature_text.add(WelcomeCreature.ID,0,1).Text.set("Welcome!").Type.set(12).Probability.set(100).BroadcastTextId.set(100000)
SQL_creature_text.add(WelcomeCreature.ID,0,2).Text.set("Greetings, $c!").Type.set(12).Probability.set(100).BroadcastTextId.set(100001)
SQL_creature_text.add(WelcomeCreature.ID,0,3).Text.set("Let me know if you need help finding anything, $c.").Type.set(12).Probability.set(100).BroadcastTextId.set(100002)
SQL_smart_scripts.add(WelcomeCreature.ID,0,0,0).event_type.set(10).event_chance.set(100).event_param1.set(1).event_param2.set(5).event_param3.set(30000).event_param4.set(120000).event_param5.set(1).action_type.set(1).target_type.set(7)
spawnNPC(WelcomeCreature.ID,0,0,[-8737.058594,-69.216385,31.271191,3.145761])

export let StandingCitizen = std.CreatureTemplates.create(MODNAME,'standingcitizen-creature',39686)
StandingCitizen.Name.enGB.set('Heroic Citizen')
StandingCitizen.FactionTemplate.set(35)
StandingCitizen.Models.clearAll()
StandingCitizen.Models.addIds(23082,1526,1501,21621)
SQL_creature_template_addon.add(StandingCitizen.ID).emote.set(0)

export let DandotheRiled = std.CreatureTemplates.create(MODNAME,'dando-creature',39686)
DandotheRiled.Name.enGB.set('Dando the Riled')
DandotheRiled.Subname.enGB.set('The Undying')
DandotheRiled.FactionTemplate.set(35)
DandotheRiled.Models.clearAll()
DandotheRiled.Models.addIds(30859,30987,30861,30862)
let DandotheRiledGUID = spawnNPC(DandotheRiled.ID,0,0,[-8743.039062,-86.155716,31.135164,2.109006])
addWaypoint(DandotheRiledGUID,[[-8743.039062,-86.155716,31.135164,2.109006,0],
    [-8747.386719,-76.869591,31.135164,0.903420,0],
    [-8737.828125,-62.211067,31.135164,0.989814,0],
    [-8718.592773,-45.496162,31.135164,0.687435,0],
    [-8700.653320,-44.864475,31.135210,5.851428,0],
    [-8694.234375,-61.146999,31.135210,5.113153,0],
    [-8694.234375,-61.146999,31.135210,5.113153,20000]])
addWaypoint(DandotheRiledGUID,[[-8701.031250,-43.527889,31.135210,2.717688,0],
    [-8716.988281,-44.429104,31.147694,3.931129,0],
    [-8747.326172,-71.871475,31.134922,3.907567,20000]])
SQL_broadcast_text.add(90000).Text.set('Are you kidding me? These prices are absolutely outrageous. How do you expect new players to afford any of this crap?!').EmoteID1.set(1)
SQL_waypoint_scripts.add(DandotheRiled.ID).id.set(6).delay.set(5).command.set(0).datalong.set(0).dataint.set(90000)

export let Rabbit01 = std.CreatureTemplates.create(MODNAME,'rabbit01-creature',721)
Rabbit01.Name.enGB.set('Wild Hare')
Rabbit01.FactionTemplate.set(32)
Rabbit01.SkinningLoot.addItem(Teeth.ID,25,1,4,false,2)
Rabbit01.SkinningLoot.addItem(RabbitSkin.ID,100,1,2)
Rabbit01.UnitFlags.Skinnable.mark()

export let Fawn01 = std.CreatureTemplates.create(MODNAME,'fawn-creature',890)
Fawn01.Name.enGB.set('Fawn')
Fawn01.FactionTemplate.set(32)
Fawn01.Scale.set(2)
Fawn01.SkinningLoot.addItem(Teeth.ID,25,1,4,false,2)
Fawn01.SkinningLoot.addItem(DeerSkin.ID,100,1,2)
Fawn01.UnitFlags.Skinnable.mark()

export let BanditNpc = std.CreatureTemplates.create(MODNAME,'banditnpc-creature3',116)
BanditNpc.Name.enGB.set('Bandit')
BanditNpc.FactionTemplate.set(32) //Fights with Faction 31
BanditNpc.Models.clearAll()
BanditNpc.Models.addIds(2357,2358)
BanditNpc.MovementType.setRandomMovement()
BanditNpc.Level.set(2,3)
BanditNpc.DamageSchool.setNormal()
BanditNpc.Stats.ArmorMod.set(1)
BanditNpc.Stats.DamageMod.set(3)
BanditNpc.Stats.ExperienceMod.set(2)
BanditNpc.Stats.HealthMod.set(2)
BanditNpc.Stats.ManaMod.set(1)
export let BanditNpcLoot = BanditNpc.NormalLoot
addLootToCreature(BanditNpcLoot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,5,2])
addLootToCreature(BanditNpcLoot,tierOneBaseResources,[0,0,2,0,0,2,0])
/*Bags and Food - Group 0*/
addLootToCreature(BanditNpcLoot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)

export let BanditBossNpc = std.CreatureTemplates.create(MODNAME,'banditboss-creature3',116)
BanditBossNpc.Name.enGB.set('Unruly Bandit')
BanditBossNpc.FactionTemplate.set(48) //Fights with Faction 31
BanditBossNpc.Models.clearAll()
BanditBossNpc.Models.addIds(2357,2358)
BanditBossNpc.MovementType.setRandomMovement()
BanditBossNpc.Level.set(3,5)
BanditBossNpc.DamageSchool.setNormal()
BanditBossNpc.Stats.ArmorMod.set(2)
BanditBossNpc.Stats.DamageMod.set(5)
BanditBossNpc.Stats.ExperienceMod.set(3)
BanditBossNpc.Stats.HealthMod.set(3)
BanditBossNpc.Stats.ManaMod.set(1)
export let BanditBossNpcLoot = BanditBossNpc.NormalLoot
addLootToCreature(BanditBossNpcLoot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[10,10,5])
addLootToCreature(BanditBossNpcLoot,tierOneBaseResources,[3,3,4,3,2,2,3])
/*Bags and Food - Group 0*/
addLootToCreature(BanditBossNpcLoot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],1)

export let Boar01 = std.CreatureTemplates.create(MODNAME,'boar01-creature3',299)
Boar01.Name.enGB.set('Wild Boar')
Boar01.FactionTemplate.set(32) //Fights with Faction 31
Boar01.Models.clearAll()
Boar01.Models.addIds(503,389,607,704)
Boar01.MovementType.setRandomMovement()
Boar01.Level.set(1,1)
Boar01.Scale.set(1)
Boar01.DamageSchool.setNormal()
Boar01.Stats.ArmorMod.set(1)
Boar01.Stats.DamageMod.set(1)
Boar01.Stats.ExperienceMod.set(2)
Boar01.Stats.HealthMod.set(1)
Boar01.Stats.ManaMod.set(1)
Boar01.SkinningLoot.addItem(BoarSkin.ID,100,1,2)
Boar01.UnitFlags.Skinnable.mark()
export let Boar01Loot = Boar01.NormalLoot

export let FightingAdventurer01 = std.CreatureTemplates.create(MODNAME,'adventurer01-creature',39686)
FightingAdventurer01.Name.enGB.set('Seasoned Adventurer')
FightingAdventurer01.Subname.enGB.set('Likes to fight shit')
FightingAdventurer01.Level.set(1)
FightingAdventurer01.FactionTemplate.set(31) //Fights with Faction 32
FightingAdventurer01.Models.clearAll()
FightingAdventurer01.Models.addIds(3882,2184,2183,2182)
FightingAdventurer01.Stats.ArmorMod.set(8)
FightingAdventurer01.Stats.DamageMod.set(5)
FightingAdventurer01.Stats.HealthMod.set(7)
FightingAdventurer01.Stats.ManaMod.set(3)
SQL.creature_equip_template.add(FightingAdventurer01.ID,1).ItemID1.set(34661)
SQL.creature_equip_template.add(FightingAdventurer01.ID,2).ItemID1.set(6174)
export let FightingAdventurer01Loot = FightingAdventurer01.NormalLoot
/*Bags - Group 0*/
addLootToCreature(FightingAdventurer01Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(FightingAdventurer01Loot,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.025,1)
/*Rare Items - Group 0*/      
addLootToCreatureSingleChance(FightingAdventurer01Loot,[
    FangoftheCrystalSpider.ID,      GoblinDragonGun.ID,                 DarkwaterTalwar.ID,
    BiteofSerrakis.ID,              Grimclaw.ID,                        Shadowfang.ID,
    StrikeoftheHydra.ID,            GalgannsFireblaster.ID,             GalgannsFirehammer.ID,
    RagingBerserkersHelm.ID,        HerodsShoulder.ID,                  ScarletLeggings.ID,
    DeadmansHand.ID,                RobeofDoan.ID,                      MantleofDoan.ID,
    SavageGladiatorChain.ID,        SavageGladiatorLeggings.ID,         SavageGladiatorHelm.ID,
    SavageGladiatorGrips.ID,        SavageGladiatorGreaves.ID,          DarkIronPulverizer.ID,
    IronweaveRobe.ID,               IronweaveCowl.ID,                   IronweavePants.ID,
    IronweaveGloves.ID,             IronweaveMantle.ID,                 IronweaveBelt.ID,
    IronweaveBoots.ID,              IronweaveBracers.ID,                WraithScythe.ID,
    ForceofWill.ID,                 LordGeneralsSword.ID,               Naglering.ID,
    FlameWrath.ID,                  BurstofKnowledge.ID,                CircleofFlame.ID
],0.2,2)


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
spawnNPCWithTimer(startingZoneWolfBoss.ID,8,0,[-8668.536,-23.10,31.13,3.61],35)
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

export let questGiver03 = std.CreatureTemplates.create(MODNAME,'questgiver03-creature',30368)
questGiver03.Name.enGB.set('Knight Captain')
questGiver03.Models.clearAll()
questGiver03.Models.addIds(21835)
questGiver03.Level.set(10,10)
questGiver03.FactionTemplate.set(35)
questGiver03.DamageSchool.setNormal()
questGiver03.Stats.ArmorMod.set(1)
questGiver03.Stats.DamageMod.set(1)
questGiver03.Stats.ExperienceMod.set(1)
questGiver03.Stats.HealthMod.set(1)
questGiver03.Stats.ManaMod.set(1)
questGiver03.NPCFlags.QuestGiver.mark()

/*Creature Spawn Zone*/

spawnMultipleNPCWithTimer(FightingAdventurer01.ID,5,0,[
    [-8711.581055,-28.310860,31.778915,2.517407],
    [-8708.771484,-21.659365,32.305820,0.475371],
    [-8660.538086,-47.789867,31.134550,0.306507],
    [-8657.004883,-37.224842,31.436808,0.184771],
    [-8699.515625,-29.343998,31.186831,5.560824]],10)
    
/*Rabbit Spawns*/
spawnMultipleNPCWithTimer(Rabbit01.ID,5,0,[
[-8224.416016,-75.297699,0.322220,3.535379],
[-8354.863281,180.439056,1.321210,4.034020],
[-8379.980469,142.481995,6.723893,3.484241],
[-8413.180664,158.412064,5.144286,3.602051],
[-8443.556641,141.237366,4.857116,3.539219],
[-8443.367188,92.631203,15.788922,4.289276],
[-8480.138672,76.322319,16.385532,3.142595],
[-8487.750977,102.934189,20.872574,3.291820],
[-8522.106445,64.822334,26.097893,2.812727],
[-8553.785156,90.636848,18.264809,1.650337],
[-8585.564453,103.017273,16.313858,1.638556],
[-8576.973633,149.789917,14.500829,1.206587],
[-8570.871094,195.364120,14.357735,0.499729],
[-8512.758789,189.057602,17.784130,1.669971],
[-8647.128906,163.095596,14.903246,3.205425],
[-8661.769531,130.388275,15.247450,3.566710],
[-8737.432617,129.313599,16.799538,2.510350],
[-8735.031250,186.348145,14.743181,0.762838],
[-8740.302734,205.799576,14.513929,2.604597],
[-8779.107422,201.672256,14.420785,3.582418],
[-8801.797852,222.791168,15.068887,1.736732],
[-8791.437500,241.769958,14.615882,0.853158],
[-8743.297852,271.483093,15.261915,0.107030],
[-8714.854492,268.952759,14.830345,0.130591],
[-8663.113281,303.667175,14.381198,0.444749],
[-8635.368164,330.443298,14.378572,1.391154],
[-8654.282227,369.291718,14.392118,2.003765],
[-8631.548828,410.497437,16.392134,0.923842],
[-8640.675781,442.977844,15.445580,2.204041],
[-8677.000000,430.444275,15.043460,3.217205],
[-8713.732422,441.757538,15.228001,2.549616],
[-8762.314453,426.099792,14.482961,3.818034],
[-8804.579102,440.607971,14.820017,2.471076],
[-8776.951172,480.329742,15.218239,0.648952],
[-8756.739258,524.838928,14.462840,1.147680],
[-8735.798828,554.380859,14.395740,0.436894],
[-8673.876953,542.870850,14.380318,5.518424],
[-8699.250977,516.918457,14.691679,3.617761],
[-8882.292969,434.598785,5.736168,4.442428],
[-8890.771484,376.586609,6.597244,5.420248],
[-8860.494141,357.415619,5.628677,5.675502],
[-8848.222656,308.950714,6.660160,4.681976],
[-8802.938477,225.329971,15.084712,5.329928],
[-8747.750000,129.391830,14.866506,4.418875],
[-8804.446289,114.447418,2.544333,3.185800],
[-8238.592773,-94.925919,1.552764,3.998765],
[-8264.207031,-78.104279,0.530478,2.687149],
[-8291.517578,-83.913956,1.257136,3.570722],
[-8306.135742,-119.953743,0.113604,4.780235],
[-8290.747070,-134.929840,1.837410,5.597048],
[-8265.114258,-160.081360,1.329985,5.137591],
[-8258.822266,-189.981354,1.840723,4.466082],
[-8274.649414,-207.159821,1.340215,3.205519],
[-8319.933594,-200.528503,0.521759,1.587598],
[-8330.697266,-141.901840,1.006135,0.244567],
[-8289.891602,-35.193764,1.912323,2.954191],
[-8324.192383,-53.492336,0.599718,3.205519],
[-8377.308594,-35.176846,0.166914,2.698937],
[-8382.718750,-106.861839,0.002041,4.297226],
[-8424.727539,-134.878937,0.322561,3.751375],
[-8228.958984,-0.866320,3.105356,1.905689],
[-8257.219727,34.017731,0.993218,1.819296],
[-8294.153320,76.738098,0.087680,0.747227],
[-8191.856445,76.529572,0.285018,1.642577],
[-8182.118652,131.663208,1.118001,2.376925],
[-8263.772461,153.238480,0.187386,2.801040],
[-8280.256836,210.576797,2.558305,1.300929],
[-8224.139648,229.886841,2.940107,0.727588],
[-8193.758789,293.175842,3.325846,2.282676],
[-8204.912109,338.193512,3.427373,2.314092],
[-8268.672852,356.571777,1.419539,2.887433],
[-8278.203125,418.350830,0.265230,1.501205],
[-8213.633789,398.202759,2.330755,6.060439],
[-8167.461914,405.299896,0.361587,1.022109],
[-8134.155273,474.268860,0.962047,0.252418],
[-8094.434082,447.518188,-0.164097,5.663814],
[-8060.079102,445.544434,-5.389906,0.319177],
[-8007.525879,463.982483,1.490667,0.056068],
[-7996.390625,430.305756,1.702083,4.929462],

    [-8752.416016,-55.609863,32.740227,1.547497],
    [-8742.524414,-27.454241,32.073261,0.538260],
    [-8697.744141,-17.519131,31.180975,0.589310],
    [-8708.807617,-54.212940,31.565746,4.622335],
    [-8632.762695,-58.197071,32.607571,1.677089],
    [-8654.867188,-39.264111,31.256962,2.242575]],30)

/*Fawn Spawns*/
spawnMultipleNPCWithTimer(Fawn01.ID,5,0,[

    [-8061.970703,201.731735,1.174377,5.102258],
    [-8025.303223,172.239777,0.523174,5.703087],
    [-7999.850098,116.646225,2.114146,6.095786],
    [-7947.083008,131.017181,0.478270,0.362378],
    [-7910.515625,168.122314,2.726336,0.825763],
    [-7874.849121,185.306320,0.948785,0.429137],
    [-7856.412109,234.790543,1.755053,0.955354],
    [-7804.593262,247.756119,0.181069,0.798274],
    [-7792.575195,337.747528,1.820405,1.485497],
    [-7823.513672,398.583496,1.547921,3.350819],
    [-7885.959473,401.085968,2.062373,3.103418],
    [-8000.028809,446.584839,0.053655,2.498662],
    [-8007.058105,550.804626,0.242084,1.257732],
    [-8021.678223,610.197571,1.088982,2.773551],
    [-8091.252930,638.490051,0.134432,3.299768],
    [-8168.776855,583.090332,-2.599264,3.778863],
    [-8196.809570,509.096252,1.027916,4.367913],
    [-8283.909180,434.273346,1.006449,3.904528],
    [-8339.169922,411.563171,2.168990,4.658504],
    [-8363.975586,314.426544,1.192020,5.220057],
    [-8324.290039,234.296432,1.866770,0.024638],
    [-8287.391602,263.102905,3.050151,0.283819],
    [-8229.648438,258.559021,3.077799,0.079616],
    [-8138.889648,270.790955,0.057817,6.272481],
    [-8119.639160,184.818039,0.462849,4.151912],
    [-8184.550781,125.014763,1.097368,4.238304],
    [-8171.518066,59.534889,0.771008,5.294657],
    [-8121.000977,-9.211844,0.529058,3.056282],
    [-8201.439453,-26.549778,1.282197,4.799864],
    [-8209.302734,-78.071373,0.312487,4.524973],
    [-8220.663086,-156.934952,0.198076,6.131103],
    [-8140.496582,-154.327072,0.951697,4.411087],
    [-8215.223633,-227.210831,0.278653,3.574638],
    [-8289.287109,-192.725708,1.226542,2.577182],
    [-8330.372070,-140.696930,0.906498,2.357271],
    [-8431.476562,-140.916946,0.479238,3.806330],
    

    [-8716.108398,-33.742191,32.049961,6.102806],
    [-8654.079102,-75.843369,33.006699,5.710110],
    [-8679.473633,-62.391918,31.180559,6.161709]],10)

/*SMALL Tree Spawns*/
spawnMultipleNPCWithTimer(WoodcuttingTree.ID,0,0,[
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
    [-8370.670898,5.638326,1.217611,3.315193],
    [-8388.247070,-10.637729,1.046293,4.524703],
    [-8376.723633,-40.758194,0.196736,3.790358],
    [-8402.961914,-83.131302,0.003563,2.934274],
    [-8415.800781,-92.732475,0.037421,5.259050],
    [-8410.838867,-111.126343,0.001823,3.641132],
    [-8426.948242,-125.878082,0.001825,2.800757],
    [-8445.824219,-127.990250,0.036207,3.319120],
    [-8447.175781,-195.037338,0.856807,5.643898],
    [-8403.046875,-192.016464,0.350498,0.338531],
    [-8388.506836,-141.469131,-0.018635,2.270611],
    [-8276.736328,-24.119333,1.368587,3.193454],
    [-8305.287109,-19.300594,0.112131,4.387258],
    [-8334.509766,-26.698771,0.119276,6.122985],
    [-8281.903320,-62.772758,2.371090,6.134764],
    [-8274.027344,-72.420616,1.045432,5.204072],
    [-8257.727539,-78.117355,1.677707,0.169665],
    [-8217.188477,-95.915939,0.562622,5.549644],
    [-8225.116211,-123.766159,0.794386,4.968450],
    [-8205.580078,-141.643646,3.252555,2.800744],
    [-8220.119141,-169.826538,1.846378,5.007711],
    [-8201.691406,-176.749100,0.813836,0.122533],
    [-8189.745117,-195.684418,0.614737,3.916009],
    [-8207.776367,-218.074539,0.249940,4.029895],
    [-8229.111328,-230.817215,0.697466,3.550802],
    [-8254.349609,-278.550140,2.067099,2.305944],
    [-8259.217773,-245.677048,1.662039,1.347758],
    [-8224.524414,-139.489609,2.015016,3.684319],
    [-8189.945801,-164.945694,-5.948020,5.530000],
    [-8152.493652,-198.047546,-3.777777,6.115120],
    [-8131.090820,-174.059357,1.818768,1.076789],
    [-8147.371094,-155.713593,0.777811,1.661911],
    [-8120.869629,-146.802261,3.316553,1.465560],
    [-8103.001465,-122.993233,2.071352,0.051846],
    [-8129.495117,-91.921631,0.487480,0.990396],
    [-8113.977539,-81.342278,1.305370,0.464179],
    [-8114.784180,-59.120068,0.462974,2.957818],
    [-8137.924805,-63.581577,1.005658,3.228781],
    [-8180.318848,-65.321304,0.631258,3.095263],
    [-8189.656250,-78.691277,1.177030,3.723582],
    [-8176.893555,-29.402729,0.175064,0.597696],
    [-8143.242676,-26.776020,0.293219,3.209146],
    [-8256.503906,25.051359,1.758573,2.282376],
    [-8264.548828,36.123596,2.454403,1.504831],
    [-8249.729492,69.108032,1.984584,1.041446],
    [-8248.471680,80.985840,1.674766,2.808597],
    [-8293.375977,86.599686,0.081286,4.626795],
    [-8303.134766,95.947380,-0.041067,5.074475],
    [-8297.662109,53.049591,11.749305,4.175193],
    [-8315.476562,34.316448,10.739170,4.238023],
    [-8314.906250,7.374843,11.877803,5.687082],
    [-8295.773438,-5.604093,12.292934,3.755008],
    [-8300.660156,-3.629210,12.278763,4.029898],
    [-8198.326172,-1.664609,0.146155,1.493057],
    [-8141.601074,17.436691,0.960718,2.007498],
    [-8165.146484,66.873459,0.683591,0.766569],
    [-8129.037109,64.340454,0.113054,5.003793],
    [-8130.709961,42.820427,2.306023,4.430455],
    [-8200.119141,100.955948,1.644024,3.020083],
    [-8245.033203,137.649765,1.307699,1.751665],
    [-8258.849609,155.219666,1.369388,2.167926],
    [-8301.826172,128.229218,0.670607,2.972959],
    [-8274.856445,186.791290,0.060158,0.718866],
    [-8263.701172,213.623901,3.031667,1.158689],
    [-8250.426758,233.631454,3.023173,0.970193],
    [-8237.827148,241.794067,3.009599,0.432195],
    [-8220.663086,249.787201,2.886012,1.677052],
    [-8179.314941,250.672882,2.184568,0.345800],
    [-8165.594238,277.170197,0.162495,0.593201],
    [-8123.233398,280.483368,0.047880,5.969256],
    [-8103.412109,291.224487,1.764895,1.107641],
    [-8079.732422,340.725128,0.162142,1.205815],
    [-8078.400391,354.449829,2.385360,5.906424],
    [-8041.907715,334.583618,1.296495,4.806875],
    [-8053.188477,281.011963,0.814389,4.422033],
    [-8059.739258,266.540924,1.480420,5.729717],
    [-8027.593262,246.102219,-5.725382,5.258480],
    [-8025.330078,222.124603,-5.517488,4.363131],
    [-8013.544434,192.741150,-5.498695,5.285976],
    [-7989.719727,173.266678,-7.971596,4.971821],
    [-7978.765137,142.356247,1.561704,4.802958],
    [-8044.367676,139.099304,1.970452,3.075085],
    [-8080.341797,136.625687,1.538620,1.908768],
    [-8074.245605,178.556610,0.560772,1.421821],
    [-8071.239258,183.425385,0.554498,6.165626],
    [-7958.961914,104.445000,2.136500,6.004618],
    [-7918.310547,125.004173,1.488422,5.906446],
    [-7899.740723,74.299049,2.628077,4.528071],
    [-7894.301758,59.626408,0.800842,4.323870],
    [-7891.445312,41.280350,2.050510,4.543780],
    [-7890.108398,29.182775,0.215628,5.714022],
    [-7905.701660,2.320868,2.274331,3.840851],
    [-7921.198730,-5.429278,1.394500,4.645880],
    [-7935.485840,-20.030704,1.320264,4.312086],
    [-7934.682617,-29.707613,2.270182,3.554178],
    [-7933.334961,-45.213154,0.954330,5.765073],
    [-7905.550293,-60.888844,1.961161,4.708716],
    [-7938.078125,-76.848137,1.802343,3.012257],
    [-7957.250000,-87.948914,0.508331,4.410265],
    [-7990.489746,-100.767921,3.495531,3.228241],
    [-7993.332031,-90.839790,3.068202,2.109048],
    [-7995.927246,-50.159126,0.465467,2.784491],
    [-8010.305176,-55.067253,1.656387,2.321106],
    [-8036.282227,-73.357788,0.988514,2.800199],
    [-8071.962891,-62.665699,1.162446,3.719115],
    [-8099.297852,-41.862446,1.144534,2.654901],
    [-8124.321289,2.629086,1.336691,2.081560],
    [-8117.169434,88.753876,0.080746,1.869502],
    [-8126.869141,105.173088,0.589634,3.051527],
    [-8156.596191,140.200806,1.590099,2.933717],
    [-8181.576172,302.793030,2.547143,2.427135],
    [-8189.105469,308.276154,3.550578,2.219004],
    [-8202.223633,345.771942,3.414601,1.987312],
    [-8206.567383,362.399567,3.170079,1.213694],
    [-8217.145508,380.941559,1.446671,1.967677],
    [-8229.336914,392.437622,1.382076,3.601306],
    [-8287.760742,398.905884,0.416638,3.526693],
    [-8303.118164,390.243683,1.166930,2.753075],
    [-8316.023438,368.250488,0.622905,3.412810],
    [-8329.875000,381.564270,0.834878,2.364303],
    [-8335.655273,396.447266,2.421978,0.231947],
    [-8332.750977,432.653625,1.673632,1.410044],
    [-8332.067383,447.467590,2.126122,3.114359],
    [-8355.123047,480.567627,0.727657,2.380011],
    [-8368.717773,477.989563,2.105202,1.641737],
    [-8343.893555,515.446045,1.281721,0.106283],
    [-8322.654297,514.992310,0.189432,0.192676],
    [-8288.922852,519.122986,1.137861,6.079238],
    [-8283.806641,524.053894,0.703175,5.038588],
    [-8276.764648,486.420898,0.440198,4.846162],
    [-8275.788086,472.580536,1.448085,3.911540],
    [-8246.088867,447.491119,1.110883,5.969280],
    [-8229.782227,444.328339,1.564969,5.937864],
    [-8189.390625,426.959167,1.569528,5.757226],
    [-8172.855469,420.644379,0.126649,0.875975],
    [-8131.175781,424.883820,1.075614,6.165632],
    [-8108.525391,465.698914,0.837889,1.111594],
    [-8088.044434,467.672943,0.045766,0.828851],
    [-8071.743164,498.639954,0.755134,2.234714],
    [-8058.016602,518.147034,0.766026,0.337977],
    [-8052.156738,532.303955,1.202664,5.553023],
    [-7995.221680,517.304443,0.038383,5.101422],
    [-7989.231445,500.417450,0.410015,5.458776],
    [-8020.252441,469.267120,1.296001,3.075097],
    [-8033.305664,440.282471,-6.152388,3.774102],
    [-8049.184082,469.375854,-3.679938,5.945728],
    [-8043.217285,389.074280,-5.733107,4.842239],
    [-8005.770020,347.016052,1.381199,5.961423],
    [-7961.839355,325.287750,1.603387,5.399866],
    [-7943.707031,317.208862,0.721777,5.525530],
    [-7912.166016,362.780579,1.057833,1.040906],
    [-7920.860352,384.469849,0.996238,1.040906],
    [-7920.872559,411.545929,2.470514,0.447931],
    [-7891.246094,416.549133,4.119899,0.915244],
    [-7844.522461,382.451385,0.863095,5.611929],
    [-7837.437988,371.152893,0.903975,6.185267],
    [-7825.917480,383.176788,2.223791,0.624647],
    [-7776.863281,369.089386,1.881213,5.376312],
    [-7780.794922,342.694977,0.810997,4.822610],
    [-7795.536133,333.811981,1.355371,4.308175],
    [-7807.640625,302.083984,0.554805,3.738760],
    [-7783.985352,280.238983,2.010545,4.920781],
    [-7771.359863,270.743347,2.346816,2.109055],
    [-7821.979980,229.295837,1.968306,3.589531],
    [-7823.790039,212.456009,2.570715,5.568728],
    [-7861.591309,179.225037,2.123152,3.365687],
    [-7866.622559,182.388443,1.391832,3.365687],
    [-7879.150879,164.426498,2.836161,5.077850],
    [-7882.643555,128.216187,3.595030,3.789802],
    [-7931.439941,193.082794,0.531004,0.636427],
    [-7939.903809,214.656830,22.895662,0.369391],
    [-7922.965820,221.220245,20.873144,0.373318],
    [-7919.172363,258.338470,4.801682,5.164246],
    [-8688.759766,-16.322594,31.601250,3.204649]],30)

/*Wild Boar Spawns - not working*/
spawnMultipleNPCWithTimer(Boar01.ID,5,0,[
    [-8719.245117,-31.721756,31.517546,2.776600],
    [-8706.595703,-12.252595,31.755642,6.024221],
    [-8691.984375,-34.009716,32.009277,4.539816],
    [-8715.636719,-66.587173,31.135080,4.944289],
    [-8666.493164,-71.341705,31.135036,0.408609],
    [-8655.852539,-71.793884,32.007816,5.576530],
    [-8650.274414,-52.797848,31.658913,1.716297],
    [-8658.132812,-47.646954,31.140652,1.739859],
    [-8654.184570,-36.367447,31.438324,1.618122],
    [-8680.250000,-10.810021,31.378077,3.891851]],10)

/*Citizens of the Walk of Heroes*/
spawnMultipleNPCs(TalkingCitizen.ID,0,0,[
    [-8757.347656,-93.769424,31.881319,4.005735],
    [-8758.279297,-97.759666,31.880352,1.798765],
    [-8760.677734,-95.579552,31.880352,0.121941],
    [-8760.208008,-89.981438,31.882771,0.416467],
    [-8757.812500,-88.718742,31.874933,3.636603],
    [-8745.782227,-88.870399,31.134769,2.953308],
    [-8748.785156,-89.192947,31.134769,0.636383],
    [-8737.630859,-84.078926,31.803057,6.251980],
    [-8735.920898,-84.431122,31.796766,3.349936],
    [-8735.184570,-91.743523,31.795307,0.624600],
    [-8734.529297,-87.922684,31.795639,4.999271],
    [-8757.010742,-68.293053,31.136017,0.872003],
    [-8754.271484,-65.192757,31.437584,4.182455],
    [-8771.211914,-77.567436,31.735508,5.081734],
    [-8768.416016,-80.486427,31.737225,2.128631],
    [-8766.156250,-75.561638,31.736290,0.950534],
    [-8766.782227,-72.987892,31.736374,5.871055],
    [-8763.260742,-72.361435,31.744356,3.891849],
    [-8702.094727,-61.369545,31.135279,4.740088]])
spawnMultipleNPCs(StandingCitizen.ID,0,0,[
    [-8702.535156,-52.957691,31.134275,4.779361],
    [-8702.372070,-56.103153,31.134275,4.744020],
    [-8702.339844,-58.769962,31.134275,4.724386]])
spawnMultipleNPCWithTimer(BanditNpc.ID,5,0,[
    [-8140.867676,-73.425201,0.177639,4.583888],
    [-8140.269043,-82.285004,0.166196,3.814199],
    [-8148.061523,-82.079811,0.176506,3.814199],
    [-8148.476562,-90.084602,0.176596,5.341795],
    [-8139.887695,-96.349358,0.196587,5.612757],
    [-8139.022461,-107.209854,0.221241,4.536767],
    [-8144.115234,-118.882713,0.234199,3.409721],
    [-8153.927734,-112.816322,0.180442,2.557564],
    [-8162.557617,-119.531342,0.180442,4.191193],
    [-8173.943848,-120.845383,0.180465,2.475098],
    [-8176.275391,-108.340721,0.180465,1.564035],
    [-8174.864746,-96.945732,0.187117,2.357288],
    [-8177.384277,-84.536232,0.204347,0.916082],
    [-8165.271484,-85.960945,0.197669,1.599378],
    [-8165.078125,-74.324265,0.264852,3.079854],
    [-8175.787598,-72.168137,0.218016,4.277584],
    [-8187.614258,-80.811409,1.141856,3.346888],
    [-8197.491211,-88.126434,1.785212,2.133447],
    [-8185.204102,-56.456036,0.758497,5.809112],
    [-8176.474121,-52.473618,0.215730,0.613700],
    [-8163.915039,-59.474377,0.194726,5.852308],
    [-8151.785156,-49.993347,0.224089,0.743291],
    [-8136.929199,-55.738045,0.907171,6.013313],
    [-8134.450684,-40.404682,0.661383,1.489419],
    [-8119.629883,-61.642860,0.352910,5.907277],
    [-8107.961914,-71.897362,1.646522,5.051199],
    [-8121.360840,-92.569664,0.595392,4.544617],
    [-8127.064453,-120.929001,0.596171,0.464468],
    [-8113.970703,-118.853958,1.035691,3.370442],
    [-8138.332520,-150.610535,0.744515,3.904515],
    [-8155.258301,-143.772705,0.536027,2.859935],
    [-8165.055176,-158.862701,4.650616,4.214749],
    [-8172.538086,-138.023895,-2.176677,2.954185],
    [-8188.282227,-126.753784,1.124124,3.994838]],30)
    
spawnMultipleNPCWithTimer(BanditBossNpc.ID,0,0,[
    [-8114.638672,-112.206512,0.463341,2.844230],
    [-8133.045410,-127.867378,0.715504,2.180568],
    [-8129.356934,-71.137146,0.144882,4.026255],
    [-8168.493652,-68.529823,0.216336,4.697769],
    [-8186.43,321.932,2.95887,0.957275],
    [-8188.56,288.131,1.68687,1.37432],
    [-8198.21,346.771,3.40619,3.01895],
    [-8203.28,277.553,2.64777,1.20625],
    [-8206.57,310.296,4.51836,4.37062],
    [-8208.45,329.45,3.47493,5.42304],
    [-8209.81,292.351,3.36257,0.556723],
    [-8214.62,267.056,2.78059,0.0634912],
    [-8219.17,347.323,3.40481,3.04958],
    [-8220.84,301.165,3.37038,4.31878],
    [-8222.43,313.188,3.41457,5.40263],
    [-8223.26,276.916,4.00441,2.42451],
    [-8227.06,275.149,4.00325,1.30139],
    [-8229.44,277.529,4.00441,0.727264],
    [-8234.02,320.696,3.39767,0.0195103],
    [-8235.73,291.778,3.33295,0.97847],
    [-8239.89,348.792,3.24585,3.47605],
    [-8241.46,323.473,3.32175,0.971413],
    [-8243.73,262.369,3.12942,1.05074],
    [-8246.03,304.924,3.32319,6.26971],
    [-8253.21,286.946,3.44802,0.234016],
    [-8254.54,279.831,3.46145,2.1174],
    [-8261.02,272.803,3.51261,1.698],
    [-8261.57,300.715,3.30341,0.264554],
    [-8261.77,322.525,3.30057,5.38771],
    [-8264.01,344.409,2.08543,3.69046],
    [-8268.36,276.983,3.56255,0.511262],
    [-8269.16,264.63,3.08098,2.41733],
    [-8272.12,267.42,3.06999,5.5707],
    [-8272.27,264.249,3.06493,0.732647],
    [-8280.55,315.436,3.24517,5.99727],
    [-8280.91,310.41,3.38963,5.97528],
    [-8281.02,336.043,2.92788,3.82005],
    [-8281.38,288.486,3.20434,0.554355],
    [-8299.57,296.302,3.21167,0.600705],
    [-8300.32,320.861,1.90464,4.85207]],120)

