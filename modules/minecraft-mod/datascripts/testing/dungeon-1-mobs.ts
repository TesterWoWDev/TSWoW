import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";

export let mobOne = std.CreatureTemplates.create(MODNAME,'torghastmob1',453)//caster
mobOne.Name.enGB.set('mob 1')
mobOne.AIName.set('')

mobOne.InlineScripts.OnJustEnteredCombat(creature=>{
    function getrandomInt(max: uint32): uint32 {
        return Math.floor(Math.random() * max);
    }
    creature.AddTimer("combatloop", 5000, -1, (timer, owner, delay, cancel) => {
        let self = owner.ToCreature();
        let target = self.GetVictim();
        let spells: TSArray<uint32> = <TSArray<uint32>>[
            GetID("Spell", "minecraft-mod", "boss3acidwretch1-spell"),
            GetID("Spell", "minecraft-mod", "boss3venompool1-spell"),
        ];
        let spellChoice = getrandomInt(3);
        self.CastSpell(target,spells[spellChoice],false)
    });
})
mobOne.InlineScripts.OnDeath((creature,killer)=>{
    creature.RemoveTimer('combatloop')
})
mobOne.InlineScripts.OnReachedHome((creature)=>{
    creature.RemoveTimer('combatloop')
})

export let mobTwo = std.CreatureTemplates.create(MODNAME,'torghastmob2',452)//melee
mobTwo.Name.enGB.set('mob 2')
mobTwo.AIName.set('')

mobTwo.InlineScripts.OnJustEnteredCombat(creature=>{
    function getrandomInt(max: uint32): uint32 {
        return Math.floor(Math.random() * max);
    }
    creature.AddTimer("combatloop", 5000, -1, (timer, owner, delay, cancel) => {
        let self = owner.ToCreature();
        let target = self.GetVictim();
        let spells: TSArray<uint32> = <TSArray<uint32>>[
            GetID("Spell", "minecraft-mod", "boss3acidwretch1-spell"),
            GetID("Spell", "minecraft-mod", "boss3venompool1-spell"),
        ];
        let spellChoice = getrandomInt(3);
        self.CastSpell(target,spells[spellChoice],false)
    });
})
mobTwo.InlineScripts.OnDeath((creature,killer)=>{
    creature.RemoveTimer('combatloop')
})
mobTwo.InlineScripts.OnReachedHome((creature)=>{
    creature.RemoveTimer('combatloop')
})
export let mobThree = std.CreatureTemplates.create(MODNAME,'torghastmob3',98)//tank
mobThree.Name.enGB.set('mob 3')
mobThree.AIName.set('')
mobThree.InlineScripts.OnJustEnteredCombat(creature=>{
    function getrandomInt(max: uint32): uint32 {
        return Math.floor(Math.random() * max);
    }
    creature.AddTimer("combatloop", 5000, -1, (timer, owner, delay, cancel) => {
        let self = owner.ToCreature();
        let target = self.GetVictim();
        let spells: TSArray<uint32> = <TSArray<uint32>>[
            GetID("Spell", "minecraft-mod", "boss3acidwretch1-spell"),
            GetID("Spell", "minecraft-mod", "boss3venompool1-spell"),
        ];
        let spellChoice = getrandomInt(3);
        self.CastSpell(target,spells[spellChoice],false)
    });
})
mobThree.InlineScripts.OnDeath((creature,killer)=>{
    creature.RemoveTimer('combatloop')
})
mobThree.InlineScripts.OnReachedHome((creature)=>{
    creature.RemoveTimer('combatloop')
})