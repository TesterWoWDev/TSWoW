import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"
import { DBC } from "wotlkdata/dbc/DBCFiles"
import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"

let PropertyIndex = 2800
let SpellItemEnchantmentIndex = 6300
export let clothTierThreeItemEnchantmentIndex = 15008
export let leatherTierThreeItemEnchantmentIndex = 15009
export let mailTierThreeItemEnchantmentIndex = 15010
export let weaponTierThreeItemEnchantmentIndex = 15011

/*Healing (-48)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,42).EffectPointsMax.setIndex(0,36).EffectPointsMin.setIndex(0,36).Name.enGB.set('+36 Healing Done').ItemVisual.set(0).Flags.set(0)
/*Intellect (-47)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,19).EffectPointsMin.setIndex(0,19).Name.enGB.set('+19 Intellect').ItemVisual.set(0).Flags.set(0)
/*Spirit (-46)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,27).EffectPointsMin.setIndex(0,27).Name.enGB.set('+27 Spirit').ItemVisual.set(0).Flags.set(0)
/*Spell Power (-45)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,36).EffectPointsMin.setIndex(0,36).Name.enGB.set('+36 Spell Power').ItemVisual.set(0).Flags.set(0)
/*Haste Rating (-44)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,19).EffectPointsMin.setIndex(0,19).Name.enGB.set('+19 Haste Rating').ItemVisual.set(0).Flags.set(0)
/*Strength (-43)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,19).EffectPointsMin.setIndex(0,19).Name.enGB.set('+19 Strength').ItemVisual.set(0).Flags.set(0)
/*Attack Power (-42)*/         DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,36).EffectPointsMin.setIndex(0,36).Name.enGB.set('+36 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Agility (-41)*/              DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,19).EffectPointsMin.setIndex(0,19).Name.enGB.set('+19 Agility').ItemVisual.set(0).Flags.set(0)
/*Ranged Attack Power (-40)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,39).EffectPointsMax.setIndex(0,36).EffectPointsMin.setIndex(0,36).Name.enGB.set('+36 Ranged Attack Power').ItemVisual.set(0).Flags.set(0)
/*Stamina (-39)*/          DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set('+22 Stamina').ItemVisual.set(0).Flags.set(0)
/*Hit Rating (-38)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,27).EffectPointsMin.setIndex(0,27).Name.enGB.set('+27 Hit Rating').ItemVisual.set(0).Flags.set(0)
/*Critical Strike (-37)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,31).EffectPointsMin.setIndex(0,31).Name.enGB.set('+31 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)
/*Health (-36)*/           DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,1).EffectPointsMax.setIndex(0,275).EffectPointsMin.setIndex(0,275).Name.enGB.set('+275 Health').ItemVisual.set(0).Flags.set(0)
/*Mana (-35)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,2).EffectPointsMax.setIndex(0,250).EffectPointsMin.setIndex(0,250).Name.enGB.set('+250 Mana').ItemVisual.set(0).Flags.set(0)
/*Health per 5 (-34)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,46).EffectPointsMax.setIndex(0,31).EffectPointsMin.setIndex(0,31).Name.enGB.set('+31 Health Per Second').ItemVisual.set(0).Flags.set(0)
/*Mana per 5 (-33)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,43).EffectPointsMax.setIndex(0,31).EffectPointsMin.setIndex(0,31).Name.enGB.set('+31 Mana Per Second').ItemVisual.set(0).Flags.set(0)
/*Block Rating (-32)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Block Rating').ItemVisual.set(0).Flags.set(0)
/*Expertise Rating (-31)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,37).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Expertise Rating').ItemVisual.set(0).Flags.set(0)
/*Defense Rating (-30)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Defense Rating').ItemVisual.set(0).Flags.set(0)
/*Dodge Rating (-27)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Dodge Rating').ItemVisual.set(0).Flags.set(0)
/*Parry Rating (-28)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,14).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Parry Rating').ItemVisual.set(0).Flags.set(0)
/*Resilience Rating (-27)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,35).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Resilience Rating').ItemVisual.set(0).Flags.set(0)
/*Armor Penetration (-26)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,44).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Name.enGB.set('+8 Armor Penetration').ItemVisual.set(0).Flags.set(0)
/*Spell Penetration (-25)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,47).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Name.enGB.set('+8 Spell Penetration').ItemVisual.set(0).Flags.set(0)

/*Healing (-24)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,42).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Healing Done').ItemVisual.set(0).Flags.set(0)
/*Intellect (-23)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Intellect').ItemVisual.set(0).Flags.set(0)
/*Spirit (-22)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Spirit').ItemVisual.set(0).Flags.set(0)
/*Spell Power (-21)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Spell Power').ItemVisual.set(0).Flags.set(0)
/*Haste Rating (-20)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Name.enGB.set('+8 Haste Rating').ItemVisual.set(0).Flags.set(0)
/*Strength (-19)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Strength').ItemVisual.set(0).Flags.set(0)
/*Attack Power (-18)*/         DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Agility (-17)*/              DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Agility').ItemVisual.set(0).Flags.set(0)
/*Ranged Attack Power (-16)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,39).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Ranged Attack Power').ItemVisual.set(0).Flags.set(0)
/*Stamina (-15)*/          DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Stamina').ItemVisual.set(0).Flags.set(0)
/*Hit Rating (-14)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Hit Rating').ItemVisual.set(0).Flags.set(0)
/*Critical Strike (-13)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)
/*Health (-12)*/           DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,1).EffectPointsMax.setIndex(0,165).EffectPointsMin.setIndex(0,165).Name.enGB.set('+165 Health').ItemVisual.set(0).Flags.set(0)
/*Mana (-11)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,2).EffectPointsMax.setIndex(0,88).EffectPointsMin.setIndex(0,88).Name.enGB.set('+88 Mana').ItemVisual.set(0).Flags.set(0)
/*Health per 5 (-10)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,46).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Health Per Second').ItemVisual.set(0).Flags.set(0)
/*Mana per 5 (-9)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,43).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Name.enGB.set('+11 Mana Per Second').ItemVisual.set(0).Flags.set(0)
/*Block Rating (-8)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Block Rating').ItemVisual.set(0).Flags.set(0)
/*Expertise Rating (-7)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,37).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Expertise Rating').ItemVisual.set(0).Flags.set(0)
/*Defense Rating (-6)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Defense Rating').ItemVisual.set(0).Flags.set(0)
/*Dodge Rating (-5)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Dodge Rating').ItemVisual.set(0).Flags.set(0)
/*Parry Rating (-4)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,14).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Name.enGB.set('+7 Parry Rating').ItemVisual.set(0).Flags.set(0)
/*Resilience Rating (-3)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,35).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Resilience Rating').ItemVisual.set(0).Flags.set(0)
/*Armor Penetration (-2)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,44).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Armor Penetration').ItemVisual.set(0).Flags.set(0)
/*Spell Penetration (-1)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,47).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Spell Penetration').ItemVisual.set(0).Flags.set(0)

// Cloth Items
addDBC('of Blasphemy',PropertyIndex++,clothTierThreeItemEnchantmentIndex,23,22,21,10)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,clothTierThreeItemEnchantmentIndex,23,20,21,10)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,clothTierThreeItemEnchantmentIndex,20,21,0,10)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,21,14,10)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,9,20,10)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,clothTierThreeItemEnchantmentIndex,10,9,0,10)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,13,1,10)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,clothTierThreeItemEnchantmentIndex,21,14,13,10)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,clothTierThreeItemEnchantmentIndex,12,10,0,10)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,clothTierThreeItemEnchantmentIndex,20,14,13,10)     /*Haste + Crit + Hit                        10% Chance*/

