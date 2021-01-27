"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINION_SUMMON = exports.DEATH_BOLT = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const Necromancer_1 = require("./Necromancer");
exports.DEATH_BOLT = tswow_stdlib_1.std.Spells.create('tswow-introduction', 'death-bolt', 686);
exports.DEATH_BOLT.Name.enGB.set('Death Bolt');
exports.DEATH_BOLT.Description.enGB.set('A bolt of death!');
exports.DEATH_BOLT.SkillLines.add(Necromancer_1.PESTILENCE_SKILL.ID).setAutolearn();
exports.MINION_SUMMON = tswow_stdlib_1.std.Spells.create('tswow-introduction', 'minion-summon', 66842);
exports.MINION_SUMMON.Name.enGB.set('Mass Reanimation');
exports.MINION_SUMMON.Description.enGB.set('Simultaneously summon up to 4 minions specified in the totem bar');
exports.MINION_SUMMON.Icon.set(tswow_stdlib_1.std.Spells.load(12020).Icon.get());
exports.MINION_SUMMON.Power.setMana(120, 15);
exports.MINION_SUMMON.Cooldown.Time.set(45000);
exports.MINION_SUMMON.SkillLines.add(Necromancer_1.NECROMANCY_SKILL.ID).setAutolearn();
//# sourceMappingURL=Mass-Summon.js.map