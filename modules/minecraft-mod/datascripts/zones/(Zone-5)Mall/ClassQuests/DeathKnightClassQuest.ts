
//Class Trainer Quest - Deathknight

import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { MODNAME } from "../../../modname"
import { OrbofPower, PowerToken, RavenLordMount } from "../../item-manifest"

export let DeathknightQuestGiver01 = std.CreatureTemplates.create(MODNAME,'dk01-creature',30368)
DeathknightQuestGiver01.Name.enGB.set('Deathknight Disciple')
DeathknightQuestGiver01.Models.clearAll()
DeathknightQuestGiver01.Models.addIds(21835)
DeathknightQuestGiver01.Level.set(10,10)
DeathknightQuestGiver01.FactionTemplate.set(35)
DeathknightQuestGiver01.DamageSchool.setNormal()
DeathknightQuestGiver01.Stats.ArmorMod.set(1)
DeathknightQuestGiver01.Stats.DamageMod.set(1)
DeathknightQuestGiver01.Stats.ExperienceMod.set(1)
DeathknightQuestGiver01.Stats.HealthMod.set(1)
DeathknightQuestGiver01.Stats.ManaMod.set(1)
DeathknightQuestGiver01.NPCFlags.QuestGiver.mark()

export let DeathknightQuest01 = std.Quests.create(MODNAME,'dkquest01-quest')

DeathknightQuest01.Flags.set(1)
DeathknightQuest01.MinLevel.set(1)
DeathknightQuest01.QuestLevel.set(20)
DeathknightQuest01.Questgiver.addStarter(questGiver03.ID)
DeathknightQuest01.Questgiver.addEnder(DeathknightQuestGiver01.ID)

DeathknightQuest01.Rewards.Money.set(441)

DeathknightQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
DeathknightQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
DeathknightQuest01.Text.Description.enGB.set('Speak with your class trainer.')
DeathknightQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
DeathknightQuest01.Text.Title.enGB.set('Technique and Form')







export let DeathknightQuest02 = std.Quests.create(MODNAME,'dkquest02-quest')

DeathknightQuest02.Flags.set(8)
SQL.quest_template_addon.add(DeathknightQuest02.ID).SpecialFlags.set(1)
DeathknightQuest02.MinLevel.set(1)
DeathknightQuest02.QuestLevel.set(20)
DeathknightQuest02.Questgiver.addStarter(DeathknightQuestGiver01.ID)
DeathknightQuest02.Questgiver.addEnder(DeathknightQuestGiver01.ID)

DeathknightQuest02.Rewards.Money.set(200000)
DeathknightQuest02.Objectives.Item.add(OrbofPower.ID,10)
DeathknightQuest02.Rewards.Item.add(PowerToken.ID,1)
DeathknightQuest02.Rewards.Item.add(RavenLordMount.ID,1)

DeathknightQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
DeathknightQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
DeathknightQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
DeathknightQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
DeathknightQuest02.Text.Title.enGB.set('True Power')