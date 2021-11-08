import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { spawnNPC, addWaypoint, spawnNPCWithTimer, spawnMultipleNPCWithTimer, spawnMultipleNPCs } from "../../functions/spawning-functions"
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set"
import { MODNAME } from "../../modname"
import { LoggingPileLogs, FireStick, FightingStick01, FightingStick02, FightingStick03, Teeth, RabbitSkin, DeerSkin, SmallRedPouch, SmallBluePouch, SmallBlackPouch, SmallGreenPouch, BrownLeatherSatchel, DarnassianBleu, ShinyRedApple, RefreshingSpringWater, BoarSkin, DazzlingLongsword, Nightblade, FieryWarAxe, ArdentCustodian, StaffofJordan, TheGreenTower, BowofSearingArrows, UnderworldBand, GutRipper, Ironfoe, EskhandarsRightClaw, EskhandarsLeftClaw, FangoftheCrystalSpider, GoblinDragonGun, DarkwaterTalwar, BiteofSerrakis, Grimclaw, Shadowfang, StrikeoftheHydra, GalgannsFireblaster, GalgannsFirehammer, RagingBerserkersHelm, HerodsShoulder, ScarletLeggings, DeadmansHand, RobeofDoan, MantleofDoan, SavageGladiatorChain, SavageGladiatorLeggings, SavageGladiatorHelm, SavageGladiatorGrips, SavageGladiatorGreaves, DarkIronPulverizer, IronweaveRobe, IronweaveCowl, IronweavePants, IronweaveGloves, IronweaveMantle, IronweaveBelt, IronweaveBoots, IronweaveBracers, WraithScythe, ForceofWill, LordGeneralsSword, Naglering, FlameWrath, BurstofKnowledge, CircleofFlame } from "../item-manifest"

export let WoodcuttingTree = std.CreatureTemplates.create(MODNAME,'woodcuttingtree-creature',721)
WoodcuttingTree.Name.enGB.set('Tree')
WoodcuttingTree.FactionTemplate.set(7) // Non Agressive Faction - will not get attacked by boars
WoodcuttingTree.Scale.set(1)
WoodcuttingTree.Models.clearAll()
WoodcuttingTree.Models.addIds(16977)
WoodcuttingTree.Level.set(1,1)
WoodcuttingTree.MovementSpeed.set(0,0)
WoodcuttingTree.NormalLoot.modRef(table=>{
    table.addItem(LoggingPileLogs.ID,100,1,3,false,1,1)
    table.addItem(FireStick.ID,0.5,1,1,false,2,1)
    table.addItem(FightingStick01.ID,0.5,1,1,false,2,1)
    table.addItem(FightingStick02.ID,0.5,1,1,false,2,1)
    table.addItem(FightingStick03.ID,0.5,1,1,false,2,1)
    table.addItem(tierOneBaseResources[5],25,1,1,false,3,1)
    
})
SQL.creature_template_movement.add(WoodcuttingTree.ID).Rooted.set(1)

export let TalkingCitizen = std.CreatureTemplates.create(MODNAME,'talkingcitizen-creature',39686)
TalkingCitizen.Name.enGB.set('Heroic Citizen')
TalkingCitizen.FactionTemplate.set(35)
TalkingCitizen.Models.clearAll()
TalkingCitizen.Models.addIds(23082,1526,1501,21621)
SQL.creature_template_addon.add(TalkingCitizen.ID).emote.set(1)

export let WelcomeCreature = std.CreatureTemplates.create(MODNAME,'welcomecreature-creature',28951)
WelcomeCreature.Name.enGB.set('Gnarsh Thicchoof')
WelcomeCreature.FactionTemplate.set(35)
WelcomeCreature.Models.clearAll()
WelcomeCreature.Models.addIds(2100)
WelcomeCreature.AIName.SmartAI()
SQL.broadcast_text.add(100000).Text.set("Welcome!").Flags.set(1).EmoteID1.set(0)
SQL.broadcast_text.add(100001).Text.set("Greetings, $c!").Flags.set(1).EmoteID1.set(0)
SQL.broadcast_text.add(100002).Text.set("Let me know if you need help finding anything, $c.").Flags.set(1).EmoteID1.set(0)
SQL.creature_text.add(WelcomeCreature.ID,0,1).Text.set("Welcome!").Type.set(12).Probability.set(100).BroadcastTextId.set(100000)
SQL.creature_text.add(WelcomeCreature.ID,0,2).Text.set("Greetings, $c!").Type.set(12).Probability.set(100).BroadcastTextId.set(100001)
SQL.creature_text.add(WelcomeCreature.ID,0,3).Text.set("Let me know if you need help finding anything, $c.").Type.set(12).Probability.set(100).BroadcastTextId.set(100002)
SQL.smart_scripts.add(WelcomeCreature.ID,0,0,0).event_type.set(10).event_chance.set(100).event_param1.set(1).event_param2.set(5).event_param3.set(30000).event_param4.set(120000).event_param5.set(1).action_type.set(1).target_type.set(7)
spawnNPC(WelcomeCreature.ID,0,0,{map:725,x:-8737.058594,y:-69.216385,z:31.271191,o:3.145761},
    )

export let StandingCitizen = std.CreatureTemplates.create(MODNAME,'standingcitizen-creature',39686)
StandingCitizen.Name.enGB.set('Heroic Citizen')
StandingCitizen.FactionTemplate.set(35)
StandingCitizen.Models.clearAll()
StandingCitizen.Models.addIds(23082,1526,1501,21621)
SQL.creature_template_addon.add(StandingCitizen.ID).emote.set(0)

export let DandotheRiled = std.CreatureTemplates.create(MODNAME,'dando-creature',39686)
DandotheRiled.Name.enGB.set('Dando the Riled')
DandotheRiled.Subname.enGB.set('The Undying')
DandotheRiled.FactionTemplate.set(35)
DandotheRiled.Models.clearAll()
DandotheRiled.Models.addIds(30859,30987,30861,30862)
let DandotheRiledGUID = spawnNPC(DandotheRiled.ID,0,0,{map:725,x:-8743.039062,y:-86.155716,z:31.135164,o:2.109006})
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
SQL.broadcast_text.add(90000).Text.set('Are you kidding me? These prices are absolutely outrageous. How do you expect new players to afford any of this crap?!').EmoteID1.set(1)
SQL.waypoint_scripts.add(DandotheRiled.ID).id.set(6).delay.set(5).command.set(0).datalong.set(0).dataint.set(90000)

