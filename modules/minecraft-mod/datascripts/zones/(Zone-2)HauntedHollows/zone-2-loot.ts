import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { tierTwoBaseResources, tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial } from "../../items/armor/tier2-set"
import { undiscoveredBlues, undiscoveredGreens, undiscoveredOranges, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../../items/gems/tier1-gem"
import { stringItem } from "../../items/string"
import { Zone2Creature1Loot } from "./zone-2-creatures"
import { BloodiedPouch, SilkyCape, Carapace, GluttonCleaver, DeathmageSash, MordeshEye, FleshhideShoulders, AwarenessHelm, CleverHat, FerventHelm, GuileRing, PotencyRing, SatyrBow, ShadowMistGloves } from "./zone-2-items"



addLootToCreature(Zone2Creature1Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[2,2,2])
addLootToCreature(Zone2Creature1Loot,tierTwoBaseResources,[3,3,2,3,1,2,1])
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
    GuileRing.ID
],[1,1,1,1,1,1,1],1)
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
],0.1,2)

