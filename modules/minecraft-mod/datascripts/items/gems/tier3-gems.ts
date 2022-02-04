import { std } from "tswow-stdlib";
import { MODNAME } from "../../modname";
import { createRecipe } from "../../functions/recipe-functions";
import { DBC } from "wotlkdata";
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
import { tierThreeBaseResources } from "../armor/tier3-set";
import {
    tier2BlueGems,
    tier2GreenGems,
    tier2OrangeGems,
    tier2PurpleGems,
    tier2RedGems,
    tier2YellowGems,
} from "./tier2-gems";
let vendor2 = std.CreatureTemplates.create(MODNAME, "gemdude3", 3482);
vendor2.Name.enGB.set("Test Gems 3");
vendor2.Subname.enGB.set("will be removed");
vendor2.FactionTemplate.set(35);
let GemPropertyIndex = 2300;
let SpellItemEnchantmentIndex = 5300;
let GemQuality3 = 3;

// Red Gems
let tier3Red1 = createGem(
    GemQuality3,
    "tier3-red1",
    "Teardrop Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red1, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red1, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 10)
    .EffectPointsMin.setIndex(0, 10)
    .Name.enGB.set(redColorCode + "+10 Agility")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Red2 = createGem(
    GemQuality3,
    "tier3-red2",
    "Bold Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red2, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red2, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 10)
    .EffectPointsMin.setIndex(0, 10)
    .Name.enGB.set(redColorCode + "+10 Intellect")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Red3 = createGem(
    GemQuality3,
    "tier3-red3",
    "Runed Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red3, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red3, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 12)
    .EffectPointsMin.setIndex(0, 12)
    .Name.enGB.set(redColorCode + "+12 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Red4 = createGem(
    GemQuality3,
    "tier3-red4",
    "Delicate Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red4, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red4, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 10)
    .EffectPointsMin.setIndex(0, 10)
    .Name.enGB.set(redColorCode + "+10 Stamina")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Red5 = createGem(
    GemQuality3,
    "tier3-red5",
    "Stark Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red5, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red5, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 10)
    .EffectPointsMin.setIndex(0, 10)
    .Name.enGB.set(redColorCode + "+10 Strength")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Red6 = createGem(
    GemQuality3,
    "tier3-red6",
    "Mighty Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red6, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red6, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 21)
    .EffectPointsMin.setIndex(0, 21)
    .Name.enGB.set(redColorCode + "+21 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Red7 = createGem(
    GemQuality3,
    "tier3-red7",
    "Bright Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red7, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red7, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 45)
    .EffectPointsMin.setIndex(0, 45)
    .Name.enGB.set(redColorCode + "+45 Armor")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Red8 = createGem(
    GemQuality3,
    "tier3-red8",
    "Mighty Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Red8, 0, 0, -1, 0, 0, 0, 0],
    [tier3Red8, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 21)
    .EffectPointsMin.setIndex(0, 21)
    .Name.enGB.set(redColorCode + "+21 Spell Power")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier3RedGems = [
    tier3Red1,
    tier3Red2,
    tier3Red3,
    tier3Red4,
    tier3Red5,
    tier3Red6,
    tier3Red7,
    tier3Red8,
];
gemLevelUpPattern(tierThreeBaseResources[6], tier2RedGems, tier3RedGems);

// Green Gems
let tier3Green1 = createGem(
    GemQuality3,
    "tier3-green1",
    "Radiant Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Green1, 0, 0, -1, 0, 0, 0, 0],
    [tier3Green1, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 15)
    .EffectPointsMin.setIndex(1, 15)
    .Name.enGB.set(greenColorCode + "+8 Agility and +15 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Green2 = createGem(
    GemQuality3,
    "tier3-green2",
    "Jagged Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Green2, 0, 0, -1, 0, 0, 0, 0],
    [tier3Green2, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 15)
    .EffectPointsMin.setIndex(1, 15)
    .Name.enGB.set(greenColorCode + "+8 Strength and +15 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Green3 = createGem(
    GemQuality3,
    "tier3-green3",
    "Enduring Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Green3, 0, 0, -1, 0, 0, 0, 0],
    [tier3Green3, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 45)
    .EffectPointsMax.setIndex(1, 15)
    .EffectPointsMin.setIndex(1, 15)
    .Name.enGB.set(greenColorCode + "+8 Intellect and +15 Spell Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Green4 = createGem(
    GemQuality3,
    "tier3-green4",
    "Dazzling Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Green4, 0, 0, -1, 0, 0, 0, 0],
    [tier3Green4, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 16)
    .EffectPointsMin.setIndex(0, 16)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 10)
    .EffectPointsMin.setIndex(1, 10)
    .Name.enGB.set(greenColorCode + "+10 Intellect and +16 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Green5 = createGem(
    GemQuality3,
    "tier3-green5",
    "Notched Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Green5, 0, 0, -1, 0, 0, 0, 0],
    [tier3Green5, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 18)
    .EffectPointsMin.setIndex(0, 18)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 13)
    .EffectPointsMax.setIndex(1, 18)
    .EffectPointsMin.setIndex(1, 18)
    .Name.enGB.set(greenColorCode + "+18 Defense Rating and +18 Dodge Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Green6 = createGem(
    GemQuality3,
    "tier3-green6",
    "Barbed Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Green6, 0, 0, -1, 0, 0, 0, 0],
    [tier3Green6, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 12)
    .EffectPointsMin.setIndex(0, 12)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 12)
    .EffectPointsMin.setIndex(1, 12)
    .Name.enGB.set(greenColorCode + "+12 Haste Rating and +12 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Green7 = createGem(
    GemQuality3,
    "tier3-green7",
    "Unstable Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Green7, 0, 0, -1, 0, 0, 0, 0],
    [tier3Green7, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 18)
    .EffectPointsMin.setIndex(0, 18)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 37)
    .EffectPointsMax.setIndex(1, 15)
    .EffectPointsMin.setIndex(1, 15)
    .Name.enGB.set(greenColorCode + "+18 Hit Rating and +15 Expertise Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier3GreenGems = [
    tier3Green1,
    tier3Green2,
    tier3Green3,
    tier3Green4,
    tier3Green5,
    tier3Green6,
    tier3Green7,
];
gemLevelUpPattern(tierThreeBaseResources[6], tier2GreenGems, tier3GreenGems);

// Purple Gems
let tier3Purple1 = createGem(
    GemQuality3,
    "tier3-purple1",
    "Shifting Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Purple1, 0, 0, -1, 0, 0, 0, 0],
    [tier3Purple1, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(purpleColorCode + "+8 Agility and +16 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Purple2 = createGem(
    GemQuality3,
    "tier3-purple2",
    "Sovereign Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Purple2, 0, 0, -1, 0, 0, 0, 0],
    [tier3Purple2, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(purpleColorCode + "+8 Strength and +16 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Purple3 = createGem(
    GemQuality3,
    "tier3-purple3",
    "Infused Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Purple3, 0, 0, -1, 0, 0, 0, 0],
    [tier3Purple3, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(purpleColorCode + "+8 Intellect and +16 Haste Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Purple4 = createGem(
    GemQuality3,
    "tier3-purple4",
    "Glowing Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Purple4, 0, 0, -1, 0, 0, 0, 0],
    [tier3Purple4, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 20)
    .EffectPointsMin.setIndex(0, 20)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 14)
    .EffectPointsMin.setIndex(1, 14)
    .Name.enGB.set(purpleColorCode + "+14 Haste Rating and +20 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Purple5 = createGem(
    GemQuality3,
    "tier3-purple5",
    "Royal Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Purple5, 0, 0, -1, 0, 0, 0, 0],
    [tier3Purple5, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 30)
    .EffectPointsMin.setIndex(0, 30)
    .Name.enGB.set(purpleColorCode + "+30 Block Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Purple6 = createGem(
    GemQuality3,
    "tier3-purple6",
    "Balanced Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Purple6, 0, 0, -1, 0, 0, 0, 0],
    [tier3Purple6, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 43)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(purpleColorCode + "+8 Haste Rating and +20 Mana Per Second")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Purple7 = createGem(
    GemQuality3,
    "tier3-purple7",
    "Enthralled Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Purple7, 0, 0, -1, 0, 0, 0, 0],
    [tier3Purple7, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 21)
    .EffectPointsMin.setIndex(0, 21)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 11)
    .EffectPointsMin.setIndex(1, 11)
    .Name.enGB.set(
        purpleColorCode + "+21 Critical Strike Rating and +11 Expertise Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier3PurpleGems = [
    tier3Purple1,
    tier3Purple2,
    tier3Purple3,
    tier3Purple4,
    tier3Purple5,
    tier3Purple6,
    tier3Purple7,
];
gemLevelUpPattern(tierThreeBaseResources[6], tier2PurpleGems, tier3PurpleGems);

// Yellow Gems
let tier3yellow1 = createGem(
    GemQuality3,
    "tier3-yellow1",
    "Brilliant Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3yellow1, 0, 0, -1, 0, 0, 0, 0],
    [tier3yellow1, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(yellowColorCode + "+8 Agility and +16 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3yellow2 = createGem(
    GemQuality3,
    "tier3-yellow2",
    "Gleaming Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3yellow2, 0, 0, -1, 0, 0, 0, 0],
    [tier3yellow2, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(yellowColorCode + "+8 Strength and +16 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3yellow3 = createGem(
    GemQuality3,
    "tier3-yellow3",
    "Thick Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3yellow3, 0, 0, -1, 0, 0, 0, 0],
    [tier3yellow3, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 8)
    .EffectPointsMin.setIndex(0, 8)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(
        yellowColorCode + "+8 Intellect and +16 Critical Strike Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3yellow4 = createGem(
    GemQuality3,
    "tier3-yellow4",
    "Rigid Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3yellow4, 0, 0, -1, 0, 0, 0, 0],
    [tier3yellow4, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 16)
    .EffectPointsMin.setIndex(0, 16)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 12)
    .EffectPointsMin.setIndex(1, 12)
    .Name.enGB.set(yellowColorCode + "+12 Critical Strike Rating and +16 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3yellow5 = createGem(
    GemQuality3,
    "tier3-yellow5",
    "Great Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3yellow5, 0, 0, -1, 0, 0, 0, 0],
    [tier3yellow5, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 30)
    .EffectPointsMin.setIndex(0, 30)
    .Name.enGB.set(yellowColorCode + "+30 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier3YellowGems = [
    tier3yellow1,
    tier3yellow2,
    tier3yellow3,
    tier3yellow4,
    tier3yellow5,
];
gemLevelUpPattern(tierThreeBaseResources[6], tier2YellowGems, tier3YellowGems);

//Blue Gems

let tier3Blue1 = createGem(
    GemQuality3,
    "tier3-blue1",
    "Solid Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Blue1, 0, 0, -1, 0, 0, 0, 0],
    [tier3Blue1, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Name.enGB.set(blueColorCode + "+15 Stamina")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Blue2 = createGem(
    GemQuality3,
    "tier3-blue2",
    "Sparkling Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Blue2, 0, 0, -1, 0, 0, 0, 0],
    [tier3Blue2, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 9)
    .EffectPointsMin.setIndex(0, 9)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 6)
    .EffectPointsMin.setIndex(1, 6)
    .Name.enGB.set(blueColorCode + "+9 Stamina and +6 Intellect")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Blue3 = createGem(
    GemQuality3,
    "tier3-blue3",
    "Stormy Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Blue3, 0, 0, -1, 0, 0, 0, 0],
    [tier3Blue3, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 9)
    .EffectPointsMin.setIndex(0, 9)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 3)
    .EffectPointsMax.setIndex(1, 6)
    .EffectPointsMin.setIndex(1, 6)
    .Name.enGB.set(blueColorCode + "+9 Stamina and +6 Agility")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Blue4 = createGem(
    GemQuality3,
    "tier3-blue4",
    "Lustrous Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Blue4, 0, 0, -1, 0, 0, 0, 0],
    [tier3Blue4, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 9)
    .EffectPointsMin.setIndex(0, 9)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 4)
    .EffectPointsMax.setIndex(1, 6)
    .EffectPointsMin.setIndex(1, 6)
    .Name.enGB.set(blueColorCode + "+9 Stamina and +6 Strength")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier3BlueGems = [tier3Blue1, tier3Blue2, tier3Blue3, tier3Blue4];
gemLevelUpPattern(tierThreeBaseResources[6], tier2BlueGems, tier3BlueGems);

// orange Gems
let tier3Orange1 = createGem(
    GemQuality3,
    "tier3-orange1",
    "Inscribed Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Orange1, 0, 0, -1, 0, 0, 0, 0],
    [tier3Orange1, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(
        orangeColorCode + "+11 Critical Strike Rating and +16 Haste Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Orange2 = createGem(
    GemQuality3,
    "tier3-orange2",
    "Luminous Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Orange2, 0, 0, -1, 0, 0, 0, 0],
    [tier3Orange2, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(
        orangeColorCode + "+11 Critical Strike Rating and +16 Hit Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Orange3 = createGem(
    GemQuality3,
    "tier3-orange3",
    "Glinting Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Orange3, 0, 0, -1, 0, 0, 0, 0],
    [tier3Orange3, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(
        orangeColorCode + "+11 Critical Strike Rating and +16 Attack Power"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Orange4 = createGem(
    GemQuality3,
    "tier3-orange4",
    "Potent Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Orange4, 0, 0, -1, 0, 0, 0, 0],
    [tier3Orange4, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 45)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(
        orangeColorCode + "+11 Critical Strike Rating and +16 Spell Power"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Orange5 = createGem(
    GemQuality3,
    "tier3-orange5",
    "Veiled Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Orange5, 0, 0, -1, 0, 0, 0, 0],
    [tier3Orange5, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 30)
    .EffectPointsMin.setIndex(0, 30)
    .Name.enGB.set(orangeColorCode + "+30 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier3Orange6 = createGem(
    GemQuality3,
    "tier3-orange6",
    "Wicked Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier3Orange6, 0, 0, -1, 0, 0, 0, 0],
    [tier3Orange6, 0, 0, 0, 0, 0, 0, 0, 0],
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
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 43)
    .EffectPointsMax.setIndex(1, 25)
    .EffectPointsMin.setIndex(1, 25)
    .Name.enGB.set(
        orangeColorCode + "+11 Critical Strike Rating and +25 Mana Per Second"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier3OrangeGems = [
    tier3Orange1,
    tier3Orange2,
    tier3Orange3,
    tier3Orange4,
    tier3Orange5,
    tier3Orange6,
];
gemLevelUpPattern(tierThreeBaseResources[6], tier2OrangeGems, tier3OrangeGems);

vendorAddItems(vendor2, [
    tier3RedGems,
    tier3GreenGems,
    tier3PurpleGems,
    tier3YellowGems,
    tier3BlueGems,
    tier3OrangeGems,
]);
