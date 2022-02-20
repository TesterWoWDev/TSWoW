import { std } from "wow/wotlk";

import { MODNAME } from "../../modname";
import {
    InvasionFrostArmor,
    InvasionFireBlast,
    InvasionFrostNova,
    InvasionFrostbolt,
    InvasionBoarCharge,
    InvasionStrike,
    InvasionWhirlwind,
} from "./invasion-creature-spells";

export let InvasionMinion01 = std.CreatureTemplates.create(
    MODNAME,
    "invasion-minion-01",
    299
);
InvasionMinion01.Name.enGB.set("Fiendish Impling");
InvasionMinion01.Models.clearAll();
InvasionMinion01.Models.addIds(16890);
//Spells
InvasionMinion01.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 8000, 13000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 13000, 15000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 3000, 3000, 100);
});
InvasionMinion01.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
    script.Target.setSelf();
    script.Action.setCast(InvasionFrostArmor.ID, 0, 0);
});
InvasionMinion01.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionFireBlast.ID, 0, 0);
});
InvasionMinion01.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionFrostNova.ID, 2, 7);
});
InvasionMinion01.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionFrostbolt.ID, 0, 0);
});
//End of Spells
InvasionMinion01.Scale.set(0.5);
InvasionMinion01.MovementType.RANDOM_MOVEMENT.set();
InvasionMinion01.Level.set(2, 4);
InvasionMinion01.FactionTemplate.set(48);
InvasionMinion01.DamageSchool.Normal.set();
InvasionMinion01.Stats.ArmorMod.set(5);
InvasionMinion01.Stats.DamageMod.set(4);
InvasionMinion01.Stats.ExperienceMod.set(3);
InvasionMinion01.Stats.HealthMod.set(3);
InvasionMinion01.Stats.ManaMod.set(4);
export let InvasionMinion01Loot = InvasionMinion01.NormalLoot;

export let InvasionMinion02 = std.CreatureTemplates.create(
    MODNAME,
    "invasion-largeminion-01",
    299
);
InvasionMinion02.Name.enGB.set("Legion Hound");
InvasionMinion02.Models.clearAll();
InvasionMinion02.Models.addIds(7949);
//Spells
InvasionMinion02.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
InvasionMinion02.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
InvasionMinion02.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionStrike.ID, 2, 7);
});
InvasionMinion02.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionBoarCharge.ID, 2, 7);
});
InvasionMinion02.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionWhirlwind.ID, 2, 7);
});
//End of Spells
InvasionMinion02.MovementType.RANDOM_MOVEMENT.set();
InvasionMinion02.Level.set(4, 4);
InvasionMinion02.FactionTemplate.set(48);
InvasionMinion02.DamageSchool.Normal.set();
InvasionMinion02.Stats.ArmorMod.set(5);
InvasionMinion02.Stats.DamageMod.set(4);
InvasionMinion02.Stats.ExperienceMod.set(5);
InvasionMinion02.Stats.HealthMod.set(3);
InvasionMinion02.Stats.ManaMod.set(2);
export let InvasionMinion02Loot = InvasionMinion02.NormalLoot;

export let InvasionLargeMinion01 = std.CreatureTemplates.create(
    MODNAME,
    "invasion-largeminion-02",
    299
);
InvasionLargeMinion01.Name.enGB.set("Felguard");
InvasionLargeMinion01.Models.clearAll();
InvasionLargeMinion01.Models.addIds(5047, 7970, 5048, 9017);
//Spells
InvasionLargeMinion01.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
InvasionLargeMinion01.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
InvasionLargeMinion01.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionStrike.ID, 2, 7);
});
InvasionLargeMinion01.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionBoarCharge.ID, 2, 7);
});
InvasionLargeMinion01.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionWhirlwind.ID, 2, 7);
});
//End of Spells
InvasionLargeMinion01.MovementType.RANDOM_MOVEMENT.set();
InvasionLargeMinion01.Level.set(3, 8);
InvasionLargeMinion01.FactionTemplate.set(48);
InvasionLargeMinion01.DamageSchool.Normal.set();
InvasionLargeMinion01.Stats.ArmorMod.set(8);
InvasionLargeMinion01.Stats.DamageMod.set(6);
InvasionLargeMinion01.Stats.ExperienceMod.set(5);
InvasionLargeMinion01.Stats.HealthMod.set(8);
InvasionLargeMinion01.Stats.ManaMod.set(5);
std.SQL.creature_equip_template.add(InvasionLargeMinion01.ID, 1).ItemID1.set(32332);
std.SQL.creature_equip_template.add(InvasionLargeMinion01.ID, 2).ItemID1.set(32369);
std.SQL.creature_equip_template.add(InvasionLargeMinion01.ID, 3).ItemID1.set(30902);
export let InvasionLargeMinion01Loot = InvasionLargeMinion01.NormalLoot;

export let InvasionLargeMinion02 = std.CreatureTemplates.create(
    MODNAME,
    "invasion-largeminion-03",
    299
);
InvasionLargeMinion02.Name.enGB.set("Mistress of Torment");
InvasionLargeMinion02.Models.clearAll();
InvasionLargeMinion02.Models.addIds(29442, 18419);
//Spells

InvasionLargeMinion02.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
InvasionLargeMinion02.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
InvasionLargeMinion02.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionStrike.ID, 2, 7);
});
InvasionLargeMinion02.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionBoarCharge.ID, 2, 7);
});
InvasionLargeMinion02.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(InvasionWhirlwind.ID, 2, 7);
});
//End of Spells
InvasionLargeMinion02.MovementType.RANDOM_MOVEMENT.set();
InvasionLargeMinion02.Level.set(3, 8);
InvasionLargeMinion02.FactionTemplate.set(48);
InvasionLargeMinion02.DamageSchool.Normal.set();
InvasionLargeMinion02.Stats.ArmorMod.set(8);
InvasionLargeMinion02.Stats.DamageMod.set(6);
InvasionLargeMinion02.Stats.ExperienceMod.set(5);
InvasionLargeMinion02.Stats.HealthMod.set(8);
InvasionLargeMinion02.Stats.ManaMod.set(5);
export let InvasionLargeMinion02Loot = InvasionLargeMinion02.NormalLoot;
