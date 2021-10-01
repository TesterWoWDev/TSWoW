
import { std } from "tswow-stdlib"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { MODNAME } from "../../../modname"
import { SQL } from "wotlkdata"
import { OrbofPower, PowerToken } from "./ARarePowerOrb"
//Class Trainer Quest - Mage

export let MageQuestGiver01 = std.CreatureTemplates.create(MODNAME,'mage01-creature',30368)
MageQuestGiver01.Name.enGB.set('Mage Disciple')
MageQuestGiver01.Models.clearAll()
MageQuestGiver01.Models.addIds(21835)
MageQuestGiver01.Level.set(10,10)
MageQuestGiver01.FactionTemplate.set(35)
MageQuestGiver01.DamageSchool.setNormal()
MageQuestGiver01.Stats.ArmorMod.set(1)
MageQuestGiver01.Stats.DamageMod.set(1)
MageQuestGiver01.Stats.ExperienceMod.set(1)
MageQuestGiver01.Stats.HealthMod.set(1)
MageQuestGiver01.Stats.ManaMod.set(1)
MageQuestGiver01.NPCFlags.QuestGiver.mark()

export let MageQuest01 = std.Quests.create(MODNAME,'magequest01-quest')

MageQuest01.Flags.set(1)
MageQuest01.MinLevel.set(1)
MageQuest01.QuestLevel.set(1)
MageQuest01.AllowableClasses.set(128)
MageQuest01.Questgiver.addStarter(questGiver03.ID)
MageQuest01.Questgiver.addEnder(MageQuestGiver01.ID)

MageQuest01.Rewards.Money.set(441)

MageQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
MageQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
MageQuest01.Text.Description.enGB.set('Speak with your class trainer.')
MageQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
MageQuest01.Text.Title.enGB.set('Technique and Form')





export let MageQuest02 = std.Quests.create(MODNAME,'magequest02-quest')

MageQuest02.Flags.set(8)
SQL.quest_template_addon.add(MageQuest02.ID).SpecialFlags.set(1)
MageQuest02.MinLevel.set(1)
MageQuest02.QuestLevel.set(1)
MageQuest02.AllowableClasses.set(128)
MageQuest02.Questgiver.addStarter(MageQuestGiver01.ID)
MageQuest02.Questgiver.addEnder(MageQuestGiver01.ID)

MageQuest02.Rewards.Money.set(200000)
MageQuest02.Objectives.Item.add(OrbofPower.ID,10)
MageQuest02.Rewards.Item.add(PowerToken.ID,1)

MageQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
MageQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
MageQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
MageQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
MageQuest02.Text.Title.enGB.set('True Power')