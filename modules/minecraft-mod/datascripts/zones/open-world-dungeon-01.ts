import { std } from "tswow-stdlib"
import { addLootToCreature, addLootToCreatureSingleChance } from "../functions/npc-functions"
import { spawnMultipleNPCWithTimer } from "../functions/spawning-functions"
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial, tierTwoBaseResources } from "../items/armor/tier2-set"
import { undiscoveredReds, undiscoveredGreens, undiscoveredPurples, undiscoveredYellows, undiscoveredBlues, undiscoveredOranges } from "../items/gems/tier1-gem"
import { MODNAME } from "../modname"
import { OrbofPower } from "./(Zone-5)Mall/ClassQuests/ARarePowerOrb"

export let Shadowbolt = std.Spells.create(MODNAME,'shadowbolt-spell',25307)
export let ShadowVolley = std.Spells.create(MODNAME,'shadowvolley-spell',25586)
ShadowVolley.Effects.get(0).BasePoints.set(566)
ShadowVolley.Effects.get(0).DieSides.set(121)
export let ShadowPain = std.Spells.create(MODNAME,'pain-spell',25367)

//Items and Loot
export let ReignLeggings = std.Items.create(MODNAME,'reignleggings',24359)
ReignLeggings.Quality.setBlue()
ReignLeggings.RequiredLevel.set(4)

export let TrackerBelt = std.Items.create(MODNAME,'trackerbelt',24360)
TrackerBelt.Quality.setBlue()
TrackerBelt.RequiredLevel.set(4)

export let Noose = std.Items.create(MODNAME,'noose',27546)
Noose.Quality.setBlue()
Noose.RequiredLevel.set(4)

export let SporeReed = std.Items.create(MODNAME,'reed',24380)
SporeReed.Quality.setBlue()
SporeReed.RequiredLevel.set(4)

export let RenewalHammer = std.Items.create(MODNAME,'renewalhammer',24378)
RenewalHammer.Quality.setBlue()
RenewalHammer.RequiredLevel.set(4)

export let WildMagic = std.Items.create(MODNAME,'wildmagic',32078)
WildMagic.RequiredLevel.set(6)
WildMagic.Class.setClothEquip()

export let UnbrokenChain = std.Items.create(MODNAME,'unbrokenchain',29349)
UnbrokenChain.RequiredLevel.set(6)

export let PhosphoSword = std.Items.create(MODNAME,'phosphoswrd',27673)
PhosphoSword.RequiredLevel.set(6)
PhosphoSword.Quality.setPurple()

export let DestructiveMaul = std.Items.create(MODNAME,'destructivemaul',27524)
DestructiveMaul.RequiredLevel.set(6)
DestructiveMaul.Quality.setPurple()

export let Bladefist = std.Items.create(MODNAME,'bladefist',29348)
Bladefist.RequiredLevel.set(6)

export let Fathomstone = std.Items.create(MODNAME,'fathomstone',30049)
Fathomstone.RequiredLevel.set(6)

export let ArgentSentinel = std.Items.create(MODNAME,'argentsentinel',30084)
ArgentSentinel.RequiredLevel.set(6)

export let ObliterativeBoots = std.Items.create(MODNAME,'obliterativeboots',30081)
ObliterativeBoots.RequiredLevel.set(6)

export let VigilanteRing = std.Items.create(MODNAME,'vigilante',33058)
VigilanteRing.RequiredLevel.set(6)

export let Naaru = std.Items.create(MODNAME,'naaru',33058)
Naaru.RequiredLevel.set(6)

export let LostAge = std.Items.create(MODNAME,'lostage',30008)
LostAge.RequiredLevel.set(6)



