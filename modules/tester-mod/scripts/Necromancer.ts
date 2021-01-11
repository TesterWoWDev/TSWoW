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
	events.SpellID.OnCast(10,(spell)=>{
		let player = spell.GetCaster().ToPlayer()
		const pX = player.GetX()
		const pY = player.GetY()
		const pZ = player.GetZ()
		const pO = player.GetO()

		let finalX = pX
		let finalY = pY
		let finalZ = pZ

	// finalX = finalX + Math.cos(pO)*20
	// finalY = finalY + Math.sin(pO)*20
	//OR
	// finalX,finalY,finalZ = player.GetRelativePoint(20,player.GetO())

		const creature = player.SpawnCreature(1,pX,pY,pZ,pO,1,10)
		creature.MoveTo(1,finalX,finalY,finalZ,true)
    });
}