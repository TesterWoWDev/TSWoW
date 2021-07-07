import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { spellColorCode } from "../../functions/gem-functions"
import { attackpower4 } from "../../spells/attack-power-spells"
import { chanceHeal4, chanceLightning4, chanceShadow4, chanceStun4 } from "../../spells/chance-on-hit-spells"
import { health4 } from "../../spells/health-increase-spells"
import { spellpower4 } from "../../spells/spell-power-spells"

let PropertyIndex = 3000
let SpellItemEnchantmentIndex = 6500
export let clothTierFourItemEnchantmentIndex = 15012
export let leatherTierFourItemEnchantmentIndex = 15013
export let mailTierFourItemEnchantmentIndex = 15014
export let weaponTierFourItemEnchantmentIndex = 15015
export let trinketTierFourItemEnchantmentIndex = 16015

/*On Use : Health (-61)*/       addSpell(SpellItemEnchantmentIndex++,'Increases health by 1750 for 18 seconds.',7,health4.ID,0,0,0,0,0,0)
/*On Use : Attack Power (-60)*/ addSpell(SpellItemEnchantmentIndex++,'Increases attack power by 350 for 10 seconds.',7,attackpower4.ID,0,0,0,0,0,0)
/*On Use : Spell Power (-59)*/  addSpell(SpellItemEnchantmentIndex++,'Increases spell power by 350 for 10 seconds.',7,spellpower4.ID,0,0,0,0,0,0)
/*Chance : Shadow Bolt (-58)*/  addSpell(SpellItemEnchantmentIndex++,'Chance: Stuns target for 4 seconds.',1,chanceStun4.ID,0,0,0,0,0,0)
/*Chance : Healing (-57)*/      addSpell(SpellItemEnchantmentIndex++,'Chance: Heal 680.',1,chanceHeal4.ID,0,0,0,0,0,0)
/*Chance : Thunderfury (-56)*/  addSpell(SpellItemEnchantmentIndex++,'Chance: Lightning Blast for 342 damage.',1,chanceLightning4.ID,0,0,0,0,0,0)
/*Chance : Shadow Bolt (-55)*/  addSpell(SpellItemEnchantmentIndex++,'Chance: Shadow Bolt for 177 damage.',1,chanceShadow4.ID,0,0,0,0,0,0)
/*Omnipotence Weapon (-54)*/    addSpell(SpellItemEnchantmentIndex++,'+24 Agility\n+24 Strength',5,3,24,24,5,4,24,24)
/*Omnipotence Weapon (-53)*/    addSpell(SpellItemEnchantmentIndex++,'+24 Intellect\n+34 Stamina',5,5,24,24,5,7,34,34)
/*Omnipotence Weapon (-52)*/    addSpell(SpellItemEnchantmentIndex++,'+48 Spell Power\n+48 Attack Power',5,45,48,48,5,38,48,48)
/*Omnipotence (-51)*/           addSpell(SpellItemEnchantmentIndex++,'+12 Agility\n+12 Strength',5,3,12,12,5,4,12,12)
/*Omnipotence (-50)*/           addSpell(SpellItemEnchantmentIndex++,'+12 Intellect\n+14 Stamina',5,5,12,12,5,7,14,14)
/*Omnipotence (-49)*/           addSpell(SpellItemEnchantmentIndex++,'+16 Spell Power\n+16 Attack Power',5,45,16,16,5,38,16,16)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-48)*/               addSpell(SpellItemEnchantmentIndex++,'+48 Healing Done',5,42,48,48,0,0,0,0)
/*Intellect (-47)*/             addSpell(SpellItemEnchantmentIndex++,'+24 Intellect',5,5,24,24,0,0,0,0)
/*Spirit (-46)*/                addSpell(SpellItemEnchantmentIndex++,'+36 Spirit',5,6,36,36,0,0,0,0)
/*Spell Power (-45)*/           addSpell(SpellItemEnchantmentIndex++,'+48 Spell Power',5,45,48,48,0,0,0,0)
/*Haste Rating (-44)*/          addSpell(SpellItemEnchantmentIndex++,'+24 Haste Rating',5,36,24,24,0,0,0,0)
/*Strength (-43)*/              addSpell(SpellItemEnchantmentIndex++,'+24 Strength',5,4,24,24,0,0,0,0)
/*Attack Power (-42)*/          addSpell(SpellItemEnchantmentIndex++,'+48 Attack Power',5,38,48,48,0,0,0,0)
/*Agility (-41)*/               addSpell(SpellItemEnchantmentIndex++,'+24 Agility',5,3,24,24,0,0,0,0)
/*Ranged Attack Power (-40)*/   addSpell(SpellItemEnchantmentIndex++,'+48 Ranged Attack Power',5,39,48,48,0,0,0,0)
/*Stamina (-39)*/               addSpell(SpellItemEnchantmentIndex++,'+34 Stamina',5,7,34,34,0,0,0,0)
/*Hit Rating (-38)*/            addSpell(SpellItemEnchantmentIndex++,'+36 Hit Rating',5,31,36,36,0,0,0,0)
/*Critical Strike (-37)*/       addSpell(SpellItemEnchantmentIndex++,'+44 Critical Strike Rating',5,32,44,44,0,0,0,0)
/*Health (-36)*/                addSpell(SpellItemEnchantmentIndex++,'+365 Health',5,1,365,365,0,0,0,0)
/*Mana (-35)*/                  addSpell(SpellItemEnchantmentIndex++,'+250 Mana',5,2,250,250,0,0,0,0)
/*Health per 5 (-34)*/          addSpell(SpellItemEnchantmentIndex++,'+44 Health Per Second',5,46,44,44,0,0,0,0)
/*Mana per 5 (-33)*/            addSpell(SpellItemEnchantmentIndex++,'+44 Mana Per Second',5,43,44,44,0,0,0,0)
/*Block Rating (-32)*/          addSpell(SpellItemEnchantmentIndex++,'+14 Block Rating',5,15,14,14,0,0,0,0)
/*Expertise Rating (-31)*/      addSpell(SpellItemEnchantmentIndex++,'+14 Expertise Rating',5,37,14,14,0,0,0,0)
/*Defense Rating (-30)*/        addSpell(SpellItemEnchantmentIndex++,'+14 Defense Rating',5,12,14,14,0,0,0,0)
/*Dodge Rating (-27)*/          addSpell(SpellItemEnchantmentIndex++,'+14 Dodge Rating',5,13,14,14,0,0,0,0)
/*Parry Rating (-28)*/          addSpell(SpellItemEnchantmentIndex++,'+14 Parry Rating',5,14,14,14,0,0,0,0)
/*Resilience Rating (-27)*/     addSpell(SpellItemEnchantmentIndex++,'+5 Resilience Rating',5,35,5,5,0,0,0,0)
/*Armor Penetration (-26)*/     addSpell(SpellItemEnchantmentIndex++,'+10 Armor Penetration',5,44,10,10,0,0,0,0)
/*Spell Penetration (-25)*/     addSpell(SpellItemEnchantmentIndex++,'+10 Spell Penetration',5,47,10,10,0,0,0,0)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Healing (-24)*/               addSpell(SpellItemEnchantmentIndex++,'+16 Healing Done',5,42,16,16,0,0,0,0)
/*Intellect (-23)*/             addSpell(SpellItemEnchantmentIndex++,'+12 Intellect',5,5,12,12,0,0,0,0)
/*Spirit (-22)*/                addSpell(SpellItemEnchantmentIndex++,'+14 Spirit',5,6,14,14,0,0,0,0)
/*Spell Power (-21)*/           addSpell(SpellItemEnchantmentIndex++,'+16 Spell Power',5,45,16,16,0,0,0,0)
/*Haste Rating (-20)*/          addSpell(SpellItemEnchantmentIndex++,'+13 Haste Rating',5,36,13,13,0,0,0,0)
/*Strength (-19)*/              addSpell(SpellItemEnchantmentIndex++,'+12 Strength',5,7,12,12,0,0,0,0)
/*Attack Power (-18)*/          addSpell(SpellItemEnchantmentIndex++,'+16 Attack Power',5,38,16,16,0,0,0,0)
/*Agility (-17)*/               addSpell(SpellItemEnchantmentIndex++,'+12 Agility',5,3,12,12,0,0,0,0)
/*Ranged Attack Power (-16)*/   addSpell(SpellItemEnchantmentIndex++,'+14 Ranged Attack Power',5,39,14,14,0,0,0,0)
/*Stamina (-15)*/               addSpell(SpellItemEnchantmentIndex++,'+14 Stamina',5,7,14,14,0,0,0,0)
/*Hit Rating (-14)*/            addSpell(SpellItemEnchantmentIndex++,'+16 Hit Rating',5,31,16,16,0,0,0,0)
/*Critical Strike (-13)*/       addSpell(SpellItemEnchantmentIndex++,'+16 Critical Strike Rating',5,32,16,16,0,0,0,0)
/*Health (-12)*/                addSpell(SpellItemEnchantmentIndex++,'+208 Health',5,1,208,208,0,0,0,0)
/*Mana (-11)*/                  addSpell(SpellItemEnchantmentIndex++,'+115 Mana',5,2,115,115,0,0,0,0)
/*Health per 5 (-10)*/          addSpell(SpellItemEnchantmentIndex++,'+16 Health Per Second',5,46,16,16,0,0,0,0)
/*Mana per 5 (-9)*/             addSpell(SpellItemEnchantmentIndex++,'+16 Mana Per Second',5,43,16,16,0,0,0,0)
/*Block Rating (-8)*/           addSpell(SpellItemEnchantmentIndex++,'+12 Block Rating',5,15,12,12,0,0,0,0)
/*Expertise Rating (-7)*/       addSpell(SpellItemEnchantmentIndex++,'+12 Expertise Rating',5,37,12,12,0,0,0,0)
/*Defense Rating (-6)*/         addSpell(SpellItemEnchantmentIndex++,'+12 Defense Rating',5,12,12,12,0,0,0,0)
/*Dodge Rating (-5)*/           addSpell(SpellItemEnchantmentIndex++,'+12 Dodge Rating',5,13,12,12,0,0,0,0)
/*Parry Rating (-4)*/           addSpell(SpellItemEnchantmentIndex++,'+12 Parry Rating',5,14,12,12,0,0,0,0)
/*Resilience Rating (-3)*/      addSpell(SpellItemEnchantmentIndex++,'+4 Resilience Rating',5,35,4,4,0,0,0,0)
/*Armor Penetration (-2)*/      addSpell(SpellItemEnchantmentIndex++,'+5 Armor Penetration',5,44,5,5,0,0,0,0)
/*Spell Penetration (-1)*/      addSpell(SpellItemEnchantmentIndex++,'+5 Spell Penetration',5,47,5,5,0,0,0,0)


