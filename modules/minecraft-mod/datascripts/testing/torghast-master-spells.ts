import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata/wotlkdata/sql/SQLFiles";
import { MODNAME } from "../modname";

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
IncreasedHealth1.Effects.get(0).BasePoints.set(14);
IncreasedHealth1.Effects.get(0).DieSides.set(1);
IncreasedHealth1.Effects.get(1).Aura.NONE.set();
IncreasedHealth1.Effects.get(2).Aura.NONE.set();
IncreasedHealth1.Duration.set(21);
IncreasedHealth1.Attributes.REACTIVATE_AT_RESURRECT.set(true);
IncreasedHealth1.Attributes.PERSISTS_DEATH.set(1)
IncreasedHealth1.row.Attributes.set(
IncreasedHealth1.row.Attributes.get() + 0x80000000);
IncreasedHealth1.AuraInterruptFlags.set(0x0080000);
IncreasedHealth1.Stacks.set(99);
IncreasedHealth1.Icon.setFullPath("Interface\\Icons\\Spell_Holy_MindVision");

export let IncreasedDamage1 = std.Spells.create(MODNAME,"increaseddamage1-spell",34747);
IncreasedDamage1.Name.enGB.set("Hardened");
IncreasedDamage1.Description.enGB.set("Total Damage dealt increased by $s1%.");
IncreasedDamage1.AuraDescription.enGB.set("Total Damage dealt increased by $s1%.");
IncreasedDamage1.Effects.get(0).Aura.MOD_DAMAGE_PERCENT_DONE.set();
IncreasedDamage1.Effects.get(0).BasePoints.set(14);
IncreasedDamage1.Effects.get(0).DieSides.set(1);
IncreasedDamage1.Effects.get(1).Aura.NONE.set();
IncreasedDamage1.Effects.get(2).Aura.NONE.set();
IncreasedDamage1.Duration.set(21);
IncreasedDamage1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedDamage1.AuraInterruptFlags.set(0x0080000);
IncreasedDamage1.Stacks.set(99);
IncreasedDamage1.Icon.setFullPath("Interface\\Icons\\Ability_Warrior_InnerRage");

export let IncreasedSpellpower1 = std.Spells.create(MODNAME,"increasedsp1-spell",34747);
IncreasedSpellpower1.Name.enGB.set("Spellbender");
IncreasedSpellpower1.Description.enGB.set("Total Spell Power increased by $s1%.");
IncreasedSpellpower1.AuraDescription.enGB.set("Total Spell Power increased by $s1%.");
IncreasedSpellpower1.Effects.get(0).Aura.MOD_SPELL_HEALING_OF_STAT_PERCENT.set();
IncreasedSpellpower1.Effects.get(0).BasePoints.set(9);
IncreasedSpellpower1.Effects.get(0).DieSides.set(1);
IncreasedSpellpower1.Effects.get(1).Aura.MOD_SPELL_DAMAGE_OF_STAT_PERCENT.set();
IncreasedSpellpower1.Effects.get(1).BasePoints.set(9);
IncreasedSpellpower1.Effects.get(1).BasePoints.set(0);
IncreasedSpellpower1.Effects.get(1).MiscValueA.set(126);
IncreasedSpellpower1.Effects.get(1).MiscValueB.set(3);
IncreasedSpellpower1.Effects.get(2).Aura.NONE.set();
IncreasedSpellpower1.Duration.set(21);
IncreasedSpellpower1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedSpellpower1.AuraInterruptFlags.set(0x0080000);
IncreasedSpellpower1.Stacks.set(99);
IncreasedSpellpower1.Icon.setFullPath("Interface\\Icons\\Spell_Nature_AstralRecalGroup");

