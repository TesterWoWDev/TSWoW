import { Events, SendToServer } from "./lib/Events";
import { powerUpdate, resetFrame } from "../shared/Messages";

//life
const lifeItem = 100001
const maxLifeResource = 5
//death
const deathItem = 1
const maxDeathResource = 5
let frames = []
let allButtons = []
let setup = false
let mframe = CreateFrame('Frame','test',UIParent);
    mframe.Hide()
    // mframe.RegisterForDrag("LeftButton")
    // mframe.SetScript("OnDragStart", mframe.StartMoving)
	// mframe.SetScript("OnHide", mframe.StopMovingOrSizing)
	// mframe.SetScript("OnDragStop", mframe.StopMovingOrSizing)

Events.AddOns.OnMessage(mframe,powerUpdate,(msg)=>{
    chooseUpdateFunction(msg)
})

Events.AddOns.OnMessage(mframe,resetFrame,(msg)=>{
    setup = false
    for (let i=0;i<frames.length;i++){
        frames[i].Hide()
    }
    frames = []
})

function chooseUpdateFunction(msg){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].Hide()
    }
    allButtons = []
    if(GetItemCount(lifeItem,true,false) > 0){//life
        makeLifeFrame()
        updateLeaves(msg.powerCnt)
    }else if(GetItemCount(deathItem,true,false) > 0){//death
        makeDeathFrame()
        updateSouls(msg.powerCnt)
    }else{
        mframe.Hide()
    }
}

//life
function makeLifeFrame(){
    if(!setup){
        let lifeFrame = CreateFrame('Frame','life',mframe)
        lifeFrame.SetWidth(240)
        lifeFrame.SetHeight(70)
        lifeFrame.SetBackdrop({bgFile : "Interface/TutorialFrame/TutorialFrameBackground", 
            edgeFile : "Interface/DialogFrame/UI-DialogBox-Border", 
            tile : true, tileSize : 22, edgeSize : 22, 
            insets : { left : 4, right : 4, top : 4, bottom : 4 }});
        lifeFrame.SetBackdropColor(0,0,0,1);
        lifeFrame.SetPoint("TOPLEFT",50,-100)

        lifeFrame.SetMovable(true)
        lifeFrame.EnableMouse(true)
        setup = true
        frames.push(lifeFrame)
    }
}

function updateLeaves(count){
    mframe.SetWidth(130)
    mframe.SetHeight(35)
    mframe.SetPoint("TOPLEFT",80,-70)
    mframe.Show()
    for(let i=1;i<=maxLifeResource;i++){
        let button = CreateFrame("Button", "leaf"+i, mframe)
            button.SetPoint("TOPLEFT", mframe, "TOPLEFT", -13+(i*23),-8)
            button.SetWidth(20)
            button.SetHeight(20)
            let tex = button.CreateTexture('','BACKGROUND')
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)
            if(count > 0){
                tex.SetTexture("Interface\\BUTTONS\\UI-CheckBox-Check.blp")
                count--
            }else{
                tex.SetTexture("Interface\\BUTTONS\\UI-CheckBox-Check-Disabled.blp")
            }  
        allButtons.push(button)
    }
}

function makeDeathFrame(){
    if(!setup){
        let deathFrame = CreateFrame('StatusBar','death',mframe)
        deathFrame.SetPoint("CENTER", UIParent, "CENTER", 0, 100)
        deathFrame.SetWidth(200)
        deathFrame.SetHeight(20)
        deathFrame.SetStatusBarTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
        deathFrame.GetStatusBarTexture()
        deathFrame.GetStatusBarTexture()
        deathFrame.SetStatusBarColor(0, 0.65, 0,1)
        
        let bg = deathFrame.CreateTexture(null, "BACKGROUND")
        bg.SetTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
        bg.SetAllPoints()
        bg.SetVertexColor(0, 0.35, 0)
        
        let value = deathFrame.CreateFontString(null, "OVERLAY")
        value.SetPoint("LEFT", deathFrame, "LEFT", 4, 0)
        value.SetFont("Fonts\\FRIZQT__.TTF", 16, "OUTLINE")
        value.SetJustifyH("LEFT")
        value.SetShadowOffset(1, -1)
        value.SetTextColor(0, 1, 0)
        value.SetText("100%")
        setup = true
        frames.push(deathFrame)
    }
}

function updateSouls(count){
    mframe.SetWidth(240)
    mframe.SetHeight(70)
    mframe.SetPoint("TOPLEFT",50,-100)
    mframe.Show()
    for(let i=1;i<=maxDeathResource;i++){
        let button = CreateFrame("Button", "leaf"+i, mframe)
            button.SetPoint("TOPLEFT", mframe, "TOPLEFT", -25+(i*42),-15)
            button.SetWidth(40)
            button.SetHeight(40)
            let tex = button.CreateTexture('','BACKGROUND')
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)
            if(count > 0){
                tex.SetTexture("Interface\\BUTTONS\\UI-CheckBox-Check.blp")
                count--
            }else{
                tex.SetTexture("Interface\\BUTTONS\\UI-CheckBox-Check-Disabled.blp")
            }
                
        allButtons.push(button)
    }
}

//test setup for greying out spells 
// let ActionBars = [ "Action", "MultiBarBottomLeft", "MultiBarBottomRight", "MultiBarRight", "MultiBarLeft" ]
// function findButtonByName(searchID){
//     for(let i=1;i<=60;i++){
//     let buttonName = ActionBars[Math.floor(i/12)] + "Button" + i
//         let actionInfo = GetActionInfo(i)
//         if (actionInfo[1] == "spell") {
//             let spellInfo = GetSpellInfo(actionInfo[2])
//             if(spellInfo[1] == searchID){
//                 return button
//             }
//         }
//     }
// }