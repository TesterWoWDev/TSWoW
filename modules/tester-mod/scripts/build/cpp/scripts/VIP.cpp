#include "VIP.h"


void VIP(TSEventHandlers *  events)
{
    events->Player->OnSay([](auto player, auto type, auto lang, auto msg)
    {
        if (msg->get()->startsWith(JSTR("#buff"))) {
            player->CastSpell(player, 58054, true);
        } else if (msg->get()->startsWith(JSTR("#mall"))) {
            player->Teleport(0, -8833, 628, 94, 1);
        } else if (msg->get()->startsWith(JSTR("#gift"))) {
            player->AddItem(2589, 1);
        }
    }
    );
    events->Player->OnGiveXP([](auto player, auto amount, auto victim)
    {
        auto query = QueryAuth(JSTR("SELECT multiplier FROM vip_list WHERE accID = ") + player->GetAccountId());
        while (query->GetRow())
        {
            amount->set(amount->get() * query->GetFloat(0));
        }
    }
    );
};



___scripts_VIP_ts::___scripts_VIP_ts()
{
}

