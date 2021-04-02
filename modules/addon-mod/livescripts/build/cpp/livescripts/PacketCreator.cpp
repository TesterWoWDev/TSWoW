#pragma once
#include "ModID.h"
#include "..\shared\Messages.h"
void WritePackets(){
    RegisterMessage(ModID(),1,35,[](uint8_t *arr){auto v = std::make_shared<creatureNameMessage>();v->Read(arr); return v;});
    RegisterMessage(ModID(),2,20,[](uint8_t *arr){auto v = std::make_shared<itemLootMessage>();v->Read(arr); return v;});
    RegisterMessage(ModID(),3,4,[](uint8_t *arr){auto v = std::make_shared<itemLootFinishMessage>();v->Read(arr); return v;});
    RegisterMessage(ModID(),4,4,[](uint8_t *arr){auto v = std::make_shared<creatureNoExistMessage>();v->Read(arr); return v;});
    RegisterMessage(ModID(),5,12,[](uint8_t *arr){auto v = std::make_shared<bagSlotMessage>();v->Read(arr); return v;});
    RegisterMessage(ModID(),6,4,[](uint8_t *arr){auto v = std::make_shared<frameCloseMessage>();v->Read(arr); return v;});
    RegisterMessage(ModID(),7,4,[](uint8_t *arr){auto v = std::make_shared<scrapMessage>();v->Read(arr); return v;});
}
