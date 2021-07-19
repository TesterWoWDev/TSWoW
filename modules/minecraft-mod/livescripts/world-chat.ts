export function worldChat(events:TSEventHandlers){
    events.Player.OnCommand((player,command,found)=>{
        if(command.get().startsWith("wc") || command.get().startsWith("chat") || command.get().startsWith("world")){
            let team = ["[|TInterface/icons/Inv_Misc_Tournaments_banner_Human.png:13|t]","[|TInterface/icons/Inv_Misc_Tournaments_banner_Orc.png:13|t]"]
            let colors = ["C79C6E","F58CBA","ABD473","FFF569","FFFFFF","C41F3B","0070DE","69CCF0","9482C9","","FF7D0A"]
            found.set(true)
            let text = command.get().split(" ")
            let message = "";
            for(let i = 1; i < text.length; i++){
                message += text[i] + " "
            }
            SendWorldMessage("[World] [|cff" + team[player.GetFaction()] + colors[player.GetClass()]+ "|Hplayer:" + player.GetName() + "|h" + player.GetName() + "|h|r]: |cffffffff"+message+"|r")
        }
    }) 
}