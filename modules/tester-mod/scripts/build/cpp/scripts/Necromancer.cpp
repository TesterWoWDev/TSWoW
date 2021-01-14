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
    events->SpellID->OnCast(53307, [](auto spell)
    {
        auto player = spell->GetCaster()->ToPlayer();
        auto TSPosition = player->GetRelativePoint(20, 0);
        auto creature = player->SpawnCreature(ID::TESTER_MOD_SKILLSHOT_CREATURE, player->GetX(), player->GetY(), player->GetZ(), player->GetO(), 3, 3000);
        creature->CastSpell(creature, ID::TESTER_MOD_SKILLSHOT_CAST, true);
        creature->MoveTo(1, TSPosition->x, TSPosition->y, TSPosition->z, true);
    }
    );
};



___scripts_Necromancer_ts::___scripts_Necromancer_ts()
{
}

