import { Events, SendToServer } from "./lib/Events";
import {bagSlotMessage, frameCloseMessage, scrapMessage} from "../shared/Messages";
export function DDB(){
    const tileSize = 32
    
    class Entity {
        icon: string;
        stats: Stats;
        location: number;
        name: string;
        constructor(icon:string, stats:number[],location:number,name:string) {
            this.icon = icon
            this.stats = new Stats(stats)
            this.location = location
            this.name = name
        }
    }

    class Stats {
        str:number
        stam:number
        agi:number
        int:number
        spi:number
        health:number
        constructor(stats:number[]){
            this.str = stats[0]
            this.stam = stats[1]
            this.agi = stats[2]
            this.int = stats[3]
            this.spi = stats[4]
            this.health = stats[5]
        }
    }

    const mapTemplate = [
        1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1
    ]
    const columns = 11
    const rows = mapTemplate.length/columns
    let Player = new Entity("tileset\\BURNINGSTEPPS\\BurningSteppsLava01.blp",[3,10,2,4,2,10],12,"Player")
    let Enemies: Entity[] = []
    let currentMap: WoWAPI.Texture[] = []
    let playerLastPosition = 0
    let turnCounter = 0
    let turnsToEnemy = 6

    let mframe = CreateFrame('Frame','DDB',UIParent);
        mframe.SetWidth(tileSize*columns)
        mframe.SetHeight(tileSize*rows)
        mframe.SetPoint("CENTER",0,0)
        mframe.EnableKeyboard(true)
        mframe.Hide()
        mframe.SetScript("OnKeyDown",(self,key)=>{
            if(key == "W" || key == "A" || key == "S" || key == "D" || key == "UP" || key == "LEFT" || key == "DOWN" || key == "RIGHT"){
                movement(key)
            }else if(key == "C"){
                //show char frame
            }
            else if(key == "ESCAPE"){
                mframe.Hide()
            }
        })
        
    let statsFrame = CreateFrame('Frame','Stats',mframe)
        statsFrame.SetWidth(mframe.GetWidth())
        statsFrame.SetHeight(40)
        statsFrame.SetBackdrop({bgFile : "Interface/TutorialFrame/TutorialFrameBackground", 
            edgeFile : "Interface/DialogFrame/UI-DialogBox-Border", 
            tile : true, tileSize : 22, edgeSize : 22, 
            insets : { left : 4, right : 4, top : 4, bottom : 4 }});
        statsFrame.SetBackdropColor(0,0,0,1);
        statsFrame.SetPoint('TOP',mframe,'BOTTOM')

        let statsText = statsFrame.CreateFontString('','OVERLAY','GameTooltipText')
            statsText.SetPoint("LEFT",10,0)
            statsText.SetText("Str: "+Player.stats.str + " Stam: " + Player.stats.stam + " Agi: "+Player.stats.agi + " Int: "+ Player.stats.int + " Spi: "+Player.stats.spi + " Cur HP: "+ Player.stats.health)

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
            if(mapTemplate[Player.location-columns] != null)
                if(mapTemplate[Player.location-columns] == 0){
                    playerLastPosition = Player.location
                    Player.location = Player.location-columns
                }
        }else if(key == "A" || key == "LEFT"){
            if(mapTemplate[Player.location-1] != null)
                if(mapTemplate[Player.location-1] == 0){
                    playerLastPosition = Player.location
                    Player.location = Player.location-1
                }
        }else if(key == "S" || key == "DOWN"){
            if(mapTemplate[Player.location+columns] != null)
                if(mapTemplate[Player.location+columns] == 0){
                    playerLastPosition = Player.location
                    Player.location = Player.location+columns
                }
        }else if(key == "D" || key == "RIGHT"){
            if(mapTemplate[Player.location+1] != null)
                if(mapTemplate[Player.location+1] == 0){
                    playerLastPosition = Player.location
                    Player.location = Player.location+1
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
        }
        return tex
    }

    function updateMap(){
        if(turnCounter%turnsToEnemy == 0){
            generateEnemy(5)
        }
        for (let i=0;i<currentMap.length;i++){
            currentMap[i] = chooseTexture(currentMap[i],i)
        }
        let refresh = false
        for (let i=0;i<Enemies.length;i++){
            if(Player.location == Enemies[i].location){
                Player.location = playerLastPosition//freeze player in place
                if(didNotDodge(Player,Enemies[i])){
                    Enemies[i].stats.health = Enemies[i].stats.health - (Player.stats.str+(Player.stats.agi/2))
                }
                else{
                    print("Enemy dodged!")
                }
                if(didNotDodge(Enemies[i],Player)){
                    Player.stats.health = Player.stats.health - (Enemies[i].stats.str + (Enemies[i].stats.agi/2))
                }
                else{
                    print("you dodged!")
                }
                if(Enemies[i].stats.health <=0){
                    Enemies.splice(i,1)
                    print("You Killed an enemy!")
                }
                if(Player.stats.health <=0){
                    print("you died! but like... yeah. nothing in")
                }
                refresh = true
            }else{
                currentMap[Enemies[i].location].SetTexture(Enemies[i].icon)
            }
        }
        currentMap[Player.location].SetTexture(Player.icon)
        if(refresh)
            updateMap()
        else{
            Player.stats.health = Player.stats.health + 1
            if(Player.stats.health > Player.stats.stam){
                Player.stats.health = Player.stats.stam
            }
        }
        statsText.SetText("Str: "+Player.stats.str + " Stam: " + Player.stats.stam + " Agi: "+Player.stats.agi + " Int: "+ Player.stats.int + " Spi: "+Player.stats.spi + " Cur HP: "+ Player.stats.health)
        turnCounter++    
    }

    function didNotDodge(attacker, attacked){
        let odds = attacker.stats.agi - attacked.stats.agi
        if(odds > 0){
            if(Math.random()*10 > 9)
                return false
        }
        return true
    }

    function generateEnemy(maxStat){
        let place = rand(mapTemplate.length)
        if(mapTemplate[place] == 0){
            let notFound = true
            for(let i=0;i<Enemies.length;i++){
                if(place == Enemies[i].location){
                    notFound = false
                    break
                }
            }
            if(notFound)
            Enemies.push(new Entity("Interface\\Icons\\Ability_BullRush.blp",[rand(maxStat),rand(maxStat*3),rand(maxStat),rand(maxStat),rand(maxStat),rand(maxStat*3)],place,"Enemy"))
        }
    }

    function rand(max){
        return Math.floor(Math.random()*max)
    }
}