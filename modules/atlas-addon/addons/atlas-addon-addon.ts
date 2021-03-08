import { creatureNamePacket, creatureNoExistPacket, itemLootFinishPacket, itemLootPacket } from "../shared/Messages";
import { Events, SendToServer } from "./events";
let itemArray = [];
let allButtons = [];
let page = 0;
let columns = 8
let rows = 6
let mframe = CreateFrame('Frame','atlas',UIParent);
    mframe.SetWidth(1024)
    mframe.SetHeight(768)
    mframe.SetPoint("CENTER",0,0)
    let texture = mframe.CreateTexture('','BACKGROUND')
        texture.SetTexture("Interface\\BUTTONS\\BLUEGRAD64.blp")
        texture.SetAllPoints(mframe)
    //mframe.Hide() //make some button that makes this show/hide, possibly tied to the minimap

let exitButn = CreateFrame("Button", '', mframe)
    exitButn.SetPoint("TOPRIGHT", mframe, "TOPRIGHT",0,0)
    exitButn.SetWidth(50)
    exitButn.SetHeight(50)
    let exittex = exitButn.CreateTexture('','BACKGROUND')
        exittex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        exittex.SetAllPoints(exitButn)
        exittex.SetPoint("CENTER",0,0)
    exitButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        mframe.Hide()
    })

let lastPageButn = CreateFrame("Button", '', mframe)
    lastPageButn.SetPoint("CENTER", mframe, "CENTER",-30,300)
    lastPageButn.SetWidth(50)
    lastPageButn.SetHeight(50)
    let lasttex = lastPageButn.CreateTexture('','BACKGROUND')
        lasttex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        lasttex.SetAllPoints(lastPageButn)
        lasttex.SetPoint("CENTER",0,0)
    lastPageButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        if(page > 0)
        page = page - 1
        clearButtons()
        createButtons()
    })

let nextPageButn = CreateFrame("Button", '', mframe)
    nextPageButn.SetPoint("CENTER", mframe, "CENTER",30,300)
    nextPageButn.SetWidth(50)
    nextPageButn.SetHeight(50)
    let nexttex = nextPageButn.CreateTexture('','BACKGROUND')
        nexttex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        nexttex.SetAllPoints(nextPageButn)
        nexttex.SetPoint("CENTER",0,0)
    nextPageButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        if(itemArray.length  > columns*rows*(page+1))
        page = page + 1
        clearButtons()
        createButtons()
    })

let searchButn = CreateFrame("Button", '', mframe)
    searchButn.SetPoint("CENTER", mframe, "CENTER",0,350)
    searchButn.SetWidth(50)
    searchButn.SetHeight(50)
    let searchtex = searchButn.CreateTexture('','BACKGROUND')
        searchtex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        searchtex.SetAllPoints(searchButn)
        searchtex.SetPoint("CENTER",0,0)
    searchButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        let entryCheckbox = 1;//add some toggle in the UI
        let pkt = new creatureNamePacket()
            pkt.entry = "3100";//change for an edit box get text
            if(entryCheckbox == 1){
                pkt.isName = 0;
            }
        clearButtons()
        SendToServer(pkt)
    })
Events.AddOns.OnMessage(mframe,itemLootPacket,(msg)=>{
    itemArray.push([msg.itemID,msg.itemCountMin,msg.itemCountMax,msg.dropChance])
});

Events.AddOns.OnMessage(mframe,itemLootFinishPacket,(msg)=>{
    createButtons()
});

Events.AddOns.OnMessage(mframe,creatureNoExistPacket,(msg)=>{
    console.log("DOES NOT EXIST!!!")
});

function createButtons(){
    let length = columns*rows;
    if(itemArray.length < (columns*rows)*(page+1)){
        length = itemArray.length%48
    }
    for(let i=0;i<length;i++){
        let item = itemArray[i+((columns*rows)*page)]
        let icon = GetItemIcon(item[1])
        let button = CreateFrame("Button", item[1], mframe)
            button.SetPoint("TOPLEFT", mframe, "TOPLEFT", 70+(((i)%columns)*120), (-115*(Math.floor((i)/columns)+1)))
            button.SetWidth(40)
            button.SetHeight(40)
            let tex = button.CreateTexture('tex1','BACKGROUND')
                tex.SetTexture(icon)
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)
            let text1 = button.CreateFontString('','OVERLAY','GameTooltipText')
                text1.SetPoint("CENTER",0,30)
                if(item[2] == item[3]){
                    text1.SetText("Drop Amt: "+item[2])
                }else{
                    text1.SetText("Drop Amt: "+item[2]+"-"+item[3])
                }
            let text2 = button.CreateFontString('','OVERLAY','GameTooltipText')
                text2.SetPoint("CENTER",0,-30)
                text2.SetText("Drop %: "+item[4]+"%")
            button.HookScript("OnEnter",(self)=>{
                GameTooltip.ClearLines()
                GameTooltip.SetOwner(button,'CENTER')
                GameTooltip.SetHyperlink("item:"+  parseInt(self.GetName()))
                GameTooltip.Show()
            })            
            button.HookScript("OnLeave",()=>{
                GameTooltip.Hide()
            })
        allButtons.push(button)
    }
}

function clearButtons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].Hide()
    }
    itemArray = []
    allButtons = []
}