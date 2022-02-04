import {
    addToDBCSpellItemEnchantment,
    addToDBCItemRandomProperties,
} from "../../functions/dbc-functions";
import { spellColorCode } from "../../functions/gem-functions";
import { attackpower4 } from "../../spells/attack-power-spells";
import {
    chanceHeal4,
    chanceLightning4,
    chanceShadow4,
    chanceStun4,
    chanceStun4C,
    chanceStun4M,
} from "../../spells/chance-on-hit-spells";
import { health4 } from "../../spells/health-increase-spells";
import { spellpower4 } from "../../spells/spell-power-spells";

let pI = 3000; //Property Index
let sIEI = 6500; //Spell Item Enchantment Index
export let clothTierFourItemEnchantmentIndex = 15012;
export let leatherTierFourItemEnchantmentIndex = 15013;
export let mailTierFourItemEnchantmentIndex = 15014;
export let weaponTierFourItemEnchantmentIndex = 15015;
export let trinketTierFourItemEnchantmentIndex = 16015;

/*On Use : Health (-61)*/ addToDBCSpellItemEnchantment(
    7,
    health4.ID,
    0,
    0,
    0,
    0,
    0,
    0,
    "Increases health by 1750 for 18 seconds.",
    sIEI++
);
/*On Use : Attack Power (-60)*/ addToDBCSpellItemEnchantment(
    7,
    attackpower4.ID,
    0,
    0,
    0,
    0,
    0,
    0,
    spellColorCode + "Increases attack power by 200 for 10 seconds.",
    sIEI++
);
/*On Use : Spell Power (-59)*/ addToDBCSpellItemEnchantment(
    7,
    spellpower4.ID,
    0,
    0,
    0,
    0,
    0,
    0,
    spellColorCode + "Increases spell power by 200 for 10 seconds.",
    sIEI++
);
/*Chance : Stun Baton (-58)*/ addToDBCSpellItemEnchantment(
    3,
    chanceStun4M.ID,
    0,
    0,
    3,
    chanceStun4C.ID,
    0,
    0,
    spellColorCode + "+ Chance on Hit : Stuns target for 3 seconds.",
    sIEI++
);
/*Chance : Healing (-57)*/ addToDBCSpellItemEnchantment(
    1,
    chanceHeal4.ID,
    0,
    0,
    0,
    0,
    0,
    0,
    spellColorCode + "+ Chance on Hit : Heal 341.",
    sIEI++
);
/*Chance : Thunderfury (-56)*/ addToDBCSpellItemEnchantment(
    1,
    chanceLightning4.ID,
    0,
    0,
    0,
    0,
    0,
    0,
    spellColorCode + "+ Chance on Hit : Lightning Blast.",
    sIEI++
);
/*Chance : Shadow Bolt (-55)*/ addToDBCSpellItemEnchantment(
    1,
    chanceShadow4.ID,
    0,
    0,
    0,
    0,
    0,
    0,
    spellColorCode + "+ Chance on Hit : Shadow Bolt.",
    sIEI++
);
/*Omnipotence Weapon (-54)*/ addToDBCSpellItemEnchantment(
    5,
    3,
    24,
    24,
    5,
    4,
    24,
    24,
    "+24 Agility\n+24 Strength",
    sIEI++
);
/*Omnipotence Weapon (-53)*/ addToDBCSpellItemEnchantment(
    5,
    5,
    24,
    24,
    5,
    7,
    34,
    34,
    "+24 Intellect\n+34 Stamina",
    sIEI++
);
/*Omnipotence Weapon (-52)*/ addToDBCSpellItemEnchantment(
    5,
    45,
    48,
    48,
    5,
    38,
    48,
    48,
    "+48 Spell Power\n+48 Attack Power",
    sIEI++
);
/*Omnipotence (-51)*/ addToDBCSpellItemEnchantment(
    5,
    3,
    12,
    12,
    5,
    4,
    12,
    12,
    "+12 Agility\n+12 Strength",
    sIEI++
);
/*Omnipotence (-50)*/ addToDBCSpellItemEnchantment(
    5,
    5,
    12,
    12,
    5,
    7,
    14,
    14,
    "+12 Intellect\n+14 Stamina",
    sIEI++
);
/*Omnipotence (-49)*/ addToDBCSpellItemEnchantment(
    5,
    45,
    16,
    16,
    5,
    38,
    16,
    16,
    "+16 Spell Power\n+16 Attack Power",
    sIEI++
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/ addToDBCSpellItemEnchantment(
    5,
    42,
    48,
    48,
    0,
    0,
    0,
    0,
    "+48 Healing Done",
    sIEI++
);
/*Intellect (-47)*/ addToDBCSpellItemEnchantment(
    5,
    5,
    24,
    24,
    0,
    0,
    0,
    0,
    "+24 Intellect",
    sIEI++
);
/*Spirit (-46)*/ addToDBCSpellItemEnchantment(
    5,
    6,
    36,
    36,
    0,
    0,
    0,
    0,
    "+36 Spirit",
    sIEI++
);
/*Spell Power (-45)*/ addToDBCSpellItemEnchantment(
    5,
    45,
    48,
    48,
    0,
    0,
    0,
    0,
    "+48 Spell Power",
    sIEI++
);
/*Haste Rating (-44)*/ addToDBCSpellItemEnchantment(
    5,
    36,
    24,
    24,
    0,
    0,
    0,
    0,
    "+24 Haste Rating",
    sIEI++
);
/*Strength (-43)*/ addToDBCSpellItemEnchantment(
    5,
    4,
    24,
    24,
    0,
    0,
    0,
    0,
    "+24 Strength",
    sIEI++
);
/*Attack Power (-42)*/ addToDBCSpellItemEnchantment(
    5,
    38,
    48,
    48,
    0,
    0,
    0,
    0,
    "+48 Attack Power",
    sIEI++
);
/*Agility (-41)*/ addToDBCSpellItemEnchantment(
    5,
    3,
    24,
    24,
    0,
    0,
    0,
    0,
    "+24 Agility",
    sIEI++
);
/*Ranged Attack Power (-40)*/ addToDBCSpellItemEnchantment(
    5,
    39,
    48,
    48,
    0,
    0,
    0,
    0,
    "+48 Ranged Attack Power",
    sIEI++
);
/*Stamina (-39)*/ addToDBCSpellItemEnchantment(
    5,
    7,
    34,
    34,
    0,
    0,
    0,
    0,
    "+34 Stamina",
    sIEI++
);
/*Hit Rating (-38)*/ addToDBCSpellItemEnchantment(
    5,
    31,
    36,
    36,
    0,
    0,
    0,
    0,
    "+36 Hit Rating",
    sIEI++
);
/*Critical Strike (-37)*/ addToDBCSpellItemEnchantment(
    5,
    32,
    44,
    44,
    0,
    0,
    0,
    0,
    "+44 Critical Strike Rating",
    sIEI++
);
/*Health (-36)*/ addToDBCSpellItemEnchantment(
    5,
    1,
    365,
    365,
    0,
    0,
    0,
    0,
    "+365 Health",
    sIEI++
);
/*Mana (-35)*/ addToDBCSpellItemEnchantment(
    5,
    2,
    250,
    250,
    0,
    0,
    0,
    0,
    "+250 Mana",
    sIEI++
);
/*Health per 5 (-34)*/ addToDBCSpellItemEnchantment(
    5,
    46,
    44,
    44,
    0,
    0,
    0,
    0,
    "+44 Health Per Second",
    sIEI++
);
/*Mana per 5 (-33)*/ addToDBCSpellItemEnchantment(
    5,
    43,
    44,
    44,
    0,
    0,
    0,
    0,
    "+44 Mana Per Second",
    sIEI++
);
/*Block Rating (-32)*/ addToDBCSpellItemEnchantment(
    5,
    15,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Block Rating",
    sIEI++
);
/*Expertise Rating (-31)*/ addToDBCSpellItemEnchantment(
    5,
    37,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Expertise Rating",
    sIEI++
);
/*Defense Rating (-30)*/ addToDBCSpellItemEnchantment(
    5,
    12,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Defense Rating",
    sIEI++
);
/*Dodge Rating (-27)*/ addToDBCSpellItemEnchantment(
    5,
    13,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Dodge Rating",
    sIEI++
);
/*Parry Rating (-28)*/ addToDBCSpellItemEnchantment(
    5,
    14,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Parry Rating",
    sIEI++
);
/*Resilience Rating (-27)*/ addToDBCSpellItemEnchantment(
    5,
    35,
    5,
    5,
    0,
    0,
    0,
    0,
    "+5 Resilience Rating",
    sIEI++
);
/*Armor Penetration (-26)*/ addToDBCSpellItemEnchantment(
    5,
    44,
    10,
    10,
    0,
    0,
    0,
    0,
    "+10 Armor Penetration",
    sIEI++
);
/*Spell Penetration (-25)*/ addToDBCSpellItemEnchantment(
    5,
    47,
    10,
    10,
    0,
    0,
    0,
    0,
    "+10 Spell Penetration",
    sIEI++
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/ addToDBCSpellItemEnchantment(
    5,
    42,
    16,
    16,
    0,
    0,
    0,
    0,
    "+16 Healing Done",
    sIEI++
);
/*Intellect (-23)*/ addToDBCSpellItemEnchantment(
    5,
    5,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Intellect",
    sIEI++
);
/*Spirit (-22)*/ addToDBCSpellItemEnchantment(
    5,
    6,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Spirit",
    sIEI++
);
/*Spell Power (-21)*/ addToDBCSpellItemEnchantment(
    5,
    45,
    16,
    16,
    0,
    0,
    0,
    0,
    "+16 Spell Power",
    sIEI++
);
/*Haste Rating (-20)*/ addToDBCSpellItemEnchantment(
    5,
    36,
    13,
    13,
    0,
    0,
    0,
    0,
    "+13 Haste Rating",
    sIEI++
);
/*Strength (-19)*/ addToDBCSpellItemEnchantment(
    5,
    7,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Strength",
    sIEI++
);
/*Attack Power (-18)*/ addToDBCSpellItemEnchantment(
    5,
    38,
    16,
    16,
    0,
    0,
    0,
    0,
    "+16 Attack Power",
    sIEI++
);
/*Agility (-17)*/ addToDBCSpellItemEnchantment(
    5,
    3,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Agility",
    sIEI++
);
/*Ranged Attack Power (-16)*/ addToDBCSpellItemEnchantment(
    5,
    39,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Ranged Attack Power",
    sIEI++
);
/*Stamina (-15)*/ addToDBCSpellItemEnchantment(
    5,
    7,
    14,
    14,
    0,
    0,
    0,
    0,
    "+14 Stamina",
    sIEI++
);
/*Hit Rating (-14)*/ addToDBCSpellItemEnchantment(
    5,
    31,
    16,
    16,
    0,
    0,
    0,
    0,
    "+16 Hit Rating",
    sIEI++
);
/*Critical Strike (-13)*/ addToDBCSpellItemEnchantment(
    5,
    32,
    16,
    16,
    0,
    0,
    0,
    0,
    "+16 Critical Strike Rating",
    sIEI++
);
/*Health (-12)*/ addToDBCSpellItemEnchantment(
    5,
    1,
    208,
    208,
    0,
    0,
    0,
    0,
    "+208 Health",
    sIEI++
);
/*Mana (-11)*/ addToDBCSpellItemEnchantment(
    5,
    2,
    115,
    115,
    0,
    0,
    0,
    0,
    "+115 Mana",
    sIEI++
);
/*Health per 5 (-10)*/ addToDBCSpellItemEnchantment(
    5,
    46,
    16,
    16,
    0,
    0,
    0,
    0,
    "+16 Health Per Second",
    sIEI++
);
/*Mana per 5 (-9)*/ addToDBCSpellItemEnchantment(
    5,
    43,
    16,
    16,
    0,
    0,
    0,
    0,
    "+16 Mana Per Second",
    sIEI++
);
/*Block Rating (-8)*/ addToDBCSpellItemEnchantment(
    5,
    15,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Block Rating",
    sIEI++
);
/*Expertise Rating (-7)*/ addToDBCSpellItemEnchantment(
    5,
    37,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Expertise Rating",
    sIEI++
);
/*Defense Rating (-6)*/ addToDBCSpellItemEnchantment(
    5,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Defense Rating",
    sIEI++
);
/*Dodge Rating (-5)*/ addToDBCSpellItemEnchantment(
    5,
    13,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Dodge Rating",
    sIEI++
);
/*Parry Rating (-4)*/ addToDBCSpellItemEnchantment(
    5,
    14,
    12,
    12,
    0,
    0,
    0,
    0,
    "+12 Parry Rating",
    sIEI++
);
/*Resilience Rating (-3)*/ addToDBCSpellItemEnchantment(
    5,
    35,
    4,
    4,
    0,
    0,
    0,
    0,
    "+4 Resilience Rating",
    sIEI++
);
/*Armor Penetration (-2)*/ addToDBCSpellItemEnchantment(
    5,
    44,
    5,
    5,
    0,
    0,
    0,
    0,
    "+5 Armor Penetration",
    sIEI++
);
/*Spell Penetration (-1)*/ addToDBCSpellItemEnchantment(
    5,
    47,
    5,
    5,
    0,
    0,
    0,
    0,
    "+5 Spell Penetration",
    sIEI++
);

// Trinkets : On Use Effects
addToDBCItemRandomProperties(
    "of Recurring Power",
    pI++,
    trinketTierFourItemEnchantmentIndex,
    59,
    39,
    47,
    1,
    sIEI
); /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addToDBCItemRandomProperties(
    "of Escalating Power",
    pI++,
    trinketTierFourItemEnchantmentIndex,
    60,
    39,
    43,
    1,
    sIEI
); /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addToDBCItemRandomProperties(
    "of Escalating Power",
    pI++,
    trinketTierFourItemEnchantmentIndex,
    60,
    39,
    41,
    1,
    sIEI
); /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addToDBCItemRandomProperties(
    "of the Jailer",
    pI++,
    trinketTierFourItemEnchantmentIndex,
    58,
    38,
    37,
    1,
    sIEI
); /*Chance to Stun + Hit + Crit                                   1% Chance*/
addToDBCItemRandomProperties(
    "of the Lightning Thief",
    pI++,
    trinketTierFourItemEnchantmentIndex,
    56,
    44,
    31,
    1,
    sIEI
); /*Chance to Thunderfury + Haste + Expertise                     1% Chance*/
addToDBCItemRandomProperties(
    "of the Immortal",
    pI++,
    trinketTierFourItemEnchantmentIndex,
    57,
    36,
    37,
    1,
    sIEI
); /*Chance to Heal + Health + Crit                                1% Chance*/
addToDBCItemRandomProperties(
    "of the Shadow Storm",
    pI++,
    trinketTierFourItemEnchantmentIndex,
    55,
    45,
    42,
    1,
    sIEI
); /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Omnipotence Chances
addToDBCItemRandomProperties(
    "of the Omnipotent",
    pI++,
    clothTierFourItemEnchantmentIndex,
    49,
    50,
    51,
    1,
    sIEI
); /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties(
    "of the Omnipotent",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    49,
    50,
    51,
    1,
    sIEI
); /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties(
    "of the Omnipotent",
    pI++,
    mailTierFourItemEnchantmentIndex,
    49,
    50,
    51,
    1,
    sIEI
); /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties(
    "of the Omnipotent",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    52,
    53,
    54,
    1,
    sIEI
); /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items
addToDBCItemRandomProperties(
    "of Blasphemy",
    pI++,
    clothTierFourItemEnchantmentIndex,
    23,
    22,
    21,
    9.9,
    sIEI
); /*Intellect + Spirit + Spellpower           10% Chance*/
addToDBCItemRandomProperties(
    "of Potency",
    pI++,
    clothTierFourItemEnchantmentIndex,
    23,
    20,
    21,
    9.9,
    sIEI
); /*Intellect + Haste + Spellpower            10% Chance*/
addToDBCItemRandomProperties(
    "of Power",
    pI++,
    clothTierFourItemEnchantmentIndex,
    20,
    21,
    0,
    9.9,
    sIEI
); /*Haste + Spellpower                        10% Chance*/
addToDBCItemRandomProperties(
    "of Smiting",
    pI++,
    clothTierFourItemEnchantmentIndex,
    21,
    21,
    14,
    9.9,
    sIEI
); /*Spellpower + Spellpower + Hit             10% Chance*/
addToDBCItemRandomProperties(
    "of Healing",
    pI++,
    clothTierFourItemEnchantmentIndex,
    21,
    9,
    20,
    9.9,
    sIEI
); /*Spellpower + Mana per 5 + Haste           10% Chance*/
addToDBCItemRandomProperties(
    "of Renewal",
    pI++,
    clothTierFourItemEnchantmentIndex,
    10,
    9,
    0,
    9.9,
    sIEI
); /*Health per 5 + Mana per 5                 10% Chance*/
addToDBCItemRandomProperties(
    "of Blasting",
    pI++,
    clothTierFourItemEnchantmentIndex,
    21,
    13,
    1,
    9.9,
    sIEI
); /*Spellpower + Crit + Spell Pen             10% Chance*/
addToDBCItemRandomProperties(
    "of Destruction",
    pI++,
    clothTierFourItemEnchantmentIndex,
    21,
    14,
    13,
    9.9,
    sIEI
); /*Spellpower + Hit + Crit                   10% Chance*/
addToDBCItemRandomProperties(
    "of Life",
    pI++,
    clothTierFourItemEnchantmentIndex,
    12,
    10,
    0,
    9.9,
    sIEI
); /*Health + Health per 5                     10% Chance*/
addToDBCItemRandomProperties(
    "of Swiftness",
    pI++,
    clothTierFourItemEnchantmentIndex,
    20,
    14,
    13,
    9.9,
    sIEI
); /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addToDBCItemRandomProperties(
    "of Balance",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    17,
    13,
    18,
    6.6,
    sIEI
); /*Agility + Crit + Attackpower              6.6% Chance*/
addToDBCItemRandomProperties(
    "of Aggression",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    17,
    20,
    18,
    6.6,
    sIEI
); /*Agility + Haste + Attackpower             6.6% Chance*/
addToDBCItemRandomProperties(
    "of Power",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    20,
    18,
    0,
    6.6,
    sIEI
); /*Haste + Attackpower                       6.6% Chance*/
addToDBCItemRandomProperties(
    "of Lethality",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    18,
    18,
    14,
    6.6,
    sIEI
); /*Attackpower + Attackpower + Hit           6.6% Chance*/
addToDBCItemRandomProperties(
    "of Stealth",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    18,
    10,
    20,
    6.6,
    sIEI
); /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addToDBCItemRandomProperties(
    "of Vanishing",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    5,
    4,
    17,
    6.6,
    sIEI
); /*Agility, Dodge, Parry                     6.6% Chance*/
addToDBCItemRandomProperties(
    "of Bleeding",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    18,
    13,
    2,
    6.6,
    sIEI
); /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addToDBCItemRandomProperties(
    "of Brutality",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    18,
    14,
    13,
    6.6,
    sIEI
); /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addToDBCItemRandomProperties(
    "of Blasphemy",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    23,
    22,
    21,
    6.6,
    sIEI
); /*Intellect + Spirit + Spellpower           6.6% Chance*/
addToDBCItemRandomProperties(
    "of Potency",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    23,
    20,
    21,
    6.6,
    sIEI
); /*Intellect + Haste + Spellpower            6.6% Chance*/
addToDBCItemRandomProperties(
    "of Power",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    20,
    21,
    0,
    6.6,
    sIEI
); /*Haste + Spellpower                        6.6% Chance*/
addToDBCItemRandomProperties(
    "of Smiting",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    21,
    21,
    14,
    6.6,
    sIEI
); /*Spellpower + Spellpower + Hit             6.6% Chance*/
addToDBCItemRandomProperties(
    "of Healing",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    21,
    9,
    20,
    6.6,
    sIEI
); /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addToDBCItemRandomProperties(
    "of Blasting",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    21,
    13,
    1,
    6.6,
    sIEI
); /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addToDBCItemRandomProperties(
    "of Destruction",
    pI++,
    leatherTierFourItemEnchantmentIndex,
    21,
    14,
    13,
    6.6,
    sIEI
); /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items
addToDBCItemRandomProperties(
    "of Pain",
    pI++,
    mailTierFourItemEnchantmentIndex,
    19,
    13,
    18,
    5.82,
    sIEI
); /*Strength + Crit + Attackpower             5.82% Chance*/
addToDBCItemRandomProperties(
    "of Revenge",
    pI++,
    mailTierFourItemEnchantmentIndex,
    19,
    20,
    18,
    5.82,
    sIEI
); /*Strength + Haste + Attackpower            5.82% Chance*/
addToDBCItemRandomProperties(
    "of Brutality",
    pI++,
    mailTierFourItemEnchantmentIndex,
    20,
    18,
    0,
    5.82,
    sIEI
); /*Haste + Attackpower                       5.82% Chance*/
addToDBCItemRandomProperties(
    "of Agony",
    pI++,
    mailTierFourItemEnchantmentIndex,
    18,
    18,
    14,
    5.82,
    sIEI
); /*Attackpower + Attackpower + Hit           5.82% Chance*/
addToDBCItemRandomProperties(
    "of Berserking",
    pI++,
    mailTierFourItemEnchantmentIndex,
    18,
    10,
    20,
    5.82,
    sIEI
); /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addToDBCItemRandomProperties(
    "of Resourcefulness",
    pI++,
    mailTierFourItemEnchantmentIndex,
    5,
    4,
    19,
    5.82,
    sIEI
); /*Strength, Dodge, Parry                    5.82% Chance*/
addToDBCItemRandomProperties(
    "of Remorse",
    pI++,
    mailTierFourItemEnchantmentIndex,
    18,
    13,
    2,
    5.82,
    sIEI
); /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addToDBCItemRandomProperties(
    "of Demise",
    pI++,
    mailTierFourItemEnchantmentIndex,
    18,
    14,
    13,
    5.82,
    sIEI
); /*Attackpower + Hit + Crit                  5.82% Chance*/
addToDBCItemRandomProperties(
    "of Life",
    pI++,
    mailTierFourItemEnchantmentIndex,
    12,
    10,
    0,
    5.82,
    sIEI
); /*Health + Health per 5                     5.82% Chance*/
addToDBCItemRandomProperties(
    "of Swiftness",
    pI++,
    mailTierFourItemEnchantmentIndex,
    20,
    14,
    13,
    5.82,
    sIEI
); /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addToDBCItemRandomProperties(
    "of Blasphemy",
    pI++,
    mailTierFourItemEnchantmentIndex,
    23,
    22,
    21,
    5.82,
    sIEI
); /*Intellect + Spirit + Spellpower           5.82% Chance*/
addToDBCItemRandomProperties(
    "of Potency",
    pI++,
    mailTierFourItemEnchantmentIndex,
    23,
    20,
    21,
    5.82,
    sIEI
); /*Intellect + Haste + Spellpower            5.82% Chance*/
addToDBCItemRandomProperties(
    "of Power",
    pI++,
    mailTierFourItemEnchantmentIndex,
    20,
    21,
    0,
    5.82,
    sIEI
); /*Haste + Spellpower                        5.82% Chance*/
addToDBCItemRandomProperties(
    "of Smiting",
    pI++,
    mailTierFourItemEnchantmentIndex,
    21,
    21,
    14,
    5.82,
    sIEI
); /*Spellpower + Spellpower + Hit             5.82% Chance*/
addToDBCItemRandomProperties(
    "of Healing",
    pI++,
    mailTierFourItemEnchantmentIndex,
    21,
    9,
    20,
    5.82,
    sIEI
); /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addToDBCItemRandomProperties(
    "of Blasting",
    pI++,
    mailTierFourItemEnchantmentIndex,
    21,
    13,
    1,
    5.82,
    sIEI
); /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addToDBCItemRandomProperties(
    "of Destruction",
    pI++,
    mailTierFourItemEnchantmentIndex,
    21,
    14,
    13,
    5.82,
    sIEI
); /*Spellpower + Hit + Crit                   5.82% Chance*/

// Weapon Enchants
addToDBCItemRandomProperties(
    "of Blasphemy",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    47,
    46,
    45,
    4.71,
    sIEI
); /*Intellect + Spirit + Spellpower           4.71% Chance*/
addToDBCItemRandomProperties(
    "of Potency",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    47,
    44,
    45,
    4.71,
    sIEI
); /*Intellect + Haste + Spellpower            4.71% Chance*/
addToDBCItemRandomProperties(
    "of Power",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    44,
    45,
    0,
    4.71,
    sIEI
); /*Haste + Spellpower                        4.71% Chance*/
addToDBCItemRandomProperties(
    "of Smiting",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    45,
    45,
    38,
    4.71,
    sIEI
); /*Spellpower + Spellpower + Hit             4.71% Chance*/
addToDBCItemRandomProperties(
    "of Healing",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    45,
    33,
    44,
    4.71,
    sIEI
); /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addToDBCItemRandomProperties(
    "of Renewal",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    34,
    33,
    0,
    4.71,
    sIEI
); /*Health per 5 + Mana per 5                 4.71% Chance*/
addToDBCItemRandomProperties(
    "of Blasting",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    45,
    37,
    25,
    4.71,
    sIEI
); /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addToDBCItemRandomProperties(
    "of Destruction",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    45,
    38,
    37,
    4.71,
    sIEI
); /*Spellpower + Hit + Crit                   4.71% Chance*/
addToDBCItemRandomProperties(
    "of Life",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    36,
    34,
    0,
    4.71,
    sIEI
); /*Health + Health per 5                     4.71% Chance*/
addToDBCItemRandomProperties(
    "of Swiftness",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    44,
    37,
    38,
    4.71,
    sIEI
); /*Haste + Crit + Hit                        4.71% Chance*/
addToDBCItemRandomProperties(
    "of Balance",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    41,
    37,
    42,
    4.71,
    sIEI
); /*Agility + Crit + Attackpower              4.71% Chance*/
addToDBCItemRandomProperties(
    "of Aggression",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    41,
    44,
    42,
    4.71,
    sIEI
); /*Agility + Haste + Attackpower             4.71% Chance*/
addToDBCItemRandomProperties(
    "of Power",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    44,
    42,
    0,
    4.71,
    sIEI
); /*Haste + Attackpower                       4.71% Chance*/
addToDBCItemRandomProperties(
    "of Lethality",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    42,
    42,
    38,
    4.71,
    sIEI
); /*Attackpower + Attackpower + Hit           4.71% Chance*/
addToDBCItemRandomProperties(
    "of Stealth",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    42,
    34,
    44,
    4.71,
    sIEI
); /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addToDBCItemRandomProperties(
    "of Vanishing",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    41,
    27,
    28,
    4.71,
    sIEI
); /*Agility, Dodge, Parry                     4.71% Chance*/
addToDBCItemRandomProperties(
    "of Bleeding",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    42,
    37,
    26,
    4.71,
    sIEI
); /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addToDBCItemRandomProperties(
    "of Brutality",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    42,
    38,
    37,
    4.71,
    sIEI
); /*Attackpower + Hit + Crit                  4.71% Chance*/
addToDBCItemRandomProperties(
    "of Pain",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    43,
    37,
    42,
    4.71,
    sIEI
); /*Strength + Crit + Attackpower             4.71% Chance*/
addToDBCItemRandomProperties(
    "of Revenge",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    43,
    44,
    42,
    4.71,
    sIEI
); /*Strength + Haste + Attackpower            4.71% Chance*/
addToDBCItemRandomProperties(
    "of Resourcefulness",
    pI++,
    weaponTierFourItemEnchantmentIndex,
    43,
    27,
    28,
    4.71,
    sIEI
); /*Strength, Dodge, Parry                    4.71% Chance*/
