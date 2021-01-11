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
    events->SpellID->OnCast(10, [](auto spell)
    {
        auto player = spell->GetCaster()->ToPlayer();
        auto pX = player->GetX();
        auto pY = player->GetY();
        auto pZ = player->GetZ();
        auto pO = player->GetO();
        auto finalX = pX;
        auto finalY = pY;
        auto finalZ = pZ;
        auto creature = player->SpawnCreature(1, pX, pY, pZ, pO, 1, 10);
        creature->MoveTo(1, finalX, finalY, finalZ, true);
    }
    );
};



___scripts_Necromancer_ts::___scripts_Necromancer_ts()
{
}

