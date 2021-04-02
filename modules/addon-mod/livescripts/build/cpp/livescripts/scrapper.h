#ifndef LIVESCRIPTS_SCRAPPER_H
#define LIVESCRIPTS_SCRAPPER_H
#include "TSAll.h"
#include "ModID.h"
#include "../shared/Messages.h"


class ScrapperItems;

class ScrapperItems : public TSClass, public std::enable_shared_from_this<ScrapperItems> {
public:
    using std::enable_shared_from_this<ScrapperItems>::shared_from_this;
    TSArray<std::shared_ptr<bagSlotMessage>> selectedItems;TSString stringify(int indention = 0) override {
        return JSTR("ScrapperItems {\n") +spaces(indention+1) + JSTR("selectedItems:")+::stringify(this->selectedItems,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

void Scrapper(TSEventHandlers *  events);

const struct ___livescripts_scrapper_ts {___livescripts_scrapper_ts();} ____livescripts_scrapper_ts;
#endif
