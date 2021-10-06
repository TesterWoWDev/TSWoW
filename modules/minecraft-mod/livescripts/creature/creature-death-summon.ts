let tableOfSpawns:TSArray<uint32> = [
    GetID("creature_template","minecraft-mod","zone2creature1"),
]

export function creatureDeathSummon(events: TSEventHandlers) {
    events.CreatureID.OnDeath(GetID("creature_template","minecraft-mod","webbed-zone2"), (creature,killer)=>{
        creature.SpawnCreature(tableOfSpawns[randNum(tableOfSpawns.length)],creature.GetX(),creature.GetY(),creature.GetZ(),0,2,120)
    })  
}

function randNum(max:number):number {
    return Math.floor(Math.random()*max);
}