import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FIRE_SKILL } from "../../Caster";
import { CASTER_SKILL_TRAINER_HORDE } from "../CasterTrainer";

const FIRECRACKER = std.Spells.create (MODNAME,'Firecracker',45971).SkillLines.add(FIRE_SKILL.ID).setAutolearn().end; //Mass AoE damage fire ability.
    FIRECRACKER.Name.enGB.set('Firecracker')
    FIRECRACKER.Subtext.enGB.set('Ultimate Ability')
    FIRECRACKER.Description.enGB.set('Let loose a flurry of fire, sending sparks out to all enemies in 25 yards, dealing $s1 damage and causing the target to burn for $s2 damage.') 
    FIRECRACKER.AuraDescription.enGB.set('Ignited by a Firecracker, burning alive!')
    FIRECRACKER.Icon.set('Interface\\Icons\\spell_fireresistancetotem_01.blp')

FIRECRACKER.CastTime.set(0,0,0)
FIRECRACKER.Duration.set(5000,0,5000)
FIRECRACKER.Range.set(0,50,0,50)
FIRECRACKER.Effects.add()
    FIRECRACKER.Effects.get(0).EffectType.setSchoolDamage()
    FIRECRACKER.Effects.get(0).BasePoints.set(650)
    FIRECRACKER.Effects.get(0).DieSides.set(75)
    FIRECRACKER.Effects.get(0).ImplicitTargetA.setDestTargetEnemy()
    FIRECRACKER.Effects.get(0).ImplicitTargetB.setUnitDestAreaEnemy()
    FIRECRACKER.Effects.get(0).BonusMultiplier.set(1)
    FIRECRACKER.Effects.get(0).Radius.set(25,0,25)
FIRECRACKER.Effects.add()
    FIRECRACKER.Effects.get(1).EffectType.setApplyAura
    FIRECRACKER.Effects.get(1).BasePoints.set(100)
    FIRECRACKER.Effects.get(1).DieSides.set(25)
    FIRECRACKER.Effects.get(1).AuraType.setPeriodicDamage()
    FIRECRACKER.Effects.get(1).AuraPeriod.set(1000)
    FIRECRACKER.Effects.get(1).ImplicitTargetA.setDestTargetEnemy()
    FIRECRACKER.Effects.get(0).ImplicitTargetB.setUnitDestAreaEnemy()
    FIRECRACKER.Effects.get(1).BonusMultiplier.set(1)
    FIRECRACKER.Effects.get(0).Radius.set(25,0,25)
