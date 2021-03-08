@Message
export class creatureNamePacket {
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
export class itemLootFinishPacket {
    @MsgPrimitive
        finish: uint32 = 0;
}

@Message
export class creatureNoExistPacket {
    @MsgPrimitive
        finish: uint32 = 0;
}