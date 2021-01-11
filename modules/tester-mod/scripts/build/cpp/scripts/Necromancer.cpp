#include "Necromancer.h"


void NecromancerClass(TSEventHandlers *  events)
{
    events->SpellID->OnCast(ID::TESTER_MOD_CONTROL_0_ATTACK, [](auto spell)
    {
        auto player = spell->GetCaster()->ToPlayer();
        player->CastSpell(player, ID::TESTER_MOD_CONTROL_1_ATTACK, true);
        player->CastSpell(player, ID::TESTER_MOD_CONTROL_2_ATTACK, true);
        player->CastSpell(player, ID::TESTER_MOD_CONTROL_3_ATTACK, true);
    }
    );
    events->SpellID->OnCast(5185, [](auto spell)
    {
        auto distance = 20;
        auto creatureID = 3210;
        auto player = spell->GetCaster()->ToPlayer();
        auto pO = player->GetO();
        auto spawner = player->GetNearestCreature(50000, 0, 0, 0);
        spawner->SpawnCreature(creatureID, player->GetX(), player->GetY(), player->GetZ(), pO, 3, 5000);
        auto creature = player->SpawnCreature(creatureID, player->GetX(), player->GetY(), player->GetZ(), pO, 3, 5000);
        auto TSPosition = player->GetRelativePoint(distance, player->GetO());
    }
    );
};



___scripts_Necromancer_ts::___scripts_Necromancer_ts()
{
}

