import { addToDBCSpellItemEnchantment, addToDBCItemRandomProperties } from "../../functions/dbc-functions"
import { spellColorCode } from "../../functions/gem-functions"
import { attackpower1 } from "../../spells/attack-power-spells"
import { chanceHeal1, chanceHeal1C, chanceHeal1M, chanceLightning1C, chanceLightning1M, chanceShadow1, chanceStun1C, chanceStun1M } from "../../spells/chance-on-hit-spells"
//import { chanceHeal1, chanceLightning1C, chanceLightning1M, chanceShadow1, chanceStun1C, chanceStun1M } from "../../spells/chance-on-hit-spells"
import { health1 } from "../../spells/health-increase-spells"
import { spellpower1 } from "../../spells/spell-power-spells"

let pI = 2500 //Property Index
let sIEI = 6000 //Spell Item Enchantment Index
export let clothTierOneItemEnchantmentIndex = 15000
export let leatherTierOneItemEnchantmentIndex = 15001
export let mailTierOneItemEnchantmentIndex = 15002
export let weaponTierOneItemEnchantmentIndex = 15003
export let trinketTierOneItemEnchantmentIndex = 16018


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hybrid Templates
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Stamina + Strength 			(-105)*/             addToDBCSpellItemEnchantment(5,7,3,3,4,3,3,0,'+3 Stamina\n+3 Strength',sIEI++)
/*Stamina + Agiity	 			(-104)*/             addToDBCSpellItemEnchantment(5,7,3,3,3,3,3,0,'+3 Stamina\n+3 Agility',sIEI++)
/*Stamina + Attack Power 		(-103)*/             addToDBCSpellItemEnchantment(5,7,3,3,38,6,6,0,'+3 Stamina\n+6 Attack Power',sIEI++)
/*Stamina + Intellect 			(-102)*/             addToDBCSpellItemEnchantment(5,7,3,3,5,3,3,0,'+3 Stamina\n+3 Intellect',sIEI++)
/*Stamina + Spell Power 		(-101)*/             addToDBCSpellItemEnchantment(5,7,3,3,45,6,6,0,'+3 Stamina\n+6 Spell Power',sIEI++)
/*Stamina + Spirit 				(-100)*/             addToDBCSpellItemEnchantment(5,7,3,3,6,3,3,0,'+3 Stamina\n+3 Spirit',sIEI++)
/*Stamina + Haste Rating 		(-99)*/              addToDBCSpellItemEnchantment(5,7,3,3,36,5,5,0,'+3 Stamina\n+5 Haste Rating',sIEI++)
/*Stamina + Block Rating 		(-98)*/              addToDBCSpellItemEnchantment(5,7,3,3,15,5,5,0,'+3 Stamina\n+5 Block Rating',sIEI++)
/*Stamina + Dodge Rating 		(-97)*/              addToDBCSpellItemEnchantment(5,7,3,3,13,5,5,0,'+3 Stamina\n+5 Dodge Rating',sIEI++)
/*Stamina + Parry Rating 		(-96)*/              addToDBCSpellItemEnchantment(5,7,3,3,14,5,5,0,'+3 Stamina\n+5 Parry Rating',sIEI++)
/*Stamina + Hit Rating 			(-95)*/              addToDBCSpellItemEnchantment(5,7,3,3,31,5,5,0,'+3 Stamina\n+5 Hit Rating',sIEI++)
/*Stamina + Armor Penetration 	(-94)*/              addToDBCSpellItemEnchantment(5,7,3,3,44,5,5,0,'+3 Stamina\n+5 Armor Penetration',sIEI++)
/*Stamina + Critical Strike 	(-93)*/              addToDBCSpellItemEnchantment(5,7,3,3,32,5,5,0,'+3 Stamina\n+5 Critical Strike Rating',sIEI++)
/*Stamina + Expertise 			(-92)*/              addToDBCSpellItemEnchantment(5,7,3,3,37,5,5,0,'+3 Stamina\n+5 Expertise Rating',sIEI++)

