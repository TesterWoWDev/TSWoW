import { std } from "tswow-stdlib"
import { ShinyRedApple } from "../(Zone-1)Bramblewood/zone-1-items"
import { GrainSack } from "../(Zone-5)Mall/mall-resource-spawns"
import { addLootToGobChest } from "../../functions/gob-functions"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnMultiGobTimer } from "../../functions/spawning-functions"
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

export let SuperAppleSpell = std.Spells.load(2358)
SuperAppleSpell.Name.enGB.set('Super Apple')
SuperAppleSpell.Reagents.clearAll()
SuperAppleSpell.Effects.get(0).ItemType.set(SuperApple.ID)
SuperAppleSpell.Reagents.add(ShinyRedApple.ID,10)
SuperAppleSpell.Icon.set('Interface\\Icons\\INV_Misc_Food_19')