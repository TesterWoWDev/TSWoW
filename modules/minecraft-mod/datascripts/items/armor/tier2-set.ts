import {
    generateGearRecipes,
    generateWeaponRecipes,
} from "../../functions/recipe-functions";
import { std } from "wow/wotlk";
import { stringItem } from "../string";
import { expSpell2 } from "../../spells/experience-rate-spells";
import {
    clothTierTwoItemEnchantmentIndex,
    leatherTierTwoItemEnchantmentIndex,
    mailTierTwoItemEnchantmentIndex,
    trinketTierTwoItemEnchantmentIndex,
    weaponTierTwoItemEnchantmentIndex,
} from "../RandomProperties/tier2-properties";
import {
    createBaseResources,
    createGear,
    createMaterial,
    createTrinket,
    createWeapons,
} from "../../functions/item-functions";

let levelrequirement = 5;
let armSpell = [expSpell2.ID, 0, 0, 0, 0];
let armTrigger = [1, 0, 0, 0, 0];
let wepSpell = [expSpell2.ID, 41679, 41751, 0, 0];
let wepTrigger = [1, 1, 1, 0, 0];

export let tierTwoBaseResources = createBaseResources(
    2,
    "tier2",
    "Rusty",
    ["Pearl", "Epaulet", "Chain", "Metal", "Reinforced Metal", "Stick", "Dust"],
    [12310, 35338, 39340, 7355, 7389, 2618, 20611]
);

export let tierTwoMailMaterial = createMaterial(
    2,
    "tier2",
    "Rusty Mail Scraps",
    "mail armor pieces",
    22924
);
export let tierTwoLeatherMaterial = createMaterial(
    2,
    "tier2",
    "Rusty Leather Scraps",
    "leather armor pieces",
    29468
);
export let tierTwoClothMaterial = createMaterial(
    2,
    "tier2",
    "Rusty Cloth Scraps",
    "cloth armor pieces",
    7383
);

export let tierTwoMailGear = createGear(
    levelrequirement,
    "tier2-mail",
    2,
    2.5,
    3,
    101,
    mailTierTwoItemEnchantmentIndex,
    [
        "Initiate's Rusty Helm",
        "Initiate's Rusty Necklace",
        "Initiate's Rusty Spaulders",
        "Initiate's Rusty Cloak",
        "Initiate's Rusty Chestguard",
        "Initiate's Rusty Bracers",
        "Initiate's Rusty Gloves",
        "Initiate's Rusty Belt",
        "Initiate's Rusty Legguards",
        "Initiate's Rusty Greaves",
        "Initiate's Rusty Ring",
    ],
    [22908, 34034, 28725, 26278, 28819, 28844, 15816, 27951, 28623, 28383, 18365],
    armSpell,
    armTrigger
);
tierTwoMailGear.push(
    createTrinket(
        levelrequirement,
        "tier2-mail",
        2,
        101,
        trinketTierTwoItemEnchantmentIndex,
        "Initiate's Rusty Trinket",
        43431,
        armSpell,
        armTrigger
    )
);
export let tierTwoLeatherGear = createGear(
    levelrequirement,
    "tier2-leather",
    2,
    2.2,
    2,
    101,
    leatherTierTwoItemEnchantmentIndex,
    [
        "Initiate's Rusty Hat",
        "Initiate's Rusty Necklace",
        "Initiate's Rusty Shoulderpads",
        "Initiate's Rusty Cloak",
        "Initiate's Rusty Chestpad",
        "Initiate's Rusty Bracers",
        "Initiate's Rusty Gloves",
        "Initiate's Rusty Belt",
        "Initiate's Rusty Pants",
        "Initiate's Rusty Boots",
        "Initiate's Rusty Ring",
    ],
    [24933, 34034, 19113, 26278, 8721, 28844, 13681, 24978, 16764, 25233, 9837],
    armSpell,
    armTrigger
);
tierTwoLeatherGear.push(
    createTrinket(
        levelrequirement,
        "tier2-leather",
        2,
        101,
        trinketTierTwoItemEnchantmentIndex,
        "Initiate's Rusty Trinket",
        18047,
        armSpell,
        armTrigger
    )
);
export let tierTwoClothGear = createGear(
    levelrequirement,
    "tier2-cloth",
    2,
    2,
    1,
    101,
    clothTierTwoItemEnchantmentIndex,
    [
        "Initiate's Rusty Headress",
        "Initiate's Rusty Necklace",
        "Initiate's Rusty Shoulders",
        "Initiate's Rusty Cloak",
        "Initiate's Rusty Chestpiece",
        "Initiate's Rusty Bracers",
        "Initiate's Rusty Gloves",
        "Initiate's Rusty Belt",
        "Initiate's Rusty Leggings",
        "Initiate's Rusty Mocassins",
        "Initiate's Rusty Ring",
    ],
    [25693, 34034, 16497, 26278, 19012, 28844, 29898, 17224, 17151, 17215, 23629],
    armSpell,
    armTrigger
);
tierTwoClothGear.push(
    createTrinket(
        levelrequirement,
        "tier2-cloth",
        2,
        101,
        trinketTierTwoItemEnchantmentIndex,
        "Initiate's Rusty Trinket",
        29947,
        armSpell,
        armTrigger
    )
);

export let tierTwoWeapons = createWeapons(
    levelrequirement,
    "tier2",
    2,
    1,
    101,
    weaponTierTwoItemEnchantmentIndex,
    [
        "Initiate's Rusty Shortsword",
        "Initiate's Rusty Cudgel",
        "Initiate's Rusty Carver",
        "Initiate's Rusty Shiv",
        "Initiate's Rusty Broadsword",
        "Initiate's Rusty Bludgeon",
        "Initiate's Rusty Cleaver",
        "Initiate's Rusty Reliquery",
        "Initiate's Rusty Polearm",
        "Initiate's Rusty Recurve",
        "Initiate's Rusty Staff",
        "Initiate's Rusty Wand",
        "Initiate's Rusty Buckler",
        "Initiate's Rusty Knuckles",
    ],
    [
        21773, 21956, 28679, 28779, 21809, 21793, 22212, 21595, 40809, 28780, 21723,
        28807, 18814, 23742,
    ],
    wepSpell,
    wepTrigger
);

generateGearRecipes(
    tierTwoBaseResources[0],
    tierTwoMailMaterial,
    tierTwoBaseResources[1],
    tierTwoBaseResources[2],
    tierTwoMailGear
);
generateGearRecipes(
    tierTwoBaseResources[0],
    tierTwoLeatherMaterial,
    tierTwoBaseResources[1],
    tierTwoBaseResources[2],
    tierTwoLeatherGear
);
generateGearRecipes(
    tierTwoBaseResources[0],
    tierTwoClothMaterial,
    tierTwoBaseResources[1],
    tierTwoBaseResources[2],
    tierTwoClothGear
);

generateWeaponRecipes(
    tierTwoBaseResources[0],
    tierTwoBaseResources[5],
    tierTwoBaseResources[3],
    tierTwoBaseResources[4],
    stringItem.ID,
    tierTwoWeapons
);

std.SQL.disenchant_loot_template
    .add(101, tierTwoBaseResources[6])
    .Chance.set(100)
    .MinCount.set(1)
    .MaxCount.set(3)
    .LootMode.set(1)
    .GroupId.set(1)
    .Reference.set(0)
    .Comment.set("Tier 2 Disenchant - Dust");
