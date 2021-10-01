
import { std } from "tswow-stdlib"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { MODNAME } from "../../../modname"
import { SQL } from "wotlkdata"
import { OrbofPower, PowerToken } from "./ARarePowerOrb"
//Class Trainer Quest - Shaman

export let ShamanQuestGiver01 = std.CreatureTemplates.create(MODNAME,'shaman01-creature',30368)
ShamanQuestGiver01.Name.enGB.set('Shaman Disciple')
ShamanQuestGiver01.Models.clearAll()
ShamanQuestGiver01.Models.addIds(21835)
ShamanQuestGiver01.Level.set(10,10)
ShamanQuestGiver01.FactionTemplate.set(35)
ShamanQuestGiver01.DamageSchool.setNormal()
ShamanQuestGiver01.Stats.ArmorMod.set(1)
ShamanQuestGiver01.Stats.DamageMod.set(1)
ShamanQuestGiver01.Stats.ExperienceMod.set(1)
ShamanQuestGiver01.Stats.HealthMod.set(1)
ShamanQuestGiver01.Stats.ManaMod.set(1)
ShamanQuestGiver01.NPCFlags.QuestGiver.mark()

export let ShamanQuest01 = std.Quests.create(MODNAME,'shamanquest01-quest')

ShamanQuest01.Flags.set(1)
ShamanQuest01.MinLevel.set(1)
ShamanQuest01.QuestLevel.set(1)
ShamanQuest01.AllowableClasses.set(64)
ShamanQuest01.Questgiver.addStarter(questGiver03.ID)
ShamanQuest01.Questgiver.addEnder(ShamanQuestGiver01.ID)

ShamanQuest01.Rewards.Money.set(441)

ShamanQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
ShamanQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
ShamanQuest01.Text.Description.enGB.set('Speak with your class trainer.')
ShamanQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
ShamanQuest01.Text.Title.enGB.set('Technique and Form')





export let ShamanQuest02 = std.Quests.create(MODNAME,'shamanquest02-quest')

ShamanQuest02.Flags.set(8)
SQL.quest_template_addon.add(ShamanQuest02.ID).SpecialFlags.set(1)
ShamanQuest02.MinLevel.set(1)
ShamanQuest02.QuestLevel.set(1)
ShamanQuest02.AllowableClasses.set(64)
ShamanQuest02.Questgiver.addStarter(ShamanQuestGiver01.ID)
ShamanQuest02.Questgiver.addEnder(ShamanQuestGiver01.ID)

ShamanQuest02.Rewards.Money.set(200000)
ShamanQuest02.Objectives.Item.add(OrbofPower.ID,10)
ShamanQuest02.Rewards.Item.add(PowerToken.ID,1)

ShamanQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
ShamanQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
ShamanQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
ShamanQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
ShamanQuest02.Text.Title.enGB.set('True Power')