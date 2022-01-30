import { spellChoiceID, spellChoice, spellChoices } from "../../shared/Messages"

const spells: TSArray<TSArray<uint32>> = <TSArray<TSArray<uint32>>>[
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedhealth1-spell"), 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increaseddamage1-spell"), 2],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedsp1-spell"), 2],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedap1-spell"), 3],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedstamina1-spell"), 4],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedstrength1-spell"), 1],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedintellect1-spell"), 2],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedagility1-spell"), 3],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedcrit1-spell"), 4],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "increasedresist1-spell"), 1],
    //new spells
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "rangedattackspeed1-spell"), 2],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "critchance-spell"), 3],
    <TSArray<uint32>>[GetID("Spell", "minecraft-mod", "critdamage-spell"), 4],
]
const spellsDescriptions = [
    "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus. Morbi dapibus ante sed velit facilisis, sed vulputate nisi faucibus. Morbi sed ligula nec tortor imperdiet tincidunt sed a velit",
    "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus.",
    "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus.",
    "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus.",
    "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus. Morbi dapibus ante sed velit facilisis, sed vulputate nisi faucibus.",
    "6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus. Morbi dapibus ante sed velit facilisis, sed vulputate nisi faucibus.",
    "7Donec fermentum tellus ut massa scelerisque venenatis. Aenean ultrices nisi dui, ac commodo magna faucibus ac. Ut sem ex, hendrerit vel ipsum vitae, volutpat dignissim tellus.",
    "8Donec fermentum tellus ut massa scelerisque venenatis. Aenean ultrices nisi dui, ac commodo magna faucibus ac. Ut sem ex, hendrerit vel ipsum vitae, volutpat dignissim tellus.",
    "9Sed sed dui et tellus sollicitudin hendrerit. Pellentesque varius nulla quis tortor finibus, a vulputate nibh tristique. Nulla tellus risus,",
    "10Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque, eleifend nec justo nec, commodo blandit nisl. In suscipit ornare nulla in hendrerit.",
    "11Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque, eleifend nec justo nec, commodo blandit nisl. In suscipit ornare nulla in hendrerit.",
    "12Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque, eleifend nec justo nec, commodo blandit nisl. In suscipit ornare nulla in hendrerit.",
    "13Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque",
]
const buffChoiceCount: uint32 = 3

const prestigeSpell: uint32 = GetID("Spell", "minecraft-mod", "mapprestige-spell")

class torghastBuffs extends TSClass {
    currentBuffs: TSArray<uint32> = []
    currentBuffsCount: TSArray<uint32> = []
    currentChoiceBuffs: TSArray<uint32> = []
}

export function torghastBuffSystem(events: TSEventHandlers) {
    events.CreatureID.OnCreate(45011, (creature, cancel) => {
        creature.SetJsonArray('usedBy', new TSJsonArray())
        creature.GetCollisions().Add(ModID(), "hungergames-collision", 2, 500, 0, (collision, self, collided, cancel) => {
            if (collided.IsPlayer()) {
                let player = collided.ToPlayer()
                let creature = self.ToCreature()
                if (player.IsInGroup()) {
                    let arr = creature.GetJsonArray('usedBy')
                    if (arr.hasNumber(player.GetGUIDLow())) {
                        player.SendAreaTriggerMessage("You have used this already!")
                    } else {
                        if (givePlayerChoiceOfBuffs(player)) {
                            arr.pushNumber(player.GetGUIDLow())
                            creature.SetJsonArray('usedBy', arr)
                        }
                    }
                    if (arr.length == player.GetGroup().GetMembersCount()) {
                        creature.DespawnOrUnsummon(0)
                    }
                } else {
                    if (givePlayerChoiceOfBuffs(player)) {
                        creature.DespawnOrUnsummon(0)
                    }
                }
            }
        })
    })

    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#aa")) {
            if (!givePlayerChoiceOfBuffs(player)) {
                player.SendAreaTriggerMessage('Choose your ability first!')
            }
        }
        if (msg.get().startsWith("#ee")) {
            rewardGroup(player)
        }
    })

    events.Player.OnLogout((player) => {
        removePlayerBuffs(player)
    })

    events.PacketID.OnCustom(spellChoiceID, (opcode, packet, player) => {
        let pkt = new spellChoice(0)
        pkt.read(packet)
        playerChoseBuff(player, pkt.choice)
        applyPlayerBuffs(player)
    })
}

