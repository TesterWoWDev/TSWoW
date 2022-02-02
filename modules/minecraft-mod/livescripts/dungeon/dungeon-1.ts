import { getRandomInt, prestigeSpell, removePlayerBuffs, resetGroup, setupLastBossCheck, spawnMap } from "./torghast-master"
const mobSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({ map: 726, x: 920.865845, y: 205.292023, z: 411.639832, o: 4.682223 }),
        MakeDictionary<string, float>({ map: 726, x: 898.207397, y: 248.136246, z: 411.458466, o: 5.609779 }),
        MakeDictionary<string, float>({ map: 726, x: 916.612366, y: 263.422302, z: 411.661377, o: 4.293451 }),
        MakeDictionary<string, float>({ map: 726, x: 927.894287, y: 278.394562, z: 421.560364, o: 2.132031 }),
        MakeDictionary<string, float>({ map: 726, x: 922.131287, y: 309.198395, z: 421.679413, o: 4.016987 }),
        MakeDictionary<string, float>({ map: 726, x: 897.160583, y: 323.317383, z: 423.617126, o: 3.863832 }),
        MakeDictionary<string, float>({ map: 726, x: 863.028992, y: 319.900085, z: 421.080261, o: 0.234508 }),
        MakeDictionary<string, float>({ map: 726, x: 869.330200, y: 350.082367, z: 422.290649, o: 4.716774 }),
        MakeDictionary<string, float>({ map: 726, x: 836.606445, y: 318.839813, z: 421.709290, o: 0.246289 }),
        MakeDictionary<string, float>({ map: 726, x: 830.597900, y: 354.008209, z: 428.732330, o: 5.488822 }),
        MakeDictionary<string, float>({ map: 726, x: 803.114685, y: 343.193085, z: 434.390442, o: 0.529818 }),
        MakeDictionary<string, float>({ map: 726, x: 803.477966, y: 363.323547, z: 435.341644, o: 6.270293 }),
        MakeDictionary<string, float>({ map: 726, x: 809.191467, y: 387.774353, z: 434.896637, o: 5.424419 }),
        MakeDictionary<string, float>({ map: 726, x: 831.401184, y: 399.097839, z: 435.536591, o: 4.696354 }),
        MakeDictionary<string, float>({ map: 726, x: 844.377686, y: 436.317352, z: 435.964661, o: 4.620953 }),
        MakeDictionary<string, float>({ map: 726, x: 877.807373, y: 417.879425, z: 436.151978, o: 2.824747 }),
        MakeDictionary<string, float>({ map: 726, x: 890.147156, y: 464.800812, z: 435.939056, o: 5.561073 }),
        MakeDictionary<string, float>({ map: 726, x: 919.214966, y: 427.820862, z: 437.411316, o: 1.689061 }),
        MakeDictionary<string, float>({ map: 726, x: 923.506165, y: 424.295135, z: 454.549652, o: 3.627427 }),
        MakeDictionary<string, float>({ map: 726, x: 947.817749, y: 469.594513, z: 433.846283, o: 3.705181 }),
        MakeDictionary<string, float>({ map: 726, x: 957.394287, y: 430.250153, z: 437.107239, o: 1.778599 }),
        MakeDictionary<string, float>({ map: 726, x: 941.025513, y: 497.968323, z: 436.950745, o: 4.436385 }),
        MakeDictionary<string, float>({ map: 726, x: 937.447510, y: 499.298248, z: 454.089874, o: 0.392413 }),
        MakeDictionary<string, float>({ map: 726, x: 980.939148, y: 444.801910, z: 434.477020, o: 2.220860 }),
        MakeDictionary<string, float>({ map: 726, x: 1007.436951, y: 439.816376, z: 437.977142, o: 4.305649 }),
        MakeDictionary<string, float>({ map: 726, x: 990.994934, y: 395.795410, z: 433.533417, o: 1.141586 }),
        MakeDictionary<string, float>({ map: 726, x: 1020.424194, y: 397.630585, z: 433.486969, o: 2.495306 }),
        MakeDictionary<string, float>({ map: 726, x: 1014.194031, y: 360.941589, z: 433.424713, o: 1.293648 }),
        MakeDictionary<string, float>({ map: 726, x: 989.365173, y: 350.658173, z: 436.674530, o: 0.028587 }),
        MakeDictionary<string, float>({ map: 726, x: 1016.114258, y: 299.524078, z: 433.508270, o: 2.539454 }),
        MakeDictionary<string, float>({ map: 726, x: 992.620667, y: 301.821808, z: 434.782532, o: 0.688749 }),
        MakeDictionary<string, float>({ map: 726, x: 1045.435791, y: 327.270203, z: 433.504791, o: 1.593878 }),
        MakeDictionary<string, float>({ map: 726, x: 1065.510254, y: 338.672333, z: 433.374908, o: 2.502539 }),
        MakeDictionary<string, float>({ map: 726, x: 1047.301758, y: 385.000244, z: 433.443726, o: 2.910511 }),
        MakeDictionary<string, float>({ map: 726, x: 1116.658081, y: 344.917053, z: 455.343719, o: 3.088533 }),
        MakeDictionary<string, float>({ map: 726, x: 1118.757446, y: 367.218475, z: 455.343719, o: 3.047735 }),
        MakeDictionary<string, float>({ map: 726, x: 1115.441895, y: 396.603546, z: 455.343719, o: 3.295921 }),
        MakeDictionary<string, float>({ map: 726, x: 1157.599854, y: 367.291016, z: 444.428680, o: 3.091946 }),
        MakeDictionary<string, float>({ map: 726, x: 1158.781738, y: 343.605682, z: 444.428680, o: 1.819821 }),
        MakeDictionary<string, float>({ map: 726, x: 1114.898926, y: 350.322723, z: 444.428589, o: 6.148458 }),
        MakeDictionary<string, float>({ map: 726, x: 1112.631836, y: 374.261261, z: 444.428802, o: 5.024682 }),
        MakeDictionary<string, float>({ map: 726, x: 1115.711548, y: 394.443817, z: 444.428802, o: 5.458613 }),
        MakeDictionary<string, float>({ map: 726, x: 1158.299194, y: 389.325897, z: 433.552856, o: 2.995953 }),
        MakeDictionary<string, float>({ map: 726, x: 1157.386719, y: 357.161072, z: 433.533966, o: 1.686736 }),
        MakeDictionary<string, float>({ map: 726, x: 1165.489990, y: 341.538574, z: 433.535828, o: 2.139958 }),
        MakeDictionary<string, float>({ map: 726, x: 1130.978882, y: 361.742462, z: 433.547028, o: 0.878959 }),
        MakeDictionary<string, float>({ map: 726, x: 1138.753052, y: 343.692749, z: 433.556458, o: 1.535422 }),
        MakeDictionary<string, float>({ map: 726, x: 1168.421753, y: 381.023956, z: 425.318176, o: 4.548687 }),
        MakeDictionary<string, float>({ map: 726, x: 1149.994263, y: 353.611725, z: 425.318176, o: 0.908934 }),
        MakeDictionary<string, float>({ map: 726, x: 1130.300781, y: 366.086395, z: 425.318176, o: 0.322460 }),
        MakeDictionary<string, float>({ map: 726, x: 1112.214233, y: 349.560425, z: 425.318176, o: 0.082261 }),
        MakeDictionary<string, float>({ map: 726, x: 1129.021240, y: 336.099304, z: 425.318176, o: 2.359479 }),
        MakeDictionary<string, float>({ map: 726, x: 1116.988770, y: 381.515472, z: 425.318176, o: 4.434412 }),
        MakeDictionary<string, float>({ map: 726, x: 1128.549316, y: 458.987946, z: 433.604370, o: 5.391700 }),
        MakeDictionary<string, float>({ map: 726, x: 1104.869019, y: 438.451752, z: 437.530701, o: 0.410316 }),
        MakeDictionary<string, float>({ map: 726, x: 1136.162598, y: 476.269196, z: 433.579773, o: 5.332359 }),
        MakeDictionary<string, float>({ map: 726, x: 1173.215942, y: 506.300537, z: 437.903809, o: 4.197457 }),
        MakeDictionary<string, float>({ map: 726, x: 1179.287354, y: 475.774170, z: 434.592194, o: 3.833991 }),
        MakeDictionary<string, float>({ map: 726, x: 1166.766357, y: 422.117126, z: 433.570526, o: 1.197015 }),
        MakeDictionary<string, float>({ map: 726, x: 1206.870483, y: 410.155731, z: 435.481781, o: 2.124221 }),
        MakeDictionary<string, float>({ map: 726, x: 1271.811646, y: 425.188873, z: 433.458344, o: 3.144152 }),
        MakeDictionary<string, float>({ map: 726, x: 1256.147705, y: 462.647461, z: 433.462433, o: 2.899374 }),
        MakeDictionary<string, float>({ map: 726, x: 1298.631714, y: 452.234070, z: 436.732483, o: 3.185390 }),
        MakeDictionary<string, float>({ map: 726, x: 1302.270996, y: 435.977997, z: 437.135681, o: 3.845562 }),
        MakeDictionary<string, float>({ map: 726, x: 1351.492554, y: 407.756897, z: 436.925385, o: 4.587332 }),
        MakeDictionary<string, float>({ map: 726, x: 1351.195679, y: 354.617188, z: 436.530029, o: 1.694451 }),
        MakeDictionary<string, float>({ map: 726, x: 1211.669800, y: 330.081299, z: 436.685791, o: 1.672331 }),
        MakeDictionary<string, float>({ map: 726, x: 1196.783325, y: 330.297028, z: 438.909180, o: 6.219785 }),
        MakeDictionary<string, float>({ map: 726, x: 1212.558838, y: 329.983673, z: 453.825012, o: 3.359409 }),
        MakeDictionary<string, float>({ map: 726, x: 1167.494751, y: 395.862305, z: 455.343781, o: 3.570806 }),
        MakeDictionary<string, float>({ map: 726, x: 1166.322754, y: 335.295227, z: 455.343781, o: 2.662139 }),
        MakeDictionary<string, float>({ map: 726, x: 916.420532, y: 482.350037, z: 435.139160, o: 4.910127 }),
        MakeDictionary<string, float>({ map: 726, x: 938.188843, y: 413.273102, z: 434.003326, o: 1.797986 }),
        MakeDictionary<string, float>({ map: 726, x: 1048.462646, y: 308.169037, z: 434.213898, o: 3.689915 }),
        MakeDictionary<string, float>({ map: 726, x: 1071.879272, y: 289.803619, z: 436.970703, o: 2.896223 }),
        MakeDictionary<string, float>({ map: 726, x: 1072.846313, y: 292.835358, z: 454.109863, o: 4.876306 }),
        MakeDictionary<string, float>({ map: 726, x: 1072.759766, y: 250.821106, z: 437.801666, o: 2.651005 }),
        MakeDictionary<string, float>({ map: 726, x: 1033.533936, y: 252.967621, z: 433.504456, o: 0.258816 }),
        MakeDictionary<string, float>({ map: 726, x: 996.248779, y: 249.319946, z: 433.393280, o: 1.434946 }),
        MakeDictionary<string, float>({ map: 726, x: 995.185059, y: 215.899918, z: 433.365112, o: 1.616674 }),
        MakeDictionary<string, float>({ map: 726, x: 945.205261, y: 216.646683, z: 437.361725, o: 0.058968 }),
        MakeDictionary<string, float>({ map: 726, x: 954.035156, y: 249.410065, z: 436.501404, o: 5.196124 }),
        MakeDictionary<string, float>({ map: 726, x: 951.794434, y: 250.365295, z: 453.640503, o: 0.711722 }),
        MakeDictionary<string, float>({ map: 726, x: 1075.656494, y: 223.068878, z: 437.102753, o: 3.672149 }),
        MakeDictionary<string, float>({ map: 726, x: 1099.501831, y: 175.245422, z: 435.744934, o: 3.130674 }),
        MakeDictionary<string, float>({ map: 726, x: 1119.427490, y: 176.771011, z: 436.385101, o: 3.123256 }),
        MakeDictionary<string, float>({ map: 726, x: 1096.050293, y: 146.840424, z: 436.891632, o: 2.221510 }),
        MakeDictionary<string, float>({ map: 726, x: 1027.186035, y: 157.227676, z: 432.774353, o: 1.550215 }),
        MakeDictionary<string, float>({ map: 726, x: 1016.644043, y: 125.708641, z: 421.292267, o: 2.106538 }),
        MakeDictionary<string, float>({ map: 726, x: 1058.835449, y: 115.887405, z: 421.955383, o: 3.000364 }),
        MakeDictionary<string, float>({ map: 726, x: 998.459900, y: 90.419762, z: 421.045013, o: 0.419023 }),
        MakeDictionary<string, float>({ map: 726, x: 1024.709717, y: 62.234104, z: 428.336853, o: 1.101448 }),
        MakeDictionary<string, float>({ map: 726, x: 1000.702332, y: 58.177578, z: 421.051666, o: 1.609125 }),
        MakeDictionary<string, float>({ map: 726, x: 1002.088257, y: 29.442327, z: 424.657410, o: 2.395832 }),
        MakeDictionary<string, float>({ map: 726, x: 962.443542, y: 123.010742, z: 424.132172, o: 4.647091 }),
        MakeDictionary<string, float>({ map: 726, x: 926.261230, y: 43.069626, z: 421.059296, o: 0.489490 }),
        MakeDictionary<string, float>({ map: 726, x: 881.423950, y: 114.722984, z: 435.370239, o: 0.096355 }),
        MakeDictionary<string, float>({ map: 726, x: 876.329773, y: 140.659592, z: 435.978180, o: 5.392990 }),
        MakeDictionary<string, float>({ map: 726, x: 837.870789, y: 149.159729, z: 431.796844, o: 5.700827 }),
        MakeDictionary<string, float>({ map: 726, x: 818.136230, y: 181.821274, z: 434.086548, o: 5.311397 }),
        MakeDictionary<string, float>({ map: 726, x: 869.635742, y: -13.515638, z: 421.604675, o: 0.286571 }),
        MakeDictionary<string, float>({ map: 726, x: 820.508667, y: -46.661270, z: 421.905792, o: 0.742760 }),
        MakeDictionary<string, float>({ map: 726, x: 817.566895, y: -23.648722, z: 421.109100, o: 0.242068 }),
        MakeDictionary<string, float>({ map: 726, x: 798.765747, y: -34.098488, z: 424.097778, o: 0.676003 }),
        MakeDictionary<string, float>({ map: 726, x: 786.035889, y: 3.275676, z: 421.312256, o: 5.101066 }),
        MakeDictionary<string, float>({ map: 726, x: 762.149170, y: -19.026934, z: 421.507782, o: 0.920783 }),
        MakeDictionary<string, float>({ map: 726, x: 748.951599, y: 4.713018, z: 421.990662, o: 5.601754 }),
        MakeDictionary<string, float>({ map: 726, x: 714.770874, y: -11.009550, z: 421.266510, o: 0.360752 }),
        MakeDictionary<string, float>({ map: 726, x: 717.351624, y: 31.569349, z: 422.326538, o: 5.078811 }),
        MakeDictionary<string, float>({ map: 726, x: 672.351318, y: 27.301126, z: 422.593719, o: 6.054235 }),
        MakeDictionary<string, float>({ map: 726, x: 638.938293, y: 3.270348, z: 422.237305, o: 0.097432 }),
        MakeDictionary<string, float>({ map: 726, x: 643.545654, y: 4.502507, z: 438.272095, o: 3.575884 }),
        MakeDictionary<string, float>({ map: 726, x: 615.844482, y: 149.052368, z: 421.747650, o: 5.104346 }),
        MakeDictionary<string, float>({ map: 726, x: 607.871826, y: 106.155449, z: 422.171021, o: 5.712596 }),
        MakeDictionary<string, float>({ map: 726, x: 594.095581, y: 69.225754, z: 421.197937, o: 0.130378 }),
        MakeDictionary<string, float>({ map: 726, x: 597.560486, y: 36.327316, z: 421.288391, o: 0.497550 }),
        MakeDictionary<string, float>({ map: 726, x: 594.934692, y: -19.262842, z: 421.127563, o: 1.176267 }),
        MakeDictionary<string, float>({ map: 726, x: 621.733093, y: -58.869030, z: 421.215118, o: 1.714051 }),
        MakeDictionary<string, float>({ map: 726, x: 664.109070, y: -94.812752, z: 421.178070, o: 1.458144 }),
        MakeDictionary<string, float>({ map: 726, x: 691.174805, y: -102.480461, z: 421.970886, o: 1.309792 }),
        MakeDictionary<string, float>({ map: 726, x: 814.771423, y: -128.505142, z: 424.376099, o: 2.029297 }),
        MakeDictionary<string, float>({ map: 726, x: 792.260315, y: -99.555031, z: 421.690491, o: 0.734920 }),
        MakeDictionary<string, float>({ map: 726, x: 842.267151, y: -125.484177, z: 421.127045, o: 0.226812 }),
        MakeDictionary<string, float>({ map: 726, x: 871.233643, y: -118.474281, z: 422.041351, o: 0.330660 }),
        MakeDictionary<string, float>({ map: 726, x: 929.649170, y: -87.379242, z: 423.258759, o: 0.901819 }),
        MakeDictionary<string, float>({ map: 726, x: 949.340271, y: -56.881454, z: 421.411255, o: 1.224487 }),
        MakeDictionary<string, float>({ map: 726, x: 958.771545, y: -23.183186, z: 421.061249, o: 1.306082 }),


    ],

]
const mobIDs: TSArray<uint32> = [
    37478,
    13339,
    17705,
    36863,
    30704,
]

const bossSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({ map: 726, x: 1093.482300, y: 359.340759, z: 425.318176, o: 0.228170 }),
        MakeDictionary<string, float>({ map: 726, x: 1366.476807, y: 382.281616, z: 433.971161, o: 3.189238 }),
        MakeDictionary<string, float>({ map: 726, x: 961.090393, y: 63.617268, z: 415.238464, o: 0.552549 }),
        MakeDictionary<string, float>({ map: 726, x: 751.267822, y: 229.190643, z: 421.044891, o: 5.393428 }),
        MakeDictionary<string, float>({ map: 726, x: 747.671631, y: -96.903854, z: 421.875916, o: 1.372842 }),
    ]

]

const bossIDs: TSArray<uint32> = [
    GetID("creature_template", "minecraft-mod", "torghastboss1"),
    GetID("creature_template", "minecraft-mod", "torghastboss2"),
    GetID("creature_template", "minecraft-mod", "torghastboss3"),
    GetID("creature_template", "minecraft-mod", "torghastboss5"),
]

const playerSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 726, x: 908.864197, y: 159.892090, z: 413.189667, o: 1.254526 },),
]

const rewardID = 19019
const prestigeMult = 9//this is 1 lower than real value, due to dieSides. 9 is 10% hp+damage+haste per prestige

