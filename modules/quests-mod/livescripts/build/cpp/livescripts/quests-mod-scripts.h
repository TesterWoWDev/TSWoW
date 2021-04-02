#ifndef LIVESCRIPTS_QUESTS_MOD_SCRIPTS_H
#define LIVESCRIPTS_QUESTS_MOD_SCRIPTS_H
#include "TSAll.h"
#include "ModID.h"


void WritePackets();
void WriteTables();
extern "C" 
{
    __declspec(dllexport) void Main(TSEventHandlers*);
    __declspec(dllexport) char const* GetScriptModuleRevisionHash();
    __declspec(dllexport) void AddTSScripts(TSEventHandlers* handlers);
    __declspec(dllexport) void AddScripts();
    __declspec(dllexport) char const* GetScriptModule();
    __declspec(dllexport) char const* GetBuildDirective();
};

const struct ___livescripts_quests_mod_scripts_ts {___livescripts_quests_mod_scripts_ts();} ____livescripts_quests_mod_scripts_ts;
#endif
