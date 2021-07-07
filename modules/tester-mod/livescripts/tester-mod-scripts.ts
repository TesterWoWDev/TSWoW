import { onDeath } from "./death";
import { Killstreaks } from "./Killstreak";
import { manaSystem } from "./manaSystem";
import { QoLChanges } from "./QoLChanges";
import { rangeLoot } from "./rangeLoot";
import { Skillshot } from "./skillshot";

export function Main(events: TSEventHandlers) {
	QoLChanges(events)
	Killstreaks(events)
	Skillshot(events)
	onDeath(events)
    manaSystem(events)
    rangeLoot(events)
    events.Player.OnCommand((player,com,found)=>{
        if(com.get().startsWith("transmog")){
            let vis = com.get().substr(8)
            let visSplit = vis.split(' ')//itemID,enchantID,slotID
            if(!player.GetItemByPos(255,ToUInt32(visSplit[2])).IsNull()){
                player.SetUInt16Value((0x0087+0x008E+0x0006)+(ToUInt32(visSplit[2])*2),0,ToUInt32(visSplit[0]))//item visual
                player.SetUInt16Value((0x0088+0x008E+0x0006)+(ToUInt32(visSplit[2])*2),0,ToUInt32(visSplit[1]))//enchantment visual
            } 
            //replace visSplit[2] with itemSlot for mass mod
            found.set(true)
        }
    })
}
