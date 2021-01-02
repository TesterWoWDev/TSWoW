import { std } from "tswow-stdlib";
import { NECROMANCER_CLASS } from "./Necromancer";

export const NECROMANCER_TOTEM = std.Items.create('my-mod', 'necro-totem-item',46978)
NECROMANCER_TOTEM.Name.set({enGB:"Necromancer's Doll"})
NECROMANCER_TOTEM.Description.set({enGB:"The doll required to conjure any of a Necromancer's minions"})
NECROMANCER_TOTEM.DisplayID.set(std.Items.load(19816).DisplayID.get())
NECROMANCER_TOTEM.Flags.set(NECROMANCER_TOTEM.Flags.get()+32)
NECROMANCER_CLASS.Inventory.add(NECROMANCER_TOTEM.ID,1)