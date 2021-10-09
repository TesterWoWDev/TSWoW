import { addLootToGobChest, addLootToGobChestSingleChanceMultiGroup, addLootToGobChestSingleChance } from "../../functions/gob-functions"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnMultiGobTimer } from "../../functions/spawning-functions"
import { tierTwoBaseResources, tierTwoMailMaterial, tierTwoLeatherMaterial, tierTwoClothMaterial } from "../../items/armor/tier2-set"
import { SmallSackofCoins, LargeSackofCoins } from "../../items/currencies"
import { DazzlingLongsword, Nightblade, FieryWarAxe, ArdentCustodian, StaffofJordan, TheGreenTower, BowofSearingArrows, UnderworldBand, GutRipper, Ironfoe, EskhandarsRightClaw, EskhandarsLeftClaw, FangoftheCrystalSpider, GoblinDragonGun, DarkwaterTalwar, BiteofSerrakis, Grimclaw, Shadowfang, StrikeoftheHydra, GalgannsFireblaster, GalgannsFirehammer, RagingBerserkersHelm, HerodsShoulder, ScarletLeggings, DeadmansHand, RobeofDoan, MantleofDoan, SavageGladiatorChain, SavageGladiatorLeggings, SavageGladiatorHelm, SavageGladiatorGrips, SavageGladiatorGreaves, DarkIronPulverizer, IronweaveRobe, IronweaveCowl, IronweavePants, IronweaveGloves, IronweaveMantle, IronweaveBelt, IronweaveBoots, IronweaveBracers, WraithScythe, ForceofWill, LordGeneralsSword, Naglering, FlameWrath, BurstofKnowledge, CircleofFlame, FineLeatherBoots, FineLeatherCloak, FineLeatherGloves, FineLeatherTunic, FineLeatherBelt, EmbossedLeatherVest, EmbossedLeatherBoots, EmbossedLeatherCloak, EmbossedLeatherGloves, EmbossedLeatherPants, AzureSilkGloves, AzureSilkVest, AzureSilkPants, AzureSilkHood, AzureSilkBelt, AzureSilkCloak, CrimsonSilkBelt, CrimsonSilkCloak, CrimsonSilkVest, CrimsonSilkShoulders, CrimsonSilkPantaloons, CrimsonSilkRobe, CrimsonSilkGloves, SilveredBronzeBreastplate, SilveredBronzeShoulders, SilveredBronzeBoots, SilveredBronzeGauntlets, BarbaricIronShoulders, BarbaricIronBreastplate, BarbaricIronHelm, BarbaricIronBoots, BarbaricIronGloves, InfernalTricksterLeggings, PhytoskinSpaulders, BladeofEternalDarkness, GatorbiteAxe, FrightskullShaft, SkullforgeReaver, RunebladeofBaronRivendare, BladeoftheWretched, BlazingRapier, WickedMithrilBlade, SearingGoldenBlade, BuzzSaw, BuzzerBlade, Rockslicer, RhahkZorsHammer, GoldplatedBuckler, StaffofNobles, EmberstoneStaff, ImpalingHarpoon, ThiefsBlade, SmitesReaver, SmitesMightyHammer, CookiesTenderizer, CookiesStirringRod, IronKnuckles, PrisonShank, KamsWalkingStick, SerpentsKiss, KreshsBack, WornTurtleShellShield, SerpentsShoulders, BoahnsFang, ArmoroftheFang, LeggingsoftheFang, FootpadsoftheFang, BeltoftheFang, GlovesoftheFang, MinorManaPotion, MinorHealingPotion, MinorRejuvenationPotion, DiscoloredHealingPotion, LesserHealingPotion, SwiftnessPotion, RagePotion, SwimSpeedPotion, LesserManaPotion, ScrollofSpiritVIII, ScrollofProtectionVIII, ScrollofAgilityVIII, ScrollofIntellectVIII, ScrollofStaminaVIII, ScrollofStrengthVIII } from "../item-manifest"

export let Zone2Chest1 = makeResourceNode('Rusted Chest',259,57,'zone2chest1-chest')
spawnMultiGobTimer(Zone2Chest1.ID,[
    [-8647.533203,-202.248276,-0.209373,6.281112],
    [-8674.801758,-278.472015,-0.104158,0.229623],
    [-8638.872070,-335.586029,17.164379,2.350204],
    [-8702.491211,-343.067596,14.331285,3.858171],
    [-8728.809570,-317.459991,15.258203,1.234941],
    [-8724.637695,-262.562744,14.660769,5.181568],
    [-8780.801758,-319.893280,15.376326,2.817525],
    [-8888.648438,-232.068863,15.119808,5.311168],
    [-8907.715820,-356.505463,18.879143,0.814770],
    [-8873.044922,-386.341583,15.474996,2.707589],
    [-8893.497070,-408.227325,13.018167,3.571522],
    [-8910.831055,-441.169769,13.392431,3.265209],
    [-8890.876953,-467.356659,15.559058,0.017597],
    [-8965.289062,-459.195435,9.505338,5.256206],
    [-8919.902344,-449.012360,17.816839,6.104431]],600)
