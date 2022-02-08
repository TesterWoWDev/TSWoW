import { getRandomInt, prestigeSpell, removePlayerBuffs, resetGroup, rewardGroup, setupLastBossCheck, spawnMap } from "./torghast-master"
const miniMobSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({map:726,x:916.218628,y:193.648834,z:411.356812,o:4.694665}),
        MakeDictionary<string, float>({map:726,x:914.455994,y:210.925278,z:412.280853,o:1.690515}),
        MakeDictionary<string, float>({map:726,x:919.747742,y:228.960678,z:411.628601,o:1.590377}),
        MakeDictionary<string, float>({map:726,x:900.994507,y:241.893875,z:411.443787,o:1.857412}),
        MakeDictionary<string, float>({map:726,x:907.488892,y:288.477539,z:421.014923,o:1.404936}),
        MakeDictionary<string, float>({map:726,x:924.745544,y:289.103943,z:421.681946,o:1.063722}),
        MakeDictionary<string, float>({map:726,x:897.748718,y:311.038879,z:421.829834,o:2.532418}),
        MakeDictionary<string, float>({map:726,x:855.035156,y:328.902618,z:421.398285,o:2.180080}),
        MakeDictionary<string, float>({map:726,x:833.026367,y:356.934570,z:428.663055,o:1.401228}),
        MakeDictionary<string, float>({map:726,x:842.532349,y:413.987030,z:434.580627,o:1.249166}),
        MakeDictionary<string, float>({map:726,x:881.948669,y:417.456543,z:435.187225,o:1.100813}),
        MakeDictionary<string, float>({map:726,x:901.144104,y:447.058411,z:434.184845,o:0.225531}),
        MakeDictionary<string, float>({map:726,x:931.252136,y:426.252075,z:434.173218,o:5.774367}),
        MakeDictionary<string, float>({map:726,x:969.986816,y:404.736725,z:434.149567,o:6.045113}),
        MakeDictionary<string, float>({map:726,x:1005.765198,y:396.378937,z:433.753998,o:0.177317}),
        MakeDictionary<string, float>({map:726,x:1012.806580,y:453.342743,z:433.680634,o:1.887086}),
        MakeDictionary<string, float>({map:726,x:1008.240112,y:339.833801,z:433.371490,o:4.475844}),
        MakeDictionary<string, float>({map:726,x:998.267822,y:284.082947,z:433.556793,o:4.179138}),
        MakeDictionary<string, float>({map:726,x:967.260620,y:271.589325,z:433.626678,o:3.352068}),
        MakeDictionary<string, float>({map:726,x:968.202026,y:226.968964,z:433.258270,o:5.803609}),
        MakeDictionary<string, float>({map:726,x:1010.523743,y:208.914413,z:433.382202,o:6.181911}),
        MakeDictionary<string, float>({map:726,x:1072.710693,y:202.978607,z:435.170471,o:5.584788}),
        MakeDictionary<string, float>({map:726,x:1021.888855,y:153.658203,z:432.696381,o:3.711825}),
        MakeDictionary<string, float>({map:726,x:1015.883850,y:111.680412,z:424.630371,o:5.121183}),
        MakeDictionary<string, float>({map:726,x:968.269958,y:91.760727,z:421.090149,o:3.170339}),
        MakeDictionary<string, float>({map:726,x:920.554077,y:94.883270,z:422.247986,o:2.762367}),
        MakeDictionary<string, float>({map:726,x:870.593933,y:128.968796,z:436.661774,o:2.391483}),
        MakeDictionary<string, float>({map:726,x:795.243835,y:190.232452,z:427.454102,o:3.073908}),
        MakeDictionary<string, float>({map:726,x:760.749329,y:224.024689,z:422.994537,o:1.842577}),
        MakeDictionary<string, float>({map:726,x:759.802979,y:274.323059,z:452.161774,o:1.000673}),
        MakeDictionary<string, float>({map:726,x:815.053589,y:265.615387,z:453.336884,o:5.919010}),
        MakeDictionary<string, float>({map:726,x:920.062744,y:65.344910,z:425.027954,o:5.299634}),
        MakeDictionary<string, float>({map:726,x:958.131348,y:1.560588,z:421.276978,o:4.016375}),
        MakeDictionary<string, float>({map:726,x:892.209534,y:-14.772601,z:424.247253,o:3.374749}),
        MakeDictionary<string, float>({map:726,x:826.144226,y:-21.827829,z:421.044891,o:3.085459}),
        MakeDictionary<string, float>({map:726,x:776.351135,y:-8.403852,z:421.044830,o:2.770208}),
        MakeDictionary<string, float>({map:726,x:711.072754,y:22.120253,z:421.049713,o:2.414160}),
        MakeDictionary<string, float>({map:726,x:672.615845,y:-7.716150,z:422.415741,o:3.782716}),
        MakeDictionary<string, float>({map:726,x:682.349304,y:-85.570618,z:421.223969,o:5.032591}),
        MakeDictionary<string, float>({map:726,x:778.939636,y:-96.199554,z:421.130402,o:5.822570}),
    ]
]
const miniMobIDs: TSArray<uint32> = [
    GetID("creature_template", "minecraft-mod", "torghastminimob1"),
]

const mobSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({map:726,x:918.491516,y:201.808502,z:411.649323,o:4.695014}),
        MakeDictionary<string, float>({map:726,x:909.665344,y:216.667679,z:412.456390,o:4.824824}),
        MakeDictionary<string, float>({map:726,x:904.977234,y:236.451248,z:411.557831,o:4.921253}),
        MakeDictionary<string, float>({map:726,x:914.667419,y:252.817001,z:411.478943,o:4.695009}),
        MakeDictionary<string, float>({map:726,x:902.885376,y:260.893005,z:411.393219,o:4.954628}),
        MakeDictionary<string, float>({map:726,x:924.200500,y:294.012909,z:421.751862,o:2.792819}),
        MakeDictionary<string, float>({map:726,x:914.149963,y:303.686737,z:421.075714,o:4.257807}),
        MakeDictionary<string, float>({map:726,x:889.748901,y:311.209808,z:421.448486,o:5.607821}),
        MakeDictionary<string, float>({map:726,x:882.271179,y:327.916779,z:421.077911,o:3.920305}),
        MakeDictionary<string, float>({map:726,x:865.360413,y:338.556366,z:422.314301,o:5.210976}),
        MakeDictionary<string, float>({map:726,x:851.194092,y:323.188232,z:421.221436,o:0.110911}),
        MakeDictionary<string, float>({map:726,x:832.274902,y:354.494415,z:428.678528,o:5.915658}),
        MakeDictionary<string, float>({map:726,x:841.606384,y:396.884155,z:435.780396,o:4.291193}),
        MakeDictionary<string, float>({map:726,x:803.516113,y:344.465240,z:434.462097,o:1.999146}),
        MakeDictionary<string, float>({map:726,x:801.409607,y:368.832977,z:435.002472,o:0.860537}),
        MakeDictionary<string, float>({map:726,x:785.612366,y:392.285645,z:434.948120,o:4.347266}),
        MakeDictionary<string, float>({map:726,x:809.192261,y:410.153992,z:435.720764,o:5.979160}),
        MakeDictionary<string, float>({map:726,x:857.156372,y:447.739288,z:434.243988,o:4.540137}),
        MakeDictionary<string, float>({map:726,x:857.055847,y:405.189850,z:435.081024,o:0.323207}),
        MakeDictionary<string, float>({map:726,x:871.657593,y:433.929657,z:434.112396,o:3.772853}),
        MakeDictionary<string, float>({map:726,x:903.520203,y:442.523987,z:434.936096,o:3.023670}),
        MakeDictionary<string, float>({map:726,x:912.952698,y:469.942627,z:433.834412,o:4.325469}),
        MakeDictionary<string, float>({map:726,x:941.697571,y:416.565948,z:433.855865,o:2.222567}),
        MakeDictionary<string, float>({map:726,x:954.924744,y:408.434570,z:433.780273,o:2.289326}),
        MakeDictionary<string, float>({map:726,x:969.656982,y:400.140503,z:433.855682,o:2.430261}),
        MakeDictionary<string, float>({map:726,x:974.349548,y:373.129303,z:433.459442,o:1.095519}),
        MakeDictionary<string, float>({map:726,x:919.429749,y:425.946930,z:437.410583,o:1.460299}),
        MakeDictionary<string, float>({map:726,x:939.612122,y:497.609741,z:436.950714,o:4.505681}),
        MakeDictionary<string, float>({map:726,x:958.629944,y:431.356750,z:437.285522,o:1.938739}),
        MakeDictionary<string, float>({map:726,x:982.506897,y:436.601074,z:435.758667,o:2.127891}),
        MakeDictionary<string, float>({map:726,x:1007.157288,y:440.490631,z:437.144928,o:3.997573}),
        MakeDictionary<string, float>({map:726,x:1002.890198,y:400.642456,z:434.048126,o:1.538625}),
        MakeDictionary<string, float>({map:726,x:1028.229492,y:418.368225,z:437.074646,o:4.275739}),
        MakeDictionary<string, float>({map:726,x:989.662415,y:349.746765,z:436.912354,o:6.219597}),
        MakeDictionary<string, float>({map:726,x:1000.938232,y:335.812225,z:433.535034,o:0.837653}),
        MakeDictionary<string, float>({map:726,x:1034.705078,y:336.134918,z:433.403748,o:2.558548}),
        MakeDictionary<string, float>({map:726,x:1063.246460,y:346.449005,z:433.399536,o:2.043022}),
        MakeDictionary<string, float>({map:726,x:1065.035767,y:373.666504,z:433.536743,o:3.055534}),
        MakeDictionary<string, float>({map:726,x:1117.078735,y:389.842316,z:455.343689,o:3.107458}),
        MakeDictionary<string, float>({map:726,x:1114.730713,y:366.626221,z:455.343689,o:3.118585}),
        MakeDictionary<string, float>({map:726,x:1115.172729,y:341.987122,z:455.343689,o:3.166799}),
        MakeDictionary<string, float>({map:726,x:1136.804932,y:476.236786,z:433.594177,o:5.451439}),
        MakeDictionary<string, float>({map:726,x:1169.793579,y:430.134094,z:433.582336,o:0.518701}),
        MakeDictionary<string, float>({map:726,x:1187.136963,y:385.889038,z:433.838196,o:1.316102}),
        MakeDictionary<string, float>({map:726,x:1210.357422,y:332.375305,z:437.340088,o:1.472305}),
        MakeDictionary<string, float>({map:726,x:1238.338135,y:361.485779,z:433.564911,o:3.070810}),
        MakeDictionary<string, float>({map:726,x:1284.579468,y:389.152740,z:433.435120,o:3.601174}),
        MakeDictionary<string, float>({map:726,x:1303.455566,y:435.979248,z:436.896545,o:3.768070}),
        MakeDictionary<string, float>({map:726,x:1296.998047,y:452.141876,z:436.554260,o:3.334137}),
        MakeDictionary<string, float>({map:726,x:1275.919312,y:439.853516,z:433.458282,o:3.730980}),
        MakeDictionary<string, float>({map:726,x:1249.976685,y:464.428711,z:433.462189,o:3.374935}),
        MakeDictionary<string, float>({map:726,x:1272.863525,y:481.043579,z:436.685028,o:3.571939}),
        MakeDictionary<string, float>({map:726,x:1351.025024,y:406.798340,z:436.865906,o:4.718399}),
        MakeDictionary<string, float>({map:726,x:1350.815063,y:356.261108,z:436.886749,o:1.640073}),
        MakeDictionary<string, float>({map:726,x:933.521057,y:457.607086,z:434.875702,o:3.628612}),
        MakeDictionary<string, float>({map:726,x:961.791382,y:470.833862,z:435.453033,o:3.810342}),
        MakeDictionary<string, float>({map:726,x:997.043579,y:463.956207,z:433.606171,o:3.710202}),
        MakeDictionary<string, float>({map:726,x:1033.642090,y:380.216400,z:434.181641,o:2.797829}),
        MakeDictionary<string, float>({map:726,x:1210.672974,y:418.395630,z:433.517609,o:2.894256}),
        MakeDictionary<string, float>({map:726,x:1196.977051,y:457.087524,z:433.480499,o:2.716233}),
        MakeDictionary<string, float>({map:726,x:1168.067627,y:472.491608,z:433.989655,o:3.554427}),
        MakeDictionary<string, float>({map:726,x:1173.035645,y:505.992889,z:437.190430,o:4.329572}),
        MakeDictionary<string, float>({map:726,x:1160.230835,y:365.521179,z:444.428528,o:3.142747}),
        MakeDictionary<string, float>({map:726,x:1156.833862,y:341.948212,z:444.428528,o:1.763065}),
        MakeDictionary<string, float>({map:726,x:1114.948975,y:347.050873,z:444.428772,o:6.221510}),
        MakeDictionary<string, float>({map:726,x:1114.562866,y:370.119324,z:444.428680,o:4.882626}),
        MakeDictionary<string, float>({map:726,x:1117.911499,y:392.462189,z:444.428680,o:4.808447}),
        MakeDictionary<string, float>({map:726,x:1153.833984,y:389.672791,z:433.551331,o:2.983702}),
        MakeDictionary<string, float>({map:726,x:1137.620239,y:373.870300,z:433.557770,o:0.932722}),
        MakeDictionary<string, float>({map:726,x:1135.784546,y:349.683533,z:433.551575,o:1.522427}),
        MakeDictionary<string, float>({map:726,x:1160.645386,y:343.171112,z:433.536926,o:1.707868}),
        MakeDictionary<string, float>({map:726,x:1164.133179,y:383.309052,z:425.318359,o:4.860369}),
        MakeDictionary<string, float>({map:726,x:1148.935913,y:357.785706,z:425.318359,o:1.036571}),
        MakeDictionary<string, float>({map:726,x:1129.237549,y:359.030029,z:425.318359,o:0.257718}),
        MakeDictionary<string, float>({map:726,x:1111.504272,y:336.988007,z:425.318359,o:1.055115}),
        MakeDictionary<string, float>({map:726,x:1107.940186,y:382.991333,z:425.320282,o:5.227975}),
        MakeDictionary<string, float>({map:726,x:1133.516846,y:382.889374,z:425.320282,o:3.054602}),
        MakeDictionary<string, float>({map:726,x:994.836487,y:296.309174,z:434.624023,o:0.932300}),
        MakeDictionary<string, float>({map:726,x:1020.676147,y:292.911835,z:433.620514,o:2.286021}),
        MakeDictionary<string, float>({map:726,x:1046.436279,y:305.907410,z:434.063904,o:3.398668}),
        MakeDictionary<string, float>({map:726,x:1070.662842,y:291.381104,z:436.554626,o:3.079710}),
        MakeDictionary<string, float>({map:726,x:1053.914917,y:274.135315,z:433.472839,o:1.688904}),
        MakeDictionary<string, float>({map:726,x:1070.818237,y:251.991409,z:437.029022,o:2.642075}),
        MakeDictionary<string, float>({map:726,x:1046.950317,y:251.167984,z:433.944550,o:1.251265}),
        MakeDictionary<string, float>({map:726,x:1076.142578,y:223.840012,z:437.103821,o:3.491403}),
        MakeDictionary<string, float>({map:726,x:1057.549438,y:214.223175,z:433.552063,o:3.502529}),
        MakeDictionary<string, float>({map:726,x:1048.387085,y:232.889481,z:440.177582,o:1.614737}),
        MakeDictionary<string, float>({map:726,x:997.770203,y:268.884827,z:433.507263,o:1.377372}),
        MakeDictionary<string, float>({map:726,x:996.045166,y:244.024796,z:433.373444,o:1.629570}),
        MakeDictionary<string, float>({map:726,x:1006.338013,y:225.992920,z:433.353271,o:1.993035}),
        MakeDictionary<string, float>({map:726,x:991.657227,y:221.340576,z:433.945709,o:1.588773}),
        MakeDictionary<string, float>({map:726,x:975.669678,y:215.852707,z:433.308929,o:0.223925}),
        MakeDictionary<string, float>({map:726,x:945.209595,y:215.363342,z:437.361816,o:0.220217}),
        MakeDictionary<string, float>({map:726,x:955.475586,y:248.743317,z:436.501343,o:4.986491}),
        MakeDictionary<string, float>({map:726,x:1016.095276,y:199.112488,z:433.409882,o:1.652261}),
        MakeDictionary<string, float>({map:726,x:1024.786987,y:165.609314,z:433.248779,o:1.648550}),
        MakeDictionary<string, float>({map:726,x:1096.597778,y:148.897583,z:437.184784,o:2.282761}),
        MakeDictionary<string, float>({map:726,x:1106.546753,y:175.155014,z:435.744934,o:3.169171}),
        MakeDictionary<string, float>({map:726,x:1118.674683,y:176.231506,z:436.415955,o:3.120958}),
        MakeDictionary<string, float>({map:726,x:1010.499939,y:125.879753,z:422.353668,o:1.626299}),
        MakeDictionary<string, float>({map:726,x:1028.641113,y:118.862457,z:421.044769,o:2.635101}),
        MakeDictionary<string, float>({map:726,x:1049.940552,y:117.442070,z:422.087494,o:3.158047}),
        MakeDictionary<string, float>({map:726,x:1007.693420,y:97.575867,z:421.044708,o:1.014344}),
        MakeDictionary<string, float>({map:726,x:1026.192261,y:73.404068,z:428.420319,o:1.852541}),
        MakeDictionary<string, float>({map:726,x:1042.055054,y:63.608849,z:432.052094,o:2.260510}),
        MakeDictionary<string, float>({map:726,x:1028.012695,y:58.638454,z:428.312836,o:2.126993}),
        MakeDictionary<string, float>({map:726,x:977.437805,y:139.770874,z:423.399811,o:5.824696}),
        MakeDictionary<string, float>({map:726,x:958.696350,y:93.190964,z:421.117798,o:6.147367}),
        MakeDictionary<string, float>({map:726,x:962.296021,y:123.381416,z:424.132202,o:4.522899}),
        MakeDictionary<string, float>({map:726,x:919.936646,y:86.418701,z:422.371368,o:5.876625}),
        MakeDictionary<string, float>({map:726,x:931.728149,y:48.321323,z:421.066437,o:6.136242}),
        MakeDictionary<string, float>({map:726,x:951.369995,y:6.204334,z:421.174774,o:0.413084}),
        MakeDictionary<string, float>({map:726,x:972.964111,y:13.448792,z:421.065277,o:1.355126}),
        MakeDictionary<string, float>({map:726,x:984.816284,y:43.316269,z:421.148651,o:1.310620}),
        MakeDictionary<string, float>({map:726,x:1009.356445,y:369.357941,z:433.582306,o:1.598400}),
        MakeDictionary<string, float>({map:726,x:1150.533447,y:341.244019,z:455.343689,o:6.186088}),
        MakeDictionary<string, float>({map:726,x:1160.937988,y:392.420197,z:455.343689,o:0.351669}),
        MakeDictionary<string, float>({map:726,x:1146.752808,y:459.427155,z:433.663025,o:4.238519}),
        MakeDictionary<string, float>({map:726,x:1114.728516,y:455.239227,z:435.856262,o:6.282088}),
        MakeDictionary<string, float>({map:726,x:1197.779907,y:502.229553,z:433.531372,o:4.053080}),
        MakeDictionary<string, float>({map:726,x:1234.857178,y:524.581177,z:433.759155,o:3.418868}),
        MakeDictionary<string, float>({map:726,x:1323.682495,y:346.978058,z:435.781525,o:4.174464}),
        MakeDictionary<string, float>({map:726,x:1295.662842,y:320.058411,z:434.767639,o:2.957965}),
        MakeDictionary<string, float>({map:726,x:1258.423340,y:314.402588,z:434.903137,o:2.390513}),
        MakeDictionary<string, float>({map:726,x:1228.723999,y:307.878876,z:434.254913,o:2.368258}),
        MakeDictionary<string, float>({map:726,x:1195.286011,y:291.311981,z:433.464783,o:1.374295}),
        MakeDictionary<string, float>({map:726,x:1168.958130,y:299.547577,z:433.493805,o:0.918109}),
        MakeDictionary<string, float>({map:726,x:1206.835938,y:360.075775,z:433.625275,o:1.344625}),
        MakeDictionary<string, float>({map:726,x:1147.304932,y:398.078979,z:455.343719,o:3.477203}),
        MakeDictionary<string, float>({map:726,x:963.894653,y:282.014984,z:433.393768,o:0.071073}),
        MakeDictionary<string, float>({map:726,x:1062.602661,y:173.118912,z:433.518799,o:3.323801}),
        MakeDictionary<string, float>({map:726,x:885.473145,y:134.304016,z:435.902985,o:5.497611}),
        MakeDictionary<string, float>({map:726,x:857.325623,y:142.199585,z:433.106995,o:4.733595}),
        MakeDictionary<string, float>({map:726,x:850.957214,y:156.486710,z:431.856567,o:5.160111}),
        MakeDictionary<string, float>({map:726,x:831.671753,y:159.408737,z:431.678314,o:5.534705}),
        MakeDictionary<string, float>({map:726,x:816.151733,y:176.604004,z:433.845764,o:5.875917}),
        MakeDictionary<string, float>({map:726,x:857.558105,y:176.368439,z:459.877228,o:2.840396}),
        MakeDictionary<string, float>({map:726,x:845.633667,y:180.899994,z:452.802734,o:2.781054}),
        MakeDictionary<string, float>({map:726,x:831.012878,y:186.035538,z:443.254639,o:2.810725}),
        MakeDictionary<string, float>({map:726,x:860.329468,y:215.302322,z:457.889832,o:3.263203}),
        MakeDictionary<string, float>({map:726,x:838.349060,y:212.456497,z:447.193115,o:3.266912}),
        MakeDictionary<string, float>({map:726,x:850.696228,y:239.144073,z:462.292755,o:3.367054}),
        MakeDictionary<string, float>({map:726,x:839.151550,y:235.130386,z:454.319305,o:3.504281}),
        MakeDictionary<string, float>({map:726,x:838.272400,y:263.693634,z:458.402863,o:3.678597}),
        MakeDictionary<string, float>({map:726,x:825.175415,y:253.652328,z:447.869659,o:3.915963}),
        MakeDictionary<string, float>({map:726,x:813.894531,y:260.806427,z:449.795349,o:3.915965}),
        MakeDictionary<string, float>({map:726,x:800.859253,y:258.772552,z:450.181488,o:3.967889}),
        MakeDictionary<string, float>({map:726,x:809.046997,y:277.363434,z:461.324768,o:4.212675}),
        MakeDictionary<string, float>({map:726,x:815.369812,y:284.367676,z:462.385956,o:4.160752}),
        MakeDictionary<string, float>({map:726,x:782.036926,y:291.801483,z:458.365204,o:4.401824}),
        MakeDictionary<string, float>({map:726,x:771.657349,y:285.907593,z:454.230896,o:4.516798}),
        MakeDictionary<string, float>({map:726,x:769.766235,y:272.207794,z:448.584198,o:4.631773}),
        MakeDictionary<string, float>({map:726,x:758.140747,y:269.029144,z:449.097260,o:4.524216}),
        MakeDictionary<string, float>({map:726,x:750.513611,y:279.620087,z:451.442291,o:4.820922}),
        MakeDictionary<string, float>({map:726,x:732.247803,y:281.533173,z:458.110565,o:5.210351}),
        MakeDictionary<string, float>({map:726,x:728.725952,y:272.453339,z:455.046417,o:5.243730}),
        MakeDictionary<string, float>({map:726,x:736.716736,y:248.018494,z:444.679962,o:5.347578}),
        MakeDictionary<string, float>({map:726,x:727.051941,y:239.355011,z:447.116943,o:5.199227}),
        MakeDictionary<string, float>({map:726,x:705.706116,y:250.525818,z:461.372620,o:5.725883}),
        MakeDictionary<string, float>({map:726,x:698.162354,y:238.793839,z:457.789185,o:4.980408}),
        MakeDictionary<string, float>({map:726,x:697.132507,y:223.873108,z:453.052246,o:6.182071}),
        MakeDictionary<string, float>({map:726,x:708.547546,y:215.256790,z:448.619904,o:0.106580}),
        MakeDictionary<string, float>({map:726,x:716.534424,y:205.086105,z:444.869415,o:6.211741}),
        MakeDictionary<string, float>({map:726,x:725.173218,y:196.530151,z:440.368683,o:0.013859}),
        MakeDictionary<string, float>({map:726,x:695.905884,y:189.274139,z:456.713226,o:6.271083}),
        MakeDictionary<string, float>({map:726,x:711.716064,y:158.790436,z:457.260345,o:0.462627}),
        MakeDictionary<string, float>({map:726,x:722.608032,y:164.318253,z:451.661163,o:0.451500}),
        MakeDictionary<string, float>({map:726,x:739.434021,y:161.031708,z:445.929474,o:0.681447}),
        MakeDictionary<string, float>({map:726,x:717.907654,y:145.822815,z:459.802002,o:0.807544}),
        MakeDictionary<string, float>({map:726,x:733.106873,y:137.817535,z:455.447144,o:0.763039}),
        MakeDictionary<string, float>({map:726,x:754.339172,y:140.753510,z:450.545258,o:1.267440}),
        MakeDictionary<string, float>({map:726,x:767.708008,y:147.847946,z:445.905212,o:1.356452}),
        MakeDictionary<string, float>({map:726,x:787.515991,y:150.680786,z:446.172028,o:1.523349}),
        MakeDictionary<string, float>({map:726,x:786.558960,y:125.972961,z:459.763336,o:1.846020}),
        MakeDictionary<string, float>({map:726,x:821.321594,y:135.487030,z:459.786255,o:2.094512}),
        MakeDictionary<string, float>({map:726,x:810.622803,y:154.447372,z:444.191589,o:2.094512}),
        MakeDictionary<string, float>({map:726,x:796.025574,y:175.327362,z:424.665924,o:2.246574}),
        MakeDictionary<string, float>({map:726,x:812.442688,y:203.326492,z:427.597961,o:2.951255}),
        MakeDictionary<string, float>({map:726,x:809.455994,y:179.108353,z:434.263489,o:5.673531}),
        MakeDictionary<string, float>({map:726,x:889.970642,y:-23.411379,z:422.448273,o:0.894911}),
        MakeDictionary<string, float>({map:726,x:865.538818,y:-17.049540,z:421.049896,o:0.401638}),
        MakeDictionary<string, float>({map:726,x:834.605286,y:-9.335471,z:421.044891,o:1.354805}),
        MakeDictionary<string, float>({map:726,x:827.112976,y:-40.201687,z:421.045685,o:1.232414}),
        MakeDictionary<string, float>({map:726,x:799.696838,y:-35.455982,z:424.573395,o:0.995052}),
        MakeDictionary<string, float>({map:726,x:796.323303,y:-14.258781,z:421.047760,o:5.920807}),
        MakeDictionary<string, float>({map:726,x:763.473145,y:-11.285538,z:421.734741,o:0.824884}),
        MakeDictionary<string, float>({map:726,x:755.325806,y:8.643205,z:421.069519,o:6.051054}),
        MakeDictionary<string, float>({map:726,x:753.473145,y:29.846519,z:424.572510,o:4.408045}),
        MakeDictionary<string, float>({map:726,x:715.248657,y:17.519108,z:421.044830,o:0.031200}),
        MakeDictionary<string, float>({map:726,x:719.651611,y:-11.118552,z:421.219055,o:0.212935}),
        MakeDictionary<string, float>({map:726,x:688.193420,y:-21.410849,z:424.623871,o:1.243990}),
        MakeDictionary<string, float>({map:726,x:671.583496,y:26.270498,z:422.645386,o:5.665345}),
        MakeDictionary<string, float>({map:726,x:648.993774,y:4.689932,z:422.534515,o:6.221670}),
        MakeDictionary<string, float>({map:726,x:630.719482,y:3.979149,z:423.205353,o:6.247632}),
        MakeDictionary<string, float>({map:726,x:774.937439,y:-103.934235,z:421.162445,o:1.503603}),
        MakeDictionary<string, float>({map:726,x:815.489929,y:-127.638786,z:424.554443,o:2.301000}),
        MakeDictionary<string, float>({map:726,x:789.349731,y:-128.964081,z:424.598907,o:0.995496}),
        MakeDictionary<string, float>({map:726,x:707.344055,y:-91.308296,z:421.119995,o:6.277301}),
        MakeDictionary<string, float>({map:726,x:676.108582,y:-94.975845,z:421.118713,o:0.261150}),
        MakeDictionary<string, float>({map:726,x:598.150269,y:32.448387,z:421.249115,o:1.433139}),
        MakeDictionary<string, float>({map:726,x:599.232727,y:68.737488,z:421.190735,o:1.336710}),
        MakeDictionary<string, float>({map:726,x:618.270569,y:101.231979,z:421.286011,o:5.602295}),
        MakeDictionary<string, float>({map:726,x:651.098022,y:102.911278,z:421.990723,o:5.398309}),
        MakeDictionary<string, float>({map:726,x:643.180786,y:128.283203,z:421.652954,o:4.556409}),
        MakeDictionary<string, float>({map:726,x:596.276489,y:137.599930,z:421.300507,o:5.190620}),
        MakeDictionary<string, float>({map:726,x:759.898193,y:123.279076,z:458.302185,o:1.194617}),
        MakeDictionary<string, float>({map:726,x:780.476318,y:261.643127,z:445.404022,o:4.718437}),
        MakeDictionary<string, float>({map:726,x:825.675964,y:238.072769,z:443.063934,o:3.717057}),
        MakeDictionary<string, float>({map:726,x:734.073364,y:174.966446,z:440.679260,o:0.560844}),
        MakeDictionary<string, float>({map:726,x:879.983521,y:107.225929,z:436.275330,o:5.664621}),
        MakeDictionary<string, float>({map:726,x:910.371399,y:118.423355,z:429.709442,o:5.401294}),
        MakeDictionary<string, float>({map:726,x:964.807678,y:-27.952257,z:421.063416,o:1.554811}),
        MakeDictionary<string, float>({map:726,x:943.193604,y:-61.417683,z:421.115875,o:0.223344}),
        MakeDictionary<string, float>({map:726,x:917.606262,y:-93.371368,z:422.126068,o:0.668405}),
        MakeDictionary<string, float>({map:726,x:893.792358,y:-117.812111,z:423.114502,o:0.965546}),
        MakeDictionary<string, float>({map:726,x:646.140015,y:-77.590927,z:422.825897,o:2.578883}),
        MakeDictionary<string, float>({map:726,x:605.784363,y:-40.054119,z:423.942474,o:1.940963}),
        MakeDictionary<string, float>({map:726,x:594.008545,y:0.518031,z:423.218475,o:1.644257}),
        MakeDictionary<string, float>({map:726,x:1080.496704,y:197.572815,z:435.080322,o:2.897840}),
    ],

]
const mobIDs: TSArray<uint32> = [
    GetID("creature_template", "minecraft-mod", "torghastmob1"),
    GetID("creature_template", "minecraft-mod", "torghastmob2"),
    GetID("creature_template", "minecraft-mod", "torghastmob3"),
]

const miniBossSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({map:726,x:643.271790,y:3.121157,z:438.570648,o:3.247903}),
        MakeDictionary<string, float>({map:726,x:1046.405518,y:64.855217,z:449.191284,o:4.435165}),
        MakeDictionary<string, float>({map:726,x:1104.698486,y:176.444977,z:451.779633,o:6.275183}),
        MakeDictionary<string, float>({map:726,x:953.486389,y:248.085312,z:453.640442,o:0.459311}),
        MakeDictionary<string, float>({map:726,x:1075.007202,y:292.740967,z:453.693512,o:4.876960}),
        MakeDictionary<string, float>({map:726,x:937.455139,y:498.019073,z:454.089813,o:0.114835}),
        MakeDictionary<string, float>({map:726,x:922.682312,y:423.930725,z:454.549652,o:3.494015}),
        MakeDictionary<string, float>({map:726,x:879.427917,y:421.072174,z:435.256226,o:4.740185}),
        MakeDictionary<string, float>({map:726,x:1212.786377,y:328.593994,z:454.478729,o:3.230726}),
        MakeDictionary<string, float>({map:726,x:1275.422974,y:484.313782,z:453.824188,o:5.226509}),
        MakeDictionary<string, float>({map:726,x:619.351685,y:147.831070,z:421.558624,o:4.748680}),

    ]
]
const miniBossIDs: TSArray<uint32> = [
    GetID("creature_template", "minecraft-mod", "torghastminiboss1"),
]

const bossSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({ map: 726, x: 1093.482300, y: 359.340759, z: 425.318176, o: 0.228170 }),
        MakeDictionary<string, float>({map:726,x:1348.919922,y:379.712585,z:433.349670,o:3.108328}),
        MakeDictionary<string, float>({map:726,x:961.986572,y:63.127361,z:415.341614,o:0.515871}),
        MakeDictionary<string, float>({map:726,x:770.790588,y:211.603500,z:422.549377,o:5.590633}),
        MakeDictionary<string, float>({map:726,x:749.357666,y:-94.758820,z:423.435486,o:1.295807}),
    ],

]
const bossIDs: TSArray<uint32> = [
    GetID("creature_template", "minecraft-mod", "torghastboss1"),
    GetID("creature_template", "minecraft-mod", "torghastboss2"),
    GetID("creature_template", "minecraft-mod", "torghastboss3"),
    GetID("creature_template", "minecraft-mod", "torghastboss5"),
]

const vaseSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({ map: 726, x: 908.864197, y: 159.892090, z: 413.189667, o: 1.254526 }),
    ],
]

const chestSpawnCoords: TSArray<TSArray<TSDictionary<string, float>>> = [
    [
        MakeDictionary<string, float>({ map: 726, x: 908.864197, y: 159.892090, z: 413.189667, o: 1.254526 }),
    ],
]

const playerSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({ map: 726, x: 908.864197, y: 159.892090, z: 413.189667, o: 1.254526 }),
]

const vendorSpawnCoords: TSArray<TSDictionary<string, float>> = [
    MakeDictionary<string, float>({map:726,x:905.107117,y:153.253296,z:412.887848,o:0.845007}),
]

const rewardCurrencyID: uint32 = GetID("item_template", "minecraft-mod", "torghast-end-currency")
const insideCurrencyID: uint32 = GetID("item_template", "minecraft-mod", "torghast-inside-currency")
const prestigeMult = 9//this is 1 lower than real value, due to dieSides. 9 is 10% hp+damage+haste per prestige

export function dungeon1(events: TSEventHandlers) {
    for(let i=0;i<miniMobIDs.length;i++){
        setupCreaturePrestigeScripts(events, miniMobIDs[i])
        setupMiniMobDeath(events, miniMobIDs[i])
    }
    for (let i = 0; i < mobIDs.length; i++) {
        setupCreaturePrestigeScripts(events, mobIDs[i])
        setupMobDeath(events, mobIDs[i])
    }
    for(let i=0;i<miniBossIDs.length;i++){
        setupCreaturePrestigeScripts(events, miniBossIDs[i])
        setupMiniBossDeath(events, miniBossIDs[i])
    }
    for (let i = 0; i < bossIDs.length; i++) {
        setupCreaturePrestigeScripts(events, bossIDs[i])
        setupLastBossCheck(events, bossIDs[i])
        setupBossDeath(events, bossIDs[i])
        setupBossPull(events,bossIDs[i])
    }
    events.CreatureID.OnDeath(GetID("creature_template", "minecraft-mod", "torghast-vase"),(creature,killer)=>{
        checkPlayerGiveReward(killer,getRandomInt(1)+1)
        creature.DespawnOrUnsummon(5000)
    })
    //make a bossMinions loop for any spawned by spell creatures
    events.GameObjectID.OnGossipSelect(GetID("gameobject_template", "minecraft-mod", "torghastendobj"), (obj, player, menuID, sel, cancel) => {
        if (sel == 0) {
            let mapChoice = getRandomInt(mobSpawnCoords.length)
            resetGroup(player, playerSpawnCoords[mapChoice], miniMobSpawnCoords[mapChoice], miniMobIDs,mobSpawnCoords[mapChoice], mobIDs, miniBossSpawnCoords[mapChoice], miniBossIDs, bossSpawnCoords[mapChoice], bossIDs, vendorSpawnCoords[mapChoice], chestSpawnCoords[mapChoice],vaseSpawnCoords[mapChoice])
            obj.Despawn()
        } else if (sel == 1) {
            rewardGroup(player)
            obj.Despawn()
        }
    })

    events.MapID.OnPlayerEnter(726, (map, player) => {
        if (!map.GetBool('isSpawned', false)) {
            map.SetBool('isSpawned', true)
            map.SetUInt('rewardID', rewardCurrencyID)
            map.SetUInt('dropID', insideCurrencyID)
            map.SetUInt('prestige', 0)
            let mapChoice = getRandomInt(mobSpawnCoords.length)
            spawnMap(map, miniMobSpawnCoords[mapChoice], miniMobIDs,mobSpawnCoords[mapChoice], mobIDs, miniBossSpawnCoords[mapChoice], miniBossIDs, bossSpawnCoords[mapChoice], bossIDs, vendorSpawnCoords[mapChoice], chestSpawnCoords[mapChoice],vaseSpawnCoords[mapChoice])
        }
    })

    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#cc")) {
            let mapChoice = getRandomInt(mobSpawnCoords.length)
            resetGroup(player, playerSpawnCoords[mapChoice], miniMobSpawnCoords[mapChoice], miniMobIDs,mobSpawnCoords[mapChoice], mobIDs, miniBossSpawnCoords[mapChoice], miniBossIDs, bossSpawnCoords[mapChoice], bossIDs, vendorSpawnCoords[mapChoice], chestSpawnCoords[mapChoice],vaseSpawnCoords[mapChoice])
        }
    })
    events.MapID.OnPlayerLeave(726, (map, player) => {
        removePlayerBuffs(player)
        let curPrestige: uint32 = player.GetUInt('prestige', 0)
        let rewCount: uint32 = <uint32>(curPrestige * curPrestige) / 10
        if (rewCount > 0) {
            player.SendAreaTriggerMessage('it seems you did not fare so well, have ' + rewCount + ' Anima for your attempt.')
            player.AddItem(rewardCurrencyID, rewCount)
        }
        player.RemoveItemByEntry(insideCurrencyID,999999)
        player.SetUInt('prestige', 0)
        map.SetUInt('prestige', 0)
    })
}

