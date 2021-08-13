import { std } from "tswow-stdlib"
import { DBC } from "wotlkdata/dbc/DBCFiles"
import { ItemTemplate } from "../../../tswow-stdlib/datascripts/build/Item/ItemTemplate"
import { AttachedLootSet } from "../../../tswow-stdlib/datascripts/build/Loot/Loot"
import { MODNAME } from "../modname"

//tiername,parent,prefix,[itemnames]
//let returnItems = createBaseResources('tier1',2934,'prefix',['moonstone','leather','epulet','chain','steel','reinforced steel','string'])

//statType = 0-str,1-agi,2-int,materialType = 1-cloth,2-leather,3-mail,4-plate
//prefix,quality,statType,statMult,stamMult,matType,names
//let allGear = createGear('prefix',1,0,1,1.5,3,['head','neck','shoulder','back','chest','bracer','hand','belt','leg','boot','ring','trink','ohs','ohm','oha','dag','ths','thm','tha','book','pole','bow','staff','wand','shield','fist'])

//gem,material,epulet,chain[head,neck,shoulder,back,chest,bracer,hand,belt,leg,boot,ring,trink]
//generateGearRecipes(returnItems[0],returnItems[1],returnItems[2],returnItems[3],[allGear[0],allGear[1],allGear[2],allGear[3],allGear[4],allGear[5],allGear[6],allGear[7],allGear[8],allGear[9],allGear[10],allGear[11]])

//material,metal,reinforced,string,chain,[ohs,ohm,oha,dag,ths,thm,tha,book,pole,bow,staff,wand,shield,fist]
//generateWeaponRecipes(returnItems[0],returnItems[1],returnItems[4],returnItems[5],returnItems[6],[allGear[12],allGear[13],allGear[14],allGear[15],allGear[16],allGear[17],allGear[18],allGear[19],allGear[20],allGear[21],allGear[22],allGear[23],allGear[24],allGear[25]])

export function createMaterial(QualityValue:number,tier:string,itemName:string,description:string,displayInfoID:number):number{
    let parentItem = 2934
    let item = std.Items.create(MODNAME, tier + '-' + itemName.toLowerCase().replace(' ','-'), parentItem)
        item.Quality.set(QualityValue)
        item.Name.enGB.set(itemName)
        item.DisplayInfo.setID(displayInfoID)
        item.Description.enGB.set(description)
        item.ItemLevel.set(0)
        item.MaxStack.set(900)
        return item.ID
}

export function createBaseResources(QualityValue:number,tier:string,itemPrefix:string,Names:string[],displayIDs:number[]):number[]{
    let returnIDs = []
    for(let i=0;i<Names.length;i++){
        let item = std.Items.create(MODNAME, tier + '-' + Names[i].toLowerCase().replace(' ','-'), 2934)
        item.Quality.set(QualityValue)
        item.Name.enGB.set(itemPrefix + ' ' + Names[i])
        item.DisplayInfo.setID(displayIDs[i])
        //item.Description.enGB.set(description)
        item.ItemLevel.set(0)
        item.MaxStack.set(900)
        returnIDs.push(item.ID)
    }
    return returnIDs
}

export function createGear(levelrequirement:number,tier:string,quality:number,statMultiplier:number,materialType:number,disenchantID:number,randomPropID:number,names:string[],display:number[],armSpell:number[],armTrigger:number[]):number[]{
    let ids = [[4,materialType,1],[4,0,2],[4,materialType,3],[4,1,16],[4,materialType,5],[4,materialType,9],[4,materialType,10],[4,materialType,6],[4,materialType,7],[4,materialType,8],[4,0,11],[4,0,12]]
    let costs = [5,9,6,6,8,4,4,3,7,4,6,7]
    let returnIDs = []

    for(let i=0;i<names.length;i++){
        let item = std.Items.create(MODNAME,tier + ' ' + names[i].toLowerCase().replace(" ","-"),38)
        item.Class.set(ids[i][0],ids[i][1])
        item.InventoryType.set(ids[i][2])
        item.Quality.set(quality)
        item.Description.enGB.set('')
        item.RequiredLevel.set(levelrequirement)
        item.Name.enGB.set(names[i])
        item.DisplayInfo.setID(display[i])
        item.Durability.set(20)
        item.RandomProperty.set(randomPropID)
        item.DisenchantID.set(disenchantID)
        item.RequiredDisenchantSkill.set(0)
        item.Flags.set(0)
        armSpell.forEach((value,index)=>{
            item.Spells.add(value).Trigger.set(armTrigger[index])
        })
        
        let costval = (costs[i]/2)*statMultiplier
        item.Price.set(((levelrequirement*levelrequirement)*100), ((levelrequirement*levelrequirement)*150)) //sellprice + buyprice
       // item.Price.set(((quality*quality*100)/1.5),(quality*quality*100))
        item.ItemLevel.set(costval)
        item.Stats.addStamina((costval+levelrequirement)/2)
        item.Armor.set(costval*materialType*3)

        returnIDs.push(item.ID)
    }
    return returnIDs
}

