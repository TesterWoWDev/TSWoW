import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { redColorCode } from "../../functions/gem-functions"
import { attackpower1 } from "../../spells/attack-power-spells"
import { chanceHeal1, chanceLightning1, chanceShadow1, chanceStun1 } from "../../spells/chance-on-hit-spells"
import { health1 } from "../../spells/health-increase-spells"
import { spellpower1 } from "../../spells/spell-power-spells"

let PropertyIndex = 2500
let SpellItemEnchantmentIndex = 6000
export let clothTierOneItemEnchantmentIndex = 15000
export let leatherTierOneItemEnchantmentIndex = 15001
export let mailTierOneItemEnchantmentIndex = 15002
export let weaponTierOneItemEnchantmentIndex = 15003
export let trinketTierOneItemEnchantmentIndex = 16018


/*On Use : Health (-61)*/           addSpell(7,health1.ID,0,0,0,0,0,0,'Increases health by 350 for 18 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Attack Power (-60)*/     addSpell(7,attackpower1.ID,0,0,0,0,0,0,'Increases attack power by 50 for 10 seconds.',SpellItemEnchantmentIndex++)
/*On Use : Spell Power (-59)*/      addSpell(7,spellpower1.ID,0,0,0,0,0,0,'Increases spell power by 50 for 10 seconds.',SpellItemEnchantmentIndex++)
/*Chance : Stun Baton (-58)*/       addSpell(1,chanceStun1.ID,0,0,0,0,0,0,redColorCode + 'Chance: Stuns target for 1 seconds.',SpellItemEnchantmentIndex++)
/*Chance : Healing (-57)*/          addSpell(1,chanceHeal1.ID,0,0,0,0,0,0,redColorCode + 'Chance: Heal 100.',SpellItemEnchantmentIndex++)
/*Chance : Thunderfury (-56)*/      addSpell(1,chanceLightning1.ID,0,0,0,0,0,0,redColorCode + 'Chance: Lightning Blast for 100 damage.',SpellItemEnchantmentIndex++)
/*Chance : Shadow Bolt (-55)*/      addSpell(1,chanceShadow1.ID,0,0,0,0,0,0,redColorCode + '+ Chance: Shadow Bolt for 30 damage.',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-54)*/        addSpell(5,3,8,8,5,4,8,8,'+8 Agility\n+8 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-53)*/        addSpell(5,5,8,8,5,7,9,9,'+8 Intellect\n+9 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence Weapon (-52)*/        addSpell(5,45,16,16,5,38,16,16,'+16 Spell Power\n+16 Attack Power',SpellItemEnchantmentIndex++)
/*Omnipotence (-51)*/               addSpell(5,3,2,2,5,4,2,2,'+2 Agility\n+2 Strength',SpellItemEnchantmentIndex++)
/*Omnipotence (-50)*/               addSpell(5,5,2,2,5,7,2,2,'+2 Intellect\n+3 Stamina',SpellItemEnchantmentIndex++)
/*Omnipotence (-49)*/               addSpell(5,45,6,6,5,38,6,6,'+6 Spell Power\n+6 Attack Power',SpellItemEnchantmentIndex++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/                   addSpell(5,42,16,16,0,0,0,0,'+16 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-47)*/                 addSpell(5,5,8,8,0,0,0,0,'+8 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-46)*/                    addSpell(5,6,12,12,0,0,0,0,'+12 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-45)*/               addSpell(5,45,16,16,0,0,0,0,'+16 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-44)*/              addSpell(5,36,8,8,0,0,0,0,'+8 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-43)*/                  addSpell(5,4,8,8,0,0,0,0,'+8 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-42)*/              addSpell(5,38,16,16,0,0,0,0,'+16 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-41)*/                   addSpell(5,3,8,8,0,0,0,0,'+8 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-40)*/       addSpell(5,39,16,16,0,0,0,0,'+16 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-39)*/                   addSpell(5,7,9,9,0,0,0,0,'+9 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-38)*/                addSpell(5,31,12,12,0,0,0,0,'+12 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-37)*/           addSpell(5,32,14,14,0,0,0,0,'+14 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-36)*/                    addSpell(5,1,175,175,0,0,0,0,'+175 Health',SpellItemEnchantmentIndex++)
/*Mana (-35)*/                      addSpell(5,2,150,150,0,0,0,0,'+150 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-34)*/              addSpell(5,46,14,14,0,0,0,0,'+14 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-33)*/                addSpell(5,43,14,14,0,0,0,0,'+14 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-32)*/              addSpell(5,15,6,6,0,0,0,0,'+6 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-31)*/          addSpell(5,37,6,6,0,0,0,0,'+6 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-30)*/            addSpell(5,12,6,6,0,0,0,0,'+6 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-27)*/              addSpell(5,13,6,6,0,0,0,0,'+6 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-28)*/              addSpell(5,14,6,6,0,0,0,0,'+6 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-27)*/         addSpell(5,35,2,2,0,0,0,0,'+2 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-26)*/         addSpell(5,44,4,4,0,0,0,0,'+4 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-25)*/         addSpell(5,47,4,4,0,0,0,0,'+4 Spell Penetration',SpellItemEnchantmentIndex++)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/                   addSpell(5,42,6,6,0,0,0,0,'+6 Healing Done',SpellItemEnchantmentIndex++)
/*Intellect (-23)*/                 addSpell(5,5,2,2,0,0,0,0,'+2 Intellect',SpellItemEnchantmentIndex++)
/*Spirit (-22)*/                    addSpell(5,6,3,3,0,0,0,0,'+3 Spirit',SpellItemEnchantmentIndex++)
/*Spell Power (-21)*/               addSpell(5,45,6,6,0,0,0,0,'+6 Spell Power',SpellItemEnchantmentIndex++)
/*Haste Rating (-20)*/              addSpell(5,36,3,3,0,0,0,0,'+3 Haste Rating',SpellItemEnchantmentIndex++)
/*Strength (-19)*/                  addSpell(5,4,2,2,0,0,0,0,'+2 Strength',SpellItemEnchantmentIndex++)
/*Attack Power (-18)*/              addSpell(5,38,6,6,0,0,0,0,'+6 Attack Power',SpellItemEnchantmentIndex++)
/*Agility (-17)*/                   addSpell(5,3,2,2,0,0,0,0,'+2 Agility',SpellItemEnchantmentIndex++)
/*Ranged Attack Power (-16)*/       addSpell(5,39,3,3,0,0,0,0,'+3 Ranged Attack Power',SpellItemEnchantmentIndex++)
/*Stamina (-15)*/                   addSpell(5,7,3,3,0,0,0,0,'+3 Stamina',SpellItemEnchantmentIndex++)
/*Hit Rating (-14)*/                addSpell(5,31,5,5,0,0,0,0,'+5 Hit Rating',SpellItemEnchantmentIndex++)
/*Critical Strike (-13)*/           addSpell(5,32,4,4,0,0,0,0,'+4 Critical Strike Rating',SpellItemEnchantmentIndex++)
/*Health (-12)*/                    addSpell(5,1,75,75,0,0,0,0,'+75 Health',SpellItemEnchantmentIndex++)
/*Mana (-11)*/                      addSpell(5,2,50,50,0,0,0,0,'+50 Mana',SpellItemEnchantmentIndex++)
/*Health per 5 (-10)*/              addSpell(5,46,4,4,0,0,0,0,'+4 Health Per Second',SpellItemEnchantmentIndex++)
/*Mana per 5 (-9)*/                 addSpell(5,43,4,4,0,0,0,0,'+4 Mana Per Second',SpellItemEnchantmentIndex++)
/*Block Rating (-8)*/               addSpell(5,15,3,3,0,0,0,0,'+3 Block Rating',SpellItemEnchantmentIndex++)
/*Expertise Rating (-7)*/           addSpell(5,37,3,3,0,0,0,0,'+3 Expertise Rating',SpellItemEnchantmentIndex++)
/*Defense Rating (-6)*/             addSpell(5,12,3,3,0,0,0,0,'+3 Defense Rating',SpellItemEnchantmentIndex++)
/*Dodge Rating (-5)*/               addSpell(5,13,3,3,0,0,0,0,'+3 Dodge Rating',SpellItemEnchantmentIndex++)
/*Parry Rating (-4)*/               addSpell(5,14,3,3,0,0,0,0,'+3 Parry Rating',SpellItemEnchantmentIndex++)
/*Resilience Rating (-3)*/          addSpell(5,35,1,1,0,0,0,0,'+1 Resilience Rating',SpellItemEnchantmentIndex++)
/*Armor Penetration (-2)*/          addSpell(5,44,2,2,0,0,0,0,'+2 Armor Penetration',SpellItemEnchantmentIndex++)
/*Spell Penetration (-1)*/          addSpell(5,47,2,2,0,0,0,0,'+2 Spell Penetration',SpellItemEnchantmentIndex++)

// Trinkets : On Use Effects
addDBC('of Recurring Power',PropertyIndex++,trinketTierOneItemEnchantmentIndex,59,39,47,1)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierOneItemEnchantmentIndex,60,39,43,1)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierOneItemEnchantmentIndex,60,39,41,1)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,trinketTierOneItemEnchantmentIndex,58,38,37,1)            /*Chance to Stun + Hit + Crit                    1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,trinketTierOneItemEnchantmentIndex,56,44,31,1)   /*Chance to Thunderfury + Haste + Expertise            1% Chance*/
addDBC('of the Immortal',PropertyIndex++,trinketTierOneItemEnchantmentIndex,57,36,37,1)          /*Chance to Heal + Health + Crit                   1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,trinketTierOneItemEnchantmentIndex,55,45,42,1)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,weaponTierOneItemEnchantmentIndex,58,0,0,1)            /*Chance to Stun                    1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,weaponTierOneItemEnchantmentIndex,56,0,0,1)   /*Chance to Thunderfury             1% Chance*/
addDBC('of the Immortal',PropertyIndex++,weaponTierOneItemEnchantmentIndex,57,0,0,1)          /*Chance to Heal                    1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,weaponTierOneItemEnchantmentIndex,55,0,0,1)      /*Chance to Send Shadowbolts        1% Chance*/

