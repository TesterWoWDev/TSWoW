import { std } from "wow/wotlk";

let IcyTouch = std.Spells.load(45477);
IcyTouch.Effects.get(0).setPoints(131, 17, 1.5, 0);
