import { spawn } from "child_process";
import { ID } from "./ID";

export function NecromancerClass(events: TSEventHandlers) {

//cast all other minion attacks
	events.SpellID.OnCast(ID.TESTER_MOD_CONTROL_0_ATTACK,(spell)=>{
		let player = spell.GetCaster().ToPlayer()
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_1_ATTACK,true)
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_2_ATTACK,true)
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_3_ATTACK,true)
		//player.SpawnCreature(1,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),1,10).MoveTo(1,player.GetX(),player.GetY(),player.GetZ(),true)
	}); 
	
	//test build out for summon creature that goes forward 20 yards
	events.SpellID.OnCast(5185,(spell)=>{
		const distance = 20
		const creatureID = 3210

		const player = spell.GetCaster().ToPlayer()
		const pO = player.GetO()
		const creature = player.SpawnCreature(creatureID,player.GetX(),player.GetY(),player.GetZ(),pO,3,5000)
		const TSPosition = player.GetRelativePoint(distance,player.GetO())
		//creature.MoveTo(1,TSPosition.x,TSPosition.y,TSPosition.z,true)
	});
}