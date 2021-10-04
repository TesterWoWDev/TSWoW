import { std } from "tswow-stdlib"
import { ShinyRedApple } from "../(Zone-1)Bramblewood/zone-1-items"
import { GrainSack } from "../(Zone-5)Mall/mall-resource-spawns"
import { addLootToGobChest } from "../../functions/gob-functions"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnMultiGobTimer } from "../../functions/spawning-functions"
import { tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set"
import { MODNAME } from "../../modname"

//Resource Items
export let RedFlower01 = std.Items.create(MODNAME,'redflower01',785)
RedFlower01.Name.enGB.set('Hibiscus Flower')
RedFlower01.Quality.setWhite()
RedFlower01.MaxStack.set(500)
export let BlueFlower01 = std.Items.create(MODNAME,'blueflower01',44207)
BlueFlower01.Name.enGB.set('Tulip Flower')
BlueFlower01.Quality.setWhite()
BlueFlower01.MaxStack.set(500)
BlueFlower01.Price.set(60,80)
export let ImmortalFlower = std.Items.create(MODNAME,'immortalflower',19295)
ImmortalFlower.Name.enGB.set('Immortal Flower')
ImmortalFlower.Quality.setBlue()
ImmortalFlower.Stats.addStamina(13)
ImmortalFlower.Stats.addIntellect(7)
ImmortalFlower.Stats.addSpellPower(32)

//Resource Nodes
export let ResourceFlower01 = makeResourceNode('Hibiscus Flower',75536,57,'flower01-chest')
ResourceFlower01.Size.set(1)
export let ResourceFlower02 = makeResourceNode('Tulip Flower',75540,57,'flower02-chest')
ResourceFlower02.Size.set(1)

//Resource Spawns
spawnMultiGobTimer(ResourceFlower01.ID,[
    [-8609.451172,-78.145432,31.756111,1.469154],
    [-8608.466797,-69.656395,33.196613,1.198191],
    [-8633.142578,-46.028122,32.692513,3.487628],
    [-8640.254883,-51.175579,31.918819,2.690448],
    [-8647.968750,-41.239372,31.372295,1.645868],
    [-8660.252930,-13.881196,31.384182,2.584419],
    [-8670.878906,-4.181034,31.133907,0.919375],
    [-8681.265625,-6.859008,31.150856,2.725790],
    [-8692.458984,-17.173483,31.802433,4.194488],
    [-8726.323242,-7.156179,31.336048,3.157762],
    [-8735.192383,-20.390646,31.668140,5.290114],
    [-8735.746094,-33.322636,31.984735,3.636856],
    [-8759.296875,-41.554970,31.751143,4.339785],
    [-8762.316406,-56.154446,31.216047,4.822806],
    [-8761.203125,-68.491989,31.134741,3.844989],
    [-8759.319336,-68.583656,31.134741,0.318549],
    [-8736.746094,-80.558975,31.193663,5.537526],
    [-8729.278320,-87.970070,31.135094,5.333324],
    [-8718.194336,-72.463585,31.378611,1.696930],
    [-8714.132812,-60.521008,31.244280,1.115735],
    [-8714.077148,-55.370949,31.763430,0.185036],
    [-8687.584961,-57.453068,31.459578,6.216892],
    [-8674.330078,-68.330734,31.181629,4.359431],
    [-8664.580078,-78.268974,31.196949,4.964185],
    [-8652.699219,-84.210365,33.132763,6.126574],
    [-8628.549805,-84.853981,31.166252,5.855612],
    [-8329.133789,-67.205177,0.052342,2.544918],
    [-8335.246094,-69.585083,-0.013499,2.961179],
    [-8334.173828,-82.519493,-0.033767,4.924672],
    [-8328.514648,-86.974289,0.039021,4.535902],
    [-8332.827148,-103.525963,0.063124,4.960014],
    [-8321.984375,-110.791649,0.643901,4.716544],
    [-8336.095703,-125.856773,-0.044907,4.763666],
    [-8325.481445,-135.755157,0.183723,5.588334],
    [-8324.055664,-156.364487,0.607515,3.899734],
    [-8333.876953,-152.036591,0.602863,3.970420],
    [-8342.012695,-162.466415,0.244089,4.806867],
    [-8340.979492,-174.000427,1.352125,4.276725],
    [-8338.147461,-175.996536,1.050637,4.327776],
    [-8341.044922,-187.651855,0.300507,4.343484],
    [-8336.069336,-198.691757,0.947774,6.271633],
    [-8317.626953,-212.535126,1.389025,6.122407],
    [-8307.173828,-211.068085,0.684728,6.090992],
    [-8307.173828,-211.068085,0.684728,6.090992],
    [-8283.035156,-209.575668,0.836057,4.618378],
    [-8276.067383,-215.313065,1.524328,4.995367],
    [-8269.019531,-212.476562,1.350567,5.486239],
    [-8249.019531,-209.913269,0.462144,5.855377],
    [-8241.824219,-216.915115,1.159246,6.165609],
    [-8235.225586,-223.966034,1.190424,6.039947],
    [-8213.851562,-217.520279,0.263561,5.757208],
    [-8204.155273,-229.847992,1.250641,5.749353],
    [-8189.901855,-229.726212,1.779245,5.780769],
    [-8174.516113,-221.702896,1.925773,0.161242],
    [-8172.719238,-216.540955,0.210925,6.255932],
    [-8159.726074,-196.258179,-6.110889,6.216661],
    [-8154.185059,-193.893265,-3.752016,0.110190],
    [-8133.118164,-171.913879,1.943595,6.267711],
    [-8127.600098,-174.860519,2.553676,5.863232],
    [-8130.063965,-139.517212,0.717449,1.366827],
    [-8133.726074,-138.842651,0.272125,1.406097],
    [-8136.862793,-128.532562,0.797656,1.406097],
    [-8131.812988,-118.355171,0.976668,1.488564],
    [-8128.607910,-95.979950,0.597316,1.370754],
    [-8123.882812,-91.187309,0.309739,1.724183],
    [-8125.504883,-89.785042,0.246901,2.325013],
    [-8147.673828,-69.588455,0.175855,2.560633],
    [-8156.274414,-68.092079,0.389120,2.548852],
    [-8156.832031,-65.233955,0.859085,2.548852],
    [-8154.297852,-45.037178,1.017603,1.358973],
    [-8159.207520,-43.560329,1.598059,1.178331],
    [-8159.207520,-43.560329,1.598059,1.178331],
    [-8158.600586,-31.145660,1.079737,6.134194],
    [-8149.044434,-31.884159,1.393565,5.549074],
    [-8139.892090,-37.981380,0.641691,4.425959],
    [-8184.501465,-61.969009,1.048111,3.503117],
    [-8188.291504,-60.258846,1.335402,3.503117],
    [-8199.783203,-61.900234,1.164591,5.160305],
    [-8204.294922,-75.153313,0.490237,5.172086],
    [-8209.126953,-85.392036,0.637874,4.422034],
    [-8216.395508,-93.744751,0.510377,4.543770],
    [-8225.582031,-115.357147,0.383816,5.215281],
    [-8229.260742,-63.938915,0.595509,1.551399],
    [-8225.128906,-61.984966,0.598697,2.081542],
    [-8226.187500,-60.526253,0.855952,2.301454],
    [-8247.547852,-46.516277,-6.847054,3.110415],
    [-8252.428711,-48.366932,-6.348680,2.175790],
    [-8208.297852,-0.671774,0.161761,1.527837],
    [-8222.927734,4.969736,1.822756,1.818434],
    [-8230.503906,21.284149,1.346543,6.279495],
    [-8211.507812,29.599211,0.302271,4.689067],
    [-8262.517578,38.351627,1.518188,3.039733],
    [-8264.310547,43.086113,1.523818,3.232156],
    [-8282.576172,61.891247,0.392812,1.928394],
    [-8290.454102,65.828957,0.225537,2.120817],
    [-8293.946289,79.803535,0.087126,1.618162],
    [-8303.251953,87.412643,0.000616,6.149910],
    [-8371.341797,3.478438,0.900826,3.051515],
    [-8381.122070,-1.607614,0.465592,3.192887],
    [-8388.241211,-7.755923,0.823808,3.342113],
    [-8392.236328,-28.960333,3.123019,4.013627],
    [-8390.600586,-39.055653,2.802743,3.240010],
    [-8396.885742,-69.520561,1.238473,4.025409],
    [-8401.179688,-96.382446,0.002257,3.805498],
    [-8404.033203,-105.856628,0.002257,3.255719],
    [-8410.619141,-113.661369,0.002709,3.279281],
    [-8420.994141,-129.801193,0.004892,3.071151],
    [-8431.752930,-127.837212,0.020131,2.760919],
    [-8440.407227,-128.040802,0.127245,2.859093],
    [-8450.095703,-129.830811,0.002112,2.957268],
    [-8453.308594,-157.404343,0.041465,4.221760],
    [-8451.051758,-184.661118,0.165141,4.555553],
    [-8445.580078,-190.392792,0.724379,4.854002],
    [-8426.485352,-172.200882,0.133862,6.252011],
    [-8414.928711,-182.266891,0.231459,5.847534],
    [-8416.912109,-209.584137,2.159012,5.364514],
    [-8415.378906,-230.187485,1.780627,5.541227],
    [-8399.279297,-206.020340,0.338560,6.094932],
    [-8384.573242,-220.831894,0.213027,3.695546],
    [-8387.173828,-228.544678,0.350229,2.863023],
    [-8610.166016,-100.372879,30.875593,5.561087],],300)
spawnMultiGobTimer(ResourceFlower02.ID,[
    [-8603.547852,-82.413414,30.893482,1.551622],
    [-8604.956055,-67.290154,34.485672,0.259641],
    [-8594.495117,-76.982559,34.524147,2.030716],
    [-8621.622070,-63.403152,33.934483,2.851458],
    [-8638.830078,-57.962383,31.428043,1.763681],
    [-8637.729492,-52.351658,31.293507,2.631546],
    [-8646.976562,-46.541126,31.836596,2.015008],
    [-8665.807617,-40.438839,31.134777,1.610528],
    [-8660.809570,-24.929373,31.411976,1.610528],
    [-8670.871094,-20.052038,31.372820,2.839677],
    [-8683.426758,-21.307903,31.180082,3.361967],
    [-8718.672852,-21.326242,31.208054,3.526900],
    [-8728.077148,-24.615778,31.231571,3.240230],
    [-8728.393555,-35.652874,31.259146,3.966723],
    [-8723.745117,-56.100277,31.134573,3.680053],
    [-8745.381836,-62.888397,31.272518,3.405163],
    [-8747.548828,-30.954557,31.141329,0.240001],
    [-8742.417969,-37.492962,31.424246,0.895802],
    [-8750.458008,-12.727798,31.884653,6.138333],
    [-8741.145508,-7.635165,31.542448,0.942923],
    [-8709.450195,-4.402879,31.825022,5.286183],
    [-8691.885742,-52.852367,31.134073,5.965558],
    [-8686.982422,-51.637367,31.250441,3.888184],
    [-8402.071289,-140.666412,0.110014,6.110644],
    [-8396.711914,-137.902435,0.214863,6.110644],
    [-8390.705078,-131.640594,0.065580,0.526462],
    [-8392.689453,-124.326660,0.298400,0.648198],
    [-8382.481445,-95.304428,0.093196,1.205831],
    [-8378.335938,-83.379425,-0.011184,1.300079],
    [-8376.923828,-68.724472,-0.000927,1.335422],
    [-8304.992188,-22.305788,0.081026,2.215069],
    [-8323.542969,-15.658106,0.102846,1.571042],
    [-8330.542969,-15.699243,0.600767,1.578896],
    [-8331.110352,-7.356994,0.166442,0.377236],
    [-8332.984375,-0.684463,-0.014196,5.851462],
    [-8258.723633,-48.356560,-5.522274,6.216667],
    [-8214.986328,-32.588127,0.390268,0.396866],
    [-8207.092773,-30.383053,1.453080,5.929998],
    [-8184.463867,-18.983892,0.434366,0.400791],
    [-8178.462891,-14.291013,0.237050,0.400791],
    [-8171.295898,21.957584,0.077079,1.025183],
    [-8144.606445,20.007532,0.670402,5.835749],
    [-8128.916504,10.463861,0.552524,5.486244],
    [-8122.472656,3.253873,1.757539,3.110416],
    [-8127.779785,36.475452,2.405412,2.171865],
    [-8132.056641,45.216766,1.768437,3.212518],
    [-8162.463867,67.928085,0.340811,2.486024],
    [-8166.747559,64.741730,0.751361,1.751677],
    [-8176.823242,75.767212,1.385501,0.832761],
    [-8170.969238,83.954597,1.325106,6.169541],
    [-8206.673828,97.731995,1.579232,2.101179],
    [-8213.252930,96.620911,1.509579,1.959807],
    [-8217.327148,109.957878,0.756203,1.170481],
    [-8233.134766,115.841949,0.257811,3.459918],
    [-8253.412109,112.084068,2.775356,4.838291],
    [-8219.479492,81.309303,1.601798,5.227068],
    [-8207.224609,73.795425,0.513200,4.520212],
    [-8202.681641,57.541954,1.525677,5.046425],
    [-8188.333008,44.637142,1.671289,5.187796],
    [-8179.818848,49.050121,0.422546,5.179943],
    [-8170.903320,37.205452,0.509584,4.418110],
    [-8167.196777,32.666077,0.102586,1.476798],
    [-8162.323242,7.180921,0.365003,0.934870],
    [-8160.825195,8.356985,0.365003,4.869720],
    [-8176.173340,-7.400690,0.376036,3.758383],
    [-8196.447266,8.129026,0.231034,2.474257],
    [-8171.935547,-36.466801,0.294497,0.636422],
    [-8197.837891,-9.445267,0.165043,0.978069],
    [-8177.898926,-3.532843,0.105544,0.773866],
    [-8699.135742,-67.224693,31.134457,4.642165],
    [-8693.257812,-71.829948,31.134022,5.671034],
    [-8689.768555,-85.817482,32.507648,1.516275],],300)
//Resource Loot
addLootToGobChest(ResourceFlower01,[
    RedFlower01.ID,     ImmortalFlower.ID
],[100,0.5],1)
addLootToGobChest(ResourceFlower02,[
    BlueFlower01.ID,    ImmortalFlower.ID
],[100,0.5],1)

export let SuperApple = std.Items.create(MODNAME,'superapple',46691)
SuperApple.Name.enGB.set('Super Apple')
SuperApple.Quality.setBlue()
SuperApple.DisplayInfo.copyFrom(ShinyRedApple.ID)

export let HealthPotion = std.Spells.load(2330)
HealthPotion.Reagents.clearAll()
HealthPotion.Reagents.add(RedFlower01.ID,1)
HealthPotion.Reagents.add(BlueFlower01.ID,1)

export let MinorDefense = std.Spells.load(7183)
MinorDefense.Reagents.clearAll()
MinorDefense.Reagents.add(BlueFlower01.ID,1)

export let LionElixir = std.Spells.load(2329)
LionElixir.Reagents.clearAll()
LionElixir.Reagents.add(RedFlower01.ID,1)

export let HerbEgg = std.Spells.load(8604)
HerbEgg.Name.enGB.set('Bread')
HerbEgg.Reagents.clearAll()
HerbEgg.Effects.get(0).ItemType.set(30816)
HerbEgg.Reagents.add(GrainSack.ID,1)
HerbEgg.Icon.set('Interface\\Icons\\INV_Misc_Food_09')

export let SuperAppleSpell = std.Spells.load(2538)
SuperAppleSpell.Name.enGB.set('Super Apple')
SuperAppleSpell.Reagents.clearAll()
SuperAppleSpell.Effects.get(0).ItemType.set(SuperApple.ID)
SuperAppleSpell.Reagents.add(ShinyRedApple.ID,10)
SuperAppleSpell.Icon.set('Interface\\Icons\\INV_Misc_Food_19')


//Blacksmithing - make resources destroy into "organic matter" - trade with compost bin to get resources

export let OrganicMatter = std.Items.create(MODNAME,'organicmatter',765)
OrganicMatter.Name.enGB.set('Organic Matter')
OrganicMatter.Quality.setWhite()
OrganicMatter.MaxStack.set(9999)
OrganicMatter.DisplayInfo.copyFrom(39342)

export let Blacksmithing = std.Spells.load(51300)
Blacksmithing.Name.enGB.set('Resource Refining')
Blacksmithing.Icon.set('Interface\\Icons\\inv_misc_enggizmos_27')

export let DestroyCloth = std.Spells.load(2660)
DestroyCloth.Name.enGB.set('Recycle Cloth Scraps')
DestroyCloth.Reagents.clearAll()
DestroyCloth.Effects.get(0).ItemType.set(OrganicMatter.ID) //3 Organic Matter for 5 Cloth
DestroyCloth.Effects.get(0).BasePoints.set(2)
DestroyCloth.Effects.get(0).DieSides.set(1)
DestroyCloth.Reagents.add(tierOneClothMaterial,5)
DestroyCloth.Icon.set('Interface\\Icons\\inv_misc_enggizmos_27')

export let DestroyLeather = std.Spells.load(3115)
DestroyLeather.Name.enGB.set('Recycle Leather Scraps')
DestroyLeather.Reagents.clearAll()
DestroyLeather.Effects.get(0).ItemType.set(OrganicMatter.ID) //3 Organic Matter for 5 Leather
DestroyLeather.Effects.get(0).BasePoints.set(2)
DestroyLeather.Effects.get(0).DieSides.set(1)
DestroyLeather.Reagents.add(tierOneLeatherMaterial,5)
DestroyLeather.Icon.set('Interface\\Icons\\inv_misc_enggizmos_27')

export let DestroyMail = std.Spells.load(2663)
DestroyMail.Name.enGB.set('Recycle Mail Scraps')
DestroyMail.Reagents.clearAll()
DestroyMail.Effects.get(0).ItemType.set(OrganicMatter.ID) //3 Organic Matter for 5 Mail
DestroyMail.Effects.get(0).BasePoints.set(2)
DestroyMail.Effects.get(0).DieSides.set(1)
DestroyMail.Reagents.add(tierOneMailMaterial,5)
DestroyMail.Icon.set('Interface\\Icons\\inv_misc_enggizmos_27')