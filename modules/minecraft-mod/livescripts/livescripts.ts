import { handleCraftMessages } from "./craftingSystem";
import { dungeon1 } from "./dungeon/dungeon-1";
import { getRandomInt, torghastBuffSystem } from "./dungeon/torghast-master";
import { itemCacheSend } from "./item-stuff/item-cache";
import { itemCreate } from "./item-stuff/item_create";
import { Killstreaks } from "./QoL/Killstreak";
import { onLevelup } from "./QoL/onLevelup";
import { onLoginEvents } from "./QoL/onLogin";
import { reviveFix } from "./QoL/revive";
import { worldChat } from "./QoL/world-chat";

export function Main(events: TSEvents) {
    handleCraftMessages(events)
    dungeon1(events)
    torghastBuffSystem(events)
    itemCacheSend(events)
    itemCreate(events)
    Killstreaks(events)
    onLevelup(events)
    onLoginEvents(events)
    reviveFix(events)
    worldChat(events)

    // GetIDTag('minecraft-mod','tier1-normal-mob').forEach((val,i,arr) => {//iterate all tier1 mobs
    //     events.CreatureID.OnGenerateLoot(val,(creature,killer)=>{
    //         let cLoot = creature.GetLoot()
    //         cLoot.AddItem(GetID('item_template','minecraft-mod','shazzian'),1,3)//shazz ID
    //         cLoot.AddItem(GetID('item_template','minecraft-mod','other-drop'),1,1)//other ID
    //         cLoot.AddItem(GetID('item_template','minecraft-mod','third-drop'),1,1)//other3 ID
            
    //         if(getRandomInt(100) == 1){//1 in 100 odds to drop a single tier1 green item
    //             cLoot.AddItem(GetIDTag('minecraft-mod','tier1-green-item')[getRandomInt(GetIDTag('minecraft-mod','tier1-green-item').length)],1,1)
    //         } 
    //         if(getRandomInt(1000) == 1){//1 in 1000 odds to drop a single tier1 blue item
    //             cLoot.AddItem(GetIDTag('minecraft-mod','tier1-blue-item')[getRandomInt(GetIDTag('minecraft-mod','tier1-blue-item').length)],1,1)
    //         }
    //         if(getRandomInt(10000) == 1){//1 in 10000 odds to drop a single tier1 purple item
    //             cLoot.AddItem(GetIDTag('minecraft-mod','tier1-purple-item')[getRandomInt(GetIDTag('minecraft-mod','tier1-purple-item').length)],1,1)
    //         }
    //     })
    // })

    // events.ItemID.OnUse(GetID('item_template','minecraft-mod','item-clearer'),(item,player,reserved,cancel)=>{
    //     if(item.GetTemplate().GetBonding() == 0 || item.GetTemplate().GetBonding() == 2)
    //     {
    //         for(let i=0;i<7;i++)
    //             item.ClearEnchantment(i)
    //         item.SetBinding(false)
    //     }
    // })

}