export let IncreasedAttackpower1 = std.Spells.create(MODNAME,"increasedap1-spell",34747);
IncreasedAttackpower1.Name.enGB.set("Warlord");
IncreasedAttackpower1.Description.enGB.set("Total Attack Power increased by $s1%.");
IncreasedAttackpower1.AuraDescription.enGB.set("Total Attack Power increased by $s1%.");
IncreasedAttackpower1.Effects.get(0).Aura.MOD_ATTACK_POWER_PCT.set();
IncreasedAttackpower1.Effects.get(0).BasePoints.set(9);
IncreasedAttackpower1.Effects.get(0).DieSides.set(1);
IncreasedAttackpower1.Effects.get(1).Aura.NONE.set();
IncreasedAttackpower1.Effects.get(2).Aura.NONE.set();
IncreasedAttackpower1.Duration.set(21);
IncreasedAttackpower1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedAttackpower1.AuraInterruptFlags.set(0x0080000);
IncreasedAttackpower1.Stacks.set(99);
IncreasedAttackpower1.Icon.setFullPath("Interface\\Icons\\Ability_Druid_ChallengingRoar");

export let IncreasedStamina1 = std.Spells.create(MODNAME,"increasedstamina1-spell",34747);
IncreasedStamina1.Name.enGB.set("Hearty");
IncreasedStamina1.Description.enGB.set("Stamina increased by $s1.");
IncreasedStamina1.AuraDescription.enGB.set("Stamina increased by $s1.");
IncreasedStamina1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedStamina1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedStamina1.Effects.get(0).BasePoints.set(49);
IncreasedStamina1.Effects.get(0).DieSides.set(1);
IncreasedStamina1.Effects.get(0).MiscValueA.set(2); //Stat 2 - Stamina
IncreasedStamina1.Effects.get(1).Aura.NONE.set();
IncreasedStamina1.Effects.get(2).Aura.NONE.set();
IncreasedStamina1.Duration.set(21);
IncreasedStamina1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedStamina1.AuraInterruptFlags.set(0x0080000);
IncreasedStamina1.Stacks.set(99);
IncreasedStamina1.Icon.setFullPath("Interface\\Icons\\INV_Misc_Organ_06");

export let IncreasedStrength1 = std.Spells.create(MODNAME,"increasedstrength1-spell",34747);
IncreasedStrength1.Name.enGB.set("Resolute");
IncreasedStrength1.Description.enGB.set("Strength increased by $s1.");
IncreasedStrength1.AuraDescription.enGB.set("Strength increased by $s1.");
IncreasedStrength1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedStrength1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedStrength1.Effects.get(0).BasePoints.set(49);
IncreasedStrength1.Effects.get(0).DieSides.set(1);
IncreasedStrength1.Effects.get(0).MiscValueA.set(0); //Stat 0 - Strength
IncreasedStrength1.Effects.get(1).Aura.NONE.set();
IncreasedStrength1.Effects.get(2).Aura.NONE.set();
IncreasedStrength1.Duration.set(21);
IncreasedStrength1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedStrength1.AuraInterruptFlags.set(0x0080000);
IncreasedStrength1.Stacks.set(99);
IncreasedStrength1.Icon.setFullPath("Interface\\Icons\\INV_Relics_TotemofRage");

export let IncreasedIntellect1 = std.Spells.create(MODNAME,"increasedintellect1-spell",34747);
IncreasedIntellect1.Name.enGB.set("Wise");
IncreasedIntellect1.Description.enGB.set("Intellect increased by $s1.");
IncreasedIntellect1.AuraDescription.enGB.set("Intellect increased by $s1.");
IncreasedIntellect1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedIntellect1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedIntellect1.Effects.get(0).BasePoints.set(49);
IncreasedIntellect1.Effects.get(0).DieSides.set(1);
IncreasedIntellect1.Effects.get(0).MiscValueA.set(3); //Stat 3 - Intellect
IncreasedIntellect1.Effects.get(1).Aura.NONE.set();
IncreasedIntellect1.Effects.get(2).Aura.NONE.set();
IncreasedIntellect1.Duration.set(21);
IncreasedIntellect1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedIntellect1.AuraInterruptFlags.set(0x0080000);
IncreasedIntellect1.Stacks.set(99);
IncreasedIntellect1.Icon.setFullPath("Interface\\Icons\\Spell_Arcane_Arcane03");

