let currentPercent: number = 0;
let currentEventID: number = 0;
let spawners: TSUnit[] = [];
let cSpawns: TSCreature[] = [];
let gSpawns: TSGameObject[] = [];
let spawned: boolean = false;

export function invasions(events: TSEventHandlers) {
    events.Player.OnLogin((player, first) => {
        if (spawners.length <= 0) {
            addSpawner(player);
        }
        if (spawned) {
            spawned = true;
            startInvasion();
        }
    });

    events.CreatureID.OnDeath(
        GetID("creature_template", "minecraft-mod", "invasion-minion-01"),
        (creature, killer) => {
            addPercent(0.5);
        }
    );
    events.CreatureID.OnDeath(
        GetID("creature_template", "minecraft-mod", "invasion-largeminion-01"),
        (creature, killer) => {
            addPercent(1);
        }
    );
    events.CreatureID.OnDeath(
        GetID("creature_template", "minecraft-mod", "invasion-largeminion-02"),
        (creature, killer) => {
            addPercent(3);
        }
    );
    events.CreatureID.OnDeath(
        GetID("creature_template", "minecraft-mod", "invasion-largeminion-03"),
        (creature, killer) => {
            addPercent(5);
        }
    );

    events.CreatureID.OnDeath(
        GetID("creature_template", "minecraft-mod", "invasionboss01"),
        (creature, killer) => {
            let players = creature.GetPlayersInRange(50, 0, 0);
            for (let i = 0; i < players.length; i++) {
                //players[i].AddItem(id,1)
            }
            endInvasion();
        }
    );
}
function randNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startInvasion() {
    currentEventID = randNum(0, 0);
    let spawner = spawners[currentEventID];
    let q = QueryWorld(
        "SELECT * FROM `invasions` WHERE eventID=" + currentEventID
    );
    while (q.GetRow()) {
        if (q.GetInt32(1) == 1) {
            //creature
            let unit = spawner.SpawnCreature(
                q.GetInt32(2),
                q.GetInt32(3),
                q.GetInt32(4),
                q.GetInt32(5),
                q.GetInt32(6),
                8,
                0
            );
            cSpawns.push(unit);
        } else if (q.GetInt32(1) == 0) {
            //gameobject
            let unit = spawner.SummonGameObject(
                q.GetInt32(2),
                q.GetInt32(3),
                q.GetInt32(4),
                q.GetInt32(5),
                q.GetInt32(6),
                0
            );
            gSpawns.push(unit);
        } else {
            //position for boss/legion invasion icon
            spawner.AddTimer(
                "invasion-location",
                30000,
                0,
                (timer, entity, del, can) => {
                    let players = entity.GetMap().GetPlayers(-1);
                    for (let i = 0; i < players.length; i++) {
                        players[i].GossipSendPOI(
                            q.GetInt32(3),
                            q.GetInt32(4),
                            41,
                            0,
                            0,
                            "Legion Invasion"
                        );
                    }
                }
            );
        }
    }
}

function addPercent(value: number) {
    currentPercent += value;
    checkPercent();
}

function checkPercent() {
    if (currentPercent >= 100) {
        currentPercent = 0;
        let q = QueryWorld("Select * FROM `invasions_bosses` LIMIT 1");
        while (q.GetRow()) {
            let spawner = spawners[currentEventID];
            spawner.SpawnCreature(
                q.GetInt32(1),
                spawner.GetX(),
                spawner.GetY(),
                spawner.GetZ(),
                spawner.GetO(),
                8,
                0
            );
        }
    }
}

function addSpawner(spawner: TSPlayer) {
    let q = QueryWorld("SELECT * FROM `invasions_spawners`");
    while (q.GetRow()) {
        spawner.SpawnCreature(
            q.GetInt32(0),
            q.GetInt32(1),
            q.GetInt32(2),
            q.GetInt32(3),
            q.GetInt32(4),
            8,
            0
        );
        spawners.push(spawner);
    }
}

function endInvasion() {
    let spawner = spawners[currentEventID];
    for (let i = 0; i < cSpawns.length; i++) {
        cSpawns[i].DespawnOrUnsummon(1);
    }
    for (let i = 0; i < gSpawns.length; i++) {
        gSpawns[i].Despawn();
    }
    let players = spawner.GetMap().GetPlayers(-1);
    for (let i = 0; i < players.length; i++) {
        players[i].GossipSendPOI(0, 0, 41, 0, 0, "Legion Invasion");
    }
    spawner.RemoveTimer("invasion-location");
    spawner.AddTimer("invasion-end", 90000, 1, (timer, entity, del, can) => {
        startInvasion();
    });
}
