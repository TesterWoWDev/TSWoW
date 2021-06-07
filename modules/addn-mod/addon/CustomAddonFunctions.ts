export function SetupModelZoomDragRotation(model: WoWAPI.DressUpModel) {
    model.SetPosition(0,0,0)
    model.EnableMouse(true)
    model.EnableMouseWheel(true)
    
    model.SetScript('OnMouseDown', function(self,button){
        let StartX = GetCursorPosition()[0]
        let StartY = GetCursorPosition()[1]
        if (button == 'LeftButton'){
            model.SetScript('OnUpdate', function(self){
                let curX = GetCursorPosition()[0]
                model.SetFacing((curX - StartX) / 34 + model.GetFacing())
                StartX = curX
            })
        }
        else if (button == 'RightButton') {
            model.SetScript('OnUpdate', function(self){
                let curX = GetCursorPosition()[0]
                let curY = GetCursorPosition()[1]
                let pos = model.GetPosition()
                let z = Number(pos[0])
                let x = Number(pos[1])
                let y = Number(pos[2])

                x = (curX - StartX) / 100 + x
                y = (curY - StartY) / 100 + y

                model.SetPosition(z,x,y)
                StartX = GetCursorPosition()[0]
                StartY = GetCursorPosition()[1]
            })
        }   
    })

    model.SetScript('OnMouseUp', function(self,button){
        model.SetScript('OnUpdate', null)
    })

    model.SetScript('OnMouseWheel', function(self, zoom){
        let pos = model.GetPosition()
        let z = Number(pos[0])
        let x = Number(pos[1])
        let y = Number(pos[2])
        if(zoom == 1){
            z = z + 0.5
        }else{
            z = z - 0.5
        }
        model.SetPosition(z,x,y)
    })
}