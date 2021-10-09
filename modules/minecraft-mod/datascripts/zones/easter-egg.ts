import { std } from "tswow-stdlib"
import { addLootToGobChestSingleChanceMultiGroup, addLootToGobChest, addLootToGobChestSingleChance } from "../functions/gob-functions"
import { makeResourceNode } from "../functions/resource-node-functions"
import { spawnMultiGobTimer } from "../functions/spawning-functions"
import { tierOneBaseResources, tierOneMailMaterial, tierOneLeatherMaterial, tierOneClothMaterial } from "../items/armor/tier1-set"
import { MODNAME } from "../modname"
import { UnTestedBoots, FallenAngelCloak, DazzlingLongsword, Nightblade, FieryWarAxe, ArdentCustodian, StaffofJordan, TheGreenTower, BowofSearingArrows, UnderworldBand, GutRipper, Ironfoe, EskhandarsRightClaw, EskhandarsLeftClaw, WornFlannelShirt, BrokenChickenShoulders, RampagingLeggings, UndyingGauntlets, StrangeBlade } from "./item-manifest"

//Direct Equip Spells
export let SlowFallSpell = std.Spells.create(MODNAME,'slowfallspell-spell',130) //caster
SlowFallSpell.Name.enGB.set('Slow Fall (Permanent)')
SlowFallSpell.Description.enGB.set('Chickens can\'t fly though.')
SlowFallSpell.Duration.set(-1,0,-1)
export let DamageSpell = std.Spells.create(MODNAME,'damagespell-spell',71188) //caster
DamageSpell.Name.enGB.set('Rampage')
DamageSpell.Description.enGB.set('He\'s a bull so...')
DamageSpell.AuraDescription.enGB.set('Increases total damage dealt by $s1%.')
DamageSpell.Effects.get(0).BasePoints.set(1)
DamageSpell.Effects.get(1).AuraType.set(0)
DamageSpell.Effects.get(2).AuraType.set(0)
DamageSpell.Duration.set(-1,0,-1)
export let HealthSpell = std.Spells.create(MODNAME,'healthspell-spell',71188) //caster
HealthSpell.Name.enGB.set('Invincible')
HealthSpell.Description.enGB.set('I guess this works for now..?')
HealthSpell.AuraDescription.enGB.set('Increases total health by $s1%.')
HealthSpell.Effects.get(0).BasePoints.set(1)
HealthSpell.Effects.get(0).AuraType.setModIncreaseHealthPercent()
HealthSpell.Effects.get(1).AuraType.set(0)
HealthSpell.Effects.get(2).AuraType.set(0)
HealthSpell.Duration.set(-1,0,-1)

//Game Objects
export let ForgottenBoots = makeResourceNode('Forgotten Boots',86691,57,'forgottenboots-chest')
ForgottenBoots.Size.set(1.0)
addLootToGobChestSingleChanceMultiGroup(ForgottenBoots,[
    UnTestedBoots.ID]
,100,1,1,5)
export let ForgottenCloak = makeResourceNode('Forgotten Cloak',7743,57,'forgottencloak-chest')
ForgottenCloak.Size.set(1.0)
addLootToGobChestSingleChanceMultiGroup(ForgottenCloak,[
    FallenAngelCloak.ID]
,100,1,1,5)
export let FallenChest = makeResourceNode('Cache of Resources',8628,57,'cacheofresources-chest')
FallenChest.Size.set(0.50)
addLootToGobChest(FallenChest,tierOneBaseResources,[4,3,1,2,2,5,3])
addLootToGobChestSingleChanceMultiGroup(FallenChest,[
    tierOneMailMaterial,            tierOneLeatherMaterial,             tierOneClothMaterial]
,33,1,3,5)   
addLootToGobChestSingleChance(FallenChest,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.0125)
export let WornFlannel = makeResourceNode('Forgotten Laundry',7679,57,'forgottenlaundry-chest')
WornFlannel.Size.set(1.0)
addLootToGobChestSingleChanceMultiGroup(WornFlannel,[
    WornFlannelShirt.ID,        BrokenChickenShoulders.ID,         RampagingLeggings.ID,         UndyingGauntlets.ID ]
,25,1,1,5)
export let StrangeBladeObject = makeResourceNode('Strange Blade',98395,57,'strangeblade-chest')
StrangeBladeObject.Size.set(1.0)
addLootToGobChestSingleChanceMultiGroup(StrangeBladeObject,[
    StrangeBlade.ID]
,100,1,1,5)

