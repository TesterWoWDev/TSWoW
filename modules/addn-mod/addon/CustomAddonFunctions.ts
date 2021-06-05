export function SetupModelZoomDragRotation(Portrait: WoWAPI.DressUpModel) {
    Portrait.SetPosition(0,0,0)
    Portrait.EnableMouse(true)
    Portrait.EnableMouseWheel(true)
    Portrait.SetScript('OnMouseDown', function(self,button){
        let StartX = GetCursorPosition()[0]
        let StartY = GetCursorPosition()[1]
        if (button == 'LeftButton'){
            Portrait.SetScript('OnUpdate', function(self){
                let curX = GetCursorPosition()[0]
                Portrait.SetFacing((curX - StartX) / 34 + Portrait.GetFacing())
                StartX = curX
            })
        }
        else if (button == 'RightButton') {
            Portrait.SetScript('OnUpdate', function(self){
                let curX = GetCursorPosition()[0]
                let curY = GetCursorPosition()[1]
                let pos = Portrait.GetPosition()
                let z = Number(pos[0])
                let x = Number(pos[1])
                let y = Number(pos[2])

                x = (curX - StartX) / 100 + x
                y = (curY - StartY) / 100 + y

                Portrait.SetPosition(z,x,y)
                StartX = GetCursorPosition()[0]
                StartY = GetCursorPosition()[1]
            })
        }   
    })
    Portrait.SetScript('OnMouseUp', function(self,button){
        Portrait.SetScript('OnUpdate', null)
    })
    Portrait.SetScript('OnMouseWheel', function(self, zoom){
        let pos = Portrait.GetPosition()
        let z = Number(pos[0])
        let x = Number(pos[1])
        let y = Number(pos[2])
        if(zoom == 1){
            z = z + 0.5
        }else{
            z = z - 0.5
        }
        Portrait.SetPosition(z,x,y)
    })
}