import { questGiver03 } from "../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { startingQuest08 } from "../(Zone-0)Walk-of-Heroes/starting-zone-quests"
import { OrbofPower } from "../(Zone-5)Mall/ClassQuests/ARarePowerOrb"
import { tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial } from "../../items/armor/tier2-set"
import { Zone2Creature1 } from "./zone-2-creatures"




startingQuest08.Flags.set(1)
startingQuest08.MinLevel.set(1)
startingQuest08.QuestLevel.set(1)

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
