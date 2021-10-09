let table:TSArray<uint32> = [
    GetID("creature_template","minecraft-mod","worgchampioncreature-creature"),
    GetID("creature_template","minecraft-mod","koboldchampioncreature-creature"),
    GetID("creature_template","minecraft-mod","murlocchampioncreature-creature"),
    GetID("creature_template","minecraft-mod","harpycreature-creature"),
    GetID("creature_template","minecraft-mod","quailboarcreature-creature"),
]

export function creatureDeathApplyBuff(events: TSEventHandlers) {
    for(let i=0;i<table.length;i++){
        events.CreatureID.OnDeath(table[i], (creature,killer)=>{
            let players = creature.GetPlayersInRange(50,0,0)
            for(let i=0;i<players.length;i++){
                players[i].AddAura(GetID("Spell","minecraft-mod","championkill-spell"),players[i])
            }
        })  
    }
}