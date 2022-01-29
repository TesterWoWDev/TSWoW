const mobSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 389, x: -20.385674, y: -51.126995, z: -21.808510, o: 2.835515 }),
    MakeDictionary<string, float>({ map: 389, x: -40.309528, y: -44.830883, z: -21.863708, o: 2.835515 }),
    MakeDictionary<string, float>({ map: 389, x: -107.162804, y: -32.489670, z: -30.222794, o: 3.218789 }),
    MakeDictionary<string, float>({ map: 389, x: -159.270813, y: -32.502430, z: -38.981274, o: 3.115117 }),
    MakeDictionary<string, float>({ map: 389, x: -240.874985, y: -32.922291, z: -57.459766, o: 3.152816 }),
    MakeDictionary<string, float>({ map: 389, x: -280.580994, y: -47.202816, z: -60.932148, o: 3.488181 }),
    MakeDictionary<string, float>({ map: 389, x: -301.167419, y: -22.247681, z: -58.970074, o: 1.351897 }),
    MakeDictionary<string, float>({ map: 389, x: -248.354904, y: 7.989812, z: -49.230953, o: 0.001797 }),
    MakeDictionary<string, float>({ map: 389, x: -202.311783, y: 8.072551, z: -36.610638, o: 0.001797 }),
    MakeDictionary<string, float>({ map: 389, x: -167.311829, y: 8.135445, z: -28.734005, o: 0.001797 }),
    MakeDictionary<string, float>({ map: 389, x: -132.311890, y: 8.198339, z: -20.865423, o: 0.001797 }),
    MakeDictionary<string, float>({ map: 389, x: -108.948074, y: 43.632145, z: -18.046465, o: 1.773656 }),
    MakeDictionary<string, float>({ map: 389, x: -137.388550, y: 74.766228, z: -21.712746, o: 2.775039 }),
    MakeDictionary<string, float>({ map: 389, x: -183.895355, y: 77.900253, z: -22.274868, o: 2.770327 }),
    MakeDictionary<string, float>({ map: 389, x: -247.704330, y: 94.345993, z: -24.171082, o: 3.055426 }),
    MakeDictionary<string, float>({ map: 389, x: -247.130814, y: 146.145050, z: -18.627647, o: 1.247439 }),
    MakeDictionary<string, float>({ map: 389, x: -297.630524, y: 200.493149, z: -25.112547, o: 1.637782 }),
    MakeDictionary<string, float>({ map: 389, x: -350.978546, y: 205.962448, z: -22.091862, o: 3.619342 }),
]

const bossSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 389, x: -243.122650, y: 150.662460, z: -18.724436, o: 5.593280 }),
]

const playerSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 389, x: -243.122650, y: 150.662460, z: -18.724436, o: 5.593280 }),
]
const playerSpawnCount = playerSpawnCoords.length

const bossIDs: TSArray<uint32> = [
    GetID("creature_template","minecraft-mod","torghastboss1"),
    GetID("creature_template","minecraft-mod","torghastboss2"),
    GetID("creature_template","minecraft-mod","torghastboss3"),
    GetID("creature_template","minecraft-mod","torghastboss5"),
]
const bossCount: uint32 = bossIDs.length

const mobIDs: TSArray<uint32> = [37478, 13339, 17705, 36863, 30704,]
const mobCount: uint32 = mobIDs.length

const prestigeSpell:uint32 = GetID("Spell", "minecraft-mod", "mapprestige-spell")
const rewardID:uint32 = 19019

export function dungeon1(events: TSEventHandlers) {

    for(let i=0;i<mobCount;i++){
        events.CreatureID.OnReachedHome(mobIDs[i],(creature)=>{  
            addPrestigeBuff(creature, creature.GetMap().GetUInt('prestige',0))
        })
        events.CreatureID.OnCreate(mobIDs[i],(creature,cancel)=>{  
            addPrestigeBuff(creature, creature.GetMap().GetUInt('prestige',0))
        })
    }
    for(let i=0;i<bossCount;i++){
        events.CreatureID.OnReachedHome(bossIDs[i],(creature)=>{  
            addPrestigeBuff(creature, creature.GetMap().GetUInt('prestige',0))
        })
        events.CreatureID.OnCreate(bossIDs[i],(creature,cancel)=>{  
            addPrestigeBuff(creature, creature.GetMap().GetUInt('prestige',0))
        })
        
    }
    events.MapID.OnPlayerEnter(389, (map, player) => {
        if (!map.GetBool('isSpawned', false)) {
            map.SetBool('isSpawned', true)
            spawnMap(map)
        }
    })

    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#cc")) {
            resetGroup(player)
        }
        if (msg.get().startsWith("#ee")) {
            rewardGroup(player)
        }
    })
}

