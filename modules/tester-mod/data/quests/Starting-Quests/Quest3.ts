import { std } from 'tswow-stdlib';
import { emptyVials } from './Quest2';

export const mysteriousVials = std.Items.create("tester-mod","startQuest3-mysteriousliquidvial",3371)
    mysteriousVials.Name.enGB.set("Mysterious Liquid Vials")
    mysteriousVials.Description.enGB.set("kinda dirty...")

const poorNotes = std.Items.create("tester-mod","startquest3-poornotes",20810)
    poorNotes.Name.enGB.set("Poorly Written Notes")
    poorNotes.Description.enGB.set("They're bad. Like Connor bad.")

const startQuest3 = std.Quests.create("tester-mod", "startQuest3")
    startQuest3.QuestLevel.set(1)
    startQuest3.Text.Title.enGB.set("An Ancient Foe")
    startQuest3.Text.Objective.enGB.set("fill me")
    startQuest3.Text.Description.enGB.set("You scour the town and observe that the ground seems to be wilting in specific areas around large, rooted trees. You notice a pond in the distance with an eery glow. You decide that the best course of action would be to take a vial of the mysterious liquid back to the apothecary of the town for investigation.")
    startQuest3.Questgiver.addStarter(1)
    startQuest3.Questgiver.addEnder(1)
    startQuest3.Objectives.Item.add(emptyVials.ID,1)
    startQuest3.Rewards.Money.set(101500)
    startQuest3.Rewards.Item.add(poorNotes.ID,1)//poor notes
    startQuest3.Rewards.Item.add(mysteriousVials.ID,1)//mysterious vials
