"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tswow_stdlib_1 = require("tswow-stdlib");
const BOSS = tswow_stdlib_1.std.CreatureTemplates.create('testerMod', 'tester-mega-boss', 1501);
BOSS.UnitClass.setMage();
BOSS.Stats.DamageMod.set(0.5);
BOSS.Stats.HealthMod.set(0.75);
BOSS.Stats.ManaMod.set(0.25);
BOSS.AttackTime.set(100, 100, 10, 10);
const phase1 = BOSS.Scripts.onAggro();
phase1.Target.setSelf();
phase1.Action.setCast(3385, 0, 0);
//# sourceMappingURL=MegaBoss.js.map