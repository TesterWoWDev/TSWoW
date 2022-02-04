export function creature1Script(events: TSEventHandlers) {
    events.SpellID.OnCast(
        GetID("Spell", "minecraft-mod", "bossdummyspell1-spell"),
        (spell) => {
            let creature = spell.GetCaster().ToCreature();
            const TSPosition = creature.GetRelativePoint(30, 0);
            const creatureWave = creature.SpawnCreature(
                GetID("creature_template", "minecraft-mod", "invasion-invisible-01"),
                creature.GetX(),
                creature.GetY(),
                creature.GetZ(),
                creature.GetO(),
                3,
                4000
            );
            creatureWave.MoveTo(1, TSPosition.x, TSPosition.y, TSPosition.z, true);
            let players = creature.GetPlayersInRange(100, 1, 0);
            for (let i = 0; i < players.length; i++) {
                let player = players[i];
                player
                    .GetCollisions()
                    .Add(
                        ModID(),
                        "flamewave-knock",
                        6,
                        500,
                        0,
                        (collision, self, collided, cancel) => {
                            if (
                                collided.GetEntry() ==
                                GetID(
                                    "creature_template",
                                    "minecraft-mod",
                                    "invasion-invisible-01"
                                )
                            ) {
                                let player = self.ToPlayer();
                                let object = collided.ToCreature();
                                object.CastSpell(player, 60241, true); //knock back
                            }
                        }
                    );
            }
        }
    );
    events.CreatureID.OnCreate(
        GetID("creature_template", "minecraft-mod", "invasion-invisible-01"),
        (creature, cancel) => {
            creature.CastSpell(creature, 57494, true); //flame visual
            creature.CastSpell(
                creature,
                GetID("Spell", "minecraft-mod", "invasionflamewave-spell"),
                true
            ); //AoE damage
        }
    );
}
