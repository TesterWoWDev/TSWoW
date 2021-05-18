import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { JUGGERNAUT_SKILL } from "../../Melee";

const JUGGRAGE = std.Spells.create (MODNAME,'Juggernaut\'s Rage').SkillLines.add(JUGGERNAUT_SKILL.ID).setAutolearn().end;
JUGGRAGE.Name.enGB.set('Juggernaut\'s Rage')
JUGGRAGE.Subtext.enGB.set("")
JUGGRAGE.Description.enGB.set('When you are below 50% health, you deal $s1% more damage.')
JUGGRAGE.AuraDescription.enGB.set('When you are below 50% health, you deal $s1% more damage.  In addition, your attacks ignore up to $s2% of your opponent\'s armor at all times..')
JUGGRAGE.Icon.set('Interface\\Icons\\spell_nature_reincarnation.blp')
JUGGRAGE.Range.set(0,0,0,0)
//JUGGRAGE.CasterAuraState.Include.set()  //Need to look at this
JUGGRAGE.Effects.add()
    JUGGRAGE.Effects.get(0).EffectType.setApplyAura()
    JUGGRAGE.Effects.get(0).BasePoints.set(9)
    JUGGRAGE.Effects.get(0).DieSides.set(1)
    JUGGRAGE.Effects.get(0).ImplicitTargetA.setUnitCaster()
    JUGGRAGE.Effects.get(0).AuraType.setModDamagePercentDone
    JUGGRAGE.Effects.get(0).ClassMask.A.set(20971521)
JUGGRAGE.Effects.add()
    JUGGRAGE.Effects.get(1).EffectType.setApplyAura()
    JUGGRAGE.Effects.get(1).BasePoints.set(9)
    JUGGRAGE.Effects.get(1).DieSides.set(1)
    JUGGRAGE.Effects.get(1).ImplicitTargetA.setUnitCaster()
    JUGGRAGE.Effects.get(1).AuraType.setModTargetArmorPct //may be wrong, will be aura #280 for modspellarmorpen
    JUGGRAGE.Effects.get(0).ClassMask.A.set(20971521)

