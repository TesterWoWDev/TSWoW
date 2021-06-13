let turnSpeed = 34 //bigger = slower
let dragSpeed = 100 //bigger = slower
let zoomSpeed =  0.5 //smaller = slower
export function SetupModelZoomDragRotation(model: WoWAPI.DressUpModel) {
    model.SetPosition(0,0,0)
    model.EnableMouse(true)
    model.EnableMouseWheel(true)
    model.SetScript('OnMouseDown', function(self,button){
        let startPos = GetCursorPosition()
        if (button == 'LeftButton'){
            model.SetScript('OnUpdate', function(self){
                let curX = GetCursorPosition()[0]
                model.SetFacing((curX - startPos[0]) / turnSpeed + model.GetFacing())
                startPos[0] = curX
            })
        }
        else if (button == 'RightButton') {
            model.SetScript('OnUpdate', function(self){
                let cursorPos = GetCursorPosition()
                let pos = model.GetPosition()
                pos[1] = (cursorPos[0] - startPos[0]) / dragSpeed + pos[1]
                pos[2] = (cursorPos[1] - startPos[1]) / dragSpeed + pos[2]
                model.SetPosition(pos[0],pos[1],pos[2])
                startPos[0] = GetCursorPosition()[0]
                startPos[1] = GetCursorPosition()[1]
            })
        }   
    })
    model.SetScript('OnMouseUp', function(self,button){
        model.SetScript('OnUpdate', null)
    })
    model.SetScript('OnMouseWheel', function(self, zoom){
        let pos = model.GetPosition()
        if(zoom == 1){
            pos[0] += zoomSpeed
        }else{
            pos[0] -= zoomSpeed
        }
        model.SetPosition(pos[0],pos[1],pos[2])
    })
}