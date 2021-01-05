#ifndef SCRIPTS_TESTER_MOD_SCRIPTS_H
#define SCRIPTS_TESTER_MOD_SCRIPTS_H
#include "TSAll.h"
#include "./ID.h"


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
#include "TableCreator.h"
extern "C" 
{
    __declspec(dllexport) void Main(TSEventHandlers*);
    __declspec(dllexport) char const* GetScriptModuleRevisionHash()
    {
        return "e105d3bbef";
    }
    __declspec(dllexport) void AddTSScripts(TSEventHandlers* handlers)
    {
        WriteTables();
        Main(handlers);
    }
    __declspec(dllexport) void AddScripts(){}
    __declspec(dllexport) char const* GetScriptModule()
    {
        return "0.42655957645038356";
    }
    __declspec(dllexport) char const* GetBuildDirective()
    {
        return "Release";
    }
};

const struct ___scripts_tester_mod_scripts_ts {___scripts_tester_mod_scripts_ts();} ____scripts_tester_mod_scripts_ts;
#endif
