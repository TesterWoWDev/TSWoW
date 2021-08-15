import { count } from "console";
import { blackjackPlayerMessage } from "../shared/Messages";

class Player {
    cards: TSArray<uint32> = []
    curBet: uint32 = 0
  }
  let currentPlayers : TSDictionary<uint64,Player> = MakeDictionary<uint64,Player>({});

export function Blackjack(events: TSEventHandlers) {
    events.Player.OnLogout((player)=>{
        if(currentPlayers.contains(player.GetGUIDLow())){
            kickPlayer(player.GetGUIDLow())
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
        }else if(val == 5){
            addPlayerBet(player,message.bet)
        }else if(val == 6){
            setPlayerBet(player,message.bet)
        }else if(val == 100){
            kickPlayer(player.GetGUIDLow())
        }
    })
}

function joinPlayer(player:TSPlayer){
    currentPlayers[player.GetGUIDLow()] = new Player()
}

function kickPlayer(oldKey:uint32){
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
    //update player
}

function emptyHand(player:TSPlayer){
    const curKey = player.GetGUIDLow()
    let e:TSArray<uint32> = []
    currentPlayers[curKey].cards = e
    //update player
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
        playerWin(player)
        return false
    }else{
        player.SendAreaTriggerMessage('You did not lose!')
        return false
    }   
}

function addPlayerBet(player:TSPlayer,bet:uint32){
    if(player.GetMoney() >= bet){
        player.ModifyMoney(-bet)
        currentPlayers[player.GetGUIDLow()].curBet += bet
    }else{
        player.SendAreaTriggerMessage('You poor')
    }
    //update player
}

function setPlayerBet(player:TSPlayer,bet:uint32){
    if(player.GetMoney() >= bet){
        player.ModifyMoney(-bet)
        currentPlayers[player.GetGUIDLow()].curBet = bet
    }else{
        player.SendAreaTriggerMessage('You poor')
    }
    //update player
}

function endGame(){
    currentPlayers.forEach((key,value)=>{
        kickPlayer(key)
    });
}

function playerWin(player:TSPlayer){
    let totalPot = getTotalPot()
    player.ModifyMoney(totalPot)
    
}
function randomCard():uint32{
    return Math.floor(Math.random() * 13) + 1;
}

function getTotalPot():uint32{
    let totalPot:uint32 = 0
    currentPlayers.forEach((key,value)=>{
        totalPot += value.curBet;
    });
    return totalPot
}