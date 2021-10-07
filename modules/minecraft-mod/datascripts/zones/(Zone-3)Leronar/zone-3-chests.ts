
import { DazzlingLongsword, Nightblade, FieryWarAxe, ArdentCustodian, StaffofJordan, TheGreenTower, BowofSearingArrows, UnderworldBand, GutRipper, Ironfoe, EskhandarsRightClaw, EskhandarsLeftClaw, FangoftheCrystalSpider, GoblinDragonGun, DarkwaterTalwar, BiteofSerrakis, Grimclaw, Shadowfang, StrikeoftheHydra, GalgannsFireblaster, GalgannsFirehammer, RagingBerserkersHelm, HerodsShoulder, ScarletLeggings, DeadmansHand, RobeofDoan, MantleofDoan, SavageGladiatorChain, SavageGladiatorLeggings, SavageGladiatorHelm, SavageGladiatorGrips, SavageGladiatorGreaves, DarkIronPulverizer, IronweaveRobe, IronweaveCowl, IronweavePants, IronweaveGloves, IronweaveMantle, IronweaveBelt, IronweaveBoots, IronweaveBracers, WraithScythe, ForceofWill, LordGeneralsSword, Naglering, FlameWrath, BurstofKnowledge, CircleofFlame, FineLeatherBoots, FineLeatherCloak, FineLeatherGloves, FineLeatherTunic, FineLeatherBelt, EmbossedLeatherVest, EmbossedLeatherBoots, EmbossedLeatherCloak, EmbossedLeatherGloves, EmbossedLeatherPants, AzureSilkGloves, AzureSilkVest, AzureSilkPants, AzureSilkHood, AzureSilkBelt, AzureSilkCloak, CrimsonSilkBelt, CrimsonSilkCloak, CrimsonSilkVest, CrimsonSilkShoulders, CrimsonSilkPantaloons, CrimsonSilkRobe, CrimsonSilkGloves, SilveredBronzeBreastplate, SilveredBronzeShoulders, SilveredBronzeBoots, SilveredBronzeGauntlets, BarbaricIronShoulders, BarbaricIronBreastplate, BarbaricIronHelm, BarbaricIronBoots, BarbaricIronGloves, InfernalTricksterLeggings, PhytoskinSpaulders, BladeofEternalDarkness, GatorbiteAxe, FrightskullShaft, SkullforgeReaver, RunebladeofBaronRivendare, BladeoftheWretched, BlazingRapier, WickedMithrilBlade, SearingGoldenBlade, BuzzSaw, BuzzerBlade, Rockslicer, RhahkZorsHammer, GoldplatedBuckler, StaffofNobles, EmberstoneStaff, ImpalingHarpoon, ThiefsBlade, SmitesReaver, SmitesMightyHammer, CookiesTenderizer, CookiesStirringRod, IronKnuckles, PrisonShank, KamsWalkingStick, SerpentsKiss, KreshsBack, WornTurtleShellShield, SerpentsShoulders, BoahnsFang, ArmoroftheFang, LeggingsoftheFang, FootpadsoftheFang, BeltoftheFang, GlovesoftheFang, MinorManaPotion, MinorHealingPotion, MinorRejuvenationPotion, DiscoloredHealingPotion, LesserHealingPotion, SwiftnessPotion, RagePotion, SwimSpeedPotion, LesserManaPotion, ScrollofSpiritVIII, ScrollofProtectionVIII, ScrollofAgilityVIII, ScrollofIntellectVIII, ScrollofStaminaVIII, ScrollofStrengthVIII } from "../(Zone-1)Bramblewood/zone-1-items"
import { addLootToGobChest, addLootToGobChestSingleChance, addLootToGobChestSingleChanceMultiGroup } from "../../functions/gob-functions"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnMultiGobTimer } from "../../functions/spawning-functions"
import { tierThreeBaseResources, tierThreeMailMaterial, tierThreeLeatherMaterial, tierThreeClothMaterial } from "../../items/armor/tier3-set"
import { SmallSackofCoins, LargeSackofCoins } from "../../items/currencies"

export let Zone3Chest1 = makeResourceNode('Battered Chest',259,57,'zone3chest1-chest')
spawnMultiGobTimer(Zone3Chest1.ID,[
    [-8577.411133,131.151459,14.412675,1.936246],
    [-8561.577148,224.918930,14.719015,4.528060],
    [-8531.041992,42.658951,24.104841,1.201902],
    [-8647.471680,209.074493,6.642946,3.020099],
    [-8773.834961,300.678040,13.889410,0.224078],
    [-8799.348633,509.712311,14.385820,5.195647],
    [-8891.528320,430.770447,5.776296,0.459688],
    [-8653.006836,402.442230,17.453499,3.381365],
    [-8847.268555,361.942108,5.594209,1.563169]],600)
Zone3Chest1.Size.set(1)
addLootToGobChest(Zone3Chest1,tierThreeBaseResources,[4,3,1,2,2,5,3])
/*Base Resources - Group 5*/  
addLootToGobChestSingleChanceMultiGroup(Zone3Chest1,[
    tierThreeMailMaterial,            tierThreeLeatherMaterial,             tierThreeClothMaterial]
,33,1,3,5)
/*Epic Items - Group 0*/      
addLootToGobChestSingleChance(Zone3Chest1,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.0125)
/*Rare Items - Group 0*/      
addLootToGobChestSingleChance(Zone3Chest1,[
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
addLootToGobChestSingleChance(Zone3Chest1,[
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
addLootToGobChestSingleChance(Zone3Chest1,[
    InfernalTricksterLeggings.ID,   PhytoskinSpaulders.ID,              BladeofEternalDarkness.ID,
    GatorbiteAxe.ID,                FrightskullShaft.ID,                SkullforgeReaver.ID,
    RunebladeofBaronRivendare.ID,   BladeoftheWretched.ID
],3,6)
/*Green Weps - Group 2*/      
addLootToGobChestSingleChance(Zone3Chest1,
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
addLootToGobChestSingleChanceMultiGroup(Zone3Chest1,[
    MinorManaPotion.ID,             MinorHealingPotion.ID,              MinorRejuvenationPotion.ID,
    DiscoloredHealingPotion.ID,     LesserHealingPotion.ID,             SwiftnessPotion.ID,
    RagePotion.ID,                  SwimSpeedPotion.ID,                 LesserManaPotion.ID
],11,1,2,3)
/*Buff Scrolls - Group 4*/    
addLootToGobChestSingleChanceMultiGroup(Zone3Chest1,[
    ScrollofSpiritVIII.ID,          ScrollofProtectionVIII.ID,          ScrollofAgilityVIII.ID,
    ScrollofIntellectVIII.ID,       ScrollofStaminaVIII.ID,             ScrollofStrengthVIII.ID
],15,1,3,4)
/*Money Bags*/
addLootToGobChest(Zone3Chest1,[SmallSackofCoins.ID,LargeSackofCoins.ID],[5,15],8)
