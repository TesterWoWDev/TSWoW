import { std } from "tswow-stdlib"
import { questGiver03 } from "../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { SatchelofPower } from "../(Zone-0)Walk-of-Heroes/starting-zone-items"
import { startingQuest08, startingQuest09, startingQuest10, startingQuest11 } from "../(Zone-0)Walk-of-Heroes/starting-zone-quests"
import { OrbofPower } from "../(Zone-5)Mall/ClassQuests/ARarePowerOrb"
import { addLootToGobChestMultiDrop } from "../../functions/gob-functions"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnGobTimer, spawnMultiGobTimer, spawnMultipleNPCWithTimer } from "../../functions/spawning-functions"
import { tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial } from "../../items/armor/tier2-set"
import { MODNAME } from "../../modname"
import { Zone2Creature1 } from "./zone-2-creatures"




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


export let VialofPoison = std.Items.create(MODNAME,'poisonvial',1130)
VialofPoison.Name.enGB.set('Vial of Toxic Tonic')
VialofPoison.Quality.setBlue()
VialofPoison.MaxStack.set(9999)
VialofPoison.Price.set(0,0)
VialofPoison.RequiredLevel.set(0)

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