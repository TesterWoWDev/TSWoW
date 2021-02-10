import { buttonIDMessage,showFrameMessage, itemMessage } from "../shared/Messages";
var arrItemsToSend:TSArray<TSArray<string>> = 
[
    ["iconName","itemName","price","itemIDToGive","AmountOfItemToGive"],
    ["Ability_Ambush","name1","1","1","1"],
    ["Ability_BackStab","name2","1","2","1"],
    ["Ability_BullRush","name3","11","3","1"],
    ["Ability_CheapShot","name4","12","4","1"],
    ["Ability_Creature_Cursed_01","name5","13","5","1"],
    ["Ability_Creature_Cursed_02","name6","14","6","1"],
    ["Ability_Creature_Cursed_03","name7","15","7","1"],
    ["Ability_Creature_Cursed_04","name8","16","8","1"],
    ["Ability_Creature_Cursed_05","name9","1","9","1"],
    ["Ability_Creature_Disease_01","name0","611","10","1"],
    ["Ability_Creature_Disease_02","name","71","11","1"],
    ["Ability_Creature_Disease_03","name","51","11","1"],
    ["Ability_Creature_Disease_04","name","14","11","1"],
    ["Ability_Creature_Disease_05","name","131","11","1"],
    ["Ability_Creature_Poison_01","name","155","11","1"],
    ["Ability_Creature_Poison_02","name","1453","11","1"],
    ["Ability_Creature_Poison_03","name","144","11","1"],
    ["Ability_Creature_Poison_04","name","1","11","1"],
    ["Ability_Creature_Poison_05","name","2","11","1"],
    ["Ability_Creature_Poison_06","name","3","11","1"],
    ["Ability_CriticalStrike","name","4","11","1"],
    ["Ability_Defend","name","11","11","1"],
    ["Ability_Devour","name","11","11","1"],
    ["Ability_Druid_AquaticForm","name","11","11","1"],
    ["Ability_Druid_BalanceofPower","name","11","11","1"]
]
export function Store(events: TSEventHandlers) {
    // Use a basic OnSay event to trigger the transmission
	events.Player.OnSay((player,type,lang,msg)=>{
		let sender = new showFrameMessage()
        sender.show = "1"
		player.SendData(sender);        
	});

    events.Player.OnLogin((player,firstlogin)=>{
        let itemVar = new itemMessage()
        //for(let i=0;i<arr.length();i++){
            for(let i=1;i<arrItemsToSend.length;i++){
            itemVar = new itemMessage()
            itemVar.ID = i
            itemVar.icon = arrItemsToSend[i][0]
            itemVar.name = arrItemsToSend[i][1]
            itemVar.price = arrItemsToSend[i][2]
            itemVar.amount = arrItemsToSend[i][4]
            player.SendData(itemVar)
        }
    })
	// // Wait for clients to send this message back
	// events.Addon.OnMessageID(buttonIDMessage,(player,msg)=>{
    //     const wardGoldItemID = 1
	// 	player.SendBroadcastMessage("Server received a buttonIDMessage from the client! button ID:"+msg.button)
    //     let index = Number(msg.button)
    //     const cost = Number(arrItemsToSend[index][2])
    //     if(player.HasItem(wardGoldItemID,cost,true)){
    //         player.RemoveItem(player.GetItemByEntry(wardGoldItemID),cost,wardGoldItemID)
    //         player.AddItem(Number(arrItemsToSend[index][3]),Number(arrItemsToSend[index][4]))
    //     }else{
    //         player.SendAreaTriggerMessage("You do not have enough money. poor bastard")
    //     }
	// });		
    
}