export let Rabbit01 = std.CreatureTemplates.create(MODNAME,'rabbit01-creature',721)
Rabbit01.Name.enGB.set('Wild Hare')
Rabbit01.FactionTemplate.set(32)
Rabbit01.SkinningLoot.modRef(table=>{
    table.addItem(Teeth.ID,25,1,4,false,2)
    table.addItem(RabbitSkin.ID,100,1,2)
})
Rabbit01.UnitFlags.SKINNABLE.set(true)

export let Fawn01 = std.CreatureTemplates.create(MODNAME,'fawn-creature',890)
Fawn01.Name.enGB.set('Fawn')
Fawn01.FactionTemplate.set(32)
Fawn01.Scale.set(2)
Fawn01.SkinningLoot.modRef(table=>{
    table.addItem(Teeth.ID,25,1,4,false,2)
    table.addItem(DeerSkin.ID,100,1,2)
})
Fawn01.UnitFlags.SKINNABLE.set(true)

export let BanditNpc = std.CreatureTemplates.create(MODNAME,'banditnpc-creature3',116)
BanditNpc.Name.enGB.set('Bandit')
BanditNpc.FactionTemplate.set(32) //Fights with Faction 31
BanditNpc.Models.clearAll()
BanditNpc.Models.addIds(2357,2358)
BanditNpc.MovementType.RANDOM_MOVEMENT.set()
BanditNpc.Level.set(2,3)
BanditNpc.DamageSchool.Normal.set()
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
BanditBossNpc.MovementType.RANDOM_MOVEMENT.set()
BanditBossNpc.Level.set(3,5)
BanditBossNpc.DamageSchool.Normal.set()
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
Boar01.MovementType.RANDOM_MOVEMENT.set()
Boar01.Level.set(1,1)
Boar01.Scale.set(1)
Boar01.DamageSchool.Normal.set()
Boar01.Stats.ArmorMod.set(1)
Boar01.Stats.DamageMod.set(1)
Boar01.Stats.ExperienceMod.set(2)
Boar01.Stats.HealthMod.set(1)
Boar01.Stats.ManaMod.set(1)
Boar01.SkinningLoot.modRef(table=>{
    table.addItem(BoarSkin.ID,100,1,2)
})
Boar01.UnitFlags.SKINNABLE.set(true)
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
startingZoneWolfBoss.MovementType.RANDOM_MOVEMENT.set()
startingZoneWolfBoss.Level.set(2,2)
startingZoneWolfBoss.Rank.ELITE.set()
startingZoneWolfBoss.FactionTemplate.set(48)
startingZoneWolfBoss.DamageSchool.Normal.set()
startingZoneWolfBoss.Stats.ArmorMod.set(1)
startingZoneWolfBoss.Stats.DamageMod.set(2)
startingZoneWolfBoss.Stats.ExperienceMod.set(1)
startingZoneWolfBoss.Stats.HealthMod.set(3)
startingZoneWolfBoss.Stats.ManaMod.set(1)
spawnNPCWithTimer(startingZoneWolfBoss.ID,8,0,{map:725,x:-8668.536,y:-23.10,z:31.13,o:3.61},35)
export let startingZoneWolfBossLoot = startingZoneWolfBoss.NormalLoot

export let ghostlyFigure01 = std.CreatureTemplates.create(MODNAME,'ghostlyfigure01-creature',299)
ghostlyFigure01.Name.enGB.set('Ghostly Figure')
ghostlyFigure01.Models.clearAll()
ghostlyFigure01.Models.addIds(10478)
ghostlyFigure01.Level.set(1,1)
ghostlyFigure01.FactionTemplate.set(35)
ghostlyFigure01.DamageSchool.Normal.set()
ghostlyFigure01.Stats.ArmorMod.set(1)
ghostlyFigure01.Stats.DamageMod.set(1)
ghostlyFigure01.Stats.ExperienceMod.set(1)
ghostlyFigure01.Stats.HealthMod.set(1)
ghostlyFigure01.Stats.ManaMod.set(1)
spawnNPC(ghostlyFigure01.ID,0,0,{map:725,x:-8667.347,y:-17.63,z:31.13,o:1.49},    )
SQL.creature_template_addon.add(ghostlyFigure01.ID).auras.set('68442') // Force Kneel

export let questGiver01 = std.CreatureTemplates.create(MODNAME,'questgiver01-creature',2934)
questGiver01.Name.enGB.set('Elder Fogwaffle')
questGiver01.Models.clearAll()
questGiver01.Models.addIds(26958)
questGiver01.Level.set(10,10)
questGiver01.FactionTemplate.set(35)
spawnNPC(questGiver01.ID,0,0,{map:725,x:-8680.762,y:-52.365,z:34.40,o:1.268},
    )
SQL.creature_template_addon.add(questGiver01.ID).auras.set('25824') // Spotlight

export let questGiver02 = std.CreatureTemplates.create(MODNAME,'questgiver02-creature',30368)
questGiver02.Name.enGB.set('Arcanist Fractal Spem')
questGiver02.Models.clearAll()
questGiver02.Models.addIds(21835)
questGiver02.Level.set(10,10)
questGiver02.FactionTemplate.set(35)
questGiver02.DamageSchool.Normal.set()
questGiver02.Stats.ArmorMod.set(1)
questGiver02.Stats.DamageMod.set(1)
questGiver02.Stats.ExperienceMod.set(1)
questGiver02.Stats.HealthMod.set(1)
questGiver02.Stats.ManaMod.set(1)
questGiver02.NPCFlags.QUEST_GIVER.set(true)
spawnNPC(questGiver02.ID,0,0,{map:725,x:-8744.915,y:-11.808,z:31.532,o:1.98},
    )
SQL.creature_template_addon.add(questGiver02.ID).auras.set('25824') // Spotlight
SQL.creature_template_addon.add(questGiver02.ID).auras.set('68442') // Force Kneel

export let questGiver03 = std.CreatureTemplates.create(MODNAME,'questgiver03-creature',30368)
questGiver03.Name.enGB.set('Knight Captain')
questGiver03.Models.clearAll()
questGiver03.Models.addIds(21835)
questGiver03.Level.set(10,10)
questGiver03.FactionTemplate.set(35)
questGiver03.DamageSchool.Normal.set()
questGiver03.Stats.ArmorMod.set(1)
questGiver03.Stats.DamageMod.set(1)
questGiver03.Stats.ExperienceMod.set(1)
questGiver03.Stats.HealthMod.set(1)
questGiver03.Stats.ManaMod.set(1)
questGiver03.NPCFlags.QUEST_GIVER.set(true)

/*Creature Spawn Zone*/

