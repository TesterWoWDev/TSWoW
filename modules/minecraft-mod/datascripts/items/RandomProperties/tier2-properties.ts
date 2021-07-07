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

/*On Use : Health (-61)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,7).EffectArg.setIndex(0,health2.ID).Name.enGB.set('Increases health by 750 for 18 seconds.').ItemVisual.set(0).Flags.set(0)
/*On Use : Attack Power (-60)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,7).EffectArg.setIndex(0,attackpower2.ID).Name.enGB.set('Increases attack power by 150 for 10 seconds.').ItemVisual.set(0).Flags.set(0)
/*On Use : Spell Power (-59)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,7).EffectArg.setIndex(0,spellpower2.ID).Name.enGB.set('Increases spell power by 150 for 10 seconds.').ItemVisual.set(0).Flags.set(0)
/*Chance : Shadow Bolt (-58)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,chanceStun2.ID).Name.enGB.set(redColorCode + 'Chance on Hit : Stuns target for 2 seconds.').ItemVisual.set(0).Flags.set(0)
/*Chance : Healing (-57)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,chanceHeal2.ID).Name.enGB.set(redColorCode + 'Chance on Hit : Heal 250.').ItemVisual.set(0).Flags.set(0)
/*Chance : Thunderfury (-56)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,chanceLightning2.ID).Name.enGB.set(redColorCode + 'Chance on Hit : Lightning Blast for 175 damage.').ItemVisual.set(0).Flags.set(0)
/*Chance : Shadow Bolt (-55)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,1).EffectArg.setIndex(0,chanceShadow2.ID).Name.enGB.set(redColorCode + 'Chance on Hit : Shadow Bolt for 80 damage.').ItemVisual.set(0).Flags.set(0)
/*Omnipotence Weapon (-54)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,14).EffectPointsMin.setIndex(1,14).Name.enGB.set('+14 Agility\n+14 Strength').ItemVisual.set(0).Flags.set(0)
/*Omnipotence Weapon (-53)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Effect.setIndex(1,5).EffectArg.setIndex(1,7).EffectPointsMax.setIndex(1,16).EffectPointsMin.setIndex(1,16).Name.enGB.set('+14 Intellect\n+16 Stamina').ItemVisual.set(0).Flags.set(0)
/*Omnipotence Weapon (-52)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,26).EffectPointsMin.setIndex(0,26).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,26).EffectPointsMin.setIndex(1,26).Name.enGB.set('+26 Spell Power\n+26 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Omnipotence (-51)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,4).EffectPointsMax.setIndex(1,4).EffectPointsMin.setIndex(1,4).Name.enGB.set('+4 Agility\n+4 Strength').ItemVisual.set(0).Flags.set(0)
/*Omnipotence (-50)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Effect.setIndex(1,5).EffectArg.setIndex(1,7).EffectPointsMax.setIndex(1,6).EffectPointsMin.setIndex(1,6).Name.enGB.set('+4 Intellect\n+6 Stamina').ItemVisual.set(0).Flags.set(0)
/*Omnipotence (-49)*/ DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Effect.setIndex(1,5).EffectArg.setIndex(1,38).EffectPointsMax.setIndex(1,9).EffectPointsMin.setIndex(1,9).Name.enGB.set('+9 Spell Power\n+9 Attack Power').ItemVisual.set(0).Flags.set(0)

