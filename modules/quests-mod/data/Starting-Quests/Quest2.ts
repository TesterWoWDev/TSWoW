import { std } from 'tswow-stdlib';
import { MODNAME } from '../quests-mod-data';
import {draftPaper} from './Quest1'

export const emptyVials = std.Items.create(MODNAME,"startQuest2-emptyVials",3371)
    emptyVials.Name.enGB.set("Empty Vials")
    emptyVials.Description.enGB.set("kinda dirty...")

export const blankPapers = std.Items.create(MODNAME,"startquest2-blankpapers",20810)
    blankPapers.Name.enGB.set("Blank Papers")
    blankPapers.Description.enGB.set("They're blank.")

const startQuest2 = std.Quests.create(MODNAME, "startQuest2")
    startQuest2.QuestLevel.set(1)
    startQuest2.Text.Title.enGB.set("Call for Action")
    startQuest2.Text.Objective.enGB.set("fill me")
    startQuest2.Text.Description.enGB.set("The letter you obtained from Gregor Victus summons you to the Greenway Lodge where you are greeted by famine, disease, and strife amidst a suffering population. You enter the main building and speak to Archbishop Fairway about a mysterious plague that suddenly befell the people of Greenway.")
    startQuest2.Questgiver.addStarter(1)
    startQuest2.Questgiver.addEnder(1)
    startQuest2.Objectives.Item.add(draftPaper.ID,1)//draft paper
    startQuest2.Rewards.Money.set(21000)
    startQuest2.Rewards.Item.add(blankPapers.ID,1)//blank papers
    startQuest2.Rewards.Item.add(emptyVials.ID,5)//empty vials
