import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";
import { MODNAME } from "../modname";

export function spawnNPC(id: number, wanderDistance:number, position:number[], npcIndex?:number) {
    if(npcIndex == null){
        npcIndex = 0
    }
    let npc = std.CreatureTemplates.load(id);
    let spawn = npc.spawn(MODNAME,id+"mall spawn"+npcIndex,Pos(723,position[0],position[1],position[2],position[3]))
    if(wanderDistance > 0){
        spawn.WanderDistance.set(wanderDistance);
        spawn.MovementType.setRandomMovement()
    }

}

export function spawnMultipleNPCs(id:number,wanderDistance:number, positions:number[][]){
    for (let i = 0; i < positions.length; i++) {
        spawnNPC(id,wanderDistance,positions[i],i);
    }
}