#include "atlas.h"


void Atlas(TSEventHandlers *  events)
{
    events->Addon->OnMessageID(creatureNameMessage, [](auto player, auto msg)
    {
        auto entry = msg->entry->replace(JSTR("\\"), JSTR(""))->replace(JSTR(";"), JSTR(""))->replace(JSTR("'"), JSTR("'"))->replace(JSTR("/"), JSTR(""))->replace(JSTR("\""), JSTR(""))->replace(JSTR("+"), JSTR(""))->replace(JSTR("-"), JSTR(""));
        console->log(JSTR("Player: ") + player->GetName() + JSTR(" AccountID: ") + player->GetAccountId() + JSTR(" Message: ") + msg->entry + JSTR(" Flag: ") + msg->isName);
        if (entry->get_length() > 0) {
            if (msg->isName == 1) {
                auto query = QueryWorld(JSTR("SELECT entry FROM creature_template WHERE name=\"") + entry + JSTR("\";"));
                while (query->GetRow())
                {
                    entry = query->GetString(0);
                }
            }
            auto check = 0;
            auto query = QueryWorld(JSTR("SELECT * FROM creature_loot_template WHERE Entry=\"") + entry + JSTR("\";"));
            while (query->GetRow())
            {
                auto pkt = std::make_shared<itemLootMessage>();
                pkt->itemID = query->GetUInt32(1);
                pkt->itemCountMin = query->GetInt8(7);
                pkt->itemCountMax = query->GetInt8(8);
                pkt->dropChance = query->GetDouble(3);
                player->SendData(pkt);
                check = 1;
            }
            if (check = 0) {
                player->SendData(std::make_shared<creatureNoExistMessage>());
                return;
            }
        } else {
            player->SendData(std::make_shared<creatureNoExistMessage>());
            return;
        }
        player->SendData(std::make_shared<itemLootFinishMessage>());
    }
    );
};



___livescripts_atlas_ts::___livescripts_atlas_ts()
{
}

