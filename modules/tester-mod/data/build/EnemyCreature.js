"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZOMBIE = void 0;
const tswow_stdlib_1 = require("tswow-stdlib");
const Position_1 = require("tswow-stdlib/Misc/Position");
// Create a mob based on the zombies in Deathknell. 
exports.ZOMBIE = tswow_stdlib_1.std.CreatureTemplates.create('mymod', 'zombie', 1501);
exports.ZOMBIE.Level.set(9, 20);
// Random positions behind northshire abbey, between the sawmill and river.
const positions = [
	Position_1.Pos(0, -8860.666016, -261.928772, 80.420403, 2.052581),
	Position_1.Pos(0, -8872.766602, -269.979706, 79.303566, 3.072814),
	Position_1.Pos(0, -8863.773438, -281.623444, 78.845047, 4.894153),
	Position_1.Pos(0, -8849.226563, -282.741882, 79.074303, 1.732141),
	Position_1.Pos(0, -8832.603516, -280.921326, 78.904022, 0.446443),
	Position_1.Pos(0, -8842.893555, -293.981720, 78.108154, 4.027075),
	Position_1.Pos(0, -8857.631836, -300.569183, 77.552925, 3.555051),
	Position_1.Pos(0, -8888.351563, -308.467163, 74.824699, 2.529320),
	Position_1.Pos(0, -8905.495117, -286.458191, 77.376122, 2.452351),
	Position_1.Pos(0, -8924.399414, -270.791168, 77.919647, 0.761388),
	Position_1.Pos(0, -8900.039063, -255.879608, 79.980675, 0.271300),
	Position_1.Pos(0, -8872.840820, -244.551208, 82.048447, 4.263481),
];
// Iterate over each position, and spawn a zombie based on it.
for (let i = 0; i < positions.length; ++i) {
	const spawn = exports.ZOMBIE.spawn('mymod', `zombie-spawn-${i}`, positions[i]);
	spawn.MovementType.setRandomMovement();
	spawn.WanderDistance.set(10);
}
exports.ZOMBIE.UnitClass.setMage();
// Set zombie damage to 0.5x
exports.ZOMBIE.Stats.DamageMod.set(0.5);
// Set zombie health to 0.75x 
exports.ZOMBIE.Stats.HealthMod.set(0.75);
// Set zombie mana to 0.25x
exports.ZOMBIE.Stats.ManaMod.set(0.25);
exports.ZOMBIE.AttackTime.set(100, 100, 10, 10);
const DEFIAS_CUTPURSE = tswow_stdlib_1.std.CreatureTemplates.load(94);
const peasant = tswow_stdlib_1.std.CreatureTemplates.load(11260);
// The field for creature faction is "faction template".
// Future tutorials will further explain the meaning of this name.
exports.ZOMBIE.FactionTemplate.set(DEFIAS_CUTPURSE.FactionTemplate.get());
const script1 = exports.ZOMBIE.Scripts.onRange(0, 20, 0, 0);
script1.Target.setSelf();
script1.Action.setCast(3385, 0, 0);
const rogueScript = exports.ZOMBIE.Scripts.onRange(0, 20, 0, 0);
rogueScript.Action.setTalk({ enGB: 'Dumb rogue players' }, 10, 0);
rogueScript.ConditionInvoker.addIsClass('ROGUE');
//# sourceMappingURL=EnemyCreature.js.map