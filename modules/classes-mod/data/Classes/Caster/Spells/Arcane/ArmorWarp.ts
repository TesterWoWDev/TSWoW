import { std } from "tswow-stdlib"
import { CASTER_CLASS } from "../../Caster";
import { ARCANE_SKILL } from "../../Caster";

const CURSE = std.Spells.load(1490)
const ARCANE_BARRAGE = std.Spells.load(4425)
const ARC_Skill = std.Spells.create('arcane-spell','armor-warp',1490)
const ArmorWarp2 = std.Spells.create('arcane-spell','armor-warp-rank-2',11721).SkillLines.add(ARCANE_SKILL.ID).setAutolearn().end

const ArmorWarp3 = std.Spells.create('arcane-spell','armor-warp-rank-3',11722).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end;

const ArmorWarp4 = std.Spells.create('arcane-spell','armor-warp-rank-4',27228).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end;

const ArmorWarp5 = std.Spells.create('arcane-spell','armor-warp-rank-4',47865).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end;



ARC_Skill.Name.enGB.set('Armor Warp')
ARC_Skill.Description.enGB.set('Age a target\'s armor with time magics, reducing their spell resistances by $s1 and increasing magic damage taken by $s2% for 30 seconds.')
ARC_Skill.SkillLines.add(ARCANE_SKILL.ID)
ARC_Skill.Icon.set('Interface\\Icons\\spell_holy_dispelmagic')
ARC_Skill.Levels.Base.set(8)
ARC_Skill.Levels.Spell.set(8)
ARC_Skill.DispelType.set(1)
ARC_Skill.DefenseType.set(1)
ARC_Skill.Duration.set(30000,0,0)
ARC_Skill.Power.setMana(20,40,0,0,0)
ARC_Skill.Effects.get(0).BasePoints.set(-21)
ARC_Skill.Effects.get(1).BasePoints.set(2)





