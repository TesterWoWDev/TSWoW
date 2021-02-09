import { Events, SendToServer } from "./events";
import { WrapperMessage } from "../shared/testMessage";

// All we need to set up an event listener is a frame with a unique name.
const frame = CreateFrame('Frame','UniqueName',UIParent);
frame.SetWidth(128)
frame.SetHeight(64)
const texture = frame.CreateTexture("texture1",'BACKGROUND')
texture.SetTexture("Interface\\Glues\\CharacterCreate\\UI-CharacterCreate-Factions.blp")
texture.SetAllPoints(frame)
frame.SetPoint("CENTER",0,0)
frame.Hide()
// Registers a listener for "ExampleMessage" packets
Events.AddOns.OnMessage(frame,WrapperMessage,(msg)=>{
	console.log("Addon Message: " + msg.inner.str)
	// Sends back a new message to the server 
	let serverpacket = new WrapperMessage()
	serverpacket.inner.str = "from client"
	SendToServer(serverpacket);
    frame.Show()
});