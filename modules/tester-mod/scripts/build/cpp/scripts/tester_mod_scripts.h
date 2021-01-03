#ifndef SCRIPTS_TESTER_MOD_SCRIPTS_H
#define SCRIPTS_TESTER_MOD_SCRIPTS_H
#include "TSAll.h"
#include "./ID.h"


class TestClass;
class TestContainer;

class TestClass : public TSClass, public std::enable_shared_from_this<TestClass> {
public:
    using std::enable_shared_from_this<TestClass>::shared_from_this;
    uint32 guid = 0;

    int16 kills = 1;
};

class TestContainer : public TSClass, public std::enable_shared_from_this<TestContainer> {
public:
    using std::enable_shared_from_this<TestContainer>::shared_from_this;
    std::shared_ptr<TestClass> inner = std::make_shared<TestClass>();
};

extern TSArray<std::shared_ptr<TestContainer>> arr;
extern "C" 
{
    __declspec(dllexport) void Main(TSEventHandlers*);
    __declspec(dllexport) char const* GetScriptModuleRevisionHash()
    {
        return "e105d3bbef";
    }
    __declspec(dllexport) void AddTSScripts(TSEventHandlers* handlers)
    {
        Main(handlers);
    }
    __declspec(dllexport) void AddScripts(){}
    __declspec(dllexport) char const* GetScriptModule()
    {
        return "0.9064435953281329";
    }
    __declspec(dllexport) char const* GetBuildDirective()
    {
        return "Release";
    }
};

const struct ___scripts_tester_mod_scripts_ts {___scripts_tester_mod_scripts_ts();} ____scripts_tester_mod_scripts_ts;
#endif
