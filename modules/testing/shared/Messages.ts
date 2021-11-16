export const spellValuesMessageID = 20;
export class spellValuesMessage {
    spellID: uint32 = -1
    spellCt: uint32 = -1
    spellName: string = ""

    constructor(spellID: uint32,spellCt: uint32,spellName: string) {
        this.spellID = spellID;
        this.spellCt = spellCt;
        this.spellName = spellName;
    }

    read(read: TSPacketRead): void {
        this.spellID = read.ReadUInt32();
        this.spellCt = read.ReadUInt32();
        this.spellName = read.ReadString();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(spellValuesMessageID,0)
        packet.WriteUInt32(this.spellID);
        packet.WriteUInt32(this.spellCt);
        packet.WriteString(this.spellName);
        return packet;
    }
}

export const spellValuesFinishID = 21;
export class spellValuesFinish {
    value: uint32 = 0;

    constructor(value: uint32) {
        this.value = value;
    }

    read(read: TSPacketRead): void {
        this.value = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(spellValuesFinishID,0)
        packet.WriteUInt32(this.value);
        return packet;
    }
}

export const spellValuesIncomingID = 22;
export class spellValuesIncoming {
    value: uint32 = 0;

    constructor(value: uint32) {
        this.value = value;
    }

    read(read: TSPacketRead): void {
        this.value = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(spellValuesIncomingID,0)
        packet.WriteUInt32(this.value);
        return packet;
    }
}