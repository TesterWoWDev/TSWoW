import { buttonIDMessage,showFrameMessage, itemMessage, currencyMessage } from "../shared/Messages";
var arrItemsToSend:TSArray<TSArray<string>> = 
[
    ["iconName","itemName","price","itemIDToGive","AmountOfItemToGive"],
    ["Ability_Ambush","tacosalad","1","117","1"],
    ["Ability_BackStab","name2","1","117","1"],
    ["Ability_BullRush","name3","11","117","1"],
    ["Ability_CheapShot","name4","12","117","1"],
    ["Ability_Creature_Cursed_01","name5","1","117","1"],
    ["Ability_Creature_Cursed_02","name6","14","117","1"],
    ["Ability_Creature_Cursed_03","name7","2","117","1"],
    ["Ability_Creature_Cursed_04","name8","16","117","1"],
    ["Ability_Creature_Cursed_05","name9","1","117","1"],
    ["Ability_Creature_Disease_01","name0","611","117","1"],
    ["Ability_Creature_Disease_02","name","71","117","1"],
    ["Ability_Creature_Disease_03","name","51","117","1"],
    ["Ability_Creature_Disease_04","name","14","117","1"],
    ["Ability_Creature_Disease_05","name","131","117","1"],
    ["Ability_Creature_Poison_01","name","155","117","1"],
    ["Ability_Creature_Poison_02","name","1453","117","1"],
    ["Ability_Creature_Poison_03","name","144","117","1"],
    ["Ability_Creature_Poison_04","name","1","117","1"],
    ["Ability_Creature_Poison_05","name","2","117","1"],
    ["Ability_Creature_Poison_06","name","3","117","1"],
    ["Ability_CriticalStrike","name","4","117","1"],
    ["Ability_Defend","name","11","117","1"],
    ["Ability_Devour","name","11","117","1"],
    ["Ability_Druid_AquaticForm","name","11","117","1"],
    ["Ability_Druid_BalanceofPower","name","11","117","1"]
]

const wardGoldItemID = 44837
const currencyPath = "INV_Misc_Food_45"
export function Store(events: TSEventHandlers) {
    // Use a basic OnSay event to trigger the transmission
	events.Player.OnSay((player,type,lang,msg)=>{
        let pkt = new currencyMessage()
            pkt.ID = wardGoldItemID
            pkt.icon = currencyPath
            pkt.curAmt = player.GetItemCount(wardGoldItemID,false)
        player.SendData(pkt)
		let sender = new showFrameMessage()
            sender.show = "1"
		player.SendData(sender);        
	})
    events.Player.OnLogin((player,firstlogin)=>{
        let pkt = new currencyMessage()
            pkt.ID = wardGoldItemID
            pkt.icon = currencyPath
            pkt.curAmt = player.GetItemCount(wardGoldItemID,false)
        player.SendData(pkt)
        let itemVar = new itemMessage()
        for(let i=1;i<arrItemsToSend.length;i++){
            itemVar = new itemMessage()
            itemVar.ID = i
            itemVar.icon = arrItemsToSend[i][0]
            itemVar.name = arrItemsToSend[i][1]
            itemVar.price = arrItemsToSend[i][2]
            itemVar.itemID = arrItemsToSend[i][3]
            itemVar.amount = arrItemsToSend[i][4]
            player.SendData(itemVar)
        }
    })

	events.Addon.OnMessageID(buttonIDMessage,(player,msg)=>{ 
        let index = ToUInt32(msg.button)
        const cost = ToUInt32(arrItemsToSend[index][2])
        if(player.HasItem(wardGoldItemID,cost,false)){
            player.RemoveItem(player.GetItemByEntry(wardGoldItemID),cost,wardGoldItemID)
            player.AddItem(ToUInt32(arrItemsToSend[index][3]),ToUInt32(arrItemsToSend[index][4]))  
            let pkt = new currencyMessage()
                pkt.ID = wardGoldItemID
                pkt.icon = currencyPath
                pkt.curAmt = player.GetItemCount(wardGoldItemID,false)
                player.SendData(pkt)

            let sender = new showFrameMessage()
                sender.show = "1"
                player.SendData(sender);  
        }else{
            player.SendAreaTriggerMessage("You do not have enough money. poor bastard")
        }
	})
}