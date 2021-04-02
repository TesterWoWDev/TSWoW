#include "scrapper.h"


void Scrapper(TSEventHandlers *  events)
{
    events->Addon->OnMessageID(bagSlotMessage, [](auto player, auto msg)
    {
        auto charItems = player->GetData()->template GetObject<ScrapperItems>(ModID(),JSTR("ScrapperItems"),[&](){ return std::make_shared<ScrapperItems>();});
        auto selectedItems = charItems->selectedItems;
        auto found = false;
        if (selectedItems->get_length() < 12) {
            for (auto i = 0; i < selectedItems->get_length(); i++)
            {
                if ((msg->Bag == (const_(selectedItems))[i]->Bag) && (msg->Slot == (const_(selectedItems))[i]->Slot)) {
                    found = true;
                    player->SendAreaTriggerMessage(JSTR("That item is already in the scrapper!"));
                    break;
                }
            }
            auto pkt = std::make_shared<bagSlotMessage>();
            pkt->Bag = msg->Bag;
            pkt->Slot = msg->Slot;
            if (!found) {
                pkt->itemID = msg->itemID;
                selectedItems->push(pkt);
                player->GetData()->SetObject<ScrapperItems>(ModID(),JSTR("ScrapperItems"),charItems);
            }
            player->SendData(pkt);
        } else {
            player->SendAreaTriggerMessage(JSTR("You have already filled the scrapper!"));
        }
    }
    );
    events->Addon->OnMessageID(frameCloseMessage, [](auto player, auto msg)
    {
        player->GetData()->SetObject<ScrapperItems>(ModID(),JSTR("ScrapperItems"),std::make_shared<ScrapperItems>());
    }
    );
    events->Addon->OnMessageID(scrapMessage, [](auto player, auto msg)
    {
        auto charItems = player->GetData()->template GetObject<ScrapperItems>(ModID(),JSTR("ScrapperItems"),[&](){ return std::make_shared<ScrapperItems>();});
        if (charItems->selectedItems->get_length() > 0) {
            auto itemLevel = 0;
            for (auto i = 0; i < charItems->selectedItems->get_length(); i++)
            {
                auto itemID = const_(charItems->selectedItems)[i]->itemID;
                auto item = player->GetItemByEntry(itemID);
                auto count = item->GetCount();
                itemLevel = item->GetItemLevel() + itemLevel;
                player->RemoveItem(item, count, itemID);
            }
            while (itemLevel > 0)
            {
                if (itemLevel > 10000) {
                    itemLevel = itemLevel - 10000;
                    player->SendBroadcastMessage(JSTR("You scrapped up a taco"));
                } else if (itemLevel > 5000) {
                    itemLevel = itemLevel - 5000;
                    player->SendBroadcastMessage(JSTR("You scrapped up a taco"));
                } else if (itemLevel > 1000) {
                    itemLevel = itemLevel - 1000;
                    player->SendBroadcastMessage(JSTR("You scrapped up a taco"));
                } else {
                    player->ModifyMoney(itemLevel * 10000);
                    player->SendBroadcastMessage(JSTR("You scrapped up ") + itemLevel + JSTR(" gold"));
                    itemLevel = 0;
                }
            }
        } else {
            player->SendAreaTriggerMessage(JSTR("You need to fill the scrapper!"));
        }
        player->GetData()->SetObject<ScrapperItems>(ModID(),JSTR("ScrapperItems"),std::make_shared<ScrapperItems>());
    }
    );
};



___livescripts_scrapper_ts::___livescripts_scrapper_ts()
{
}

