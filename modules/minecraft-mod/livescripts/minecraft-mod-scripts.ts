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
    
    events.Player.OnSay((player,type,lang,msg)=>{
        //in event script every 5 min to send POI to all online players
        player.GossipSendPOI(7454,-2203,41,0,0,'Legion Invasion')
    })
}