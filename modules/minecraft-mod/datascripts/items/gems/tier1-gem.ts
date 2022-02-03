import { std } from "tswow-stdlib";
import { MODNAME } from "../../modname";
import { createRecipe } from "../../functions/recipe-functions";
import {
    createGem,
    vendorAddItems,
    gemLevelUpPattern,
    redColorCode,
    greenColorCode,
    purpleColorCode,
    yellowColorCode,
    blueColorCode,
    orangeColorCode,
    createAllUndiscoverGems,
} from "../../functions/gem-functions";
import { tierOneBaseResources } from "../armor/tier1-set";
import { DBC } from "wotlkdata";
let vendor2 = std.CreatureTemplates.create(MODNAME, "gemdude", 3482);
vendor2.Name.enGB.set("Test Gems");
vendor2.Subname.enGB.set("will be removed");
vendor2.FactionTemplate.set(35);
let GemPropertyIndex = 2000;
let SpellItemEnchantmentIndex = 5000;
let GemQuality1 = 1;

//Crush Gem Items
export let GemDust = std.Items.create(MODNAME, "gemdust", 2318);
GemDust.Name.enGB.set("Gem Dust");
GemDust.Description.enGB.set(
    "Place these all around any resource in the crafting menu to upgrade the tier of the resource."
);
GemDust.Quality.PURPLE.set();
GemDust.MaxStack.set(9999);
GemDust.DisplayInfo.modRefCopy((val) => val.copyFromTemplate(29475));

