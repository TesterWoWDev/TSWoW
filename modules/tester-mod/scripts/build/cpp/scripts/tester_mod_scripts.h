#ifndef SCRIPTS_TESTER_MOD_SCRIPTS_H
#define SCRIPTS_TESTER_MOD_SCRIPTS_H
#include "TSAll.h"


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
        return "0.5772840689878931";
    }
    __declspec(dllexport) char const* GetBuildDirective()
    {
        return "Release";
    }
};

const struct ___scripts_tester_mod_scripts_ts {___scripts_tester_mod_scripts_ts();} ____scripts_tester_mod_scripts_ts;
#endif
