import { count } from "console";
import { blackjackPlayerMessage } from "../shared/Messages";

class Player {
    cards: TSArray<uint32> = []
  }
  let currentPlayers : TSDictionary<uint64,Player> = MakeDictionary<uint64,Player>({});

export function Blackjack(events: TSEventHandlers) {
    events.Player.OnLogout((player)=>{
        if(currentPlayers.contains(player.GetGUIDLow())){
            kickPlayer(player)
        }
    })

    events.Addon.OnMessageID(blackjackPlayerMessage,(player,message)=>{
        let val = message.value
        if(val == 0){
            joinPlayer(player)
        }else if(val == 1){
            drawCard(player)
        }else if(val == 2){
            emptyHand(player)
        }else if(val == 3){
            countHand(player)
        }else if(val == 4){
            checkLose(player)
        }else if(val == 100){
            kickPlayer(player)
        }
    })
}

function joinPlayer(player:TSPlayer){
    currentPlayers[player.GetGUIDLow()] = new Player()
}

function kickPlayer(player:TSPlayer){
    const oldKey = player.GetGUIDLow()
    let newDict = MakeDictionary<uint64,Player>({})
    currentPlayers.forEach((key,value)=>{
        if(key != oldKey)
        newDict[key] = value;
    });
    currentPlayers = newDict;
}

function drawCard(player:TSPlayer){
    const curKey = player.GetGUIDLow()
    let curCards = currentPlayers[curKey].cards
    curCards.push(randomCard())
    currentPlayers[curKey].cards = curCards
}

function emptyHand(player:TSPlayer){
    const curKey = player.GetGUIDLow()
    let e:TSArray<uint32> = []
    currentPlayers[curKey].cards = e
}

function countHand(player:TSPlayer):uint32{
    const curKey = player.GetGUIDLow()
    const curHand = currentPlayers[curKey].cards
    let count = 0
    for(let i=0;i<curHand.length;i++){
        count += curHand[i]
    }
    return count
}

function checkLose(player:TSPlayer):bool{
    let count = countHand(player)
    if(count > 21){
        player.SendAreaTriggerMessage('You lose!')
        return true
    }else if(count == 21){
        player.SendAreaTriggerMessage('YOU WON!')
        return false
    }else{
        player.SendAreaTriggerMessage('You did not lose!')
        return false
    }
    
}
function randomCard():uint32{
    return Math.floor(Math.random() * 13) + 1;
}