export function housing(events: TSEventHandlers) {
    events.MapID.OnPlayerEnter(1, (map, player) => {
        if (!map.GetBool('isSpawned', false)) {
            map.SetBool('isSpawned', true)
            map.SetUInt('playerOwner', player.GetGUIDLow())
            let q = QueryCharacters('SELECT * FROM `player_housing` WHERE guid = ' + player.GetGUIDLow())
            while (q.GetRow()) {
                player.SummonGameObject(q.GetUInt32(1), q.GetUInt32(2), q.GetUInt32(3), q.GetUInt32(4), q.GetUInt32(5), 30)
            }
        }
    })

    events.Spells.OnCheckCast((spell) => {
        if (spell.GetSpellInfo().SchoolMask() == 98) {
            let player = spell.GetCaster().ToPlayer()
            if (player.GetMap().GetUInt('playerOwner', 1) != player.GetGUIDLow()) {
                player.SendAreaTriggerMessage('This is not your home!')
                spell.Cancel()
                return
            }
            //eventually replace with a map that gets made at start of server
            let q = QueryWorld('SELECT * FROM `player_housing_item_spell_link` WHERE itemID = ' + spell.GetEntry())
            while (q.GetRow()) {
                QueryCharacters('INSERT INTO `player_housing` VALUES(' + player.GetGUIDLow() + ',' + q.GetUInt32(1) + ',' + spell.GetTargetDest().x + ',' + spell.GetTargetDest().y + ',' + spell.GetTargetDest().z + ',' + spell.GetTargetDest().o + ')')
            }
        }
    })
}