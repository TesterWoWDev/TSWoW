export function hungerGames(events: TSEventHandlers) {
    //random spawned chests
    //random spawned materials
    //random lootable scrolls to show recipes
    //new recipes for stuff
    //random spawned rares
    //closing zone of death

    events.MapID.OnPlayerEnter(1,(map,player)=>{
        //difficulty 1
        player.AddTimer('hungergames-1',3000,0,timer=>{
            console.log("hungergames-1 for " + player.GetName())
            for(let i=0;i<getInt(5);i++){
                let spawn = player.SpawnCreature(1,player.GetX() + getInt(50),player.GetY() + getInt(50),player.GetZ(),0,4,300)
                //spawn.Attack(player,true);
                spawn.AttackStart(player)
            }
        })
        //difficulty 2
        player.AddTimer('hungergames-2-starting-call',10000,0,timer=>{
            console.log("hungergames-2-starting-call for " + player.GetName())
            player.AddTimer('hungergames-2',5000,0,timer=>{
                console.log("hungergames-2 for " + player.GetName())
            })
        })

        //difficulty 3
        player.AddTimer('hungergames-3-starting-call',30000,0,timer=>{
            console.log("hungergames-3-starting-call for " + player.GetName())
            player.AddTimer('hungergames-3',5000,0,timer=>{
                console.log("hungergames-3 for " + player.GetName())
            })
        })
    })

    function getInt(max:number):number {
        return (Math.random() * (-max*2)) + max;
      }

}