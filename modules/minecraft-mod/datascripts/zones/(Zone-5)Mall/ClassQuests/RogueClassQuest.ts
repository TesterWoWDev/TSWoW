import { std } from "tswow-stdlib"
import { SQL } from "wotlkdata"
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures"
import { spawnNPC } from "../../../functions/spawning-functions"
import { MODNAME } from "../../../modname"
import { OrbofPower, PowerToken, RavenLordMount } from "../../item-manifest"

export let RogueQuestGiver01 = std.CreatureTemplates.create(MODNAME,'rogue01-creature',30368)
RogueQuestGiver01.Name.enGB.set('Rogue Disciple')
RogueQuestGiver01.Models.clearAll()
RogueQuestGiver01.Models.addIds(21835)
RogueQuestGiver01.Level.set(10,10)
RogueQuestGiver01.FactionTemplate.set(35)
RogueQuestGiver01.DamageSchool.Normal.set()
RogueQuestGiver01.Stats.ArmorMod.set(1)
RogueQuestGiver01.Stats.DamageMod.set(1)
RogueQuestGiver01.Stats.ExperienceMod.set(1)
RogueQuestGiver01.Stats.HealthMod.set(1)
RogueQuestGiver01.Stats.ManaMod.set(1)
RogueQuestGiver01.NPCFlags.QUEST_GIVER.set(true)
spawnNPC(RogueQuestGiver01.ID,0,0,{map:725,x:-8283.104492,y:-264.669922,z:-5.097000,o:1.967425},)
export let RogueQuest01 = std.Quests.create(MODNAME,'roguequest01-quest')

RogueQuest01.Flags.set(1)
RogueQuest01.MinLevel.set(1)
RogueQuest01.QuestLevel.set(20)
RogueQuest01.Questgiver.addCreatureStarter(questGiver03.ID)
RogueQuest01.Questgiver.addCreatureEnder(RogueQuestGiver01.ID,false)

RogueQuest01.Rewards.Money.set(441)

RogueQuest01.Text.Objective.enGB.set('You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey.')
RogueQuest01.Text.Incomplete.enGB.set('Speak with your class trainer, $c. I am sure they are around here somewhere!')
RogueQuest01.Text.Description.enGB.set('Speak with your class trainer.')
RogueQuest01.Text.Reward.enGB.set('Ah yes, you must be $c. We have been waiting for you. Welcome.')
RogueQuest01.Text.Title.enGB.set('Technique and Form')


export let RogueQuest02 = std.Quests.create(MODNAME,'roguequest02-quest')

RogueQuest02.Flags.set(8)
SQL.quest_template_addon.add(RogueQuest02.ID).SpecialFlags.set(1)
RogueQuest02.MinLevel.set(1)
RogueQuest02.QuestLevel.set(20)
RogueQuest02.Questgiver.addCreatureStarter(RogueQuestGiver01.ID)
RogueQuest02.Questgiver.addCreatureEnder(RogueQuestGiver01.ID,false)

RogueQuest02.Rewards.Money.set(200000)
RogueQuest02.Objectives.Item.add(OrbofPower.ID,10)
RogueQuest02.Rewards.Item.add(PowerToken.ID,1)
RogueQuest02.Rewards.Item.add(RavenLordMount.ID,1)

RogueQuest02.Text.Objective.enGB.set('Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you.')
RogueQuest02.Text.Incomplete.enGB.set('Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection.')
RogueQuest02.Text.Description.enGB.set('Collect orbs of power from around the game in various scenarios.')
RogueQuest02.Text.Reward.enGB.set('You\'ve done it, you\'ve managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!')
RogueQuest02.Text.Title.enGB.set('True Power')