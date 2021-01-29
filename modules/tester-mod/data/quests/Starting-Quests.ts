import { std } from 'tswow-stdlib';

const startQuest1 = std.Quests.create("tester-mod", "startQuest1")
startQuest1.QuestLevel.set(1)
startQuest1.Text.Title.enGB.set("An Urgent Message")
startQuest1.Text.Objective.enGB.set("Take the letter to Archbishop Fairway")
startQuest1.Text.Description.enGB.set("You awake next to a broken frostmourne, and a letter with the insignia of the Fordring family sealing the note closed. You open the letter and find instructions regarding an insurrection happening in the land of Greenway. This letter was meant for an \"Archbishop Fairway\".")
startQuest1.Questgiver.addStarter(1)
startQuest1.Questgiver.addEnder(1)
startQuest1.Rewards.Money.set(12500)
startQuest1.Rewards.ChoiceItem.add(1,20)//health pot
startQuest1.Rewards.ChoiceItem.add(1,20)//mana pot
startQuest1.Rewards.Item.add(1,1)//draft papers

const startQuest2 = std.Quests.create("tester-mod", "startQuest2")
startQuest2.QuestLevel.set(1)
startQuest2.Text.Title.enGB.set("Call for Action")
startQuest2.Text.Objective.enGB.set("fill me")
startQuest2.Text.Description.enGB.set("The letter you obtained from Gregor Victus summons you to the Greenway Lodge where you are greeted by famine, disease, and strife amidst a suffering population. You enter the main building and speak to Archbishop Fairway about a mysterious plague that suddenly befell the people of Greenway.")
startQuest2.Questgiver.addStarter(1)
startQuest2.Questgiver.addEnder(1)
startQuest2.Objectives.Item.add(1,1)//draft paper
startQuest2.Rewards.Money.set(21000)
startQuest2.Rewards.Item.add(1,1)//blank papers
startQuest2.Rewards.Item.add(1,5)//empty vials
