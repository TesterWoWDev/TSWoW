import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { DBC } from "wotlkdata/dbc/DBCFiles"
import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"

let PropertyIndex = 3000
let SpellItemEnchantmentIndex = 6500
export let clothTierFourItemEnchantmentIndex = 15012
export let leatherTierFourItemEnchantmentIndex = 15013
export let mailTierFourItemEnchantmentIndex = 15014
export let weaponTierFourItemEnchantmentIndex = 15015

/*Healing (-48)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,42).EffectPointsMax.setIndex(0,48).EffectPointsMin.setIndex(0,48).Name.enGB.set('+48 Healing Done').ItemVisual.set(0).Flags.set(0)
/*Intellect (-47)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Name.enGB.set('+24 Intellect').ItemVisual.set(0).Flags.set(0)
/*Spirit (-46)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,36).EffectPointsMin.setIndex(0,36).Name.enGB.set('+36 Spirit').ItemVisual.set(0).Flags.set(0)
/*Spell Power (-45)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,48).EffectPointsMin.setIndex(0,48).Name.enGB.set('+48 Spell Power').ItemVisual.set(0).Flags.set(0)
/*Haste Rating (-44)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Name.enGB.set('+24 Haste Rating').ItemVisual.set(0).Flags.set(0)
/*Strength (-43)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Name.enGB.set('+24 Strength').ItemVisual.set(0).Flags.set(0)
/*Attack Power (-42)*/         DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,48).EffectPointsMin.setIndex(0,48).Name.enGB.set('+48 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Agility (-41)*/              DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Name.enGB.set('+24 Agility').ItemVisual.set(0).Flags.set(0)
/*Ranged Attack Power (-40)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,39).EffectPointsMax.setIndex(0,48).EffectPointsMin.setIndex(0,48).Name.enGB.set('+48 Ranged Attack Power').ItemVisual.set(0).Flags.set(0)
/*Stamina (-39)*/          DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,34).EffectPointsMin.setIndex(0,34).Name.enGB.set('+34 Stamina').ItemVisual.set(0).Flags.set(0)
/*Hit Rating (-38)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,36).EffectPointsMin.setIndex(0,36).Name.enGB.set('+36 Hit Rating').ItemVisual.set(0).Flags.set(0)
/*Critical Strike (-37)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,44).EffectPointsMin.setIndex(0,44).Name.enGB.set('+44 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)
/*Health (-36)*/           DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,1).EffectPointsMax.setIndex(0,365).EffectPointsMin.setIndex(0,365).Name.enGB.set('+365 Health').ItemVisual.set(0).Flags.set(0)
/*Mana (-35)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,2).EffectPointsMax.setIndex(0,250).EffectPointsMin.setIndex(0,250).Name.enGB.set('+250 Mana').ItemVisual.set(0).Flags.set(0)
/*Health per 5 (-34)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,46).EffectPointsMax.setIndex(0,44).EffectPointsMin.setIndex(0,44).Name.enGB.set('+44 Health Per Second').ItemVisual.set(0).Flags.set(0)
/*Mana per 5 (-33)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,43).EffectPointsMax.setIndex(0,44).EffectPointsMin.setIndex(0,44).Name.enGB.set('+44 Mana Per Second').ItemVisual.set(0).Flags.set(0)
/*Block Rating (-32)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Block Rating').ItemVisual.set(0).Flags.set(0)
/*Expertise Rating (-31)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,37).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Expertise Rating').ItemVisual.set(0).Flags.set(0)
/*Defense Rating (-30)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Defense Rating').ItemVisual.set(0).Flags.set(0)
/*Dodge Rating (-27)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Dodge Rating').ItemVisual.set(0).Flags.set(0)
/*Parry Rating (-28)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,14).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Parry Rating').ItemVisual.set(0).Flags.set(0)
/*Resilience Rating (-27)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,35).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Resilience Rating').ItemVisual.set(0).Flags.set(0)
/*Armor Penetration (-26)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,44).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set('+10 Armor Penetration').ItemVisual.set(0).Flags.set(0)
/*Spell Penetration (-25)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,47).EffectPointsMax.setIndex(0,10).EffectPointsMin.setIndex(0,10).Name.enGB.set('+10 Spell Penetration').ItemVisual.set(0).Flags.set(0)

/*Healing (-24)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,42).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Healing Done').ItemVisual.set(0).Flags.set(0)
/*Intellect (-23)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Intellect').ItemVisual.set(0).Flags.set(0)
/*Spirit (-22)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Spirit').ItemVisual.set(0).Flags.set(0)
/*Spell Power (-21)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Spell Power').ItemVisual.set(0).Flags.set(0)
/*Haste Rating (-20)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,13).EffectPointsMin.setIndex(0,13).Name.enGB.set('+13 Haste Rating').ItemVisual.set(0).Flags.set(0)
/*Strength (-19)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Strength').ItemVisual.set(0).Flags.set(0)
/*Attack Power (-18)*/         DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Agility (-17)*/              DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Agility').ItemVisual.set(0).Flags.set(0)
/*Ranged Attack Power (-16)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,39).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Ranged Attack Power').ItemVisual.set(0).Flags.set(0)
/*Stamina (-15)*/          DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Stamina').ItemVisual.set(0).Flags.set(0)
/*Hit Rating (-14)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Hit Rating').ItemVisual.set(0).Flags.set(0)
/*Critical Strike (-13)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)
/*Health (-12)*/           DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,1).EffectPointsMax.setIndex(0,208).EffectPointsMin.setIndex(0,208).Name.enGB.set('+208 Health').ItemVisual.set(0).Flags.set(0)
/*Mana (-11)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,2).EffectPointsMax.setIndex(0,115).EffectPointsMin.setIndex(0,115).Name.enGB.set('+115 Mana').ItemVisual.set(0).Flags.set(0)
/*Health per 5 (-10)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,46).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Health Per Second').ItemVisual.set(0).Flags.set(0)
/*Mana per 5 (-9)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,43).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Mana Per Second').ItemVisual.set(0).Flags.set(0)
/*Block Rating (-8)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Block Rating').ItemVisual.set(0).Flags.set(0)
/*Expertise Rating (-7)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,37).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Expertise Rating').ItemVisual.set(0).Flags.set(0)
/*Defense Rating (-6)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Defense Rating').ItemVisual.set(0).Flags.set(0)
/*Dodge Rating (-5)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Dodge Rating').ItemVisual.set(0).Flags.set(0)
/*Parry Rating (-4)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,14).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Name.enGB.set('+12 Parry Rating').ItemVisual.set(0).Flags.set(0)
/*Resilience Rating (-3)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,35).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Resilience Rating').ItemVisual.set(0).Flags.set(0)
/*Armor Penetration (-2)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,44).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Armor Penetration').ItemVisual.set(0).Flags.set(0)
/*Spell Penetration (-1)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,47).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Spell Penetration').ItemVisual.set(0).Flags.set(0)

// Cloth Items
addDBC('of Blasphemy',PropertyIndex++,clothTierFourItemEnchantmentIndex,23,22,21,10)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,clothTierFourItemEnchantmentIndex,23,20,21,10)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,clothTierFourItemEnchantmentIndex,20,21,0,10)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,21,14,10)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,9,20,10)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,clothTierFourItemEnchantmentIndex,10,9,0,10)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,13,1,10)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,clothTierFourItemEnchantmentIndex,21,14,13,10)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,clothTierFourItemEnchantmentIndex,12,10,0,10)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,clothTierFourItemEnchantmentIndex,20,14,13,10)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addDBC('of Balance',PropertyIndex++,leatherTierFourItemEnchantmentIndex,17,13,18,5)     /*Agility + Crit + Attackpower              10% Chance*/ 
addDBC('of Aggression',PropertyIndex++,leatherTierFourItemEnchantmentIndex,17,20,18,5)  /*Agility + Haste + Attackpower             10% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,18,0,5)        /*Haste + Attackpower                       10% Chance*/
addDBC('of Lethality',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,18,14,5)   /*Attackpower + Attackpower + Hit           10% Chance*/
addDBC('of Stealth',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,10,20,5)     /*Attackpower + Health per 5 + Haste        10% Chance*/
addDBC('of Vanishing',PropertyIndex++,leatherTierFourItemEnchantmentIndex,5,4,17,5)     /*Agility, Dodge, Parry                     10% Chance*/
addDBC('of Bleeding',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,13,2,5)     /*Attackpower + Crit + Armor Pen            10% Chance*/
addDBC('of Brutality',PropertyIndex++,leatherTierFourItemEnchantmentIndex,18,14,13,5)   /*Attackpower + Hit + Crit                  10% Chance*/
addDBC('of Life',PropertyIndex++,leatherTierFourItemEnchantmentIndex,12,10,0,5)         /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,14,13,5)   /*Haste + Crit + Hit                        10% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,leatherTierFourItemEnchantmentIndex,23,22,21,5)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,leatherTierFourItemEnchantmentIndex,23,20,21,5)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,21,0,5)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,21,14,5)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,9,20,5)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,leatherTierFourItemEnchantmentIndex,10,9,0,5)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,13,1,5)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,leatherTierFourItemEnchantmentIndex,21,14,13,5)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,leatherTierFourItemEnchantmentIndex,12,10,0,5)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,leatherTierFourItemEnchantmentIndex,20,14,13,5)     /*Haste + Crit + Hit                        10% Chance*/

