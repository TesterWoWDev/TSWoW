import { SQL } from "wotlkdata";

addSideQuestRequirement(0,0,1,'Saber Tigers','Find the tigers near the bay of the ancient temple',1,3)
addSideQuestReward(0,1,100000)

function addSideQuestRequirement(diff: number, reqType: number, reqID: number, reqName: string, reqDescription: string, minReqAmount: number, maxReqAmount: number) {
    SQL.Databases.world_dest.write('INSERT INTO `player_quest_options` VALUES(' + diff + ','+ reqType + ','+ reqID + ',"'+ reqName + '","'+ reqDescription + '",'+ minReqAmount + ','+ maxReqAmount + ')')
}
function addSideQuestReward(diff: number, itemID: number, itemCount: number) {
    SQL.Databases.world_dest.write('INSERT INTO `player_quest_reward` VALUES(' + diff + ','+ itemID + ','+ itemCount + ')')
}
