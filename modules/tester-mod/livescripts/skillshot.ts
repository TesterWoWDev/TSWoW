export function Skillshot(events: TSEventHandlers) {
		//test build out for summon creature that goes forward 20 yards
	events.SpellID.OnCast(53307,(spell)=>{
		const player = spell.GetCaster().ToPlayer()
		const TSPosition = player.GetRelativePoint(20,0)
		const creature = player.SpawnCreature(GetID("creature_template","tester-mod","skillshot-creature"),player.GetX(),player.GetY(),player.GetZ(),player.GetO(),3,3000)
			creature.SetLevel(player.GetLevel())
			creature.CastSpell(creature,GetID("Spell","tester-mod","skillshot-cast"),true)
			creature.CastSpell(creature,51019,true)
			creature.MoveTo(1,TSPosition.x,TSPosition.y,TSPosition.z,true)
			creature.SetDisplayId(11686)
	});
}