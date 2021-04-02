"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysteriousVials = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const quests_mod_data_1 = require("../quests-mod-data");
const Quest2_1 = require("./Quest2");
exports.mysteriousVials = tswow_stdlib_1.std.Items.create(quests_mod_data_1.MODNAME, "startQuest3-mysteriousliquidvial", 3371);
exports.mysteriousVials.Name.enGB.set("Mysterious Liquid Vials");
exports.mysteriousVials.Description.enGB.set("kinda dirty...");
const poorNotes = tswow_stdlib_1.std.Items.create(quests_mod_data_1.MODNAME, "startquest3-poornotes", 20810);
poorNotes.Name.enGB.set("Poorly Written Notes");
poorNotes.Description.enGB.set("They're bad. Like Connor bad.");
const startQuest3 = tswow_stdlib_1.std.Quests.create(quests_mod_data_1.MODNAME, "startQuest3");
startQuest3.QuestLevel.set(1);
startQuest3.Text.Title.enGB.set("An Ancient Foe");
startQuest3.Text.Objective.enGB.set("fill me");
startQuest3.Text.Description.enGB.set("You scour the town and observe that the ground seems to be wilting in specific areas around large, rooted trees. You notice a pond in the distance with an eery glow. You decide that the best course of action would be to take a vial of the mysterious liquid back to the apothecary of the town for investigation.");
startQuest3.Questgiver.addStarter(1);
startQuest3.Questgiver.addEnder(1);
startQuest3.Objectives.Item.add(Quest2_1.emptyVials.ID, 1);
startQuest3.Rewards.Money.set(101500);
startQuest3.Rewards.Item.add(poorNotes.ID, 1); //poor notes
startQuest3.Rewards.Item.add(exports.mysteriousVials.ID, 1); //mysterious vials
//# sourceMappingURL=Quest3.js.map