spawnMultipleNPCWithTimer(FightingAdventurer01.ID,5,0,[
    {map:725,x:-8711.581055,y:-28.310860,z:31.778915,o:2.517407},
{map:725,x: -8708.771484,y:-21.659365,z:32.305820,o:0.475371},
{map:725,x: -8660.538086,y:-47.789867,z:31.134550,o:0.306507},
{map:725,x: -8657.004883,y:-37.224842,z:31.436808,o:0.184771},
{map:725,x: -8699.515625,y:-29.343998,z:31.186831,o:5.560824},
],10)
    
/*Rabbit Spawns*/
spawnMultipleNPCWithTimer(Rabbit01.ID,5,0,[{map:725,x:-8224.416016,y:-75.297699,z:0.322220,o:3.535379},
    {map:725,x:-8354.863281,y:180.439056,z:1.321210,o:4.034020},
    {map:725,x:-8379.980469,y:142.481995,z:6.723893,o:3.484241},
    {map:725,x:-8413.180664,y:158.412064,z:5.144286,o:3.602051},
    {map:725,x:-8443.556641,y:141.237366,z:4.857116,o:3.539219},
    {map:725,x:-8443.367188,y:92.631203,z:15.788922,o:4.289276},
    {map:725,x:-8480.138672,y:76.322319,z:16.385532,o:3.142595},
    {map:725,x:-8487.750977,y:102.934189,z:20.872574,o:3.291820},
    {map:725,x:-8522.106445,y:64.822334,z:26.097893,o:2.812727},
    {map:725,x:-8553.785156,y:90.636848,z:18.264809,o:1.650337},
    {map:725,x:-8585.564453,y:103.017273,z:16.313858,o:1.638556},
    {map:725,x:-8576.973633,y:149.789917,z:14.500829,o:1.206587},
    {map:725,x:-8570.871094,y:195.364120,z:14.357735,o:0.499729},
    {map:725,x:-8512.758789,y:189.057602,z:17.784130,o:1.669971},
    {map:725,x:-8647.128906,y:163.095596,z:14.903246,o:3.205425},
    {map:725,x:-8661.769531,y:130.388275,z:15.247450,o:3.566710},
    {map:725,x:-8737.432617,y:129.313599,z:16.799538,o:2.510350},
    {map:725,x:-8735.031250,y:186.348145,z:14.743181,o:0.762838},
    {map:725,x:-8740.302734,y:205.799576,z:14.513929,o:2.604597},
    {map:725,x:-8779.107422,y:201.672256,z:14.420785,o:3.582418},
    {map:725,x:-8801.797852,y:222.791168,z:15.068887,o:1.736732},
    {map:725,x:-8791.437500,y:241.769958,z:14.615882,o:0.853158},
    {map:725,x:-8743.297852,y:271.483093,z:15.261915,o:0.107030},
    {map:725,x:-8714.854492,y:268.952759,z:14.830345,o:0.130591},
    {map:725,x:-8663.113281,y:303.667175,z:14.381198,o:0.444749},
    {map:725,x:-8635.368164,y:330.443298,z:14.378572,o:1.391154},
    {map:725,x:-8654.282227,y:369.291718,z:14.392118,o:2.003765},
    {map:725,x:-8631.548828,y:410.497437,z:16.392134,o:0.923842},
    {map:725,x:-8640.675781,y:442.977844,z:15.445580,o:2.204041},
    {map:725,x:-8677.000000,y:430.444275,z:15.043460,o:3.217205},
    {map:725,x:-8713.732422,y:441.757538,z:15.228001,o:2.549616},
    {map:725,x:-8762.314453,y:426.099792,z:14.482961,o:3.818034},
    {map:725,x:-8804.579102,y:440.607971,z:14.820017,o:2.471076},
    {map:725,x:-8776.951172,y:480.329742,z:15.218239,o:0.648952},
    {map:725,x:-8756.739258,y:524.838928,z:14.462840,o:1.147680},
    {map:725,x:-8735.798828,y:554.380859,z:14.395740,o:0.436894},
    {map:725,x:-8673.876953,y:542.870850,z:14.380318,o:5.518424},
    {map:725,x:-8699.250977,y:516.918457,z:14.691679,o:3.617761},
    {map:725,x:-8882.292969,y:434.598785,z:5.736168,o:4.442428},
    {map:725,x:-8890.771484,y:376.586609,z:6.597244,o:5.420248},
    {map:725,x:-8860.494141,y:357.415619,z:5.628677,o:5.675502},
    {map:725,x:-8848.222656,y:308.950714,z:6.660160,o:4.681976},
    {map:725,x:-8802.938477,y:225.329971,z:15.084712,o:5.329928},
    {map:725,x:-8747.750000,y:129.391830,z:14.866506,o:4.418875},
    {map:725,x:-8804.446289,y:114.447418,z:2.544333,o:3.185800},
    {map:725,x:-8238.592773,y:-94.925919,z:1.552764,o:3.998765},
    {map:725,x:-8264.207031,y:-78.104279,z:0.530478,o:2.687149},
    {map:725,x:-8291.517578,y:-83.913956,z:1.257136,o:3.570722},
    {map:725,x:-8306.135742,y:-119.953743,z:0.113604,o:4.780235},
    {map:725,x:-8290.747070,y:-134.929840,z:1.837410,o:5.597048},
    {map:725,x:-8265.114258,y:-160.081360,z:1.329985,o:5.137591},
    {map:725,x:-8258.822266,y:-189.981354,z:1.840723,o:4.466082},
    {map:725,x:-8274.649414,y:-207.159821,z:1.340215,o:3.205519},
    {map:725,x:-8319.933594,y:-200.528503,z:0.521759,o:1.587598},
    {map:725,x:-8330.697266,y:-141.901840,z:1.006135,o:0.244567},
    {map:725,x:-8289.891602,y:-35.193764,z:1.912323,o:2.954191},
    {map:725,x:-8324.192383,y:-53.492336,z:0.599718,o:3.205519},
    {map:725,x:-8377.308594,y:-35.176846,z:0.166914,o:2.698937},
    {map:725,x:-8382.718750,y:-106.861839,z:0.002041,o:4.297226},
    {map:725,x:-8424.727539,y:-134.878937,z:0.322561,o:3.751375},
    {map:725,x:-8228.958984,y:-0.866320,z:3.105356,o:1.905689},
    {map:725,x:-8257.219727,y:34.017731,z:0.993218,o:1.819296},
    {map:725,x:-8294.153320,y:76.738098,z:0.087680,o:0.747227},
    {map:725,x:-8191.856445,y:76.529572,z:0.285018,o:1.642577},
    {map:725,x:-8182.118652,y:131.663208,z:1.118001,o:2.376925},
    {map:725,x:-8263.772461,y:153.238480,z:0.187386,o:2.801040},
    {map:725,x:-8280.256836,y:210.576797,z:2.558305,o:1.300929},
    {map:725,x:-8224.139648,y:229.886841,z:2.940107,o:0.727588},
    {map:725,x:-8193.758789,y:293.175842,z:3.325846,o:2.282676},
    {map:725,x:-8204.912109,y:338.193512,z:3.427373,o:2.314092},
    {map:725,x:-8268.672852,y:356.571777,z:1.419539,o:2.887433},
    {map:725,x:-8278.203125,y:418.350830,z:0.265230,o:1.501205},
    {map:725,x:-8213.633789,y:398.202759,z:2.330755,o:6.060439},
    {map:725,x:-8167.461914,y:405.299896,z:0.361587,o:1.022109},
    {map:725,x:-8134.155273,y:474.268860,z:0.962047,o:0.252418},
    {map:725,x:-8094.434082,y:447.518188,z:-0.164097,o:5.663814},
    {map:725,x:-8060.079102,y:445.544434,z:-5.389906,o:0.319177},
    {map:725,x:-8007.525879,y:463.982483,z:1.490667,o:0.056068},
    {map:725,x:-7996.390625,y:430.305756,z:1.702083,o:4.929462},
    {map:725,x: -8752.416016,y:-55.609863,z:32.740227,o:1.547497},
    {map:725,x: -8742.524414,y:-27.454241,z:32.073261,o:0.538260},
    {map:725,x: -8697.744141,y:-17.519131,z:31.180975,o:0.589310},
    {map:725,x: -8708.807617,y:-54.212940,z:31.565746,o:4.622335},
    {map:725,x: -8632.762695,y:-58.197071,z:32.607571,o:1.677089},
    {map:725,x: -8654.867188,y:-39.264111,z:31.256962,o:2.242575},
    ],30)

