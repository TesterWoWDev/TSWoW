import { makePool } from "../../functions/resource-node-functions"
import { spawnGob, spawnMultiGobTimer, spawnMultipleGobs } from "../../functions/spawning-functions"
import { PileofLogs, SmallTownChest, TirisfalPumpkin } from "./mall-resource-spawns"
import { logSpawns, chestSpawns, tableSpawns } from "./spawn-locations"

spawnGob(192697, [-8291.490, 21.201, 47.116, 4.103])// Enchanted Anvil
spawnMultipleGobs(186864, [[-8387.646, -255.299, 0.352, 6.245], [-8162.997, -65.376, 0.263, 6.280], [-8331.567, 6.470, -0.000173, 4.751]])// Outhouse
spawnGob(4090, [-8434.884, -249.076, 14.012, 4.760])// Invis Forge
spawnGob(123244, [-8440.348, -245.072, 14.019, 5.821])// Anvil
spawnMultipleGobs(3298, [[-8258.361, -119.770, 0.873, 3.186], [-8338.524, -39.340, 0.522, 0.365], [-8326.495, -98.019, 0.616, 0.162], [-8330.348, -122.412, 0.825, 5.878], [-8338.706, -160.927, 0.842, 6.105], [-8338.296, -194.675, 0.989, 0.462], [-8400.494, -224.143, 1.048, 3.083], [-8399.825, -224.475, 6.083, 3.101], [-8469.583, -175.871, 0.633, 6.273], [-8469.415, -163.267, 0.560, 6.281], [-8469.558, -150.707, 0.511, 6.275], [-8469.633, -138.156, 0.511, 6.271], [-8760.849, -101.042, 31.852, 1.194], [-8775.566, -75.312, 31.708, 6.066], [-8697.176, -65.849, 31.134, 1.719]])//Fireplaces
spawnMultipleGobs(160860, [[-8225.035, -208.690, 2.713, 6.269], [-8225.023, -199.386, 2.713, 0.000857], [-8220.885, -199.383, 2.713, 0.000857], [-8216.460, -199.379, 2.713, 0.000857], [-8220.845, -208.626, 2.713, 6.273], [-8216.364, -208.669, 2.713, 6.273]])//Pews
spawnGob(92015, [-8501.888, -198.104, -6.026, 3.898])//summoning circle
spawnMultipleGobs(193167, [[-8460.624, -186.837, 7.999, 3.082588], [-8461.016, -193.931, 7.999, 3.084533]])//bunk beds
spawnMultipleGobs(187526, [[-8499.728, -203.357, 7.999, 3.088], [-8458.824, -202.964, 7.999, 6.254], [-8406.907, -232.164, 5.847, 4.692]])//big bed
spawnGob(112898, [-8448.420, -198.732, 5.278, 0.009761])//tavern sign
spawnMultipleGobs(1884, [[-8470.824, -208.672, 1.135, 1.221]])//bonfire
spawnMultipleGobs(74076, [[-8501.853, -197.611, 1.643, 6.264]])//cauldron
spawnMultipleGobs(290, [[-8260.586, -116.575, 0.901, 3.185], [-8324.791, -39.228, 0.551, 3.214], [-8326.991, -158.492, 0.876, 4.509], [-8411.648, -223.098, 5.847, 4.681], [-8455.600, -190.632, 8.000, 3.140]])//wardrobe


spawnGob(4000258, [-8329.328, -42.269, 0.550, 2.017932])//wep crate closed
spawnGob(202892, [-8434.179, -286.244, 14.100, 5.026893])//wep crate open
spawnGob(4000258, [-8329.328, -42.269, 0.550, 2.017932])//gun rack
spawnGob(508762, [-833.958, -37.469, 0.549, 0.305003])//bearskin rug

spawnGob(519624, [-8297.656, -262.202, 2.705, 3.144])//poison vial
spawnMultipleGobs(184949, [[-8298.985, -261.509, -5.098, 0.000236], [-8281.607, -259.292, -5.097, 3.853]])//Poison bench
spawnMultiGobTimer(TirisfalPumpkin.ID, [[-8176.382, -116.968, 0.180, 0.180, 4.376], 
    [-8168.203, -109.813, 1.296, 2.419], 
    [-8166.599, -110.485, 1.296, 2.800], 
    [-8169.804, -100.548, 0.179, 1.485], 
    [-8143.457, -88.685, 0.178, 5.353], 
    [-8137.371, -73.559, 0.163, 3.772], 
    [-8136.298, -101.223, 0.270, 1.730], 
    [-8136.736328, -116.110, 0.276, 2.575]],150)//trisfal pumpkin