function rewardGroup(player: TSPlayer) {
    despawnMap(player)
    let rewardID = player.GetMap().GetUInt('rewardID', 19019)
    if (player.IsInGroup()) {
        let group = player.GetGroup().GetMembers()
        for (let i = 0; i < group.length; i++) {
            let curPrestige: uint32 = group[i].GetUInt('prestige', 0)
            let rewCount: uint32 = <uint32>(curPrestige * curPrestige) / 5
            group[i].SendAreaTriggerMessage('You were rewarded with ' + rewCount + ' of anima power for your prowess')
            group[i].AddItem(rewardID, rewCount)
            group[i].Teleport(725, -8750.45, -74.64, 31, 0)
        }
    } else {
        let curPrestige: uint32 = player.GetUInt('prestige', 0)
        player.AddItem(rewardID, <uint32>(curPrestige * curPrestige) / 5)
        player.Teleport(725, -8750.45, -74.64, 31, 0)
    }
}

export function resetGroup(player: TSPlayer, playerSpawnCount: uint32, playerSpawnCoords: TSArray<TSDictionary<string, float>>, bossSpawnCoords: TSArray<TSDictionary<string, float>>, bossIDs: TSArray<uint32>, mobSpawnCoords: TSArray<TSDictionary<string, float>>, mobIDs: TSArray<uint32>) {
    let map = player.GetMap()
    map.SetUInt('prestige', map.GetUInt('prestige', 0) + 1)
    despawnMap(player)
    if (player.IsInGroup()) {
        teleportRandomStart(player.GetGroup().GetMembers(), playerSpawnCount, playerSpawnCoords)
    } else {
        teleportRandomStart([player], playerSpawnCount, playerSpawnCoords)
    }
    spawnMap(map, bossSpawnCoords, bossIDs, mobSpawnCoords, mobIDs)
}

function teleportRandomStart(players: TSPlayer[], playerSpawnCount: uint32, playerSpawnCoords: TSArray<TSDictionary<string, float>>) {
    let rand = getRandomInt(playerSpawnCount)
    let choice = playerSpawnCoords.get(rand)
    let prestige = players[0].GetMap().GetUInt('prestige', 0)
    for (let i = 0; i < players.length; i++) {
        players[i].SetUInt('prestige', players[i].GetUInt('prestige', 0) + 1)
        if (prestige > 0) {
            players[i].SendAreaTriggerMessage("You are on Prestige " + prestige)
        }
        players[i].Teleport(choice['map'], choice['x'], choice['y'], choice['z'], choice['o'])
    }
}

export function despawnMap(player: TSPlayer) {
    let creatures = player.GetCreaturesInRange(5000, 0, 0, 0)
    for (let i = 0; i < creatures.length; i++) {
        creatures[i].DespawnOrUnsummon(0)
    }
}

export function spawnMap(map: TSMap, bossSpawnCoords: TSArray<TSDictionary<string, float>>, bossIDs: TSArray<uint32>, mobSpawnCoords: TSArray<TSDictionary<string, float>>, mobIDs: TSArray<uint32>) {
    for (let i = 0; i < bossSpawnCoords.length; i++) {
        spawnBoss(map, bossIDs[getRandomInt(bossIDs.length)], bossSpawnCoords.get(i))
    }
    for (let i = 0; i < mobSpawnCoords.length; i++) {
        spawnFormation(map, mobSpawnCoords.get(i), mobIDs, mobIDs.length)
    }
}

function spawnBoss(map: TSMap, bossID: number, sPos: TSDictionary<string, number>) {
    map.SpawnCreature(bossID, sPos['x'], sPos['y'], sPos['z'], sPos['o'], 0)
}

