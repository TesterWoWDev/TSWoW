import { ExpScroll } from "../(Zone-0)Walk-of-Heroes/starting-zone-items"
import { Zone2Creature5Loot as Zone3Creature1Loot } from "../(Zone-2)HauntedHollows/zone-2-creatures"
import { BloodiedPouch, SilkyCape, Carapace, GluttonCleaver, DeathmageSash, MordeshEye, FleshhideShoulders, FerventHelm, AwarenessHelm, SatyrBow, ShadowMistGloves, CleverHat, PotencyRing, GuileRing } from "../(Zone-2)HauntedHollows/zone-2-items"
import { OrbofPower } from "../(Zone-5)Mall/ClassQuests/ARarePowerOrb"
import { addLootToCreature, addLootToCreatureSingleChance } from "../../functions/npc-functions"
import { tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial, tierTwoBaseResources } from "../../items/armor/tier2-set"
import { undiscoveredReds, undiscoveredGreens, undiscoveredPurples, undiscoveredYellows, undiscoveredBlues, undiscoveredOranges } from "../../items/gems/tier1-gem"
import { stringItem } from "../../items/string"
import { harpyScroll } from "../champion-scrolls/harpy-champion-scroll"
import { quailboarScroll } from "../champion-scrolls/quailboar-champion-scroll"
import { WorgScroll } from "../champion-scrolls/ravaging-worg-champion-scroll"
import { SavageWolfLoot, Zone3Creature2Loot, Zone3Creature3Loot, Zone3RareCreature1Loot } from "./zone-3-creatures"
import { Commendation, Contempt, DragonscaleBlade, FocusingCrystal, Gliderboots, Glidergreaves, Glidersabatons, Gliderwrap, HeartPit, LostTreads, LurkerBelt, LurkerCord, LurkerGirdle, LurkerGrasp, MiseryMace, Ravagerband, Ravagerbracer, RavagerCuff, RavagerWrap, ShivanFeather, SunwellVial, VolatilePower } from "./zone-3-items"


addLootToCreature(Zone3Creature1Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(Zone3Creature1Loot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(Zone3Creature1Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID,                  quailboarScroll.ID
],[2,2,2,2,2,2,2,1,1],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone3Creature1Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[2,2,2,2,2,2,2,2],1)
addLootToCreatureSingleChance(Zone3Creature1Loot,[
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


addLootToCreature(Zone3Creature3Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(Zone3Creature3Loot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(Zone3Creature3Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID,                  harpyScroll.ID
],[2,2,2,2,2,2,2,1,1],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone3Creature3Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[2,2,2,2,2,2,2,2],1)
addLootToCreatureSingleChance(Zone3Creature3Loot,[
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

addLootToCreature(Zone3Creature2Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(Zone3Creature2Loot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(Zone3Creature2Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID,                  quailboarScroll.ID
],[2,2,2,2,2,2,2,1,1],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone3Creature2Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[2,2,2,2,2,2,2,2],1)
addLootToCreatureSingleChance(Zone3Creature2Loot,[
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



addLootToCreature(Zone3RareCreature1Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(Zone3RareCreature1Loot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(Zone3RareCreature1Loot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID,                  ShivanFeather.ID,
    harpyScroll.ID
],[2,2,2,2,2,2,2,1,5],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(Zone3RareCreature1Loot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[2,2,2,2,2,2,2,2],1)
addLootToCreatureSingleChance(Zone3RareCreature1Loot,[
    LurkerCord.ID,          LurkerGrasp.ID,             LurkerBelt.ID,          LurkerGirdle.ID,
    RavagerCuff.ID,         RavagerWrap.ID,             Ravagerband.ID,         Ravagerbracer.ID,
    Gliderwrap.ID,          Gliderboots.ID,             Glidersabatons.ID,      Glidergreaves.ID,
    LostTreads.ID,          Commendation.ID,            Contempt.ID,            FocusingCrystal.ID,
    SunwellVial.ID,         VolatilePower.ID,           DragonscaleBlade.ID,    MiseryMace.ID,
    HeartPit.ID
],0.5,2)
addLootToCreatureSingleChance(Zone3RareCreature1Loot,[
    OrbofPower.ID
],5,3)

addLootToCreature(SavageWolfLoot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[10,10,10])
addLootToCreature(SavageWolfLoot,tierTwoBaseResources,[6,6,6,6,6,6,6])
/*Bags and Armor*/
addLootToCreature(SavageWolfLoot,[
    BloodiedPouch.ID,               SilkyCape.ID,                   Carapace.ID,
    GluttonCleaver.ID,              DeathmageSash.ID,               MordeshEye.ID,
    FleshhideShoulders.ID,          stringItem.ID,                  WorgScroll.ID
],[2,2,2,2,2,2,2,1,1],0)
/*Weapons and Misc Drops - Group 1*/
addLootToCreature(SavageWolfLoot,[
    FerventHelm.ID,                 AwarenessHelm.ID,               SatyrBow.ID,
    ShadowMistGloves.ID,            CleverHat.ID,                   PotencyRing.ID,
    GuileRing.ID,                   ExpScroll.ID
],[2,2,2,2,2,2,2,2],1)
addLootToCreatureSingleChance(SavageWolfLoot,[
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
