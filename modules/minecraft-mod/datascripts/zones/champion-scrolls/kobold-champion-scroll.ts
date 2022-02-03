import { std } from "tswow-stdlib";
import { MODNAME } from "../../modname";

/*Creature - Worg Champion*/
export let KoboldChampionCreature = std.CreatureTemplates.create(
    MODNAME,
    "koboldchampioncreature-creature",
    299
);
KoboldChampionCreature.Name.enGB.set("Kelly Kobold");
KoboldChampionCreature.Subname.enGB.set("Champion of the Kobolds");
KoboldChampionCreature.Models.clearAll();
KoboldChampionCreature.Models.addIds(2153);
KoboldChampionCreature.Scale.set(5);
KoboldChampionCreature.Level.set(10, 10);
KoboldChampionCreature.Rank.ELITE.set();
//Spells
export let KoboldChampionSpell1 = std.Spells.create(
    MODNAME,
    "koboldchampionspell1-spell",
    53167
);
KoboldChampionSpell1.Name.enGB.set("Forked Lightning");
KoboldChampionSpell1.Effects.get(0).BasePoints.set(1812);
KoboldChampionSpell1.CastTime.modRefCopy((val) => val.set(1000, 0, 1000));
export let KoboldChampionSpell2 = std.Spells.create(
    MODNAME,
    "koboldchampionspell2-spell",
    55100
);
KoboldChampionSpell2.Name.enGB.set("Numbing Roar");
export let KoboldChampionSpell3 = std.Spells.create(
    MODNAME,
    "koboldchampionspell3-spell",
    55276
);
KoboldChampionSpell3.Name.enGB.set("Puncture");
KoboldChampionSpell3.Effects.get(0).BasePoints.set(617);
KoboldChampionSpell3.Duration.modRefCopy((val) => val.set(3000, 0, 3000));

KoboldChampionCreature.Scripts.onUpdateIc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setCreateTimedEvent(0, 0, 0, 11000, 15000, 100);
    script.Action.setCreateTimedEvent(1, 0, 0, 3000, 7000, 100);
    script.Action.setCreateTimedEvent(2, 0, 0, 5000, 7000, 100);
});
KoboldChampionCreature.Scripts.onUpdateOoc(0, 0, 0, 0, (script) => {
    script.row.event_flags.set(1);
    script.Action.setRemoveTimedEvent(0);
    script.Action.setRemoveTimedEvent(1);
    script.Action.setRemoveTimedEvent(2);
});
KoboldChampionCreature.Scripts.onTimedEventTriggered(0, (script) => {
    script.Target.setVictim();
    script.Action.setCast(KoboldChampionSpell1.ID, 2, 7);
});
KoboldChampionCreature.Scripts.onTimedEventTriggered(1, (script) => {
    script.Target.setVictim();
    script.Action.setCast(KoboldChampionSpell2.ID, 2, 7);
});
KoboldChampionCreature.Scripts.onTimedEventTriggered(2, (script) => {
    script.Target.setVictim();
    script.Action.setCast(KoboldChampionSpell3.ID, 2, 7);
});

//End of Spells
KoboldChampionCreature.FactionTemplate.set(48);
KoboldChampionCreature.DamageSchool.Normal.set();
KoboldChampionCreature.Stats.ArmorMod.set(125);
KoboldChampionCreature.Stats.DamageMod.set(65);
KoboldChampionCreature.Stats.ExperienceMod.set(30);
KoboldChampionCreature.Stats.HealthMod.set(100);
KoboldChampionCreature.Stats.ManaMod.set(25);
export let KoboldChampionCreatureLoot = KoboldChampionCreature.NormalLoot;

/*Spell - Worg Champion Summon*/
export let KoboldChampion = std.Spells.create(
    MODNAME,
    "koboldchampion-spell",
    66691
);
KoboldChampion.Name.enGB.set("Summon Kobold Champion");
KoboldChampion.Description.enGB.set(
    "Summons a powerful Kobold Champion to fight."
);
KoboldChampion.Effects.get(0).MiscValueA.set(KoboldChampionCreature.ID);

/*Item - Champion Scroll : Worg*/
export let KoboldScroll = std.Items.create(MODNAME, "koboldcroll-1", 33457);
KoboldScroll.Name.enGB.set("Champion Scroll : Kobold");
KoboldScroll.Description.enGB.set(
    "This scroll contains the ability to summon a powerful kobold, be weary, it is advised that this challenge be accepted with additional party members."
);
KoboldScroll.Flags.set(0);
KoboldScroll.FlagsExtra.set(0);
KoboldScroll.MaxCount.set(1);
KoboldScroll.RequiredLevel.set(1);
KoboldScroll.Spells.clearAll();
KoboldScroll.Spells.addMod((spell) => {
    spell.Spell.set(KoboldChampion.ID);
    spell.Charges.set(-1);
});

/*Spell Scripts - Champion Boss Items*/
export let KoboldCreatureSpawn = std.CreatureTemplates.create(
    MODNAME,
    "koboldcreaturespawn-creature",
    8776
);
KoboldCreatureSpawn.Name.enGB.set("Enthralled Kobold");
KoboldCreatureSpawn.Models.clearAll();
KoboldCreatureSpawn.Models.addIds(15396, 15397, 15394);

export let chancekobold1 = std.Spells.create(
    MODNAME,
    "chancekobold1-spell",
    13049
); //15283
chancekobold1.Name.enGB.set("Summon Kobold");
chancekobold1.Effects.get(0).MiscValueA.set(KoboldCreatureSpawn.ID);
export let chancekobold1m = std.Spells.create(
    MODNAME,
    "chancekobold1m-spell",
    67670
); //melee
chancekobold1m.Name.enGB.set("Summon Kobold");
chancekobold1m.Description.enGB.set(
    "Your attacks and abilties have the chance to summon a ravaging kobold to fight for you."
);
chancekobold1m.AuraDescription.enGB.set(
    "Your attacks and abilties have the chance to summon a ravaging kobold to fight for you."
);
chancekobold1m.Effects.get(0).TriggerSpell.set(chancekobold1.ID);
export let chancekobold1c = std.Spells.create(
    MODNAME,
    "chancekobold1c-spell",
    67672
); //caster
chancekobold1c.Name.enGB.set("Summon Kobold");
chancekobold1c.Description.enGB.set(
    "Your attacks and abilties have the chance to summon a ravaging kobold to fight for you."
);
chancekobold1c.AuraDescription.enGB.set(
    "Your attacks and abilties have the chance to summon a ravaging kobold to fight for you."
);
chancekobold1c.Effects.get(0).TriggerSpell.set(chancekobold1.ID);
