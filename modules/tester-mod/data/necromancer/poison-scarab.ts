import { std } from "tswow-stdlib";

const testSpell = std.Spells.create("tester-mod","skillshot-proc",15237)
    .Effects.clearAll()
    .Effects.add()
        .EffectType.setSchoolDamage()
        .BasePoints.set(100)
        .ImplicitTargetA.set((30<<1))
        .ImplicitTargetB.set((15<<1))
        .Radius.set(5,0,5)
    .end
    testSpell.Visual.Kits.clearAll()

const scarabSpell = std.Spells.create('tester-mod','skillshot-cast',68037)
    scarabSpell.Effects.get(0).AuraType.setPeriodicTriggerSpell()
    .AuraPeriod.set(100)
    .TriggerSpell.set(testSpell.ID)
    scarabSpell.Visual.Kits.clearAll()

const scarabCreature = std.CreatureTemplates.create('tester-mod','skillshot-creature',16863)
    scarabCreature.UnitFlags.NotSelectable.mark()
    scarabCreature.FactionTemplate.set(35)