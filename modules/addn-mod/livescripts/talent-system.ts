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

const TABLE_NAME_TALENTS = "custom_character_talents"
class PlayerTalents {
    talentPoints: uint32 = 0;
    talentTest: TSDictionary<uint32, TSArray<uint32>> = CreateDictionary<uint32, TSArray<uint32>>({//spellID->type,curRank
    });
    constructor() {
        this.talentPoints = 0;
        this.talentTest = CreateDictionary<uint32, TSArray<uint32>>({});
    }
}

export function talentSystem(events: TSEvents) {
    events.Player.OnLogin((player, login) => {
        let newTalents = new PlayerTalents()
        newTalents.talentPoints = lookupCurrentTalentPoints(player)
        newTalents.talentTest = getCurrentTalentsDB(player)
        player.SetObject(TABLE_NAME_TALENTS, newTalents);
        applyTalents(player, newTalents)
    })

    events.CustomPacketID.OnReceive(attemptTalentActionPacketID, (opcode, packet, player) => {
        let msg = new attemptTalentActionPacket(1, 1);
        msg.read(packet);
        if (msg.action != 0 && msg.action != 1) return //invalid action ID  (0 = ulearn, 1 = learn)

        let playerTalentObject = player.GetObject<PlayerTalents>(TABLE_NAME_TALENTS, new PlayerTalents())

        if (msg.action == 0) {//unlearn
            playerTalentObject.talentPoints++;
            removeFromTalentDB(player, talents[player.GetClass()][msg.talentID][0])
        }
        else if (msg.action == 1) {//learn
            if (playerTalentObject.talentPoints > 0) {
                //player.talentPoints--;
                let rank = 1
                addToTalentDB(player, talents[player.GetClass()][msg.talentID][0], rank)
            }
            else {
                player.SendAreaTriggerMessage("You don't have any talent points to spend!");
            }
        }
        sendAllPlayerTalents(player, playerTalentObject)
    })
}

function sendAllPlayerTalents(player: TSPlayer, playerTalentObject: PlayerTalents) {
    let pkt = new talentInformation(1, 1, []);
    pkt.talentPoints = playerTalentObject.talentPoints;

    let i = player.GetClass()
    for (let j = 0; j < talents[i].length; j++) {
        let spellInfo = talents[i][j]
        let curRank = playerTalentObject.talentTest[spellInfo[0]][1]
        pkt.info.push([j, spellInfo[1], spellInfo[2], spellInfo[0], curRank, spellInfo[4]]);
    }
    pkt.size = pkt.info.length;

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

function applyTalents(player: TSPlayer, playerTalentObject: PlayerTalents) {
    playerTalentObject.talentTest.forEach((key, val) => {
        if (val[0] == 0)
            player.LearnSpell(key)
        if (val[1] == 1)
            player.AddAura(key, player).SetStackAmount(val[1])
    })
}

function getCurrentTalentsDB(player: TSPlayer): TSDictionary<number, TSArray<number>> {
    let dict = CreateDictionary<number, TSArray<number>>({});
    let q = QueryCharacters(`SELECT spell, type, rank,  FROM custom_character_talents WHERE guid = ${player.GetGUIDLow()}`)
    while (q.GetRow()) {
        dict[q.GetUInt32(0)] = [q.GetUInt32(1), q.GetUInt32(2)]
    }
    return dict;
}