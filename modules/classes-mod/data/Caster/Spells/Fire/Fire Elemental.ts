import { std } from "tswow-stdlib";
import { MODNAME } from "../../../moduleName";
import { FIRE_SKILL } from "../../Caster";
import { FIRE_SKILL_TRAINER_HORDE } from "./FireTrainer";


const entity = std.CreatureTemplates.create(MODNAME,'Fire-Elemental',30416)
entity.UnitClass.setMage();
//fix mana
entity.Scripts.onJustSummoned().Target.setSelf().Action.setCast(29166,0,0)
//entity.Scripts.onJustSummoned().Target.setSelf().Action.setCast(688,0,0)
entity.Scripts.onUpdateOoc(1,1,1,1).Target.setSelf().Action.setCast(29166,0,0)

//(Timed create event)ID,initial min timer, initial max timer, repeated min timer, repeated max timer, chance
entity.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,2000,6000,100).row.event_flags.set(1)
entity.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
entity.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,5000,5000,100).row.event_flags.set(1)
entity.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
entity.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,30000,45000,100).row.event_flags.set(1)
entity.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)

//combat loop
entity.Scripts.onTimedEventTriggered(0).Target.setClosestEnemy(40,0).Action.setCast(17195,0,0)
entity.Scripts.onTimedEventTriggered(1).Target.setClosestEnemy(40,0).Action.setCast(55362,2,7)
entity.Scripts.onTimedEventTriggered(2).Target.setClosestEnemy(40,0).Action.setCast(6725,2,7)

const FIREELEMENTAL = std.Spells.create(MODNAME,'Fire-Elemental-Spell',688).SkillLines.add(FIRE_SKILL.ID).setAutolearn().end;
FIRE_SKILL_TRAINER_HORDE.Trainer.addSpell(FIREELEMENTAL.ID,10,69)//CHANGE LATER
FIREELEMENTAL.Name.enGB.set('Summon Fire Elemental')
FIREELEMENTAL.Description.enGB.set('Summons a Fire Elemental to fight for the caster for $d seconds.')
FIREELEMENTAL.Icon.set('Interface\\Icons\\spell_fire_elemental_totem.blp')
FIREELEMENTAL.Duration.set(20000,0,45000)
FIREELEMENTAL.Power.setMana(0,16)
FIREELEMENTAL.Cooldown.set(180000,0,0,0)
FIREELEMENTAL.CastTime.set(0,0,0)
FIREELEMENTAL.Effects.get(0).EffectType.set(28)
FIREELEMENTAL.Effects.get(0).MiscValueA.set(entity.ID)
FIREELEMENTAL.Effects.get(0).MiscValueB.set(61)
FIREELEMENTAL.Effects.get(0).Radius.set(5,0,5)
FIREELEMENTAL.Effects.get(0).ImplicitTargetA.setDestCasterSummon
