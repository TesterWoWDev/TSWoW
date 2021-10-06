import { std } from "tswow-stdlib"
import { MODNAME } from "../../modname"

export let ChampionOnKillSpell = std.Spells.create(MODNAME,'championkill-spell',68251)
ChampionOnKillSpell.Name.enGB.set('Champion')
ChampionOnKillSpell.Description.enGB.set('You have beaten a Champion Scroll Challenge.')
ChampionOnKillSpell.AuraDescription.enGB.set('All stats increased by $s1 and experience gained has been increased by $s2%.')
ChampionOnKillSpell.Duration.set(6000000,0,6000000)
ChampionOnKillSpell.Effects.get(0).BasePoints.set(99)
ChampionOnKillSpell.Effects.get(1).EffectType.setApplyAura()
ChampionOnKillSpell.Effects.get(1).BasePoints.set(99)
ChampionOnKillSpell.Effects.get(1).DieSides.set(1)
ChampionOnKillSpell.Effects.get(1).ImplicitTargetA.setUnitCaster()
ChampionOnKillSpell.Effects.get(1).AuraType.setModXpPct()
ChampionOnKillSpell.Attributes.isHiddenInSpellbook.clear()
