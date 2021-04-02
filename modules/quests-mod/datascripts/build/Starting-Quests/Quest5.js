"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedPapers = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const quests_mod_data_1 = require("../quests-mod-data");
const Quest2_1 = require("./Quest2");
const Quest3_1 = require("./Quest3");
exports.signedPapers = tswow_stdlib_1.std.Items.create(quests_mod_data_1.MODNAME, "startquest5-signeddoc", 20810);
exports.signedPapers.Name.enGB.set("Signed Documents");
exports.signedPapers.Description.enGB.set("They're blank.");
const startQuest5 = tswow_stdlib_1.std.Quests.create(quests_mod_data_1.MODNAME, "startQuest5");
startQuest5.QuestLevel.set(1);
startQuest5.Text.Title.enGB.set("Fortuitous Allies");
startQuest5.Text.Objective.enGB.set("fill me");
startQuest5.Text.Description.enGB.set("Archmagus Devalden has informed you of the power that resides in the vial that you now contain. He has signed documents detailing the sample and requested that you return to the apothecary with the information he has provided about the plague. He has assured you that the apothecary will provide you with supplies for your upcoming venture.");
startQuest5.Questgiver.addStarter(1);
startQuest5.Questgiver.addEnder(1);
startQuest5.Objectives.Item.add(Quest2_1.emptyVials.ID, 1);
startQuest5.Rewards.Money.set(25000);
startQuest5.Rewards.Item.add(exports.signedPapers.ID, 1); //blank papers
startQuest5.Rewards.Item.add(Quest3_1.mysteriousVials.ID, 1); //liquid vials
//# sourceMappingURL=Quest5.js.map