@Message
export class creatureNameMessage {
	@MsgString(30) 
		entry: string = "name"
    @MsgPrimitive 
		isName: uint32 = 1
}

@Message
export class itemLootMessage {
    @MsgPrimitive
        itemID: uint32 = 0
    @MsgPrimitive
        itemCountMin: uint32 = 0
    @MsgPrimitive
        itemCountMax: uint32 = 0
    @MsgPrimitive
        dropChance: double = 0
}

@Message
export class itemLootFinishMessage {
    @MsgPrimitive
        entry: uint32 = 0
}

@Message
export class creatureNoExistMessage {
    @MsgPrimitive
        finish: uint32 = 0
}

@Message
export class blackjackPlayerMessage {
    @MsgPrimitive
        value: uint32 = 0
        bet: uint32 = 0
}

@Message
export class blackjackSendHandMessage {
    @MsgPrimitiveArray(10)
        cards: TSArray<uint32> = []
}