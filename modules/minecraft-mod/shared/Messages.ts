@Message
export class bagSlotCombo{
    @MsgPrimitiveArray(2)
    bagslot: TSArray<int32> = [0,0]
}

@Message
export class craftMessage {
    @MsgPrimitiveArray(9)
        itemIDs: TSArray<int32> = [0,0,0,0,0,0,0,0,0]
    @MsgClassArray(9)
        positions: TSArray<bagSlotCombo> = [new bagSlotCombo(),new bagSlotCombo(),new bagSlotCombo(),new bagSlotCombo(),new bagSlotCombo(),new bagSlotCombo(),new bagSlotCombo(),new bagSlotCombo(),new bagSlotCombo()]
    @MsgPrimitive
        purchase:uint32 = 0
    @MsgPrimitiveArray(4)
        enchants:TSArray<int32> = [0,0,0,0,0]
}

@Message
export class returnCraftItemMessage {
    @MsgPrimitive
        craftItem:uint32 = 0
    @MsgPrimitive
        craftItemCount:uint32 = 0
    @MsgPrimitiveArray(4)
        enchantNum:TSArray<int32> = [0,0,0,0,0]
}

@Message
export class showScreen {
}