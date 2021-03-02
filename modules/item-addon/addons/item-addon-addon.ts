import { bagSlotMessage, frameCloseMessage } from "../shared/Messages";
import { Events, SendToServer } from "./events";
let itemsInFrame = [];
let buttons = [];
const mframe = CreateFrame('Frame','UniqueName',UIParent);
mframe.SetWidth(500)
mframe.SetHeight(700)
const texture = mframe.CreateTexture("texture1",'BACKGROUND')
texture.SetTexture("Interface\\BUTTONS\\BLUEGRAD64.blp")
texture.SetAllPoints(mframe)
mframe.SetPoint("CENTER",0,0)

let exitbutn = CreateFrame("Button", "CLOSE", mframe)
    exitbutn.SetPoint("TOPRIGHT", mframe, "TOPRIGHT",0,0)
    exitbutn.SetWidth(50)
    exitbutn.SetHeight(50)
    let extex = exitbutn.CreateTexture("EXITTEXTURE",'BACKGROUND')
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

Events.Container.OnItemLocked(mframe,(bag,slot)=>{
    let pkt = new bagSlotMessage()
    pkt.Bag = bag
    pkt.Slot = slot
    pkt.itemID = Number(GetCursorInfo()[1])
    SendToServer(pkt)
    mframe.Show()

})

Events.AddOns.OnMessage(mframe,bagSlotMessage,(msg)=>{
    if(msg.itemID > 0){
        itemsInFrame.push(msg.itemID)
        makeButtons()
    }
})

function removeButtons(){
    for (let i=0;i<buttons.length;i++){
        buttons.pop().Hide()
    }
}
function makeButtons(){
    removeButtons()
    for (let i=0;i<itemsInFrame.length;i++){
        let icon = GetItemIcon(itemsInFrame[i])
        let button = CreateFrame("Button", i.toString(), mframe)
        let x = i+1
            button.SetPoint("TOPLEFT", mframe, "TOPLEFT",60*i-(Math.floor(i/4)*240),60-(60*Math.ceil(x/4)))
            button.SetWidth(50)
            button.SetHeight(50)
            let tex = button.CreateTexture("texture"+i,'BACKGROUND')
                tex.SetTexture(icon)
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)
        buttons.push(button)
    }
}