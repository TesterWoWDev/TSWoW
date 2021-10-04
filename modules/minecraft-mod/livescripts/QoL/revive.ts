export function reviveFix(events: TSEventHandlers){
    events.MapID.OnPlayerEnter(1,(map,player)=>{
        player.Teleport(725,-8749.424805,-77.516861,31.135099,0.923082)
        player.ResurrectPlayer(15,false)
    })
    events.MapID.OnPlayerEnter(0,(map,player)=>{
        player.Teleport(725,-8749.424805,-77.516861,31.135099,0.923082)
        //player.GetCorpse().GetLocation()
        //move to their location, do event, move to closest grave
        player.ResurrectPlayer(15,false)
    })
}