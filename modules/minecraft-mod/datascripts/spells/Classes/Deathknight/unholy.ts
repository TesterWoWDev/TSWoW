import { std } from "wow/wotlk";

let DeathCoil = std.Spells.load(47541);
DeathCoil.Effects.get(0).setPoints(115, 23, 0.5, 0);

let RaiseDead = std.Spells.load(46584);
RaiseDead.Effects.get(0).setPoints(115, 23, 0.5, 0);
RaiseDead.Reagents.clearAll();
