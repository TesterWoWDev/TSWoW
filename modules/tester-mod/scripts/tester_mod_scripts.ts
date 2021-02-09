import { onDeath } from "./death";
import { Killstreaks } from "./Killstreak";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { VIP } from "./VIP"
import { testMessage } from "../shared/testMessage";

export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)


    // Use a basic OnSay event to trigger the transmission
    events.Player.OnSay((player,type,lang,msg)=>{
      // Sends an example message that will fire the event in the addon.
      player.SendData(new testMessage());
    });

    // Wait for clients to send this message back
    events.Addon.OnMessageID(testMessage,(player,msg)=>{
        player.SendBroadcastMessage("Server received an testMessage from the client!");
        
    });    
}
