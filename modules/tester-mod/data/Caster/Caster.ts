import { std } from 'tswow-stdlib';

const TSWOW_TESTMODULE = "tester-mod"
export const CASTER_CLASS = std.Classes.create(TSWOW_TESTMODULE,'caster','CASTER','MAGE');

export const NECROMANCER_ROBE = std.Items.create(TSWOW_TESTMODULE,'cls',56).Visual.row.Texture.set

CASTER_CLASS.addRaces(['HUMAN','ORC','BLOODELF','DRAENEI', 'NIGHTELF']);
CASTER_CLASS.Name.enGB.set('Caster');
CASTER_CLASS.UI.ClassButton.setPos(-52,-460)
CASTER_CLASS.RequiredExpansion.set(1)
CASTER_CLASS.EquipSkills.Staves.setAuto();
CASTER_CLASS.EquipSkills.Cloth.setAuto();
CASTER_CLASS.EquipSkills.Polearms.setAuto();
// CASTER_CLASS.StartGear.Mainhand.set(41821)

// CASTER_CLASS.UI.TCoords.set(0.5,0.75,0.5,0.75);

// Change the stats
CASTER_CLASS.UI.Color.set(0xcc0077)
CASTER_CLASS.UI.Info.add('- Role: Damage, Healer')
CASTER_CLASS.UI.Info.add('- Light Armor (Cloth)')
CASTER_CLASS.UI.Info.add('- Magiky')
CASTER_CLASS.UI.Info.add('- Uses mana as a resource')
CASTER_CLASS.UI.Description.set("I handle all the magic")

// Spell Crit = 0.1*level
CASTER_CLASS.Stats.SpellCrit.set((x,level)=>0.000005*level)
// Melee crit = 0.1*level
CASTER_CLASS.Stats.MeleeCrit.set((x,level)=>0.00008*level)


export const DEATH_SKILL = std.SkillLines.createClass(TSWOW_TESTMODULE,'death-skill',CASTER_CLASS.ID)
DEATH_SKILL.Name.enGB.set(`Death`)
DEATH_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')