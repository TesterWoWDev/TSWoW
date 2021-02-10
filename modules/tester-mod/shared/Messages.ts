@Message
export class buttonIDMessage {
	@MsgString(3) 
		button: string = "-1";
}

@Message
export class showFrameMessage {
	@MsgString(1) 
		show: string = "1";
}

@Message
export class itemMessage {
    @MsgPrimitive
        ID: uint32 = 1;
    @MsgString(30) 
		icon: string = "11111111111111111111111111111111111";
    @MsgString(20) 
		name: string = "1111111111111111111111111";
    @MsgString(5)
        price:string = "-1";
    @MsgString(5)
        itemID:string = "-1";
    @MsgString(5)
        amount:string = "-1";
}

@Message
export class currencyMessage {
    @MsgPrimitive
        ID: uint32 = 1;
    @MsgPrimitive
        curAmt: uint32 = 1;
    @MsgString(30) 
		icon: string = "11111111111111111111111111111111111";
}