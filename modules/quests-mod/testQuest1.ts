import { MODNAME } from "quests-mod"
import { std } from "tswow-stdlib"
let quest = std.Quests.create(MODNAME,'quest1')
//option 1
quest.Flags.set(1)
//option 2
quest.Flags.NoMoneyFromXP.mark()
quest.Flags.FailOnLogout.mark()

quest.MinLevel.set(1)
quest.QuestLevel.set(1)

// quest.Objectives.Entity.add(creatureid,count)//kill quest
// quest.Objectives.Item.add(itemid,itemcount)//return item quest
quest.Objectives.Entity.add(121,1)//kill quest
quest.Objectives.Item.add(133,1)//return item quest
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