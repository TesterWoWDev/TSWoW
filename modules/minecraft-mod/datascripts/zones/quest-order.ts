import { SQL } from "wotlkdata/sql/SQLFiles";
import { startingQuest01, startingQuest02, startingQuest03, startingQuest04, startingQuest05, startingQuest06, startingQuest07 } from "./(Zone-0)Walk-of-Heroes/starting-zone-quests";
import { DeathknightQuest01 } from "./(Zone-5)Mall/ClassQuests/DeathKnightClassQuest";
import { DruidQuest01 } from "./(Zone-5)Mall/ClassQuests/DruidClassQuest";
import { HunterQuest01 } from "./(Zone-5)Mall/ClassQuests/HunterClassQuest";
import { MageQuest01 } from "./(Zone-5)Mall/ClassQuests/MageClassQuest";
import { PaladinQuest01 } from "./(Zone-5)Mall/ClassQuests/PaladinClassQuest";
import { PriestQuest01 } from "./(Zone-5)Mall/ClassQuests/PriestClassQuest";
import { RogueQuest01 } from "./(Zone-5)Mall/ClassQuests/RogueClassQuest";
import { ShamanQuest01 } from "./(Zone-5)Mall/ClassQuests/ShamanClassQuest";
import { WarlockQuest01 } from "./(Zone-5)Mall/ClassQuests/WarlockClassQuest";
import { WarriorQuest01 } from "./(Zone-5)Mall/ClassQuests/WarriorClassQuest";

 SQL.quest_template_addon.add(startingQuest01.ID).NextQuestID.set(startingQuest02.ID).PrevQuestID.set(0).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest02.ID).NextQuestID.set(startingQuest03.ID).PrevQuestID.set(startingQuest01.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest03.ID).NextQuestID.set(startingQuest04.ID).PrevQuestID.set(startingQuest02.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest04.ID).NextQuestID.set(startingQuest05.ID).PrevQuestID.set(startingQuest03.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest05.ID).NextQuestID.set(startingQuest06.ID).PrevQuestID.set(startingQuest04.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(startingQuest06.ID).NextQuestID.set(startingQuest07.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)



 // Class Quest Zone
 SQL.quest_template_addon.add(DeathknightQuest01.ID).NextQuestID.set(DeathknightQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(DruidQuest01.ID).NextQuestID.set(DruidQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(HunterQuest01.ID).NextQuestID.set(HunterQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(MageQuest01.ID).NextQuestID.set(MageQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(PaladinQuest01.ID).NextQuestID.set(PaladinQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(PriestQuest01.ID).NextQuestID.set(PriestQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(RogueQuest01.ID).NextQuestID.set(RogueQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(ShamanQuest01.ID).NextQuestID.set(ShamanQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(WarlockQuest01.ID).NextQuestID.set(WarlockQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
 SQL.quest_template_addon.add(WarriorQuest01.ID).NextQuestID.set(WarriorQuest01.ID).PrevQuestID.set(startingQuest05.ID).ExclusiveGroup.set(0)
