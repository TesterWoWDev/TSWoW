import { std } from "wow/wotlk";
import { MODNAME } from "../modname";

export let stringItem = std.Items.create(MODNAME, "string", 2934);
stringItem.Name.enGB.set("String");
stringItem.DisplayInfo.set(58198);
stringItem.Description.enGB.set("A unique piece of string.");
