#include "PvP.h"


void PvP(TSEventHandlers *  events)
{
    events->Player->OnDuelStart([](auto player1, auto player2)
    {
        player1->ResetAllCooldowns();
        player2->ResetAllCooldowns();
    }
    );
    events->Player->OnPVPKill([](auto killer, auto killed)
    {
        auto PVPTOKEN = 20880;
        auto AMOUNT = 5;
        killer->AddItem(PVPTOKEN, AMOUNT);
        auto foundIndex = -1;
        auto kills = 1;
        for (auto i = 0; i < arr->get_length(); i++)
        {
            console->log(arr->get(i)->guid);
            console->log(killer->GetGUIDLow());
            if (arr->get(i)->guid == killer->GetGUIDLow()) {
                foundIndex = i;
                arr->get(i)->kills++;
            }
            if (arr->get(i)->guid == killed->GetGUIDLow()) {
                arr->get(i)->kills = 0;
            }
        }
        if (foundIndex > -1) {
            kills = arr->get(foundIndex)->kills;
        } else {
            auto holder = std::make_shared<TestContainer>();
            holder->guid = killer->GetGUIDLow();
            arr->push(holder);
        }
        killer->SendBroadcastMessage(JSTR("|cffff0000[KillTracker] ") + killer->GetName() + JSTR("|r Has Murdered |cffff0000") + killed->GetName() + JSTR("|r In Cold Blood. Current killstreak of ") + kills);
    }
    );
};


TSArray<std::shared_ptr<TestContainer>> arr = TSArray<std::shared_ptr<TestContainer>>();

___scripts_PvP_ts::___scripts_PvP_ts()
{
}

