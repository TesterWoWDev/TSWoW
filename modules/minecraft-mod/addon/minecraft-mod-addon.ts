import { craftMessage, returnCraftItemMessage } from "../shared/Messages"
import { Events, SendToServer } from "./lib/Events"

    let btnCount = 9
    let xoffset = 5
    let yoffset = 5

    let choices = [0,0,0,0,0,0,0,0,0]
    let buttons = []

    let mframe = CreateFrame('Frame','minecraftMframe',UIParent)
        mframe.SetWidth(300)
        mframe.SetHeight(400)
        mframe.SetBackdrop({bgFile : "Interface/TutorialFrame/TutorialFrameBackground", 
            edgeFile : "Interface/DialogFrame/UI-DialogBox-Border", 
            tile : true, tileSize : 22, edgeSize : 22, 
            insets : { left : 4, right : 4, top : 4, bottom : 4 }})
        mframe.SetBackdropColor(0,0,0,1)
            mframe.SetPoint("CENTER",0,0)
            mframe.Hide()
    let exitbutn = CreateFrame("Button", 'exitbtn', mframe)
        exitbutn.SetPoint("TOPRIGHT", mframe, "TOPRIGHT",0,0)
        exitbutn.SetWidth(50)
        exitbutn.SetHeight(50)
        let extex = exitbutn.CreateTexture('exittex','BACKGROUND')
            extex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
            extex.SetAllPoints(exitbutn)
            extex.SetPoint("CENTER",0,0)
        exitbutn.HookScript("OnClick",(frame,evName,btnDown)=>{
            for(let i=0;i<buttons.length;i++){
                buttons[i][1].Hide()
            }
            showTex.SetTexture("")
            showText.SetText("")
            showBtn.SetScript("OnEnter",null)
            showBtn.SetScript("OnLeave",null)
            buttons = []
            choices = [0,0,0,0,0,0,0,0,0]
            mframe.Hide()
        })

    let craftBtn = CreateFrame("Button", 'craftbtn', mframe)
        craftBtn.SetPoint("CENTER", mframe, "CENTER",0,-70)
        craftBtn.SetWidth(150)
        craftBtn.SetHeight(60)
        let craftTex = craftBtn.CreateTexture('','BACKGROUND')
            craftTex.SetTexture("Interface\\BUTTONS\\UI-DialogBox-Button-Up.blp")
            craftTex.SetAllPoints(craftBtn)
            craftTex.SetPoint("CENTER",0,0)
        let craftText = craftBtn.CreateFontString('','OVERLAY','GameFontNormalHuge')
            craftText.SetPoint("CENTER",0, 10)
            craftText.SetText("Craft")
            craftBtn.HookScript("OnClick",(frame,evName,btnDown)=>{
                updateProduct(1)
            })
    let showBtn = CreateFrame('Button','showframe',mframe)
        showBtn.SetSize(64,64)
        showBtn.SetPoint('CENTER',mframe,'BOTTOM',0,70)
        showBtn.SetBackdrop({edgeFile : "Interface/DialogFrame/UI-DialogBox-Border", 
            tile : true, tileSize : 22, edgeSize : 22, 
            insets : { left : 4, right : 4, top : 4, bottom : 4 }})
        showBtn.SetBackdropColor(0,0,0,1)
        let showTex = showBtn.CreateTexture('','BACKGROUND')
            showTex.SetTexture("")
            showTex.SetSize(60,60)
            showTex.SetPoint("CENTER",0,0)
        let showText = showBtn.CreateFontString('','OVERLAY','GameFontNormalHuge')
            showText.SetPoint("BOTTOMRIGHT",-10, 10)
            showText.SetTextColor(1,1,1,1)
            showText.SetText("")

    let frameToggle = CreateFrame('Button','toggleframe',UIParent)
        frameToggle.SetSize(25,25)
        frameToggle.SetPoint('CENTER',UIParent,'TOPRIGHT',-150,-50)
        let frameTex = frameToggle.CreateTexture('','BACKGROUND')
            frameTex.SetTexture("Interface/PAPERDOLLINFOFRAME/UI-EquipmentManager-Toggle")
            frameTex.SetAllPoints()
            frameToggle.SetScript('OnClick',(frame,button,down)=>{
                mframe.Show()
                buttonCreate()
            })
    
    function buttonCreate(){
        for(let i=0;i<btnCount;i++){
            let slot = CreateFrame('Button',i.toString(),mframe)
            slot.SetSize(64,64)
            slot.SetPoint('TOPLEFT',mframe,'TOPLEFT',40+((slot.GetWidth()+xoffset)*(Math.floor(i%3))),-30-((slot.GetHeight()+yoffset)*(Math.floor(i/3))))
            slot.RegisterForClicks("AnyDown")
            slot.SetBackdrop({ edgeFile : "Interface/DialogFrame/UI-DialogBox-Border", 
                tile : true, tileSize : 22, edgeSize : 22, 
                insets : { left : 4, right : 4, top : 4, bottom : 4 }})
            slot.SetBackdropColor(0,0,0,1)

            let texture = slot.CreateTexture('','BACKGROUND')
                texture.SetTexture("")
                texture.SetSize(60,60)
                texture.SetPoint("CENTER",0,0)
            slot.SetScript('OnClick',(frame,button,down)=>{
                if(button == "LeftButton"){
                    select(frame)
                    updateProduct(0)
                }else if(button == "RightButton"){
                    deselect(frame)
                    updateProduct(0)
                }
            })
            buttons.push([slot,texture])
        }
    }
    function select(frame:WoWAPI.Frame){
        let itemid = GetCursorInfo()[1]
        if(itemid != null){
        let info = GetItemInfo(itemid)
            if(info != null){
                buttons[Number(frame.GetName())][2].SetTexture(info[9])
                choices[Number(frame.GetName())] = Number(itemid)
            }
        }
    }

    function deselect(frame:WoWAPI.Frame){
        buttons[Number(frame.GetName())][2].SetTexture("")
        choices[Number(frame.GetName())] = 0
     }

    function updateProduct(purchase:uint32) {
        let pkt = new craftMessage()
            pkt.pos1 = choices[0]
            pkt.pos2 = choices[1]
            pkt.pos3 = choices[2] 
            pkt.pos4 = choices[3]
            pkt.pos5 = choices[4] 
            pkt.pos6 = choices[5] 
            pkt.pos7 = choices[6] 
            pkt.pos8 = choices[7] 
            pkt.pos9 = choices[8]
            pkt.purchase = purchase//not looking to buy
        SendToServer(pkt)
    }

    Events.AddOns.OnMessage(mframe,returnCraftItemMessage,message=>{
        if(message.craftItem != 0){
            showTex.SetTexture(GetItemInfo(message.craftItem)[9])
            showText.SetText(message.craftItemCount.toString())

            showBtn.SetScript("OnEnter",(self)=>{
                GameTooltip.ClearLines()
                GameTooltip.SetOwner(showBtn,'CENTER')
                GameTooltip.SetHyperlink("item:"+ message.craftItem)
                GameTooltip.Show()
            })     
            showBtn.SetScript("OnLeave",()=>{
                GameTooltip.Hide()
            })

        }else{
            showTex.SetTexture("")
            showText.SetText("")
            showBtn.SetScript("OnEnter",null)
            showBtn.SetScript("OnLeave",null)
        }
    })

