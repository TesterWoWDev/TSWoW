import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";

export let mobOne = std.CreatureTemplates.create(MODNAME,'torghastmob1',453)//caster
mobOne.Name.enGB.set('mob 1')

let mobOneFrostbolt = std.Spells.create(MODNAME,'mob1-frostbolt',69273)
mobOneFrostbolt.Effects.get(0).BasePoints.set(500)
mobOneFrostbolt.Effects.get(0).DieSides.set(150)

let mobOneNova = std.Spells.create(MODNAME,'mob1-nova',66546)
mobOneNova.Effects.get(0).BasePoints.set(350)
mobOneNova.Effects.get(0).DieSides.set(150)

mobOne.InlineScripts.OnJustEnteredCombat(creature=>{
    function getrandomInt(max: uint32): uint32 {
        return Math.floor(Math.random() * max);
    }
    creature.AddTimer("combatloop", 2500, -1, (timer, owner, delay, cancel) => {
        let self = owner.ToCreature();
        let target = self.GetVictim();
        let spells: TSArray<uint32> = <TSArray<uint32>>[
            GetID("Spell", "minecraft-mod", "mob1-frostbolt"),
            GetID("Spell", "minecraft-mod", "mob1-nova"),
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
mobTwo.Name.enGB.set('mob 2')

let mobTwoHealCut = std.Spells.create(MODNAME,'mob2-healcut',48137)

let whirlwind = std.Spells.create(MODNAME,'mob2-whirlwind',63807)
whirlwind.Effects.get(0).BasePoints.set(200)

mobTwo.InlineScripts.OnJustEnteredCombat(creature=>{
    function getrandomInt(max: uint32): uint32 {
        return Math.floor(Math.random() * max);
    }
    creature.AddTimer("combatloop", 2000, -1, (timer, owner, delay, cancel) => {
        let self = owner.ToCreature();
        let target = self.GetVictim();
        let spells: TSArray<uint32> = <TSArray<uint32>>[
            GetID("Spell", "minecraft-mod", "mob2-healcut"),
            GetID("Spell", "minecraft-mod", "mob2-whirlwind"),
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
export let mobThree = std.CreatureTemplates.create(MODNAME,'torghastmob3',98)//tank
mobThree.Name.enGB.set('mob 3')

mobThree.InlineScripts.OnJustEnteredCombat(creature=>{
    function getrandomInt(max: uint32): uint32 {
        return Math.floor(Math.random() * max);
    }
    creature.AddTimer("combatloop", 5000, -1, (timer, owner, delay, cancel) => {
        let self = owner.ToCreature();
        let target = self.GetVictim();
        let spells: TSArray<uint32> = <TSArray<uint32>>[
            GetID("Spell", "minecraft-mod", "mob2-healcut"),
            GetID("Spell", "minecraft-mod", "mob2-whirlwind"),
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