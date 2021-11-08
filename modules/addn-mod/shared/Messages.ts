export const creatureNameMessageID = 1;
export class creatureNameMessage {
    isName: uint32 = 1;
    entry: string = "name";

    constructor(isName: uint32, entry: string) {
        this.isName = isName;
        this.entry = entry;
    }

    read(read: TSPacketRead): void {
        this.isName = read.ReadUInt32();
        this.entry = read.ReadString(); 
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(creatureNameMessageID,40)
        packet.WriteUInt32(this.isName);
        packet.WriteString(this.entry);
        return packet;
    }
}

export const itemLootMessageID = 2;
export class itemLootMessage {
    itemID: uint32 = 0;
    itemCountMin: uint32 = 0;
    itemCountMax: uint32 = 0;
    dropChance: double = 0;
    constructor(itemID: uint32, itemCountMin: uint32,itemCountMax: uint32,dropChance: double) {
        this.itemID = itemID;
        this.itemCountMin = itemCountMin;
        this.itemCountMax = itemCountMax;
        this.dropChance = dropChance;
    }

    read(read: TSPacketRead): void {
        this.itemID = read.ReadUInt32();
        this.itemCountMin = read.ReadUInt32();
        this.itemCountMax = read.ReadUInt32();
        this.dropChance = read.ReadDouble();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(creatureNameMessageID,20)
        packet.WriteUInt32(this.itemID);
        packet.WriteUInt32(this.itemCountMin);
        packet.WriteUInt32(this.itemCountMax);
        packet.WriteDouble(this.dropChance);
        return packet;
    }
}

export const itemLootFinishMessageID = 3;
export class itemLootFinishMessage {
    entry: uint32 = 0;

    constructor(entry: uint32) {
        this.entry = entry;
    }

    read(read: TSPacketRead): void {
        this.entry = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = MakeCustomPacket(creatureNameMessageID,5)
        packet.WriteUInt32(this.entry);
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
        let packet = MakeCustomPacket(creatureNameMessageID,5)
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
        let packet = MakeCustomPacket(creatureNameMessageID,40)
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
        let packet = MakeCustomPacket(creatureNameMessageID,40)
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
        let packet = MakeCustomPacket(creatureNameMessageID,5)
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
        let packet = MakeCustomPacket(creatureNameMessageID,5)
        packet.WriteUInt32(this.level);
        packet.WriteUInt32(this.spellID);
        return packet;
    }
}