@Message
export class creatureNameMessage {
	@MsgString(30) 
		entry: string = "name";
    @MsgPrimitive 
		isName: uint32 = 1;
}

@Message
export class itemLootPacket {
    @MsgPrimitive
        itemID: uint32 = 0;
    @MsgPrimitive
        itemCountMin: uint32 = 0;
    @MsgPrimitive
        itemCountMax: uint32 = 0;
    @MsgPrimitive
        dropChance: double = 0;  
}

@Message
export class itemLootFinishMessage {
    @MsgPrimitive
        finish: uint32 = 0;
}

@Message
export class creatureNoExistMessage {
    @MsgPrimitive
        finish: uint32 = 0;
}