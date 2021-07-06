import { std } from "tswow-stdlib"
import { MODNAME } from "../modname"

let creature1 = std.CreatureTemplates.create(MODNAME,'example-creature1',299)
creature1.MovementType.setRandomMovement()

let creature2 = std.CreatureTemplates.create(MODNAME,'example-creature1',299)
creature2.MovementType.setWaypoint()

