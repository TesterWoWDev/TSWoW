import { std } from "wow/wotlk";
import { MODNAME } from "../modname";

export let attackpower1 = std.Spells.create(
    MODNAME,
    "attackpower1-spell",
    34747
);
attackpower1.Name.enGB.set("Escalating Power");
attackpower1.Description.enGB.set("Attack Power increased by $s1.");
attackpower1.Effects.get(0).Aura.MOD_ATTACK_POWER.set();
attackpower1.Effects.get(0).PointsBase.set(49);
attackpower1.Effects.get(1).PointsBase.set(-1);
attackpower1.Cooldown.set(120000, 0, 0, 0);

export let attackpower2 = std.Spells.create(
    MODNAME,
    "attackpower2-spell",
    34747
);
attackpower2.Name.enGB.set("Escalating Power");
attackpower2.Description.enGB.set("Attack Power increased by $s1.");
attackpower2.Effects.get(0).Aura.MOD_ATTACK_POWER.set();
attackpower2.Effects.get(0).PointsBase.set(149);
attackpower2.Effects.get(1).PointsBase.set(-1);
attackpower2.Cooldown.set(120000, 0, 0, 0);

export let attackpower3 = std.Spells.create(
    MODNAME,
    "attackpower3-spell",
    34747
);
attackpower3.Name.enGB.set("Escalating Power");
attackpower3.Description.enGB.set("Attack Power increased by $s1.");
attackpower3.Effects.get(0).Aura.MOD_ATTACK_POWER.set();
attackpower3.Effects.get(0).PointsBase.set(249);
attackpower3.Effects.get(1).PointsBase.set(-1);
attackpower3.Cooldown.set(120000, 0, 0, 0);

export let attackpower4 = std.Spells.create(
    MODNAME,
    "attackpower4-spell",
    34747
);
attackpower4.Name.enGB.set("Escalating Power");
attackpower4.Description.enGB.set("Attack Power increased by $s1.");
attackpower4.Effects.get(0).Aura.MOD_ATTACK_POWER.set();
attackpower4.Effects.get(0).PointsBase.set(349);
attackpower4.Effects.get(1).PointsBase.set(-1);
attackpower4.Cooldown.set(120000, 0, 0, 0);
