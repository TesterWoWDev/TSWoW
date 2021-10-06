let tableOfSpawns:TSArray<uint32> = [
    1,
]

export function creatureDeathSummon(events: TSEventHandlers) {
    events.CreatureID.OnDeath(1, (creature,killer)=>{
        creature.SpawnCreature(tableOfSpawns[randNum(tableOfSpawns.length)],creature.GetX(),creature.GetY(),creature.GetZ(),0,2,120)
    })  
}

function randNum(max:number):number {
    return Math.floor(Math.random()*max);
}