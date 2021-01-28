import { std } from "tswow-stdlib"
import { ObjectiveDescription } from "tswow-stdlib/Quest/QuestText"

const testquest1 = std.Quests.create("testmodq", "testquest1")
testquest1.Questgiver.addStarter(6373)
testquest1.Questgiver.addEnder(6373)
testquest1.Text.Title.enGB.set("So You Want to Be a Developer?")
testquest1.Text.Description.enGB.set("Kill the mongrels surrounding Northshire Abbey.")
testquest1.Text.Objective.enGB.set("So, you're $n.. and you said what? you'd.. a who now? Developer? I doubt you could pass that off, there's a slew of things you have to kill to even be qualified!")
testquest1.Objectives.Entity.add(299, 20)
testquest1.Objectives.Entity.add(6, 20)
testquest1.Rewards.choiceItem.add(100001,1)
testquest1.Rewards.choiceItem.add(9413,1)
testquest1.Rewards.money.set(276)
testquest1.QuestLevel.set(10)