function spawnFormation(map: TSMap, sPos: TSDictionary<string, float>, mobIDs: TSArray<uint32>, mobCount: uint32) {
    //forward is x+cosRad y+sinRad
    //backwards is x-cosRad y-sinRad
    //left is x+sinRad y+cosRad
    //right is x-sinRad y-cosRad
    let cosRad = 3 * Math.cos(sPos['o'])
    let sinRad = 3 * Math.sin(sPos['o'])
    let formationNumber = getRandomInt(10)
    map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'], sPos['y'], sPos['z'], sPos['o'], 0)
    switch (formationNumber) {
        case 0:
            //0x0
            //0x0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 1:
            //000
            //xx0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 2:
            //000
            //0xx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 3:
            //0x0
            //0x0
            //0x0
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - cosRad, sPos['y'] - sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 4:
            //000
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 5:
            //000
            //0x0
            //x0x
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad - cosRad, sPos['y'] + cosRad - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 6:
            //x0x
            //0x0
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad + cosRad, sPos['y'] + cosRad + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 7:
            //0x0
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + cosRad, sPos['y'] + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 8:
            //000
            //xxx
            //0x0
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - cosRad, sPos['y'] - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            break;
        case 9:
            //x0x
            //xxx
            //000
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad + cosRad, sPos['y'] + cosRad + sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad + cosRad, sPos['y'] - cosRad + sinRad, sPos['z'], sPos['o'], 0)
            break;
        case 10:
            //000
            //xxx
            //x0x
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad, sPos['y'] + cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad, sPos['y'] - cosRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] + sinRad - cosRad, sPos['y'] + cosRad - sinRad, sPos['z'], sPos['o'], 0)
            map.SpawnCreature(mobIDs[getRandomInt(mobCount)], sPos['x'] - sinRad - cosRad, sPos['y'] - cosRad - sinRad, sPos['z'], sPos['o'], 0)
            break;
    }
}

function givePlayerChoiceOfBuffs(player: TSPlayer): boolean {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    let spellranks: TSArray<uint32> = []
    let spellDescs: TSArray<string> = []
    if (charItems.currentChoiceBuffs.length > 0) {
        return false
    } else {
        for (let i = 0; i < buffChoiceCount; i++) {
            const index = Math.floor(Math.random() * spells.length)
            let spell = spells[index]
            let c: uint32 = spell[0]
            charItems.currentChoiceBuffs.push(c)
            spellranks.push(spell[1])
            spellDescs.push(spellsDescriptions[index])
        }
        let pkt = new spellChoices(charItems.currentChoiceBuffs, spellranks, spellDescs)
        pkt.write().SendToPlayer(player)
        return true
    }

}

function playerChoseBuff(player: TSPlayer, index: uint32) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    if (charItems.currentChoiceBuffs.length >= 3) {
        let currentChoicesID: TSArray<uint32> = [charItems.currentChoiceBuffs.pop()!, charItems.currentChoiceBuffs.pop()!, charItems.currentChoiceBuffs.pop()!]
        let choice: uint32 = currentChoicesID[index]
        let found: uint32 = -1
        for (let i = 0; i < charItems.currentBuffs.length; i++) {
            if (charItems.currentBuffs[i] == choice) {
                found = i
                break
            }
        }
        if (found == -1) {
            charItems.currentBuffs.push(choice)
            charItems.currentBuffsCount.push(1)
        } else {
            charItems.currentBuffsCount[found]++
        }
    }
}

function applyPlayerBuffs(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 0; i < charItems.currentBuffs.length; i++) {
        player.AddAura(charItems.currentBuffs[i], player).SetStackAmount(charItems.currentBuffsCount[i])
    }
}

export function removePlayerBuffs(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 0; i < charItems.currentBuffs.length; i++) {
        player.RemoveAura(charItems.currentBuffs[i])
    }
    player.SetObject("torghastBuffs", new torghastBuffs())
}

export function addPrestigeBuffToCreature(mob: TSCreature, count: uint32, multiplier: uint32) {
    mob.CastCustomSpell(mob, prestigeSpell, true, multiplier * count, multiplier * count, multiplier * count, CreateItem(19019, 1), mob.GetGUID())
}

export function getRandomInt(max: uint32): uint32 {
    return Math.floor(Math.random() * max)
}