export function dungeon1(events: TSEventHandlers) {
    for (let i = 0; i < mobIDs.length; i++) {
        setupCreaturePrestigeScripts(events, mobIDs[i])
    }

    for (let i = 0; i < bossIDs.length; i++) {
        setupCreaturePrestigeScripts(events, bossIDs[i])
        setupLastBossCheck(events, bossIDs[i])
    }
    //make a bossMinions loop for any spawned by spell creatures

    events.MapID.OnPlayerEnter(726, (map, player) => {
        if (!map.GetBool('isSpawned', false)) {
            map.SetBool('isSpawned', true)
            map.SetUInt('rewardID', rewardID)
            map.SetUInt('prestige', 0)
            let mapChoice = getRandomInt(mobSpawnCoords.length)
            spawnMap(map, bossSpawnCoords[mapChoice], bossIDs, mobSpawnCoords[mapChoice], mobIDs)
        }
    })

    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#cc")) {
            let mapChoice = getRandomInt(mobSpawnCoords.length)
            resetGroup(player, playerSpawnCoords, bossSpawnCoords[mapChoice], bossIDs, mobSpawnCoords[mapChoice], mobIDs)
        }
    })
    events.MapID.OnPlayerLeave(726, (map, player) => {
        removePlayerBuffs(player)
        let curPrestige: uint32 = player.GetUInt('prestige', 0)
        let rewCount: uint32 = <uint32>(curPrestige * curPrestige) / 10
        if (rewCount > 0) {
            player.SendAreaTriggerMessage('it seems you did not fare so well, have ' + rewCount + ' Anima for your attempt.')
            player.AddItem(rewardID, rewCount)
        }
        player.SetUInt('prestige', 0)
    })
}

function addPrestigeBuffToCreature(mob: TSCreature) {
    let map = mob.GetMap()
    let prestige = map.GetUInt('prestige',0)
    let pcount = map.GetPlayerCount()
    mob.CastCustomSpell(mob, prestigeSpell, true, prestigeMult * prestige * pcount, prestigeMult * prestige * pcount, prestigeMult * prestige * pcount, CreateItem(19019, 1), mob.GetGUID())
}

function setupCreaturePrestigeScripts(events: TSEventHandlers, mobID: number) {
    events.CreatureID.OnCreate(mobID, (creature, cancel) => {
        addPrestigeBuffToCreature(creature)
    })
    events.CreatureID.OnReachedHome(mobID, (creature) => {
        addPrestigeBuffToCreature(creature)
    })
}
