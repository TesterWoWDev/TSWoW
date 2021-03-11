import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FIRE_SKILL } from "../../Caster";
import { CASTER_SKILL_TRAINER_HORDE } from "../CasterTrainer";


const FLAMEVOCATION = std.Spells.create (MODNAME,'Covoke Fire',12051).SkillLines.add(FIRE_SKILL.ID).AcquireMethod.set(0).end;
    CASTER_SKILL_TRAINER_HORDE.Trainer.addSpell(FLAMEVOCATION.ID,10,69)//CHANGE LATER
FLAMEVOCATION.Name.enGB.set('Convoke Fire')
FLAMEVOCATION.Subtext.enGB.set('')
FLAMEVOCATION.Description.enGB.set('Channel your inner fire to increase the casters SOMETHING by $s2% for $d seconds.') //can change the %
FLAMEVOCATION.AuraDescription.enGB.set('Increased Fire Critical Strike Chance by $s1% and Fire Spell cast time for $s2%')
FLAMEVOCATION.Icon.set('Interface\\Icons\\spell_shaman_stormearthfire.blp')
FLAMEVOCATION.Duration.set(15000,0,15000)
FLAMEVOCATION.Range.set(0,0,0,0)
FLAMEVOCATION.Power.setMana(20,5)
FLAMEVOCATION.Cooldown.set(180000,0,0,0)
FLAMEVOCATION.Visual.cloneFromVisual(13238)
FLAMEVOCATION.Attributes.channeled2.check()

