import { std } from "wow/wotlk";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { MODNAME } from "../modname";
import { torghastInsideCurrency, torghastOrb } from "./torghast-master-script-entities";

/**spell ideas
onKill do explosion
bonus auto attack range
mob oncombat check heal targetopen cage give buff
option to gain a currency rather than a buff
free revive, only works once
onKill increase health to a cap
add shop with currency
bodyguard for current run/temp time
damaging spells and ablities empoyer you, stacking, duration 5s
thorns effect
regen hp per 5
knock back on hit, with cd
when close to death, explode for damage
item to spawn a bunch of mobs for you
looting X gives you a stacking shield
random spawned mimic that looks like orb, but spawns enemy
double damage, take %hp per second
spells chance to heal you
spells stacking movespeed
AoE reduce enemy cast times
immunity for X seconds, but will kill you if you dont leave floor
sunfire cape spell

ascend floor, gain bonus damage(ex 15%), lose max health(ex 5%)

external of torghast bonuses, like %bonus or higher chance for spawns, something that incentivises replayabiity
*/
export let IncreasedHealth1 = std.Spells.create(MODNAME,"increasedhealth1-spell",34747);
IncreasedHealth1.Name.enGB.set("Invincible");
IncreasedHealth1.Description.enGB.set("Total Health increased by $s1%.");
IncreasedHealth1.AuraDescription.enGB.set("Total Health increased by $s1%.");
IncreasedHealth1.Effects.get(0).Aura.MOD_INCREASE_HEALTH_PERCENT.set();
IncreasedHealth1.Effects.get(0).PointsBase.set(14);
IncreasedHealth1.Effects.get(0).PointsDieSides.set(1);
IncreasedHealth1.Effects.get(1).Aura.NONE.set();
IncreasedHealth1.Effects.get(2).Aura.NONE.set();
IncreasedHealth1.Duration.set(21);
IncreasedHealth1.Attributes.REACTIVATE_AT_RESURRECT.set(true);
IncreasedHealth1.Attributes.PERSISTS_DEATH.set(1)
IncreasedHealth1.row.Attributes.set(
IncreasedHealth1.row.Attributes.get() + 0x80000000);
IncreasedHealth1.AuraInterruptFlags.set(0x0080000);
IncreasedHealth1.Stacks.set(99);
IncreasedHealth1.Icon.setPath("Spell_Holy_MindVision");
addSpellToTorghastScript(IncreasedHealth1,0,1,0)

export let IncreasedDamage1 = std.Spells.create(MODNAME,"increaseddamage1-spell",34747);
IncreasedDamage1.Name.enGB.set("Hardened");
IncreasedDamage1.Description.enGB.set("Total Damage dealt increased by $s1%.");
IncreasedDamage1.AuraDescription.enGB.set("Total Damage dealt increased by $s1%.");
IncreasedDamage1.Effects.get(0).Aura.MOD_DAMAGE_PERCENT_DONE.set();
IncreasedDamage1.Effects.get(0).PointsBase.set(14);
IncreasedDamage1.Effects.get(0).PointsDieSides.set(1);
IncreasedDamage1.Effects.get(1).Aura.NONE.set();
IncreasedDamage1.Effects.get(2).Aura.NONE.set();
IncreasedDamage1.Duration.set(21);
IncreasedDamage1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedDamage1.AuraInterruptFlags.set(0x0080000);
IncreasedDamage1.Stacks.set(99);
IncreasedDamage1.Icon.setPath("Ability_Warrior_InnerRage");
addSpellToTorghastScript(IncreasedDamage1,0,2,0)

export let ShadowyFigure = std.Spells.create(MODNAME,"shadowyfigure-spell",31213);
ShadowyFigure.Name.enGB.set("Shadowed");
ShadowyFigure.Description.enGB.set("Reduces damage taken by AOE attacks by $s1%.");
ShadowyFigure.AuraDescription.enGB.set("Reduces damage taken by AOE attacks by $s1%.");
ShadowyFigure.Effects.get(0).PointsBase.set(-31);
ShadowyFigure.Effects.get(0).PointsDieSides.set(1);
ShadowyFigure.Duration.set(21);
ShadowyFigure.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ShadowyFigure.AuraInterruptFlags.set(0x0080000);
ShadowyFigure.Stacks.set(99);
ShadowyFigure.Icon.setPath("Spell_Shadow_Haunting");
addSpellToTorghastScript(ShadowyFigure,0,3,1)

export let IncreasedSpellpower1 = std.Spells.create(MODNAME,"increasedsp1-spell",34747);
IncreasedSpellpower1.Name.enGB.set("Spellbender");
IncreasedSpellpower1.Description.enGB.set("Total Spell Power increased by $s1%.");
IncreasedSpellpower1.AuraDescription.enGB.set("Total Spell Power increased by $s1%.");
IncreasedSpellpower1.Effects.get(0).Aura.MOD_SPELL_HEALING_OF_STAT_PERCENT.set();
IncreasedSpellpower1.Effects.get(0).PointsBase.set(9);
IncreasedSpellpower1.Effects.get(0).PointsDieSides.set(1);
IncreasedSpellpower1.Effects.get(1).Aura.MOD_SPELL_DAMAGE_OF_STAT_PERCENT.set();
IncreasedSpellpower1.Effects.get(1).PointsBase.set(9);
IncreasedSpellpower1.Effects.get(1).PointsBase.set(0);
IncreasedSpellpower1.Effects.get(1).MiscValueA.set(126);
IncreasedSpellpower1.Effects.get(1).MiscValueB.set(3);
IncreasedSpellpower1.Effects.get(2).Aura.NONE.set();
IncreasedSpellpower1.Duration.set(21);
IncreasedSpellpower1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedSpellpower1.AuraInterruptFlags.set(0x0080000);
IncreasedSpellpower1.Stacks.set(99);
IncreasedSpellpower1.Icon.setPath("Spell_Nature_AstralRecalGroup");
addSpellToTorghastScript(IncreasedSpellpower1,0,2,0)

export let IncreasedAttackpower1 = std.Spells.create(MODNAME,"increasedap1-spell",34747);
IncreasedAttackpower1.Name.enGB.set("Warlord");
IncreasedAttackpower1.Description.enGB.set("Total Attack Power increased by $s1%.");
IncreasedAttackpower1.AuraDescription.enGB.set("Total Attack Power increased by $s1%.");
IncreasedAttackpower1.Effects.get(0).Aura.MOD_ATTACK_POWER_PCT.set();
IncreasedAttackpower1.Effects.get(0).PointsBase.set(9);
IncreasedAttackpower1.Effects.get(0).PointsDieSides.set(1);
IncreasedAttackpower1.Effects.get(1).Aura.NONE.set();
IncreasedAttackpower1.Effects.get(2).Aura.NONE.set();
IncreasedAttackpower1.Duration.set(21);
IncreasedAttackpower1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedAttackpower1.AuraInterruptFlags.set(0x0080000);
IncreasedAttackpower1.Stacks.set(99);
IncreasedAttackpower1.Icon.setPath("Ability_Druid_ChallangingRoar");
addSpellToTorghastScript(IncreasedAttackpower1,0,3,0)

export let IncreasedStamina1 = std.Spells.create(MODNAME,"increasedstamina1-spell",34747);
IncreasedStamina1.Name.enGB.set("Hearty");
IncreasedStamina1.Description.enGB.set("Stamina increased by $s1.");
IncreasedStamina1.AuraDescription.enGB.set("Stamina increased by $s1.");
IncreasedStamina1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedStamina1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedStamina1.Effects.get(0).PointsBase.set(49);
IncreasedStamina1.Effects.get(0).PointsDieSides.set(1);
IncreasedStamina1.Effects.get(0).MiscValueA.set(2); //Stat 2 - Stamina
IncreasedStamina1.Effects.get(1).Aura.NONE.set();
IncreasedStamina1.Effects.get(2).Aura.NONE.set();
IncreasedStamina1.Duration.set(21);
IncreasedStamina1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedStamina1.AuraInterruptFlags.set(0x0080000);
IncreasedStamina1.Stacks.set(99);
IncreasedStamina1.Icon.setPath("INV_Misc_Organ_06");
addSpellToTorghastScript(IncreasedStamina1,0,4,0)

export let IncreasedStrength1 = std.Spells.create(MODNAME,"increasedstrength1-spell",34747);
IncreasedStrength1.Name.enGB.set("Resolute");
IncreasedStrength1.Description.enGB.set("Strength increased by $s1.");
IncreasedStrength1.AuraDescription.enGB.set("Strength increased by $s1.");
IncreasedStrength1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedStrength1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedStrength1.Effects.get(0).PointsBase.set(49);
IncreasedStrength1.Effects.get(0).PointsDieSides.set(1);
IncreasedStrength1.Effects.get(0).MiscValueA.set(0); //Stat 0 - Strength
IncreasedStrength1.Effects.get(1).Aura.NONE.set();
IncreasedStrength1.Effects.get(2).Aura.NONE.set();
IncreasedStrength1.Duration.set(21);
IncreasedStrength1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedStrength1.AuraInterruptFlags.set(0x0080000);
IncreasedStrength1.Stacks.set(99);
IncreasedStrength1.Icon.setPath("INV_Relics_TotemofRage");
addSpellToTorghastScript(IncreasedStrength1,0,1,0)

export let IncreasedIntellect1 = std.Spells.create(MODNAME,"increasedintellect1-spell",34747);
IncreasedIntellect1.Name.enGB.set("Wise");
IncreasedIntellect1.Description.enGB.set("Intellect increased by $s1.");
IncreasedIntellect1.AuraDescription.enGB.set("Intellect increased by $s1.");
IncreasedIntellect1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedIntellect1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedIntellect1.Effects.get(0).PointsBase.set(49);
IncreasedIntellect1.Effects.get(0).PointsDieSides.set(1);
IncreasedIntellect1.Effects.get(0).MiscValueA.set(3); //Stat 3 - Intellect
IncreasedIntellect1.Effects.get(1).Aura.NONE.set();
IncreasedIntellect1.Effects.get(2).Aura.NONE.set();
IncreasedIntellect1.Duration.set(21);
IncreasedIntellect1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedIntellect1.AuraInterruptFlags.set(0x0080000);
IncreasedIntellect1.Stacks.set(99);
IncreasedIntellect1.Icon.setPath("Spell_Arcane_Arcane03");
addSpellToTorghastScript(IncreasedIntellect1,0,2,0)

export let IncreasedAgility1 = std.Spells.create(MODNAME,"increasedagility1-spell",34747);
IncreasedAgility1.Name.enGB.set("Agile");
IncreasedAgility1.Description.enGB.set("Agility increased by $s1.");
IncreasedAgility1.AuraDescription.enGB.set("Agility increased by $s1.");
IncreasedAgility1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedAgility1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedAgility1.Effects.get(0).PointsBase.set(49);
IncreasedAgility1.Effects.get(0).PointsDieSides.set(1);
IncreasedAgility1.Effects.get(0).MiscValueA.set(1); //Stat 1 - Agility
IncreasedAgility1.Effects.get(1).Aura.NONE.set();
IncreasedAgility1.Effects.get(2).Aura.NONE.set();
IncreasedAgility1.Duration.set(21);
IncreasedAgility1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedAgility1.AuraInterruptFlags.set(0x0080000);
IncreasedAgility1.Stacks.set(99);
IncreasedAgility1.Icon.setPath("INV_Trinket_Naxxramas03");
addSpellToTorghastScript(IncreasedAgility1,0,3,0)

export let IncreasedCrit1 = std.Spells.create(MODNAME,"increasedcrit1-spell",34747);
IncreasedCrit1.Name.enGB.set("Tactful Strikes");
IncreasedCrit1.Description.enGB.set("Critical Strike increased by $s1.");
IncreasedCrit1.AuraDescription.enGB.set("Critical Strike increased by $s1.");
IncreasedCrit1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedCrit1.Effects.get(0).Aura.MOD_RATING.set();
IncreasedCrit1.Effects.get(0).PointsBase.set(49);
IncreasedCrit1.Effects.get(0).PointsDieSides.set(1);
IncreasedCrit1.Effects.get(0).MiscValueA.set(1792); //Stat 1792 - Critical Strike
IncreasedCrit1.Effects.get(1).Aura.NONE.set();
IncreasedCrit1.Effects.get(2).Aura.NONE.set();
IncreasedCrit1.Duration.set(21);
IncreasedCrit1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedCrit1.AuraInterruptFlags.set(0x0080000);
IncreasedCrit1.Stacks.set(99);
IncreasedCrit1.Icon.setPath("Spell_Shadow_DemonicFortitude");
addSpellToTorghastScript(IncreasedCrit1,0,4,0)

export let IncreasedResist1 = std.Spells.create(MODNAME,"increasedresist1-spell",34747);
IncreasedResist1.Name.enGB.set("Resistant");
IncreasedResist1.Description.enGB.set("All resistances increased by $s1.");
IncreasedResist1.AuraDescription.enGB.set("All resistances increased by $s1.");
IncreasedResist1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedResist1.Effects.get(0).Aura.MOD_RESISTANCE.set();
IncreasedResist1.Effects.get(0).PointsBase.set(9);
IncreasedResist1.Effects.get(0).PointsDieSides.set(1);
IncreasedResist1.Effects.get(0).MiscValueA.set(126); //Stat 126 - Resistances
IncreasedResist1.Effects.get(1).Aura.NONE.set();
IncreasedResist1.Effects.get(2).Aura.NONE.set();
IncreasedResist1.Duration.set(21);
IncreasedResist1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedResist1.AuraInterruptFlags.set(0x0080000);
IncreasedResist1.Stacks.set(99);
IncreasedResist1.Icon.setPath("Spell_Nature_ElementalPrecision_1");
addSpellToTorghastScript(IncreasedResist1,0,1,0)