// Omnipotence Chances
addDBC('of the Omnipotent',PropertyIndex++,clothTierOneItemEnchantmentIndex,49,50,51,1)     /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,leatherTierOneItemEnchantmentIndex,49,50,51,1)   /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,mailTierOneItemEnchantmentIndex,49,50,51,1)      /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,weaponTierOneItemEnchantmentIndex,52,53,54,1)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items [10]
addDBC('of Blasphemy',PropertyIndex++,clothTierOneItemEnchantmentIndex,23,22,21,9.9)     /*Intellect + Spirit + Spellpower           9.9% Chance*/ 
addDBC('of Potency',PropertyIndex++,clothTierOneItemEnchantmentIndex,23,20,21,9.9)       /*Intellect + Haste + Spellpower            9.9% Chance*/
addDBC('of Power',PropertyIndex++,clothTierOneItemEnchantmentIndex,20,21,0,9.9)          /*Haste + Spellpower                        9.9% Chance*/
addDBC('of Smiting',PropertyIndex++,clothTierOneItemEnchantmentIndex,21,21,14,9.9)       /*Spellpower + Spellpower + Hit             9.9% Chance*/
addDBC('of Healing',PropertyIndex++,clothTierOneItemEnchantmentIndex,21,9,20,9.9)        /*Spellpower + Mana per 5 + Haste           9.9% Chance*/
addDBC('of Renewal',PropertyIndex++,clothTierOneItemEnchantmentIndex,10,9,0,9.9)         /*Health per 5 + Mana per 5                 9.9% Chance*/
addDBC('of Blasting',PropertyIndex++,clothTierOneItemEnchantmentIndex,21,13,1,9.9)       /*Spellpower + Crit + Spell Pen             9.9% Chance*/
addDBC('of Destruction',PropertyIndex++,clothTierOneItemEnchantmentIndex,21,14,13,9.9)   /*Spellpower + Hit + Crit                   9.9% Chance*/
addDBC('of Life',PropertyIndex++,clothTierOneItemEnchantmentIndex,12,10,0,9.9)           /*Health + Health per 5                     9.9% Chance*/
addDBC('of Swiftness',PropertyIndex++,clothTierOneItemEnchantmentIndex,20,14,13,9.9)     /*Haste + Crit + Hit                        9.9% Chance*/

