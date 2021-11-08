import { spellValuesFinish, spellValuesIncoming, spellValuesMessage } from "../shared/Messages";

export function Main(events: TSEventHandlers) {
    events.Player.OnSay((player,type,lang,msg)=>{
        if(msg.get().startsWith("#aa")){
            buffChoice(player)
            applyBuffs(player)
            showBuffs(player)
        }
    })
}

class playerBuffs extends TSClass {
    currentBuffs: TSArray<int> = [];
    currentBuffsCount: TSArray<int> = [];
    currentBuffsName: TSArray<string> = [];
}

function buffChoice(player: TSPlayer) {
    let spells: TSArray<int> = [];
    let spellName: TSArray<string> = [];
    spells.push(7464, 7471, 7477, 7468, 7474);
    spellName.push("Strength", "Agility", "Stamina", "Intellect", "Spirit");
    let charItems = player.GetObject<playerBuffs>("playerBuffs",new playerBuffs());
    let chNum = Math.floor(Math.random()*5)
    let choice = spells[chNum]
    let choiceString = spellName[chNum]
    let found = false
    let Findex = -1
    for(let i=0;i<charItems.currentBuffs.length;i++){
        if(charItems.currentBuffs[i] == choice){
            found = true
            Findex = i
            break
        }
    }
    if(found){
        charItems.currentBuffsCount[Findex] = charItems.currentBuffsCount[Findex] + 1
    }else{
        charItems.currentBuffs.push(choice)
        charItems.currentBuffsCount.push(1)
        charItems.currentBuffsName.push(choiceString)
    }
    player.SetObject("playerBuffs",charItems)
}

function showBuffs(player: TSPlayer){
    player.SendData(new spellValuesIncoming())
    let charItems = player.GetObject<playerBuffs>("playerBuffs",new playerBuffs());
    console.log("All buffs:")
    for(let i=0;i<charItems.currentBuffs.length;i++){
        let pkt = new spellValuesMessage()
            pkt.spellID = charItems.currentBuffs[i]
            pkt.spellCt = charItems.currentBuffsCount[i]
            pkt.spellName = charItems.currentBuffsName[i]
        console.log(pkt.spellName + " ID: " + pkt.spellID + " #: "+ pkt.spellCt)
        player.SendData(pkt)
    }
    player.SendData(new spellValuesFinish())
    console.log("-----")
}

function applyBuffs(player: TSPlayer) {
    let charItems = player.GetObject<playerBuffs>("playerBuffs",new playerBuffs());
    for(let i=0;i<charItems.currentBuffs.length;i++){
        player.AddAura(charItems.currentBuffs[i],player).SetStackAmount(charItems.currentBuffsCount[i])      
    }
}
