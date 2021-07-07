import { DBC_ItemRandomProperties } from "wotlkdata/dbc/types/ItemRandomProperties"
import { DBC_SpellItemEnchantment } from "wotlkdata/dbc/types/SpellItemEnchantment"
import { SQL } from "wotlkdata/sql/SQLFiles"
import { redColorCode } from "../../functions/gem-functions"
import { attackpower3 } from "../../spells/attack-power-spells"
import { spellpower3 } from "../../spells/spell-power-spells"

let PropertyIndex = 2800
let SpellItemEnchantmentIndex = 6300
export let clothTierThreeItemEnchantmentIndex = 15008
export let leatherTierThreeItemEnchantmentIndex = 15009
export let mailTierThreeItemEnchantmentIndex = 15010
export let weaponTierThreeItemEnchantmentIndex = 15011


/*On Use : Attack Power (-60)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,7).EffectArg.setIndex(0,attackpower3.ID).Name.enGB.set('Increases attack power by 200 for 10 seconds.').ItemVisual.set(0).Flags.set(0)
/*On Use : Spell Power (-59)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,7).EffectArg.setIndex(0,spellpower3.ID).Name.enGB.set('Increases spell power by 200 for 10 seconds.').ItemVisual.set(0).Flags.set(0)

/*Chance : Shadow Bolt (-58)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,56).Name.enGB.set(redColorCode + '+ Chance on Hit : Stuns target for 3 seconds.').ItemVisual.set(0).Flags.set(0)
/*Chance : Healing (-57)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,2054).Name.enGB.set(redColorCode + '+ Chance on Hit : Heal 341.').ItemVisual.set(0).Flags.set(0)
/*Chance : Thunderfury (-56)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,21992).Name.enGB.set(redColorCode + '+ Chance on Hit : Lightning Blast.').ItemVisual.set(0).Flags.set(0)
/*Chance : Shadow Bolt (-55)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,13440).Name.enGB.set(redColorCode + '+ Chance on Hit : Shadow Bolt.').ItemVisual.set(0).Flags.set(0)

/*Omnipotence Weapon (-54)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,19).EffectPointsMin.setIndex(0,19).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,19).EffectPointsMin.setIndex(1,19).Name.enGB.set('+19 Agility\n+19 Strength').ItemVisual.set(0).Flags.set(0)
/*Omnipotence Weapon (-53)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,19).EffectPointsMin.setIndex(0,19).Effect.setIndex(1,5).EffectArg.setIndex(1,7).EffectPointsMax.setIndex(1,22).EffectPointsMin.setIndex(1,22).Name.enGB.set('+19 Intellect\n+22 Stamina').ItemVisual.set(0).Flags.set(0)
/*Omnipotence Weapon (-52)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,36).EffectPointsMin.setIndex(0,36).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,36).EffectPointsMin.setIndex(1,36).Name.enGB.set('+36 Spell Power\n+36 Attack Power').ItemVisual.set(0).Flags.set(0)

/*Omnipotence (-51)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,7).EffectPointsMin.setIndex(1,7).Name.enGB.set('+7 Agility\n+7 Strength').ItemVisual.set(0).Flags.set(0)
/*Omnipotence (-50)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,7).EffectPointsMin.setIndex(0,7).Effect.setIndex(1,5).EffectArg.setIndex(1,7).EffectPointsMax.setIndex(1,9).EffectPointsMin.setIndex(1,9).Name.enGB.set('+7 Intellect\n+9 Stamina').ItemVisual.set(0).Flags.set(0)
/*Omnipotence (-49)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,11).EffectPointsMin.setIndex(0,11).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,11).EffectPointsMin.setIndex(1,11).Name.enGB.set('+11 Spell Power\n+11 Attack Power').ItemVisual.set(0).Flags.set(0)

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