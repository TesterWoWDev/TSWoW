import { spawn } from "child_process";
import { ID } from "../ID";
const TABLE_NAME_DOUBLE = "doubleCast";

@CharactersTable
class PlayerDoublecast extends DBTable {
    constructor(playerGUID: uint32) {
        super();
        this.playerGUID = playerGUID;
	}
	
    @PrimaryKey
	playerGUID: uint32 = 0;
    @Field
    flag: int32 = 0;
    spawnedGUID: int32 = 0;
}

export function DoubelCast(events: TSEventHandlers) {
    events.SpellID.OnCast(24752,(spell)=>{
        const caster = spell.GetCaster().ToPlayer()
        let flag = caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE,()=>
        {
            const guid = caster.GetGUIDLow()
            const rows = LoadRows(PlayerDoublecast,`playerGUID = ${guid}`)
            return rows.length > 0 ? rows.get(0) : new PlayerDoublecast(guid);
        }
        ).flag
        if(flag == 0){
            caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).flag = 1
            const TSPosition = caster.GetRelativePoint(20,0)
            const creature = caster.SpawnCreature(31746,caster.GetX(),caster.GetY(),caster.GetZ(),caster.GetO(),3,10000)
            creature.MoveTo(1,TSPosition.x,TSPosition.y,TSPosition.z,true)
            caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).spawnedGUID = creature.GetGUIDLow()
        }
        else{
            caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).flag = 0
            const creatureGUID = caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).spawnedGUID
            const spawned = caster.GetCreaturesInRange(100,31746,0,0)
            for(let i=0;i<spawned.length;i++){
                if(spawned.get(i).GetGUIDLow() == creatureGUID){
                    spawned.get(i).SendUnitSay("test",1)
                    spawned.get(i).DespawnOrUnsummon(500)
                }
            }
        }
    });
}