// Red Gems
let red1 = createGem(
    GemQuality1,
    "tier1-red1",
    "Teardrop Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red1, 0, 0, -1, 0, 0, 0, 0],
    [red1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 3)
    .EffectPointsMin.setIndex(0, 3)
    .Name.enGB.set(redColorCode + "+3 Agility")
    .ItemVisual.set(0)
    .Flags.set(0);

let red2 = createGem(
    GemQuality1,
    "tier1-red2",
    "Bold Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red2, 0, 0, -1, 0, 0, 0, 0],
    [red2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 3)
    .EffectPointsMin.setIndex(0, 3)
    .Name.enGB.set(redColorCode + "+3 Intellect")
    .ItemVisual.set(0)
    .Flags.set(0);

let red3 = createGem(
    GemQuality1,
    "tier1-red3",
    "Runed Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red3, 0, 0, -1, 0, 0, 0, 0],
    [red3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 4)
    .EffectPointsMin.setIndex(0, 4)
    .Name.enGB.set(redColorCode + "+4 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let red4 = createGem(
    GemQuality1,
    "tier1-red4",
    "Delicate Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red4, 0, 0, -1, 0, 0, 0, 0],
    [red4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 3)
    .EffectPointsMin.setIndex(0, 3)
    .Name.enGB.set(redColorCode + "+5 Stamina")
    .ItemVisual.set(0)
    .Flags.set(0);

let red5 = createGem(
    GemQuality1,
    "tier1-red5",
    "Stark Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red5, 0, 0, -1, 0, 0, 0, 0],
    [red5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 3)
    .EffectPointsMin.setIndex(0, 3)
    .Name.enGB.set(redColorCode + "+3 Strength")
    .ItemVisual.set(0)
    .Flags.set(0);

let red6 = createGem(
    GemQuality1,
    "tier1-red6",
    "Mighty Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red6, 0, 0, -1, 0, 0, 0, 0],
    [red6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 38)
    .EffectPointsMax.setIndex(0, 7)
    .EffectPointsMin.setIndex(0, 7)
    .Name.enGB.set(redColorCode + "+7 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let red7 = createGem(
    GemQuality1,
    "tier1-red7",
    "Bright Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red7, 0, 0, -1, 0, 0, 0, 0],
    [red7, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 4)
    .EffectArg.setIndex(0, 0)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Name.enGB.set(redColorCode + "+15 Armor")
    .ItemVisual.set(0)
    .Flags.set(0);

let red8 = createGem(
    GemQuality1,
    "tier1-red8",
    "Mighty Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, red8, 0, 0, -1, 0, 0, 0, 0],
    [red8, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 45)
    .EffectPointsMax.setIndex(0, 7)
    .EffectPointsMin.setIndex(0, 7)
    .Name.enGB.set(redColorCode + "+7 Spell Power")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier1RedGems = [red1, red2, red3, red4, red5, red6, red7, red8];
export let undiscoveredReds = createAllUndiscoverGems(8, "Blood Garnet", 39911);
gemLevelUpPattern(tierOneBaseResources[6], undiscoveredReds, tier1RedGems);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let red01 = std.Items.load(undiscoveredReds[0]);
export let CrushGemRed01 = std.Spells.create(MODNAME, "crushgemred01", 8604);
CrushGemRed01.Name.enGB.set("Crush Gem");
CrushGemRed01.Description.enGB.set("Crush into powder.");
CrushGemRed01.Reagents.clearAll();
CrushGemRed01.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed01.Reagents.add(undiscoveredReds[0], 1);
CrushGemRed01.RequiresSpellFocus.set(0);
red01.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed01.ID);
    itemSpell.Cooldown.set(100);
});
red01.MaxStack.set(9999);
export let red02 = std.Items.load(undiscoveredReds[1]);
export let CrushGemRed02 = std.Spells.create(MODNAME, "crushgemred02", 8604);
CrushGemRed02.Name.enGB.set("Crush Gem");
CrushGemRed02.Description.enGB.set("Crush into powder.");
CrushGemRed02.Reagents.clearAll();
CrushGemRed02.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed02.Reagents.add(undiscoveredReds[1], 1);
CrushGemRed02.RequiresSpellFocus.set(0);
red02.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed02.ID);
    itemSpell.Cooldown.set(100);
});
red02.MaxStack.set(9999);
export let red03 = std.Items.load(undiscoveredReds[2]);
export let CrushGemRed03 = std.Spells.create(MODNAME, "crushgemred03", 8604);
CrushGemRed03.Name.enGB.set("Crush Gem");
CrushGemRed03.Description.enGB.set("Crush into powder.");
CrushGemRed03.Reagents.clearAll();
CrushGemRed03.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed03.Reagents.add(undiscoveredReds[2], 1);
CrushGemRed03.RequiresSpellFocus.set(0);
red03.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed03.ID);
    itemSpell.Cooldown.set(100);
});
red03.MaxStack.set(9999);
export let red04 = std.Items.load(undiscoveredReds[3]);
export let CrushGemRed04 = std.Spells.create(MODNAME, "crushgemred04", 8604);
CrushGemRed04.Name.enGB.set("Crush Gem");
CrushGemRed04.Description.enGB.set("Crush into powder.");
CrushGemRed04.Reagents.clearAll();
CrushGemRed04.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed04.Reagents.add(undiscoveredReds[3], 1);
CrushGemRed04.RequiresSpellFocus.set(0);
red04.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed04.ID);
    itemSpell.Cooldown.set(100);
});
red04.MaxStack.set(9999);
export let red05 = std.Items.load(undiscoveredReds[4]);
export let CrushGemRed05 = std.Spells.create(MODNAME, "crushgemred05", 8604);
CrushGemRed05.Name.enGB.set("Crush Gem");
CrushGemRed05.Description.enGB.set("Crush into powder.");
CrushGemRed05.Reagents.clearAll();
CrushGemRed05.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed05.Reagents.add(undiscoveredReds[4], 1);
CrushGemRed05.RequiresSpellFocus.set(0);
red05.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed05.ID);
    itemSpell.Cooldown.set(100);
});
red05.MaxStack.set(9999);
export let red06 = std.Items.load(undiscoveredReds[5]);
export let CrushGemRed06 = std.Spells.create(MODNAME, "crushgemred06", 8604);
CrushGemRed06.Name.enGB.set("Crush Gem");
CrushGemRed06.Description.enGB.set("Crush into powder.");
CrushGemRed06.Reagents.clearAll();
CrushGemRed06.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed06.Reagents.add(undiscoveredReds[5], 1);
CrushGemRed06.RequiresSpellFocus.set(0);
red06.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed06.ID);
    itemSpell.Cooldown.set(100);
});
red06.MaxStack.set(9999);
export let red07 = std.Items.load(undiscoveredReds[6]);
export let CrushGemRed07 = std.Spells.create(MODNAME, "crushgemred07", 8604);
CrushGemRed07.Name.enGB.set("Crush Gem");
CrushGemRed07.Description.enGB.set("Crush into powder.");
CrushGemRed07.Reagents.clearAll();
CrushGemRed07.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed07.Reagents.add(undiscoveredReds[6], 1);
CrushGemRed07.RequiresSpellFocus.set(0);
red07.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed07.ID);
    itemSpell.Cooldown.set(100);
});
red07.MaxStack.set(9999);
export let red08 = std.Items.load(undiscoveredReds[7]);
export let CrushGemRed08 = std.Spells.create(MODNAME, "crushgemred08", 8604);
CrushGemRed08.Name.enGB.set("Crush Gem");
CrushGemRed08.Description.enGB.set("Crush into powder.");
CrushGemRed08.Reagents.clearAll();
CrushGemRed08.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemRed08.Reagents.add(undiscoveredReds[7], 1);
CrushGemRed08.RequiresSpellFocus.set(0);
red08.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemRed08.ID);
    itemSpell.Cooldown.set(100);
});
red08.MaxStack.set(9999);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Green Gems
let green1 = createGem(
    GemQuality1,
    "tier1-green1",
    "Radiant Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, green1, 0, 0, -1, 0, 0, 0, 0],
    [green1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 1)
    .EffectPointsMin.setIndex(0, 1)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(greenColorCode + "+1 Agility and +5 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let green2 = createGem(
    GemQuality1,
    "tier1-green2",
    "Jagged Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, green2, 0, 0, -1, 0, 0, 0, 0],
    [green2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 1)
    .EffectPointsMin.setIndex(0, 1)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(greenColorCode + "+1 Strength and +5 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let green3 = createGem(
    GemQuality1,
    "tier1-green3",
    "Enduring Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, green3, 0, 0, -1, 0, 0, 0, 0],
    [green3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 1)
    .EffectPointsMin.setIndex(0, 1)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 45)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(greenColorCode + "+1 Intellect and +5 Spell Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let green4 = createGem(
    GemQuality1,
    "tier1-green4",
    "Dazzling Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, green4, 0, 0, -1, 0, 0, 0, 0],
    [green4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 2)
    .EffectPointsMin.setIndex(0, 2)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 3)
    .EffectPointsMin.setIndex(1, 3)
    .Name.enGB.set(greenColorCode + "+2 Intellect and +3 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let green5 = createGem(
    GemQuality1,
    "tier1-green5",
    "Notched Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, green5, 0, 0, -1, 0, 0, 0, 0],
    [green5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 12)
    .EffectPointsMax.setIndex(0, 6)
    .EffectPointsMin.setIndex(0, 6)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 13)
    .EffectPointsMax.setIndex(1, 6)
    .EffectPointsMin.setIndex(1, 6)
    .Name.enGB.set(greenColorCode + "+6 Defense Rating and +6 Dodge Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let green6 = createGem(
    GemQuality1,
    "tier1-green6",
    "Barbed Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, green6, 0, 0, -1, 0, 0, 0, 0],
    [green6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 36)
    .EffectPointsMax.setIndex(0, 4)
    .EffectPointsMin.setIndex(0, 4)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 4)
    .EffectPointsMin.setIndex(1, 4)
    .Name.enGB.set(greenColorCode + "+4 Haste Rating and +4 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let green7 = createGem(
    GemQuality1,
    "tier1-green7",
    "Unstable Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, green7, 0, 0, -1, 0, 0, 0, 0],
    [green7, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 31)
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 37)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(greenColorCode + "+8 Hit Rating and +5 Expertise Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier1GreenGems = [
    green1,
    green2,
    green3,
    green4,
    green5,
    green6,
    green7,
];
export let undiscoveredGreens = createAllUndiscoverGems(
    7,
    "Deep Peridot",
    44729
);
gemLevelUpPattern(tierOneBaseResources[6], undiscoveredGreens, tier1GreenGems);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let green01 = std.Items.load(undiscoveredGreens[0]);
export let CrushGemgreen01 = std.Spells.create(
    MODNAME,
    "crushgemgreen01",
    8604
);
CrushGemgreen01.Name.enGB.set("Crush Gem");
CrushGemgreen01.Description.enGB.set("Crush into powder.");
CrushGemgreen01.Reagents.clearAll();
CrushGemgreen01.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemgreen01.Reagents.add(undiscoveredGreens[0], 1);
CrushGemgreen01.RequiresSpellFocus.set(0);
green01.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemgreen01.ID);
    itemSpell.Cooldown.set(100);
});
green01.MaxStack.set(9999);
export let green02 = std.Items.load(undiscoveredGreens[1]);
export let CrushGemgreen02 = std.Spells.create(
    MODNAME,
    "crushgemgreen02",
    8604
);
CrushGemgreen02.Name.enGB.set("Crush Gem");
CrushGemgreen02.Description.enGB.set("Crush into powder.");
CrushGemgreen02.Reagents.clearAll();
CrushGemgreen02.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemgreen02.Reagents.add(undiscoveredGreens[1], 1);
CrushGemgreen02.RequiresSpellFocus.set(0);
green02.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemgreen02.ID);
    itemSpell.Cooldown.set(100);
});
green02.MaxStack.set(9999);
export let green03 = std.Items.load(undiscoveredGreens[2]);
export let CrushGemgreen03 = std.Spells.create(
    MODNAME,
    "crushgemgreen03",
    8604
);
CrushGemgreen03.Name.enGB.set("Crush Gem");
CrushGemgreen03.Description.enGB.set("Crush into powder.");
CrushGemgreen03.Reagents.clearAll();
CrushGemgreen03.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemgreen03.Reagents.add(undiscoveredGreens[2], 1);
CrushGemgreen03.RequiresSpellFocus.set(0);
green03.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemgreen03.ID);
    itemSpell.Cooldown.set(100);
});
green03.MaxStack.set(9999);
export let green04 = std.Items.load(undiscoveredGreens[3]);
export let CrushGemgreen04 = std.Spells.create(
    MODNAME,
    "crushgemgreen04",
    8604
);
CrushGemgreen04.Name.enGB.set("Crush Gem");
CrushGemgreen04.Description.enGB.set("Crush into powder.");
CrushGemgreen04.Reagents.clearAll();
CrushGemgreen04.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemgreen04.Reagents.add(undiscoveredGreens[3], 1);
CrushGemgreen04.RequiresSpellFocus.set(0);
green04.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemgreen04.ID);
    itemSpell.Cooldown.set(100);
});
green04.MaxStack.set(9999);
export let green05 = std.Items.load(undiscoveredGreens[4]);
export let CrushGemgreen05 = std.Spells.create(
    MODNAME,
    "crushgemgreen05",
    8604
);
CrushGemgreen05.Name.enGB.set("Crush Gem");
CrushGemgreen05.Description.enGB.set("Crush into powder.");
CrushGemgreen05.Reagents.clearAll();
CrushGemgreen05.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemgreen05.Reagents.add(undiscoveredGreens[4], 1);
CrushGemgreen05.RequiresSpellFocus.set(0);
green05.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemgreen05.ID);
    itemSpell.Cooldown.set(100);
});
green05.MaxStack.set(9999);
export let green06 = std.Items.load(undiscoveredGreens[5]);
export let CrushGemgreen06 = std.Spells.create(
    MODNAME,
    "crushgemgreen06",
    8604
);
CrushGemgreen06.Name.enGB.set("Crush Gem");
CrushGemgreen06.Description.enGB.set("Crush into powder.");
CrushGemgreen06.Reagents.clearAll();
CrushGemgreen06.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemgreen06.Reagents.add(undiscoveredGreens[5], 1);
CrushGemgreen06.RequiresSpellFocus.set(0);
green06.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemgreen06.ID);
    itemSpell.Cooldown.set(100);
});
green06.MaxStack.set(9999);
export let green07 = std.Items.load(undiscoveredGreens[6]);
export let CrushGemgreen07 = std.Spells.create(
    MODNAME,
    "crushgemgreen07",
    8604
);
CrushGemgreen07.Name.enGB.set("Crush Gem");
CrushGemgreen07.Description.enGB.set("Crush into powder.");
CrushGemgreen07.Reagents.clearAll();
CrushGemgreen07.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemgreen07.Reagents.add(undiscoveredGreens[6], 1);
CrushGemgreen07.RequiresSpellFocus.set(0);
green07.Spells.addMod((itemSpell) => {
    itemSpell.Spell.set(CrushGemgreen07.ID);
    itemSpell.Cooldown.set(100);
});
green07.MaxStack.set(9999);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Purple Gems
let purple1 = createGem(
    GemQuality1,
    "tier1-purple1",
    "Shifting Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, purple1, 0, 0, -1, 0, 0, 0, 0],
    [purple1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 2)
    .EffectPointsMin.setIndex(0, 2)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(purpleColorCode + "+2 Agility and +8 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let purple2 = createGem(
    GemQuality1,
    "tier1-purple2",
    "Sovereign Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, purple2, 0, 0, -1, 0, 0, 0, 0],
    [purple2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 2)
    .EffectPointsMin.setIndex(0, 2)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(purpleColorCode + "+2 Strength and +8 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let purple3 = createGem(
    GemQuality1,
    "tier1-purple3",
    "Infused Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, purple3, 0, 0, -1, 0, 0, 0, 0],
    [purple3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 2)
    .EffectPointsMin.setIndex(0, 2)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(purpleColorCode + "+2 Intellect and +8 Haste Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let purple4 = createGem(
    GemQuality1,
    "tier1-purple4",
    "Glowing Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, purple4, 0, 0, -1, 0, 0, 0, 0],
    [purple4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 6)
    .EffectPointsMin.setIndex(0, 6)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(purpleColorCode + "+5 Haste Rating and +6 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let purple5 = createGem(
    GemQuality1,
    "tier1-purple5",
    "Royal Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, purple5, 0, 0, -1, 0, 0, 0, 0],
    [purple5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 15)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Name.enGB.set(purpleColorCode + "+15 Block Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let purple6 = createGem(
    GemQuality1,
    "tier1-purple6",
    "Balanced Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, purple6, 0, 0, -1, 0, 0, 0, 0],
    [purple6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 36)
    .EffectPointsMax.setIndex(0, 3)
    .EffectPointsMin.setIndex(0, 3)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 43)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(purpleColorCode + "+3 Haste Rating and +5 Mana Per Second")
    .ItemVisual.set(0)
    .Flags.set(0);

let purple7 = createGem(
    GemQuality1,
    "tier1-purple7",
    "Enthralled Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, purple7, 0, 0, -1, 0, 0, 0, 0],
    [purple7, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 10)
    .EffectPointsMin.setIndex(0, 10)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 37)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(
        purpleColorCode + "+10 Critical Strike Rating and +5 Expertise Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier1PurpleGems = [
    purple1,
    purple2,
    purple3,
    purple4,
    purple5,
    purple6,
    purple7,
];
export let undiscoveredPurples = createAllUndiscoverGems(
    7,
    "Shadow Draenite",
    39933
);
gemLevelUpPattern(
    tierOneBaseResources[6],
    undiscoveredPurples,
    tier1PurpleGems
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let purple01 = std.Items.load(undiscoveredPurples[0]);
export let CrushGempurple01 = std.Spells.create(
    MODNAME,
    "crushgempurple01",
    8604
);
CrushGempurple01.Name.enGB.set("Crush Gem");
CrushGempurple01.Description.enGB.set("Crush into powder.");
CrushGempurple01.Reagents.clearAll();
CrushGempurple01.Effects.get(0).ItemType.set(GemDust.ID);
CrushGempurple01.Reagents.add(undiscoveredPurples[0], 1);
CrushGempurple01.RequiresSpellFocus.set(0);
purple01.Spells.addMod((spell) => {
    spell.Spell.set(CrushGempurple01.ID);
    spell.Cooldown.set(100);
});
purple01.MaxStack.set(9999);
export let purple02 = std.Items.load(undiscoveredPurples[1]);
export let CrushGempurple02 = std.Spells.create(
    MODNAME,
    "crushgempurple02",
    8604
);
CrushGempurple02.Name.enGB.set("Crush Gem");
CrushGempurple02.Description.enGB.set("Crush into powder.");
CrushGempurple02.Reagents.clearAll();
CrushGempurple02.Effects.get(0).ItemType.set(GemDust.ID);
CrushGempurple02.Reagents.add(undiscoveredPurples[1], 1);
CrushGempurple02.RequiresSpellFocus.set(0);
purple02.Spells.addMod((spell) => {
    spell.Spell.set(CrushGempurple02.ID);
    spell.Cooldown.set(100);
});
purple02.MaxStack.set(9999);
export let purple03 = std.Items.load(undiscoveredPurples[2]);
export let CrushGempurple03 = std.Spells.create(
    MODNAME,
    "crushgempurple03",
    8604
);
CrushGempurple03.Name.enGB.set("Crush Gem");
CrushGempurple03.Description.enGB.set("Crush into powder.");
CrushGempurple03.Reagents.clearAll();
CrushGempurple03.Effects.get(0).ItemType.set(GemDust.ID);
CrushGempurple03.Reagents.add(undiscoveredPurples[2], 1);
CrushGempurple03.RequiresSpellFocus.set(0);
purple03.Spells.addMod((spell) => {
    spell.Spell.set(CrushGempurple03.ID);
    spell.Cooldown.set(100);
});
purple03.MaxStack.set(9999);
export let purple04 = std.Items.load(undiscoveredPurples[3]);
export let CrushGempurple04 = std.Spells.create(
    MODNAME,
    "crushgempurple04",
    8604
);
CrushGempurple04.Name.enGB.set("Crush Gem");
CrushGempurple04.Description.enGB.set("Crush into powder.");
CrushGempurple04.Reagents.clearAll();
CrushGempurple04.Effects.get(0).ItemType.set(GemDust.ID);
CrushGempurple04.Reagents.add(undiscoveredPurples[3], 1);
CrushGempurple04.RequiresSpellFocus.set(0);
purple04.Spells.addMod((spell) => {
    spell.Spell.set(CrushGempurple04.ID);
    spell.Cooldown.set(100);
});
purple04.MaxStack.set(9999);
export let purple05 = std.Items.load(undiscoveredPurples[4]);
export let CrushGempurple05 = std.Spells.create(
    MODNAME,
    "crushgempurple05",
    8604
);
CrushGempurple05.Name.enGB.set("Crush Gem");
CrushGempurple05.Description.enGB.set("Crush into powder.");
CrushGempurple05.Reagents.clearAll();
CrushGempurple05.Effects.get(0).ItemType.set(GemDust.ID);
CrushGempurple05.Reagents.add(undiscoveredPurples[4], 1);
CrushGempurple05.RequiresSpellFocus.set(0);
purple05.Spells.addMod((spell) => {
    spell.Spell.set(CrushGempurple05.ID);
    spell.Cooldown.set(100);
});
purple05.MaxStack.set(9999);
export let purple06 = std.Items.load(undiscoveredPurples[5]);
export let CrushGempurple06 = std.Spells.create(
    MODNAME,
    "crushgempurple06",
    8604
);
CrushGempurple06.Name.enGB.set("Crush Gem");
CrushGempurple06.Description.enGB.set("Crush into powder.");
CrushGempurple06.Reagents.clearAll();
CrushGempurple06.Effects.get(0).ItemType.set(GemDust.ID);
CrushGempurple06.Reagents.add(undiscoveredPurples[5], 1);
CrushGempurple06.RequiresSpellFocus.set(0);
purple06.Spells.addMod((spell) => {
    spell.Spell.set(CrushGempurple06.ID);
    spell.Cooldown.set(100);
});
purple06.MaxStack.set(9999);
export let purple07 = std.Items.load(undiscoveredPurples[6]);
export let CrushGempurple07 = std.Spells.create(
    MODNAME,
    "crushgempurple07",
    8604
);
CrushGempurple07.Name.enGB.set("Crush Gem");
CrushGempurple07.Description.enGB.set("Crush into powder.");
CrushGempurple07.Reagents.clearAll();
CrushGempurple07.Effects.get(0).ItemType.set(GemDust.ID);
CrushGempurple07.Reagents.add(undiscoveredPurples[6], 1);
CrushGempurple07.RequiresSpellFocus.set(0);
purple07.Spells.addMod((spell) => {
    spell.Spell.set(CrushGempurple07.ID);
    spell.Cooldown.set(100);
});
purple07.MaxStack.set(9999);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Yellow Gems
let yellow1 = createGem(
    GemQuality1,
    "tier1-yellow1",
    "Brilliant Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, yellow1, 0, 0, -1, 0, 0, 0, 0],
    [yellow1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 2)
    .EffectPointsMin.setIndex(0, 2)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(yellowColorCode + "+2 Agility and +8 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let yellow2 = createGem(
    GemQuality1,
    "tier1-yellow2",
    "Gleaming Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, yellow2, 0, 0, -1, 0, 0, 0, 0],
    [yellow2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 2)
    .EffectPointsMin.setIndex(0, 2)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(yellowColorCode + "+2 Strength and +8 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let yellow3 = createGem(
    GemQuality1,
    "tier1-yellow3",
    "Thick Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, yellow3, 0, 0, -1, 0, 0, 0, 0],
    [yellow3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 2)
    .EffectPointsMin.setIndex(0, 2)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(yellowColorCode + "+2 Intellect and +8 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let yellow4 = createGem(
    GemQuality1,
    "tier1-yellow4",
    "Rigid Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, yellow4, 0, 0, -1, 0, 0, 0, 0],
    [yellow4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 6)
    .EffectPointsMin.setIndex(0, 6)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 5)
    .EffectPointsMin.setIndex(1, 5)
    .Name.enGB.set(yellowColorCode + "+5 Critical Strike Rating and +6 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let yellow5 = createGem(
    GemQuality1,
    "tier1-yellow5",
    "Great Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, yellow5, 0, 0, -1, 0, 0, 0, 0],
    [yellow5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Name.enGB.set(yellowColorCode + "+15 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier1YellowGems = [yellow1, yellow2, yellow3, yellow4, yellow5];
export let undiscoveredYellows = createAllUndiscoverGems(
    5,
    "Golden Draenite",
    39938
);
gemLevelUpPattern(
    tierOneBaseResources[6],
    undiscoveredYellows,
    tier1YellowGems
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let yellow01 = std.Items.load(undiscoveredYellows[0]);
export let CrushGemyellow01 = std.Spells.create(
    MODNAME,
    "crushgemyellow01",
    8604
);
CrushGemyellow01.Name.enGB.set("Crush Gem");
CrushGemyellow01.Description.enGB.set("Crush into powder.");
CrushGemyellow01.Reagents.clearAll();
CrushGemyellow01.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemyellow01.Reagents.add(undiscoveredYellows[0], 1);
CrushGemyellow01.RequiresSpellFocus.set(0);
yellow01.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemyellow01.ID);
    spell.Cooldown.set(100);
});
yellow01.MaxStack.set(9999);
export let yellow02 = std.Items.load(undiscoveredYellows[1]);
export let CrushGemyellow02 = std.Spells.create(
    MODNAME,
    "crushgemyellow02",
    8604
);
CrushGemyellow02.Name.enGB.set("Crush Gem");
CrushGemyellow02.Description.enGB.set("Crush into powder.");
CrushGemyellow02.Reagents.clearAll();
CrushGemyellow02.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemyellow02.Reagents.add(undiscoveredYellows[1], 1);
CrushGemyellow02.RequiresSpellFocus.set(0);
yellow02.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemyellow02.ID);
    spell.Cooldown.set(100);
});
yellow02.MaxStack.set(9999);
export let yellow03 = std.Items.load(undiscoveredYellows[2]);
export let CrushGemyellow03 = std.Spells.create(
    MODNAME,
    "crushgemyellow03",
    8604
);
CrushGemyellow03.Name.enGB.set("Crush Gem");
CrushGemyellow03.Description.enGB.set("Crush into powder.");
CrushGemyellow03.Reagents.clearAll();
CrushGemyellow03.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemyellow03.Reagents.add(undiscoveredYellows[2], 1);
CrushGemyellow03.RequiresSpellFocus.set(0);
yellow03.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemyellow03.ID);
    spell.Cooldown.set(100);
});
yellow03.MaxStack.set(9999);
export let yellow04 = std.Items.load(undiscoveredYellows[3]);
export let CrushGemyellow04 = std.Spells.create(
    MODNAME,
    "crushgemyellow04",
    8604
);
CrushGemyellow04.Name.enGB.set("Crush Gem");
CrushGemyellow04.Description.enGB.set("Crush into powder.");
CrushGemyellow04.Reagents.clearAll();
CrushGemyellow04.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemyellow04.Reagents.add(undiscoveredYellows[3], 1);
CrushGemyellow04.RequiresSpellFocus.set(0);
yellow04.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemyellow04.ID);
    spell.Cooldown.set(100);
});
yellow04.MaxStack.set(9999);
export let yellow05 = std.Items.load(undiscoveredYellows[4]);
export let CrushGemyellow05 = std.Spells.create(
    MODNAME,
    "crushgemyellow05",
    8604
);
CrushGemyellow05.Name.enGB.set("Crush Gem");
CrushGemyellow05.Description.enGB.set("Crush into powder.");
CrushGemyellow05.Reagents.clearAll();
CrushGemyellow05.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemyellow05.Reagents.add(undiscoveredYellows[4], 1);
CrushGemyellow05.RequiresSpellFocus.set(0);
yellow05.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemyellow05.ID);
    spell.Cooldown.set(100);
});
yellow05.MaxStack.set(9999);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Blue Gems

