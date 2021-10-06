import { handleCraftMessages } from "./craftingSystem"
import { creature1Script } from "./creature/creature1-test"
import { onLevelup } from "./QoL/onLevelup"
import { worldChat } from "./QoL/world-chat"
import { Dueling } from "./QoL/onDuel"
import { Killstreaks } from "./QoL/Killstreak"
import { onLoginEvents } from "./QoL/onLogin"
import { itemLearnSpell } from "./item/item-learn-spell"
import { reviveFix } from "./QoL/revive"
import { creatureDeathApplyBuff } from "./creature/creature-death-apply-buff"
import { creatureDeathSummon } from "./creature/creature-death-summon"

export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
	worldChat(events)
    creature1Script(events)
    onLevelup(events)
    Killstreaks(events)
    Dueling(events)
    itemLearnSpell(events)  
    reviveFix(events)
    creatureDeathApplyBuff(events)
    creatureDeathSummon(events)

    events.Player.OnCommand((player,command,found)=>{
        if(command.get().startsWith("asdasd")){
            player.SetFreeTalentPoints(5)
        }
    })
}