export let IncreasedAgility1 = std.Spells.create(MODNAME,"increasedagility1-spell",34747);
IncreasedAgility1.Name.enGB.set("Agile");
IncreasedAgility1.Description.enGB.set("Agility increased by $s1.");
IncreasedAgility1.AuraDescription.enGB.set("Agility increased by $s1.");
IncreasedAgility1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedAgility1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedAgility1.Effects.get(0).BasePoints.set(49);
IncreasedAgility1.Effects.get(0).DieSides.set(1);
IncreasedAgility1.Effects.get(0).MiscValueA.set(1); //Stat 1 - Agility
IncreasedAgility1.Effects.get(1).Aura.NONE.set();
IncreasedAgility1.Effects.get(2).Aura.NONE.set();
IncreasedAgility1.Duration.set(21);
IncreasedAgility1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedAgility1.AuraInterruptFlags.set(0x0080000);
IncreasedAgility1.Stacks.set(99);
IncreasedAgility1.Icon.setFullPath("Interface\\Icons\\INV_Trinket_Naxxramas03");

export let IncreasedCrit1 = std.Spells.create(MODNAME,"increasedcrit1-spell",34747);
IncreasedCrit1.Name.enGB.set("Tactful Strikes");
IncreasedCrit1.Description.enGB.set("Critical Strike increased by $s1.");
IncreasedCrit1.AuraDescription.enGB.set("Critical Strike increased by $s1.");
IncreasedCrit1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedCrit1.Effects.get(0).Aura.MOD_RATING.set();
IncreasedCrit1.Effects.get(0).BasePoints.set(49);
IncreasedCrit1.Effects.get(0).DieSides.set(1);
IncreasedCrit1.Effects.get(0).MiscValueA.set(1792); //Stat 1792 - Critical Strike
IncreasedCrit1.Effects.get(1).Aura.NONE.set();
IncreasedCrit1.Effects.get(2).Aura.NONE.set();
IncreasedCrit1.Duration.set(21);
IncreasedCrit1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedCrit1.AuraInterruptFlags.set(0x0080000);
IncreasedCrit1.Stacks.set(99);
IncreasedCrit1.Icon.setFullPath("Interface\\Icons\\Spell_Shadow_DemonicFortitude");

export let IncreasedResist1 = std.Spells.create(MODNAME,"increasedresist1-spell",34747);
IncreasedResist1.Name.enGB.set("Resistant");
IncreasedResist1.Description.enGB.set("All resistances increased by $s1.");
IncreasedResist1.AuraDescription.enGB.set("All resistances increased by $s1.");
IncreasedResist1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedResist1.Effects.get(0).Aura.MOD_RESISTANCE.set();
IncreasedResist1.Effects.get(0).BasePoints.set(9);
IncreasedResist1.Effects.get(0).DieSides.set(1);
IncreasedResist1.Effects.get(0).MiscValueA.set(126); //Stat 126 - Resistances
IncreasedResist1.Effects.get(1).Aura.NONE.set();
IncreasedResist1.Effects.get(2).Aura.NONE.set();
IncreasedResist1.Duration.set(21);
IncreasedResist1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedResist1.AuraInterruptFlags.set(0x0080000);
IncreasedResist1.Stacks.set(99);
IncreasedResist1.Icon.setFullPath("Interface\\Icons\\Spell_Nature_ElementalPrecision_1");

export let rangedAttackSpeed1 = std.Spells.create(MODNAME,"rangedattackspeed1-spell",44972);
rangedAttackSpeed1.Name.enGB.set("Increased Ranged Speed");
rangedAttackSpeed1.Description.enGB.set("Increases ranged attack speed by $s1%. Does not stack.");
rangedAttackSpeed1.AuraDescription.enGB.set("Increases ranged attack speed by $s1%. Does not stack.");
rangedAttackSpeed1.Effects.get(0).BasePoints.set(24);
rangedAttackSpeed1.Duration.set(21);
rangedAttackSpeed1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
rangedAttackSpeed1.AuraInterruptFlags.set(0x0080000);
rangedAttackSpeed1.Icon.setFullPath("Interface\\Icons\\Ability_Hunter_SteadyShot");

