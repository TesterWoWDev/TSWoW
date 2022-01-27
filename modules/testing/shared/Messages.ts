export const spellChoicesID = 21;
export class spellChoices {
    spellIDs: TSArray<uint32> = [1]
    spellRanks: TSArray<uint32> = [1]
    spellDescs: TSArray<string> = [""]
    constructor(spellIDs: TSArray<uint32>, spellRanks: TSArray<uint32>,spellDescs: TSArray<string> ) {
        this.spellIDs = spellIDs;
        this.spellRanks = spellRanks;
        this.spellDescs = spellDescs
    }

    read(read: TSPacketRead): void {
        for (let i = 0; i < 3; i++) {
            this.spellIDs.push(read.ReadUInt32())
            this.spellRanks.push(read.ReadUInt32())
            this.spellDescs.push(read.ReadString())
        }
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(spellChoicesID, 2000)
        for (let i = 0; i < 3; i++) {
            packet.WriteUInt32(this.spellIDs[i])
            packet.WriteUInt32(this.spellRanks[i])
            packet.WriteString(this.spellDescs[i])
        }
        return packet;
    }
}

export const spellChoiceID = 22;
export class spellChoice {
    choice: uint32 = 1;

    constructor(choice: uint32) {
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