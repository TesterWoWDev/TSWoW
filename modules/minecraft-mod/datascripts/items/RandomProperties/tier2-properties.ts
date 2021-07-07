import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { redColorCode } from "../../functions/gem-functions"
import { attackpower2 } from "../../spells/attack-power-spells"
import { chanceHeal2, chanceLightning2, chanceShadow2, chanceStun2 } from "../../spells/chance-on-hit-spells"
import { health2 } from "../../spells/health-increase-spells"
import { spellpower2 } from "../../spells/spell-power-spells"

let PropertyIndex = 2650
let SpellItemEnchantmentIndex = 6150
export let clothTierTwoItemEnchantmentIndex = 15004
export let leatherTierTwoItemEnchantmentIndex = 15005
export let mailTierTwoItemEnchantmentIndex = 15006
export let weaponTierTwoItemEnchantmentIndex = 15007
export let trinketTierTwoItemEnchantmentIndex = 16017

/*On Use : Health (-61)*/           addSpell(7,health2.ID,0,0,0,0,0,0,'Increases health by 750 for 18 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Attack Power (-60)*/     addSpell(7,attackpower2.ID,0,0,0,0,0,0,'Increases attack power by 150 for 10 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Spell Power (-59)*/      addSpell(7,spellpower2.ID,0,0,0,0,0,0,'Increases spell power by 150 for 10 seconds.',SpellItemEnchantmentIndex++)
/*Chance : Shadow Bolt (-58)*/      addSpell(1,chanceStun2.ID,0,0,0,0,0,0,redColorCode + 'Chance: Stuns target for 2 seconds.',SpellItemEnchantmentIndex++)
/*Chance : Healing (-57)*/          addSpell(1,chanceHeal2.ID,0,0,0,0,0,0,redColorCode + 'Chance: Heal 250.',SpellItemEnchantmentIndex++)
/*Chance : Thunderfury (-56)*/      addSpell(1,chanceLightning2.ID,0,0,0,0,0,0,redColorCode + 'Chance: Lightning Blast for 175 damage.',SpellItemEnchantmentIndex++)
/*Chance : Shadow Bolt (-55)*/      addSpell(1,chanceShadow2.ID,0,0,0,0,0,0,redColorCode + 'Chance: Shadow Bolt for 80 damage.',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-54)*/        addSpell(5,3,14,14,5,4,14,14,'+14 Agility\n+14 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-53)*/        addSpell(5,5,14,14,5,7,16,16,'+14 Intellect\n+16 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-52)*/        addSpell(5,45,26,26,5,38,26,26,'+26 Spell Power\n+26 Attack Power',SpellItemEnchantmentIndex++)
/*Omnipotence (-51)*/               addSpell(5,3,4,4,5,4,4,4,'+4 Agility\n+4 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence (-50)*/               addSpell(5,5,4,4,5,7,6,6,'+4 Intellect\n+6 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence (-49)*/               addSpell(5,45,9,9,5,38,9,9,'+9 Spell Power\n+9 Attack Power',SpellItemEnchantmentIndex++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/                   addSpell(5,42,26,26,0,0,0,0,'+26 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-47)*/                 addSpell(5,5,14,14,0,0,0,0,'+14 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-46)*/                    addSpell(5,6,22,22,0,0,0,0,'+22 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-45)*/               addSpell(5,45,26,26,0,0,0,0,'+26 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-44)*/              addSpell(5,36,14,14,0,0,0,0,'+14 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-43)*/                  addSpell(5,4,14,14,0,0,0,0,'+14 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-42)*/              addSpell(5,38,26,26,0,0,0,0,'+26 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-41)*/                   addSpell(5,3,14,14,0,0,0,0,'+14 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-40)*/       addSpell(5,39,26,26,0,0,0,0,'+26 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-39)*/                   addSpell(5,7,16,16,0,0,0,0,'+16 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-38)*/                addSpell(5,31,22,22,0,0,0,0,'+22 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-37)*/           addSpell(5,32,24,24,0,0,0,0,'+24 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-36)*/                    addSpell(5,1,275,275,0,0,0,0,'+275 Health',SpellItemEnchantmentIndex++)
/*Mana (-35)*/                      addSpell(5,2,250,250,0,0,0,0,'+250 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-34)*/              addSpell(5,46,24,24,0,0,0,0,'+24 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-33)*/                addSpell(5,43,24,24,0,0,0,0,'+24 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-32)*/              addSpell(5,15,9,9,0,0,0,0,'+9 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-31)*/          addSpell(5,37,9,9,0,0,0,0,'+9 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-30)*/            addSpell(5,12,9,9,0,0,0,0,'+9 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-27)*/              addSpell(5,13,9,9,0,0,0,0,'+9 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-28)*/              addSpell(5,14,9,9,0,0,0,0,'+9 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-27)*/         addSpell(5,35,3,3,0,0,0,0,'+3 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-26)*/         addSpell(5,44,6,6,0,0,0,0,'+6 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-25)*/         addSpell(5,47,6,6,0,0,0,0,'+6 Spell Penetration',SpellItemEnchantmentIndex++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/                   addSpell(5,42,9,9,0,0,0,0,'+9 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-23)*/                 addSpell(5,5,4,4,0,0,0,0,'+4 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-22)*/                    addSpell(5,6,6,6,0,0,0,0,'+6 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-21)*/               addSpell(5,45,9,9,0,0,0,0,'+9 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-20)*/              addSpell(5,36,5,5,0,0,0,0,'+5 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-19)*/                  addSpell(5,4,4,4,0,0,0,0,'+4 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-18)*/              addSpell(5,38,9,9,0,0,0,0,'+9 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-17)*/                   addSpell(5,3,4,4,0,0,0,0,'+4 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-16)*/       addSpell(5,39,6,6,0,0,0,0,'+6 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-15)*/                   addSpell(5,7,6,6,0,0,0,0,'+6 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-14)*/                addSpell(5,31,9,9,0,0,0,0,'+9 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-13)*/           addSpell(5,32,8,8,0,0,0,0,'+8 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-12)*/                    addSpell(5,1,108,108,0,0,0,0,'+108 Health',SpellItemEnchantmentIndex++)
/*Mana (-11)*/                      addSpell(5,2,66,66,0,0,0,0,'+66 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-10)*/              addSpell(5,46,9,9,0,0,0,0,'+9 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-9)*/                 addSpell(5,43,9,9,0,0,0,0,'+9 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-8)*/               addSpell(5,15,5,5,0,0,0,0,'+5 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-7)*/           addSpell(5,37,5,5,0,0,0,0,'+5 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-6)*/             addSpell(5,12,5,5,0,0,0,0,'+5 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-5)*/               addSpell(5,13,5,5,0,0,0,0,'+5 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-4)*/               addSpell(5,14,5,5,0,0,0,0,'+5 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-3)*/          addSpell(5,35,2,2,0,0,0,0,'+2 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-2)*/          addSpell(5,44,3,3,0,0,0,0,'+3 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-1)*/          addSpell(5,47,3,3,0,0,0,0,'+3 Spell Penetration',SpellItemEnchantmentIndex++)

// Trinkets : On Use Effects
addDBC('of Recurring Power',PropertyIndex++,trinketTierTwoItemEnchantmentIndex,59,39,47,1)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierTwoItemEnchantmentIndex,60,39,43,1)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierTwoItemEnchantmentIndex,60,39,41,1)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,trinketTierTwoItemEnchantmentIndex,58,38,37,1)            /*Chance to Stun + Hit + Crit                    1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,trinketTierTwoItemEnchantmentIndex,56,44,31,1)   /*Chance to Thunderfury + Haste + Expertise            1% Chance*/
addDBC('of the Immortal',PropertyIndex++,trinketTierTwoItemEnchantmentIndex,57,36,37,1)          /*Chance to Heal + Health + Crit                   1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,trinketTierTwoItemEnchantmentIndex,55,45,42,1)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,58,0,0,1)            /*Chance to Stun                    1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,56,0,0,1)   /*Chance to Thunderfury             1% Chance*/
addDBC('of the Immortal',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,57,0,0,1)          /*Chance to Heal                    1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,55,0,0,1)      /*Chance to Send Shadowbolts        1% Chance*/

// Omnipotence Chances
addDBC('of the Omnipotent',PropertyIndex++,clothTierTwoItemEnchantmentIndex,49,50,51,1)     /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,49,50,51,1)   /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,mailTierTwoItemEnchantmentIndex,49,50,51,1)      /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,52,53,54,1)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items
addDBC('of Blasphemy',PropertyIndex++,clothTierTwoItemEnchantmentIndex,23,22,21,9.9)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,clothTierTwoItemEnchantmentIndex,23,20,21,9.9)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,clothTierTwoItemEnchantmentIndex,20,21,0,9.9)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,clothTierTwoItemEnchantmentIndex,21,21,14,9.9)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,clothTierTwoItemEnchantmentIndex,21,9,20,9.9)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,clothTierTwoItemEnchantmentIndex,10,9,0,9.9)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,clothTierTwoItemEnchantmentIndex,21,13,1,9.9)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,clothTierTwoItemEnchantmentIndex,21,14,13,9.9)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,clothTierTwoItemEnchantmentIndex,12,10,0,9.9)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,clothTierTwoItemEnchantmentIndex,20,14,13,9.9)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addDBC('of Balance',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,17,13,18,6.6)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addDBC('of Aggression',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,17,20,18,6.6)  /*Agility + Haste + Attackpower             6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,20,18,0,6.6)        /*Haste + Attackpower                       6.6% Chance*/
addDBC('of Lethality',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,18,18,14,6.6)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addDBC('of Stealth',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,18,10,20,6.6)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addDBC('of Vanishing',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,5,4,17,6.6)     /*Agility, Dodge, Parry                     6.6% Chance*/
addDBC('of Bleeding',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,18,13,2,6.6)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addDBC('of Brutality',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,18,14,13,6.6)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,23,22,21,6.6)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addDBC('of Potency',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,23,20,21,6.6)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,20,21,0,6.6)          /*Haste + Spellpower                        6.6% Chance*/
addDBC('of Smiting',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,21,21,14,6.6)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addDBC('of Healing',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,21,9,20,6.6)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addDBC('of Blasting',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,21,13,1,6.6)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addDBC('of Destruction',PropertyIndex++,leatherTierTwoItemEnchantmentIndex,21,14,13,6.6)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items - MELEE
addDBC('of Pain',PropertyIndex++,mailTierTwoItemEnchantmentIndex,19,13,18,5.82)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addDBC('of Revenge',PropertyIndex++,mailTierTwoItemEnchantmentIndex,19,20,18,5.82)        /*Strength + Haste + Attackpower            5.82% Chance*/
addDBC('of Brutality',PropertyIndex++,mailTierTwoItemEnchantmentIndex,20,18,0,5.82)       /*Haste + Attackpower                       5.82% Chance*/
addDBC('of Agony',PropertyIndex++,mailTierTwoItemEnchantmentIndex,18,18,14,5.82)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addDBC('of Berserking',PropertyIndex++,mailTierTwoItemEnchantmentIndex,18,10,20,5.82)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,mailTierTwoItemEnchantmentIndex,5,4,19,5.82)  /*Strength, Dodge, Parry                    5.82% Chance*/
addDBC('of Remorse',PropertyIndex++,mailTierTwoItemEnchantmentIndex,18,13,2,5.82)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addDBC('of Demise',PropertyIndex++,mailTierTwoItemEnchantmentIndex,18,14,13,5.82)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addDBC('of Life',PropertyIndex++,mailTierTwoItemEnchantmentIndex,12,10,0,5.82)            /*Health + Health per 5                     5.82% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierTwoItemEnchantmentIndex,20,14,13,5.82)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,mailTierTwoItemEnchantmentIndex,23,22,21,5.82)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addDBC('of Potency',PropertyIndex++,mailTierTwoItemEnchantmentIndex,23,20,21,5.82)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addDBC('of Power',PropertyIndex++,mailTierTwoItemEnchantmentIndex,20,21,0,5.82)          /*Haste + Spellpower                        5.82% Chance*/
addDBC('of Smiting',PropertyIndex++,mailTierTwoItemEnchantmentIndex,21,21,14,5.82)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addDBC('of Healing',PropertyIndex++,mailTierTwoItemEnchantmentIndex,21,9,20,5.82)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addDBC('of Blasting',PropertyIndex++,mailTierTwoItemEnchantmentIndex,21,13,1,5.82)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addDBC('of Destruction',PropertyIndex++,mailTierTwoItemEnchantmentIndex,21,14,13,5.82)   /*Spellpower + Hit + Crit                   5.82% Chance*/