export let critChance1 = std.Spells.create(MODNAME, "critchance-spell", 54283);
critChance1.Name.enGB.set("Increased Crit Chance");
critChance1.Description.enGB.set("Increases spell crit chance by $s1%.");
critChance1.AuraDescription.enGB.set("Increases spell crit chance by $s1%.");
critChance1.Effects.get(0).BasePoints.set(9);
critChance1.Duration.set(21);
critChance1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
critChance1.AuraInterruptFlags.set(0x0080000);
critChance1.Stacks.set(10);
critChance1.Icon.setFullPath("Interface\\Icons\\Spell_Fire_MoltenBlood");

export let critDamage1 = std.Spells.create(MODNAME, "critdamage-spell", 44797);
critDamage1.Name.enGB.set("Increased Crit Damage");
critDamage1.Description.enGB.set("Increases crit damage by $s1%.");
critDamage1.AuraDescription.enGB.set("Increases crit damage by $s1%.");
critDamage1.Effects.get(0).BasePoints.set(9);
critDamage1.Duration.set(21);
critDamage1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
critDamage1.AuraInterruptFlags.set(0x0080000);
critDamage1.Stacks.set(99);
critDamage1.Icon.setFullPath("Interface\\Icons\\Inv_Gizmo_SuperSapperCharge");

export let grapple = std.Spells.create(MODNAME, "grapple-spell", 57882);
grapple.Name.enGB.set("Grapple");
grapple.Description.enGB.set("Grapple to a nearby location.");
grapple.Range.setSimple(0, 50);
grapple.Effects.get(0).Type.JUMP_DEST.set();
grapple.Effects.get(0).BasePoints.set(-1);
grapple.Effects.get(0).DieSides.set(1);
grapple.Effects.get(0).ImplicitTargetA.DEST_DEST.set();
grapple.Effects.get(0).MiscValueA.set(50);
grapple.Effects.get(1).Type.TRIGGER_SPELL.set();
grapple.Effects.get(1).ImplicitTargetA.DEST_DEST.set();
grapple.Effects.get(1).TriggerSpell.set(57883);
grapple.Visual.getRefCopy().cloneFromVisual(11055);
grapple.Icon.setFullPath("Interface\\Icons\\INV_MISC_HOOK_01");


//New Spells - Ghost

export let ImmortalityHeal = std.Spells.create(MODNAME, "immortalityheal-spell", 55694);                                                                        //2% health regen every 5 seconds forever.
ImmortalityHeal.Name.enGB.set("Resilient Heart");
ImmortalityHeal.Description.enGB.set("You regenerate $s1% of your total health every $t1 seconds.");
ImmortalityHeal.AuraDescription.enGB.set("Regenerates $s1% of your total health every $t1 sec.");
ImmortalityHeal.Effects.get(0).BasePoints.set(1);
ImmortalityHeal.Effects.get(0).DieSides.set(1);
ImmortalityHeal.Effects.get(0).ChainAmplitude.set(5000)
ImmortalityHeal.Duration.set(21);
ImmortalityHeal.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ImmortalityHeal.AuraInterruptFlags.set(0x0080000);
ImmortalityHeal.Stacks.set(99);
ImmortalityHeal.Icon.setFullPath("Interface\\Icons\\Ability_Druid_Replenish");

export let ImmortalityMana = std.Spells.create(MODNAME, "immortalitymana-spell", 32102);                                                                        //50% mana regen while casting
ImmortalityMana.Name.enGB.set("Deep Mana Pools");
ImmortalityMana.Description.enGB.set("Allow $s1% of your Mana regeneration to continue while casting.");
ImmortalityMana.AuraDescription.enGB.set("Allow $s1% of your Mana regeneration to continue while casting.");
ImmortalityMana.Effects.get(0).BasePoints.set(49);
ImmortalityMana.Effects.get(0).DieSides.set(1);
ImmortalityMana.Duration.set(21);
ImmortalityMana.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ImmortalityMana.AuraInterruptFlags.set(0x0080000);
ImmortalityMana.Stacks.set(99);
ImmortalityMana.Icon.setFullPath("Interface\\Icons\\Spell_Holy_Serendipity");