/*Fawn Spawns*/
spawnMultipleNPCWithTimer(Fawn01.ID,5,0,[{map:725,x: -8061.970703,y:201.731735,z:1.174377,o:5.102258},
    {map:725,x: -8025.303223,y:172.239777,z:0.523174,o:5.703087},
    {map:725,x: -7999.850098,y:116.646225,z:2.114146,o:6.095786},
    {map:725,x: -7947.083008,y:131.017181,z:0.478270,o:0.362378},
    {map:725,x: -7910.515625,y:168.122314,z:2.726336,o:0.825763},
    {map:725,x: -7874.849121,y:185.306320,z:0.948785,o:0.429137},
    {map:725,x: -7856.412109,y:234.790543,z:1.755053,o:0.955354},
    {map:725,x: -7804.593262,y:247.756119,z:0.181069,o:0.798274},
    {map:725,x: -7792.575195,y:337.747528,z:1.820405,o:1.485497},
    {map:725,x: -7823.513672,y:398.583496,z:1.547921,o:3.350819},
    {map:725,x: -7885.959473,y:401.085968,z:2.062373,o:3.103418},
    {map:725,x: -8000.028809,y:446.584839,z:0.053655,o:2.498662},
    {map:725,x: -8007.058105,y:550.804626,z:0.242084,o:1.257732},
    {map:725,x: -8021.678223,y:610.197571,z:1.088982,o:2.773551},
    {map:725,x: -8091.252930,y:638.490051,z:0.134432,o:3.299768},
    {map:725,x: -8168.776855,y:583.090332,z:-2.599264,o:3.778863},
    {map:725,x: -8196.809570,y:509.096252,z:1.027916,o:4.367913},
    {map:725,x: -8283.909180,y:434.273346,z:1.006449,o:3.904528},
    {map:725,x: -8339.169922,y:411.563171,z:2.168990,o:4.658504},
    {map:725,x: -8363.975586,y:314.426544,z:1.192020,o:5.220057},
    {map:725,x: -8324.290039,y:234.296432,z:1.866770,o:0.024638},
    {map:725,x: -8287.391602,y:263.102905,z:3.050151,o:0.283819},
    {map:725,x: -8229.648438,y:258.559021,z:3.077799,o:0.079616},
    {map:725,x: -8138.889648,y:270.790955,z:0.057817,o:6.272481},
    {map:725,x: -8119.639160,y:184.818039,z:0.462849,o:4.151912},
    {map:725,x: -8184.550781,y:125.014763,z:1.097368,o:4.238304},
    {map:725,x: -8171.518066,y:59.534889,z:0.771008,o:5.294657},
    {map:725,x: -8121.000977,y:-9.211844,z:0.529058,o:3.056282},
    {map:725,x: -8201.439453,y:-26.549778,z:1.282197,o:4.799864},
    {map:725,x: -8209.302734,y:-78.071373,z:0.312487,o:4.524973},
    {map:725,x: -8220.663086,y:-156.934952,z:0.198076,o:6.131103},
    {map:725,x: -8140.496582,y:-154.327072,z:0.951697,o:4.411087},
    {map:725,x: -8215.223633,y:-227.210831,z:0.278653,o:3.574638},
    {map:725,x: -8289.287109,y:-192.725708,z:1.226542,o:2.577182},
    {map:725,x: -8330.372070,y:-140.696930,z:0.906498,o:2.357271},
    {map:725,x: -8431.476562,y:-140.916946,z:0.479238,o:3.806330},
    {map:725,x: -8716.108398,y:-33.742191,z:32.049961,o:6.102806},
    {map:725,x: -8654.079102,y:-75.843369,z:33.006699,o:5.710110},
    {map:725,x: -8679.473633,y:-62.391918,z:31.180559,o:6.161709},
    ],10)

