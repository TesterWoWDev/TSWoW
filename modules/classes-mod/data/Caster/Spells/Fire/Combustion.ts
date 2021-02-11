import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FIRE_SKILL } from "../../Caster";
import { FIRE_SKILL_TRAINER_HORDE } from "./FireTrainer";

//spark of imagination - causes the caster to gain 25% increased critical strike chance and 25% increased haste for # seconds

const COMBUSTION = std.Spells.create (MODNAME,'Combustion').SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(COMBUSTION.ID,10,69)//CHANGE LATER
COMBUSTION.Name.enGB.set('Combustion')
COMBUSTION.Description.enGB.set('Increases Critical Strike Chance of all Fire Spells by $s1% for $d seconds.')
COMBUSTION.AuraDescription.enGB.set('Increased Fire Critical Strike Chance by $s1%')
COMBUSTION.Icon.set('Interface\\Icons\\spell_fire_sealoffire.blp')
COMBUSTION.Duration.set(15000,0,15000)
COMBUSTION.Range.set(0,0,0,0)
COMBUSTION.Power.setMana(20,5)
COMBUSTION.Cooldown.set(60000,0,0,0)
COMBUSTION.Effects.add()
    COMBUSTION.Effects.get(0).EffectType.setApplyAura()
    COMBUSTION.Effects.get(0).BasePoints.set(49)
    COMBUSTION.Effects.get(0).DieSides.set(1)
    COMBUSTION.Effects.get(0).ImplicitTargetA.setUnitCaster()
    COMBUSTION.Effects.get(0).AuraType.setAddFlatModifier()
    COMBUSTION.Effects.get(0).MiscValueA.set(7)
    COMBUSTION.Effects.get(0).ClassMask.A.set(12582935)
