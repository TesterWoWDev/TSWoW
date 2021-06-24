@Message
export class craftMessage {
    @MsgPrimitive
        pos1:uint32 = 0
    @MsgPrimitive
        pos2:uint32 = 0
    @MsgPrimitive
        pos3:uint32 = 0
    @MsgPrimitive
        pos4:uint32 = 0
    @MsgPrimitive
        pos5:uint32 = 0
    @MsgPrimitive
        pos6:uint32 = 0
    @MsgPrimitive
        pos7:uint32 = 0
    @MsgPrimitive
        pos8:uint32 = 0
    @MsgPrimitive
        pos9:uint32 = 0
    @MsgPrimitive
        purchase:uint32 = 0
}

@Message
export class returnCraftItemMessage {
    @MsgPrimitive
        craftItem:uint32 = 0
    @MsgPrimitive
    craftItemCount:uint32 = 0
}
