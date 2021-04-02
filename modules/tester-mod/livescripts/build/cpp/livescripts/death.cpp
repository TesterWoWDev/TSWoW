#include "death.h"


void onDeath(TSEventHandlers *  events)
{
    events->Player->OnPlayerKilledByCreature([](auto killer, auto player)
    {
        auto chestID = 179697;
        auto despawnTime = 30;
        auto item = player->GetItemByPos(0, 0);
        auto chest = player->SummonGameObject(chestID, player->GetX(), player->GetY(), player->GetZ(), player->GetO(), despawnTime);
        auto container = std::make_shared<PlayerItemHolder>();
        container->gold = player->GetMoney();
        container->guid = chest->GetGUIDLow();
        player->ModifyMoney(-9999999999ll);
        auto itemsHolder = TSArray<std::shared_ptr<itemDef>>();
        for (auto x = 19; x <= 22; x++)
        {
            for (auto i = 0; i <= 35; ++i)
            {
                item = player->GetItemByPos(x, i);
                if (!item->IsNull()) {
                    auto itemP = std::make_shared<itemDef>();
                    itemP->itemCount = item->GetCount();
                    itemP->itemEntry = item->GetEntry();
                    itemsHolder->push(itemP);
                    player->RemoveItem(item, item->GetCount(), item->GetEntry());
                }
            }
        }
        for (auto x = 67; x <= 74; x++)
        {
            for (auto i = 0; i <= 35; ++i)
            {
                item = player->GetItemByPos(x, i);
                if (!item->IsNull()) {
                    auto itemP = std::make_shared<itemDef>();
                    itemP->itemCount = item->GetCount();
                    itemP->itemEntry = item->GetEntry();
                    itemsHolder->push(itemP);
                    player->RemoveItem(item, item->GetCount(), item->GetEntry());
                }
            }
        }
        for (auto i = 0; i <= 118; i++)
        {
            item = player->GetItemByPos(255, i);
            if (!item->IsNull()) {
                auto itemP = std::make_shared<itemDef>();
                itemP->itemCount = item->GetCount();
                itemP->itemEntry = item->GetEntry();
                itemsHolder->push(itemP);
                player->RemoveItem(item, item->GetCount(), item->GetEntry());
            }
        }
        container->items = itemsHolder;
        arrOfPlayerLoot->push(container);
    }
    );
    events->GameObjects->OnGenerateLoot([](auto obj, auto player)
    {
        if (obj->GetEntry() == 179697) {
            obj->GetLoot()->Clear();
            for (auto i = 0; i < arrOfPlayerLoot->get_length(); i++)
            {
                if (obj->GetGUIDLow() == arrOfPlayerLoot->get(i)->guid) {
                    obj->GetLoot()->SetMoney(arrOfPlayerLoot->get(i)->gold);
                    for (auto v = 0; v < arrOfPlayerLoot->get(i)->items->get_length(); v++)
                    {
                        auto item = arrOfPlayerLoot->get(i)->items->get(v);
                        obj->GetLoot()->AddItem(item->itemEntry, item->itemCount, item->itemCount);
                    }
                    break;
                }
            }
        }
    }
    );
};


TSArray<std::shared_ptr<PlayerItemHolder>> arrOfPlayerLoot = TSArray<std::shared_ptr<PlayerItemHolder>>();

___livescripts_death_ts::___livescripts_death_ts()
{
}

