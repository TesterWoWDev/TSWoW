export function Dueling(events: TSEventHandlers) {
    events.Player.OnDuelStart((player1,player2)=>{
        player1.ResetAllCooldowns()
        player2.ResetAllCooldowns()
    });
}