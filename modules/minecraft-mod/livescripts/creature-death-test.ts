export function creatureDeathTest(events: TSEventHandlers) {
    events.CreatureID.OnDeath(13,(creature,killer)=>{
        let players = creature.GetPlayersInRange(50,0,0)
        for(let i=0;i<players.length;i++){
            players[i].AddAura(133,players[i])
        }
    })  
}