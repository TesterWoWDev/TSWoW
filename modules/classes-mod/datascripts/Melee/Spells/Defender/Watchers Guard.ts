import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { DEFENDER_SKILL } from "../../Melee";
import { MELEE_SKILL_TRAINER } from "../MeleeTrainer";

export const TANKSTANCE = std.Spells.create(MODNAME, 'Watchers-Guard', 71).SkillLines.add(DEFENDER_SKILL.ID).AcquireMethod.set(0).end;
    MELEE_SKILL_TRAINER.Trainer.addSpell(TANKSTANCE.ID,10,21)//CHANGE LATER
TANKSTANCE.Name.enGB.set('Watcher\'s Guard')
TANKSTANCE.Subtext.enGB.set("")
TANKSTANCE.Description.enGB.set('Decreases damage taken by 10% and damage caused by 5%. Increases threat generated..')
TANKSTANCE.AuraDescription.enGB.set('Damage taken decreased by 10% and damage caused by 5%. Threat generation increased.')
TANKSTANCE.Icon.set('Interface\\Icons\\inv_shield_06.blp')
TANKSTANCE.row.DurationIndex.set(21)
TANKSTANCE.Effects.add()
    TANKSTANCE.Effects.get(0).EffectType.setApplyAura()
    TANKSTANCE.Effects.get(0).BasePoints.set(-1)
    TANKSTANCE.Effects.get(0).DieSides.set(1)
    TANKSTANCE.Effects.get(0).ImplicitTargetA.setUnitCaster()
    TANKSTANCE.Effects.get(0).AuraType.setModShapeshift
    TANKSTANCE.Effects.get(0).MiscValueA.set(18)
