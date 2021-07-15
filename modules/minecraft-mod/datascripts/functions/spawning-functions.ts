import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";
import { MODNAME } from "../modname";

export function spawnNPC(id: number, position:number[], npcIndex?:number) {
    if(npcIndex == null){
        npcIndex = 0
    }
    let npc = std.CreatureTemplates.load(id);
    npc.spawn(MODNAME,id+"mall spawn"+npcIndex,Pos(723,position[0],position[1],position[2],position[3]))
}

export function spawnMultipleNPCs(id:number,positions:number[][]){
    for (let i = 0; i < positions.length; i++) {
        spawnNPC(id,positions[i],i);
    }
}