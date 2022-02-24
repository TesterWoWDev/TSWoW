import { std } from "wow/wotlk";

import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures";
import { spawnNPC } from "../../../functions/spawning-functions";
import { MODNAME } from "../../../modname";
import { OrbofPower, PowerToken, RavenLordMount } from "../../item-manifest";

export let WarlockQuestGiver01 = std.CreatureTemplates.create(
    MODNAME,
    "warlock01-creature",
    30368
);
WarlockQuestGiver01.Name.enGB.set("Warlock Disciple");
WarlockQuestGiver01.Models.clearAll();
WarlockQuestGiver01.Models.addIds(21835);
WarlockQuestGiver01.Level.set(10, 10);
WarlockQuestGiver01.FactionTemplate.set(35);
WarlockQuestGiver01.DamageSchool.Normal.set();
WarlockQuestGiver01.Stats.ArmorMod.set(1);
WarlockQuestGiver01.Stats.DamageMod.set(1);
WarlockQuestGiver01.Stats.ExperienceMod.set(1);
WarlockQuestGiver01.Stats.HealthMod.set(1);
WarlockQuestGiver01.Stats.ManaMod.set(1);
WarlockQuestGiver01.NPCFlags.QUEST_GIVER.set(true);
spawnNPC(WarlockQuestGiver01.ID, 0, 0, {
    map: 725,
    x: -8499.652344,
    y: -202.778442,
    z: -6.02738,
    o: 2.038107,
});
export let WarlockQuest01 = std.Quests.create(MODNAME, "warlockquest01-quest");

WarlockQuest01.Flags.set(1);
WarlockQuest01.MinLevel.set(1);
WarlockQuest01.QuestLevel.set(20);
WarlockQuest01.Questgiver.addCreatureStarter(questGiver03.ID);
WarlockQuest01.Questgiver.addCreatureEnder(WarlockQuestGiver01.ID, false);

WarlockQuest01.Rewards.Money.set(441);

WarlockQuest01.Text.Objective.enGB.set(
    "You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey."
);
WarlockQuest01.Text.Incomplete.enGB.set(
    "Speak with your class trainer, $c. I am sure they are around here somewhere!"
);
WarlockQuest01.Text.Description.enGB.set("Speak with your class trainer.");
WarlockQuest01.Text.Reward.enGB.set(
    "Ah yes, you must be $c. We have been waiting for you. Welcome."
);
WarlockQuest01.Text.Title.enGB.set("Technique and Form");

export let WarlockQuest02 = std.Quests.create(MODNAME, "warlockquest02-quest");

WarlockQuest02.Flags.set(8);
std.SQL.quest_template_addon.add(WarlockQuest02.ID).SpecialFlags.set(1);
WarlockQuest02.MinLevel.set(1);
WarlockQuest02.QuestLevel.set(20);
WarlockQuest02.Questgiver.addCreatureStarter(WarlockQuestGiver01.ID);
WarlockQuest02.Questgiver.addCreatureEnder(WarlockQuestGiver01.ID, false);

WarlockQuest02.Rewards.Money.set(200000);
WarlockQuest02.Objectives.Item.add(OrbofPower.ID, 10);
WarlockQuest02.Rewards.Item.add(PowerToken.ID, 1);
WarlockQuest02.Rewards.Item.add(RavenLordMount.ID, 1);

WarlockQuest02.Text.Objective.enGB.set(
    "Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you."
);
WarlockQuest02.Text.Incomplete.enGB.set(
    "Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection."
);
WarlockQuest02.Text.Description.enGB.set(
    "Collect orbs of power from around the game in various scenarios."
);
WarlockQuest02.Text.Reward.enGB.set(
    "You've done it, you've managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!"
);
WarlockQuest02.Text.Title.enGB.set("True Power");
