import { attemptTalentActionPacket, attemptTalentActionPacketID, talentInformation } from "../shared/Messages";

let talents: TSArray<TSArray<TSArray<uint32>>> = [///spellID,row,col,type(0 learn, 1 customAura),maxRank
    [],//none
    [//warr
        [311, 1, 1, 3, 5],//spellID,row,col,type,maxRank
        [311, 1, 1, 3, 1],
    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [],//none
    [//druid

    ],
]

export function talentSystem(events: TSEvents) {
    events.CustomPacketID.OnReceive(attemptTalentActionPacketID, (opcode, packet, player) => {
        let msg = new attemptTalentActionPacket(1, 1);
        msg.read(packet);
        if (msg.action != 0 && msg.action != 1)
            return //invalid action ID  (0 = ulearn, 1 = learn)

        if (msg.action == 0) {//unlearn
            //player.talentPoints++;
            removeFromTalentDB(player, talents[player.GetClass()][msg.talentID][0])
        }
        else if (msg.action == 1) {//learn
            if (lookupCurrentTalentPoints(player) > 0) {
                //player.talentPoints--;
                let rank = 1
                addToTalentDB(player, talents[player.GetClass()][msg.talentID][0], rank)
            }
            else {
                player.SendAreaTriggerMessage("You don't have any talent points to spend!");
            }
        }

        sendAllPlayerTalents(player)
    })
}

function sendAllPlayerTalents(player: TSPlayer) {
    let pkt = new talentInformation(1, 1, []);
    let i = player.GetClass()
    for (let j = 0; j < talents[i].length; j++) {
        let spellInfo = talents[i][j]
        let curRank = lookupCurrentRankOfSpell(spellInfo[0], player)
        pkt.info.push([j, spellInfo[1], spellInfo[2], spellInfo[0], curRank, spellInfo[4]]);
    }
    pkt.size = pkt.info.length;
    pkt.talentPoints = lookupCurrentTalentPoints(player);
}
function lookupCurrentRankOfSpell(spellID: number, player: TSPlayer): uint32 {
    let q = QueryCharacters(`SELECT rank FROM custom_character_talents WHERE guid = ${player.GetGUIDLow()} AND spell = ${spellID}`)
    while (q.GetRow()) {
        return q.GetUInt32(0)
    }
    return 0
}

function lookupCurrentTalentPoints(player: TSPlayer) {
    let talentPoints = player.GetLevel() - 10;
    let q = QueryCharacters(`SELECT spell FROM custom_character_talents WHERE guid = ${player.GetGUIDLow()}`)
    while (q.GetRow()) {
        talentPoints--
    }
    if (talentPoints < 0) {
        talentPoints = 0
    }
    return talentPoints
}

function addToTalentDB(player: TSPlayer, spellID: number, rank: uint32) {
    QueryCharacters(`REPLACE INTO custom_character_talents (guid, spell, rank) VALUES (${player.GetGUIDLow()}, ${spellID}, ${rank})`)
}

function removeFromTalentDB(player: TSPlayer, spellID: number) {
    QueryCharacters(`DELETE FROM custom_character_talents WHERE guid = ${player.GetGUIDLow()} AND spell = ${spellID}`)
}