function addPrestigeBuffToCreature(mob: TSCreature) {
    let map = mob.GetMap()
    let prestige = map.GetUInt('prestige', 0)
    let pcount = map.GetPlayerCount()
    mob.CastCustomSpell(mob, prestigeSpell, true, prestigeMult * prestige * pcount, prestigeMult * prestige * pcount, prestigeMult * prestige * pcount, CreateItem(insideCurrencyID, 1), mob.GetGUID())
}

function setupCreaturePrestigeScripts(events: TSEventHandlers, mobID: number) {
    events.CreatureID.OnCreate(mobID, (creature, cancel) => {
        addPrestigeBuffToCreature(creature)
    })
    events.CreatureID.OnReachedHome(mobID, (creature) => {
        addPrestigeBuffToCreature(creature)
    })
}

function setupMiniMobDeath(events: TSEventHandlers, mobID: number) {
    events.CreatureID.OnDeath(mobID, (creature, killer) => {
        checkPlayerGiveReward(killer,getRandomInt(1)+1)
        if (getRandomInt(100) >= 99) {
            creature.SpawnCreature(GetID("creature_template", "minecraft-mod", "torghast-orb"), creature.GetX(), creature.GetY(), creature.GetZ(), creature.GetO(), 8, 0)
        }
        creature.DespawnOrUnsummon(3000)
    })
}

