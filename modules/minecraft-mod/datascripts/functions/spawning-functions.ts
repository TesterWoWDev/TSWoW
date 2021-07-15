import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";
import { MODNAME } from "../modname";

export function spawnNPC(id: number, wanderDistance:number, equipmentID?:number, position:number[], index?:number) {
    if(index == null){
        index = 0
    }
    if(equipmentID == null){
        equipmentID = 0
    }
    let npc = std.CreatureTemplates.load(id);
    let spawn = npc.spawn(MODNAME,id+"creature-spawn"+index,Pos(723,position[0],position[1],position[2],position[3]))
    spawn.row.equipment_id.set(equipmentID)
    if(wanderDistance > 0){
        spawn.WanderDistance.set(wanderDistance);
        spawn.MovementType.setRandomMovement()
    }

}

export function spawnMultipleNPCs(id:number,wanderDistance:number, equipmentID?:number, positions:number[][]){
    for (let i = 0; i < positions.length; i++) {
        spawnNPC(id,wanderDistance,equipmentID,positions[i],i);
    }
}

export function spawnGob(id: number, position:number[], index?:number) {
    if(index == null){
        index = 0
    }
    let gob = std.GameObjectTemplates.load(id);
    gob.spawn(MODNAME,id+"gob-spawn"+index,Pos(723,position[0],position[1],position[2],position[3])).row.id.set(id)
}

export function spawnMultipleGobs(id:number, positions:number[][]){
    for (let i = 0; i < positions.length; i++) {
        spawnGob(id,positions[i],i);
    }
}
