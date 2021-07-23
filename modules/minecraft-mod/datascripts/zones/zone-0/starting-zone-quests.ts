
import { std } from "tswow-stdlib"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set"
import { SmallSackofCoinswithBag } from "../../items/currencies"
import { MODNAME } from "../../modname"
import { questGiver01, startingZoneWolfBoss } from "./starting-zone-creatures"
import { AgathasLockbox } from "./starting-zone-items"

export let startingQuest01 = std.Quests.create(MODNAME,'startingquest01-quest')
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
