import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";

export let torghastFinalObj = std.GameObjectTemplates.Rituals.create(
    MODNAME,
    "torghastendobj",
    177193
);
torghastFinalObj.Name.enGB.set("Mystical Stone");

export let torghastChest = std.GameObjectTemplates.Rituals.create(
    MODNAME,
    "torghast-chest",
    177193
);
torghastFinalObj.Name.enGB.set("Anima Chest");
//torghastFinalObj.Display.set()

export let torghastOrb = std.CreatureTemplates.create(
    MODNAME,
    "torghast-orb",
    40083
);
torghastOrb.Name.enGB.set("torghast spell creature");
torghastOrb.Scale.set(0.5);
torghastOrb.HoverHeight.set(2);

export let torghastChoice = std.Spells.create(
    MODNAME,
    "torghastchoice-spell",
    66701
);
torghastChoice.Name.enGB.set("Anima Cell Spawn");
torghastChoice.Description.enGB.set(
    "Using this allows you and your alies to select an additional power."
);
torghastChoice.Effects.get(0).ImplicitTargetA.DEST_DEST_FRONT.set();
torghastChoice.Effects.get(0).Radius.setSimple(5, 0, 5);
torghastChoice.Effects.get(0).Type.SUMMON.set();
torghastChoice.Effects.get(0).MiscValueA.set(torghastOrb.ID);
torghastChoice.Effects.get(0).MiscValueB.set(64);

export let torghastChoiceItem = std.Items.create(
    MODNAME,
    "torghastchoice-item",
    118
);
torghastChoiceItem.Name.enGB.set("Anima Cell");
torghastChoiceItem.Spells.clearAll();
torghastChoiceItem.Spells.addMod((spell) => {
    spell.Spell.set(torghastChoice.ID);
    spell.Charges.set(-1);
    spell.ProcsPerMinute.set(-1);
    spell.Cooldown.set(3000);
});

let torghastVendor = std.CreatureTemplates.create(
    MODNAME,
    "torghast-vendor",
    3482
);
torghastVendor.Name.enGB.set("Test Vendor");
torghastVendor.Subname.enGB.set("All Powerful");
torghastVendor.FactionTemplate.set(35);
torghastVendor.Vendor.add(torghastChoiceItem.ID);

export let mapPrestige = std.Spells.create(MODNAME, "mapprestige-spell", 71188);
mapPrestige.Name.enGB.set("Prestige");
mapPrestige.Description.enGB.set(
    "Damage done increased by $s1%. Health increased by $s2%."
);
mapPrestige.AuraDescription.enGB.set(
    "Damage done increased by $s1%. Attack and casting speeds increased by $s2%. Health increased by $s1%."
);
mapPrestige.Effects.get(0).BasePoints.set(9);
mapPrestige.Effects.get(1).BasePoints.set(9);
mapPrestige.Effects.get(2).BasePoints.set(9);
mapPrestige.Effects.get(2).Aura.MOD_INCREASE_HEALTH_PERCENT.set();
mapPrestige.Duration.set(21);
mapPrestige.row.Attributes.set(
    mapPrestige.row.Attributes.get() + 0x80000000 + 0x00000080
);
mapPrestige.Attributes.PERSISTS_DEATH.set(1);
mapPrestige.Attributes.NOT_STEALABLE.set(1);
mapPrestige.Attributes.AURA_VISIBLE_TO_CASTER_ONLY.set(1);

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
export let IncreasedHealth1 = std.Spells.create(
    MODNAME,
    "increasedhealth1-spell",
    34747
);
IncreasedHealth1.Name.enGB.set("Invincible");
IncreasedHealth1.Description.enGB.set("Total Health increased by $s1%.");
IncreasedHealth1.AuraDescription.enGB.set("Total Health increased by $s1%.");
IncreasedHealth1.Effects.get(0).Aura.MOD_INCREASE_HEALTH_PERCENT.set();
IncreasedHealth1.Effects.get(0).BasePoints.set(1);
IncreasedHealth1.Effects.get(0).DieSides.set(1);
IncreasedHealth1.Effects.get(1).Aura.NONE.set();
IncreasedHealth1.Effects.get(2).Aura.NONE.set();
IncreasedHealth1.Duration.set(21);
IncreasedHealth1.Attributes.REACTIVATE_AT_RESURRECT.set(true);
IncreasedHealth1.row.Attributes.set(
    IncreasedHealth1.row.Attributes.get() + 0x80000000
);
IncreasedHealth1.AuraInterruptFlags.set(0x0080000);
IncreasedHealth1.Stacks.set(99);

