import { GameObjectChest } from "tswow-stdlib/GameObject/Types/GameObjectChest"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { spawnMultipleGobs } from "../../functions/spawning-functions"
import { tierOneBaseResources, tierOneClothMaterial, tierOneLeatherMaterial, tierOneMailMaterial } from "../../items/armor/tier1-set"
import { SmallSackofCoins, LargeSackofCoins } from "../../items/currencies"
import { BlazingRapier, WickedMithrilBlade, SearingGoldenBlade, BuzzSaw, BuzzerBlade, Rockslicer, RhahkZorsHammer, GoldplatedBuckler, EmberstoneStaff, ImpalingHarpoon, ThiefsBlade, SmitesReaver, SmitesMightyHammer, CookiesTenderizer, CookiesStirringRod, IronKnuckles, PrisonShank, KamsWalkingStick, SerpentsKiss, KreshsBack, WornTurtleShellShield, SerpentsShoulders, BoahnsFang, ArmoroftheFang, LeggingsoftheFang, FootpadsoftheFang, BeltoftheFang, GlovesoftheFang, StaffofNobles, BladeofEternalDarkness, BladeoftheWretched, FrightskullShaft, GatorbiteAxe, InfernalTricksterLeggings, PhytoskinSpaulders, RunebladeofBaronRivendare, SkullforgeReaver, BiteofSerrakis, BurstofKnowledge, CircleofFlame, DarkIronPulverizer, DarkwaterTalwar, DeadmansHand, FangoftheCrystalSpider, FlameWrath, ForceofWill, GalgannsFireblaster, GalgannsFirehammer, GoblinDragonGun, Grimclaw, HerodsShoulder, IronweaveBelt, IronweaveBoots, IronweaveBracers, IronweaveCowl, IronweaveGloves, IronweaveMantle, IronweavePants, IronweaveRobe, LordGeneralsSword, MantleofDoan, Naglering, RagingBerserkersHelm, RobeofDoan, SavageGladiatorChain, SavageGladiatorGreaves, SavageGladiatorGrips, SavageGladiatorHelm, SavageGladiatorLeggings, ScarletLeggings, Shadowfang, StrikeoftheHydra, WraithScythe, ArdentCustodian, BowofSearingArrows, DazzlingLongsword, EskhandarsLeftClaw, EskhandarsRightClaw, FieryWarAxe, GutRipper, Ironfoe, Nightblade, StaffofJordan, TheGreenTower, UnderworldBand, AzureSilkBelt, AzureSilkCloak, AzureSilkGloves, AzureSilkHood, AzureSilkPants, AzureSilkVest, BarbaricIronBoots, BarbaricIronBreastplate, BarbaricIronGloves, BarbaricIronHelm, BarbaricIronShoulders, CrimsonSilkBelt, CrimsonSilkCloak, CrimsonSilkGloves, CrimsonSilkPantaloons, CrimsonSilkRobe, CrimsonSilkShoulders, CrimsonSilkVest, EmbossedLeatherBoots, EmbossedLeatherCloak, EmbossedLeatherGloves, EmbossedLeatherPants, EmbossedLeatherVest, FineLeatherBelt, FineLeatherBoots, FineLeatherCloak, FineLeatherGloves, FineLeatherTunic, SilveredBronzeBoots, SilveredBronzeBreastplate, SilveredBronzeGauntlets, SilveredBronzeShoulders, DiscoloredHealingPotion, LesserHealingPotion, LesserManaPotion, MinorHealingPotion, MinorManaPotion, MinorRejuvenationPotion, RagePotion, SwiftnessPotion, SwimSpeedPotion, ScrollofAgilityVIII, ScrollofIntellectVIII, ScrollofProtectionVIII, ScrollofSpiritVIII, ScrollofStaminaVIII, ScrollofStrengthVIII } from "./zone-1-items"


export let Zone1Chest1 = makeResourceNode('Small Chest',259,57,'zone1chest1-chest')
spawnMultipleGobs(250008,[[-8334.177,110.985,18.796,3.147],[-8028.486,101.582,1.089,4.817],[-7896.042,138.932,-26.418,1.171],[-8246.397,280.637,3.401,2.344],[-7963.068,232.766,-27.964,0.902],[-7927.933,119.273,-50.434,6.027],[-7935.968,179.275,-45.210,5.896],[-7938.499,244.016,-35.589,2.280],[-8052.747,40.852,1.877,5.17],[-7969.805,-19.939,0.453,2.319],[-8227.125,270.125,3.976,1.564],[-8048.143,465.894,-4.900,4.711]])
Zone1Chest1.Size.set(0.75)
addLoot(Zone1Chest1,tierOneBaseResources,[4,3,1,2,2,5,3])
/*Base Resources - Group 5*/  
addLootSingleChanceMultiGroup(Zone1Chest1,[
    tierOneMailMaterial,            tierOneLeatherMaterial,             tierOneClothMaterial]
,33,1,3,5)
/*Epic Items - Group 0*/      
addLootSingleChance(Zone1Chest1,[
    DazzlingLongsword.ID,           Nightblade.ID,                      FieryWarAxe.ID,
    ArdentCustodian.ID,             StaffofJordan.ID,                   TheGreenTower.ID,
    BowofSearingArrows.ID,          UnderworldBand.ID,                  GutRipper.ID,
    Ironfoe.ID,                     EskhandarsRightClaw.ID,             EskhandarsLeftClaw.ID
],0.0125)
/*Rare Items - Group 0*/      
addLootSingleChance(Zone1Chest1,[
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
addLootSingleChance(Zone1Chest1,[
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
addLootSingleChance(Zone1Chest1,[
    InfernalTricksterLeggings.ID,   PhytoskinSpaulders.ID,              BladeofEternalDarkness.ID,
    GatorbiteAxe.ID,                FrightskullShaft.ID,                SkullforgeReaver.ID,
    RunebladeofBaronRivendare.ID,   BladeoftheWretched.ID
],3,6)
/*Green Weps - Group 2*/      
addLootSingleChance(Zone1Chest1,
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
addLootSingleChanceMultiGroup(Zone1Chest1,[
    MinorManaPotion.ID,             MinorHealingPotion.ID,              MinorRejuvenationPotion.ID,
    DiscoloredHealingPotion.ID,     LesserHealingPotion.ID,             SwiftnessPotion.ID,
    RagePotion.ID,                  SwimSpeedPotion.ID,                 LesserManaPotion.ID
],11,1,2,3)
/*Buff Scrolls - Group 4*/    
addLootSingleChanceMultiGroup(Zone1Chest1,[
    ScrollofSpiritVIII.ID,          ScrollofProtectionVIII.ID,          ScrollofAgilityVIII.ID,
    ScrollofIntellectVIII.ID,       ScrollofStaminaVIII.ID,             ScrollofStrengthVIII.ID
],15,1,3,4)
/*Money Bags*/
addLoot(Zone1Chest1,[SmallSackofCoins.ID,LargeSackofCoins.ID],[30,3],8)
































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