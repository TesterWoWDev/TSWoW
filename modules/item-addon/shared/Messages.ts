@Message
export class bagSlotMessage {
    @MsgPrimitive
        Bag: uint32 = 1;
    @MsgPrimitive
        Slot: uint32 = 1;
    @MsgPrimitive
        itemID: uint32 = 0;
}

@Message
export class frameCloseMessage {
    @MsgPrimitive
        Close: uint32 = 1;
}