//Creature Spawns (Normal Mobs)
export let DungeonMob01 = std.CreatureTemplates.create(MODNAME,'dungeonmob01',3271)
DungeonMob01.Name.enGB.set('Suzu\'ven Demonspawn')
    DungeonMob01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(0,0,0,11000,15000,100).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(0).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(1,0,0,3000,7000,100).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(1).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateIc(0,0,0,0).Action.setCreateTimedEvent(2,0,0,5000,7000,100).row.event_flags.set(1)
    DungeonMob01.Scripts.onUpdateOoc(0,0,0,0).Action.setRemoveTimedEvent(2).row.event_flags.set(1)
    DungeonMob01.Scripts.onTimedEventTriggered(0).Target.setVictim().Action.setCast(Shadowbolt.ID,2,7)
    DungeonMob01.Scripts.onTimedEventTriggered(1).Target.setVictim().Action.setCast(ShadowVolley.ID,2,7)
    DungeonMob01.Scripts.onTimedEventTriggered(2).Target.setVictim().Action.setCast(ShadowPain.ID,2,7)
DungeonMob01.Level.set(10,10)
DungeonMob01.FactionTemplate.set(48)
DungeonMob01.DamageSchool.setNormal()
DungeonMob01.Stats.ArmorMod.set(5)
DungeonMob01.Stats.DamageMod.set(30)
DungeonMob01.Stats.ExperienceMod.set(10)
DungeonMob01.Stats.HealthMod.set(30)
DungeonMob01.Stats.ManaMod.set(10)
DungeonMob01.Rank.setElite()
DungeonMob01.Models.clearAll()
DungeonMob01.Models.addIds(18373)
export let DungeonMob01Loot = DungeonMob01.NormalLoot
spawnMultipleNPCWithTimer(DungeonMob01.ID,0,0,[
    [-8743.326172,585.324890,-15.320604,2.583537],
    [-8740.042969,591.431702,-15.456429,3.549577],
    [-8746.310547,593.816345,-16.625267,4.547027],],300)

addLootToCreature(DungeonMob01Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[10,10,10],3)
addLootToCreature(DungeonMob01Loot,tierOneBaseResources,[5,5,5,5,5,5,5],3)
addLootToCreature(DungeonMob01Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[2,2,2],4)
addLootToCreature(DungeonMob01Loot,tierTwoBaseResources,[2,2,2,2,2,2,2],4)
/*Bags and Armor*/
/*Weapons and Misc Drops - Group 1*/
addLootToCreatureSingleChance(DungeonMob01Loot,[
    ReignLeggings.ID,           TrackerBelt.ID,          Noose.ID,               SporeReed.ID,
    RenewalHammer.ID,           WildMagic.ID,            UnbrokenChain.ID,       PhosphoSword.ID,
    DestructiveMaul.ID,         Bladefist.ID,            Fathomstone.ID,         ArgentSentinel.ID,
    ObliterativeBoots.ID,       VigilanteRing.ID,        Naaru.ID,               LostAge.ID
],0.5,1)
addLootToCreatureSingleChance(DungeonMob01Loot,[
    undiscoveredReds[0],            undiscoveredReds[1],            undiscoveredReds[2],
    undiscoveredReds[3],            undiscoveredReds[4],            undiscoveredReds[5],
    undiscoveredReds[6],            undiscoveredReds[7],            undiscoveredGreens[0],
    undiscoveredGreens[1],          undiscoveredGreens[2],          undiscoveredGreens[3],
    undiscoveredGreens[4],          undiscoveredGreens[5],          undiscoveredGreens[6],
    undiscoveredPurples[0],         undiscoveredPurples[1],         undiscoveredPurples[2],
    undiscoveredPurples[3],         undiscoveredPurples[4],         undiscoveredPurples[5],
    undiscoveredPurples[6],         undiscoveredYellows[0],         undiscoveredYellows[1],
    undiscoveredYellows[2],         undiscoveredYellows[3],         undiscoveredYellows[4],
    undiscoveredBlues[0],           undiscoveredBlues[1],           undiscoveredBlues[2],
    undiscoveredBlues[3],           undiscoveredOranges[0],         undiscoveredOranges[1],
    undiscoveredOranges[2],         undiscoveredOranges[3],         undiscoveredOranges[4],
    undiscoveredOranges[5],
],2,2)
addLootToCreatureSingleChance(DungeonMob01Loot,[
    OrbofPower.ID
],0.5,3)