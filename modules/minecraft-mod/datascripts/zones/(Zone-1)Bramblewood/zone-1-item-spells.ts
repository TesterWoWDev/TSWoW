import { std } from "wow/wotlk";
import { MODNAME } from "../../modname";

export let RavenLordMountSpeed = std.Spells.load(41252);
RavenLordMountSpeed.Effects.get(1).PointsBase.set(49);

export let IntellectI = std.Spells.create(MODNAME, "intellecti-spell", 48100);
IntellectI.Name.enGB.set("Scroll of Intellect");
IntellectI.Description.enGB.set("Intellect increased by $s1.");
IntellectI.AuraDescription.enGB.set("Intellect increased by $s1.");
IntellectI.Effects.get(0).PointsBase.set(27);

export let StaminaI = std.Spells.create(MODNAME, "staminai-spell", 48102);
StaminaI.Name.enGB.set("Scroll of Stamina");
StaminaI.Description.enGB.set("Stamina increased by $s1.");
StaminaI.AuraDescription.enGB.set("Stamina increased by $s1.");
StaminaI.Effects.get(0).PointsBase.set(67);

export let SpiritI = std.Spells.create(MODNAME, "spiriti-spell", 48104);
SpiritI.Name.enGB.set("Scroll of Spirit");
SpiritI.Description.enGB.set("Spirit increased by $s1.");
SpiritI.AuraDescription.enGB.set("Spirit increased by $s1.");
SpiritI.Effects.get(0).PointsBase.set(47);

export let AgilityI = std.Spells.create(MODNAME, "agilityi-spell", 58451);
AgilityI.Name.enGB.set("Scroll of Agility");
AgilityI.Description.enGB.set("Agility increased by $s1.");
AgilityI.AuraDescription.enGB.set("Agility increased by $s1.");
AgilityI.Effects.get(0).PointsBase.set(27);

export let StrengthI = std.Spells.create(MODNAME, "strengthi-spell", 58449);
StrengthI.Name.enGB.set("Scroll of Strength");
StrengthI.Description.enGB.set("Strength increased by $s1.");
StrengthI.AuraDescription.enGB.set("Strength increased by $s1.");
StrengthI.Effects.get(0).PointsBase.set(27);

export let ProtectionI = std.Spells.create(MODNAME, "protectioni-spell", 58453);
ProtectionI.Name.enGB.set("Scroll of Protection");
ProtectionI.Description.enGB.set("Protection increased by $s1.");
ProtectionI.AuraDescription.enGB.set("Protection increased by $s1.");
ProtectionI.Effects.get(0).PointsBase.set(349);