// Trinkets : On Use Effects
addDBC('of Recurring Power',PropertyIndex++,trinketTierFourItemEnchantmentIndex,59,39,47,1)            /*On Use : Spell Power + Stamina + Intellect             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierFourItemEnchantmentIndex,60,39,43,1)           /*On Use : Attack Power + Stamina + Strength             1% Chance*/
addDBC('of Escalating Power',PropertyIndex++,trinketTierFourItemEnchantmentIndex,60,39,41,1)           /*On Use : Attack Power + Stamina + Agility              1% Chance*/

// Trinkets : Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,trinketTierFourItemEnchantmentIndex,58,38,37,1)            /*Chance to Stun + Hit + Crit                                   1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,trinketTierFourItemEnchantmentIndex,56,44,31,1)   /*Chance to Thunderfury + Haste + Expertise                     1% Chance*/
addDBC('of the Immortal',PropertyIndex++,trinketTierFourItemEnchantmentIndex,57,36,37,1)          /*Chance to Heal + Health + Crit                                1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,trinketTierFourItemEnchantmentIndex,55,45,42,1)      /*Chance to Send Shadowbolts + Spell Power + Attack Power       1% Chance*/

// Omnipotence Chances
addDBC('of the Omnipotent',PropertyIndex++,clothTierFourItemEnchantmentIndex,49,50,51,1)     /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,leatherTierFourItemEnchantmentIndex,49,50,51,1)   /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,mailTierFourItemEnchantmentIndex,49,50,51,1)      /*Haste + Crit + Hit                        1% Chance*/
addDBC('of the Omnipotent',PropertyIndex++,weaponTierFourItemEnchantmentIndex,52,53,54,1)    /*Haste + Crit + Hit                        1% Chance*/

