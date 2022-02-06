import { std } from "tswow-stdlib";
import { MODNAME } from "../modname";

export let mobOne = std.CreatureTemplates.create(MODNAME,'torghastminimob1',98)
mobOne.Name.enGB.set('mini mob 1')
mobOne.AIName.set('')