export function createTrinket(levelrequirement:number,tier:string,quality:number,disenchantID:number,randomPropID:number,name:string,display:number,armSpell:number[],armTrigger:number[]){
    let ids = [4,0,12]
    let costs = 7
        let item = std.Items.create(MODNAME,tier + ' ' + name.toLowerCase().replace(" ","-"),38)
        item.Class.set(ids[0],ids[1])
        item.InventoryType.set(ids[2])
        item.Quality.set(quality)
        item.Description.enGB.set('')
        item.RequiredLevel.set(levelrequirement)
        item.Name.enGB.set(name)
        item.DisplayInfo.setID(display)
        item.Durability.set(20)
        item.RandomProperty.set(randomPropID)
        item.DisenchantID.set(disenchantID)
        item.RequiredDisenchantSkill.set(0)
        item.Flags.set(0)
        armSpell.forEach((value,index)=>{
            item.Spells.add(value).Trigger.set(armTrigger[index])
        })
        item.Price.set(((levelrequirement*levelrequirement)*100), ((levelrequirement*levelrequirement)*150)) //sellprice + buyprice
        item.ItemLevel.set(costs/2*quality)
    return item.ID
}
export function createWeapons(levelrequirement:number,tier:string,quality:number,statMultiplier:number,disenchantID:number,randomPropID:number,names:string[],display:number[],wepSpell:number[],wepTrigger:number[]):number[]{
    let ids = [[2,7,13],[2,4,13],[2,0,13],[2,15,13],[2,8,17],[2,5,17],[2,1,17],[4,0,23],[2,6,17],[2,2,26],[2,10,17],[2,19,26],[4,6,14],[2,13,13]]
    let costs = [7,7,7,4,15,15,15,7,15,5,6,5,11,7]
    let returnIDs = []

    for(let i=0;i<names.length;i++){
        let item = std.Items.create(MODNAME,tier + ' ' + names[i].toLowerCase().replace(" ","-").replace("'",""),38)
        item.Class.set(ids[i][0],ids[i][1])
        item.InventoryType.set(ids[i][2])
        item.Quality.set(quality)
        item.Description.enGB.set('')
        item.RequiredLevel.set(levelrequirement)
        item.Name.enGB.set(names[i])
        item.DisplayInfo.setID(display[i])
        item.Durability.set(20)
        item.RandomProperty.set(randomPropID)
        item.DisenchantID.set(disenchantID)
        item.RequiredDisenchantSkill.set(0)
        item.Flags.set(0)
        wepSpell.forEach((value,index)=>{
            item.Spells.add(value).Trigger.set(wepTrigger[index])
        })

        let costval = (costs[i]/2)*statMultiplier
        item.Price.set(((levelrequirement*levelrequirement)*100), ((levelrequirement*levelrequirement)*150)) //sellprice + buyprice
      //  item.Price.set(((quality*quality*100)/2),(quality*quality*100))
        item.ItemLevel.set(costval)
        costval = costval*2
        if(ids[i][0] == 2){//weapon
            item.Material.setMetal()
            if(ids[i][2] == 17){//2h
                item.Damage.addPhysical(costval*levelrequirement*1.5,costval*levelrequirement*2.2)
                item.Delay.set(2800)
                let sheathval = 1
                if(ids[i][1] == 10){//staff
                    sheathval = 2
                }
                item.Sheath.set(sheathval)
                DBC.Item.filter({ID:item.ID}).forEach((value,index,array)=>{
                    value.SheatheType.set(sheathval)
                })
                
            }else if(ids[i][1] == 15){//dagger
                item.Damage.addPhysical(costval*levelrequirement/1.5,costval*levelrequirement)
                item.Delay.set(1600)
                item.Sheath.set(6)
                DBC.Item.filter({ID:item.ID}).forEach((value,index,array)=>{
                    value.SheatheType.set(6)
                })
            }else if(ids[i][2] == 26){//bow
                item.Damage.addPhysical(costval*levelrequirement*2,costval*levelrequirement*3)
                item.Delay.set(2200)
                item.Sheath.set(2)
                item.RangeMod.set(100)
                DBC.Item.filter({ID:item.ID}).forEach((value,index,array)=>{
                    value.SheatheType.set(2)
                })
            }else{//1h
                item.Damage.addPhysical(costval*levelrequirement,costval*levelrequirement*1.5)
                item.Delay.set(1900)
                let sheathval = 3
                if(ids[i][1] == 13){//fist wep
                    sheathval = 0
                }
                item.Sheath.set(sheathval)
                DBC.Item.filter({ID:item.ID}).forEach((value,index,array)=>{
                    value.SheatheType.set(sheathval)
                })
            }
        }else{
            if(ids[i][1] == 6){//shield
                item.Armor.set(costval*5)
                item.Stats.addBlockRating(costval/2)
                item.Sheath.set(4)
                item.BlockChance.set(costval)
                DBC.Item.filter({ID:item.ID}).forEach((value,index,array)=>{
                    value.SheatheType.set(4)
                })
            }   
        }
        returnIDs.push(item.ID)
    }
    return returnIDs
}

export function addLootToItem(loot: AttachedLootSet<ItemTemplate> , items: number[], chances: number[],groupID?:number) {
    if(groupID == null){
        groupID = 0
    }
    items.forEach((value,index)=>{
        if(chances[index] > 0) {
            loot.addItem(value,chances[index],1,1,false,groupID,0)
        }
    })
}