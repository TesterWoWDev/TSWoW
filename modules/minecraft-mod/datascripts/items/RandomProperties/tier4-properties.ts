
import { additems, redColorCode, spellColorCode } from "../../functions/gem-functions"
import { addDBC, addSpell } from "../../functions/property-functions"
import { attackpower1, attackpower4 } from "../../spells/attack-power-spells"
import { chanceHeal4, chanceLightning4, chanceShadow4, chanceStun4 } from "../../spells/chance-on-hit-spells"
import { health4 } from "../../spells/health-increase-spells"
import { spellpower1, spellpower4 } from "../../spells/spell-power-spells"

let PropertyIndex = 3000
let SpellItemEnchantmentIndex = 6500
export let clothTierFourItemEnchantmentIndex = 15012
export let leatherTierFourItemEnchantmentIndex = 15013
export let mailTierFourItemEnchantmentIndex = 15014
export let weaponTierFourItemEnchantmentIndex = 15015
export let trinketTierFourItemEnchantmentIndex = 16015

/*On Use : Health (-61)*/       addSpell(7,health4.ID,0,0,0,0,0,0,'Increases health by 1750 for 18 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Attack Power (-60)*/ addSpell(7,attackpower4.ID,0,0,0,0,0,0,redColorCode + 'Increases attack power by 200 for 10 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Spell Power (-59)*/  addSpell(7,spellpower4.ID,0,0,0,0,0,0,redColorCode + 'Increases spell power by 200 for 10 seconds.',SpellItemEnchantmentIndex++)

/*Chance : Shadow Bolt (-58)*/ addSpell(1,56,0,0,0,0,0,0,redColorCode + '+ Chance on Hit : Stuns target for 3 seconds.',SpellItemEnchantmentIndex++)
/*Chance : Healing (-57)*/     addSpell(1,2054,0,0,0,0,0,0,redColorCode + '+ Chance on Hit : Heal 341.',SpellItemEnchantmentIndex++)
/*Chance : Thunderfury (-56)*/ addSpell(1,21992,0,0,0,0,0,0,redColorCode + '+ Chance on Hit : Lightning Blast.',SpellItemEnchantmentIndex++)
/*Chance : Shadow Bolt (-55)*/ addSpell(1,13440,0,0,0,0,0,0,redColorCode + '+ Chance on Hit : Shadow Bolt.',SpellItemEnchantmentIndex++)

/*Omnipotence Weapon (-54)*/ addSpell(5,3,24,24,5,4,24,24,'+24 Agility\n+24 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-53)*/ addSpell(5,5,24,24,5,7,34,34,'+24 Intellect\n+34 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-52)*/ addSpell(5,45,48,48,5,38,48,48,'+48 Spell Power\n+48 Attack Power',SpellItemEnchantmentIndex++)

/*Omnipotence (-51)*/ addSpell(5,3,12,12,5,4,12,12,'+12 Agility\n+12 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence (-50)*/ addSpell(5,5,12,12,5,7,14,14,'+12 Intellect\n+14 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence (-49)*/ addSpell(5,45,16,16,5,38,16,16,'+16 Spell Power\n+16 Attack Power',SpellItemEnchantmentIndex++)

/*Healing (-48)*/       addSpell(5,42,48,48,0,0,0,0,'+48 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-47)*/     addSpell(5,5,24,24,0,0,0,0,'+24 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-46)*/        addSpell(5,6,36,36,0,0,0,0,'+36 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-45)*/   addSpell(5,45,48,48,0,0,0,0,'+48 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-44)*/  addSpell(5,36,24,24,0,0,0,0,'+24 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-43)*/             addSpell(5,4,24,24,0,0,0,0,'+24 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-42)*/         addSpell(5,38,48,48,0,0,0,0,'+48 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-41)*/              addSpell(5,3,24,24,0,0,0,0,'+24 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-40)*/  addSpell(5,39,48,48,0,0,0,0,'+48 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-39)*/          addSpell(5,7,34,34,0,0,0,0,'+34 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-38)*/       addSpell(5,31,36,36,0,0,0,0,'+36 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-37)*/  addSpell(5,32,44,44,0,0,0,0,'+44 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-36)*/           addSpell(5,1,365,365,0,0,0,0,'+365 Health',SpellItemEnchantmentIndex++)
/*Mana (-35)*/             addSpell(5,2,250,250,0,0,0,0,'+250 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-34)*/     addSpell(5,46,44,44,0,0,0,0,'+44 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-33)*/        addSpell(5,43,44,44,0,0,0,0,'+44 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-32)*/        addSpell(5,15,14,14,0,0,0,0,'+14 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-31)*/    addSpell(5,37,14,14,0,0,0,0,'+14 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-30)*/      addSpell(5,12,14,14,0,0,0,0,'+14 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-27)*/        addSpell(5,13,14,14,0,0,0,0,'+14 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-28)*/        addSpell(5,14,14,14,0,0,0,0,'+14 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-27)*/   addSpell(5,35,5,5,0,0,0,0,'+5 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-26)*/   addSpell(5,44,10,10,0,0,0,0,'+10 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-25)*/   addSpell(5,47,10,10,0,0,0,0,'+10 Spell Penetration',SpellItemEnchantmentIndex++)

/*Healing (-24)*/       addSpell(5,42,16,16,0,0,0,0,'+16 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-23)*/     addSpell(5,5,12,12,0,0,0,0,'+12 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-22)*/        addSpell(5,6,14,14,0,0,0,0,'+14 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-21)*/   addSpell(5,45,16,16,0,0,0,0,'+16 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-20)*/  addSpell(5,36,13,13,0,0,0,0,'+13 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-19)*/             addSpell(5,7,12,12,0,0,0,0,'+12 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-18)*/         addSpell(5,38,16,16,0,0,0,0,'+16 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-17)*/              addSpell(5,3,12,12,0,0,0,0,'+12 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-16)*/  addSpell(5,39,14,14,0,0,0,0,'+14 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-15)*/          addSpell(5,7,14,14,0,0,0,0,'+14 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-14)*/       addSpell(5,31,16,16,0,0,0,0,'+16 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-13)*/  addSpell(5,32,16,16,0,0,0,0,'+16 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-12)*/           addSpell(5,1,208,208,0,0,0,0,'+208 Health',SpellItemEnchantmentIndex++)
/*Mana (-11)*/             addSpell(5,2,115,115,0,0,0,0,'+115 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-10)*/     addSpell(5,46,16,16,0,0,0,0,'+16 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-9)*/        addSpell(5,43,16,16,0,0,0,0,'+16 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-8)*/        addSpell(5,15,12,12,0,0,0,0,'+12 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-7)*/    addSpell(5,37,12,12,0,0,0,0,'+12 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-6)*/      addSpell(5,12,12,12,0,0,0,0,'+12 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-5)*/        addSpell(5,13,12,12,0,0,0,0,'+12 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-4)*/        addSpell(5,14,12,12,0,0,0,0,'+12 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-3)*/   addSpell(5,35,4,4,0,0,0,0,'+4 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-2)*/   addSpell(5,44,5,5,0,0,0,0,'+5 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-1)*/   addSpell(5,47,5,5,0,0,0,0,'+5 Spell Penetration',SpellItemEnchantmentIndex++)

// Trinkets : On Use Effects
addDBC('of Recurring Power',PropertyIndex++,trinketTierFourItemEnchantmentIndex,59,39,47,1,SpellItemEnchantmentIndex)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierFourItemEnchantmentIndex,60,39,43,1,SpellItemEnchantmentIndex)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierFourItemEnchantmentIndex,60,39,41,1,SpellItemEnchantmentIndex)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,trinketTierFourItemEnchantmentIndex,58,38,37,1,SpellItemEnchantmentIndex)            /*Chance to Stun + Hit + Crit                                   1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,trinketTierFourItemEnchantmentIndex,56,44,31,1,SpellItemEnchantmentIndex)   /*Chance to Thunderfury + Haste + Expertise                     1% Chance*/
addDBC('of the Immortal',PropertyIndex++,trinketTierFourItemEnchantmentIndex,57,36,37,1,SpellItemEnchantmentIndex)          /*Chance to Heal + Health + Crit                                1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,trinketTierFourItemEnchantmentIndex,55,45,42,1,SpellItemEnchantmentIndex)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Omnipotence Chances
addDBC('of the Omnipotent',PropertyIndex++,clothTierFourItemEnchantmentIndex,49,50,51,1,SpellItemEnchantmentIndex)     /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,leatherTierFourItemEnchantmentIndex,49,50,51,1,SpellItemEnchantmentIndex)   /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,mailTierFourItemEnchantmentIndex,49,50,51,1,SpellItemEnchantmentIndex)      /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,weaponTierFourItemEnchantmentIndex,52,53,54,1,SpellItemEnchantmentIndex)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items
addDBC('of Blasphemy',PropertyIndex++,clothTierFourItemEnchantmentIndex,23,22,21,9.9,SpellItemEnchantmentIndex)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,clothTierFourItemEnchantmentIndex,23,20,21,9.9,SpellItemEnchantmentIndex)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,clothTierFourItemEnchantmentIndex,20,21,0,9.9,SpellItemEnchantmentIndex)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,21,14,9.9,SpellItemEnchantmentIndex)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,9,20,9.9,SpellItemEnchantmentIndex)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,clothTierFourItemEnchantmentIndex,10,9,0,9.9,SpellItemEnchantmentIndex)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,13,1,9.9,SpellItemEnchantmentIndex)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,14,13,9.9,SpellItemEnchantmentIndex)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,clothTierFourItemEnchantmentIndex,12,10,0,9.9,SpellItemEnchantmentIndex)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,clothTierFourItemEnchantmentIndex,20,14,13,9.9,SpellItemEnchantmentIndex)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addDBC('of Balance',PropertyIndex++,leatherTierFourItemEnchantmentIndex,17,13,18,6.6,SpellItemEnchantmentIndex)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addDBC('of Aggression',PropertyIndex++,leatherTierFourItemEnchantmentIndex,17,20,18,6.6,SpellItemEnchantmentIndex)  /*Agility + Haste + Attackpower             6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,18,0,6.6,SpellItemEnchantmentIndex)        /*Haste + Attackpower                       6.6% Chance*/
addDBC('of Lethality',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,18,14,6.6,SpellItemEnchantmentIndex)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addDBC('of Stealth',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,10,20,6.6,SpellItemEnchantmentIndex)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addDBC('of Vanishing',PropertyIndex++,leatherTierFourItemEnchantmentIndex,5,4,17,6.6,SpellItemEnchantmentIndex)     /*Agility, Dodge, Parry                     6.6% Chance*/
addDBC('of Bleeding',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,13,2,6.6,SpellItemEnchantmentIndex)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addDBC('of Brutality',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,14,13,6.6,SpellItemEnchantmentIndex)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,leatherTierFourItemEnchantmentIndex,23,22,21,6.6,SpellItemEnchantmentIndex)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addDBC('of Potency',PropertyIndex++,leatherTierFourItemEnchantmentIndex,23,20,21,6.6,SpellItemEnchantmentIndex)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,21,0,6.6,SpellItemEnchantmentIndex)          /*Haste + Spellpower                        6.6% Chance*/
addDBC('of Smiting',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,21,14,6.6,SpellItemEnchantmentIndex)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addDBC('of Healing',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,9,20,6.6,SpellItemEnchantmentIndex)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addDBC('of Blasting',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,13,1,6.6,SpellItemEnchantmentIndex)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addDBC('of Destruction',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,14,13,6.6,SpellItemEnchantmentIndex)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items
addDBC('of Pain',PropertyIndex++,mailTierFourItemEnchantmentIndex,19,13,18,5.82,SpellItemEnchantmentIndex)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addDBC('of Revenge',PropertyIndex++,mailTierFourItemEnchantmentIndex,19,20,18,5.82,SpellItemEnchantmentIndex)        /*Strength + Haste + Attackpower            5.82% Chance*/
addDBC('of Brutality',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,18,0,5.82,SpellItemEnchantmentIndex)       /*Haste + Attackpower                       5.82% Chance*/
addDBC('of Agony',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,18,14,5.82,SpellItemEnchantmentIndex)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addDBC('of Berserking',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,10,20,5.82,SpellItemEnchantmentIndex)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,mailTierFourItemEnchantmentIndex,5,4,19,5.82,SpellItemEnchantmentIndex)  /*Strength, Dodge, Parry                    5.82% Chance*/
addDBC('of Remorse',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,13,2,5.82,SpellItemEnchantmentIndex)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addDBC('of Demise',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,14,13,5.82,SpellItemEnchantmentIndex)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addDBC('of Life',PropertyIndex++,mailTierFourItemEnchantmentIndex,12,10,0,5.82,SpellItemEnchantmentIndex)            /*Health + Health per 5                     5.82% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,14,13,5.82,SpellItemEnchantmentIndex)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,mailTierFourItemEnchantmentIndex,23,22,21,5.82,SpellItemEnchantmentIndex)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addDBC('of Potency',PropertyIndex++,mailTierFourItemEnchantmentIndex,23,20,21,5.82,SpellItemEnchantmentIndex)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addDBC('of Power',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,21,0,5.82,SpellItemEnchantmentIndex)          /*Haste + Spellpower                        5.82% Chance*/
addDBC('of Smiting',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,21,14,5.82,SpellItemEnchantmentIndex)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addDBC('of Healing',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,9,20,5.82,SpellItemEnchantmentIndex)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addDBC('of Blasting',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,13,1,5.82,SpellItemEnchantmentIndex)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addDBC('of Destruction',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,14,13,5.82,SpellItemEnchantmentIndex)   /*Spellpower + Hit + Crit                   5.82% Chance*/