spawnGob(144126, [-8447.782, -200.266, 0.646, 6.273150])//Mailbox

spawnMultipleGobs(507606, tableSpawns)

makePool(100200, PileofLogs, 40, 300, logSpawns)

makePool(100200, PileofLogs, 100, 300, [[-8444.996094, -137.673981, 0.372341, 1.516918],
[-8448.018555, -131.745331, 0.036433, 5.997617],
[-8432.040039, -125.186401, 0.002180, 1.532627],
[-8434.925781, -123.029755, 0.002151, 0.629419],
[-8406.972656, -138.914932, 0.072662, 5.070850],
[-8407.050781, -144.399124, 0.021678, 0.794355],
[-8395.581055, -142.350830, 0.010627, 5.675610],
[-8386.496094, -142.060562, -0.075020, 4.289387],
[-8385.123047, -130.602737, -0.000420, 1.516931],
[-8389.867188, -124.172661, 0.044753, 6.087949],
[-8377.900391, -96.388977, -0.012289, 1.976394],
[-8400.050781, -76.237183, 0.004558, 1.960686],
[-8395.614258, -74.836174, 0.423261, 2.219868],
[-8399.759766, -70.786057, 1.049299, 3.221251],
[-8396.062500, -40.159004, 4.388037, 1.375564],
[-8399.041016, -37.037739, 5.268791, 6.229325],
[-8391.480469, -30.719036, 2.849175, 2.750011],
[-8386.559570, -7.036921, 0.412344, 1.505154],
[-8383.274414, -2.942261, 0.242319, 2.086349],
[-8379.812500, 2.612265, 0.690691, 1.677942],
[-8375.495117, 4.014381, 0.652799, 2.643982],
[-8377.221680, -17.449320, 0.083521, 5.294697],
[-8374.680664, -21.085901, 0.070058, 0.240659],
[-8370.444336, -26.214050, -0.158096, 3.594311],
[-8334.490234, -83.970284, -0.048683, 5.420353],
[-8332.645508, -90.969261, -0.010447, 0.374167],
[-8329.842773, -107.096405, 0.729472, 5.153316],
[-8325.145508, -110.438354, 0.995220, 3.908463],
[-8293.341797, -145.906845, 2.491266, 5.475325],
[-8282.994141, -148.103317, 1.447390, 5.004089],
[-8279.495117, -152.271896, 0.727997, 3.370462],
[-8284.577148, -160.190857, 1.530124, 3.362608],
[-8323.936523, -156.579102, 0.585100, 4.246181],
[-8325.208008, -170.369247, 0.327738, 3.032742],
[-8327.988281, -181.314545, 0.869514, 4.866645],
[-8339.812500, -188.086670, 0.311411, 5.227927],
[-8339.366211, -199.873260, 0.379383, 0.327040],
[-8317.746094, -216.489182, 0.959757, 0.201375],
[-8312.469727, -212.644882, 0.590898, 5.318246],
[-8305.393555, -210.864975, 0.722415, 5.326100],
[-8300.153320, -213.578079, 0.726705, 5.333953],
[-8282.786133, -213.269867, 0.817599, 4.658519],
[-8278.607422, -216.099731, 1.106743, 4.705643],
[-8271.225586, -215.622360, 1.741632, 5.993692],
[-8268.426758, -211.277237, 1.252315, 5.176879],
[-8261.825195, -215.318695, 0.557009, 4.018418],
[-8255.368164, -222.013031, 0.754839, 4.167642],
[-8244.080078, -215.976044, 0.944375, 0.488048],
[-8239.166016, -215.160309, 1.362758, 1.988158],
[-8240.164062, -210.408646, 1.198299, 3.684619],
[-8232.741211, -226.755859, 1.040166, 5.930858],
[-8226.416992, -225.907928, 1.130728, 3.531469],
[-8227.045898, -231.475967, 0.621709, 2.899222],
[-8223.218750, -247.243958, 1.483762, 4.697785],
[-8227.286133, -250.881485, 2.002708, 6.197893],
[-8201.449219, -235.236725, 3.241312, 0.680470],
[-8191.004883, -236.951019, 3.156796, 0.707959],
[-8190.517090, -230.363235, 2.079324, 2.408346],
[-8173.143555, -220.161346, 1.322206, 0.707959],
[-8170.036621, -217.416031, 1.048604, 0.358457],
[-8187.494141, -197.692062, 0.577273, 2.722506],
[-8195.428711, -199.310059, 1.301273, 4.426822],
[-8202.791992, -174.473602, 1.059609, 2.086336],
[-8205.454102, -168.036346, 1.552568, 3.641425],
[-8212.560547, -166.752487, 1.784936, 3.802432],
[-8217.771484, -173.770615, 1.524092, 0.197452],
[-8217.169922, -162.852509, 1.529389, 0.751158],
[-8222.743164, -129.861618, 1.238277, 1.399112],
[-8223.131836, -123.708435, 1.020162, 6.131136],
[-8223.028320, -120.201851, 0.827692, 0.735450],
[-8221.873047, -106.255623, 0.363323, 0.645129],
[-8212.463867, -96.792061, 1.044004, 6.040816],
[-8204.329102, -96.439644, 1.515632, 0.067862],
[-8189.581055, -94.869400, 1.227907, 5.318255],
[-8187.464355, -101.402229, 0.370758, 4.634960],
[-8185.114746, -115.878807, 0.290984, 4.234409],
[-8187.858398, -124.208855, 1.303344, 3.138779],
[-8241.752930, -112.775307, 1.109279, 2.620416],
[-8248.121094, -110.819504, 0.955052, 1.116378],
[-8242.528320, -108.225266, 1.024602, 0.091434],
[-8252.913086, -79.082100, 2.141039, 1.646523],
[-8255.269531, -76.380081, 2.702852, 1.461954],
[-8262.291016, -71.490211, 1.877866, 5.019807],
[-8270.389648, -72.076424, 0.666514, 3.464719],
[-8274.870117, -70.613655, 1.582811, 2.109907],
[-8282.512695, -71.900574, 1.860017, 1.756477],
[-8288.890625, -73.134415, 2.237358, 6.005478],
[-8285.364258, -76.867638, 1.515172, 1.713277],
[-8284.911133, -67.482155, 2.251683, 0.444859],
[-8281.689453, -60.161652, 2.759325, 5.738446],
[-8279.957031, -26.209005, 1.732431, 1.198844],
[-8281.159180, -21.409719, 2.253900, 0.641211],
[-8281.110352, -13.234688, 2.004655, 5.974065],
[-8280.274414, -9.608628, 1.846240, 5.816985],
[-8263.859375, -16.972855, 0.200784, 1.446242],
[-8262.303711, -11.145584, 0.886157, 2.938499],
[-8264.027344, -8.552732, 1.362257, 4.784184],
[-8227.413086, 5.150571, 2.027333, 0.920022],
[-8221.465820, 6.027264, 1.668625, 0.755088],
[-8215.096680, 5.111300, 0.699075, 0.656913],
[-8216.007812, 13.890939, 0.742925, 2.502599],
[-8216.129883, 22.393074, 1.929171, 2.742146],
[-8222.086914, 19.256876, 2.641927, 3.566814],
[-8226.977539, 19.366703, 2.102512, 4.206913],
[-8232.140625, 12.470575, 1.025806, 6.048669],
[-8230.636719, 22.696123, 1.264387, 0.971069],
[-8227.379883, 27.322992, 1.477895, 5.514598],
[-8220.625977, 31.259687, 1.117946, 5.659896],
[-8215.389648, 31.189930, 0.596492, 3.429366],
[-8238.604492, 72.767448, 0.502941, 2.078481],
[-8243.609375, 73.140999, 1.767108, 2.090262],
[-8248.086914, 71.030319, 2.570285, 2.620406],
[-8253.442383, 74.563530, 1.943053, 0.778646],
[-8254.554688, 79.639900, 2.003558, 5.628480],
[-8248.495117, 82.777588, 1.349752, 5.070851],
[-8292.004883, 88.925018, 0.079549, 3.472566],
[-8295.303711, 86.325989, 0.079549, 3.943805],
[-8291.261719, 83.189476, 0.084327, 2.918860],
[-8296.936523, 82.204903, 0.082571, 2.007798],
[-8301.866211, 84.328491, 0.045316, 0.817919],
[-8303.039062, 91.209633, -0.017951, 0.177820],
[-8299.175781, 96.721214, 0.182228, 0.570519],
[-8298.415039, 54.289234, 11.166418, 4.674229],
[-8295.044922, 50.825844, 11.837977, 4.399342],
[-8300.139648, 48.371086, 11.682725, 4.646743],
[-8181.738281, -24.474861, 0.199107, 6.205753],
[-8160.709961, -35.867874, 1.625702, 6.197899],
[-8156.294922, -32.842052, 1.542215, 4.894141],
[-8157.330566, -39.281757, 1.969612, 5.216153],
[-8151.019043, -45.285583, 0.801497, 0.719747],
[-8139.614258, -44.850388, 0.650721, 1.803597],
[-8139.333984, -41.825420, 0.432686, 2.962059],
[-8144.773926, -35.948914, 1.261878, 3.606086],
[-8122.721680, -55.604290, 0.189120, 0.252431],
[-8119.294434, -56.621372, 0.159957, 1.218471],
[-8114.994141, -54.643677, 0.600974, 3.036668],
[-8105.054688, -75.642006, 1.657228, 5.239708],
[-8099.352051, -76.375282, 1.041893, 4.697785],
[-8096.168457, -86.517120, 1.094007, 2.840321],
[-8111.512695, -83.826080, 1.423996, 5.188660],
[-8113.347656, -88.510963, 2.418977, 5.573504],
[-8111.170898, -123.012581, 1.958425, 5.200442],
[-8104.568359, -123.075172, 2.053922, 4.073399],
[-8150.566895, -132.727493, 0.195029, 3.657139],
[-8152.739258, -138.826721, 0.994826, 2.278764],
[-8157.112793, -130.178238, 0.448297, 4.332580],
[-8164.771484, -131.870285, 0.768794, 4.623177],
[-8165.645508, -136.762070, -0.452865, 6.276436],
[-8156.678711, -152.800842, 0.652614, 5.608848],
[-8153.558594, -158.429184, 0.957956, 1.081026],
[-8130.971680, -175.103775, 1.771739, 4.689932],
[-8153.648438, -195.610413, -4.005655, 4.006639],
[-8153.671875, -201.124924, -3.256902, 3.284073],
[-8159.376953, -200.266708, -4.797093, 1.670079],
[-8175.735352, -181.327194, -5.768233, 2.373011],
[-8178.363281, -176.951477, -5.342805, 3.782801],
[-8187.002441, -168.537033, -5.642408, 2.985621],
[-8189.888672, -165.103561, -5.905165, 4.344360]])

