import { AttachedLootSet } from "tswow-stdlib/Loot/Loot";
import { CreatureTemplate } from "tswow-stdlib/Creature/CreatureTemplate";
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set";
import { Bosscreature1Loot, creature10Loot, creature1Loot, creature2Loot, creature3Loot, creature4Loot, creature5Loot, creature6Loot, creature7Loot, creature8Loot, creature9Loot, DemiBosscreature1Loot, DemiBosscreature2Loot, RareCreature1Loot, RareCreature2Loot, RareCreature3Loot } from "./zone-1-creatures";
import { tierTwoBaseResources, tierTwoClothMaterial, tierTwoLeatherMaterial, tierTwoMailMaterial } from "../items/armor/tier2-set";
import { undiscoveredBlues, undiscoveredGreens, undiscoveredOranges, undiscoveredPurples, undiscoveredReds, undiscoveredYellows } from "../items/gems/tier1-gem";

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
creature1Loot.addItem(805,1,1,1,false,0,0)      // Small Red Pouch
creature1Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature1Loot.addItem(5571,0.5,1,1,false,0,0)   // Small Black Pouch
creature1Loot.addItem(5572,0.5,1,1,false,0,0)   // Small Green Pouch
creature1Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature1Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature1Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels
creature1Loot.addItem(2139,1,1,1,false,0,0)     // Dirk - Random White Dagger
creature1Loot.addItem(4102,1,1,1,false,0,0)     // Torn Note - Random Piece of Paper

