
import { std } from "tswow-stdlib"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { MODNAME } from "../../../modname"
import { SQL } from "wotlkdata"
import { OrbofPower, PowerToken } from "./ARarePowerOrb"
import { RavenLordMount } from "../../(Zone-1)Bramblewood/zone-1-items"
//Class Trainer Quest - Priest

export let PriestQuestGiver01 = std.CreatureTemplates.create(MODNAME,'priest01-creature',30368)
PriestQuestGiver01.Name.enGB.set('Priest Disciple')
PriestQuestGiver01.Models.clearAll()
PriestQuestGiver01.Models.addIds(21835)
PriestQuestGiver01.Level.set(10,10)
PriestQuestGiver01.FactionTemplate.set(35)
PriestQuestGiver01.DamageSchool.setNormal()
PriestQuestGiver01.Stats.ArmorMod.set(1)
PriestQuestGiver01.Stats.DamageMod.set(1)
PriestQuestGiver01.Stats.ExperienceMod.set(1)
PriestQuestGiver01.Stats.HealthMod.set(1)
PriestQuestGiver01.Stats.ManaMod.set(1)
PriestQuestGiver01.NPCFlags.QuestGiver.mark()

export let PriestQuest01 = std.Quests.create(MODNAME,'priestquest01-quest')

PriestQuest01.Flags.set(1)
PriestQuest01.MinLevel.set(1)
PriestQuest01.QuestLevel.set(20)
PriestQuest01.Questgiver.addStarter(questGiver03.ID)
PriestQuest01.Questgiver.addEnder(PriestQuestGiver01.ID)

PriestQuest01.Rewards.Money.set(441)

PriestQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
PriestQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
PriestQuest01.Text.Description.enGB.set('Speak with your class trainer.')
PriestQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
PriestQuest01.Text.Title.enGB.set('Technique and Form')





export let PriestQuest02 = std.Quests.create(MODNAME,'priestquest02-quest')

PriestQuest02.Flags.set(8)
SQL.quest_template_addon.add(PriestQuest02.ID).SpecialFlags.set(1)
PriestQuest02.MinLevel.set(1)
PriestQuest02.QuestLevel.set(20)
PriestQuest02.Questgiver.addStarter(PriestQuestGiver01.ID)
PriestQuest02.Questgiver.addEnder(PriestQuestGiver01.ID)

PriestQuest02.Rewards.Money.set(200000)
PriestQuest02.Objectives.Item.add(OrbofPower.ID,10)
PriestQuest02.Rewards.Item.add(PowerToken.ID,1)
PriestQuest02.Rewards.Item.add(RavenLordMount.ID,1)

PriestQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
PriestQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
PriestQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
PriestQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
PriestQuest02.Text.Title.enGB.set('True Power')