// Leather Items - MELEE
addDBC('of Balance',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,17,13,18,5)     /*Agility + Crit + Attackpower              10% Chance*/ 
addDBC('of Aggression',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,17,20,18,5)  /*Agility + Haste + Attackpower             10% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,20,18,0,5)        /*Haste + Attackpower                       10% Chance*/
addDBC('of Lethality',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,18,14,5)   /*Attackpower + Attackpower + Hit           10% Chance*/
addDBC('of Stealth',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,10,20,5)     /*Attackpower + Health per 5 + Haste        10% Chance*/
addDBC('of Vanishing',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,5,4,17,5)     /*Agility, Dodge, Parry                     10% Chance*/
addDBC('of Bleeding',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,13,2,5)     /*Attackpower + Crit + Armor Pen            10% Chance*/
addDBC('of Brutality',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,18,14,13,5)   /*Attackpower + Hit + Crit                  10% Chance*/
addDBC('of Life',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,12,10,0,5)         /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,20,14,13,5)   /*Haste + Crit + Hit                        10% Chance*/
// Leather Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,23,22,21,5)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,23,20,21,5)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,20,21,0,5)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,21,14,5)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,9,20,5)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,10,9,0,5)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,13,1,5)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,21,14,13,5)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,12,10,0,5)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,leatherTierThreeItemEnchantmentIndex,20,14,13,5)     /*Haste + Crit + Hit                        10% Chance*/

