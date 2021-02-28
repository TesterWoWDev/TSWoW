import { ID } from "../../../ID"

export function Ignite(events: TSEventHandlers) {
let firespells = [1,1,1,1,1]
for(let i=0;i<firespells.length;i++){
    events.SpellID.OnCast(firespells[i],spell=>{
        spell.GetCaster().ToPlayer().CastSpell(spell.GetTarget().ToUnit(),ID.CLASSES_MOD_IGNITE_DOT,true)
    })
}
    events.SpellID.OnTick(ID.CLASSES_MOD_IGNITE_DOT,aura=>{
        console.log(aura.GetAmount())
        //aura.SetAmount(aura.GetCaster().GetLevel()*3)
    })
}