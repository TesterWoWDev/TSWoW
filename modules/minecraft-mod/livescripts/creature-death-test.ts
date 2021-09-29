let table:TSArray<uint32> = [
    GetID("creature_template","minecraft-mod","worgchampioncreature-creature"),
    
]


export function creatureDeathTest(events: TSEventHandlers) {
    for(let i=0;i<table.length;i++){
        events.CreatureID.OnDeath(table[i], (creature,killer)=>{
            let players = creature.GetPlayersInRange(50,0,0)
            for(let i=0;i<players.length;i++){
                players[i].AddAura(133,players[i])
            }
        })  
    }
    
}