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
const spellsTier1Descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus. Morbi dapibus ante sed velit facilisis, sed vulputate nisi faucibus. Morbi sed ligula nec tortor imperdiet tincidunt sed a velit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus. Morbi dapibus ante sed velit facilisis, sed vulputate nisi faucibus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra enim euismod sodales finibus. Morbi dapibus ante sed velit facilisis, sed vulputate nisi faucibus.",
    "Donec fermentum tellus ut massa scelerisque venenatis. Aenean ultrices nisi dui, ac commodo magna faucibus ac. Ut sem ex, hendrerit vel ipsum vitae, volutpat dignissim tellus.",
    "Donec fermentum tellus ut massa scelerisque venenatis. Aenean ultrices nisi dui, ac commodo magna faucibus ac. Ut sem ex, hendrerit vel ipsum vitae, volutpat dignissim tellus.",
    "Sed sed dui et tellus sollicitudin hendrerit. Pellentesque varius nulla quis tortor finibus, a vulputate nibh tristique. Nulla tellus risus,",
    "Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque, eleifend nec justo nec, commodo blandit nisl. In suscipit ornare nulla in hendrerit.",
    "Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque, eleifend nec justo nec, commodo blandit nisl. In suscipit ornare nulla in hendrerit.",
    "Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque, eleifend nec justo nec, commodo blandit nisl. In suscipit ornare nulla in hendrerit.",
    "Cras vel mi massa. Quisque nibh risus, imperdiet ut ultricies et, convallis vitae dolor. Nunc erat neque",
    
]
const buffChoiceCount: uint32 = 3

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
                        if (!buffChoice(player)) {
                            player.SendAreaTriggerMessage('Choose your ability first!')
                        } else {
                            arr.pushNumber(player.GetGUIDLow())
                            creature.SetJsonArray('usedBy', arr)
                        }
                    }
                    if (arr.length == player.GetGroup().GetMembersCount()) {
                        creature.DespawnOrUnsummon(2000)
                    }
                } else {
                    if (!buffChoice(player)) {
                        player.SendAreaTriggerMessage('Choose your ability first!')
                    } else {
                        creature.DespawnOrUnsummon(2000)
                    }
                }
            }
        })
    })

    events.Player.OnSay((player, type, lang, msg) => {
        if (msg.get().startsWith("#aa")) {
            if (!buffChoice(player)) {
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

function buffChoice(player: TSPlayer): boolean {
    let charItems = player.GetObject<torghastBuffs>("torghastBuffs", new torghastBuffs())
    let spellranks:TSArray<uint32> = []
    let spellDescs:TSArray<string>  = []
    if (charItems.currentChoiceBuffs.length > 0) {
        return false
    } else {
        for (let i = 0; i < buffChoiceCount; i++) {
            let index = Math.floor(Math.random() * spellsTier1.length)
            let c: uint32 = spellsTier1[index]
            charItems.currentChoiceBuffs.push(c)
            spellranks.push(1)
            spellDescs.push(spellsTier1Descriptions[index])
        }
        let arr: TSArray<uint32> = [0, 0, 0]
        let pkt = new spellChoices(arr,spellranks,spellDescs)
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