import { Events, SendToServer } from "./lib/Events";
import {bagSlotMessage, frameCloseMessage, scrapMessage} from "../shared/Messages";
export function DDB(){
    const tileSize = 32
    
    class Entity {
        icon: string;
        stats: Stats;
        location: number;
        name: string;
        healthBar:WoWAPI.StatusBar;
        constructor(icon:string, stats:number[],location:number,name:string, healthBar:WoWAPI.StatusBar) {
            this.icon = icon
            this.stats = new Stats(stats)
            this.location = location
            this.name = name
            this.healthBar = healthBar
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
    let healthCnt = rand(7)+7
let Enemies: Entity[] = []
    let currentMapTextures: WoWAPI.Texture[] = []
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
        generateMap()
        let Player = new Entity("tileset\\BURNINGSTEPPS\\BurningSteppsLava01.blp",[rand(7),healthCnt,rand(7),rand(7),rand(7),healthCnt],12,"Player",createStatusBar(12,healthCnt))
    
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
            currentMapTextures.push(tex)
        }
    }
    

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
        for (let i=0;i<currentMapTextures.length;i++){
            currentMapTextures[i] = chooseTexture(currentMapTextures[i],i)
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
                    Enemies[i].healthBar.Hide()
                    Enemies.splice(i,1)
                    print("You Killed an enemy!")
                }
                if(Player.stats.health <=0){
                    playerDeath()
                }
                refresh = true
            }else{
                currentMapTextures[Enemies[i].location].SetTexture(Enemies[i].icon)
            }
        }
        currentMapTextures[Player.location].SetTexture(Player.icon)
        if(refresh)
            updateMap()
        else{
            Player.stats.health = Player.stats.health + (Player.stats.spi/2)
            if(Player.stats.health > Player.stats.stam){
                Player.stats.health = Player.stats.stam
            }
        }
        updateHealthBars()
        statsText.SetText("Str: "+Player.stats.str + " Stam: " + Player.stats.stam + " Agi: "+Player.stats.agi + " Int: "+ Player.stats.int + " Spi: "+Player.stats.spi + " Cur HP: "+ Player.stats.health)
        turnCounter++    
    }

    function updateHealthBars(){
        for(let i=0;i<Enemies.length;i++){
            Enemies[i].healthBar.SetMinMaxValues(0,Enemies[i].stats.stam)
            Enemies[i].healthBar.SetValue(Enemies[i].stats.health)
            Enemies[i].healthBar.SetPoint("TOP", currentMapTextures[Enemies[i].location], "BOTTOM", 0, 0)
        }
        Player.healthBar.SetMinMaxValues(0,Player.stats.stam)
        Player.healthBar.SetValue(Player.stats.health)
        Player.healthBar.SetPoint("TOP", currentMapTextures[Player.location], "BOTTOM", 0, 0)
    }
    function playerDeath(){
        print("YOU DIED")
        Enemies = [];
        Player.location = 12
        Player.stats.health = Player.stats.stam
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
            if(notFound){
                let healthCnt = rand(maxStat*3)
                Enemies.push(new Entity("Interface\\Icons\\Ability_BullRush.blp",[rand(maxStat),healthCnt,rand(maxStat),rand(maxStat),rand(maxStat),healthCnt],place,"Enemy",createStatusBar(place,healthCnt)))
            }
        }
    }

    function rand(max){
        return Math.floor(Math.random()*max)
    }

    function createStatusBar(location:number,max:number):WoWAPI.StatusBar{
        let frame = CreateFrame('StatusBar','playerhp',mframe)
            frame.SetPoint("TOP", currentMapTextures[location], "TOP", 0, 0)
            frame.SetWidth(32)
            frame.SetHeight(8)
            frame.SetStatusBarTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
            frame.SetStatusBarColor(0, 0.65, 0,1)
            frame.SetMinMaxValues(0,max)
        let bg = frame.CreateTexture(null, "BACKGROUND")
            bg.SetTexture("Interface\\TARGETINGFRAME\\UI-StatusBar")
            bg.SetAllPoints()
            bg.SetVertexColor(0, 0.35, 0, 1)
        frame.SetValue(0)
        frame.Show()
        return frame
    }
}