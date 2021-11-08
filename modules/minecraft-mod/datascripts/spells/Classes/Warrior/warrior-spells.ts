import { std } from "tswow-stdlib"
import { MODNAME } from "../../../modname"

let FuriousStrikeRank01 = std.Spells.create(MODNAME,'furiousstrikerank01',13737)
FuriousStrikeRank01.Name.enGB.set('Furious Strike')
FuriousStrikeRank01.Description.enGB.set('Furiously lash at your enemy, dealing $s1% weapon damage + $s2.')
FuriousStrikeRank01.Cooldown.set(2000,0,0,0)
FuriousStrikeRank01.Duration.modRefCopy(value=>{
    value.set(0,0,0)
})
FuriousStrikeRank01.Effects.get(0).BasePoints.set(24)                               //Rank 1 - 25% weapon damage + 10
//FuriousStrikeRank01.Effects.get(1).EffectType.setSchoolDamage()
FuriousStrikeRank01.Effects.get(1).Type.WEAPON_DAMAGE.set()
FuriousStrikeRank01.Effects.get(1).BasePoints.set(9)
FuriousStrikeRank01.Effects.get(1).Aura.set(0)
FuriousStrikeRank01.Icon.setPath('Spell_Fire_EnchantWeapon')

let FuriousStrikeRank02 = std.Spells.create(MODNAME,'furiousstrikerank02',13737)
FuriousStrikeRank02.Name.enGB.set('Furious Strike')
FuriousStrikeRank02.Description.enGB.set('Furiously lash at your enemy, dealing $s1% weapon damage + $s2.')
FuriousStrikeRank02.Cooldown.set(2000,0,0,0)
FuriousStrikeRank02.Duration.modRefCopy(value=>{
    value.set(0,0,0)
})
FuriousStrikeRank02.Effects.get(0).BasePoints.set(49)                               //Rank 2 - 50% weapon damage + 30
FuriousStrikeRank02.Effects.get(1).Type.WEAPON_DAMAGE.set()
FuriousStrikeRank02.Effects.get(1).BasePoints.set(29)
FuriousStrikeRank02.Effects.get(1).Aura.set(0)
FuriousStrikeRank02.Icon.setPath('Spell_Fire_EnchantWeapon')

let FuriousStrikeRank03 = std.Spells.create(MODNAME,'furiousstrikerank03',13737)
FuriousStrikeRank03.Name.enGB.set('Furious Strike')
FuriousStrikeRank03.Description.enGB.set('Furiously lash at your enemy, dealing $s1% weapon damage + $s2.')
FuriousStrikeRank03.Cooldown.set(2000,0,0,0)
FuriousStrikeRank03.Duration.modRefCopy(value=>{
    value.set(0,0,0)
})
FuriousStrikeRank03.Effects.get(0).BasePoints.set(74)                               //Rank 3 - 75% weapon damage + 50
FuriousStrikeRank03.Effects.get(1).Type.WEAPON_DAMAGE.set()
FuriousStrikeRank03.Effects.get(1).BasePoints.set(49)
FuriousStrikeRank03.Effects.get(1).Aura.set(0)
FuriousStrikeRank03.Icon.setPath('Spell_Fire_EnchantWeapon')

let FuriousStrikeRank04 = std.Spells.create(MODNAME,'furiousstrikerank04',13737)
FuriousStrikeRank04.Name.enGB.set('Furious Strike')
FuriousStrikeRank04.Description.enGB.set('Furiously lash at your enemy, dealing $s1% weapon damage + $s2.')
FuriousStrikeRank04.Cooldown.set(2000,0,0,0)
FuriousStrikeRank04.Duration.modRefCopy(value=>{
    value.set(0,0,0)
})
FuriousStrikeRank04.Effects.get(0).BasePoints.set(99)                               //Rank 4 - 100% weapon damage + 70
FuriousStrikeRank04.Effects.get(1).Type.WEAPON_DAMAGE.set()
FuriousStrikeRank04.Effects.get(1).BasePoints.set(69)
FuriousStrikeRank04.Effects.get(1).Aura.set(0)
FuriousStrikeRank04.Icon.setPath('Spell_Fire_EnchantWeapon')


let Vengeance01 = std.Spells.create(MODNAME,'vengeance01',16551)
Vengeance01.Name.enGB.set('Vengeance')
Vengeance01.Description.enGB.set('For $d, increase your critical strike chance by $s1% and chance to hit by $s2%.')
Vengeance01.AuraDescription.enGB.set('Critical Strike and Hit Chance increased by $s1%.')
Vengeance01.Name.enGB.set('Vengeance')
Vengeance01.Duration.modRefCopy(value=>{
    value.set(5000,0,5000)
})
Vengeance01.Effects.get(0).BasePoints.set(24)                               //Rank 1 - 5 seconds, 25% hit chance, 25% crit chance
Vengeance01.Effects.get(1).BasePoints.set(24)
Vengeance01.Icon.setPath('INV_Banner_03')

let Vengeance02 = std.Spells.create(MODNAME,'vengeance02',16551)
Vengeance02.Name.enGB.set('Vengeance')
Vengeance02.Description.enGB.set('For $d, increase your critical strike chance by $s1% and chance to hit by $s2%.')
Vengeance02.AuraDescription.enGB.set('Critical Strike and Hit Chance increased by $s1%.')
Vengeance02.Name.enGB.set('Vengeance')
Vengeance02.Duration.modRefCopy(value=>{
    value.set(6000,0,6000)
})
Vengeance02.Effects.get(0).BasePoints.set(49)                               //Rank 2 - 6 seconds, 50% hit chance, 50% crit chance
Vengeance02.Effects.get(1).BasePoints.set(49)
Vengeance02.Icon.setPath('INV_Banner_03')

let Vengeance03 = std.Spells.create(MODNAME,'vengeance03',16551)
Vengeance03.Name.enGB.set('Vengeance')
Vengeance03.Description.enGB.set('For $d, increase your critical strike chance by $s1% and chance to hit by $s2%.')
Vengeance03.AuraDescription.enGB.set('Critical Strike and Hit Chance increased by $s1%.')
Vengeance03.Name.enGB.set('Vengeance')
Vengeance03.Duration.modRefCopy(value=>{
    value.set(7000,0,7000)
})
Vengeance03.Effects.get(0).BasePoints.set(74)                               //Rank 3 - 7 seconds, 75% hit chance, 75% crit chance
Vengeance03.Effects.get(1).BasePoints.set(74)
Vengeance03.Icon.setPath('INV_Banner_03')

let Vengeance04 = std.Spells.create(MODNAME,'vengeance04',16551)
Vengeance04.Name.enGB.set('Vengeance')
Vengeance04.Description.enGB.set('For $d, increase your critical strike chance by $s1% and chance to hit by $s2%.')
Vengeance04.AuraDescription.enGB.set('Critical Strike and Hit Chance increased by $s1%.')
Vengeance04.Name.enGB.set('Vengeance')
Vengeance04.Duration.modRefCopy(value=>{
    value.set(8000,0,8000)
})
Vengeance04.Effects.get(0).BasePoints.set(99)                               //Rank 4 - 8 seconds, 100% hit chance, 100% crit chance
Vengeance04.Effects.get(1).BasePoints.set(99)
Vengeance04.Icon.setPath('INV_Banner_03')