/*Healing (-48)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,42).EffectPointsMax.setIndex(0,26).EffectPointsMin.setIndex(0,26).Name.enGB.set('+26 Healing Done').ItemVisual.set(0).Flags.set(0)
/*Intellect (-47)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Intellect').ItemVisual.set(0).Flags.set(0)
/*Spirit (-46)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set('+22 Spirit').ItemVisual.set(0).Flags.set(0)
/*Spell Power (-45)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,26).EffectPointsMin.setIndex(0,26).Name.enGB.set('+26 Spell Power').ItemVisual.set(0).Flags.set(0)
/*Haste Rating (-44)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Haste Rating').ItemVisual.set(0).Flags.set(0)
/*Strength (-43)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Strength').ItemVisual.set(0).Flags.set(0)
/*Attack Power (-42)*/         DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,26).EffectPointsMin.setIndex(0,26).Name.enGB.set('+26 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Agility (-41)*/              DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,14).EffectPointsMin.setIndex(0,14).Name.enGB.set('+14 Agility').ItemVisual.set(0).Flags.set(0)
/*Ranged Attack Power (-40)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,39).EffectPointsMax.setIndex(0,26).EffectPointsMin.setIndex(0,26).Name.enGB.set('+26 Ranged Attack Power').ItemVisual.set(0).Flags.set(0)
/*Stamina (-39)*/          DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,16).EffectPointsMin.setIndex(0,16).Name.enGB.set('+16 Stamina').ItemVisual.set(0).Flags.set(0)
/*Hit Rating (-38)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,22).EffectPointsMin.setIndex(0,22).Name.enGB.set('+22 Hit Rating').ItemVisual.set(0).Flags.set(0)
/*Critical Strike (-37)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Name.enGB.set('+24 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)
/*Health (-36)*/           DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,1).EffectPointsMax.setIndex(0,275).EffectPointsMin.setIndex(0,275).Name.enGB.set('+275 Health').ItemVisual.set(0).Flags.set(0)
/*Mana (-35)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,2).EffectPointsMax.setIndex(0,250).EffectPointsMin.setIndex(0,250).Name.enGB.set('+250 Mana').ItemVisual.set(0).Flags.set(0)
/*Health per 5 (-34)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,46).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Name.enGB.set('+24 Health Per Second').ItemVisual.set(0).Flags.set(0)
/*Mana per 5 (-33)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,43).EffectPointsMax.setIndex(0,24).EffectPointsMin.setIndex(0,24).Name.enGB.set('+24 Mana Per Second').ItemVisual.set(0).Flags.set(0)
/*Block Rating (-32)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Block Rating').ItemVisual.set(0).Flags.set(0)
/*Expertise Rating (-31)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,37).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Expertise Rating').ItemVisual.set(0).Flags.set(0)
/*Defense Rating (-30)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Defense Rating').ItemVisual.set(0).Flags.set(0)
/*Dodge Rating (-27)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Dodge Rating').ItemVisual.set(0).Flags.set(0)
/*Parry Rating (-28)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,14).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Parry Rating').ItemVisual.set(0).Flags.set(0)
/*Resilience Rating (-27)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,35).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Resilience Rating').ItemVisual.set(0).Flags.set(0)
/*Armor Penetration (-26)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,44).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set('+6 Armor Penetration').ItemVisual.set(0).Flags.set(0)
/*Spell Penetration (-25)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,47).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set('+6 Spell Penetration').ItemVisual.set(0).Flags.set(0)

/*Healing (-24)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,42).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Healing Done').ItemVisual.set(0).Flags.set(0)
/*Intellect (-23)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,5).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Intellect').ItemVisual.set(0).Flags.set(0)
/*Spirit (-22)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,6).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set('+6 Spirit').ItemVisual.set(0).Flags.set(0)
/*Spell Power (-21)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,45).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Spell Power').ItemVisual.set(0).Flags.set(0)
/*Haste Rating (-20)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,36).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Haste Rating').ItemVisual.set(0).Flags.set(0)
/*Strength (-19)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,4).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Strength').ItemVisual.set(0).Flags.set(0)
/*Attack Power (-18)*/         DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,38).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Attack Power').ItemVisual.set(0).Flags.set(0)
/*Agility (-17)*/              DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,3).EffectPointsMax.setIndex(0,4).EffectPointsMin.setIndex(0,4).Name.enGB.set('+4 Agility').ItemVisual.set(0).Flags.set(0)
/*Ranged Attack Power (-16)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,39).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set('+6 Ranged Attack Power').ItemVisual.set(0).Flags.set(0)
/*Stamina (-15)*/          DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,7).EffectPointsMax.setIndex(0,6).EffectPointsMin.setIndex(0,6).Name.enGB.set('+6 Stamina').ItemVisual.set(0).Flags.set(0)
/*Hit Rating (-14)*/       DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,31).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Hit Rating').ItemVisual.set(0).Flags.set(0)
/*Critical Strike (-13)*/  DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,32).EffectPointsMax.setIndex(0,8).EffectPointsMin.setIndex(0,8).Name.enGB.set('+8 Critical Strike Rating').ItemVisual.set(0).Flags.set(0)
/*Health (-12)*/           DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,1).EffectPointsMax.setIndex(0,108).EffectPointsMin.setIndex(0,108).Name.enGB.set('+108 Health').ItemVisual.set(0).Flags.set(0)
/*Mana (-11)*/             DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,2).EffectPointsMax.setIndex(0,66).EffectPointsMin.setIndex(0,66).Name.enGB.set('+66 Mana').ItemVisual.set(0).Flags.set(0)
/*Health per 5 (-10)*/     DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,46).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Health Per Second').ItemVisual.set(0).Flags.set(0)
/*Mana per 5 (-9)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,43).EffectPointsMax.setIndex(0,9).EffectPointsMin.setIndex(0,9).Name.enGB.set('+9 Mana Per Second').ItemVisual.set(0).Flags.set(0)
/*Block Rating (-8)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,15).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Block Rating').ItemVisual.set(0).Flags.set(0)
/*Expertise Rating (-7)*/    DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,37).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Expertise Rating').ItemVisual.set(0).Flags.set(0)
/*Defense Rating (-6)*/      DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,12).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Defense Rating').ItemVisual.set(0).Flags.set(0)
/*Dodge Rating (-5)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,13).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Dodge Rating').ItemVisual.set(0).Flags.set(0)
/*Parry Rating (-4)*/        DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,14).EffectPointsMax.setIndex(0,5).EffectPointsMin.setIndex(0,5).Name.enGB.set('+5 Parry Rating').ItemVisual.set(0).Flags.set(0)
/*Resilience Rating (-3)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,35).EffectPointsMax.setIndex(0,2).EffectPointsMin.setIndex(0,2).Name.enGB.set('+2 Resilience Rating').ItemVisual.set(0).Flags.set(0)
/*Armor Penetration (-2)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,44).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Armor Penetration').ItemVisual.set(0).Flags.set(0)
/*Spell Penetration (-1)*/   DBC_SpellItemEnchantment.add(SpellItemEnchantmentIndex++).Effect.setIndex(0,5).EffectArg.setIndex(0,47).EffectPointsMax.setIndex(0,3).EffectPointsMin.setIndex(0,3).Name.enGB.set('+3 Spell Penetration').ItemVisual.set(0).Flags.set(0)

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