const TABLE_NAME_KILLSTREAK = "playerkillstreak";
const auraSpells:TSArray<uint32> = [1901,1901,1901]
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
	events.Player.OnPVPKill((killer,killed)=>{
		let killCount = killer.GetData().GetObject<PlayerKillstreak>(TABLE_NAME_KILLSTREAK,new PlayerKillstreak(killer.GetGUIDLow())).killCount++		
		let pastKills = killed.GetData().GetObject<PlayerKillstreak>(TABLE_NAME_KILLSTREAK,new PlayerKillstreak(killed.GetGUIDLow())).killCount
        if(killCount%5 == 0){
            let val = Math.floor(killCount/5.0)
            if(val <= auraSpells.length){
                if(val > 0){
                    killer.RemoveAura(auraSpells[val-1])
                }
                killer.AddAura(auraSpells[val],killer)
            }
        }
        if(pastKills > 5){
            killer.ModifyHonorPoints(pastKills*50)
            SendWorldMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has ENDED |cffff0000"+killed.GetName() + "|r's killstreak of "+(pastKills+1))
        }else{
            SendWorldMessage("|cffff0000[KillTracker] " + killer.GetName() + "|r Has Murdered |cffff0000"+killed.GetName() + "|r In Cold Blood. Now on a killstreak of "+(killCount+1))
        }

        killed.GetData().GetObject<PlayerKillstreak>(TABLE_NAME_KILLSTREAK,new PlayerKillstreak(killed.GetGUIDLow())).killCount = 0
        killer.GetData().GetObject<PlayerKillstreak>(TABLE_NAME_KILLSTREAK, new PlayerKillstreak(killer.GetGUIDLow())).save();
		killed.GetData().GetObject<PlayerKillstreak>(TABLE_NAME_KILLSTREAK, new PlayerKillstreak(killed.GetGUIDLow())).save();
	});
}