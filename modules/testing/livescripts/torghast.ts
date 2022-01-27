import { spellChoice, spellChoiceID, spellChoices, spellValuesMessage } from "../shared/Messages"

class torghastBuffs extends TSClass {
    currentBuffs: TSArray<uint32> = [1]
    currentBuffsCount: TSArray<uint32> = [1]
    currentChoiceBuffs: TSArray<uint32> = [1]
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
    let spells: TSArray<uint32> = [7464, 7471, 7477, 7468, 7474]
    let buffChoiceCount:uint32 = 3
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    for (let i = 1; i < buffChoiceCount; i++) {
        let c:uint32 = spells[Math.floor(Math.random() * spells.length)]
        charItems.currentChoiceBuffs.push(c)
    }
    let arr:TSArray<uint32> = [0, 0, 0]
    let pkt = new spellChoices(arr)
    pkt.spellIDs = charItems.currentChoiceBuffs
    pkt.write().SendToPlayer(player)
}

function chooseBuff(player: TSPlayer, index: uint32) {
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