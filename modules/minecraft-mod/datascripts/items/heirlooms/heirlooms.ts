import { MODNAME } from "quests-mod"
import { std } from "tswow-stdlib"
import { HeirloomExperienceRates } from "../../spells/experience-rate-spells"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { DBC_ItemExtendedCost } from "../../../../../bin/scripts/tswow/wotlkdata/dbc/types/ItemExtendedCost"

//If we do end up utilizing heirlooms, they will require level 20 to purchase, and they will also cost boss tokens/raid tokens/dungeon tokens
//This would allow players to speed level their alts from 1-20 much quicker than with the normal armor set bonuses.
//I wonder if enchants/gems stay when you send heirlooms in the mail?

export let BloodiedArcaniteReaper = std.Items.create(MODNAME,'bar',42943)
//BloodiedArcaniteReaper.Spells.clearAll()
//BloodiedArcaniteReaper.Spells.add(HeirloomExperienceRates.ID,0,1)
export let BalancedHeartseeker = std.Items.create(MODNAME,'bh',42944)
//BalancedHeartseeker.Spells.clearAll()
//BalancedHeartseeker.Spells.add(HeirloomExperienceRates.ID,0,1)
export let VenerableDalRendsSacredCharge = std.Items.create(MODNAME,'vdsc',42945)
//VenerableDalRendsSacredCharge.Spells.clearAll()
//VenerableDalRendsSacredCharge.Spells.add(HeirloomExperienceRates.ID,0,1)
export let CharmedAncientBoneBow = std.Items.create(MODNAME,'cabb',42946)
//CharmedAncientBoneBow.Spells.clearAll()
//CharmedAncientBoneBow.Spells.add(HeirloomExperienceRates.ID,0,1)
export let DignifiedHeadmastersCharge = std.Items.create(MODNAME,'dhc',42947)
//DignifiedHeadmastersCharge.Spells.clearAll()
//DignifiedHeadmastersCharge.Spells.add(HeirloomExperienceRates.ID,0,1)
export let DevoutAurastoneHammer = std.Items.create(MODNAME,'dah',42948)
//DevoutAurastoneHammer.Spells.clearAll()
//DevoutAurastoneHammer.Spells.add(HeirloomExperienceRates.ID,0,1)
export let PolishedSpauldersofValor = std.Items.create(MODNAME,'psv',42949)
PolishedSpauldersofValor.Spells.clearAll()
PolishedSpauldersofValor.Spells.add(HeirloomExperienceRates.ID,0,1)
export let ChampionHerodsShoulder = std.Items.create(MODNAME,'chs',42950)
ChampionHerodsShoulder.Spells.clearAll()
ChampionHerodsShoulder.Spells.add(HeirloomExperienceRates.ID,0,1)
export let MysticalPauldronsofElements = std.Items.create(MODNAME,'mpe',42951)
MysticalPauldronsofElements.Spells.clearAll()
MysticalPauldronsofElements.Spells.add(HeirloomExperienceRates.ID,0,1)
export let StainedShadowcraftSpaulders = std.Items.create(MODNAME,'sss',42952)
StainedShadowcraftSpaulders.Spells.clearAll()
StainedShadowcraftSpaulders.Spells.add(HeirloomExperienceRates.ID,0,1)
export let PreenedIronfeatherShoulders = std.Items.create(MODNAME,'pis',42984)
PreenedIronfeatherShoulders.Spells.clearAll()
PreenedIronfeatherShoulders.Spells.add(HeirloomExperienceRates.ID,0,1)
export let TatteredDreadmistMantle = std.Items.create(MODNAME,'tdm',42985)
TatteredDreadmistMantle.Spells.clearAll()
TatteredDreadmistMantle.Spells.add(HeirloomExperienceRates.ID,0,1)
export let SwiftHandofJustice = std.Items.create(MODNAME,'shj',42991)
SwiftHandofJustice.Spells.clearAll()
//SwiftHandofJustice.Spells.add(HeirloomExperienceRates.ID,0,1)
SwiftHandofJustice.Spells.add(59906,0,1)
export let DiscerningEyeoftheBeast = std.Items.create(MODNAME,'deb',42992)
DiscerningEyeoftheBeast.Spells.clearAll()
//DiscerningEyeoftheBeast.Spells.add(HeirloomExperienceRates.ID,0,1)
DiscerningEyeoftheBeast.Spells.add(59915,0,1)
export let SharpenedScarletKris = std.Items.create(MODNAME,'ssk',44091)
//SharpenedScarletKris.Spells.clearAll()
//SharpenedScarletKris.Spells.add(HeirloomExperienceRates.ID,0,1)
export let ReforgedTruesilverChampion = std.Items.create(MODNAME,'rtc',44092)
//ReforgedTruesilverChampion.Spells.clearAll()
//ReforgedTruesilverChampion.Spells.add(HeirloomExperienceRates.ID,0,1)
export let UpgradedDwarvenHandCannon = std.Items.create(MODNAME,'udhc',44093)
//UpgradedDwarvenHandCannon.Spells.clearAll()
//UpgradedDwarvenHandCannon.Spells.add(HeirloomExperienceRates.ID,0,1)
export let TheBlessedHammerofGrace = std.Items.create(MODNAME,'tbhg',44094)
//TheBlessedHammerofGrace.Spells.clearAll()
//TheBlessedHammerofGrace.Spells.add(HeirloomExperienceRates.ID,0,1)
export let GrandStaffofJordan = std.Items.create(MODNAME,'gsj',44095)
//GrandStaffofJordan.Spells.clearAll()
//GrandStaffofJordan.Spells.add(HeirloomExperienceRates.ID,0,1)
export let InheritedInsigniaoftheHorde = std.Items.create(MODNAME,'iih',44097)
InheritedInsigniaoftheHorde.Spells.clearAll()
//InheritedInsigniaoftheHorde.Spells.add(HeirloomExperienceRates.ID,0,1)
InheritedInsigniaoftheHorde.Spells.add(42292,1182,0,0,0,300000,300000)
export let InheritedInsigniaoftheAlliance = std.Items.create(MODNAME,'iia',44098)
InheritedInsigniaoftheAlliance.Spells.clearAll()
//InheritedInsigniaoftheAlliance.Spells.add(HeirloomExperienceRates.ID,0,1)
InheritedInsigniaoftheAlliance.Spells.add(42292,1182,0,0,0,300000,300000)
export let StrengthenedStockadePauldrons = std.Items.create(MODNAME,'ssp',44099)
StrengthenedStockadePauldrons.Spells.clearAll()
StrengthenedStockadePauldrons.Spells.add(HeirloomExperienceRates.ID,0,1)
export let PristineLightforgeSpaulders = std.Items.create(MODNAME,'pls',44100)
PristineLightforgeSpaulders.Spells.clearAll()
PristineLightforgeSpaulders.Spells.add(HeirloomExperienceRates.ID,0,1)
export let PrizedBeastmastesMantle = std.Items.create(MODNAME,'pbm',44101)
PrizedBeastmastesMantle.Spells.clearAll()
PrizedBeastmastesMantle.Spells.add(HeirloomExperienceRates.ID,0,1)
export let AgedPauldronsofTheFiveThunders = std.Items.create(MODNAME,'apft',44102)
AgedPauldronsofTheFiveThunders.Spells.clearAll()
AgedPauldronsofTheFiveThunders.Spells.add(HeirloomExperienceRates.ID,0,1)
export let ExceptionalStormshroudShoulders = std.Items.create(MODNAME,'ess',44103)
ExceptionalStormshroudShoulders.Spells.clearAll()
ExceptionalStormshroudShoulders.Spells.add(HeirloomExperienceRates.ID,0,1)
export let LastingFeralheartSpaulders = std.Items.create(MODNAME,'lfl',44105)
LastingFeralheartSpaulders.Spells.clearAll()
LastingFeralheartSpaulders.Spells.add(HeirloomExperienceRates.ID,0,1)
export let ExquisiteSunderseerMantle = std.Items.create(MODNAME,'esm',44107)
ExquisiteSunderseerMantle.Spells.clearAll()
ExquisiteSunderseerMantle.Spells.add(HeirloomExperienceRates.ID,0,1)
export let ChampionsDeathdealerBreastplate = std.Items.create(MODNAME,'cdb',48677)
ChampionsDeathdealerBreastplate.Spells.clearAll()
ChampionsDeathdealerBreastplate.Spells.add(HeirloomExperienceRates.ID,0,1)
export let MysticalVestofElements = std.Items.create(MODNAME,'mve',48683)
MysticalVestofElements.Spells.clearAll()
MysticalVestofElements.Spells.add(HeirloomExperienceRates.ID,0,1)
export let PolishedBreastplateofValor = std.Items.create(MODNAME,'pbv',48685)
PolishedBreastplateofValor.Spells.clearAll()
PolishedBreastplateofValor.Spells.add(HeirloomExperienceRates.ID,0,1)
export let PreenedIronfeatherBreastplate = std.Items.create(MODNAME,'pib',48687)
PreenedIronfeatherBreastplate.Spells.clearAll()
PreenedIronfeatherBreastplate.Spells.add(HeirloomExperienceRates.ID,0,1)
export let StainedShadowcraftTunic = std.Items.create(MODNAME,'sst',48689)
StainedShadowcraftTunic.Spells.clearAll()
StainedShadowcraftTunic.Spells.add(HeirloomExperienceRates.ID,0,1)
export let TatteredDreadmistRobe = std.Items.create(MODNAME,'tdr',48691)
TatteredDreadmistRobe.Spells.clearAll()
TatteredDreadmistRobe.Spells.add(HeirloomExperienceRates.ID,0,1)
export let VenerableMassofMcGowan = std.Items.create(MODNAME,'vmm',48716)
//VenerableMassofMcGowan.Spells.clearAll()
//VenerableMassofMcGowan.Spells.add(HeirloomExperienceRates.ID,0,1)
export let RepurposedLavaDredger = std.Items.create(MODNAME,'rld',48718)
//RepurposedLavaDredger.Spells.clearAll()
//RepurposedLavaDredger.Spells.add(HeirloomExperienceRates.ID,0,1)



