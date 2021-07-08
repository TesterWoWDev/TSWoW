import { redColorCode } from "../../functions/gem-functions"
import { addDBC, addSpell } from "../../functions/property-functions"
import { attackpower3 } from "../../spells/attack-power-spells"
import { chanceHeal3, chanceLightning3, chanceShadow3, chanceStun3 } from "../../spells/chance-on-hit-spells"
import { health3 } from "../../spells/health-increase-spells"
import { spellpower3 } from "../../spells/spell-power-spells"

let pI = 2800 //Property Index
let sIEI = 6300 //Spell Item Enchantment Index
export let clothTierThreeItemEnchantmentIndex = 15008
export let leatherTierThreeItemEnchantmentIndex = 15009
export let mailTierThreeItemEnchantmentIndex = 15010
export let weaponTierThreeItemEnchantmentIndex = 15011
export let trinketTierThreeItemEnchantmentIndex = 16016


/*On Use : Health (-61)*/           addSpell(7,health3.ID,0,0,0,0,0,0,'Increases health by 1350 for 18 seconds.',sIEI++)
/*On Use : Attack Power (-60)*/     addSpell(7,attackpower3.ID,0,0,0,0,0,0,'Increases attack power by 250 for 10 seconds.',sIEI++)
/*On Use : Spell Power (-59)*/      addSpell(7,spellpower3.ID,0,0,0,0,0,0,'Increases spell power by 250 for 10 seconds.',sIEI++)
/*Chance : Stun Baton (-58)*/       addSpell(1,chanceStun3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Stuns target for 3 seconds.',sIEI++)
/*Chance : Healing (-57)*/          addSpell(1,chanceHeal3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Heal 450.',sIEI++)
/*Chance : Thunderfury (-56)*/      addSpell(1,chanceLightning3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Lightning Blast for 246 damage.',sIEI++)
/*Chance : Shadow Bolt (-55)*/      addSpell(1,chanceShadow3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Shadow Bolt for 120 damage.',sIEI++)
/*Omnipotence Weapon (-54)*/        addSpell(5,3,19,19,5,4,19,19,'+19 Agility\n+19 Strength',sIEI++)
/*Omnipotence Weapon (-53)*/        addSpell(5,5,19,19,5,7,22,22,'+19 Intellect\n+22 Stamina',sIEI++)
/*Omnipotence Weapon (-52)*/        addSpell(5,45,36,36,5,38,36,36,'+36 Spell Power\n+36 Attack Power',sIEI++)
/*Omnipotence (-51)*/               addSpell(5,3,7,7,5,4,7,7,'+7 Agility\n+7 Strength',sIEI++)
/*Omnipotence (-50)*/               addSpell(5,5,7,7,5,7,9,9,'+7 Intellect\n+9 Stamina',sIEI++)
/*Omnipotence (-49)*/               addSpell(5,45,11,11,5,38,11,11,'+11 Spell Power\n+11 Attack Power',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/                   addSpell(5,42,36,36,0,0,0,0,'+36 Healing Done',sIEI++)
/*Intellect (-47)*/                 addSpell(5,5,19,19,0,0,0,0,'+19 Intellect',sIEI++)
/*Spirit (-46)*/                    addSpell(5,6,27,27,0,0,0,0,'+27 Spirit',sIEI++)
/*Spell Power (-45)*/               addSpell(5,45,36,36,0,0,0,0,'+36 Spell Power',sIEI++)
/*Haste Rating (-44)*/              addSpell(5,36,19,19,0,0,0,0,'+19 Haste Rating',sIEI++)
/*Strength (-43)*/                  addSpell(5,4,19,19,0,0,0,0,'+19 Strength',sIEI++)
/*Attack Power (-42)*/              addSpell(5,38,36,36,0,0,0,0,'+36 Attack Power',sIEI++)
/*Agility (-41)*/                   addSpell(5,3,19,19,0,0,0,0,'+19 Agility',sIEI++)
/*Ranged Attack Power (-40)*/       addSpell(5,39,36,36,0,0,0,0,'+36 Ranged Attack Power',sIEI++)
/*Stamina (-39)*/                   addSpell(5,7,22,22,0,0,0,0,'+22 Stamina',sIEI++)
/*Hit Rating (-38)*/                addSpell(5,31,27,27,0,0,0,0,'+27 Hit Rating',sIEI++)
/*Critical Strike (-37)*/           addSpell(5,32,31,31,0,0,0,0,'+31 Critical Strike Rating',sIEI++)
/*Health (-36)*/                    addSpell(5,1,275,275,0,0,0,0,'+275 Health',sIEI++)
/*Mana (-35)*/                      addSpell(5,2,250,250,0,0,0,0,'+250 Mana',sIEI++)
/*Health per 5 (-34)*/              addSpell(5,46,31,31,0,0,0,0,'+31 Health Per Second',sIEI++)
/*Mana per 5 (-33)*/                addSpell(5,43,31,31,0,0,0,0,'+31 Mana Per Second',sIEI++)
/*Block Rating (-32)*/              addSpell(5,15,11,11,0,0,0,0,'+11 Block Rating',sIEI++)
/*Expertise Rating (-31)*/          addSpell(5,37,11,11,0,0,0,0,'+11 Expertise Rating',sIEI++)
/*Defense Rating (-30)*/            addSpell(5,12,11,11,0,0,0,0,'+11 Defense Rating',sIEI++)
/*Dodge Rating (-27)*/              addSpell(5,13,11,11,0,0,0,0,'+11 Dodge Rating',sIEI++)
/*Parry Rating (-28)*/              addSpell(5,14,11,11,0,0,0,0,'+11 Parry Rating',sIEI++)
/*Resilience Rating (-27)*/         addSpell(5,35,4,4,0,0,0,0,'+4 Resilience Rating',sIEI++)
/*Armor Penetration (-26)*/         addSpell(5,44,8,8,0,0,0,0,'+8 Armor Penetration',sIEI++)
/*Spell Penetration (-25)*/         addSpell(5,47,8,8,0,0,0,0,'+8 Spell Penetration',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/                   addSpell(5,42,11,11,0,0,0,0,'+11 Healing Done',sIEI++)
/*Intellect (-23)*/                 addSpell(5,5,7,7,0,0,0,0,'+7 Intellect',sIEI++)
/*Spirit (-22)*/                    addSpell(5,6,9,9,0,0,0,0,'+9 Spirit',sIEI++)
/*Spell Power (-21)*/               addSpell(5,45,11,11,0,0,0,0,'+11 Spell Power',sIEI++)
/*Haste Rating (-20)*/              addSpell(5,36,8,8,0,0,0,0,'+8 Haste Rating',sIEI++)
/*Strength (-19)*/                  addSpell(5,7,7,7,0,0,0,0,'+7 Strength',sIEI++)
/*Attack Power (-18)*/              addSpell(5,38,11,11,0,0,0,0,'+11 Attack Power',sIEI++)
/*Agility (-17)*/                   addSpell(5,3,7,7,0,0,0,0,'+7 Agility',sIEI++)
/*Ranged Attack Power (-16)*/       addSpell(5,39,9,9,0,0,0,0,'+9 Ranged Attack Power',sIEI++)
/*Stamina (-15)*/                   addSpell(5,7,9,9,0,0,0,0,'+9 Stamina',sIEI++)
/*Hit Rating (-14)*/                addSpell(5,31,11,11,0,0,0,0,'+11 Hit Rating',sIEI++)
/*Critical Strike (-13)*/           addSpell(5,32,11,11,0,0,0,0,'+11 Critical Strike Rating',sIEI++)
/*Health (-12)*/                    addSpell(5,1,165,165,0,0,0,0,'+165 Health',sIEI++)
/*Mana (-11)*/                      addSpell(5,2,88,88,0,0,0,0,'+88 Mana',sIEI++)
/*Health per 5 (-10)*/              addSpell(5,46,11,11,0,0,0,0,'+11 Health Per Second',sIEI++)
/*Mana per 5 (-9)*/                 addSpell(5,43,11,11,0,0,0,0,'+11 Mana Per Second',sIEI++)
/*Block Rating (-8)*/               addSpell(5,15,7,7,0,0,0,0,'+7 Block Rating',sIEI++)
/*Expertise Rating (-7)*/           addSpell(5,37,7,7,0,0,0,0,'+7 Expertise Rating',sIEI++)
/*Defense Rating (-6)*/             addSpell(5,12,7,7,0,0,0,0,'+7 Defense Rating',sIEI++)
/*Dodge Rating (-5)*/               addSpell(5,13,7,7,0,0,0,0,'+7 Dodge Rating',sIEI++)
/*Parry Rating (-4)*/               addSpell(5,14,7,7,0,0,0,0,'+7 Parry Rating',sIEI++)
/*Resilience Rating (-3)*/          addSpell(5,35,3,3,0,0,0,0,'+3 Resilience Rating',sIEI++)
/*Armor Penetration (-2)*/          addSpell(5,44,4,4,0,0,0,0,'+4 Armor Penetration',sIEI++)
/*Spell Penetration (-1)*/          addSpell(5,47,4,4,0,0,0,0,'+4 Spell Penetration',sIEI++)

// Trinkets : On Use Effects
addDBC('of Recurring Power',pI++,trinketTierThreeItemEnchantmentIndex,59,39,47,1,sIEI)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addDBC('of Escalating Power',pI++,trinketTierThreeItemEnchantmentIndex,60,39,43,1,sIEI)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addDBC('of Escalating Power',pI++,trinketTierThreeItemEnchantmentIndex,60,39,41,1,sIEI)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addDBC('of the Jailer',pI++,trinketTierThreeItemEnchantmentIndex,58,38,37,1,sIEI)            /*Chance to Stun + Hit + Crit                    1% Chance*/
addDBC('of the Lightning Thief',pI++,trinketTierThreeItemEnchantmentIndex,56,44,31,1,sIEI)   /*Chance to Thunderfury + Haste + Expertise            1% Chance*/
addDBC('of the Immortal',pI++,trinketTierThreeItemEnchantmentIndex,57,36,37,1,sIEI)          /*Chance to Heal + Health + Crit                   1% Chance*/
addDBC('of the Shadow Storm',pI++,trinketTierThreeItemEnchantmentIndex,55,45,42,1,sIEI)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Chance on Hit Effects
addDBC('of the Jailer',pI++,weaponTierThreeItemEnchantmentIndex,58,0,0,1,sIEI)            /*Chance to Stun                    1% Chance*/
addDBC('of the Lightning Thief',pI++,weaponTierThreeItemEnchantmentIndex,56,0,0,1,sIEI)   /*Chance to Thunderfury             1% Chance*/
addDBC('of the Immortal',pI++,weaponTierThreeItemEnchantmentIndex,57,0,0,1,sIEI)          /*Chance to Heal                    1% Chance*/
addDBC('of the Shadow Storm',pI++,weaponTierThreeItemEnchantmentIndex,55,0,0,1,sIEI)      /*Chance to Send Shadowbolts        1% Chance*/

// Omnipotence Chances
addDBC('of the Omnipotent',pI++,clothTierThreeItemEnchantmentIndex,49,50,51,1,sIEI)     /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',pI++,leatherTierThreeItemEnchantmentIndex,49,50,51,1,sIEI)   /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',pI++,mailTierThreeItemEnchantmentIndex,49,50,51,1,sIEI)      /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',pI++,weaponTierThreeItemEnchantmentIndex,52,53,54,1,sIEI)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items
addDBC('of Blasphemy',pI++,clothTierThreeItemEnchantmentIndex,23,22,21,9.9,sIEI)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',pI++,clothTierThreeItemEnchantmentIndex,23,20,21,9.9,sIEI)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',pI++,clothTierThreeItemEnchantmentIndex,20,21,0,9.9,sIEI)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',pI++,clothTierThreeItemEnchantmentIndex,21,21,14,9.9,sIEI)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',pI++,clothTierThreeItemEnchantmentIndex,21,9,20,9.9,sIEI)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',pI++,clothTierThreeItemEnchantmentIndex,10,9,0,9.9,sIEI)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',pI++,clothTierThreeItemEnchantmentIndex,21,13,1,9.9,sIEI)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',pI++,clothTierThreeItemEnchantmentIndex,21,14,13,9.9,sIEI)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',pI++,clothTierThreeItemEnchantmentIndex,12,10,0,9.9,sIEI)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',pI++,clothTierThreeItemEnchantmentIndex,20,14,13,9.9,sIEI)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addDBC('of Balance',pI++,leatherTierThreeItemEnchantmentIndex,17,13,18,6.6,sIEI)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addDBC('of Aggression',pI++,leatherTierThreeItemEnchantmentIndex,17,20,18,6.6,sIEI)  /*Agility + Haste + Attackpower             6.6% Chance*/
addDBC('of Power',pI++,leatherTierThreeItemEnchantmentIndex,20,18,0,6.6,sIEI)        /*Haste + Attackpower                       6.6% Chance*/
addDBC('of Lethality',pI++,leatherTierThreeItemEnchantmentIndex,18,18,14,6.6,sIEI)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addDBC('of Stealth',pI++,leatherTierThreeItemEnchantmentIndex,18,10,20,6.6,sIEI)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addDBC('of Vanishing',pI++,leatherTierThreeItemEnchantmentIndex,5,4,17,6.6,sIEI)     /*Agility, Dodge, Parry                     6.6% Chance*/
addDBC('of Bleeding',pI++,leatherTierThreeItemEnchantmentIndex,18,13,2,6.6,sIEI)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addDBC('of Brutality',pI++,leatherTierThreeItemEnchantmentIndex,18,14,13,6.6,sIEI)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',pI++,leatherTierThreeItemEnchantmentIndex,23,22,21,6.6,sIEI)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addDBC('of Potency',pI++,leatherTierThreeItemEnchantmentIndex,23,20,21,6.6,sIEI)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addDBC('of Power',pI++,leatherTierThreeItemEnchantmentIndex,20,21,0,6.6,sIEI)          /*Haste + Spellpower                        6.6% Chance*/
addDBC('of Smiting',pI++,leatherTierThreeItemEnchantmentIndex,21,21,14,6.6,sIEI)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addDBC('of Healing',pI++,leatherTierThreeItemEnchantmentIndex,21,9,20,6.6,sIEI)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addDBC('of Blasting',pI++,leatherTierThreeItemEnchantmentIndex,21,13,1,6.6,sIEI)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addDBC('of Destruction',pI++,leatherTierThreeItemEnchantmentIndex,21,14,13,6.6,sIEI)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items
addDBC('of Pain',pI++,mailTierThreeItemEnchantmentIndex,19,13,18,5.82,sIEI)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addDBC('of Revenge',pI++,mailTierThreeItemEnchantmentIndex,19,20,18,5.82,sIEI)        /*Strength + Haste + Attackpower            5.82% Chance*/
addDBC('of Brutality',pI++,mailTierThreeItemEnchantmentIndex,20,18,0,5.82,sIEI)       /*Haste + Attackpower                       5.82% Chance*/
addDBC('of Agony',pI++,mailTierThreeItemEnchantmentIndex,18,18,14,5.82,sIEI)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addDBC('of Berserking',pI++,mailTierThreeItemEnchantmentIndex,18,10,20,5.82,sIEI)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addDBC('of Resourcefulness',pI++,mailTierThreeItemEnchantmentIndex,5,4,19,5.82,sIEI)  /*Strength, Dodge, Parry                    5.82% Chance*/
addDBC('of Remorse',pI++,mailTierThreeItemEnchantmentIndex,18,13,2,5.82,sIEI)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addDBC('of Demise',pI++,mailTierThreeItemEnchantmentIndex,18,14,13,5.82,sIEI)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addDBC('of Life',pI++,mailTierThreeItemEnchantmentIndex,12,10,0,5.82,sIEI)            /*Health + Health per 5                     5.82% Chance*/
addDBC('of Swiftness',pI++,mailTierThreeItemEnchantmentIndex,20,14,13,5.82,sIEI)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',pI++,mailTierThreeItemEnchantmentIndex,23,22,21,5.82,sIEI)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addDBC('of Potency',pI++,mailTierThreeItemEnchantmentIndex,23,20,21,5.82,sIEI)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addDBC('of Power',pI++,mailTierThreeItemEnchantmentIndex,20,21,0,5.82,sIEI)          /*Haste + Spellpower                        5.82% Chance*/
addDBC('of Smiting',pI++,mailTierThreeItemEnchantmentIndex,21,21,14,5.82,sIEI)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addDBC('of Healing',pI++,mailTierThreeItemEnchantmentIndex,21,9,20,5.82,sIEI)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addDBC('of Blasting',pI++,mailTierThreeItemEnchantmentIndex,21,13,1,5.82,sIEI)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addDBC('of Destruction',pI++,mailTierThreeItemEnchantmentIndex,21,14,13,5.82,sIEI)   /*Spellpower + Hit + Crit                   5.82% Chance*/

// Weapon Enchants
addDBC('of Blasphemy',pI++,weaponTierThreeItemEnchantmentIndex,47,46,45,4.71,sIEI)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addDBC('of Potency',pI++,weaponTierThreeItemEnchantmentIndex,47,44,45,4.71,sIEI)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addDBC('of Power',pI++,weaponTierThreeItemEnchantmentIndex,44,45,0,4.71,sIEI)           /*Haste + Spellpower                        4.71% Chance*/
addDBC('of Smiting',pI++,weaponTierThreeItemEnchantmentIndex,45,45,38,4.71,sIEI)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addDBC('of Healing',pI++,weaponTierThreeItemEnchantmentIndex,45,33,44,4.71,sIEI)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addDBC('of Renewal',pI++,weaponTierThreeItemEnchantmentIndex,34,33,0,4.71,sIEI)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addDBC('of Blasting',pI++,weaponTierThreeItemEnchantmentIndex,45,37,25,4.71,sIEI)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addDBC('of Destruction',pI++,weaponTierThreeItemEnchantmentIndex,45,38,37,4.71,sIEI)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addDBC('of Life',pI++,weaponTierThreeItemEnchantmentIndex,36,34,0,4.71,sIEI)            /*Health + Health per 5                     4.71% Chance*/
addDBC('of Swiftness',pI++,weaponTierThreeItemEnchantmentIndex,44,37,38,4.71,sIEI)      /*Haste + Crit + Hit                        4.71% Chance*/
addDBC('of Balance',pI++,weaponTierThreeItemEnchantmentIndex,41,37,42,4.71,sIEI)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addDBC('of Aggression',pI++,weaponTierThreeItemEnchantmentIndex,41,44,42,4.71,sIEI)     /*Agility + Haste + Attackpower             4.71% Chance*/
addDBC('of Power',pI++,weaponTierThreeItemEnchantmentIndex,44,42,0,4.71,sIEI)           /*Haste + Attackpower                       4.71% Chance*/
addDBC('of Lethality',pI++,weaponTierThreeItemEnchantmentIndex,42,42,38,4.71,sIEI)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addDBC('of Stealth',pI++,weaponTierThreeItemEnchantmentIndex,42,34,44,4.71,sIEI)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addDBC('of Vanishing',pI++,weaponTierThreeItemEnchantmentIndex,41,27,28,4.71,sIEI)      /*Agility, Dodge, Parry                     4.71% Chance*/
addDBC('of Bleeding',pI++,weaponTierThreeItemEnchantmentIndex,42,37,26,4.71,sIEI)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addDBC('of Brutality',pI++,weaponTierThreeItemEnchantmentIndex,42,38,37,4.71,sIEI)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addDBC('of Pain',pI++,weaponTierThreeItemEnchantmentIndex,43,37,42,4.71,sIEI)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addDBC('of Revenge',pI++,weaponTierThreeItemEnchantmentIndex,43,44,42,4.71,sIEI)        /*Strength + Haste + Attackpower            4.71% Chance*/
addDBC('of Resourcefulness',pI++,weaponTierThreeItemEnchantmentIndex,43,27,28,4.71,sIEI)/*Strength, Dodge, Parry                    4.71% Chance*/
