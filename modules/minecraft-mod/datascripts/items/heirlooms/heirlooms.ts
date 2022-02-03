import { std } from "tswow-stdlib";
import { HeirloomExperienceRates } from "../../spells/experience-rate-spells";
import { addToDBCItemExtendedCost } from "../../functions/dbc-functions";
import { MODNAME } from "../../modname";

let ExtendedCostIndex = 3000;
addToDBCItemExtendedCost(
    ExtendedCostIndex++,
    0,
    0,
    0,
    [40752, 40753, 1, 1, 1],
    [10, 10, 1, 1, 1],
    0
); // Armor and Trinkets
addToDBCItemExtendedCost(
    ExtendedCostIndex++,
    0,
    0,
    0,
    [40752, 40753, 1, 1, 1],
    [25, 25, 1, 1, 1],
    0
); // 1h weapon
addToDBCItemExtendedCost(
    ExtendedCostIndex++,
    0,
    0,
    0,
    [40752, 40753, 1, 1, 1],
    [50, 50, 1, 1, 1],
    0
); // 2h weapon

//If we do end up utilizing heirlooms, they will require level 20 to purchase, and they will also cost boss tokens/raid tokens/dungeon tokens
//This would allow players to speed level their alts from 1-20 much quicker than with the normal armor set bonuses.
//I wonder if enchants/gems stay when you send heirlooms in the mail?

export let BloodiedArcaniteReaper = std.Items.create(MODNAME, "bar", 42943);

export let BalancedHeartseeker = std.Items.create(MODNAME, "bh", 42944);

export let VenerableDalRendsSacredCharge = std.Items.create(
    MODNAME,
    "vdsc",
    42945
);

export let CharmedAncientBoneBow = std.Items.create(MODNAME, "cabb", 42946);

export let DignifiedHeadmastersCharge = std.Items.create(MODNAME, "dhc", 42947);

export let DevoutAurastoneHammer = std.Items.create(MODNAME, "dah", 42948);

export let PolishedSpauldersofValor = std.Items.create(MODNAME, "psv", 42949);
PolishedSpauldersofValor.Spells.clearAll();
PolishedSpauldersofValor.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let ChampionHerodsShoulder = std.Items.create(MODNAME, "chs", 42950);
ChampionHerodsShoulder.Spells.clearAll();
ChampionHerodsShoulder.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let MysticalPauldronsofElements = std.Items.create(
    MODNAME,
    "mpe",
    42951
);
MysticalPauldronsofElements.Spells.clearAll();
MysticalPauldronsofElements.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let StainedShadowcraftSpaulders = std.Items.create(
    MODNAME,
    "sss",
    42952
);
StainedShadowcraftSpaulders.Spells.clearAll();
StainedShadowcraftSpaulders.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let PreenedIronfeatherShoulders = std.Items.create(
    MODNAME,
    "pis",
    42984
);
PreenedIronfeatherShoulders.Spells.clearAll();
PreenedIronfeatherShoulders.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let TatteredDreadmistMantle = std.Items.create(MODNAME, "tdm", 42985);
TatteredDreadmistMantle.Spells.clearAll();
TatteredDreadmistMantle.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let SwiftHandofJustice = std.Items.create(MODNAME, "shj", 42991);

export let DiscerningEyeoftheBeast = std.Items.create(MODNAME, "deb", 42992);

export let SharpenedScarletKris = std.Items.create(MODNAME, "ssk", 44091);

export let ReforgedTruesilverChampion = std.Items.create(MODNAME, "rtc", 44092);

export let UpgradedDwarvenHandCannon = std.Items.create(MODNAME, "udhc", 44093);

export let TheBlessedHammerofGrace = std.Items.create(MODNAME, "tbhg", 44094);

export let GrandStaffofJordan = std.Items.create(MODNAME, "gsj", 44095);

export let InheritedInsigniaoftheHorde = std.Items.create(
    MODNAME,
    "iih",
    44097
);

export let InheritedInsigniaoftheAlliance = std.Items.create(
    MODNAME,
    "iia",
    44098
);

export let StrengthenedStockadePauldrons = std.Items.create(
    MODNAME,
    "ssp",
    44099
);
StrengthenedStockadePauldrons.Spells.clearAll();
StrengthenedStockadePauldrons.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let PristineLightforgeSpaulders = std.Items.create(
    MODNAME,
    "pls",
    44100
);
PristineLightforgeSpaulders.Spells.clearAll();
PristineLightforgeSpaulders.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let PrizedBeastmastesMantle = std.Items.create(MODNAME, "pbm", 44101);
PrizedBeastmastesMantle.Spells.clearAll();
PrizedBeastmastesMantle.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let AgedPauldronsofTheFiveThunders = std.Items.create(
    MODNAME,
    "apft",
    44102
);
AgedPauldronsofTheFiveThunders.Spells.clearAll();
AgedPauldronsofTheFiveThunders.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let ExceptionalStormshroudShoulders = std.Items.create(
    MODNAME,
    "ess",
    44103
);
ExceptionalStormshroudShoulders.Spells.clearAll();
ExceptionalStormshroudShoulders.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let LastingFeralheartSpaulders = std.Items.create(MODNAME, "lfl", 44105);
LastingFeralheartSpaulders.Spells.clearAll();
LastingFeralheartSpaulders.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let ExquisiteSunderseerMantle = std.Items.create(MODNAME, "esm", 44107);
ExquisiteSunderseerMantle.Spells.clearAll();
ExquisiteSunderseerMantle.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let ChampionsDeathdealerBreastplate = std.Items.create(
    MODNAME,
    "cdb",
    48677
);
ChampionsDeathdealerBreastplate.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let MysticalVestofElements = std.Items.create(MODNAME, "mve", 48683);
MysticalVestofElements.Spells.clearAll();
MysticalVestofElements.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let PolishedBreastplateofValor = std.Items.create(MODNAME, "pbv", 48685);
PolishedBreastplateofValor.Spells.clearAll();
PolishedBreastplateofValor.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let PreenedIronfeatherBreastplate = std.Items.create(
    MODNAME,
    "pib",
    48687
);
PreenedIronfeatherBreastplate.Spells.clearAll();
PreenedIronfeatherBreastplate.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let StainedShadowcraftTunic = std.Items.create(MODNAME, "sst", 48689);
StainedShadowcraftTunic.Spells.clearAll();
StainedShadowcraftTunic.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let TatteredDreadmistRobe = std.Items.create(MODNAME, "tdr", 48691);
TatteredDreadmistRobe.Spells.clearAll();
TatteredDreadmistRobe.Spells.addMod((iSpell) => {
    iSpell.Spell.set(HeirloomExperienceRates.ID);
    iSpell.Trigger.set(1);
});
export let VenerableMassofMcGowan = std.Items.create(MODNAME, "vmm", 48716);

export let RepurposedLavaDredger = std.Items.create(MODNAME, "rld", 48718);
