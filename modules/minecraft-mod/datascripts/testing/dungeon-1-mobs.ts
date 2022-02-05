import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";

export let mobOne = std.CreatureTemplates.create(MODNAME,'torghastmob1',98)//tank
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
            GetID("Spell", "minecraft-mod", "boss3meltarmor1-spell"),
            GetID("Spell", "minecraft-mod", "boss3rumble1-spell"),
            GetID("Spell", "minecraft-mod", "boss3acridity1-spell"),
        ];
        let spellChoice = getrandomInt(spells.length);
        creature.CastSpell(target,spellChoice,false)
    });
})
mobOne.InlineScripts.OnDeath((creature,killer)=>{
    creature.RemoveTimer('combatloop')
})
mobOne.InlineScripts.OnReachedHome((creature)=>{
    creature.RemoveTimer('combatloop')
})

export let mobTwo = std.CreatureTemplates.create(MODNAME,'torghastmob2',452)//melee
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
            GetID("Spell", "minecraft-mod", "boss3meltarmor1-spell"),
            GetID("Spell", "minecraft-mod", "boss3rumble1-spell"),
            GetID("Spell", "minecraft-mod", "boss3acridity1-spell"),
        ];
        let spellChoice = getrandomInt(spells.length);
        creature.CastSpell(target,spellChoice,false)
    });
})
mobTwo.InlineScripts.OnDeath((creature,killer)=>{
    creature.RemoveTimer('combatloop')
})
mobTwo.InlineScripts.OnReachedHome((creature)=>{
    creature.RemoveTimer('combatloop')
})
export let mobThree = std.CreatureTemplates.create(MODNAME,'torghastmob3',453)//caster
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
            GetID("Spell", "minecraft-mod", "boss3meltarmor1-spell"),
            GetID("Spell", "minecraft-mod", "boss3rumble1-spell"),
            GetID("Spell", "minecraft-mod", "boss3acridity1-spell"),
        ];
        let spellChoice = getrandomInt(spells.length);
        creature.CastSpell(target,spellChoice,false)
    });
})
mobThree.InlineScripts.OnDeath((creature,killer)=>{
    creature.RemoveTimer('combatloop')
})
mobThree.InlineScripts.OnReachedHome((creature)=>{
    creature.RemoveTimer('combatloop')
})