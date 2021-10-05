
import { std } from "tswow-stdlib"
import { OrbofPower } from "../(Zone-5)Mall/ClassQuests/ARarePowerOrb"
import { tierOneBaseResources, tierOneClothGear, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set"
import { SmallSackofCoinswithBag } from "../../items/currencies"
import { MODNAME } from "../../modname"
import { BanditBossNpc, BanditNpc, questGiver01, questGiver02, questGiver03, startingZoneWolfBoss } from "./starting-zone-creatures"
import { AgathasLockbox, SatchelofResources, startingResource01 } from "./starting-zone-items"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Quest Declaration Area
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Starting Quest 1

startingQuest01.Flags.set(1)
startingQuest01.MinLevel.set(1)
startingQuest01.QuestLevel.set(1)

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Starting Quest 2

startingQuest02.Flags.set(1)
startingQuest02.MinLevel.set(1)
startingQuest02.QuestLevel.set(1)

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Starting Quest 3

startingQuest03.Flags.set(1)
startingQuest03.MinLevel.set(1)
startingQuest03.QuestLevel.set(1)

startingQuest03.Questgiver.addStarter(questGiver01.ID)
startingQuest03.Questgiver.addEnder(questGiver02.ID)


startingQuest03.Rewards.Money.set(86)

startingQuest03.Text.Objective.enGB.set('Your duties have consequences, it is time you learned of the price that we pay by existing in this land. Seek out the arcanist Fractal Spem near the tree of destiny. He shall guide your journey further, with righteousness. Thank you for your time hero.$B$BMay the light be with you.')
startingQuest03.Text.Incomplete.enGB.set('My suggestion would be to look by the lake for the man in blue.')
startingQuest03.Text.Description.enGB.set('Find Arcanist Fractal Spem')
startingQuest03.Text.Reward.enGB.set('You must be the hero that I\'ve heard so much about. It\'s been a pleasure to watch you walk around and trample on the creatures of this forest.')
startingQuest03.Text.Title.enGB.set('Fractal Spem')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Starting Quest 4

startingQuest04.Flags.set(1)
startingQuest04.MinLevel.set(1)
startingQuest04.QuestLevel.set(1)

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Starting Quest 5

startingQuest05.Flags.set(1)
startingQuest05.MinLevel.set(1)
startingQuest05.QuestLevel.set(1)

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








//Starting Quest 6 - Defias Bandits

startingQuest06.Flags.set(1)
startingQuest06.MinLevel.set(1)
startingQuest06.QuestLevel.set(1)

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

//Starting Quest 7 - Kobold Mines (in bramblewood folder)













//Enter town and Start Journey
//Make 10 subquests : Introduction (Class Master) - speak to class trainer
//Start Class Chain Quests

//Defias Bandit Problem - Main Story - kill 10 bandits and 3 unruly bandits
//On your way, set them free, give them big goal quests from now on, with epic rewards. IE : bring 2500 wood to the town for winter, reward : purple bracers

































































