
export function QoLChanges(events: TSEventHandlers) {
//reset cds on duel
    events.Player.OnDuelStart((player1,player2)=>{
        player1.ResetAllCooldowns()
        player2.ResetAllCooldowns()
    });

//levelup rewards/notif
	events.Player.OnLevelChanged((player,oldLevel)=>{
		player.SendAreaTriggerMessage("Congrats on leveling up to "+player.GetLevel()+"!")
		let level: int = player.GetLevel()
		if(level%5 == 0){
			player.ModifyMoney(100)
			player.AddItem(20880,level/5)
		} 
		if(level == 80){
			player.SendBroadcastMessage("|cffffffff[LevelTracker]|r "+player.GetName() + " Has Reached Max Level! Congrats "+ player.GetName()+" on reaching "+player.GetLevel()+"!")
		} 
	});
}