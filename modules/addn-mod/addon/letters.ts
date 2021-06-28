import { showText } from "../shared/Messages";
import { Events } from "./lib/Events";
export function letters(){
    let xSize = 30
    let ySize = 30
    let lastingTime = 6
    let startingPath = "Interface/CHATFRAME/"
    let myMap = new Map([
		["a", "UI-ChatIcon-BattleBro-Disabled"],
        ["b", "UI-ChatIcon-BattleBro-Down"],
        ["c", "UI-ChatIcon-BattleBro-Hi"],
        ["d", "UI-ChatIcon-BattleBro-Up"],
        ["e", "UI-ChatIcon-BlinkHilight"],
        ["f", "UI-ChatIcon-Blizz"],
        ["g", "UI-ChatIcon-Chat-Disabled"],
        ["h", "UI-ChatIcon-Chat-Down"],
        ["i", "UI-ChatIcon-Chat-Up"],
        ["j", "UI-ChatIcon-Maximize-Down"],
        ["k", "UI-ChatIcon-Maximize-Up"],
        ["l", "UI-ChatIcon-Minimize-Down"],
        ["m", "UI-ChatIcon-Minimize-Up"],
        ["n", "UI-ChatIcon-ScrollDown-Disabled"],
        ["o", "UI-ChatIcon-ScrollDown-Down"],
        ["p", "UI-ChatIcon-ScrollDown-Up"],
        ["q", "UI-ChatIcon-ScrollEnd-Disabled"],
        ["r", "UI-ChatIcon-ScrollEnd-Down"],
        ["s", "UI-ChatIcon-ScrollEnd-Up"],
        ["t", "UI-ChatIcon-ScrollUp-Disabled"],
        ["u", "UI-ChatIcon-ScrollUp-Down"],
        ["v", "UI-ChatIcon-ScrollUp-Up"],
        ["w", "UI-ChatRosterIcon-Disabled"],
        ["x", "UI-ChatRosterIcon-Down"],
        ["y", "UI-ChatRosterIcon-Up"],
        ["z", "UI-ChatWhisperIcon"],
        [" ", "UI-ChatInputBorder"],
        ["0","CHATFRAMEBACKGROUND"],
        ["1","ChatFrameColorSwatch"],
        ["2","ChatFrameExpandArrow"],
        ["3","ChatFrameBorder"],
        ["4","chat-tab-arrow-on"],
        ["5","UI-ChatConversationIcon"],
        ["6","UI-ChatFrame-LockIcon"],
        ["7","UI-ChatIM-SizeGrabber-Down"],
        ["8","UI-ChatIM-SizeGrabber-Highlight"],
        ["9","UI-ChatIM-SizeGrabber-Up"],
    ])

    let curTime = 0
    let allLetters: TSArray<WoWAPI.Frame> = []
    function showLetters(input:string){
        input = input.toLowerCase()
        let ret = input.split('')
        let length = ret.length
        let resetPoint = (length/2)-0.5
        for(let i=0;i<length;i++){
            let letter = CreateFrame('Frame','letter'+i)
            letter.SetSize(xSize,ySize)
            letter.SetPoint('CENTER',UIParent,'CENTER',(xSize*i)-(resetPoint*xSize),120)
            let tex = letter.CreateTexture(letter.GetName() + "img")
                tex.SetAllPoints()
                tex.SetTexture(startingPath + myMap.get(ret[i]))
            allLetters.push(letter)
        }
        allLetters[0].SetScript('OnUpdate',(frame,elapsed)=>{
            curTime = curTime + elapsed
            if(curTime >= lastingTime){
                allLetters.forEach((value,index)=>{
                    value.SetScript('OnUpdate', null)
                    value.Hide()
                })
                curTime = 0
                allLetters = []
            }
        })
    }

    let mframe = CreateFrame('Frame','letters',UIParent);
    Events.AddOns.OnMessage(mframe,showText,(msg)=>{
        //showLetters(msg.showTextVar)
    })
}