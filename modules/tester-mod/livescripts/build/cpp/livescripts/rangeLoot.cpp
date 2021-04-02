#include "rangeLoot.h"


void rangeLoot(TSEventHandlers *  events)
{
    events->Player->OnCreatureKill([](auto player, auto corpse)
    {
        auto inRange = corpse->GetCreaturesInRange(10, 0, 0, 2);
        auto corpseLoot = corpse->GetLoot();
        for (auto i = 0; i < inRange->get_length(); i++)
        {
            if (((const_(inRange))[i]->GetLootRecipient()->GetGUIDLow() == player->GetGUIDLow()) || ((const_(inRange))[i]->GetLootRecipientGroup()->GetGUID() == player->GetGroup()->GetGUID())) {
                auto curCorpse = (const_(inRange))[i]->GetLoot();
                corpse->GetLoot()->SetMoney(corpse->GetLoot()->GetMoney() + curCorpse->GetMoney());
                for (auto j = 0; j < curCorpse->GetItemCount(); j++)
                {
                    auto item = curCorpse->GetItem(j);
                    auto ID = item->GetItemID();
                    auto count = item->GetCount();
                    corpseLoot->AddItem(ID, count, count);
                }
                curCorpse->Clear();
            }
        }
        for (auto i = 0; i < corpseLoot->GetItemCount(); i++)
        {
            auto curItem = corpseLoot->GetItem(i);
            for (auto j = i + 1; j < corpseLoot->GetItemCount(); j++)
            {
                auto cItem = corpseLoot->GetItem(j);
                if (cItem->GetCount() > 0) {
                    if (curItem->GetItemID() == cItem->GetItemID()) {
                        curItem->SetCount(curItem->GetCount() + cItem->GetCount());
                        cItem->SetCount(0);
                    }
                }
            }
        }
    }
    );
};



___livescripts_rangeLoot_ts::___livescripts_rangeLoot_ts()
{
}

