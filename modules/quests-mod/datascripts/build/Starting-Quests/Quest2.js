"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blankPapers = exports.emptyVials = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const quests_mod_data_1 = require("../quests-mod-data");
const Quest1_1 = require("./Quest1");
exports.emptyVials = tswow_stdlib_1.std.Items.create(quests_mod_data_1.MODNAME, "startQuest2-emptyVials", 3371);
exports.emptyVials.Name.enGB.set("Empty Vials");
exports.emptyVials.Description.enGB.set("kinda dirty...");
exports.blankPapers = tswow_stdlib_1.std.Items.create(quests_mod_data_1.MODNAME, "startquest2-blankpapers", 20810);
exports.blankPapers.Name.enGB.set("Blank Papers");
exports.blankPapers.Description.enGB.set("They're blank.");
const startQuest2 = tswow_stdlib_1.std.Quests.create(quests_mod_data_1.MODNAME, "startQuest2");
startQuest2.QuestLevel.set(1);
startQuest2.Text.Title.enGB.set("Call for Action");
startQuest2.Text.Objective.enGB.set("fill me");
startQuest2.Text.Description.enGB.set("The letter you obtained from Gregor Victus summons you to the Greenway Lodge where you are greeted by famine, disease, and strife amidst a suffering population. You enter the main building and speak to Archbishop Fairway about a mysterious plague that suddenly befell the people of Greenway.");
startQuest2.Questgiver.addStarter(1);
startQuest2.Questgiver.addEnder(1);
startQuest2.Objectives.Item.add(Quest1_1.draftPaper.ID, 1); //draft paper
startQuest2.Rewards.Money.set(21000);
startQuest2.Rewards.Item.add(exports.blankPapers.ID, 1); //blank papers
startQuest2.Rewards.Item.add(exports.emptyVials.ID, 5); //empty vials
//# sourceMappingURL=Quest2.js.map