// Mail Items
addDBC('of Pain',PropertyIndex++,mailTierFourItemEnchantmentIndex,19,13,18,5)           /*Strength + Crit + Attackpower             10% Chance*/ 
addDBC('of Revenge',PropertyIndex++,mailTierFourItemEnchantmentIndex,19,20,18,5)        /*Strength + Haste + Attackpower            10% Chance*/
addDBC('of Brutality',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,18,0,5)       /*Haste + Attackpower                       10% Chance*/
addDBC('of Agony',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,18,14,5)          /*Attackpower + Attackpower + Hit           10% Chance*/
addDBC('of Berserking',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,10,20,5)     /*Attackpower + Health per 5 + Haste        10% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,mailTierFourItemEnchantmentIndex,5,4,19,5)  /*Strength, Dodge, Parry                    10% Chance*/
addDBC('of Remorse',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,13,2,5)         /*Attackpower + Crit + Armor Pen            10% Chance*/
addDBC('of Demise',PropertyIndex++,mailTierFourItemEnchantmentIndex,18,14,13,5)         /*Attackpower + Hit + Crit                  10% Chance*/
addDBC('of Life',PropertyIndex++,mailTierFourItemEnchantmentIndex,12,10,0,5)            /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,14,13,5)      /*Haste + Crit + Hit                        10% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,mailTierFourItemEnchantmentIndex,23,22,21,5)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,mailTierFourItemEnchantmentIndex,23,20,21,5)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,21,0,5)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,21,14,5)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,9,20,5)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,mailTierFourItemEnchantmentIndex,10,9,0,5)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,13,1,5)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,mailTierFourItemEnchantmentIndex,21,14,13,5)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,mailTierFourItemEnchantmentIndex,12,10,0,5)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierFourItemEnchantmentIndex,20,14,13,5)     /*Haste + Crit + Hit                        10% Chance*/

