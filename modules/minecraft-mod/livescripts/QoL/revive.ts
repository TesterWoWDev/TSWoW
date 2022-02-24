export function reviveFix(events: TSEvents) {
    events.MapID.OnPlayerEnter(1, (map, player) => {
        player.Teleport(725, -8749.424805, -77.516861, 31.135099, 0.923082);
        player.ResurrectPlayer(15, false);
    });
    events.MapID.OnPlayerEnter(0, (map, player) => {
        player.Teleport(725, -8749.424805, -77.516861, 31.135099, 0.923082);
        player.ResurrectPlayer(15, false);
    });
}
