import { time } from "console"

let timeBetween = 100//ms
let repeats = 10000
let maxSpawnAmount = 3
let arrayOfPlaces: TSArray<TSArray<float>>= [
    [1,1,1],//xyz
    [1,1,1],
]

let gobIDs:TSArray<float> = [//some tent/encampment building to be spawned
    1,1,1,1,1,1
]
let creatureIDs:TSArray<float> = [//some enemy spawn(s?) near tent
    1,1,1,1,1,1
]
//no touch
let arrayOfCreatureSpawn: TSArray<TSCreature>= []
let arrayOfGameObjectSpawn: TSArray<TSGameObject>= []
let alreadyTasked = false

export function encampment(events: TSEventHandlers) {

    events.CreatureID.OnCreate(1,(creature,cancel)=>{
        if(!alreadyTasked){
            creature.GetTasks().AddTimer(ModID(),"create_encampment",timeBetween,repeats,(timer,entity,del,can)=>{
                despawn()
                entity = entity.ToCreature()
                let chosenArea = arrayOfPlaces[randindex(arrayOfPlaces.length)]
                let gob = entity.SummonGameObject(gobIDs[randindex(gobIDs.length)],chosenArea[0],chosenArea[1],chosenArea[2],Math.random(),100000000)
                arrayOfGameObjectSpawn.push(gob)
                for(let i=0;i<=randValue(maxSpawnAmount);i++){
                    let cre = entity.SpawnCreature(gobIDs[randindex(creatureIDs.length)],chosenArea[0]+randValue(10),chosenArea[0]+randValue(10),chosenArea[0]+randValue(10),Math.random(),8,100000000)
                    arrayOfCreatureSpawn.push(cre)    
                }
                
            });
            alreadyTasked = true
        }
    })
}

function despawn(){
    for (let i=0;i<arrayOfCreatureSpawn.length;i++){
        arrayOfCreatureSpawn.pop()?.DespawnOrUnsummon(1)
    }
    for (let i=0;i<arrayOfGameObjectSpawn.length;i++){
        arrayOfGameObjectSpawn.pop()?.Despawn()
    }
}

function randindex(length:uint32):uint32{
    return Math.floor(Math.random() * length)
}

function randValue(max:uint32):uint32{
    return Math.floor(Math.random()*max)
}