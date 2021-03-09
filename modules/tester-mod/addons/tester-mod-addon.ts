import { Events, SendToServer } from "./events";
import { buttonIDMessage, showFrameMessage, itemMessage, currencyMessage } from "../shared/Messages";
let arrayOButtonStuff = [[]]
let currencyID = 1
let currencyIcon = "1"
let currencyAmount = 1
let del = []
let yesnobtn = []
// All we need to set up an event listener is a frame with a unique name.
const mframe = CreateFrame('Frame','store',UIParent);
    mframe.SetWidth(1024)
    mframe.SetHeight(800)
    mframe.SetBackdrop({bgFile : "Interface/Tooltips/UI-Tooltip-Background", 
        edgeFile : "Interface/Tooltips/UI-Tooltip-Border", 
        tile : true, tileSize : 16, edgeSize : 16, 
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
        mframe.Hide()
    })

Events.AddOns.OnMessage(mframe,showFrameMessage,(msg)=>{
    if(msg.show == "1"){
        for(let i=0;i<del.length;i++){
            del.pop().Hide()
        }
        for(let i=1;i<arrayOButtonStuff.length;i++){
            let x = i-1
            let button = CreateFrame("Button", arrayOButtonStuff[i][3], mframe)
                button.SetPoint("TOPLEFT", mframe, "TOPLEFT", 70+((x%5)*200), -75+(-115*(Math.floor(x/5)+1)))
                button.SetWidth(55)
                button.SetHeight(55)
                let tex = button.CreateTexture('','BACKGROUND')
                    tex.SetTexture("Interface\\Icons\\"+ arrayOButtonStuff[i][0] +".blp")
                    tex.SetAllPoints(button)
                    tex.SetPoint("CENTER",0,0)
                let text1 = button.CreateFontString('','OVERLAY','GameTooltipText')
                    text1.SetPoint("CENTER",0,40)
                    text1.SetText(arrayOButtonStuff[i][1])
                let text2 = button.CreateFontString('','OVERLAY','GameTooltipText')
                    text2.SetPoint("CENTER",0,-40)
                    text2.SetText("Price: "+arrayOButtonStuff[i][2]+"")
                    let text3 = button.CreateFontString('','OVERLAY','GameTooltipText')
                    text3.SetPoint("BOTTOMRIGHT",-10,5)
                    text3.SetText(arrayOButtonStuff[i][4])
                button.HookScript("OnClick",(frame,evName,btnDown)=>{
                    yesnobtn.forEach(element => {
                        element.Hide()
                    });
                    let sure = frame.CreateFontString('','OVERLAY','GameTooltipText')
                        sure.SetPoint("TOP", mframe, "TOP",20,-80)
                        sure.SetText("Are you sure you wish to purchase that?")
                    let button = CreateFrame("Button", frame.GetName(), mframe)
                        button.SetPoint("TOP", mframe, "TOP",0,-100)
                        button.SetWidth(40)
                        button.SetHeight(40)
                        let texy = button.CreateTexture('','BACKGROUND')
                            texy.SetTexture("Interface\\Icons\\Ability_Creature_Cursed_04.blp")
                            texy.SetAllPoints(button)
                            texy.SetPoint("CENTER",0,0)
                        let text1y = button.CreateFontString('','OVERLAY','GameTooltipText')
                            text1y.SetPoint("CENTER",0,0)
                            text1y.SetText("yes")
                        button.HookScript("OnClick",(frame,enName,btnDown)=>{
                            let serverpacket = new buttonIDMessage()
                                serverpacket.button = frame.GetName()
                                SendToServer(serverpacket);
                                button.Hide()
                                buttonn.Hide()
                                sure.Hide()
                            })
                    let buttonn = CreateFrame("Button", frame.GetName(), mframe)
                            buttonn.SetPoint("TOP", mframe, "TOP",50,-100)
                            buttonn.SetWidth(40)
                            buttonn.SetHeight(40)
                            let texn = buttonn.CreateTexture('','BACKGROUND')
                                texn.SetTexture("Interface\\Icons\\Ability_Creature_Cursed_04.blp")
                                texn.SetAllPoints(buttonn)
                                texn.SetPoint("CENTER",0,0)
                            let text1n = buttonn.CreateFontString('','OVERLAY','GameTooltipText')
                                text1n.SetPoint("CENTER",0,0)
                                text1n.SetText("no")
                                buttonn.HookScript("OnClick",(frame,enName,btnDown)=>{
                                    button.Hide()
                                    buttonn.Hide()
                                    sure.Hide()
                                })
                                yesnobtn.push(button)
                                yesnobtn.push(buttonn)
                                yesnobtn.push(sure)

                }) 
                button.HookScript("OnEnter",(self)=>{
                    GameTooltip.ClearLines()
                    GameTooltip.SetOwner(button,'CENTER')
                    GameTooltip.SetHyperlink("item:"+ self.GetName())
                    GameTooltip.Show()
                })            
                button.HookScript("OnLeave",()=>{
                    GameTooltip.Hide()
                })
        del.push(button)
    }

    let amtFrame = CreateFrame("Button", '', mframe)
        amtFrame.SetPoint("TOPRIGHT", mframe, "TOPRIGHT",-100,-50)
        amtFrame.SetWidth(20)
        amtFrame.SetHeight(20)
        let amtTex = exitbutn.CreateTexture('','BACKGROUND')
            amtTex.SetTexture("Interface\\Icons\\" + currencyIcon + ".blp")
            amtTex.SetAllPoints(amtFrame)
            amtTex.SetPoint("CENTER",0,0)
        let amtText = amtFrame.CreateFontString('','OVERLAY','GameTooltipText')
            amtText.SetPoint("RIGHT",amtFrame,'LEFT',0,0)
            amtText.SetText("Owned: "+currencyAmount)
        amtFrame.HookScript("OnEnter",(self)=>{
            GameTooltip.ClearLines()
            GameTooltip.SetOwner(amtFrame,'CENTER')
            GameTooltip.SetHyperlink("item:" + currencyID)
            GameTooltip.Show()
        })            
        amtFrame.HookScript("OnLeave",()=>{
            GameTooltip.Hide()
        })
        del.push(amtFrame)
        mframe.Show()
    }
    else{
        mframe.Hide()
    }
});
Events.AddOns.OnMessage(mframe,itemMessage,(msg)=>{
    arrayOButtonStuff.push([msg.icon,msg.name,msg.price,msg.itemID,msg.amount])
});

Events.AddOns.OnMessage(mframe,currencyMessage,(msg)=>{
    currencyID = msg.ID
    currencyIcon = msg.icon
    currencyAmount = msg.curAmt
});

