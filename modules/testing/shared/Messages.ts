export const spellValuesMessageID = 20;
export class spellValuesMessage {
    spellID: uint32 = -1
    spellCt: uint32 = -1
    spellName: string = ""

    constructor(spellID: uint32, spellCt: uint32, spellName: string) {
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
        let packet = MakeCustomPacket(spellValuesMessageID, 0)
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
        let packet = MakeCustomPacket(spellValuesFinishID, 0)
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
        let packet = MakeCustomPacket(spellValuesIncomingID, 0)
        packet.WriteUInt32(this.value);
        return packet;
    }
}

export const attemptToCompleteID = 23;
export class attemptToComplete {
    msg: uint32 = 0;

    constructor(msg: uint32) {
        this.msg = msg;
    }

    read(read: TSPacketRead): void {
        this.msg = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(attemptToCompleteID, 0)
        packet.WriteUInt32(this.msg);
        return packet;
    }
}

export const questInfoID = 24;
export class questInfo {
    reqType: uint8 = 0
    reqID: uint32 = 0
    reqCountTotal: uint8 = 0
    reqCountCur: uint8 = 0
    reqName: string = ""
    reqDescription: string = "";
    rewID: uint32 = 0
    rewCount: uint32 = 0

    constructor(reqType: uint8, reqID: uint32, reqCountTotal: uint8, reqCountCur: uint8, reqName: string, reqDescription: string, rewID: uint32, rewCount: uint32) {
        this.reqType = reqType
        this.reqID = reqID
        this.reqCountTotal = reqCountTotal
        this.reqCountCur = reqCountCur
        this.reqName = reqName
        this.reqDescription = reqDescription
        this.rewID = rewID
        this.rewCount = rewCount
    }

    read(read: TSPacketRead): void {
        this.reqType = read.ReadUInt8()
        this.reqID = read.ReadUInt32()
        this.reqCountTotal = read.ReadUInt8()
        this.reqCountCur = read.ReadUInt8()
        this.reqName = read.ReadString()
        this.reqDescription = read.ReadString()
        this.rewID = read.ReadUInt32()
        this.rewCount = read.ReadUInt32()
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(questInfoID, 0)
        packet.WriteUInt8(this.reqType);
        packet.WriteUInt32(this.reqID)
        packet.WriteUInt8(this.reqCountTotal)
        packet.WriteUInt8(this.reqCountCur)
        packet.WriteString(this.reqName)
        packet.WriteString(this.reqDescription)
        packet.WriteUInt32(this.rewID)
        packet.WriteUInt32(this.rewCount)
        return packet;
    }
}