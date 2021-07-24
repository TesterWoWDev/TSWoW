import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";
import { SQL } from "wotlkdata/sql/SQLFiles";
import { MODNAME } from "../modname";

export function spawnNPC(id: number, wanderDistance:number, equipmentID:number, position:number[], index?:number) {
    if(index == null){
        index = 0
    }
    let npc = std.CreatureTemplates.load(id);
    let spawn = npc.spawn(MODNAME,id+"creature-spawn"+index,Pos(725,position[0],position[1],position[2],position[3]))
    spawn.row.equipment_id.set(equipmentID)
    if(wanderDistance > 0){
        spawn.WanderDistance.set(wanderDistance);
        spawn.MovementType.setRandomMovement()
    }
    return spawn.GUID

}

export function spawnMultipleNPCs(id:number,wanderDistance:number, equipmentID:number, positions:number[][]){
    let guids = []
    for (let i = 0; i < positions.length; i++) {
        let spawn = spawnNPC(id,wanderDistance,equipmentID,positions[i],i);
        guids.push(spawn)
    }
    return guids
}

export function spawnNPCWithTimer(id:number, wanderDistance:number, equipmentID:number,position:number[], respawnTime:number){
    let npc = std.CreatureTemplates.load(id);
    let spawn = npc.spawn(MODNAME,id+"creature-spawn",Pos(725,position[0],position[1],position[2],position[3]))
    spawn.row.equipment_id.set(equipmentID)
    spawn.SpawnTime.set(respawnTime)
    if(wanderDistance > 0){
        spawn.WanderDistance.set(wanderDistance);
        spawn.MovementType.setRandomMovement()
    }
    return spawn.GUID
}

export function spawnGob(id: number, position:number[], index?:number) {
    if(index == null){
        index = 0
    }
    let gob = std.GameObjectTemplates.load(id);
    gob.spawn(MODNAME,id+"gob-spawn"+index,Pos(725,position[0],position[1],position[2],position[3])).row.id.set(id).rotation2.set(0).rotation3.set(0);
}

export function spawnMultipleGobs(id:number, positions:number[][]){
    for (let i = 0; i < positions.length; i++) {
        spawnGob(id,positions[i],i);
    }
}

export function spawnGobTimer(id: number, position:number[], spawnSecs:number) {
    let gob = std.GameObjectTemplates.load(id);
    gob.spawn(MODNAME,id+"gob-spawn",Pos(725,position[0],position[1],position[2],position[3])).row.id.set(id).rotation2.set(0).rotation3.set(0).spawntimesecs.set(spawnSecs);
}

export function addWaypoint(guid:number,path:number[][]){
    let pathID = guid*10
    path.forEach((value,index)=>{
        
    SQL.waypoint_data.add(pathID,index).position_x.set(value[0]).position_y.set(value[1]).position_z.set(value[2]).orientation.set(value[3]).delay.set(value[4]).move_type.set(0)
    })
    SQL.creature_addon.add(guid).path_id.set(pathID)
}
export function addWaypoints(guids:number[],paths:number[][][]){
    guids.forEach((value,index)=>{
        addWaypoint(value,paths[index])
    })
}