import { std } from "tswow-stdlib"
import { Pos } from "tswow-stdlib/Misc/Position";




//                                          first name,    last name, copy mob
const BUNNY = std.CreatureTemplates.create("killerbunnyt", "killbill",412)
BUNNY.Level.set(5,7)
BUNNY.AttackTime.set(250,100,15,10)
BUNNY.Name.enGB.set("Cute Little Bunny")



const positions = [ 
 Pos(1, 10339.418945, 856.553345, 1327.352539, 1325.700439),
 Pos(1,10332.483398, 799.504578,1327.311768,3.295350),
 Pos(1,10306.264648,857.186096,1333.608398,2.180084),
 Pos(1,10271.860352,804.643555,1341.302246,0.223655),
 Pos(1,10296.731445,781.117188,1334.248291,1.774032)
]

const boar = std.CreatureTemplates.load(1984)
BUNNY.FactionTemplate.set(boar.FactionTemplate.get())
for(let x=0;x<positions.length;x++){
const spawn = BUNNY.spawn('killerbunnyt',`kill-bill-${x}`,positions[x])
spawn.MovementType.setRandomMovement()
spawn.WanderDistance.set(10)

}


BUNNY.UnitClass.setMage()
BUNNY.Stats.DamageMod.set(0.5);
BUNNY.Stats.HealthMod.set(1.25)
BUNNY.Stats.ManaMod.set(0.50)
BUNNY.Models.get

BUNNY.Scripts.onRange(0,20,0,0).Target.setSelf().Action.setCast(6673,0,0)
//31827 Heroic Strike
BUNNY.Scripts.onTimedEventTriggered(0).Target.setClosestEnemy(10,0) .Action.setCast(31827,2,7)
BUNNY.Scripts.onTimedEventTriggered(0).Target.setClosestEnemy(10,0).Action.setCast(38863,2,7)