makePool(100201, SmallTownChest, 10, 300, [[8439.629883, -121.000893, 1.314891, 2.341559],
[8461.667969, -108.094673, 2.217869, 0.727565],
[8394.234375, -148.692383, 0.925891, 4.132265],
[8457.580078, -156.143127, 0.543198, 2.369044],
[8460.340820, -186.805496, 1.144288, 4.725247],
[8477.484375, -191.335114, 1.141510, 4.689906],
[8457.167969, -207.477203, 7.999488, 3.091619],
[8482.810547, -198.806168, 7.999488, 5.428175],
[8501.255859, -208.622818, 7.999488, 1.725023],
[8488.793945, -193.794571, -6.027427, 2.973810],
[8499.346680, -188.757645, -6.025938, 4.536750],
[8459.194336, -206.503662, 1.145148, 2.981656],
[8415.747070, -215.293304, 0.671939, 1.296980],
[8412.892578, -210.997894, 5.839267, 4.835195],
[8402.540039, -234.051712, 5.849267, 1.438349],
[8375.092773, -188.352768, -0.116247, 2.569328],
[8327.861328, -129.061020, 0.850176, 1.100634],
[8262.951172, -123.645233, 0.901867, 1.838910],
[8310.877930, -11.847754, 0.733406, 4.281498],
[8298.872070, 18.756983, 12.764280, 1.269488],
[8299.637695, 38.047718, 12.764280, 4.890177],
[8288.337891, 30.140251, 12.764387, 4.191170],
[8187.866699, 13.312156, 0.162000, 0.165999],
[8171.511230, -5.610739, 0.106016, 1.509040],])