export let IncreasedDamage1 = std.Spells.create(
    MODNAME,
    "increaseddamage1-spell",
    34747
);
IncreasedDamage1.Name.enGB.set("Hardened");
IncreasedDamage1.Description.enGB.set("Total Damage dealt increased by $s1%.");
IncreasedDamage1.AuraDescription.enGB.set(
    "Total Damage dealt increased by $s1%."
);
IncreasedDamage1.Effects.get(0).Aura.MOD_DAMAGE_PERCENT_DONE.set();
IncreasedDamage1.Effects.get(0).BasePoints.set(1);
IncreasedDamage1.Effects.get(0).DieSides.set(1);
IncreasedDamage1.Effects.get(1).Aura.NONE.set();
IncreasedDamage1.Effects.get(2).Aura.NONE.set();
IncreasedDamage1.Duration.set(21);
IncreasedDamage1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedDamage1.AuraInterruptFlags.set(0x0080000);
IncreasedDamage1.Stacks.set(99);

export let IncreasedSpellpower1 = std.Spells.create(
    MODNAME,
    "increasedsp1-spell",
    34747
);
IncreasedSpellpower1.Name.enGB.set("Spellbender");
IncreasedSpellpower1.Description.enGB.set(
    "Total Spell Power increased by $s1%."
);
IncreasedSpellpower1.AuraDescription.enGB.set(
    "Total Spell Power increased by $s1%."
);
IncreasedSpellpower1.Effects.get(
    0
).Aura.MOD_SPELL_HEALING_OF_STAT_PERCENT.set();
IncreasedSpellpower1.Effects.get(0).BasePoints.set(1);
IncreasedSpellpower1.Effects.get(0).DieSides.set(1);
IncreasedSpellpower1.Effects.get(1).Aura.MOD_SPELL_DAMAGE_OF_STAT_PERCENT.set();
IncreasedSpellpower1.Effects.get(1).BasePoints.set(1);
IncreasedSpellpower1.Effects.get(1).BasePoints.set(0);
IncreasedSpellpower1.Effects.get(1).MiscValueA.set(126);
IncreasedSpellpower1.Effects.get(1).MiscValueB.set(3);
IncreasedSpellpower1.Effects.get(2).Aura.NONE.set();
IncreasedSpellpower1.Duration.set(21);
IncreasedSpellpower1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedSpellpower1.AuraInterruptFlags.set(0x0080000);
IncreasedSpellpower1.Stacks.set(99);

export let IncreasedAttackpower1 = std.Spells.create(
    MODNAME,
    "increasedap1-spell",
    34747
);
IncreasedAttackpower1.Name.enGB.set("Warlord");
IncreasedAttackpower1.Description.enGB.set(
    "Total Attack Power increased by $s1%."
);
IncreasedAttackpower1.AuraDescription.enGB.set(
    "Total Attack Power increased by $s1%."
);
IncreasedAttackpower1.Effects.get(0).Aura.MOD_ATTACK_POWER_PCT.set();
IncreasedAttackpower1.Effects.get(0).BasePoints.set(1);
IncreasedAttackpower1.Effects.get(0).DieSides.set(1);
IncreasedAttackpower1.Effects.get(1).Aura.NONE.set();
IncreasedAttackpower1.Effects.get(2).Aura.NONE.set();
IncreasedAttackpower1.Duration.set(21);
IncreasedAttackpower1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedAttackpower1.AuraInterruptFlags.set(0x0080000);
IncreasedAttackpower1.Stacks.set(99);

