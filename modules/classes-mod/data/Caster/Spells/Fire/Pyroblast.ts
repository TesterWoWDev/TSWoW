import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FIRE_SKILL } from "../../Caster";
import { FIRE_SKILL_TRAINER_HORDE } from "./FireTrainer";

const PYROBLAST = std.Spells.create (MODNAME,'Combustion').SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(PYROBLAST.ID,10,20)//CHANGE LATER
PYROBLAST.Name.enGB.set('Pyroblast')
PYROBLAST.Subtext.enGB.set('')
PYROBLAST.Description.enGB.set('Hurls an immense fiery boulder that causes $s1 Fire damage and an additional $o2 Fire damage over $d.') 
PYROBLAST.AuraDescription.enGB.set('$s2 Fire damage every $t2 seconds.')
PYROBLAST.Icon.set('Interface\\Icons\\spell_fire_fireball02.blp')
PYROBLAST.CastTime.set(5,0,0)
PYROBLAST.Duration.set(12,0,12)
PYROBLAST.Range.set(0,35,0,0)
PYROBLAST.Power.setMana(5,22)
PYROBLAST.Cooldown.set(0,0,0,0)
PYROBLAST.Effects.add()
    PYROBLAST.Effects.get(0).EffectType.setSchoolDamage()
    PYROBLAST.Effects.get(0).BasePoints.set(140)
    PYROBLAST.Effects.get(0).DieSides.set(47)
    PYROBLAST.Effects.get(0).PointsPerLevel.set(1.9)
    PYROBLAST.Effects.get(0).ImplicitTargetA.setDestTargetEnemy()
    PYROBLAST.Effects.get(0).ClassMask.A.set(12582935)
    PYROBLAST.Effects.get(0).MultipleValue.set(1)
    PYROBLAST.Effects.get(0).BonusMultiplier.set(1.15)
PYROBLAST.Effects.add()
    PYROBLAST.Effects.get(1).EffectType.setApplyAura
    PYROBLAST.Effects.get(1).BasePoints.set(13)
    PYROBLAST.Effects.get(1).DieSides.set(1)
    PYROBLAST.Effects.get(1).AuraType.setPeriodicDamage()
    PYROBLAST.Effects.get(1).MiscValueA.set(10)
    PYROBLAST.Effects.get(1).ImplicitTargetA.setDestTargetEnemy()
    PYROBLAST.Effects.get(1).ClassMask.A.set(12582935)
    PYROBLAST.Effects.get(1).BonusMultiplier.set(0.05)