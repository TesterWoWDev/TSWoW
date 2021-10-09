import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial, tierTwoBaseResources } from "../../items/armor/tier2-set"
import { undiscoveredReds, undiscoveredGreens, undiscoveredPurples, undiscoveredYellows, undiscoveredBlues, undiscoveredOranges } from "../../items/gems/tier1-gem"
import { stringItem } from "../../items/string"
import { BloodiedPouch, SilkyCape, Carapace, GluttonCleaver, DeathmageSash, MordeshEye, FleshhideShoulders, FerventHelm, AwarenessHelm, SatyrBow, ShadowMistGloves, CleverHat, PotencyRing, GuileRing, ExpScroll, EyeofDestiny, OrbofPower } from "../item-manifest"
import { Zone2Creature5Loot, Zone2RareCreature2Loot, Zone2RareCreature1Loot, Zone2Creature1Loot } from "./zone-2-creatures"


addLootToCreature(Zone2Creature5Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(Zone2Creature5Loot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(Zone2Creature5Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID
],[2,2,2,2,2,2,2,1],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone2Creature5Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[2,2,2,2,2,2,2,2],1)
addLootToCreatureSingleChance(Zone2Creature5Loot,[
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

addLootToCreature(Zone2RareCreature2Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(Zone2RareCreature2Loot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(Zone2RareCreature2Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID,                  EyeofDestiny.ID
],[10,10,10,10,10,10,10,20,0.05],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone2RareCreature2Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[10,10,10,10,10,10,10,10],1)
addLootToCreatureSingleChance(Zone2RareCreature2Loot,[
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
addLootToCreatureSingleChance(Zone2RareCreature2Loot,[
    OrbofPower.ID
],3,3)

addLootToCreature(Zone2RareCreature1Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(Zone2RareCreature1Loot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(Zone2RareCreature1Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID,                  EyeofDestiny.ID
],[10,10,10,10,10,10,10,20,0.05],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone2RareCreature1Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[10,10,10,10,10,10,10,10],1)
addLootToCreatureSingleChance(Zone2RareCreature1Loot,[
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
addLootToCreatureSingleChance(Zone2RareCreature1Loot,[
    OrbofPower.ID
],3,3)

addLootToCreature(Zone2Creature1Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[5,5,5])
addLootToCreature(Zone2Creature1Loot,tierTwoBaseResources,[4,4,4,4,4,4,4])
/*Bags and Armor*/
addLootToCreature(Zone2Creature1Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID
],[1,1,0.5,0.5,0.5,0.5,0.5,10],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone2Creature1Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[1,1,1,1,1,1,1,1],1)
addLootToCreatureSingleChance(Zone2Creature1Loot,[
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
],1,2)

