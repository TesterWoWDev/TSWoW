import { std } from "wow/wotlk";

let c = std.CreatureTemplates.create('death-loot','npc_death_loot',37828)
c.MovementSpeed.set(0.2,0.2)
c.MovementType.set("IDLE")
c.Scale.set(0.5)