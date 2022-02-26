//Pearl, Epaulet, Chain, Metal, Reinforced Metal, Stick,Dust
//Cloth, Leather, Mail

import {
    addLootToCreature,
    addLootToCreatureSingleChance,
} from "../../functions/npc-functions";

import { KoboldScroll } from "../champion-scrolls/kobold-champion-scroll";
import { MurlocScroll } from "../champion-scrolls/murloc-champion-scroll";
import { WorgScroll } from "../champion-scrolls/ravaging-worg-champion-scroll";
import {
    SmallRedPouch,
    SmallBluePouch,
    SmallBlackPouch,
    SmallGreenPouch,
    BrownLeatherSatchel,
    DarnassianBleu,
    ShinyRedApple,
    RefreshingSpringWater,
    ExpScroll,
    BoarSkin,
    MeltedCandle,
    LargeCandle,
    MagicCandle,
    BladedPickaxe,
    EyeofDestiny,
    DazzlingLongsword,
    Nightblade,
    FieryWarAxe,
    ArdentCustodian,
    StaffofJordan,
    TheGreenTower,
    BowofSearingArrows,
    UnderworldBand,
    GutRipper,
    Ironfoe,
    EskhandarsRightClaw,
    EskhandarsLeftClaw,
    FangoftheCrystalSpider,
    GoblinDragonGun,
    DarkwaterTalwar,
    BiteofSerrakis,
    Grimclaw,
    Shadowfang,
    StrikeoftheHydra,
    GalgannsFireblaster,
    GalgannsFirehammer,
    RagingBerserkersHelm,
    HerodsShoulder,
    ScarletLeggings,
    DeadmansHand,
    RobeofDoan,
    MantleofDoan,
    SavageGladiatorChain,
    SavageGladiatorLeggings,
    SavageGladiatorHelm,
    SavageGladiatorGrips,
    SavageGladiatorGreaves,
    DarkIronPulverizer,
    IronweaveRobe,
    IronweaveCowl,
    IronweavePants,
    IronweaveGloves,
    IronweaveMantle,
    IronweaveBelt,
    IronweaveBoots,
    IronweaveBracers,
    WraithScythe,
    ForceofWill,
    LordGeneralsSword,
    Naglering,
    FlameWrath,
    BurstofKnowledge,
    CircleofFlame,
    OrbofPower,
} from "../item-manifest";
import {
    creature2Loot,
    creature3Loot,
    creature4Loot,
    creature5Loot,
    creature6Loot,
    creature7Loot,
    creature8Loot,
    creature9Loot,
    creature10Loot,
    RareCreature1Loot,
    RareCreature2Loot,
    RareCreature3Loot,
    RareCreature4Loot,
    DemiBosscreature1Loot,
    DemiBosscreature2Loot,
    Bosscreature1Loot,
} from "./zone-1-creatures";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creature 2 - Animal - Young Wolf
// Group 1 Loot Percentage = 6% + 13% + 41% = 60%
addLootToCreature(
    creature2Loot,
    [
        WorgScroll.ID, // Worg Champion Scroll
    ],
    [0.5],
    2
);