//Creatures
export let GirlfriendMob = std.CreatureTemplates.create(MODNAME,'girlfriend-creature',510)
GirlfriendMob.Name.enGB.set('Girlfriend')
GirlfriendMob.Subname.enGB.set('It would have been tasteless to call this enslaved girlfriend')
GirlfriendMob.FactionTemplate.set(35)
GirlfriendMob.Models.clearAll()
GirlfriendMob.Models.addIds(27999)
GirlfriendMob.PetSpells.set(13471)

export let NakedLexMob01 = std.CreatureTemplates.create(MODNAME,'lexmob01-creature',510)
NakedLexMob01.Name.enGB.set('Narcissa Illusion')
NakedLexMob01.Subname.enGB.set('')
NakedLexMob01.FactionTemplate.set(35)
NakedLexMob01.Models.clearAll()
NakedLexMob01.Models.addIds(20579,19724)
NakedLexMob01.PetSpells.set(13172)

//Spells
export let MovementSpell = std.Spells.create(MODNAME,'movementspell-spell',9175) //caster
MovementSpell.Name.enGB.set('Movement Speed Increased (25%)')
MovementSpell.Description.enGB.set('Gotta go fast, brrrrr!')
MovementSpell.Effects.get(0).BasePoints.set(24)
MovementSpell.Duration.set(-1,0,-1)
export let FallenCloakSpell = std.Spells.create(MODNAME,'fallencloak-spell',62950) //caster
FallenCloakSpell.Name.enGB.set('Summon Cache of Materials')
FallenCloakSpell.Description.enGB.set('Summons a cache of farmed materials... how did you even do that?')
FallenCloakSpell.Cooldown.set(3600000,0,0,0)
FallenCloakSpell.Effects.get(0).MiscValueA.set(FallenChest.ID)
export let WornFlannelSpell = std.Spells.create(MODNAME,'flannelspell-spell',70907) //caster
WornFlannelSpell.Name.enGB.set('Summon Girlfriend')
WornFlannelSpell.Description.enGB.set('Summons your girlfriend to simp over while she fights for you.')
WornFlannelSpell.Cooldown.set(600000,0,0,0)
WornFlannelSpell.Duration.set(-1,0,-1)
WornFlannelSpell.Effects.get(0).MiscValueA.set(GirlfriendMob.ID)
export let LexaeusSpell = std.Spells.create(MODNAME,'lexaeusspell-spell',70907) //caster
LexaeusSpell.Name.enGB.set('Summon Nudes')
LexaeusSpell.Description.enGB.set('Summons a bunch of random naked people... idk man, leave me alone')
LexaeusSpell.Cooldown.set(600000,0,0,0)
LexaeusSpell.Duration.set(-1,0,-1)
LexaeusSpell.Effects.get(0).MiscValueA.set(NakedLexMob01.ID)
LexaeusSpell.Effects.get(0).BasePoints.set(4)

//Spawns
spawnMultiGobTimer(ForgottenBoots.ID,[
    [-8228.927734,-141.242859,1.441069,1.397056],
    [-8045.104492,214.746567,1.354434,3.937821]],1500)
spawnMultiGobTimer(ForgottenCloak.ID,[
    [-8125.558594,-64.054893,0.180978,4.888148],
    [-7967.230957,229.850647,-35.143055,2.158896]],1500)
spawnMultiGobTimer(WornFlannel.ID,[
    [-8129.145508,-134.442703,0.651608,1.652312],
    [-8099.334473,579.924927,1.481492,5.225876],
    [-8274.737305,250.567749,3.031361,2.796259],
    [-8472.438477,402.225128,0.518996,5.969268],
    [-8568.000000,408.044250,-4.656291,4.673362],
    [-8554.794922,124.845978,14.691655,2.749136],
    [-8805.034180,544.817444,14.771346,2.800188],
    [-8979.297852,449.058228,27.918917,3.463850]],1500)
spawnMultiGobTimer(StrangeBladeObject.ID,[
    [-8769.497070,-66.478806,31.149784,5.054265],
    [-8257.423828,269.696350,3.486881,2.343452]],1500)
                                            