function setupMobDeath(events: TSEventHandlers, mobID: number) {
    events.CreatureID.OnDeath(mobID, (creature, killer) => {
        checkPlayerGiveReward(killer,getRandomInt(5)+1)
        if (getRandomInt(100) >= 97) {
            creature.SpawnCreature(GetID("creature_template", "minecraft-mod", "torghast-orb"), creature.GetX(), creature.GetY(), creature.GetZ(), creature.GetO(), 8, 0)
        }
        creature.DespawnOrUnsummon(3000)
    })
}

function setupMiniBossDeath(events: TSEventHandlers, mobID: number) {
    events.CreatureID.OnDeath(mobID, (creature, killer) => {
        checkPlayerGiveReward(killer,getRandomInt(20)+1)
        if (getRandomInt(100) >= 50) {
            creature.SpawnCreature(GetID("creature_template", "minecraft-mod", "torghast-orb"), creature.GetX(), creature.GetY(), creature.GetZ(), creature.GetO(), 8, 0)
        }
        creature.DespawnOrUnsummon(3000)
    })
}

function setupBossDeath(events: TSEventHandlers, mobID: number) {
    events.CreatureID.OnDeath(mobID, (creature, killer) => {
        checkPlayerGiveReward(killer,getRandomInt(20)+30)
        creature.SpawnCreature(GetID("creature_template", "minecraft-mod", "torghast-orb"), creature.GetX(), creature.GetY(), creature.GetZ(), creature.GetO(), 8, 0)
        creature.DespawnOrUnsummon(3000)
    })
}

