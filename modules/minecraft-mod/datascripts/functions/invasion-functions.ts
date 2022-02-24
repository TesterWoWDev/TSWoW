import { std } from "wow/wotlk";

export function addToInvasion(
    invasionId: number,
    isCreature: number,
    entry: number,
    x: number,
    y: number,
    z: number,
    o: number
) {
    std.SQL.Databases.world_dest.write(
        "insert INTO `invasions` VALUES(" +
        invasionId +
        "," +
        isCreature +
        "," +
        entry +
        "," +
        x +
        "," +
        y +
        "," +
        z +
        "," +
        o +
        ")"
    );
}
