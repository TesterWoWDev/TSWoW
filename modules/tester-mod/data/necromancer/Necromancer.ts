import { std } from 'tswow-stdlib';

const TSWOW_TESTMODULE = "tester-mod"
export const NECROMANCER_CLASS = 
std.Classes.create(TSWOW_TESTMODULE,'necromancer','NECROMANCER','MAGE');

export const NECROMANCER_ROBE = std.Items.create(TSWOW_TESTMODULE,'cls',56).Visual.row.Texture.set

NECROMANCER_CLASS.addRaces(['HUMAN','ORC','BLOODELF','UNDEAD']);
NECROMANCER_CLASS.Name.enGB.set('Necromancer');

NECROMANCER_CLASS.EquipSkills.Staves.setAuto();
NECROMANCER_CLASS.EquipSkills.Cloth.setAuto();
NECROMANCER_CLASS.EquipSkills.Polearms.setAuto();
NECROMANCER_CLASS.StartGear.Mainhand.set(41821)
NECROMANCER_CLASS.StartGear.Ranged.set(39134)
NECROMANCER_CLASS.StartGear.Chest.set(42844)

// NECROMANCER_CLASS.UI.TCoords.set(0.5,0.75,0.5,0.75);
// NECROMANCER_CLASS.UI.ClassButton.setPos(85,-420)

// Change the stats
NECROMANCER_CLASS.UI.Color.set(0xcc0077)
NECROMANCER_CLASS.UI.Info.add('- Role: Damage, Tank')
NECROMANCER_CLASS.UI.Info.add('- Light Armor (Cloth)')
NECROMANCER_CLASS.UI.Info.add('- Controls multiple undead servants')
NECROMANCER_CLASS.UI.Info.add('- Uses mana as a resource')
NECROMANCER_CLASS.UI.Description.set("Necromancers raise and control the undead, and brings plague and destruction on their enemies. Necromancy is strictly forbidden in both Horde and Alliance societies, and those who practice it can only do so in absolute secrecy.")

// Spell Crit = 0.1*level
NECROMANCER_CLASS.Stats.SpellCrit.set((x,level)=>0.000005*level)
// Melee crit = 0.1*level
NECROMANCER_CLASS.Stats.MeleeCrit.set((x,level)=>0.00008*level)


export const NECROMANCY_SKILL = std.SkillLines
	.createClass(TSWOW_TESTMODULE,'necromancy-skill',NECROMANCER_CLASS.ID)
NECROMANCY_SKILL.Name.enGB.set(`Necromancy`)
NECROMANCY_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')

// Truly the epitome of creativity
export const PESTILENCE_SKILL = std.SkillLines.createClass(TSWOW_TESTMODULE,'death-skill',NECROMANCER_CLASS.ID)
PESTILENCE_SKILL.Name.enGB.set(`Pestilence`)
PESTILENCE_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_DeathCoil')