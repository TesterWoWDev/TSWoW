import { std } from 'tswow-stdlib';
import { MODNAME } from '../quests-mod-data';

export const draftPaper = std.Items.create(MODNAME,"startQuest1-draftpaper",20810)
	draftPaper.Name.enGB.set("Draft Papers")
	draftPaper.Description.enGB.set("tattered, but still legible")

const startQuest1 = std.Quests.create(MODNAME, "startQuest1")
	startQuest1.QuestLevel.set(1)
	startQuest1.Text.Title.enGB.set("An Urgent Message")
	startQuest1.Text.Objective.enGB.set("Take the letter to Archbishop Fairway")
	startQuest1.Text.Description.enGB.set("You awake next to a broken frostmourne, and a letter with the insignia of the Fordring family sealing the note closed. You open the letter and find instructions regarding an insurrection happening in the land of Greenway. This letter was meant for an \'Archbishop Fairway\'.")
	startQuest1.Questgiver.addStarter(1)
	startQuest1.Questgiver.addEnder(1)
	startQuest1.Rewards.Money.set(12500)
	startQuest1.Rewards.ChoiceItem.add(1,20)//health pot
	startQuest1.Rewards.ChoiceItem.add(1,20)//mana pot
	startQuest1.Rewards.Item.add(draftPaper.ID,1)//draft papers