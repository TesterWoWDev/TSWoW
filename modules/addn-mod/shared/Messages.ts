export const creatureNameMessageID = 1;
export class creatureNameMessage {
    isName: uint32 = 1;
    entry: string = "name";

    constructor(isName:uint32,entry:string) {
        this.isName = isName;
        this.entry = entry;
    }

    read(read: TSPacketRead): void {
        this.isName = read.ReadUInt32();
        this.entry = read.ReadString(); 
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(creatureNameMessageID,50)
        packet.WriteUInt32(this.isName);
        packet.WriteString(this.entry);
        return packet;
    }
}

export const itemLootMessageID = 2;
export class itemLootMessage {
    size: uint32 = 0;
    entryID: uint32 = 0;
    arr: TSArray<TSArray<double>> = [<TSArray<double>>[1,1,1,1]]
    constructor() {
        this.size = 0
        this.entryID = 0
        this.arr = <TSArray<TSArray<double>>>[<TSArray<double>>[1,1,1,1]]
    }
    read(read: TSPacketRead): void {
        this.arr.pop()
        this.size = read.ReadUInt32();
        this.entryID = read.ReadUInt32();
        for(let i=0;i<this.size;i++){
            let id = read.ReadDouble()
            let min = read.ReadDouble()
            let max = read.ReadDouble();
            let dropChance = read.ReadDouble();
            this.arr.push(<TSArray<double>>[id,min,max,dropChance])
        }
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(itemLootMessageID,0)
        packet.WriteUInt32(this.size);
        packet.WriteUInt32(this.entryID);
        for(let i=0;i<this.size;i++){
            packet.WriteDouble(this.arr[i][0])
            packet.WriteDouble(this.arr[i][1])
            packet.WriteDouble(this.arr[i][2])
            packet.WriteDouble(this.arr[i][3])

        }
        return packet;
    }
}

export const creatureNoExistMessageID = 4;
export class creatureNoExistMessage {
    finish: uint32 = 0;

    constructor(finish: uint32) {
        this.finish = finish;
    }

    read(read: TSPacketRead): void {
        this.finish = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(creatureNoExistMessageID,0)
        packet.WriteUInt32(this.finish);
        return packet;
    }
}


export const blackjackPlayerMessageID = 5;
export class blackjackPlayerMessage {
    value: uint32 = 0;
    bet: uint32 = 0;

    constructor(value: uint32, bet: uint32) {
        this.value = value;
        this.bet = bet;
    }

    read(read: TSPacketRead): void {
        this.value = read.ReadUInt32();
        this.bet = read.ReadUInt32(); 
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(blackjackPlayerMessageID,0)
        packet.WriteUInt32(this.value);
        packet.WriteUInt32(this.bet);
        return packet;
    }
}

export const blackjackSendHandMessageID = 6;
export class blackjackSendHandMessage {
    cards: TSArray<uint32> = [0,0,0,0,0,0,0,0,0,0]
    bet: uint32 = 0;

    constructor(cards: TSArray<uint32>, bet: uint32) {
        this.cards = cards;
        this.bet = bet;
    }

    read(read: TSPacketRead): void {
        for(let i=0;i<10;i++)
        this.cards[i] = read.ReadUInt32();
        this.bet = read.ReadUInt32(); 
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(blackjackSendHandMessageID,0)
        for(let i=0;i<10;i++)
        packet.WriteUInt32(this.cards[i]);
        packet.WriteUInt32(this.bet);
        return packet;
    }
}


export const requestClassSpellsMessageID = 7;
export class requestClassSpellsMessage {
    value: uint32 = 0;

    constructor(value: uint32) {
        this.value = value;
    }

    read(read: TSPacketRead): void {
        this.value = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(requestClassSpellsMessageID,0)
        packet.WriteUInt32(this.value);
        return packet;
    }
}

export const sendClassSpellsMessageID = 8;
export class sendClassSpellsMessage {
    level: uint32 = 0;
    spellID: uint32 = 0;

    constructor(level: uint32,spellID: uint32) {
        this.level = level;
        this.spellID = spellID;
    }

    read(read: TSPacketRead): void {
        this.level = read.ReadUInt32();
        this.spellID = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(sendClassSpellsMessageID,0)
        packet.WriteUInt32(this.level);
        packet.WriteUInt32(this.spellID);
        return packet;
    }
}