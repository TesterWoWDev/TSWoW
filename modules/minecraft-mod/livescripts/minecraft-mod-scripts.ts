import { handleCraftMessages } from "./crafting-messages"
import { creature1Script } from "./creature-scripts/creature1-test"
import { onLoginEvents } from "./onLogin"
import { transmog } from "./transmog"
import { worldChat } from "./world-chat"
export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
    transmog(events)
	worldChat(events)
    creature1Script(events)
}
    // events.Player.OnSay((player,type,lang,msg)=>{
    //     //in event script every 5 min to send POI to all online players
    //     player.GossipSendPOI(7454,-2203,41,0,0,'Legion Invasion')
    // })

//     events.Player.OnSay((player,type,lang,msg)=>{
//         let t = QueryWorld('SELECT eventID FROM `invasions` ORDER BY eventID DESC LIMIT 1;')
//         while(t.GetRow()){
//             let q = QueryWorld('SELECT * FROM `invasions` WHERE eventID='+randNum(0,t.GetInt32(0)))
//             while(q.GetRow()){
//                 if(q.GetInt16(1) == 1){//creature
//                     player.SpawnCreature(q.GetInt32(2),q.GetInt32(3),q.GetInt32(4),q.GetInt32(5),q.GetInt32(6),8,0)
//                 }else{//gameobject
//                     player.SummonGameObject(q.GetInt32(2),q.GetInt32(3),q.GetInt32(4),q.GetInt32(5),q.GetInt32(6),0)
//                 }
//             }
//         }
//     })
// }
// function randNum(min:number,max:number) {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }