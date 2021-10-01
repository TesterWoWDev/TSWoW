
import { std } from "tswow-stdlib"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { MODNAME } from "../../../modname"
import { SQL } from "wotlkdata"
import { OrbofPower, PowerToken } from "./ARarePowerOrb"
//Class Trainer Quest - Paladin

export let PaladinQuestGiver01 = std.CreatureTemplates.create(MODNAME,'palacin01-creature',30368)
PaladinQuestGiver01.Name.enGB.set('Paladin Disciple')
PaladinQuestGiver01.Models.clearAll()
PaladinQuestGiver01.Models.addIds(21835)
PaladinQuestGiver01.Level.set(10,10)
PaladinQuestGiver01.FactionTemplate.set(35)
PaladinQuestGiver01.DamageSchool.setNormal()
PaladinQuestGiver01.Stats.ArmorMod.set(1)
PaladinQuestGiver01.Stats.DamageMod.set(1)
PaladinQuestGiver01.Stats.ExperienceMod.set(1)
PaladinQuestGiver01.Stats.HealthMod.set(1)
PaladinQuestGiver01.Stats.ManaMod.set(1)
PaladinQuestGiver01.NPCFlags.QuestGiver.mark()

export let PaladinQuest01 = std.Quests.create(MODNAME,'paladinquest01-quest')

PaladinQuest01.Flags.set(1)
PaladinQuest01.MinLevel.set(1)
PaladinQuest01.QuestLevel.set(1)
PaladinQuest01.Questgiver.addStarter(questGiver03.ID)
PaladinQuest01.Questgiver.addEnder(PaladinQuestGiver01.ID)

PaladinQuest01.Rewards.Money.set(441)

PaladinQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
PaladinQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
PaladinQuest01.Text.Description.enGB.set('Speak with your class trainer.')
PaladinQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
PaladinQuest01.Text.Title.enGB.set('Technique and Form')





export let PaladinQuest02 = std.Quests.create(MODNAME,'paladinquest02-quest')

PaladinQuest02.Flags.set(8)
SQL.quest_template_addon.add(PaladinQuest02.ID).SpecialFlags.set(1)
PaladinQuest02.MinLevel.set(1)
PaladinQuest02.QuestLevel.set(1)
PaladinQuest02.Questgiver.addStarter(PaladinQuestGiver01.ID)
PaladinQuest02.Questgiver.addEnder(PaladinQuestGiver01.ID)

PaladinQuest02.Rewards.Money.set(200000)
PaladinQuest02.Objectives.Item.add(OrbofPower.ID,10)
PaladinQuest02.Rewards.Item.add(PowerToken.ID,1)

PaladinQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
PaladinQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
PaladinQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
PaladinQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
PaladinQuest02.Text.Title.enGB.set('True Power')