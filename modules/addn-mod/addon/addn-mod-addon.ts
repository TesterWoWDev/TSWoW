import { scrapper } from "./scrapper";
import { atlas } from "./atlas";

scrapper()
atlas()

let Portrait = CreateFrame('DressUpModel','testFrontModel',UIParent)
Portrait.SetCreature(299)
Portrait.SetSize(300,300)
Portrait.SetPoint('CENTER',UIParent,'CENTER')
Portrait.SetPosition(0,0,0)
Portrait.Show()
Portrait.EnableMouse(true)

Portrait.SetScript('OnMouseUp', function(self,button){
    Portrait.SetScript('OnUpdate', null)
})

let rotation = 0
Portrait.SetScript('OnMouseDown', function(self,button){
    let StartX = GetCursorPosition()[0]
    if (button == 'LeftButton'){
        Portrait.SetScript('OnUpdate', function(self){
            let cursorX = GetCursorPosition()[0]
            rotation = (cursorX - StartX) / 34 + Portrait.GetFacing()
            Portrait.SetFacing(rotation)
            StartX = cursorX
        })
    }
})