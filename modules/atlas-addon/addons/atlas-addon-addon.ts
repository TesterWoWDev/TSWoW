import { creatureNameMessage, creatureNoExistMessage, itemLootFinishMessage, itemLootPacket } from "../shared/Messages";
import { Events, SendToServer } from "./events";
let itemArray = [];
let allButtons = [];
let page = 0;
let columns = 4
let rows = 7
let shown = false;

let mframe = CreateFrame('Frame','atlas',UIParent);
    mframe.SetWidth(512)
    mframe.SetHeight(768)
    mframe.SetPoint("CENTER",0,0)
    mframe.SetBackdrop({bgFile : "Interface/Tooltips/UI-Tooltip-Background", 
    edgeFile : "Interface/Tooltips/UI-Tooltip-Border", 
    tile : true, tileSize : 22, edgeSize : 22, 
    insets : { left : 4, right : 4, top : 4, bottom : 4 }});
    mframe.SetBackdropColor(0,0,0,1);
    let pageCt = mframe.CreateFontString('','OVERLAY','GameTooltipText')
        pageCt.SetPoint("TOPLEFT",110,-82)
        pageCt.SetText("Page " + (page+1) + "/"+1)
    mframe.Hide()

let frameLine = CreateFrame('Frame','',mframe)
    frameLine.SetWidth(567)
    frameLine.SetHeight(8)
    frameLine.SetPoint("LEFT",mframe,'TOPLEFT',5,-115)
    let lineTex = frameLine.CreateTexture('','BACKGROUND')
        lineTex.SetTexture("Interface\\AchievementFrame\\UI-Achievement-MetalBorder-Top.blp")
        lineTex.SetAllPoints(frameLine)
        
let showBtn = CreateFrame('Button','show',UIParent)
    showBtn.SetWidth(22)
    showBtn.SetHeight(22)
    showBtn.SetPoint("TOPRIGHT",-5,-105)
    let showTex = showBtn.CreateTexture('','BACKGROUND')
        showTex.SetTexture("Interface\\BUTTONS\\UI-GroupLoot-Dice-Up.blp")
        showTex.SetAllPoints(showBtn)
        showBtn.HookScript("OnClick",(frame,evName,btnDown)=>{
            if(shown){
                shown = false;
                mframe.Hide()
                searchBox.Hide()
            }
            else{
                shown = true
                mframe.Show()
                searchBox.Show()
                searchBox.SetFocus()
            }
        })

let exitButn = CreateFrame("Button", '', mframe)
    exitButn.SetPoint("TOPRIGHT", mframe, "TOPRIGHT",0,0)
    exitButn.SetWidth(50)
    exitButn.SetHeight(50)
    let exittex = exitButn.CreateTexture('','BACKGROUND')
        exittex.SetTexture("Interface\\BUTTONS\\UI-Panel-MinimizeButton-Up.blp")
        exittex.SetAllPoints(exitButn)
        exittex.SetPoint("CENTER",0,0)
    exitButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        shown = false;
        mframe.Hide()
        searchBox.Hide()
    })

let lastPageButn = CreateFrame("Button", '', mframe)
    lastPageButn.SetPoint("LEFT", mframe, "TOPLEFT",70,-90)
    lastPageButn.SetWidth(35)
    lastPageButn.SetHeight(35)
    let lasttex = lastPageButn.CreateTexture('','BACKGROUND')
        lasttex.SetTexture("Interface\\BUTTONS\\UI-SpellbookIcon-PrevPage-Up.blp")
        lasttex.SetAllPoints(lastPageButn)
        lasttex.SetPoint("CENTER",0,0)
    lastPageButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        if(page > 0){
            page = page - 1
            pageCt.SetText("Page " + (page+1) + "/"+Math.ceil(itemArray.length/(columns*rows)))
        }
        clearButtons()
        createButtons()
    })