function rewardGroup(player:TSPlayer){
    despawnMap(player)
    if(player.IsInGroup()){
        let group = player.GetGroup().GetMembers()
        for(let i=0;i<group.length;i++){
            let curPrestige = group[i].GetUInt('prestige',0)
            group[i].AddItem(rewardID,5*curPrestige)
            group[i].Teleport(725,-8750.45,-74.64,31,0)
        }
    }else{
        let curPrestige = player.GetUInt('prestige',0)
        player.AddItem(rewardID,5*curPrestige)
        player.Teleport(725,-8750.45,-74.64,31,0)
    }   
    
}

function resetGroup(player:TSPlayer){
    let map = player.GetMap()
    map.SetUInt('prestige',map.GetUInt('prestige',0)+1)
    despawnMap(player)
    if(player.IsInGroup()){
        teleportRandomStart(player.GetGroup().GetMembers())
    }else{
        teleportRandomStart([player])
    }
    spawnMap(map)
}

function teleportRandomStart(players: TSPlayer[]) {
    let rand = getRandomInt(playerSpawnCount)
    let choice = playerSpawnCoords.get(rand)
    let prestige = players[0].GetMap().GetUInt('prestige',0)
    for(let i=0;i<players.length;i++){
        players[i].SetUInt('prestige',players[i].GetUInt('prestige',0)+1)
        if(prestige>0){
            players[i].SendAreaTriggerMessage("You are on Prestige "+prestige)
        }
        players[i].Teleport(choice['map'],choice['x'],choice['y'],choice['z'],choice['o'])
    }
}

function despawnMap(player:TSPlayer){
        let creatures = player.GetCreaturesInRange(5000,0,0,0)
        for (let i = 0; i < creatures.length; i++) {
            creatures[i].DespawnOrUnsummon(0)
        }
}

function spawnMap(map:TSMap){
    for(let i=0;i<bossSpawnCoords.length;i++){
        spawnBoss(map, getRandomInt(bossCount),bossSpawnCoords.get(i))
    }
    for (let i = 0; i < mobSpawnCoords.length; i++) {
        spawnFormation(map, mobSpawnCoords.get(i))
    }
}

function getRandomInt(max: uint32): uint32 {
    return Math.floor(Math.random() * max)
}

function spawnBoss(map: TSMap, formNum: number, sPos: TSDictionary<string, number>) {
    map.SpawnCreature(bossIDs[formNum], sPos['x'], sPos['y'], sPos['z'], sPos['o'], 0)
}

function spawnFormation(map: TSMap, sPos: TSDictionary<string, float>) {
    //forward is x+cosRad y+sinRad
    //backwards is x-cosRad y-sinRad
    //left is x+sinRad y+cosRad
    //right is x-sinRad y-cosRad
    let cosRad = 3 * Math.cos(sPos['o'])
    let sinRad = 3 * Math.sin(sPos['o'])
    let formationNumber = getRandomInt(10)
    let prestige = map.GetUInt('prestige',0)
    map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'], sPos['y'], sPos['z'], sPos['o'], 0)
    switch (formationNumber) {
        case 0:
            //0x0
            //0x0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 1:
            //000
            //xx0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 2:
            //000
            //0xx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 3:
            //0x0
            //0x0
            //0x0
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - cosRad, sPos['y'] - sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 4:
            //000
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 5:
            //000
            //0x0
            //x0x
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad - cosRad, sPos['y'] + cosRad - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 6:
            //x0x
            //0x0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad + cosRad, sPos['y'] + cosRad + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 7:
            //0x0
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 8:
            //000
            //xxx
            //0x0
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - cosRad, sPos['y'] - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 9:
            //x0x
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad + cosRad, sPos['y'] + cosRad + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad + cosRad, sPos['y'] - cosRad + sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 10:
            //000
            //xxx
            //x0x
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad - cosRad, sPos['y'] + cosRad - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad - cosRad, sPos['y'] - cosRad - sinRad, sPos['z'], sPos['o'], 0)
            break;
    }
}
function addPrestigeBuff(mob: TSCreature,count:uint32) {
    mob.CastCustomSpell(mob,prestigeSpell,true,9*count,9*count,9*count,CreateItem(19019,1),mob.GetGUID())
}