let blue1 = createGem(
    GemQuality1,
    "tier1-blue1",
    "Solid Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, blue1, 0, 0, -1, 0, 0, 0, 0],
    [blue1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 6)
    .EffectPointsMin.setIndex(0, 6)
    .Name.enGB.set(blueColorCode + "+6 Stamina")
    .ItemVisual.set(0)
    .Flags.set(0);

let blue2 = createGem(
    GemQuality1,
    "tier1-blue2",
    "Sparkling Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, blue2, 0, 0, -1, 0, 0, 0, 0],
    [blue2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 4)
    .EffectPointsMin.setIndex(0, 4)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 2)
    .EffectPointsMin.setIndex(1, 2)
    .Name.enGB.set(blueColorCode + "+4 Stamina and +2 Intellect")
    .ItemVisual.set(0)
    .Flags.set(0);

let blue3 = createGem(
    GemQuality1,
    "tier1-blue3",
    "Stormy Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, blue3, 0, 0, -1, 0, 0, 0, 0],
    [blue3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 4)
    .EffectPointsMin.setIndex(0, 4)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 3)
    .EffectPointsMax.setIndex(1, 2)
    .EffectPointsMin.setIndex(1, 2)
    .Name.enGB.set(blueColorCode + "+4 Stamina and +2 Agility")
    .ItemVisual.set(0)
    .Flags.set(0);

let blue4 = createGem(
    GemQuality1,
    "tier1-blue4",
    "Lustrous Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, blue4, 0, 0, -1, 0, 0, 0, 0],
    [blue4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 4)
    .EffectPointsMin.setIndex(0, 4)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 4)
    .EffectPointsMax.setIndex(1, 2)
    .EffectPointsMin.setIndex(1, 2)
    .Name.enGB.set(blueColorCode + "+4 Stamina and +2 Strength")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier1BlueGems = [blue1, blue2, blue3, blue4];
export let undiscoveredBlues = createAllUndiscoverGems(
    4,
    "Azure Moonstone",
    39928
);
gemLevelUpPattern(tierOneBaseResources[6], undiscoveredBlues, tier1BlueGems);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let blue01 = std.Items.load(undiscoveredBlues[0]);
export let CrushGemblue01 = std.Spells.create(MODNAME, "crushgemblue01", 8604);
CrushGemblue01.Name.enGB.set("Crush Gem");
CrushGemblue01.Description.enGB.set("Crush into powder.");
CrushGemblue01.Reagents.clearAll();
CrushGemblue01.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemblue01.Reagents.add(undiscoveredBlues[0], 1);
CrushGemblue01.RequiresSpellFocus.set(0);
blue01.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemblue01.ID);
    spell.Cooldown.set(100);
});
blue01.MaxStack.set(9999);
export let blue02 = std.Items.load(undiscoveredBlues[1]);
export let CrushGemblue02 = std.Spells.create(MODNAME, "crushgemblue02", 8604);
CrushGemblue02.Name.enGB.set("Crush Gem");
CrushGemblue02.Description.enGB.set("Crush into powder.");
CrushGemblue02.Reagents.clearAll();
CrushGemblue02.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemblue02.Reagents.add(undiscoveredBlues[1], 1);
CrushGemblue02.RequiresSpellFocus.set(0);
blue02.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemblue02.ID);
    spell.Cooldown.set(100);
});
blue02.MaxStack.set(9999);
export let blue03 = std.Items.load(undiscoveredBlues[2]);
export let CrushGemblue03 = std.Spells.create(MODNAME, "crushgemblue03", 8604);
CrushGemblue03.Name.enGB.set("Crush Gem");
CrushGemblue03.Description.enGB.set("Crush into powder.");
CrushGemblue03.Reagents.clearAll();
CrushGemblue03.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemblue03.Reagents.add(undiscoveredBlues[2], 1);
CrushGemblue03.RequiresSpellFocus.set(0);
blue03.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemblue03.ID);
    spell.Cooldown.set(100);
});
blue03.MaxStack.set(9999);
export let blue04 = std.Items.load(undiscoveredBlues[3]);
export let CrushGemblue04 = std.Spells.create(MODNAME, "crushgemblue04", 8604);
CrushGemblue04.Name.enGB.set("Crush Gem");
CrushGemblue04.Description.enGB.set("Crush into powder.");
CrushGemblue04.Reagents.clearAll();
CrushGemblue04.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemblue04.Reagents.add(undiscoveredBlues[3], 1);
CrushGemblue04.RequiresSpellFocus.set(0);
blue04.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemblue04.ID);
    spell.Cooldown.set(100);
});
blue04.MaxStack.set(9999);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// orange Gems
let orange1 = createGem(
    GemQuality1,
    "tier1-orange1",
    "Inscribed Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, orange1, 0, 0, -1, 0, 0, 0, 0],
    [orange1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 5)
    .EffectPointsMin.setIndex(0, 5)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(
        orangeColorCode + "+5 Critical Strike Rating and +8 Haste Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let orange2 = createGem(
    GemQuality1,
    "tier1-orange2",
    "Luminous Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, orange2, 0, 0, -1, 0, 0, 0, 0],
    [orange2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 5)
    .EffectPointsMin.setIndex(0, 5)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(
        orangeColorCode + "+5 Critical Strike Rating and +8 Hit Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let orange3 = createGem(
    GemQuality1,
    "tier1-orange3",
    "Glinting Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, orange3, 0, 0, -1, 0, 0, 0, 0],
    [orange3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 5)
    .EffectPointsMin.setIndex(0, 5)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(
        orangeColorCode + "+5 Critical Strike Rating and +8 Attack Power"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let orange4 = createGem(
    GemQuality1,
    "tier1-orange4",
    "Potent Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, orange4, 0, 0, -1, 0, 0, 0, 0],
    [orange4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 5)
    .EffectPointsMin.setIndex(0, 5)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 45)
    .EffectPointsMax.setIndex(1, 8)
    .EffectPointsMin.setIndex(1, 8)
    .Name.enGB.set(
        orangeColorCode + "+5 Critical Strike Rating and +8 Spell Power"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let orange5 = createGem(
    GemQuality1,
    "tier1-orange5",
    "Veiled Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, orange5, 0, 0, -1, 0, 0, 0, 0],
    [orange5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Name.enGB.set(orangeColorCode + "+15 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let orange6 = createGem(
    GemQuality1,
    "tier1-orange6",
    "Wicked Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, orange6, 0, 0, -1, 0, 0, 0, 0],
    [orange6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 5)
    .EffectPointsMin.setIndex(0, 5)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 43)
    .EffectPointsMax.setIndex(1, 10)
    .EffectPointsMin.setIndex(1, 10)
    .Name.enGB.set(
        orangeColorCode + "+5 Critical Strike Rating and +10 Mana Per Second"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier1OrangeGems = [
    orange1,
    orange2,
    orange3,
    orange4,
    orange5,
    orange6,
];
export let undiscoveredOranges = createAllUndiscoverGems(
    6,
    "Flame Spessarite",
    39932
);
gemLevelUpPattern(
    tierOneBaseResources[6],
    undiscoveredOranges,
    tier1OrangeGems
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let orange01 = std.Items.load(undiscoveredOranges[0]);
export let CrushGemorange01 = std.Spells.create(
    MODNAME,
    "crushgemorange01",
    8604
);
CrushGemorange01.Name.enGB.set("Crush Gem");
CrushGemorange01.Description.enGB.set("Crush into powder.");
CrushGemorange01.Reagents.clearAll();
CrushGemorange01.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemorange01.Reagents.add(undiscoveredOranges[0], 1);
CrushGemorange01.RequiresSpellFocus.set(0);
orange01.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemorange01.ID);
    spell.Cooldown.set(100);
});
orange01.MaxStack.set(9999);
export let orange02 = std.Items.load(undiscoveredOranges[1]);
export let CrushGemorange02 = std.Spells.create(
    MODNAME,
    "crushgemorange02",
    8604
);
CrushGemorange02.Name.enGB.set("Crush Gem");
CrushGemorange02.Description.enGB.set("Crush into powder.");
CrushGemorange02.Reagents.clearAll();
CrushGemorange02.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemorange02.Reagents.add(undiscoveredOranges[1], 1);
CrushGemorange02.RequiresSpellFocus.set(0);
orange02.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemorange02.ID);
    spell.Cooldown.set(100);
});
orange02.MaxStack.set(9999);
export let orange03 = std.Items.load(undiscoveredOranges[2]);
export let CrushGemorange03 = std.Spells.create(
    MODNAME,
    "crushgemorange03",
    8604
);
CrushGemorange03.Name.enGB.set("Crush Gem");
CrushGemorange03.Description.enGB.set("Crush into powder.");
CrushGemorange03.Reagents.clearAll();
CrushGemorange03.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemorange03.Reagents.add(undiscoveredOranges[2], 1);
CrushGemorange03.RequiresSpellFocus.set(0);
orange03.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemorange03.ID);
    spell.Cooldown.set(100);
});
orange03.MaxStack.set(9999);
export let orange04 = std.Items.load(undiscoveredOranges[3]);
export let CrushGemorange04 = std.Spells.create(
    MODNAME,
    "crushgemorange04",
    8604
);
CrushGemorange04.Name.enGB.set("Crush Gem");
CrushGemorange04.Description.enGB.set("Crush into powder.");
CrushGemorange04.Reagents.clearAll();
CrushGemorange04.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemorange04.Reagents.add(undiscoveredOranges[3], 1);
CrushGemorange04.RequiresSpellFocus.set(0);
orange04.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemorange04.ID);
    spell.Cooldown.set(100);
});
orange04.MaxStack.set(9999);
export let orange05 = std.Items.load(undiscoveredOranges[4]);
export let CrushGemorange05 = std.Spells.create(
    MODNAME,
    "crushgemorange05",
    8604
);
CrushGemorange05.Name.enGB.set("Crush Gem");
CrushGemorange05.Description.enGB.set("Crush into powder.");
CrushGemorange05.Reagents.clearAll();
CrushGemorange05.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemorange05.Reagents.add(undiscoveredOranges[4], 1);
CrushGemorange05.RequiresSpellFocus.set(0);
orange05.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemorange05.ID);
    spell.Cooldown.set(100);
});
orange05.MaxStack.set(9999);
export let orange06 = std.Items.load(undiscoveredOranges[5]);
export let CrushGemorange06 = std.Spells.create(
    MODNAME,
    "crushgemorange06",
    8604
);
CrushGemorange06.Name.enGB.set("Crush Gem");
CrushGemorange06.Description.enGB.set("Crush into powder.");
CrushGemorange06.Reagents.clearAll();
CrushGemorange06.Effects.get(0).ItemType.set(GemDust.ID);
CrushGemorange06.Reagents.add(undiscoveredOranges[5], 1);
CrushGemorange06.RequiresSpellFocus.set(0);
orange06.Spells.addMod((spell) => {
    spell.Spell.set(CrushGemorange06.ID);
    spell.Cooldown.set(100);
});
orange06.MaxStack.set(9999);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vendorAddItems(vendor2, [
    tier1RedGems,
    tier1GreenGems,
    tier1PurpleGems,
    tier1YellowGems,
    tier1BlueGems,
    tier1OrangeGems,
]);
