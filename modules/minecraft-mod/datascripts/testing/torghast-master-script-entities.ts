
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
torghastChest.Name.enGB.set("Anima Chest");
torghastChest.Display.set(88077)
torghastChest.Size.set(2)

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

export let torghastCurrency = std.Items.create(MODNAME,'torghast-end-currency',37742)
torghastCurrency.Name.enGB.set('Torghast End Token')