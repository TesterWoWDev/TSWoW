import { std } from "tswow-stdlib"
import { SQL_creature_loot_template } from "wotlkdata/sql/types/creature_loot_template"
import { SQL_creature_template_movement } from "wotlkdata/sql/types/creature_template_movement"
import { SQL_waypoint_data } from "wotlkdata/sql/types/waypoint_data"
import { addWaypoint, spawnMultipleNPCWithTimer, spawnNPCWithTimer } from "../functions/spawning-functions"
import { Zone2Creature5 } from "./(Zone-2)HauntedHollows/zone-2-creatures"
import { OrbofPower } from "./(Zone-5)Mall/ClassQuests/ARarePowerOrb"


export let TeremustheDevourer = std.CreatureTemplates.load(7846)
TeremustheDevourer.Level.set(30)
TeremustheDevourer.Stats.HealthMod.set(60)
TeremustheDevourer.Stats.DamageMod.set(10)
TeremustheDevourer.Stats.ArmorMod.set(100)
TeremustheDevourer.MovementType.setWaypoint()
TeremustheDevourer.HoverHeight.set(1)
TeremustheDevourer.MovementSpeed.set(10,10)
SQL_creature_loot_template.add(TeremustheDevourer.ID,OrbofPower.ID).MinCount.set(3).MaxCount.set(3).GroupId.set(8).Chance.set(75)

let TeremustheDevourerGUID = spawnNPCWithTimer(TeremustheDevourer.ID,200,0,
    [-8114.068848,407.7459,40.214,4.38],3600)

/*addWaypoint(TeremustheDevourerGUID,[
    [-8118.032227,167.130127,0.385031,1.114623,0],
    [-8118.032227,167.130127,0.385031,1.114623,0],
    [-8096.434082,211.146317,0.385031,1.114623,0],
    [-8077.522949,249.686569,0.385031,1.114623,0],
    [-8015.776855,265.939209,0.385031,1.004667,0],
    [-7895.859375,290.834656,0.385031,1.271702,0],
    [-7851.308594,391.449402,0.385031,2.363406,0],
    [-7917.164551,441.007446,0.385031,2.547975,0],
    [-8002.609375,501.461517,0.385031,2.328063,0],
    [-8051.108887,573.350891,0.385031,2.006050,0],
    [-8081.376465,663.390320,0.385031,1.762576,0],
    [-8140.656250,752.662231,0.385031,2.520486,0],
    [-8197.198242,791.590149,0.385031,3.034922,0],
    [-8301.951172,798.297546,0.385031,3.097754,0],
    [-8401.448242,789.975525,0.385031,3.376570,0],
    [-8455.218750,738.004822,0.385031,4.429001,0],
    [-8451.646484,668.357605,0.385031,4.994486,0],
    [-8432.068359,595.306152,0.385031,4.731379,0],
    [-8421.533203,506.328430,0.385031,4.978777,0],
    [-8408.778320,443.141418,0.385031,4.778503,0],
    [-8408.551758,338.602844,0.385031,4.699965,0],
    [-8399.631836,288.434235,0.385031,5.147637,0],
    [-8346.824219,174.835022,0.385031,5.029831,0],
    [-8335.767578,128.415207,0.385031,4.813852,0],
    [-8336.389648,52.755013,0.385031,4.554675,0],
    [-8362.116211,-29.443632,0.385031,4.224812,0],
    [-8397.033203,-83.106148,0.385031,4.024539,0],
    [-8431.659180,-163.613129,0.385031,4.888471,0],
    [-8405.871094,-207.594147,0.385031,5.811308,0],
    [-8345.963867,-210.439301,0.385031,0.227126,0],
    [-8280.692383,-179.459351,0.385031,0.525577,0],
    [-8222.092773,-142.829239,0.385031,0.615898,0],
    [-8166.322754,-87.527634,0.385031,0.910423,0],
    [-8132.009766,-44.782753,0.385031,0.839737,0],
    [-8064.551758,-7.702972,0.385031,0.046484,0],
    [-7969.661621,15.519738,0.385031,0.584482,0],
    [-7947.986816,57.004776,0.385031,1.939295,0],
    [-7993.659180,110.397179,0.385031,2.355556,0],
    [-8059.353027,163.871964,0.385031,2.595102,0]])*/
    SQL_creature_template_movement.add(TeremustheDevourer.ID).Flight.set(1)
