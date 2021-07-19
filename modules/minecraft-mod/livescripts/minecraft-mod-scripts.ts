import { handleCraftMessages } from "./crafting-messages"
import { onLoginEvents } from "./onLogin"
import { transmog } from "./transmog"
export function Main(events: TSEventHandlers) {
    handleCraftMessages(events)
    onLoginEvents(events)
    transmog(events)

    events.Player.OnCommand((player,command,found)=>{
		if(command.get().startsWith("wc") || command.get().startsWith("chat") || command.get().startsWith("world")){
            let colors = ["C79C6E","F58CBA","ABD473","FFF569","FFFFFF","C41F3B","0070DE","69CCF0","9482C9","","FF7D0A"]
			found.set(true)
			let text = command.get().split(" ")
			let message = "";
			for(let i = 1; i < text.length; i++){
				message += text[i] + " "
			}
			SendWorldMessage("[World] [|cff"+colors[player.GetClass()]+ "|Hplayer:" + player.GetName() + "|h" + player.GetName() + "|h|r]: |cffffffff"+message+"|r")
		}
	})
}