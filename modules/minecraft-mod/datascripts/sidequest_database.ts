
import { std } from "wow/wotlk";
import {
    Boar01,
    FightingAdventurer01,
} from "./zones/(Zone-0)Walk-of-Heroes/starting-zone-creatures";
import { BoarSkin, ImmortalFlower } from "./zones/item-manifest";

addSideQuestRequirement(
    0,
    0,
    FightingAdventurer01.ID,
    "Seasoned Adventurer",
    "Find these forbidable foes near the Walk of Heroes.",
    3,
    5
);
addSideQuestRequirement(
    0,
    0,
    Boar01.ID,
    "Wild Boar",
    "Find these animals near the Walk of Heroes.",
    7,
    10
);
addSideQuestRequirement(
    0,
    1,
    BoarSkin.ID,
    "Boar Skin",
    "Find these skins on animals near the Walk of Heroes.",
    3,
    5
);

addSideQuestReward(0, ImmortalFlower.ID, 5);

function addSideQuestRequirement(
    diff: number,
    reqType: number,
    reqID: number,
    reqName: string,
    reqDescription: string,
    minReqAmount: number,
    maxReqAmount: number
) {
    std.SQL.Databases.world_dest.write(
        "INSERT INTO `player_quest_options` VALUES(" +
        diff +
        "," +
        reqType +
        "," +
        reqID +
        ',"' +
        reqName +
        '","' +
        reqDescription +
        '",' +
        minReqAmount +
        "," +
        maxReqAmount +
        ")"
    );
}
function addSideQuestReward(diff: number, itemID: number, itemCount: number) {
    std.SQL.Databases.world_dest.write(
        "INSERT INTO `player_quest_reward` VALUES(" +
        diff +
        "," +
        itemID +
        "," +
        itemCount +
        ")"
    );
}
