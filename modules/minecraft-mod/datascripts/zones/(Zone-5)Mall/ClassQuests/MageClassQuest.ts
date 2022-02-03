import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata";
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures";
import { spawnNPC } from "../../../functions/spawning-functions";
import { MODNAME } from "../../../modname";
import { OrbofPower, PowerToken, RavenLordMount } from "../../item-manifest";

export let MageQuestGiver01 = std.CreatureTemplates.create(
    MODNAME,
    "mage01-creature",
    30368
);
MageQuestGiver01.Name.enGB.set("Mage Disciple");
MageQuestGiver01.Models.clearAll();
MageQuestGiver01.Models.addIds(21835);
MageQuestGiver01.Level.set(10, 10);
MageQuestGiver01.FactionTemplate.set(35);
MageQuestGiver01.DamageSchool.Normal.set();
MageQuestGiver01.Stats.ArmorMod.set(1);
MageQuestGiver01.Stats.DamageMod.set(1);
MageQuestGiver01.Stats.ExperienceMod.set(1);
MageQuestGiver01.Stats.HealthMod.set(1);
MageQuestGiver01.Stats.ManaMod.set(1);
MageQuestGiver01.NPCFlags.QUEST_GIVER.set(true);
spawnNPC(MageQuestGiver01.ID, 0, 0, {
    map: 725,
    x: -8296.487305,
    y: 28.826851,
    z: 12.764,
    o: 5.423173,
});
export let MageQuest01 = std.Quests.create(MODNAME, "magequest01-quest");

MageQuest01.Flags.set(1);
MageQuest01.MinLevel.set(1);
MageQuest01.QuestLevel.set(20);
MageQuest01.Questgiver.addCreatureStarter(questGiver03.ID);
MageQuest01.Questgiver.addCreatureEnder(MageQuestGiver01.ID, false);

MageQuest01.Rewards.Money.set(441);

MageQuest01.Text.Objective.enGB.set(
    "You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey."
);
MageQuest01.Text.Incomplete.enGB.set(
    "Speak with your class trainer, $c. I am sure they are around here somewhere!"
);
MageQuest01.Text.Description.enGB.set("Speak with your class trainer.");
MageQuest01.Text.Reward.enGB.set(
    "Ah yes, you must be $c. We have been waiting for you. Welcome."
);
MageQuest01.Text.Title.enGB.set("Technique and Form");

export let MageQuest02 = std.Quests.create(MODNAME, "magequest02-quest");

MageQuest02.Flags.set(8);
SQL.quest_template_addon.add(MageQuest02.ID).SpecialFlags.set(1);
MageQuest02.MinLevel.set(1);
MageQuest02.QuestLevel.set(20);
MageQuest02.Questgiver.addCreatureStarter(MageQuestGiver01.ID);
MageQuest02.Questgiver.addCreatureEnder(MageQuestGiver01.ID, false);

MageQuest02.Rewards.Money.set(200000);
MageQuest02.Objectives.Item.add(OrbofPower.ID, 10);
MageQuest02.Rewards.Item.add(PowerToken.ID, 1);
MageQuest02.Rewards.Item.add(RavenLordMount.ID, 1);

MageQuest02.Text.Objective.enGB.set(
    "Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you."
);
MageQuest02.Text.Incomplete.enGB.set(
    "Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection."
);
MageQuest02.Text.Description.enGB.set(
    "Collect orbs of power from around the game in various scenarios."
);
MageQuest02.Text.Reward.enGB.set(
    "You've done it, you've managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!"
);
MageQuest02.Text.Title.enGB.set("True Power");