let nextPageButn = CreateFrame("Button", '', mframe)
    nextPageButn.SetPoint("LEFT", mframe, "TOPLEFT",170,-90)
    nextPageButn.SetWidth(35)
    nextPageButn.SetHeight(35)
    let nexttex = nextPageButn.CreateTexture('','BACKGROUND')
        nexttex.SetTexture("Interface\\BUTTONS\\UI-SpellbookIcon-NextPage-Up.blp")
        nexttex.SetAllPoints(nextPageButn)
        nexttex.SetPoint("CENTER",0,0)
    nextPageButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        if(itemArray.length  > columns*rows*(page+1)){
            page = page + 1
            pageCt.SetText("Page " + (page+1) + "/"+Math.ceil(itemArray.length/(columns*rows)))
        } 
        clearButtons()
        createButtons()
    })

    let searchBox = CreateFrame('EditBox','',UIParent)
        searchBox.SetSize(115,30)
        searchBox.SetPoint('RIGHT',mframe,'TOPRIGHT',-100,-90)
        searchBox.SetFont('Fonts\\ARIALN.TTF',14)
        searchBox.SetMaxLetters(30)
        searchBox.SetMultiLine(false)
        let searchtexBox = searchBox.CreateTexture('','BACKGROUND')
            searchtexBox.SetTexture("Interface\\COMMON\\Common-Input-Border.blp")
            searchtexBox.SetPoint('CENTER',searchBox,'CENTER',-5,-5)
            searchtexBox.SetSize(115,30)
        searchBox.SetScript('OnEnterPressed',(frame)=>{
            searchBox.ClearFocus()
            searchLoot()
        })
        searchBox.SetScript('OnEscapePressed',(frame)=>{
            searchBox.ClearFocus()
        })
        searchBox.Hide()

let searchButn = CreateFrame("Button", '', mframe)
    searchButn.SetPoint("LEFT", searchBox, "RIGHT",0,-5)
    searchButn.SetWidth(60)
    searchButn.SetHeight(35)
    let searchtex = searchButn.CreateTexture('','BACKGROUND')
        searchtex.SetTexture("Interface\\BUTTONS\\UI-DialogBox-Button-Up.blp")
        searchtex.SetAllPoints(searchButn)
        searchtex.SetPoint("CENTER",0,0)
    let searchText = searchButn.CreateFontString('','OVERLAY','GameTooltipText')
        searchText.SetPoint("CENTER",0, 6)
        searchText.SetText("Search")
    searchButn.HookScript("OnClick",(frame,evName,btnDown)=>{
        searchLoot()
    })
Events.AddOns.OnMessage(mframe,itemLootPacket,(msg)=>{
    itemArray.push([msg.itemID,msg.itemCountMin,msg.itemCountMax,msg.dropChance])
});

Events.AddOns.OnMessage(mframe,itemLootFinishMessage,(msg)=>{
    pageCt.SetText("Page " + (page+1) + "/"+Math.ceil(itemArray.length/(columns*rows)))
    createButtons()
});

Events.AddOns.OnMessage(mframe,creatureNoExistMessage,(msg)=>{
    console.log("DOES NOT EXIST!!!")
});

function searchLoot(){
    let pkt = new creatureNameMessage()
        pkt.entry = searchBox.GetText();
    if(pkt.entry.length > 0){
        if(Number(pkt.entry) > 0){
            pkt.isName = 0;
            pkt.entry = Number(pkt.entry).toString()
        }  
        resetFrames()
        pageCt.SetText("Page 1/1")
        SendToServer(pkt)
    }
}

function resetFrames(){
    page = 0
    clearButtons()
    itemArray = []
}

function createButtons(){
    let length = columns*rows;
    if(itemArray.length < (columns*rows)*(page+1)){
        length = itemArray.length%(columns*rows)
    }
    for(let i=0;i<length;i++){
        let item = itemArray[i+((columns*rows)*page)]
        let icon = GetItemIcon(item[1])
        let button = CreateFrame("Button", item[1], mframe)
            button.SetPoint("TOPLEFT", mframe, "TOPLEFT", 55+(((i)%columns)*120), -50+(-90*(Math.floor((i)/columns)+1)))
            button.SetWidth(40)
            button.SetHeight(40)
            let tex = button.CreateTexture('tex1','BACKGROUND')
                tex.SetTexture(icon)
                tex.SetAllPoints(button)
                tex.SetPoint("CENTER",0,0)
            let text1 = button.CreateFontString('','OVERLAY','GameTooltipText')
                text1.SetPoint("CENTER",0,30)
                if(item[2] == item[3]){
                    text1.SetText("Drop #: "+item[2])
                }else{
                    text1.SetText("Drop #: "+item[2]+"-"+item[3])
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
    allButtons = []
}