// Leather Items - MELEE [15]
addDBC('of Balance',PropertyIndex++,leatherTierOneItemEnchantmentIndex,17,13,18,6.6)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addDBC('of Aggression',PropertyIndex++,leatherTierOneItemEnchantmentIndex,17,20,18,6.6)  /*Agility + Haste + Attackpower             6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierOneItemEnchantmentIndex,20,18,0,6.6)        /*Haste + Attackpower                       6.6% Chance*/
addDBC('of Lethality',PropertyIndex++,leatherTierOneItemEnchantmentIndex,18,18,14,6.6)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addDBC('of Stealth',PropertyIndex++,leatherTierOneItemEnchantmentIndex,18,10,20,6.6)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addDBC('of Vanishing',PropertyIndex++,leatherTierOneItemEnchantmentIndex,5,4,17,6.6)     /*Agility, Dodge, Parry                     6.6% Chance*/
addDBC('of Bleeding',PropertyIndex++,leatherTierOneItemEnchantmentIndex,18,13,2,6.6)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addDBC('of Brutality',PropertyIndex++,leatherTierOneItemEnchantmentIndex,18,14,13,6.6)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,leatherTierOneItemEnchantmentIndex,23,22,21,6.6)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addDBC('of Potency',PropertyIndex++,leatherTierOneItemEnchantmentIndex,23,20,21,6.6)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierOneItemEnchantmentIndex,20,21,0,6.6)          /*Haste + Spellpower                        6.6% Chance*/
addDBC('of Smiting',PropertyIndex++,leatherTierOneItemEnchantmentIndex,21,21,14,6.6)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addDBC('of Healing',PropertyIndex++,leatherTierOneItemEnchantmentIndex,21,9,20,6.6)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addDBC('of Blasting',PropertyIndex++,leatherTierOneItemEnchantmentIndex,21,13,1,6.6)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addDBC('of Destruction',PropertyIndex++,leatherTierOneItemEnchantmentIndex,21,14,13,6.6)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items [17]
addDBC('of Pain',PropertyIndex++,mailTierOneItemEnchantmentIndex,19,13,18,5.82)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addDBC('of Revenge',PropertyIndex++,mailTierOneItemEnchantmentIndex,19,20,18,5.82)        /*Strength + Haste + Attackpower            5.82% Chance*/
addDBC('of Brutality',PropertyIndex++,mailTierOneItemEnchantmentIndex,20,18,0,5.82)       /*Haste + Attackpower                       5.82% Chance*/
addDBC('of Agony',PropertyIndex++,mailTierOneItemEnchantmentIndex,18,18,14,5.82)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addDBC('of Berserking',PropertyIndex++,mailTierOneItemEnchantmentIndex,18,10,20,5.82)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,mailTierOneItemEnchantmentIndex,5,4,19,5.82)  /*Strength, Dodge, Parry                    5.82% Chance*/
addDBC('of Remorse',PropertyIndex++,mailTierOneItemEnchantmentIndex,18,13,2,5.82)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addDBC('of Demise',PropertyIndex++,mailTierOneItemEnchantmentIndex,18,14,13,5.82)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addDBC('of Life',PropertyIndex++,mailTierOneItemEnchantmentIndex,12,10,0,5.82)            /*Health + Health per 5                     5.82% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierOneItemEnchantmentIndex,20,14,13,5.82)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,mailTierOneItemEnchantmentIndex,23,22,21,5.82)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addDBC('of Potency',PropertyIndex++,mailTierOneItemEnchantmentIndex,23,20,21,5.82)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addDBC('of Power',PropertyIndex++,mailTierOneItemEnchantmentIndex,20,21,0,5.82)          /*Haste + Spellpower                        5.82% Chance*/
addDBC('of Smiting',PropertyIndex++,mailTierOneItemEnchantmentIndex,21,21,14,5.82)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addDBC('of Healing',PropertyIndex++,mailTierOneItemEnchantmentIndex,21,9,20,5.82)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addDBC('of Blasting',PropertyIndex++,mailTierOneItemEnchantmentIndex,21,13,1,5.82)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addDBC('of Destruction',PropertyIndex++,mailTierOneItemEnchantmentIndex,21,14,13,5.82)   /*Spellpower + Hit + Crit                   5.82% Chance*/


