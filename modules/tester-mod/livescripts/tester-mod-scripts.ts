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
    //rangeLoot(events)

    events.Player.OnSay((player,type,lang,msg)=>{
        player.SendCreatureQueryPacket(299)
        player.SendGameObjectQueryPacket(17)
    })
}