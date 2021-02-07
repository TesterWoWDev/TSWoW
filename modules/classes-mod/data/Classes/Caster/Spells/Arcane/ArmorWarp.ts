import { std } from "tswow-stdlib"
import { ARCANE_SKILL } from "../../Caster";
import { ARCANE_TRAINER_ALLY } from "./ArcaneTrainer";

const ARC_Skill = std.Spells.create('arcane-spell','armor-warp-rank-1',1490).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end
    ARCANE_TRAINER_ALLY.Trainer.addSpell(ARC_Skill.ID,10,8)
    ARC_Skill.Name.enGB.set('Armor Warp')
    ARC_Skill.Description.enGB.set('Age a target\'s armor with time magics, reducing their spell resistances by $s1 and increasing magic damage taken by $s2% for 30 seconds.')
    ARC_Skill.Icon.set('Interface\\Icons\\spell_holy_dispelmagic')
    ARC_Skill.Levels.Base.set(8)
    ARC_Skill.Levels.Spell.set(8)
    ARC_Skill.DispelType.set(1)
    ARC_Skill.DefenseType.set(1)
    ARC_Skill.Duration.set(30000,0,0)
    ARC_Skill.Power.setMana(20,40,0,0,0)
    ARC_Skill.Effects.get(0).BasePoints.set(-21)
    ARC_Skill.Effects.get(1).BasePoints.set(2)

const ArmorWarp2 = std.Spells.create('arcane-spell','armor-warp-rank-2',11721).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end
    ArmorWarp2.Name.enGB.set('Armor Warp')
    ArmorWarp2.Icon.set('Interface\\Icons\\spell_holy_dispelmagic')
    ArmorWarp2.Description.enGB.set('Age a target\'s armor with time magics, reducing their spell resistances by $s1 and increasing magic damage taken by $s2% for 30 seconds.')   
    ArmorWarp2.Effects.get(0).BasePoints.set(-33)
    ArmorWarp2.Effects.get(1).BasePoints.set(4)
    ARCANE_TRAINER_ALLY.Trainer.addSpell(ArmorWarp2.ID,25,18)

const ArmorWarp3 = std.Spells.create('arcane-spell','armor-warp-rank-3',11722).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end;
    ArmorWarp3.Name.enGB.set('Armor Warp')
    ArmorWarp3.Icon.set('Interface\\Icons\\spell_holy_dispelmagic')
    ArmorWarp3.Description.enGB.set('Age a target\'s armor with time magics, reducing their spell resistances by $s1 and increasing magic damage taken by $s2% for 30 seconds.')
    ArmorWarp3.Effects.get(0).BasePoints.set(-39)
    ArmorWarp3.Effects.get(1).BasePoints.set(7)
    ARCANE_TRAINER_ALLY.Trainer.addSpell(ArmorWarp3.ID,67,26)

const ArmorWarp4 = std.Spells.create('arcane-spell','armor-warp-rank-4',27228).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end;
    ArmorWarp4.Name.enGB.set('Armor Warp')
    ArmorWarp4.Icon.set('Interface\\Icons\\spell_holy_dispelmagic')
    ArmorWarp4.Description.enGB.set('Age a target\'s armor with time magics, reducing their spell resistances by $s1 and increasing magic damage taken by $s2% for 30 seconds.')
    ArmorWarp4.Effects.get(0).BasePoints.set(-46)
    ARCANE_TRAINER_ALLY.Trainer.addSpell(ArmorWarp4.ID,400,32)

const ArmorWarp5 = std.Spells.create('arcane-spell','armor-warp-rank-5',47865).SkillLines.add(ARCANE_SKILL.ID).AcquireMethod.set(0).end;
    ArmorWarp5.Name.enGB.set('Armor Warp')
    ArmorWarp5.Icon.set('Interface\\Icons\\spell_holy_dispelmagic')
    ArmorWarp5.Description.enGB.set('Age a target\'s armor with time magics, reducing their spell resistances by $s1 and increasing magic damage taken by $s2% for 30 seconds.')
    ArmorWarp5.Effects.get(0).BasePoints.set(-52)
    ARCANE_TRAINER_ALLY.Trainer.addSpell(ArmorWarp5.ID,600,40)






