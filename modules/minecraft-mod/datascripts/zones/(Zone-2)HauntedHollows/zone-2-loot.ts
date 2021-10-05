import { addLootToCreature } from "../../functions/npc-functions"
import { tierTwoBaseResources, tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial } from "../../items/armor/tier2-set"
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