// Weapon Enchants
addDBC('of Blasphemy',PropertyIndex++,weaponTierFourItemEnchantmentIndex,47,46,45,4.71,SpellItemEnchantmentIndex)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addDBC('of Potency',PropertyIndex++,weaponTierFourItemEnchantmentIndex,47,44,45,4.71,SpellItemEnchantmentIndex)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,45,0,4.71,SpellItemEnchantmentIndex)           /*Haste + Spellpower                        4.71% Chance*/
addDBC('of Smiting',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,45,38,4.71,SpellItemEnchantmentIndex)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addDBC('of Healing',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,33,44,4.71,SpellItemEnchantmentIndex)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addDBC('of Renewal',PropertyIndex++,weaponTierFourItemEnchantmentIndex,34,33,0,4.71,SpellItemEnchantmentIndex)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addDBC('of Blasting',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,37,25,4.71,SpellItemEnchantmentIndex)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addDBC('of Destruction',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,38,37,4.71,SpellItemEnchantmentIndex)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierFourItemEnchantmentIndex,36,34,0,4.71,SpellItemEnchantmentIndex)            /*Health + Health per 5                     4.71% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,37,38,4.71,SpellItemEnchantmentIndex)      /*Haste + Crit + Hit                        4.71% Chance*/
addDBC('of Balance',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,37,42,4.71,SpellItemEnchantmentIndex)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addDBC('of Aggression',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,44,42,4.71,SpellItemEnchantmentIndex)     /*Agility + Haste + Attackpower             4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,42,0,4.71,SpellItemEnchantmentIndex)           /*Haste + Attackpower                       4.71% Chance*/
addDBC('of Lethality',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,42,38,4.71,SpellItemEnchantmentIndex)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addDBC('of Stealth',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,34,44,4.71,SpellItemEnchantmentIndex)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addDBC('of Vanishing',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,27,28,4.71,SpellItemEnchantmentIndex)      /*Agility, Dodge, Parry                     4.71% Chance*/
addDBC('of Bleeding',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,37,26,4.71,SpellItemEnchantmentIndex)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,38,37,4.71,SpellItemEnchantmentIndex)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addDBC('of Pain',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,37,42,4.71,SpellItemEnchantmentIndex)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addDBC('of Revenge',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,44,42,4.71,SpellItemEnchantmentIndex)        /*Strength + Haste + Attackpower            4.71% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,27,28,4.71,SpellItemEnchantmentIndex)/*Strength, Dodge, Parry                    4.71% Chance*/