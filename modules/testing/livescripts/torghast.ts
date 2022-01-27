import { spellChoice, spellChoiceID, spellChoices } from "../shared/Messages"
const spellsTier1: TSArray<uint32> = [
    GetID("Spell", "testing-mod", "increasedhealth1-spell"),
    GetID("Spell", "testing-mod", "increaseddamage1-spell"),
    GetID("Spell", "testing-mod", "increasedsp1-spell"),
    GetID("Spell", "testing-mod", "increasedap1-spell"),
    GetID("Spell", "testing-mod", "increasedstamina1-spell"),
    GetID("Spell", "testing-mod", "increasedstrength1-spell"),
    GetID("Spell", "testing-mod", "increasedintellect1-spell"),
    GetID("Spell", "testing-mod", "increasedagility1-spell"),
    GetID("Spell", "testing-mod", "increasedcrit1-spell"),
    GetID("Spell", "testing-mod", "increasedresist1-spell"),
    //new spells
    GetID("Spell", "testing-mod", "rangedattackspeed1-spell"),
    GetID("Spell", "testing-mod", "critchance-spell"),
    GetID("Spell", "testing-mod", "critdamage-spell"),
    
]

const buffChoiceCount: uint32 = 3

class torghastBuffs extends TSClass {
    currentBuffs: TSArray<uint32> = []
    currentBuffsCount: TSArray<uint32> = []
    currentChoiceBuffs: TSArray<uint32> = []
}

export function torghastBuffSystem(events: TSEventHandlers) {
    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#aa")) {
            if(!buffChoice(player)){
                player.SendAreaTriggerMessage('Choose your ability first!')
            }
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
    })
}

function buffChoice(player: TSPlayer):boolean {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    if(charItems.currentChoiceBuffs.length > 0){
        return false
    }else{
        for (let i = 0; i < buffChoiceCount; i++) {
            let c: uint32 = spellsTier1[Math.floor(Math.random() * spellsTier1.length)]
            charItems.currentChoiceBuffs.push(c)
        }
        let arr: TSArray<uint32> = [0, 0, 0]
        let pkt = new spellChoices(arr)
        pkt.spellIDs = charItems.currentChoiceBuffs
        pkt.write().SendToPlayer(player)
        return true
    }
    
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