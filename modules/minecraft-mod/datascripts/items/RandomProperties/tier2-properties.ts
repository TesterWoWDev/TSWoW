import { addToDBCSpellItemEnchantment, addToDBCItemRandomProperties } from "../../functions/dbc-functions"
import { spellColorCode } from "../../functions/gem-functions"
import { attackpower2 } from "../../spells/attack-power-spells"
import { chanceHeal2, chanceLightning2, chanceShadow2, chanceStun2, chanceStun2C, chanceStun2M } from "../../spells/chance-on-hit-spells"
import { health2 } from "../../spells/health-increase-spells"
import { spellpower2 } from "../../spells/spell-power-spells"

let pI = 2650 //Property Index
let sIEI = 6150 //Spell Item Enchantment Index
export let clothTierTwoItemEnchantmentIndex = 15004
export let leatherTierTwoItemEnchantmentIndex = 15005
export let mailTierTwoItemEnchantmentIndex = 15006
export let weaponTierTwoItemEnchantmentIndex = 15007
export let trinketTierTwoItemEnchantmentIndex = 16017

/*On Use : Health (-61)*/           addToDBCSpellItemEnchantment(7,health2.ID,0,0,0,0,0,0,'Increases health by 750 for 18 seconds.',sIEI++)
/*On Use : Attack Power (-60)*/     addToDBCSpellItemEnchantment(7,attackpower2.ID,0,0,0,0,0,0,spellColorCode +'Increases attack power by 150 for 10 seconds.',sIEI++)
/*On Use : Spell Power (-59)*/      addToDBCSpellItemEnchantment(7,spellpower2.ID,0,0,0,0,0,0,spellColorCode +'Increases spell power by 150 for 10 seconds.',sIEI++)
/*Chance : Stun Baton (-58)*/       addToDBCSpellItemEnchantment(3,chanceStun2M.ID,0,0,3,chanceStun2C.ID,0,0,spellColorCode +'Chance: Stuns target for 2 seconds.',sIEI++)
/*Chance : Healing (-57)*/          addToDBCSpellItemEnchantment(1,chanceHeal2.ID,0,0,0,0,0,0,spellColorCode + 'Chance: Heal 250.',sIEI++)
/*Chance : Thunderfury (-56)*/      addToDBCSpellItemEnchantment(1,chanceLightning2.ID,0,0,0,0,0,0,spellColorCode + 'Chance: Lightning Blast for 175 damage.',sIEI++)
/*Chance : Shadow Bolt (-55)*/      addToDBCSpellItemEnchantment(1,chanceShadow2.ID,0,0,0,0,0,0,spellColorCode + 'Chance: Shadow Bolt for 80 damage.',sIEI++)
/*Omnipotence Weapon (-54)*/        addToDBCSpellItemEnchantment(5,3,14,14,5,4,14,14,'+14 Agility\n+14 Strength',sIEI++)
/*Omnipotence Weapon (-53)*/        addToDBCSpellItemEnchantment(5,5,14,14,5,7,16,16,'+14 Intellect\n+16 Stamina',sIEI++)
/*Omnipotence Weapon (-52)*/        addToDBCSpellItemEnchantment(5,45,26,26,5,38,26,26,'+26 Spell Power\n+26 Attack Power',sIEI++)
/*Omnipotence (-51)*/               addToDBCSpellItemEnchantment(5,3,4,4,5,4,4,4,'+4 Agility\n+4 Strength',sIEI++)
/*Omnipotence (-50)*/               addToDBCSpellItemEnchantment(5,5,4,4,5,7,6,6,'+4 Intellect\n+6 Stamina',sIEI++)
/*Omnipotence (-49)*/               addToDBCSpellItemEnchantment(5,45,9,9,5,38,9,9,'+9 Spell Power\n+9 Attack Power',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/                   addToDBCSpellItemEnchantment(5,42,26,26,0,0,0,0,'+26 Healing Done',sIEI++)
/*Intellect (-47)*/                 addToDBCSpellItemEnchantment(5,5,14,14,0,0,0,0,'+14 Intellect',sIEI++)
/*Spirit (-46)*/                    addToDBCSpellItemEnchantment(5,6,22,22,0,0,0,0,'+22 Spirit',sIEI++)
/*Spell Power (-45)*/               addToDBCSpellItemEnchantment(5,45,26,26,0,0,0,0,'+26 Spell Power',sIEI++)
/*Haste Rating (-44)*/              addToDBCSpellItemEnchantment(5,36,14,14,0,0,0,0,'+14 Haste Rating',sIEI++)
/*Strength (-43)*/                  addToDBCSpellItemEnchantment(5,4,14,14,0,0,0,0,'+14 Strength',sIEI++)
/*Attack Power (-42)*/              addToDBCSpellItemEnchantment(5,38,26,26,0,0,0,0,'+26 Attack Power',sIEI++)
/*Agility (-41)*/                   addToDBCSpellItemEnchantment(5,3,14,14,0,0,0,0,'+14 Agility',sIEI++)
/*Ranged Attack Power (-40)*/       addToDBCSpellItemEnchantment(5,39,26,26,0,0,0,0,'+26 Ranged Attack Power',sIEI++)
/*Stamina (-39)*/                   addToDBCSpellItemEnchantment(5,7,16,16,0,0,0,0,'+16 Stamina',sIEI++)
/*Hit Rating (-38)*/                addToDBCSpellItemEnchantment(5,31,22,22,0,0,0,0,'+22 Hit Rating',sIEI++)
/*Critical Strike (-37)*/           addToDBCSpellItemEnchantment(5,32,24,24,0,0,0,0,'+24 Critical Strike Rating',sIEI++)
/*Health (-36)*/                    addToDBCSpellItemEnchantment(5,1,275,275,0,0,0,0,'+275 Health',sIEI++)
/*Mana (-35)*/                      addToDBCSpellItemEnchantment(5,2,250,250,0,0,0,0,'+250 Mana',sIEI++)
/*Health per 5 (-34)*/              addToDBCSpellItemEnchantment(5,46,24,24,0,0,0,0,'+24 Health Per Second',sIEI++)
/*Mana per 5 (-33)*/                addToDBCSpellItemEnchantment(5,43,24,24,0,0,0,0,'+24 Mana Per Second',sIEI++)
/*Block Rating (-32)*/              addToDBCSpellItemEnchantment(5,15,9,9,0,0,0,0,'+9 Block Rating',sIEI++)
/*Expertise Rating (-31)*/          addToDBCSpellItemEnchantment(5,37,9,9,0,0,0,0,'+9 Expertise Rating',sIEI++)
/*Defense Rating (-30)*/            addToDBCSpellItemEnchantment(5,12,9,9,0,0,0,0,'+9 Defense Rating',sIEI++)
/*Dodge Rating (-27)*/              addToDBCSpellItemEnchantment(5,13,9,9,0,0,0,0,'+9 Dodge Rating',sIEI++)
/*Parry Rating (-28)*/              addToDBCSpellItemEnchantment(5,14,9,9,0,0,0,0,'+9 Parry Rating',sIEI++)
/*Resilience Rating (-27)*/         addToDBCSpellItemEnchantment(5,35,3,3,0,0,0,0,'+3 Resilience Rating',sIEI++)
/*Armor Penetration (-26)*/         addToDBCSpellItemEnchantment(5,44,6,6,0,0,0,0,'+6 Armor Penetration',sIEI++)
/*Spell Penetration (-25)*/         addToDBCSpellItemEnchantment(5,47,6,6,0,0,0,0,'+6 Spell Penetration',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/                   addToDBCSpellItemEnchantment(5,42,9,9,0,0,0,0,'+9 Healing Done',sIEI++)
/*Intellect (-23)*/                 addToDBCSpellItemEnchantment(5,5,4,4,0,0,0,0,'+4 Intellect',sIEI++)
/*Spirit (-22)*/                    addToDBCSpellItemEnchantment(5,6,6,6,0,0,0,0,'+6 Spirit',sIEI++)
/*Spell Power (-21)*/               addToDBCSpellItemEnchantment(5,45,9,9,0,0,0,0,'+9 Spell Power',sIEI++)
/*Haste Rating (-20)*/              addToDBCSpellItemEnchantment(5,36,5,5,0,0,0,0,'+5 Haste Rating',sIEI++)
/*Strength (-19)*/                  addToDBCSpellItemEnchantment(5,4,4,4,0,0,0,0,'+4 Strength',sIEI++)
/*Attack Power (-18)*/              addToDBCSpellItemEnchantment(5,38,9,9,0,0,0,0,'+9 Attack Power',sIEI++)
/*Agility (-17)*/                   addToDBCSpellItemEnchantment(5,3,4,4,0,0,0,0,'+4 Agility',sIEI++)
/*Ranged Attack Power (-16)*/       addToDBCSpellItemEnchantment(5,39,6,6,0,0,0,0,'+6 Ranged Attack Power',sIEI++)
/*Stamina (-15)*/                   addToDBCSpellItemEnchantment(5,7,6,6,0,0,0,0,'+6 Stamina',sIEI++)
/*Hit Rating (-14)*/                addToDBCSpellItemEnchantment(5,31,9,9,0,0,0,0,'+9 Hit Rating',sIEI++)
/*Critical Strike (-13)*/           addToDBCSpellItemEnchantment(5,32,8,8,0,0,0,0,'+8 Critical Strike Rating',sIEI++)
/*Health (-12)*/                    addToDBCSpellItemEnchantment(5,1,108,108,0,0,0,0,'+108 Health',sIEI++)
/*Mana (-11)*/                      addToDBCSpellItemEnchantment(5,2,66,66,0,0,0,0,'+66 Mana',sIEI++)
/*Health per 5 (-10)*/              addToDBCSpellItemEnchantment(5,46,9,9,0,0,0,0,'+9 Health Per Second',sIEI++)
/*Mana per 5 (-9)*/                 addToDBCSpellItemEnchantment(5,43,9,9,0,0,0,0,'+9 Mana Per Second',sIEI++)
/*Block Rating (-8)*/               addToDBCSpellItemEnchantment(5,15,5,5,0,0,0,0,'+5 Block Rating',sIEI++)
/*Expertise Rating (-7)*/           addToDBCSpellItemEnchantment(5,37,5,5,0,0,0,0,'+5 Expertise Rating',sIEI++)
/*Defense Rating (-6)*/             addToDBCSpellItemEnchantment(5,12,5,5,0,0,0,0,'+5 Defense Rating',sIEI++)
/*Dodge Rating (-5)*/               addToDBCSpellItemEnchantment(5,13,5,5,0,0,0,0,'+5 Dodge Rating',sIEI++)
/*Parry Rating (-4)*/               addToDBCSpellItemEnchantment(5,14,5,5,0,0,0,0,'+5 Parry Rating',sIEI++)
/*Resilience Rating (-3)*/          addToDBCSpellItemEnchantment(5,35,2,2,0,0,0,0,'+2 Resilience Rating',sIEI++)
/*Armor Penetration (-2)*/          addToDBCSpellItemEnchantment(5,44,3,3,0,0,0,0,'+3 Armor Penetration',sIEI++)
/*Spell Penetration (-1)*/          addToDBCSpellItemEnchantment(5,47,3,3,0,0,0,0,'+3 Spell Penetration',sIEI++)

// Trinkets : On Use Effects
addToDBCItemRandomProperties('of Recurring Power',pI++,trinketTierTwoItemEnchantmentIndex,59,39,47,1,sIEI)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addToDBCItemRandomProperties('of Escalating Power',pI++,trinketTierTwoItemEnchantmentIndex,60,39,43,1,sIEI)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addToDBCItemRandomProperties('of Escalating Power',pI++,trinketTierTwoItemEnchantmentIndex,60,39,41,1,sIEI)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addToDBCItemRandomProperties('of the Jailer',pI++,trinketTierTwoItemEnchantmentIndex,58,38,37,1,sIEI)            /*Chance to Stun + Hit + Crit                    1% Chance*/
addToDBCItemRandomProperties('of the Lightning Thief',pI++,trinketTierTwoItemEnchantmentIndex,56,44,31,1,sIEI)   /*Chance to Thunderfury + Haste + Expertise            1% Chance*/
addToDBCItemRandomProperties('of the Immortal',pI++,trinketTierTwoItemEnchantmentIndex,57,36,37,1,sIEI)          /*Chance to Heal + Health + Crit                   1% Chance*/
addToDBCItemRandomProperties('of the Shadow Storm',pI++,trinketTierTwoItemEnchantmentIndex,55,45,42,1,sIEI)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Chance on Hit Effects
addToDBCItemRandomProperties('of the Jailer',pI++,weaponTierTwoItemEnchantmentIndex,58,0,0,1,sIEI)            /*Chance to Stun                    1% Chance*/
addToDBCItemRandomProperties('of the Lightning Thief',pI++,weaponTierTwoItemEnchantmentIndex,56,0,0,1,sIEI)   /*Chance to Thunderfury             1% Chance*/
addToDBCItemRandomProperties('of the Immortal',pI++,weaponTierTwoItemEnchantmentIndex,57,0,0,1,sIEI)          /*Chance to Heal                    1% Chance*/
addToDBCItemRandomProperties('of the Shadow Storm',pI++,weaponTierTwoItemEnchantmentIndex,55,0,0,1,sIEI)      /*Chance to Send Shadowbolts        1% Chance*/

// Omnipotence Chances
addToDBCItemRandomProperties('of the Omnipotent',pI++,clothTierTwoItemEnchantmentIndex,49,50,51,1,sIEI)     /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties('of the Omnipotent',pI++,leatherTierTwoItemEnchantmentIndex,49,50,51,1,sIEI)   /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties('of the Omnipotent',pI++,mailTierTwoItemEnchantmentIndex,49,50,51,1,sIEI)      /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties('of the Omnipotent',pI++,weaponTierTwoItemEnchantmentIndex,52,53,54,1,sIEI)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items
addToDBCItemRandomProperties('of Blasphemy',pI++,clothTierTwoItemEnchantmentIndex,23,22,21,9.9,sIEI)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,clothTierTwoItemEnchantmentIndex,23,20,21,9.9,sIEI)       /*Intellect + Haste + Spellpower            10% Chance*/
addToDBCItemRandomProperties('of Power',pI++,clothTierTwoItemEnchantmentIndex,20,21,0,9.9,sIEI)          /*Haste + Spellpower                        10% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,clothTierTwoItemEnchantmentIndex,21,21,14,9.9,sIEI)       /*Spellpower + Spellpower + Hit             10% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,clothTierTwoItemEnchantmentIndex,21,9,20,9.9,sIEI)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addToDBCItemRandomProperties('of Renewal',pI++,clothTierTwoItemEnchantmentIndex,10,9,0,9.9,sIEI)         /*Health per 5 + Mana per 5                 10% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,clothTierTwoItemEnchantmentIndex,21,13,1,9.9,sIEI)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,clothTierTwoItemEnchantmentIndex,21,14,13,9.9,sIEI)   /*Spellpower + Hit + Crit                   10% Chance*/
addToDBCItemRandomProperties('of Life',pI++,clothTierTwoItemEnchantmentIndex,12,10,0,9.9,sIEI)           /*Health + Health per 5                     10% Chance*/
addToDBCItemRandomProperties('of Swiftness',pI++,clothTierTwoItemEnchantmentIndex,20,14,13,9.9,sIEI)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addToDBCItemRandomProperties('of Balance',pI++,leatherTierTwoItemEnchantmentIndex,17,13,18,6.6,sIEI)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addToDBCItemRandomProperties('of Aggression',pI++,leatherTierTwoItemEnchantmentIndex,17,20,18,6.6,sIEI)  /*Agility + Haste + Attackpower             6.6% Chance*/
addToDBCItemRandomProperties('of Power',pI++,leatherTierTwoItemEnchantmentIndex,20,18,0,6.6,sIEI)        /*Haste + Attackpower                       6.6% Chance*/
addToDBCItemRandomProperties('of Lethality',pI++,leatherTierTwoItemEnchantmentIndex,18,18,14,6.6,sIEI)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addToDBCItemRandomProperties('of Stealth',pI++,leatherTierTwoItemEnchantmentIndex,18,10,20,6.6,sIEI)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addToDBCItemRandomProperties('of Vanishing',pI++,leatherTierTwoItemEnchantmentIndex,5,4,17,6.6,sIEI)     /*Agility, Dodge, Parry                     6.6% Chance*/
addToDBCItemRandomProperties('of Bleeding',pI++,leatherTierTwoItemEnchantmentIndex,18,13,2,6.6,sIEI)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addToDBCItemRandomProperties('of Brutality',pI++,leatherTierTwoItemEnchantmentIndex,18,14,13,6.6,sIEI)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addToDBCItemRandomProperties('of Blasphemy',pI++,leatherTierTwoItemEnchantmentIndex,23,22,21,6.6,sIEI)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,leatherTierTwoItemEnchantmentIndex,23,20,21,6.6,sIEI)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addToDBCItemRandomProperties('of Power',pI++,leatherTierTwoItemEnchantmentIndex,20,21,0,6.6,sIEI)          /*Haste + Spellpower                        6.6% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,leatherTierTwoItemEnchantmentIndex,21,21,14,6.6,sIEI)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,leatherTierTwoItemEnchantmentIndex,21,9,20,6.6,sIEI)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,leatherTierTwoItemEnchantmentIndex,21,13,1,6.6,sIEI)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,leatherTierTwoItemEnchantmentIndex,21,14,13,6.6,sIEI)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items - MELEE
addToDBCItemRandomProperties('of Pain',pI++,mailTierTwoItemEnchantmentIndex,19,13,18,5.82,sIEI)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addToDBCItemRandomProperties('of Revenge',pI++,mailTierTwoItemEnchantmentIndex,19,20,18,5.82,sIEI)        /*Strength + Haste + Attackpower            5.82% Chance*/
addToDBCItemRandomProperties('of Brutality',pI++,mailTierTwoItemEnchantmentIndex,20,18,0,5.82,sIEI)       /*Haste + Attackpower                       5.82% Chance*/
addToDBCItemRandomProperties('of Agony',pI++,mailTierTwoItemEnchantmentIndex,18,18,14,5.82,sIEI)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addToDBCItemRandomProperties('of Berserking',pI++,mailTierTwoItemEnchantmentIndex,18,10,20,5.82,sIEI)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addToDBCItemRandomProperties('of Resourcefulness',pI++,mailTierTwoItemEnchantmentIndex,5,4,19,5.82,sIEI)  /*Strength, Dodge, Parry                    5.82% Chance*/
addToDBCItemRandomProperties('of Remorse',pI++,mailTierTwoItemEnchantmentIndex,18,13,2,5.82,sIEI)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addToDBCItemRandomProperties('of Demise',pI++,mailTierTwoItemEnchantmentIndex,18,14,13,5.82,sIEI)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addToDBCItemRandomProperties('of Life',pI++,mailTierTwoItemEnchantmentIndex,12,10,0,5.82,sIEI)            /*Health + Health per 5                     5.82% Chance*/
addToDBCItemRandomProperties('of Swiftness',pI++,mailTierTwoItemEnchantmentIndex,20,14,13,5.82,sIEI)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addToDBCItemRandomProperties('of Blasphemy',pI++,mailTierTwoItemEnchantmentIndex,23,22,21,5.82,sIEI)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,mailTierTwoItemEnchantmentIndex,23,20,21,5.82,sIEI)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addToDBCItemRandomProperties('of Power',pI++,mailTierTwoItemEnchantmentIndex,20,21,0,5.82,sIEI)          /*Haste + Spellpower                        5.82% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,mailTierTwoItemEnchantmentIndex,21,21,14,5.82,sIEI)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,mailTierTwoItemEnchantmentIndex,21,9,20,5.82,sIEI)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,mailTierTwoItemEnchantmentIndex,21,13,1,5.82,sIEI)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,mailTierTwoItemEnchantmentIndex,21,14,13,5.82,sIEI)   /*Spellpower + Hit + Crit                   5.82% Chance*/


