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
        auto distance = 20;
        auto creatureID = ID::TESTER_MOD_SCARAB_POISON_CREATURE;
        auto despawnTime = 3000;
        auto player = spell->GetCaster()->ToPlayer();
        auto TSPosition = player->GetRelativePoint(distance, 0);
        auto creature = player->SpawnCreature(creatureID, player->GetX(), player->GetY(), player->GetZ(), player->GetO(), 3, despawnTime);
        creature->CastSpell(creature, ID::TESTER_MOD_SCARAB_POISON_SPELL, true);
        creature->MoveTo(1, TSPosition->x, TSPosition->y, TSPosition->z, true);
    }
    );
};



___scripts_Necromancer_ts::___scripts_Necromancer_ts()
{
}

