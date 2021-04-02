#include "manaSystem.h"


void manaSystem(TSEventHandlers *  events)
{
    events->Player->OnCreatureKill([](auto killer, auto killed)
    {
        auto rand = randNum(100000);
        auto Synthesized = 1;
        auto Purified = 1;
        auto Pristine = 1;
        auto Unstable = 1;
        auto Wild = 1;
        if (rand <= 1) {
            killed->GetLoot()->AddItem(Wild, 1, 1);
        } else if (rand < 500) {
            killed->GetLoot()->AddItem(Unstable, 1, 1);
        } else if (rand < 1000) {
            killed->GetLoot()->AddItem(Pristine, 1, 1);
        } else if (rand < 10000) {
            killed->GetLoot()->AddItem(Purified, 1, 2);
        } else if (rand == 50000) {
            killed->GetLoot()->AddItem(Synthesized, 1, 3);
        }
    }
    );
};


uint32 randNum(uint32 max)
{
    return Math->floor(Math->random() * max);
};



___livescripts_manaSystem_ts::___livescripts_manaSystem_ts()
{
}

