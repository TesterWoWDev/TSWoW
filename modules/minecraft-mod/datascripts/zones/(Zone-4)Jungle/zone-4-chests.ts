import { addLootToGobChest, addLootToGobChestSingleChanceMultiGroup, addLootToGobChestSingleChance } from "../../functions/gob-functions"
import { makeResourceNode } from "../../functions/resource-node-functions"
import { tierFourBaseResources, tierFourMailMaterial, tierFourLeatherMaterial, tierFourClothMaterial } from "../../items/armor/tier4-set"
import { LargeSackofCoins, MassiveSackofCoins, SmallSackofCoins } from "../../items/currencies"
import { GenesisHelm, GenesisShoulderpads, GenesisBoots, GenesisTrousers, GenesisVest, EnigmaRobes, EnigmaBoots, EnigmaShoulderpads, EnigmaLeggings, EnigmaCirclet, StrikersFootguards, StrikersDiadem, StrikersPauldrons, StrikersLeggings, StrikersHauberk, AvengersCrown, AvengersGreaves, AvengersBreastplate, AvengersLegguards, AvengersPauldrons, TiaraoftheOracle, FootwrapsoftheOracle, MantleoftheOracle, VestmentsoftheOracle, TrousersoftheOracle, StormcallersDiadem, StormcallersFootguards, StormcallersHauberk, StormcallersLeggings, StormcallersPauldrons, DeathdealersBoots, DeathdealersHelm, DeathdealersSpaulders, DeathdealersLeggings, DeathdealersVest, DoomcallersRobes, DoomcallersMantle, DoomcallersTrousers, DoomcallersCirclet, DoomcallersFootwraps, ConquerorsCrown, ConquerorsSpaulders, ConquerorsBreastplate, ConquerorsLegguards, ConquerorsGreaves, ZandalarVindicatorBreastplate, ZandalarVindicatorBelt, ZandalarVindicatorArmguards, ZandalarFreethinkerBreastplate, ZandalarFreethinkerBelt, ZandalarFreethinkerArmguards, ZandalarAugurHauberk, ZandalarAugurBelt, ZandalarAugurBracers, ZandalarPredatorMantle, ZandalarPredatorBelt, ZandalarPredatorBracers, ZandalarMadcapTunic, ZandalarMadcapMantle, ZandalarMadcapBracers, ZandalarHaruspexTunic, ZandalarHaruspexBelt, ZandalarHaruspexBracers, ZandalarConfessorMantle, ZandalarConfessorBindings, ZandalarConfessorWraps, ZandalarIllusionistMantle, ZandalarIllusionistWraps, ZandalarDemoniacWraps, ZandalarDemoniacMantle, ZandalarHonorToken, ZandalarianHeroBadge, ZandalarianHeroMedallion, ZandalarianHeroCharm, ZandalarDemoniacRobe, ZandalarIllusionistRobe, ZandalarSignetofMojo, ZandalarSignetofMight, ZandalarSignetofSerenity, GrileksCharmofMight, GrileksCharmofValor, RenatakisCharmofBeasts, RenatakisCharmofTrickery, WushoolaysCharmofNature, WushoolaysCharmofSpirits, HazzarahsCharmofDestruction, HazzarahsCharmofHealing, HazzarahsCharmofMagic, PristineEnchantedSouthSeasKelp, JewelofKajaro, MaelstromsWrath, HerosBrand, TheAllSeeingEyeofZuldazar, UnmarredVisionofVoodress, ZandalarianShadowMasteryTalisman, KezansUnstoppableTaint, RageofMugamba, FourDazzlingLongsword, FourNightblade, FourFieryWarAxe, FourArdentCustodian, FourStaffofJordan, FourTheGreenTower, FourBowofSearingArrows, FourUnderworldBand, FourGutRipper, FourIronfoe, FourEskhandarsRightClaw, FourEskhandarsLeftClaw, Silverleaf, Earthroot, FourthScrollofSpiritVIII, FourthScrollofProtectionVIII, FourthScrollofAgilityVIII, FourthScrollofIntellectVIII, FourthScrollofStaminaVIII, FourthScrollofStrengthVIII } from "../item-manifest"

