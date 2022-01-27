import { std } from "tswow-stdlib"
export let MODNAME = 'testing-mod'

export let IncreasedHealth1 = std.Spells.create(MODNAME,'increasedhealth1-spell',34747)
IncreasedHealth1.Name.enGB.set('Invincible')
IncreasedHealth1.Description.enGB.set('Total Health increased by $s1%.')
IncreasedHealth1.AuraDescription.enGB.set('Total Health increased by $s1%.')
IncreasedHealth1.Effects.get(0).Aura.MOD_INCREASE_HEALTH_PERCENT.set()
IncreasedHealth1.Effects.get(0).BasePoints.set(1)
IncreasedHealth1.Effects.get(0).DieSides.set(-1)
IncreasedHealth1.Effects.get(1).Aura.NONE.set()
IncreasedHealth1.Effects.get(2).Aura.NONE.set()
IncreasedHealth1.Duration.set(21)
IncreasedHealth1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
//IncreasedHealth1.Attributes.HIDE_FROM_AURA_BAR.set(true)
IncreasedHealth1.Stacks.set(99)

export let IncreasedDamage1 = std.Spells.create(MODNAME,'increaseddamage1-spell',34747)
IncreasedDamage1.Name.enGB.set('Hardened')
IncreasedDamage1.Description.enGB.set('Total Damage dealt increased by $s1%.')
IncreasedDamage1.AuraDescription.enGB.set('Total Damage dealt increased by $s1%.')
IncreasedDamage1.Effects.get(0).Aura.MOD_DAMAGE_PERCENT_DONE.set()
IncreasedDamage1.Effects.get(0).BasePoints.set(1)
IncreasedDamage1.Effects.get(0).DieSides.set(-1)
IncreasedDamage1.Effects.get(1).Aura.NONE.set()
IncreasedDamage1.Effects.get(2).Aura.NONE.set()
IncreasedDamage1.Duration.set(21)
IncreasedDamage1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedDamage1.Stacks.set(99)

export let IncreasedSpellpower1 = std.Spells.create(MODNAME,'increasedsp1-spell',34747)
IncreasedSpellpower1.Name.enGB.set('Spellbender')
IncreasedSpellpower1.Description.enGB.set('Total Spell Power increased by $s1%.')
IncreasedSpellpower1.AuraDescription.enGB.set('Total Spell Power increased by $s1%.')
IncreasedSpellpower1.Effects.get(0).Aura.MOD_HEALING_DONE_PERCENT.set()
IncreasedSpellpower1.Effects.get(0).BasePoints.set(1)
IncreasedSpellpower1.Effects.get(0).DieSides.set(-1)
IncreasedSpellpower1.Effects.get(1).Aura.MOD_SPELL_DAMAGE_OF_STAT_PERCENT.set()
IncreasedSpellpower1.Effects.get(1).BasePoints.set(1)
IncreasedSpellpower1.Effects.get(1).BasePoints.set(0)
IncreasedSpellpower1.Effects.get(1).MiscValueA.set(126)
IncreasedSpellpower1.Effects.get(1).MiscValueB.set(3)
IncreasedSpellpower1.Effects.get(2).Aura.NONE.set()
IncreasedSpellpower1.Duration.set(21)
IncreasedSpellpower1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedSpellpower1.Stacks.set(99)

export let IncreasedAttackpower1 = std.Spells.create(MODNAME,'increasedap1-spell',34747)
IncreasedAttackpower1.Name.enGB.set('Warlord')
IncreasedAttackpower1.Description.enGB.set('Total Attack Power increased by $s1%.')
IncreasedAttackpower1.AuraDescription.enGB.set('Total Attack Power increased by $s1%.')
IncreasedAttackpower1.Effects.get(0).Aura.MOD_ATTACK_POWER_PCT.set()
IncreasedAttackpower1.Effects.get(0).BasePoints.set(1)
IncreasedAttackpower1.Effects.get(0).DieSides.set(-1)
IncreasedAttackpower1.Effects.get(1).Aura.NONE.set()
IncreasedAttackpower1.Effects.get(2).Aura.NONE.set()
IncreasedAttackpower1.Duration.set(21)
IncreasedAttackpower1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedAttackpower1.Stacks.set(99)

export let IncreasedStamina1 = std.Spells.create(MODNAME,'increasedstamina1-spell',34747)
IncreasedStamina1.Name.enGB.set('Hearty')
IncreasedStamina1.Description.enGB.set('Stamina increased by $s1.')
IncreasedStamina1.AuraDescription.enGB.set('Stamina increased by $s1.')
IncreasedStamina1.Effects.get(0).Type.APPLY_AURA.set()
IncreasedStamina1.Effects.get(0).Aura.MOD_STAT.set()
IncreasedStamina1.Effects.get(0).BasePoints.set(10)
IncreasedStamina1.Effects.get(0).DieSides.set(-1)
IncreasedStamina1.Effects.get(0).MiscValueA.set(2)                          //Stat 2 - Stamina
IncreasedStamina1.Effects.get(1).Aura.NONE.set()
IncreasedStamina1.Effects.get(2).Aura.NONE.set()
IncreasedStamina1.Duration.set(21)
IncreasedStamina1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedStamina1.Stacks.set(99)