// Weapon Enchants
addDBC('of Blasphemy',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,47,46,45,4.71)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addDBC('of Potency',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,47,44,45,4.71)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,44,45,0,4.71)           /*Haste + Spellpower                        4.71% Chance*/
addDBC('of Smiting',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,45,45,38,4.71)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addDBC('of Healing',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,45,33,44,4.71)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addDBC('of Renewal',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,34,33,0,4.71)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addDBC('of Blasting',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,45,37,25,4.71)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addDBC('of Destruction',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,45,38,37,4.71)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,36,34,0,4.71)            /*Health + Health per 5                     4.71% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,44,37,38,4.71)      /*Haste + Crit + Hit                        4.71% Chance*/
addDBC('of Balance',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,41,37,42,4.71)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addDBC('of Aggression',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,41,44,42,4.71)     /*Agility + Haste + Attackpower             4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,44,42,0,4.71)           /*Haste + Attackpower                       4.71% Chance*/
addDBC('of Lethality',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,42,42,38,4.71)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addDBC('of Stealth',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,42,34,44,4.71)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addDBC('of Vanishing',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,41,27,28,4.71)      /*Agility, Dodge, Parry                     4.71% Chance*/
addDBC('of Bleeding',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,42,37,26,4.71)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,42,38,37,4.71)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addDBC('of Pain',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,43,37,42,4.71)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addDBC('of Revenge',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,43,44,42,4.71)        /*Strength + Haste + Attackpower            4.71% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,weaponTierTwoItemEnchantmentIndex,43,27,28,4.71)/*Strength, Dodge, Parry                    4.71% Chance*/






function addDBC(name: string, propIndex: number, enchIndex:number, index1val: number, index2val: number, index3val: number, chance:number) {
    DBC_ItemRandomProperties.add(propIndex).Name2.enGB.set(name).Enchantment.setIndex(0,SpellItemEnchantmentIndex-index1val).Enchantment.setIndex(1,SpellItemEnchantmentIndex-index2val).Enchantment.setIndex(2,SpellItemEnchantmentIndex-index3val)
    SQL.item_enchantment_template.add(enchIndex,propIndex).chance.set(chance)
}

function addSpell(effect1type: number, effect1stattype: number, effect1max: number, effect1min:number, effect2type:number, effect2stattype:number,effect2max:number, effect2min:number,name: string,index:number) {
    DBC_SpellItemEnchantment.add(index).Name.enGB.set(name).Effect.setIndex(0,effect1type).EffectArg.setIndex(0,effect1stattype).EffectPointsMax.setIndex(0,effect1max).EffectArg.setIndex(0,effect1min).Effect.setIndex(1,effect2type).EffectArg.setIndex(1,effect2stattype).EffectPointsMax.setIndex(1,effect2max).EffectArg.setIndex(1,effect2min)
}
