import { std } from "tswow-stdlib";
import { DBC, SQL } from "wotlkdata";

std.Maps.load(726).InstanceType.PARTY.set().MaxPlayers.set(5).Flags.set(13).CorpseMap.set(725).CorpsePos.set({ x: 900, y: 150 })
SQL.instance_template.add(726).parent.set(725).script.set('')
DBC.MapDifficulty.add(1001)
    .MapID.set(726)
    .Difficulty.set(0)
    .Message.enGB.set(" ")
    .RaidDuration.set(0)
    .MaxPlayers.set(5)
    .Difficultystring.set(" ");
DBC.MapDifficulty.add(1002)
    .MapID.set(726)
    .Difficulty.set(1)
    .Message.enGB.set(" ")
    .RaidDuration.set(0)
    .MaxPlayers.set(5)
    .Difficultystring.set(" ");
DBC.MapDifficulty.add(1003)
    .MapID.set(726)
    .Difficulty.set(2)
    .Message.enGB.set(" ")
    .RaidDuration.set(0)
    .MaxPlayers.set(5)
    .Difficultystring.set(" ");
DBC.MapDifficulty.add(1004)
    .MapID.set(726)
    .Difficulty.set(3)
    .Message.enGB.set(" ")
    .RaidDuration.set(0)
    .MaxPlayers.set(5)
    .Difficultystring.set(" ");

