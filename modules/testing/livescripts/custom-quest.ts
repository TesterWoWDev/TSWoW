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

    events.Creatures.OnDeath((creature, killer) => {//handle creature update
        if (killer.IsPlayer()) {
            let curQuestInfo = killer.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(killer.GetGUIDLow()))
            if (curQuestInfo.requirementType == 0) {
                if (curQuestInfo.requirementID == creature.GetEntry()) {
                    updateQuestProgress(killer.ToPlayer(), 1)
                }
            }
        }
    })

    events.Player.OnSave((player) => {
        player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow())).save()
    })

    //this event may allow for requiring looting of a specific itemID for quests, not just creatures
    events.Items.OnTakenAsLoot((item, lootItem, TSLoot, player) => {
        let curQuestInfo = player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()))
        if (curQuestInfo.requirementType == 1) {
            if (curQuestInfo.requirementID == item.GetEntry()) {
                updateQuestProgress(player.ToPlayer(), 1)
            }
        }
    })

    events.PacketID.OnCustom(attemptToCompleteID, (opcode, message, player) => {
        isQuestFinished(player)
    })
}

function updateQuestProgress(player: TSPlayer, addValue: number) {
    player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow())).requirementCountCur += addValue;
    updateClient(player)
}

function isQuestFinished(player: TSPlayer) {//add a complete button to the addon
    let curQuestInfo = player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()))
    if (curQuestInfo.requirementCountCur >= curQuestInfo.requirementCountTotal) {
        giveReward(player)
    } else {
        player.SendAreaTriggerMessage("You have not finished the quest yet! Get back out there!")
    }
}

function giveReward(player: TSPlayer) {
    let curQuestInfo = player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()))
    if (curQuestInfo.rewardID == 1) {//means give gold
        player.ModifyMoney(curQuestInfo.rewardCount)
    } else {
        player.AddItem(curQuestInfo.rewardID, curQuestInfo.rewardCount)
    }
    player.SetObject(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()));
    updateClient(player)
}

function createQuest(player: TSPlayer) {
    let curQuestInfo = new PlayerQuest(player.GetGUIDLow());
    let nearbyMobs = player.GetCreaturesInRange(500, 0, 1, 0);
    if (!(nearbyMobs.length > 1)) {
        player.SendAreaTriggerMessage("No nearby creatures for quests! Try again later!");
        return
    }
    //later replace with a table of reqs + descriptions? [difficulty,reqTypeID,reqID,reqName,reqDescription,minReqAmount,MaxReqAmount]
    //(Min+Max for total possible)
    //difficulty is for tabulating against rewards
    //also possibly check player level for it?
    curQuestInfo.requirementType = 0
    curQuestInfo.requirementID = nearbyMobs[getRandomValue(nearbyMobs.length)].GetEntry()
    curQuestInfo.requirementCountTotal = 5 + getRandomValue(10)
    curQuestInfo.reqName = "Name"
    curQuestInfo.reqDescription = "Descript"
    //later replace with a table of rewards, [difficulty rating,itemID,itemCount]
    curQuestInfo.rewardID = 1
    curQuestInfo.rewardCount = 1


    player.SetObject(TABLE_NAME_CUSTOM_QUEST, curQuestInfo);
    updateClient(player)
}

function getRandomValue(max: number): number {
    return Math.floor(Math.random() * max);
}

function updateClient(player: TSPlayer) {
    let curQuestInfo = player.GetObject<PlayerQuest>(TABLE_NAME_CUSTOM_QUEST, new PlayerQuest(player.GetGUIDLow()))
    let pkt = new questInfo(curQuestInfo.requirementType, curQuestInfo.requirementID, curQuestInfo.requirementCountTotal, curQuestInfo.requirementCountCur, curQuestInfo.reqName, curQuestInfo.reqDescription, curQuestInfo.rewardID, curQuestInfo.rewardCount)
    pkt.write().SendToPlayer(player)
}
