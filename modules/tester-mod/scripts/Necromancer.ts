import { ID } from "./ID";

export function NecromancerClass(events: TSEventHandlers) {

//cast all other minion attacks
	events.SpellID.OnCast(ID.TESTER_MOD_CONTROL_0_ATTACK,(spell)=>{
		let player = spell.GetCaster().ToPlayer()
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_1_ATTACK,true)
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_2_ATTACK,true)
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_3_ATTACK,true)
    }); 
}