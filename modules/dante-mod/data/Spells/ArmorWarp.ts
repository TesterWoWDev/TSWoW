import { std } from "tswow-stdlib"

const CURSE = std.Spells.load(1490)
const ARCANE_BARRAGE = std.Spells.load(4425)
const ARC_Skill = std.Spells.create('arcane-spell','armor-warp',1490)

ARC_Skill.Name.enGB.set('Armor Warp')
ARC_Skill.Description.enGB.set('Age a target\'s armor with time magics, reducing their spell resistances by $s1 and increasing magic damage taken by $s2% for 30 seconds.')
ARC_Skill.SkillLines
ARC_Skill.Icon.set('Interface\\Icons\\spell_holy_dispelmagic')
ARC_Skill.Levels.Base.set(8)
ARC_Skill.Levels.Spell.set(8)
ARC_Skill.DispelType.set(1)
ARC_Skill.DefenseType.set(1)
ARC_Skill.Duration.set(30000,0,0)
ARC_Skill.Power.setMana(20,40,0,0,0)
ARC_Skill.Effects.get(0).BasePoints.set(-21)
ARC_Skill.Effects.get(1).BasePoints.set(2)





