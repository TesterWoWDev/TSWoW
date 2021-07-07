import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { redColorCode } from "../../functions/gem-functions"
import { attackpower3 } from "../../spells/attack-power-spells"
import { chanceHeal3, chanceLightning3, chanceShadow3, chanceStun3 } from "../../spells/chance-on-hit-spells"
import { health3 } from "../../spells/health-increase-spells"
import { spellpower3 } from "../../spells/spell-power-spells"

let PropertyIndex = 2800
let SpellItemEnchantmentIndex = 6300
export let clothTierThreeItemEnchantmentIndex = 15008
export let leatherTierThreeItemEnchantmentIndex = 15009
export let mailTierThreeItemEnchantmentIndex = 15010
export let weaponTierThreeItemEnchantmentIndex = 15011
export let trinketTierThreeItemEnchantmentIndex = 16016


/*On Use : Health (-61)*/           addSpell(7,health3.ID,0,0,0,0,0,0,'Increases health by 1350 for 18 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Attack Power (-60)*/     addSpell(7,attackpower3.ID,0,0,0,0,0,0,'Increases attack power by 250 for 10 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Spell Power (-59)*/      addSpell(7,spellpower3.ID,0,0,0,0,0,0,'Increases spell power by 250 for 10 seconds.',SpellItemEnchantmentIndex++)
/*Chance : Stun Baton (-58)*/       addSpell(1,chanceStun3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Stuns target for 3 seconds.',SpellItemEnchantmentIndex++)
/*Chance : Healing (-57)*/          addSpell(1,chanceHeal3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Heal 450.',SpellItemEnchantmentIndex++)
/*Chance : Thunderfury (-56)*/      addSpell(1,chanceLightning3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Lightning Blast for 246 damage.',SpellItemEnchantmentIndex++)
/*Chance : Shadow Bolt (-55)*/      addSpell(1,chanceShadow3.ID,0,0,0,0,0,0,redColorCode + 'Chance: Shadow Bolt for 120 damage.',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-54)*/        addSpell(5,3,19,19,5,4,19,19,'+19 Agility\n+19 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-53)*/        addSpell(5,5,19,19,5,7,22,22,'+19 Intellect\n+22 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-52)*/        addSpell(5,45,36,36,5,38,36,36,'+36 Spell Power\n+36 Attack Power',SpellItemEnchantmentIndex++)
/*Omnipotence (-51)*/               addSpell(5,3,7,7,5,4,7,7,'+7 Agility\n+7 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence (-50)*/               addSpell(5,5,7,7,5,7,9,9,'+7 Intellect\n+9 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence (-49)*/               addSpell(5,45,11,11,5,38,11,11,'+11 Spell Power\n+11 Attack Power',SpellItemEnchantmentIndex++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/                   addSpell(5,42,36,36,0,0,0,0,'+36 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-47)*/                 addSpell(5,5,19,19,0,0,0,0,'+19 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-46)*/                    addSpell(5,6,27,27,0,0,0,0,'+27 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-45)*/               addSpell(5,45,36,36,0,0,0,0,'+36 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-44)*/              addSpell(5,36,19,19,0,0,0,0,'+19 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-43)*/                  addSpell(5,4,19,19,0,0,0,0,'+19 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-42)*/              addSpell(5,38,36,36,0,0,0,0,'+36 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-41)*/                   addSpell(5,3,19,19,0,0,0,0,'+19 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-40)*/       addSpell(5,39,36,36,0,0,0,0,'+36 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-39)*/                   addSpell(5,7,22,22,0,0,0,0,'+22 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-38)*/                addSpell(5,31,27,27,0,0,0,0,'+27 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-37)*/           addSpell(5,32,31,31,0,0,0,0,'+31 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-36)*/                    addSpell(5,1,275,275,0,0,0,0,'+275 Health',SpellItemEnchantmentIndex++)
/*Mana (-35)*/                      addSpell(5,2,250,250,0,0,0,0,'+250 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-34)*/              addSpell(5,46,31,31,0,0,0,0,'+31 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-33)*/                addSpell(5,43,31,31,0,0,0,0,'+31 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-32)*/              addSpell(5,15,11,11,0,0,0,0,'+11 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-31)*/          addSpell(5,37,11,11,0,0,0,0,'+11 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-30)*/            addSpell(5,12,11,11,0,0,0,0,'+11 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-27)*/              addSpell(5,13,11,11,0,0,0,0,'+11 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-28)*/              addSpell(5,14,11,11,0,0,0,0,'+11 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-27)*/         addSpell(5,35,4,4,0,0,0,0,'+4 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-26)*/         addSpell(5,44,8,8,0,0,0,0,'+8 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-25)*/         addSpell(5,47,8,8,0,0,0,0,'+8 Spell Penetration',SpellItemEnchantmentIndex++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/                   addSpell(5,42,11,11,0,0,0,0,'+11 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-23)*/                 addSpell(5,5,7,7,0,0,0,0,'+7 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-22)*/                    addSpell(5,6,9,9,0,0,0,0,'+9 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-21)*/               addSpell(5,45,11,11,0,0,0,0,'+11 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-20)*/              addSpell(5,36,8,8,0,0,0,0,'+8 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-19)*/                  addSpell(5,7,7,7,0,0,0,0,'+7 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-18)*/              addSpell(5,38,11,11,0,0,0,0,'+11 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-17)*/                   addSpell(5,3,7,7,0,0,0,0,'+7 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-16)*/       addSpell(5,39,9,9,0,0,0,0,'+9 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-15)*/                   addSpell(5,7,9,9,0,0,0,0,'+9 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-14)*/                addSpell(5,31,11,11,0,0,0,0,'+11 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-13)*/           addSpell(5,32,11,11,0,0,0,0,'+11 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-12)*/                    addSpell(5,1,165,165,0,0,0,0,'+165 Health',SpellItemEnchantmentIndex++)
/*Mana (-11)*/                      addSpell(5,2,88,88,0,0,0,0,'+88 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-10)*/              addSpell(5,46,11,11,0,0,0,0,'+11 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-9)*/                 addSpell(5,43,11,11,0,0,0,0,'+11 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-8)*/               addSpell(5,15,7,7,0,0,0,0,'+7 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-7)*/           addSpell(5,37,7,7,0,0,0,0,'+7 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-6)*/             addSpell(5,12,7,7,0,0,0,0,'+7 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-5)*/               addSpell(5,13,7,7,0,0,0,0,'+7 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-4)*/               addSpell(5,14,7,7,0,0,0,0,'+7 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-3)*/          addSpell(5,35,3,3,0,0,0,0,'+3 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-2)*/          addSpell(5,44,4,4,0,0,0,0,'+4 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-1)*/          addSpell(5,47,4,4,0,0,0,0,'+4 Spell Penetration',SpellItemEnchantmentIndex++)

// Trinkets : On Use Effects
addDBC('of Recurring Power',PropertyIndex++,trinketTierThreeItemEnchantmentIndex,59,39,47,1)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierThreeItemEnchantmentIndex,60,39,43,1)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierThreeItemEnchantmentIndex,60,39,41,1)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,trinketTierThreeItemEnchantmentIndex,58,38,37,1)            /*Chance to Stun + Hit + Crit                    1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,trinketTierThreeItemEnchantmentIndex,56,44,31,1)   /*Chance to Thunderfury + Haste + Expertise            1% Chance*/
addDBC('of the Immortal',PropertyIndex++,trinketTierThreeItemEnchantmentIndex,57,36,37,1)          /*Chance to Heal + Health + Crit                   1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,trinketTierThreeItemEnchantmentIndex,55,45,42,1)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,58,0,0,1)            /*Chance to Stun                    1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,56,0,0,1)   /*Chance to Thunderfury             1% Chance*/
addDBC('of the Immortal',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,57,0,0,1)          /*Chance to Heal                    1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,55,0,0,1)      /*Chance to Send Shadowbolts        1% Chance*/

// Omnipotence Chances
addDBC('of the Omnipotent',PropertyIndex++,clothTierThreeItemEnchantmentIndex,49,50,51,1)     /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,49,50,51,1)   /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,mailTierThreeItemEnchantmentIndex,49,50,51,1)      /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,52,53,54,1)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items
addDBC('of Blasphemy',PropertyIndex++,clothTierThreeItemEnchantmentIndex,23,22,21,9.9)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,clothTierThreeItemEnchantmentIndex,23,20,21,9.9)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,clothTierThreeItemEnchantmentIndex,20,21,0,9.9)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,21,14,9.9)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,9,20,9.9)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,clothTierThreeItemEnchantmentIndex,10,9,0,9.9)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,13,1,9.9)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,14,13,9.9)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,clothTierThreeItemEnchantmentIndex,12,10,0,9.9)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,clothTierThreeItemEnchantmentIndex,20,14,13,9.9)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addDBC('of Balance',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,17,13,18,6.6)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addDBC('of Aggression',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,17,20,18,6.6)  /*Agility + Haste + Attackpower             6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,20,18,0,6.6)        /*Haste + Attackpower                       6.6% Chance*/
addDBC('of Lethality',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,18,14,6.6)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addDBC('of Stealth',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,10,20,6.6)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addDBC('of Vanishing',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,5,4,17,6.6)     /*Agility, Dodge, Parry                     6.6% Chance*/
addDBC('of Bleeding',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,13,2,6.6)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addDBC('of Brutality',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,14,13,6.6)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,23,22,21,6.6)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addDBC('of Potency',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,23,20,21,6.6)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,20,21,0,6.6)          /*Haste + Spellpower                        6.6% Chance*/
addDBC('of Smiting',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,21,14,6.6)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addDBC('of Healing',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,9,20,6.6)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addDBC('of Blasting',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,13,1,6.6)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addDBC('of Destruction',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,14,13,6.6)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items
addDBC('of Pain',PropertyIndex++,mailTierThreeItemEnchantmentIndex,19,13,18,5.82)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addDBC('of Revenge',PropertyIndex++,mailTierThreeItemEnchantmentIndex,19,20,18,5.82)        /*Strength + Haste + Attackpower            5.82% Chance*/
addDBC('of Brutality',PropertyIndex++,mailTierThreeItemEnchantmentIndex,20,18,0,5.82)       /*Haste + Attackpower                       5.82% Chance*/
addDBC('of Agony',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,18,14,5.82)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addDBC('of Berserking',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,10,20,5.82)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,mailTierThreeItemEnchantmentIndex,5,4,19,5.82)  /*Strength, Dodge, Parry                    5.82% Chance*/
addDBC('of Remorse',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,13,2,5.82)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addDBC('of Demise',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,14,13,5.82)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addDBC('of Life',PropertyIndex++,mailTierThreeItemEnchantmentIndex,12,10,0,5.82)            /*Health + Health per 5                     5.82% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierThreeItemEnchantmentIndex,20,14,13,5.82)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,mailTierThreeItemEnchantmentIndex,23,22,21,5.82)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addDBC('of Potency',PropertyIndex++,mailTierThreeItemEnchantmentIndex,23,20,21,5.82)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addDBC('of Power',PropertyIndex++,mailTierThreeItemEnchantmentIndex,20,21,0,5.82)          /*Haste + Spellpower                        5.82% Chance*/
addDBC('of Smiting',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,21,14,5.82)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addDBC('of Healing',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,9,20,5.82)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addDBC('of Blasting',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,13,1,5.82)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addDBC('of Destruction',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,14,13,5.82)   /*Spellpower + Hit + Crit                   5.82% Chance*/