// Mail Items
addDBC('of Pain',PropertyIndex++,mailTierThreeItemEnchantmentIndex,19,13,18,5)           /*Strength + Crit + Attackpower             10% Chance*/ 
addDBC('of Revenge',PropertyIndex++,mailTierThreeItemEnchantmentIndex,19,20,18,5)        /*Strength + Haste + Attackpower            10% Chance*/
addDBC('of Brutality',PropertyIndex++,mailTierThreeItemEnchantmentIndex,20,18,0,5)       /*Haste + Attackpower                       10% Chance*/
addDBC('of Agony',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,18,14,5)          /*Attackpower + Attackpower + Hit           10% Chance*/
addDBC('of Berserking',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,10,20,5)     /*Attackpower + Health per 5 + Haste        10% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,mailTierThreeItemEnchantmentIndex,5,4,19,5)  /*Strength, Dodge, Parry                    10% Chance*/
addDBC('of Remorse',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,13,2,5)         /*Attackpower + Crit + Armor Pen            10% Chance*/
addDBC('of Demise',PropertyIndex++,mailTierThreeItemEnchantmentIndex,18,14,13,5)         /*Attackpower + Hit + Crit                  10% Chance*/
addDBC('of Life',PropertyIndex++,mailTierThreeItemEnchantmentIndex,12,10,0,5)            /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierThreeItemEnchantmentIndex,20,14,13,5)      /*Haste + Crit + Hit                        10% Chance*/
// Mail Items - CASTER
addDBC('of Blasphemy',PropertyIndex++,mailTierThreeItemEnchantmentIndex,23,22,21,5)     /*Intellect + Spirit + Spellpower           10% Chance*/ 
addDBC('of Potency',PropertyIndex++,mailTierThreeItemEnchantmentIndex,23,20,21,5)       /*Intellect + Haste + Spellpower            10% Chance*/
addDBC('of Power',PropertyIndex++,mailTierThreeItemEnchantmentIndex,20,21,0,5)          /*Haste + Spellpower                        10% Chance*/
addDBC('of Smiting',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,21,14,5)       /*Spellpower + Spellpower + Hit             10% Chance*/
addDBC('of Healing',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,9,20,5)        /*Spellpower + Mana per 5 + Haste           10% Chance*/
addDBC('of Renewal',PropertyIndex++,mailTierThreeItemEnchantmentIndex,10,9,0,5)         /*Health per 5 + Mana per 5                 10% Chance*/
addDBC('of Blasting',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,13,1,5)       /*Spellpower + Crit + Spell Pen             10% Chance*/
addDBC('of Destruction',PropertyIndex++,mailTierThreeItemEnchantmentIndex,21,14,13,5)   /*Spellpower + Hit + Crit                   10% Chance*/
addDBC('of Life',PropertyIndex++,mailTierThreeItemEnchantmentIndex,12,10,0,5)           /*Health + Health per 5                     10% Chance*/
addDBC('of Swiftness',PropertyIndex++,mailTierThreeItemEnchantmentIndex,20,14,13,5)     /*Haste + Crit + Hit                        10% Chance*/

