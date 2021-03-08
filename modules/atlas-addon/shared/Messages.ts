@Message
export class creatureNamePacket {
	@MsgString(200) 
		name: string = "name";
}

export class itemLootPacket {
    @MsgPrimitive
        itemID: uint32 = 1;
    @MsgPrimitive
        itemCountMin: uint32 = 1;
    @MsgPrimitive
        itemCountMax: uint32 = 1;
    @MsgPrimitive
        dropChance: double = 1;  
}

export class itemLootFinishPacket {
    @MsgPrimitive
        finish: uint32 = 1;
}

export class creatureNoExistPacket {
    @MsgPrimitive
        finish: uint32 = 1;
}