export let IncreasedStamina1 = std.Spells.create(
    MODNAME,
    "increasedstamina1-spell",
    34747
);
IncreasedStamina1.Name.enGB.set("Hearty");
IncreasedStamina1.Description.enGB.set("Stamina increased by $s1.");
IncreasedStamina1.AuraDescription.enGB.set("Stamina increased by $s1.");
IncreasedStamina1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedStamina1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedStamina1.Effects.get(0).BasePoints.set(9);
IncreasedStamina1.Effects.get(0).DieSides.set(1);
IncreasedStamina1.Effects.get(0).MiscValueA.set(2); //Stat 2 - Stamina
IncreasedStamina1.Effects.get(1).Aura.NONE.set();
IncreasedStamina1.Effects.get(2).Aura.NONE.set();
IncreasedStamina1.Duration.set(21);
IncreasedStamina1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedStamina1.AuraInterruptFlags.set(0x0080000);
IncreasedStamina1.Stacks.set(99);

export let IncreasedStrength1 = std.Spells.create(
    MODNAME,
    "increasedstrength1-spell",
    34747
);
IncreasedStrength1.Name.enGB.set("Resolute");
IncreasedStrength1.Description.enGB.set("Strength increased by $s1.");
IncreasedStrength1.AuraDescription.enGB.set("Strength increased by $s1.");
IncreasedStrength1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedStrength1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedStrength1.Effects.get(0).BasePoints.set(9);
IncreasedStrength1.Effects.get(0).DieSides.set(1);
IncreasedStrength1.Effects.get(0).MiscValueA.set(0); //Stat 0 - Strength
IncreasedStrength1.Effects.get(1).Aura.NONE.set();
IncreasedStrength1.Effects.get(2).Aura.NONE.set();
IncreasedStrength1.Duration.set(21);
IncreasedStrength1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedStrength1.AuraInterruptFlags.set(0x0080000);
IncreasedStrength1.Stacks.set(99);

export let IncreasedIntellect1 = std.Spells.create(
    MODNAME,
    "increasedintellect1-spell",
    34747
);
IncreasedIntellect1.Name.enGB.set("Wise");
IncreasedIntellect1.Description.enGB.set("Intellect increased by $s1.");
IncreasedIntellect1.AuraDescription.enGB.set("Intellect increased by $s1.");
IncreasedIntellect1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedIntellect1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedIntellect1.Effects.get(0).BasePoints.set(9);
IncreasedIntellect1.Effects.get(0).DieSides.set(1);
IncreasedIntellect1.Effects.get(0).MiscValueA.set(3); //Stat 3 - Intellect
IncreasedIntellect1.Effects.get(1).Aura.NONE.set();
IncreasedIntellect1.Effects.get(2).Aura.NONE.set();
IncreasedIntellect1.Duration.set(21);
IncreasedIntellect1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedIntellect1.AuraInterruptFlags.set(0x0080000);
IncreasedIntellect1.Stacks.set(99);

export let IncreasedAgility1 = std.Spells.create(
    MODNAME,
    "increasedagility1-spell",
    34747
);
IncreasedAgility1.Name.enGB.set("Agile");
IncreasedAgility1.Description.enGB.set("Agility increased by $s1.");
IncreasedAgility1.AuraDescription.enGB.set("Agility increased by $s1.");
IncreasedAgility1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedAgility1.Effects.get(0).Aura.MOD_STAT.set();
IncreasedAgility1.Effects.get(0).BasePoints.set(9);
IncreasedAgility1.Effects.get(0).DieSides.set(1);
IncreasedAgility1.Effects.get(0).MiscValueA.set(1); //Stat 1 - Agility
IncreasedAgility1.Effects.get(1).Aura.NONE.set();
IncreasedAgility1.Effects.get(2).Aura.NONE.set();
IncreasedAgility1.Duration.set(21);
IncreasedAgility1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedAgility1.AuraInterruptFlags.set(0x0080000);
IncreasedAgility1.Stacks.set(99);

