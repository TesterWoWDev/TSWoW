
import { std } from "tswow-stdlib";
//This is a test comment to show that I can create notes to give information.
const WARRIOR_CLASS = std.Classes.load(1)
WARRIOR_CLASS.Name.enGB.set('Adventurer');
WARRIOR_CLASS.UI.Description.set('Adventurers adventure the world!');
WARRIOR_CLASS.Stats.MeleeAttackPower.set("level*1337");
console.log(WARRIOR_CLASS.Stats.objectify())
WARRIOR_CLASS.Stats.RangedAttackPower.set('200')
WARRIOR_CLASS.Name.enGB.set('Warrior')
