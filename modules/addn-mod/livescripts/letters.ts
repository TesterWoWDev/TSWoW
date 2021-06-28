import { showText } from "../shared/Messages"

export function Letters(events:TSEventHandlers){
    events.Player.OnSay((player,type,lang,msg)=>{
        let pkt = new showText()
            pkt.showTextVar = msg.get()
        player.SendData(pkt)
    })
}