export let rangedAttackSpeed1 = std.Spells.create(MODNAME,"rangedattackspeed1-spell",44972);
rangedAttackSpeed1.Name.enGB.set("Increased Ranged Speed");
rangedAttackSpeed1.Description.enGB.set("Increases ranged attack speed by $s1%. Does not stack.");
rangedAttackSpeed1.AuraDescription.enGB.set("Increases ranged attack speed by $s1%. Does not stack.");
rangedAttackSpeed1.Effects.get(0).PointsBase.set(24);
rangedAttackSpeed1.Duration.set(21);
rangedAttackSpeed1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
rangedAttackSpeed1.AuraInterruptFlags.set(0x0080000);
rangedAttackSpeed1.Icon.setPath("Ability_Hunter_SteadyShot");
addSpellToTorghastScript(rangedAttackSpeed1,0,2,1)

export let critChance1 = std.Spells.create(MODNAME, "critchance-spell", 54283);
critChance1.Name.enGB.set("Increased Crit Chance");
critChance1.Description.enGB.set("Increases spell crit chance by $s1%.");
critChance1.AuraDescription.enGB.set("Increases spell crit chance by $s1%.");
critChance1.Effects.get(0).PointsBase.set(9);
critChance1.Duration.set(21);
critChance1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
critChance1.AuraInterruptFlags.set(0x0080000);
critChance1.Stacks.set(10);
critChance1.Icon.setPath("Spell_Fire_MoltenBlood");
addSpellToTorghastScript(critChance1,0,3,0)

export let critDamage1 = std.Spells.create(MODNAME, "critdamage-spell", 44797);
critDamage1.Name.enGB.set("Increased Crit Damage");
critDamage1.Description.enGB.set("Increases crit damage by $s1%.");
critDamage1.AuraDescription.enGB.set("Increases crit damage by $s1%.");
critDamage1.Effects.get(0).PointsBase.set(9);
critDamage1.Duration.set(21);
critDamage1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
critDamage1.AuraInterruptFlags.set(0x0080000);
critDamage1.Stacks.set(99);
critDamage1.Icon.setPath("Inv_Gizmo_SuperSapperCharge");
addSpellToTorghastScript(critDamage1,0,4,0)

export let grapple = std.Spells.create(MODNAME, "grapple-spell", 57882);
grapple.Name.enGB.set("Grapple");
grapple.Description.enGB.set("Grapple to a nearby location.");
grapple.Range.setSimple(0, 50);
grapple.Effects.get(0).Type.JUMP_DEST.set();
grapple.Effects.get(0).PointsBase.set(-1);
grapple.Effects.get(0).PointsDieSides.set(1);
grapple.Effects.get(0).ImplicitTargetA.DEST_DEST.set();
grapple.Effects.get(0).MiscValueA.set(50);
grapple.Effects.get(1).Type.TRIGGER_SPELL.set();
grapple.Effects.get(1).ImplicitTargetA.DEST_DEST.set();
grapple.Effects.get(1).TriggerSpell.set(57883);
grapple.Visual.getRefCopy().cloneFromVisual(11055);
grapple.Icon.setPath("INV_MISC_HOOK_01");
addSpellToTorghastScript(grapple,0,4,2)

export let ImmortalityHeal = std.Spells.create(MODNAME, "immortalityheal-spell", 55694);                                                                        //2% health regen every 5 seconds forever.
ImmortalityHeal.Name.enGB.set("Resilient Heart");
ImmortalityHeal.Description.enGB.set("You regenerate $s1% of your total health every $t1 seconds.");
ImmortalityHeal.AuraDescription.enGB.set("Regenerates $s1% of your total health every $t1 sec.");
ImmortalityHeal.Effects.get(0).PointsBase.set(1);
ImmortalityHeal.Effects.get(0).PointsDieSides.set(1);
//ImmortalityHeal.Effects.get(0).ChainAmplitude.set(5000)
ImmortalityHeal.Effects.get(0).AuraPeriod.set(5000)
ImmortalityHeal.Duration.set(21);
ImmortalityHeal.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ImmortalityHeal.AuraInterruptFlags.set(0x0080000);
ImmortalityHeal.Stacks.set(99);
ImmortalityHeal.Icon.setPath("Ability_Druid_Replenish");
addSpellToTorghastScript(ImmortalityHeal,0,3,0)

export let ImmortalityMana = std.Spells.create(MODNAME, "immortalitymana-spell", 32102);                                                                        //50% mana regen while casting
ImmortalityMana.Name.enGB.set("Deep Mana Pools");
ImmortalityMana.Description.enGB.set("Allow $s1% of your Mana regeneration to continue while casting.");
ImmortalityMana.AuraDescription.enGB.set("Allow $s1% of your Mana regeneration to continue while casting.");
ImmortalityMana.Effects.get(0).PointsBase.set(49);
ImmortalityMana.Effects.get(0).PointsDieSides.set(1);
ImmortalityMana.Duration.set(21);
ImmortalityMana.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ImmortalityMana.AuraInterruptFlags.set(0x0080000);
ImmortalityMana.Stacks.set(99);
ImmortalityMana.Icon.setPath("Spell_Holy_Serendipity");
addSpellToTorghastScript(ImmortalityMana,0,3,0)

export let ChanceForMana = std.Spells.create(MODNAME, "chanceformana-spell", 10491);                                                                            //Spells have a 5% chance to restore flat mana (value above)
ChanceForMana.Name.enGB.set("Clarity");
ChanceForMana.Description.enGB.set("Periodically replenishes the mana of you and everyone in your group.");
ChanceForMana.AuraDescription.enGB.set("Every 5 seconds, returns $s1 mana to everyone within 30 yards of the mana conduit.");
ChanceForMana.Effects.get(0).PointsBase.set(49);
ChanceForMana.Effects.get(0).PointsDieSides.set(1);
ChanceForMana.Effects.get(0).ChainAmplitude.set(5000);
ChanceForMana.Duration.set(21);
ChanceForMana.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChanceForMana.AuraInterruptFlags.set(0x0080000);
ChanceForMana.Stacks.set(99);
ChanceForMana.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
ChanceForMana.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
ChanceForMana.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
ChanceForMana.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForMana.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForMana.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
ChanceForMana.Proc.TriggerMask.DONE_PERIODIC.set(1);
ChanceForMana.Icon.setPath("Spell_Magic_ManaGain");
addSpellToTorghastScript(ChanceForMana,0,3,0)

export let ChanceForManaValue = std.Spells.create(MODNAME, "chanceformanavalue-spell", 55382);                                                                  //600 mana chance
ChanceForManaValue.Effects.get(0).PointsBase.set(1350);
ChanceForManaValue.Effects.get(0).PointsDieSides.set(350);
export let ChanceForMana02 = std.Spells.create(MODNAME, "chanceformana02-spell", 55381);                                                                            //Spells have a 5% chance to restore flat mana (value above)
ChanceForMana02.Name.enGB.set("Clarity");
ChanceForMana02.Description.enGB.set("Your spells have a chance to restore 1000-1700 mana.");
ChanceForMana02.AuraDescription.enGB.set("Spells and abilities have a chance to restore 1000-1700 mana.");
ChanceForMana02.Proc.Chance.set(5);
ChanceForMana02.Effects.get(0).PointsBase.set(99);
ChanceForMana02.Effects.get(0).PointsDieSides.set(1);
ChanceForMana02.Effects.get(0).TriggerSpell.set(ChanceForManaValue.ID);
ChanceForMana02.Duration.set(21);
ChanceForMana02.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChanceForMana02.AuraInterruptFlags.set(0x0080000);
ChanceForMana02.Stacks.set(99);
ChanceForMana02.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
ChanceForMana02.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
ChanceForMana02.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
ChanceForMana02.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForMana02.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForMana02.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
ChanceForMana02.Proc.TriggerMask.DONE_PERIODIC.set(1);
ChanceForMana02.Icon.setPath("Spell_Shadow_Teleport");

export let ChanceForHealthValue = std.Spells.create(MODNAME, "chanceforhealthvalue-spell", 56715);                                                              //600 health chance
ChanceForHealthValue.Effects.get(0).PointsBase.set(1350);
ChanceForHealthValue.Effects.get(0).PointsDieSides.set(350);
export let ChanceForHealth = std.Spells.create(MODNAME, "chanceforhealth-spell", 55381);                                                                        //Spells have a 5% chance to restore flat health (value above)
ChanceForHealth.Name.enGB.set("Vampyrism");
ChanceForHealth.Description.enGB.set("Attacks and spells have a chance to leech health from the target and transfer it to the caster");
ChanceForHealth.AuraDescription.enGB.set("Chance to steal life from the enemy target.");
ChanceForHealth.Proc.Chance.set(5);
ChanceForHealth.Effects.get(0).PointsBase.set(99);
ChanceForHealth.Effects.get(0).PointsDieSides.set(1);
ChanceForHealth.Effects.get(0).TriggerSpell.set(ChanceForHealthValue.ID);
ChanceForHealth.Duration.set(21);
ChanceForHealth.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChanceForHealth.AuraInterruptFlags.set(0x0080000);
ChanceForHealth.Stacks.set(99);
ChanceForHealth.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
ChanceForHealth.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
ChanceForHealth.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
ChanceForHealth.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForHealth.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForHealth.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
ChanceForHealth.Proc.TriggerMask.DONE_PERIODIC.set(1);
ChanceForHealth.Icon.setPath("Spell_Shaman_BlessingOfEternals");
addSpellToTorghastScript(ChanceForHealth,0,5,1)

export let RoarSpellValue = std.Spells.create(MODNAME, "roarspellvalue-spell", 55429);                                                                          //Knockback and damage chance (50 knockback) + (520 damage) in 15 yard cone
RoarSpellValue.Effects.get(0).PointsBase.set(49);
RoarSpellValue.Effects.get(0).PointsDieSides.set(1);
RoarSpellValue.Effects.get(0).Radius.set(15);
RoarSpellValue.Effects.get(1).PointsBase.set(519);
RoarSpellValue.Effects.get(1).PointsDieSides.set(119);
RoarSpellValue.Effects.get(1).Radius.set(15);
export let ChanceRoarSpell = std.Spells.create(MODNAME, "chanceroarspell-spell", 55381);                                                                        //Spells have a 5% chance to let loose a deafening roar, knocking back all enemies
ChanceRoarSpell.Name.enGB.set("Vrykul Heritage");
ChanceRoarSpell.Description.enGB.set("Attacks and spells have a chance to let loose a deafening roar, knocking back all enemies");
ChanceRoarSpell.AuraDescription.enGB.set("Chance to roar and knock back enemies.");
ChanceRoarSpell.Proc.Chance.set(5);
ChanceRoarSpell.Effects.get(0).PointsBase.set(99);
ChanceRoarSpell.Effects.get(0).PointsDieSides.set(1);
ChanceRoarSpell.Effects.get(0).TriggerSpell.set(RoarSpellValue.ID);
ChanceRoarSpell.Duration.set(21);
ChanceRoarSpell.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChanceRoarSpell.AuraInterruptFlags.set(0x0080000);
ChanceRoarSpell.Stacks.set(99);
ChanceRoarSpell.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
ChanceRoarSpell.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
ChanceRoarSpell.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
ChanceRoarSpell.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceRoarSpell.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceRoarSpell.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
ChanceRoarSpell.Proc.TriggerMask.DONE_PERIODIC.set(1);
ChanceRoarSpell.Icon.setPath("Achievement_Halloween_Smiley_01");
addSpellToTorghastScript(ChanceRoarSpell,0,4,1)

export let ReflectiveShell = std.Spells.create(MODNAME, "reflectiveshell-spell", 55381);                                                                        //10% spell damage reflection.
ReflectiveShell.Name.enGB.set("Chitinous Exoskeleton");
ReflectiveShell.Description.enGB.set("Surrounds the caster with a protective shield that reflects $s1% of harmful spells for $d. Melee attacks to target cause $s2 damage.");
ReflectiveShell.AuraDescription.enGB.set("Reflects $s1% of spell damage and deals $s2 damage on melee attacks recieved.");
ReflectiveShell.Effects.get(0).PointsBase.set(9);
ReflectiveShell.Effects.get(0).PointsDieSides.set(1);
ReflectiveShell.Effects.get(1).Type.APPLY_AURA.set();
ReflectiveShell.Effects.get(1).PointsBase.set(129);
ReflectiveShell.Effects.get(1).PointsDieSides.set(1)
ReflectiveShell.Effects.get(1).ImplicitTargetA.UNIT_CASTER.set();
ReflectiveShell.Effects.get(1).Aura.DAMAGE_SHIELD.set();
ReflectiveShell.Duration.set(21);
ReflectiveShell.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ReflectiveShell.AuraInterruptFlags.set(0x0080000);
ReflectiveShell.Stacks.set(99);
ReflectiveShell.Icon.setPath("INV_Misc_Head_Nerubian_01");
addSpellToTorghastScript(ReflectiveShell,0,3,0)

