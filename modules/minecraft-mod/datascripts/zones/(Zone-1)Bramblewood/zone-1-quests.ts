//Starting Quest 7 - Kobold Mines

import { Boar01, questGiver03 } from "../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { startingQuest07 } from "../(Zone-0)Walk-of-Heroes/starting-zone-quests"
import { OrbofPower } from "../(Zone-5)Mall/ClassQuests/ARarePowerOrb"
import { addLootToGobChest } from "../../functions/gob-functions"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnMultiGobTimer, spawnNPC } from "../../functions/spawning-functions"
import { tierOneClothMaterial, tierOneMailMaterial, tierOneLeatherMaterial } from "../../items/armor/tier1-set"
import { creature4, creature5 } from "./zone-1-creatures"
import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { SQL } from "wotlkdata/sql/SQLFiles";
import { BoarSkin, BoarskinSatchel } from "./zone-1-items"
import { ExpScroll } from "../(Zone-0)Walk-of-Heroes/starting-zone-items"

export let StrangeEtherealCrate = std.Items.create(MODNAME,'strangecrate01',36771)
StrangeEtherealCrate.Name.enGB.set('Strange Ethereal Crate')
StrangeEtherealCrate.Quality.setGreen()
StrangeEtherealCrate.MaxStack.set(500)
StrangeEtherealCrate.Spells.clearAll()
export let EtherealPortalBag = std.Items.create(MODNAME,'etherealportalbag',4498)
EtherealPortalBag.Quality.setBlue()
EtherealPortalBag.DisplayInfo.copyFrom(38186)
EtherealPortalBag.ContainerSlots.set(12)

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

startingQuest07.Flags.set(1)
startingQuest07.MinLevel.set(1)
startingQuest07.QuestLevel.set(1)

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
BoarQuestGiver01.NPCFlags.QuestGiver.mark()

spawnNPC(BoarQuestGiver01.ID,0,0,[-8263.850,-122.315,0.9015,2.32])

export let BagQuest01 = std.Quests.create(MODNAME,'bagquest01-quest')
BagQuest01.Flags.set(8)
BagQuest01.MinLevel.set(1)
BagQuest01.QuestLevel.set(1)
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


export let ExpTestQuest01 = std.Quests.create(MODNAME,'expquest1-quest')
ExpTestQuest01.Flags.set(8)
ExpTestQuest01.MinLevel.set(1)
ExpTestQuest01.QuestLevel.set(1)
SQL.quest_template_addon.add(ExpTestQuest01.ID).SpecialFlags.set(1)
ExpTestQuest01.Questgiver.addStarter(BoarQuestGiver01.ID)
ExpTestQuest01.Questgiver.addEnder(BoarQuestGiver01.ID)

ExpTestQuest01.Rewards.Money.set(-10000)
ExpTestQuest01.Objectives.Item.add(ExpScroll.ID,1)
ExpTestQuest01.Rewards.Difficulty.set10() // Testing EXP on Quest Reward


BagQuest01.Text.Objective.enGB.set('One of the biggest challenges that you will face is growing in power, and in this case, I may be able to help you. If you can find me experience scrolls, I happen to know how to read them and I can transfer the experience to you... for a fee.')
BagQuest01.Text.Incomplete.enGB.set('Have you managed to find a scroll of experience?')
BagQuest01.Text.Description.enGB.set('Bring 1 Experience Scroll to the quest giver.')
BagQuest01.Text.Reward.enGB.set('Experience shall give you power beyond your wildest dreams. This will help me as much as it shall help you.')
BagQuest01.Text.Title.enGB.set('Experience is Key')