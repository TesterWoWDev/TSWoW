const colorAuras = [
    0,//trash
    0,//common
    61894,//uncommon
    17327,//rare
    50596,//epic
    22580,//legendary
]

let creatureID = GetID("creature_template", "death-loot", "npc_death_loot")

export function deathLoot(events: TSEvents) {
    events.Creatures.OnGenerateLoot((creature, killer) => {
        if (killer.IsInGroup())//solo only
            return
        let loot = creature.GetLoot();
        addGoldLootCreature(creature.GetLootRecipient(), creature, loot.GetMoney())
        let itemCount = loot.GetItemCount()
        if(itemCount > 0)
        {
            let angle = 0
            let variant = 3.6 / itemCount
            for (let i = 0; i < itemCount; i++) {
                addItemLootCreature(creature.GetLootRecipient(), creature, loot.GetItem(i), i, angle)
                angle += variant
            }
        }
        //clears inventory so no loot
        loot.SetMoney(0)
        loot.Filter(() => false)
    })
}

function addGoldLootCreature(killer: TSPlayer, creature: TSCreature, goldAmount: uint32) {
    console.log(goldAmount)
    if (goldAmount <= 0)
        return
    let c = killer.SpawnCreature(creatureID, creature.GetX(), creature.GetY(), creature.GetZ(), 0, 8, 30000)
    const TSPosition = c.GetRelativePoint(Math.random() * 2 + 1, Math.random() * 3.6);
    c.MoveTo(1, TSPosition.x, TSPosition.y, TSPosition.z, true)
    //change depending on item type
    c.SetDisplayID(11010)
    c.SetUInt('goldCount', goldAmount)
    c.SetUInt('playerguid', killer.GetGUID())
    addGoldCollision(c)
}

function addGoldCollision(c: TSCreature) {
    c.AddCollision('gold', 2, 0, 0, (self, collided, cancel, entry) => {
        if (collided.IsPlayer()) {
            if (collided.GetGUID() == self.GetUInt('playerguid')) {
                collided.ToPlayer().ModifyMoney(self.GetUInt('goldCount', 0))
                self.ToCreature().DespawnOrUnsummon(0)
            }
        }
    })
}

function addItemLootCreature(killer: TSUnit, creature: TSCreature, item: TSLootItem, index: uint32, angle: float) {
    let c = killer.SpawnCreature(creatureID, creature.GetX(), creature.GetY(), creature.GetZ(), 0, 8, 30000)
    const TSPosition = c.GetRelativePoint(Math.random() * 2 + 1, angle);
    c.MoveTo(1, TSPosition.x, TSPosition.y, TSPosition.z, true)
    c.SetDisplayID(11010)
    let quality = CreateItem(item.GetItemID(), 1).GetQuality()
    if (quality > 1)
        c.AddAura(colorAuras[quality], c)

    c.SetUInt('itemid', item.GetItemID())
    c.SetUInt('itemcount', item.GetCount())
    c.SetUInt('playerguid', killer.GetGUID())

    addItemCollision(c, index)
}

function addItemCollision(c: TSCreature, index: uint32) {
    c.AddCollision('item-' + index, 1, 500, 0, (self, collided) => {
        if (collided.IsPlayer()) {
            if (collided.GetGUID() == self.GetUInt('playerguid')) {
                let player = collided.ToPlayer()
                let item = player.AddItem(self.GetUInt('itemid', 0), self.GetUInt('itemcount', 1))
                if (item.IsNull()) {
                    player.SendAreaTriggerMessage('You do not have enough space in your inventory.')
                }
                else {
                    self.ToCreature().DespawnOrUnsummon(0)
                }
            }
        }
    })
}

