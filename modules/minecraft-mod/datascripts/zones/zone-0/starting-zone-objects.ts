import { makeResourceNode } from "../../functions/resource-node-functions";
import { spawnGob } from "../../functions/spawning-functions";
import { tierOneBaseResources, tierOneMailMaterial, tierOneLeatherMaterial, tierOneClothMaterial } from "../../items/armor/tier1-set";
import { SmallSackofCoins, LargeSackofCoins } from "../../items/currencies";
import { addLoot, addLootSingleChance, addLootSingleChanceMultiGroup } from "../zone-1/zone-1-chests";
import { DazzlingLongsword, Nightblade, FieryWarAxe, ArdentCustodian, StaffofJordan, TheGreenTower, BowofSearingArrows, UnderworldBand, GutRipper, Ironfoe, EskhandarsRightClaw, EskhandarsLeftClaw, FangoftheCrystalSpider, GoblinDragonGun, DarkwaterTalwar, BiteofSerrakis, Grimclaw, Shadowfang, StrikeoftheHydra, GalgannsFireblaster, GalgannsFirehammer, RagingBerserkersHelm, HerodsShoulder, ScarletLeggings, DeadmansHand, RobeofDoan, MantleofDoan, SavageGladiatorChain, SavageGladiatorLeggings, SavageGladiatorHelm, SavageGladiatorGrips, SavageGladiatorGreaves, DarkIronPulverizer, IronweaveRobe, IronweaveCowl, IronweavePants, IronweaveGloves, IronweaveMantle, IronweaveBelt, IronweaveBoots, IronweaveBracers, WraithScythe, ForceofWill, LordGeneralsSword, Naglering, FlameWrath, BurstofKnowledge, CircleofFlame, FineLeatherBoots, FineLeatherCloak, FineLeatherGloves, FineLeatherTunic, FineLeatherBelt, EmbossedLeatherVest, EmbossedLeatherBoots, EmbossedLeatherCloak, EmbossedLeatherGloves, EmbossedLeatherPants, AzureSilkGloves, AzureSilkVest, AzureSilkPants, AzureSilkHood, AzureSilkBelt, AzureSilkCloak, CrimsonSilkBelt, CrimsonSilkCloak, CrimsonSilkVest, CrimsonSilkShoulders, CrimsonSilkPantaloons, CrimsonSilkRobe, CrimsonSilkGloves, SilveredBronzeBreastplate, SilveredBronzeShoulders, SilveredBronzeBoots, SilveredBronzeGauntlets, BarbaricIronShoulders, BarbaricIronBreastplate, BarbaricIronHelm, BarbaricIronBoots, BarbaricIronGloves, InfernalTricksterLeggings, PhytoskinSpaulders, BladeofEternalDarkness, GatorbiteAxe, FrightskullShaft, SkullforgeReaver, RunebladeofBaronRivendare, BladeoftheWretched, BlazingRapier, WickedMithrilBlade, SearingGoldenBlade, BuzzSaw, BuzzerBlade, Rockslicer, RhahkZorsHammer, GoldplatedBuckler, StaffofNobles, EmberstoneStaff, ImpalingHarpoon, ThiefsBlade, SmitesReaver, SmitesMightyHammer, CookiesTenderizer, CookiesStirringRod, IronKnuckles, PrisonShank, KamsWalkingStick, SerpentsKiss, KreshsBack, WornTurtleShellShield, SerpentsShoulders, BoahnsFang, ArmoroftheFang, LeggingsoftheFang, FootpadsoftheFang, BeltoftheFang, GlovesoftheFang, MinorManaPotion, MinorHealingPotion, MinorRejuvenationPotion, DiscoloredHealingPotion, LesserHealingPotion, SwiftnessPotion, RagePotion, SwimSpeedPotion, LesserManaPotion, ScrollofSpiritVIII, ScrollofProtectionVIII, ScrollofAgilityVIII, ScrollofIntellectVIII, ScrollofStaminaVIII, ScrollofStrengthVIII } from "../zone-1/zone-1-items";
import { SQL } from "wotlkdata/sql/SQLFiles";
import { AgathasLockbox } from "./starting-zone-items";

export let StolenLockbox = makeResourceNode('Agatha\'s Stolen Lockbox',259,57,'stolenlockbox-chest')
StolenLockbox.Size.set(0.5)

spawnGob(StolenLockbox.ID,[-8670.00,-14.301,31.26,4.64]) // Agatha's Stolen Lockbox in Starting Zone

addLoot(StolenLockbox,tierOneBaseResources,[4,3,1,2,2,5,3])
/*Base Resources - Group 5*/  
addLootSingleChanceMultiGroup(StolenLockbox,[
    tierOneMailMaterial,            tierOneLeatherMaterial,             tierOneClothMaterial]
,33,3,6,5)
/*Epic Items - Group 0*/      
addLootSingleChance(StolenLockbox,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.0125)
/*Rare Items - Group 0*/      
addLootSingleChance(StolenLockbox,[
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
addLootSingleChance(StolenLockbox,[
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
addLootSingleChance(StolenLockbox,[
    InfernalTricksterLeggings.ID,   PhytoskinSpaulders.ID,              BladeofEternalDarkness.ID,
    GatorbiteAxe.ID,                FrightskullShaft.ID,                SkullforgeReaver.ID,
    RunebladeofBaronRivendare.ID,   BladeoftheWretched.ID
],3,6)
/*Green Weps - Group 2*/      
addLootSingleChance(StolenLockbox,
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
addLootSingleChanceMultiGroup(StolenLockbox,[
    MinorManaPotion.ID,             MinorHealingPotion.ID,              MinorRejuvenationPotion.ID,
    DiscoloredHealingPotion.ID,     LesserHealingPotion.ID,             SwiftnessPotion.ID,
    RagePotion.ID,                  SwimSpeedPotion.ID,                 LesserManaPotion.ID
],11,1,2,3)
/*Buff Scrolls - Group 4*/    
addLootSingleChanceMultiGroup(StolenLockbox,[
    ScrollofSpiritVIII.ID,          ScrollofProtectionVIII.ID,          ScrollofAgilityVIII.ID,
    ScrollofIntellectVIII.ID,       ScrollofStaminaVIII.ID,             ScrollofStrengthVIII.ID
],15,1,3,4)
/*Money Bags*/
addLoot(StolenLockbox,[SmallSackofCoins.ID,LargeSackofCoins.ID],[30,3],8)
/*Quest Items Loot*/
addLoot(StolenLockbox,[AgathasLockbox.ID],[100],7)
SQL.gameobject_loot_template.add(StolenLockbox.ID,AgathasLockbox.ID).QuestRequired.set(1)
