#include "Killstreak.h"


PlayerKillstreak::PlayerKillstreak(uint32 playerGUID) : DBTable() {
    this->playerGUID = playerGUID;
}

void Killstreaks(TSEventHandlers *  events)
{
    events->Player->OnPVPKill([](auto killer, auto killed)
    {
        auto killCount = killer->GetData()->template GetObject<PlayerKillstreak>(ModID(),TABLE_NAME_KILLSTREAK,[&](){ return std::make_shared<PlayerKillstreak>(killer->GetGUIDLow());})->killCount++;
        killed->GetData()->template GetObject<PlayerKillstreak>(ModID(),TABLE_NAME_KILLSTREAK,[&](){ return std::make_shared<PlayerKillstreak>(killed->GetGUIDLow());})->killCount = 0;
        SendWorldMessage(JSTR("|cffff0000[KillTracker] ") + killer->GetName() + JSTR("|r Has Murdered |cffff0000") + killed->GetName() + JSTR("|r In Cold Blood. Current killstreak of ") + (killCount + 1));
        killer->GetData()->template GetObject<PlayerKillstreak>(ModID(),TABLE_NAME_KILLSTREAK,[&](){ return std::make_shared<PlayerKillstreak>(killer->GetGUIDLow());})->save();
        killed->GetData()->template GetObject<PlayerKillstreak>(ModID(),TABLE_NAME_KILLSTREAK,[&](){ return std::make_shared<PlayerKillstreak>(killed->GetGUIDLow());})->save();
    }
    );
};


TSString TABLE_NAME_KILLSTREAK = JSTR("playerkillstreak");

___livescripts_Killstreak_ts::___livescripts_Killstreak_ts()
{
}

