import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";


export let miniBoss1FlameShock = std.Spells.create(
    MODNAME,
    "miniboss1flameshock1-spell",
    8050
);
miniBoss1FlameShock.Name.enGB.set("Crackling Flames");
miniBoss1FlameShock.AuraDescription.enGB.set("$s2 Fire damage every $t2 seconds.");
miniBoss1FlameShock.Description.enGB.set(
    "Instantly sears the target with fire, causing $s1 Fire damage immediately and $o2 Fire damage over $d."
);
miniBoss1FlameShock.Effects.get(0).BasePoints.set(174);
miniBoss1FlameShock.Effects.get(0).DieSides.set(1);
miniBoss1FlameShock.Effects.get(0).PointsPerLevel.set(0);
miniBoss1FlameShock.Effects.get(1).BasePoints.set(144);
miniBoss1FlameShock.Effects.get(1).DieSides.set(1);
miniBoss1FlameShock.Effects.get(1).ChainAmplitude.set(3000);
miniBoss1FlameShock.Duration.setSimple(7000);
miniBoss1FlameShock.Cooldown.set(7000, 0, 0, 0);

export let miniBoss1LightningBolt1 = std.Spells.create(
    MODNAME,
    "miniboss1lightningbolt1-spell",
    8246
);
miniBoss1LightningBolt1.Name.enGB.set("Lightning Strike");
miniBoss1LightningBolt1.Description.enGB.set(
    "Blasts an enemy with lightning for $s1 Nature damage."
);
miniBoss1LightningBolt1.Effects.get(0).BasePoints.set(384);
miniBoss1LightningBolt1.Effects.get(0).DieSides.set(1);
miniBoss1LightningBolt1.Effects.get(0).PointsPerLevel.set(0);
miniBoss1LightningBolt1.CastTime.setSimple(2000);

export let TorghastMiniBoss1 = std.CreatureTemplates.create(
    MODNAME,
    "torghastminiboss1",
    3276
);
TorghastMiniBoss1.Models.clearAll();
TorghastMiniBoss1.Models.addIds(19521);
TorghastMiniBoss1.Name.enGB.set("Agnar Steelwinter");
TorghastMiniBoss1.Scale.set(1);
TorghastMiniBoss1.FactionTemplate.set(48);
TorghastMiniBoss1.Level.set(21, 21);
TorghastMiniBoss1.Rank.BOSS.set();
TorghastMiniBoss1.UnitClass.PALADIN.set();
TorghastMiniBoss1.DamageSchool.Normal.set();
TorghastMiniBoss1.Stats.ArmorMod.set(30);
TorghastMiniBoss1.Stats.DamageMod.set(20);
TorghastMiniBoss1.Stats.HealthMod.set(20);
TorghastMiniBoss1.Stats.ManaMod.set(50);
TorghastMiniBoss1.Stats.ExperienceMod.set(5);

TorghastMiniBoss1.InlineScripts.OnJustEnteredCombat((creature, target) => {
    function attemptCast(
        spellID: number,
        self: TSCreature,
        target: TSUnit,
        force: boolean
    ) {
        if (!self.IsCasting() || force) {
            if (target.IsPlayer()) {
                self.CastSpell(target, spellID, false);
            } else {
                self.CastSpell(self.GetNearestPlayer(50, 1, 0), spellID, false);
            }
        }
    }
    //start of combat
    creature.CastSpell(
        target,
        GetID("Spell", "minecraft-mod", "miniboss1flameshock1-spell"),
        true
    );
    //start of timers
    creature.AddTimer("event1", 3000, -1, (timer, entity, del, can) => {
        let self = entity.ToCreature();
        let target = self.GetVictim();
        attemptCast(
            GetID("Spell", "minecraft-mod", "miniboss1lightningbolt1-spell"),
            self,
            target,
            false
        );
    });
});

TorghastMiniBoss1.InlineScripts.OnDeath((creature, killer) => {
    creature.RemoveTimer("event1");
});

TorghastMiniBoss1.InlineScripts.OnReachedHome((creature) => {
    creature.RemoveTimer("event1");
});