export let MovementSpeed = std.Spells.create(MODNAME, "movementspeed-spell", 48594);                                                                            //2% movement speed.
MovementSpeed.Name.enGB.set("Light-Footed");
MovementSpeed.Description.enGB.set("Increases the caster's movement speed by $s1%");
MovementSpeed.AuraDescription.enGB.set("Increases the caster's movement speed by $s1%");
MovementSpeed.Effects.get(0).PointsBase.set(2);
MovementSpeed.Effects.get(0).PointsDieSides.set(1);
MovementSpeed.Duration.set(21);
MovementSpeed.Cooldown.set(0);
MovementSpeed.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
MovementSpeed.AuraInterruptFlags.set(0x0080000);
MovementSpeed.Stacks.set(99);
MovementSpeed.Icon.setPath("Spell_Fire_BurningSpeed");
addSpellToTorghastScript(MovementSpeed,0,3,0)

export let ReducedCrits = std.Spells.create(MODNAME, "reducedcrits-spell", 61861);                                                                              //10% reduced chance to be critically hit
ReducedCrits.Name.enGB.set("Devious Glint");
ReducedCrits.Description.enGB.set("Reduces chance to be crit by $s1%.");
ReducedCrits.AuraDescription.enGB.set("Reduces chance to be crit by $s1%.");
ReducedCrits.Effects.get(0).PointsBase.set(-11);
ReducedCrits.Effects.get(0).PointsDieSides.set(1);
ReducedCrits.Effects.get(1).Type.NULL.set();
ReducedCrits.Duration.set(21);
ReducedCrits.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ReducedCrits.AuraInterruptFlags.set(0x0080000);
ReducedCrits.Stacks.set(99);
ReducedCrits.Icon.setPath("Spell_Arcane_PrismaticCloak");
addSpellToTorghastScript(ReducedCrits,0,3,0)

export let NecromancerMob01 = std.CreatureTemplates.create(MODNAME,'necromob01',24207); //55% for Shield
NecromancerMob01.Name.enGB.set('Risen Bulwark');
NecromancerMob01.Level.set(20,20);
NecromancerMob01.Models.clearAll();
NecromancerMob01.Models.addIds(26084);
std.SQL.creature_equip_template.add(NecromancerMob01.ID, 1).ItemID1.set(30391);
export let NecromancerMob02 = std.CreatureTemplates.create(MODNAME,'necromob02',24207); //45% for DPS
NecromancerMob02.Name.enGB.set('Risen Blades');
NecromancerMob02.Level.set(20,20);
NecromancerMob02.Models.clearAll();
NecromancerMob02.Models.addIds(26082);
std.SQL.creature_equip_template.add(NecromancerMob02.ID, 1).ItemID1.set(30389).ItemID2.set(30389);
export let NecromancerMob03 = std.CreatureTemplates.create(MODNAME,'necromob03',24207); //65% for Healer
NecromancerMob03.Name.enGB.set('Risen Staff');
NecromancerMob03.Level.set(20,20);
NecromancerMob03.Models.clearAll();
NecromancerMob03.Models.addIds(26085);
std.SQL.creature_equip_template.add(NecromancerMob03.ID, 1).ItemID1.set(30392);
export let NecromancerSummonSpell01 = std.Spells.create(MODNAME, "necromancerspell01-spell", 42651);                                                            //Summon Mob Type 01
NecromancerSummonSpell01.Effects.get(1).MiscValueA.set(NecromancerMob01.ID);
export let NecromancerSummonSpell02 = std.Spells.create(MODNAME, "necromancerspell02-spell", 42651);                                                            //Summon Mob Type 01
NecromancerSummonSpell02.Effects.get(1).MiscValueA.set(NecromancerMob02.ID);
export let NecromancerSummonSpell03 = std.Spells.create(MODNAME, "necromancerspell03-spell", 42651);                                                            //Summon Mob Type 01
NecromancerSummonSpell03.Effects.get(1).MiscValueA.set(NecromancerMob03.ID);
export let NecromancerSumm = std.Spells.create(MODNAME, "necromancersumm-spell", 55381);                                                                        //Spells have a 5% chance to summon a random mob
NecromancerSumm.Name.enGB.set("Animator");
NecromancerSumm.Description.enGB.set("Attacks and spells have a chance to summon a random weapon to tank, heal, or dps for you.");
NecromancerSumm.AuraDescription.enGB.set("Chance to animate weapons.");
NecromancerSumm.Proc.Chance.set(5);
NecromancerSumm.Effects.get(0).PointsBase.set(54);                                              //5% chance to proc, 55% chance that it will be this spell
NecromancerSumm.Effects.get(0).PointsDieSides.set(1);
NecromancerSumm.Effects.get(0).TriggerSpell.set(NecromancerSummonSpell01.ID);
NecromancerSumm.Effects.get(1).PointsBase.set(44);                                              //5% chance to proc, 45% chance that it will be this spell
NecromancerSumm.Effects.get(1).PointsDieSides.set(1);
NecromancerSumm.Effects.get(1).Type.APPLY_AURA.set();
NecromancerSumm.Effects.get(1).ImplicitTargetA.UNIT_CASTER.set();
NecromancerSumm.Effects.get(1).Aura.PROC_TRIGGER_SPELL.set();
NecromancerSumm.Effects.get(1).TriggerSpell.set(NecromancerSummonSpell02.ID);
NecromancerSumm.Effects.get(2).PointsBase.set(64);                                              //5% chance to proc, 65% chance that it will be this spell
NecromancerSumm.Effects.get(2).PointsDieSides.set(1);
NecromancerSumm.Effects.get(2).Type.APPLY_AURA.set();
NecromancerSumm.Effects.get(2).ImplicitTargetA.UNIT_CASTER.set();
NecromancerSumm.Effects.get(2).Aura.PROC_TRIGGER_SPELL.set();
NecromancerSumm.Effects.get(2).TriggerSpell.set(NecromancerSummonSpell03.ID);
NecromancerSumm.Duration.set(21);
NecromancerSumm.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
NecromancerSumm.AuraInterruptFlags.set(0x0080000);
NecromancerSumm.Stacks.set(99);
NecromancerSumm.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
NecromancerSumm.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
NecromancerSumm.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
NecromancerSumm.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
NecromancerSumm.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
NecromancerSumm.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
NecromancerSumm.Proc.TriggerMask.DONE_PERIODIC.set(1);
NecromancerSumm.Icon.setPath("achievement_boss_scourgelordtyrannus");
addSpellToTorghastScript(NecromancerSumm,0,5,1)

export let FortunateValue = std.Spells.create(MODNAME, "fortunatevalue-spell", 27922);                                                                          //Knockback and damage chance (250 knockback) + (430 damage) in 15 yard cone
FortunateValue.Effects.get(0).PointsBase.set(20);
FortunateValue.Effects.get(0).PointsDieSides.set(10);
FortunateValue.Effects.get(0).ItemType.set(torghastInsideCurrency.ID)
export let FortunateSpell = std.Spells.create(MODNAME, "fortunatespell-spell", 55381);                                                                        //Spells have a 5% chance to let loose a deafening roar, knocking back all enemies
FortunateSpell.Name.enGB.set("Fortunate");
FortunateSpell.Description.enGB.set("Attacks and spells have a chance to generate additional torghast fragments that can be used in the shop.");
FortunateSpell.AuraDescription.enGB.set("Chance to generate additional torghast fragments");
FortunateSpell.Proc.Chance.set(5);
FortunateSpell.Effects.get(0).PointsBase.set(99);
FortunateSpell.Effects.get(0).PointsDieSides.set(1);
FortunateSpell.Effects.get(0).TriggerSpell.set(FortunateValue.ID);
FortunateSpell.Duration.set(21);
FortunateSpell.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
FortunateSpell.AuraInterruptFlags.set(0x0080000);
FortunateSpell.Stacks.set(1);
FortunateSpell.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
FortunateSpell.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
FortunateSpell.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
FortunateSpell.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
FortunateSpell.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
FortunateSpell.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
FortunateSpell.Proc.TriggerMask.DONE_PERIODIC.set(1);
FortunateSpell.Icon.setPath("Racial_Dwarf_FindTreasure");
addSpellToTorghastScript(FortunateSpell,0,5,1)

export let ButterSticks = std.Spells.create(MODNAME, "butterstick-spell", 4086);                                                                              //10% reduced chance to be critically hit
ButterSticks.Name.enGB.set("Giant Butter Stick");
ButterSticks.Description.enGB.set("Increases dodge chance by 15%.");
ButterSticks.AuraDescription.enGB.set("Increases dodge chance by 15%.");
ButterSticks.Effects.get(0).PointsBase.set(14);
ButterSticks.Effects.get(0).PointsDieSides.set(1);
ButterSticks.Effects.get(1).Type.NULL.set();
ButterSticks.Duration.set(21);
ButterSticks.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ButterSticks.AuraInterruptFlags.set(0x0080000);
ButterSticks.Stacks.set(99);
ButterSticks.Icon.setPath("INV_Misc_Food_29");
addSpellToTorghastScript(ButterSticks,0,5,1)

export let ReaperSpell = std.Spells.create(MODNAME, "reaperspell-spell", 50581);                                                                          //Knockback and damage chance (250 knockback) + (430 damage) in 15 yard cone
ReaperSpell.Effects.get(0).PointsBase.set(599999999);
ReaperSpell.Effects.get(0).PointsDieSides.set(1);
ReaperSpell.Effects.get(0).ChainTarget.set(0);
ReaperSpell.Effects.get(1).Type.SUMMON.set();
ReaperSpell.Effects.get(1).PointsBase.set(0);
ReaperSpell.Effects.get(1).PointsDieSides.set(1);
ReaperSpell.Effects.get(1).ImplicitTargetA.DEST_CASTER.set();
ReaperSpell.Effects.get(1).MiscValueB.set(64);
ReaperSpell.Effects.get(1).MiscValueA.set(torghastOrb.ID)
ReaperSpell.Range.setSimple(0,1000);
export let Reap = std.Spells.create(MODNAME, "reap-spell", 55381);                                                                        //Spells have a 5% chance to let loose a deafening roar, knocking back all enemies
Reap.Name.enGB.set("Reap");
Reap.Description.enGB.set("Attacks and spells have a chance to instantly kill the enemy.");
Reap.AuraDescription.enGB.set("Chance to instantly kill your target.");
Reap.Proc.Chance.set(0.5);//0.5
Reap.Effects.get(0).PointsBase.set(99);
Reap.Effects.get(0).PointsDieSides.set(1);
Reap.Effects.get(0).TriggerSpell.set(ReaperSpell.ID);
Reap.Duration.set(21);
Reap.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Reap.AuraInterruptFlags.set(0x0080000);
Reap.Stacks.set(99);
Reap.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
Reap.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
Reap.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
Reap.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
Reap.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
Reap.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
Reap.Proc.TriggerMask.DONE_PERIODIC.set(1);
Reap.Icon.setPath("INV_Sword_105");
addSpellToTorghastScript(Reap,0,5,1)

export let FuryofOdinValue = std.Spells.create(MODNAME, "furyofodinvalue-spell", 421);                                                                  //600 mana chance
FuryofOdinValue.Effects.get(0).PointsBase.set(2159);
FuryofOdinValue.Effects.get(0).PointsDieSides.set(759);
FuryofOdinValue.Effects.get(0).ChainTarget.set(5);
FuryofOdinValue.CastTime.setSimple(0);
export let FuryofOdin = std.Spells.create(MODNAME, "furyofodin-spell", 55381);                                                                            //Spells have a 5% chance to restore flat mana (value above)
FuryofOdin.Name.enGB.set("Fury of Odin");
FuryofOdin.Description.enGB.set("Your spells have a chance to hurl lightning at the target and smite them down.");
FuryofOdin.AuraDescription.enGB.set("Spells and abilities have a chance to smite the enemy with the fury of Odin.");
FuryofOdin.Proc.Chance.set(5);
FuryofOdin.Effects.get(0).PointsBase.set(99);
FuryofOdin.Effects.get(0).PointsDieSides.set(1);
FuryofOdin.Effects.get(0).TriggerSpell.set(FuryofOdinValue.ID);
FuryofOdin.Duration.set(21);
FuryofOdin.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
FuryofOdin.AuraInterruptFlags.set(0x0080000);
FuryofOdin.Stacks.set(99);
FuryofOdin.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
FuryofOdin.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
FuryofOdin.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
FuryofOdin.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
FuryofOdin.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
FuryofOdin.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
FuryofOdin.Proc.TriggerMask.DONE_PERIODIC.set(1);
FuryofOdin.Icon.setPath("Ability_Shaman_Stormstrike");
addSpellToTorghastScript(FuryofOdin,0,5,1)

