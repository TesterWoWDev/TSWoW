class TestContainer {
	guid: uint32 = 0
	kills: int16 = 1
}

let arr : TSArray<TestContainer> = [];

export function PvP(events: TSEventHandlers) {
//reset cds on duel
		events.Player.OnDuelStart((player1,player2)=>{
			player1.ResetAllCooldowns()
			player2.ResetAllCooldowns()
		});
//kill tracker/reward
		events.Player.OnPVPKill((killer,killed)=>{
			let PVPTOKEN = 20880
			let AMOUNT = 5
			killer.AddItem(PVPTOKEN,AMOUNT)
			let foundIndex = -1
			let kills = 1
			for(let i=0;i<arr.length;i++){
				console.log(arr.get(i).guid)
				console.log(killer.GetGUIDLow())
				if(arr.get(i).guid == killer.GetGUIDLow()){
					foundIndex = i
					arr.get(i).kills++
				}
				if(arr.get(i).guid == killed.GetGUIDLow()){
					arr.get(i).kills = 0
				}
			}
			if(foundIndex > -1){
				kills = arr.get(foundIndex).kills
			}else{
				let holder = new TestContainer();
				holder.guid = killer.GetGUIDLow()
				arr.push(holder)
			}
			killer.SendBroadcastMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has Murdered |cffff0000"+killed.GetName() + "|r In Cold Blood. Current killstreak of "+kills)
		});
	}