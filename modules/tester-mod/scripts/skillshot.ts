import { ID } from "./ID";

export function Skillshot(events: TSEventHandlers) {
    //test build out for summon creature that goes forward 20 yards
	events.SpellID.OnCast(53307,(spell)=>{
		const player = spell.GetCaster().ToPlayer()
		const TSPosition = player.GetRelativePoint(20,0)
		const creature = player.SpawnCreature(ID.TESTER_MOD_SKILLSHOT_CREATURE,player.GetX(),player.GetY(),player.GetZ(),player.GetO(),3,3000)
		creature.SetLevel(player.GetLevel())
		creature.CastSpell(creature,ID.TESTER_MOD_SKILLSHOT_CAST,true)
		creature.CastSpell(creature,51019,true)
		creature.MoveTo(1,TSPosition.x,TSPosition.y,TSPosition.z,true)
		creature.SetDisplayId(11686)
	});

	events.SpellID.OnCast(1,(spell)=>{//knock enemies into air
        const caster = spell.GetCaster()
        const nearbyCreatures = caster.GetCreaturesInRange(10,0,1,0)
        const nearbyPlayers = caster.GetPlayersInRange(10,1,0)
        for (let i=0;i<nearbyCreatures.length;i++){
            const curCreature = nearbyCreatures.get(i)
            curCreature.MoveJump(curCreature.GetX(),curCreature.GetY(),curCreature.GetZ()+30,50,20,1)
        }
        for (let i=0;i<nearbyPlayers.length;i++){
            const curPlayer = nearbyPlayers.get(i)
            curPlayer.MoveJump(curPlayer.GetX(),curPlayer.GetY(),curPlayer.GetZ()+30,50,20,1)
        }
    })
}