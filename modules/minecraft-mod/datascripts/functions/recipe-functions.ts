import { SQL } from "wotlkdata/sql/SQLFiles"

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
    '' + itemID[3] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + reinforced + ',' + zero + ',' + zero + ',' + reinforced + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + reinforced + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[4] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + reinforced + ',' + reinforced + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + reinforced + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[5] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + reinforced + ',' + zero + ',' + zero + ',' + material + ',' + reinforced + ',' +
    '' + reinforced + ',' + 2 + ',' + material + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[6] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + material + ',' + material + ',' + zero + ',' + gem + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 3 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[7] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + reinforced + ',' + zero + ',' + reinforced + ',' + zero + ',' + material + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 1 + ',' + reinforced + ',' + 2 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[8] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + material + ',' + zero + ',' + zero + ',' + string + ',' + material + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 3 + ',' + string + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[9] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + gem + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 2 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[10] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + gem + ',' + zero + ',' + zero + ',' + material + ',' + zero + ',' +
    '' + material + ',' + 1 + ',' + gem + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[11] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + material + ',' + zero + ',' + material + ',' + zero + ',' + reinforced + ',' + zero + ',' + material + ',' + zero + ',' + material + ',' +
    '' + material + ',' + 4 + ',' + reinforced + ',' + 1 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[12] + ',' + 1 + ')')
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + zero + ',' + material + ',' + zero + ',' + metal + ',' + zero + ',' + metal + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + material + ',' + 1 + ',' + metal + ',' + 2 + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' + zero + ',' +
    '' + itemID[13] + ',' + 1 + ')')
}

export function createRecipe(positions:Number[],reqs:Number[],reqCounts:Number[],craftID:number,craftCnt:number){
    SQL.Databases.world_dest.write('INSERT INTO `minecraft_recipes` VALUES(' + positions[0] + ',' + positions[1] + ',' + positions[2] + ',' + positions[3] + ',' + positions[4] + ',' + positions[5] + ',' + positions[6] + ',' + positions[7] + ',' + positions[8] + ',' +
    '' + reqs[0] + ',' + reqCounts[0] + ',' + reqs[1] + ',' + reqCounts[1] + ',' + reqs[2] + ',' + reqCounts[2] + ',' + reqs[3] + ',' + reqCounts[3] + ',' + reqs[4] + ',' + reqCounts[4] + ',' + reqs[5] + ',' + reqCounts[5] + ',' + reqs[6] + ',' + reqCounts[6] + ',' + reqs[7] + ',' + reqCounts[7] + ',' + reqs[8] + ',' + reqCounts[8] + ',' +
    '' + craftID + ',' + craftCnt + ')')
}