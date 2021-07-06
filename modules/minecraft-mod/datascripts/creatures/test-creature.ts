import { std } from "tswow-stdlib"
import { SQL } from "../../../../bin/scripts/tswow/wotlkdata/sql/SQLFiles"
import { MODNAME } from "../modname"

let creature1 = std.CreatureTemplates.create(MODNAME,'example-creature1',299)
creature1.MovementType.setRandomMovement()

let creature2 = std.CreatureTemplates.create(MODNAME,'example-creature1',299)
creature2.MovementType.setWaypoint()
SQL.waypoints.add(creature2.ID,1).position_x.set(1).position_y.set(1).position_z.set(1)
SQL.waypoints.add(creature2.ID,2).position_x.set(1).position_y.set(2).position_z.set(1)