/*SMALL Tree Spawns*/
spawnMultipleNPCWithTimer(WoodcuttingTree.ID,0,0,[{map:725,x: -8727.718750,y:-38.397255,z:31.283049,o:3.554162},
    {map:725,x: -8734.904297,y:-46.539581,z:31.506783,o:2.650954},
    {map:725,x: -8758.661133,y:-43.644886,z:31.158398,o:3.832979},
    {map:725,x: -8759.510742,y:-58.613422,z:31.437906,o:5.176006},
    {map:725,x: -8728.844727,y:-78.705399,z:31.601536,o:5.878936},
    {map:725,x: -8720.337891,y:-72.532272,z:31.176889,o:0.326171},
    {map:725,x: -8694.780273,y:-74.936867,z:31.134272,o:5.474452},
    {map:725,x: -8681.517578,y:-71.739296,z:31.317982,o:0.502878},
    {map:725,x: -8663.000977,y:-78.752197,z:31.212084,o:5.988886},
    {map:725,x: -8642.680664,y:-74.266396,z:31.328184,o:0.306529},
    {map:725,x: -8641.277344,y:-56.033127,z:31.289261,o:1.979428},
    {map:725,x: -8647.504883,y:-37.426968,z:31.154825,o:1.044804},
    {map:725,x: -8658.979492,y:-11.219471,z:31.989655,o:1.838056},
    {map:725,x: -8676.500000,y:-3.677603,z:31.134516,o:3.416707},
    {map:725,x: -8370.670898,y:5.638326,z:1.217611,o:3.315193},
    {map:725,x: -8388.247070,y:-10.637729,z:1.046293,o:4.524703},
    {map:725,x: -8376.723633,y:-40.758194,z:0.196736,o:3.790358},
    {map:725,x: -8402.961914,y:-83.131302,z:0.003563,o:2.934274},
    {map:725,x: -8415.800781,y:-92.732475,z:0.037421,o:5.259050},
    {map:725,x: -8410.838867,y:-111.126343,z:0.001823,o:3.641132},
    {map:725,x: -8426.948242,y:-125.878082,z:0.001825,o:2.800757},
    {map:725,x: -8445.824219,y:-127.990250,z:0.036207,o:3.319120},
    {map:725,x: -8447.175781,y:-195.037338,z:0.856807,o:5.643898},
    {map:725,x: -8403.046875,y:-192.016464,z:0.350498,o:0.338531},
    {map:725,x: -8388.506836,y:-141.469131,z:-0.018635,o:2.270611},
    {map:725,x: -8276.736328,y:-24.119333,z:1.368587,o:3.193454},
    {map:725,x: -8305.287109,y:-19.300594,z:0.112131,o:4.387258},
    {map:725,x: -8334.509766,y:-26.698771,z:0.119276,o:6.122985},
    {map:725,x: -8281.903320,y:-62.772758,z:2.371090,o:6.134764},
    {map:725,x: -8274.027344,y:-72.420616,z:1.045432,o:5.204072},
    {map:725,x: -8257.727539,y:-78.117355,z:1.677707,o:0.169665},
    {map:725,x: -8217.188477,y:-95.915939,z:0.562622,o:5.549644},
    {map:725,x: -8225.116211,y:-123.766159,z:0.794386,o:4.968450},
    {map:725,x: -8205.580078,y:-141.643646,z:3.252555,o:2.800744},
    {map:725,x: -8220.119141,y:-169.826538,z:1.846378,o:5.007711},
    {map:725,x: -8201.691406,y:-176.749100,z:0.813836,o:0.122533},
    {map:725,x: -8189.745117,y:-195.684418,z:0.614737,o:3.916009},
    {map:725,x: -8207.776367,y:-218.074539,z:0.249940,o:4.029895},
    {map:725,x: -8229.111328,y:-230.817215,z:0.697466,o:3.550802},
    {map:725,x: -8254.349609,y:-278.550140,z:2.067099,o:2.305944},
    {map:725,x: -8259.217773,y:-245.677048,z:1.662039,o:1.347758},
    {map:725,x: -8224.524414,y:-139.489609,z:2.015016,o:3.684319},
    {map:725,x: -8189.945801,y:-164.945694,z:-5.948020,o:5.530000},
    {map:725,x: -8152.493652,y:-198.047546,z:-3.777777,o:6.115120},
    {map:725,x: -8131.090820,y:-174.059357,z:1.818768,o:1.076789},
    {map:725,x: -8147.371094,y:-155.713593,z:0.777811,o:1.661911},
    {map:725,x: -8120.869629,y:-146.802261,z:3.316553,o:1.465560},
    {map:725,x: -8103.001465,y:-122.993233,z:2.071352,o:0.051846},
    {map:725,x: -8129.495117,y:-91.921631,z:0.487480,o:0.990396},
    {map:725,x: -8113.977539,y:-81.342278,z:1.305370,o:0.464179},
    {map:725,x: -8114.784180,y:-59.120068,z:0.462974,o:2.957818},
    {map:725,x: -8137.924805,y:-63.581577,z:1.005658,o:3.228781},
    {map:725,x: -8180.318848,y:-65.321304,z:0.631258,o:3.095263},
    {map:725,x: -8189.656250,y:-78.691277,z:1.177030,o:3.723582},
    {map:725,x: -8176.893555,y:-29.402729,z:0.175064,o:0.597696},
    {map:725,x: -8143.242676,y:-26.776020,z:0.293219,o:3.209146},
    {map:725,x: -8256.503906,y:25.051359,z:1.758573,o:2.282376},
    {map:725,x: -8264.548828,y:36.123596,z:2.454403,o:1.504831},
    {map:725,x: -8249.729492,y:69.108032,z:1.984584,o:1.041446},
    {map:725,x: -8248.471680,y:80.985840,z:1.674766,o:2.808597},
    {map:725,x: -8293.375977,y:86.599686,z:0.081286,o:4.626795},
    {map:725,x: -8303.134766,y:95.947380,z:-0.041067,o:5.074475},
    {map:725,x: -8297.662109,y:53.049591,z:11.749305,o:4.175193},
    {map:725,x: -8315.476562,y:34.316448,z:10.739170,o:4.238023},
    {map:725,x: -8314.906250,y:7.374843,z:11.877803,o:5.687082},
    {map:725,x: -8295.773438,y:-5.604093,z:12.292934,o:3.755008},
    {map:725,x: -8300.660156,y:-3.629210,z:12.278763,o:4.029898},
    {map:725,x: -8198.326172,y:-1.664609,z:0.146155,o:1.493057},
    {map:725,x: -8141.601074,y:17.436691,z:0.960718,o:2.007498},
    {map:725,x: -8165.146484,y:66.873459,z:0.683591,o:0.766569},
    {map:725,x: -8129.037109,y:64.340454,z:0.113054,o:5.003793},
    {map:725,x: -8130.709961,y:42.820427,z:2.306023,o:4.430455},
    {map:725,x: -8200.119141,y:100.955948,z:1.644024,o:3.020083},
    {map:725,x: -8245.033203,y:137.649765,z:1.307699,o:1.751665},
    {map:725,x: -8258.849609,y:155.219666,z:1.369388,o:2.167926},
    {map:725,x: -8301.826172,y:128.229218,z:0.670607,o:2.972959},
    {map:725,x: -8274.856445,y:186.791290,z:0.060158,o:0.718866},
    {map:725,x: -8263.701172,y:213.623901,z:3.031667,o:1.158689},
    {map:725,x: -8250.426758,y:233.631454,z:3.023173,o:0.970193},
    {map:725,x: -8237.827148,y:241.794067,z:3.009599,o:0.432195},
    {map:725,x: -8220.663086,y:249.787201,z:2.886012,o:1.677052},
    {map:725,x: -8179.314941,y:250.672882,z:2.184568,o:0.345800},
    {map:725,x: -8165.594238,y:277.170197,z:0.162495,o:0.593201},
    {map:725,x: -8123.233398,y:280.483368,z:0.047880,o:5.969256},
    {map:725,x: -8103.412109,y:291.224487,z:1.764895,o:1.107641},
    {map:725,x: -8079.732422,y:340.725128,z:0.162142,o:1.205815},
    {map:725,x: -8078.400391,y:354.449829,z:2.385360,o:5.906424},
    {map:725,x: -8041.907715,y:334.583618,z:1.296495,o:4.806875},
    {map:725,x: -8053.188477,y:281.011963,z:0.814389,o:4.422033},
    {map:725,x: -8059.739258,y:266.540924,z:1.480420,o:5.729717},
    {map:725,x: -8027.593262,y:246.102219,z:-5.725382,o:5.258480},
    {map:725,x: -8025.330078,y:222.124603,z:-5.517488,o:4.363131},
    {map:725,x: -8013.544434,y:192.741150,z:-5.498695,o:5.285976},
    {map:725,x: -7989.719727,y:173.266678,z:-7.971596,o:4.971821},
    {map:725,x: -7978.765137,y:142.356247,z:1.561704,o:4.802958},
    {map:725,x: -8044.367676,y:139.099304,z:1.970452,o:3.075085},
    {map:725,x: -8080.341797,y:136.625687,z:1.538620,o:1.908768},
    {map:725,x: -8074.245605,y:178.556610,z:0.560772,o:1.421821},
    {map:725,x: -8071.239258,y:183.425385,z:0.554498,o:6.165626},
    {map:725,x: -7958.961914,y:104.445000,z:2.136500,o:6.004618},
    {map:725,x: -7918.310547,y:125.004173,z:1.488422,o:5.906446},
    {map:725,x: -7899.740723,y:74.299049,z:2.628077,o:4.528071},
    {map:725,x: -7894.301758,y:59.626408,z:0.800842,o:4.323870},
    {map:725,x: -7891.445312,y:41.280350,z:2.050510,o:4.543780},
    {map:725,x: -7890.108398,y:29.182775,z:0.215628,o:5.714022},
    {map:725,x: -7905.701660,y:2.320868,z:2.274331,o:3.840851},
    {map:725,x: -7921.198730,y:-5.429278,z:1.394500,o:4.645880},
    {map:725,x: -7935.485840,y:-20.030704,z:1.320264,o:4.312086},
    {map:725,x: -7934.682617,y:-29.707613,z:2.270182,o:3.554178},
    {map:725,x: -7933.334961,y:-45.213154,z:0.954330,o:5.765073},
    {map:725,x: -7905.550293,y:-60.888844,z:1.961161,o:4.708716},
    {map:725,x: -7938.078125,y:-76.848137,z:1.802343,o:3.012257},
    {map:725,x: -7957.250000,y:-87.948914,z:0.508331,o:4.410265},
    {map:725,x: -7990.489746,y:-100.767921,z:3.495531,o:3.228241},
    {map:725,x: -7993.332031,y:-90.839790,z:3.068202,o:2.109048},
    {map:725,x: -7995.927246,y:-50.159126,z:0.465467,o:2.784491},
    {map:725,x: -8010.305176,y:-55.067253,z:1.656387,o:2.321106},
    {map:725,x: -8036.282227,y:-73.357788,z:0.988514,o:2.800199},
    {map:725,x: -8071.962891,y:-62.665699,z:1.162446,o:3.719115},
    {map:725,x: -8099.297852,y:-41.862446,z:1.144534,o:2.654901},
    {map:725,x: -8124.321289,y:2.629086,z:1.336691,o:2.081560},
    {map:725,x: -8117.169434,y:88.753876,z:0.080746,o:1.869502},
    {map:725,x: -8126.869141,y:105.173088,z:0.589634,o:3.051527},
    {map:725,x: -8156.596191,y:140.200806,z:1.590099,o:2.933717},
    {map:725,x: -8181.576172,y:302.793030,z:2.547143,o:2.427135},
    {map:725,x: -8189.105469,y:308.276154,z:3.550578,o:2.219004},
    {map:725,x: -8202.223633,y:345.771942,z:3.414601,o:1.987312},
    {map:725,x: -8206.567383,y:362.399567,z:3.170079,o:1.213694},
    {map:725,x: -8217.145508,y:380.941559,z:1.446671,o:1.967677},
    {map:725,x: -8229.336914,y:392.437622,z:1.382076,o:3.601306},
    {map:725,x: -8287.760742,y:398.905884,z:0.416638,o:3.526693},
    {map:725,x: -8303.118164,y:390.243683,z:1.166930,o:2.753075},
    {map:725,x: -8316.023438,y:368.250488,z:0.622905,o:3.412810},
    {map:725,x: -8329.875000,y:381.564270,z:0.834878,o:2.364303},
    {map:725,x: -8335.655273,y:396.447266,z:2.421978,o:0.231947},
    {map:725,x: -8332.750977,y:432.653625,z:1.673632,o:1.410044},
    {map:725,x: -8332.067383,y:447.467590,z:2.126122,o:3.114359},
    {map:725,x: -8355.123047,y:480.567627,z:0.727657,o:2.380011},
    {map:725,x: -8368.717773,y:477.989563,z:2.105202,o:1.641737},
    {map:725,x: -8343.893555,y:515.446045,z:1.281721,o:0.106283},
    {map:725,x: -8322.654297,y:514.992310,z:0.189432,o:0.192676},
    {map:725,x: -8288.922852,y:519.122986,z:1.137861,o:6.079238},
    {map:725,x: -8283.806641,y:524.053894,z:0.703175,o:5.038588},
    {map:725,x: -8276.764648,y:486.420898,z:0.440198,o:4.846162},
    {map:725,x: -8275.788086,y:472.580536,z:1.448085,o:3.911540},
    {map:725,x: -8246.088867,y:447.491119,z:1.110883,o:5.969280},
    {map:725,x: -8229.782227,y:444.328339,z:1.564969,o:5.937864},
    {map:725,x: -8189.390625,y:426.959167,z:1.569528,o:5.757226},
    {map:725,x: -8172.855469,y:420.644379,z:0.126649,o:0.875975},
    {map:725,x: -8131.175781,y:424.883820,z:1.075614,o:6.165632},
    {map:725,x: -8108.525391,y:465.698914,z:0.837889,o:1.111594},
    {map:725,x: -8088.044434,y:467.672943,z:0.045766,o:0.828851},
    {map:725,x: -8071.743164,y:498.639954,z:0.755134,o:2.234714},
    {map:725,x: -8058.016602,y:518.147034,z:0.766026,o:0.337977},
    {map:725,x: -8052.156738,y:532.303955,z:1.202664,o:5.553023},
    {map:725,x: -7995.221680,y:517.304443,z:0.038383,o:5.101422},
    {map:725,x: -7989.231445,y:500.417450,z:0.410015,o:5.458776},
    {map:725,x: -8020.252441,y:469.267120,z:1.296001,o:3.075097},
    {map:725,x: -8033.305664,y:440.282471,z:-6.152388,o:3.774102},
    {map:725,x: -8049.184082,y:469.375854,z:-3.679938,o:5.945728},
    {map:725,x: -8043.217285,y:389.074280,z:-5.733107,o:4.842239},
    {map:725,x: -8005.770020,y:347.016052,z:1.381199,o:5.961423},
    {map:725,x: -7961.839355,y:325.287750,z:1.603387,o:5.399866},
    {map:725,x: -7943.707031,y:317.208862,z:0.721777,o:5.525530},
    {map:725,x: -7912.166016,y:362.780579,z:1.057833,o:1.040906},
    {map:725,x: -7920.860352,y:384.469849,z:0.996238,o:1.040906},
    {map:725,x: -7920.872559,y:411.545929,z:2.470514,o:0.447931},
    {map:725,x: -7891.246094,y:416.549133,z:4.119899,o:0.915244},
    {map:725,x: -7844.522461,y:382.451385,z:0.863095,o:5.611929},
    {map:725,x: -7837.437988,y:371.152893,z:0.903975,o:6.185267},
    {map:725,x: -7825.917480,y:383.176788,z:2.223791,o:0.624647},
    {map:725,x: -7776.863281,y:369.089386,z:1.881213,o:5.376312},
    {map:725,x: -7780.794922,y:342.694977,z:0.810997,o:4.822610},
    {map:725,x: -7795.536133,y:333.811981,z:1.355371,o:4.308175},
    {map:725,x: -7807.640625,y:302.083984,z:0.554805,o:3.738760},
    {map:725,x: -7783.985352,y:280.238983,z:2.010545,o:4.920781},
    {map:725,x: -7771.359863,y:270.743347,z:2.346816,o:2.109055},
    {map:725,x: -7821.979980,y:229.295837,z:1.968306,o:3.589531},
    {map:725,x: -7823.790039,y:212.456009,z:2.570715,o:5.568728},
    {map:725,x: -7861.591309,y:179.225037,z:2.123152,o:3.365687},
    {map:725,x: -7866.622559,y:182.388443,z:1.391832,o:3.365687},
    {map:725,x: -7879.150879,y:164.426498,z:2.836161,o:5.077850},
    {map:725,x: -7882.643555,y:128.216187,z:3.595030,o:3.789802},
    {map:725,x: -7931.439941,y:193.082794,z:0.531004,o:0.636427},
    {map:725,x: -7939.903809,y:214.656830,z:22.895662,o:0.369391},
    {map:725,x: -7922.965820,y:221.220245,z:20.873144,o:0.373318},
    {map:725,x: -7919.172363,y:258.338470,z:4.801682,o:5.164246},
    {map:725,x: -8688.759766,y:-16.322594,z:31.601250,o:3.204649},
    ],30)

