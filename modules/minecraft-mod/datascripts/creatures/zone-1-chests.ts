import { GameObjectChest } from "tswow-stdlib/GameObject/Types/GameObjectChest"
import { makeResourceNode } from "../functions/resource-node-functions"
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../items/armor/tier1-set"
import { BlazingRapier, WickedMithrilBlade, SearingGoldenBlade, BuzzSaw, BuzzerBlade, Rockslicer, RhahkZorsHammer, GoldplatedBuckler, EmberstoneStaff, ImpalingHarpoon, ThiefsBlade, SmitesReaver, SmitesMightyHammer, CookiesTenderizer, CookiesStirringRod, IronKnuckles, PrisonShank, KamsWalkingStick, SerpentsKiss, KreshsBack, WornTurtleShellShield, SerpentsShoulders, BoahnsFang, ArmoroftheFang, LeggingsoftheFang, FootpadsoftheFang, BeltoftheFang, GlovesoftheFang, StaffofNobles, BladeofEternalDarkness, BladeoftheWretched, FrightskullShaft, GatorbiteAxe, InfernalTricksterLeggings, PhytoskinSpaulders, RunebladeofBaronRivendare, SkullforgeReaver, BiteofSerrakis, BurstofKnowledge, CircleofFlame, DarkIronPulverizer, DarkwaterTalwar, DeadmansHand, FangoftheCrystalSpider, FlameWrath, ForceofWill, GalgannsFireblaster, GalgannsFirehammer, GoblinDragonGun, Grimclaw, HerodsShoulder, IronweaveBelt, IronweaveBoots, IronweaveBracers, IronweaveCowl, IronweaveGloves, IronweaveMantle, IronweavePants, IronweaveRobe, LordGeneralsSword, MantleofDoan, Naglering, RagingBerserkersHelm, RobeofDoan, SavageGladiatorChain, SavageGladiatorGreaves, SavageGladiatorGrips, SavageGladiatorHelm, SavageGladiatorLeggings, ScarletLeggings, Shadowfang, StrikeoftheHydra, WraithScythe, ArdentCustodian, BowofSearingArrows, DazzlingLongsword, EskhandarsLeftClaw, EskhandarsRightClaw, FieryWarAxe, GutRipper, Ironfoe, Nightblade, StaffofJordan, TheGreenTower, UnderworldBand, AzureSilkBelt, AzureSilkCloak, AzureSilkGloves, AzureSilkHood, AzureSilkPants, AzureSilkVest, BarbaricIronBoots, BarbaricIronBreastplate, BarbaricIronGloves, BarbaricIronHelm, BarbaricIronShoulders, CrimsonSilkBelt, CrimsonSilkCloak, CrimsonSilkGloves, CrimsonSilkPantaloons, CrimsonSilkRobe, CrimsonSilkShoulders, CrimsonSilkVest, EmbossedLeatherBoots, EmbossedLeatherCloak, EmbossedLeatherGloves, EmbossedLeatherPants, EmbossedLeatherVest, FineLeatherBelt, FineLeatherBoots, FineLeatherCloak, FineLeatherGloves, FineLeatherTunic, SilveredBronzeBoots, SilveredBronzeBreastplate, SilveredBronzeGauntlets, SilveredBronzeShoulders, DiscoloredHealingPotion, LesserHealingPotion, LesserManaPotion, MinorHealingPotion, MinorManaPotion, MinorRejuvenationPotion, RagePotion, SwiftnessPotion, SwimSpeedPotion, ScrollofAgilityVIII, ScrollofIntellectVIII, ScrollofProtectionVIII, ScrollofSpiritVIII, ScrollofStaminaVIII, ScrollofStrengthVIII } from "./zone-1-items"


let Chest1 = makeResourceNode('Small Chest',259,57,'test-Chest1-chest')
Chest1.Size.set(0.75)
addLoot(Chest1,tierOneBaseResources,[4,3,1,2,2,5,3])
/*Base Resources - Group 5*/  
addLootSingleChanceMultiGroup(Chest1,[
    tierOneMailMaterial,            tierOneLeatherMaterial,             tierOneClothMaterial]
,33,1,3,5)
/*Epic Items - Group 0*/      
addLootSingleChance(Chest1,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.0125)
/*Rare Items - Group 0*/      
addLootSingleChance(Chest1,[
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
addLootSingleChance(Chest1,[
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
addLootSingleChance(Chest1,[
    InfernalTricksterLeggings.ID,   PhytoskinSpaulders.ID,              BladeofEternalDarkness.ID,
    GatorbiteAxe.ID,                FrightskullShaft.ID,                SkullforgeReaver.ID,
    RunebladeofBaronRivendare.ID,   BladeoftheWretched.ID
],3,6)
/*Green Weps - Group 2*/      
addLootSingleChance(Chest1,
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
addLootSingleChanceMultiGroup(Chest1,[
    MinorManaPotion.ID,             MinorHealingPotion.ID,              MinorRejuvenationPotion.ID,
    DiscoloredHealingPotion.ID,     LesserHealingPotion.ID,             SwiftnessPotion.ID,
    RagePotion.ID,                  SwimSpeedPotion.ID,                 LesserManaPotion.ID
],11,1,2,3)
/*Buff Scrolls - Group 4*/    
addLootSingleChanceMultiGroup(Chest1,[
    ScrollofSpiritVIII.ID,          ScrollofProtectionVIII.ID,          ScrollofAgilityVIII.ID,
    ScrollofIntellectVIII.ID,       ScrollofStaminaVIII.ID,             ScrollofStrengthVIII.ID
],15,1,3,4)
































function addLoot(chest: GameObjectChest, items: number[], chances: number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            chest.Loot.addItem(value,chances[index],1,1,false,groupID,1)
        }
    })

}

function addLootSingleChance(chest: GameObjectChest,items:number[],chance:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chance > 0) {
            chest.Loot.addItem(value,chance,1,1,false,groupID,1)
        }
    })
}
function addLootMultiDrop(chest: GameObjectChest, items: number[], chances: number[],min:number[],max:number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            chest.Loot.addItem(value,chances[index],min[index],max[index],false,groupID,1)
        }
    })
}

function addLootSingleChanceMultiDrop(chest: GameObjectChest,items:number[],chance:number,min:number[],max:number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chance > 0) {
            chest.Loot.addItem(value,chance,min[index],max[index],false,groupID,1)
        }
    })
}



function addLootMultiGroup(chest: GameObjectChest, items: number[], chances: number[],min:number,max:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            chest.Loot.addItem(value,chances[index],min,max,false,groupID,1)
        }
    })
}

function addLootSingleChanceMultiGroup(chest: GameObjectChest,items:number[],chance:number,min:number,max:number,groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chance > 0) {
            chest.Loot.addItem(value,chance,min,max,false,groupID,1)
        }
    })
}