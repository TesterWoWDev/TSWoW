import { spellChoice, spellChoiceID, spellChoices, spellValuesMessage } from "../shared/Messages"

let spells: TSArray<int> = [7464, 7471, 7477, 7468, 7474]
let buffChoiceCount = 3

class torghastBuffs extends TSClass {
    currentBuffs: TSArray<int> = []
    currentBuffsCount: TSArray<int> = []
    currentChoiceBuffs: TSArray<int> = []
}

export function torghastBuffSystem(events: TSEventHandlers) {
    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#aa")) {
            buffChoice(player)
        }
    })

    events.MapID.OnPlayerLeave(3, (map, player) => {
        removeBuffs(player)
    })

    events.Player.OnLogout((player) => {
        removeBuffs(player)
    })

    events.PacketID.OnCustom(spellChoiceID, (opcode, packet, player) => {
        let pkt = new spellChoice(0)
        pkt.read(packet)
        chooseBuff(player, pkt.choice)
        applyBuffs(player)
        showBuffs(player)
    })
}

function buffChoice(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 1; i < buffChoiceCount; i++) {
        let chNum = Math.floor(Math.random() * spells.length)
        let choice = spells[chNum]
        charItems.currentChoiceBuffs.push(choice)
    }
    let pkt = new spellChoices([0, 0, 0])
    pkt.spellIDs = charItems.currentChoiceBuffs
    pkt.write().SendToPlayer(player)
}

function chooseBuff(player: TSPlayer, index: uint32) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    if (charItems.currentChoiceBuffs.length >= 3) {
        let currentChoicesID = [charItems.currentChoiceBuffs.pop(), charItems.currentChoiceBuffs.pop(), charItems.currentChoiceBuffs.pop()]
        let choice: number = currentChoicesID[index]!
        let found = -1
        for (let i = 0; i < charItems.currentBuffs.length; i++) {
            if (charItems.currentBuffs[i] == choice) {
                found = i
                break
            }
        }
        if (found == -1) {
            charItems.currentBuffsCount[found]++
        } else {
            charItems.currentBuffs.push(choice)
            charItems.currentBuffsCount.push(1)
        }

    }
}

function showBuffs(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    let pkt = new spellValuesMessage(charItems.currentBuffs.length, charItems.currentBuffs, charItems.currentBuffsCount)
    pkt.write().SendToPlayer(player)

}

function applyBuffs(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 0; i < charItems.currentBuffs.length; i++) {
        player.AddAura(charItems.currentBuffs[i], player).SetStackAmount(charItems.currentBuffsCount[i])
    }
}

function removeBuffs(player: TSPlayer) {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 0; i < charItems.currentBuffs.length; i++) {
        player.RemoveAura(charItems.currentBuffs[i])
    }
    player.SetObject("torghastBuffs", new torghastBuffs())
}