const mobCoordSpawns: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({map:389,x:-20.385674,y:-51.126995,z:-21.808510,o:2.835515}),
    MakeDictionary<string, float>({map:389,x:-40.309528,y:-44.830883,z:-21.863708,o:2.835515}),
    MakeDictionary<string, float>({map:389,x:-107.162804,y:-32.489670,z:-30.222794,o:3.218789}),
    MakeDictionary<string, float>({map:389,x:-159.270813,y:-32.502430,z:-38.981274,o:3.115117}),
    MakeDictionary<string, float>({map:389,x:-240.874985,y:-32.922291,z:-57.459766,o:3.152816}),
    MakeDictionary<string, float>({map:389,x:-280.580994,y:-47.202816,z:-60.932148,o:3.488181}),
    MakeDictionary<string, float>({map:389,x:-301.167419,y:-22.247681,z:-58.970074,o:1.351897}),
    MakeDictionary<string, float>({map:389,x:-248.354904,y:7.989812,z:-49.230953,o:0.001797}),
    MakeDictionary<string, float>({map:389,x:-202.311783,y:8.072551,z:-36.610638,o:0.001797}),
    MakeDictionary<string, float>({map:389,x:-167.311829,y:8.135445,z:-28.734005,o:0.001797}),
    MakeDictionary<string, float>({map:389,x:-132.311890,y:8.198339,z:-20.865423,o:0.001797}),
    MakeDictionary<string, float>({map:389,x:-108.948074,y:43.632145,z:-18.046465,o:1.773656}),
    MakeDictionary<string, float>({map:389,x:-137.388550,y:74.766228,z:-21.712746,o:2.775039}),
    MakeDictionary<string, float>({map:389,x:-183.895355,y:77.900253,z:-22.274868,o:2.770327}),
    MakeDictionary<string, float>({map:389,x:-247.704330,y:94.345993,z:-24.171082,o:3.055426}),
    MakeDictionary<string, float>({map:389,x:-247.130814,y:146.145050,z:-18.627647,o:1.247439}),
    MakeDictionary<string, float>({map:389,x:-297.630524,y:200.493149,z:-25.112547,o:1.637782}),
    MakeDictionary<string, float>({map:389,x:-350.978546,y:205.962448,z:-22.091862,o:3.619342}),
]

const bossCoordSpawns: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 389, x: -243.122650, y: 150.662460, z: -18.724436, o: 5.593280 }),
]
const bossIDs:TSArray<uint32> = [1]

export function dungeon1(events: TSEventHandlers) {
    events.MapID.OnPlayerEnter(389, (map, player) => {
        if (!map.GetBool('isSpawned', false)) {
            map.SetBool('isSpawned', true)
            for (let i = 0; i < mobCoordSpawns.length; i++) {
                spawnFormation(map, getRandomInt(3),mobCoordSpawns.get(i))
            }
            // for(let i=0;i<bossCoordSpawns.length;i++){
            //     spawnBoss(map, getRandomInt(bossIDs.length),bossCoordSpawns.get(i))
            // }
        }
    })
}

function getRandomInt(max: uint32): uint32 {
    return Math.floor(Math.random() * max)
}

function spawnFormation(map: TSMap, formNum: uint32,sPos:TSDictionary<string,float>) {
    let shamanID = 37478
    let warlockID = 24686
    let warriorID = 13339
    let rogueID = 17705
    let mageID = 36863
    let paladinID = 30704
    //forward is x+cosRad y+sinRad
    //backwards is x-cosRad y-sinRad
    //left is x+sinRad y+cosRad
    //right is x-sinRad y-cosRad
    let cosRad = 3*Math.cos(sPos['o'])
    let sinRad = 3*Math.sin(sPos['o'])

    switch (formNum) {
        case 0:
            map.SpawnCreature(warlockID,sPos['x'],sPos['y'],sPos['z'],sPos['o'],0)
            map.SpawnCreature(warriorID,sPos['x']+cosRad,sPos['y']+sinRad,sPos['z'],sPos['o'],0)
            map.SpawnCreature(warriorID,sPos['x']+cosRad+sinRad,sPos['y']+sinRad+cosRad,sPos['z'],sPos['o'],0)
            map.SpawnCreature(rogueID,sPos['x']-cosRad,sPos['y']-sinRad,sPos['z'],sPos['o'],0)
            break;
        case 1:
            map.SpawnCreature(shamanID,sPos['x'],sPos['y'],sPos['z'],sPos['o'],0)
            map.SpawnCreature(warriorID,sPos['x']+cosRad,sPos['y']+sinRad,sPos['z'],sPos['o'],0)
            map.SpawnCreature(rogueID,sPos['x']-cosRad,sPos['y']-sinRad,sPos['z'],sPos['o'],0)
            map.SpawnCreature(rogueID,sPos['x']+sinRad,sPos['y']+cosRad,sPos['z'],sPos['o'],0)
            break;
        case 2:
            map.SpawnCreature(mageID,sPos['x'],sPos['y'],sPos['z'],sPos['o'],0)
            map.SpawnCreature(mageID,sPos['x']+sinRad,sPos['y']+cosRad,sPos['z'],sPos['o'],0)
            map.SpawnCreature(shamanID,sPos['x']-sinRad,sPos['y']-cosRad,sPos['z'],sPos['o'],0)
            break;
        case 3:
            map.SpawnCreature(paladinID,sPos['x'],sPos['y'],sPos['z'],sPos['o'],0)
            map.SpawnCreature(shamanID,sPos['x']-cosRad,sPos['y']-sinRad,sPos['z'],sPos['o'],0)
            break;
    }
}

function spawnBoss(map: TSMap, formNum: number, sPos: TSDictionary<string, number>) {
    map.SpawnCreature(bossIDs[formNum],sPos['x'],sPos['y'],sPos['z'],sPos['o'],300)
}

