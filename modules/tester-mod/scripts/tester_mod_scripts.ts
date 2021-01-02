export function Main(events: TSEventHandlers) {
//kill tracker/reward system
	events.Player.OnPVPKill((killer,killed)=>{
		const PVPTOKEN = 20880
		let AMOUNT = 5
		killer.AddItem(PVPTOKEN,AMOUNT)
		killer.SendBroadcastMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has Murdered |cffff0000"+killed.GetName() + "|r In Cold Blood.")
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
		if(level%5 < 1){
			player.ModifyMoney(100)
			player.AddItem(20880,level/5)
		} 
		if(level > 79){
			player.SendBroadcastMessage("|cffffffff[LevelTracker]|r "+player.GetName() + " Has Reached Max Level! Congrats "+ player.GetName()+"!")
		}   
	});

	events.Spells.OnCast(200000,(spell)=>{//cast all other minion attacks
		let player = spell.GetCaster().ToPlayer()
		player.CastSpell(player,200005,true)
		player.CastSpell(player,200010,true)
		player.CastSpell(player,200015,true)
	});
}
