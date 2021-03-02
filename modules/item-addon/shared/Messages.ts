@Message
export class blagSlotMessage {
    @MsgPrimitive
        Bag: uint32 = 1;
    @MsgPrimitive
        Slot: uint32 = 1;
}

@Message
export class frameCloseMessage {
    @MsgPrimitive
        Close: uint32 = 1;
}