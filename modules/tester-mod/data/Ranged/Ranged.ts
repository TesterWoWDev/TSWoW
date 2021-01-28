import { std } from 'tswow-stdlib';
import { SQL } from 'wotlkdata';

const TSWOW_TESTMODULE = "tester-mod"
export const RANGED_CLASS = std.Classes.create(TSWOW_TESTMODULE,'ranged','RANGED','HUNTER');

export const NECROMANCER_ROBE = std.Items.create(TSWOW_TESTMODULE,'cls',56).Visual.row.Texture.set

RANGED_CLASS.addRaces(['HUMAN','ORC','DWARF','GNOME','BLOODELF','DRAENEI','NIGHTELF','TAUREN','TROLL','UNDEAD']);
RANGED_CLASS.Name.enGB.set('Ranged');
RANGED_CLASS.RequiredExpansion.set(1)
RANGED_CLASS.UI.ClassButton.setPos(-6,-460)
RANGED_CLASS.EquipSkills.Polearms.setAuto();
RANGED_CLASS.EquipSkills.Thrown.setAuto();
RANGED_CLASS.EquipSkills.Guns.setAuto();
RANGED_CLASS.EquipSkills.Daggers.setAuto();
RANGED_CLASS.EquipSkills.FistWeapons.setAuto();
RANGED_CLASS.EquipSkills.Crossbows.setAuto();
RANGED_CLASS.EquipSkills.Bows.setAuto();
RANGED_CLASS.EquipSkills.Leather.setAuto();
RANGED_CLASS.EquipSkills.Mail.setAuto();
RANGED_CLASS.DisplayPower.set(3)
SQL.player_classlevelstats.find({class:14}).basemana.set(0)
// RANGED_CLASS.StartGear.Mainhand.set(41821)
// RANGED_CLASS.UI.TCoords.set(0.5,0.75,0.5,0.75);

// Change the stats
RANGED_CLASS.UI.Color.set(0xcc0077)
RANGED_CLASS.UI.Info.add('- Role: Damage')
RANGED_CLASS.UI.Info.add('- Medium Armor (Leather,Mail)')
RANGED_CLASS.UI.Info.add('- pokey boi')
RANGED_CLASS.UI.Info.add('- Uses energy as a resource')
RANGED_CLASS.UI.Description.set("I handle all the poke")

// Spell Crit = 0.1*level
RANGED_CLASS.Stats.SpellCrit.set((x,level)=>0.000005*level)
// Melee crit = 0.1*level
RANGED_CLASS.Stats.MeleeCrit.set((x,level)=>0.00008*level)


export const BEAST_SKILL = std.SkillLines.createClass(TSWOW_TESTMODULE,'beast-skill',RANGED_CLASS.ID)
BEAST_SKILL.Name.enGB.set(`Beasiary`)
BEAST_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')