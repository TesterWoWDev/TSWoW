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