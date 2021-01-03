#include "tester_mod_scripts.h"


void Main(TSEventHandlers *  events)
{
    events->Player->OnPVPKill([](auto killer, auto killed)
    {
        auto PVPTOKEN = 20880;
        auto AMOUNT = 5;
        killer->AddItem(PVPTOKEN, AMOUNT);
        arr->set(killer->GetGUIDLow(), std::make_shared<TestContainer>());
        console->log(arr->get(killer->GetGUIDLow()));
        killer->SendBroadcastMessage(JSTR("|cffff0000[KillTracker] ") + killer->GetName() + JSTR("|r Has Murdered |cffff0000") + killed->GetName() + JSTR("|r In Cold Blood. Current killstreak of ") + arr->get(killer->GetGUIDLow())->kills);
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
        player->SendAreaTriggerMessage(JSTR("Congrats on leveling up!"));
        auto level = player->GetLevel();
        if (level % 5 == 0) {
            player->ModifyMoney(100);
            player->AddItem(20880, level / 5);
        }
        if (level == 80) {
            player->SendBroadcastMessage(JSTR("|cffffffff[LevelTracker]|r ") + player->GetName() + JSTR(" Has Reached Max Level! Congrats ") + player->GetName() + JSTR("!"));
        }
    }
    );
    events->Spells->OnCast(ID::TESTER_MOD_CONTROL_0_ATTACK, [](auto spell)
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

