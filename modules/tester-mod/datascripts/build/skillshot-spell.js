"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tswow_stdlib_1 = require("tswow-stdlib");
const moduleName_1 = require("./moduleName");
const testSpell = tswow_stdlib_1.std.Spells.create(moduleName_1.MODNAME, "skillshot-proc", 15237)
    .Effects.clearAll()
    .Effects.add()
    .EffectType.setSchoolDamage()
    .BasePoints.set(100)
    .ImplicitTargetA.set((30 << 1))
    .ImplicitTargetB.set((15 << 1))
    .Radius.set(5, 0, 5)
    .end;
testSpell.Visual.Kits.clearAll();
const scarabSpell = tswow_stdlib_1.std.Spells.create(moduleName_1.MODNAME, 'skillshot-cast', 68037);
scarabSpell.Effects.get(0).AuraType.setPeriodicTriggerSpell()
    .AuraPeriod.set(100)
    .TriggerSpell.set(testSpell.ID);
scarabSpell.Visual.Kits.clearAll();
const skillshotCreature = tswow_stdlib_1.std.CreatureTemplates.create(moduleName_1.MODNAME, 'skillshot-creature', 16863);
skillshotCreature.UnitFlags.NotSelectable.mark();
skillshotCreature.UnitFlags.Immune.mark();
skillshotCreature.FactionTemplate.set(35);
//# sourceMappingURL=skillshot-spell.js.map