// Weapon Enchants [21]
addDBC('of Blasphemy',PropertyIndex++,weaponTierOneItemEnchantmentIndex,47,46,45,4.71)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addDBC('of Potency',PropertyIndex++,weaponTierOneItemEnchantmentIndex,47,44,45,4.71)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierOneItemEnchantmentIndex,44,45,0,4.71)           /*Haste + Spellpower                        4.71% Chance*/
addDBC('of Smiting',PropertyIndex++,weaponTierOneItemEnchantmentIndex,45,45,38,4.71)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addDBC('of Healing',PropertyIndex++,weaponTierOneItemEnchantmentIndex,45,33,44,4.71)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addDBC('of Renewal',PropertyIndex++,weaponTierOneItemEnchantmentIndex,34,33,0,4.71)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addDBC('of Blasting',PropertyIndex++,weaponTierOneItemEnchantmentIndex,45,37,25,4.71)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addDBC('of Destruction',PropertyIndex++,weaponTierOneItemEnchantmentIndex,45,38,37,4.71)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierOneItemEnchantmentIndex,36,34,0,4.71)            /*Health + Health per 5                     4.71% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierOneItemEnchantmentIndex,44,37,38,4.71)      /*Haste + Crit + Hit                        4.71% Chance*/
addDBC('of Balance',PropertyIndex++,weaponTierOneItemEnchantmentIndex,41,37,42,4.71)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addDBC('of Aggression',PropertyIndex++,weaponTierOneItemEnchantmentIndex,41,44,42,4.71)     /*Agility + Haste + Attackpower             4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierOneItemEnchantmentIndex,44,42,0,4.71)           /*Haste + Attackpower                       4.71% Chance*/
addDBC('of Lethality',PropertyIndex++,weaponTierOneItemEnchantmentIndex,42,42,38,4.71)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addDBC('of Stealth',PropertyIndex++,weaponTierOneItemEnchantmentIndex,42,34,44,4.71)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addDBC('of Vanishing',PropertyIndex++,weaponTierOneItemEnchantmentIndex,41,27,28,4.71)      /*Agility, Dodge, Parry                     4.71% Chance*/
addDBC('of Bleeding',PropertyIndex++,weaponTierOneItemEnchantmentIndex,42,37,26,4.71)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierOneItemEnchantmentIndex,42,38,37,4.71)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addDBC('of Pain',PropertyIndex++,weaponTierOneItemEnchantmentIndex,43,37,42,4.71)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addDBC('of Revenge',PropertyIndex++,weaponTierOneItemEnchantmentIndex,43,44,42,4.71)        /*Strength + Haste + Attackpower            4.71% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,weaponTierOneItemEnchantmentIndex,43,27,28,4.71)/*Strength, Dodge, Parry                    4.71% Chance*/






function addDBC(name: string, propIndex: number, enchIndex:number, index1val: number, index2val: number, index3val: number, chance:number) {
    DBC_ItemRandomProperties.add(propIndex).Name2.enGB.set(name).Enchantment.setIndex(0,SpellItemEnchantmentIndex-index1val).Enchantment.setIndex(1,SpellItemEnchantmentIndex-index2val).Enchantment.setIndex(2,SpellItemEnchantmentIndex-index3val)
    SQL.item_enchantment_template.add(enchIndex,propIndex).chance.set(chance)
}
function addSpell(effect1type: number, effect1stattype: number, effect1max: number, effect1min:number, effect2type:number, effect2stattype:number,effect2max:number, effect2min:number,name: string,index:number) {
    DBC_SpellItemEnchantment.add(index).Name.enGB.set(name).Effect.setIndex(0,effect1type).EffectArg.setIndex(0,effect1stattype).EffectPointsMax.setIndex(0,effect1max).EffectArg.setIndex(0,effect1min).Effect.setIndex(1,effect2type).EffectArg.setIndex(1,effect2stattype).EffectPointsMax.setIndex(1,effect2max).EffectArg.setIndex(1,effect2min)
}