export let Zone4Chest1 = makeResourceNode('Large Chest',259,57,'zone4chest1-chest')
Zone4Chest1.Size.set(1.25)
addLootToGobChest(Zone4Chest1,tierFourBaseResources,[4,3,1,2,2,5,3])
/*Base Resources - Group 5*/  
addLootToGobChestSingleChanceMultiGroup(Zone4Chest1,[
    tierFourMailMaterial,                   tierFourLeatherMaterial,                tierFourClothMaterial]
,33,1,3,5)
/*Epic Items - Group 0*/      
addLootToGobChestSingleChance(Zone4Chest1,[
    GenesisHelm.ID,                         GenesisShoulderpads.ID,                 GenesisBoots.ID,
    GenesisTrousers.ID,                     GenesisVest.ID,                         EnigmaRobes.ID,
    EnigmaBoots.ID,                         EnigmaShoulderpads.ID,                  EnigmaLeggings.ID,
    EnigmaCirclet.ID,                       StrikersFootguards.ID,                  StrikersDiadem.ID,
    StrikersPauldrons.ID,                   StrikersLeggings.ID,                    StrikersHauberk.ID,
    AvengersCrown.ID,                       AvengersGreaves.ID,                     AvengersBreastplate.ID,
    AvengersLegguards.ID,                   AvengersPauldrons.ID,                   TiaraoftheOracle.ID,
    FootwrapsoftheOracle.ID,                MantleoftheOracle.ID,                   VestmentsoftheOracle.ID,
    TrousersoftheOracle.ID,                 StormcallersDiadem.ID,                  StormcallersFootguards.ID,
    StormcallersHauberk.ID,                 StormcallersLeggings.ID,                StormcallersPauldrons.ID,
    DeathdealersBoots.ID,                   DeathdealersHelm.ID,                    DeathdealersSpaulders.ID,
    DeathdealersLeggings.ID,                DeathdealersVest.ID,                    DoomcallersRobes.ID,
    DoomcallersMantle.ID,                   DoomcallersTrousers.ID,                 DoomcallersCirclet.ID,
    DoomcallersFootwraps.ID,                ConquerorsCrown.ID,                     ConquerorsSpaulders.ID,
    ConquerorsBreastplate.ID,               ConquerorsLegguards.ID,                 ConquerorsGreaves.ID

],0.0125)
/*Rare Items - Group 0*/      
addLootToGobChestSingleChance(Zone4Chest1,[
    ZandalarVindicatorBreastplate.ID,       ZandalarVindicatorBelt.ID,              ZandalarVindicatorArmguards.ID,
    ZandalarFreethinkerBreastplate.ID,      ZandalarFreethinkerBelt.ID,             ZandalarFreethinkerArmguards.ID,
    ZandalarAugurHauberk.ID,                ZandalarAugurBelt.ID,                   ZandalarAugurBracers.ID,
    ZandalarPredatorMantle.ID,              ZandalarPredatorBelt.ID,                ZandalarPredatorBracers.ID,
    ZandalarMadcapTunic.ID,                 ZandalarMadcapMantle.ID,                ZandalarMadcapBracers.ID,
    ZandalarHaruspexTunic.ID,               ZandalarHaruspexBelt.ID,                ZandalarHaruspexBracers.ID,
    ZandalarConfessorMantle.ID,             ZandalarConfessorBindings.ID,           ZandalarConfessorWraps.ID,
    ZandalarIllusionistMantle.ID,           ZandalarIllusionistWraps.ID,            ZandalarDemoniacWraps.ID,
    ZandalarDemoniacMantle.ID,              ZandalarHonorToken.ID,                  ZandalarianHeroBadge.ID,
    ZandalarianHeroMedallion.ID,            ZandalarianHeroCharm.ID,                ZandalarDemoniacRobe.ID,
    ZandalarIllusionistRobe.ID,             ZandalarSignetofMojo.ID,                ZandalarSignetofMight.ID,
    ZandalarSignetofSerenity.ID,            GrileksCharmofMight.ID,                 GrileksCharmofValor.ID
],0.2)
/*Green Armor - Group 1*/
addLootToGobChestSingleChance(Zone4Chest1,[
    RenatakisCharmofBeasts.ID,              RenatakisCharmofTrickery.ID,            WushoolaysCharmofNature.ID,
    WushoolaysCharmofSpirits.ID,            HazzarahsCharmofDestruction.ID,         HazzarahsCharmofHealing.ID,
    HazzarahsCharmofMagic.ID,               PristineEnchantedSouthSeasKelp.ID,      JewelofKajaro.ID,
    MaelstromsWrath.ID,                     HerosBrand.ID,                          TheAllSeeingEyeofZuldazar.ID,
    UnmarredVisionofVoodress.ID,            ZandalarianShadowMasteryTalisman.ID,    KezansUnstoppableTaint.ID,
    RageofMugamba.ID
],3,1)
/*Green Armor - Part 2 - Group 6*/
addLootToGobChestSingleChance(Zone4Chest1,[
    FourDazzlingLongsword.ID,                   FourNightblade.ID,                          FourFieryWarAxe.ID,
    FourArdentCustodian.ID,                     FourStaffofJordan.ID,                       FourTheGreenTower.ID,
    FourBowofSearingArrows.ID,                  FourUnderworldBand.ID,                      FourGutRipper.ID,   
    FourIronfoe.ID,                             FourEskhandarsRightClaw.ID,                 FourEskhandarsLeftClaw.ID
],1.5,6)
/*Green Weps - Group 2*/      
addLootToGobChestSingleChance(Zone4Chest1,[
    Silverleaf.ID
],1.5,2)
/*Miscellaneous - Group 3*/   
addLootToGobChestSingleChanceMultiGroup(Zone4Chest1,[
    Earthroot.ID
],11,1,2,3)
/*Buff Scrolls - Group 4*/    
addLootToGobChestSingleChanceMultiGroup(Zone4Chest1,[
    FourthScrollofSpiritVIII.ID,                FourthScrollofProtectionVIII.ID,            FourthScrollofAgilityVIII.ID,
    FourthScrollofIntellectVIII.ID,             FourthScrollofStaminaVIII.ID,               FourthScrollofStrengthVIII.ID
],15,1,3,4)
/*Money Bags*/
addLootToGobChest(Zone4Chest1,[SmallSackofCoins.ID,LargeSackofCoins.ID,MassiveSackofCoins.ID],[50,20,5],8)