// Weapon Enchants
addDBC('of Blasphemy',PropertyIndex++,weaponTierFourItemEnchantmentIndex,47,46,45,3.33)      /*Intellect + Spirit + Spellpower           3.33% Chance*/ 
addDBC('of Potency',PropertyIndex++,weaponTierFourItemEnchantmentIndex,47,44,45,3.33)        /*Intellect + Haste + Spellpower            3.33% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,45,0,3.33)           /*Haste + Spellpower                        3.33% Chance*/
addDBC('of Smiting',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,45,38,3.33)        /*Spellpower + Spellpower + Hit             3.33% Chance*/
addDBC('of Healing',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,33,44,3.33)        /*Spellpower + Mana per 5 + Haste           3.33% Chance*/
addDBC('of Renewal',PropertyIndex++,weaponTierFourItemEnchantmentIndex,34,33,0,3.33)         /*Health per 5 + Mana per 5                 3.33% Chance*/
addDBC('of Blasting',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,37,25,3.33)       /*Spellpower + Crit + Spell Pen             3.33% Chance*/
addDBC('of Destruction',PropertyIndex++,weaponTierFourItemEnchantmentIndex,45,38,37,3.33)    /*Spellpower + Hit + Crit                   3.33% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierFourItemEnchantmentIndex,36,34,0,3.33)            /*Health + Health per 5                     3.33% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,37,38,3.33)      /*Haste + Crit + Hit                        3.33% Chance*/
addDBC('of Balance',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,37,42,3.33)        /*Agility + Crit + Attackpower              3.33% Chance*/ 
addDBC('of Aggression',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,44,42,3.33)     /*Agility + Haste + Attackpower             3.33% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,42,0,3.33)           /*Haste + Attackpower                       3.33% Chance*/
addDBC('of Lethality',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,42,38,3.33)      /*Attackpower + Attackpower + Hit           3.33% Chance*/
addDBC('of Stealth',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,34,44,3.33)        /*Attackpower + Health per 5 + Haste        3.33% Chance*/
addDBC('of Vanishing',PropertyIndex++,weaponTierFourItemEnchantmentIndex,41,27,28,3.33)      /*Agility, Dodge, Parry                     3.33% Chance*/
addDBC('of Bleeding',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,37,26,3.33)       /*Attackpower + Crit + Armor Pen            3.33% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,38,37,3.33)      /*Attackpower + Hit + Crit                  3.33% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierFourItemEnchantmentIndex,36,34,0,3.33)            /*Health + Health per 5                     3.33% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,37,38,3.33)      /*Haste + Crit + Hit                        3.33% Chance*/
addDBC('of Pain',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,37,42,3.33)           /*Strength + Crit + Attackpower             3.33% Chance*/ 
addDBC('of Revenge',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,44,42,3.33)        /*Strength + Haste + Attackpower            3.33% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,42,0,3.33)       /*Haste + Attackpower                       3.33% Chance*/
addDBC('of Agony',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,42,38,3.33)          /*Attackpower + Attackpower + Hit           3.33% Chance*/
addDBC('of Berserking',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,34,44,3.33)     /*Attackpower + Health per 5 + Haste        3.33% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,43,27,28,3.33)/*Strength, Dodge, Parry                    3.33% Chance*/
addDBC('of Remorse',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,37,26,3.33)        /*Attackpower + Crit + Armor Pen            3.33% Chance*/
addDBC('of Demise',PropertyIndex++,weaponTierFourItemEnchantmentIndex,42,37,38,3.33)         /*Attackpower + Hit + Crit                  3.33% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierFourItemEnchantmentIndex,36,34,0,3.33)            /*Health + Health per 5                     3.33% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierFourItemEnchantmentIndex,44,37,38,3.33)      /*Haste + Crit + Hit                        3.33% Chance*/






function addDBC(name: string, propIndex: number, enchIndex:number, index1val: number, index2val: number, index3val: number, chance:number) {
    DBC_ItemRandomProperties.add(propIndex).Name2.enGB.set(name).Enchantment.setIndex(0,SpellItemEnchantmentIndex-index1val).Enchantment.setIndex(1,SpellItemEnchantmentIndex-index2val).Enchantment.setIndex(2,SpellItemEnchantmentIndex-index3val)
    SQL.item_enchantment_template.add(enchIndex,propIndex).chance.set(chance)
}




/*Testing Multiples (WORKS)*/ /*    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Agility\n+5 Strength').ItemVisual.set(0).Flags.set(0) */

/*
int
spirit
spell pwoer
haste
hit
crit
mp5
*/