import { ID } from "../../../ID";


export function frostBite(events: TSEventHandlers) {
    events.SpellID.OnCast(ID.CLASSES_MOD_FROSTBOLT,spell=>{
        let target = spell.GetTarget().ToUnit()
        target.AddAura(ID.CLASSES_MOD_FROSTBITE,target)
    })
}