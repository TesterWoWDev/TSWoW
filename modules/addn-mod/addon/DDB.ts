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
        health:number
        agi:number
        int:number
        spi:number
        constructor(stats:number[]){
            this.str = stats[0]
            this.health = stats[1]
            this.agi = stats[2]
            this.int = stats[3]
            this.spi = stats[4]
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
    let Player = new Entity("tileset\\BURNINGSTEPPS\\BurningSteppsLava01.blp",[3,10,2,4,2],12,"Player")
    let Enemies: Entity[] = []
    let currentMap: WoWAPI.Texture[] = []
    let playerLastPosition = 0
    let turnCounter = 0
    let turnsToEnemy = 10

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
        
    let showBtn = CreateFrame('Button','showddb',UIParent)
        showBtn.SetWidth(22)
        showBtn.SetHeight(22)
        showBtn.SetPoint("TOPRIGHT",-5,-80)
        let showTex = showBtn.CreateTexture('','BACKGROUND')
            showTex.SetTexture("Interface\\BUTTONS\\UI-GroupLoot-Dice-Up.blp")
            showTex.SetAllPoints(showBtn)
            showBtn.HookScript("OnClick",(frame,evName,btnDown)=>{
                mframe.Show()
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
        for (let i=0;i<Enemies.length;i++){
            if(Player.location == Enemies[i].location){
                Player.location = playerLastPosition//freeze player in place
                if(didNotDodge(Player,Enemies[i]))
                Enemies[i].stats.health = Enemies[i].stats.health - (Player.stats.str+(Player.stats.agi/2))
                if(didNotDodge(Enemies[i],Player))
                Player.stats.health = Player.stats.health - (Enemies[i].stats.str + (Enemies[i].stats.agi/2)) 

                if(Enemies[i].stats.health <=0){
                    Enemies.splice(i,1)
                    print("You Killed " + Enemies[i].name)
                }
                if(Player.stats.health <=0)
                print("you died! but like... yeah. nothing in")



                updateMap()//clean
            }else{
                currentMap[Enemies[i].location+1].SetTexture(Enemies[i].icon)
            }
        }
        currentMap[Player.location].SetTexture(Player.icon)
        turnCounter++
    }

    function didNotDodge(attacker, attacked){
        let odds = attacker.stats.agi - attacked.stats.agi
        if(odds > 0){
            return false
        }
        return true
    }
    function generateEnemy(maxStat){
        let place = Math.floor(Math.random()*mapTemplate.length)
        if(mapTemplate[place] == 0){
            let notFound = true
            for(let i=0;i<Enemies.length;i++){
                if(place == Enemies[i].location){
                    notFound = false
                    break
                }
            }
            if(notFound)
            Enemies.push(new Entity("Interface\\Icons\\Ability_BullRush.blp",[rand(maxStat),rand(maxStat),rand(maxStat),rand(maxStat),rand(maxStat)],place,"Enemy"))
        }else{
            generateEnemy(maxStat)
        }
    }

    function rand(max){
        return Math.floor(Math.random()*max)
    }
}