// Cloth Items
addDBC('of Blasphemy',PropertyIndex++,clothTierFourItemEnchantmentIndex,23,22,21,9.9)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,clothTierFourItemEnchantmentIndex,23,20,21,9.9)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,clothTierFourItemEnchantmentIndex,20,21,0,9.9)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,21,14,9.9)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,9,20,9.9)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,clothTierFourItemEnchantmentIndex,10,9,0,9.9)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,13,1,9.9)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,14,13,9.9)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,clothTierFourItemEnchantmentIndex,12,10,0,9.9)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,clothTierFourItemEnchantmentIndex,20,14,13,9.9)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addDBC('of Balance',PropertyIndex++,leatherTierFourItemEnchantmentIndex,17,13,18,6.6)     /*Agility + Crit + Attackpower              6.6% Chance*/ 
addDBC('of Aggression',PropertyIndex++,leatherTierFourItemEnchantmentIndex,17,20,18,6.6)  /*Agility + Haste + Attackpower             6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,18,0,6.6)        /*Haste + Attackpower                       6.6% Chance*/
addDBC('of Lethality',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,18,14,6.6)   /*Attackpower + Attackpower + Hit           6.6% Chance*/
addDBC('of Stealth',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,10,20,6.6)     /*Attackpower + Health per 5 + Haste        6.6% Chance*/
addDBC('of Vanishing',PropertyIndex++,leatherTierFourItemEnchantmentIndex,5,4,17,6.6)     /*Agility, Dodge, Parry                     6.6% Chance*/
addDBC('of Bleeding',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,13,2,6.6)     /*Attackpower + Crit + Armor Pen            6.6% Chance*/
addDBC('of Brutality',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,14,13,6.6)   /*Attackpower + Hit + Crit                  6.6% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,leatherTierFourItemEnchantmentIndex,23,22,21,6.6)     /*Intellect + Spirit + Spellpower           6.6% Chance*/ 
addDBC('of Potency',PropertyIndex++,leatherTierFourItemEnchantmentIndex,23,20,21,6.6)       /*Intellect + Haste + Spellpower            6.6% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,21,0,6.6)          /*Haste + Spellpower                        6.6% Chance*/
addDBC('of Smiting',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,21,14,6.6)       /*Spellpower + Spellpower + Hit             6.6% Chance*/
addDBC('of Healing',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,9,20,6.6)        /*Spellpower + Mana per 5 + Haste           6.6% Chance*/
addDBC('of Blasting',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,13,1,6.6)       /*Spellpower + Crit + Spell Pen             6.6% Chance*/
addDBC('of Destruction',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,14,13,6.6)   /*Spellpower + Hit + Crit                   6.6% Chance*/