export let ChanceForManaValue = std.Spells.create(MODNAME, "chanceformanavalue-spell", 55382);                                                                  //600 mana chance
ChanceForManaValue.Effects.get(0).BasePoints.set(599);
ChanceForManaValue.Effects.get(0).DieSides.set(1);
export let ChanceForMana = std.Spells.create(MODNAME, "chanceformana-spell", 55381);                                                                            //Spells have a 5% chance to restore flat mana (value above)
ChanceForMana.Name.enGB.set("Clarity");
ChanceForMana.Description.enGB.set("Your spells have a chance to restore 600 mana.");
ChanceForMana.AuraDescription.enGB.set("Spells and abilities have a chance to restore 600 mana.");
ChanceForMana.Proc.Chance.set(5);
ChanceForMana.Effects.get(0).BasePoints.set(99);
ChanceForMana.Effects.get(0).DieSides.set(1);
ChanceForMana.Effects.get(0).TriggerSpell.set(ChanceForManaValue.ID);
ChanceForMana.Duration.set(21);
ChanceForMana.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChanceForMana.AuraInterruptFlags.set(0x0080000);
ChanceForMana.Stacks.set(99);
ChanceForMana.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForMana.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForMana.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
ChanceForMana.Proc.TriggerMask.DONE_PERIODIC.set(1);
ChanceForMana.Icon.setFullPath("Interface\\Icons\\Spell_Magic_ManaGain");

export let ChanceForHealthValue = std.Spells.create(MODNAME, "chanceforhealthvalue-spell", 56715);                                                              //600 health chance
ChanceForHealthValue.Effects.get(0).BasePoints.set(599);
ChanceForHealthValue.Effects.get(0).DieSides.set(1);
export let ChanceForHealth = std.Spells.create(MODNAME, "chanceforhealth-spell", 55381);                                                                        //Spells have a 5% chance to restore flat health (value above)
ChanceForHealth.Name.enGB.set("Vampyrism");
ChanceForHealth.Description.enGB.set("Attacks and spells have a chance to leech health from the target and transfer it to the caster");
ChanceForHealth.AuraDescription.enGB.set("Chance to steal life from the enemy target.");
ChanceForHealth.Proc.Chance.set(5);
ChanceForHealth.Effects.get(0).BasePoints.set(99);
ChanceForHealth.Effects.get(0).DieSides.set(1);
ChanceForHealth.Effects.get(0).TriggerSpell.set(ChanceForHealthValue.ID);
ChanceForHealth.Duration.set(21);
ChanceForHealth.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChanceForHealth.AuraInterruptFlags.set(0x0080000);
ChanceForHealth.Stacks.set(99);
ChanceForHealth.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForHealth.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceForHealth.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
ChanceForHealth.Proc.TriggerMask.DONE_PERIODIC.set(1);
ChanceForHealth.Icon.setFullPath("Interface\\Icons\\Spell_Shaman_BlessingOfEternals");

export let RoarSpellValue = std.Spells.create(MODNAME, "roarspellvalue-spell", 55429);                                                                          //Knockback and damage chance (250 knockback) + (430 damage) in 15 yard cone
RoarSpellValue.Effects.get(0).BasePoints.set(249);
RoarSpellValue.Effects.get(0).DieSides.set(1);
RoarSpellValue.Effects.get(0).Radius.set(15);
RoarSpellValue.Effects.get(1).BasePoints.set(429);
RoarSpellValue.Effects.get(1).DieSides.set(1);
RoarSpellValue.Effects.get(1).Radius.set(15);
export let ChanceRoarSpell = std.Spells.create(MODNAME, "chanceroarspell-spell", 55381);                                                                        //Spells have a 5% chance to let loose a deafening roar, knocking back all enemies
ChanceRoarSpell.Name.enGB.set("Vrykul Heritage");
ChanceRoarSpell.Description.enGB.set("Attacks and spells have a chance to let loose a deafening roar, knocking back all enemies");
ChanceRoarSpell.AuraDescription.enGB.set("Chance to roar and knock back enemies.");
ChanceRoarSpell.Proc.Chance.set(5);
ChanceRoarSpell.Effects.get(0).BasePoints.set(99);
ChanceRoarSpell.Effects.get(0).DieSides.set(1);
ChanceRoarSpell.Effects.get(0).TriggerSpell.set(RoarSpellValue.ID);
ChanceRoarSpell.Duration.set(21);
ChanceRoarSpell.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ChanceRoarSpell.AuraInterruptFlags.set(0x0080000);
ChanceRoarSpell.Stacks.set(99);
ChanceRoarSpell.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceRoarSpell.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
ChanceRoarSpell.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
ChanceRoarSpell.Proc.TriggerMask.DONE_PERIODIC.set(1);
ChanceRoarSpell.Icon.setFullPath("Interface\\Icons\\Achievement_Halloween_Smiley_01");

