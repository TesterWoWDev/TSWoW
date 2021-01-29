import { std } from "tswow-stdlib"



const testquest3 = std.Quests.create("testmodq3", "testquest3")
testquest3.Questgiver.addBoth(6286)
testquest3.Text.Title.enGB.set("A Great Feast")
testquest3.Text.Description.enGB.set("Collect all the ingredients for Zarrin's holiday feast.")
testquest3.Text.Objective.enGB.set("Hey, I'm planning a holiday feast. I need things to cook with. Thanks..")
testquest3.Text.Incomplete.enGB.set("I don't fuckin' know, I- fuckin', uh..")
testquest3.Objectives.Item.add(769,4)
testquest3.Objectives.Item.add(12208,4)
testquest3.Objectives.Item.add(44855,8)
testquest3.Objectives.Item.add(37707,6)
testquest3.Rewards.ChoiceItem.add(46349,1)
testquest3.QuestLevel.set(10)









