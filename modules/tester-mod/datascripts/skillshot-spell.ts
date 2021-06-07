import { std } from "tswow-stdlib";
import { MODNAME } from "./moduleName";

const testSpell = std.Spells.create(MODNAME,"skillshot-proc",15237)
	.Effects.clearAll()
	.Effects.add()
		.EffectType.setSchoolDamage()
		.BaseDamage.set(100)
		.TargetA.set(60)
		.TargetB.set(30)
		.Radius.set(5,0,5)
	.end
	testSpell.Visual.clear()
const scarabSpell = std.Spells.create(MODNAME,'skillshot-cast',68037)
	scarabSpell.Effects.get(0).AuraType.setPeriodicTriggerSpell()
		.AuraPeriod.set(100)
		.TriggerSpell.set(testSpell.ID)
	scarabSpell.Visual.clear()

const skillshotCreature = std.CreatureTemplates.create(MODNAME,'skillshot-creature',16863)
	skillshotCreature.UnitFlags.NotSelectable.mark()
	skillshotCreature.UnitFlags.Immune.mark()
	skillshotCreature.FactionTemplate.set(35)