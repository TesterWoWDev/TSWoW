#include "tester_mod_scripts.h"


void Main(TSEventHandlers *  events)
{
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
    events->Player->OnDuelStart([](auto player1, auto player2)
    {
        player1->ResetAllCooldowns();
        player2->ResetAllCooldowns();
    }
    );
    events->Player->OnLevelChanged([](auto player, auto oldLevel)
    {
        player->SendAreaTriggerMessage(JSTR("Congrats on leveling up to ") + player->GetLevel() + JSTR("!"));
        auto level = player->GetLevel();
        if (level % 5 == 0) {
            player->ModifyMoney(100);
            player->AddItem(20880, level / 5);
        }
        if (level == 80) {
            player->SendBroadcastMessage(JSTR("|cffffffff[LevelTracker]|r ") + player->GetName() + JSTR(" Has Reached Max Level! Congrats ") + player->GetName() + JSTR(" on reaching ") + player->GetLevel() + JSTR("!"));
        }
    }
    );
    events->SpellID->OnCast(ID::TESTER_MOD_CONTROL_0_ATTACK, [](auto spell)
    {
        auto player = spell->GetCaster()->ToPlayer();
        player->CastSpell(player, ID::TESTER_MOD_CONTROL_1_ATTACK, true);
        player->CastSpell(player, ID::TESTER_MOD_CONTROL_2_ATTACK, true);
        player->CastSpell(player, ID::TESTER_MOD_CONTROL_3_ATTACK, true);
    }
    );
};


TSArray<std::shared_ptr<TestContainer>> arr = TSArray<std::shared_ptr<TestContainer>>();

___scripts_tester_mod_scripts_ts::___scripts_tester_mod_scripts_ts()
{
}

