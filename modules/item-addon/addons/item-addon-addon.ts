import { bagSlotMessage, frameCloseMessage, scrapMessage } from "../shared/Messages";
import { Events, SendToServer } from "./events";
let itemsInFrame = [];
let buttons = [];
let gossip = true
const mframe = CreateFrame('Frame','',UIParent);
    mframe.SetWidth(500)
    mframe.SetHeight(700)
    const texture = mframe.CreateTexture('','BACKGROUND')
        texture.SetTexture("Interface\\BUTTONS\\BLUEGRAD64.blp")
        texture.SetAllPoints(mframe)
        mframe.SetPoint("CENTER",0,0)
        //mframe.Hide()
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
    scrapButn.SetWidth(250)
    scrapButn.SetHeight(50)
    let scraptex = exitbutn.CreateTexture('','BACKGROUND')
        scraptex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        scraptex.SetAllPoints(scrapButn)
        scraptex.SetPoint("CENTER",0,0)
        scrapButn.HookScript("OnClick",(frame,evName,btnDown)=>{
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
        let button = CreateFrame("Button", '', mframe)
        let x = i+1
            button.SetPoint("TOPLEFT", mframe, "TOPLEFT",60*i-(Math.floor(i/4)*240),60-(60*Math.ceil(x/4)))
            button.SetWidth(50)
            button.SetHeight(50)
            let tex = button.CreateTexture('','BACKGROUND')
                tex.SetTexture(icon)
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)
        buttons.push(button)
    }
}
