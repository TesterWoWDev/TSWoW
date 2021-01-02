import { std } from "tswow-stdlib";
import { ZOMBIE } from "../EnemyCreature";

// Create the quest
const killQuest = std.Quests.create('my-module', 'kill-zombies-quest')

// Set the quest log title
.Text.Title.set({ enGB: 'Kill the zombies' })

// Set the longer quest description 
.Text.Description.set({ enGB: 'I sure have absolutely no idea where those zombies came from, but they are beginning to become a little more than an annoyance at this point. Please clear them out for us, will you?' })

// Set the short objective description (shown above the concrete objectives)
.Text.Objective.set({ enGB: 'Kill ten zombies, then report back to Dane Winslow.' })

// Makes Dane Winslow both starter and ender of the quest
.Questgiver.addBoth(6373)

// Adds 10 zombies as the single objective of this quest
// If a creature is used for this, it's presumed you should kill them, 
// whereas for gameobjects it's presumed you should just activate them.
.Objectives.Entity.add(ZOMBIE.ID, 10)
.Rewards.money.set(10000)