// Mail Items
addDBC('of Pain',PropertyIndex++,mailTierFourItemEnchantmentIndex,19,13,18,5.82)           /*Strength + Crit + Attackpower             5.82% Chance*/ 
addDBC('of Revenge',PropertyIndex++,mailTierFourItemEnchantmentIndex,19,20,18,5.82)        /*Strength + Haste + Attackpower            5.82% Chance*/
addDBC('of Brutality',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,18,0,5.82)       /*Haste + Attackpower                       5.82% Chance*/
addDBC('of Agony',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,18,14,5.82)          /*Attackpower + Attackpower + Hit           5.82% Chance*/
addDBC('of Berserking',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,10,20,5.82)     /*Attackpower + Health per 5 + Haste        5.82% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,mailTierFourItemEnchantmentIndex,5,4,19,5.82)  /*Strength, Dodge, Parry                    5.82% Chance*/
addDBC('of Remorse',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,13,2,5.82)         /*Attackpower + Crit + Armor Pen            5.82% Chance*/
addDBC('of Demise',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,14,13,5.82)         /*Attackpower + Hit + Crit                  5.82% Chance*/
addDBC('of Life',PropertyIndex++,mailTierFourItemEnchantmentIndex,12,10,0,5.82)            /*Health + Health per 5                     5.82% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,14,13,5.82)      /*Haste + Crit + Hit                        5.82% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,mailTierFourItemEnchantmentIndex,23,22,21,5.82)     /*Intellect + Spirit + Spellpower           5.82% Chance*/ 
addDBC('of Potency',PropertyIndex++,mailTierFourItemEnchantmentIndex,23,20,21,5.82)       /*Intellect + Haste + Spellpower            5.82% Chance*/
addDBC('of Power',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,21,0,5.82)          /*Haste + Spellpower                        5.82% Chance*/
addDBC('of Smiting',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,21,14,5.82)       /*Spellpower + Spellpower + Hit             5.82% Chance*/
addDBC('of Healing',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,9,20,5.82)        /*Spellpower + Mana per 5 + Haste           5.82% Chance*/
addDBC('of Blasting',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,13,1,5.82)       /*Spellpower + Crit + Spell Pen             5.82% Chance*/
addDBC('of Destruction',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,14,13,5.82)   /*Spellpower + Hit + Crit                   5.82% Chance*/