export let ReflectiveShell = std.Spells.create(MODNAME, "reflectiveshell-spell", 55381);                                                                        //10% spell damage reflection.
ReflectiveShell.Name.enGB.set("Chitinous Exoskeleton");
ReflectiveShell.Description.enGB.set("Surrounds the caster with a protective shield that reflects $s1% of harmful spells for $d. Melee attacks to target cause $s2 damage.");
ReflectiveShell.AuraDescription.enGB.set("Reflects $s1% of spell damage and deals $s2 damage on melee attacks recieved.");
ReflectiveShell.Effects.get(0).BasePoints.set(9);
ReflectiveShell.Effects.get(0).DieSides.set(1);
ReflectiveShell.Effects.get(1).Type.APPLY_AURA.set();
ReflectiveShell.Effects.get(1).BasePoints.set(129);
ReflectiveShell.Effects.get(1).DieSides.set(1)
ReflectiveShell.Effects.get(1).ImplicitTargetA.UNIT_CASTER.set();
ReflectiveShell.Effects.get(1).Aura.DAMAGE_SHIELD.set();
ReflectiveShell.Duration.set(21);
ReflectiveShell.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ReflectiveShell.AuraInterruptFlags.set(0x0080000);
ReflectiveShell.Stacks.set(99);
ReflectiveShell.Icon.setFullPath("Interface\\Icons\\INV_Misc_Head_Nerubian_01");

export let MovementSpeed = std.Spells.create(MODNAME, "movementspeed-spell", 48594);                                                                            //2% movement speed.
MovementSpeed.Name.enGB.set("Light-Footed");
MovementSpeed.Description.enGB.set("Increases the caster's movement speed by $s1%");
MovementSpeed.AuraDescription.enGB.set("Increases the caster's movement speed by $s1%");
MovementSpeed.Effects.get(0).BasePoints.set(2);
MovementSpeed.Effects.get(0).DieSides.set(1);
MovementSpeed.Duration.set(21);
MovementSpeed.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
MovementSpeed.AuraInterruptFlags.set(0x0080000);
MovementSpeed.Stacks.set(99);
MovementSpeed.Icon.setFullPath("Interface\\Icons\\Spell_Fire_BurningSpeed");

export let ReducedCrits = std.Spells.create(MODNAME, "reducedcrits-spell", 61861);                                                                              //10% reduced chance to be critically hit
ReducedCrits.Name.enGB.set("Devious Glint");
ReducedCrits.Description.enGB.set("Reduces chance to be crit by $s1%.");
ReducedCrits.AuraDescription.enGB.set("Reduces chance to be crit by $s1%.");
ReducedCrits.Effects.get(0).BasePoints.set(-11);
ReducedCrits.Effects.get(0).DieSides.set(1);
ReducedCrits.Effects.get(1).Type.NULL.set();
ReducedCrits.Duration.set(21);
ReducedCrits.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ReducedCrits.AuraInterruptFlags.set(0x0080000);
ReducedCrits.Stacks.set(99);
ReducedCrits.Icon.setFullPath("Interface\\Icons\\Spell_Arcane_PrismaticCloak");

