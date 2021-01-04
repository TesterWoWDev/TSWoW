"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tswow_stdlib_1 = require("tswow-stdlib");
const EnemyCreature_1 = require("../Creatures/EnemyCreature");
// Create the quest
const killQuest = tswow_stdlib_1.std.Quests.create('my-module', 'kill-zombies-quest');
// Set the quest log title
killQuest.Text.Title.set({ enGB: 'Kill the zombies' });
// Set the longer quest description 
killQuest.Text.Description.set({ enGB: 'I sure have absolutely no idea where those zombies came from, but they are beginning to become a little more than an annoyance at this point. Please clear them out for us, will you?' });
// Set the short objective description (shown above the concrete objectives)
killQuest.Text.Objective.set({ enGB: 'Kill ten zombies, then report back to Dane Winslow.' });
// Makes Dane Winslow both starter and ender of the quest
killQuest.Questgiver.addBoth(6373);
// Adds 10 zombies as the single objective of this quest
// If a creature is used for this, it's presumed you should kill them, 
// whereas for gameobjects it's presumed you should just activate them.
killQuest.Objectives.Entity.add(EnemyCreature_1.ZOMBIE.ID, 10);
killQuest.Rewards.money.set(10000);
//# sourceMappingURL=Quest1.js.map