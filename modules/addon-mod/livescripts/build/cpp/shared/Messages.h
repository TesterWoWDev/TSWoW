#ifndef SHARED_MESSAGES_H
#define SHARED_MESSAGES_H
#include "TSAll.h"
#include "../livescripts/ModID.h"


class creatureNameMessage;
class itemLootMessage;
class itemLootFinishMessage;
class creatureNoExistMessage;
class bagSlotMessage;
class frameCloseMessage;
class scrapMessage;

class creatureNameMessage : public TSClass, public std::enable_shared_from_this<creatureNameMessage> {
public:
    using std::enable_shared_from_this<creatureNameMessage>::shared_from_this;
    TSString entry = JSTR("name");

    uint32 isName = 1;

    static uint32_t GetID() { return 1;}

    void Write(uint8_t *arr){
        BinReader<uint8_t> r(arr,35);
        r.WriteString(0,entry,30);
        r.Write<uint32>(31,isName);
    }

    void Read(uint8_t *arr){
        BinReader<uint8_t> r(arr,35);
        entry = r.ReadString(0,30);
        isName = r.Read<uint32>(31);
    }

    uint16_t opcode() { return 1; }
    uint8_t GetSize() { return 35; }
    TSString stringify(int indention = 0) override {
        return JSTR("creatureNameMessage {\n") +spaces(indention+1) + JSTR("entry:\"")+::stringify(this->entry,indention+1)+JSTR("\"\n") +spaces(indention+1) + JSTR("isName:")+::stringify(this->isName,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

class itemLootMessage : public TSClass, public std::enable_shared_from_this<itemLootMessage> {
public:
    using std::enable_shared_from_this<itemLootMessage>::shared_from_this;
    uint32 itemID = 0;

    uint32 itemCountMin = 0;

    uint32 itemCountMax = 0;

    double dropChance = 0;

    static uint32_t GetID() { return 2;}

    void Write(uint8_t *arr){
        BinReader<uint8_t> r(arr,20);
        r.Write<uint32>(0,itemID);
        r.Write<uint32>(4,itemCountMin);
        r.Write<uint32>(8,itemCountMax);
        r.WriteDouble(12,dropChance);
    }

    void Read(uint8_t *arr){
        BinReader<uint8_t> r(arr,20);
        itemID = r.Read<uint32>(0);
        itemCountMin = r.Read<uint32>(4);
        itemCountMax = r.Read<uint32>(8);
        dropChance = r.ReadDouble(12);
    }

    uint16_t opcode() { return 2; }
    uint8_t GetSize() { return 20; }
    TSString stringify(int indention = 0) override {
        return JSTR("itemLootMessage {\n") +spaces(indention+1) + JSTR("itemID:")+::stringify(this->itemID,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("itemCountMin:")+::stringify(this->itemCountMin,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("itemCountMax:")+::stringify(this->itemCountMax,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("dropChance:")+::stringify(this->dropChance,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

class itemLootFinishMessage : public TSClass, public std::enable_shared_from_this<itemLootFinishMessage> {
public:
    using std::enable_shared_from_this<itemLootFinishMessage>::shared_from_this;
    uint32 finish = 0;

    static uint32_t GetID() { return 3;}

    void Write(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        r.Write<uint32>(0,finish);
    }

    void Read(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        finish = r.Read<uint32>(0);
    }

    uint16_t opcode() { return 3; }
    uint8_t GetSize() { return 4; }
    TSString stringify(int indention = 0) override {
        return JSTR("itemLootFinishMessage {\n") +spaces(indention+1) + JSTR("finish:")+::stringify(this->finish,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

class creatureNoExistMessage : public TSClass, public std::enable_shared_from_this<creatureNoExistMessage> {
public:
    using std::enable_shared_from_this<creatureNoExistMessage>::shared_from_this;
    uint32 finish = 0;

    static uint32_t GetID() { return 4;}

    void Write(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        r.Write<uint32>(0,finish);
    }

    void Read(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        finish = r.Read<uint32>(0);
    }

    uint16_t opcode() { return 4; }
    uint8_t GetSize() { return 4; }
    TSString stringify(int indention = 0) override {
        return JSTR("creatureNoExistMessage {\n") +spaces(indention+1) + JSTR("finish:")+::stringify(this->finish,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

class bagSlotMessage : public TSClass, public std::enable_shared_from_this<bagSlotMessage> {
public:
    using std::enable_shared_from_this<bagSlotMessage>::shared_from_this;
    uint32 Bag = 1;

    uint32 Slot = 1;

    uint32 itemID = 0;

    static uint32_t GetID() { return 5;}

    void Write(uint8_t *arr){
        BinReader<uint8_t> r(arr,12);
        r.Write<uint32>(0,Bag);
        r.Write<uint32>(4,Slot);
        r.Write<uint32>(8,itemID);
    }

    void Read(uint8_t *arr){
        BinReader<uint8_t> r(arr,12);
        Bag = r.Read<uint32>(0);
        Slot = r.Read<uint32>(4);
        itemID = r.Read<uint32>(8);
    }

    uint16_t opcode() { return 5; }
    uint8_t GetSize() { return 12; }
    TSString stringify(int indention = 0) override {
        return JSTR("bagSlotMessage {\n") +spaces(indention+1) + JSTR("Bag:")+::stringify(this->Bag,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("Slot:")+::stringify(this->Slot,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("itemID:")+::stringify(this->itemID,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

class frameCloseMessage : public TSClass, public std::enable_shared_from_this<frameCloseMessage> {
public:
    using std::enable_shared_from_this<frameCloseMessage>::shared_from_this;
    uint32 Close = 1;

    static uint32_t GetID() { return 6;}

    void Write(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        r.Write<uint32>(0,Close);
    }

    void Read(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        Close = r.Read<uint32>(0);
    }

    uint16_t opcode() { return 6; }
    uint8_t GetSize() { return 4; }
    TSString stringify(int indention = 0) override {
        return JSTR("frameCloseMessage {\n") +spaces(indention+1) + JSTR("Close:")+::stringify(this->Close,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

class scrapMessage : public TSClass, public std::enable_shared_from_this<scrapMessage> {
public:
    using std::enable_shared_from_this<scrapMessage>::shared_from_this;
    uint32 Close = 1;

    static uint32_t GetID() { return 7;}

    void Write(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        r.Write<uint32>(0,Close);
    }

    void Read(uint8_t *arr){
        BinReader<uint8_t> r(arr,4);
        Close = r.Read<uint32>(0);
    }

    uint16_t opcode() { return 7; }
    uint8_t GetSize() { return 4; }
    TSString stringify(int indention = 0) override {
        return JSTR("scrapMessage {\n") +spaces(indention+1) + JSTR("Close:")+::stringify(this->Close,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

const struct ___shared_Messages_ts {___shared_Messages_ts();} ____shared_Messages_ts;
#endif
