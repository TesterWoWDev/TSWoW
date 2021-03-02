import { blagSlotMessage, frameCloseMessage } from "../shared/Messages";
import { Events, SendToServer } from "./events";
const mframe = CreateFrame('Frame','UniqueName',UIParent);
mframe.SetWidth(1024)
mframe.SetHeight(800)
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
        mframe.Hide()
        SendToServer(new frameCloseMessage())
    })

Events.Container.OnItemLocked(mframe,(bag,slot)=>{
    let pkt = new blagSlotMessage()
    pkt.Bag = bag
    pkt.Slot = slot
    SendToServer(pkt)
})