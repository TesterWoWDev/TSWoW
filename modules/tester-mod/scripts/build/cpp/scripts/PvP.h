#ifndef SCRIPTS_PVP_H
#define SCRIPTS_PVP_H
#include "TSAll.h"


class TestContainer;

class TestContainer : public TSClass, public std::enable_shared_from_this<TestContainer> {
public:
    using std::enable_shared_from_this<TestContainer>::shared_from_this;
    uint32 guid = 0;

    int16 kills = 1;TSString stringify(int indention = 0) override {
        return JSTR("TestContainer {\n") +spaces(indention+1) + JSTR("guid:")+::stringify(this->guid,indention+1)+JSTR("\n") +spaces(indention+1) + JSTR("kills:")+::stringify(this->kills,indention+1)+JSTR("\n") + spaces(indention) + JSTR("}");
    }
};

extern TSArray<std::shared_ptr<TestContainer>> arr;
void PvP(TSEventHandlers *  events);

const struct ___scripts_PvP_ts {___scripts_PvP_ts();} ____scripts_PvP_ts;
#endif
