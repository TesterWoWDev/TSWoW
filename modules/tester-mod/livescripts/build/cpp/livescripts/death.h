#ifndef LIVESCRIPTS_DEATH_H
#define LIVESCRIPTS_DEATH_H
#include "TSAll.h"
#include "ModID.h"


class itemDef;
class PlayerItemHolder;

class itemDef : public TSClass, public std::enable_shared_from_this<itemDef> {
public:
    using std::enable_shared_from_this<itemDef>::shared_from_this;
    uint32 itemEntry = 0;

    uint32 itemCount = 0;TSString stringify(int indention = 0) override {
        return JSTR("itemDef {\n") +spaces(indention+1) + JSTR("itemEntry:")+::stringify(this->itemEntry,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("itemCount:")+::stringify(this->itemCount,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

class PlayerItemHolder : public TSClass, public std::enable_shared_from_this<PlayerItemHolder> {
public:
    using std::enable_shared_from_this<PlayerItemHolder>::shared_from_this;
    uint32 guid = 0;

    uint32 gold = 0;

    TSArray<std::shared_ptr<itemDef>> items = TSArray<std::shared_ptr<itemDef>>();TSString stringify(int indention = 0) override {
        return JSTR("PlayerItemHolder {\n") +spaces(indention+1) + JSTR("guid:")+::stringify(this->guid,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("gold:")+::stringify(this->gold,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("items:")+::stringify(this->items,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

extern TSArray<std::shared_ptr<PlayerItemHolder>> arrOfPlayerLoot;
void onDeath(TSEventHandlers *  events);

const struct ___livescripts_death_ts {___livescripts_death_ts();} ____livescripts_death_ts;
#endif