/*Strength + Agility 			(-91)*/              addToDBCSpellItemEnchantment(5,4,3,3,3,5,5,0,'+3 Strength\n+5 Agility',sIEI++)
/*Strength + Stamina 			(-90)*/              addToDBCSpellItemEnchantment(5,4,3,3,7,5,5,0,'+3 Strength\n+5 Stamina',sIEI++)
/*Strength + Attack Power	 	(-89)*/              addToDBCSpellItemEnchantment(5,4,3,3,38,5,5,0,'+3 Strength\n+5 Attack Power',sIEI++)
/*Strength + Haste Rating 		(-88)*/              addToDBCSpellItemEnchantment(5,4,3,3,36,5,5,0,'+3 Strength\n+5 Haste Rating',sIEI++)
/*Strength + Block Rating 		(-87)*/              addToDBCSpellItemEnchantment(5,4,3,3,15,5,5,0,'+3 Strength\n+5 Block Rating',sIEI++)
/*Strength + Dodge Rating 		(-86)*/              addToDBCSpellItemEnchantment(5,4,3,3,13,5,5,0,'+3 Strength\n+5 Dodge Rating',sIEI++)
/*Strength + Parry Rating 		(-85)*/              addToDBCSpellItemEnchantment(5,4,3,3,14,5,5,0,'+3 Strength\n+5 Parry Rating',sIEI++)
/*Strength + Hit Rating 		(-84)*/              addToDBCSpellItemEnchantment(5,4,3,3,31,5,5,0,'+3 Strength\n+5 Hit Rating',sIEI++)
/*Strength + Armor Penetration 	(-83)*/              addToDBCSpellItemEnchantment(5,4,3,3,44,5,5,0,'+3 Strength\n+5 Armor Penetration',sIEI++)
/*Strength + Critical Strike 	(-82)*/              addToDBCSpellItemEnchantment(5,4,3,3,32,5,5,0,'+3 Strength\n+5 Critical Strike Rating',sIEI++)
/*Strength + Expertise 			(-81)*/              addToDBCSpellItemEnchantment(5,4,3,3,37,5,5,0,'+3 Strength\n+5 Expertise Rating',sIEI++)

/*Agility + Stamina 			(-80)*/              addToDBCSpellItemEnchantment(5,3,3,3,7,5,5,0,'+3 Agility\n+5 Stamina',sIEI++)
/*Agility + Attack Power	 	(-79)*/              addToDBCSpellItemEnchantment(5,3,3,3,38,5,5,0,'+3 Agility\n+5 Attack Power',sIEI++)
/*Agility + Haste Rating 		(-78)*/              addToDBCSpellItemEnchantment(5,3,3,3,36,5,5,0,'+3 Agility\n+5 Haste Rating',sIEI++)
/*Agility + Block Rating 		(-77)*/              addToDBCSpellItemEnchantment(5,3,3,3,15,5,5,0,'+3 Agility\n+5 Block Rating',sIEI++)
/*Agility + Dodge Rating 		(-76)*/              addToDBCSpellItemEnchantment(5,3,3,3,13,5,5,0,'+3 Agility\n+5 Dodge Rating',sIEI++)
/*Agility + Parry Rating 		(-75)*/              addToDBCSpellItemEnchantment(5,3,3,3,14,5,5,0,'+3 Agility\n+5 Parry Rating',sIEI++)
/*Agility + Hit Rating 			(-74)*/              addToDBCSpellItemEnchantment(5,3,3,3,31,5,5,0,'+3 Agility\n+5 Hit Rating',sIEI++)
/*Agility + Armor Penetration 	(-73)*/              addToDBCSpellItemEnchantment(5,3,3,3,44,5,5,0,'+3 Agility\n+5 Armor Penetration',sIEI++)
/*Agility + Critical Strike 	(-72)*/              addToDBCSpellItemEnchantment(5,3,3,3,32,5,5,0,'+3 Agility\n+5 Critical Strike Rating',sIEI++)
/*Agility + Expertise 			(-71)*/              addToDBCSpellItemEnchantment(5,3,3,3,37,5,5,0,'+3 Agility\n+5 Expertise Rating',sIEI++)

