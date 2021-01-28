import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";

// Create a mob based on the zombies in Deathknell. 
export const ZOMBIE = std.CreatureTemplates.create('mymod','zombie',1501)
    ZOMBIE.Level.set(9,11)
    ZOMBIE.Stats.ArmorMod.set(0)
    ZOMBIE.Stats.DamageMod.set(1)
    ZOMBIE.AttackTime.set(100,100,10,10)

    const positions = [
        Pos(0,-8860.666016,-261.928772,80.420403,2.052581),
        Pos(0,-8872.766602,-269.979706,79.303566,3.072814),
        Pos(0,-8863.773438,-281.623444,78.845047,4.894153),
        Pos(0,-8849.226563,-282.741882,79.074303,1.732141),
        Pos(0,-8832.603516,-280.921326,78.904022,0.446443),
        Pos(0,-8842.893555,-293.981720,78.108154,4.027075),
        Pos(0,-8857.631836,-300.569183,77.552925,3.555051),
        Pos(0,-8888.351563,-308.467163,74.824699,2.529320),
        Pos(0,-8905.495117,-286.458191,77.376122,2.452351),
        Pos(0,-8924.399414,-270.791168,77.919647,0.761388),
        Pos(0,-8900.039063,-255.879608,79.980675,0.271300),
        Pos(0,-8872.840820,-244.551208,82.048447,4.263481),
    ]

    ZOMBIE.Name.enGB.set("Drug Addict")

    const wolf = std.CreatureTemplates.load(299)
    ZOMBIE.FactionTemplate.set(wolf.FactionTemplate.get())
    for(let i=0;i<positions.length;++i){
    const spawn = ZOMBIE.spawn('mymod',`zombie-spawn-${i}`,positions[i]);
    //console.log(positions[i].x)
}

ZOMBIE.Loot.Normal.addItem(30595,80,1,1,true)


