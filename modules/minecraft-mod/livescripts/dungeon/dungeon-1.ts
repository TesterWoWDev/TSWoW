import { removePlayerBuffs, resetGroup, setupPrestigeBuffApplication, spawnMap } from "./torghast-master"
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
const mobIDs: TSArray<uint32> = [
    37478,
    13339,
    17705,
    36863,
    30704,
]

const bossSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 389, x: -243.122650, y: 150.662460, z: -18.724436, o: 5.593280 }),
]

const bossIDs: TSArray<uint32> = [
    GetID("creature_template", "minecraft-mod", "torghastboss1"),
    GetID("creature_template", "minecraft-mod", "torghastboss2"),
    GetID("creature_template", "minecraft-mod", "torghastboss3"),
    GetID("creature_template", "minecraft-mod", "torghastboss5"),
]

const playerSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 389, x: -243.122650, y: 150.662460, z: -18.724436, o: 5.593280 }),
]

const rewardID = 19019
const prestigeMult = 9//this is 1 lower than real value, due to dieSides. 9 is 10% hp+damage+haste per prestige

export function dungeon1(events: TSEventHandlers) {
    for (let i = 0; i < mobIDs.length; i++) {
        setupPrestigeBuffApplication(events, mobIDs[i],prestigeMult)
    }

    for (let i = 0; i < bossIDs.length; i++) {
        setupPrestigeBuffApplication(events, bossIDs[i],prestigeMult)
    }
    //make a bossMinions loop for any spawned by spell creatures

    events.MapID.OnPlayerEnter(389, (map, player) => {
        if (!map.GetBool('isSpawned', false)) {
            map.SetBool('isSpawned', true)
            map.SetUInt('rewardID', rewardID)
            spawnMap(map, bossSpawnCoords, bossIDs, mobSpawnCoords, mobIDs)
        }
    })

    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#cc")) {
            resetGroup(player, playerSpawnCoords, bossSpawnCoords, bossIDs, mobSpawnCoords, mobIDs)
        }
    })
    events.MapID.OnPlayerLeave(389, (map, player) => {
        player.ResurrectPlayer(80,false)
        removePlayerBuffs(player)
        let curPrestige: uint32 = player.GetUInt('prestige', 0)
        let rewCount: uint32 = <uint32>(curPrestige * curPrestige) / 10
        if (rewCount > 0) {
            player.SendAreaTriggerMessage('it seems you did not fare so well, have ' + rewCount + ' Anima for your attempt.')
            player.AddItem(rewardID, rewCount)
        }
    })
}

