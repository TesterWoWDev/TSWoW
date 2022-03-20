export function itemReloading(events: TSEvents) {
    events.World.OnStartup(()=>{
        LoadCustomItems()
    })
}