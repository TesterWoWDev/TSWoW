#ifndef LIVESCRIPTS_ADDON_MOD_SCRIPTS_H
#define LIVESCRIPTS_ADDON_MOD_SCRIPTS_H
#include "TSAll.h"
#include "ModID.h"
#include "./atlas.h"
#include "./scrapper.h"


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

const struct ___livescripts_addon_mod_scripts_ts {___livescripts_addon_mod_scripts_ts();} ____livescripts_addon_mod_scripts_ts;
#endif
