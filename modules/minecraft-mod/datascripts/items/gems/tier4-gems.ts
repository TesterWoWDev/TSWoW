import { std } from "wow/wotlk";
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
} from "../../functions/gem-functions";
import { tierFourBaseResources } from "../armor/tier4-set";
import {
    tier3BlueGems,
    tier3GreenGems,
    tier3OrangeGems,
    tier3PurpleGems,
    tier3RedGems,
    tier3YellowGems,
} from "./tier3-gems";
let vendor2 = std.CreatureTemplates.create(MODNAME, "gemdude4", 3482);
vendor2.Name.enGB.set("Test Gems 4");
vendor2.Subname.enGB.set("will be removed");
vendor2.FactionTemplate.set(35);
let GemPropertyIndex = 2450;
let SpellItemEnchantmentIndex = 5450;
let GemQuality4 = 4;

// Red Gems
let tier4Red1 = createGem(
    GemQuality4,
    "tier4-red1",
    "Teardrop Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red1, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 20)
    .EffectPointsMin.setIndex(0, 20)
    .Name.enGB.set(redColorCode + "+20 Agility")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Red2 = createGem(
    GemQuality4,
    "tier4-red2",
    "Bold Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red2, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 20)
    .EffectPointsMin.setIndex(0, 20)
    .Name.enGB.set(redColorCode + "+20 Intellect")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Red3 = createGem(
    GemQuality4,
    "tier4-red3",
    "Runed Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red3, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 18)
    .EffectPointsMin.setIndex(0, 18)
    .Name.enGB.set(redColorCode + "+18 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Red4 = createGem(
    GemQuality4,
    "tier4-red4",
    "Delicate Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red4, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 20)
    .EffectPointsMin.setIndex(0, 20)
    .Name.enGB.set(redColorCode + "+20 Stamina")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Red5 = createGem(
    GemQuality4,
    "tier4-red5",
    "Stark Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red5, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 20)
    .EffectPointsMin.setIndex(0, 20)
    .Name.enGB.set(redColorCode + "+20 Strength")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Red6 = createGem(
    GemQuality4,
    "tier4-red6",
    "Mighty Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red6, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 38)
    .EffectPointsMax.setIndex(0, 28)
    .EffectPointsMin.setIndex(0, 28)
    .Name.enGB.set(redColorCode + "+28 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Red7 = createGem(
    GemQuality4,
    "tier4-red7",
    "Bright Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red7, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red7, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 4)
    .EffectArg.setIndex(0, 0)
    .EffectPointsMax.setIndex(0, 60)
    .EffectPointsMin.setIndex(0, 60)
    .Name.enGB.set(redColorCode + "+60 Armor")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Red8 = createGem(
    GemQuality4,
    "tier4-red8",
    "Mighty Blood Garnet",
    35930,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Red8, 0, 0, -1, 0, 0, 0, 0],
    [tier4Red8, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 45)
    .EffectPointsMax.setIndex(0, 28)
    .EffectPointsMin.setIndex(0, 28)
    .Name.enGB.set(redColorCode + "+28 Spell Power")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier4RedGems = [
    tier4Red1,
    tier4Red2,
    tier4Red3,
    tier4Red4,
    tier4Red5,
    tier4Red6,
    tier4Red7,
    tier4Red8,
];
gemLevelUpPattern(tierFourBaseResources[6], tier3RedGems, tier4RedGems);

// Green Gems
let tier4Green1 = createGem(
    GemQuality4,
    "tier4-green1",
    "Radiant Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Green1, 0, 0, -1, 0, 0, 0, 0],
    [tier4Green1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 12)
    .EffectPointsMin.setIndex(0, 12)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(greenColorCode + "+12 Agility and +20 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Green2 = createGem(
    GemQuality4,
    "tier4-green2",
    "Jagged Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Green2, 0, 0, -1, 0, 0, 0, 0],
    [tier4Green2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 12)
    .EffectPointsMin.setIndex(0, 12)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(greenColorCode + "+12 Strength and +20 Attack Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Green3 = createGem(
    GemQuality4,
    "tier4-green3",
    "Enduring Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Green3, 0, 0, -1, 0, 0, 0, 0],
    [tier4Green3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 12)
    .EffectPointsMin.setIndex(0, 12)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 45)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(greenColorCode + "+12 Intellect and +20 Spell Power")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Green4 = createGem(
    GemQuality4,
    "tier4-green4",
    "Dazzling Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Green4, 0, 0, -1, 0, 0, 0, 0],
    [tier4Green4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 22)
    .EffectPointsMin.setIndex(0, 22)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 15)
    .EffectPointsMin.setIndex(1, 15)
    .Name.enGB.set(greenColorCode + "+15 Intellect and +22 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Green5 = createGem(
    GemQuality4,
    "tier4-green5",
    "Notched Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Green5, 0, 0, -1, 0, 0, 0, 0],
    [tier4Green5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 12)
    .EffectPointsMax.setIndex(0, 24)
    .EffectPointsMin.setIndex(0, 24)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 13)
    .EffectPointsMax.setIndex(1, 24)
    .EffectPointsMin.setIndex(1, 24)
    .Name.enGB.set(greenColorCode + "+24 Defense Rating and +24 Dodge Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Green6 = createGem(
    GemQuality4,
    "tier4-green6",
    "Barbed Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Green6, 0, 0, -1, 0, 0, 0, 0],
    [tier4Green6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 36)
    .EffectPointsMax.setIndex(0, 16)
    .EffectPointsMin.setIndex(0, 16)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(greenColorCode + "+16 Haste Rating and +16 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Green7 = createGem(
    GemQuality4,
    "tier4-green7",
    "Unstable Deep Peridot",
    35843,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Green7, 0, 0, -1, 0, 0, 0, 0],
    [tier4Green7, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 31)
    .EffectPointsMax.setIndex(0, 22)
    .EffectPointsMin.setIndex(0, 22)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 37)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(greenColorCode + "+22 Hit Rating and +20 Expertise Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier4GreenGems = [
    tier4Green1,
    tier4Green2,
    tier4Green3,
    tier4Green4,
    tier4Green5,
    tier4Green6,
    tier4Green7,
];
gemLevelUpPattern(tierFourBaseResources[6], tier3GreenGems, tier4GreenGems);

// Purple Gems
let tier4Purple1 = createGem(
    GemQuality4,
    "tier4-purple1",
    "Shifting Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Purple1, 0, 0, -1, 0, 0, 0, 0],
    [tier4Purple1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 22)
    .EffectPointsMin.setIndex(1, 22)
    .Name.enGB.set(purpleColorCode + "+11 Agility and +22 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Purple2 = createGem(
    GemQuality4,
    "tier4-purple2",
    "Sovereign Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Purple2, 0, 0, -1, 0, 0, 0, 0],
    [tier4Purple2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 22)
    .EffectPointsMin.setIndex(1, 22)
    .Name.enGB.set(purpleColorCode + "+11 Strength and +22 Hit Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Purple3 = createGem(
    GemQuality4,
    "tier4-purple3",
    "Infused Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Purple3, 0, 0, -1, 0, 0, 0, 0],
    [tier4Purple3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 22)
    .EffectPointsMin.setIndex(1, 22)
    .Name.enGB.set(purpleColorCode + "+11 Intellect and +22 Haste Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Purple4 = createGem(
    GemQuality4,
    "tier4-purple4",
    "Glowing Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Purple4, 0, 0, -1, 0, 0, 0, 0],
    [tier4Purple4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 28)
    .EffectPointsMin.setIndex(0, 28)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 18)
    .EffectPointsMin.setIndex(1, 18)
    .Name.enGB.set(purpleColorCode + "+18 Haste Rating and +28 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Purple5 = createGem(
    GemQuality4,
    "tier4-purple5",
    "Royal Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Purple5, 0, 0, -1, 0, 0, 0, 0],
    [tier4Purple5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 15)
    .EffectPointsMax.setIndex(0, 45)
    .EffectPointsMin.setIndex(0, 45)
    .Name.enGB.set(purpleColorCode + "+45 Block Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Purple6 = createGem(
    GemQuality4,
    "tier4-purple6",
    "Balanced Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Purple6, 0, 0, -1, 0, 0, 0, 0],
    [tier4Purple6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 36)
    .EffectPointsMax.setIndex(0, 12)
    .EffectPointsMin.setIndex(0, 12)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 43)
    .EffectPointsMax.setIndex(1, 35)
    .EffectPointsMin.setIndex(1, 35)
    .Name.enGB.set(purpleColorCode + "+12 Haste Rating and +35 Mana Per Second")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Purple7 = createGem(
    GemQuality4,
    "tier4-purple7",
    "Enthralled Shadow Draenite",
    35847,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Purple7, 0, 0, -1, 0, 0, 0, 0],
    [tier4Purple7, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 28)
    .EffectPointsMin.setIndex(0, 28)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 16)
    .EffectPointsMin.setIndex(1, 16)
    .Name.enGB.set(
        purpleColorCode + "+28 Critical Strike Rating and +16 Expertise Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier4PurpleGems = [
    tier4Purple1,
    tier4Purple2,
    tier4Purple3,
    tier4Purple4,
    tier4Purple5,
    tier4Purple6,
    tier4Purple7,
];
gemLevelUpPattern(tierFourBaseResources[6], tier3PurpleGems, tier4PurpleGems);

// Yellow Gems
let tier4Yellow1 = createGem(
    GemQuality4,
    "tier4-yellow1",
    "Brilliant Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Yellow1, 0, 0, -1, 0, 0, 0, 0],
    [tier4Yellow1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 3)
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 22)
    .EffectPointsMin.setIndex(1, 22)
    .Name.enGB.set(yellowColorCode + "+11 Agility and +22 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Yellow2 = createGem(
    GemQuality4,
    "tier4-yellow2",
    "Gleaming Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Yellow2, 0, 0, -1, 0, 0, 0, 0],
    [tier4Yellow2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 4)
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 22)
    .EffectPointsMin.setIndex(1, 22)
    .Name.enGB.set(
        yellowColorCode + "+11 Strength and +22 Critical Strike Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Yellow3 = createGem(
    GemQuality4,
    "tier4-yellow3",
    "Thick Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Yellow3, 0, 0, -1, 0, 0, 0, 0],
    [tier4Yellow3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 5)
    .EffectPointsMax.setIndex(0, 11)
    .EffectPointsMin.setIndex(0, 11)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 22)
    .EffectPointsMin.setIndex(1, 22)
    .Name.enGB.set(
        yellowColorCode + "+11 Intellect and +22 Critical Strike Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Yellow4 = createGem(
    GemQuality4,
    "tier4-yellow4",
    "Rigid Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Yellow4, 0, 0, -1, 0, 0, 0, 0],
    [tier4Yellow4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 6)
    .EffectPointsMax.setIndex(0, 22)
    .EffectPointsMin.setIndex(0, 22)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 32)
    .EffectPointsMax.setIndex(1, 18)
    .EffectPointsMin.setIndex(1, 18)
    .Name.enGB.set(yellowColorCode + "+18 Critical Strike Rating and +22 Spirit")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Yellow5 = createGem(
    GemQuality4,
    "tier4-yellow5",
    "Great Golden Draenite",
    35848,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Yellow5, 0, 0, -1, 0, 0, 0, 0],
    [tier4Yellow5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 45)
    .EffectPointsMin.setIndex(0, 45)
    .Name.enGB.set(yellowColorCode + "+45 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier4YellowGems = [
    tier4Yellow1,
    tier4Yellow2,
    tier4Yellow3,
    tier4Yellow4,
    tier4Yellow5,
];
gemLevelUpPattern(tierFourBaseResources[6], tier3YellowGems, tier4YellowGems);

//Blue Gems

let tier4Blue1 = createGem(
    GemQuality4,
    "tier4-blue1",
    "Solid Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Blue1, 0, 0, -1, 0, 0, 0, 0],
    [tier4Blue1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 25)
    .EffectPointsMin.setIndex(0, 25)
    .Name.enGB.set(blueColorCode + "+25 Stamina")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Blue2 = createGem(
    GemQuality4,
    "tier4-blue2",
    "Sparkling Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Blue2, 0, 0, -1, 0, 0, 0, 0],
    [tier4Blue2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 5)
    .EffectPointsMax.setIndex(1, 10)
    .EffectPointsMin.setIndex(1, 10)
    .Name.enGB.set(blueColorCode + "+15 Stamina and +10 Intellect")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Blue3 = createGem(
    GemQuality4,
    "tier4-blue3",
    "Stormy Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Blue3, 0, 0, -1, 0, 0, 0, 0],
    [tier4Blue3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 3)
    .EffectPointsMax.setIndex(1, 10)
    .EffectPointsMin.setIndex(1, 10)
    .Name.enGB.set(blueColorCode + "+15 Stamina and +10 Agility")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Blue4 = createGem(
    GemQuality4,
    "tier4-blue4",
    "Lustrous Azure Moonstone",
    35852,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Blue4, 0, 0, -1, 0, 0, 0, 0],
    [tier4Blue4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 7)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 4)
    .EffectPointsMax.setIndex(1, 10)
    .EffectPointsMin.setIndex(1, 10)
    .Name.enGB.set(blueColorCode + "+15 Stamina and +10 Strength")
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier4BlueGems = [tier4Blue1, tier4Blue2, tier4Blue3, tier4Blue4];
gemLevelUpPattern(tierFourBaseResources[6], tier3BlueGems, tier4BlueGems);

// orange Gems
let tier4Orange1 = createGem(
    GemQuality4,
    "tier4-orange1",
    "Inscribed Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Orange1, 0, 0, -1, 0, 0, 0, 0],
    [tier4Orange1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 36)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(
        orangeColorCode + "+15 Critical Strike Rating and +20 Haste Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Orange2 = createGem(
    GemQuality4,
    "tier4-orange2",
    "Luminous Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Orange2, 0, 0, -1, 0, 0, 0, 0],
    [tier4Orange2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 31)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(
        orangeColorCode + "+15 Critical Strike Rating and +20 Hit Rating"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Orange3 = createGem(
    GemQuality4,
    "tier4-orange3",
    "Glinting Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Orange3, 0, 0, -1, 0, 0, 0, 0],
    [tier4Orange3, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 38)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(
        orangeColorCode + "+15 Critical Strike Rating and +20 Attack Power"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Orange4 = createGem(
    GemQuality4,
    "tier4-orange4",
    "Potent Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Orange4, 0, 0, -1, 0, 0, 0, 0],
    [tier4Orange4, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 45)
    .EffectPointsMax.setIndex(1, 20)
    .EffectPointsMin.setIndex(1, 20)
    .Name.enGB.set(
        orangeColorCode + "+15 Critical Strike Rating and +20 Spell Power"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Orange5 = createGem(
    GemQuality4,
    "tier4-orange5",
    "Veiled Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Orange5, 0, 0, -1, 0, 0, 0, 0],
    [tier4Orange5, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 45)
    .EffectPointsMin.setIndex(0, 45)
    .Name.enGB.set(orangeColorCode + "+45 Critical Strike Rating")
    .ItemVisual.set(0)
    .Flags.set(0);

let tier4Orange6 = createGem(
    GemQuality4,
    "tier4-orange6",
    "Wicked Flame Spessarite",
    35845,
    "",
    GemPropertyIndex,
    10
);
createRecipe(
    [0, tier4Orange6, 0, 0, -1, 0, 0, 0, 0],
    [tier4Orange6, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    SpellItemEnchantmentIndex,
    1
);
std.DBC.GemProperties.add(GemPropertyIndex++, {
    Enchant_Id: SpellItemEnchantmentIndex,
    Maxcount_Inv: 0,
    Maxcount_Item: 0,
    Type: 8,
});
std.DBC.SpellItemEnchantment.add(SpellItemEnchantmentIndex++)
    .Effect.setIndex(0, 5)
    .EffectArg.setIndex(0, 32)
    .EffectPointsMax.setIndex(0, 15)
    .EffectPointsMin.setIndex(0, 15)
    .Effect.setIndex(1, 5)
    .EffectArg.setIndex(1, 43)
    .EffectPointsMax.setIndex(1, 45)
    .EffectPointsMin.setIndex(1, 45)
    .Name.enGB.set(
        orangeColorCode + "+15 Critical Strike Rating and +45 Mana Per Second"
    )
    .ItemVisual.set(0)
    .Flags.set(0);

export let tier4OrangeGems = [
    tier4Orange1,
    tier4Orange2,
    tier4Orange3,
    tier4Orange4,
    tier4Orange5,
    tier4Orange6,
];
gemLevelUpPattern(tierFourBaseResources[6], tier3OrangeGems, tier4OrangeGems);

vendorAddItems(vendor2, [
    tier4RedGems,
    tier4GreenGems,
    tier4PurpleGems,
    tier4YellowGems,
    tier4BlueGems,
    tier4OrangeGems,
]);