export let IncreasedStrength1 = std.Spells.create(MODNAME,'increasedstrength1-spell',34747)
IncreasedStrength1.Name.enGB.set('Resolute')
IncreasedStrength1.Description.enGB.set('Strength increased by $s1.')
IncreasedStrength1.AuraDescription.enGB.set('Strength increased by $s1.')
IncreasedStrength1.Effects.get(0).Type.APPLY_AURA.set()
IncreasedStrength1.Effects.get(0).Aura.MOD_STAT.set()
IncreasedStrength1.Effects.get(0).BasePoints.set(10)
IncreasedStrength1.Effects.get(0).DieSides.set(-1)
IncreasedStrength1.Effects.get(0).MiscValueA.set(0)                         //Stat 0 - Strength
IncreasedStrength1.Effects.get(1).Aura.NONE.set()
IncreasedStrength1.Effects.get(2).Aura.NONE.set()
IncreasedStrength1.Duration.set(21)
IncreasedStrength1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedStrength1.Stacks.set(99)

export let IncreasedIntellect1 = std.Spells.create(MODNAME,'increasedintellect1-spell',34747)
IncreasedIntellect1.Name.enGB.set('Wise')
IncreasedIntellect1.Description.enGB.set('Intellect increased by $s1.')
IncreasedIntellect1.AuraDescription.enGB.set('Intellect increased by $s1.')
IncreasedIntellect1.Effects.get(0).Type.APPLY_AURA.set()
IncreasedIntellect1.Effects.get(0).Aura.MOD_STAT.set()
IncreasedIntellect1.Effects.get(0).BasePoints.set(10)
IncreasedIntellect1.Effects.get(0).DieSides.set(-1)
IncreasedIntellect1.Effects.get(0).MiscValueA.set(3)                         //Stat 3 - Intellect
IncreasedIntellect1.Effects.get(1).Aura.NONE.set()
IncreasedIntellect1.Effects.get(2).Aura.NONE.set()
IncreasedIntellect1.Duration.set(21)
IncreasedIntellect1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedIntellect1.Stacks.set(99)

export let IncreasedAgility1 = std.Spells.create(MODNAME,'increasedagility1-spell',34747)
IncreasedAgility1.Name.enGB.set('Agile')
IncreasedAgility1.Description.enGB.set('Agility increased by $s1.')
IncreasedAgility1.AuraDescription.enGB.set('Agility increased by $s1.')
IncreasedAgility1.Effects.get(0).Type.APPLY_AURA.set()
IncreasedAgility1.Effects.get(0).Aura.MOD_STAT.set()
IncreasedAgility1.Effects.get(0).BasePoints.set(10)
IncreasedAgility1.Effects.get(0).DieSides.set(-1)
IncreasedAgility1.Effects.get(0).MiscValueA.set(1)                         //Stat 1 - Agility
IncreasedAgility1.Effects.get(1).Aura.NONE.set()
IncreasedAgility1.Effects.get(2).Aura.NONE.set()
IncreasedAgility1.Duration.set(21)
IncreasedAgility1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedAgility1.Stacks.set(99)

export let IncreasedCrit1 = std.Spells.create(MODNAME,'increasedcrit1-spell',34747)
IncreasedCrit1.Name.enGB.set('Tactful Strikes')
IncreasedCrit1.Description.enGB.set('Critical Strike increased by $s1.')
IncreasedCrit1.AuraDescription.enGB.set('Critical Strike increased by $s1.')
IncreasedCrit1.Effects.get(0).Type.APPLY_AURA.set()
IncreasedCrit1.Effects.get(0).Aura.MOD_RATING.set()
IncreasedCrit1.Effects.get(0).BasePoints.set(10)
IncreasedCrit1.Effects.get(0).DieSides.set(-1)
IncreasedCrit1.Effects.get(0).MiscValueA.set(1792)                         //Stat 1792 - Critical Strike
IncreasedCrit1.Effects.get(1).Aura.NONE.set()
IncreasedCrit1.Effects.get(2).Aura.NONE.set()
IncreasedCrit1.Duration.set(21)
IncreasedCrit1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedCrit1.Stacks.set(99)

export let IncreasedResist1 = std.Spells.create(MODNAME,'increasedresist1-spell',34747)
IncreasedResist1.Name.enGB.set('Resistant')
IncreasedResist1.Description.enGB.set('All resistances increased by $s1.')
IncreasedResist1.AuraDescription.enGB.set('All resistances increased by $s1.')
IncreasedResist1.Effects.get(0).Type.APPLY_AURA.set()
IncreasedResist1.Effects.get(0).Aura.MOD_RESISTANCE.set()
IncreasedResist1.Effects.get(0).BasePoints.set(10)
IncreasedResist1.Effects.get(0).DieSides.set(-1)
IncreasedResist1.Effects.get(0).MiscValueA.set(126)                         //Stat 126 - Resistances
IncreasedResist1.Effects.get(1).Aura.NONE.set()
IncreasedResist1.Effects.get(2).Aura.NONE.set()
IncreasedResist1.Duration.set(21)
IncreasedResist1.Attributes.REACTIVATE_AT_RESURRECT.set(true)
IncreasedResist1.Stacks.set(99)