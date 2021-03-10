import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FROST_SKILL } from "../../Caster";
import { CASTER_SKILL_TRAINER_HORDE } from "../CasterTrainer";

const FROSTBOLT = std.Spells.create (MODNAME,'Frostbolt',11).SkillLines.add(FROST_SKILL.ID).setAutolearn().end; //Frostbolt casts will add stacks of frostbite.
FROSTBOLT.Name.enGB.set('Frostbolt')
FROSTBOLT.Subtext.enGB.set('Basic Spell')
FROSTBOLT.Description.enGB.set('Hurls a bolt of frost at your enemy, causing $s1 damage and slowing their movement speed by 15% (up to a maximum of 30%). Victims succumb to frostbite and take an additional 15% damage for every frost bolt up to a maximum of 100% increased damage taken.')
//FROSTBOLT.Icon.set('Interface\\Icons\\spell_fire_incinerate.blp')

const FROSTBITE = std.Spells.create (MODNAME,'Frostbite',11).SkillLines.add(FROST_SKILL.ID).end; //When players stack to 2 stacks of frostbite, they will become a frostbomb.
FROSTBITE.Name.enGB.set('Frostbite')
FROSTBITE.Subtext.enGB.set('Passive')
FROSTBITE.Description.enGB.set('Freezing... this enemies movement is slowed, and they are taking increased damage from frost spells.')
//FROSTBITE.Icon.set('Interface\\Icons\\spell_fire_incinerate.blp')

const FROSTBOMB = std.Spells.create (MODNAME,'Frostbomb',11).SkillLines.add(FROST_SKILL.ID).end; //Frostbomb will stack 4 times (up to +60% increased damage taken), so 15% per frostbolt.
FROSTBOMB.Name.enGB.set('Frostbomb')
FROSTBOMB.Subtext.enGB.set('Passive')
FROSTBOMB.Description.enGB.set('This target has become frozen, shards of ice shatter and deal damage to surrounding allies whenever they are hit by a frostbolt.')
//FROSTBOMB.Icon.set('Interface\\Icons\\spell_fire_incinerate.blp')

const SHATTER = std.Spells.create (MODNAME,'Shatter',11).SkillLines.add(FROST_SKILL.ID).end; //Shatter is the explosion from Frostbomb at 4 stacks that does mass AoE Damage.
SHATTER.Name.enGB.set('Shatter')
SHATTER.Subtext.enGB.set('Passive')
SHATTER.Description.enGB.set('A shard of ice fractured from a frostbomb, this deals substantial aoe damage.')
//SHATTER.Icon.set('Interface\\Icons\\spell_fire_incinerate.blp')

FROSTBOLT.Effects.clearAll()
FROSTBOLT.Effects.add()
    FROSTBOLT.Effects.get(0).EffectType.setSchoolDamage()
    FROSTBOLT.Effects.get(0).BasePoints.set(100)
    FROSTBOLT.Effects.get(0).DieSides.set(35)
    FROSTBOLT.Effects.get(0).PointsPerLevel.set(1)
    FROSTBOLT.Effects.get(0).ImplicitTargetA.setDestTargetEnemy()
    FROSTBOLT.Effects.get(0).BonusMultiplier.set(1)

FROSTBITE.Effects.clearAll()
    FROSTBITE.Stacks.set(2)
    FROSTBITE.Effects.add()
        FROSTBITE.Effects.get(0).EffectType.setApplyAura()
        FROSTBITE.Duration.set(8000,0,8000)
        FROSTBITE.Effects.get(0).AuraType.setModDecreaseSpeed()
        FROSTBITE.Effects.get(0).BasePoints.set(-16)
        FROSTBITE.Effects.get(0).DieSides.set(1)


