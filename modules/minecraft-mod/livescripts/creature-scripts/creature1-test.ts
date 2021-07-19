export function creature1Script(events:TSEventHandlers){
    // events.CreatureID.OnJustEnteredCombat(ID,(creature,target)=>{
    //     let players = creature.GetPlayersInRange(100,1,0)
    //     for(let i=0;i<players.length;i++){
    //         let player = players[i]
    //         if(player.IsPlayer()){
    //             player.GetCollisions().Add(ModID(),"my_collisions",10,1000,0,(collision,self,collided,cancel)=>{
    //                 self.ToPlayer().SendBroadcastMessage("Colliding with "+collided.GetName());
    //             });
    //         }
    //     }
    // })


    // events.Player.OnSay((player,type,lang,msg)=>{
    //     player.SendBroadcastMessage("Hello world");
    //     player.GetCollisions().Add(ModID(),"my_collisions",10,1000,0,(collision,self,collided,cancel)=>{
    //         if(collided.GetEntry() == 34001) {
    //             let player = self.ToPlayer()
    //             let object = collided.ToCreature()
    //             self.ToPlayer().SendBroadcastMessage("Colliding with "+collided.GetName());
    //             player.CastSpell(player,33382,true)
    //             player.CastSpell(player,70702,true)
    //             player.RemoveAura(33382)
    //             object.DespawnOrUnsummon(1)
    //             player.SpawnCreature(1412,player.GetX(),player.GetY(),player.GetZ(),0,1,120000)
    //         }
    //     });
    // })

    // events.CreatureID.OnCreate(1412,(creature,cancel)=>{
    //     creature.CastSpell(creature,50366,true)
    // })



    // events.Player.OnSay((player,type,lang,msg)=>{
    //     const TSPosition = player.GetRelativePoint(30,0)
    //     const creature = player.SpawnCreature(30616,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),3,4000)
    //     creature.MoveTo(1,TSPosition.x,TSPosition.y,TSPosition.z,true)
    //     player.GetCollisions().Add(ModID(),"my_collisions",10,500,0,(collision,self,collided,cancel)=>{
    //         if(collided.GetEntry() == 30616) {
    //             let player = self.ToPlayer()
    //             let object = collided.ToCreature()
    //             object.CastSpell(player,60241,true)//knock back
    //             object.CastSpell(player,200050,true)
    //         }
    //     })
    // })

    // events.CreatureID.OnCreate(30616,(creature,cancel)=>{
    //     creature.CastSpell(creature,57494,true)//flame visual
    //     creature.CastSpell(creature,57492,true)//AoE damage
    //     creature.SetScale(0.5)
    //     creature.SetFaction(35)
    // })
}