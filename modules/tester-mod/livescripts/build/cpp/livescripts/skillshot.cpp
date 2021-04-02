#include "skillshot.h"


void Skillshot(TSEventHandlers *  events)
{
    events->SpellID->OnCast(53307, [](auto spell)
    {
        auto player = spell->GetCaster()->ToPlayer();
        auto TSPosition = player->GetRelativePoint(20, 0);
        auto creature = player->SpawnCreature(ID::TESTER_MOD_SKILLSHOT_CREATURE, player->GetX(), player->GetY(), player->GetZ(), player->GetO(), 3, 3000);
        creature->SetLevel(player->GetLevel());
        creature->CastSpell(creature, ID::TESTER_MOD_SKILLSHOT_CAST, true);
        creature->CastSpell(creature, 51019, true);
        creature->MoveTo(1, TSPosition->x, TSPosition->y, TSPosition->z, true);
        creature->SetDisplayId(11686);
    }
    );
};



___livescripts_skillshot_ts::___livescripts_skillshot_ts()
{
}

