import { std } from "wow/wotlk";
import { MODNAME } from "../../modname";

export let ChampionOnKillSpell = std.Spells.create(
    MODNAME,
    "championkill-spell",
    68251
);
ChampionOnKillSpell.Name.enGB.set("Champion");
ChampionOnKillSpell.Description.enGB.set(
    "You have beaten a Champion Scroll Challenge."
);
ChampionOnKillSpell.AuraDescription.enGB.set(
    "All stats increased by $s1 and experience gained has been increased by $s2%."
);
ChampionOnKillSpell.Duration.modRefCopy((val) => val.set(6000000, 0, 6000000));
ChampionOnKillSpell.Effects.get(0).PointsBase.set(99);
ChampionOnKillSpell.Effects.get(1).Type.APPLY_AURA.set();
ChampionOnKillSpell.Effects.get(1).PointsBase.set(99);
ChampionOnKillSpell.Effects.get(1).PointsDieSides.set(1);
ChampionOnKillSpell.Effects.get(1).ImplicitTargetA.UNIT_CASTER.set();
ChampionOnKillSpell.Effects.get(1).Aura.MOD_XP_PCT.set();
ChampionOnKillSpell.Attributes.IS_HIDDEN_IN_SPELLBOOK.set(true);
