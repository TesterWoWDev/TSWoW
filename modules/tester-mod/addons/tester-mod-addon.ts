import { Events, SendToServer } from "./events";
import { buttonIDMessage, showFrameMessage, itemMessage } from "../shared/Messages";
let arrayOButtonStuff = [[]]
// All we need to set up an event listener is a frame with a unique name.
const mframe = CreateFrame('Frame','UniqueName',UIParent);
mframe.SetWidth(1024)
mframe.SetHeight(800)
const texture = mframe.CreateTexture("texture1",'BACKGROUND')
texture.SetTexture("Interface\\BUTTONS\\BLUEGRAD64.blp")
texture.SetAllPoints(mframe)
mframe.SetPoint("CENTER",0,0)
mframe.Hide()

let mframeTip = CreateFrame( "GameTooltip", "MyScanningTooltip" )

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
        })


// Registers a listener for "ExampleMessage" packets
Events.AddOns.OnMessage(mframe,showFrameMessage,(msg)=>{
    if(msg.show == "1"){
        for(let i=1;i<arrayOButtonStuff.length;i++){
            let x = i-1
            let button = CreateFrame("Button", i.toString(), mframe)
                button.SetPoint("TOPLEFT", mframe, "TOPLEFT", 70+((x%5)*200), -75+(-115*(Math.floor(x/5)+1)))
                button.SetWidth(55)
                button.SetHeight(55)
                button.SetText("test")
                let tex = button.CreateTexture("texture"+i,'BACKGROUND')
                    tex.SetTexture("Interface\\Icons\\"+ arrayOButtonStuff[i][0] +".blp")
                    tex.SetAllPoints(button)
                    tex.SetPoint("CENTER",0,0)
                let text1 = button.CreateFontString("name"+i,'OVERLAY','GameTooltipText')
                    text1.SetPoint("CENTER",0,40)
                    text1.SetText(arrayOButtonStuff[i][1])
                let text2 = button.CreateFontString("price"+i,'OVERLAY','GameTooltipText')
                    text2.SetPoint("CENTER",0,-40)
                    text2.SetText("Price: "+arrayOButtonStuff[i][2]+"")
                    let text3 = button.CreateFontString("amount"+i,'OVERLAY','GameTooltipText')
                    text3.SetPoint("BOTTOMRIGHT",-5,5)
                    text3.SetText(arrayOButtonStuff[i][4])
                button.HookScript("OnClick",(frame,evName,btnDown)=>{
            let serverpacket = new buttonIDMessage()
                serverpacket.button = frame.GetName()
            SendToServer(serverpacket);
        }) 
        button.HookScript("OnEnter",(self)=>{
            let index = parseInt(self.GetName())
            GameTooltip.SetOwner(button,'CENTER')
            GameTooltip.SetHyperlink("item:"+ arrayOButtonStuff[index][3] +":0:0:0:0:0:0:0")
            GameTooltip.AppendText("\nPrice:"+arrayOButtonStuff[index][2])
            GameTooltip.Show()
        })            
        button.HookScript("OnLeave",()=>{
            GameTooltip.ClearLines()
            GameTooltip.Hide()
            })
        }
        mframe.Show()
    }
    else{
        mframe.Hide()
    }
});

// Registers a listener for "ExampleMessage" packets
Events.AddOns.OnMessage(mframe,itemMessage,(msg)=>{
    arrayOButtonStuff.push([msg.icon,msg.name,msg.price,msg.itemID,msg.amount])
});
