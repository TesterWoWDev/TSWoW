import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata/sql/SQLFiles";
import { MODNAME } from "./recipe-creation";

//tiername,parent,prefix,[itemnames]
//let returnItems = createBaseResources('tier1',2934,'prefix',['moonstone','leather','epulet','chain','steel','reinforced steel','string'])

//statType = 0-str,1-agi,2-int,materialType = 1-cloth,2-leather,3-mail,4-plate
//prefix,quality,statType,statMult,stamMult,matType,names
//let allGear = createGear('prefix',1,0,1,1.5,3,['head','neck','shoulder','back','chest','bracer','hand','belt','leg','boot','ring','trink','ohs','ohm','oha','dag','ths','thm','tha','book','pole','bow','staff','wand','shield','fist'])

//gem,material,epulet,chain[head,neck,shoulder,back,chest,bracer,hand,belt,leg,boot,ring,trink]
//generateGearRecipes(returnItems[0],returnItems[1],returnItems[2],returnItems[3],[allGear[0],allGear[1],allGear[2],allGear[3],allGear[4],allGear[5],allGear[6],allGear[7],allGear[8],allGear[9],allGear[10],allGear[11]])

//material,metal,reinforced,string,chain,[ohs,ohm,oha,dag,ths,thm,tha,book,pole,bow,staff,wand,shield,fist]
//generateWeaponRecipes(returnItems[0],returnItems[1],returnItems[4],returnItems[5],returnItems[6],[allGear[12],allGear[13],allGear[14],allGear[15],allGear[16],allGear[17],allGear[18],allGear[19],allGear[20],allGear[21],allGear[22],allGear[23],allGear[24],allGear[25]])


export function createBaseResources(tierPrefix:string,parentItem:number,prefix:string,description:string,itemNames:string[],displayInfoIDs:number[]):number[]{
    let test = ['gem','material','epulet','chain','metal','reinforced','string']
    let allItemIDs = []
    for(let i=0;i<test.length;i++){
        let item = std.Items.create(MODNAME, tierPrefix + '-' + test[i], parentItem)
        item.Name.enGB.set(prefix + ' ' + itemNames[i])
        item.DisplayInfo.setID(displayInfoIDs[i])
        item.Description.enGB.set(description)
        allItemIDs.push(item.ID)
    }
    return allItemIDs
}
//


export function createGear(modfix:string,prefix:string,quality:number,statType:number,statMultiplier:number,stamMult:number,materialType:number,names:string[],display:number[]):number[]{
    let ids = [[4,materialType,1],[4,0,2],[4,materialType,3],[4,1,16],[4,materialType,5],[4,materialType,9],[4,materialType,10],[4,materialType,6],[4,materialType,7],[4,materialType,8],[4,0,11],[4,0,12],[2,7,13],[2,4,13],[2,0,13],[2,15,13],[2,8,17],[2,4,17],[2,1,17],[4,0,23],[2,6,17],[2,2,26],[2,10,17],[2,19,26],[4,6,14],[2,13,13]]
    let cost:number[] = [5,9,6,6,8,4,4,3,7,4,6,7,7,7,7,4,15,15,15,7,15,4,6,5,11,7]

    let allItems = []
    for(let i=0;i<names.length;i++){
        let item = std.Items.create(MODNAME,modfix + ' ' + names[i],38)
        item.Class.set(ids[i][0],ids[i][1])
        item.InventoryType.set(ids[i][2])
        item.Quality.set(quality)
        item.Description.enGB.set('')
        item.Name.enGB.set(prefix + ' ' + names[i])
        item.row.displayid.set(display[i])

        let costval = (cost[i]/2)*statMultiplier
        if(statType == 0){//str
            item.Stats.addStrength(costval)
        }if(statType == 1){//agi
            item.Stats.addAgility(costval)
        }if(statType == 2){//int
            item.Stats.addIntellect(costval)
        }
        item.Stats.addStamina(costval*stamMult)

        costval = costval*3
        if(ids[i][0] == 2){//weapon need dps
            if(ids[i][2] == 17){//2h
                item.Damage.addPhysical(costval*2,costval*3)
                item.row.delay.set(2800)
            }if(ids[i][1] == 15){//dagger
                item.Damage.addPhysical(costval/1.5,costval)
                item.row.delay.set(1600)
            }else{//1h
                item.Damage.addPhysical(costval,costval*1.5)
                item.Delay.set(1900)
            }
        }else{
            item.Armor.set(costval*5)
        }
        allItems.push(item.ID)
    }
    return allItems
}

export function generateGearRecipes(gem: Number, material: Number, epulet: Number, chain: Number,itemID: Number[]) {
    let zero = 0
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + material + ',' + material + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 5 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[0] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + chain + ',' + material + ',' + material + ',' + gem + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 5 + ',' + chain + ',' + 1 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[1] + ',' + 1 + ')') 
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + epulet + ',' + zero + ',' + epulet + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 2 + ',' + epulet + ',' + 2 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[2] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + chain + ',' + material + ',' + material + ',' + material + ',' + material + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 5 + ',' + chain + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[3] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + zero + ',' + material + ',' + material + ',' + material + ',' + material + ',' + material + ',' + material + ',' + material + ',' +
    '' + material + ',' + 8 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[4] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 4 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[5] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + zero + ',' + material + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 4 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[6] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + material + ',' + material + ',' + material + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 3 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[7] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + material + ',' + material + ',' + material + ',' + zero + ',' + material + ',' + material + ',' + zero + ',' + material + ',' +
    '' + material + ',' + 7 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[8] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' + material + ',' + material + ',' + zero + ',' + material + ',' +
    '' + material + ',' + 4 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[9] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + gem + ',' + zero + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 3 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[10] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + material + ',' + zero + ',' + material + ',' + gem + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 4 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[11] + ',' + 1 + ')')
}

export function generateWeaponRecipes(gem: number,material: number,metal: number,reinforced: number,string: number,itemID: number[]){
    let zero = 0
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + metal + ',' + zero + ',' + zero + ',' + metal + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + metal + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[0] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + metal + ',' + metal + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + metal + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[1] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + metal + ',' + zero + ',' + zero + ',' + material + ',' + metal + ',' +
    '' + metal + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[2] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + metal + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + metal + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[2] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + reinforced + ',' + zero + ',' + zero + ',' + reinforced + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + reinforced + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[3] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + reinforced + ',' + reinforced + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + reinforced + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[4] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + reinforced + ',' + zero + ',' + zero + ',' + material + ',' + reinforced + ',' +
    '' + reinforced + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[5] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + material + ',' + material + ',' + zero + ',' + gem + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 3 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[6] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + reinforced + ',' + zero + ',' + reinforced + ',' + zero + ',' + material + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 1 + ',' + reinforced + ',' + 2 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[7] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + material + ',' + zero + ',' + zero + ',' + string + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 3 + ',' + string + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[8] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + gem + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 2 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[9] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + gem + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 1 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[10] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + zero + ',' + material + ',' + zero + ',' + reinforced + ',' + zero + ',' + material + ',' + zero + ',' + material + ',' +
    '' + material + ',' + 4 + ',' + reinforced + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[11] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + material + ',' + zero + ',' + metal + ',' + zero + ',' + metal + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 1 + ',' + metal + ',' + 2 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[12] + ',' + 1 + ')')
}