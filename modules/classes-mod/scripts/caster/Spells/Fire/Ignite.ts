import { ID } from "../../../ID"

export function Ignite(events: TSEventHandlers) {
    events.Spells.OnCast(spell=>{
        let caster = spell.GetCaster().ToPlayer()
        if(caster.GetClass() == ID.CLASSES_MOD_CASTER){
            if(caster.HasSpell(ID.CLASSES_MOD_IGNITE)){//some passive effect
                caster.CastSpell(spell.GetTarget().ToUnit(),ID.CLASSES_MOD_IGNITE_DOT,true)//DoT is a dummy aura, like renew but remove healing
            }
        }
    })
    events.SpellID.OnTick(ID.CLASSES_MOD_IGNITE_DOT,aura=>{
        aura.SetAmount(aura.GetCaster().GetLevel()*3)
    })
}