/*Intellect + Stamina 			(-70)*/              addToDBCSpellItemEnchantment(5,5,3,3,7,5,5,0,'+3 Intellect\n+5 Stamina',sIEI++)
/*Intellect + Spell Power 		(-69)*/              addToDBCSpellItemEnchantment(5,5,3,3,45,5,5,0,'+3 Intellect\n+5 Spell Power',sIEI++)
/*Intellect + Haste Rating 		(-68)*/              addToDBCSpellItemEnchantment(5,5,3,3,36,5,5,0,'+3 Intellect\n+5 Haste Rating',sIEI++)
/*Intellect + Hit Rating 		(-67)*/              addToDBCSpellItemEnchantment(5,5,3,3,31,5,5,0,'+3 Intellect\n+5 Hit Rating',sIEI++)
/*Intellect + Spell Penetration	(-66)*/              addToDBCSpellItemEnchantment(5,5,3,3,47,5,5,0,'+3 Intellect\n+5 Spell Penetration',sIEI++)
/*Intellect + Critical Strike 	(-65)*/              addToDBCSpellItemEnchantment(5,5,3,3,32,5,5,0,'+3 Intellect\n+5 Critical Strike Rating',sIEI++)
/*Intellect + Mana per 5 		(-64)*/              addToDBCSpellItemEnchantment(5,5,3,3,43,5,5,0,'+3 Intellect\n+5 Mana per 5',sIEI++)
/*Intellect + Expertise 		(-63)*/              addToDBCSpellItemEnchantment(5,5,3,3,37,5,5,0,'+3 Intellect\n+5 Expertise Rating',sIEI++)
/*Intellect + Spirit 			(-62)*/              addToDBCSpellItemEnchantment(5,5,3,3,6,5,5,0,'+3 Intellect\n+5 Spirit',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Special Templates
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*On Use : Health (-61)*/           addToDBCSpellItemEnchantment(7,health1.ID,0,0,0,0,0,0,'Increases health by 350 for 18 seconds.',sIEI++)
/*On Use : Attack Power (-60)*/     addToDBCSpellItemEnchantment(7,attackpower1.ID,0,0,0,0,0,0,spellColorCode +'Increases attack power by 50 for 10 seconds.',sIEI++)
/*On Use : Spell Power (-59)*/      addToDBCSpellItemEnchantment(7,spellpower1.ID,0,0,0,0,0,0,spellColorCode +'Increases spell power by 50 for 10 seconds.',sIEI++)
/*Chance : Stun Baton (-58)*/       addToDBCSpellItemEnchantment(3,chanceStun1M.ID,0,0,3,chanceStun1C.ID,0,0,spellColorCode + 'Chance: Stuns target for 1 seconds.',sIEI++)
/*Chance : Healing (-57)*/        //  addSpell(1,chanceHeal1.ID,0,0,0,0,0,0,spellColorCode + 'Chance: Heal 100.',sIEI++)
/*Chance : Healing (-57)*/          addToDBCSpellItemEnchantment(3,chanceHeal1M.ID,0,0,3,chanceHeal1C.ID,0,0,spellColorCode + 'Chance: Heal 100.',sIEI++)
/*Chance : Thunderfury (-56)*/      addToDBCSpellItemEnchantment(3,chanceLightning1M.ID,0,0,3,chanceLightning1C.ID,0,0,spellColorCode + 'Chance: Lightning Blast for 100 damage.',sIEI++)
/*Chance : Shadow Bolt (-55)*/      addToDBCSpellItemEnchantment(1,chanceShadow1.ID,0,0,0,0,0,0,spellColorCode + '+ Chance: Shadow Bolt for 30 damage.',sIEI++)
/*Omnipotence Weapon (-54)*/        addToDBCSpellItemEnchantment(5,3,8,8,5,4,8,8,'+8 Agility\n+8 Strength',sIEI++)
/*Omnipotence Weapon (-53)*/        addToDBCSpellItemEnchantment(5,5,8,8,5,7,9,9,'+8 Intellect\n+9 Stamina',sIEI++)
/*Omnipotence Weapon (-52)*/        addToDBCSpellItemEnchantment(5,45,16,16,5,38,16,16,'+16 Spell Power\n+16 Attack Power',sIEI++)
/*Omnipotence (-51)*/               addToDBCSpellItemEnchantment(5,3,2,2,5,4,2,2,'+2 Agility\n+2 Strength',sIEI++)
/*Omnipotence (-50)*/               addToDBCSpellItemEnchantment(5,5,2,2,5,7,2,2,'+2 Intellect\n+3 Stamina',sIEI++)
/*Omnipotence (-49)*/               addToDBCSpellItemEnchantment(5,45,6,6,5,38,6,6,'+6 Spell Power\n+6 Attack Power',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Weapon Templates
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/                   addToDBCSpellItemEnchantment(5,42,16,16,0,0,0,0,'+16 Healing Done',sIEI++)
/*Intellect (-47)*/                 addToDBCSpellItemEnchantment(5,5,8,8,0,0,0,0,'+8 Intellect',sIEI++)
/*Spirit (-46)*/                    addToDBCSpellItemEnchantment(5,6,12,12,0,0,0,0,'+12 Spirit',sIEI++)
/*Spell Power (-45)*/               addToDBCSpellItemEnchantment(5,45,16,16,0,0,0,0,'+16 Spell Power',sIEI++)
/*Haste Rating (-44)*/              addToDBCSpellItemEnchantment(5,36,8,8,0,0,0,0,'+8 Haste Rating',sIEI++)
/*Strength (-43)*/                  addToDBCSpellItemEnchantment(5,4,8,8,0,0,0,0,'+8 Strength',sIEI++)
/*Attack Power (-42)*/              addToDBCSpellItemEnchantment(5,38,16,16,0,0,0,0,'+16 Attack Power',sIEI++)
/*Agility (-41)*/                   addToDBCSpellItemEnchantment(5,3,8,8,0,0,0,0,'+8 Agility',sIEI++)
/*Ranged Attack Power (-40)*/       addToDBCSpellItemEnchantment(5,39,16,16,0,0,0,0,'+16 Ranged Attack Power',sIEI++)
/*Stamina (-39)*/                   addToDBCSpellItemEnchantment(5,7,9,9,0,0,0,0,'+9 Stamina',sIEI++)
/*Hit Rating (-38)*/                addToDBCSpellItemEnchantment(5,31,12,12,0,0,0,0,'+12 Hit Rating',sIEI++)
/*Critical Strike (-37)*/           addToDBCSpellItemEnchantment(5,32,14,14,0,0,0,0,'+14 Critical Strike Rating',sIEI++)
/*Health (-36)*/                    addToDBCSpellItemEnchantment(5,1,175,175,0,0,0,0,'+175 Health',sIEI++)
/*Mana (-35)*/                      addToDBCSpellItemEnchantment(5,2,150,150,0,0,0,0,'+150 Mana',sIEI++)
/*Health per 5 (-34)*/              addToDBCSpellItemEnchantment(5,46,14,14,0,0,0,0,'+14 Health Per Second',sIEI++)
/*Mana per 5 (-33)*/                addToDBCSpellItemEnchantment(5,43,14,14,0,0,0,0,'+14 Mana Per Second',sIEI++)
/*Block Rating (-32)*/              addToDBCSpellItemEnchantment(5,15,6,6,0,0,0,0,'+6 Block Rating',sIEI++)
/*Expertise Rating (-31)*/          addToDBCSpellItemEnchantment(5,37,6,6,0,0,0,0,'+6 Expertise Rating',sIEI++)
/*Defense Rating (-30)*/            addToDBCSpellItemEnchantment(5,12,6,6,0,0,0,0,'+6 Defense Rating',sIEI++)
/*Dodge Rating (-27)*/              addToDBCSpellItemEnchantment(5,13,6,6,0,0,0,0,'+6 Dodge Rating',sIEI++)
/*Parry Rating (-28)*/              addToDBCSpellItemEnchantment(5,14,6,6,0,0,0,0,'+6 Parry Rating',sIEI++)
/*Resilience Rating (-27)*/         addToDBCSpellItemEnchantment(5,35,2,2,0,0,0,0,'+2 Resilience Rating',sIEI++)
/*Armor Penetration (-26)*/         addToDBCSpellItemEnchantment(5,44,4,4,0,0,0,0,'+4 Armor Penetration',sIEI++)
/*Spell Penetration (-25)*/         addToDBCSpellItemEnchantment(5,47,4,4,0,0,0,0,'+4 Spell Penetration',sIEI++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Armor Templates
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/                   addToDBCSpellItemEnchantment(5,42,6,6,0,0,0,0,'+6 Healing Done',sIEI++)
/*Intellect (-23)*/                 addToDBCSpellItemEnchantment(5,5,2,2,0,0,0,0,'+2 Intellect',sIEI++)
/*Spirit (-22)*/                    addToDBCSpellItemEnchantment(5,6,3,3,0,0,0,0,'+3 Spirit',sIEI++)
/*Spell Power (-21)*/               addToDBCSpellItemEnchantment(5,45,6,6,0,0,0,0,'+6 Spell Power',sIEI++)
/*Haste Rating (-20)*/              addToDBCSpellItemEnchantment(5,36,3,3,0,0,0,0,'+3 Haste Rating',sIEI++)
/*Strength (-19)*/                  addToDBCSpellItemEnchantment(5,4,2,2,0,0,0,0,'+2 Strength',sIEI++)
/*Attack Power (-18)*/              addToDBCSpellItemEnchantment(5,38,6,6,0,0,0,0,'+6 Attack Power',sIEI++)
/*Agility (-17)*/                   addToDBCSpellItemEnchantment(5,3,2,2,0,0,0,0,'+2 Agility',sIEI++)
/*Ranged Attack Power (-16)*/       addToDBCSpellItemEnchantment(5,39,3,3,0,0,0,0,'+3 Ranged Attack Power',sIEI++)
/*Stamina (-15)*/                   addToDBCSpellItemEnchantment(5,7,3,3,0,0,0,0,'+3 Stamina',sIEI++)
/*Hit Rating (-14)*/                addToDBCSpellItemEnchantment(5,31,5,5,0,0,0,0,'+5 Hit Rating',sIEI++)
/*Critical Strike (-13)*/           addToDBCSpellItemEnchantment(5,32,4,4,0,0,0,0,'+4 Critical Strike Rating',sIEI++)
/*Health (-12)*/                    addToDBCSpellItemEnchantment(5,1,75,75,0,0,0,0,'+75 Health',sIEI++)
/*Mana (-11)*/                      addToDBCSpellItemEnchantment(5,2,50,50,0,0,0,0,'+50 Mana',sIEI++)
/*Health per 5 (-10)*/              addToDBCSpellItemEnchantment(5,46,4,4,0,0,0,0,'+4 Health Per Second',sIEI++)
/*Mana per 5 (-9)*/                 addToDBCSpellItemEnchantment(5,43,4,4,0,0,0,0,'+4 Mana Per Second',sIEI++)
/*Block Rating (-8)*/               addToDBCSpellItemEnchantment(5,15,3,3,0,0,0,0,'+3 Block Rating',sIEI++)
/*Expertise Rating (-7)*/           addToDBCSpellItemEnchantment(5,37,3,3,0,0,0,0,'+3 Expertise Rating',sIEI++)
/*Defense Rating (-6)*/             addToDBCSpellItemEnchantment(5,12,3,3,0,0,0,0,'+3 Defense Rating',sIEI++)
/*Dodge Rating (-5)*/               addToDBCSpellItemEnchantment(5,13,3,3,0,0,0,0,'+3 Dodge Rating',sIEI++)
/*Parry Rating (-4)*/               addToDBCSpellItemEnchantment(5,14,3,3,0,0,0,0,'+3 Parry Rating',sIEI++)
/*Resilience Rating (-3)*/          addToDBCSpellItemEnchantment(5,35,1,1,0,0,0,0,'+1 Resilience Rating',sIEI++)
/*Armor Penetration (-2)*/          addToDBCSpellItemEnchantment(5,44,2,2,0,0,0,0,'+2 Armor Penetration',sIEI++)
/*Spell Penetration (-1)*/          addToDBCSpellItemEnchantment(5,47,2,2,0,0,0,0,'+2 Spell Penetration',sIEI++)

/*New Item Stats*/
//Cloth
addToDBCItemRandomProperties('of Treachery',pI++,clothTierOneItemEnchantmentIndex,62,63,0,9.9,sIEI)     /*Intellect + Spirit + Spellpower           9.9% Chance*/ 
addToDBCItemRandomProperties('of Anarchy',pI++,clothTierOneItemEnchantmentIndex,63,64,0,9.9,sIEI)       /*Intellect + Haste + Spellpower            9.9% Chance*/
addToDBCItemRandomProperties('of Torment',pI++,clothTierOneItemEnchantmentIndex,64,65,0,9.9,sIEI)          /*Haste + Spellpower                        9.9% Chance*/
addToDBCItemRandomProperties('of Warmth',pI++,clothTierOneItemEnchantmentIndex,65,66,0,9.9,sIEI)       /*Spellpower + Spellpower + Hit             9.9% Chance*/
addToDBCItemRandomProperties('of Dying Light',pI++,clothTierOneItemEnchantmentIndex,66,67,0,9.9,sIEI)        /*Spellpower + Mana per 5 + Haste           9.9% Chance*/
addToDBCItemRandomProperties('of Renewed Hope',pI++,clothTierOneItemEnchantmentIndex,67,68,0,9.9,sIEI)         /*Health per 5 + Mana per 5                 9.9% Chance*/
addToDBCItemRandomProperties('of Vigour',pI++,clothTierOneItemEnchantmentIndex,68,69,0,9.9,sIEI)       /*Spellpower + Crit + Spell Pen             9.9% Chance*/
addToDBCItemRandomProperties('of Torture',pI++,clothTierOneItemEnchantmentIndex,69,70,0,9.9,sIEI)   /*Spellpower + Hit + Crit                   9.9% Chance*/
addToDBCItemRandomProperties('of Heartrending',pI++,clothTierOneItemEnchantmentIndex,70,62,0,9.9,sIEI)           /*Health + Health per 5                     9.9% Chance*/

// Trinkets : On Use Effects
addToDBCItemRandomProperties('of Recurring Power',pI++,trinketTierOneItemEnchantmentIndex,59,39,47,1,sIEI)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addToDBCItemRandomProperties('of Escalating Power',pI++,trinketTierOneItemEnchantmentIndex,60,39,43,1,sIEI)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addToDBCItemRandomProperties('of Escalating Power',pI++,trinketTierOneItemEnchantmentIndex,60,39,41,1,sIEI)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addToDBCItemRandomProperties('of the Jailer',pI++,trinketTierOneItemEnchantmentIndex,58,38,37,1,sIEI)            /*Chance to Stun + Hit + Crit                    1% Chance*/
addToDBCItemRandomProperties('of the Lightning Thief',pI++,trinketTierOneItemEnchantmentIndex,56,44,31,1,sIEI)   /*Chance to Thunderfury + Haste + Expertise            1% Chance*/
addToDBCItemRandomProperties('of the Immortal',pI++,trinketTierOneItemEnchantmentIndex,57,36,37,1,sIEI)          /*Chance to Heal + Health + Crit                   1% Chance*/
addToDBCItemRandomProperties('of the Shadow Storm',pI++,trinketTierOneItemEnchantmentIndex,55,45,42,1,sIEI)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Trinkets : Normal Stats
addToDBCItemRandomProperties('of Oblivion',pI++,trinketTierOneItemEnchantmentIndex,55,45,42,1,sIEI)

// Chance on Hit Effects
addToDBCItemRandomProperties('of the Jailer',pI++,weaponTierOneItemEnchantmentIndex,58,0,0,1,sIEI)            /*Chance to Stun                    1% Chance*/
addToDBCItemRandomProperties('of the Lightning Thief',pI++,weaponTierOneItemEnchantmentIndex,56,0,0,1,sIEI)   /*Chance to Thunderfury             1% Chance*/
addToDBCItemRandomProperties('of the Immortal',pI++,weaponTierOneItemEnchantmentIndex,57,0,0,1,sIEI)          /*Chance to Heal                    1% Chance*/
addToDBCItemRandomProperties('of the Shadow Storm',pI++,weaponTierOneItemEnchantmentIndex,55,0,0,1,sIEI)      /*Chance to Send Shadowbolts        1% Chance*/

// Omnipotence Chances
addToDBCItemRandomProperties('of the Omnipotent',pI++,clothTierOneItemEnchantmentIndex,49,50,51,1,sIEI)     /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties('of the Omnipotent',pI++,leatherTierOneItemEnchantmentIndex,49,50,51,1,sIEI)   /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties('of the Omnipotent',pI++,mailTierOneItemEnchantmentIndex,49,50,51,1,sIEI)      /*Haste + Crit + Hit                        1% Chance*/
addToDBCItemRandomProperties('of the Omnipotent',pI++,weaponTierOneItemEnchantmentIndex,52,53,54,1,sIEI)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items [10]
addToDBCItemRandomProperties('of Blasphemy',pI++,clothTierOneItemEnchantmentIndex,23,22,21,9.9,sIEI)     /*Intellect + Spirit + Spellpower           9.9% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,clothTierOneItemEnchantmentIndex,23,20,21,9.9,sIEI)       /*Intellect + Haste + Spellpower            9.9% Chance*/
addToDBCItemRandomProperties('of Power',pI++,clothTierOneItemEnchantmentIndex,20,21,0,9.9,sIEI)          /*Haste + Spellpower                        9.9% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,clothTierOneItemEnchantmentIndex,21,21,14,9.9,sIEI)       /*Spellpower + Spellpower + Hit             9.9% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,clothTierOneItemEnchantmentIndex,21,9,20,9.9,sIEI)        /*Spellpower + Mana per 5 + Haste           9.9% Chance*/
addToDBCItemRandomProperties('of Renewal',pI++,clothTierOneItemEnchantmentIndex,10,9,0,9.9,sIEI)         /*Health per 5 + Mana per 5                 9.9% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,clothTierOneItemEnchantmentIndex,21,13,1,9.9,sIEI)       /*Spellpower + Crit + Spell Pen             9.9% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,clothTierOneItemEnchantmentIndex,21,14,13,9.9,sIEI)   /*Spellpower + Hit + Crit                   9.9% Chance*/
addToDBCItemRandomProperties('of Life',pI++,clothTierOneItemEnchantmentIndex,12,10,0,9.9,sIEI)           /*Health + Health per 5                     9.9% Chance*/
addToDBCItemRandomProperties('of Swiftness',pI++,clothTierOneItemEnchantmentIndex,20,14,13,9.9,sIEI)     /*Haste + Crit + Hit                        9.9% Chance*/

// Leather Items - MELEE [15]
addToDBCItemRandomProperties('of Balance',pI++,leatherTierOneItemEnchantmentIndex,17,13,18,6.6,sIEI)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addToDBCItemRandomProperties('of Aggression',pI++,leatherTierOneItemEnchantmentIndex,17,20,18,6.6,sIEI)  /*Agility + Haste + Attackpower             6.6% Chance*/
addToDBCItemRandomProperties('of Power',pI++,leatherTierOneItemEnchantmentIndex,20,18,0,6.6,sIEI)        /*Haste + Attackpower                       6.6% Chance*/
addToDBCItemRandomProperties('of Lethality',pI++,leatherTierOneItemEnchantmentIndex,18,18,14,6.6,sIEI)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addToDBCItemRandomProperties('of Stealth',pI++,leatherTierOneItemEnchantmentIndex,18,10,20,6.6,sIEI)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addToDBCItemRandomProperties('of Vanishing',pI++,leatherTierOneItemEnchantmentIndex,5,4,17,6.6,sIEI)     /*Agility, Dodge, Parry                     6.6% Chance*/
addToDBCItemRandomProperties('of Bleeding',pI++,leatherTierOneItemEnchantmentIndex,18,13,2,6.6,sIEI)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addToDBCItemRandomProperties('of Brutality',pI++,leatherTierOneItemEnchantmentIndex,18,14,13,6.6,sIEI)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addToDBCItemRandomProperties('of Blasphemy',pI++,leatherTierOneItemEnchantmentIndex,23,22,21,6.6,sIEI)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,leatherTierOneItemEnchantmentIndex,23,20,21,6.6,sIEI)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addToDBCItemRandomProperties('of Power',pI++,leatherTierOneItemEnchantmentIndex,20,21,0,6.6,sIEI)          /*Haste + Spellpower                        6.6% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,leatherTierOneItemEnchantmentIndex,21,21,14,6.6,sIEI)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,leatherTierOneItemEnchantmentIndex,21,9,20,6.6,sIEI)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,leatherTierOneItemEnchantmentIndex,21,13,1,6.6,sIEI)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,leatherTierOneItemEnchantmentIndex,21,14,13,6.6,sIEI)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items [17]
addToDBCItemRandomProperties('of Pain',pI++,mailTierOneItemEnchantmentIndex,19,13,18,5.82,sIEI)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addToDBCItemRandomProperties('of Revenge',pI++,mailTierOneItemEnchantmentIndex,19,20,18,5.82,sIEI)        /*Strength + Haste + Attackpower            5.82% Chance*/
addToDBCItemRandomProperties('of Brutality',pI++,mailTierOneItemEnchantmentIndex,20,18,0,5.82,sIEI)       /*Haste + Attackpower                       5.82% Chance*/
addToDBCItemRandomProperties('of Agony',pI++,mailTierOneItemEnchantmentIndex,18,18,14,5.82,sIEI)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addToDBCItemRandomProperties('of Berserking',pI++,mailTierOneItemEnchantmentIndex,18,10,20,5.82,sIEI)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addToDBCItemRandomProperties('of Resourcefulness',pI++,mailTierOneItemEnchantmentIndex,5,4,19,5.82,sIEI)  /*Strength, Dodge, Parry                    5.82% Chance*/
addToDBCItemRandomProperties('of Remorse',pI++,mailTierOneItemEnchantmentIndex,18,13,2,5.82,sIEI)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addToDBCItemRandomProperties('of Demise',pI++,mailTierOneItemEnchantmentIndex,18,14,13,5.82,sIEI)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addToDBCItemRandomProperties('of Life',pI++,mailTierOneItemEnchantmentIndex,12,10,0,5.82,sIEI)            /*Health + Health per 5                     5.82% Chance*/
addToDBCItemRandomProperties('of Swiftness',pI++,mailTierOneItemEnchantmentIndex,20,14,13,5.82,sIEI)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addToDBCItemRandomProperties('of Blasphemy',pI++,mailTierOneItemEnchantmentIndex,23,22,21,5.82,sIEI)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,mailTierOneItemEnchantmentIndex,23,20,21,5.82,sIEI)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addToDBCItemRandomProperties('of Power',pI++,mailTierOneItemEnchantmentIndex,20,21,0,5.82,sIEI)          /*Haste + Spellpower                        5.82% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,mailTierOneItemEnchantmentIndex,21,21,14,5.82,sIEI)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,mailTierOneItemEnchantmentIndex,21,9,20,5.82,sIEI)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,mailTierOneItemEnchantmentIndex,21,13,1,5.82,sIEI)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,mailTierOneItemEnchantmentIndex,21,14,13,5.82,sIEI)   /*Spellpower + Hit + Crit                   5.82% Chance*/

// Weapon Enchants [21]
addToDBCItemRandomProperties('of Blasphemy',pI++,weaponTierOneItemEnchantmentIndex,47,46,45,4.71,sIEI)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addToDBCItemRandomProperties('of Potency',pI++,weaponTierOneItemEnchantmentIndex,47,44,45,4.71,sIEI)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addToDBCItemRandomProperties('of Power',pI++,weaponTierOneItemEnchantmentIndex,44,45,0,4.71,sIEI)           /*Haste + Spellpower                        4.71% Chance*/
addToDBCItemRandomProperties('of Smiting',pI++,weaponTierOneItemEnchantmentIndex,45,45,38,4.71,sIEI)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addToDBCItemRandomProperties('of Healing',pI++,weaponTierOneItemEnchantmentIndex,45,33,44,4.71,sIEI)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addToDBCItemRandomProperties('of Renewal',pI++,weaponTierOneItemEnchantmentIndex,34,33,0,4.71,sIEI)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addToDBCItemRandomProperties('of Blasting',pI++,weaponTierOneItemEnchantmentIndex,45,37,25,4.71,sIEI)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addToDBCItemRandomProperties('of Destruction',pI++,weaponTierOneItemEnchantmentIndex,45,38,37,4.71,sIEI)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addToDBCItemRandomProperties('of Life',pI++,weaponTierOneItemEnchantmentIndex,36,34,0,4.71,sIEI)            /*Health + Health per 5                     4.71% Chance*/
addToDBCItemRandomProperties('of Swiftness',pI++,weaponTierOneItemEnchantmentIndex,44,37,38,4.71,sIEI)      /*Haste + Crit + Hit                        4.71% Chance*/
addToDBCItemRandomProperties('of Balance',pI++,weaponTierOneItemEnchantmentIndex,41,37,42,4.71,sIEI)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addToDBCItemRandomProperties('of Aggression',pI++,weaponTierOneItemEnchantmentIndex,41,44,42,4.71,sIEI)     /*Agility + Haste + Attackpower             4.71% Chance*/
addToDBCItemRandomProperties('of Power',pI++,weaponTierOneItemEnchantmentIndex,44,42,0,4.71,sIEI)           /*Haste + Attackpower                       4.71% Chance*/
addToDBCItemRandomProperties('of Lethality',pI++,weaponTierOneItemEnchantmentIndex,42,42,38,4.71,sIEI)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addToDBCItemRandomProperties('of Stealth',pI++,weaponTierOneItemEnchantmentIndex,42,34,44,4.71,sIEI)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addToDBCItemRandomProperties('of Vanishing',pI++,weaponTierOneItemEnchantmentIndex,41,27,28,4.71,sIEI)      /*Agility, Dodge, Parry                     4.71% Chance*/
addToDBCItemRandomProperties('of Bleeding',pI++,weaponTierOneItemEnchantmentIndex,42,37,26,4.71,sIEI)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addToDBCItemRandomProperties('of Brutality',pI++,weaponTierOneItemEnchantmentIndex,42,38,37,4.71,sIEI)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addToDBCItemRandomProperties('of Pain',pI++,weaponTierOneItemEnchantmentIndex,43,37,42,4.71,sIEI)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addToDBCItemRandomProperties('of Revenge',pI++,weaponTierOneItemEnchantmentIndex,43,44,42,4.71,sIEI)        /*Strength + Haste + Attackpower            4.71% Chance*/
addToDBCItemRandomProperties('of Resourcefulness',pI++,weaponTierOneItemEnchantmentIndex,43,27,28,4.71,sIEI)/*Strength, Dodge, Parry                    4.71% Chance*/