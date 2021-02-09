@Message
export class testMessage {
	@MsgPrimitive 
		guid: uint32 = 25;
	@MsgString(25) 
		str: string = "abcdef"
}

@Message
export class WrapperMessage {
	@MsgClass
		inner: testMessage = new testMessage(); // Inner message classes should always be initialized.
}