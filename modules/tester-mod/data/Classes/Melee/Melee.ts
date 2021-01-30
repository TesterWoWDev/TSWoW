import { std } from 'tswow-stdlib';

const TSWOW_TESTMODULE = "tester-mod"
export const MELEE_CLASS = std.Classes.create(TSWOW_TESTMODULE,'melee','MELEE','WARRIOR');

MELEE_CLASS.addRaces(['HUMAN','ORC','DWARF','GNOME','BLOODELF','DRAENEI','NIGHTELF','TAUREN','TROLL','UNDEAD']);
MELEE_CLASS.Name.enGB.set('Melee');
MELEE_CLASS.UI.ClassButton.setPos(40,-460)
MELEE_CLASS.RequiredExpansion.set(1)
MELEE_CLASS.EquipSkills.OneHandedSwords.setAuto();
MELEE_CLASS.EquipSkills.TwoHandedSwords.setAuto();
MELEE_CLASS.EquipSkills.Maces.setAuto();
MELEE_CLASS.EquipSkills.TwoHandedMaces.setAuto();
MELEE_CLASS.EquipSkills.OneHandedAxes.setAuto();
MELEE_CLASS.EquipSkills.TwoHandedAxes.setAuto();
MELEE_CLASS.EquipSkills.Thrown.setAuto();
MELEE_CLASS.EquipSkills.Polearms.setAuto();
MELEE_CLASS.EquipSkills.Shield.setAuto();
MELEE_CLASS.EquipSkills.Mail.setAuto();
MELEE_CLASS.EquipSkills.Plate.setAuto();

// MELEE_CLASS.StartGear.Mainhand.set(41821)

// MELEE_CLASS.UI.TCoords.set(0.5,0.75,0.5,0.75);

// Change the stats
MELEE_CLASS.UI.Color.set(0xcc0077)
MELEE_CLASS.UI.Info.add('- Role: Damage, Tank')
MELEE_CLASS.UI.Info.add('- Heavy Armor (mail,plate)')
MELEE_CLASS.UI.Info.add('- tanki')
MELEE_CLASS.UI.Info.add('- Uses rage as a resource')
MELEE_CLASS.UI.Description.set("I handle all the front lines")

// Spell Crit
MELEE_CLASS.Stats.SpellCrit.set((x,level)=>0.000005*level)
// Melee crit
MELEE_CLASS.Stats.MeleeCrit.set((x,level)=>0.00008*level)


export const JUGGERNAUT_SKILL = std.SkillLines.createClass(TSWOW_TESTMODULE,'juggernaut-skill',MELEE_CLASS.ID)
JUGGERNAUT_SKILL.Name.enGB.set(`Juggernaut`)
JUGGERNAUT_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')

export const KNIGHT_SKILL = std.SkillLines.createClass(TSWOW_TESTMODULE,'knight-skill',MELEE_CLASS.ID)
KNIGHT_SKILL.Name.enGB.set(`Knight`)
KNIGHT_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')

export const DEFENDER_SKILL = std.SkillLines.createClass(TSWOW_TESTMODULE,'defender-skill',MELEE_CLASS.ID)
DEFENDER_SKILL.Name.enGB.set(`Defender`)
DEFENDER_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')

export const ASSASSINATION_SKILL = std.SkillLines.createClass(TSWOW_TESTMODULE,'assassination-skill',MELEE_CLASS.ID)
ASSASSINATION_SKILL.Name.enGB.set(`Assassination`)
ASSASSINATION_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')