// Weapon Enchants
addDBC('of Blasphemy',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,47,46,45,3.33)      /*Intellect + Spirit + Spellpower           3.33% Chance*/ 
addDBC('of Potency',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,47,44,45,3.33)        /*Intellect + Haste + Spellpower            3.33% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,45,0,3.33)           /*Haste + Spellpower                        3.33% Chance*/
addDBC('of Smiting',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,45,38,3.33)        /*Spellpower + Spellpower + Hit             3.33% Chance*/
addDBC('of Healing',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,33,44,3.33)        /*Spellpower + Mana per 5 + Haste           3.33% Chance*/
addDBC('of Renewal',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,34,33,0,3.33)         /*Health per 5 + Mana per 5                 3.33% Chance*/
addDBC('of Blasting',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,37,25,3.33)       /*Spellpower + Crit + Spell Pen             3.33% Chance*/
addDBC('of Destruction',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,45,38,37,3.33)    /*Spellpower + Hit + Crit                   3.33% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,36,34,0,3.33)            /*Health + Health per 5                     3.33% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,37,38,3.33)      /*Haste + Crit + Hit                        3.33% Chance*/
addDBC('of Balance',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,41,37,42,3.33)        /*Agility + Crit + Attackpower              3.33% Chance*/ 
addDBC('of Aggression',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,41,44,42,3.33)     /*Agility + Haste + Attackpower             3.33% Chance*/
addDBC('of Power',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,42,0,3.33)           /*Haste + Attackpower                       3.33% Chance*/
addDBC('of Lethality',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,42,38,3.33)      /*Attackpower + Attackpower + Hit           3.33% Chance*/
addDBC('of Stealth',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,34,44,3.33)        /*Attackpower + Health per 5 + Haste        3.33% Chance*/
addDBC('of Vanishing',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,41,27,28,3.33)      /*Agility, Dodge, Parry                     3.33% Chance*/
addDBC('of Bleeding',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,37,26,3.33)       /*Attackpower + Crit + Armor Pen            3.33% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,38,37,3.33)      /*Attackpower + Hit + Crit                  3.33% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,36,34,0,3.33)            /*Health + Health per 5                     3.33% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,37,38,3.33)      /*Haste + Crit + Hit                        3.33% Chance*/
addDBC('of Pain',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,43,37,42,3.33)           /*Strength + Crit + Attackpower             3.33% Chance*/ 
addDBC('of Revenge',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,43,44,42,3.33)        /*Strength + Haste + Attackpower            3.33% Chance*/
addDBC('of Brutality',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,42,0,3.33)       /*Haste + Attackpower                       3.33% Chance*/
addDBC('of Agony',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,42,38,3.33)          /*Attackpower + Attackpower + Hit           3.33% Chance*/
addDBC('of Berserking',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,34,44,3.33)     /*Attackpower + Health per 5 + Haste        3.33% Chance*/
addDBC('of Resourcefulness',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,43,27,28,3.33)/*Strength, Dodge, Parry                    3.33% Chance*/
addDBC('of Remorse',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,37,26,3.33)        /*Attackpower + Crit + Armor Pen            3.33% Chance*/
addDBC('of Demise',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,42,37,38,3.33)         /*Attackpower + Hit + Crit                  3.33% Chance*/
addDBC('of Life',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,36,34,0,3.33)            /*Health + Health per 5                     3.33% Chance*/
addDBC('of Swiftness',PropertyIndex++,weaponTierThreeItemEnchantmentIndex,44,37,38,3.33)      /*Haste + Crit + Hit                        3.33% Chance*/






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