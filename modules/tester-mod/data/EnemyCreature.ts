import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";

// Create a mob based on the zombies in Deathknell. 
export const ZOMBIE = std.CreatureTemplates.create('mymod','zombie',1501)
	ZOMBIE.Level.set(9,20)
// Random positions behind northshire abbey, between the sawmill and river.
const positions = [
	Pos(0,-8860.666016,-261.928772,80.420403,2.052581),
	Pos(0,-8872.766602,-269.979706,79.303566,3.072814),
	Pos(0,-8863.773438,-281.623444,78.845047,4.894153),
	Pos(0,-8849.226563,-282.741882,79.074303,1.732141),
	Pos(0,-8832.603516,-280.921326,78.904022,0.446443),
	Pos(0,-8842.893555,-293.981720,78.108154,4.027075),
	Pos(0,-8857.631836,-300.569183,77.552925,3.555051),
	Pos(0,-8888.351563,-308.467163,74.824699,2.529320),
	Pos(0,-8905.495117,-286.458191,77.376122,2.452351),
	Pos(0,-8924.399414,-270.791168,77.919647,0.761388),
	Pos(0,-8900.039063,-255.879608,79.980675,0.271300),
	Pos(0,-8872.840820,-244.551208,82.048447,4.263481),
]

// Iterate over each position, and spawn a zombie based on it.
for(let i=0;i<positions.length;++i) {
	const spawn = ZOMBIE.spawn('mymod',`zombie-spawn-${i}`,positions[i]);
	spawn.MovementType.setRandomMovement();
	spawn.WanderDistance.set(10);
}

ZOMBIE.UnitClass.setMage()
// Set zombie damage to 0.5x
ZOMBIE.Stats.DamageMod.set(0.5);
// Set zombie health to 0.75x 
ZOMBIE.Stats.HealthMod.set(0.75)
// Set zombie mana to 0.25x
ZOMBIE.Stats.ManaMod.set(0.25)
ZOMBIE.AttackTime.set(100,100,10,10)
const DEFIAS_CUTPURSE = std.CreatureTemplates.load(94)
const peasant = std.CreatureTemplates.load(11260)
// The field for creature faction is "faction template".
// Future tutorials will further explain the meaning of this name.
ZOMBIE.FactionTemplate.set(DEFIAS_CUTPURSE.FactionTemplate.get())

const script1 = ZOMBIE.Scripts.onRange(0,20,0,0)
script1.Target.setSelf()
script1.Action.setCast(3385,0,0)

const rogueScript = ZOMBIE.Scripts.onRange(0,20,0,0)
rogueScript.Action.setTalk({enGB:'Dumb rogue players'},10,0)
rogueScript.ConditionInvoker.addIsClass('ROGUE')