/*Wild Boar Spawns - not working*/
spawnMultipleNPCWithTimer(Boar01.ID,5,0,[
    {map:725,x: -8719.245117,y:-31.721756,z:31.517546,o:2.776600},
    {map:725,x: -8706.595703,y:-12.252595,z:31.755642,o:6.024221},
    {map:725,x: -8691.984375,y:-34.009716,z:32.009277,o:4.539816},
    {map:725,x: -8715.636719,y:-66.587173,z:31.135080,o:4.944289},
    {map:725,x: -8666.493164,y:-71.341705,z:31.135036,o:0.408609},
    {map:725,x: -8655.852539,y:-71.793884,z:32.007816,o:5.576530},
    {map:725,x: -8650.274414,y:-52.797848,z:31.658913,o:1.716297},
    {map:725,x: -8658.132812,y:-47.646954,z:31.140652,o:1.739859},
    {map:725,x: -8654.184570,y:-36.367447,z:31.438324,o:1.618122},
    {map:725,x: -8680.250000,y:-10.810021,z:31.378077,o:3.891851},
    ],10)

/*Citizens of the Walk of Heroes*/
spawnMultipleNPCs(TalkingCitizen.ID,0,0,[
    {map:725,x: -8757.347656,y:-93.769424,z:31.881319,o:4.005735},
    {map:725,x: -8758.279297,y:-97.759666,z:31.880352,o:1.798765},
    {map:725,x: -8760.677734,y:-95.579552,z:31.880352,o:0.121941},
    {map:725,x: -8760.208008,y:-89.981438,z:31.882771,o:0.416467},
    {map:725,x: -8757.812500,y:-88.718742,z:31.874933,o:3.636603},
    {map:725,x: -8745.782227,y:-88.870399,z:31.134769,o:2.953308},
    {map:725,x: -8748.785156,y:-89.192947,z:31.134769,o:0.636383},
    {map:725,x: -8737.630859,y:-84.078926,z:31.803057,o:6.251980},
    {map:725,x: -8735.920898,y:-84.431122,z:31.796766,o:3.349936},
    {map:725,x: -8735.184570,y:-91.743523,z:31.795307,o:0.624600},
    {map:725,x: -8734.529297,y:-87.922684,z:31.795639,o:4.999271},
    {map:725,x: -8757.010742,y:-68.293053,z:31.136017,o:0.872003},
    {map:725,x: -8754.271484,y:-65.192757,z:31.437584,o:4.182455},
    {map:725,x: -8771.211914,y:-77.567436,z:31.735508,o:5.081734},
    {map:725,x: -8768.416016,y:-80.486427,z:31.737225,o:2.128631},
    {map:725,x: -8766.156250,y:-75.561638,z:31.736290,o:0.950534},
    {map:725,x: -8766.782227,y:-72.987892,z:31.736374,o:5.871055},
    {map:725,x: -8763.260742,y:-72.361435,z:31.744356,o:3.891849},
    {map:725,x: -8702.094727,y:-61.369545,z:31.135279,o:4.740088},
    ])
