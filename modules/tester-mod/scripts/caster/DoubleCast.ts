import { ID } from "../ID";
const TABLE_NAME_DOUBLE = "doubleCast"
class PlayerDoublecast {
	playerGUID: uint32 = 0;
    castFlag: int32 = 0;
    spawnedGUID: int32 = 0;
}

export function DoubelCast(events: TSEventHandlers) {
    const spellID = ID.TESTER_MOD_DOUBLE_CAST

    events.SpellID.OnCast(spellID,(spell)=>{
        const creatureID = 31746
        const mineDespawn = 10000
        const caster = spell.GetCaster().ToPlayer()
        let flag = caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE,()=>new PlayerDoublecast()).castFlag
        if(flag == 0){
            caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).castFlag = 1
            const TSPosition = caster.GetRelativePoint(20,0)
            const creature = caster.SpawnCreature(creatureID,caster.GetX(),caster.GetY(),caster.GetZ(),caster.GetO(),3,mineDespawn)
            creature.MoveTo(1,TSPosition.x,TSPosition.y,TSPosition.z,true)
            caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).spawnedGUID = creature.GetGUIDLow()

            caster.GetTasks().AddTimer(ModID(),"reset_doublecast",mineDespawn,1,(timer,entity,del,can)=>{
                entity.ToPlayer().GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).castFlag = 0
            });
        }
        else{
            caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).castFlag = 0
            const creatureGUID = caster.GetData().GetObject<PlayerDoublecast>(ModID(),TABLE_NAME_DOUBLE).spawnedGUID
            const spawned = caster.GetCreaturesInRange(100,creatureID,0,0)
            for(let i=0;i<spawned.length;i++){
                if(spawned.get(i).GetGUIDLow() == creatureGUID){
                    spawned.get(i).SendUnitSay("test",1)
                    spawned.get(i).DespawnOrUnsummon(500)
                }
            }
        }
    });
}