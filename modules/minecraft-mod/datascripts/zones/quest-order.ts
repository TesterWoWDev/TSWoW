import { SQL } from "wotlkdata/sql/SQLFiles";
import { startingQuest01, startingQuest02, startingQuest03, startingQuest04, startingQuest05, startingQuest06, startingQuest07 } from "./(Zone-0)Walk-of-Heroes/starting-zone-quests";

 SQL.quest_template_addon.add(startingQuest01.ID).NextQuestID.set(startingQuest02.ID).PrevQuestID.set(0).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest02.ID).NextQuestID.set(startingQuest03.ID).PrevQuestID.set(startingQuest01.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest03.ID).NextQuestID.set(startingQuest04.ID).PrevQuestID.set(startingQuest02.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest04.ID).NextQuestID.set(startingQuest05.ID).PrevQuestID.set(startingQuest03.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest05.ID).NextQuestID.set(startingQuest06.ID).PrevQuestID.set(startingQuest04.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest06.ID).NextQuestID.set(startingQuest07.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
