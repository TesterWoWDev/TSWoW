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
quest.Questgiver.addStarter(131)
quest.Questgiver.addEnder(122)
//option 2
quest.Questgiver.addBoth(122)

quest.Rewards.ChoiceItem.add(133,1)
quest.Rewards.Item.add(133,1)
quest.Rewards.Money.set(100)

quest.Text.Description.enGB.set('')
quest.Text.Incomplete.enGB.set('')
quest.Text.Objective.enGB.set('')
quest.Text.Reward.enGB.set('')
quest.Text.Title.enGB.set('')