// Weapon Enchants
addToDBCItemRandomProperties('of Blasphemy',pI++,weaponTierTwoItemEnchantmentIndex,47,46,45,4.71,sIEI)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,weaponTierTwoItemEnchantmentIndex,47,44,45,4.71,sIEI)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addToDBCItemRandomProperties('of Power',pI++,weaponTierTwoItemEnchantmentIndex,44,45,0,4.71,sIEI)           /*Haste + Spellpower                        4.71% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,weaponTierTwoItemEnchantmentIndex,45,45,38,4.71,sIEI)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,weaponTierTwoItemEnchantmentIndex,45,33,44,4.71,sIEI)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addToDBCItemRandomProperties('of Renewal',pI++,weaponTierTwoItemEnchantmentIndex,34,33,0,4.71,sIEI)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,weaponTierTwoItemEnchantmentIndex,45,37,25,4.71,sIEI)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,weaponTierTwoItemEnchantmentIndex,45,38,37,4.71,sIEI)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addToDBCItemRandomProperties('of Life',pI++,weaponTierTwoItemEnchantmentIndex,36,34,0,4.71,sIEI)            /*Health + Health per 5                     4.71% Chance*/
addToDBCItemRandomProperties('of Swiftness',pI++,weaponTierTwoItemEnchantmentIndex,44,37,38,4.71,sIEI)      /*Haste + Crit + Hit                        4.71% Chance*/
addToDBCItemRandomProperties('of Balance',pI++,weaponTierTwoItemEnchantmentIndex,41,37,42,4.71,sIEI)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addToDBCItemRandomProperties('of Aggression',pI++,weaponTierTwoItemEnchantmentIndex,41,44,42,4.71,sIEI)     /*Agility + Haste + Attackpower             4.71% Chance*/
addToDBCItemRandomProperties('of Power',pI++,weaponTierTwoItemEnchantmentIndex,44,42,0,4.71,sIEI)           /*Haste + Attackpower                       4.71% Chance*/
addToDBCItemRandomProperties('of Lethality',pI++,weaponTierTwoItemEnchantmentIndex,42,42,38,4.71,sIEI)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addToDBCItemRandomProperties('of Stealth',pI++,weaponTierTwoItemEnchantmentIndex,42,34,44,4.71,sIEI)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addToDBCItemRandomProperties('of Vanishing',pI++,weaponTierTwoItemEnchantmentIndex,41,27,28,4.71,sIEI)      /*Agility, Dodge, Parry                     4.71% Chance*/
addToDBCItemRandomProperties('of Bleeding',pI++,weaponTierTwoItemEnchantmentIndex,42,37,26,4.71,sIEI)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addToDBCItemRandomProperties('of Brutality',pI++,weaponTierTwoItemEnchantmentIndex,42,38,37,4.71,sIEI)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addToDBCItemRandomProperties('of Pain',pI++,weaponTierTwoItemEnchantmentIndex,43,37,42,4.71,sIEI)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addToDBCItemRandomProperties('of Revenge',pI++,weaponTierTwoItemEnchantmentIndex,43,44,42,4.71,sIEI)        /*Strength + Haste + Attackpower            4.71% Chance*/
addToDBCItemRandomProperties('of Resourcefulness',pI++,weaponTierTwoItemEnchantmentIndex,43,27,28,4.71,sIEI)/*Strength, Dodge, Parry                    4.71% Chance*/