function setupBossPull(events: TSEventHandlers, mobID: number) {
    events.CreatureID.OnJustEnteredCombat(mobID, (creature, target) => {
        let mobs = creature.GetCreaturesInRange(60,0,2,1)
        for(let i=0;i<mobs.length;i++){
            mobs[i].AttackStart(target)
        }
    })
}

export function checkPlayerGiveReward(killer: TSUnit, randVal: number) {
    if(killer.IsPlayer()){
        let killerPlayer = killer.ToPlayer()
        if(killerPlayer.IsInGroup()){
            let group = killerPlayer.GetGroup().GetMembers()
            for(let i=0;i<group.length;i++){
                group[i].AddItem(insideCurrencyID,randVal)
            }
        }else{
            killerPlayer.AddItem(insideCurrencyID,randVal)
        }
    }else{
        let owner = killer.GetOwner()
        if(owner.IsPlayer()){
            let ownerPlayer = owner.ToPlayer()
            if(ownerPlayer.IsInGroup()){
                let group = ownerPlayer.GetGroup().GetMembers()
                for(let i=0;i<group.length;i++){
                    group[i].AddItem(insideCurrencyID,randVal)
                }
            }else{
                ownerPlayer.AddItem(insideCurrencyID,randVal)
            }
        }
    }
}