// Weapon Enchants
addDBC('of Blasphemy',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,47,46,45,4.71)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addDBC('of Potency',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,47,44,45,4.71)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,45,0,4.71)           /*Haste + Spellpower                        4.71% Chance*/
addDBC('of Smiting',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,45,38,4.71)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addDBC('of Healing',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,33,44,4.71)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addDBC('of Renewal',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,34,33,0,4.71)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addDBC('of Blasting',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,37,25,4.71)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addDBC('of Destruction',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,38,37,4.71)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,36,34,0,4.71)            /*Health + Health per 5                     4.71% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,37,38,4.71)      /*Haste + Crit + Hit                        4.71% Chance*/
addDBC('of Balance',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,41,37,42,4.71)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addDBC('of Aggression',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,41,44,42,4.71)     /*Agility + Haste + Attackpower             4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,42,0,4.71)           /*Haste + Attackpower                       4.71% Chance*/
addDBC('of Lethality',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,42,38,4.71)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addDBC('of Stealth',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,34,44,4.71)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addDBC('of Vanishing',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,41,27,28,4.71)      /*Agility, Dodge, Parry                     4.71% Chance*/
addDBC('of Bleeding',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,37,26,4.71)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,38,37,4.71)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addDBC('of Pain',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,43,37,42,4.71)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addDBC('of Revenge',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,43,44,42,4.71)        /*Strength + Haste + Attackpower            4.71% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,43,27,28,4.71)/*Strength, Dodge, Parry                    4.71% Chance*/






function addDBC(name: string, propIndex: number, enchIndex:number, index1val: number, index2val: number, index3val: number, chance:number) {
    DBC_ItemRandomProperties.add(propIndex).Name2.enGB.set(name).Enchantment.setIndex(0,SpellItemEnchantmentIndex-index1val).Enchantment.setIndex(1,SpellItemEnchantmentIndex-index2val).Enchantment.setIndex(2,SpellItemEnchantmentIndex-index3val)
    SQL.item_enchantment_template.add(enchIndex,propIndex).chance.set(chance)
}

function addSpell(effect1type: number, effect1stattype: number, effect1max: number, effect1min:number, effect2type:number, effect2stattype:number,effect2max:number, effect2min:number,name: string,index:number) {
    DBC_SpellItemEnchantment.add(index).Name.enGB.set(name).Effect.setIndex(0,effect1type).EffectArg.setIndex(0,effect1stattype).EffectPointsMax.setIndex(0,effect1max).EffectPointsMin.setIndex(0,effect1min).Effect.setIndex(1,effect2type).EffectArg.setIndex(1,effect2stattype).EffectPointsMax.setIndex(1,effect2max).EffectPointsMin.setIndex(1,effect2min)
}