export let StonedValue = std.Spells.create(MODNAME, "stonedvalue-spell", 33652);    
StonedValue.Effects.get(0).ImplicitTargetA.UNIT_TARGET_ENEMY.set();                                                              //600 mana chance
StonedValue.Duration.setSimple(10000)
StonedValue.CastTime.setSimple(0);
export let Stoned = std.Spells.create(MODNAME, "stoned-spell", 55381);                                                                            //Spells have a 5% chance to restore flat mana (value above)
Stoned.Name.enGB.set("Tourmaline Core");
Stoned.Description.enGB.set("Your spells have a chance to freeze the enemy in stone for 10 seconds.");
Stoned.AuraDescription.enGB.set("Spells and abilities have a chance to freeze the enemy in stone.");
Stoned.Proc.Chance.set(5);
Stoned.Effects.get(0).PointsBase.set(99);
Stoned.Effects.get(0).PointsDieSides.set(1);
Stoned.Effects.get(0).TriggerSpell.set(StonedValue.ID);
Stoned.Duration.set(21);
Stoned.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Stoned.AuraInterruptFlags.set(0x0080000);
Stoned.Stacks.set(99);
Stoned.Proc.TriggerMask.DONE_SPELL_MELEE_DMG_CLASS.set(1);
Stoned.Proc.TriggerMask.DONE_RANGED_AUTO_ATTACK.set(1);
Stoned.Proc.TriggerMask.DONE_MELEE_AUTO_ATTACK.set(1);
Stoned.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
Stoned.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
Stoned.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
Stoned.Proc.TriggerMask.DONE_PERIODIC.set(1);
Stoned.Icon.setPath("inv_stone_weightstone_08");
addSpellToTorghastScript(Stoned,0,5,1)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Warrior Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let WarriorRendIncrease = std.Spells.create(MODNAME, "warriorrendincrease-spell", 12658);                                                                            //Increased rend damage
WarriorRendIncrease.Name.enGB.set("Lust for Blood");
WarriorRendIncrease.Description.enGB.set("Increases damage of rend by $s1%.");
WarriorRendIncrease.AuraDescription.enGB.set("Damage of Rend increased by $s1%.");
WarriorRendIncrease.Effects.get(0).PointsBase.set(49);
WarriorRendIncrease.Effects.get(0).PointsDieSides.set(1);
WarriorRendIncrease.Duration.set(21);
WarriorRendIncrease.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
WarriorRendIncrease.AuraInterruptFlags.set(0x0080000);
WarriorRendIncrease.Stacks.set(99);
addSpellToTorghastScript(WarriorRendIncrease,1,1,0)

export let IncreasedRageGeneration = std.Spells.create(MODNAME, "ragegeneration-spell", 29623);                                                                             //Increased rage generation
IncreasedRageGeneration.Name.enGB.set("Angry");
IncreasedRageGeneration.Description.enGB.set("You generate $s1% more rage from damage dealt.");
IncreasedRageGeneration.AuraDescription.enGB.set("You generate $s1% more rage from damage dealt.");
IncreasedRageGeneration.Effects.get(0).PointsBase.set(24);
IncreasedRageGeneration.Effects.get(0).PointsDieSides.set(1);
IncreasedRageGeneration.Duration.set(21);
IncreasedRageGeneration.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedRageGeneration.AuraInterruptFlags.set(0x0080000);
IncreasedRageGeneration.Stacks.set(99);
addSpellToTorghastScript(IncreasedRageGeneration,1,2,0)

export let ReducedRageCost = std.Spells.create(MODNAME, "reducedragecost-spell", 29792);                                                                                    //Reduced rage cost by 3.
ReducedRageCost.Name.enGB.set("Adaptive Techniques");
ReducedRageCost.Description.enGB.set("Reduces the rage cost of your offensive abilities by $/10;s1.");
ReducedRageCost.AuraDescription.enGB.set("Reduces the rage cost of your offensive abilities by $/10;s1.");
ReducedRageCost.Effects.get(0).PointsBase.set(-31);
ReducedRageCost.Effects.get(0).PointsDieSides.set(1);
ReducedRageCost.Duration.set(21);
ReducedRageCost.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ReducedRageCost.AuraInterruptFlags.set(0x0080000);
ReducedRageCost.Stacks.set(99);
addSpellToTorghastScript(ReducedRageCost,1,3,0)

export let ImprovingCleave = std.Spells.create(MODNAME, "improvingcleave-spell", 20496);                                                                                    //Reduced rage cost by 3.
ImprovingCleave.Name.enGB.set("Heavy Strikes");
ImprovingCleave.Description.enGB.set("Increases the damage dealt by cleave by $s1%.");
ImprovingCleave.AuraDescription.enGB.set("Increases the damage dealt by cleave by $s1%.");
ImprovingCleave.Effects.get(0).PointsBase.set(99);
ImprovingCleave.Effects.get(0).PointsDieSides.set(1);
ImprovingCleave.Duration.set(21);
ImprovingCleave.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ImprovingCleave.AuraInterruptFlags.set(0x0080000);
ImprovingCleave.Stacks.set(99);
addSpellToTorghastScript(ImprovingCleave,1,1,0)

export let ThunderingClapValue = std.Spells.create(MODNAME, "thunderingclapvalue-spell", 6535);                                                              //600 health chance
ThunderingClapValue.Effects.get(0).PointsBase.set(559);
ThunderingClapValue.Effects.get(0).PointsDieSides.set(112);
ThunderingClapValue.Effects.get(1).PointsBase.set(359);
ThunderingClapValue.Effects.get(1).PointsDieSides.set(112);
export let ThunderingClap = std.Spells.create(MODNAME, "thunderingclap-spell", 50685);                                                                        //Spells have a 5% chance to restore flat health (value above)
ThunderingClap.Name.enGB.set("Ancient Fury");
ThunderingClap.Description.enGB.set("Casting thunder clap now calls down a strike from the heavens, consecrating the area in lightning for 15 seconds.");
ThunderingClap.AuraDescription.enGB.set("Casting thunder clap now calls down a strike from the heavens, consecrating the area in lightning for 15 seconds.");
ThunderingClap.Effects.get(0).Type.NULL.set();
ThunderingClap.Effects.get(1).ClassMask.A.set(0x00000080)
ThunderingClap.Effects.get(1).Type.APPLY_AURA.set();
ThunderingClap.Effects.get(1).Aura.PERIODIC_TRIGGER_SPELL.set();
ThunderingClap.Effects.get(1).PointsBase.set(99);
ThunderingClap.Effects.get(1).PointsDieSides.set(1);
ThunderingClap.Effects.get(1).TriggerSpell.set(ThunderingClapValue.ID);
ThunderingClap.Duration.set(21);
ThunderingClap.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ThunderingClap.AuraInterruptFlags.set(0x0080000);
ThunderingClap.Icon.setPath("Spell_Shaman_AncestralAwakening");
addSpellToTorghastScript(ThunderingClap,1,5,1)

export let Warbringer = std.Spells.create(MODNAME, "warbringer-spell", 57499);    
Warbringer.Description.enGB.set("Your Charge, Intercept and Intervene abilities are now usable while in combat and in any stance.");
Warbringer.AuraDescription.enGB.set("Your Charge, Intercept and Intervene abilities are now usable while in combat and in any stance. ");
addSpellToTorghastScript(Warbringer,1,4,1)

export let TerribleTrio = std.Spells.create(MODNAME, "terribletrio-spell", 12658);                                                                            //Increased rend damage
TerribleTrio.Name.enGB.set("Trio of Terror");
TerribleTrio.Description.enGB.set("Increases damage of rend, thunder clap and heroic strike by $s1%.");
TerribleTrio.AuraDescription.enGB.set("Increases damage of rend, thunder clap and heroic strike by $s1%.");
TerribleTrio.Effects.get(0).PointsBase.set(99);
TerribleTrio.Effects.get(0).PointsDieSides.set(1);
TerribleTrio.Effects.get(0).ClassMask.A.set(0x00000140);
TerribleTrio.Duration.set(21);
TerribleTrio.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
TerribleTrio.AuraInterruptFlags.set(0x0080000);
TerribleTrio.Stacks.set(99);
addSpellToTorghastScript(TerribleTrio,1,5,0)

export let BlazingSpeedmovement = std.Spells.create(MODNAME, "blazingspeedmovement-spell", 48594);                                                                            //2% movement speed.
BlazingSpeedmovement.Name.enGB.set("Impending Speed");
BlazingSpeedmovement.Description.enGB.set("Increases the caster's movement speed by $s1%");
BlazingSpeedmovement.AuraDescription.enGB.set("Increases the caster's movement speed by $s1%");
BlazingSpeedmovement.Effects.get(0).PointsBase.set(0);
BlazingSpeedmovement.Effects.get(0).PointsDieSides.set(1);
BlazingSpeedmovement.Duration.set(21);
BlazingSpeedmovement.Cooldown.set(0);
BlazingSpeedmovement.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
BlazingSpeedmovement.AuraInterruptFlags.set(0x0080000);
BlazingSpeedmovement.Stacks.set(75);
BlazingSpeedmovement.Icon.setPath("Ability_Mage_FieryPayback");
export let BlazingSpeed = std.Spells.create(MODNAME, "blazingspeed-spell", 12285);                                                                            //Increased rend damage
BlazingSpeed.Name.enGB.set("Blazing Speed");
BlazingSpeed.Description.enGB.set("Every time you cast charge, you increase your movement speed by 1%, stacking up to 75 times.");
BlazingSpeed.AuraDescription.enGB.set("Every time you cast charge, you increase your movement speed by 1%, stacking up to 75 times.");
BlazingSpeed.Effects.get(0).PointsBase.set(99);
BlazingSpeed.Effects.get(0).PointsDieSides.set(1);
BlazingSpeed.Effects.get(0).ClassMask.A.set(0x00000001);
BlazingSpeed.Effects.get(0).Aura.PROC_TRIGGER_SPELL.set();
BlazingSpeed.Effects.get(0).TriggerSpell.set(BlazingSpeedmovement.ID);
BlazingSpeed.Duration.set(21);
BlazingSpeed.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
BlazingSpeed.AuraInterruptFlags.set(0x0080000);
BlazingSpeed.Stacks.set(99);
BlazingSpeed.Icon.setPath("Ability_Mage_FieryPayback");
addSpellToTorghastScript(BlazingSpeed,1,5,1)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Paladin Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let JudgementRange = std.Spells.create(MODNAME, "judgementmodifier-spell", 53556);                                                                   //Judgement range
JudgementRange.Name.enGB.set("Arm of the Law");
JudgementRange.Description.enGB.set("Increases the range of your Judgements by $s1 yards. Increases hit chance by $s2%.");
JudgementRange.AuraDescription.enGB.set("Increases the range of your Judgements by $s1 yards. Increases hit chance by $s2%.");
JudgementRange.Effects.get(0).PointsBase.set(9);
JudgementRange.Effects.get(0).PointsDieSides.set(1);
JudgementRange.Effects.get(1).PointsBase.set(1);
JudgementRange.Effects.get(1).PointsDieSides.set(1);
JudgementRange.Duration.set(21);
JudgementRange.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
JudgementRange.AuraInterruptFlags.set(0x0080000);
JudgementRange.Stacks.set(99);
JudgementRange.Icon.setPath("INV_Qiraj_JewelEncased");
addSpellToTorghastScript(JudgementRange,2,2,0)

export let Radiance = std.Spells.create(MODNAME, "holydamage-spell", 31828);                                                                                 //Additional Holy Damage
Radiance.Name.enGB.set("Radiance");
Radiance.Description.enGB.set("All attacks against you have a $h% chance to cause half damage.");
Radiance.AuraDescription.enGB.set("All attacks against you have a $h% chance to cause half damage.");
Radiance.Proc.Chance.set(10);
Radiance.Effects.get(1).TriggerSpell.set(31934);
Radiance.Duration.set(21);
Radiance.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Radiance.AuraInterruptFlags.set(0x0080000);
Radiance.Stacks.set(99);
Radiance.Icon.setPath("Spell_Holy_BlessedResilience");
addSpellToTorghastScript(Radiance,2,3,0)

export let SealofJustice = std.Spells.create(MODNAME, "sealofjustice-spell", 20164);                                                                                 //Additional Holy Damage
SealofJustice.Name.enGB.set("Seal of Justice");
SealofJustice.Description.enGB.set("Fills the Paladin with the spirit of justice for $20164d, giving each melee attack a chance to stun for $20170d.");
SealofJustice.AuraDescription.enGB.set("Fills the Paladin with the spirit of justice for $20164d, giving each melee attack a chance to stun for $20170d.");
SealofJustice.Duration.set(21);
SealofJustice.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
SealofJustice.AuraInterruptFlags.set(0x0080000);
SealofJustice.Stacks.set(1);
addSpellToTorghastScript(SealofJustice,2,3,0)

export let SealofLight = std.Spells.create(MODNAME, "sealoflight-spell", 20165);                                                                                 //Additional Holy Damage
SealofLight.Name.enGB.set("Seal of Light");
SealofLight.Description.enGB.set("Fills the Paladin with divine light for $d, giving each melee attack a chance to heal the Paladin for ${0.15*$AP+0.15*$SPH}.");
SealofLight.AuraDescription.enGB.set("Fills the Paladin with divine light for $d, giving each melee attack a chance to heal the Paladin for ${0.15*$AP+0.15*$SPH}.");
SealofLight.Duration.set(21);
SealofLight.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
SealofLight.AuraInterruptFlags.set(0x0080000);
SealofLight.Stacks.set(1);
addSpellToTorghastScript(SealofLight,2,3,0)

export let SealofWisdom = std.Spells.create(MODNAME, "sealofwisdom-spell", 20166);                                                                                 //Additional Holy Damage
SealofWisdom.Name.enGB.set("Seal of Wisdom");
SealofWisdom.Description.enGB.set("Fills the Paladin with divine wisdom for $20166d, giving each melee attack a chance to restore $20168s1% of the paladin's maximum mana");
SealofWisdom.AuraDescription.enGB.set("Fills the Paladin with divine wisdom for $20166d, giving each melee attack a chance to restore $20168s1% of the paladin's maximum mana");
SealofWisdom.Duration.set(21);
SealofWisdom.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
SealofWisdom.AuraInterruptFlags.set(0x0080000);
SealofWisdom.Stacks.set(1);
addSpellToTorghastScript(SealofWisdom,2,3,0)

