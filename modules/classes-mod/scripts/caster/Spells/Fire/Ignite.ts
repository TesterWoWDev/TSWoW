import { ID } from "../../../ID"

export function Ignite(events: TSEventHandlers) {
let firespells:TSArray<uint32> = [ID.CLASSES_MOD_FIREBALL_RANK7] //add fire spells here
for(let i=0;i<firespells.length;i++){
    events.SpellID.OnCast(firespells[i],spell=>{
        spell.GetCaster().ToPlayer().CastSpell(spell.GetTarget().ToUnit(),ID.CLASSES_MOD_IGNITE_DOT,true)
    })
}
    events.SpellID.OnTick(ID.CLASSES_MOD_IGNITE_DOT,aura=>{
        aura.SetAmount(aura.GetCaster().GetLevel()*3)
    })
}