
import { std } from "tswow-stdlib"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set"
import { SmallSackofCoinswithBag } from "../../items/currencies"
import { MODNAME } from "../../modname"
import { questGiver01, startingZoneWolfBoss } from "./starting-zone-creatures"
import { AgathasLockbox } from "./starting-zone-items"

let quest = std.Quests.create(MODNAME,'quest1-quest')
quest.Flags.set(1)
quest.MinLevel.set(1)
quest.QuestLevel.set(1)

quest.Objectives.Entity.add(startingZoneWolfBoss.ID,1)//kill quest
quest.Objectives.Item.add(AgathasLockbox.ID,1)//return item quest
quest.Questgiver.addBoth(questGiver01.ID)

quest.Rewards.ChoiceItem.add(tierOneClothMaterial,2)
quest.Rewards.ChoiceItem.add(tierOneMailMaterial,2)
quest.Rewards.ChoiceItem.add(tierOneLeatherMaterial,2)
quest.Rewards.Item.add(SmallSackofCoinswithBag.ID,1)
quest.Rewards.Money.set(216)

quest.Text.Description.enGB.set('You have proven your worth as a combatant in previous battles, no doubt hero. However you are about to embark on an adventure like no other.$B$BTo make sure that you are up to the task at hand, I require you to return the belongings of the.. uh.. previously unsuccessful hero to me at once. They are guarded by a wolf, to make things worse. Do this and you shall prove your worth.')
quest.Text.Incomplete.enGB.set('I know that this may seem like a daunting challenge hero, but I emplore you. Without these resources, you can not progress.')
quest.Text.Objective.enGB.set('Slay the Worg and return to the Elder with Agatha\'s belongings.')
quest.Text.Reward.enGB.set('Oh good, you\'ve made it out alive! I could have sworn that was supposed to be challenging. I\'m truly glad that you\'ve managed to defeat that savage worg.$B$BHere hero, claim your rewards.')
quest.Text.Title.enGB.set('A Grim Fate')
