import { Events, SendToServer } from "./lib/Events";
import {bagSlotMessage, frameCloseMessage, scrapMessage} from "../shared/Messages";
export function DDB(){
    const tileSize = 32
    
    const mapTemplate = [
        1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1
    ]
    //str,stam,agi,int,spi
    //melee damage bonus, health,dodge/small damage bonus,spell damage/mana size,mana regen
    let stats = [1,1,1,1,1]
    const columns = 11
    const rows = mapTemplate.length/columns
    let playerPosition = 12
    let currentMap: WoWAPI.Texture[] = []

    let mframe = CreateFrame('Frame','DDB',UIParent);
        mframe.SetWidth(tileSize*columns)
        mframe.SetHeight(tileSize*rows)
        mframe.SetPoint("CENTER",0,0)
        mframe.EnableKeyboard(true)
        mframe.Hide()
        mframe.SetScript("OnKeyDown",(self,key)=>{
            if(key == "W" || key == "A" || key == "S" || key == "D" || key == "UP" || key == "LEFT" || key == "DOWN" || key == "RIGHT"){
                movement(key)
            }
            else if(key == "ESCAPE"){
                mframe.Hide()
            }   
        })
        
    let showBtn = CreateFrame('Button','showddb',UIParent)
        showBtn.SetWidth(22)
        showBtn.SetHeight(22)
        showBtn.SetPoint("TOPRIGHT",-5,-80)
        let showTex = showBtn.CreateTexture('','BACKGROUND')
            showTex.SetTexture("Interface\\BUTTONS\\UI-GroupLoot-Dice-Up.blp")
            showTex.SetAllPoints(showBtn)
            showBtn.HookScript("OnClick",(frame,evName,btnDown)=>{
                mframe.Show()
                updateMap()
            })
            
    function movement(key:string){
        if(key == "W" || key == "UP"){
            if(mapTemplate[playerPosition-columns] != null)
                if(mapTemplate[playerPosition-columns] == 0)
                    playerPosition = playerPosition-columns
                else if(mapTemplate[playerPosition-columns] == 2){
                    //fight
                }
        }else if(key == "A" || key == "LEFT"){
            if(mapTemplate[playerPosition-1] != null)
                if(mapTemplate[playerPosition-1] == 0)
                    playerPosition = playerPosition-1
                else if(mapTemplate[playerPosition-columns] == 2){
                    //fight
                }
        }else if(key == "S" || key == "DOWN"){
            if(mapTemplate[playerPosition+columns] != null)
                if(mapTemplate[playerPosition+columns] == 0)
                    playerPosition = playerPosition+columns
                else if(mapTemplate[playerPosition-columns] == 2){
                    //fight
                }
        }else if(key == "D" || key == "RIGHT"){
            if(mapTemplate[playerPosition+1] != null)
                if(mapTemplate[playerPosition+1] == 0)
                    playerPosition = playerPosition+1
                else if(mapTemplate[playerPosition-columns] == 2){
                    //fight
                }
        }
        updateMap()
    }
    function generateMap(){
        for(let i=0;i<mapTemplate.length;i++){
            let tex = mframe.CreateTexture('tex'+i,'BACKGROUND')
                tex.SetSize(tileSize,tileSize)
                tex.SetPoint("TOPLEFT",0+((i%columns)*tileSize),0-(Math.floor(i/columns)*tileSize))
            tex = chooseTexture(tex,i)
            currentMap.push(tex)
        }
    }
    generateMap()

    function chooseTexture(tex: WoWAPI.Texture,i:number): WoWAPI.Texture{
        if(mapTemplate[i] == 0){
            tex.SetTexture("tileset\\tanaris\\tanariscracks.blp")
        }
        else if(mapTemplate[i] == 1){
            tex.SetTexture("dungeons\\textures\\argent crusade\\northrend_human_wall_snow.blp")
        }else if(mapTemplate[i] == 2){
            tex.SetTexture("dungeons\\textures\\argent crusade\\northrend_human_wall_snow.blp")
        }
        if(i == playerPosition){
            tex.SetTexture("tileset\\BURNINGSTEPPS\\BurningSteppsLava01.blp")
        }
        return tex
    }

    function updateMap(){
        for (let i=0;i<currentMap.length;i++){
            currentMap[i] = chooseTexture(currentMap[i],i)
        }
    }
    
}