const TABLE_NAME = "player_killstreak";

@CharactersTable
class PlayerKillstreak extends DBTable {
    constructor(playerGUID: uint32) {
        super();
        this.playerGUID = playerGUID;
	}
	
    @PrimaryKey
	playerGUID: uint32 = 0;
	
    @Field
    killCount: int32 = 0;
}

export function Killstreaks(events: TSEventHandlers) {
    events.Player.OnLogin((player,first)=>{
        const guid = player.GetGUIDLow()
        const rows = LoadRows(PlayerKillstreak,`player = ${guid}`)
        const tableData = rows.length > 0 ? rows.get(0) : new PlayerKillstreak(guid);
        player.GetData().SetObject(ModID(),TABLE_NAME,tableData);
    });

	events.Player.OnPVPKill((killer,killed)=>{
		const killCount = killer.GetData().GetObject<PlayerKillstreak>(ModID(),TABLE_NAME,()=>new PlayerKillstreak(killer.GetGUIDLow())).killCount++
		killed.GetData().GetObject<PlayerKillstreak>(ModID(),TABLE_NAME,()=>new PlayerKillstreak(killed.GetGUIDLow())).killCount = 0
		//replace with global message
		killer.SendBroadcastMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has Murdered |cffff0000"+killed.GetName() + "|r In Cold Blood. Current killstreak of "+killCount)
		killed.SendBroadcastMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has Murdered |cffff0000"+killed.GetName() + "|r In Cold Blood. Current killstreak of "+killCount)
	});

    events.Player.OnSave((player)=>{
        player.GetData().GetObject<PlayerKillstreak>(ModID(),TABLE_NAME,()=>new PlayerKillstreak(player.GetGUIDLow())).save();
	});
}