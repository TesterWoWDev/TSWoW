import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FROST_SKILL } from "../../Caster";
import { CASTER_SKILL_TRAINER_HORDE } from "../CasterTrainer";

const PERMAFROST = std.Spells.create (MODNAME,'Permafrost',72081).SkillLines.add(FROST_SKILL.ID).setAutolearn().end; //Permafrost shoots icicles out of the caster to all nearby enemies.
PERMAFROST.Name.enGB.set('Permafrost')
PERMAFROST.Subtext.enGB.set('Basic Spell')
PERMAFROST.AuraDescription.enGB.set('Being pelted with Permafrost by a nearby conduit.')
PERMAFROST.Description.enGB.set('The caster incases themselves in permafrost, causing shards of ice to shoot out in all directions periodically dealing damage to all nearby enemies.')
PERMAFROST.Icon.set('Interface\\Icons\\spell_frost_frozencore.blp')

const FROSTORB = std.Spells.create (MODNAME,'Frostorb',72082).SkillLines.add(FROST_SKILL.ID).end; //The Icicle.
FROSTORB.Name.enGB.set('Frostorb')
FROSTORB.Subtext.enGB.set('Basic Spell')
FROSTORB.AuraDescription.enGB.set('Ice Shards Pelt you.')
FROSTORB.Description.enGB.set('Pelts the target with ice shards.')
FROSTORB.Icon.set('Interface\\Icons\\spell_fire_blueflamebreath.blp')


PERMAFROST.Effects.clearAll()
PERMAFROST.Effects.add()
PERMAFROST.Duration.set(10000,0,10000)
PERMAFROST.Visual.cloneFrom(72094,true)
    PERMAFROST.Effects.get(0).EffectType.setApplyAura()
    PERMAFROST.Effects.get(0).BasePoints.set(75)
    PERMAFROST.Effects.get(0).DieSides.set(35)
    PERMAFROST.Effects.get(0).PointsPerLevel.set(1)
    PERMAFROST.Effects.get(0).ImplicitTargetA.setUnitCaster()
    PERMAFROST.Effects.get(0).BonusMultiplier.set(1)
    PERMAFROST.Effects.get(0).Radius.set(25,0,25)
    PERMAFROST.Effects.get(0).BonusMultiplier.set(1)
    PERMAFROST.Effects.get(0).AuraType.setPeriodicTriggerSpell()
    //PERMAFROST.Effects.get(0).AuraType.setPeriodicDamage()
    PERMAFROST.Effects.get(0).AuraPeriod.set(1000)
    //PERMAFROST.Effects.get(0).TriggerSpell.set(72082)
    PERMAFROST.Effects.get(0).TriggerSpell.set(FROSTORB.ID)

FROSTORB.Effects.clearAll()
FROSTORB.Range.set(0,25,0,25)
FROSTORB.Effects.add()
    FROSTORB.Visual.cloneFrom(72082,true)
    FROSTORB.Effects.get(0).EffectType.setSchoolDamage()
    FROSTORB.Effects.get(0).BasePoints.set(100)
    FROSTORB.Effects.get(0).DieSides.set(35)
    FROSTORB.Effects.get(0).PointsPerLevel.set(1)
    FROSTORB.Effects.get(0).ImplicitTargetA.setDestTargetEnemy()
    FROSTORB.Effects.get(0).BonusMultiplier.set(1)
    