// Weapon Enchants
addDBC('of Blasphemy',PropertyIndex++,weaponTierFourItemEnchantmentIndex,47,46,45,4.71)      /*Intellect + Spirit + Spellpower           4.71% Chance*/ 
addDBC('of Potency',PropertyIndex++,weaponTierFourItemEnchantmentIndex,47,44,45,4.71)        /*Intellect + Haste + Spellpower            4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,45,0,4.71)           /*Haste + Spellpower                        4.71% Chance*/
addDBC('of Smiting',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,45,38,4.71)        /*Spellpower + Spellpower + Hit             4.71% Chance*/
addDBC('of Healing',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,33,44,4.71)        /*Spellpower + Mana per 5 + Haste           4.71% Chance*/
addDBC('of Renewal',PropertyIndex++,weaponTierFourItemEnchantmentIndex,34,33,0,4.71)         /*Health per 5 + Mana per 5                 4.71% Chance*/
addDBC('of Blasting',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,37,25,4.71)       /*Spellpower + Crit + Spell Pen             4.71% Chance*/
addDBC('of Destruction',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,38,37,4.71)    /*Spellpower + Hit + Crit                   4.71% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierFourItemEnchantmentIndex,36,34,0,4.71)            /*Health + Health per 5                     4.71% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,37,38,4.71)      /*Haste + Crit + Hit                        4.71% Chance*/
addDBC('of Balance',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,37,42,4.71)        /*Agility + Crit + Attackpower              4.71% Chance*/ 
addDBC('of Aggression',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,44,42,4.71)     /*Agility + Haste + Attackpower             4.71% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,42,0,4.71)           /*Haste + Attackpower                       4.71% Chance*/
addDBC('of Lethality',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,42,38,4.71)      /*Attackpower + Attackpower + Hit           4.71% Chance*/
addDBC('of Stealth',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,34,44,4.71)        /*Attackpower + Health per 5 + Haste        4.71% Chance*/
addDBC('of Vanishing',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,27,28,4.71)      /*Agility, Dodge, Parry                     4.71% Chance*/
addDBC('of Bleeding',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,37,26,4.71)       /*Attackpower + Crit + Armor Pen            4.71% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,38,37,4.71)      /*Attackpower + Hit + Crit                  4.71% Chance*/
addDBC('of Pain',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,37,42,4.71)           /*Strength + Crit + Attackpower             4.71% Chance*/ 
addDBC('of Revenge',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,44,42,4.71)        /*Strength + Haste + Attackpower            4.71% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,27,28,4.71)/*Strength, Dodge, Parry                    4.71% Chance*/



function addDBC(name: string, propIndex: number, enchIndex:number, index1val: number, index2val: number, index3val: number, chance:number) {
    DBC_ItemRandomProperties.add(propIndex).Name2.enGB.set(name).Enchantment.setIndex(0,SpellItemEnchantmentIndex-index1val).Enchantment.setIndex(1,SpellItemEnchantmentIndex-index2val).Enchantment.setIndex(2,SpellItemEnchantmentIndex-index3val)
    SQL.item_enchantment_template.add(enchIndex,propIndex).chance.set(chance)
}

function addSpell(index:number,name: string, effect1type: number, effect1stattype: number, effect1max: number, effect1min:number, effect2type:number, effect2stattype:number,effect2max:number, effect2min:number) {
    DBC_SpellItemEnchantment.add(index).Name.enGB.set(name).Effect.setIndex(0,effect1type).EffectArg.setIndex(0,effect1stattype).EffectPointsMax.setIndex(0,effect1max).EffectPointsMin.setIndex(0,effect1min).Effect.setIndex(1,effect2type).EffectArg.setIndex(1,effect2stattype).EffectPointsMax.setIndex(1,effect2max).EffectPointsMin.setIndex(1,effect2min)
}
