import { MODNAME } from "./quests-mod-data"
import { std } from "tswow-stdlib"

let mob = std.CreatureTemplates.create(MODNAME,'quest1-mob',2934)//replace 2934 with parentCreature
mob.Name.enGB.set('eh')
mob.Subname.enGB.set('eh')
mob.Level.set(1,3)

let item = std.Items.create(MODNAME,'quest1-item',2934)//replace 2934 with parentItem
item.Name.enGB.set('eej')
item.Description.enGB.set('asdasd')
item.Bonding.setQuestItem()//not need if your parent item is a quest item as well

let quest = std.Quests.create(MODNAME,'quest1-quest')
//option 1
quest.Flags.set(1)
//option 2
quest.Flags.NoMoneyFromXP.mark()
quest.Flags.FailOnLogout.mark()

quest.MinLevel.set(1)
quest.QuestLevel.set(1)

// quest.Objectives.Entity.add(creatureid,count)//kill quest
// quest.Objectives.Item.add(itemid,itemcount)//return item quest
quest.Objectives.Entity.add(mob.ID,1)//kill quest
quest.Objectives.Item.add(item.ID,1)//return item quest
//option 1
quest.Questgiver.addStarter(mob.ID)
quest.Questgiver.addEnder(mob.ID)
//option 2
quest.Questgiver.addBoth(mob.ID)

quest.Rewards.ChoiceItem.add(100034,2)
quest.Rewards.ChoiceItem.add(100067,2)
quest.Rewards.ChoiceItem.add(100004,2)
quest.Rewards.Money.set(156)

quest.Text.Description.enGB.set('You could not have volunteered at a better time, $n. We are on the cusp of something great. Everybody tells stories of the old days where laws did not exist and we were free to plunder as we pleased. This is our second chance to get back to an easier time... a better time. These new lands hold riches beyond our imagining, and they are ripe for the picking. If you stick with us, we will be feasting like kings and queens in no time. What do you say?$B$BI\'ll leave your reasoning to be yours and yours alone, but if you fancy an adventure, speak to Lieutenant Braggand, he will give you a few tips for survival.')
quest.Text.Incomplete.enGB.set('Is there something I can help you with $n? You should be on your way.')
quest.Text.Objective.enGB.set('Captain Galant has requested that you seek out Lieutenant Braggand to begin your training.')
quest.Text.Reward.enGB.set('Ah, you must be $n. Come, we have much to discuss.')
quest.Text.Title.enGB.set('A New Hope')