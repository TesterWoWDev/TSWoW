#include "tester-mod-scripts.h"


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
    return "0.6302096618129394";
}
char const* GetBuildDirective()
{
    return "Release";
}
void Main(TSEventHandlers *  events)
{
    QoLChanges(events);
    Killstreaks(events);
    Skillshot(events);
    onDeath(events);
    manaSystem(events);
    rangeLoot(events);
};



___livescripts_tester_mod_scripts_ts::___livescripts_tester_mod_scripts_ts()
{
}

