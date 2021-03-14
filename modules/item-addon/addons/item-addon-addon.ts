import { bagSlotMessage, frameCloseMessage, scrapMessage } from "../shared/Messages";
import { Events, SendToServer } from "./events";
let itemsInFrame = [];
let buttons = [];
let gossip = true
let mframe = CreateFrame('Frame','Scrapper',UIParent);
    mframe.SetWidth(350)
    mframe.SetHeight(400)
    mframe.SetBackdrop({bgFile : "Interface/TutorialFrame/TutorialFrameBackground", 
        edgeFile : "Interface/DialogFrame/UI-DialogBox-Border", 
        tile : true, tileSize : 22, edgeSize : 22, 
        insets : { left : 4, right : 4, top : 4, bottom : 4 }});
    mframe.SetBackdropColor(0,0,0,1);
        mframe.SetPoint("CENTER",0,0)
        mframe.Hide()
let exitbutn = CreateFrame("Button", '', mframe)
    exitbutn.SetPoint("TOPRIGHT", mframe, "TOPRIGHT",0,0)
    exitbutn.SetWidth(50)
    exitbutn.SetHeight(50)
    let extex = exitbutn.CreateTexture('','BACKGROUND')
        extex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        extex.SetAllPoints(exitbutn)
        extex.SetPoint("CENTER",0,0)
    exitbutn.HookScript("OnClick",(frame,evName,btnDown)=>{
        SendToServer(new frameCloseMessage())
        removeButtons()
        itemsInFrame = [];
        buttons = [];
        mframe.Hide()
    })

let scrapButn = CreateFrame("Button", '', mframe)
    scrapButn.SetPoint("CENTER", mframe, "CENTER",0,-100)
    scrapButn.SetWidth(150)
    scrapButn.SetHeight(60)
    let scraptex = scrapButn.CreateTexture('','BACKGROUND')
        scraptex.SetTexture("Interface\\BUTTONS\\UI-DialogBox-Button-Up.blp")
        scraptex.SetAllPoints(scrapButn)
        scraptex.SetPoint("CENTER",0,0)
    let searchText = scrapButn.CreateFontString('','OVERLAY','GameFontNormalHuge')
        searchText.SetPoint("CENTER",0, 10)
        searchText.SetText("Scrap")
        scrapButn.HookScript("OnClick",(frame,evName,btnDown)=>{//comment
            SendToServer(new scrapMessage())
            removeButtons()
            itemsInFrame = [];
            buttons = [];
        })

Events.Container.OnBagUpdate(mframe,(bagID)=>{
    SendToServer(new frameCloseMessage())
    removeButtons()
    itemsInFrame = [];
    buttons = [];
    mframe.Hide()
})

if(gossip){//add a server packet that makes this true on gossip and false on gossipExitm
    Events.Container.OnItemLocked(mframe,(bag,slot)=>{
        let pkt = new bagSlotMessage()
        pkt.Bag = bag
        pkt.Slot = slot
        pkt.itemID = Number(GetCursorInfo()[1])
        SendToServer(pkt)
        mframe.Show()
    })
}

Events.AddOns.OnMessage(mframe,bagSlotMessage,(msg)=>{
    if(msg.itemID > 0){
        itemsInFrame.push(msg.itemID)
        makeButtons()
    }
})

function removeButtons(){
    for (let i=0;i<buttons.length;i++){
        buttons[i].Hide()
    }
}

function makeButtons(){
    removeButtons()
    for (let i=0;i<itemsInFrame.length;i++){
        let icon = GetItemIcon(itemsInFrame[i])
        let button = CreateFrame("Button", itemsInFrame[i], mframe)
        let x = i+1
            button.SetPoint("CENTER", mframe, "CENTER",-90+(60*i-(Math.floor(i/4)*240)),100+(60-(60*Math.ceil(x/4))))
            button.SetWidth(50)
            button.SetHeight(50)
            let tex = button.CreateTexture('','BACKGROUND')
                tex.SetTexture(icon)
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)

            button.HookScript("OnEnter",(self)=>{
                GameTooltip.ClearLines()
                GameTooltip.SetOwner(button,'CENTER')
                GameTooltip.SetHyperlink("item:"+  parseInt(self.GetName()))
                GameTooltip.Show()
            })     

            button.HookScript("OnLeave",()=>{
                GameTooltip.Hide()
            })

            button.HookScript("OnEnter",(self)=>{
                GameTooltip.ClearLines()
                GameTooltip.SetOwner(button,'CENTER')
                GameTooltip.SetHyperlink("item:"+  parseInt(self.GetName()))
                GameTooltip.Show()
            }) 
                       
            button.HookScript("OnLeave",()=>{
                GameTooltip.Hide()
            })
        buttons.push(button)
    }
}
