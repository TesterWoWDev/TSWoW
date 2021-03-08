import { creatureNamePacket, creatureNoExistPacket, itemLootFinishPacket, itemLootPacket } from "../shared/Messages";
import { Events, SendToServer } from "./events";
let itemArray = [];

const mframe = CreateFrame('Frame','wardonicAtlas',UIParent);
mframe.SetWidth(1024)
mframe.SetHeight(1024)
const texture = mframe.CreateTexture("texture1",'BACKGROUND')
texture.SetTexture("Interface\\BUTTONS\\BLUEGRAD64.blp")
texture.SetAllPoints(mframe)
mframe.SetPoint("CENTER",0,0)

let searchButn = CreateFrame("Button", "CLOSE", mframe)
    searchButn.SetPoint("TOPRIGHT", mframe, "TOPRIGHT",0,0)
    searchButn.SetWidth(50)
    searchButn.SetHeight(50)
    let searchtex = searchButn.CreateTexture("SEARCHTEXTURE",'BACKGROUND')
    searchtex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        searchtex.SetAllPoints(searchButn)
        searchtex.SetPoint("CENTER",0,0)
    searchButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        let pkt = new creatureNamePacket()
        pkt.name = "name";//change for an edit box get text
        SendToServer(pkt)
    })

Events.AddOns.OnMessage(mframe,itemLootPacket,(msg)=>{
    itemArray.push([msg.itemID,msg.itemCountMin,msg.itemCountMax,msg.dropChance])
});

Events.AddOns.OnMessage(mframe,itemLootFinishPacket,(msg)=>{
    createButtons()
});

Events.AddOns.OnMessage(mframe,creatureNoExistPacket,(msg)=>{
    //empty buttons
    //set text of "cannot find creature, check your spelling"
});
function createButtons(){
    for(let i=1;i<itemArray.length;i++){
        let item = itemArray[i]
        let button = CreateFrame("Button", i.toString(), mframe)
            button.SetPoint("TOPLEFT", mframe, "TOPLEFT", 70+(((i-1)%5)*200), -75+(-115*(Math.floor((i-1)/5)+1)))
            button.SetWidth(55)
            button.SetHeight(55)
            let tex = button.CreateTexture("texture"+i,'BACKGROUND')
                tex.SetTexture(GetItemIcon(item[0]) +".blp")
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)
            let text1 = button.CreateFontString("name"+i,'OVERLAY','GameTooltipText')
                text1.SetPoint("CENTER",0,40)
                text1.SetText("Drop Count: "+item[1]+"-"+item[2])
            let text2 = button.CreateFontString("name"+i,'OVERLAY','GameTooltipText')
                text2.SetPoint("CENTER",0,40)
                text2.SetText("Drop Rate: "+item[3]+"%")
    }
}