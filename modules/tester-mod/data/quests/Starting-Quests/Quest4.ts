import { std } from 'tswow-stdlib';
import { emptyVials } from './Quest2';
import {mysteriousVials} from './Quest3'

const plaguePapers = std.Items.create("tester-mod","startquest4-plaguepapers",20810)
plaguePapers.Name.enGB.set("Plague Papers")
plaguePapers.Description.enGB.set("They're blank.")

const startQuest4 = std.Quests.create("tester-mod", "startQuest4")
startQuest4.QuestLevel.set(1)
startQuest4.Text.Title.enGB.set("Unfortunate Circumstances")
startQuest4.Text.Objective.enGB.set("fill me")
startQuest4.Text.Description.enGB.set("The apothecary informs you of the powers contained within the vial and their origin dating back to the dark ages. This plague resembles the one responsible for detrimental disfunction in the world and the chief predecessor to the scourge epidemic. He instructs you that you should take the vial and seek out Archmagus Devalden in the mages tower nearby.")
startQuest4.Questgiver.addStarter(1)
startQuest4.Questgiver.addEnder(1)
startQuest4.Objectives.Item.add(emptyVials.ID,1)
startQuest4.Rewards.Money.set(21000)
startQuest4.Rewards.Item.add(plaguePapers.ID,1)//plague papers
startQuest4.Rewards.Item.add(mysteriousVials.ID,1)//liquid vials
