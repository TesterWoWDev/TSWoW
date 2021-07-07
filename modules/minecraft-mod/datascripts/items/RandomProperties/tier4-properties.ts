import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { redColorCode } from "../../functions/gem-functions"

let PropertyIndex = 3000
let SpellItemEnchantmentIndex = 6500
export let clothTierFourItemEnchantmentIndex = 15012
export let leatherTierFourItemEnchantmentIndex = 15013
export let mailTierFourItemEnchantmentIndex = 15014
export let weaponTierFourItemEnchantmentIndex = 15015



/*Chance : Shadow Bolt (-58)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,56).Name.enGB.set(redColorCode + '+ Chance on Hit : Stuns target for 3 seconds.').ItemVisual.set(0).Flags.set(0)
/*Chance : Healing (-57)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,2054).Name.enGB.set(redColorCode + '+ Chance on Hit : Heal 341.').ItemVisual.set(0).Flags.set(0)
/*Chance : Thunderfury (-56)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,21992).Name.enGB.set(redColorCode + '+ Chance on Hit : Lightning Blast.').ItemVisual.set(0).Flags.set(0)
/*Chance : Shadow Bolt (-55)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,13440).Name.enGB.set(redColorCode + '+ Chance on Hit : Shadow Bolt.').ItemVisual.set(0).Flags.set(0)

/*Omnipotence Weapon (-54)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,24).EffectPointsMin.setIndex(1,24).Name.enGB.set('+24 Agility\n+24 Strength').ItemVisual.set(0).Flags.set(0)
/*Omnipotence Weapon (-53)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Effect.setIndex(1,5).EffectArg.setIndex(1,7).EffectPointsMax.setIndex(1,34).EffectPointsMin.setIndex(1,34).Name.enGB.set('+24 Intellect\n+34 Stamina').ItemVisual.set(0).Flags.set(0)
/*Omnipotence Weapon (-52)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,48).EffectPointsMin.setIndex(0,48).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,48).EffectPointsMin.setIndex(1,48).Name.enGB.set('+48 Spell Power\n+48 Attack Power').ItemVisual.set(0).Flags.set(0)

/*Omnipotence (-51)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,12).EffectPointsMin.setIndex(1,12).Name.enGB.set('+12 Agility\n+12 Strength').ItemVisual.set(0).Flags.set(0)
/*Omnipotence (-50)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,12).EffectPointsMin.setIndex(0,12).Effect.setIndex(1,5).EffectArg.setIndex(1,7).EffectPointsMax.setIndex(1,14).EffectPointsMin.setIndex(1,14).Name.enGB.set('+12 Intellect\n+14 Stamina').ItemVisual.set(0).Flags.set(0)
/*Omnipotence (-49)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set('+16 Spell Power\n+16 Attack Power').ItemVisual.set(0).Flags.set(0)

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

// Chance on Hit Effects
addDBC('of the Jailer',PropertyIndex++,weaponTierFourItemEnchantmentIndex,58,0,0,1)            /*Chance to Stun                    1% Chance*/
addDBC('of the Lightning Thief',PropertyIndex++,weaponTierFourItemEnchantmentIndex,56,0,0,1)   /*Chance to Thunderfury             1% Chance*/
addDBC('of the Immortal',PropertyIndex++,weaponTierFourItemEnchantmentIndex,57,0,0,1)          /*Chance to Heal                    1% Chance*/
addDBC('of the Shadow Storm',PropertyIndex++,weaponTierFourItemEnchantmentIndex,55,0,0,1)      /*Chance to Send Shadowbolts        1% Chance*/

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