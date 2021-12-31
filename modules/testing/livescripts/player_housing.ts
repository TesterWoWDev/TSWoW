export function housing(events: TSEventHandlers) {
    events.MapID.OnPlayerEnter(309, (map, player) => {
        if (!map.GetBool('isSpawned', false)) {
            map.SetBool('isSpawned', true)
            map.SetUInt('playerOwner', player.GetGUIDLow())
            player.SendAreaTriggerMessage('Welcome home, ' + player.GetName() + '!')
            let q = QueryCharacters('SELECT * FROM `player_housing` WHERE guid = ' + player.GetGUIDLow())
            while (q.GetRow()) {
                player.SummonGameObject(q.GetInt32(1), q.GetFloat(2), q.GetFloat(3), q.GetFloat(4), q.GetFloat(5), 0)
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
            //eventually replace with a dictionary map that gets made at start of server
            let q = QueryWorld('SELECT gobID FROM `player_housing_item_spell_link` WHERE spellID = ' + spell.GetEntry())
            while (q.GetRow()) {
                QueryCharacters('INSERT INTO `player_housing` VALUES(' + player.GetGUIDLow() + ',' + q.GetUInt32(0) + ',' + spell.GetTargetDest().x + ',' + spell.GetTargetDest().y + ',' + spell.GetTargetDest().z + ',' + spell.GetTargetDest().o + ')')
            }
        }
    })
}