export function VIP(events: TSEventHandlers) {
	//VIP commands
	events.Player.OnSay((player,type,lang,msg)=>{
		if(msg.get().startsWith("#buff")){
			player.CastSpell(player,58054,true)
		}else if(msg.get().startsWith("#mall")){
			player.Teleport(0,-8833,628,94,1)
		}else if(msg.get().startsWith("#gift")){//possibly give health stone/heartstone/teleport stone
			player.AddItem(100002,1)
		}
	})
	
//VIP xp modifier
	events.Player.OnGiveXP((player,amount,victim)=>{
		const query = QueryAuth('SELECT multiplier FROM vip_list WHERE accID = '+player.GetAccountId())
		while(query.GetRow()) {
			amount.set(amount.get()*query.GetFloat(0))
		}
	})
}