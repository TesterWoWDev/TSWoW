import { TorghastBoss1 } from "./dungeon-1";

TorghastBoss1.InlineScripts.OnJustEnteredCombat((creature, target) => {
    const spellID1 = 1
    const spellID2 = 2
    const spellID3 = 3
    const spellID4 = 4
    creature.AddTimer('event1', 10000, -1, (timer, entity, del, can) => {
        let self = entity.ToCreature()
        let target = self.GetVictim()
        self.CastSpell(target, spellID1, false)
    })
    creature.AddTimer('event2', 30000, -1, (timer, entity, del, can) => {
        let self = entity.ToCreature()
        let target = self.GetVictim()
        self.CastSpell(target, spellID2, false)
    })
    creature.AddTimer('event3', 10000, -1, (timer, entity, del, can) => {
        let self = entity.ToCreature()
        let target = self.GetVictim()
        self.CastSpell(target, spellID3, false)//AoE Pull
        creature.AddTimer('event3.1', 2000, 0, (timer, entity, del, can) => {
            let self = entity.ToCreature()
            let target = self.GetVictim()
            self.CastSpell(target, spellID4, false)//AoE spell
        })
    })
})

TorghastBoss1.InlineScripts.OnDeath((creature,killer)=>{
    creature.RemoveTimer('event1')
    creature.RemoveTimer('event2')
    creature.RemoveTimer('event3')
    creature.RemoveTimer('event3.1')
})

TorghastBoss1.InlineScripts.OnReachedHome((creature)=>{
    creature.RemoveTimer('event1')
    creature.RemoveTimer('event2')
    creature.RemoveTimer('event3')
    creature.RemoveTimer('event3.1')
})