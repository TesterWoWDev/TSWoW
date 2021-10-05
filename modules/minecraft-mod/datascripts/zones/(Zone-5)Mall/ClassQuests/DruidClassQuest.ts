
import { std } from "tswow-stdlib"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { MODNAME } from "../../../modname"
import { OrbofPower, PowerToken } from "./ARarePowerOrb"
import { SQL } from "wotlkdata"
import { RavenLordMount } from "../../(Zone-1)Bramblewood/zone-1-items"
//Class Trainer Quest - Druid

export let DruidQuestGiver01 = std.CreatureTemplates.create(MODNAME,'druid01-creature',30368)
DruidQuestGiver01.Name.enGB.set('Druid Disciple')
DruidQuestGiver01.Models.clearAll()
DruidQuestGiver01.Models.addIds(21835)
DruidQuestGiver01.Level.set(10,10)
DruidQuestGiver01.FactionTemplate.set(35)
DruidQuestGiver01.DamageSchool.setNormal()
DruidQuestGiver01.Stats.ArmorMod.set(1)
DruidQuestGiver01.Stats.DamageMod.set(1)
DruidQuestGiver01.Stats.ExperienceMod.set(1)
DruidQuestGiver01.Stats.HealthMod.set(1)
DruidQuestGiver01.Stats.ManaMod.set(1)
DruidQuestGiver01.NPCFlags.QuestGiver.mark()

export let DruidQuest01 = std.Quests.create(MODNAME,'druidquest01-quest')

DruidQuest01.Flags.set(1)
DruidQuest01.MinLevel.set(1)
DruidQuest01.QuestLevel.set(20)
DruidQuest01.Questgiver.addStarter(questGiver03.ID)
DruidQuest01.Questgiver.addEnder(DruidQuestGiver01.ID)

DruidQuest01.Rewards.Money.set(441)

DruidQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
DruidQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
DruidQuest01.Text.Description.enGB.set('Speak with your class trainer.')
DruidQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
DruidQuest01.Text.Title.enGB.set('Technique and Form')






export let DruidQuest02 = std.Quests.create(MODNAME,'druidquest02-quest')

DruidQuest02.Flags.set(8)
SQL.quest_template_addon.add(DruidQuest02.ID).SpecialFlags.set(1)
DruidQuest02.MinLevel.set(1)
DruidQuest02.QuestLevel.set(20)
DruidQuest02.Questgiver.addStarter(DruidQuestGiver01.ID)
DruidQuest02.Questgiver.addEnder(DruidQuestGiver01.ID)

DruidQuest02.Rewards.Money.set(200000)
DruidQuest02.Objectives.Item.add(OrbofPower.ID,10)
DruidQuest02.Rewards.Item.add(PowerToken.ID,1)
DruidQuest02.Rewards.Item.add(RavenLordMount.ID,1)

DruidQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
DruidQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
DruidQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
DruidQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
DruidQuest02.Text.Title.enGB.set('True Power')