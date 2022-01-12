import { attemptToCompleteID, questInfo } from "../shared/Messages";

@CharactersTable
class PlayerQuest extends DBTable {
    constructor(playerGUID: uint32) {
        super();
        this.playerGUID = playerGUID;
    }
    @PrimaryKey
    playerGUID: uint32 = 0;
    @Field
    requirementType: int32 = 0;
    @Field
    requirementID: int32 = 0;
    @Field
    requirementCountTotal: int32 = 0;
    @Field
    requirementCountCur: int32 = 0;
    @Field
    reqName: string = "";
    @Field
    reqDescription: string = "";
    @Field
    rewardID: int32 = 0;
    @Field
    rewardCount: int32 = 0;
}

const TABLE_NAME_CUSTOM_QUEST = "playerquest"

export function customQuest(events: TSEventHandlers) {

    events.Player.OnCommand((player, command, found) => {
        if (command.get().startsWith("sidequest")) {
            updateClient(player)
            found.set(true)
        }
    })

    events.Player.OnLogin((player, firstLogin) => {
        let guid = player.GetGUIDLow()
        let rows = LoadRows(PlayerQuest, `playerGUID = ${guid}`)
        let stats = rows.length > 0 ? rows.get(0) : new PlayerQuest(guid);
        if (stats.requirementID == 0) {
            createQuest(player);
        }
        player.SetObject(TABLE_NAME_CUSTOM_QUEST, stats);
        updateClient(player)
    });

    //kill event
    events.Creatures.OnDeath((creature, killer) => {
        if (killer.IsPlayer()) {
            let curQuestInfo = killer.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(killer.GetGUIDLow()))
            if (curQuestInfo.requirementType == 0) {
                if (curQuestInfo.requirementID == creature.GetEntry()) {
                    updateQuestProgress(curQuestInfo, killer.ToPlayer(), 1)
                }
            }
        }
    })

    //loot event
    events.Items.OnTakenAsLoot((item, lootItem, TSLoot, player) => {
        let curQuestInfo = player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()))
        if (curQuestInfo.requirementType == 1) {
            if (curQuestInfo.requirementID == item.GetEntry()) {
                updateQuestProgress(curQuestInfo, player, item.GetCount())
                lootItem.GetCount()
            }
        }
    })

    events.PacketID.OnCustom(attemptToCompleteID, (opcode, message, player) => {
        isQuestFinished(player)
    })
}

function updateQuestProgress(questInfo: PlayerQuest, player: TSPlayer, addValue: number) {
    questInfo.requirementCountCur += addValue;
    updateClient(player)
    questInfo.save()
}

function isQuestFinished(player: TSPlayer) {//add a complete button to the addon
    let curQuestInfo = player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()))
    if (curQuestInfo.requirementCountCur >= curQuestInfo.requirementCountTotal) {
        giveReward(curQuestInfo,player)
        createQuest(player)
    } else {
        player.SendAreaTriggerMessage("You have not finished the quest yet! Get back out there!")
    }
}

function giveReward(questInfo:PlayerQuest, player: TSPlayer) {
    if (questInfo.rewardID == 1) {//means give gold
        player.ModifyMoney(questInfo.rewardCount)
    } else {
        player.AddItem(questInfo.rewardID, questInfo.rewardCount)
    }
}

function createQuest(player: TSPlayer) {
    let curQuestInfo = new PlayerQuest(player.GetGUIDLow());
    let difficulty = Math.floor(player.GetLevel()/5)

    let q = QueryWorld('SELECT * FROM `player_quest_options` WHERE `difficulty` <= ' + difficulty + ' ORDER BY RAND() LIMIT 1')
    while(q.GetRow()) {
        curQuestInfo.requirementType = q.GetInt32(1)
        curQuestInfo.requirementID = q.GetInt32(2)
        curQuestInfo.requirementCountTotal = randValueBetweenNumbers(q.GetUInt8(3),q.GetUInt8(4))
        curQuestInfo.reqName = q.GetString(5)
        curQuestInfo.reqDescription = q.GetString(6)
    }

    q = QueryWorld('SELECT itemID,itemCount FROM `player_quest_reward` WHERE `difficulty` = ' + difficulty + ' ORDER BY RAND() LIMIT 1')
    while(q.GetRow()) {
        curQuestInfo.rewardID = q.GetInt32(0)
        curQuestInfo.rewardCount = q.GetInt32(1)
    }

    player.SetObject(TABLE_NAME_CUSTOM_QUEST, curQuestInfo);
    updateClient(player)
    curQuestInfo.save()
}

function updateClient(player: TSPlayer) {
    let curQuestInfo = player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()))
    let pkt = new questInfo(curQuestInfo.requirementType, curQuestInfo.requirementID, curQuestInfo.requirementCountTotal, curQuestInfo.requirementCountCur, curQuestInfo.reqName, curQuestInfo.reqDescription, curQuestInfo.rewardID, curQuestInfo.rewardCount)
    pkt.write().SendToPlayer(player)
}
function randValueBetweenNumbers(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}