let HeirloomVendor = std.CreatureTemplates.create(MODNAME,'heirloomvendor',3482)
HeirloomVendor.Name.enGB.set('Heirloom Vendor')
HeirloomVendor.Subname.enGB.set('will be removed')
HeirloomVendor.FactionTemplate.set(35)

SQL.Databases.world_dest.writeEarly('DELETE FROM npc_vendor WHERE entry = ' + HeirloomVendor.ID + '')

HeirloomVendor.Vendor.addItem(BloodiedArcaniteReaper.ID,0,0,HeirloomExtendedCost.ID)
HeirloomVendor.Vendor.addItem(BalancedHeartseeker.ID)
HeirloomVendor.Vendor.addItem(VenerableDalRendsSacredCharge.ID)
HeirloomVendor.Vendor.addItem(CharmedAncientBoneBow.ID)
HeirloomVendor.Vendor.addItem(DignifiedHeadmastersCharge.ID)
HeirloomVendor.Vendor.addItem(DevoutAurastoneHammer.ID)
HeirloomVendor.Vendor.addItem(PolishedSpauldersofValor.ID)
HeirloomVendor.Vendor.addItem(ChampionHerodsShoulder.ID)
HeirloomVendor.Vendor.addItem(MysticalPauldronsofElements.ID)
HeirloomVendor.Vendor.addItem(StainedShadowcraftSpaulders.ID)
HeirloomVendor.Vendor.addItem(PreenedIronfeatherShoulders.ID)
HeirloomVendor.Vendor.addItem(TatteredDreadmistMantle.ID)
HeirloomVendor.Vendor.addItem(SwiftHandofJustice.ID)
HeirloomVendor.Vendor.addItem(DiscerningEyeoftheBeast.ID)
HeirloomVendor.Vendor.addItem(SharpenedScarletKris.ID)
HeirloomVendor.Vendor.addItem(ReforgedTruesilverChampion.ID)
HeirloomVendor.Vendor.addItem(UpgradedDwarvenHandCannon.ID)
HeirloomVendor.Vendor.addItem(TheBlessedHammerofGrace.ID)
HeirloomVendor.Vendor.addItem(GrandStaffofJordan.ID)
HeirloomVendor.Vendor.addItem(InheritedInsigniaoftheHorde.ID)
HeirloomVendor.Vendor.addItem(InheritedInsigniaoftheAlliance.ID)
HeirloomVendor.Vendor.addItem(StrengthenedStockadePauldrons.ID)
HeirloomVendor.Vendor.addItem(PristineLightforgeSpaulders.ID)
HeirloomVendor.Vendor.addItem(PrizedBeastmastesMantle.ID)
HeirloomVendor.Vendor.addItem(AgedPauldronsofTheFiveThunders.ID)
HeirloomVendor.Vendor.addItem(ExceptionalStormshroudShoulders.ID)
HeirloomVendor.Vendor.addItem(LastingFeralheartSpaulders.ID)
HeirloomVendor.Vendor.addItem(ExquisiteSunderseerMantle.ID)
HeirloomVendor.Vendor.addItem(ChampionsDeathdealerBreastplate.ID)
HeirloomVendor.Vendor.addItem(MysticalVestofElements.ID)
HeirloomVendor.Vendor.addItem(PolishedBreastplateofValor.ID)
HeirloomVendor.Vendor.addItem(PreenedIronfeatherBreastplate.ID)
HeirloomVendor.Vendor.addItem(StainedShadowcraftTunic.ID)
HeirloomVendor.Vendor.addItem(TatteredDreadmistRobe.ID)
HeirloomVendor.Vendor.addItem(VenerableMassofMcGowan.ID)
HeirloomVendor.Vendor.addItem(RepurposedLavaDredger.ID)


let ExtendedCostIndex = 3000
//addDBC(0,0,0,21202,0,0,0,0,1,0,0,0,0,0)
addDBCItemExtendedCost(ExtendedCostIndex++,honor,arena,slot,[1,1,1,1,1],[1,1,1,1,1],rating)
export function addDBCItemExtendedCost(index:number, reqHonor: number, reqArena:number, ArenaSlotID: number, reqItems:number[], reqItemCount:number[],PersonalRating:number) {
    DBC_ItemExtendedCost.add(index).HonorPoints.set(reqHonor).ArenaPoints.set(reqArena).ArenaBracket.set(ArenaSlotID).ItemID.set(reqItems).ItemCount.set(reqItemCount).RequiredArenaRating.set(PersonalRating)
}
