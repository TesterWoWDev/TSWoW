import { Events, SendToServer } from "./events";
import { WrapperMessage } from "../shared/testMessage";

// All we need to set up an event listener is a frame with a unique name.
const frame = CreateFrame('Frame','UniqueName');

// Registers a listener for "ExampleMessage" packets
Events.AddOns.OnMessage(frame,WrapperMessage,(msg)=>{
	console.log("Addon Message: " + msg.inner.str)
	// Sends back a new message to the server 
	let serverpacket = new WrapperMessage()
	serverpacket.inner.str = "from client"
	SendToServer(serverpacket);
});