export let IncreasedCrit1 = std.Spells.create(
    MODNAME,
    "increasedcrit1-spell",
    34747
);
IncreasedCrit1.Name.enGB.set("Tactful Strikes");
IncreasedCrit1.Description.enGB.set("Critical Strike increased by $s1.");
IncreasedCrit1.AuraDescription.enGB.set("Critical Strike increased by $s1.");
IncreasedCrit1.Effects.get(0).Type.APPLY_AURA.set();
IncreasedCrit1.Effects.get(0).Aura.MOD_RATING.set();
IncreasedCrit1.Effects.get(0).BasePoints.set(9);
IncreasedCrit1.Effects.get(0).DieSides.set(1);
IncreasedCrit1.Effects.get(0).MiscValueA.set(1792); //Stat 1792 - Critical Strike
IncreasedCrit1.Effects.get(1).Aura.NONE.set();
IncreasedCrit1.Effects.get(2).Aura.NONE.set();
IncreasedCrit1.Duration.set(21);
IncreasedCrit1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
IncreasedCrit1.AuraInterruptFlags.set(0x0080000);
IncreasedCrit1.Stacks.set(99);

export let IncreasedResist1 = std.Spells.create(
    MODNAME,
    "increasedresist1-spell",
    34747
);
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
//END OF GHOST SPELLS
//
//
//
export let rangedAttackSpeed1 = std.Spells.create(
    MODNAME,
    "rangedattackspeed1-spell",
    44972
);
rangedAttackSpeed1.Name.enGB.set("Increased Ranged Speed");
rangedAttackSpeed1.Description.enGB.set(
    "Increases ranged attack speed by $s1%. Does not stack."
);
rangedAttackSpeed1.AuraDescription.enGB.set(
    "Increases ranged attack speed by $s1%. Does not stack."
);
rangedAttackSpeed1.Effects.get(0).BasePoints.set(24);
rangedAttackSpeed1.Duration.set(21);
rangedAttackSpeed1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
rangedAttackSpeed1.AuraInterruptFlags.set(0x0080000);

export let critChance1 = std.Spells.create(MODNAME, "critchance-spell", 54283);
critChance1.Name.enGB.set("Increased Crit Chance");
critChance1.Description.enGB.set("Increases spell crit chance by $s1%.");
critChance1.AuraDescription.enGB.set("Increases spell crit chance by $s1%.");
critChance1.Effects.get(0).BasePoints.set(9);
critChance1.Duration.set(21);
critChance1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
critChance1.AuraInterruptFlags.set(0x0080000);
critChance1.Stacks.set(10);

export let critDamage1 = std.Spells.create(MODNAME, "critdamage-spell", 44797);
critDamage1.Name.enGB.set("Increased Crit Damage");
critDamage1.Description.enGB.set("Increases crit damage by $s1%.");
critDamage1.AuraDescription.enGB.set("Increases crit damage by $s1%.");
critDamage1.Effects.get(0).BasePoints.set(4);
critDamage1.Duration.set(21);
critDamage1.row.Attributes.set(IncreasedHealth1.row.Attributes.get());
critDamage1.AuraInterruptFlags.set(0x0080000);
critDamage1.Stacks.set(99);

export let grapple = std.Spells.create(MODNAME, "grapple-spell", 57882);
grapple.Name.enGB.set("Grapple");
grapple.Description.enGB.set("Grapple to a nearby location.");
grapple.Range.setSimple(0, 30);
grapple.Effects.get(0).Type.JUMP_DEST.set();
grapple.Effects.get(0).BasePoints.set(-1);
grapple.Effects.get(0).DieSides.set(1);
grapple.Effects.get(0).ImplicitTargetA.DEST_DEST.set();
grapple.Effects.get(0).MiscValueA.set(50);
grapple.Effects.get(1).Type.TRIGGER_SPELL.set();
grapple.Effects.get(1).ImplicitTargetA.DEST_DEST.set();
grapple.Effects.get(1).TriggerSpell.set(57883);
grapple.Visual.getRefCopy().cloneFromVisual(11055);