Zone2Chest1.Size.set(1)
addLootToGobChest(Zone2Chest1,tierTwoBaseResources,[4,3,1,2,2,5,3])
/*Base Resources - Group 5*/  
addLootToGobChestSingleChanceMultiGroup(Zone2Chest1,[
    tierTwoMailMaterial,            tierTwoLeatherMaterial,             tierTwoClothMaterial]
,33,1,3,5)
/*Epic Items - Group 0*/      
addLootToGobChestSingleChance(Zone2Chest1,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.0125)
/*Rare Items - Group 0*/      
addLootToGobChestSingleChance(Zone2Chest1,[
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
],0.2)
/*Green Armor - Group 1*/
addLootToGobChestSingleChance(Zone2Chest1,[
    FineLeatherBoots.ID,            FineLeatherCloak.ID,                FineLeatherGloves.ID,
    FineLeatherTunic.ID,            FineLeatherBelt.ID,                 EmbossedLeatherVest.ID,
    EmbossedLeatherBoots.ID,        EmbossedLeatherCloak.ID,            EmbossedLeatherGloves.ID,
    EmbossedLeatherPants.ID,        AzureSilkGloves.ID,                 AzureSilkVest.ID,
    AzureSilkPants.ID,              AzureSilkHood.ID,                   AzureSilkBelt.ID,
    AzureSilkCloak.ID,              CrimsonSilkBelt.ID,                 CrimsonSilkCloak.ID,
    CrimsonSilkVest.ID,             CrimsonSilkShoulders.ID,            CrimsonSilkPantaloons.ID,
    CrimsonSilkRobe.ID,             CrimsonSilkGloves.ID,               SilveredBronzeBreastplate.ID,
    SilveredBronzeShoulders.ID,     SilveredBronzeBoots.ID,             SilveredBronzeGauntlets.ID,
    BarbaricIronShoulders.ID,       BarbaricIronBreastplate.ID,         BarbaricIronHelm.ID,
    BarbaricIronBoots.ID,           BarbaricIronGloves.ID
],3,1)
/*Green Armor - Part 2 - Group 6*/
addLootToGobChestSingleChance(Zone2Chest1,[
    InfernalTricksterLeggings.ID,   PhytoskinSpaulders.ID,              BladeofEternalDarkness.ID,
    GatorbiteAxe.ID,                FrightskullShaft.ID,                SkullforgeReaver.ID,
    RunebladeofBaronRivendare.ID,   BladeoftheWretched.ID
],3,6)
/*Green Weps - Group 2*/      
addLootToGobChestSingleChance(Zone2Chest1,
    [BlazingRapier.ID,              WickedMithrilBlade.ID,              SearingGoldenBlade.ID,
    BuzzSaw.ID,                     BuzzerBlade.ID,                     Rockslicer.ID,                      RhahkZorsHammer.ID,
    GoldplatedBuckler.ID,           StaffofNobles.ID,                   EmberstoneStaff.ID,
    ImpalingHarpoon.ID,             ThiefsBlade.ID,                     SmitesReaver.ID,
    SmitesMightyHammer.ID,          CookiesTenderizer.ID,               CookiesStirringRod.ID,
    IronKnuckles.ID,                PrisonShank.ID,                     KamsWalkingStick.ID,                SerpentsKiss.ID,
    KreshsBack.ID,                  WornTurtleShellShield.ID,           SerpentsShoulders.ID,
    BoahnsFang.ID,                  ArmoroftheFang.ID,                  LeggingsoftheFang.ID,
    FootpadsoftheFang.ID,           BeltoftheFang.ID,                   GlovesoftheFang.ID
],3,2)
/*Miscellaneous - Group 3*/   
addLootToGobChestSingleChanceMultiGroup(Zone2Chest1,[
    MinorManaPotion.ID,             MinorHealingPotion.ID,              MinorRejuvenationPotion.ID,
    DiscoloredHealingPotion.ID,     LesserHealingPotion.ID,             SwiftnessPotion.ID,
    RagePotion.ID,                  SwimSpeedPotion.ID,                 LesserManaPotion.ID
],11,1,2,3)
/*Buff Scrolls - Group 4*/    
addLootToGobChestSingleChanceMultiGroup(Zone2Chest1,[
    ScrollofSpiritVIII.ID,          ScrollofProtectionVIII.ID,          ScrollofAgilityVIII.ID,
    ScrollofIntellectVIII.ID,       ScrollofStaminaVIII.ID,             ScrollofStrengthVIII.ID
],15,1,3,4)
/*Money Bags*/
addLootToGobChest(Zone2Chest1,[SmallSackofCoins.ID,LargeSackofCoins.ID],[25,5],8)
