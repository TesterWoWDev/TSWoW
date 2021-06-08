import { ID } from "../../../ID"

export function rageSpell(events: TSEventHandlers) {
     events.SpellID.OnCast(ID.CLASSES_MOD_JUGGERNAUT_SKILL,spell=>{
         let caster = spell.GetCaster()
         if(caster.GetHealthPct() <= 50){
             spell.Finish()
         }else{
             spell.Cancel()
         }
     })
}