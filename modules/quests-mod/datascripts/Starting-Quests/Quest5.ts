import { std } from 'tswow-stdlib';
import { MODNAME } from '../quests-mod-data';
import { emptyVials } from './Quest2';
import {mysteriousVials} from './Quest3'

export const signedPapers = std.Items.create(MODNAME,"startquest5-signeddoc",20810)
	signedPapers.Name.enGB.set("Signed Documents")
	signedPapers.Description.enGB.set("They're blank.")

const startQuest5 = std.Quests.create(MODNAME, "startQuest5")
	startQuest5.QuestLevel.set(1)
	startQuest5.Text.Title.enGB.set("Fortuitous Allies")
	startQuest5.Text.Objective.enGB.set("fill me")
	startQuest5.Text.Description.enGB.set("Archmagus Devalden has informed you of the power that resides in the vial that you now contain. He has signed documents detailing the sample and requested that you return to the apothecary with the information he has provided about the plague. He has assured you that the apothecary will provide you with supplies for your upcoming venture.")
	startQuest5.Questgiver.addStarter(1)
	startQuest5.Questgiver.addEnder(1)
	startQuest5.Objectives.Item.add(emptyVials.ID,1)
	startQuest5.Rewards.Money.set(25000)
	startQuest5.Rewards.Item.add(signedPapers.ID,1)//blank papers
	startQuest5.Rewards.Item.add(mysteriousVials.ID,1)//liquid vials
