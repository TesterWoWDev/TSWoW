import { AttachedLootSet } from "tswow-stdlib/Loot/Loot";
import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate";
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set";
import { Bosscreature1Loot, creature10Loot, creature1Loot, creature2Loot, creature3Loot, creature4Loot, creature5Loot, creature6Loot, creature7Loot, creature8Loot, creature9Loot, DemiBosscreature1Loot, DemiBosscreature2Loot, RareCreature1Loot, RareCreature2Loot, RareCreature3Loot, RareCreature4Loot } from "./zone-1-creatures";
import { tierTwoBaseResources, tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial } from "../../items/armor/tier2-set";
import { undiscoveredBlues, undiscoveredGreens, undiscoveredOranges, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../../items/gems/tier1-gem";
import { DazzlingLongsword, Nightblade, FieryWarAxe, ArdentCustodian, StaffofJordan, TheGreenTower, BowofSearingArrows, UnderworldBand, GutRipper, Ironfoe, EskhandarsRightClaw, EskhandarsLeftClaw, FangoftheCrystalSpider, GoblinDragonGun, DarkwaterTalwar, BiteofSerrakis, Grimclaw, Shadowfang, StrikeoftheHydra, GalgannsFireblaster, GalgannsFirehammer, RagingBerserkersHelm, HerodsShoulder, ScarletLeggings, DeadmansHand, RobeofDoan, MantleofDoan, SavageGladiatorChain, SavageGladiatorLeggings, SavageGladiatorHelm, SavageGladiatorGrips, SavageGladiatorGreaves, DarkIronPulverizer, IronweaveRobe, IronweaveCowl, IronweavePants, IronweaveGloves, IronweaveMantle, IronweaveBelt, IronweaveBoots, IronweaveBracers, WraithScythe, ForceofWill, LordGeneralsSword, Naglering, FlameWrath, BurstofKnowledge, CircleofFlame, BrownLeatherSatchel, SmallBlackPouch, SmallBluePouch, SmallGreenPouch, SmallRedPouch, DarnassianBleu, RefreshingSpringWater, ShinyRedApple, Dirk, TornNote, LargeCandle, MagicCandle, MeltedCandle, BladedPickaxe } from "./zone-1-items";
import { DRQItemRequired01 } from "../../quests/Repeatable-Daily-Quest-Test";
import { SmallSackofCoins } from "../../items/currencies";
//Pearl, Epaulet, Chain, Metal, Reinforced Metal, Stick,Dust
//Cloth, Leather, Mail

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creature 1 = Humanoid - Bandit
// Group 1 Loot Percentage = 9% + 14% + 43% = 66%
addLoot(creature1Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2])
addLoot(creature1Loot,tierOneBaseResources,[3,3,2,3,1,2,0])
/*Bags and Food - Group 0*/
addLoot(creature1Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Weapons and Misc Drops - Group 1*/
addLoot(creature1Loot,[
    Dirk.ID,                        TornNote.ID
],[1,1],1)
/*Quest Requirements - Group 8*/
addLoot(creature1Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 2 - Animal - Young Wolf
// Group 1 Loot Percentage = 6% + 13% + 41% = 60%
addLoot(creature2Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[2,4,0])
addLoot(creature2Loot,tierOneBaseResources,[0,0,5,0,0,8,0])
/*Bags and Food - Group 0*/
addLoot(creature2Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature2Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 3 - Wild Boar
// Group 1 Loot Percentage = 7% + 4% + 41% = 52%
addLoot(creature3Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[0,5,2])
addLoot(creature3Loot,tierOneBaseResources,[0,0,2,0,0,2,0])
/*Bags and Food - Group 0*/
addLoot(creature3Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature3Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 4 - Kobold Foreman
// Group 1 Loot Percentage = 8% + 25% + 41% = 74%
addLoot(creature4Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[4,4,0])
addLoot(creature4Loot,tierOneBaseResources,[6,2,4,4,3,2,4])
/*Bags and Food - Group 0*/
addLoot(creature4Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature4Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 5 - Kobold Miner
// Group 1 Loot Percentage = 9% + 26% + 41% = 76%
addLoot(creature5Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[0,4,5])
addLoot(creature5Loot,tierOneBaseResources,[8,0,0,6,4,3,5])
/*Bags and Food - Group 0*/
addLoot(creature5Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
addLoot(creature5Loot,[
    MeltedCandle.ID,                LargeCandle.ID,                     MagicCandle.ID,
    BladedPickaxe.ID
],[3,2,2,0.25],1)
/*Quest Requirements - Group 8*/
addLoot(creature5Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 6 - Salty Murloc
// Group 1 Loot Percentage = 8% + 4% + 41% = 53%
addLoot(creature6Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[8,0,0])
addLoot(creature6Loot,tierOneBaseResources,[0,0,0,0,0,4,0])
/*Bags and Food - Group 0*/
addLoot(creature6Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature6Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 7 - Murloc Wavebender
// Group 1 Loot Percentage = 12% + 19% + 41% = 72%
addLoot(creature7Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[6,0,6])
addLoot(creature7Loot,tierOneBaseResources,[6,0,3,0,0,2,8])
/*Bags and Food - Group 0*/
addLoot(creature7Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature7Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 8 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%
addLoot(creature8Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2])
addLoot(creature8Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
/*Bags and Food - Group 0*/
addLoot(creature8Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature8Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 9 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%
addLoot(creature9Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2])
addLoot(creature9Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
/*Bags and Food - Group 0*/
addLoot(creature9Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature9Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)    



// Creature 10 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%
addLoot(creature10Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2])
addLoot(creature10Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
/*Bags and Food - Group 0*/
addLoot(creature10Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID,             DarnassianBleu.ID,
    ShinyRedApple.ID,               RefreshingSpringWater.ID
],[1,1,0.5,0.5,0,10,10,18],0)
/*Quest Requirements - Group 8*/
addLoot(creature10Loot,[
    DRQItemRequired01.ID,           SmallSackofCoins.ID
],[5,1],8)     



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rare Creature 1 - The Miner (Rare Kobold)
// Group 0 (Resources and Food) Loot Percentage         = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300% 
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
addLoot(RareCreature1Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2]) // Tier 1 Scraps
addLoot(RareCreature1Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[1,1,1]) // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)
addLoot(RareCreature1Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
addLoot(RareCreature1Loot,tierTwoBaseResources,[1,1,1,1,1,1,1]) // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)
addLootSingleChance(RareCreature1Loot,undiscoveredReds,0.125)   // All Gems = 4.625%
addLootSingleChance(RareCreature1Loot,undiscoveredGreens,0.125)
addLootSingleChance(RareCreature1Loot,undiscoveredYellows,0.125)
addLootSingleChance(RareCreature1Loot,undiscoveredPurples,0.125)
addLootSingleChance(RareCreature1Loot,undiscoveredBlues,0.125)
addLootSingleChance(RareCreature1Loot,undiscoveredOranges,0.125)
/*Bags - Group 0*/
addLoot(RareCreature1Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)
/*Epic Items - Group 1*/
addLootSingleChance(RareCreature1Loot,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.025,1)
/*Rare Items - Group 0*/      
addLootSingleChance(RareCreature1Loot,[
    FangoftheCrystalSpider.ID,      GoblinDragonGun.ID,                 DarkwaterTalwar.ID,
    BiteofSerrakis.ID,              Grimclaw.ID,                        Shadowfang.ID,
    StrikeoftheHydra.ID,            GalgannsFireblaster.ID,             GalgannsFirehammer.ID,
    RagingBerserkersHelm.ID,        HerodsShoulder.ID,                  ScarletLeggings.ID,
    DeadmansHand.ID,                RobeofDoan.ID,                      MantleofDoan.ID,
    SavageGladiatorChain.ID,        SavageGladiatorLeggings.ID,         SavageGladiatorHelm.ID,
    SavageGladiatorGrips.ID,        SavageGladiatorGreaves.ID,          DarkIronPulverizer.ID,
    IronweaveRobe.ID,               IronweaveCowl.ID,                   IronweavePants.ID,
    IronweaveGloves.ID,             IronweaveMantle.ID,                 IronweaveBelt.ID,
    IronweaveBoots.ID,              IronweaveBracers.ID,                WraithScythe.ID,
    ForceofWill.ID,                 LordGeneralsSword.ID,               Naglering.ID,
    FlameWrath.ID,                  BurstofKnowledge.ID,                CircleofFlame.ID
],0.2,2)

// Rare Creature 2 - Fang (Rare Wolf)
// Group 1 Loot Percentage = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300% 
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
addLoot(RareCreature2Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2]) // Tier 1 Scraps
addLoot(RareCreature2Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[1,1,1]) // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)
addLoot(RareCreature2Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
addLoot(RareCreature2Loot,tierTwoBaseResources,[1,1,1,1,1,1,1]) // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)
addLootSingleChance(RareCreature2Loot,undiscoveredReds,0.125)   // All Gems = 4.625%
addLootSingleChance(RareCreature2Loot,undiscoveredGreens,0.125)
addLootSingleChance(RareCreature2Loot,undiscoveredYellows,0.125)
addLootSingleChance(RareCreature2Loot,undiscoveredPurples,0.125)
addLootSingleChance(RareCreature2Loot,undiscoveredBlues,0.125)
addLootSingleChance(RareCreature2Loot,undiscoveredOranges,0.125)
/*Bags - Group 0*/
addLoot(RareCreature2Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)
/*Epic Items - Group 1*/
addLootSingleChance(RareCreature2Loot,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.025,1)
/*Rare Items - Group 0*/      
addLootSingleChance(RareCreature2Loot,[
    FangoftheCrystalSpider.ID,      GoblinDragonGun.ID,                 DarkwaterTalwar.ID,
    BiteofSerrakis.ID,              Grimclaw.ID,                        Shadowfang.ID,
    StrikeoftheHydra.ID,            GalgannsFireblaster.ID,             GalgannsFirehammer.ID,
    RagingBerserkersHelm.ID,        HerodsShoulder.ID,                  ScarletLeggings.ID,
    DeadmansHand.ID,                RobeofDoan.ID,                      MantleofDoan.ID,
    SavageGladiatorChain.ID,        SavageGladiatorLeggings.ID,         SavageGladiatorHelm.ID,
    SavageGladiatorGrips.ID,        SavageGladiatorGreaves.ID,          DarkIronPulverizer.ID,
    IronweaveRobe.ID,               IronweaveCowl.ID,                   IronweavePants.ID,
    IronweaveGloves.ID,             IronweaveMantle.ID,                 IronweaveBelt.ID,
    IronweaveBoots.ID,              IronweaveBracers.ID,                WraithScythe.ID,
    ForceofWill.ID,                 LordGeneralsSword.ID,               Naglering.ID,
    FlameWrath.ID,                  BurstofKnowledge.ID,                CircleofFlame.ID
],0.2,2)

// Rare Creature 3 - Murglegurgle (Rare Murloc)
// Group 1 Loot Percentage = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300% 
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
addLoot(RareCreature3Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2]) // Tier 1 Scraps
addLoot(RareCreature3Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[1,1,1]) // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)
addLoot(RareCreature3Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
addLoot(RareCreature3Loot,tierTwoBaseResources,[1,1,1,1,1,1,1]) // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)
addLootSingleChance(RareCreature3Loot,undiscoveredReds,0.125)   // All Gems = 4.625%
addLootSingleChance(RareCreature3Loot,undiscoveredGreens,0.125)
addLootSingleChance(RareCreature3Loot,undiscoveredYellows,0.125)
addLootSingleChance(RareCreature3Loot,undiscoveredPurples,0.125)
addLootSingleChance(RareCreature3Loot,undiscoveredBlues,0.125)
addLootSingleChance(RareCreature3Loot,undiscoveredOranges,0.125)
/*Bags - Group 0*/
addLoot(RareCreature3Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)
/*Epic Items - Group 1*/
addLootSingleChance(RareCreature3Loot,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.025,1)
/*Rare Items - Group 2*/      
addLootSingleChance(RareCreature3Loot,[
    FangoftheCrystalSpider.ID,      GoblinDragonGun.ID,                 DarkwaterTalwar.ID,
    BiteofSerrakis.ID,              Grimclaw.ID,                        Shadowfang.ID,
    StrikeoftheHydra.ID,            GalgannsFireblaster.ID,             GalgannsFirehammer.ID,
    RagingBerserkersHelm.ID,        HerodsShoulder.ID,                  ScarletLeggings.ID,
    DeadmansHand.ID,                RobeofDoan.ID,                      MantleofDoan.ID,
    SavageGladiatorChain.ID,        SavageGladiatorLeggings.ID,         SavageGladiatorHelm.ID,
    SavageGladiatorGrips.ID,        SavageGladiatorGreaves.ID,          DarkIronPulverizer.ID,
    IronweaveRobe.ID,               IronweaveCowl.ID,                   IronweavePants.ID,
    IronweaveGloves.ID,             IronweaveMantle.ID,                 IronweaveBelt.ID,
    IronweaveBoots.ID,              IronweaveBracers.ID,                WraithScythe.ID,
    ForceofWill.ID,                 LordGeneralsSword.ID,               Naglering.ID,
    FlameWrath.ID,                  BurstofKnowledge.ID,                CircleofFlame.ID
],0.2,2)

// Rare Creature 3 - Murglegurgle (Rare Murloc)
// Group 1 Loot Percentage = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300% 
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
addLoot(RareCreature4Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2]) // Tier 1 Scraps
addLoot(RareCreature4Loot,[tierTwoClothMaterial,tierTwoLeatherMaterial,tierTwoMailMaterial],[1,1,1]) // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)
addLoot(RareCreature4Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
addLoot(RareCreature4Loot,tierTwoBaseResources,[1,1,1,1,1,1,1]) // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)
addLootSingleChance(RareCreature4Loot,undiscoveredReds,0.125)   // All Gems = 4.625%
addLootSingleChance(RareCreature4Loot,undiscoveredGreens,0.125)
addLootSingleChance(RareCreature4Loot,undiscoveredYellows,0.125)
addLootSingleChance(RareCreature4Loot,undiscoveredPurples,0.125)
addLootSingleChance(RareCreature4Loot,undiscoveredBlues,0.125)
addLootSingleChance(RareCreature4Loot,undiscoveredOranges,0.125)
/*Bags - Group 0*/
addLoot(RareCreature4Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)
/*Epic Items - Group 1*/
addLootSingleChance(RareCreature4Loot,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.025,1)
/*Rare Items - Group 0*/      
addLootSingleChance(RareCreature4Loot,[
    FangoftheCrystalSpider.ID,      GoblinDragonGun.ID,                 DarkwaterTalwar.ID,
    BiteofSerrakis.ID,              Grimclaw.ID,                        Shadowfang.ID,
    StrikeoftheHydra.ID,            GalgannsFireblaster.ID,             GalgannsFirehammer.ID,
    RagingBerserkersHelm.ID,        HerodsShoulder.ID,                  ScarletLeggings.ID,
    DeadmansHand.ID,                RobeofDoan.ID,                      MantleofDoan.ID,
    SavageGladiatorChain.ID,        SavageGladiatorLeggings.ID,         SavageGladiatorHelm.ID,
    SavageGladiatorGrips.ID,        SavageGladiatorGreaves.ID,          DarkIronPulverizer.ID,
    IronweaveRobe.ID,               IronweaveCowl.ID,                   IronweavePants.ID,
    IronweaveGloves.ID,             IronweaveMantle.ID,                 IronweaveBelt.ID,
    IronweaveBoots.ID,              IronweaveBracers.ID,                WraithScythe.ID,
    ForceofWill.ID,                 LordGeneralsSword.ID,               Naglering.ID,
    FlameWrath.ID,                  BurstofKnowledge.ID,                CircleofFlame.ID
],0.2,2)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Demiboss Creature 1 - Lieutenant Commander Springraven
// Group 1 Loot Percentage = 9% + 35% + 7% + + 4.625% + 23% = 78.625%
addLoot(DemiBosscreature1Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2]) // Tier 1 Scraps
addLoot(DemiBosscreature1Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
addLoot(DemiBosscreature1Loot,tierTwoBaseResources,[1,1,1,1,1,1,1]) // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)
addLootSingleChance(DemiBosscreature1Loot,undiscoveredReds,0.125)
addLootSingleChance(DemiBosscreature1Loot,undiscoveredGreens,0.125)
addLootSingleChance(DemiBosscreature1Loot,undiscoveredYellows,0.125)
addLootSingleChance(DemiBosscreature1Loot,undiscoveredPurples,0.125)
addLootSingleChance(DemiBosscreature1Loot,undiscoveredBlues,0.125)
addLootSingleChance(DemiBosscreature1Loot,undiscoveredOranges,0.125)
/*Bags - Group 0*/
addLoot(DemiBosscreature1Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)

// Demiboss Creature 2 - Widow Fae
// Group 1 Loot Percentage = 9% + 35% + 7% + + 4.625% + 23% = 78.625%
addLoot(DemiBosscreature2Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2]) // Tier 1 Scraps
addLoot(DemiBosscreature2Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
addLoot(DemiBosscreature2Loot,tierTwoBaseResources,[1,1,1,1,1,1,1]) // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)
addLootSingleChance(DemiBosscreature2Loot,undiscoveredReds,0.125)
addLootSingleChance(DemiBosscreature2Loot,undiscoveredGreens,0.125)
addLootSingleChance(DemiBosscreature2Loot,undiscoveredYellows,0.125)
addLootSingleChance(DemiBosscreature2Loot,undiscoveredPurples,0.125)
addLootSingleChance(DemiBosscreature2Loot,undiscoveredBlues,0.125)
addLootSingleChance(DemiBosscreature2Loot,undiscoveredOranges,0.125)
/*Bags - Group 0*/
addLoot(DemiBosscreature2Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boss Creature 1 - Maxim Wintergrave
// Group 1 Loot Percentage = 9% + 35% + 7% + + 4.625% + 23% = 78.625%
addLoot(Bosscreature1Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2]) // Tier 1 Scraps
addLoot(Bosscreature1Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
addLoot(Bosscreature1Loot,tierTwoBaseResources,[1,1,1,1,1,1,1]) // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)
addLootSingleChance(Bosscreature1Loot,undiscoveredReds,0.125)
addLootSingleChance(Bosscreature1Loot,undiscoveredGreens,0.125)
addLootSingleChance(Bosscreature1Loot,undiscoveredYellows,0.125)
addLootSingleChance(Bosscreature1Loot,undiscoveredPurples,0.125)
addLootSingleChance(Bosscreature1Loot,undiscoveredBlues,0.125)
addLootSingleChance(Bosscreature1Loot,undiscoveredOranges,0.125)
/*Bags - Group 0*/
addLoot(Bosscreature1Loot,[
    SmallRedPouch.ID,               SmallBluePouch.ID,                  SmallBlackPouch.ID,
    SmallGreenPouch.ID,             BrownLeatherSatchel.ID
],[5,5,5,5,3],0)
























function addLoot(loot: AttachedLootSet<CreatureTemplate>, items: number[], chances: number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            loot.addItem(value,chances[index],1,1,false,groupID,0)
        }
    })
}

function addLootSingleChance(loot: AttachedLootSet<CreatureTemplate>, items: number[], chance: number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        loot.addItem(value,chance,1,1,false,groupID,0)
    })
}
