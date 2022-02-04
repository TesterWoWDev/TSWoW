import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata";
import { questGiver03 } from "../../(Zone-0)Walk-of-Heroes/starting-zone-creatures";
import { spawnNPC } from "../../../functions/spawning-functions";
import { MODNAME } from "../../../modname";
import { OrbofPower, PowerToken, RavenLordMount } from "../../item-manifest";

export let WarriorQuestGiver01 = std.CreatureTemplates.create(
    MODNAME,
    "warrior01-creature",
    30368
);
WarriorQuestGiver01.Name.enGB.set("Warrior Disciple");
WarriorQuestGiver01.Models.clearAll();
WarriorQuestGiver01.Models.addIds(21835);
WarriorQuestGiver01.Level.set(10, 10);
WarriorQuestGiver01.FactionTemplate.set(35);
WarriorQuestGiver01.DamageSchool.Normal.set();
WarriorQuestGiver01.Stats.ArmorMod.set(1);
WarriorQuestGiver01.Stats.DamageMod.set(1);
WarriorQuestGiver01.Stats.ExperienceMod.set(1);
WarriorQuestGiver01.Stats.HealthMod.set(1);
WarriorQuestGiver01.Stats.ManaMod.set(1);
WarriorQuestGiver01.NPCFlags.QUEST_GIVER.set(true);
spawnNPC(WarriorQuestGiver01.ID, 0, 0, {
    map: 725,
    x: -8435.265625,
    y: -283.85318,
    z: 13.002136,
    o: 5.79231,
});
export let WarriorQuest01 = std.Quests.create(MODNAME, "warriorquest01-quest");

WarriorQuest01.Flags.set(1);
WarriorQuest01.MinLevel.set(1);
WarriorQuest01.QuestLevel.set(20);
WarriorQuest01.Questgiver.addCreatureStarter(questGiver03.ID);
WarriorQuest01.Questgiver.addCreatureEnder(WarriorQuestGiver01.ID, false);

WarriorQuest01.Rewards.Money.set(441);

WarriorQuest01.Text.Objective.enGB.set(
    "You have proven your worth, but now it is time for you to get acquainted with the denizens of this town. Seek out your class trainer, $c. They shall guide you further on this journey."
);
WarriorQuest01.Text.Incomplete.enGB.set(
    "Speak with your class trainer, $c. I am sure they are around here somewhere!"
);
WarriorQuest01.Text.Description.enGB.set("Speak with your class trainer.");
WarriorQuest01.Text.Reward.enGB.set(
    "Ah yes, you must be $c. We have been waiting for you. Welcome."
);
WarriorQuest01.Text.Title.enGB.set("Technique and Form");

export let WarriorQuest02 = std.Quests.create(MODNAME, "warriorquest02-quest");

WarriorQuest02.Flags.set(8);
SQL.quest_template_addon.add(WarriorQuest02.ID).SpecialFlags.set(1);
WarriorQuest02.MinLevel.set(1);
WarriorQuest02.QuestLevel.set(20);
WarriorQuest02.Questgiver.addCreatureStarter(WarriorQuestGiver01.ID);
WarriorQuest02.Questgiver.addCreatureEnder(WarriorQuestGiver01.ID, false);

WarriorQuest02.Rewards.Money.set(200000);
WarriorQuest02.Objectives.Item.add(OrbofPower.ID, 10);
WarriorQuest02.Rewards.Item.add(PowerToken.ID, 1);
WarriorQuest02.Rewards.Item.add(RavenLordMount.ID, 1);

WarriorQuest02.Text.Objective.enGB.set(
    "Travel around the game, complete quests, collect resources, slay enemies, and obtain orbs of power. When you have obtained 10 orbs of power, return to me and we can create an incredibly powerful item for you."
);
WarriorQuest02.Text.Incomplete.enGB.set(
    "Have you managed to find any power orbs yet? You can obtain power orbs from quests, killing monsters, completing dungeons, or even off of resource collection."
);
WarriorQuest02.Text.Description.enGB.set(
    "Collect orbs of power from around the game in various scenarios."
);
WarriorQuest02.Text.Reward.enGB.set(
    "You've done it, you've managed to collect enough orbs of power for us to create supercharged weaponry for you. I am beyond excited!"
);
WarriorQuest02.Text.Title.enGB.set("True Power");