export let NecromancerMob01 = std.CreatureTemplates.create(MODNAME,'necromob01',24207) //55% for Shield
NecromancerMob01.Name.enGB.set('Risen Bulwark')
NecromancerMob01.Level.set(20,20)
NecromancerMob01.Models.clearAll()
NecromancerMob01.Models.addIds(26084)
export let NecromancerMob02 = std.CreatureTemplates.create(MODNAME,'necromob02',24207) //45% for DPS
NecromancerMob02.Name.enGB.set('Risen Blades')
NecromancerMob02.Level.set(20,20)
NecromancerMob02.Models.clearAll()
NecromancerMob02.Models.addIds(26082)
export let NecromancerMob03 = std.CreatureTemplates.create(MODNAME,'necromob03',24207) //65% for Healer
NecromancerMob03.Name.enGB.set('Risen Staff')
NecromancerMob03.Level.set(20,20)
NecromancerMob03.Models.clearAll()
NecromancerMob03.Models.addIds(26085)
export let NecromancerSummonSpell01 = std.Spells.create(MODNAME, "necromancerspell01-spell", 42651);                                                            //Summon Mob Type 01
NecromancerSummonSpell01.Effects.get(1).MiscValueA.set(24207);
export let NecromancerSummonSpell02 = std.Spells.create(MODNAME, "necromancerspell02-spell", 42651);                                                            //Summon Mob Type 01
NecromancerSummonSpell02.Effects.get(1).MiscValueA.set(24207);
export let NecromancerSummonSpell03 = std.Spells.create(MODNAME, "necromancerspell03-spell", 42651);                                                            //Summon Mob Type 01
NecromancerSummonSpell03.Effects.get(1).MiscValueA.set(24207);
export let NecromancerSumm = std.Spells.create(MODNAME, "necromancersumm-spell", 55381);                                                                        //Spells have a 5% chance to summon a random mob
NecromancerSumm.Name.enGB.set("Animator");
NecromancerSumm.Description.enGB.set("Attacks and spells have a chance to summon a random weapon to tank, heal, or dps for you.");
NecromancerSumm.AuraDescription.enGB.set("Chance to animate weapons.");
NecromancerSumm.Proc.Chance.set(5);
NecromancerSumm.Effects.get(0).BasePoints.set(54);                                              //5% chance to proc, 55% chance that it will be this spell
NecromancerSumm.Effects.get(0).DieSides.set(1);
NecromancerSumm.Effects.get(0).TriggerSpell.set(NecromancerSummonSpell01.ID);
NecromancerSumm.Effects.get(1).BasePoints.set(44);                                              //5% chance to proc, 45% chance that it will be this spell
NecromancerSumm.Effects.get(1).DieSides.set(1);
NecromancerSumm.Effects.get(1).Type.APPLY_AURA.set();
NecromancerSumm.Effects.get(1).ImplicitTargetA.UNIT_CASTER.set();
NecromancerSumm.Effects.get(1).Aura.PROC_TRIGGER_SPELL.set();
NecromancerSumm.Effects.get(1).TriggerSpell.set(NecromancerSummonSpell02.ID);
NecromancerSumm.Effects.get(2).BasePoints.set(64);                                              //5% chance to proc, 65% chance that it will be this spell
NecromancerSumm.Effects.get(2).DieSides.set(1);
NecromancerSumm.Effects.get(2).Type.APPLY_AURA.set();
NecromancerSumm.Effects.get(2).ImplicitTargetA.UNIT_CASTER.set();
NecromancerSumm.Effects.get(2).Aura.PROC_TRIGGER_SPELL.set();
NecromancerSumm.Effects.get(2).TriggerSpell.set(NecromancerSummonSpell03.ID);
NecromancerSumm.Duration.set(21);
NecromancerSumm.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
NecromancerSumm.AuraInterruptFlags.set(0x0080000);
NecromancerSumm.Stacks.set(99);
NecromancerSumm.Proc.TriggerMask.DONE_SPELL_NONE_DAMAGE_CLASS_NEGATIVE.set(1);
NecromancerSumm.Proc.TriggerMask.DONE_SPELL_MAGIC_DAMAGE_CLASS_NEGATIVE.set(1);
NecromancerSumm.Proc.TriggerMask.SPELL_RANGED_DAMAGE_CLASS.set(1);
NecromancerSumm.Proc.TriggerMask.DONE_PERIODIC.set(1);
NecromancerSumm.Icon.setFullPath("Interface\\Icons\\achievement_boss_scourgelordtyrannus");
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
WarriorRendIncrease.Effects.get(0).BasePoints.set(49);
WarriorRendIncrease.Effects.get(0).DieSides.set(1);
WarriorRendIncrease.Duration.set(21);
WarriorRendIncrease.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
WarriorRendIncrease.AuraInterruptFlags.set(0x0080000);
WarriorRendIncrease.Stacks.set(99);

export let IncreasedRageGeneration = std.Spells.create(MODNAME, "ragegeneration-spell", 29623);                                                                             //Increased rage generation
IncreasedRageGeneration.Name.enGB.set("Angry");
IncreasedRageGeneration.Description.enGB.set("You generate $s1% more rage from damage dealt.");
IncreasedRageGeneration.AuraDescription.enGB.set("You generate $s1% more rage from damage dealt.");
IncreasedRageGeneration.Effects.get(0).BasePoints.set(24);
IncreasedRageGeneration.Effects.get(0).DieSides.set(1);
IncreasedRageGeneration.Duration.set(21);
IncreasedRageGeneration.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedRageGeneration.AuraInterruptFlags.set(0x0080000);
IncreasedRageGeneration.Stacks.set(99);

export let ReducedRageCost = std.Spells.create(MODNAME, "reducedragecost-spell", 29792);                                                                                    //Reduced rage cost by 3.
ReducedRageCost.Name.enGB.set("Adaptive Techniques");
ReducedRageCost.Description.enGB.set("Reduces the rage cost of your offensive abilities by $/10;s1.");
ReducedRageCost.AuraDescription.enGB.set("Reduces the rage cost of your offensive abilities by $/10;s1.");
ReducedRageCost.Effects.get(0).BasePoints.set(-31);
ReducedRageCost.Effects.get(0).DieSides.set(1);
ReducedRageCost.Duration.set(21);
ReducedRageCost.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
ReducedRageCost.AuraInterruptFlags.set(0x0080000);
ReducedRageCost.Stacks.set(99);










































// Flannel Zone

export let rangeincrease = std.Spells.create(MODNAME, "auto-attack-range", 19498)
rangeincrease.Name.enGB.set("Elongated Arm")
rangeincrease.Description.enGB.set('Increases the range of your Auto Shot by 10 yds. Auto Shot damage increased by 50%.')
rangeincrease.AuraInterruptFlags.set(0x0080000)
let e0 = rangeincrease.Effects.get(0)
e0.BasePoints.set(9)
e0.ClassMask.A.set(1)
e0.ClassMask.B.set(0)
e0.ClassMask.C.set(0)

//not working effect
let e1 = rangeincrease.Effects.get(1)
e1.Aura.ADD_PCT_MODIFIER.set()
e1.MiscValueA.set(0)
e1.BasePoints.set(49)
e1.DieSides.set(1)
e1.ImplicitTargetA.UNIT_CASTER.set()
//
e1.BasePoints.set(9)
e1.ClassMask.A.set(1)
e1.ClassMask.B.set(0)
e1.ClassMask.C.set(0)



export let healonnewspell = std.Spells.create(MODNAME, "heal-on-new-mob-spell")
healonnewspell.Name.enGB.set("Heal on new mob")
healonnewspell.Description.enGB.set('When you attack a new Creature, you are healed for $s1')
healonnewspell.Effects.get(0).Aura.MOD_HEALING
healonnewspell.Effects.get(0).BasePoints.set(9)
healonnewspell.Effects.get(0).DieSides.set(1)
healonnewspell.AuraInterruptFlags.set(0x0080000)
//some scalar value?

export let healonnewaura = std.Spells.create(MODNAME, "heal-on-new-mob-aura")
healonnewaura.Name.enGB.set("Heal on new mob")
healonnewaura.Description.enGB.set('When you attack a new Creature, you are healed for $s1')
healonnewaura.Proc.Chance.set(100)
healonnewaura.Effects.get(0).TriggerSpell.set(healonnewspell.ID)
healonnewaura.Stacks.set(10)

