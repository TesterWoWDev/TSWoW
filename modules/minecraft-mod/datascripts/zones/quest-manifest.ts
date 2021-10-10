import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { addLootToGobChest, addLootToGobChestMultiDrop } from "../functions/gob-functions"
import { makeResourceNode } from "../functions/resource-node-functions"
import { spawnMultiGobTimer, spawnNPC, spawnMultipleNPCWithTimer } from "../functions/spawning-functions"
import { tierOneClothMaterial, tierOneMailMaterial, tierOneLeatherMaterial, tierOneBaseResources, tierOneClothGear } from "../items/armor/tier1-set"
import { tierTwoClothMaterial, tierTwoMailMaterial, tierTwoLeatherMaterial } from "../items/armor/tier2-set"
import { tierThreeClothMaterial, tierThreeLeatherMaterial, tierThreeMailMaterial } from "../items/armor/tier3-set"
import { SmallSackofCoinswithBag } from "../items/currencies"
import { MODNAME } from "../modname"
import { startingZoneWolfBoss, questGiver01, questGiver02, questGiver03, BanditNpc, BanditBossNpc } from "./(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { creature4, creature5 } from "./(Zone-1)Bramblewood/zone-1-creatures"
import { Zone2Creature1 } from "./(Zone-2)HauntedHollows/zone-2-creatures"
import { DeathknightQuest01, DeathknightQuest02 } from "./(Zone-5)Mall/ClassQuests/DeathKnightClassQuest"
import { DruidQuest01, DruidQuest02 } from "./(Zone-5)Mall/ClassQuests/DruidClassQuest"
import { HunterQuest01, HunterQuest02 } from "./(Zone-5)Mall/ClassQuests/HunterClassQuest"
import { MageQuest01, MageQuest02 } from "./(Zone-5)Mall/ClassQuests/MageClassQuest"
import { PaladinQuest01, PaladinQuest02 } from "./(Zone-5)Mall/ClassQuests/PaladinClassQuest"
import { PriestQuest01, PriestQuest02 } from "./(Zone-5)Mall/ClassQuests/PriestClassQuest"
import { RogueQuest01, RogueQuest02 } from "./(Zone-5)Mall/ClassQuests/RogueClassQuest"
import { ShamanQuest01, ShamanQuest02 } from "./(Zone-5)Mall/ClassQuests/ShamanClassQuest"
import { WarlockQuest01, WarlockQuest02 } from "./(Zone-5)Mall/ClassQuests/WarlockClassQuest"
import { WarriorQuest01, WarriorQuest02 } from "./(Zone-5)Mall/ClassQuests/WarriorClassQuest"
import { StrangeEtherealCrate, EtherealPortalBag, VialofPoison, AgathasLockbox, startingResource01, SatchelofResources, OrbofPower, SatchelofPower, BoarSkin, BoarskinSatchel, ExpScroll, DarkSteel, DarkCloth, DarkLeather, ItemReward01, ItemReward02, ItemReward03, ItemReward04, ItemReward05, ItemReward06 } from "./item-manifest"
import { DungeonMob01, DungeonMob02, DungeonBoss01, DungeonBoss02, DungeonBoss03 } from "./open-world-dungeon-01"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Quest Declaration Zone

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let BagQuest01 = std.Quests.create(MODNAME,'bagquest01-quest')
export let ExpTestQuest01 = std.Quests.create(MODNAME,'expquest01-quest')
export let startingQuest01 = std.Quests.create(MODNAME,'startingquest01-quest')
export let startingQuest02 = std.Quests.create(MODNAME,'startingquest02-quest')
export let startingQuest03 = std.Quests.create(MODNAME,'startingquest03-quest')
export let startingQuest04 = std.Quests.create(MODNAME,'startingquest04-quest')
export let startingQuest05 = std.Quests.create(MODNAME,'startingquest05-quest')
export let startingQuest06 = std.Quests.create(MODNAME,'startingquest06-quest')
export let startingQuest07 = std.Quests.create(MODNAME,'startingquest07-quest')
export let startingQuest08 = std.Quests.create(MODNAME,'startingquest08-quest')
export let startingQuest09 = std.Quests.create(MODNAME,'startingquest09-quest')
export let startingQuest10 = std.Quests.create(MODNAME,'startingquest10-quest')
export let startingQuest11 = std.Quests.create(MODNAME,'startingquest11-quest')
export let OpenWorldQuest01 = std.Quests.create(MODNAME,'openworldquest01')
export let OpenWorldQuest02 = std.Quests.create(MODNAME,'openworldquest02')
export let OpenWorldQuest03 = std.Quests.create(MODNAME,'openworldquest03')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Quest Order Information

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
SQL.quest_template_addon.add(startingQuest01.ID).NextQuestID.set(startingQuest02.ID).PrevQuestID.set(0).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest02.ID).NextQuestID.set(startingQuest03.ID).PrevQuestID.set(startingQuest01.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest03.ID).NextQuestID.set(startingQuest04.ID).PrevQuestID.set(startingQuest02.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest04.ID).NextQuestID.set(startingQuest05.ID).PrevQuestID.set(startingQuest03.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest05.ID).NextQuestID.set(startingQuest06.ID).PrevQuestID.set(startingQuest04.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest06.ID).NextQuestID.set(startingQuest07.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest07.ID).NextQuestID.set(startingQuest08.ID).PrevQuestID.set(startingQuest06.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest08.ID).NextQuestID.set(startingQuest09.ID).PrevQuestID.set(startingQuest07.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest09.ID).NextQuestID.set(startingQuest10.ID).PrevQuestID.set(startingQuest08.ID).ExclusiveGroup.set(0)
SQL.quest_template_addon.add(startingQuest10.ID).NextQuestID.set(startingQuest11.ID).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0)
// Class Quest Zone
SQL.quest_template_addon.add(DeathknightQuest01.ID).NextQuestID.set(DeathknightQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(32)
SQL.quest_template_addon.add(DruidQuest01.ID).NextQuestID.set(DruidQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(1024)
SQL.quest_template_addon.add(HunterQuest01.ID).NextQuestID.set(HunterQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(4)
SQL.quest_template_addon.add(MageQuest01.ID).NextQuestID.set(MageQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(128)
SQL.quest_template_addon.add(PaladinQuest01.ID).NextQuestID.set(PaladinQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(2)
SQL.quest_template_addon.add(PriestQuest01.ID).NextQuestID.set(PriestQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(16)
SQL.quest_template_addon.add(RogueQuest01.ID).NextQuestID.set(RogueQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(8)
SQL.quest_template_addon.add(ShamanQuest01.ID).NextQuestID.set(ShamanQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(64)
SQL.quest_template_addon.add(WarlockQuest01.ID).NextQuestID.set(WarlockQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(256)
SQL.quest_template_addon.add(WarriorQuest01.ID).NextQuestID.set(WarriorQuest02.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).AllowableClasses.set(1)

SQL.quest_template_addon.add(DeathknightQuest02.ID).NextQuestID.set(0).PrevQuestID.set(DeathknightQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(32).SpecialFlags.set(1)
SQL.quest_template_addon.add(DruidQuest02.ID).NextQuestID.set(0).PrevQuestID.set(DruidQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(1024).SpecialFlags.set(1)
SQL.quest_template_addon.add(HunterQuest02.ID).NextQuestID.set(0).PrevQuestID.set(HunterQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(4).SpecialFlags.set(1)
SQL.quest_template_addon.add(MageQuest02.ID).NextQuestID.set(0).PrevQuestID.set(MageQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(128).SpecialFlags.set(1)
SQL.quest_template_addon.add(PaladinQuest02.ID).NextQuestID.set(0).PrevQuestID.set(PaladinQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(2).SpecialFlags.set(1)
SQL.quest_template_addon.add(PriestQuest02.ID).NextQuestID.set(0).PrevQuestID.set(PriestQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(16).SpecialFlags.set(1)
SQL.quest_template_addon.add(RogueQuest02.ID).NextQuestID.set(0).PrevQuestID.set(RogueQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(8).SpecialFlags.set(1)
SQL.quest_template_addon.add(ShamanQuest02.ID).NextQuestID.set(0).PrevQuestID.set(ShamanQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(64).SpecialFlags.set(1)
SQL.quest_template_addon.add(WarlockQuest02.ID).NextQuestID.set(0).PrevQuestID.set(WarlockQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(256).SpecialFlags.set(1)
SQL.quest_template_addon.add(WarriorQuest02.ID).NextQuestID.set(0).PrevQuestID.set(WarriorQuest01.ID).ExclusiveGroup.set(0).AllowableClasses.set(1).SpecialFlags.set(1)

//Side Quests
SQL.quest_template_addon.add(BagQuest01.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
SQL.quest_template_addon.add(ExpTestQuest01.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
SQL.quest_template_addon.add(OpenWorldQuest01.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
SQL.quest_template_addon.add(OpenWorldQuest02.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0).SpecialFlags.set(1)
SQL.quest_template_addon.add(OpenWorldQuest03.ID).NextQuestID.set(0).PrevQuestID.set(startingQuest09.ID).ExclusiveGroup.set(0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                              Creature and Object Spawning

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let EtherealCrate = makeResourceNode('Ethereal Crate',75964,57,'etherealcrate-chest')
SQL.gameobject_loot_template.add(EtherealCrate.ID,StrangeEtherealCrate.ID).QuestRequired.set(1)
EtherealCrate.Size.set(1)
addLootToGobChest(EtherealCrate,[
    StrangeEtherealCrate.ID
],[100],1)
addLootToGobChest(EtherealCrate,[
    EtherealPortalBag.ID
],[15],2)

spawnMultiGobTimer(EtherealCrate.ID,[
[-7957.128906,237.430008,-37.370800,4.547691],
[-7964.020020,228.326645,-37.041145,4.940389],
[-7971.256836,226.169128,-36.605244,1.900899],
[-7973.173828,234.330338,-36.624226,1.437514],
[-7966.296387,253.617950,-38.353725,1.190113],
[-7974.653809,258.668427,-38.075672,2.191496],
[-7971.496582,268.120178,-36.161861,6.220588],
[-7957.182617,251.017380,-36.566978,1.186188],
[-7940.236328,249.470932,-36.530128,5.596198],
[-7941.429688,242.442841,-36.743290,5.113184],
[-7945.031250,222.277100,-37.645897,5.101400],
[-7944.440430,220.052277,-37.916874,0.271199],
[-7932.153320,214.145721,-39.814037,5.965335],
[-7930.696777,212.498489,-38.889015,3.067212],
[-7949.067383,188.072586,-46.544342,3.632698],
[-7972.292969,192.637115,-43.754292,5.026778],
[-7970.023926,192.633804,-44.096935,5.124952],
[-7970.529785,186.888824,-44.392811,4.355266],
[-7955.104492,172.695648,-44.393047,5.788609],
[-7953.729492,172.017166,-43.316292,4.335625],
[-7935.241699,155.095856,-47.177010,0.970187],
[-7921.680176,141.577286,-45.178108,4.347403],
[-7921.549316,137.958069,-44.927856,1.893034],
[-7905.825195,159.503204,-45.347172,2.242537],
[-7914.552734,161.529678,-43.369339,3.514882],
[-7895.453613,148.694336,-46.092865,0.491095],
[-7886.416016,159.265869,-44.413834,1.382522],
[-7890.655273,160.090881,-44.676987,1.378595],
[-7889.769531,137.806137,-44.667465,3.656256],
[-7900.470215,115.185318,-46.313339,3.648405],
[-7928.284180,117.710625,-50.676533,1.512121],
[-7926.455078,120.523079,-50.655540,1.574953],
[-7929.417969,126.765778,-48.228886,4.052886],
[-7877.225098,136.992264,-44.073559,5.552999],
[-7859.605957,125.683487,-37.768921,0.074845],
[-7842.160156,128.177979,-37.799294,6.126339],
[-7837.504395,133.695862,-38.695011,0.993761],
[-7839.622070,145.271942,-37.517063,2.533142],
[-7859.950684,155.153458,-36.663605,2.018706],
[-7853.986328,187.541779,-31.652126,0.656037],
[-7843.263672,187.526016,-32.403973,0.762066],
[-7842.726562,189.357864,-31.328278,5.804324],
[-7842.836914,181.897430,-32.180656,3.141825],
[-7862.062500,183.280777,-30.448784,2.615608],
[-7874.550781,192.139999,-25.705698,2.776615],
[-7906.943359,206.072174,-26.782949,2.006925],
[-7937.278320,207.320480,-27.398716,4.041109],
[-7937.971680,206.010040,-26.570238,3.306760],
[-7939.544922,207.780823,-26.705162,1.406095],
[-7946.977051,223.171875,-28.635015,1.539613],
[-7951.078613,225.666779,-28.772329,1.936239],
[-7958.072266,231.702042,-28.843103,2.164004],
[-7964.905762,231.263275,-28.841490,2.234690],
[-7913.546387,175.172394,-25.887861,5.242771],
[-7912.062988,170.784012,-25.261095,5.768984],
[-7909.398438,163.040161,-25.930382,2.929780],
[-7904.158691,151.963135,-26.790890,4.276741],
[-7911.778320,147.428726,-27.089058,3.232162],
[-7915.924805,151.452896,-27.870016,0.938800],
[-7889.249023,144.248825,-26.954319,0.004172],
[-7889.256348,146.005814,-27.035995,6.279504],
[-7887.859863,144.286667,-26.050179,2.709869],
[-7887.103516,129.012939,-22.460749,1.724188],
[-7876.991211,146.098450,-23.177647,1.072307],
[-7849.847656,163.151505,-25.594839,0.318325],
[-7837.823730,157.406403,-27.554106,0.015947],
[-7840.448730,169.324524,-24.605524,5.937851],
[-7831.480469,165.753174,-26.191280,5.160311],
[-7833.295410,158.632385,-27.252964,2.572427],],60)

export let BoarQuestGiver01 = std.CreatureTemplates.create(MODNAME,'boarquestgiver01-creature',30368)
BoarQuestGiver01.Name.enGB.set('Jethel Salisbury')
BoarQuestGiver01.Models.clearAll()
BoarQuestGiver01.Models.addIds(2200)
BoarQuestGiver01.Level.set(10,10)
BoarQuestGiver01.FactionTemplate.set(35)
BoarQuestGiver01.DamageSchool.setNormal()
BoarQuestGiver01.Stats.ArmorMod.set(1)
BoarQuestGiver01.Stats.DamageMod.set(1)
BoarQuestGiver01.Stats.ExperienceMod.set(1)
BoarQuestGiver01.Stats.HealthMod.set(1)
BoarQuestGiver01.Stats.ManaMod.set(1)
spawnNPC(BoarQuestGiver01.ID,0,0,[-8263.850,-122.315,0.9015,2.32])

export let questGiver04 = std.CreatureTemplates.create(MODNAME,'questgiver04-creature',30368)
questGiver04.Name.enGB.set('Apothecary Vargan')
questGiver04.Models.clearAll()
questGiver04.Models.addIds(21988)
questGiver04.Level.set(10,10)
questGiver04.FactionTemplate.set(35)
questGiver04.DamageSchool.setNormal()
questGiver04.Stats.ArmorMod.set(1)
questGiver04.Stats.DamageMod.set(1)
questGiver04.Stats.ExperienceMod.set(1)
questGiver04.Stats.HealthMod.set(1)
questGiver04.Stats.ManaMod.set(1)
questGiver04.NPCFlags.QuestGiver.mark()
spawnMultipleNPCWithTimer(questGiver04.ID,0,0,[
    [-8928.218750,-99.776024,27.458458,3.448763]],10)

/*Object Creation Zone*/
export let PoisonBottleObj = makeResourceNode('Vial of Poison',228,57,'poisonvial-chest')
PoisonBottleObj.Size.set(1)
addLootToGobChestMultiDrop(PoisonBottleObj,[VialofPoison.ID],[100],[1],[1],1)

spawnMultiGobTimer(PoisonBottleObj.ID,[
    [-8988.163086,-141.082596,14.330687,4.367677],
    [-8983.921875,-142.913757,14.330687,4.304846],
    [-8986.696289,-149.340439,14.330687,4.304846],
    [-8983.746094,-152.986572,14.330687,5.392619],
    [-8982.263672,-147.513885,14.330687,6.020936],
    [-8976.652344,-149.020142,14.330687,6.020936],
    [-8973.101562,-151.957657,14.330687,5.329789],
    [-8974.070312,-156.613739,14.330687,4.375533],
    [-8980.602539,-147.480392,14.330423,2.192127],
    [-8990.356445,-146.135773,14.330423,2.400257],
    [-8996.448242,-139.198990,14.712682,2.207835],
    [-9004.008789,-142.126099,15.026042,2.145003],
    [-9005.342773,-135.520309,16.496626,1.622713],
    [-9001.095703,-137.666763,15.295957,4.304847],
    [-9003.844727,-144.104294,14.613109,4.308774],
    [-9006.722656,-149.096588,14.807430,4.088863],
    [-9006.117188,-154.726547,14.695174,4.956729],
    [-9006.990234,-160.451965,14.576670,4.477637],
    [-9001.774414,-166.666824,14.696093,5.490800],
    [-8998.449219,-169.973831,14.997774,5.376917],
    [-8992.110352,-119.588486,15.013979,5.934549],
    [-8984.952148,-122.190147,14.329960,0.000865],
    [-8979.264648,-116.054047,14.329960,0.562425],
    [-8973.630859,-116.246445,14.945486,5.863863],
    [-8971.349609,-113.117737,15.482199,1.292845],
    [-8974.691406,-108.572617,14.711975,1.347823],
    [-8966.782227,-109.091225,16.565800,6.001308],
    [-8962.533203,-113.054489,17.326694,5.526144],
    [-8955.093750,-120.359879,15.609655,5.133445],
    [-8952.486328,-131.626816,14.332898,4.387318],
    [-8954.048828,-131.725266,15.350592,3.668680],
    [-8948.090820,-142.953690,14.331187,2.404188],
    [-8948.253906,-150.426605,14.480653,3.535162],
    [-8953.395508,-149.993347,14.731019,3.209222],
    [-8956.549805,-160.472260,14.652415,3.806124],
    [-8966.603516,-163.034485,14.622370,3.189587],],10)

export let OpenWorldDungeonQuestGiver01 = std.CreatureTemplates.create(MODNAME,'openworldquestgiver01',30368)
OpenWorldDungeonQuestGiver01.Name.enGB.set('Mitch Powers')
OpenWorldDungeonQuestGiver01.Models.clearAll()
OpenWorldDungeonQuestGiver01.Models.addIds(12911)
OpenWorldDungeonQuestGiver01.Level.set(13,13)
OpenWorldDungeonQuestGiver01.FactionTemplate.set(35)
OpenWorldDungeonQuestGiver01.DamageSchool.setNormal()
OpenWorldDungeonQuestGiver01.Stats.ArmorMod.set(1)
OpenWorldDungeonQuestGiver01.Stats.DamageMod.set(214)
OpenWorldDungeonQuestGiver01.Stats.ExperienceMod.set(1)
OpenWorldDungeonQuestGiver01.Stats.HealthMod.set(155)
OpenWorldDungeonQuestGiver01.Stats.ManaMod.set(1)
OpenWorldDungeonQuestGiver01.NPCFlags.QuestGiver.mark()
spawnMultipleNPCWithTimer(OpenWorldDungeonQuestGiver01.ID,0,0,[
    [-8786.554,561.652,10.753,2.7496]],3600)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Main Quest Chain

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
startingQuest01.Flags.set(1)
startingQuest01.MinLevel.set(1)
startingQuest01.QuestLevel.set(5)
startingQuest01.Objectives.Entity.add(startingZoneWolfBoss.ID,1)//kill quest
startingQuest01.Objectives.Item.add(AgathasLockbox.ID,1)//return item quest
startingQuest01.Questgiver.addBoth(questGiver01.ID)
startingQuest01.Rewards.ChoiceItem.add(tierOneClothMaterial,2)
startingQuest01.Rewards.ChoiceItem.add(tierOneMailMaterial,2)
startingQuest01.Rewards.ChoiceItem.add(tierOneLeatherMaterial,2)
startingQuest01.Rewards.Item.add(SmallSackofCoinswithBag.ID,1)
startingQuest01.Rewards.Money.set(216)
startingQuest01.Text.Objective.enGB.set('You have proven your worth as a combatant in previous battles, no doubt hero. However you are about to embark on an adventure like no other.$B$BTo make sure that you are up to the task at hand, I require you to return the belongings of the.. uh.. previously unsuccessful hero to me at once. They are guarded by a wolf, to make things worse. Do this and you shall prove your worth.')
startingQuest01.Text.Incomplete.enGB.set('I know that this may seem like a daunting challenge hero, but I emplore you. Without these resources, you can not progress.')
startingQuest01.Text.Description.enGB.set('Slay the Worg and return to the Elder with Agatha\'s belongings.')
startingQuest01.Text.Reward.enGB.set('Oh good, you\'ve made it out alive! I could have sworn that was supposed to be challenging. I\'m truly glad that you\'ve managed to defeat that savage worg.$B$BHere hero, claim your rewards.')
startingQuest01.Text.Title.enGB.set('A Grim Fate')


startingQuest02.Flags.set(1)
startingQuest02.MinLevel.set(1)
startingQuest02.QuestLevel.set(5)
startingQuest02.Questgiver.addBoth(questGiver01.ID)
startingQuest02.Objectives.Item.add(startingResource01.ID,10)
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[0],2)
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[2],2)
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[3],2)
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[4],2)
startingQuest02.Rewards.ChoiceItem.add(tierOneBaseResources[5],2)
startingQuest02.Rewards.Money.set(416)
startingQuest02.Text.Objective.enGB.set('Slaying monsters is not all you need to be prepared for hero, we like to use our hands to collect materials and craft our own gear, and a valuable lesson you will learn is how to gather resources for your crafting recipes.$B$BI want you to venture around the Walk of Heroes and gather 10 peacelillies. You can utilize the track resource node feature on your minimap if you have any difficulties.')
startingQuest02.Text.Incomplete.enGB.set('Fear not hero, if you are having difficulties finding the lillies, utilize the resource node tracker on your minimap! I have faith in you.')
startingQuest02.Text.Description.enGB.set('Collect 10 Everlillies from the surrounding Walk of Heroes area.')
startingQuest02.Text.Reward.enGB.set('Gathering is one of the main ways for players to obtain resources on the server. It is important to remember that you can switch between finding nodes on your minimap to help you find valuable ores to create upgraded armor, or herbs to create powerful potions!')
startingQuest02.Text.Title.enGB.set('Gathering : a Tutorial')


startingQuest03.Flags.set(1)
startingQuest03.MinLevel.set(1)
startingQuest03.QuestLevel.set(5)
startingQuest03.Questgiver.addStarter(questGiver01.ID)
startingQuest03.Questgiver.addEnder(questGiver02.ID)
startingQuest03.Rewards.Money.set(86)
startingQuest03.Text.Objective.enGB.set('Your duties have consequences, it is time you learned of the price that we pay by existing in this land. Seek out the arcanist Fractal Spem near the tree of destiny. He shall guide your journey further, with righteousness. Thank you for your time hero.$B$BMay the light be with you.')
startingQuest03.Text.Incomplete.enGB.set('My suggestion would be to look by the lake for the man in blue.')
startingQuest03.Text.Description.enGB.set('Find Arcanist Fractal Spem')
startingQuest03.Text.Reward.enGB.set('You must be the hero that I\'ve heard so much about. It\'s been a pleasure to watch you walk around and trample on the creatures of this forest.')
startingQuest03.Text.Title.enGB.set('Fractal Spem')


startingQuest04.Flags.set(1)
startingQuest04.MinLevel.set(1)
startingQuest04.QuestLevel.set(5)
startingQuest04.Questgiver.addStarter(questGiver02.ID)
startingQuest04.Questgiver.addEnder(questGiver02.ID)
startingQuest04.Rewards.ChoiceItem.add(tierOneClothMaterial,2)
startingQuest04.Rewards.ChoiceItem.add(tierOneMailMaterial,2)
startingQuest04.Rewards.ChoiceItem.add(tierOneLeatherMaterial,2)
startingQuest04.Rewards.Money.set(586)
startingQuest04.Objectives.Item.add(tierOneClothGear[6],1)
startingQuest04.StartItem.set(SatchelofResources.ID)
startingQuest04.Text.Objective.enGB.set('It is here at this lake, that I have found peace in doing the most mundane tasks. Fortunately, you are not a scripted NPC and you have free will. There is an icon on your minimap that looks like a piece of armor, click that and craft a pair of gloves for me.')
startingQuest04.Text.Incomplete.enGB.set('Hero, please open the crafting menu on your minimap; it is the icon that looks like a piece of body armor.')
startingQuest04.Text.Description.enGB.set('Craft a pair of bracers for Fractal Spem using the Crafting Menu on your minimap.')
startingQuest04.Text.Reward.enGB.set('Very good hero, you have learned the basics of utilizing the crafting menu. You will gather many resources on your journey, and that crafting menu will be your best friend!')
startingQuest04.Text.Title.enGB.set('Crafting : a Tutorial')


startingQuest05.Flags.set(1)
startingQuest05.MinLevel.set(1)
startingQuest05.QuestLevel.set(5)
startingQuest05.Questgiver.addStarter(questGiver02.ID)
startingQuest05.Questgiver.addEnder(questGiver03.ID)
startingQuest05.Rewards.ChoiceItem.add(tierOneClothMaterial,2)
startingQuest05.Rewards.ChoiceItem.add(tierOneMailMaterial,2)
startingQuest05.Rewards.ChoiceItem.add(tierOneLeatherMaterial,2)
startingQuest05.Rewards.Money.set(286)
startingQuest05.Text.Objective.enGB.set('Your journey is almost over hero, and it may feel like it has already begun. Head to the town hall outside of the Walk of Heroes and speak to the Knight Captain in the barracks. He shall guide you on what you must do next. You are always welcomed here.')
startingQuest05.Text.Incomplete.enGB.set('Did you manage to speak to the Knight Captain in the barracks? You should leave through the cave and speak to him at once!')
startingQuest05.Text.Description.enGB.set('Speak to the Knight Captain in the barracks of Shandralis, outside of the Walk of Heroes.')
startingQuest05.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
startingQuest05.Text.Title.enGB.set('Shandralis')


startingQuest06.Flags.set(1)
startingQuest06.MinLevel.set(1)
startingQuest06.QuestLevel.set(5)
startingQuest06.Questgiver.addStarter(questGiver03.ID)
startingQuest06.Questgiver.addEnder(questGiver03.ID)
startingQuest06.Rewards.ChoiceItem.add(tierOneClothMaterial,5)
startingQuest06.Rewards.ChoiceItem.add(tierOneMailMaterial,5)
startingQuest06.Rewards.ChoiceItem.add(tierOneLeatherMaterial,5)
startingQuest06.Rewards.Money.set(4025)
startingQuest06.Objectives.Entity.add(BanditNpc.ID,15)
startingQuest06.Objectives.Entity.add(BanditBossNpc.ID,3)
startingQuest06.Rewards.Item.add(OrbofPower.ID,1)
startingQuest06.Text.Objective.enGB.set('Thank you for coming again hero, we need you here. We are currently dealing with a bandit problem and they are stealing all of the food from poor Gertrude and her cats... Please end this problem once and for all. I don\'t like to resort to violence but this is an exception I guess. Slay 15 bandits and 3 unruly bandits and return to me for your reward.')
startingQuest06.Text.Incomplete.enGB.set('We must work with haste hero, the bandits will not remain around for long.')
startingQuest06.Text.Description.enGB.set('Slay 15 Bandits and 3 Unruly bandits.')
startingQuest06.Text.Reward.enGB.set('You have truly been a great help to your town.')
startingQuest06.Text.Title.enGB.set('A Thief in the Night')


startingQuest07.Flags.set(1)
startingQuest07.MinLevel.set(1)
startingQuest07.QuestLevel.set(5)
startingQuest07.Questgiver.addStarter(questGiver03.ID)
startingQuest07.Questgiver.addEnder(questGiver03.ID)
startingQuest07.Rewards.ChoiceItem.add(tierOneClothMaterial,5)
startingQuest07.Rewards.ChoiceItem.add(tierOneMailMaterial,5)
startingQuest07.Rewards.ChoiceItem.add(tierOneLeatherMaterial,5)
startingQuest07.Rewards.Money.set(3025)
startingQuest07.Objectives.Entity.add(creature4.ID,10)
startingQuest07.Objectives.Entity.add(creature5.ID,10)
startingQuest07.Objectives.Item.add(StrangeEtherealCrate.ID,15)
startingQuest07.Rewards.Item.add(OrbofPower.ID,1)
startingQuest07.Text.Objective.enGB.set('Your work with the bandits will not go unnoticed hero. Right now we must continue to press on. Please exit the city and continue to push for the purg~~ safety of our town. I need you to enter the Kobold Mines and return to me with blood on your hands and some ethereal crates. Quickly, no time for questions!')
startingQuest07.Text.Incomplete.enGB.set('I understand your concern hero, but this is to protect our town. Quickly, we must make haste.')
startingQuest07.Text.Description.enGB.set('Slay 10 Kobold Foreman, 10 Kobold Miners, and collect 15 Strange Ethereal Crates.')
startingQuest07.Text.Reward.enGB.set('You have truly been a great help to your town.')
startingQuest07.Text.Title.enGB.set('Meddlesome Affairs')


startingQuest08.Flags.set(1)
startingQuest08.MinLevel.set(1)
startingQuest08.QuestLevel.set(10)
startingQuest08.Questgiver.addStarter(questGiver03.ID)
startingQuest08.Questgiver.addEnder(questGiver03.ID)
startingQuest08.Rewards.ChoiceItem.add(tierTwoClothMaterial,3)
startingQuest08.Rewards.ChoiceItem.add(tierTwoMailMaterial,3)
startingQuest08.Rewards.ChoiceItem.add(tierTwoLeatherMaterial,3)
startingQuest08.Rewards.Money.set(4059)
startingQuest08.Objectives.Entity.add(Zone2Creature1.ID,25)
startingQuest08.Rewards.Item.add(OrbofPower.ID,1)
startingQuest08.Text.Objective.enGB.set('An excellent feat has been accomplished today with your work destroying the kobold menace. I have no doubt that has put some hair on your chest, and you will need it for this next task. Head back into town, and enter the blacksmith. Behind the blacksmith is a cave that has plagued us for a long time.$B$BEnter this cave and clear out the menace that lurks beyond.')
startingQuest08.Text.Incomplete.enGB.set('I understand your concern hero, but this is to protect our town. Quickly, we must make haste.')
startingQuest08.Text.Description.enGB.set('Slay 25 Posessed Spiderlings behind the Blacksmith in Shandralis')
startingQuest08.Text.Reward.enGB.set('You have truly been a great help to your town.')
startingQuest08.Text.Title.enGB.set('Spooky... Scary...')


startingQuest09.Flags.set(1)
startingQuest09.MinLevel.set(1)
startingQuest09.QuestLevel.set(1)
startingQuest09.Questgiver.addStarter(questGiver03.ID)
startingQuest09.Questgiver.addEnder(questGiver04.ID)
startingQuest09.Rewards.Money.set(4059)
startingQuest09.Text.Objective.enGB.set('I appreciate your assistance with clearing out the spiders behind the blacksmith. Unfortunately, I neglected to mention that I need a very special potion from an apothecary that was once in that zone. Please return and find the apothecary. He shall show you what I require.')
startingQuest09.Text.Incomplete.enGB.set('Hi there :) This isn\'t supposed to be here.')
startingQuest09.Text.Description.enGB.set('Speak to Apothecary Vargan behind the blacksmith.')
startingQuest09.Text.Reward.enGB.set('You\'re... alive?')
startingQuest09.Text.Title.enGB.set('Forgotten Requests')


startingQuest10.Flags.set(1)
startingQuest10.MinLevel.set(1)
startingQuest10.QuestLevel.set(10)
startingQuest10.Questgiver.addStarter(questGiver04.ID)
startingQuest10.Questgiver.addEnder(questGiver03.ID)
startingQuest10.Rewards.ChoiceItem.add(tierTwoClothMaterial,3)
startingQuest10.Rewards.ChoiceItem.add(tierTwoMailMaterial,3)
startingQuest10.Rewards.ChoiceItem.add(tierTwoLeatherMaterial,3)
startingQuest10.Rewards.Money.set(4059)
startingQuest10.Objectives.Item.add(VialofPoison.ID,10)
startingQuest10.Rewards.Item.add(OrbofPower.ID,1)
startingQuest10.Text.Objective.enGB.set('I am impressed that you made it this far hero, but this is where most adventurer journeys end. As you can see, the grounds have been plagued with an experiment gone wrong, and I know that your council member wishes for you to return with the poison that has corrupted these citizens he sent me before... Very well, if you wish to die, be my guest.')
startingQuest10.Text.Incomplete.enGB.set('I understand your concern hero, but this is to protect our town. Quickly, we must make haste.')
startingQuest10.Text.Description.enGB.set('Collect 10 Vials of Poison')
startingQuest10.Text.Reward.enGB.set('You must really care for this town... pity.')
startingQuest10.Text.Title.enGB.set('Experiment Gone Wrong')


startingQuest11.Flags.set(1)
startingQuest11.MinLevel.set(1)
startingQuest11.QuestLevel.set(10)
startingQuest11.Questgiver.addStarter(questGiver03.ID)
startingQuest11.Questgiver.addEnder(questGiver03.ID)
startingQuest11.Rewards.Item.add(SatchelofPower.ID,1)
startingQuest11.Rewards.Item.add(OrbofPower.ID,1)
startingQuest11.Text.Objective.enGB.set('You have done well hero, and it is time that you are given a... bone of sorts. I will provide you with a powerful item that will assist you as you continue to assist us on our journey. Just be weary, never betray your duty...')
startingQuest11.Text.Incomplete.enGB.set('Truly, this is for you.')
startingQuest11.Text.Description.enGB.set('Claim your duty and your bag.')
startingQuest11.Text.Reward.enGB.set('Yes... all yours... no strings attached.')
startingQuest11.Text.Title.enGB.set('No Strings Attached')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Side Quests

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
BagQuest01.Flags.set(8)
BagQuest01.MinLevel.set(1)
BagQuest01.QuestLevel.set(5)
SQL.quest_template_addon.add(BagQuest01.ID).SpecialFlags.set(1)
BagQuest01.Questgiver.addStarter(BoarQuestGiver01.ID)
BagQuest01.Questgiver.addEnder(BoarQuestGiver01.ID)
BagQuest01.Rewards.Money.set(2525)
BagQuest01.Objectives.Item.add(BoarSkin.ID,25)
BagQuest01.Rewards.Item.add(BoarskinSatchel.ID,1)
BagQuest01.Rewards.Difficulty.set6() // Testing EXP on Quest Reward
BagQuest01.Text.Objective.enGB.set('I understand that it can be quite difficult to continue on your journey without ample room to carry supplies, hero. I have a deal for you. If you can bring me 25 Boarskins from the boars in the surrounding area, I can fashion them into a bag for you so that you can carry more materials in the future. What do you say? Do we have a deal?')
BagQuest01.Text.Incomplete.enGB.set('Have you managed to get the boar skins that I require to fashion into a bag?')
BagQuest01.Text.Description.enGB.set('Bring 25 Boar Skins to Jethel.')
BagQuest01.Text.Reward.enGB.set('Oh these will be perfect, just give me one moment and I\'ll be ready for you!')
BagQuest01.Text.Title.enGB.set('Useful Little Boars')


ExpTestQuest01.Flags.set(8)
ExpTestQuest01.MinLevel.set(1)
ExpTestQuest01.QuestLevel.set(20)
SQL.quest_template_addon.add(ExpTestQuest01.ID).SpecialFlags.set(1)
ExpTestQuest01.Questgiver.addStarter(BoarQuestGiver01.ID)
ExpTestQuest01.Questgiver.addEnder(BoarQuestGiver01.ID)
ExpTestQuest01.Rewards.Money.set(-10000)
ExpTestQuest01.Objectives.Item.add(ExpScroll.ID,1)
ExpTestQuest01.Rewards.Difficulty.set7() // Testing EXP on Quest Reward
ExpTestQuest01.Text.Objective.enGB.set('One of the biggest challenges that you will face is growing in power, and in this case, I may be able to help you. If you can find me experience scrolls, I happen to know how to read them and I can transfer the experience to you... for a fee.')
ExpTestQuest01.Text.Incomplete.enGB.set('Have you managed to find a scroll of experience?')
ExpTestQuest01.Text.Description.enGB.set('Bring 1 Experience Scroll to the quest giver.')
ExpTestQuest01.Text.Reward.enGB.set('Experience shall give you power beyond your wildest dreams. This will help me as much as it shall help you.')
ExpTestQuest01.Text.Title.enGB.set('Experience is Key')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                                                      Dungeon Quests

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
OpenWorldQuest01.Flags.set(1)
OpenWorldQuest01.MinLevel.set(1)
OpenWorldQuest01.QuestLevel.set(40)
OpenWorldQuest01.Questgiver.addStarter(OpenWorldDungeonQuestGiver01.ID)
OpenWorldQuest01.Questgiver.addEnder(OpenWorldDungeonQuestGiver01.ID)
OpenWorldQuest01.Objectives.Entity.add(DungeonMob01.ID,25)
OpenWorldQuest01.Objectives.Entity.add(DungeonMob02.ID,10)
OpenWorldQuest01.Objectives.Entity.add(DungeonBoss01.ID,1)
OpenWorldQuest01.Rewards.Money.set(52532)
OpenWorldQuest01.Rewards.ChoiceItem.add(tierThreeClothMaterial,5)
OpenWorldQuest01.Rewards.ChoiceItem.add(tierThreeLeatherMaterial,5)
OpenWorldQuest01.Rewards.ChoiceItem.add(tierThreeMailMaterial,5)
OpenWorldQuest01.Rewards.Item.add(OrbofPower.ID,1)
OpenWorldQuest01.Text.Objective.enGB.set('I am impressed that you managed to venture out this way $c, and it is time for you to do what I was unable to do. If you can manage it, please enter the dungeon and dispatch the enemies within.')
OpenWorldQuest01.Text.Incomplete.enGB.set('Destroy the menace within the dungeon.')
OpenWorldQuest01.Text.Description.enGB.set('Enter the dungeon and slay 25 demonspawns, 10 banshees, and Argan the Destroyer')
OpenWorldQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
OpenWorldQuest01.Text.Title.enGB.set('Entering the Dungeon')


OpenWorldQuest02.Flags.set(1)
OpenWorldQuest02.MinLevel.set(1)
OpenWorldQuest02.QuestLevel.set(80)
OpenWorldQuest02.Questgiver.addStarter(OpenWorldDungeonQuestGiver01.ID)
OpenWorldQuest02.Questgiver.addEnder(OpenWorldDungeonQuestGiver01.ID)
OpenWorldQuest02.Objectives.Entity.add(DungeonBoss01.ID,3)
OpenWorldQuest02.Objectives.Entity.add(DungeonBoss02.ID,3)
OpenWorldQuest02.Objectives.Entity.add(DungeonBoss03.ID,3)
OpenWorldQuest02.Rewards.Money.set(253696)
OpenWorldQuest02.Rewards.ChoiceItem.add(DarkSteel.ID,1)
OpenWorldQuest02.Rewards.ChoiceItem.add(DarkCloth.ID,1)
OpenWorldQuest02.Rewards.ChoiceItem.add(DarkLeather.ID,1)
OpenWorldQuest02.Rewards.Item.add(OrbofPower.ID,5)
OpenWorldQuest02.Text.Objective.enGB.set('I am impressed that you managed to venture out this way $c, and it is time for you to do what I was unable to do. If you can manage it, please enter the dungeon and dispatch the enemies within.')
OpenWorldQuest02.Text.Incomplete.enGB.set('Destroy the menace within the dungeon.')
OpenWorldQuest02.Text.Description.enGB.set('Enter the dungeon and slay the bosses within.')
OpenWorldQuest02.Text.Reward.enGB.set('This is proven to be a difficult challenge, but I am glad that you have prevailed.')
OpenWorldQuest02.Text.Title.enGB.set('Dungeon Mastery')


OpenWorldQuest03.Flags.set(1)
OpenWorldQuest03.MinLevel.set(1)
OpenWorldQuest03.QuestLevel.set(80)
OpenWorldQuest03.Questgiver.addStarter(OpenWorldDungeonQuestGiver01.ID)
OpenWorldQuest03.Questgiver.addEnder(OpenWorldDungeonQuestGiver01.ID)
OpenWorldQuest03.Objectives.Entity.add(DungeonBoss01.ID,1)
OpenWorldQuest03.Objectives.Entity.add(DungeonBoss02.ID,1)
OpenWorldQuest03.Objectives.Entity.add(DungeonBoss03.ID,1)
OpenWorldQuest03.Rewards.Money.set(153696)
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward01.ID,1)
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward02.ID,1)
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward03.ID,1)
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward04.ID,1)
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward05.ID,1)
OpenWorldQuest03.Rewards.ChoiceItem.add(ItemReward06.ID,1)
OpenWorldQuest03.Rewards.Item.add(OrbofPower.ID,1)
OpenWorldQuest03.Text.Objective.enGB.set('I am impressed that you managed to venture out this way $c, and it is time for you to do what I was unable to do. If you can manage it, please enter the dungeon and dispatch the enemies within.')
OpenWorldQuest03.Text.Incomplete.enGB.set('Destroy the menace within the dungeon.')
OpenWorldQuest03.Text.Description.enGB.set('Enter the dungeon and slay the bosses within.')
OpenWorldQuest03.Text.Reward.enGB.set('This is proven to be a difficult challenge, but I am glad that you have prevailed.')
OpenWorldQuest03.Text.Title.enGB.set('Dungeoneering Pioneer')

