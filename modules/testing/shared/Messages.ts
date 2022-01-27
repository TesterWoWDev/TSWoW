export const spellValuesMessageID = 20;
export class spellValuesMessage {
    size: uint32 = 1;
    spellIDs: TSArray<uint32> = [1]
    spellCts: TSArray<uint32> = [1]
    constructor(size:uint32, spellIDs: TSArray<uint32>, spellCts: TSArray<uint32>) {
        this.size = size;
        this.spellIDs = spellIDs;
        this.spellCts = spellCts;
    }

    read(read: TSPacketRead): void {
        this.size = read.ReadUInt32();
        for(let i=0;i<this.size;i++){
            this.spellIDs.push(read.ReadUInt32())
            this.spellCts.push(read.ReadUInt32())            
        }
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(spellValuesMessageID, 0)
        packet.WriteUInt32(this.size)
        for(let i=0;i<this.size;i++){
            packet.WriteUInt32(this.spellIDs[i])
            packet.WriteUInt32(this.spellCts[i])
        }
        return packet;
    }
}

export const spellChoicesID = 21;
export class spellChoices {
    spellIDs: TSArray<uint32> = [1]
    constructor(spellIDs: TSArray<uint32>) {
        this.spellIDs = spellIDs;
    }

    read(read: TSPacketRead): void {
        for(let i=0;i<3;i++){
            this.spellIDs.push(read.ReadUInt32())        
        }
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(spellChoicesID, 0)
        for(let i=0;i<3;i++){
            packet.WriteUInt32(this.spellIDs[i])
        }
        return packet;
    }
}

export const spellChoiceID = 22;
export class spellChoice {
    choice: uint32 = 1;

    constructor(choice:uint32) {
        this.choice = choice;
    }

    read(read: TSPacketRead): void {
        this.choice = read.ReadUInt32();

    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(spellChoiceID, 0)
        packet.WriteUInt32(this.choice)
        return packet;
    }
}