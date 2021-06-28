@Message
export class spellValuesMessage {
    @MsgPrimitive 
    spellID: uint32 = -1
    @MsgPrimitive 
    spellCt: uint32 = -1
    @MsgString (50)
    spellName: string = ""
}

@Message
export class spellValuesFinish {
    @MsgPrimitive
    finish: uint32 = -1
}

@Message
export class spellValuesIncoming {
    @MsgPrimitive
    finish: uint32 = -1
}