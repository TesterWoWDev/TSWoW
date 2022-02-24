const winToken = 11;
const killToken = 12;
export function hungerGames(events: TSEvents) {
    //random spawned chests
    //random spawned materials
    //random lootable scrolls to show recipes
    //new recipes for stuff
    //random spawned rares
    //closing zone of death

    events.MapID.OnPlayerEnter(1, (map, player) => {
        //difficulty 1
        player.AddNamedTimer("hungergames-1", 3000, 0, (timer) => {
            console.log("hungergames-1 for " + player.GetName());
            for (let i = 0; i < getInt(3); i++) {
                let spawn = player.SpawnCreature(
                    1,
                    player.GetX() + getInt(50),
                    player.GetY() + getInt(50),
                    player.GetZ(),
                    0,
                    4,
                    300
                );
                //spawn.Attack(player,true);
                spawn.AttackStart(player);
            }
        });

        //difficulty 2
        player.AddNamedTimer("hungergames-2-starting-call", 10000, 0, (timer) => {
            console.log("hungergames-2-starting-call for " + player.GetName());
            player.AddNamedTimer("hungergames-2", 5000, 0, (timer) => {
                console.log("hungergames-2 for " + player.GetName());
                for (let i = 0; i < getInt(2); i++) {
                    let spawn = player.SpawnCreature(
                        2,
                        player.GetX() + getInt(50),
                        player.GetY() + getInt(50),
                        player.GetZ(),
                        0,
                        4,
                        300
                    );
                    //spawn.Attack(player,true);
                    spawn.AttackStart(player);
                }
            });
        });

        //difficulty 3
        player.AddNamedTimer("hungergames-3-starting-call", 30000, 0, (timer) => {
            console.log("hungergames-3-starting-call for " + player.GetName());
            player.AddNamedTimer("hungergames-3", 5000, 0, (timer) => {
                console.log("hungergames-3 for " + player.GetName());
                for (let i = 0; i < getInt(1); i++) {
                    let spawn = player.SpawnCreature(
                        3,
                        player.GetX() + getInt(50),
                        player.GetY() + getInt(50),
                        player.GetZ(),
                        0,
                        4,
                        300
                    );
                    //spawn.Attack(player,true);
                    spawn.AttackStart(player);
                }
            });
        });

        //difficulty 4
        player.AddNamedTimer("hungergames-4-starting-call", 60000, 0, (timer) => {
            console.log("hungergames-4-starting-call for " + player.GetName());
            player.AddNamedTimer("hungergames-4", 5000, 0, (timer) => {
                console.log("hungergames-4 for " + player.GetName());
                for (let i = 0; i < getInt(1); i++) {
                    let spawn = player.SpawnCreature(
                        3,
                        player.GetX() + getInt(50),
                        player.GetY() + getInt(50),
                        player.GetZ(),
                        0,
                        4,
                        300
                    );
                    //spawn.Attack(player,true);
                    spawn.AttackStart(player);
                }
            });
        });
    });

    events.Player.OnPVPKill((killer, killed) => {
        teleportHome(killed);
        killer.AddItem(killToken, 1);
        let pcount = killer.GetMap().GetPlayerCount();
        if (pcount == 1) {
            //SendWorldMessage('Hunger Games Ended! ' + killer.GetName() + " wins!")
            killer.AddItem(winToken, 3);
            killed.AddItem(winToken, 2);
            teleportHome(killer);
        }
        if (pcount == 2) {
            killed.AddItem(winToken, 1);
        }
    });
}

function getInt(max: number): number {
    return Math.random() * (-max * 2) + max;
}

function teleportHome(player: TSPlayer) {
    player.Teleport(0, 1, 1, 1, 1);
}
