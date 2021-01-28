import { std } from "tswow-stdlib"


const testquest2 = std.Quests.create("testmodq2", "testquest2")
testquest2.Questgiver.addStarter(190)
testquest2.Questgiver.addEnder(190)
testquest2.Text.Title.enGB.set("Have You Figured It Out Yet?")
testquest2.Text.Description.enGB.set("Learn about the next step of developing for WoW servers.")
testquest2.Text.Objective.enGB.set("So.. you appear to have gotten used to questmaking so easily. You think you have what it takes for everything else? Because let me tell ya, sir, you don't.")
testquest2.Objectives.Item.add(30595,1)
testquest2.Rewards.money.set(50)
testquest2.Rewards.moneyBonus.set(100)
testquest2.QuestLevel.set(10)
testquest2.Text.Incomplete.enGB.set('Where is it? Do you take me for a fool?!')







