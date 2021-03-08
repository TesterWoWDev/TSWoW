@Message
export class creatureNamePacket {
	@MsgString(100) 
		entry: string = "name";
    @MsgPrimitive 
		isEntry: uint32 = 1;
}

@Message
export class itemLootPacket {
    @MsgPrimitive
        itemID: uint32 = 1;
    @MsgPrimitive
        itemCountMin: uint32 = 1;
    @MsgPrimitive
        itemCountMax: uint32 = 1;
    @MsgPrimitive
        dropChance: uint32 = 1;  
}

@Message
export class itemLootFinishPacket {
    @MsgPrimitive
        finish: uint32 = 1;
}

@Message
export class creatureNoExistPacket {
    @MsgPrimitive
        finish: uint32 = 1;
}