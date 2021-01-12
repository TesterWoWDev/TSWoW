import { spawn } from "child_process";
import { create } from "terminal-kit/ScreenBuffer";
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
	events.SpellID.OnCast(53307,(spell)=>{
		const player = spell.GetCaster().ToPlayer()
		const TSPosition = player.GetRelativePoint(20,0)
		const creature = player.SpawnCreature(ID.TESTER_MOD_SKILLSHOT_CREATURE,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),3,3000)
		creature.CastSpell(creature,ID.TESTER_MOD_SKILLSHOT_CAST,true)
		creature.MoveTo(1,TSPosition.x,TSPosition.y,TSPosition.z,true)
	});
}