export let HolyPower = std.Spells.create(MODNAME, "holypower-spell", 20237);                                                                                 //Additional Holy Damage
HolyPower.Name.enGB.set("Holy Power");
HolyPower.Description.enGB.set("Increases the amount healed by your Holy Light, Flash of Light and Holy Shock spells by $s1%.");
HolyPower.AuraDescription.enGB.set("Increases the amount healed by your Holy Light, Flash of Light and Holy Shock spells by $s1%.");
HolyPower.Effects.get(0).PointsBase.set(49);
HolyPower.Effects.get(0).PointsDieSides.set(1);
HolyPower.Duration.set(21);
HolyPower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
HolyPower.AuraInterruptFlags.set(0x0080000);
HolyPower.Stacks.set(99);
HolyPower.Icon.setPath("Spell_Holy_PureOfHeart");
addSpellToTorghastScript(HolyPower,2,3,0)

export let DivinePower = std.Spells.create(MODNAME, "divinepower-spell", 20237);                                                                                 //Additional Holy Damage
DivinePower.Name.enGB.set("Divine Power");
DivinePower.Description.enGB.set("Increases the damage of your Judgement by $s1%.");
DivinePower.AuraDescription.enGB.set("Increases the damage of your Judgement by $s1%.");
DivinePower.Effects.get(0).PointsBase.set(74);
DivinePower.Effects.get(0).PointsDieSides.set(1);
DivinePower.Effects.get(0).ClassMask.A.set(0x00800000);
DivinePower.Effects.get(0).ClassMask.B.set(0x00000000);
DivinePower.Effects.get(0).ClassMask.C.set(0x00000008);
DivinePower.Duration.set(21);
DivinePower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
DivinePower.AuraInterruptFlags.set(0x0080000);
DivinePower.Stacks.set(99);
DivinePower.Icon.setPath("Spell_Holy_WeaponMastery");
addSpellToTorghastScript(DivinePower,2,2,0)

export let StormingPower = std.Spells.create(MODNAME, "stormingpower-spell", 20237);                                                                                 //Additional Holy Damage
StormingPower.Name.enGB.set("Power of the Storm");
StormingPower.Description.enGB.set("Increases the damage of your Divine Storm by $s1%.");
StormingPower.AuraDescription.enGB.set("Increases the damage of your Divine Storm by $s1%.");
StormingPower.Effects.get(0).PointsBase.set(74);
StormingPower.Effects.get(0).PointsDieSides.set(1);
StormingPower.Effects.get(0).ClassMask.A.set(0x00000000);
StormingPower.Effects.get(0).ClassMask.B.set(0x00020000);
StormingPower.Effects.get(0).ClassMask.C.set(0x00000000);
StormingPower.Duration.set(21);
StormingPower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
StormingPower.AuraInterruptFlags.set(0x0080000);
StormingPower.Stacks.set(99);
StormingPower.Icon.setPath("Spell_Holy_DivinePurpose");
addSpellToTorghastScript(StormingPower,2,2,0)

