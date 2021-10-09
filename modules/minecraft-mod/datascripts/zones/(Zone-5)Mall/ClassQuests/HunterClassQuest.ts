import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { MODNAME } from "../../../modname"
import { OrbofPower, PowerToken, RavenLordMount } from "../../item-manifest"


export let HunterQuestGiver01 = std.CreatureTemplates.create(MODNAME,'hunter01-creature',30368)
HunterQuestGiver01.Name.enGB.set('Hunter Disciple')
HunterQuestGiver01.Models.clearAll()
HunterQuestGiver01.Models.addIds(21835)
HunterQuestGiver01.Level.set(10,10)
HunterQuestGiver01.FactionTemplate.set(35)
HunterQuestGiver01.DamageSchool.setNormal()
HunterQuestGiver01.Stats.ArmorMod.set(1)
HunterQuestGiver01.Stats.DamageMod.set(1)
HunterQuestGiver01.Stats.ExperienceMod.set(1)
HunterQuestGiver01.Stats.HealthMod.set(1)
HunterQuestGiver01.Stats.ManaMod.set(1)
HunterQuestGiver01.NPCFlags.QuestGiver.mark()

export let HunterQuest01 = std.Quests.create(MODNAME,'hunterquest01-quest')

HunterQuest01.Flags.set(1)
HunterQuest01.MinLevel.set(1)
HunterQuest01.QuestLevel.set(20)
HunterQuest01.Questgiver.addStarter(questGiver03.ID)
HunterQuest01.Questgiver.addEnder(HunterQuestGiver01.ID)

HunterQuest01.Rewards.Money.set(441)

HunterQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
HunterQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
HunterQuest01.Text.Description.enGB.set('Speak with your class trainer.')
HunterQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
HunterQuest01.Text.Title.enGB.set('Technique and Form')





export let HunterQuest02 = std.Quests.create(MODNAME,'hunterquest02-quest')

HunterQuest02.Flags.set(8)
SQL.quest_template_addon.add(HunterQuest02.ID).SpecialFlags.set(1)
HunterQuest02.MinLevel.set(1)
HunterQuest02.QuestLevel.set(20)
HunterQuest02.Questgiver.addStarter(HunterQuestGiver01.ID)
HunterQuest02.Questgiver.addEnder(HunterQuestGiver01.ID)

HunterQuest02.Rewards.Money.set(200000)
HunterQuest02.Objectives.Item.add(OrbofPower.ID,10)
HunterQuest02.Rewards.Item.add(PowerToken.ID,1)
HunterQuest02.Rewards.Item.add(RavenLordMount.ID,1)

HunterQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
HunterQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
HunterQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
HunterQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
HunterQuest02.Text.Title.enGB.set('True Power')