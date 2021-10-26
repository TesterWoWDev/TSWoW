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

export function spawnNPCWithTimer(id:number, wanderDistance:number, equipmentID:number,position:number[], respawnTime:number,index?:number){
    if(index == null){
        index = 0
    }
    let npc = std.CreatureTemplates.load(id);
    let spawn = npc.spawn(MODNAME,id+"creature-spawn"+index,Pos(725,position[0],position[1],position[2],position[3]))
    spawn.row.equipment_id.set(equipmentID)
    spawn.SpawnTime.set(respawnTime)
    if(wanderDistance > 0){
        spawn.WanderDistance.set(wanderDistance);
        spawn.MovementType.setRandomMovement()
    }
    return spawn.GUID
}

export function spawnMultipleNPCWithTimer(id:number, wanderDistance:number, equipmentID:number,position:number[][], respawnTime:number){
    let guids: number[] = []
    position.forEach((value,index)=>{
        let guid = spawnNPCWithTimer(id,wanderDistance,equipmentID,value,respawnTime,index)
        guids.push(guid)
    })
    
    return guids
}


export function spawnGob(id: number, position:number[], index?:number) {
    if(index == null){
        index = 0
    }
    let gob = std.GameObjectTemplates.load(id);
    let s = gob.spawn(MODNAME,id+"gob-spawn"+index,Pos(725,position[0],position[1],position[2],position[3]))
    return s.row.guid.get()
}

export function spawnMultipleGobs(id:number, positions:number[][]){
    for (let i = 0; i < positions.length; i++) {
        spawnGob(id,positions[i],i);
    }
}

export function spawnGobTimer(id: number, position:number[], spawnSecs:number, index?:number) {
    if(index == null){
        index = 0
    }
    let gob = std.GameObjectTemplates.load(id);
    let spawn = gob.spawn(MODNAME,id+"gob-spawn"+index,Pos(725,position[0],position[1],position[2],position[3])).SpawnTimeSecs.set(spawnSecs);
    return spawn.row.guid.get()
}

export function spawnMultiGobTimer(id: number, position:number[][], spawnSecs:number) {
    let gob = std.GameObjectTemplates.load(id);
    let guids: number[] = []
    position.forEach((value,index)=>{
        let guid = spawnGobTimer(id,value,spawnSecs,index)
        guids.push(guid)
    })
    return guids
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