import { Test } from "mocha";
import { ID } from "./ID";

class TestContainer {
	kills: int = 0	
}

let arr : TSArray<TestContainer> = [];

export function Main(events: TSEventHandlers) {
//kill tracker/reward system
	events.Player.OnPVPKill((killer,killed)=>{
		const PVPTOKEN = 20880
		let AMOUNT = 5
		killer.AddItem(PVPTOKEN,AMOUNT)
		arr.set(killer.GetGUIDLow(),new TestContainer())
		console.log(arr.get(killer.GetGUIDLow()))
		killer.SendBroadcastMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has Murdered |cffff0000"+killed.GetName() + "|r In Cold Blood. Current killstreak of "+ arr.get(killer.GetGUIDLow()).kills)
	});

//reset cds on duel
	events.Player.OnDuelStart((player1,player2)=>{
		player1.ResetAllCooldowns()
		player2.ResetAllCooldowns()
	});

//levelup rewards/notif
	events.Player.OnLevelChanged((player,oldLevel)=>{
		player.SendAreaTriggerMessage("Congrats on leveling up!")
		let level: int = player.GetLevel()
		if(level%5 == 0){
			player.ModifyMoney(100)
			player.AddItem(20880,level/5)
		} 
		if(level == 80){
			player.SendBroadcastMessage("|cffffffff[LevelTracker]|r "+player.GetName() + " Has Reached Max Level! Congrats "+ player.GetName()+"!")
		}   
	});

	events.Spells.OnCast(ID.TESTER_MOD_CONTROL_0_ATTACK,(spell)=>{//cast all other minion attacks
		let player = spell.GetCaster().ToPlayer()
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_1_ATTACK,true)
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_2_ATTACK,true)
		player.CastSpell(player,ID.TESTER_MOD_CONTROL_3_ATTACK,true)
	});
}