spawnMultipleNPCs(StandingCitizen.ID,0,0,[
    {map:725,x: -8702.535156,y:-52.957691,z:31.134275,o:4.779361},
{map:725,x: -8702.372070,y:-56.103153,z:31.134275,o:4.744020},
{map:725,x: -8702.339844,y:-58.769962,z:31.134275,o:4.724386},
])
spawnMultipleNPCWithTimer(BanditNpc.ID,5,0,[
    {map:725,x:-8140.867676,y:-73.425201,z:0.177639,o:4.583888},
{map:725,x: -8140.269043,y:-82.285004,z:0.166196,o:3.814199},
{map:725,x: -8148.061523,y:-82.079811,z:0.176506,o:3.814199},
{map:725,x: -8148.476562,y:-90.084602,z:0.176596,o:5.341795},
{map:725,x: -8139.887695,y:-96.349358,z:0.196587,o:5.612757},
{map:725,x: -8139.022461,y:-107.209854,z:0.221241,o:4.536767},
{map:725,x: -8144.115234,y:-118.882713,z:0.234199,o:3.409721},
{map:725,x: -8153.927734,y:-112.816322,z:0.180442,o:2.557564},
{map:725,x: -8162.557617,y:-119.531342,z:0.180442,o:4.191193},
{map:725,x: -8173.943848,y:-120.845383,z:0.180465,o:2.475098},
{map:725,x: -8176.275391,y:-108.340721,z:0.180465,o:1.564035},
{map:725,x: -8174.864746,y:-96.945732,z:0.187117,o:2.357288},
{map:725,x: -8177.384277,y:-84.536232,z:0.204347,o:0.916082},
{map:725,x: -8165.271484,y:-85.960945,z:0.197669,o:1.599378},
{map:725,x: -8165.078125,y:-74.324265,z:0.264852,o:3.079854},
{map:725,x: -8175.787598,y:-72.168137,z:0.218016,o:4.277584},
{map:725,x: -8187.614258,y:-80.811409,z:1.141856,o:3.346888},
{map:725,x: -8197.491211,y:-88.126434,z:1.785212,o:2.133447},
{map:725,x: -8185.204102,y:-56.456036,z:0.758497,o:5.809112},
{map:725,x: -8176.474121,y:-52.473618,z:0.215730,o:0.613700},
{map:725,x: -8163.915039,y:-59.474377,z:0.194726,o:5.852308},
{map:725,x: -8151.785156,y:-49.993347,z:0.224089,o:0.743291},
{map:725,x: -8136.929199,y:-55.738045,z:0.907171,o:6.013313},
{map:725,x: -8134.450684,y:-40.404682,z:0.661383,o:1.489419},
{map:725,x: -8119.629883,y:-61.642860,z:0.352910,o:5.907277},
{map:725,x: -8107.961914,y:-71.897362,z:1.646522,o:5.051199},
{map:725,x: -8121.360840,y:-92.569664,z:0.595392,o:4.544617},
{map:725,x: -8127.064453,y:-120.929001,z:0.596171,o:0.464468},
{map:725,x: -8113.970703,y:-118.853958,z:1.035691,o:3.370442},
{map:725,x: -8138.332520,y:-150.610535,z:0.744515,o:3.904515},
{map:725,x: -8155.258301,y:-143.772705,z:0.536027,o:2.859935},
{map:725,x: -8165.055176,y:-158.862701,z:4.650616,o:4.214749},
{map:725,x: -8172.538086,y:-138.023895,z:-2.176677,o:2.954185},
{map:725,x: -8188.282227,y:-126.753784,z:1.124124,o:3.994838},
],30)
    
