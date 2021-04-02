#include "addon-mod-scripts.h"


char const* GetScriptModuleRevisionHash()
{
    return "9cbf82605b33175fa86523e6643f628ac589bf6f";
}
void AddTSScripts(TSEventHandlers* handlers)
{
    WriteTables();
    SetID(handlers->modid);
    WritePackets();
    Main(handlers);
}
void AddScripts(){}
char const* GetScriptModule()
{
    return "0.40513766276294194";
}
char const* GetBuildDirective()
{
    return "Release";
}
void Main(TSEventHandlers *  events)
{
    Atlas(events);
    Scrapper(events);
};



___livescripts_addon_mod_scripts_ts::___livescripts_addon_mod_scripts_ts()
{
}

