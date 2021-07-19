import { SQL } from "wotlkdata/sql/SQLFiles"

//gameobjects
addToInvasion(0,0,185927,-7905.21,170.081,6.40744,1.88203)
addToInvasion(0,0,185927,-7952.07,132.74,4.68647,1.90166)
addToInvasion(0,0,185927,-7995.09,176.265,-5.55533,5.54984)
addToInvasion(0,0,185927,-7969.59,227.556,-35.598,5.48701)
addToInvasion(0,0,185927,-7948.56,277.611,-25.9806,1.22623)
addToInvasion(0,0,185927,-7883.53,292.829,7.21104,3.87695)
addToInvasion(0,0,185927,-7888.56,241.888,3.54133,2.96589)
addToInvasion(0,0,185927,-7924.62,219.961,24.4688,3.1426)
addToInvasion(0,0,185927,-8007.08,276.864,-1.56519,4.3796)
addToInvasion(0,0,185927,-8046.86,219.912,3.84104,6.0525)
addToInvasion(0,0,185927,-8034.48,311.17,3.60891,4.9333)
addToInvasion(0,0,185927,-8076.04,272.797,3.4338,4.93723)
addToInvasion(0,0,185927,-7987.02,297.581,-16.0146,5.45559)
addToInvasion(0,0,184827,-7948.86,182.209,2.60609,1.399)
addToInvasion(0,0,184827,-7916.24,176.538,3.04136,2.83235)
addToInvasion(0,0,184827,-7960.5,309.559,0.180183,2.33363)
addToInvasion(0,0,184827,-8022.76,282.855,6.65162,6.11531)
addToInvasion(0,0,184827,-7993.07,259.158,-32.9157,3.02869)
addToInvasion(0,0,185589,-8004.57,144.335,0.707389,5.27099)
addToInvasion(0,0,185589,-8074.14,250.03,0.046494,3.23288)
addToInvasion(0,0,185589,-7935.79,341.719,0.181484,0.562527)
addToInvasion(0,0,185589,-7840.07,208.413,0.795613,2.52995)
addToInvasion(0,0,4002164,-7988.79,256.07,13.9983,5.36957)


function addToInvasion(invasionId:number, isCreature:number, entry:number, x:number, y:number, z:number, o:number){
    SQL.Databases.world_dest.write('insert INTO `invasions` VALUES('+invasionId+','+isCreature+','+entry+','+x+','+y+','+z+','+o+')')
}