export let CrusaderMight = std.Spells.create(MODNAME, "crusadermight-spell", 20237);                                                                                 //Additional Holy Damage
CrusaderMight.Name.enGB.set("Crusader\'s Vengeance");
CrusaderMight.Description.enGB.set("Increases the damage of your Crusader Strike by $s1%.");
CrusaderMight.AuraDescription.enGB.set("Increases the damage of your Crusader Strike by $s1%.");
CrusaderMight.Effects.get(0).PointsBase.set(74);
CrusaderMight.Effects.get(0).PointsDieSides.set(1);
CrusaderMight.Effects.get(0).ClassMask.A.set(0x00000000);
CrusaderMight.Effects.get(0).ClassMask.B.set(0x00008000);
CrusaderMight.Effects.get(0).ClassMask.C.set(0x00000000);
CrusaderMight.Duration.set(21);
CrusaderMight.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
CrusaderMight.AuraInterruptFlags.set(0x0080000);
CrusaderMight.Stacks.set(99);
CrusaderMight.Icon.setPath("Spell_Holy_Retribution");
addSpellToTorghastScript(CrusaderMight,2,2,0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Hunter Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let ArcaneInsurgence = std.Spells.create(MODNAME, "arcaneinsurgence-spell", 19456);                                                                                 //Additional Holy Damage
ArcaneInsurgence.Name.enGB.set("Arcane Insurgence");
ArcaneInsurgence.Description.enGB.set("Arcane Shot now applies a stacking damage buff on the enemy, while simultaneously buffing the caster.");
ArcaneInsurgence.AuraDescription.enGB.set("Arcane Shot now applies a stacking damage buff on the enemy, while simultaneously buffing the caster.");
ArcaneInsurgence.Effects.get(0).PointsBase.set(0);                                      //1% increased damage on cast
ArcaneInsurgence.Effects.get(0).PointsDieSides.set(1);
ArcaneInsurgence.Effects.get(0).Aura.MOD_DAMAGE_PERCENT_DONE.set();
ArcaneInsurgence.Effects.get(0).ImplicitTargetA.UNIT_CASTER.set();
ArcaneInsurgence.Effects.get(1).Type.APPLY_AURA.set();
ArcaneInsurgence.Effects.get(1).PointsBase.set(39);                                     //40 damage every 3 seconds
ArcaneInsurgence.Effects.get(1).PointsDieSides.set(1);
ArcaneInsurgence.Effects.get(1).ImplicitTargetA.UNIT_TARGET_ENEMY.set();
ArcaneInsurgence.Effects.get(1).Aura.PERIODIC_DAMAGE.set();
ArcaneInsurgence.Effects.get(1).ChainAmplitude.set(3000);
ArcaneInsurgence.Effects.get(0).ClassMask.A.set(0x00000800);
ArcaneInsurgence.Effects.get(1).ClassMask.A.set(0x00000800);
ArcaneInsurgence.Duration.set(21);
ArcaneInsurgence.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ArcaneInsurgence.AuraInterruptFlags.set(0x0080000);
ArcaneInsurgence.Stacks.set(99);
ArcaneInsurgence.Icon.setPath("Ability_Hunter_Misdirection");
addSpellToTorghastScript(ArcaneInsurgence,3,5,0)

export let ArcanePotency = std.Spells.create(MODNAME, "arcanepotency-spell", 19456);                                                                                 //Additional Holy Damage
ArcanePotency.Name.enGB.set("Arcane Potency");
ArcanePotency.Description.enGB.set("Increases the damage of your Arcane Shot by $s1%.");
ArcanePotency.AuraDescription.enGB.set("Increases the damage of your Arcane Shot by $s1%.");
ArcanePotency.Effects.get(0).PointsBase.set(49);
ArcanePotency.Effects.get(0).PointsDieSides.set(1);
ArcanePotency.Effects.get(0).ClassMask.A.set(0x00000800);
ArcanePotency.Duration.set(21);
ArcanePotency.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ArcanePotency.AuraInterruptFlags.set(0x0080000);
ArcanePotency.Stacks.set(99);
ArcanePotency.Icon.setPath("Spell_Arcane_StarFire");
addSpellToTorghastScript(ArcanePotency,3,2,0)

export let Dynamite = std.Spells.create(MODNAME, "dynamite-spell", 56337);                                                                                 //Additional Holy Damage
Dynamite.Name.enGB.set("Pyrotechnic");
Dynamite.Description.enGB.set("Increases the damage done by your Explosive Shot, Explosive Trap and Immolation Trap by $s2%.");
Dynamite.AuraDescription.enGB.set("Increases the damage done by your Explosive Shot, Explosive Trap and Immolation Trap by $s2%.");
Dynamite.Effects.get(1).PointsBase.set(49);
Dynamite.Effects.get(1).PointsDieSides.set(1);
Dynamite.Duration.set(21);
Dynamite.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Dynamite.AuraInterruptFlags.set(0x0080000);
Dynamite.Stacks.set(99);
Dynamite.Icon.setPath("INV_Misc_Bomb_07");
addSpellToTorghastScript(Dynamite,3,5,0)

export let VolleyBuff = std.Spells.create(MODNAME, "volleybuff-spell", 19456);                                                                                 //Additional Holy Damage
VolleyBuff.Name.enGB.set("Plenty of Arrows");
VolleyBuff.Description.enGB.set("Increases the damage of your Volley by $s1%.");
VolleyBuff.AuraDescription.enGB.set("Increases the damage of your Volley by $s1%.");
VolleyBuff.Effects.get(0).PointsBase.set(49);
VolleyBuff.Effects.get(0).PointsDieSides.set(1);
VolleyBuff.Effects.get(0).ClassMask.A.set(0x00002000);
VolleyBuff.Duration.set(21);
VolleyBuff.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
VolleyBuff.AuraInterruptFlags.set(0x0080000);
VolleyBuff.Stacks.set(99);
VolleyBuff.Icon.setPath("INV_Ammo_Bullet_03");
addSpellToTorghastScript(VolleyBuff,3,2,0)

export let AimedShotBuff = std.Spells.create(MODNAME, "aimedshotbuff-spell", 19456);                                                                                 //Additional Holy Damage
AimedShotBuff.Name.enGB.set("Plenty of Arrows");
AimedShotBuff.Description.enGB.set("Increases the damage of your Aimed Shot by $s1%.");
AimedShotBuff.AuraDescription.enGB.set("Increases the damage of your Aimed Shot by $s1%.");
AimedShotBuff.Effects.get(0).PointsBase.set(49);
AimedShotBuff.Effects.get(0).PointsDieSides.set(1);
AimedShotBuff.Effects.get(0).ClassMask.A.set(0x00020000);
AimedShotBuff.Duration.set(21);
AimedShotBuff.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
AimedShotBuff.AuraInterruptFlags.set(0x0080000);
AimedShotBuff.Stacks.set(99);
AimedShotBuff.Icon.setPath("INV_Ammo_Bullet_03");
addSpellToTorghastScript(AimedShotBuff,3,2,0)

export let PunishingBlows = std.Spells.create(MODNAME, "punishingblows-spell", 19456);                                                                                 //Additional Holy Damage
PunishingBlows.Name.enGB.set("Punishing Blows");
PunishingBlows.Description.enGB.set("Increases the damage of your Mongoose Bite and Raptor Strike by $s1%.");
PunishingBlows.AuraDescription.enGB.set("Increases the damage of your Mongoose Bite and Raptor Strike by $s1%.");
PunishingBlows.Effects.get(0).PointsBase.set(149);
PunishingBlows.Effects.get(0).PointsDieSides.set(1);
PunishingBlows.Effects.get(0).ClassMask.A.set(0x00000002);
PunishingBlows.Duration.set(21);
PunishingBlows.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
PunishingBlows.AuraInterruptFlags.set(0x0080000);
PunishingBlows.Stacks.set(99);
PunishingBlows.Icon.setPath("Ability_Warrior_PunishingBlow");
addSpellToTorghastScript(PunishingBlows,3,2,0)

export let Endurance = std.Spells.create(MODNAME, "endurance-spell", 19587);                                                                                //Increased health modifier
Endurance.Name.enGB.set("Bestial Instincts");
Endurance.Description.enGB.set("Increases the health of your pet by $s1% and your total health by $s2%.");
Endurance.AuraDescription.enGB.set("Increases the health of your pet by $s1% and your total health by $s2%.");
Endurance.Effects.get(0).PointsBase.set(24);
Endurance.Effects.get(0).PointsDieSides.set(1);
Endurance.Effects.get(1).PointsBase.set(4);
Endurance.Effects.get(1).PointsDieSides.set(1);
Endurance.Duration.set(21);
Endurance.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Endurance.AuraInterruptFlags.set(0x0080000);
Endurance.Stacks.set(99);
Endurance.Icon.setPath("Ability_Druid_Swipe");
addSpellToTorghastScript(Endurance,3,2,0)

export let Pierced = std.Spells.create(MODNAME, "pierced-spell", 53234);                                                                                    //Bleed chances
Pierced.Name.enGB.set("Plated Ammo");
Pierced.Description.enGB.set("Your critical Aimed, Steady and Chimera Shots cause the target to bleed.");
Pierced.AuraDescription.enGB.set("Your critical Aimed, Steady and Chimera Shots cause the target to bleed.");
Pierced.Effects.get(0).PointsBase.set(29);
Pierced.Effects.get(0).PointsDieSides.set(1);
Pierced.Duration.set(21);
Pierced.Effects.get(0).ClassMask.A.set(0x00020000)
Pierced.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Pierced.AuraInterruptFlags.set(0x0080000);
Pierced.Stacks.set(99);
addSpellToTorghastScript(Pierced,3,2,0)

export let IncreasedAimShot = std.Spells.create(MODNAME, "increasedaimshot-spell", 53220);                                                                  //Increased aim shot damage
IncreasedAimShot.Name.enGB.set("Weighted Fletchings");
IncreasedAimShot.Description.enGB.set("Damage done by your Aimed Shot, Arcane Shot or Chimera Shot increased by $s1%, and mana cost reduced by $s2%.");
IncreasedAimShot.AuraDescription.enGB.set("Grants various bonus proc chances to your Steady Shot.");
IncreasedAimShot.Effects.get(0).PointsBase.set(49);                  //50% increased damage.
IncreasedAimShot.Effects.get(0).PointsDieSides.set(1);
IncreasedAimShot.Effects.get(1).PointsBase.set(99);                  //100% reduced cost.
IncreasedAimShot.Effects.get(1).PointsDieSides.set(1);
IncreasedAimShot.Duration.set(21);
IncreasedAimShot.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedAimShot.AuraInterruptFlags.set(0x0080000);
IncreasedAimShot.Stacks.set(99);
addSpellToTorghastScript(IncreasedAimShot,3,2,0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Rogue Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let Vigorous = std.Spells.create(MODNAME, "vigorous-spell", 14983);                                                                                    //+50 energy
Vigorous.Name.enGB.set("Cracked Out");
Vigorous.Description.enGB.set("Maximum energy increased by $s1.");
Vigorous.AuraDescription.enGB.set("Maximum energy increased by $s1.");
Vigorous.Effects.get(0).PointsBase.set(49);
Vigorous.Effects.get(0).PointsDieSides.set(1);
Vigorous.Duration.set(21);
Vigorous.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Vigorous.AuraInterruptFlags.set(0x0080000);
Vigorous.Stacks.set(99);
Vigorous.Icon.setPath("Ability_Rogue_SlaughterfromtheShadows");
addSpellToTorghastScript(Vigorous,4,2,0)

export let SinisterCalling = std.Spells.create(MODNAME, "sinsitercalling-spell", 31124);                                                                    //50% increased sinister strike dmg
SinisterCalling.Name.enGB.set("Sinister Calling");
SinisterCalling.Description.enGB.set("Increases damage dealt by Sinister Strike by $s2%.");
SinisterCalling.AuraDescription.enGB.set("Increases damage dealt by Sinister Strike by $s2%.");
SinisterCalling.Effects.get(0).Type.NULL.set();
SinisterCalling.Effects.get(1).PointsBase.set(49);
SinisterCalling.Effects.get(1).PointsDieSides.set(1);
SinisterCalling.Effects.get(1).ClassMask.A.set(0x0000002);
SinisterCalling.Duration.set(21);
SinisterCalling.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
SinisterCalling.AuraInterruptFlags.set(0x0080000);
SinisterCalling.Stacks.set(99);
SinisterCalling.Icon.setPath("Ability_Rogue_FocusedAttacks");
addSpellToTorghastScript(SinisterCalling,4,2,0)

export let Traitor = std.Spells.create(MODNAME, "traitorcalling-spell", 31124);                                                                             //50% increased backstab dmg
Traitor.Name.enGB.set("Traitorous Calling");
Traitor.Description.enGB.set("Increases damage dealt by Backstab by $s2%.");
Traitor.AuraDescription.enGB.set("Increases damage dealt by Backstab by $s2%.");
Traitor.Effects.get(0).Type.NULL.set();
Traitor.Effects.get(1).PointsBase.set(49);
Traitor.Effects.get(1).PointsDieSides.set(1);
Traitor.Effects.get(1).ClassMask.A.set(0x0000004);
Traitor.Duration.set(21);
Traitor.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Traitor.AuraInterruptFlags.set(0x0080000);
Traitor.Stacks.set(99);
Traitor.Icon.setPath("Ability_Rogue_FindWeakness");
addSpellToTorghastScript(Traitor,4,2,0)

export let Opportunity = std.Spells.create(MODNAME, "opportunity-spell", 14057);                                                                             //50% increased ambush dmg
Opportunity.Name.enGB.set("Death\'s Calling");
Opportunity.Description.enGB.set("Increases damage dealt by Ambush by $s2%.");
Opportunity.AuraDescription.enGB.set("Increases damage dealt by Ambush by $s2%.");
Opportunity.Effects.get(0).PointsBase.set(49);
Opportunity.Effects.get(0).PointsDieSides.set(1);
Opportunity.Effects.get(0).ClassMask.A.set(0x0000200);
Opportunity.Effects.get(0).ClassMask.B.set(0x0000000);
Opportunity.Effects.get(1).Type.NULL.set();
Opportunity.Duration.set(21);
Opportunity.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Opportunity.AuraInterruptFlags.set(0x0080000);
Opportunity.Stacks.set(99);
Opportunity.Icon.setPath("Ability_Rogue_Waylay");
addSpellToTorghastScript(Opportunity,4,2,0)

export let Deception = std.Spells.create(MODNAME, "deception-spell", 13971);                                                                             //Increased stealth effectiveness
Deception.Name.enGB.set("Master of Death");
Deception.Description.enGB.set("Increases the effectiveness of your stealth. Stacks.");
Deception.AuraDescription.enGB.set("Increases the effectiveness of your stealth. Stacks.");
Deception.Effects.get(0).PointsBase.set(14);
Deception.Effects.get(0).PointsDieSides.set(1);
Deception.Duration.set(21);
Deception.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Deception.AuraInterruptFlags.set(0x0080000);
Deception.Stacks.set(99);
Deception.Icon.setPath("Ability_Rogue_MasterOfSubtlety");
addSpellToTorghastScript(Deception,4,2,0)

export let Opportunity02 = std.Spells.create(MODNAME, "opportunity02-spell", 14057);                                                                             //50% increased ambush dmg
Opportunity02.Name.enGB.set("Insidious Nature");
Opportunity02.Description.enGB.set("Increases damage dealt by Ambush by $s1%.");
Opportunity02.AuraDescription.enGB.set("Increases damage dealt by Ambush by $s1%.");
Opportunity02.Effects.get(0).PointsBase.set(149);
Opportunity02.Effects.get(0).PointsDieSides.set(1);
Opportunity02.Effects.get(0).ClassMask.A.set(0x0000200);
Opportunity02.Effects.get(0).ClassMask.B.set(0x0000000);
Opportunity02.Effects.get(1).Type.NULL.set();
Opportunity02.Duration.set(21);
Opportunity02.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Opportunity02.AuraInterruptFlags.set(0x0080000);
Opportunity02.Stacks.set(99);
Opportunity02.Icon.setPath("Ability_Rogue_Ambush");
addSpellToTorghastScript(Opportunity02,4,2,0)

export let Powerful01 = std.Spells.create(MODNAME, "mastertechniques-spell", 31124);                                                                    //50% increased sinister strike dmg
Powerful01.Name.enGB.set("Masterful Techniques");
Powerful01.Description.enGB.set("Increases damage dealt by Eviscerate by $s2%.");
Powerful01.AuraDescription.enGB.set("Increases damage dealt by Eviscerate by $s2%.");
Powerful01.Effects.get(0).Type.NULL.set();
Powerful01.Effects.get(1).PointsBase.set(49);
Powerful01.Effects.get(1).PointsDieSides.set(1);
Powerful01.Effects.get(1).ClassMask.A.set(0x00020000);
Powerful01.Duration.set(21);
Powerful01.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Powerful01.AuraInterruptFlags.set(0x0080000);
Powerful01.Stacks.set(99);
Powerful01.Icon.setPath("Ability_Rogue_Eviscerate");
addSpellToTorghastScript(Powerful01,4,2,0)

export let HemorragicStrikes = std.Spells.create(MODNAME, "hemostrike-spell", 31124);                                                                    //50% increased sinister strike dmg
HemorragicStrikes.Name.enGB.set("Hemorrhagic Strikes");
HemorragicStrikes.Description.enGB.set("Increases damage dealt by Rupture by $s2%.");
HemorragicStrikes.AuraDescription.enGB.set("Increases damage dealt by Rupture by $s2%.");
HemorragicStrikes.Effects.get(0).Type.NULL.set();
HemorragicStrikes.Effects.get(1).PointsBase.set(49);
HemorragicStrikes.Effects.get(1).PointsDieSides.set(1);
HemorragicStrikes.Effects.get(1).ClassMask.A.set(0x00100000);
HemorragicStrikes.Duration.set(21);
HemorragicStrikes.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
HemorragicStrikes.AuraInterruptFlags.set(0x0080000);
HemorragicStrikes.Stacks.set(99);
HemorragicStrikes.Icon.setPath("Ability_Rogue_Rupture");
addSpellToTorghastScript(HemorragicStrikes,4,2,0)

export let SinisterCauseBleedTest = std.Spells.create(MODNAME, "sinistercausebleed-spell", 31124);                                                                    //50% increased sinister strike dmg
SinisterCauseBleedTest.Name.enGB.set("Bloodthirsty Daggers");
SinisterCauseBleedTest.Description.enGB.set("Your sinister strike now has a chance to cause rupture on the target.");
SinisterCauseBleedTest.AuraDescription.enGB.set("Your sinister strike now has a chance to cause rupture on the target.");
SinisterCauseBleedTest.Effects.get(0).TriggerSpell.set(48672);
SinisterCauseBleedTest.Effects.get(0).ClassMask.A.set(0x00100000);
SinisterCauseBleedTest.Effects.get(1).Type.NULL.set();
SinisterCauseBleedTest.Proc.Chance.set(10) 
SinisterCauseBleedTest.Duration.set(21);
SinisterCauseBleedTest.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
SinisterCauseBleedTest.AuraInterruptFlags.set(0x0000002);
SinisterCauseBleedTest.Stacks.set(99);
SinisterCauseBleedTest.Icon.setPath("Ability_Rogue_Rupture");
addSpellToTorghastScript(SinisterCauseBleedTest,4,5,1)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Priest Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let RenewHeal = std.Spells.create(MODNAME, "renewheal-spell", 17191);                                                                                    //Bleed chances
RenewHeal.Name.enGB.set("Renewal");
RenewHeal.Description.enGB.set("Increases the healing power of your renew by $s1%.");
RenewHeal.AuraDescription.enGB.set("Increases the healing power of your renew by $s1%.");
RenewHeal.Effects.get(0).PointsBase.set(49);
RenewHeal.Effects.get(0).PointsDieSides.set(1);
RenewHeal.Effects.get(0).ClassMask.A.set(0x00000040)
RenewHeal.Duration.set(21);
RenewHeal.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
RenewHeal.AuraInterruptFlags.set(0x0080000);
RenewHeal.Stacks.set(99);
RenewHeal.Icon.setPath("INV_Crystallized_Life");
addSpellToTorghastScript(RenewHeal,5,2,0)

export let ShadowPower = std.Spells.create(MODNAME, "shadowpower-spell", 15317);                                                                                    //Bleed chances
ShadowPower.Name.enGB.set("Demonic Influence");
ShadowPower.Description.enGB.set("Increases the damage of shadow word pain by $s1%.");
ShadowPower.AuraDescription.enGB.set("Increases the damage of shadow word pain by $s1%.");
ShadowPower.Effects.get(0).PointsBase.set(74);
ShadowPower.Effects.get(0).PointsDieSides.set(1);
ShadowPower.Effects.get(0).ClassMask.A.set(0x00008000)
ShadowPower.Duration.set(21);
ShadowPower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ShadowPower.AuraInterruptFlags.set(0x0080000);
ShadowPower.Stacks.set(99);
ShadowPower.Icon.setPath("Spell_Shadow_PainAndSuffering");
addSpellToTorghastScript(ShadowPower,5,2,0)

export let DevouringPower = std.Spells.create(MODNAME, "devouringpower-spell", 63627);                                                                                    //Bleed chances
DevouringPower.Name.enGB.set("Consumption");
DevouringPower.Description.enGB.set("Increases the periodic damage done by your Devouring Plague by $s1%.");
DevouringPower.AuraDescription.enGB.set("Increases the periodic damage done by your Devouring Plague by $s1%.");
DevouringPower.Effects.get(0).PointsBase.set(49);
DevouringPower.Effects.get(0).PointsDieSides.set(1);
DevouringPower.Effects.get(0).ClassMask.A.set(0x02000000)
DevouringPower.Effects.get(1).Type.NULL.set();
DevouringPower.Duration.set(21);
DevouringPower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
DevouringPower.AuraInterruptFlags.set(0x0080000);
DevouringPower.Stacks.set(99);
DevouringPower.Icon.setPath("INV_Ore_Eternium");
addSpellToTorghastScript(DevouringPower,5,2,0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Deathknight Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let AncientTechniques = std.Spells.create(MODNAME, "ancienttechniques-spell", 50147);                                                                                    //50 runic power
AncientTechniques.Name.enGB.set("Runic Mastery");
AncientTechniques.Description.enGB.set("Increases your maximum Runic Power by ${$m1/10}.");
AncientTechniques.AuraDescription.enGB.set("Increases your maximum Runic Power by ${$m1/10}.");
AncientTechniques.Effects.get(0).PointsBase.set(499);
AncientTechniques.Duration.set(21);
AncientTechniques.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
AncientTechniques.AuraInterruptFlags.set(0x0080000);
AncientTechniques.Stacks.set(99);
AncientTechniques.Icon.setPath("Spell_Shadow_SealOfKings");
addSpellToTorghastScript(AncientTechniques,6,2,0)

export let UnholyPower = std.Spells.create(MODNAME, "unholypower-spell", 50147);                                                                                    //50 runic power
UnholyPower.Name.enGB.set("Runic Mastery");
UnholyPower.Description.enGB.set("Increases your critical strike damage bonus by your Plague Strike and Scourge Strike by $s1%.");
UnholyPower.AuraDescription.enGB.set("Increases your critical strike damage bonus by your Plague Strike and Scourge Strike by $s1%.");
UnholyPower.Effects.get(0).PointsBase.set(49);
UnholyPower.Effects.get(1).Type.NULL.set();
UnholyPower.Duration.set(21);
UnholyPower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
UnholyPower.AuraInterruptFlags.set(0x0080000);
UnholyPower.Stacks.set(99);
UnholyPower.Icon.setPath("Spell_Nature_MirrorImage");
addSpellToTorghastScript(UnholyPower,6,2,0)

export let DeadliestCoil = std.Spells.create(MODNAME, "deadliestcoil-spell", 48963);                                                                                    //50 runic power
DeadliestCoil.Name.enGB.set("Deadliest Coil");
DeadliestCoil.Description.enGB.set("Increases the damage and healing of your death coil by $s1%.");
DeadliestCoil.AuraDescription.enGB.set("Increases the damage and healing of your death coil by $s1%.");
DeadliestCoil.Effects.get(0).PointsBase.set(149);
DeadliestCoil.Effects.get(1).Type.NULL.set();
DeadliestCoil.Duration.set(21);
DeadliestCoil.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
DeadliestCoil.AuraInterruptFlags.set(0x0080000);
DeadliestCoil.Stacks.set(99);
DeadliestCoil.Icon.setPath("Ability_Creature_Disease_02");
addSpellToTorghastScript(DeadliestCoil,6,2,0)

export let RapidDecay = std.Spells.create(MODNAME, "rapiddecay-spell", 48963);                                                                                    //50 runic power
RapidDecay.Name.enGB.set("Rapid Decay");
RapidDecay.Description.enGB.set("Decreases the cooldown of your death and decay by $s2 seconds.");
RapidDecay.AuraDescription.enGB.set("Decreases the cooldown of your death and decay by $s2 seconds.");
RapidDecay.Effects.get(1).PointsBase.set(-5001);
RapidDecay.Effects.get(0).Type.NULL.set();
RapidDecay.Duration.set(21);
RapidDecay.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
RapidDecay.AuraInterruptFlags.set(0x0080000);
RapidDecay.Stacks.set(99);
RapidDecay.Icon.setPath("Spell_Shadow_UnstableAffliction_2");
addSpellToTorghastScript(RapidDecay,6,2,0)

export let DeathlyDecay = std.Spells.create(MODNAME, "deathlydecay-spell", 48963);                                                                                    //50 runic power
DeathlyDecay.Name.enGB.set("Deathly Decay");
DeathlyDecay.Description.enGB.set("Increases the damage dealt by your death and decay ability by $s1%.");
DeathlyDecay.AuraDescription.enGB.set("Increases the damage dealt by your death and decay ability by $s1%.");
DeathlyDecay.Effects.get(0).PointsBase.set(49);
DeathlyDecay.Effects.get(0).ClassMask.A.set(0x00000020)
DeathlyDecay.Effects.get(1).Type.NULL.set();
DeathlyDecay.Duration.set(21);
DeathlyDecay.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
DeathlyDecay.AuraInterruptFlags.set(0x0080000);
DeathlyDecay.Stacks.set(99);
DeathlyDecay.Icon.setPath("Ability_Rogue_EnvelopingShadows");
addSpellToTorghastScript(DeathlyDecay,6,2,0)

export let BloodierStrike = std.Spells.create(MODNAME, "bloodierstrike-spell", 62905);                                                                                    //50 runic power
BloodierStrike.Name.enGB.set("Bloodier Strikes");
BloodierStrike.Description.enGB.set("Increases the healing of your death strike by $s3%.");
BloodierStrike.AuraDescription.enGB.set("Increases the healing of your death strike by $s3%.");
BloodierStrike.Effects.get(0).Type.NULL.set();
BloodierStrike.Effects.get(1).Type.NULL.set();
BloodierStrike.Effects.get(2).PointsBase.set(49);
BloodierStrike.Duration.set(21);
BloodierStrike.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
BloodierStrike.AuraInterruptFlags.set(0x0080000);
BloodierStrike.Stacks.set(99);
BloodierStrike.Icon.setPath("Ability_Warrior_BloodBath");
addSpellToTorghastScript(BloodierStrike,6,2,0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Shaman Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let Fulmination = std.Spells.create(MODNAME, "fulmination-spell", 16108);                                                                                    //Bleed chances
Fulmination.Name.enGB.set("Fulmination");
Fulmination.Description.enGB.set("Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by $s1%.");
Fulmination.AuraDescription.enGB.set("Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Lava Burst and Shock spells by $s1%.");
Fulmination.Effects.get(0).PointsBase.set(29);
Fulmination.Effects.get(0).PointsDieSides.set(1);
Fulmination.Effects.get(1).PointsBase.set(29);
Fulmination.Effects.get(1).PointsDieSides.set(1);
Fulmination.Duration.set(21);
Fulmination.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Fulmination.AuraInterruptFlags.set(0x0080000);
Fulmination.Stacks.set(99);
Fulmination.Icon.setPath("Spell_Shaman_AncestralAwakening");
addSpellToTorghastScript(Fulmination,7,2,0)

export let ElementalCall = std.Spells.create(MODNAME, "elementalcall-spell", 29000);                                                                                    //Bleed chances
ElementalCall.Name.enGB.set("Elemental Reach");
ElementalCall.Description.enGB.set("Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by $s1 yards.");
ElementalCall.AuraDescription.enGB.set("Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by $s1 yards.");
ElementalCall.Effects.get(0).PointsBase.set(4);
ElementalCall.Effects.get(0).PointsDieSides.set(1);
ElementalCall.Effects.get(1).Type.NULL.set();
ElementalCall.Effects.get(2).Type.NULL.set();
ElementalCall.Duration.set(21);
ElementalCall.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ElementalCall.AuraInterruptFlags.set(0x0080000);
ElementalCall.Stacks.set(99);
ElementalCall.Icon.setPath("INV_Misc_Herb_Terrocone");
addSpellToTorghastScript(Fulmination,7,4,0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Mage Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let PolymorphPower = std.Spells.create(MODNAME,"polymorphpower-spell",34747);
PolymorphPower.Name.enGB.set("Call of the Herd Master");
PolymorphPower.Description.enGB.set("Total Damage dealt increased by $s1%.");
PolymorphPower.AuraDescription.enGB.set("Total Damage dealt increased by $s1%.");
PolymorphPower.Effects.get(0).Aura.MOD_DAMAGE_PERCENT_DONE.set();
PolymorphPower.Effects.get(0).PointsBase.set(49);
PolymorphPower.Effects.get(0).PointsDieSides.set(1);
PolymorphPower.Effects.get(1).Aura.NONE.set();
PolymorphPower.Effects.get(2).Aura.NONE.set();
PolymorphPower.Duration.setSimple(10000)
PolymorphPower.CastTime.setSimple(0);
PolymorphPower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
PolymorphPower.Icon.setPath("Ability_Seal");
export let PolymorphBuff = std.Spells.create(MODNAME, "polymorphbuff-spell", 44301);                                                                    //50% increased sinister strike dmg
PolymorphBuff.Name.enGB.set("Master Herder");
PolymorphBuff.Description.enGB.set("Polymorph now grants you a buff that increases your damage by 50% for 10 seconds.");
PolymorphBuff.AuraDescription.enGB.set("Polymorph now grants you a buff that increases your damage by 50% for 10 seconds.");
PolymorphBuff.Effects.get(0).Type.APPLY_AURA.set();
PolymorphBuff.Effects.get(0).PointsBase.set(99);
PolymorphBuff.Effects.get(0).PointsDieSides.set(1);
PolymorphBuff.Effects.get(0).ImplicitTargetA.UNIT_CASTER.set();
PolymorphBuff.Effects.get(0).Aura.PROC_TRIGGER_SPELL.set();
PolymorphBuff.Effects.get(0).TriggerSpell.set(PolymorphPower.ID);
PolymorphBuff.Effects.get(0).ClassMask.A.set(0x01000000);
PolymorphBuff.Proc.Chance.set(10) 
PolymorphBuff.Duration.set(21);
PolymorphBuff.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
PolymorphBuff.AuraInterruptFlags.set(0x0000002);
PolymorphBuff.Stacks.set(99);
PolymorphBuff.Icon.setPath("Spell_Nature_Polymorph");
addSpellToTorghastScript(PolymorphBuff,8,4,1)

export let IcePiercing = std.Spells.create(MODNAME, "icepiercing-spell", 12953);                                                                                    //Bleed chances
IcePiercing.Name.enGB.set("Hypothermia");
IcePiercing.Description.enGB.set("Increases the damage of all of your frost spells by $s1%.");
IcePiercing.AuraDescription.enGB.set("Increases the damage of all of your frost spells by $s1%.");
IcePiercing.Effects.get(0).PointsBase.set(49);
IcePiercing.Effects.get(0).PointsDieSides.set(1);
IcePiercing.Duration.set(21);
IcePiercing.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IcePiercing.AuraInterruptFlags.set(0x0080000);
IcePiercing.Stacks.set(99);
IcePiercing.Icon.setPath("Spell_Shadow_DarkRitual");
addSpellToTorghastScript(IcePiercing,8,4,0)

export let IceLanceUber = std.Spells.create(MODNAME,"icelanceuber-spell",70464);
IceLanceUber.Name.enGB.set("Uber Frost Lance");
IceLanceUber.Description.enGB.set("Deals $s1 damage to all enemies within 80 yards. Deals triple damage to frozen targets.");
IceLanceUber.AuraDescription.enGB.set("Deals $s1 damage to all enemies within 80 yards. Deals triple damage to frozen targets.");
export let IceLanceUberProc = std.Spells.create(MODNAME, "icelanceuberproc-spell", 12953);                                                                                    //Bleed chances
IceLanceUberProc.Name.enGB.set("Frostlord\'s Fury");
IceLanceUberProc.Description.enGB.set("Ice lance has a 5% chance to deal damage to all enemies within 80 yards. Dealing triple damage to frozen targets.");
IceLanceUberProc.AuraDescription.enGB.set("Ice lance has a 5% chance to deal damage to all enemies within 80 yards. Dealing triple damage to frozen targets.");
IceLanceUberProc.Effects.get(0).Type.APPLY_AURA.set();
IceLanceUberProc.Effects.get(0).PointsBase.set(99);
IceLanceUberProc.Effects.get(0).PointsDieSides.set(1);
IceLanceUberProc.Effects.get(0).ImplicitTargetA.UNIT_CASTER.set();
IceLanceUberProc.Effects.get(0).Aura.PROC_TRIGGER_SPELL.set();
IceLanceUberProc.Effects.get(0).TriggerSpell.set(IceLanceUber.ID);
IceLanceUberProc.Effects.get(0).ClassMask.A.set(0x00020000);
IceLanceUberProc.Proc.Chance.set(5);
IceLanceUberProc.Duration.set(21);
IceLanceUberProc.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IceLanceUberProc.AuraInterruptFlags.set(0x0080000);
IceLanceUberProc.Stacks.set(99);
IceLanceUberProc.Icon.setPath("Spell_Frost_IceStorm");
addSpellToTorghastScript(IceLanceUber,8,5,1)

export let ArcticSwirl = std.Spells.create(MODNAME, "arcticswirl-spell", 12490);                                                                                    //Bleed chances
ArcticSwirl.Name.enGB.set("Arctic Swirl");
ArcticSwirl.Description.enGB.set("Increases the damage dealt by your Cone of Cold spell by $s1%.");
ArcticSwirl.AuraDescription.enGB.set("Increases the damage dealt by your Cone of Cold spell by $s1%.");
ArcticSwirl.Effects.get(0).PointsBase.set(99);
ArcticSwirl.Effects.get(0).PointsDieSides.set(1);
ArcticSwirl.Duration.set(21);
ArcticSwirl.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ArcticSwirl.AuraInterruptFlags.set(0x0080000);
ArcticSwirl.Stacks.set(99);
ArcticSwirl.Icon.setPath("Spell_Frost_FrostShock");
addSpellToTorghastScript(ArcticSwirl,8,4,0)

export let FirePower = std.Spells.create(MODNAME, "firepower-spell", 12400);                                                                                    //Bleed chances
FirePower.Name.enGB.set("Proclivity for Pyrotechnics");
FirePower.Description.enGB.set("Increases the damage of all of your fire spells by $s1%.");
FirePower.AuraDescription.enGB.set("Increases the damage of all of your fire spells by $s1%.");
FirePower.Effects.get(0).PointsBase.set(49);
FirePower.Effects.get(0).PointsDieSides.set(1);
FirePower.Effects.get(1).PointsBase.set(49);
FirePower.Effects.get(1).PointsDieSides.set(1);
FirePower.Duration.set(21);
FirePower.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
FirePower.AuraInterruptFlags.set(0x0080000);
FirePower.Stacks.set(99);
FirePower.Icon.setPath("Spell_Frost_FireResistanceTotem");
addSpellToTorghastScript(FirePower,8,4,0)

export let FrozenHaste = std.Spells.create(MODNAME, "frozenhaste-spell", 31683);                                                                                    //Bleed chances
FrozenHaste.Name.enGB.set("Frozen Haste");
FrozenHaste.Description.enGB.set("Decreases the cast time of your frostbolt by ${$m2/-1000}.1 sec.");
FrozenHaste.AuraDescription.enGB.set("Decreases the cast time of your frostbolt by ${$m2/-1000}.1 sec.");
FrozenHaste.Effects.get(0).Type.NULL.set();
FrozenHaste.Effects.get(1).PointsBase.set(-251);
FrozenHaste.Effects.get(1).PointsDieSides.set(1);
FrozenHaste.Effects.get(1).ClassMask.A.set(0x00000020)
FrozenHaste.Duration.set(21);
FrozenHaste.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
FrozenHaste.AuraInterruptFlags.set(0x0080000);
FrozenHaste.Stacks.set(99);
FrozenHaste.Icon.setPath("INV_DataCrystal09");
addSpellToTorghastScript(FrozenHaste,8,4,0)

export let PolyHaste = std.Spells.create(MODNAME, "polyhaste-spell", 31683);                                                                                    //Bleed chances
PolyHaste.Name.enGB.set("Fluffy Quickness");
PolyHaste.Description.enGB.set("Decreases the cast time of your polymorph by ${$m2/-1000}.1 sec.");
PolyHaste.AuraDescription.enGB.set("Decreases the cast time of your polymorph by ${$m2/-1000}.1 sec.");
PolyHaste.Effects.get(0).Type.NULL.set();
PolyHaste.Effects.get(1).PointsBase.set(-251);
PolyHaste.Effects.get(1).PointsDieSides.set(1);
PolyHaste.Effects.get(1).ClassMask.A.set(0x01000000)
PolyHaste.Duration.set(21);
PolyHaste.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
PolyHaste.AuraInterruptFlags.set(0x0080000);
PolyHaste.Stacks.set(99);
PolyHaste.Icon.setPath("Ability_Hunter_Displacement");
addSpellToTorghastScript(PolyHaste,8,4,0)

export let PyroHaste = std.Spells.create(MODNAME, "pyrohaste-spell", 31683);                                                                                    //Bleed chances
PyroHaste.Name.enGB.set("Combustion");
PyroHaste.Description.enGB.set("Decreases the cast time of your pyroblast by ${$m2/-1000}.1 sec.");
PyroHaste.AuraDescription.enGB.set("Decreases the cast time of your pyroblast by ${$m2/-1000}.1 sec.");
PyroHaste.Effects.get(0).Type.NULL.set();
PyroHaste.Effects.get(1).PointsBase.set(-251);
PyroHaste.Effects.get(1).PointsDieSides.set(1);
PyroHaste.Effects.get(1).ClassMask.A.set(0x00400000)
PyroHaste.Duration.set(21);
PyroHaste.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
PyroHaste.AuraInterruptFlags.set(0x0080000);
PyroHaste.Stacks.set(99);
PyroHaste.Icon.setPath("Spell_Shaman_StormEarthFire");
addSpellToTorghastScript(PyroHaste,8,4,0)

export let Inferno = std.Spells.create(MODNAME, "inferno-spell", 54741);                                                                                    //Bleed chances
Inferno.Name.enGB.set("Infernal Heat");
Inferno.Description.enGB.set("Increases the cast time of your flamestrike by $s1% and increases the damage by $s2%. (Developer Note : $s1, $s2, $s3)");
Inferno.AuraDescription.enGB.set("Increases the cast time of your flamestrike by $s1% and increases the damage by $s2%. (Developer Note : $s1, $s2, $s3)");
Inferno.Effects.get(0).PointsBase.set(499)  //testing speed modifier 500% increased cast time
Inferno.Effects.get(1).PointsBase.set(649)  //testing cost modifier 650% increased cost
Inferno.Effects.get(2).Type.APPLY_AURA.set();
Inferno.Effects.get(2).PointsBase.set(499); //testing damage modifier   500% increased damage
Inferno.Effects.get(2).PointsDieSides.set(1);
Inferno.Effects.get(2).Aura.ADD_PCT_MODIFIER.set();
Inferno.Effects.get(2).MiscValueA.set(0)
Inferno.Effects.get(2).ClassMask.A.set(0x00000004);
Inferno.Duration.set(21);
Inferno.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Inferno.AuraInterruptFlags.set(0x0080000);
Inferno.Stacks.set(99);
Inferno.Icon.setPath("Spell_Holy_Exorcism_02");
addSpellToTorghastScript(Inferno,8,4,0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Warlock Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export let EmpoweredCorruption = std.Spells.create(MODNAME, "empoweredcorruption-spell", 17810);                                                                                    //50 runic power
EmpoweredCorruption.Name.enGB.set("Supreme Corruptor");
EmpoweredCorruption.Description.enGB.set("Increases the damage of your corruption spell by $s1%.");
EmpoweredCorruption.AuraDescription.enGB.set("Increases the damage of your corruption spell by $s1%.");
EmpoweredCorruption.Effects.get(0).PointsBase.set(49);
EmpoweredCorruption.Effects.get(1).Type.NULL.set();
EmpoweredCorruption.Duration.set(21);
EmpoweredCorruption.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
EmpoweredCorruption.AuraInterruptFlags.set(0x0080000);
EmpoweredCorruption.Stacks.set(99);
EmpoweredCorruption.Icon.setPath("Spell_Shadow_TwistedFaith");
addSpellToTorghastScript(EmpoweredCorruption,9,4,0)

export let ChaoticReach01 = std.Spells.create(MODNAME, "chaoticreach01-spell", 18218);                                                                                    //50 runic power
ChaoticReach01.Name.enGB.set("Shadowy Reach");
ChaoticReach01.Description.enGB.set("Increases the range of your shadow bolt spell by $s1%.");
ChaoticReach01.AuraDescription.enGB.set("Increases the range of your shadow bolt spell by $s1%.");
ChaoticReach01.Effects.get(0).PointsBase.set(19);
ChaoticReach01.Effects.get(0).ClassMask.A.set(0x00000001);
ChaoticReach01.Effects.get(0).ClassMask.B.set(0x00000000);
ChaoticReach01.Duration.set(21);
ChaoticReach01.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChaoticReach01.AuraInterruptFlags.set(0x0080000);
ChaoticReach01.Stacks.set(99);
ChaoticReach01.Icon.setPath("Ability_Warlock_EverlastingAffliction");
addSpellToTorghastScript(ChaoticReach01,9,4,0)

export let ChaoticReach02 = std.Spells.create(MODNAME, "chaoticreach02-spell", 18218);                                                                                    //50 runic power
ChaoticReach02.Name.enGB.set("Fiery Reach");
ChaoticReach02.Description.enGB.set("Increases the range of your immolate spell by $s1%.");
ChaoticReach02.AuraDescription.enGB.set("Increases the range of your immolate spell by $s1%.");
ChaoticReach02.Effects.get(0).PointsBase.set(19);
ChaoticReach02.Effects.get(0).ClassMask.A.set(0x00000004);
ChaoticReach02.Effects.get(0).ClassMask.B.set(0x00000000);
ChaoticReach02.Duration.set(21);
ChaoticReach02.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChaoticReach02.AuraInterruptFlags.set(0x0080000);
ChaoticReach02.Stacks.set(99);
ChaoticReach02.Icon.setPath("Ability_Mage_FieryPayback");
addSpellToTorghastScript(ChaoticReach02,9,4,0)

export let EchoingShadows = std.Spells.create(MODNAME, "echoingshadows-spell", 47195);                                                                                    //50 runic power
EchoingShadows.Name.enGB.set("Echoing Shadows");
EchoingShadows.Description.enGB.set("Casting shadow bolt has a 25% chance to cast a second shadow bolt at the enemy causing 500 Damage.");
EchoingShadows.AuraDescription.enGB.set("Casting shadow bolt has a 25% chance to cast a second shadow bolt at the enemy causing 500 Damage.");
EchoingShadows.Proc.Chance.set(25);
EchoingShadows.Effects.get(0).PointsBase.set(99);
EchoingShadows.Effects.get(0).PointsDieSides.set(1);
EchoingShadows.Effects.get(0).TriggerSpell.set(11661);
EchoingShadows.Effects.get(0).ClassMask.A.set(0x00000001);
EchoingShadows.Effects.get(0).ClassMask.B.set(0x00000000);
EchoingShadows.Duration.set(21);
EchoingShadows.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
EchoingShadows.AuraInterruptFlags.set(0x0080000);
EchoingShadows.Stacks.set(99);
EchoingShadows.Icon.setPath("INV_Elemental_Mote_Shadow01");
addSpellToTorghastScript(EchoingShadows,9,5,1)

export let ImpMother = std.Spells.create(MODNAME, "impmother-spell", 47220);                                                                                    //50 runic power
ImpMother.Name.enGB.set("Imp Mother");
ImpMother.Description.enGB.set("Increases the damage of your pet\'s firebolt spell by $s1%.");
ImpMother.AuraDescription.enGB.set("Increases the damage of your pet\'s firebolt spell by $s1%.");
ImpMother.Effects.get(0).PointsBase.set(99);
ImpMother.Effects.get(0).PointsDieSides.set(1);
ImpMother.Effects.get(1).Type.NULL.set();
ImpMother.Effects.get(2).Type.NULL.set();
ImpMother.Duration.set(21);
ImpMother.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ImpMother.AuraInterruptFlags.set(0x0080000);
ImpMother.Stacks.set(99);
ImpMother.Icon.setPath("Spell_Shadow_ShadowandFlame");
addSpellToTorghastScript(ImpMother,9,4,0)

export let ImpOverLord = std.Spells.create(MODNAME, "impoverlord-spell", 47220);                                                                                    //50 runic power
ImpOverLord.Name.enGB.set("Imp Overlord");
ImpOverLord.Description.enGB.set("Increases the damage of your pet\'s firebolt spell by $s1%.");
ImpOverLord.AuraDescription.enGB.set("Increases the damage of your pet\'s firebolt spell by $s1%.");
ImpOverLord.Effects.get(0).PointsBase.set(999);
ImpOverLord.Effects.get(0).PointsDieSides.set(1);
ImpOverLord.Effects.get(1).Type.NULL.set();
ImpOverLord.Effects.get(2).Type.NULL.set();
ImpOverLord.Duration.set(21);
ImpOverLord.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ImpOverLord.AuraInterruptFlags.set(0x0080000);
ImpOverLord.Stacks.set(99);
ImpOverLord.Icon.setPath("Ability_Warlock_EmpoweredImp");
addSpellToTorghastScript(ImpOverLord,9,4,0)

export let DemonicKnowledge = std.Spells.create(MODNAME, "demotactics-spell", 30248);                                                                                    //50 runic power
DemonicKnowledge.Name.enGB.set("Demonic Knowledge");
DemonicKnowledge.Description.enGB.set("Increases the critical strike chance of your pets by $s1%.");
DemonicKnowledge.AuraDescription.enGB.set("Increases the critical strike chance of your pets by $s1%.");
DemonicKnowledge.Effects.get(0).PointsBase.set(14);
DemonicKnowledge.Effects.get(0).PointsDieSides.set(1);
DemonicKnowledge.Effects.get(1).PointsBase.set(14);
DemonicKnowledge.Effects.get(1).PointsDieSides.set(1);
DemonicKnowledge.Effects.get(2).PointsBase.set(14);
DemonicKnowledge.Effects.get(2).PointsDieSides.set(1);
DemonicKnowledge.Duration.set(21);
DemonicKnowledge.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
DemonicKnowledge.AuraInterruptFlags.set(0x0080000);
DemonicKnowledge.Stacks.set(99);
DemonicKnowledge.Icon.setPath("Achievement_Boss_Archimonde");
addSpellToTorghastScript(DemonicKnowledge,9,4,0)

export let Emberstorm = std.Spells.create(MODNAME, "emberstorm-spell", 17958);                                                                                    //50 runic power
Emberstorm.Name.enGB.set("Storm of Embers");
Emberstorm.Description.enGB.set("Decreases the cast time of Incinerate by ${$m3/-1000}.2 sec.");
Emberstorm.AuraDescription.enGB.set("Decreases the cast time of Incinerate by ${$m3/-1000}.2 sec.");
Emberstorm.Effects.get(2).PointsBase.set(-301);
Emberstorm.Effects.get(2).PointsDieSides.set(1);
Emberstorm.Effects.get(0).Type.NULL.set();
Emberstorm.Effects.get(1).Type.NULL.set();
Emberstorm.Duration.set(21);
Emberstorm.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
Emberstorm.AuraInterruptFlags.set(0x0080000);
Emberstorm.Stacks.set(99);
Emberstorm.Icon.setPath("Ability_Warlock_FireandBrimstone");
addSpellToTorghastScript(Emberstorm,9,4,0)

export let EverlastingFlames = std.Spells.create(MODNAME, "everlastingflame-spell", 18120);                                                                                    //50 runic power
EverlastingFlames.Name.enGB.set("Everlasting Flames");
EverlastingFlames.Description.enGB.set("Increases the periodic damage of your immolate spell by $s2%.");
EverlastingFlames.AuraDescription.enGB.set("Increases the periodic damage of your immolate spell by $s2%.");
EverlastingFlames.Effects.get(1).PointsBase.set(49);
EverlastingFlames.Effects.get(1).PointsDieSides.set(1);
EverlastingFlames.Effects.get(0).Type.NULL.set();
EverlastingFlames.Effects.get(2).Type.NULL.set();
EverlastingFlames.Duration.set(21);
EverlastingFlames.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
EverlastingFlames.AuraInterruptFlags.set(0x0080000);
EverlastingFlames.Stacks.set(99);
EverlastingFlames.Icon.setPath("Ability_Warlock_FireandBrimstone");
addSpellToTorghastScript(EverlastingFlames,9,4,0)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start of Druid Class Spells
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








export function addSpellToTorghastScript(spell:Spell, classID:number, rarity:number, type:number){
    let eff0 = spell.Effects.get(0)
    let eff1 = spell.Effects.get(1)
    let eff2 = spell.Effects.get(2)
    let desc = spell.Description.enGB.get()
        .replace('$s1',(eff0.PointsBase.get() + eff0.PointsDieSides.get()).toString())
        .replace('$s2',(eff1.PointsBase.get() + eff1.PointsDieSides.get()).toString())
        .replace('$s3',(eff2.PointsBase.get() + eff2.PointsDieSides.get()).toString())
        .replace('$t1',(eff0.AuraPeriod.get()/1000).toString())
        .replace('$t2',(eff1.AuraPeriod.get()/1000).toString())
        .replace('$t3',(eff2.AuraPeriod.get()/1000).toString())
        .replace('$/10;s1',((eff0.PointsBase.get() + eff0.PointsDieSides.get())/10).toString())
        .replace('$h',spell.Proc.Chance.get().toString())
        .replace('$d',(spell.Duration.getRef().Duration.get()/1000).toString())
    std.SQL.Databases.world_dest.write('INSERT INTO `torghast_spells` VALUES(' + classID  + ',' + spell.ID + ',' + rarity + ',' + type + ', "' + desc + '")')
}