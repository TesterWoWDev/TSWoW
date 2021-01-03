import { kill } from "process";
import { ID } from "./ID";

class TestClass  {
	guid: uint32 = 0
	kills: int16 = 1
}
class TestContainer {
    inner: TestClass = new TestClass();
}

let arr : TSArray<TestContainer> = [];

export function Main(events: TSEventHandlers) {
//kill tracker/reward system
	events.Player.OnPVPKill((killer,killed)=>{
		let PVPTOKEN = 20880
		let AMOUNT = 5
		killer.AddItem(PVPTOKEN,AMOUNT)
		let foundIndex = -1
		let kills = 1
		console.log(arr.length)
		for(let i=0;i<arr.length;i++){
			console.log(arr.get(i).inner.guid)
			console.log(killer.GetGUIDLow())
			if(arr.get(i).inner.guid == killer.GetGUIDLow()){
				foundIndex = i
				arr.get(i).inner.kills++
			}
			if(arr.get(i).inner.guid == killed.GetGUIDLow()){
				foundIndex = i
				arr.get(i).inner.kills = 0
			}
		}
		if(foundIndex > -1){
			kills = arr.get(foundIndex).inner.kills
		}else{
			let holder = new TestContainer();
			holder.inner.guid = killer.GetGUIDLow()
			arr.push(holder)
		}
		 killer.SendBroadcastMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has Murdered |cffff0000"+killed.GetName() + "|r In Cold Blood. Current killstreak of "+kills)
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
