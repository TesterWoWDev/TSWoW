import { Events, SendToServer } from "./events";

// All we need to set up an event listener is a frame with a unique name.
const frame = CreateFrame('Frame','UniqueName');

// We can now easily register an events using the "Events" interface.
Events.ChatInfo.OnChatMsgSay(frame,(text)=>{
  console.log("A player said something:"+text);
});

// We can register listeners for multiple events.
Events.ChatInfo.OnChatMsgChannel(frame,(text,playername)=>{
    console.log("Channel message: "+text);
});

// We can register multiple listeners to the same event.
Events.ChatInfo.OnChatMsgSay(frame,(text)=>{
  console.log("Event 2:"+text);
});

import { testMessage } from "../shared/testMessage";

const frame1 = CreateFrame('Frame','UniqueName');

// Registers a listener for "ExampleMessage" packets
Events.AddOns.OnMessage(frame1,testMessage,(msg)=>{
    console.log("Addon received an ExampleMessage from the server!");
    // Sends back a new message to the server
    SendToServer(new testMessage());
});