import { std } from "tswow-stdlib";
import { MODNAME } from "../../modname";

export let IntellectIV = std.Spells.create(MODNAME, "intellectiv-spell", 48100);
IntellectIV.Name.enGB.set("Scroll of Intellect");
IntellectIV.Description.enGB.set("Intellect increased by $s1.");
IntellectIV.AuraDescription.enGB.set("Intellect increased by $s1.");
IntellectIV.Effects.get(0).BasePoints.set(127);

export let StaminaIV = std.Spells.create(MODNAME, "staminaiv-spell", 48102);
StaminaIV.Name.enGB.set("Scroll of Stamina");
StaminaIV.Description.enGB.set("Stamina increased by $s1.");
StaminaIV.AuraDescription.enGB.set("Stamina increased by $s1.");
StaminaIV.Effects.get(0).BasePoints.set(267);

export let SpiritIV = std.Spells.create(MODNAME, "spiritiv-spell", 48104);
SpiritIV.Name.enGB.set("Scroll of Spirit");
SpiritIV.Description.enGB.set("Spirit increased by $s1.");
SpiritIV.AuraDescription.enGB.set("Spirit increased by $s1.");
SpiritIV.Effects.get(0).BasePoints.set(147);

export let AgilityIV = std.Spells.create(MODNAME, "agilityiv-spell", 58451);
AgilityIV.Name.enGB.set("Scroll of Agility");
AgilityIV.Description.enGB.set("Agility increased by $s1.");
AgilityIV.AuraDescription.enGB.set("Agility increased by $s1.");
AgilityIV.Effects.get(0).BasePoints.set(127);

export let StrengthIV = std.Spells.create(MODNAME, "strengthiv-spell", 58449);
StrengthIV.Name.enGB.set("Scroll of Strength");
StrengthIV.Description.enGB.set("Strength increased by $s1.");
StrengthIV.AuraDescription.enGB.set("Strength increased by $s1.");
StrengthIV.Effects.get(0).BasePoints.set(127);

export let ProtectionIV = std.Spells.create(
    MODNAME,
    "protectioniv-spell",
    58453
);
ProtectionIV.Name.enGB.set("Scroll of Protection");
ProtectionIV.Description.enGB.set("Protection increased by $s1.");
ProtectionIV.AuraDescription.enGB.set("Protection increased by $s1.");
ProtectionIV.Effects.get(0).BasePoints.set(2349);
