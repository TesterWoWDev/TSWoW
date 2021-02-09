import { onDeath } from "./death";
import { Killstreaks } from "./Killstreak";
import { QoLChanges } from "./QoLChanges";
import { Skillshot } from "./skillshot";
import { VIP } from "./VIP"
import { WrapperMessage } from "../shared/testMessage";

export function Main(events: TSEventHandlers) {
	VIP(events)
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
	// Use a basic OnSay event to trigger the transmission
	events.Player.OnSay((player,type,lang,msg)=>{
		let sender = new WrapperMessage()
		sender.inner.str = "from server"
		player.SendData(sender);
	});
	// Wait for clients to send this message back
	events.Addon.OnMessageID(WrapperMessage,(player,msg)=>{
		player.SendBroadcastMessage("Server received a WrapperMessage from the client!")				
	});		
}
