import {
    generateGearRecipes,
    generateWeaponRecipes,
} from "../../functions/recipe-functions";
import { stringItem } from "../string";
import { expSpell3 } from "../../spells/experience-rate-spells";
import {
    clothTierThreeItemEnchantmentIndex,
    leatherTierThreeItemEnchantmentIndex,
    mailTierThreeItemEnchantmentIndex,
    trinketTierThreeItemEnchantmentIndex,
    weaponTierThreeItemEnchantmentIndex,
} from "../RandomProperties/tier3-properties";
import {
    createBaseResources,
    createGear,
    createMaterial,
    createTrinket,
    createWeapons,
} from "../../functions/item-functions";
import { std } from "wow/wotlk";

let levelrequirement = 10;
let armSpell = [expSpell3.ID, 0, 0, 0, 0];
let armTrigger = [1, 0, 0, 0, 0];
let wepSpell = [expSpell3.ID, 41679, 41751, 41787, 0];
let wepTrigger = [1, 1, 1, 1, 0];

export let tierThreeBaseResources = createBaseResources(
    2,
    "tier3",
    "Polished",
    ["Pearl", "Epaulet", "Chain", "Metal", "Reinforced Metal", "Stick", "Dust"],
    [12310, 35338, 39340, 7355, 7389, 2618, 20798]
);

export let tierThreeMailMaterial = createMaterial(
    2,
    "tier3",
    "Polished Mail Scraps",
    "mail armor pieces",
    22924
);
export let tierThreeLeatherMaterial = createMaterial(
    2,
    "tier3",
    "Polished Leather Scraps",
    "leather armor pieces",
    29468
);
export let tierThreeClothMaterial = createMaterial(
    2,
    "tier3",
    "Polished Cloth Scraps",
    "cloth armor pieces",
    7383
);

export let tierThreeMailGear = createGear(
    levelrequirement,
    "tier3-mail",
    2,
    3.5,
    3,
    102,
    mailTierThreeItemEnchantmentIndex,
    [
        "Officer's Polished Helm",
        "Officer's Polished Necklace",
        "Officer's Polished Spaulders",
        "Officer's Polished Cloak",
        "Officer's Polished Chestguard",
        "Officer's Polished Bracers",
        "Officer's Polished Gloves",
        "Officer's Polished Belt",
        "Officer's Polished Legguards",
        "Officer's Polished Greaves",
        "Officer's Polished Ring",
    ],
    [22886, 15420, 26894, 15273, 25746, 35044, 26888, 33633, 22882, 43734, 28830],
    armSpell,
    armTrigger
);
tierThreeMailGear.push(
    createTrinket(
        levelrequirement,
        "tier3-mail",
        2,
        102,
        trinketTierThreeItemEnchantmentIndex,
        "Officer's Polished Trinket",
        31287,
        armSpell,
        armTrigger
    )
);
export let tierThreeLeatherGear = createGear(
    levelrequirement,
    "tier3-leather",
    2,
    3.2,
    2,
    102,
    leatherTierThreeItemEnchantmentIndex,
    [
        "Officer's Polished Headress",
        "Officer's Polished Necklace",
        "Officer's Polished Shoulders",
        "Officer's Polished Cloak",
        "Officer's Polished Chestpiece",
        "Officer's Polished Bracers",
        "Officer's Polished Gloves",
        "Officer's Polished Belt",
        "Officer's Polished Leggings",
        "Officer's Polished Mocassins",
        "Officer's Polished Ring",
    ],
    [45101, 51280, 43169, 45480, 45057, 45055, 43170, 44829, 44828, 44830, 34189],
    armSpell,
    armTrigger
);
tierThreeLeatherGear.push(
    createTrinket(
        levelrequirement,
        "tier3-leather",
        2,
        102,
        trinketTierThreeItemEnchantmentIndex,
        "Officer's Polished Trinket",
        39915,
        armSpell,
        armTrigger
    )
);
export let tierThreeClothGear = createGear(
    levelrequirement,
    "tier3-cloth",
    2,
    3,
    1,
    102,
    clothTierThreeItemEnchantmentIndex,
    [
        "Officer's Polished Hat",
        "Officer's Polished Necklace",
        "Officer's Polished Shoulderpads",
        "Officer's Polished Cloak",
        "Officer's Polished Chestpad",
        "Officer's Polished Bracers",
        "Officer's Polished Gloves",
        "Officer's Polished Belt",
        "Officer's Polished Pants",
        "Officer's Polished Boots",
        "Officer's Polished Ring",
    ],
    [43883, 32008, 43319, 45480, 38920, 45400, 48920, 43300, 43304, 45787, 44086],
    armSpell,
    armTrigger
);
tierThreeClothGear.push(
    createTrinket(
        levelrequirement,
        "tier3-cloth",
        2,
        102,
        trinketTierThreeItemEnchantmentIndex,
        "Officer's Polished Trinket",
        53454,
        armSpell,
        armTrigger
    )
);

export let tierThreeWeapons = createWeapons(
    levelrequirement,
    "tier3",
    2,
    1,
    102,
    weaponTierThreeItemEnchantmentIndex,
    [
        "Officer's Polished Shortsword",
        "Officer's Polished Cudgel",
        "Officer's Polished Carver",
        "Officer's Polished Shiv",
        "Officer's Polished Broadsword",
        "Officer's Polished Bludgeon",
        "Officer's Polished Cleaver",
        "Officer's Polished Reliquery",
        "Officer's Polished Polearm",
        "Officer's Polished Recurve",
        "Officer's Polished Staff",
        "Officer's Polished Wand",
        "Officer's Polished Buckler",
        "Officer's Polished Knuckles",
    ],
    [
        41118, 45769, 31300, 31692, 39570, 39583, 23904, 33845, 31720, 39775, 20256,
        29195, 18700, 39218,
    ],
    wepSpell,
    wepTrigger
);

generateGearRecipes(
    tierThreeBaseResources[0],
    tierThreeMailMaterial,
    tierThreeBaseResources[1],
    tierThreeBaseResources[2],
    tierThreeMailGear
);
generateGearRecipes(
    tierThreeBaseResources[0],
    tierThreeLeatherMaterial,
    tierThreeBaseResources[1],
    tierThreeBaseResources[2],
    tierThreeLeatherGear
);
generateGearRecipes(
    tierThreeBaseResources[0],
    tierThreeClothMaterial,
    tierThreeBaseResources[1],
    tierThreeBaseResources[2],
    tierThreeClothGear
);

generateWeaponRecipes(
    tierThreeBaseResources[0],
    tierThreeBaseResources[5],
    tierThreeBaseResources[3],
    tierThreeBaseResources[4],
    stringItem.ID,
    tierThreeWeapons
);

std.SQL.disenchant_loot_template
    .add(102, tierThreeBaseResources[6])
    .Chance.set(100)
    .MinCount.set(1)
    .MaxCount.set(3)
    .LootMode.set(1)
    .GroupId.set(1)
    .Reference.set(0)
    .Comment.set("Tier 3 Disenchant - Dust");