/*Bags and Food - Group 0*/
addLootToCreature(
    creature2Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Quest Requirements - Group 8*/


// Creature 3 - Wild Boar
// Group 1 Loot Percentage = 7% + 4% + 41% = 52%

/*Bags and Food - Group 0*/
addLootToCreature(
    creature3Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
//Boarskin
addLootToCreature(creature3Loot, [BoarSkin.ID], [100], 7);
/*Quest Requirements - Group 8*/


// Creature 4 - Kobold Foreman
// Group 1 Loot Percentage = 8% + 25% + 41% = 74%
addLootToCreature(
    creature4Loot,
    [
        KoboldScroll.ID, // Worg Champion Scroll
    ],
    [0.5],
    2
);

/*Bags and Food - Group 0*/
addLootToCreature(
    creature4Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Quest Requirements - Group 8*/


// Creature 5 - Kobold Miner
// Group 1 Loot Percentage = 9% + 26% + 41% = 76%
addLootToCreature(
    creature5Loot,
    [
        KoboldScroll.ID, // Worg Champion Scroll
    ],
    [0.5],
    2
);

/*Bags and Food - Group 0*/
addLootToCreature(
    creature5Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
addLootToCreature(
    creature5Loot,
    [MeltedCandle.ID, LargeCandle.ID, MagicCandle.ID, BladedPickaxe.ID],
    [3, 2, 2, 0.25],
    1
);
/*Quest Requirements - Group 8*/

// Creature 6 - Salty Murloc
// Group 1 Loot Percentage = 8% + 4% + 41% = 53%
/*Murloc Champion Scroll - Group 2*/
addLootToCreature(
    creature6Loot,
    [
        MurlocScroll.ID, // Murloc Champion Scroll
    ],
    [0.5],
    2
);

/*Bags and Food - Group 0*/
addLootToCreature(
    creature6Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Quest Requirements - Group 8*/

// Creature 7 - Murloc Wavebender
// Group 1 Loot Percentage = 12% + 19% + 41% = 72%
addLootToCreature(
    creature7Loot,
    [
        MurlocScroll.ID, // Murloc Champion Scroll
    ],
    [0.5],
    2
);

/*Bags and Food - Group 0*/
addLootToCreature(
    creature7Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Quest Requirements - Group 8*/


// Creature 8 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%

addLootToCreature(
    creature8Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Quest Requirements - Group 8*/


// Creature 9 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%

/*Bags and Food - Group 0*/
addLootToCreature(
    creature9Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Quest Requirements - Group 8*/


// Creature 10 - Placeholder Creature
// Group 1 Loot Percentage = 9% + 35% + 41% = 85%

/*Bags and Food - Group 0*/
addLootToCreature(
    creature10Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        DarnassianBleu.ID,
        ShinyRedApple.ID,
        RefreshingSpringWater.ID,
    ],
    [1, 1, 0.5, 0.5, 0, 10, 10, 18],
    0
);
/*Quest Requirements - Group 8*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rare Creature 1 - The Miner (Rare Kobold)
// Group 0 (Resources and Food) Loot Percentage         = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300%
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
 // Tier 1 Scraps
 // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)

 // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)

/*Bags - Group 0*/
addLootToCreature(
    RareCreature1Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        ExpScroll.ID,
        EyeofDestiny.ID,
    ],
    [5, 5, 5, 5, 3, 5, 0.05],
    0
);
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(
    RareCreature1Loot,
    [
        DazzlingLongsword.ID,
        Nightblade.ID,
        FieryWarAxe.ID,
        ArdentCustodian.ID,
        StaffofJordan.ID,
        TheGreenTower.ID,
        BowofSearingArrows.ID,
        UnderworldBand.ID,
        GutRipper.ID,
        Ironfoe.ID,
        EskhandarsRightClaw.ID,
        EskhandarsLeftClaw.ID,
    ],
    0.025,
    1
);
/*Rare Items - Group 2*/
addLootToCreatureSingleChance(
    RareCreature1Loot,
    [
        FangoftheCrystalSpider.ID,
        GoblinDragonGun.ID,
        DarkwaterTalwar.ID,
        BiteofSerrakis.ID,
        Grimclaw.ID,
        Shadowfang.ID,
        StrikeoftheHydra.ID,
        GalgannsFireblaster.ID,
        GalgannsFirehammer.ID,
        RagingBerserkersHelm.ID,
        HerodsShoulder.ID,
        ScarletLeggings.ID,
        DeadmansHand.ID,
        RobeofDoan.ID,
        MantleofDoan.ID,
        SavageGladiatorChain.ID,
        SavageGladiatorLeggings.ID,
        SavageGladiatorHelm.ID,
        SavageGladiatorGrips.ID,
        SavageGladiatorGreaves.ID,
        DarkIronPulverizer.ID,
        IronweaveRobe.ID,
        IronweaveCowl.ID,
        IronweavePants.ID,
        IronweaveGloves.ID,
        IronweaveMantle.ID,
        IronweaveBelt.ID,
        IronweaveBoots.ID,
        IronweaveBracers.ID,
        WraithScythe.ID,
        ForceofWill.ID,
        LordGeneralsSword.ID,
        Naglering.ID,
        FlameWrath.ID,
        BurstofKnowledge.ID,
        CircleofFlame.ID,
    ],
    0.2,
    2
);
addLootToCreatureSingleChance(RareCreature1Loot, [OrbofPower.ID], 1, 3);

// Rare Creature 2 - Fang (Rare Wolf)
// Group 1 Loot Percentage = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300%
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
addLootToCreature(
    RareCreature2Loot,
    [
        WorgScroll.ID, // Worg Champion Scroll
    ],
    [2.0],
    3
);
 // Tier 1 Scraps
 // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)
 // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)

/*Bags - Group 0*/
addLootToCreature(
    RareCreature2Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        ExpScroll.ID,
        EyeofDestiny.ID,
    ],
    [5, 5, 5, 5, 3, 5, 0.05],
    0
);
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(
    RareCreature2Loot,
    [
        DazzlingLongsword.ID,
        Nightblade.ID,
        FieryWarAxe.ID,
        ArdentCustodian.ID,
        StaffofJordan.ID,
        TheGreenTower.ID,
        BowofSearingArrows.ID,
        UnderworldBand.ID,
        GutRipper.ID,
        Ironfoe.ID,
        EskhandarsRightClaw.ID,
        EskhandarsLeftClaw.ID,
    ],
    0.025,
    1
);
/*Rare Items - Group 0*/
addLootToCreatureSingleChance(
    RareCreature2Loot,
    [
        FangoftheCrystalSpider.ID,
        GoblinDragonGun.ID,
        DarkwaterTalwar.ID,
        BiteofSerrakis.ID,
        Grimclaw.ID,
        Shadowfang.ID,
        StrikeoftheHydra.ID,
        GalgannsFireblaster.ID,
        GalgannsFirehammer.ID,
        RagingBerserkersHelm.ID,
        HerodsShoulder.ID,
        ScarletLeggings.ID,
        DeadmansHand.ID,
        RobeofDoan.ID,
        MantleofDoan.ID,
        SavageGladiatorChain.ID,
        SavageGladiatorLeggings.ID,
        SavageGladiatorHelm.ID,
        SavageGladiatorGrips.ID,
        SavageGladiatorGreaves.ID,
        DarkIronPulverizer.ID,
        IronweaveRobe.ID,
        IronweaveCowl.ID,
        IronweavePants.ID,
        IronweaveGloves.ID,
        IronweaveMantle.ID,
        IronweaveBelt.ID,
        IronweaveBoots.ID,
        IronweaveBracers.ID,
        WraithScythe.ID,
        ForceofWill.ID,
        LordGeneralsSword.ID,
        Naglering.ID,
        FlameWrath.ID,
        BurstofKnowledge.ID,
        CircleofFlame.ID,
    ],
    0.2,
    2
);
addLootToCreatureSingleChance(RareCreature2Loot, [OrbofPower.ID], 1, 3);

// Rare Creature 3 - Murglegurgle (Rare Murloc)
// Group 1 Loot Percentage = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300%
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
addLootToCreature(
    RareCreature3Loot,
    [
        MurlocScroll.ID, // Murloc Champion Scroll
    ],
    [2.0],
    3
);
 // Tier 1 Scraps
 // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)

 // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)

/*Bags - Group 0*/
addLootToCreature(
    RareCreature3Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        ExpScroll.ID,
        EyeofDestiny.ID,
    ],
    [5, 5, 5, 5, 3, 5, 0.05],
    0
);
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(
    RareCreature3Loot,
    [
        DazzlingLongsword.ID,
        Nightblade.ID,
        FieryWarAxe.ID,
        ArdentCustodian.ID,
        StaffofJordan.ID,
        TheGreenTower.ID,
        BowofSearingArrows.ID,
        UnderworldBand.ID,
        GutRipper.ID,
        Ironfoe.ID,
        EskhandarsRightClaw.ID,
        EskhandarsLeftClaw.ID,
    ],
    0.025,
    1
);
/*Rare Items - Group 2*/
addLootToCreatureSingleChance(
    RareCreature3Loot,
    [
        FangoftheCrystalSpider.ID,
        GoblinDragonGun.ID,
        DarkwaterTalwar.ID,
        BiteofSerrakis.ID,
        Grimclaw.ID,
        Shadowfang.ID,
        StrikeoftheHydra.ID,
        GalgannsFireblaster.ID,
        GalgannsFirehammer.ID,
        RagingBerserkersHelm.ID,
        HerodsShoulder.ID,
        ScarletLeggings.ID,
        DeadmansHand.ID,
        RobeofDoan.ID,
        MantleofDoan.ID,
        SavageGladiatorChain.ID,
        SavageGladiatorLeggings.ID,
        SavageGladiatorHelm.ID,
        SavageGladiatorGrips.ID,
        SavageGladiatorGreaves.ID,
        DarkIronPulverizer.ID,
        IronweaveRobe.ID,
        IronweaveCowl.ID,
        IronweavePants.ID,
        IronweaveGloves.ID,
        IronweaveMantle.ID,
        IronweaveBelt.ID,
        IronweaveBoots.ID,
        IronweaveBracers.ID,
        WraithScythe.ID,
        ForceofWill.ID,
        LordGeneralsSword.ID,
        Naglering.ID,
        FlameWrath.ID,
        BurstofKnowledge.ID,
        CircleofFlame.ID,
    ],
    0.2,
    2
);
addLootToCreatureSingleChance(RareCreature3Loot, [OrbofPower.ID], 1, 3);

// Rare Creature 4 - Unknown
// Group 1 Loot Percentage = 9% + 3% + 35% + 7% + + 4.625% + 23% = 81.625%
// Group 1 (Epic Equipment) Loot Percentage  = 0.300%
// Group 2 (Rare Equipment) Loot Percentage  = 36.00%
 // Tier 1 Scraps
 // Tier 2 Scraps (Only on Rare Mobs, Low Drop Chance)

 // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)

/*Bags - Group 0*/
addLootToCreature(
    RareCreature4Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        ExpScroll.ID,
        EyeofDestiny.ID,
    ],
    [5, 5, 5, 5, 3, 5, 0.05],
    0
);
/*Epic Items - Group 1*/
addLootToCreatureSingleChance(
    RareCreature4Loot,
    [
        DazzlingLongsword.ID,
        Nightblade.ID,
        FieryWarAxe.ID,
        ArdentCustodian.ID,
        StaffofJordan.ID,
        TheGreenTower.ID,
        BowofSearingArrows.ID,
        UnderworldBand.ID,
        GutRipper.ID,
        Ironfoe.ID,
        EskhandarsRightClaw.ID,
        EskhandarsLeftClaw.ID,
    ],
    0.025,
    1
);
/*Rare Items - Group 0*/
addLootToCreatureSingleChance(
    RareCreature4Loot,
    [
        FangoftheCrystalSpider.ID,
        GoblinDragonGun.ID,
        DarkwaterTalwar.ID,
        BiteofSerrakis.ID,
        Grimclaw.ID,
        Shadowfang.ID,
        StrikeoftheHydra.ID,
        GalgannsFireblaster.ID,
        GalgannsFirehammer.ID,
        RagingBerserkersHelm.ID,
        HerodsShoulder.ID,
        ScarletLeggings.ID,
        DeadmansHand.ID,
        RobeofDoan.ID,
        MantleofDoan.ID,
        SavageGladiatorChain.ID,
        SavageGladiatorLeggings.ID,
        SavageGladiatorHelm.ID,
        SavageGladiatorGrips.ID,
        SavageGladiatorGreaves.ID,
        DarkIronPulverizer.ID,
        IronweaveRobe.ID,
        IronweaveCowl.ID,
        IronweavePants.ID,
        IronweaveGloves.ID,
        IronweaveMantle.ID,
        IronweaveBelt.ID,
        IronweaveBoots.ID,
        IronweaveBracers.ID,
        WraithScythe.ID,
        ForceofWill.ID,
        LordGeneralsSword.ID,
        Naglering.ID,
        FlameWrath.ID,
        BurstofKnowledge.ID,
        CircleofFlame.ID,
    ],
    0.2,
    2
);
addLootToCreatureSingleChance(RareCreature4Loot, [OrbofPower.ID], 1, 3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Demiboss Creature 1 - Lieutenant Commander Springraven
// Group 1 Loot Percentage = 9% + 35% + 7% + + 4.625% + 23% = 78.625%

/*Bags - Group 0*/
addLootToCreature(
    DemiBosscreature1Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
        ExpScroll.ID,
    ],
    [5, 5, 5, 5, 3, 5],
    0
);
addLootToCreatureSingleChance(DemiBosscreature1Loot, [OrbofPower.ID], 1, 3);

// Demiboss Creature 2 - Widow Fae
// Group 1 Loot Percentage = 9% + 35% + 7% + + 4.625% + 23% = 78.625%
 // Tier 1 Scraps

 // Tier 2 Base Resources (Only on Rare Mobs, Low Drop Chance)

/*Bags - Group 0*/
addLootToCreature(
    DemiBosscreature2Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
    ],
    [5, 5, 5, 5, 3],
    0
);
addLootToCreatureSingleChance(DemiBosscreature2Loot, [OrbofPower.ID], 1, 3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boss Creature 1 - Maxim Wintergrave
// Group 1 Loot Percentage = 9% + 35% + 7% + + 4.625% + 23% = 78.625%

/*Bags - Group 0*/
addLootToCreature(
    Bosscreature1Loot,
    [
        SmallRedPouch.ID,
        SmallBluePouch.ID,
        SmallBlackPouch.ID,
        SmallGreenPouch.ID,
        BrownLeatherSatchel.ID,
    ],
    [5, 5, 5, 5, 3],
    0
);
addLootToCreatureSingleChance(Bosscreature1Loot, [OrbofPower.ID], 1, 3);