spawnMultipleNPCWithTimer(BanditBossNpc.ID,0,0,[
    {map:725,x: -8114.638672,y:-112.206512,z:0.463341,o:2.844230},
    {map:725,x: -8133.045410,y:-127.867378,z:0.715504,o:2.180568},
    {map:725,x: -8129.356934,y:-71.137146,z:0.144882,o:4.026255},
    {map:725,x: -8168.493652,y:-68.529823,z:0.216336,o:4.697769},
    {map:725,x: -8186.43,y:321.932,z:2.95887,o:0.957275},
    {map:725,x: -8188.56,y:288.131,z:1.68687,o:1.37432},
    {map:725,x: -8198.21,y:346.771,z:3.40619,o:3.01895},
    {map:725,x: -8203.28,y:277.553,z:2.64777,o:1.20625},
    {map:725,x: -8206.57,y:310.296,z:4.51836,o:4.37062},
    {map:725,x: -8208.45,y:329.45,z:3.47493,o:5.42304},
    {map:725,x: -8209.81,y:292.351,z:3.36257,o:0.556723},
    {map:725,x: -8214.62,y:267.056,z:2.78059,o:0.0634912},
    {map:725,x: -8219.17,y:347.323,z:3.40481,o:3.04958},
    {map:725,x: -8220.84,y:301.165,z:3.37038,o:4.31878},
    {map:725,x: -8222.43,y:313.188,z:3.41457,o:5.40263},
    {map:725,x: -8223.26,y:276.916,z:4.00441,o:2.42451},
    {map:725,x: -8227.06,y:275.149,z:4.00325,o:1.30139},
    {map:725,x: -8229.44,y:277.529,z:4.00441,o:0.727264},
    {map:725,x: -8234.02,y:320.696,z:3.39767,o:0.0195103},
    {map:725,x: -8235.73,y:291.778,z:3.33295,o:0.97847},
    {map:725,x: -8239.89,y:348.792,z:3.24585,o:3.47605},
    {map:725,x: -8241.46,y:323.473,z:3.32175,o:0.971413},
    {map:725,x: -8243.73,y:262.369,z:3.12942,o:1.05074},
    {map:725,x: -8246.03,y:304.924,z:3.32319,o:6.26971},
    {map:725,x: -8253.21,y:286.946,z:3.44802,o:0.234016},
    {map:725,x: -8254.54,y:279.831,z:3.46145,o:2.1174},
    {map:725,x: -8261.02,y:272.803,z:3.51261,o:1.698},
    {map:725,x: -8261.57,y:300.715,z:3.30341,o:0.264554},
    {map:725,x: -8261.77,y:322.525,z:3.30057,o:5.38771},
    {map:725,x: -8264.01,y:344.409,z:2.08543,o:3.69046},
    {map:725,x: -8268.36,y:276.983,z:3.56255,o:0.511262},
    {map:725,x: -8269.16,y:264.63,z:3.08098,o:2.41733},
    {map:725,x: -8272.12,y:267.42,z:3.06999,o:5.5707},
    {map:725,x: -8272.27,y:264.249,z:3.06493,o:0.732647},
    {map:725,x: -8280.55,y:315.436,z:3.24517,o:5.99727},
    {map:725,x: -8280.91,y:310.41,z:3.38963,o:5.97528},
    {map:725,x: -8281.02,y:336.043,z:2.92788,o:3.82005},
    {map:725,x: -8281.38,y:288.486,z:3.20434,o:0.554355},
    {map:725,x: -8299.57,y:296.302,z:3.21167,o:0.600705},
    {map:725,x: -8300.32,y:320.861,z:1.90464,o:4.85207},
    ],120)

