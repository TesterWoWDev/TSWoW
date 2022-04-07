export const itemCraftingMessageID = 40;
export class itemCraftingMessage {
    typeID: uint32 = 0;
    gems:TSArray<uint32> = [0,0,0,0,0,0]
    purchase:uint32 = 0

    constructor(typeID: uint32,gems:TSArray<uint32>,purchase:uint32) {
        this.typeID = typeID;
        this.gems = gems;
        this.purchase = purchase;
    }

    read(read: TSPacketRead): void {
        this.typeID = read.ReadUInt32();
        this.gems.pop()
        for(let i=0;i<6;i++)
        {
            this.gems[i] = read.ReadUInt32();
        }
        this.purchase = read.ReadUInt32();
    }

    write(): TSPacketWrite {
        let packet = CreateCustomPacket(itemCraftingMessageID, 0);
        packet.WriteUInt32(this.typeID);
        for(let i=0;i<6;i++)
        {
            packet.WriteUInt32(this.gems[i]);
        }
        packet.WriteUInt32(this.purchase);
        return packet;
    }
}