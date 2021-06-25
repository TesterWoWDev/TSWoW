import { std } from "tswow-stdlib";
import { SQL } from "wotlkdata/sql/SQLFiles";
SQL.Databases.world_dest.write('DROP TABLE IF EXISTS `minecraft_recipes`;')
SQL.Databases.world_dest.write('CREATE TABLE `minecraft_recipes` (`pos1` int(11) DEFAULT NULL,`pos2` int(11) DEFAULT NULL,`pos3` int(11) DEFAULT NULL,`pos4` int(11) DEFAULT NULL,`pos5` int(11) DEFAULT NULL,`pos6` int(11) DEFAULT NULL,`pos7` int(11) DEFAULT NULL,`pos8` int(11) DEFAULT NULL,`pos9` int(11) DEFAULT NULL,`req1` int(11) DEFAULT NULL,`cnt1` int(11) DEFAULT NULL,`req2` int(11) DEFAULT NULL,`cnt2` int(11) DEFAULT NULL,`req3` int(11) DEFAULT NULL,`cnt3` int(11) DEFAULT NULL,`req4` int(11) DEFAULT NULL,`cnt4` int(11) DEFAULT NULL,`req5` int(11) DEFAULT NULL,`cnt5` int(11) DEFAULT NULL,`req6` int(11) DEFAULT NULL,`cnt6` int(11) DEFAULT NULL,`req7` int(11) DEFAULT NULL,`cnt7` int(11) DEFAULT NULL,`req8` int(11) DEFAULT NULL,`cnt8` int(11) DEFAULT NULL,`req9` int(11) DEFAULT NULL,`cnt9` int(11) DEFAULT NULL,`craftID` int(11) DEFAULT NULL, `craftCount` int(11) DEFAULT NULL)')
//[head,neck,shoulder,back,chest,bracer,hand,belt,leg,boot,ring,trink]
generateGearItems(39,39,39,39,[39,39,39,39,39,39,39,39,39,39,39,39])
//[ohs,ohm,oha,dag,ths,thm,tha,book,pole,bow,staff,wand,shield,fist]
generateWeaponItems(39,39,39,39,39,[39,39,39,39,39,39,39,39,39,39,39,39,39,39])
function generateGearItems(gem: Number, material: Number, epulet: Number, chain: Number,itemID: Number[]) {
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

function generateWeaponItems(material: number,metal: number,reinforced: number,string: number,gem: number,itemID: number[]){
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