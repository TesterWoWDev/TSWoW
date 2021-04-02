"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draftPaper = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const quests_mod_data_1 = require("../quests-mod-data");
exports.draftPaper = tswow_stdlib_1.std.Items.create(quests_mod_data_1.MODNAME, "startQuest1-draftpaper", 20810);
exports.draftPaper.Name.enGB.set("Draft Papers");
exports.draftPaper.Description.enGB.set("tattered, but still legible");
const startQuest1 = tswow_stdlib_1.std.Quests.create(quests_mod_data_1.MODNAME, "startQuest1");
startQuest1.QuestLevel.set(1);
startQuest1.Text.Title.enGB.set("An Urgent Message");
startQuest1.Text.Objective.enGB.set("Take the letter to Archbishop Fairway");
startQuest1.Text.Description.enGB.set("You awake next to a broken frostmourne, and a letter with the insignia of the Fordring family sealing the note closed. You open the letter and find instructions regarding an insurrection happening in the land of Greenway. This letter was meant for an \'Archbishop Fairway\'.");
startQuest1.Questgiver.addStarter(1);
startQuest1.Questgiver.addEnder(1);
startQuest1.Rewards.Money.set(12500);
startQuest1.Rewards.ChoiceItem.add(1, 20); //health pot
startQuest1.Rewards.ChoiceItem.add(1, 20); //mana pot
startQuest1.Rewards.Item.add(exports.draftPaper.ID, 1); //draft papers
//# sourceMappingURL=Quest1.js.map