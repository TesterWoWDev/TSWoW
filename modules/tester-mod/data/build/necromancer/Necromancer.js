"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PESTILENCE_SKILL = exports.NECROMANCY_SKILL = exports.NECROMANCER_ROBE = exports.NECROMANCER_CLASS = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const TSWOW_TESTMODULE = "tester-mod";
exports.NECROMANCER_CLASS = tswow_stdlib_1.std.Classes.create(TSWOW_TESTMODULE, 'necromancer', 'NECROMANCER', 'MAGE');
exports.NECROMANCER_ROBE = tswow_stdlib_1.std.Items.create(TSWOW_TESTMODULE, 'cls', 56).Visual.row.Texture.set;
exports.NECROMANCER_CLASS.addRaces(['HUMAN', 'ORC', 'BLOODELF', 'UNDEAD']);
exports.NECROMANCER_CLASS.Name.enGB.set('Necromancer');
exports.NECROMANCER_CLASS.EquipSkills.Staves.setAuto();
exports.NECROMANCER_CLASS.EquipSkills.Cloth.setAuto();
exports.NECROMANCER_CLASS.EquipSkills.Polearms.setAuto();
// NECROMANCER_CLASS.StartGear.Mainhand.set(41821)
// NECROMANCER_CLASS.StartGear.Ranged.set(39134)
// NECROMANCER_CLASS.StartGear.Chest.set(42844)
// NECROMANCER_CLASS.UI.TCoords.set(0.5,0.75,0.5,0.75);
// NECROMANCER_CLASS.UI.ClassButton.setPos(85,-420)
// Change the stats
exports.NECROMANCER_CLASS.UI.Color.set(0xcc0077);
exports.NECROMANCER_CLASS.UI.Info.add('- Role: Damage, Tank');
exports.NECROMANCER_CLASS.UI.Info.add('- Light Armor (Cloth)');
exports.NECROMANCER_CLASS.UI.Info.add('- Controls multiple undead servants');
exports.NECROMANCER_CLASS.UI.Info.add('- Uses mana as a resource');
exports.NECROMANCER_CLASS.UI.Description.set("Necromancers raise and control the undead, and brings plague and destruction on their enemies. Necromancy is strictly forbidden in both Horde and Alliance societies, and those who practice it can only do so in absolute secrecy.");
// Spell Crit = 0.1*level
exports.NECROMANCER_CLASS.Stats.SpellCrit.set((x, level) => 0.000005 * level);
// Melee crit = 0.1*level
exports.NECROMANCER_CLASS.Stats.MeleeCrit.set((x, level) => 0.00008 * level);
exports.NECROMANCY_SKILL = tswow_stdlib_1.std.SkillLines
    .createClass(TSWOW_TESTMODULE, 'necromancy-skill', exports.NECROMANCER_CLASS.ID);
exports.NECROMANCY_SKILL.Name.enGB.set(`Necromancy`);
exports.NECROMANCY_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp');
// Truly the epitome of creativity
exports.PESTILENCE_SKILL = tswow_stdlib_1.std.SkillLines.createClass(TSWOW_TESTMODULE, 'death-skill', exports.NECROMANCER_CLASS.ID);
exports.PESTILENCE_SKILL.Name.enGB.set(`Pestilence`);
exports.PESTILENCE_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_DeathCoil');
//# sourceMappingURL=Necromancer.js.map