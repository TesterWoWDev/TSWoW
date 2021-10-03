import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"
import { addLootToGobChest, addLootToGobChestSingleChance, addLootToGobChestSingleChanceMultiGroup } from "../functions/gob-functions"
import { makeResourceNode } from "../functions/resource-node-functions"
import { tierOneBaseResources, tierOneMailMaterial, tierOneLeatherMaterial, tierOneClothMaterial } from "../items/armor/tier1-set"
import { DazzlingLongsword, Nightblade, FieryWarAxe, ArdentCustodian, StaffofJordan, TheGreenTower, BowofSearingArrows, UnderworldBand, GutRipper, Ironfoe, EskhandarsRightClaw, EskhandarsLeftClaw } from "./(Zone-1)Bramblewood/zone-1-items"
import { spawnMultiGobTimer } from "../functions/spawning-functions"

//Items
export let UnTestedBoots = std.Items.create(MODNAME,'untestedboots',1121)
UnTestedBoots.Name.enGB.set("Un-Tested Boots")
UnTestedBoots.Quality.setBlue()
UnTestedBoots.MaxCount.set(1)
UnTestedBoots.RequiredLevel.set(0)
UnTestedBoots.Stats.addStamina(12)
UnTestedBoots.Stats.addAgility(9)
UnTestedBoots.Stats.addAttackPower(20)
UnTestedBoots.Price.set(1,1)
UnTestedBoots.Class.setClothEquip()
export let FallenAngelCloak = std.Items.create(MODNAME,'fallencloak',3980)
FallenAngelCloak.Name.enGB.set("Cloak of the Fallen Angel")
FallenAngelCloak.Quality.setBlue()
FallenAngelCloak.MaxCount.set(1)
FallenAngelCloak.RequiredLevel.set(0)
FallenAngelCloak.Stats.addStamina(7)
FallenAngelCloak.Stats.addIntellect(11)
FallenAngelCloak.Stats.addSpellPower(18)
FallenAngelCloak.Stats.addCritRating(7)
FallenAngelCloak.Price.set(1,1)
export let WornFlannelShirt = std.Items.create(MODNAME,'flannelshirt',41248)
WornFlannelShirt.Name.enGB.set("Well-Made Flannel")
WornFlannelShirt.Quality.setBlue()
WornFlannelShirt.MaxCount.set(1)
WornFlannelShirt.RequiredLevel.set(0)
WornFlannelShirt.Stats.addStamina(3)
WornFlannelShirt.Stats.addAttackPower(7)
WornFlannelShirt.Stats.addSpellPower(7)
WornFlannelShirt.Stats.addCritRating(5)
WornFlannelShirt.Price.set(1,1)
WornFlannelShirt.Class.setClothEquip()
export let StrangeBlade = std.Items.create(MODNAME,'strangeblade',5191)
StrangeBlade.Name.enGB.set("Strange Blade")
StrangeBlade.RequiredLevel.set(1)
StrangeBlade.Quality.setBlue()
StrangeBlade.Price.set(1,1)
//Direct Equip Spells
export let SlowFallSpell = std.Spells.create(MODNAME,'slowfallspell-spell',130) //caster
SlowFallSpell.Name.enGB.set('Slow Fall (Permanent)')
SlowFallSpell.Description.enGB.set('Chickens can\'t fly though.')
SlowFallSpell.Duration.set(-1,0,-1)
export let DamageSpell = std.Spells.create(MODNAME,'damagespell-spell',71188) //caster
DamageSpell.Name.enGB.set('Rampage')
DamageSpell.Description.enGB.set('He\'s a bull so...')
DamageSpell.AuraDescription.enGB.set('Increases total damage dealt by s1%.')
DamageSpell.Effects.get(0).BasePoints.set(1)
DamageSpell.Effects.get(1).AuraType.set(0)
DamageSpell.Effects.get(2).AuraType.set(0)
DamageSpell.Duration.set(-1,0,-1)
export let HealthSpell = std.Spells.create(MODNAME,'healthspell-spell',71188) //caster
HealthSpell.Name.enGB.set('Invincible')
HealthSpell.Description.enGB.set('I guess this works for now..?')
HealthSpell.AuraDescription.enGB.set('Increases total health by s1%.')
HealthSpell.Effects.get(0).BasePoints.set(1)
HealthSpell.Effects.get(0).AuraType.setModIncreaseHealthPercent()
HealthSpell.Effects.get(1).AuraType.set(0)
HealthSpell.Effects.get(2).AuraType.set(0)
HealthSpell.Duration.set(-1,0,-1)
//
export let BrokenChickenShoulders = std.Items.create(MODNAME,'chickenshoulders',5404)
BrokenChickenShoulders.Name.enGB.set("Cracked Chicken Shell Shoulderguards")
BrokenChickenShoulders.RequiredLevel.set(1)
BrokenChickenShoulders.Quality.setBlue()
BrokenChickenShoulders.Price.set(1,1)
BrokenChickenShoulders.Spells.add(SlowFallSpell.ID).Trigger.set(1)
BrokenChickenShoulders.Class.setClothEquip()
export let RampagingLeggings = std.Items.create(MODNAME,'rampaginglegs',6587)
RampagingLeggings.Name.enGB.set("Leggings of Brutal Rampage")
RampagingLeggings.RequiredLevel.set(1)
RampagingLeggings.Quality.setBlue()
RampagingLeggings.Price.set(1,1)
RampagingLeggings.Spells.add(DamageSpell.ID).Trigger.set(1)
RampagingLeggings.Class.setClothEquip()
export let UndyingGauntlets = std.Items.create(MODNAME,'undyinggauntlets',10413)
UndyingGauntlets.Name.enGB.set("Gauntlets of the Undying")
UndyingGauntlets.RequiredLevel.set(1)
UndyingGauntlets.Quality.setBlue()
UndyingGauntlets.Price.set(1,1)
UndyingGauntlets.Spells.add(HealthSpell.ID).Trigger.set(1)
UndyingGauntlets.ItemSet.set(0)
UndyingGauntlets.Class.setClothEquip()

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
    [-8099.334473,579.924927,1.481492,5.225876]],1500)
spawnMultiGobTimer(StrangeBladeObject.ID,[
    [-8769.497070,-66.478806,31.149784,5.054265],
    [-8257.423828,269.696350,3.486881,2.343452]],1500)
                                        