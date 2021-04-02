import { Events, SendToServer } from "./lib/Events";
import { powerUpdate } from "../shared/Messages";

//life
const lifeItem = 100001
const maxLifeResource = 5
//death
const deathItem = 1
const maxDeathResource = 5

let allButtons = []
let mframe = CreateFrame('Frame','test',UIParent);
    mframe.SetWidth(240)
    mframe.SetHeight(70)
    mframe.SetBackdrop({bgFile : "Interface/TutorialFrame/TutorialFrameBackground", 
        edgeFile : "Interface/DialogFrame/UI-DialogBox-Border", 
        tile : true, tileSize : 22, edgeSize : 22, 
        insets : { left : 4, right : 4, top : 4, bottom : 4 }});
    mframe.SetBackdropColor(0,0,0,1);
    mframe.SetPoint("TOPLEFT",50,-100)

    mframe.SetMovable(true)
	mframe.EnableMouse(true)
    mframe.Hide()
    // mframe.RegisterForDrag("LeftButton")
    // mframe.SetScript("OnDragStart", mframe.StartMoving)
	// mframe.SetScript("OnHide", mframe.StopMovingOrSizing)
	// mframe.SetScript("OnDragStop", mframe.StopMovingOrSizing)

Events.AddOns.OnMessage(mframe,powerUpdate,(msg)=>{
    chooseUpdateFunction(msg)
})

function chooseUpdateFunction(msg){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].Hide()
    }
    allButtons = []
    if(GetItemCount(lifeItem,true,false) > 0){//life
        updateLeaves(msg.powerCnt)
    }else if(GetItemCount(deathItem,true,false) > 0){//death
        updateSouls(msg.powerCnt)
    }else{
        mframe.Hide()
    }
}
//life
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