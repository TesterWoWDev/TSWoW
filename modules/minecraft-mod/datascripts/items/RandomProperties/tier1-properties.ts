import { spellColorCode } from "../../functions/gem-functions"
import { addDBC, addSpell } from "../../functions/property-functions"
import { attackpower1 } from "../../spells/attack-power-spells"
//import { chanceHeal1, chanceHeal1C, chanceHeal1M, chanceLightning1C, chanceLightning1M, chanceShadow1, chanceStun1C, chanceStun1M } from "../../spells/chance-on-hit-spells"
import { chanceHeal1, chanceLightning1C, chanceLightning1M, chanceShadow1, chanceStun1C, chanceStun1M } from "../../spells/chance-on-hit-spells"
import { health1 } from "../../spells/health-increase-spells"
import { spellpower1 } from "../../spells/spell-power-spells"

let pI = 2500 //Property Index
let sIEI = 6000 //Spell Item Enchantment Index
export let clothTierOneItemEnchantmentIndex = 15000
export let leatherTierOneItemEnchantmentIndex = 15001
export let mailTierOneItemEnchantmentIndex = 15002
export let weaponTierOneItemEnchantmentIndex = 15003
export let trinketTierOneItemEnchantmentIndex = 16018


/*On Use : Health (-61)*/           addSpell(7,health1.ID,0,0,0,0,0,0,'Increases health by 350 for 18 seconds.',sIEI++)
/*On Use : Attack Power (-60)*/     addSpell(7,attackpower1.ID,0,0,0,0,0,0,spellColorCode +'Increases attack power by 50 for 10 seconds.',sIEI++)
/*On Use : Spell Power (-59)*/      addSpell(7,spellpower1.ID,0,0,0,0,0,0,spellColorCode +'Increases spell power by 50 for 10 seconds.',sIEI++)
/*Chance : Stun Baton (-58)*/       addSpell(3,chanceStun1M.ID,0,0,3,chanceStun1C.ID,0,0,spellColorCode + 'Chance: Stuns target for 1 seconds.',sIEI++)
/*Chance : Healing (-57)*/          addSpell(1,chanceHeal1.ID,0,0,0,0,0,0,spellColorCode + 'Chance: Heal 100.',sIEI++)
/*Chance : Healing (-57)*/       //   addSpell(3,chanceHeal1M.ID,0,0,3,chanceHeal1C.ID,0,0,spellColorCode + 'Chance: Heal 100.',sIEI++)
/*Chance : Thunderfury (-56)*/      addSpell(3,chanceLightning1M.ID,0,0,3,chanceLightning1C.ID,0,0,spellColorCode + 'Chance: Lightning Blast for 100 damage.',sIEI++)
/*Chance : Shadow Bolt (-55)*/      addSpell(1,chanceShadow1.ID,0,0,0,0,0,0,spellColorCode + '+ Chance: Shadow Bolt for 30 damage.',sIEI++)
/*Omnipotence Weapon (-54)*/        addSpell(5,3,8,8,5,4,8,8,'+8 Agility\n+8 Strength',sIEI++)
/*Omnipotence Weapon (-53)*/        addSpell(5,5,8,8,5,7,9,9,'+8 Intellect\n+9 Stamina',sIEI++)
/*Omnipotence Weapon (-52)*/        addSpell(5,45,16,16,5,38,16,16,'+16 Spell Power\n+16 Attack Power',sIEI++)
/*Omnipotence (-51)*/               addSpell(5,3,2,2,5,4,2,2,'+2 Agility\n+2 Strength',sIEI++)
/*Omnipotence (-50)*/               addSpell(5,5,2,2,5,7,2,2,'+2 Intellect\n+3 Stamina',sIEI++)
/*Omnipotence (-49)*/               addSpell(5,45,6,6,5,38,6,6,'+6 Spell Power\n+6 Attack Power',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/                   addSpell(5,42,16,16,0,0,0,0,'+16 Healing Done',sIEI++)
/*Intellect (-47)*/                 addSpell(5,5,8,8,0,0,0,0,'+8 Intellect',sIEI++)
/*Spirit (-46)*/                    addSpell(5,6,12,12,0,0,0,0,'+12 Spirit',sIEI++)
/*Spell Power (-45)*/               addSpell(5,45,16,16,0,0,0,0,'+16 Spell Power',sIEI++)
/*Haste Rating (-44)*/              addSpell(5,36,8,8,0,0,0,0,'+8 Haste Rating',sIEI++)
/*Strength (-43)*/                  addSpell(5,4,8,8,0,0,0,0,'+8 Strength',sIEI++)
/*Attack Power (-42)*/              addSpell(5,38,16,16,0,0,0,0,'+16 Attack Power',sIEI++)
/*Agility (-41)*/                   addSpell(5,3,8,8,0,0,0,0,'+8 Agility',sIEI++)
/*Ranged Attack Power (-40)*/       addSpell(5,39,16,16,0,0,0,0,'+16 Ranged Attack Power',sIEI++)
/*Stamina (-39)*/                   addSpell(5,7,9,9,0,0,0,0,'+9 Stamina',sIEI++)
/*Hit Rating (-38)*/                addSpell(5,31,12,12,0,0,0,0,'+12 Hit Rating',sIEI++)
/*Critical Strike (-37)*/           addSpell(5,32,14,14,0,0,0,0,'+14 Critical Strike Rating',sIEI++)
/*Health (-36)*/                    addSpell(5,1,175,175,0,0,0,0,'+175 Health',sIEI++)
/*Mana (-35)*/                      addSpell(5,2,150,150,0,0,0,0,'+150 Mana',sIEI++)
/*Health per 5 (-34)*/              addSpell(5,46,14,14,0,0,0,0,'+14 Health Per Second',sIEI++)
/*Mana per 5 (-33)*/                addSpell(5,43,14,14,0,0,0,0,'+14 Mana Per Second',sIEI++)
/*Block Rating (-32)*/              addSpell(5,15,6,6,0,0,0,0,'+6 Block Rating',sIEI++)
/*Expertise Rating (-31)*/          addSpell(5,37,6,6,0,0,0,0,'+6 Expertise Rating',sIEI++)
/*Defense Rating (-30)*/            addSpell(5,12,6,6,0,0,0,0,'+6 Defense Rating',sIEI++)
/*Dodge Rating (-27)*/              addSpell(5,13,6,6,0,0,0,0,'+6 Dodge Rating',sIEI++)
/*Parry Rating (-28)*/              addSpell(5,14,6,6,0,0,0,0,'+6 Parry Rating',sIEI++)
/*Resilience Rating (-27)*/         addSpell(5,35,2,2,0,0,0,0,'+2 Resilience Rating',sIEI++)
/*Armor Penetration (-26)*/         addSpell(5,44,4,4,0,0,0,0,'+4 Armor Penetration',sIEI++)
/*Spell Penetration (-25)*/         addSpell(5,47,4,4,0,0,0,0,'+4 Spell Penetration',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/                   addSpell(5,42,6,6,0,0,0,0,'+6 Healing Done',sIEI++)
/*Intellect (-23)*/                 addSpell(5,5,2,2,0,0,0,0,'+2 Intellect',sIEI++)
/*Spirit (-22)*/                    addSpell(5,6,3,3,0,0,0,0,'+3 Spirit',sIEI++)
/*Spell Power (-21)*/               addSpell(5,45,6,6,0,0,0,0,'+6 Spell Power',sIEI++)
/*Haste Rating (-20)*/              addSpell(5,36,3,3,0,0,0,0,'+3 Haste Rating',sIEI++)
/*Strength (-19)*/                  addSpell(5,4,2,2,0,0,0,0,'+2 Strength',sIEI++)
/*Attack Power (-18)*/              addSpell(5,38,6,6,0,0,0,0,'+6 Attack Power',sIEI++)
/*Agility (-17)*/                   addSpell(5,3,2,2,0,0,0,0,'+2 Agility',sIEI++)
/*Ranged Attack Power (-16)*/       addSpell(5,39,3,3,0,0,0,0,'+3 Ranged Attack Power',sIEI++)
/*Stamina (-15)*/                   addSpell(5,7,3,3,0,0,0,0,'+3 Stamina',sIEI++)
/*Hit Rating (-14)*/                addSpell(5,31,5,5,0,0,0,0,'+5 Hit Rating',sIEI++)
/*Critical Strike (-13)*/           addSpell(5,32,4,4,0,0,0,0,'+4 Critical Strike Rating',sIEI++)
/*Health (-12)*/                    addSpell(5,1,75,75,0,0,0,0,'+75 Health',sIEI++)
/*Mana (-11)*/                      addSpell(5,2,50,50,0,0,0,0,'+50 Mana',sIEI++)
/*Health per 5 (-10)*/              addSpell(5,46,4,4,0,0,0,0,'+4 Health Per Second',sIEI++)
/*Mana per 5 (-9)*/                 addSpell(5,43,4,4,0,0,0,0,'+4 Mana Per Second',sIEI++)
/*Block Rating (-8)*/               addSpell(5,15,3,3,0,0,0,0,'+3 Block Rating',sIEI++)
/*Expertise Rating (-7)*/           addSpell(5,37,3,3,0,0,0,0,'+3 Expertise Rating',sIEI++)
/*Defense Rating (-6)*/             addSpell(5,12,3,3,0,0,0,0,'+3 Defense Rating',sIEI++)
/*Dodge Rating (-5)*/               addSpell(5,13,3,3,0,0,0,0,'+3 Dodge Rating',sIEI++)
/*Parry Rating (-4)*/               addSpell(5,14,3,3,0,0,0,0,'+3 Parry Rating',sIEI++)
/*Resilience Rating (-3)*/          addSpell(5,35,1,1,0,0,0,0,'+1 Resilience Rating',sIEI++)
/*Armor Penetration (-2)*/          addSpell(5,44,2,2,0,0,0,0,'+2 Armor Penetration',sIEI++)
/*Spell Penetration (-1)*/          addSpell(5,47,2,2,0,0,0,0,'+2 Spell Penetration',sIEI++)

// Trinkets : On Use Effects
addDBC('of Recurring Power',pI++,trinketTierOneItemEnchantmentIndex,59,39,47,1,sIEI)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addDBC('of Escalating Power',pI++,trinketTierOneItemEnchantmentIndex,60,39,43,1,sIEI)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addDBC('of Escalating Power',pI++,trinketTierOneItemEnchantmentIndex,60,39,41,1,sIEI)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addDBC('of the Jailer',pI++,trinketTierOneItemEnchantmentIndex,58,38,37,1,sIEI)            /*Chance to Stun + Hit + Crit                    1% Chance*/
addDBC('of the Lightning Thief',pI++,trinketTierOneItemEnchantmentIndex,56,44,31,1,sIEI)   /*Chance to Thunderfury + Haste + Expertise            1% Chance*/
addDBC('of the Immortal',pI++,trinketTierOneItemEnchantmentIndex,57,36,37,1,sIEI)          /*Chance to Heal + Health + Crit                   1% Chance*/
addDBC('of the Shadow Storm',pI++,trinketTierOneItemEnchantmentIndex,55,45,42,1,sIEI)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Chance on Hit Effects
addDBC('of the Jailer',pI++,weaponTierOneItemEnchantmentIndex,58,0,0,1,sIEI)            /*Chance to Stun                    1% Chance*/
addDBC('of the Lightning Thief',pI++,weaponTierOneItemEnchantmentIndex,56,0,0,1,sIEI)   /*Chance to Thunderfury             1% Chance*/
addDBC('of the Immortal',pI++,weaponTierOneItemEnchantmentIndex,57,0,0,1,sIEI)          /*Chance to Heal                    1% Chance*/
addDBC('of the Shadow Storm',pI++,weaponTierOneItemEnchantmentIndex,55,0,0,1,sIEI)      /*Chance to Send Shadowbolts        1% Chance*/

// Omnipotence Chances
addDBC('of the Omnipotent',pI++,clothTierOneItemEnchantmentIndex,49,50,51,1,sIEI)     /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',pI++,leatherTierOneItemEnchantmentIndex,49,50,51,1,sIEI)   /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',pI++,mailTierOneItemEnchantmentIndex,49,50,51,1,sIEI)      /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',pI++,weaponTierOneItemEnchantmentIndex,52,53,54,1,sIEI)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items [10]
addDBC('of Blasphemy',pI++,clothTierOneItemEnchantmentIndex,23,22,21,9.9,sIEI)     /*Intellect + Spirit + Spellpower           9.9% Chance*/ 
addDBC('of Potency',pI++,clothTierOneItemEnchantmentIndex,23,20,21,9.9,sIEI)       /*Intellect + Haste + Spellpower            9.9% Chance*/
addDBC('of Power',pI++,clothTierOneItemEnchantmentIndex,20,21,0,9.9,sIEI)          /*Haste + Spellpower                        9.9% Chance*/
addDBC('of Smiting',pI++,clothTierOneItemEnchantmentIndex,21,21,14,9.9,sIEI)       /*Spellpower + Spellpower + Hit             9.9% Chance*/
addDBC('of Healing',pI++,clothTierOneItemEnchantmentIndex,21,9,20,9.9,sIEI)        /*Spellpower + Mana per 5 + Haste           9.9% Chance*/
addDBC('of Renewal',pI++,clothTierOneItemEnchantmentIndex,10,9,0,9.9,sIEI)         /*Health per 5 + Mana per 5                 9.9% Chance*/
addDBC('of Blasting',pI++,clothTierOneItemEnchantmentIndex,21,13,1,9.9,sIEI)       /*Spellpower + Crit + Spell Pen             9.9% Chance*/
addDBC('of Destruction',pI++,clothTierOneItemEnchantmentIndex,21,14,13,9.9,sIEI)   /*Spellpower + Hit + Crit                   9.9% Chance*/
addDBC('of Life',pI++,clothTierOneItemEnchantmentIndex,12,10,0,9.9,sIEI)           /*Health + Health per 5                     9.9% Chance*/
addDBC('of Swiftness',pI++,clothTierOneItemEnchantmentIndex,20,14,13,9.9,sIEI)     /*Haste + Crit + Hit                        9.9% Chance*/

// Leather Items - MELEE [15]
addDBC('of Balance',pI++,leatherTierOneItemEnchantmentIndex,17,13,18,6.6,sIEI)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addDBC('of Aggression',pI++,leatherTierOneItemEnchantmentIndex,17,20,18,6.6,sIEI)  /*Agility + Haste + Attackpower             6.6% Chance*/
addDBC('of Power',pI++,leatherTierOneItemEnchantmentIndex,20,18,0,6.6,sIEI)        /*Haste + Attackpower                       6.6% Chance*/
addDBC('of Lethality',pI++,leatherTierOneItemEnchantmentIndex,18,18,14,6.6,sIEI)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addDBC('of Stealth',pI++,leatherTierOneItemEnchantmentIndex,18,10,20,6.6,sIEI)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addDBC('of Vanishing',pI++,leatherTierOneItemEnchantmentIndex,5,4,17,6.6,sIEI)     /*Agility, Dodge, Parry                     6.6% Chance*/
addDBC('of Bleeding',pI++,leatherTierOneItemEnchantmentIndex,18,13,2,6.6,sIEI)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addDBC('of Brutality',pI++,leatherTierOneItemEnchantmentIndex,18,14,13,6.6,sIEI)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',pI++,leatherTierOneItemEnchantmentIndex,23,22,21,6.6,sIEI)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addDBC('of Potency',pI++,leatherTierOneItemEnchantmentIndex,23,20,21,6.6,sIEI)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addDBC('of Power',pI++,leatherTierOneItemEnchantmentIndex,20,21,0,6.6,sIEI)          /*Haste + Spellpower                        6.6% Chance*/
addDBC('of Smiting',pI++,leatherTierOneItemEnchantmentIndex,21,21,14,6.6,sIEI)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addDBC('of Healing',pI++,leatherTierOneItemEnchantmentIndex,21,9,20,6.6,sIEI)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addDBC('of Blasting',pI++,leatherTierOneItemEnchantmentIndex,21,13,1,6.6,sIEI)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addDBC('of Destruction',pI++,leatherTierOneItemEnchantmentIndex,21,14,13,6.6,sIEI)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items [17]
addDBC('of Pain',pI++,mailTierOneItemEnchantmentIndex,19,13,18,5.82,sIEI)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addDBC('of Revenge',pI++,mailTierOneItemEnchantmentIndex,19,20,18,5.82,sIEI)        /*Strength + Haste + Attackpower            5.82% Chance*/
addDBC('of Brutality',pI++,mailTierOneItemEnchantmentIndex,20,18,0,5.82,sIEI)       /*Haste + Attackpower                       5.82% Chance*/
addDBC('of Agony',pI++,mailTierOneItemEnchantmentIndex,18,18,14,5.82,sIEI)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addDBC('of Berserking',pI++,mailTierOneItemEnchantmentIndex,18,10,20,5.82,sIEI)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addDBC('of Resourcefulness',pI++,mailTierOneItemEnchantmentIndex,5,4,19,5.82,sIEI)  /*Strength, Dodge, Parry                    5.82% Chance*/
addDBC('of Remorse',pI++,mailTierOneItemEnchantmentIndex,18,13,2,5.82,sIEI)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addDBC('of Demise',pI++,mailTierOneItemEnchantmentIndex,18,14,13,5.82,sIEI)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addDBC('of Life',pI++,mailTierOneItemEnchantmentIndex,12,10,0,5.82,sIEI)            /*Health + Health per 5                     5.82% Chance*/
addDBC('of Swiftness',pI++,mailTierOneItemEnchantmentIndex,20,14,13,5.82,sIEI)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',pI++,mailTierOneItemEnchantmentIndex,23,22,21,5.82,sIEI)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addDBC('of Potency',pI++,mailTierOneItemEnchantmentIndex,23,20,21,5.82,sIEI)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addDBC('of Power',pI++,mailTierOneItemEnchantmentIndex,20,21,0,5.82,sIEI)          /*Haste + Spellpower                        5.82% Chance*/
addDBC('of Smiting',pI++,mailTierOneItemEnchantmentIndex,21,21,14,5.82,sIEI)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addDBC('of Healing',pI++,mailTierOneItemEnchantmentIndex,21,9,20,5.82,sIEI)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addDBC('of Blasting',pI++,mailTierOneItemEnchantmentIndex,21,13,1,5.82,sIEI)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addDBC('of Destruction',pI++,mailTierOneItemEnchantmentIndex,21,14,13,5.82,sIEI)   /*Spellpower + Hit + Crit                   5.82% Chance*/


// Weapon Enchants [21]
addDBC('of Blasphemy',pI++,weaponTierOneItemEnchantmentIndex,47,46,45,4.71,sIEI)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addDBC('of Potency',pI++,weaponTierOneItemEnchantmentIndex,47,44,45,4.71,sIEI)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addDBC('of Power',pI++,weaponTierOneItemEnchantmentIndex,44,45,0,4.71,sIEI)           /*Haste + Spellpower                        4.71% Chance*/
addDBC('of Smiting',pI++,weaponTierOneItemEnchantmentIndex,45,45,38,4.71,sIEI)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addDBC('of Healing',pI++,weaponTierOneItemEnchantmentIndex,45,33,44,4.71,sIEI)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addDBC('of Renewal',pI++,weaponTierOneItemEnchantmentIndex,34,33,0,4.71,sIEI)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addDBC('of Blasting',pI++,weaponTierOneItemEnchantmentIndex,45,37,25,4.71,sIEI)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addDBC('of Destruction',pI++,weaponTierOneItemEnchantmentIndex,45,38,37,4.71,sIEI)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addDBC('of Life',pI++,weaponTierOneItemEnchantmentIndex,36,34,0,4.71,sIEI)            /*Health + Health per 5                     4.71% Chance*/
addDBC('of Swiftness',pI++,weaponTierOneItemEnchantmentIndex,44,37,38,4.71,sIEI)      /*Haste + Crit + Hit                        4.71% Chance*/
addDBC('of Balance',pI++,weaponTierOneItemEnchantmentIndex,41,37,42,4.71,sIEI)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addDBC('of Aggression',pI++,weaponTierOneItemEnchantmentIndex,41,44,42,4.71,sIEI)     /*Agility + Haste + Attackpower             4.71% Chance*/
addDBC('of Power',pI++,weaponTierOneItemEnchantmentIndex,44,42,0,4.71,sIEI)           /*Haste + Attackpower                       4.71% Chance*/
addDBC('of Lethality',pI++,weaponTierOneItemEnchantmentIndex,42,42,38,4.71,sIEI)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addDBC('of Stealth',pI++,weaponTierOneItemEnchantmentIndex,42,34,44,4.71,sIEI)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addDBC('of Vanishing',pI++,weaponTierOneItemEnchantmentIndex,41,27,28,4.71,sIEI)      /*Agility, Dodge, Parry                     4.71% Chance*/
addDBC('of Bleeding',pI++,weaponTierOneItemEnchantmentIndex,42,37,26,4.71,sIEI)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addDBC('of Brutality',pI++,weaponTierOneItemEnchantmentIndex,42,38,37,4.71,sIEI)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addDBC('of Pain',pI++,weaponTierOneItemEnchantmentIndex,43,37,42,4.71,sIEI)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addDBC('of Revenge',pI++,weaponTierOneItemEnchantmentIndex,43,44,42,4.71,sIEI)        /*Strength + Haste + Attackpower            4.71% Chance*/
addDBC('of Resourcefulness',pI++,weaponTierOneItemEnchantmentIndex,43,27,28,4.71,sIEI)/*Strength, Dodge, Parry                    4.71% Chance*/