// Creature 2 - Animal - Young Wolf
// Group 1 Loot Percentage = 6% + 13% + 41% = 60%
addLoot(creature2Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[2,4,0])
addLoot(creature2Loot,tierOneBaseResources,[0,0,5,0,0,8,0])
creature2Loot.addItem(805,0.5,1,1,false,0,0)    // Small Red Pouch
creature2Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature2Loot.addItem(5571,1,1,1,false,0,0)     // Small Black Pouch
creature2Loot.addItem(5572,0.5,1,1,false,0,0)   // Small Green Pouch
creature2Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature2Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature2Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 3 - Wild Boar
// Group 1 Loot Percentage = 7% + 4% + 41% = 52%
addLoot(creature2Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[0,5,2])
addLoot(creature3Loot,tierOneBaseResources,[0,0,2,0,0,2,0])
creature3Loot.addItem(805,0.5,1,1,false,0,0)    // Small Red Pouch
creature3Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature3Loot.addItem(5571,0.5,1,1,false,0,0)   // Small Black Pouch
creature3Loot.addItem(5572,1,1,1,false,0,0)     // Small Green Pouch
creature3Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature3Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature3Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 4 - Kobold Foreman
// Group 1 Loot Percentage = 8% + 25% + 41% = 74%
addLoot(creature4Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[4,4,0])
addLoot(creature4Loot,tierOneBaseResources,[6,2,4,4,3,2,4])
creature4Loot.addItem(805,1,1,1,false,0,0)      // Small Red Pouch
creature4Loot.addItem(828,0.5,1,1,false,0,0)    // Small Blue Pouch
creature4Loot.addItem(5571,0.5,1,1,false,0,0)   // Small Black Pouch
creature4Loot.addItem(5572,1,1,1,false,0,0)     // Small Green Pouch
creature4Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature4Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature4Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 5 - Kobold Miner
// Group 1 Loot Percentage = 9% + 26% + 41% = 76%
addLoot(creature5Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[0,4,5])
addLoot(creature5Loot,tierOneBaseResources,[8,0,0,6,4,3,5])
creature5Loot.addItem(805,0.5,1,1,false,0,0)    // Small Red Pouch
creature5Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature5Loot.addItem(5571,0.5,1,1,false,0,0)   // Small Black Pouch
creature5Loot.addItem(5572,1,1,1,false,0,0)     // Small Green Pouch
creature5Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature5Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature5Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 6 - Salty Murloc
// Group 1 Loot Percentage = 8% + 4% + 41% = 53%
addLoot(creature6Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[8,0,0])
addLoot(creature6Loot,tierOneBaseResources,[0,0,0,0,0,4,0])
creature6Loot.addItem(805,0.5,1,1,false,0,0)    // Small Red Pouch
creature6Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature6Loot.addItem(5571,1,1,1,false,0,0)     // Small Black Pouch
creature6Loot.addItem(5572,0.5,1,1,false,0,0)   // Small Green Pouch
creature6Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature6Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature6Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 7 - Murloc Wavebender
// Group 1 Loot Percentage = 12% + 19% + 41% = 72%
addLoot(creature7Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[6,0,6])
addLoot(creature7Loot,tierOneBaseResources,[6,0,3,0,0,2,8])
creature7Loot.addItem(805,1,1,1,false,0,0)      // Small Red Pouch
creature7Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature7Loot.addItem(5571,0.5,1,1,false,0,0)   // Small Black Pouch
creature7Loot.addItem(5572,0.5,1,1,false,0,0)   // Small Green Pouch
creature7Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature7Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature7Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 8 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%
addLoot(creature8Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2])
addLoot(creature8Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
creature8Loot.addItem(805,1,1,1,false,0,0)      // Small Red Pouch
creature8Loot.addItem(828,0.5,1,1,false,0,0)    // Small Blue Pouch
creature8Loot.addItem(5571,0.5,1,1,false,0,0)   // Small Black Pouch
creature8Loot.addItem(5572,1,1,1,false,0,0)     // Small Green Pouch
creature8Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature8Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature8Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 9 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%
addLoot(creature9Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2])
addLoot(creature9Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
creature9Loot.addItem(805,0.5,1,1,false,0,0)    // Small Red Pouch
creature9Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature9Loot.addItem(5571,1,1,1,false,0,0)     // Small Black Pouch
creature9Loot.addItem(5572,0.5,1,1,false,0,0)   // Small Green Pouch
creature9Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature9Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature9Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

// Creature 10 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%
addLoot(creature10Loot,[tierOneClothMaterial,tierOneLeatherMaterial,tierOneMailMaterial],[5,2,2])
addLoot(creature10Loot,tierOneBaseResources,[5,5,5,5,5,5,5])
creature10Loot.addItem(805,0.5,1,1,false,0,0)    // Small Red Pouch
creature10Loot.addItem(828,1,1,1,false,0,0)      // Small Blue Pouch
creature10Loot.addItem(5571,0.5,1,1,false,0,0)   // Small Black Pouch
creature10Loot.addItem(5572,1,1,1,false,0,0)     // Small Green Pouch
creature10Loot.addItem(2070,10,1,1,false,0,0)    // Darnassian Bleu - Food for Low Levels
creature10Loot.addItem(4536,10,1,1,false,0,0)    // Shiny Red Apple - Food for Low Levels
creature10Loot.addItem(159,18,1,1,false,0,0)     // Refreshing Spring Water - Drinks for Low Levels

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
RareCreature1Loot.addItem(805,5,1,1,false,0,0)          // Small Red Pouch (6 slot bag)
RareCreature1Loot.addItem(828,5,1,1,false,0,0)          // Small Blue Pouch (6 slot bag)
RareCreature1Loot.addItem(5571,5,1,1,false,0,0)         // Small Black Pouch (6 slot bag)
RareCreature1Loot.addItem(5572,5,1,1,false,0,0)         // Small Green Pouch (6 slot bag)
RareCreature1Loot.addItem(4498,3,1,1,false,0,0)         // Brown Leather Satchel (8 slot bag)
RareCreature1Loot.addItem(869,0.025,1,1,false,1,0)      // Dazzling Longsword - Level 20 Epic           1h Sword
RareCreature1Loot.addItem(1982,0.025,1,1,false,1,0)     // Nightblade - Level 20 Epic                   2h Sword
RareCreature1Loot.addItem(870,0.025,1,1,false,1,0)      // Fiery War Axe - Level 20 Epic                2h Axe
RareCreature1Loot.addItem(868,0.025,1,1,false,1,0)      // Ardent Custodian - Level 20 Epic             2h Mace
RareCreature1Loot.addItem(873,0.025,1,1,false,1,0)      // Staff of Jordan - Level 20 Epic              Staff
RareCreature1Loot.addItem(1204,0.025,1,1,false,1,0)     // The Green Tower - Level 20 Epic              Shield
RareCreature1Loot.addItem(2825,0.025,1,1,false,1,0)     // Bow of Searing Arrows - Level 20 Epic        Bow
RareCreature1Loot.addItem(1980,0.025,1,1,false,1,0)     // Underworld Band - Level 20 Epic              Ring
RareCreature1Loot.addItem(2164,0.025,1,1,false,1,0)     // Gut Ripper - Level 20 Epic                   Dagger
RareCreature1Loot.addItem(11684,0.025,1,1,false,1,0)    // Ironfoe - Level 20 Epic                      1h Mace
RareCreature1Loot.addItem(18203,0.025,1,1,false,1,0)    // Eskhandar's Right Claw - Level 20 Epic       1h Mace
RareCreature1Loot.addItem(18202,0.025,1,1,false,1,0)    // Eskhandar's Left Claw - Level 20 Epic        1h Mace
RareCreature1Loot.addItem(13218,1,1,1,false,2,0)        // Fang of the Crystal Spider - Rare Item
RareCreature1Loot.addItem(13183,1,1,1,false,2,0)        // Venomspitter - Rare Item
RareCreature1Loot.addItem(11121,1,1,1,false,2,0)        // Darkwater Talwar - Rare Item
RareCreature1Loot.addItem(6904,1,1,1,false,2,0)         // Bite of Serra'kis - Rare Item
RareCreature1Loot.addItem(1481,1,1,1,false,2,0)         // Grimclaw - Rare Item
RareCreature1Loot.addItem(1482,1,1,1,false,2,0)         // Shadowfang - Rare Item
RareCreature1Loot.addItem(6909,1,1,1,false,2,0)         // Strike of the Hydra - Rare Item
RareCreature1Loot.addItem(9412,1,1,1,false,2,0)         // Galgann's Fireblaster - Rare Item
RareCreature1Loot.addItem(9419,1,1,1,false,2,0)         // Galgann's Firehammer - Rare Item
RareCreature1Loot.addItem(7719,1,1,1,false,2,0)         // Raging Berserker Helm - Rare Item
RareCreature1Loot.addItem(7718,1,1,1,false,2,0)         // Herod's Shoulder - Rare Item
RareCreature1Loot.addItem(10330,1,1,1,false,2,0)        // Scarlet Leggings - Rare Item
RareCreature1Loot.addItem(34227,1,1,1,false,2,0)        // Deadman's Hand - Rare Item
RareCreature1Loot.addItem(7711,1,1,1,false,2,0)         // Robe of Doan - Rare Item
RareCreature1Loot.addItem(7712,1,1,1,false,2,0)         // Mantle of Doan - Rare Item
RareCreature1Loot.addItem(11726,1,1,1,false,2,0)        // Savage Gladiator Chain - Rare Item
RareCreature1Loot.addItem(11728,1,1,1,false,2,0)        // Savage Gladiator Leggings - Rare Item
RareCreature1Loot.addItem(11729,1,1,1,false,2,0)        // Savage Gladiator Helm - Rare Item
RareCreature1Loot.addItem(11730,1,1,1,false,2,0)        // Savage Gladiator Grips - Rare Item
RareCreature1Loot.addItem(11731,1,1,1,false,2,0)        // Savage Gladiator Greaves - Rare Item
RareCreature1Loot.addItem(11608,1,1,1,false,2,0)        // Dark Iron Pulverizer - Rare Item
RareCreature1Loot.addItem(22301,1,1,1,false,2,0)        // Ironweave Robe - Rare Item
RareCreature1Loot.addItem(22302,1,1,1,false,2,0)        // Ironweave Cowl - Rare Item
RareCreature1Loot.addItem(22303,1,1,1,false,2,0)        // Ironweave Pants - Rare Item
RareCreature1Loot.addItem(22304,1,1,1,false,2,0)        // Ironweave Gloves - Rare Item
RareCreature1Loot.addItem(22305,1,1,1,false,2,0)        // Ironweave Mantle - Rare Item
RareCreature1Loot.addItem(22306,1,1,1,false,2,0)        // Ironweave Belt - Rare Item
RareCreature1Loot.addItem(22311,1,1,1,false,2,0)        // Ironweave Boots - Rare Item
RareCreature1Loot.addItem(22313,1,1,1,false,2,0)        // Ironweave Bracers - Rare Item
RareCreature1Loot.addItem(11920,1,1,1,false,2,0)        // Wraith Scythe - Rare Item
RareCreature1Loot.addItem(11810,1,1,1,false,2,0)        // Force of Will - Rare Item
RareCreature1Loot.addItem(11817,1,1,1,false,2,0)        // Lord General's Sword - Rare Item
RareCreature1Loot.addItem(11669,1,1,1,false,2,0)        // Naglering - Rare Item
RareCreature1Loot.addItem(11809,1,1,1,false,2,0)        // Flame Wrath - Rare Item
RareCreature1Loot.addItem(11832,1,1,1,false,2,0)        // Burst of Knowledge - Rare Item
RareCreature1Loot.addItem(11808,1,1,1,false,2,0)        // Circle of Flame - Rare Item


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
RareCreature2Loot.addItem(805,5,1,1,false,0,0)      // Small Red Pouch (6 slot bag)
RareCreature2Loot.addItem(828,5,1,1,false,0,0)      // Small Blue Pouch (6 slot bag)
RareCreature2Loot.addItem(5571,5,1,1,false,0,0)     // Small Black Pouch (6 slot bag)
RareCreature2Loot.addItem(5572,5,1,1,false,0,0)     // Small Green Pouch (6 slot bag)
RareCreature2Loot.addItem(4498,3,1,1,false,0,0)     // Brown Leather Satchel (8 slot bag)
RareCreature2Loot.addItem(869,0.025,1,1,false,1,0)      // Dazzling Longsword - Level 20 Epic           1h Sword
RareCreature2Loot.addItem(1982,0.025,1,1,false,1,0)     // Nightblade - Level 20 Epic                   2h Sword
RareCreature2Loot.addItem(870,0.025,1,1,false,1,0)      // Fiery War Axe - Level 20 Epic                2h Axe
RareCreature2Loot.addItem(868,0.025,1,1,false,1,0)      // Ardent Custodian - Level 20 Epic             2h Mace
RareCreature2Loot.addItem(873,0.025,1,1,false,1,0)      // Staff of Jordan - Level 20 Epic              Staff
RareCreature2Loot.addItem(1204,0.025,1,1,false,1,0)     // The Green Tower - Level 20 Epic              Shield
RareCreature2Loot.addItem(2825,0.025,1,1,false,1,0)     // Bow of Searing Arrows - Level 20 Epic        Bow
RareCreature2Loot.addItem(1980,0.025,1,1,false,1,0)     // Underworld Band - Level 20 Epic              Ring
RareCreature2Loot.addItem(2164,0.025,1,1,false,1,0)     // Gut Ripper - Level 20 Epic                   Dagger
RareCreature2Loot.addItem(11684,0.025,1,1,false,1,0)    // Ironfoe - Level 20 Epic                      1h Mace
RareCreature2Loot.addItem(18203,0.025,1,1,false,1,0)    // Eskhandar's Right Claw - Level 20 Epic       1h Mace
RareCreature2Loot.addItem(18202,0.025,1,1,false,1,0)    // Eskhandar's Left Claw - Level 20 Epic        1h Mace
RareCreature2Loot.addItem(13218,1,1,1,false,2,0)        // Fang of the Crystal Spider - Rare Item
RareCreature2Loot.addItem(13183,1,1,1,false,2,0)        // Venomspitter - Rare Item
RareCreature2Loot.addItem(11121,1,1,1,false,2,0)        // Darkwater Talwar - Rare Item
RareCreature2Loot.addItem(6904,1,1,1,false,2,0)         // Bite of Serra'kis - Rare Item
RareCreature2Loot.addItem(1481,1,1,1,false,2,0)         // Grimclaw - Rare Item
RareCreature2Loot.addItem(1482,1,1,1,false,2,0)         // Shadowfang - Rare Item
RareCreature2Loot.addItem(6909,1,1,1,false,2,0)         // Strike of the Hydra - Rare Item
RareCreature2Loot.addItem(9412,1,1,1,false,2,0)         // Galgann's Fireblaster - Rare Item
RareCreature2Loot.addItem(9419,1,1,1,false,2,0)         // Galgann's Firehammer - Rare Item
RareCreature2Loot.addItem(7719,1,1,1,false,2,0)         // Raging Berserker Helm - Rare Item
RareCreature2Loot.addItem(7718,1,1,1,false,2,0)         // Herod's Shoulder - Rare Item
RareCreature2Loot.addItem(10330,1,1,1,false,2,0)        // Scarlet Leggings - Rare Item
RareCreature2Loot.addItem(34227,1,1,1,false,2,0)        // Deadman's Hand - Rare Item
RareCreature2Loot.addItem(7711,1,1,1,false,2,0)         // Robe of Doan - Rare Item
RareCreature2Loot.addItem(7712,1,1,1,false,2,0)         // Mantle of Doan - Rare Item
RareCreature2Loot.addItem(11726,1,1,1,false,2,0)        // Savage Gladiator Chain - Rare Item
RareCreature2Loot.addItem(11728,1,1,1,false,2,0)        // Savage Gladiator Leggings - Rare Item
RareCreature2Loot.addItem(11729,1,1,1,false,2,0)        // Savage Gladiator Helm - Rare Item
RareCreature2Loot.addItem(11730,1,1,1,false,2,0)        // Savage Gladiator Grips - Rare Item
RareCreature2Loot.addItem(11731,1,1,1,false,2,0)        // Savage Gladiator Greaves - Rare Item
RareCreature2Loot.addItem(11608,1,1,1,false,2,0)        // Dark Iron Pulverizer - Rare Item
RareCreature2Loot.addItem(22301,1,1,1,false,2,0)        // Ironweave Robe - Rare Item
RareCreature2Loot.addItem(22302,1,1,1,false,2,0)        // Ironweave Cowl - Rare Item
RareCreature2Loot.addItem(22303,1,1,1,false,2,0)        // Ironweave Pants - Rare Item
RareCreature2Loot.addItem(22304,1,1,1,false,2,0)        // Ironweave Gloves - Rare Item
RareCreature2Loot.addItem(22305,1,1,1,false,2,0)        // Ironweave Mantle - Rare Item
RareCreature2Loot.addItem(22306,1,1,1,false,2,0)        // Ironweave Belt - Rare Item
RareCreature2Loot.addItem(22311,1,1,1,false,2,0)        // Ironweave Boots - Rare Item
RareCreature2Loot.addItem(22313,1,1,1,false,2,0)        // Ironweave Bracers - Rare Item
RareCreature2Loot.addItem(11920,1,1,1,false,2,0)        // Wraith Scythe - Rare Item
RareCreature2Loot.addItem(11810,1,1,1,false,2,0)        // Force of Will - Rare Item
RareCreature2Loot.addItem(11817,1,1,1,false,2,0)        // Lord General's Sword - Rare Item
RareCreature2Loot.addItem(11669,1,1,1,false,2,0)        // Naglering - Rare Item
RareCreature2Loot.addItem(11809,1,1,1,false,2,0)        // Flame Wrath - Rare Item
RareCreature2Loot.addItem(11832,1,1,1,false,2,0)        // Burst of Knowledge - Rare Item
RareCreature2Loot.addItem(11808,1,1,1,false,2,0)        // Circle of Flame - Rare Item

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
RareCreature3Loot.addItem(805,5,1,1,false,0,0)      // Small Red Pouch (6 slot bag)
RareCreature3Loot.addItem(828,5,1,1,false,0,0)      // Small Blue Pouch (6 slot bag)
RareCreature3Loot.addItem(5571,5,1,1,false,0,0)     // Small Black Pouch (6 slot bag)
RareCreature3Loot.addItem(5572,5,1,1,false,0,0)     // Small Green Pouch (6 slot bag)
RareCreature3Loot.addItem(4498,3,1,1,false,0,0)     // Brown Leather Satchel (8 slot bag)
RareCreature3Loot.addItem(869,0.025,1,1,false,1,0)      // Dazzling Longsword - Level 20 Epic           1h Sword
RareCreature3Loot.addItem(1982,0.025,1,1,false,1,0)     // Nightblade - Level 20 Epic                   2h Sword
RareCreature3Loot.addItem(870,0.025,1,1,false,1,0)      // Fiery War Axe - Level 20 Epic                2h Axe
RareCreature3Loot.addItem(868,0.025,1,1,false,1,0)      // Ardent Custodian - Level 20 Epic             2h Mace
RareCreature3Loot.addItem(873,0.025,1,1,false,1,0)      // Staff of Jordan - Level 20 Epic              Staff
RareCreature3Loot.addItem(1204,0.025,1,1,false,1,0)     // The Green Tower - Level 20 Epic              Shield
RareCreature3Loot.addItem(2825,0.025,1,1,false,1,0)     // Bow of Searing Arrows - Level 20 Epic        Bow
RareCreature3Loot.addItem(1980,0.025,1,1,false,1,0)     // Underworld Band - Level 20 Epic              Ring
RareCreature3Loot.addItem(2164,0.025,1,1,false,1,0)     // Gut Ripper - Level 20 Epic                   Dagger
RareCreature3Loot.addItem(11684,0.025,1,1,false,1,0)    // Ironfoe - Level 20 Epic                      1h Mace
RareCreature3Loot.addItem(18203,0.025,1,1,false,1,0)    // Eskhandar's Right Claw - Level 20 Epic       1h Mace
RareCreature3Loot.addItem(18202,0.025,1,1,false,1,0)    // Eskhandar's Left Claw - Level 20 Epic        1h Mace
RareCreature3Loot.addItem(13218,1,1,1,false,2,0)        // Fang of the Crystal Spider - Rare Item
RareCreature3Loot.addItem(13183,1,1,1,false,2,0)        // Venomspitter - Rare Item
RareCreature3Loot.addItem(11121,1,1,1,false,2,0)        // Darkwater Talwar - Rare Item
RareCreature3Loot.addItem(6904,1,1,1,false,2,0)         // Bite of Serra'kis - Rare Item
RareCreature3Loot.addItem(1481,1,1,1,false,2,0)         // Grimclaw - Rare Item
RareCreature3Loot.addItem(1482,1,1,1,false,2,0)         // Shadowfang - Rare Item
RareCreature3Loot.addItem(6909,1,1,1,false,2,0)         // Strike of the Hydra - Rare Item
RareCreature3Loot.addItem(9412,1,1,1,false,2,0)         // Galgann's Fireblaster - Rare Item
RareCreature3Loot.addItem(9419,1,1,1,false,2,0)         // Galgann's Firehammer - Rare Item
RareCreature3Loot.addItem(7719,1,1,1,false,2,0)         // Raging Berserker Helm - Rare Item
RareCreature3Loot.addItem(7718,1,1,1,false,2,0)         // Herod's Shoulder - Rare Item
RareCreature3Loot.addItem(10330,1,1,1,false,2,0)        // Scarlet Leggings - Rare Item
RareCreature3Loot.addItem(34227,1,1,1,false,2,0)        // Deadman's Hand - Rare Item
RareCreature3Loot.addItem(7711,1,1,1,false,2,0)         // Robe of Doan - Rare Item
RareCreature3Loot.addItem(7712,1,1,1,false,2,0)         // Mantle of Doan - Rare Item
RareCreature3Loot.addItem(11726,1,1,1,false,2,0)        // Savage Gladiator Chain - Rare Item
RareCreature3Loot.addItem(11728,1,1,1,false,2,0)        // Savage Gladiator Leggings - Rare Item
RareCreature3Loot.addItem(11729,1,1,1,false,2,0)        // Savage Gladiator Helm - Rare Item
RareCreature3Loot.addItem(11730,1,1,1,false,2,0)        // Savage Gladiator Grips - Rare Item
RareCreature3Loot.addItem(11731,1,1,1,false,2,0)        // Savage Gladiator Greaves - Rare Item
RareCreature3Loot.addItem(11608,1,1,1,false,2,0)        // Dark Iron Pulverizer - Rare Item
RareCreature3Loot.addItem(22301,1,1,1,false,2,0)        // Ironweave Robe - Rare Item
RareCreature3Loot.addItem(22302,1,1,1,false,2,0)        // Ironweave Cowl - Rare Item
RareCreature3Loot.addItem(22303,1,1,1,false,2,0)        // Ironweave Pants - Rare Item
RareCreature3Loot.addItem(22304,1,1,1,false,2,0)        // Ironweave Gloves - Rare Item
RareCreature3Loot.addItem(22305,1,1,1,false,2,0)        // Ironweave Mantle - Rare Item
RareCreature3Loot.addItem(22306,1,1,1,false,2,0)        // Ironweave Belt - Rare Item
RareCreature3Loot.addItem(22311,1,1,1,false,2,0)        // Ironweave Boots - Rare Item
RareCreature3Loot.addItem(22313,1,1,1,false,2,0)        // Ironweave Bracers - Rare Item
RareCreature3Loot.addItem(11920,1,1,1,false,2,0)        // Wraith Scythe - Rare Item
RareCreature3Loot.addItem(11810,1,1,1,false,2,0)        // Force of Will - Rare Item
RareCreature3Loot.addItem(11817,1,1,1,false,2,0)        // Lord General's Sword - Rare Item
RareCreature3Loot.addItem(11669,1,1,1,false,2,0)        // Naglering - Rare Item
RareCreature3Loot.addItem(11809,1,1,1,false,2,0)        // Flame Wrath - Rare Item
RareCreature3Loot.addItem(11832,1,1,1,false,2,0)        // Burst of Knowledge - Rare Item
RareCreature3Loot.addItem(11808,1,1,1,false,2,0)        // Circle of Flame - Rare Item

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
DemiBosscreature1Loot.addItem(805,5,1,1,false,0,0)      // Small Red Pouch (6 slot bag)
DemiBosscreature1Loot.addItem(828,5,1,1,false,0,0)      // Small Blue Pouch (6 slot bag)
DemiBosscreature1Loot.addItem(5571,5,1,1,false,0,0)     // Small Black Pouch (6 slot bag)
DemiBosscreature1Loot.addItem(5572,5,1,1,false,0,0)     // Small Green Pouch (6 slot bag)
DemiBosscreature1Loot.addItem(4498,3,1,1,false,0,0)     // Brown Leather Satchel (8 slot bag)

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
DemiBosscreature2Loot.addItem(805,5,1,1,false,0,0)      // Small Red Pouch (6 slot bag)
DemiBosscreature2Loot.addItem(828,5,1,1,false,0,0)      // Small Blue Pouch (6 slot bag)
DemiBosscreature2Loot.addItem(5571,5,1,1,false,0,0)     // Small Black Pouch (6 slot bag)
DemiBosscreature2Loot.addItem(5572,5,1,1,false,0,0)     // Small Green Pouch (6 slot bag)
DemiBosscreature2Loot.addItem(4498,3,1,1,false,0,0)     // Brown Leather Satchel (8 slot bag)

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
Bosscreature1Loot.addItem(805,5,1,1,false,0,0)      // Small Red Pouch (6 slot bag)
Bosscreature1Loot.addItem(828,5,1,1,false,0,0)      // Small Blue Pouch (6 slot bag)
Bosscreature1Loot.addItem(5571,5,1,1,false,0,0)     // Small Black Pouch (6 slot bag)
Bosscreature1Loot.addItem(5572,5,1,1,false,0,0)     // Small Green Pouch (6 slot bag)
Bosscreature1Loot.addItem(4498,3,1,1,false,0,0)     // Brown Leather Satchel (8 slot bag)
























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
